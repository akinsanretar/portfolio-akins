"""
Génère en.html (version anglaise) à partir de index.html.

    python tools/build_en.py

À relancer après chaque modification de index.html : tout texte français ajouté
doit aussi être ajouté dans TEXTS ou RAW ci-dessous. Le script signale les textes
qu'il n'a pas trouvés, pour repérer ce qui a changé.
Les textes des scripts (fiches de mission, centres d'intérêt, LinkedIn…) sont dans
assets/js/i18n-en.js.
"""
import io
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = 'https://akinsanretar.github.io/portfolio-akins/'

# Remplacements bruts (balises ou ordre des mots différents), appliqués en premier
RAW = [
    ('<html lang="fr" class="scroll-smooth">', '<html lang="en" class="scroll-smooth">'),
    ('<meta property="og:locale" content="fr_FR">',
     '<meta property="og:locale" content="en_GB">\n  <meta property="og:locale:alternate" content="fr_FR">'),
    ('<meta property="og:url" content="%s">' % SITE, '<meta property="og:url" content="%sen.html">' % SITE),
    ('<link rel="canonical" href="%s">' % SITE, '<link rel="canonical" href="%sen.html">' % SITE),
    ('"jobTitle": "Chargé de la relation client"', '"jobTitle": "Customer Relations Officer"'),
    ('"description": "Chargé de la relation client chez OUIGO, en charge du pilotage de l\'assistant virtuel."',
     '"description": "Customer Relations Officer at OUIGO, managing the virtual assistant."'),
    ('"knowsLanguage": ["fr", "en"],', '"knowsLanguage": ["fr", "en"],\n    "url": "%sen.html",' % SITE),
    # Sélecteur de langue
    ('<a href="en.html" hreflang="en" lang="en"', '<a href="./" hreflang="fr" lang="fr"'),
    ('title="Read this portfolio in English" aria-label="English version">EN</a>',
     'title="Lire ce portfolio en français" aria-label="Version française">FR</a>'),
    # Scripts : textes anglais chargés avant les autres
    ('<script src="assets/js/train-cover.js', '<script src="assets/js/i18n-en.js?v=VERSION"></script>\n  <script src="assets/js/train-cover.js'),
    # Titres avec mise en forme
    ('Mes 4 expériences <em class="serif">clés.</em>', 'My 4 key <em class="serif">experiences.</em>'),
    ('Projets <em class="serif">universitaires.</em>', 'University <em class="serif">projects.</em>'),
    ('Méthodes &amp; <em class="serif">compétences.</em>', 'Methods &amp; <em class="serif">skills.</em>'),
    ('Formations &amp; <em class="serif">diplômes.</em>', 'Education &amp; <em class="serif">degrees.</em>'),
    ('Appréciations &amp; <em class="serif">recommandations.</em>', 'Feedback &amp; <em class="serif">recommendations.</em>'),
    ('Mes dernières publications <em class="serif">LinkedIn.</em>', 'My latest <em class="serif">LinkedIn posts.</em>'),
    ('Centres <em class="serif">d\'intérêt.</em>', 'Personal <em class="serif">interests.</em>'),
    ('Prêt à collaborer sur vos <em class="serif">projets stratégiques</em>&nbsp;?',
     'Ready to work together on your <em class="serif">strategic projects</em>?'),
    ('<p class="footer-motto">Toute victoire<br><em>s\'élabore.</em></p>',
     '<p class="footer-motto">Every victory<br><em>is built.</em></p>'),
    ('Changement</strong> à l\'<strong', 'Changement</strong> at <strong'),
    # Paragraphe « Mon parcours »
    ('            Mon parcours m’a permis de faire mes preuves dans deux environnements complémentaires. Au sein du groupe SNCF, chez\n            <strong class="text-black">SNCF Optim’services</strong> puis <strong class="text-black">OUIGO</strong>, j’ai\n            contribué au pilotage de projets d’IA conversationnelle et à leur adoption par les équipes, dans des\n            organisations exigeantes, complexes et en constante évolution. Au <strong class="text-black">Conseil régional\n            d’Île-de-France</strong>, j’ai travaillé avec les mairies, les partenaires sportifs et des athlètes de haut\n            niveau, en participant au déploiement de la Semaine Olympique et Paralympique dans le cadre de\n            <strong class="text-black">Paris 2024</strong>.\n',
     '            My background has allowed me to prove myself in two complementary environments. Within the SNCF Group, at\n            <strong class="text-black">SNCF Optim’services</strong> and then <strong class="text-black">OUIGO</strong>, I have\n            helped manage conversational AI projects and their adoption by teams, in demanding, complex and constantly\n            changing organisations. At the <strong class="text-black">Île-de-France Regional Council</strong>, I worked\n            with town halls, sports partners and elite athletes, taking part in the roll-out of Olympic and Paralympic\n            Week as part of <strong class="text-black">Paris 2024</strong>.\n'),
    # Liens e-mail
    ('subject=Prise de contact via le portfolio', 'subject=Contact via your portfolio'),
]

