/**
 * FENÊTRE DE CONTACT
 * S'ouvre uniquement au clic sur un élément [data-contact-open].
 * Envoi par Web3Forms, sans quitter la page. Textes anglais : assets/js/i18n-en.js.
 *
 * Clé d'accès Web3Forms : elle est prévue pour être visible dans le code du site.
 */
(function () {
  const WEB3FORMS_KEY = '1df796bc-6cbb-42b4-9c31-e421a005c786';
  const ENDPOINT = 'https://api.web3forms.com/submit';
  const EMAIL = 'akins.anretar@yahoo.com';

  const T = Object.assign({
    title: 'Me contacter',
    intro: 'Une opportunité, une question ou simplement envie d\'échanger ? Écrivez-moi.',
    close: 'Fermer la fenêtre de contact',
    name: 'Nom et prénom',
    company: 'Entreprise',
    email: 'E-mail',
    subject: 'Objet',
    message: 'Message',
    optional: 'facultatif',
    required: 'obligatoire',
    subjectPlaceholder: 'Choisir un objet',
    subjects: ['Alternance', 'Emploi', 'Échange professionnel', 'Autre'],
    send: 'Envoyer le message',
    sending: 'Envoi en cours…',
    errName: 'Indiquez votre nom et votre prénom.',
    errEmail: 'Indiquez une adresse e-mail valide, par exemple nom@entreprise.fr.',
    errMessage: 'Écrivez votre message.',
    privacy: 'Vos informations servent uniquement à vous répondre et ne sont pas conservées au-delà.',
    success: 'Merci, votre message a bien été envoyé. Je vous réponds rapidement.',
    closeSuccess: 'Fermer',
    errorBefore: 'Votre message n\'a pas pu être envoyé. Réessayez dans un instant ou écrivez-moi directement à ',
    errorAfter: '.',
    mailSubject: 'Message depuis le portfolio'
  }, (window.I18N_EN || {}).contact);

  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled])';
  let overlay, panel, form, feedback, sendBtn, opener = null, sent = false;

  const field = (id, label, control, note, hint) => `
    <div class="contact-field">
      <label for="contact-${id}">${label}${note ? ` <span class="contact-note">(${note})</span>` : ''}</label>
      ${control}
      ${hint ? `<p class="contact-error" id="contact-${id}-error" hidden></p>` : ''}
    </div>`;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'contact-overlay';
    overlay.hidden = true;
    overlay.innerHTML = `
      <div class="contact-panel" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <button type="button" class="contact-close" aria-label="${T.close}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <div class="contact-content">
          <h2 id="contact-title" class="contact-title">${T.title}</h2>
          <p class="contact-intro">${T.intro}</p>
          <form novalidate>
            <div class="contact-grid">
              ${field('name', T.name, `<input id="contact-name" name="name" type="text" autocomplete="name" required aria-describedby="contact-name-error">`, T.required, true)}
              ${field('company', T.company, `<input id="contact-company" name="company" type="text" autocomplete="organization">`, T.optional)}
            </div>
            <div class="contact-grid">
              ${field('email', T.email, `<input id="contact-email" name="email" type="email" autocomplete="email" required aria-describedby="contact-email-error">`, T.required, true)}
              ${field('subject', T.subject, `<select id="contact-subject" name="objet">
                <option value="">${T.subjectPlaceholder}</option>
                ${T.subjects.map((s) => `<option value="${s}">${s}</option>`).join('')}
              </select>`, T.optional)}
            </div>
            ${field('message', T.message, `<textarea id="contact-message" name="message" rows="5" required aria-describedby="contact-message-error"></textarea>`, T.required, true)}
            <input type="checkbox" name="botcheck" class="contact-botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">
            <div class="contact-feedback" role="alert" hidden></div>
            <button type="submit" class="contact-send">${T.send}</button>
            <p class="contact-privacy">${T.privacy}</p>
          </form>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    panel = overlay.querySelector('.contact-panel');
    form = overlay.querySelector('form');
    feedback = overlay.querySelector('.contact-feedback');
    sendBtn = overlay.querySelector('.contact-send');

    overlay.querySelector('.contact-close').addEventListener('click', close);
    // Un clic commencé dans la fenêtre et relâché dehors (sélection de texte) ne ferme pas
    overlay.addEventListener('mousedown', (e) => { overlay.dataset.down = e.target === overlay ? '1' : ''; });
    overlay.addEventListener('click', (e) => { if (e.target === overlay && overlay.dataset.down === '1') close(); });
    overlay.addEventListener('keydown', onKey);
    form.addEventListener('submit', onSubmit);
    form.addEventListener('input', (e) => { if (e.target.getAttribute('aria-invalid') === 'true') validateField(e.target); });
  }

  function onKey(e) {
    if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
    if (e.key !== 'Tab') return;
    const items = Array.from(panel.querySelectorAll(FOCUSABLE)).filter((n) => n.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
  }

  function open(trigger) {
    if (!overlay) build();
    if (sent) resetAfterSuccess();
    opener = trigger;
    overlay.hidden = false;
    document.documentElement.classList.add('contact-locked');
    requestAnimationFrame(() => overlay.classList.add('is-open'));
    form.elements.name.focus({ preventScroll: true });
  }

  function close() {
    if (!overlay || overlay.hidden) return;
    overlay.classList.remove('is-open');
    overlay.hidden = true;
    document.documentElement.classList.remove('contact-locked');
    if (opener) opener.focus({ preventScroll: true });
    opener = null;
  }

  function validateField(input) {
    let message = '';
    const value = input.value.trim();
    if (input.name === 'name' && !value) message = T.errName;
    if (input.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) message = T.errEmail;
    if (input.name === 'message' && !value) message = T.errMessage;
    const error = document.getElementById(`${input.id}-error`);
    if (error) { error.textContent = message; error.hidden = !message; }
    if (message) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    return !message;
  }

  function showError() {
    feedback.innerHTML = `${T.errorBefore}<a href="mailto:${EMAIL}?subject=${encodeURIComponent(T.mailSubject)}">${EMAIL}</a>${T.errorAfter}`;
    feedback.hidden = false;
  }

  function showSuccess() {
    sent = true;
    const content = panel.querySelector('.contact-content');
    const done = document.createElement('div');
    done.className = 'contact-done';
    done.innerHTML = `
      <p class="contact-success" tabindex="-1" role="status">${T.success}</p>
      <button type="button" class="contact-send">${T.closeSuccess}</button>`;
    form.hidden = true;
    panel.querySelector('.contact-intro').hidden = true;
    content.appendChild(done);
    done.querySelector('button').addEventListener('click', close);
    done.querySelector('.contact-success').focus();
  }

  function resetAfterSuccess() {
    sent = false;
    form.reset();
    form.hidden = false;
    panel.querySelector('.contact-intro').hidden = false;
    const done = panel.querySelector('.contact-done');
    if (done) done.remove();
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (sendBtn.disabled) return;
    feedback.hidden = true;

    const required = [form.elements.name, form.elements.email, form.elements.message];
    const invalid = required.filter((input) => !validateField(input));
    if (invalid.length) { invalid[0].focus(); return; }

    const data = Object.fromEntries(new FormData(form).entries());
    sendBtn.disabled = true;
    sendBtn.textContent = T.sending;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      // Sans vraie clé, on affiche la solution de secours au lieu de faire croire à un envoi
      if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'VOTRE_CLE') throw new Error('Clé Web3Forms manquante');
      const label = data.objet ? `${data.objet} · ` : '';
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.assign({}, data, {
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio · ${label}${data.name.trim()}`,
          from_name: 'Portfolio Akins Anretar'
        })),
        signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Envoi refusé');
      showSuccess();
    } catch (err) {
      console.warn('Formulaire de contact :', err.message);
      showError();
      sendBtn.focus();
    } finally {
      clearTimeout(timer);
      sendBtn.disabled = false;
      sendBtn.textContent = T.send;
    }
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-contact-open]');
    if (!trigger) return;
    e.preventDefault();
    open(trigger);
  });
})();
