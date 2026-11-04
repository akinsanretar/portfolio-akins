/**
 * PORTFOLIO AKINS ANRETAR - JAVASCRIPT LOGIC
 * Style Matthew Editorial Brutalist Luxe
 * Visuel optionnel par projet via le champ `image` (aucun bloc affiché si absent)
 */

const projectsData = [
  {
    id: "ouigo",
    trainCover: true,
    title: "Pilotage du Projet d'Assistant Virtuel IA",
    role: "Chargé de la relation client",
    company: "OUIGO (SNCF Voyageurs)",
    period: "Sept. 2025 – Aujourd'hui",
    contract: "Alternance (Master)",
    location: "Saint-Denis (93) · Sur site",
    sector: "Transport Ferroviaire Grande Vitesse & Low-cost",
    summary: "Chargé de la relation client, je pilote l'assistant virtuel IA de OUIGO : feuille de route, suivi de la performance et accompagnement des équipes.",
    star: {
      situation: "Chez OUIGO (des millions de billets vendus chaque année), le service relation client fait face à de très forts volumes de requêtes à faible valeur ajoutée (recherches d'horaires, règles bagages, billets, perturbations).",
      tache: "Cadrer, piloter et optimiser le déploiement continu d'un Assistant Virtuel (Chatbot IA) pour apporter des réponses immédiates 24/7, fluidifier le parcours voyageur et accroître le taux de selfcare.",
      action: [
        "Définition de la vision stratégique et de la feuille de route fonctionnelle de l'assistant virtuel, en co-construction avec le prestataire.",
        "Suivi de la satisfaction et de la performance de l'assistant, et pilotage des plans d'amélioration continue.",
        "Accompagnement des téléconseillers dans l'adoption de l'IA au quotidien.",
        "Évaluation de la qualité des réponses par e-mail et des appels téléphoniques, avec des recommandations d'amélioration.",
        "Coordination de la relation avec les centres de relation client.",
        "Suivi des points de contact pour identifier les motifs récurrents de réclamations clients."
      ],
      resultats: [
        "Plus de 50 000 questions posées à l'assistant virtuel, disponible 24h/24 pour les voyageurs.",
        "Feuille de route fonctionnelle partagée avec le prestataire et suivie dans le temps.",
        "Motifs récurrents de réclamations identifiés pour orienter les améliorations."
      ]
    },
    deliverables: [
      "Arborescence & Scénarios conversationnels de l'Assistant Virtuel",
      "Tableau de bord de suivi des KPIs de selfcare et satisfaction",
      "Recommandations ergonomiques et parcours client"
    ],
    skills: ["Gestion de Projet IA", "Relation Client Digitale", "Méthode Agile", "Design Conversationnel", "Analyse de la Donnée Voyageur"]
  },
  {
    id: "sncf-optim",
    image: "assets/images/logos/logo_optim_services.png",
    video: {
      id: "wwgQ7EqXUgg",
      title: "Journée annuelle des assistant(e)s de direction du Groupe SNCF – Activité physique et bien-être"
    },
    title: "Chatbot IA, PowerApps & Séminaire National",
    role: "Assistant chef de projets (CSP Déplacements Professionnels)",
    company: "SNCF Optim'Services",
    period: "Sept. 2024 – Sept. 2025 (1 an 1 mois)",
    contract: "Alternance (BUT GEA)",
    location: "Saint-Denis (93) · Sur site",
    sector: "Centre de Services Partagés · Groupe SNCF",
    summary: "Supervision du projet ChatBot IA, refonte du portail SharePoint, kits d'adoption pour la suite PowerApps et organisation clé en main d'un séminaire d'envergure nationale pour les assistants de direction.",
    star: {
      situation: "Le CSP Déplacements gère 3 pôles vitaux (déplacements internationaux, titres tiers, parc automobile) pour des dizaines de milliers d'agents du Groupe SNCF, avec un fort besoin de digitalisation.",
      tache: "Superviser le projet Chatbot IA interne, moderniser les outils collaboratifs, concevoir les plans d'accompagnement au changement et fédérer l'ensemble de la filière d'assistance de direction.",
      action: [
        "Supervision du Chatbot IA : cadrage, tests, déploiement et accompagnement des équipes aux bonnes pratiques d'adoption.",
        "Refonte ergonomique du portail SharePoint CSP pour simplifier le parcours des agents du Groupe.",
        "Conception de plans de communication, supports visuels et tutoriels pas-à-pas pour le lancement de plusieurs solutions Microsoft PowerApps.",
        "Animation d'ateliers numériques immersifs pour les collaborateurs du CSP.",
        "Organisation complète et animation sur scène d'un séminaire national rassemblant les assistantes et assistants de direction du Groupe SNCF."
      ],
      resultats: [
        "Chatbot IA interne du CSP mis en place, avec un suivi de sa performance.",
        "Tutoriels et plans de communication livrés pour le déploiement des applications Power Apps.",
        "Séminaire national organisé de bout en bout pour 100 participants, avec l'animation d'une séquence sur l'activité physique et le bien-être."
      ]
    },
    deliverables: [
      "Guide des bonnes pratiques et kit d'adoption ChatBot IA",
      "Nouveau portail SharePoint CSP Déplacements Professionnels",
      "Tutoriels vidéos et infographies pédagogiques PowerApps",
      "Scénographie, conducteur et animation du Séminaire National"
    ],
    skills: ["Supervision de Projet IA", "Microsoft PowerApps & SharePoint", "Conduite du Changement", "Organisation Événementielle", "Prise de parole en public"]
  },
  {
    id: "region-idf",
    image: "assets/images/logos/logo_region_idf.png",
    title: "Instruction de Dossiers & JOP Paris 2024",
    role: "Stagiaire auprès du service des sports",
    company: "Région Île-de-France (Conseil Régional)",
    period: "Mars – Juil. 2024 (4 mois)",
    contract: "Stage de BUT",
    location: "Saint-Ouen (93) · Siège de Région",
    sector: "Politiques Publiques Territoriales & Écosystème Olympique",
    summary: "Instruction des dossiers de subventions sportives du Conseil Régional, interface avec les mairies franciliennes, coordination de la Semaine Olympique et Paralympique et relations athlètes de haut niveau.",
    star: {
      situation: "À l'approche des Jeux Olympiques et Paralympiques de Paris 2024, la Région Île-de-France gérait des enjeux majeurs de mobilisation territoriale et de rayonnement sportif.",
      tache: "Instruire avec rigueur les dossiers de délibération soumis aux élus, coordonner les parties prenantes institutionnelles et participer aux temps forts régionaux de l'olympisme.",
      action: [
        "Instruction technique et financière des dossiers de subvention présentés au Conseil Régional.",
        "Interface quotidienne avec les cabinets de maires et directions des sports des communes franciliennes.",
        "Contact de plus d'une centaine d'ambassadeurs du sport pour le lancement de la Semaine Olympique et Paralympique, le 3 avril 2024 au stade nautique olympique de Vaires-sur-Marne.",
        "Organisation de ce lancement sur site : accompagnement des sportifs présents et coordination de l'installation des activités.",
        "Préparation des réunions avec le mouvement sportif francilien et suivi des projets sportifs du Vice-Président.",
        "Création de supports de communication pour les réseaux sociaux du Vice-Président chargé des Sports.",
        "Gestion de la billetterie sportive de la Région et organisation des déplacements (inaugurations, assemblées générales, événements)."
      ],
      resultats: [
        "Dossiers de subvention instruits dans le respect des calendriers administratifs.",
        "Suivi régulier des dossiers et des projets avec les mairies et les partenaires sportifs franciliens.",
        "Participation au lancement de la Semaine Olympique et Paralympique, le 3 avril 2024 à Vaires-sur-Marne."
      ]
    },
    deliverables: [
      "Fiches de synthèse et notes d'arbitrage pour les commissions régionales",
      "Reporting du suivi des projets sportifs territoriaux",
      "Coordination terrain des délégations et athlètes"
    ],
    skills: ["Gouvernance Publique", "Instruction Budgétaire & Administrative", "Relations Institutionnelles", "Coordination d'Événements", "Écosystème Sportif"]
  },
  {
    id: "agorex",
    image: "assets/images/LogoAgorexExpertise.jpg",
    title: "Gestion Financière, Rapprochements & Bilan",
    role: "Stagiaire comptable",
    company: "Agorex Expertise",
    period: "Avril – Mai 2023",
    contract: "Stage de BUT",
    location: "Nogent-sur-Marne (94)",
    sector: "Cabinet d'expertise comptable · plus de 400 clients",
    summary: "Tenue comptable, révision, analyse de la cohérence financière et participation aux travaux préparatoires de bilans d'entreprises.",
    star: {
      situation: "Au sein d'un cabinet d'expertise comptable, la rigueur absolue dans le traitement des flux et des comptes annuels est indispensable pour la conformité et le pilotage des dirigeants.",
      tache: "Assurer la tenue des dossiers clients, effectuer les contrôles de conformité et sécuriser la préparation des bilans.",
      action: [
        "Saisie des factures de vente et d'achat, lettrage des comptes et rapprochements bancaires avec les relevés des clients.",
        "Contrôle de dossiers clients, notamment la vérification des taux de TVA appliqués.",
        "Cadrage du chiffre d'affaires et de la TVA.",
        "Analyse des écarts de trésorerie et reporting financier.",
        "Participation aux écritures d'inventaire de clôture."
      ],
      resultats: [
        "Dossiers clients mis à jour dans le respect des échéances légales.",
        "Bases solides en comptabilité générale, en TVA et en analyse de trésorerie."
      ]
    },
    deliverables: [
      "États de rapprochements bancaires certifiés",
      "Dossiers de révision préparatoires aux bilans",
      "Tableaux d'analyse de trésorerie"
    ],
    skills: ["Comptabilité Générale", "Analyse Financière", "Rapprochements Bancaires", "Rigueur Analytique", "Contrôle Budgétaire"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  setupModalListeners();
  setupCopyEmail();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

let projectModalOpener = null;

// Ouvre la fiche détaillée d'une mission
window.openProjectModal = function (projectId) {
  const proj = projectsData.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("project-modal-content");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <!-- Modal Header -->
    <div class="p-6 sm:p-8 border-b border-gray-200 bg-white">
      <div class="flex items-center gap-2 mb-2 flex-wrap">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-black text-white">${proj.period}</span>
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">${proj.contract}</span>
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">${proj.location}</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1 font-display tracking-tight">${proj.title}</h2>
      <p class="text-gray-700 font-semibold text-base">${proj.role} · <span class="text-gray-900">${proj.company}</span></p>
      <p class="text-gray-400 text-xs mt-1">${proj.sector}</p>
    </div>

    <!-- Modal Content -->
    <div class="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto bg-gray-50">
      
      ${proj.image ? `
      <div class="h-40 rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-6">
        <img src="${proj.image}" alt="${proj.company}" class="max-w-full max-h-full object-contain">
      </div>` : ""}

      ${proj.trainCover ? `
      <!-- Couverture animée -->
      <div class="train-cover train-cover--modal">
        <div class="train-cover-photo">
          <img src="assets/images/ouigo/train_ouigo.webp" alt="TGV OUIGO bleu à deux étages roulant dans la campagne">
        </div>
        <div class="train-cover-speed" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="train-cover-shade" aria-hidden="true"></div>
        <div class="train-cover-logos">
          <img src="assets/images/ouigo/logo_ouigo.png" alt="OUIGO" class="train-cover-ouigo">
          <span class="train-cover-sep" aria-hidden="true"></span>
          <img src="assets/images/ouigo/logo_sncf_voyageurs.webp" alt="SNCF Voyageurs" class="train-cover-sncf">
        </div>
        <div class="train-cover-caption">
          <span class="train-cover-kicker">Relation client · Assistant virtuel IA</span>
          <span class="train-cover-title">Selfcare voyageur 24/7</span>
        </div>
      </div>` : ""}

      ${proj.video ? `
      <!-- Vidéo -->
      <figure class="rounded-2xl overflow-hidden bg-white border border-gray-200">
        <div class="relative w-full aspect-video bg-black">
          <iframe class="absolute inset-0 w-full h-full" loading="lazy"
            src="https://www.youtube-nocookie.com/embed/${proj.video.id}?rel=0"
            title="${proj.video.title}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <figcaption class="px-4 py-3 text-xs text-gray-500 flex items-center gap-2">
          <i data-lucide="play-circle" class="w-4 h-4 text-gray-400 shrink-0"></i>
          ${proj.video.title}
        </figcaption>
      </figure>` : ""}

      <!-- Summary Box -->
      <div class="p-4 rounded-xl bg-white border border-gray-200">
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Résumé de la mission</h4>
        <p class="text-sm text-gray-800 leading-relaxed">${proj.summary}</p>
      </div>

      <!-- La mission en détail : contexte, objectif, actions, résultats -->
      <div class="space-y-4">
        <h4 class="text-xs font-bold text-gray-900 uppercase tracking-wider">LA MISSION EN DÉTAIL</h4>

        <!-- Situation -->
        <div class="p-4 rounded-xl bg-white border border-gray-200">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="star-tag bg-gray-100 text-gray-900"><i data-lucide="compass" class="w-3.5 h-3.5"></i></span>
            <h5 class="text-sm font-bold text-gray-900">Le contexte</h5>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">${proj.star.situation}</p>
        </div>

        <!-- Tâche -->
        <div class="p-4 rounded-xl bg-white border border-gray-200">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="star-tag bg-gray-100 text-gray-900"><i data-lucide="target" class="w-3.5 h-3.5"></i></span>
            <h5 class="text-sm font-bold text-gray-900">Mon objectif</h5>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">${proj.star.tache}</p>
        </div>

        <!-- Actions -->
        <div class="p-4 rounded-xl bg-white border border-gray-200">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="star-tag bg-gray-100 text-gray-900"><i data-lucide="list-checks" class="w-3.5 h-3.5"></i></span>
            <h5 class="text-sm font-bold text-gray-900">Ce que j'ai réalisé</h5>
          </div>
          <ul class="space-y-2 mt-2">
            ${proj.star.action.map(act => `
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <i data-lucide="check" class="w-4 h-4 text-black shrink-0 mt-0.5"></i>
                <span>${act}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Résultats -->
        <div class="p-4 rounded-xl bg-gray-900 text-white border border-gray-800">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="star-tag bg-white text-gray-900"><i data-lucide="trending-up" class="w-3.5 h-3.5"></i></span>
            <h5 class="text-sm font-bold text-white">Les résultats</h5>
          </div>
          <ul class="space-y-2 mt-2">
            ${proj.star.resultats.map(res => `
              <li class="flex items-start gap-2 text-sm text-gray-200">
                <i data-lucide="trending-up" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${res}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>

      <!-- Livrables Majeurs -->
      <div>
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">LIVRABLES MAJEURS</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${proj.deliverables.map(d => `
            <div class="p-2.5 rounded-lg bg-white border border-gray-200 text-xs text-gray-800 flex items-center gap-2">
              <i data-lucide="file-text" class="w-3.5 h-3.5 text-gray-400 shrink-0"></i>
              <span>${d}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Skills Used -->
      <div>
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">COMPÉTENCES MOBILISÉES</h4>
        <div class="flex flex-wrap gap-1.5">
          ${proj.skills.map(s => `
            <span class="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-xs font-semibold">
              ${s}
            </span>
          `).join("")}
        </div>
      </div>

    </div>

    <!-- Modal Footer -->
    <div class="p-4 sm:p-5 border-t border-gray-200 bg-white flex items-center justify-between flex-wrap gap-2">
      <span class="serif text-base text-gray-600">« Toute victoire s’élabore »</span>
      <div class="flex gap-2">
        <a href="mailto:akins.anretar@yahoo.com?subject=Contact suite à votre portfolio - ${encodeURIComponent(proj.title)}" class="px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-gray-800 transition flex items-center gap-1.5">
          <i data-lucide="mail" class="w-3.5 h-3.5"></i>
          <span>Échanger sur ce projet</span>
        </a>
        <button onclick="closeProjectModal()" class="px-4 py-2.5 rounded-full border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-100 transition">
          Fermer
        </button>
      </div>
    </div>
  `;

  projectModalOpener = document.activeElement;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  const closeBtn = document.getElementById("project-modal-close");
  if (closeBtn) closeBtn.focus();

  const cover = modalBody.querySelector(".train-cover");
  if (cover && window.trainCover) window.trainCover.launch(cover);

  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.closeProjectModal = function () {
  const modal = document.getElementById("project-modal");
  if (modal) {
    // Coupe une éventuelle vidéo en cours de lecture
    const body = document.getElementById("project-modal-content");
    if (body) body.innerHTML = "";
    if (modal.classList.contains("hidden")) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (projectModalOpener) projectModalOpener.focus();
    projectModalOpener = null;
  }
};

function setupModalListeners() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });
}

function setupCopyEmail() {
  const copyBtn = document.getElementById("btn-copy-email");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const email = "akins.anretar@yahoo.com";
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email copié : " + email);
    }).catch(() => {
      showToast("Email : " + email);
    });
  });
}

function showToast(msg) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-black text-white text-xs font-semibold shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-10 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> ${msg}`;
  if (window.lucide) window.lucide.createIcons();

  toast.classList.remove("translate-y-10", "opacity-0", "pointer-events-none");
  setTimeout(() => {
    toast.classList.add("translate-y-10", "opacity-0", "pointer-events-none");
  }, 3000);
}

// ✏️ Adapte les titres et chemins à tes fichiers
const MASTER_DOCS = [
  { titre: "Relevé de notes Master 1", fichier: "assets/docs/Relevé_des_Notes_AKINS_ANRETAR_M1.pdf", desc : "Résultats académiques 2025/2026" },
  { titre: "Plaquette formation Modules Master 1", fichier: "assets/docs/Plaquette_Formation_Modules_Master1.pdf", desc : "Programme et modules M1" }
];

document.addEventListener('DOMContentLoaded', () => {
  const $ = id => document.getElementById(id);
  const card = $('master-card'), modal = $('docs-modal'), list = $('docs-list'),
    frame = $('docs-frame'), empty = $('docs-empty'), link = $('docs-open'), closeBtn = $('docs-close');

  if (!card || !modal || !list) {
    console.error('Éléments manquants :', { card, modal, list });
    return;
  }

  const base = 'w-full text-left p-3 rounded-xl border text-sm transition ';
  const off = 'border-gray-200 bg-white hover:border-black', on = 'border-black bg-black text-white';

  MASTER_DOCS.forEach((d, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<button type="button" data-i="${i}" class="${base + off}">
      <span class="block font-semibold">${d.titre}</span>
      <span class="block text-[11px] opacity-70">${d.desc}</span></button>`;
    list.appendChild(li);
  });

  const open = () => { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; closeBtn.focus(); };
  const close = () => {
    if (modal.style.display !== 'flex') return;
    modal.style.display = 'none'; document.body.style.overflow = '';
    card.focus();
    frame.src = 'about:blank'; frame.style.display = 'none'; link.style.display = 'none'; empty.style.display = 'block';
    list.querySelectorAll('button').forEach(b => b.className = base + off);
  };

  card.addEventListener('click', open);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  list.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const d = MASTER_DOCS[+b.dataset.i];
    list.querySelectorAll('button').forEach(x => x.className = base + (x === b ? on : off));
    empty.style.display = 'none'; frame.style.display = 'block'; link.style.display = 'block';
    frame.src = link.href = d.fichier;
  });
});
