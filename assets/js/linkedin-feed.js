/**
 * FIL D'ACTUALITÉ LINKEDIN
 *
 * Cartes statiques : les intégrations LinkedIn affichaient une bannière de cookies
 * à la place des posts. Chaque carte renvoie vers le post original.
 *
 * ✏️ Pour ajouter un post : sur LinkedIn, ouvre le post → « … » → « Copier le lien du post »,
 * puis ajoute une entrée ci-dessous (le plus récent en premier), avec une photo
 * dans assets/images/linkedin/ (environ 800 px de large).
 */
const LINKEDIN_POSTS = [
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7516022702487302146/",
    date: "Octobre 2026",
    titre: "L'IA dans la relation client",
    texte: "À la Maison des Centraliens, restitution de l'étude Smart Tribune sur l'impact de l'IA dans la relation client. À retenir : la gouvernance de l'IA doit s'inscrire dans la stratégie globale de l'entreprise.",
    image: "assets/images/linkedin/post_conference_ia.jpg",
    alt: "Akins Anretar en échange lors de la restitution de l'étude Smart Tribune"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7480992320528560128/",
    date: "Juillet 2026",
    titre: "Le déploiement de l'assistant virtuel OUIGO",
    texte: "Je participe à toutes les étapes du projet d'assistant virtuel de OUIGO : identification des besoins clients, phases de tests et mise en production, aux côtés de notre partenaire Smart Tribune.",
    image: "assets/images/ouigo/train_ouigo.webp",
    alt: "TGV OUIGO bleu à deux étages"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7376869337187639296/",
    date: "Septembre 2025",
    titre: "Je rejoins OUIGO",
    texte: "Après mon alternance chez SNCF Optim'services, je rejoins OUIGO (SNCF Voyageurs) comme chargé de la relation client.",
    image: "assets/images/linkedin/post_arrivee_ouigo.jpg",
    alt: "Rame OUIGO à quai en gare"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7376705857847345152/",
    date: "Septembre 2025",
    titre: "Entrée en Master à l'ISM-IAE",
    texte: "Après trois années de BUT GEA, j'intègre le Master Management Stratégique et Changement de l'ISM-IAE (Université Paris-Saclay).",
    image: "assets/images/linkedin/post_master_ism_iae.jpg",
    alt: "Logos de l'UVSQ (Université Paris-Saclay) et de l'ISM-IAE",
    logo: true
  }
];

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/akins-anretar/recent-activity/all/";

(function () {
  function postCard(p) {
    return `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="linkedin-slide linkedin-post group">
        <span class="linkedin-post-media${p.logo ? ' linkedin-post-media--logo' : ''}">
          <img src="${p.image}" alt="${p.alt}" loading="lazy" decoding="async">
        </span>
        <span class="linkedin-post-body">
          <span class="linkedin-post-meta">
            <img src="assets/images/img_PRO.jpg" alt="" class="linkedin-post-avatar" loading="lazy">
            <span><strong>Akins Anretar</strong><br>${p.date}</span>
          </span>
          <span class="linkedin-post-title">${p.titre}</span>
          <span class="linkedin-post-text">${p.texte}</span>
          <span class="linkedin-post-link">Lire sur LinkedIn <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i></span>
        </span>
      </a>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('linkedin-track');
    if (!track) return;

    track.innerHTML = LINKEDIN_POSTS.map(postCard).join('') + `
      <a href="${LINKEDIN_PROFILE}" target="_blank" rel="noopener noreferrer" class="linkedin-slide linkedin-more group">
        <span class="w-14 h-14 rounded-2xl bg-[#0A66C2] flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
          <i data-lucide="linkedin" class="w-7 h-7 text-white"></i>
        </span>
        <span class="text-lg font-bold text-black mb-1">Toute mon activité</span>
        <span class="text-sm text-gray-600 mb-6 max-w-[220px]">Posts, partages et recommandations sur mon profil LinkedIn.</span>
        <span class="px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">Voir sur LinkedIn</span>
      </a>`;

    if (window.lucide) window.lucide.createIcons();

    // Flèches de défilement
    const scrollBy = (dir) => {
      const slide = track.querySelector('.linkedin-slide');
      const step = slide ? slide.getBoundingClientRect().width + 24 : 360;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    document.querySelectorAll('[data-linkedin-nav]').forEach((btn) => {
      btn.addEventListener('click', () => scrollBy(Number(btn.dataset.linkedinNav)));
    });
  });
})();
