export type BlueprintNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  description: string;
  why: string;
  outcome: string;
  tech: string[];
};

// Coordinates live in a 900x260 viewBox. A concrete, founder-recognizable
// pipeline — the kind of system this usually ends up being underneath.
export const blueprintNodes: BlueprintNode[] = [
  {
    id: "lead-capture",
    label: "Lead Capture",
    x: 70,
    y: 190,
    description: "A form, a webhook, an inbound message: the first real signal that someone wants something.",
    why: "Captured the moment it happens, not whenever someone gets around to checking an inbox.",
    outcome: "Nothing falls through the cracks between interest and follow-up.",
    tech: ["REST API", "Webhooks"],
  },
  {
    id: "crm",
    label: "CRM",
    x: 222,
    y: 70,
    description: "The lead lands in one real system of record, not three spreadsheets and someone's memory.",
    why: "If the data isn't trustworthy, nothing built on top of it is either.",
    outcome: "One place the business, and every automation after this, can actually trust.",
    tech: ["PostgreSQL", "REST API"],
  },
  {
    id: "automation",
    label: "Automation",
    x: 374,
    y: 190,
    description: "Rules and workflow logic route the lead to the right sequence, the right owner, the right next step.",
    why: "Deterministic where it can be. No black box deciding things nobody can explain.",
    outcome: "The same lead gets the same quality of handling at 9am or at midnight.",
    tech: ["Node.js", "n8n"],
  },
  {
    id: "database",
    label: "Database",
    x: 526,
    y: 70,
    description: "Every action, message, and decision along the way persists somewhere durable.",
    why: "So the system still makes sense six months from now, without me remembering why.",
    outcome: "A full, auditable record, not a black box nobody can inspect.",
    tech: ["PostgreSQL", "Prisma"],
  },
  {
    id: "ai-agent",
    label: "AI Agent",
    x: 678,
    y: 190,
    description: "An agent works from that real history to draft responses and flag what actually needs a human.",
    why: "By the time the model is involved, it has real context to work with, not a cold lead and a guess.",
    outcome: "Faster responses without a human reading every single message first.",
    tech: ["GPT-4", "Prompt Engineering"],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    x: 830,
    y: 70,
    description: "The outcome surfaces where a human actually looks, not buried in logs no one reads.",
    why: "A system nobody can see into gets ignored the first time it's wrong.",
    outcome: "The business can watch the system working, and trust it, instead of taking it on faith.",
    tech: ["React", "REST API"],
  },
];
