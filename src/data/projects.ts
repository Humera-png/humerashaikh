export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  architecture: string;
  tags: string[];
  outcome: string;
  glyph: string;
  tone: "a" | "b" | "c" | "d" | "e" | "f" | "g";
  /** Real product screenshot on file at /public/projects — held for a future
   *  case-study page rather than shown on the card (a typographic cover reads
   *  more consistently against the rest of the site than six mismatched UI
   *  screenshots do). Omitted for projects with no captured screenshot yet. */
  image?: string;
  /** Live product URL, when the client allows it to be shown publicly. */
  liveUrl?: string;
  /** Public marketing/landing page for a pre-launch product — distinct from
   *  liveUrl so the copy never implies a finished product is live. */
  siteUrl?: string;
  /** Upwork case-study link, used instead of liveUrl when the live product
   *  is under client confidentiality. */
  caseStudyUrl?: string;
  /** Short status note shown next to the title, e.g. "Ongoing — not public yet". */
  note?: string;
  /** Overrides the default "Product screenshot" caption on the expandable
   *  image, e.g. "Marketing preview" for a pre-launch landing page. */
  screenshotLabel?: string;
  /** True when the long-form copy is inferred from the title/skillset rather than
   *  a captured Upwork description; swap in the real write-up when available. */
  inferred?: boolean;
};