# Textes (espaces souples) et attributs
TEXTS = {
    # En-tête et métadonnées
    "Akins ANRETAR — Chargé de la relation client chez OUIGO": "Akins ANRETAR — Customer Relations Officer at OUIGO",
    "Portfolio d'Akins ANRETAR, chargé de la relation client chez OUIGO (SNCF Voyageurs), en charge du pilotage de l'assistant virtuel. Master Management Stratégique (IAE Paris-Saclay).":
        "Portfolio of Akins ANRETAR, Customer Relations Officer at OUIGO (SNCF Voyageurs), managing the virtual assistant. Master's in Strategic Management (IAE Paris-Saclay).",
    "Pilotage de projets IA et conduite du changement chez OUIGO et SNCF Optim'services. Master Management Stratégique & Changement (ISM-IAE Paris-Saclay).":
        "AI project management and change management at OUIGO and SNCF Optim'services. Master's in Strategic Management & Change (ISM-IAE Paris-Saclay).",
    "Akins ANRETAR, chargé de la relation client chez OUIGO": "Akins ANRETAR, Customer Relations Officer at OUIGO",
    "Pilotage de l'assistant virtuel chez OUIGO, conduite du changement. Master Management Stratégique & Changement (ISM-IAE Paris-Saclay).":
        "Managing the virtual assistant at OUIGO, change management. Master's in Strategic Management & Change (ISM-IAE Paris-Saclay).",

    # Barre de navigation
    "Navigation principale": "Main navigation",
    "Profil": "Profile",
    "Expériences": "Experience",
    "Projets": "Projects",
    "Compétences": "Skills",
    "Formations": "Education",
    "Recommandations": "Recommendations",
    "Intérêts": "Interests",
    "Ouvrir mon CV (PDF) pour l'imprimer ou le télécharger": "Open my CV (PDF, in French) to print or download it",
    "Ouvrir mon CV en PDF": "Open my CV as a PDF (in French)",
    "ME CONTACTER": "CONTACT ME",

    # Hero
    "Poste & Spécialité": "Role & Focus",
    "Chargé de la relation client · Pilotage de l'assistant virtuel": "Customer Relations Officer · Virtual assistant management",
    "Alternant chez OUIGO · SNCF Voyageurs": "Work-study at OUIGO · SNCF Voyageurs",
    "Pilotage IA · OUIGO": "AI management · OUIGO",
    "« Toute victoire s’élabore »": "« Every victory is built »",
    "— Ma devise": "— My motto",
    "Découvrir": "Explore",

    # À propos
    "Introduction": "Introduction",
    "Piloter le changement par la méthode, l'IA et l'engagement humain.": "Driving change through method, AI and people.",
    "Étudiant en": "A student on the",
    "Master Management Stratégique et Changement": "Master's in Strategic Management and Change",
    ", je mets mon énergie et mes compétences méthodologiques au service de projets de transformation complexes.":
        ", I bring my energy and my methodical skills to complex transformation projects.",
    "Mes maîtres mots :": "My watchwords:",
    "Proactivité, Réactivité et Esprit d'équipe": "Proactivity, Responsiveness and Team spirit",
    ". J'attache une importance capitale à la conduite du changement : une solution technologique n'a de valeur que si elle est adoptée avec enthousiasme par les équipes de terrain.":
        ". I place great importance on change management: a technology solution is only valuable if frontline teams adopt it with enthusiasm.",
    "Gouvernance de Projet": "Project Governance",
    "IA Conversationnelle & Chatbots": "Conversational AI & Chatbots",
    "Conduite du Changement": "Change Management",
    "Prise de Parole en Public": "Public Speaking",
    "Analyse Budgétaire": "Budget Analysis",
    "Akins ANRETAR — Prise de parole et animation de conférence": "Akins ANRETAR — Public speaking and hosting a conference",
    "Prise de parole & animation de conférence": "Public speaking & conference hosting",

    # Expériences
    "Missions Opérationnelles": "Work experience",
    "Cliquez sur une carte pour découvrir le contexte, mes missions et les résultats": "Click a card to see the context, my tasks and the results",
    "Sept. 2025 – Aujourd'hui": "Sept. 2025 – Present",
    "Alternance (Master)": "Work-study (Master's)",
    "Chargé de la relation client": "Customer Relations Officer",
    "TGV OUIGO bleu à deux étages roulant dans la campagne": "Blue double-decker OUIGO TGV running through the countryside",
    "Relation client · Assistant virtuel IA": "Customer relations · AI virtual assistant",
    "Selfcare voyageur 24/7": "24/7 passenger self-service",
    "Aujourd’hui, chez OUIGO, je pilote l’assistant virtuel IA, de ses premiers pas jusqu’à son déploiement dans le tunnel d’achat, sur le web et l’application.":
        "Today, at OUIGO, I manage the AI virtual assistant, from its first steps to its roll-out in the booking journey, on the website and the app.",
    "Depuis septembre 2025, je pilote l’assistant virtuel IA de OUIGO, de ses premiers pas jusqu’à son déploiement dans le tunnel d’achat, sur le web et l’application. Un projet qui accompagne l’entrée de la relation client OUIGO dans l’ère de l’IA.":
        "Since September 2025, I have been managing OUIGO's AI virtual assistant, from its first steps to its roll-out in the booking journey, on the website and the app. A project that is bringing OUIGO customer relations into the age of AI.",
    "Pilotage de l'assistant virtuel : feuille de route avec le prestataire, suivi de la satisfaction et de la performance, accompagnement des téléconseillers et évaluation de la qualité des réponses.":
        "Managing the virtual assistant: roadmap with the vendor, satisfaction and performance monitoring, support for customer service agents and quality assessment of answers.",
    "Plus de 50 000 questions posées à l'assistant virtuel, disponible 24h/24 pour les voyageurs.":
        "More than 50,000 questions asked to the virtual assistant, available 24/7 for passengers.",
    "Voir le détail de la mission": "See mission details",
    "Alternance (1 an 1 mois)": "Work-study (1 year 1 month)",
    "Assistant chef de projets": "Assistant Project Manager",
    "SNCF Optim'services (CSP Déplacements) · Saint-Denis": "SNCF Optim'services (Business Travel) · Saint-Denis",
    "Akins Anretar au micro lors d'un événement SNCF sur l'innovation numérique": "Akins Anretar speaking at an SNCF event on digital innovation",
    "Vidéo du séminaire": "Seminar video",
    "Supervision du Chatbot IA interne, refonte UX SharePoint, kits de déploiement PowerApps, ateliers digitaux et organisation clé en main du séminaire national des assistants de direction.":
        "Supervising the internal AI chatbot, SharePoint UX redesign, PowerApps roll-out kits, digital workshops and end-to-end organisation of the national seminar for executive assistants.",
    "Séminaire national de 100 participants organisé de bout en bout · chatbot IA interne mis en place.":
        "National seminar for 100 participants organised end to end · internal AI chatbot rolled out.",
    "Mars – Juil. 2024": "March – July 2024",
    "Stage (4 mois)": "Internship (4 months)",
    "Stagiaire auprès du service des sports": "Intern, Sports Department",
    "Région Île-de-France (Service des Sports) · Saint-Ouen": "Île-de-France Region (Sports Department) · Saint-Ouen",
    "Séance dans l'hémicycle du Conseil régional d'Île-de-France sur l'héritage sportif des Jeux":
        "Session in the Île-de-France Regional Council chamber on the sporting legacy of the Games",
    "Région Île-de-France": "Île-de-France Region",
    "Instruction des dossiers de subventions pour le Conseil Régional, interface avec les mairies, déploiement de la Semaine Olympique et Paralympique et gestion des relations athlètes de haut niveau.":
        "Reviewing grant applications for the Regional Council, liaising with town halls, rolling out Olympic and Paralympic Week and managing relations with elite athletes.",
    "Plus d'une centaine d'ambassadeurs du sport contactés pour le lancement de la Semaine Olympique et Paralympique 2024.":
        "More than a hundred sports ambassadors contacted for the launch of Olympic and Paralympic Week 2024.",
    "Avril – Mai 2023": "April – May 2023",
    "Stage (BUT GEA)": "Internship (Bachelor's)",
    "Stagiaire comptable": "Accounting Intern",
    "Tenue comptable, lettrage des comptes tiers, rapprochements bancaires, analyse de trésorerie et travaux préparatoires de clôture de bilans annuels.":
        "Bookkeeping, account reconciliation, bank reconciliations, cash analysis and preparation of year-end accounts.",
    "Dossiers clients tenus à jour et bases solides en comptabilité générale et en TVA.":
        "Client files kept up to date and a solid grounding in general accounting and VAT.",

    # Projets universitaires
    "BUT GEA · IUT de Meaux": "Bachelor's in Business Management (BUT GEA) · IUT de Meaux",
    "Un événement organisé en équipe et deux projets de création d'entreprise, du concept au business plan.":
        "One event organised as a team and two business creation projects, from concept to business plan.",
    "9 février 2024": "9 February 2024",
    "SAÉ · Projet d'équipe": "Team project",
    "Développer un réseau d'organisations pour accroître la notoriété du département GEA et ouvrir aux étudiants des pistes d'orientation et de carrière. Le projet s'est concrétisé par une":
        "Building a network of organisations to raise the profile of the GEA department and open up study and career paths for students. The project led to a",
    "conférence de l'orientation": "career guidance conference",
    "à l'IUT de Meaux, où d'anciens étudiants sont venus raconter leur parcours.": "at IUT de Meaux, where former students came to share their journeys.",
    "Mon rôle": "My role",
    "Responsable du pôle démarchage et partenariats. J'ai sollicité le cabinet du Maire de Meaux, la Mission locale, Pays de Meaux Habitat et le Club des Entrepreneurs du Val d'Europe pour soutenir l'événement.":
        "Head of outreach and partnerships. I approached the office of the Mayor of Meaux, the Mission locale, Pays de Meaux Habitat and the Club des Entrepreneurs du Val d'Europe to support the event.",
    "anciens étudiants intervenants": "former students as speakers",
    "de soutien obtenu auprès de Pays de Meaux Habitat": "in support secured from Pays de Meaux Habitat",
    "Affiche de la conférence de l'orientation du 9 février 2024": "Poster for the career guidance conference of 9 February 2024",
    "L'équipe du projet sur scène lors de la conférence": "The project team on stage during the conference",
    "L'équipe organisatrice de GEA Relations Entreprises": "The GEA Relations Entreprises organising team",
    "Écran de l'application Athletic Vibes": "Athletic Vibes app screen",
    "Projet de création d'entreprise · BUT GEA 2e année": "Business creation project · Bachelor's year 2",
    "Concevoir une application et un site web pour faciliter l'accès au sport en Île-de-France : catalogue d'activités, partenariats envisagés avec des structures sportives, matchmaking entre pratiquants, espace organisateur et carte interactive.":
        "Designing an app and a website to make sport more accessible in Île-de-France: activity catalogue, planned partnerships with sports organisations, matchmaking between players, an organiser area and an interactive map.",
    "Livrables": "Deliverables",
    "Business plan, étude de marché, maquette de l'application, soutenance devant un jury.": "Business plan, market research, app mock-up, presentation to a panel.",
    "Expérience utilisateur": "User experience",
    "Logo du food truck Meaux'Bil Food": "Meaux'Bil Food truck logo",
    "Projet de création d'entreprise · SAÉ · BUT GEA 1re année": "Business creation project · Bachelor's year 1",
    "Concevoir un food truck pour les étudiants de l'Université Gustave Eiffel sans accès à la cantine : menu complet à petit prix, produits de producteurs de Seine-et-Marne.":
        "Designing a food truck for Université Gustave Eiffel students without access to a canteen: a full, low-cost menu made with produce from Seine-et-Marne farmers.",
    "Business plan, étude de marché, prévisionnel financier, soutenance.": "Business plan, market research, financial forecast, presentation.",
    "Circuit court": "Short supply chain",
    "Innovation sociale": "Social innovation",

    # Compétences
    "Pilotage & Gouvernance": "Management & Governance",
    "Donner un cap, coordonner les acteurs et mesurer les résultats.": "Setting the direction, coordinating stakeholders and measuring results.",
    "Vision stratégique & feuille de route fonctionnelle": "Strategic vision & functional roadmap",
    "Co-construction et suivi d'un prestataire": "Co-design with and follow-up of a vendor",
    "Suivi de la performance & plans d'amélioration continue": "Performance monitoring & continuous improvement plans",
    "Coordination des centres de relation client": "Coordination of customer contact centres",
    "Organisation d'événements de bout en bout (100 participants)": "End-to-end event organisation (100 participants)",
    "Outils Digitaux & IA": "Digital Tools & AI",
    "Faire de l'IA et des outils Microsoft des leviers concrets au quotidien.": "Turning AI and Microsoft tools into practical, everyday levers.",
    "IA conversationnelle : assistant virtuel & chatbots": "Conversational AI: virtual assistant & chatbots",
    "Évaluation de la qualité des réponses (e-mails & appels)": "Quality assessment of answers (emails & calls)",
    "Power BI : tableaux de bord & indicateurs": "Power BI: dashboards & KPIs",
    "Automatisation de processus & Pack Microsoft Office": "Process automation & Microsoft Office",
    "Changement & Leadership": "Change & Leadership",
    "Embarquer les équipes et donner envie d'adopter le changement.": "Bringing teams on board and making them want to embrace change.",
    "Prise de parole en public (Keynotes)": "Public speaking (keynotes)",
    "Animation d'ateliers collaboratifs": "Facilitating collaborative workshops",
    "Plans de communication & Tutoriels": "Communication plans & tutorials",
    "Analyse financière & Suivi budgétaire": "Financial analysis & budget tracking",

    # Formations
    "Parcours Académique": "Academic background",
    "Consulter les documents du Master (relevé de notes, plaquette)": "View the Master's documents (transcript, brochure)",
    "2025 – 2027 · Bac +5": "2025 – 2027 · Master's degree",
    "ISM-IAE · Université Paris-Saclay (UVSQ)": "ISM-IAE · Université Paris-Saclay (UVSQ)",
    "Diagnostic stratégique, gouvernance des organisations, conduite du changement et management international.":
        "Strategic analysis, organisational governance, change management and international management.",
    "Logo ISM-IAE — Université Paris-Saclay & UVSQ": "ISM-IAE logo — Université Paris-Saclay & UVSQ",
    "Consulter les documents du Master": "View the Master's documents",
    "2022 – 2025 · Bac +3": "2022 – 2025 · Bachelor's degree",
    "BUT Gestion des Entreprises & Administrations": "Bachelor's in Business & Public Administration Management (BUT GEA)",
    "Parcours GEMA · Université Gustave Eiffel": "Business Management & Entrepreneurship track · Université Gustave Eiffel",
    "Gestion budgétaire, bilan comptable, droit des affaires, marketing et pilotage d'activités opérationnelles.":
        "Budget management, financial statements, business law, marketing and management of operations.",
    "Diplôme BUT GEA — Akins ANRETAR": "BUT GEA diploma — Akins ANRETAR",
    "Consulter le diplôme officiel (PDF)": "View the official diploma (PDF, in French)",
    "2022 · Mention Très Bien": "2022 · Highest honours",
    "Baccalauréat STMG": "French baccalaureate (STMG, management & business)",
    "Obtenu avec la Mention Très Bien et mis à l'honneur lors de la cérémonie officielle des bacheliers noiséens.":
        "Awarded with highest honours and celebrated at the official ceremony for Noisy-le-Grand graduates.",
    "Diplôme Baccalauréat STMG": "STMG baccalaureate diploma",
    "Une cérémonie pour les bacheliers noiséens": "A ceremony for Noisy-le-Grand graduates",
    "Précédent": "Previous",
    "Suivant": "Next",
    "Consulter le diplôme (Bac STMG)": "View the diploma (baccalaureate, in French)",
    "Certification · Mars 2025": "Certification · March 2025",
    "Compréhension orale": "Listening",
    "Compréhension écrite": "Reading",

    # Recommandations
    "Retours & Témoignages": "Feedback & testimonials",
    "Extraits de mes lettres de recommandation et fiches d'appréciation, classés par entreprise et par année. Chaque document original est consultable en PDF.":
        "Extracts from my recommendation letters and internship evaluations, by company and year, translated from French. Each original document (in French) is available as a PDF.",
    "Documents SNCF Optim'services": "SNCF Optim'services documents",
    "Lettre de recommandation": "Recommendation letter",
    "Julie VIDAL · Directrice du CSP Déplacements Professionnels": "Julie VIDAL · Director, Business Travel Shared Services Centre",
    "Agrandir : Lettre de recommandation": "Enlarge: Recommendation letter",
    "Lettre de recommandation SNCF Optim'services": "SNCF Optim'services recommendation letter",
    "« Sérieux, appliqué et curieux, Akins s'est bien intégré à l'équipe. […] Son sens de l'initiative et sa capacité à gérer plusieurs dossiers en parallèle sont particulièrement appréciés. »":
        "« Serious, diligent and curious, Akins has fitted in well with the team. […] His initiative and his ability to handle several files at once are particularly appreciated. »",
    "Directrice du CSP Déplacements Professionnels": "Director, Business Travel Shared Services Centre",
    "Alternance 2024 – 2025 · PDF": "Work-study 2024 – 2025 · PDF (in French)",
    "Documents Région Île-de-France": "Île-de-France Region documents",
    "10 juillet 2024 · Patrick KARAM, Vice-Président": "10 July 2024 · Patrick KARAM, Vice-President",
    "Lettre de recommandation Région Île-de-France": "Île-de-France Region recommendation letter",
    "Fiche d'appréciation de stage": "Internship evaluation",
    "29 mai 2024 · Bureau des Représentations": "29 May 2024 · Representation Office",
    "Agrandir : Fiche d'appréciation de stage": "Enlarge: Internship evaluation",
    "Fiche d'appréciation de stage Région Île-de-France": "Île-de-France Region internship evaluation",
    "« Tout au long de ce stage il a fait preuve d'un professionnalisme et d'une rigueur admirable. […] Akins est un élément de qualité qui […] apportera rapidement une vraie plus-value. »":
        "« Throughout this internship he showed admirable professionalism and rigour. […] Akins is a high-quality team member who […] will quickly bring real added value. »",
    "Vice-Président chargé des Sports et des JOP": "Vice-President for Sport and the Olympic Games",
    "10 juillet 2024 · Patrick KARAM · PDF": "10 July 2024 · Patrick KARAM · PDF (in French)",
    "29 mai 2024 · Bureau des Représentations · PDF": "29 May 2024 · Representation Office · PDF (in French)",
    "Avr. – Mai 2023": "Apr. – May 2023",
    "Documents Agorex Expertise": "Agorex Expertise documents",
    "17 mai 2023 · Stéphane DUBOIS": "17 May 2023 · Stéphane DUBOIS",
    "Fiche d'appréciation de stage Agorex Expertise": "Agorex Expertise internship evaluation",
    "« Très investi et sérieux. Bonne intégration au sein de l'équipe. »": "« Very committed and serious. Fitted in well with the team. »",
    "Responsable juridique & administrative": "Legal & Administrative Manager",
    "17 mai 2023 · Stage BUT GEA · PDF": "17 May 2023 · Bachelor's internship · PDF (in French)",
    "Plus de recommandations": "More recommendations",
    "Retrouvez l'ensemble de mes recommandations vérifiées sur mon profil LinkedIn.": "See all my verified recommendations on my LinkedIn profile.",
    "Voir sur LinkedIn": "See on LinkedIn",

    # LinkedIn
    "Fil d'actualité": "News feed",
    "Retours d'expérience, projets et événements que je partage avec mon réseau.": "Experiences, projects and events I share with my network.",
    "Publications précédentes": "Previous posts",
    "Publications suivantes": "Next posts",
    "Publications LinkedIn": "LinkedIn posts",

    # Centres d'intérêt
    "En dehors du travail": "Outside work",
    "« L'homme de l'avenir vaudra ce que vaudront ses loisirs. »": "« The man of the future will be worth what his leisure is worth. »",
    "Découvrir l'univers Sport": "Explore the Sport world",
    "Photos : sport": "Photos: sport",
    "Akins en match de football, ballon au pied": "Akins playing a football match, ball at his feet",
    "Akins sur le terrain, maillot rouge numéro 5": "Akins on the pitch, red shirt number 5",
    "Akins au bord du terrain de football": "Akins at the side of the football pitch",
    "Match de football sur terrain synthétique": "Football match on an artificial pitch",
    "Action de jeu lors d'un match de football": "Action during a football match",
    "Akins à l'entraînement en salle de musculation": "Akins training at the gym",
    "Footballeur depuis l'âge de 6 ans. Le sport m'a forgé une discipline, une détermination et un esprit de compétiteur que je retrouve dans chaque projet.":
        "A footballer since the age of 6. Sport has given me the discipline, determination and competitive spirit I bring to every project.",
    "Découvrir l'univers": "Explore",
    "Découvrir l'univers Voyage": "Explore the Travel world",
    "Photos : voyage": "Photos: travel",
    "Akins face à la mer, sous un palmier": "Akins facing the sea, under a palm tree",
    "Vue panoramique sur la côte de la Martinique": "Panoramic view of the Martinique coast",
    "Mer turquoise vue à travers la végétation": "Turquoise sea seen through the vegetation",
    "Akins en randonnée dans la forêt tropicale": "Akins hiking in the rainforest",
    "Sentier de randonnée en forêt tropicale": "Hiking trail in the rainforest",
    "La grande roue du London Eye au bord de la Tamise": "The London Eye by the Thames",
    "Arrivée au stade avec des amis": "Arriving at the stadium with friends",
    "Architecture moderne sous un ciel bleu": "Modern architecture under a blue sky",
    "Voyage": "Travel",
    "Découvrir de nouveaux paysages et d'autres cultures. Originaire de la Martinique, c'est là que je me ressource le plus souvent.":
        "Discovering new landscapes and other cultures. I come from Martinique, and that is where I most often go to recharge.",
    "Découvrir l'univers Lecture": "Explore the Reading world",
    "Photo : lecture": "Photo: reading",
    "Le roman « Rompre » de Yann Moix": "The novel « Rompre » by Yann Moix",
    "Lecture": "Reading",
    "Lire pour m'évader, prendre du recul et remettre en question ma vision du monde.": "Reading to escape, step back and question how I see the world.",

    # Contact
    "Vous recherchez un profil proactif pour piloter vos projets ? Je suis à votre écoute pour échanger.":
        "Looking for a proactive profile to manage your projects? I would be glad to talk.",
    "Copier l'adresse": "Copy address",
    "Saint-Denis · Île-de-France · Mobilité Internationale": "Saint-Denis · Île-de-France · Open to international mobility",

    # Pied de page
    "Ma devise": "My motto",
    "Travaillons ensemble": "Let's work together",
    "Chargé de la relation client chez OUIGO, en charge du pilotage de l'assistant virtuel. Master Management Stratégique et Changement à l'ISM-IAE Paris-Saclay.":
        "Customer Relations Officer at OUIGO, managing the virtual assistant. Master's in Strategic Management and Change at ISM-IAE Paris-Saclay.",
    "Plan du site": "Site map",
    "Imprimer le CV": "Print my CV (in French)",
    "© 2026 Akins Anretar. Tous droits réservés.": "© 2026 Akins Anretar. All rights reserved.",
    "Revenir en haut de la page": "Back to top of the page",
    "Haut de page": "Back to top",

    # Fenêtres
    "Détail de la mission": "Mission details",
    "Fermer la fiche": "Close",
    "Choisissez le document à consulter": "Choose a document to view",
    "Fermer": "Close",
    "Sélectionnez un document dans la liste.": "Select a document from the list.",
    "Aperçu du document": "Document preview",
    "Ouvrir dans un nouvel onglet ↗": "Open in a new tab ↗",
}

