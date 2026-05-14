import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const mailHref = `mailto:${siteConfig.contactEmail}?subject=Inquiry%20%E2%80%94%20Chart%20Room%20AI`;

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-16 rounded bg-chart-teal px-3 py-2 text-sm font-medium text-chart-navy transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <div id="top" />
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-chart-navy/10 bg-chart-surface">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-chart-navy/[0.06] to-transparent"
          />
          <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-14 md:pt-20 lg:max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
              Fractional AI transformation leadership
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-chart-navy md:text-5xl lg:text-[3.35rem] lg:leading-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-medium text-chart-navy/90 md:text-2xl">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-chart-ink/95 md:text-xl">
              {siteConfig.positioningShort}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={mailHref}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-chart-teal px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-[0.93] hover:shadow-lg active:brightness-90"
              >
                Email {siteConfig.name}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-navy px-6 py-3 text-base font-semibold text-chart-navy transition hover:bg-chart-navy hover:text-white"
              >
                More ways to connect
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <Section id="about" eyebrow="About us" title="We chart pragmatic AI transformations.">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16">
            <div className="space-y-5 text-lg leading-relaxed text-chart-ink md:text-xl">
              <p>
                We help financial services and regulated technology organizations adopt AI
                with discipline: clear roadmaps, executive alignment across business and IT,
                security and compliance-aware delivery, and hands-on momentum when initiatives
                stall.
              </p>
              <p>
                Chart Room AI is led by principals who have lived the full arc — from regulated
                data and custody-class engineering to VC pitches and client-ready narratives on
                capital markets and Asset Liability Management. That depth informs how we prioritize
                use cases and de-risk rollout.
              </p>
              <ul className="list-disc space-y-2 ps-6 text-chart-ink/95">
                <li>AI vision, operating model alignment, and sequenced adoption roadmaps</li>
                <li>Unblocking programs stuck between business sponsorship and engineering delivery</li>
                <li>Executive coaching on vendor selection, evaluations, and production guardrails</li>
                <li>Hands-on support spanning architecture, security posture, DevOps discipline, and compliance touchpoints</li>
              </ul>
            </div>
            <div className="rounded-lg border border-chart-navy/10 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-chart-navy">Founder &amp; Principal</h3>
              <p className="mt-1 text-lg font-medium text-chart-ink">
                Marc Cheatham
              </p>
              <p className="mt-4 leading-relaxed text-chart-ink/95">
                Marc is a seasoned technology executive with thirty-one years of experience,
                including eighteen years as Chief Technology Officer across multiple firms. Most recently, he served for four years as CTO and Acting CEO of a fintech software
                startup focused on regulated planning, trading, simulation, and security-master
                data at institutional scale.
              </p>
              <p className="mt-4 leading-relaxed text-chart-ink/95">
                He has guided production multi-agent AI systems in areas such as cash flow analysis,
                tax-aware planning workflows, forecasting, developer productivity automation, and
                rigorous AI evaluation pipelines with human verification baselines. He routinely
                partners with founders and CIOs bridging board-level narrative to implementation
                reality.
              </p>
              <Link
                href="#experience"
                className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-chart-teal underline underline-offset-4 hover:text-chart-navy"
              >
                Selected leadership background →
              </Link>
            </div>
          </div>
        </Section>

        {/* Expertise */}
        <Section id="expertise" eyebrow="Expertise" title="Where we excel">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-lg border border-chart-navy/10 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-chart-navy">Leadership &amp; advisory</h3>
              <ul className="mt-4 space-y-2 leading-relaxed text-chart-ink/95">
                <li>Executive technology strategy and modernization roadmaps</li>
                <li>Venture and strategic partnership storytelling with technical backbone</li>
                <li>Operating cadence spanning product, engineering, and risk stakeholders</li>
              </ul>
            </div>
            <div className="rounded-lg border border-chart-navy/10 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-chart-navy">Engineering &amp; platforms</h3>
              <ul className="mt-4 space-y-2 leading-relaxed text-chart-ink/95">
                <li>Fintech platforms: trading, Monte Carlo assumptions, wealth &amp; planning tools, ALM</li>
                <li>Enterprise security masters and relational data modeling under regulatory scrutiny</li>
                <li>Test-driven development discipline, CI/CD, and observable production operations</li>
              </ul>
            </div>
            <div className="rounded-lg border border-chart-navy/10 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-chart-navy">AI systems &amp; automation</h3>
              <ul className="mt-4 space-y-2 leading-relaxed text-chart-ink/95">
                <li>Multi-agent architectures designed for audited, human-in-loop workflows</li>
                <li>Evaluation harnesses combining automated checks with peer-reviewed baselines</li>
                <li>Applying AI thoughtfully inside engineering and operational processes</li>
              </ul>
            </div>
            <div className="rounded-lg border border-chart-navy/10 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-chart-navy">Security &amp; compliance</h3>
              <ul className="mt-4 space-y-2 leading-relaxed text-chart-ink/95">
                <li>Information security policy scaffolding and pragmatic control design</li>
                <li>Experience operating under regulatory expectations endemic to FS verticals — refine specific frameworks publicly as you deem appropriate</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          eyebrow="Leadership trajectory"
          title="Experience calibrated for regulated AI scale"
        >
          <div className="space-y-8">
            <p className="max-w-2xl text-lg leading-relaxed text-chart-ink md:text-xl">
              We selectively publish timelines that respect confidentiality commitments. Narrative edits or additional organizations can be surfaced here as your disclosure posture evolves.
            </p>
            <div className="space-y-6">
              <article className="rounded-lg border-s-4 border-chart-teal bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chart-teal">
                  Recent decade focus
                </p>
                <h3 className="mt-3 text-xl font-bold text-chart-navy">
                  Chief Technology Officer &amp; Acting CEO — fintech SaaS venture
                </h3>
                <p className="mt-2 text-chart-ink/80">Approx. four-year chapter · United States · clients in regulated domains</p>
                <ul className="mt-4 list-disc space-y-2 ps-6 leading-relaxed text-chart-ink/95">
                  <li>Orchestrated product and engineering for trading, stochastic simulation engines, holistic planning tooling, ALM workloads, and security-master databases</li>
                  <li>Ran diligence-facing architecture reviews, investor-grade narrative, security policy ownership, and client-facing demos on capital markets nuance</li>
                  <li>Introduced disciplined AI-assisted delivery without compromising resilience or accountability</li>
                </ul>
              </article>
              <article className="rounded-lg border border-dashed border-chart-navy/20 bg-chart-surface/80 p-8">
                <h3 className="text-xl font-bold text-chart-navy">Earlier CTO tenures — details available privately</h3>
                <p className="mt-3 leading-relaxed text-chart-ink/95">
                  Marc has served fourteen additional years cumulatively across CTO roles tackling enterprise-scale modernization, integrations, migrations, analytics, vendor governance, cloud adoption, cyber leadership, portfolio rationalization, and board preparation. Invite us into diligence and we can walk specific references under NDA.</p>
              </article>
            </div>
          </div>
        </Section>

        {/* Why */}
        <Section id="why-chart-room" eyebrow="Engagement rationale" title="Why teams invite Chart Room AI">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Regulated realism",
                body: "Fractional CTO depth across financial services tempered by execution bias — governance, lineage, approvals, audits, resilience. We prioritize outcomes that withstand regulatory scrutiny.",
              },
              {
                title: "From strategy decks to pipelines",
                body: "Fluent moving between architecture whiteboards and hands-on modernization work — modernization roadmaps marry capital markets literacy with pragmatic engineering trade-offs.",
              },
              {
                title: "Responsible AI scaffolding",
                body: "Operational patterns for evaluations, escalation paths, rollback, instrumentation, observability — so AI productivity gains compound instead of brittle proof-of-concepts.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-chart-navy/10 bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-chart-navy">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-chart-ink/95">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Connect" title="Start a routed conversation">
          <div className="max-w-xl space-y-6 text-lg leading-relaxed text-chart-ink md:text-xl">
            <p>
              Email remains the quickest path — share context, timelines, stakeholder map, constraints, NDAs needed, desired outcomes.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={mailHref}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-chart-teal px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-[0.93]"
              >
                {siteConfig.contactEmail}
              </a>
              {siteConfig.linkedInHref ? (
              <a
                href={siteConfig.linkedInHref}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-navy px-6 py-3 text-base font-semibold text-chart-navy hover:bg-chart-navy hover:text-white"
              >
                LinkedIn profile
              </a>
              ) : (
                <span className="inline-flex min-h-11 items-center rounded-md border-2 border-dashed border-chart-navy/35 px-6 py-3 text-base font-medium text-chart-ink/60">
                  Set <code className="mx-1 text-xs">NEXT_PUBLIC_LINKEDIN_URL</code> to surface LinkedIn
                </span>
              )}
              {siteConfig.calHref ? (
                <a
                  href={siteConfig.calHref}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-gold/90 px-6 py-3 text-base font-semibold text-chart-navy hover:bg-chart-gold/90"
                >
                  Book time
                </a>
              ) : null}
            </div>
            <p className="text-sm text-chart-ink/75">
              Update public addresses via <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_CONTACT_EMAIL</code> and{' '}
              <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_LINKEDIN_URL</code> (.env.local) without changing markup.
            </p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
