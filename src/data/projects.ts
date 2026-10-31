export const projects = [
  {
    name: "EUDR Compliance Hub",
    type: "END-TO-END DELIVERY",
    desc: "A regulatory compliance platform for businesses addressing the EU Deforestation Regulation.",
    tags: ["Next.js", "Strapi CMS"],
    url: "https://eudrcompliancehub.com/",
    tone: "eudr",
    image: "/projects/eudr_logo.png",
    overview:
      "A regulatory compliance platform for the EU Deforestation Regulation, delivered end to end with a Next.js frontend and Strapi CMS for international business clients.",
    sections: [
      {
        title: "Product",
        items: [
          "Supports businesses dealing with the EU Deforestation Regulation.",
          "Provides a Next.js frontend integrated with Strapi CMS for content management.",
        ],
      },
      {
        title: "My contribution",
        items: [
          "Delivered the platform end to end.",
          "Integrated the frontend with Strapi CMS.",
        ],
      },
    ],
    technologies: ["Next.js", "Strapi CMS"],
  },
  {
    name: "EasyPorts",
    type: "TEAM CONTRIBUTION",
    desc: "A digital logistics and freight-forwarding platform for shipping and international trade operations.",
    tags: ["JWT", "Multi-Tenant Security"],
    url: "https://www.easyports.io/",
    tone: "ports",
    image: "/projects/easy_ports.webp",
    overview:
      "A digital logistics and freight-forwarding platform that helps businesses coordinate shipping and international trade operations.",
    sections: [
      {
        title: "Product capabilities",
        items: [
          "Air, sea and land freight coordination.",
          "Shipment tracking and logistics visibility.",
          "Documentation management and customs processes.",
          "Import/export workflows, logistics planning and operational reporting.",
        ],
      },
      {
        title: "My contribution",
        items: [
          "Implemented JWT-based multi-tenant security enforcement.",
          "Isolated each business's data and prevented unauthorized cross-tenant access.",
        ],
      },
    ],
    technologies: ["JWT Authentication", "Multi-Tenant Architecture"],
  },
  {
    name: "Ravel",
    type: "TEAM CONTRIBUTION",
    url: "https://personal.ravel.faith/#/",
    desc: "A connected four-platform community ecosystem for individuals, merchants and ministries.",
    tags: [
      "Four Platforms",
      "AI Feature Integration",
      "Production Maintenance",
    ],
    tone: "ravel",
    image: "/projects/RavelLogo.png",
    overview:
      "A connected ecosystem of four applications for community members, businesses and faith-based organisations, supported by an administrative platform.",
    platforms: [
      {
        name: "Ravel Personal",
        image: "/projects/RavelLogo.png",
        url: "https://personal.ravel.faith/#/",
        description:
          "User-facing community platform connecting individuals with communities, businesses and faith-based resources.",
        features: [
          "Community and social engagement",
          "Business discovery and events",
          "Faith-based resources and content",
          "Jobs, housing and community services",
        ],
      },
      {
        name: "Ravel Merchant",
        image: "/projects/ravel-merchant-logo.png",
        url: "https://merchant.ravel.faith/#/",
        description:
          "Merchant and business platform for visibility and customer engagement.",
        features: [
          "Business profiles and discovery",
          "Promotions and offers",
          "Customer engagement",
          "Merchant-related services",
        ],
      },
      {
        name: "Ravel Ministry",
        image: "/projects/ravel-ministry-logo.png",
        url: "https://ministry.ravel.faith/#/",
        description:
          "Platform for churches, ministries and faith-based organisations.",
        features: [
          "Congregation engagement",
          "Announcements and notifications",
          "Events and activities",
          "Sermons, digital content and ministry communication",
        ],
      },
      {
        name: "Ravel Admin",
        image: "/projects/ravel-admin-logo.png",
        
        description:
          "Administrative platform supporting the connected Ravel ecosystem.",
        features: [],
      },
    ],
    highlights: [
      {
        title: "AI-powered business search",
        description:
          "Contributed to integrating a search experience where users describe what they need in plain language and receive business matches, instead of relying only on exact keyword searches.",
      },
      {
        title: "Community donation flow",
        description:
          "Contributed to the community donation flow and its user journey.",
      },
      {
        title: "Subscription plans",
        description: "Worked on subscription plans and related functionality.",
      },
      {
        title: "Geolocation flow",
        description:
          "Contributed to geolocation-based functionality supporting location-aware discovery across the Ravel ecosystem.",
      },
      {
        title: "Mobile team collaboration",
        description:
          "Coordinated functionality and integrations with the mobile development team across web and mobile applications.",
      },
    ],
    sections: [
      {
        title: "My contribution",
        items: [
          "Worked across all four Ravel platforms and contributed to AI feature integration.",
          "Maintained an established five-year-old production codebase, implemented new features and preserved backward compatibility.",
        ],
      },
    ],
    technologies: [],
  },
  {
    name: "Ranktunez",
    type: "TEAM CONTRIBUTION",
    desc: "An SEO management and analytics SaaS platform for improving online visibility.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    url: "https://www.ranktunez.com",
    tone: "rank",
    image: "/projects/ranktunezLogo.png",
    overview:
      "SEO management and analytics platform that helps businesses and digital marketers monitor and improve online visibility.",
    sections: [
      {
        title: "Product capabilities",
        items: [
          "Keyword ranking and position tracking.",
          "Backlink analysis and management.",
          "Competitor research and monitoring.",
          "Organic traffic and website performance insights.",
          "SEO reporting and centralized monitoring.",
        ],
      },
      {
        title: "My contribution",
        items: [
          "Contributed to the SaaS application as part of the in-house development team.",
          "Built reusable React components and implemented UI designs in collaboration with the UI/UX team.",
          "Integrated frontend features with Node.js and Express.js REST APIs; collaborated on debugging, code reviews and performance improvements.",
        ],
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
] as const;

export const rocwinProject = {
  name: "Rocwins Inc.",
  title: "AI-Powered B2B Commerce & Business Automation Platform",
  url: "http://34.83.82.212/",
  logo: "/projects/rocwins_logo.png",
  technologies: [
    "Next.js",
    "MongoDB Atlas Vector Search",
    "Gemini LLM",
    "AWS S3",
    "DigitalOcean",
  ],
};

export const rocwinModules = [
  {
    number: "01",
    name: "Customer commerce",
    description:
      "Product and category browsing, search, filters and sorting, product detail and customization, interactive 2.5D mockups, AI recommendations, RAG chatbot, enquiry/RFQ builder, hamper and combo builder, customer accounts and quotation history.",
  },
  {
    number: "02",
    name: "Admin & sales",
    description:
      "Secure authentication and role-based access, dashboard KPIs, lead and account management, business-card OCR and imports, duplicate detection, AI-assisted lead enrichment, sales pipeline and quotations, branded PDF generation, email drafting and mockup approval.",
  },
  {
    number: "03",
    name: "Catalogue & marketing",
    description:
      "PIM, product/category/combo management, vendors and inventory, approval workflows, PDF/CSV/Excel uploads, OCR extraction and review, dynamic PDF/web catalogues, email and WhatsApp campaigns, outreach automation and reply detection.",
  },
] as const;

export const personalProjects = {
  cureConnect: {
    name: "CureConnect",
    type: "INDEPENDENT PERSONAL PROJECT",
    description:
      "A medicine donation and sharing platform that helps people donate unused medicines and helps others find available medicine. Includes donor, receiver and admin workflows.",
    features: [
      "Donor & receiver dashboards",
      "JWT & role-based access",
      "Gemini API ? Cloudinary",
      "Availability management ? validation",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Gemini API",
      "Cloudinary",
    ],
  },
  nextHope: {
    name: "NextHope",
    type: "PERSONAL / ACADEMIC",
    description:
      "A social impact platform connecting underserved communities with employment opportunities through community-driven support.",
    features: ["User onboarding", "Job listings", "Role-based access"],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Node.js",
      "MySQL",
      "AJAX",
      "Angular.js",
    ],
  },
};