ATTRS = ('alt', 'aria-label', 'title', 'content', 'data-title', 'data-meta')


def soft(text):
    """Motif tolérant aux retours à la ligne, aux espaces insécables et aux entités HTML."""
    parts = []
    for ch in text:
        if ch == ' ':
            parts.append(r'(?:\s|&nbsp;)+')
        elif ch == '&':
            parts.append(r'&(?:amp;)?')
        else:
            parts.append(re.escape(ch))
    return ''.join(parts).replace(r'(?:\s|&nbsp;)+(?:\s|&nbsp;)+', r'(?:\s|&nbsp;)+')


def main():
    version = sys.argv[1] if len(sys.argv) > 1 else ''
    # Fins de ligne unifiées : Git peut écrire index.html en CRLF sous Windows
    s = io.open(ROOT / 'index.html', encoding='utf-8', newline='').read().replace('\r\n', '\n')
    missing = []

    for fr, en in RAW:
        en = en.replace('VERSION', version)
        if fr not in s:
            missing.append(fr)
        s = s.replace(fr, en)

    # Les textes les plus longs d'abord, pour ne pas casser une phrase avec un mot court
    for fr in sorted(TEXTS, key=len, reverse=True):
        en = TEXTS[fr].replace('&', '&amp;') if '&' in TEXTS[fr] and '&amp;' not in TEXTS[fr] else TEXTS[fr]
        p = soft(fr)
        n = 0
        # Contenu d'une balise : >  texte  <
        s, k = re.subn(r'(>\s*)' + p + r'(\s*<)', lambda m: m.group(1) + en + m.group(2), s)
        n += k
        # Valeur d'attribut
        for a in ATTRS:
            s, k = re.subn(r'(\b%s=")' % re.escape(a) + p + '"', lambda m: m.group(1) + en.replace('"', '&quot;') + '"', s)
            n += k
        # Phrase longue au milieu d'un texte (autour de <strong>)
        if n == 0 and len(fr) > 12:
            s, k = re.subn(p, lambda m: en, s)
            n += k
        if n == 0:
            missing.append(fr)

    io.open(ROOT / 'en.html', 'w', encoding='utf-8', newline='').write(s)
    if missing:
        print('Textes non trouvés (%d) :' % len(missing))
        for m in missing:
            print('  -', m[:110])
    else:
        print('en.html généré, tous les textes ont été traduits.')


if __name__ == '__main__':
    main()
