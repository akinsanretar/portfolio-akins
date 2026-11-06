/**
 * ENGLISH VERSION — texts used by the scripts on en.html
 * Loaded only by en.html, before the other scripts. Each script falls back to French
 * when a text is missing here.
 */
window.I18N_EN = {
  ui: {
    trainKicker: "Customer relations · AI virtual assistant",
    trainTitle: "24/7 passenger self-service",
    trainAlt: "Blue double-decker OUIGO TGV running through the countryside",
    summary: "Mission summary",
    detail: "THE MISSION IN DETAIL",
    context: "The context",
    goal: "My goal",
    done: "What I did",
    results: "The results",
    deliverables: "KEY DELIVERABLES",
    skills: "SKILLS USED",
    motto: "« Every victory is built »",
    mailSubject: "Contact from your portfolio - ",
    discuss: "Discuss this project",
    close: "Close",
    copied: "Email copied: ",
    email: "Email: "
  },

  contact: {
    title: "Contact me",
    intro: "An opportunity, a question or simply a wish to talk? Write to me.",
    close: "Close the contact window",
    name: "Full name",
    company: "Company",
    email: "Email",
    subject: "Subject",
    message: "Message",
    optional: "optional",
    required: "required",
    subjectPlaceholder: "Choose a subject",
    subjects: ["Work-study", "Job", "Professional discussion", "Other"],
    send: "Send message",
    sending: "Sending…",
    errName: "Please enter your full name.",
    errEmail: "Please enter a valid email address, for example name@company.com.",
    errMessage: "Please write your message.",
    privacy: "Your details are used only to reply to you and are not kept beyond that.",
    success: "Thank you, your message has been sent. I will get back to you soon.",
    closeSuccess: "Close",
    errorBefore: "Your message could not be sent. Please try again in a moment or write to me directly at ",
    errorAfter: ".",
    mailSubject: "Message from your portfolio"
  },

  masterDocs: [
    { titre: "Master's year 1 transcript", fichier: "assets/docs/Relevé_des_Notes_AKINS_ANRETAR_M1.pdf", desc: "Academic results 2025/2026 (in French)" },
    { titre: "Master's year 1 course brochure", fichier: "assets/docs/Plaquette_Formation_Modules_Master1.pdf", desc: "Programme and modules (in French)" }
  ],

  marquee: ['Project governance', 'Conversational AI', 'Change management', 'Public speaking', 'Budget analysis', 'PowerApps'],

  docStack: {
    viewer: "Document preview",
    prev: "Previous document",
    next: "Next document",
    download: "Download",
    show: "Show "
  },

  projects: [
    {
      id: "ouigo",
      trainCover: true,
      title: "Managing the AI Virtual Assistant Project",
      role: "Customer Relations Officer",
      company: "OUIGO (SNCF Voyageurs)",
      period: "Sept. 2025 – Present",
      contract: "Work-study (Master's)",
      location: "Saint-Denis (93) · On site",
      sector: "Low-cost high-speed rail",
      summary: "As Customer Relations Officer, I manage OUIGO's AI virtual assistant: roadmap, performance monitoring and support for the teams.",
      star: {
        situation: "OUIGO sells millions of tickets every year, and its customer service handles a very high volume of low-value requests (timetables, luggage rules, tickets, disruptions).",
        tache: "Scope, manage and continuously improve an AI virtual assistant (chatbot) that gives passengers instant answers 24/7, smooths their journey and increases self-service.",
        action: [
          "Defining the strategic vision and functional roadmap of the virtual assistant, co-designed with the vendor.",
          "Monitoring the assistant's satisfaction and performance, and managing continuous improvement plans.",
          "Helping customer service agents adopt AI in their daily work.",
          "Assessing the quality of email replies and phone calls, with recommendations for improvement.",
          "Coordinating the relationship with the customer contact centres.",
          "Tracking customer touchpoints to identify recurring causes of complaints."
        ],
        resultats: [
          "More than 50,000 questions asked to the virtual assistant, available 24/7 for passengers.",
          "Functional roadmap shared with the vendor and tracked over time.",
          "Recurring causes of complaints identified to guide improvements."
        ]
      },
      deliverables: [
        "Conversation tree and scenarios for the virtual assistant",
        "Dashboard tracking self-service and satisfaction KPIs",
        "Usability and customer journey recommendations"
      ],
      skills: ["AI Project Management", "Digital Customer Relations", "Agile Methods", "Conversation Design", "Passenger Data Analysis"]
    },
    {
      id: "sncf-optim",
      image: "assets/images/logos/logo_optim_services.png",
      video: {
        id: "wwgQ7EqXUgg",
        title: "SNCF Group annual day for executive assistants – Physical activity and well-being (in French)"
      },
      title: "AI Chatbot, PowerApps & National Seminar",
      role: "Assistant Project Manager (Business Travel Shared Services Centre)",
      company: "SNCF Optim'Services",
      period: "Sept. 2024 – Sept. 2025 (1 year 1 month)",
      contract: "Work-study (Bachelor's)",
      location: "Saint-Denis (93) · On site",
      sector: "Shared Services Centre · SNCF Group",
      summary: "Supervision of the AI chatbot project, redesign of the SharePoint portal, adoption kits for PowerApps and end-to-end organisation of a national seminar for executive assistants.",
      star: {
        situation: "The Business Travel Shared Services Centre runs three key services (international business travel, domestic business travel, vehicle fleet) for thousands of SNCF Group employees, with a strong need for digitalisation.",
        tache: "Supervise the internal AI chatbot project, modernise collaboration tools, design change management plans and bring together the Group's executive assistants.",
        action: [
          "AI chatbot supervision: scoping, testing, roll-out and coaching the teams on good adoption practices.",
          "Usability redesign of the Shared Services Centre's SharePoint portal to simplify the employee journey.",
          "Communication plans, visuals and step-by-step tutorials for the launch of several Microsoft PowerApps solutions.",
          "Running hands-on digital workshops for the Centre's staff.",
          "Organising and presenting on stage a national seminar for the SNCF Group's executive assistants."
        ],
        resultats: [
          "Internal AI chatbot rolled out at the Shared Services Centre, with performance monitoring.",
          "Tutorials and communication plans delivered for the roll-out of the Power Apps applications.",
          "National seminar organised end to end for 100 participants, including a session I led on physical activity and well-being."
        ]
      },
      deliverables: [
        "Best-practice guide and adoption kit for the AI chatbot",
        "New SharePoint portal for the Business Travel Shared Services Centre",
        "PowerApps video tutorials and infographics",
        "Staging, running order and hosting of the national seminar"
      ],
      skills: ["AI Project Supervision", "Microsoft PowerApps & SharePoint", "Change Management", "Event Organisation", "Public Speaking"]
    },
    {
      id: "region-idf",
      image: "assets/images/logos/logo_region_idf.png",
      title: "Grant Applications & Paris 2024 Games",
      role: "Intern, Sports Department",
      company: "Île-de-France Region (Regional Council)",
      period: "March – July 2024 (4 months)",
      contract: "Bachelor's internship",
      location: "Saint-Ouen (93) · Regional headquarters",
      sector: "Regional public policy & Olympic ecosystem",
      summary: "Review of the Regional Council's sports grant applications, liaison with town halls across Île-de-France, coordination of Olympic and Paralympic Week and relations with elite athletes.",
      star: {
        situation: "In the run-up to the Paris 2024 Olympic and Paralympic Games, the Île-de-France Region was mobilising local authorities and promoting sport across the region.",
        tache: "Carefully review the files submitted to elected officials, coordinate institutional stakeholders and take part in the region's Olympic events.",
        action: [
          "Technical and financial review of grant applications submitted to the Regional Council.",
          "Daily liaison with mayors' offices and sports departments of towns across Île-de-France.",
          "Contacting more than a hundred sports ambassadors for the launch of Olympic and Paralympic Week, on 3 April 2024 at the Vaires-sur-Marne Olympic nautical stadium.",
          "On-site organisation of this launch: welcoming the athletes and coordinating the set-up of activities.",
          "Preparing meetings with the regional sports movement and following up the Vice-President's sports projects.",
          "Creating social media content for the Vice-President in charge of Sport.",
          "Managing the Region's sports ticketing and organising travel (inaugurations, general assemblies, events)."
        ],
        resultats: [
          "Grant applications reviewed in line with administrative deadlines.",
          "Regular follow-up of files and projects with town halls and regional sports partners.",
          "Took part in the launch of Olympic and Paralympic Week, on 3 April 2024 in Vaires-sur-Marne."
        ]
      },
      deliverables: [
        "Summary sheets and decision notes for regional committees",
        "Reporting on regional sports projects",
        "On-site coordination of delegations and athletes"
      ],
      skills: ["Public Governance", "Budget & Administrative Review", "Institutional Relations", "Event Coordination", "Sports Ecosystem"]
    },
    {
      id: "agorex",
      image: "assets/images/LogoAgorexExpertise.jpg",
      title: "Bookkeeping, Bank Reconciliations & Year-End Accounts",
      role: "Accounting Intern",
      company: "Agorex Expertise",
      period: "April – May 2023",
      contract: "Bachelor's internship",
      location: "Nogent-sur-Marne (94)",
      sector: "Chartered accounting firm · more than 400 clients",
      summary: "Bookkeeping, review, financial consistency checks and preparation of companies' year-end accounts.",
      star: {
        situation: "In a chartered accounting firm, accuracy in processing transactions and annual accounts is essential for compliance and for business owners' decisions.",
        tache: "Keep client files up to date, carry out compliance checks and help prepare year-end accounts.",
        action: [
          "Recording sales and purchase invoices, reconciling accounts and matching bank statements for clients.",
          "Checking client files, including the VAT rates applied.",
          "Reconciling revenue and VAT.",
          "Analysing cash discrepancies and financial reporting.",
          "Taking part in year-end inventory entries."
        ],
        resultats: [
          "Client files updated in line with legal deadlines.",
          "Solid grounding in general accounting, VAT and cash analysis."
        ]
      },
      deliverables: [
        "Bank reconciliation statements",
        "Review files in preparation for year-end accounts",
        "Cash analysis tables"
      ],
      skills: ["General Accounting", "Financial Analysis", "Bank Reconciliations", "Analytical Rigour", "Budget Control"]
    }
  ],

  linkedin: [
    {
      date: "October 2026",
      titre: "AI in customer relations",
      texte: "At the Maison des Centraliens, presentation of Smart Tribune's study on the impact of AI on customer relations. Key takeaway: AI governance must be part of the company's overall strategy.",
      alt: "Akins Anretar in conversation at the presentation of the Smart Tribune study"
    },
    {
      date: "July 2026",
      titre: "Rolling out OUIGO's virtual assistant",
      texte: "I take part in every stage of OUIGO's virtual assistant project: identifying customer needs, testing and go-live, alongside our partner Smart Tribune.",
      alt: "Blue double-decker OUIGO TGV"
    },
    {
      date: "September 2025",
      titre: "Joining OUIGO",
      texte: "After my work-study at SNCF Optim'services, I am joining OUIGO (SNCF Voyageurs) as Customer Relations Officer.",
      alt: "OUIGO train at the platform"
    },
    {
      date: "September 2025",
      titre: "Starting my Master's at ISM-IAE",
      texte: "After three years of a Bachelor's in Business Management (BUT GEA), I am starting the Master's in Strategic Management and Change at ISM-IAE (Université Paris-Saclay).",
      alt: "Logos of UVSQ (Université Paris-Saclay) and ISM-IAE"
    }
  ],
  linkedinUi: {
    read: "Read on LinkedIn",
    all: "All my activity",
    allText: "Posts, shares and recommendations on my LinkedIn profile.",
    see: "See on LinkedIn"
  },

  interests: {
    close: "Close",
    kicker: "Interest",
    dialog: "Interest: ",
    sportLead: "The school of life, on the pitch since the age of 6.",
    sportP1: "Sport is essential to my life. Without my dose of adrenaline, competition and pushing myself, I feel lost. That is why it plays such a central role in my life.",
    sportP2: "I have played sport since I was 6, especially football. To me, sport is the school of life: by playing it, we grow, find ourselves and build social ties.",
    sportP3: "Football has given me determination, discipline and a competitive spirit.",
    sportStat1: "6 years old",
    sportStat1Text: "when I started football",
    sportStat2Text: "values: determination, discipline, competition",
    sportQuote: "« Sport seeks out fear to master it, fatigue to overcome it, difficulty to conquer it. »",
    voyageTitle: "Travel journal",
    voyageLead: "Discovering new landscapes and new ways of life to broaden my horizons and recharge.",
    mapLoading: "Loading the map…",
    mapOffline: "Map unavailable offline.",
    mapLabel: "Map of destinations: Martinique, Madrid, London and Gothenburg",
    legendVisited: "Countries visited",
    legendHome: "France, where I live",
    legendDest: "Destinations",
    voyageP1: "Travelling is something I particularly love. Discovering new landscapes and new ways of life broadens my horizons and helps me recharge.",
    voyageP2: "The place where I recharge most often is <strong>Martinique</strong>. Coming from this island, I cannot help but be dazzled by a land I deeply love: its wild, heavenly and mountainous landscapes make it one of the most beautiful islands in the world. And I am not exaggerating! Despite its flaws, I never stop loving it.",
    voyageQuote: "« What a magnificent island! »",
    lectureTitle: "Reading",
    lectureQuote: "« Reading feeds the soul, as bread feeds the body. »",
    lectureP1: "Reading lets me escape and reflect on life. Reflection is a process that invites us to question ourselves and to look at the world in a new way.",
    lectureP2: "Reading soothes my soul, relaxes me and broadens my knowledge, in a world where knowledge is sometimes considered useless. To me, it is quite the opposite!",
    bookAlt: "The novel « Rompre » by Yann Moix",
    photoSoon: "Photo coming soon",
    galleryPhoto: "photo",
    sportAlt: "Sport",
    voyageAlt: "Travel"
  },
  destinations: {
    martinique: { name: "Martinique", country: "France · Caribbean", caption: "The island I come from, where I most often go to recharge." },
    madrid: { name: "Madrid", country: "Spain", caption: "The Spanish capital." },
    londres: { name: "London", country: "United Kingdom", caption: "A walk along the Thames, facing the London Eye (2019)." },
    goteborg: { name: "Gothenburg", country: "Sweden", caption: "A sports trip around the city's stadiums, including the Bravida Arena (2019)." }
  }
};
