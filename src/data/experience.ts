export type ExperienceItem = {
  date: string;
  role: string;
  org: string;
  description: string;
};

// Sourced from Upwork employment history, most recent first.
export const experience: ExperienceItem[] = [
  {
    date: "Jun 2026 – Jul 2026",
    role: "Full Stack Developer",
    org: "ZOUM Consultancy",
    description:
      "Full-stack engineering engagement building and maintaining client-facing web applications.",
  },
  {
    date: "Apr 2026 – Jun 2026",
    role: "Full-Stack Developer (Freelance)",
    org: "Usmani Chicken Centre",
    description:
      "Built a Dual-Tier Billing & B2B Management System for high-volume wholesale and retail operations. Engineered a custom pricing engine that automatically switches between retail and bulk wholesale rates based on customer profile, a B2B contract module for hotel/restaurant accounts with credit tracking and automated monthly statements, and a mobile-first interface for on-the-floor inventory and billing. Node.js backend, React frontend, built for high-speed transaction processing.",
  },
  {
    date: "Mar 2026 – Apr 2026",
    role: "Web Application Developer (Freelance)",
    org: "Khidma",
    description:
      "Led the end-to-end redesign of the Khidma.live counselling platform to improve user flow and modern aesthetics.",
  },
  {
    date: "Jun 2025 – Dec 2025",
    role: "Founder, Creative Director & Lead Developer",
    org: "ScrollCraft",
    description:
      "Founded and led a full-service digital agency, serving as the primary lead for both creative vision and technical execution.",
  },
  {
    date: "Dec 2024 – May 2025",
    role: "Full-Stack Developer Intern",
    org: "InfoLabz",
    description:
      "Built and maintained web components using React and backend logic with Node.js. Managed API integrations and database structures to keep applications functioning correctly.",
  },
  {
    date: "Apr 2024 – Jul 2024",
    role: "Full-Stack & AI Developer (Freelance)",
    org: "Hypermoon Cosmic Crew",
    description:
      "Engineered intelligent automation features and integrated LLMs (OpenAI/GPT) to streamline user workflows and platform interactivity for a Web3 community and rewards hub.",
  },
  {
    date: "Dec 2023 – Mar 2024",
    role: "Data Analyst Intern",
    org: "InfoLabz",
    description:
      "Processed and cleaned datasets for business reporting accuracy. Gained hands-on experience with Python and SQL for data manipulation and exploratory analysis, and contributed to documentation of data collection processes.",
  },
];

export const education = [
  {
    school: "Silver Oak University",
    detail: "Bachelor's Degree, Computer Science",
    date: "2022 – 2025",
  },
  {
    school: "Government Polytechnic For Girls",
    detail: "Diploma in Computer Engineering",
    date: "2019 – 2022",
  },
];

export const certifications = [
  {
    name: "Hack for India 2023: Innovation Participant",
    provider: "Silver Oak University (College of Computer Application)",
    date: "October 2023",
  },
  {
    name: "AWS DeepRacer League: Reinforcement Learning Specialist",
    provider: "AWS User Groups & IEEE Student Branch, Silver Oak University",
    date: "March 2023",
  },
];
