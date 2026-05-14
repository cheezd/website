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
              <div className="space-y-5 border-t border-chart-navy/10 pt-8">
                <div>
                  <h3 className="text-base font-bold text-chart-navy">Who we serve</h3>
                  <p className="mt-2 text-lg leading-relaxed text-chart-ink">
                    Banks, broker-dealers, wealth &amp; asset management, insurance carriers &
                    distributors, fintech vendors serving regulated institutions, and enterprise
                    SaaS where auditability, data residency, and model risk matter.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-chart-navy">Reach</h3>
                  <p className="mt-2 text-lg leading-relaxed text-chart-ink">
                    United States — <strong>remote-first</strong>; on-site working sessions and
                    travel <strong>by arrangement</strong>.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-chart-navy">How we work</h3>
                  <p className="mt-2 text-lg leading-relaxed text-chart-ink">
                    We begin with focused discovery (goals, constraints, stakeholders), then
                    co-develop phased priorities alongside your leaders. Formal SOWs and
                    commercial terms stay offline with counsel as engagements take shape.
                  </p>
                </div>
              </div>
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
                <li>
                  Multi-decade financial-services delivery with audit and diligence expectations
                  — we name specific regulatory frameworks on the public site only when you
                  choose to publish them
                </li>
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
          <div className="space-y-10">
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-chart-ink md:text-xl">
              <p>
                The themes below emerge where AI, data, and software collide with{' '}
                <strong>capital-markets sophistication</strong>, <strong>duty-of-care expectations</strong>,
                and <strong>durable operational risk</strong>. The{' '}
                <strong>most recent ~four-year CTO / acting CEO company</strong> stays{' '}
                <strong>anonymous</strong> on this public surface; concurrently, Marc’s{' '}
                <strong>Chief Technology Officer</strong> tenure at <strong>Riverfront</strong> is{' '}
                <strong>named</strong>. Other employers generally remain undisclosed unless you engage
                under agreement.
              </p>
              <p className="text-base text-chart-ink/90 md:text-lg">
                When you engage Chart Room AI, you are working with someone who has{' '}
                <strong>sat in the operating chair</strong>: prioritizing roadmaps under
                constrained capacity, defending architecture to risk and compliance stakeholders,
                and shipping through volatile funding and macro cycles—not only advising from the
                sidelines.
              </p>
            </div>

            <div className="space-y-8">
              <article className="rounded-lg border-s-4 border-chart-teal bg-white p-8 shadow-sm md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chart-teal">
                  Recent-decade CTO scope
                </p>
                <h3 className="mt-3 text-xl font-bold text-chart-navy md:text-2xl">
                  Chief Technology Officer &amp; Acting CEO — fintech SaaS venture
                </h3>
                <p className="mt-2 font-medium text-chart-ink">
                  Approx. four-year CTO &amp; acting CEO chapter · United States · SaaS vendors to
                  regulated / institutionally discerning buyers
                </p>
                <p className="mt-3 rounded-md bg-chart-surface px-4 py-3 text-sm font-medium leading-snug text-chart-navy">
                  Concurrent public reference — <strong>Chief Technology Officer · Riverfront</strong>{' '}
                  *(wealth / investment-management technology context; timelines available in
                  conversation).*
                </p>
                <p className="mt-5 leading-relaxed text-chart-ink/95">
                  Dual CTO and acting chief executive accountability for{' '}
                  <strong>product direction</strong>, <strong>engineering throughput</strong>,{' '}
                  <strong>security posture</strong>, and{' '}
                  <strong>revenue-bearing client delivery</strong>—with continuous exposure to how
                  buyers evaluate depth on <strong>capital markets mechanics</strong>,{' '}
                  <strong>solvency-style analytics</strong>, and{' '}
                  <strong>data integrity</strong>.
                </p>

                <p className="mt-6 border-l-2 border-chart-teal/70 pl-4 text-base leading-relaxed text-chart-ink/95 md:text-lg">
                  <strong className="text-chart-navy">Composite reading.</strong> The capability themes
                  below blend firsthand work Marc led as{' '}
                  <strong>Chief Technology Officer at Riverfront</strong> and during the subsequent{' '}
                  <strong>~four-year CTO / acting CEO SaaS chapter</strong>—not every bullet applies
                  to <em>both</em>. Items such as <strong>interim acting chief executive stretches</strong>,{' '}
                  <strong>venture-facing diligence,</strong> and certain{' '}
                  <strong>partnership / commercial narrative arcs</strong> skew toward the unnamed SaaS
                  vendor; substantive <strong>trading engineering</strong>, <strong>Monte Carlo</strong>{' '}
                  sophistication, <strong>holistic planning interoperability</strong>,{' '}
                  <strong>securities-master rigor</strong>, modernization discipline, and
                  skeptic-proof client demos matured across{' '}
                  <strong>Riverfront and that later chapter alike.</strong>
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-chart-navy">
                      Platform &amp; engineering
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 ps-5 text-chart-ink/95">
                      <li>
                        Directed build-out of sophisticated <strong>trading workflows</strong>,{' '}
                        <strong>holistic wealth &amp; planning</strong> experiences,{' '}
                        <strong>Monte Carlo / capital-market-assumption engines</strong>,{' '}
                        <strong>ALM-capable analytics</strong>, and adjoining execution paths that
                        had to survive <strong>skeptical quant and advisor review</strong>.
                      </li>
                      <li>
                        Owned <strong>reliability, observability,</strong> and{' '}
                        <strong>release discipline</strong> across teams juggling feature velocity
                        alongside production stability for paying institutions—not slide-ware proofs.
                      </li>
                      <li>
                        Grounded modernization in <strong>pragmatic SDLC norms</strong> (strong
                        test discipline, pipelines, repeatable deploys) so speed did not abandon
                        auditability or rollback.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-chart-navy">
                      Data foundations
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 ps-5 text-chart-ink/95">
                      <li>
                        Stood up and evolved <strong>broad securities &amp; instrument masters</strong>{' '}
                        covering equities, fixed income, funds, ETFs, commodities, derivatives,
                        annuities-related constructs—and the <strong>SQL-heavy ingestion and
                          validation</strong> required to trust downstream analytics.
                      </li>
                      <li>
                        Partnered tightly with SMEs on <strong>corporate actions</strong>, pricing
                        hygiene, lineage concerns, and <strong>diligence questionnaires</strong> that
                        accompany institutional adoption.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-chart-navy">
                      Production AI &amp; productivity
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 ps-5 text-chart-ink/95">
                      <li>
                        Shipped <strong>multi-agent workflows</strong> that accelerated staff and
                        client-facing analyses—areas such as <strong>cash-flow exploration</strong>,{' '}
                        tax-aware scenario thinking, forecasting, and similar decision support—
                        with <strong>guardrails</strong> appropriate to regulated narratives.
                      </li>
                      <li>
                        Built an <strong>agentic evaluation framework</strong>: automated gates plus{' '}
                        <strong>human-verified baselines</strong>, versioned prompts and outputs, and
                        discipline meant to curb silent regression as models churned.
                      </li>
                      <li>
                        Used AI thoughtfully inside <strong>engineering and operational loops</strong>{' '}
                        (code, tests, deployments) to raise throughput without tossing aside review
                        culture.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-chart-navy">
                      Commercial narrative, VC &amp; security leadership
                    </h4>
                    <p className="mt-2 text-xs italic text-chart-ink/80">
                      Venture-stage demos, diligence narration, interim chief executive breadth, and
                      certain VC-adjacent storylines principally reflect the anonymous SaaS chapter;
                      domain-heavy prospect conversations also draw heavily on RI / wealth technology
                      leadership such as CTO tenure at Riverfront.
                    </p>
                    <ul className="mt-3 list-disc space-y-2 ps-5 text-chart-ink/95">
                      <li>
                        Repeatedly the <strong>front-line technical voice</strong> in{' '}
                        <strong>sponsor-facing</strong>, <strong>investor-facing</strong>, and{' '}
                        <strong>large-prospect demos</strong> where ALM framing, stochastic engine
                        intuition, security-master credibility, or AI restraint had to land with
                        domain experts—not generic IT theater.
                      </li>
                      <li>
                        Helped articulate <strong>business model evolution</strong>, partnership
                        strategy, and <strong>pitch coherence</strong> across technical diligence and
                        business diligence threads.
                      </li>
                      <li>
                        Assumed <strong>acting CEO</strong> responsibilities during transitional
                        periods—keeping delivery, stakeholder confidence, and internal alignment{' '}
                        <strong>tightly coupled</strong>.
                      </li>
                      <li>
                        Established and maintained{' '}
                        <strong>enterprise information security policies</strong>—the practical bridge
                        between aspiration and audit-friendly behavior while teams moved fast.
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-8 rounded-md border border-chart-navy/10 bg-chart-surface/80 px-4 py-3 text-sm leading-relaxed text-chart-ink">
                  Granular <strong>outcome metrics</strong>, staffing contours, calendars, refined{' '}
                  <strong>Riverfront</strong> timelines, or identity of the unnamed SaaS company stay
                  out of public copy unless you authorize them—we expand or walk through nuances under
                  agreement.
                </p>
              </article>

              <article className="rounded-lg border border-dashed border-chart-navy/25 bg-chart-surface/80 p-8 md:p-10">
                <h3 className="text-xl font-bold text-chart-navy md:text-2xl">
                  Additional CTO depth — employers beyond Riverfront &amp; the recent SaaS chapter
                </h3>
                <p className="mt-4 leading-relaxed text-chart-ink/95">
                  Riverfront CTO leadership and the ~four-year CTO / acting CEO SaaS chapter anchor the
                  composite themes shown above. CTO-caliber modernization also unfolded across{' '}
                  <strong>additional unnamed employers</strong>—without enumerating timelines here—with
                  recurring arcs of <strong>modernizing live revenue footprints</strong>: portfolio consolidation,
                  integrations &amp; migrations, analytics capabilities,{' '}
                  <strong>cloud choreography</strong>, vendor governance, cyber preparedness, prudent
                  profit-driven rationalization, and{' '}
                  <strong>board-facing technology narrative during inflection stress</strong>.
                </p>
                <ul className="mt-5 list-disc space-y-2 ps-5 leading-relaxed text-chart-ink/95">
                  <li>
                    Recurring <strong>bridge role</strong> between executive sponsors skeptical of ETA
                    promises and engineers tired of brittle deadlines—establishing phased truth on
                    capacity, architectural debt, and risk acceptance.
                  </li>
                  <li>
                    Built trust with <strong>Risk</strong>, <strong>Internal Audit</strong>, and vendor
                    ecosystems so initiatives did not stall in perpetual “exceptions” queues.
                  </li>
                </ul>
                <p className="mt-5 text-chart-ink/90">
                  In diligence, <strong>Chart Room AI</strong> can connect you with
                  context-appropriate references and artifacts—within the boundaries of prior
                  agreements.
                </p>
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
          <div className="mt-10 space-y-4 rounded-lg border border-chart-navy/10 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-chart-navy">Governed throughput, not hype</h3>
            <p className="leading-relaxed text-chart-ink/95">
              Many programs optimize for vendor bake-offs or slide walls. We optimize for{' '}
              <strong>repeatable production</strong>
              — aligning sponsors, engineering, security, and compliance so pilots graduate with
              evaluations, rollback paths, and accountability. We prioritize compliance-aware,
              auditable patterns over agent demos that your risk team would never sign.
            </p>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Connect" title="Start a routed conversation">
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-chart-ink md:text-xl">
            <p className="rounded-lg border border-chart-gold/35 bg-white p-6 text-base leading-relaxed text-chart-ink shadow-sm md:text-lg">
              We also welcome inbound on <strong>speaking</strong>,{' '}
              <strong>non-executive advisory</strong>, and <strong>board-related</strong>{' '}
              conversations where AI, technology risk, or modernization depth is material — use
              email to outline fit and timing.
            </p>
            <p>
              Email remains the quickest path — share context, timelines, stakeholder map,
              constraints, NDAs needed, desired outcomes.
            </p>
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
              {siteConfig.resumeHref ? (
                <a
                  href={siteConfig.resumeHref}
                  rel={siteConfig.resumeHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={siteConfig.resumeHref.startsWith("http") ? "_blank" : undefined}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-navy/50 px-6 py-3 text-base font-semibold text-chart-navy hover:bg-chart-navy hover:text-white"
                >
                  Download résumé (PDF)
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center rounded-md border-2 border-dashed border-chart-navy/25 px-6 py-3 text-base font-medium text-chart-ink/55">
                  Add{' '}
                  <code className="mx-1 rounded bg-chart-navy/5 px-1 py-0.5 text-xs">
                    NEXT_PUBLIC_RESUME_URL
                  </code>{' '}
                  or drop a PDF into <code className="text-xs">web/public/</code>
                </span>
              )}
            </div>
            <p className="text-sm text-chart-ink/75">
              Update public knobs via <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_CONTACT_EMAIL</code>,{' '}
              <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_LINKEDIN_URL</code>,{' '}
              <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_RESUME_URL</code> (.env.local).
            </p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
