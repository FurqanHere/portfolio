export const profile = {
  name: "Furqan Atiq",
  title: "AI Agents & Automation Expert",
  stack: "Full Stack Development",
  location: "Lahore, Pakistan",
  email: "furqanatiq123@gmail.com",
  github: "https://github.com/FurqanHere",
  githubLabel: "github.com/FurqanHere",
  summary:
    "AI Agents & Automation expert — I design autonomous agents that run customer support and complex business operations end-to-end, and build automation pipelines that connect business tools and social platforms to cut out repetitive manual work and reduce operating costs. I also manage and automate social media accounts, keeping content, scheduling, and engagement running without manual upkeep. Alongside that, I'm a full stack developer fluent across the JavaScript ecosystem, building production-grade interfaces and APIs with React.js, Node.js, MongoDB, SQL, Supabase, and core PHP. 1 year and 2 months of professional remote experience delivering client-facing websites and portals end-to-end. BSCS graduate focused on AI Agents, Automation, and full stack development.",
};

export const stats = [
  { value: "1y 2m", label: "Professional experience" },
  { value: "15+", label: "Shipped client platforms" },
  { value: "15+", label: "Industries served" },
];

export const education = [
  {
    degree: "Intermediate (FSc / Pre-Medical)",
    school: "Punjab Group of Colleges (PGC)",
  },
  {
    degree: "BS Computer Science (BSCS)",
    school: "Barani Institute of Sciences, PMAS Arid Agriculture University",
  },
];

export const coreSkills = [
  {
    icon: "Bot",
    label: "AI Agents",
    tagline: "Operations on autopilot",
    description:
      "Designing and deploying autonomous AI agents that handle complex business operations, customer support, and multi-step workflows — cutting response times and headcount costs, 24/7.",
    tags: ["Autonomous Agents", "LLM Integration", "24/7 Support"],
  },
  {
    icon: "Workflow",
    label: "Automations",
    tagline: "Time back, at scale",
    description:
      "Building custom automation pipelines and managing social media accounts end-to-end — scheduling, engagement, and cross-tool integrations that free teams from manual busywork.",
    tags: ["Workflow Pipelines", "Social Media Management", "API Integrations"],
  },
  {
    icon: "Code2",
    label: "Frontend",
    tagline: "Interfaces that convert",
    description:
      "Responsive, pixel-perfect React interfaces that make products feel fast and trustworthy — directly improving conversion, retention, and how clients perceive your brand.",
    tags: ["React.js", "Chakra UI", "Responsive Design"],
  },
  {
    icon: "Server",
    label: "Backend",
    tagline: "Systems that hold up",
    description:
      "Reliable Node.js APIs and data layers built to handle real production traffic and business logic — so the platform keeps running as you scale, not just in the demo.",
    tags: ["Node.js", "REST APIs", "MongoDB / SQL"],
  },
];

export const toolTags = ["Git & GitHub", "Core PHP", "Chakra UI", "MongoDB", "SQL"];

export const experience = [
  {
    company: "DeviceBee Technologies",
    meta: "Remote — Dubai-based company · 1 year and 2 months",
    points: [
      "Designed and deployed AI agents that automate customer support and multi-step business workflows, cutting manual handling time on repetitive client requests.",
      "Built automation pipelines connecting business tools and social media platforms — including AI-assisted social media account management — to remove day-to-day operational overhead.",
      "Delivered multiple client-facing websites and business portals end-to-end for international clients, using React.js and Chakra UI to build clean, production-ready interfaces.",
      "Shipped frontend work across four different industries — legal services, luxury yacht rentals, hospitality, and talent marketplaces — adapting each build to its client's real operational workflow.",
      "Converted design requirements into responsive, reusable React components, keeping UI/UX consistent across every project.",
      "Connected frontend applications to backend APIs and MongoDB/SQL databases to power dynamic, real-time content.",
      "Built and maintained REST APIs and server-side logic in Node.js, driving dynamic features across every client-facing portal.",
      "Owned Git and GitHub workflows across the full project portfolio, keeping version control and collaboration consistent for the team.",
    ],
  },
];

export const projects = [
  {
    id: "ai-support-agent",
    industry: "AI Agents",
    name: "Autonomous Customer Support Agent",
    description:
      "AI agent that independently handles customer inquiries, support tickets, and multi-step troubleshooting across chat channels — resolving common cases without human intervention and escalating only what genuinely needs a person, cutting response times and support headcount costs.",
    tech: ["LLM Integration", "Agent Orchestration", "API Integrations"],
    platforms: "Web · Chat",
    accent: "#C08A3E",
  },
  {
    id: "social-automation",
    industry: "Automation",
    name: "AI-Powered Social Media Automation Suite",
    description:
      "Automation pipeline that manages social media accounts end-to-end using AI — generating and scheduling content, handling engagement and replies, and syncing activity across platforms so accounts stay active without manual, day-to-day upkeep.",
    tech: ["Workflow Automation", "AI Content Generation", "Social APIs"],
    platforms: "Cross-platform",
    accent: "#4FD1C5",
  },
  {
    id: "legal",
    industry: "Legal Tech",
    name: "Legal Platform & Business Portal",
    description:
      "Web platform connecting users, businesses, and law firms to post legal issues and hire lawyers, with secure direct chat, a business portal for managing legal matters, and cross-platform access. Streamlined case management and document sharing for efficient legal workflows.",
    tech: ["React 18", "React Router", "Bootstrap 5", "Firebase", "React"],
    platforms: "Web · Portal",
    accent: "#9C3B3B",
    link: "https://legalplatform.co/",
  },
  {
    id: "nirvana",
    industry: "Marine & Luxury Rentals",
    name: "Nirvana Website & Portal",
    description:
      "React-based booking platform for a luxury yacht and boat rental company in Abu Dhabi, featuring tiered memberships, real-time boat bookings, PayPal/card payments, and bilingual (English/Arabic) support. Integrated real-time availability updates and custom booking management for marina operations.",
    tech: ["React 18", "i18next", "Bootstrap 5"],
    platforms: "Web · 6 marina locations · Portal",
    accent: "#2A6F77",
    link: "https://master.devicebee.com/Nirvana-dev#home",
  },
  {
    id: "omniyat",
    industry: "Hospitality & F&B",
    name: "Omniyat Food Ordering App",
    description:
      "Cross-platform digital menu and ordering solution for Omniyat's sales gallery, letting guests scan a QR code to browse menus, place orders, call a teaboy, and track order history in real time. Enhanced customer experience with real-time order updates and seamless payment integration.",
    tech: ["Vue 3", "Pinia", "Socket.io", "Bootstrap 5", "Capacitor"],
    platforms: "iOS · Android · Web",
    accent: "#B9812E",
    link: "https://order.getswyp.com/Omniyat/order/",
  },
  {
    id: "nahham",
    industry: "Talent Marketplace",
    name: "Nahham Web",
    description:
      "Bilingual (Arabic/English) talent marketplace platform connecting companies with creative talents across the UAE, with OTP-based authentication, Stripe payment integration, and end-to-end project/offer management. Advanced filtering and search capabilities for matching talents with project requirements.",
    tech: ["React", "Stripe", "Firebase", "i18n (RTL)"],
    platforms: "Web · UAE-wide",
    accent: "#6B4E8E",
    link: "http://nahham.ae/",
  },
];
