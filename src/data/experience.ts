export const experiences = [
  {
    company: "Geek Informatics",
    role: "Full Stack Developer",
    date: "April 2026 – Present",
    summary:
      "Production feature delivery and maintenance across four client projects worked on simultaneously.",
    groups: [
      {
        title: "AI feature development",
        items: [
          {
            label: "Rocwins platform",
            detail:
              "Delivered the B2B commerce and business automation platform end to end.",
          },
          {
            label: "Rocwins production chatbot",
            detail:
              "Built a Retrieval-Augmented Generation (RAG) chatbot using Gemini LLM and MongoDB Atlas Vector Search. Admins upload company data; users receive streamed answers with cited sources.",
          },
        ],
      },
      {
        title: "Product delivery and API integration",
        items: [
          {
            label: "EUDR Compliance Hub",
            detail:
              "Delivered end to end: a regulatory compliance platform for the EU Deforestation Regulation, built with Next.js and Strapi CMS for international business clients.",
          },
          {
            label: "Client project delivery",
            detail:
              "Contributed across four simultaneous client projects, handling feature development, bug fixes, REST API integration, testing and delivery.",
          },
        ],
      },
      {
        title: "Security and production maintenance",
        items: [
          {
            label: "EasyPorts",
            detail:
              "Implemented JWT-based multi-tenant security enforcement to isolate each business’s data and prevent cross-tenant access.",
          },
          {
            label: "Ravel",
            detail:
              "Maintained a five-year-old production codebase, implementing new features while preserving backward compatibility.",
          },
        ],
      },
      {
        title: "Deployment and media storage",
        items: [
          {
            label: "Production operations",
            detail:
              "Handled deployments to DigitalOcean using PM2 and FileZilla, and configured AWS S3 to store and serve user-uploaded images across client applications.",
          },
        ],
      },
    ],
    technologies: [
      "Next.js",
      "Strapi CMS",
      "Gemini LLM",
      "RAG",
      "MongoDB Atlas Vector Search",
      "JWT",
      "REST APIs",
      "DigitalOcean",
      "PM2",
      "FileZilla",
      "AWS S3",
    ],
  },
  {
    company: "Softtrix Tech Solutions Pvt. Ltd.",
    role: "Full Stack Developer",
    date: "March 2025 – March 2026",
    summary:
      "Worked with the in-house development team on Ranktunez, a SaaS-based web application.",
    groups: [
      {
        title: "SaaS product development",
        items: [
          {
            label: "Ranktunez",
            detail:
              "Contributed to a SaaS web application built with the MERN stack and Next.js.",
          },
        ],
      },
      {
        title: "Frontend development and design collaboration",
        items: [
          {
            label: "Reusable UI",
            detail:
              "Developed reusable React.js components and implemented UI designs in collaboration with the UI/UX team.",
          },
        ],
      },
      {
        title: "Backend integration and application quality",
        items: [
          {
            label: "REST API integration",
            detail:
              "Integrated frontend features with Node.js and Express.js backend REST APIs supporting core application functionality.",
          },
          {
            label: "Team engineering practices",
            detail:
              "Collaborated with team members to debug issues, review code and improve application performance.",
          },
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