// Titles and feature detail pulled directly from the real Upwork portfolio
// cover images. Descriptions for BillPro / HyperMoon / Khidma are further
// grounded in matching Upwork employment-history write-ups; the other three
// are reconstructed from their marketing image copy and marked as inferred.
export const projects: Project[] = [
  {
    slug: "navialabs",
    name: "NaviaLabs",
    category: "Operations Intelligence",
    description:
      "An operations intelligence platform for manufacturers, distributors, and wholesalers: real-time inventory visibility, AI-generated procurement recommendations, and demand forecasting, without replacing the ERP they already run.",
    problem:
      "Growing supply chains lose visibility across fragmented systems (ERPs, spreadsheets, WhatsApp), so stockouts get discovered late and procurement decisions stay manual and reactive.",
    approach:
      "Founded and building this as my own product rather than a client engagement. It connects to a company's existing tools instead of asking them to replace anything, and automates as much of the operational grunt work as the risk tolerance allows, with a human approval gate on anything that spends money.",
    architecture:
      "ERP, spreadsheet, and warehouse data → n8n-orchestrated automation layer → AI reorder and demand-forecasting engine → a natural-language operations agent and executive dashboard, with a full audit trail on every automated decision.",
    tags: ["n8n", "Automation", "Generative AI", "Next.js"],
    outcome:
      "Currently pre-launch and building in the UK. n8n powers the automated reorder workflows and monitoring running underneath the product.",
    glyph: "◑",
    tone: "g",
    image: "/projects/navialabs.png",
    note: "Ongoing — the live product can't be shown publicly yet",
    screenshotLabel: "Marketing preview",
  },
  {
    slug: "jarvis-ai",
    name: "Jarvis AI",
    category: "Voice Assistant",
    description:
      "A voice-controlled desktop assistant. Talk to it, and it opens dashboards, checks system performance, schedules meetings, and automates workflows hands-free.",
    problem:
      "Repetitive desktop tasks and context-switching were slowing down a daily workflow that needed a hands-free interface.",
    approach:
      "Built as a lightweight desktop client that listens for a wake command, transcribes locally, and routes intent to the right handler.",
    architecture:
      "Speech input → intent parsing via GPT-4 → task dispatcher → native OS actions, with a fallback to plain conversation when no task matches.",
    tags: ["Python", "GPT-4", "OpenAI API", "Automation"],
    outcome: "A working end-to-end voice assistant covering voice commands, smart automation, and secure local data handling.",
    glyph: "◍",
    tone: "a",
    image: "/projects/jarvis-ai.png",
    caseStudyUrl: "https://www.upwork.com/freelancers/~01abf633e12f90d800?p=2046974642070323200",
    inferred: true,
  },
  {
    slug: "flowsync",
    name: "FlowSync",
    category: "Workflow Automation",
    description:
      "A no-code, drag-and-drop workflow automation builder that connects business tools, so a non-technical team can design their own automations.",
    problem:
      "Manual handoffs between tools were creating bottlenecks that didn't need a human in the loop.",
    approach:
      "Mapped the existing manual handoffs first, then replaced each one with a single visual, automated step end to end.",
    architecture:
      "Trigger (e.g. a new signup) → condition branching → connected third-party actions (email, Slack, billing) → real-time analytics on every run.",
    tags: ["React", "Node.js", "REST API", "Automation"],
    outcome: "A visual builder with real-time run analytics, replacing manual multi-step handoffs with one automated pipeline.",
    glyph: "◈",
    tone: "b",
    image: "/projects/flowsync.png",
    liveUrl: "https://flowsyncc.netlify.app",
    inferred: true,
  },
  {
    slug: "billpro",
    name: "BillPro",
    category: "Billing & Inventory",
    description:
      "An all-in-one billing and inventory platform with fast invoicing, stock tracking and alerts, and real-time sales analytics in one system.",
    problem:
      "The business needed one system that could price retail and bulk-wholesale customers differently, manage large B2B hotel/restaurant accounts, and stay usable from the floor on a phone.",
    approach:
      "Started from the two pricing models the business already used on paper, then encoded them as a single rules engine instead of two separate flows.",
    architecture:
      "React frontend → Node.js API → pricing/contract engine → PostgreSQL, with the same endpoints serving both the desktop dashboard and the on-the-floor mobile view.",
    tags: ["React", "Node.js", "Database Design", "REST API"],
    outcome:
      "Custom pricing engine, B2B contract module with credit tracking and automated monthly statements, and a mobile-first interface for on-the-floor billing and inventory.",
    glyph: "◐",
    tone: "c",
    image: "/projects/billpro.png",
    caseStudyUrl: "https://www.upwork.com/freelancers/~01abf633e12f90d800?p=2046970276953825280",
  },
  {
    slug: "ai-knowledge-base",
    name: "AI Knowledge-Base System",
    category: "Retrieval-Augmented AI",
    description:
      "A secure, RAG-powered assistant that answers questions grounded in a private knowledge base instead of general model knowledge.",
    problem:
      "Teams needed accurate answers sourced from their own documents, with no hallucinated or leaked information.",
    approach:
      "Treated retrieval as the product, not the model: the knowledge base and ranking pipeline get as much engineering attention as the generation step.",
    architecture:
      "Document ingestion into a secure vector store → hybrid semantic retrieval with ranking and citation clustering → an LLM reasoning core → generation constrained to retrieved context, with confidence scoring and hallucination mitigation before anything reaches the user.",
    tags: ["Generative AI", "OpenAI API", "Database Design", "Python"],
    outcome: "A retrieval-augmented assistant scoped to a private knowledge base, with every answer traceable back to a cited source.",
    glyph: "◇",
    tone: "d",
    image: "/projects/ai-knowledge-base.png",
    liveUrl: "https://islamicadvisor-anaichatbot.netlify.app",
    inferred: true,
  },
  {
    slug: "hypermoon",
    name: "HyperMoon",
    category: "Web3 Platform",
    description:
      "A Web3 rewards and governance hub where members stake, vote, and participate in a decentralized community, with AI-assisted automation running underneath.",
    problem:
      "A growing Web3 community needed automation features and LLM integration to keep user workflows and engagement running smoothly at scale.",
    approach:
      "Layered automation on top of the existing platform rather than rebuilding it, so the community never saw downtime during rollout.",
    architecture:
      "User events → automation triggers → LLM-assisted responses → platform APIs, running alongside the core staking, governance, and rewards logic.",
    tags: ["React", "Node.js", "OpenAI API", "Automation"],
    outcome:
      "Intelligent automation and LLM integration streamlining participation, governance, and rewards tracking across the platform.",
    glyph: "◎",
    tone: "e",
    image: "/projects/hypermoon.png",
    liveUrl: "https://hypermoon.netlify.app",
  },
  {
    slug: "khidma",
    name: "Khidma",
    category: "Healthcare Platform",
    description:
      "A redesign of a licensed mental-health counselling platform, built around trust, privacy, and making it easy to find and book the right counsellor.",
    problem:
      "Khidma.live needed a full profile redesign to improve user flow and bring the platform's look up to a modern, trustworthy standard.",
    approach:
      "Rebuilt the information architecture around how people actually search for a counsellor, then redesigned the visual language on top of it.",
    architecture:
      "Component-level redesign in React, shipped incrementally so the live platform stayed usable throughout the rollout.",
    tags: ["React", "UI/UX", "Web Application Development"],
    outcome: "An end-to-end redesign of the live platform's booking flow and visual design, centered on licensed-counsellor trust and accessibility.",
    glyph: "◒",
    tone: "f",
    image: "/projects/khidma.png",
    liveUrl: "https://khidma.live",
  },
];
