export const profile = {
  name: "Furqan Atiq",
  title: "Full Stack Developer",
  stack: "React.js & Node.js",
  location: "Lahore, Pakistan",
  email: "furqanatiq123@gmail.com",
  github: "https://github.com/FurqanHere",
  githubLabel: "github.com/FurqanHere",
  summary:
    "Full stack developer with 1 year and 2 months of professional remote experience building responsive, production-grade web applications using React.js and Node.js. Skilled in Chakra UI, MongoDB, SQL, and core PHP, with hands-on experience delivering multiple client-facing websites and portals end-to-end. BSCS graduate seeking a full stack role in a JavaScript-centric environment.",
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

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React.js", "Chakra UI", "Responsive Web Design"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Core PHP", "REST APIs"],
  },
  {
    label: "Data & Tools",
    skills: ["MongoDB", "SQL", "Git & GitHub"],
  },
];

export const experience = [
  {
    role: "Frontend Developer (React.js)",
    company: "DeviceBee Technologies",
    meta: "Remote — Dubai-based company · 1 year and 2 months",
    points: [
      "Developed and maintained multiple client-facing websites and web portals using React.js and Chakra UI.",
      "Delivered end-to-end frontend builds for diverse projects, including a legal services platform and its business portal for lawyers, a Nirvana website and portal, and a food-ordering web application for Omniyat.",
      "Translated design requirements into responsive, reusable React components, ensuring consistent UI/UX across projects.",
      "Integrated frontend applications with backend APIs and databases (MongoDB/SQL) to support dynamic content.",
      "Managed version control and collaborative development workflows using Git and GitHub across all project repositories.",
    ],
  },
];

export const projects = [
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
