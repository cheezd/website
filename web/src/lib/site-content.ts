import { siteConfig } from "@/lib/site-config";

export const mailHref = `mailto:${siteConfig.contactEmail}?subject=Inquiry%20-%20Chart%20Room%20AI`;

export const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/experience", label: "Experience" },
  { href: "/why-chart-room", label: "Why Chart Room AI" },
  { href: "/contact", label: "Contact" },
] as const;

export const brandImages = {
  lockup: "/brand/chart-room-ai-lockup.png",
  ship: "/brand/ship-constellation.png",
  spyglass: "/brand/spyglass.png",
  helm: "/brand/helm-compass.png",
  telescope: "/brand/telescope.png",
} as const;

export const audience = [
  "Banks",
  "Broker-dealers",
  "Wealth and asset management firms",
  "Insurance carriers and distributors",
  "Fintech vendors serving regulated institutions",
  "Enterprise SaaS teams where auditability, data residency, and model risk matter",
] as const;

export const expertiseCards = [
  {
    title: "Leadership and advisory",
    body: "Executive technology strategy, modernization roadmaps, operating cadence, venture narrative, and sponsor alignment across product, engineering, and risk.",
  },
  {
    title: "Engineering and platforms",
    body: "Fintech platforms, trading workflows, Monte Carlo / CMA engines, planning tools, ALM, security masters, SQL-heavy data foundations, TDD, CI/CD, and production operations.",
  },
  {
    title: "AI systems and automation",
    body: "Multi-agent architectures, human-in-loop workflows, evaluation harnesses, model quality gates, prompt/version discipline, and AI-assisted engineering loops.",
  },
  {
    title: "Security and compliance",
    body: "CISO-style ownership, information security policy scaffolding, audit-friendly controls, vendor diligence, rollback discipline, and practical governance that does not freeze delivery.",
  },
] as const;

export const whyCards = [
  {
    title: "Regulated realism",
    body: "Fractional CTO depth across financial services, tempered by hands-on delivery. We prioritize governance, lineage, approvals, audits, and resilience.",
  },
  {
    title: "From strategy to pipelines",
    body: "Comfortable moving between executive roadmaps, architecture decisions, and implementation details so programs do not stall between business sponsorship and engineering delivery.",
  },
  {
    title: "Responsible AI scaffolding",
    body: "Patterns for evaluations, escalation, rollback, observability, and accountability so AI productivity gains compound instead of becoming brittle proofs of concept.",
  },
] as const;

export const experienceHighlights = [
  {
    title: "Platform and engineering",
    items: [
      "Directed build-out of trading workflows, holistic wealth and planning experiences, Monte Carlo / capital-market-assumption engines, ALM-capable analytics, and client-ready execution paths.",
      "Owned reliability, observability, release discipline, and pragmatic SDLC norms so speed did not abandon auditability or rollback.",
    ],
  },
  {
    title: "Data foundations",
    items: [
      "Built and evolved broad securities and instrument masters spanning equities, fixed income, funds, ETFs, commodities, annuity-related constructs, ingestion, and validation.",
      "Partnered with SMEs on pricing hygiene, lineage concerns, corporate actions, and diligence questionnaires that accompany institutional adoption.",
    ],
  },
  {
    title: "Production AI and productivity",
    items: [
      "Shipped multi-agent workflows for cash-flow exploration, tax-aware scenario thinking, forecasting, and related decision support with guardrails suitable for regulated narratives.",
      "Built evaluation frameworks with automated gates, human-verified baselines, versioned prompts and outputs, and discipline against silent regression.",
    ],
  },
  {
    title: "Commercial, VC, and security leadership",
    items: [
      "Served as the front-line technical voice in sponsor-facing, investor-facing, and large-prospect demos where domain depth had to land with experts.",
      "Held acting CEO responsibilities during transitional periods while keeping delivery, stakeholder confidence, and internal alignment connected.",
      "Established enterprise information security policies bridging fast-moving delivery with audit-friendly behavior.",
    ],
  },
] as const;
