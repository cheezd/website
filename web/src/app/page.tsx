import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FeatureCard } from "@/components/FeatureCard";
import {
  brandImages,
  commonSituations,
  engagementOptions,
  fitSignals,
  mailHref,
  proofPoints,
} from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-chart-navy/10 bg-chart-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-chart-navy/[0.06] to-transparent"
        />
        <div className="relative mx-auto grid max-w-5xl gap-12 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24 lg:max-w-6xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
              Fractional AI transformation leadership for regulated teams
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-chart-navy md:text-5xl lg:text-[3.35rem] lg:leading-tight">
              Turn stalled AI ambition into governed, production-ready execution.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-chart-ink md:text-xl">
              Chart Room AI helps financial services and technology leaders prioritize the right
              AI initiatives, align risk and delivery teams, and move from vendor demos to
              accountable operating capability.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={mailHref}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-chart-teal px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-[0.93]"
              >
                Discuss a stalled AI initiative
              </a>
              <Link
                href="/why-chart-room"
                className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-navy px-6 py-3 text-base font-semibold text-chart-navy transition hover:bg-chart-navy hover:text-white"
              >
                See how we help
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-chart-navy/10 bg-white p-5 shadow-sm">
            <Image
              src={brandImages.ship}
              alt="Stylized Chart Room AI ship with compass and constellation accents"
              width={720}
              height={900}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-chart-navy/10 bg-white">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div key={item.value} className="rounded-xl border border-chart-navy/10 bg-chart-surface p-5">
              <p className="text-2xl font-bold tracking-tight text-chart-navy">{item.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-chart-ink/85">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 lg:max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
            Immediate business value
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-chart-navy md:text-4xl">
            Built for leaders who need progress that can survive scrutiny.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Unblock stalled initiatives"
              body="Clarify goals, constraints, sponsor ownership, engineering reality, risk posture, and the next executable sequence."
              href="/why-chart-room"
              linkLabel="Diagnose the stall"
            />
            <FeatureCard
              title="Make AI production-ready"
              body="Move beyond pilots with evaluation discipline, rollback paths, observability, security review, and human accountability."
              href="/expertise"
              linkLabel="Review the approach"
            />
            <FeatureCard
              title="Bring CTO judgment"
              body="Work with a former Fintech CTO and CEO who has also served as CTO and CISO at an asset management firm."
              href="/experience"
              linkLabel="See credibility"
            />
          </div>

          <div className="mt-14 rounded-3xl border border-chart-gold/35 bg-chart-surface p-6 md:p-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
                When to call
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-chart-navy">
                Use Chart Room AI when the cost of vague AI strategy is becoming visible.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {commonSituations.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-chart-navy/10 bg-chart-surface">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:max-w-6xl">
          <div className="rounded-3xl bg-chart-navy p-6 shadow-sm">
            <Image
              src={brandImages.spyglass}
              alt="Stylized spyglass and constellation"
              width={900}
              height={600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
              Operator perspective
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-chart-navy md:text-4xl">
              From AI ambition to operating reality.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-chart-ink">
              AI initiatives rarely fail because leaders lack ideas. They fail when strategy,
              architecture, data, security, compliance, and delivery capacity are treated as
              separate conversations.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-chart-ink">
              Chart Room AI brings operator-level judgment to that gap. We help executive
              sponsors move beyond vendor demos and broad roadmaps toward governed execution:
              clear priorities, accountable teams, practical controls, and implementation paths
              built for regulated environments.
            </p>
            <Link
              href="/why-chart-room"
              className="mt-7 inline-flex min-h-11 items-center rounded-md border-2 border-chart-navy px-6 py-3 text-base font-semibold text-chart-navy transition hover:bg-chart-navy hover:text-white"
            >
              Why Chart Room AI
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
                Engagement paths
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-chart-navy md:text-4xl">
                Start with the level of intervention the initiative needs.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-chart-ink">
                The first conversation should clarify the business decision, blockers, urgency,
                and whether Chart Room AI is the right operating partner.
              </p>
              <a
                href={mailHref}
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md bg-chart-teal px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-[0.93]"
              >
                Request an AI readiness conversation
              </a>
            </div>
            <div className="grid gap-6">
              {engagementOptions.map((item) => (
                <FeatureCard key={item.title} {...item} href="/contact" linkLabel="Start here" />
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-chart-navy/10 bg-chart-surface p-7 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
              Best fit
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-chart-navy md:text-3xl">
              A fit when AI has to work inside real controls, real data, and real accountability.
            </h2>
            <ul className="mt-6 grid gap-4 leading-relaxed text-chart-ink md:grid-cols-3">
              {fitSignals.map((item) => (
                <li key={item} className="rounded-xl border border-chart-navy/10 bg-white p-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
