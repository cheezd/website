import { CtaBand } from "@/components/CtaBand";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { engagementOptions } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact",
  description: "Contact Chart Room AI about fractional AI transformation leadership.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Connect" title="Start with the AI decision that needs momentum.">
        <p>
          Share the initiative, what is blocked, who owns the decision, and what outcome would make
          the next conversation worthwhile. The diagnostic request is reviewed first so the follow-up
          can focus on the highest-leverage executive move.
        </p>
      </PageIntro>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 text-lg leading-relaxed text-chart-ink">
              <p className="rounded-xl border border-chart-gold/35 bg-chart-surface p-6">
                Useful first notes usually include the business decision, current initiative stage,
                stakeholder map, risk or compliance constraints, timeline, and whether an NDA is
                needed before details are shared.
              </p>

              <div className="rounded-xl border border-chart-navy/10 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold tracking-tight text-chart-navy">
                  Prefer to book directly?
                </h2>
                <p className="mt-2 text-base leading-relaxed text-chart-ink/80">
                  If you already know a focused diagnostic is the right next step, choose a time on
                  the calendar. The form remains the best path when context or fit needs review
                  first.
                </p>
                <a
                  href={siteConfig.bookingHref}
                  className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-gold/90 px-5 py-3 text-sm font-semibold text-chart-navy hover:bg-chart-gold/90"
                >
                  Choose a diagnostic time
                </a>
              </div>

              <div className="rounded-xl border border-chart-navy/10 bg-chart-surface p-6">
                <h2 className="text-lg font-bold tracking-tight text-chart-navy">
                  Trust signals
                </h2>
                <p className="mt-2 text-base leading-relaxed text-chart-ink/80">
                  Review background and credentials if that helps qualify the conversation.
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:flex-wrap">
                  {siteConfig.linkedInHref ? (
                    <a
                      href={siteConfig.linkedInHref}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-chart-teal underline underline-offset-4 transition hover:text-chart-navy"
                    >
                      LinkedIn profile
                    </a>
                  ) : null}
                  <a
                    href="#audit"
                    className="text-chart-teal underline underline-offset-4 transition hover:text-chart-navy"
                  >
                    About the friction audit
                  </a>
                  {siteConfig.resumeHref ? (
                    <a
                      href={siteConfig.resumeHref}
                      rel={
                        siteConfig.resumeHref.startsWith("http") ? "noopener noreferrer" : undefined
                      }
                      target={siteConfig.resumeHref.startsWith("http") ? "_blank" : undefined}
                      className="text-chart-teal underline underline-offset-4 transition hover:text-chart-navy"
                    >
                      Resume PDF
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section id="audit" className="border-y border-chart-navy/10 bg-chart-surface">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] lg:max-w-6xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
              Low-friction entry
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-chart-navy">
              Free 5-minute Agentic Workflow Friction Audit
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-chart-ink">
              The audit is a lightweight way to surface where project flow, AI pilots, or delivery
              operations are leaking time, money, and momentum.
            </p>
          </div>
          <div className="rounded-2xl border border-chart-navy/10 bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold text-chart-navy">
              The 5-minute Agentic Workflow Friction Audit is being offered selectively while the
              scoring model is refined.
            </p>
            <p className="mt-3 leading-relaxed text-chart-ink/80">
              Request access through the diagnostic form and we will send the current version when
              it is available for your situation.
            </p>
            <a
              href="#diagnostic-form"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-chart-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-chart-navy/90"
            >
              Ask for the audit link
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:max-w-6xl">
          <div className="rounded-2xl border border-chart-navy/10 bg-chart-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
              Common starting points
            </p>
            <div className="mt-5 grid gap-4">
              {engagementOptions.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-chart-navy/10 bg-white p-5"
                >
                  <h2 className="text-lg font-bold tracking-tight text-chart-navy">{item.title}</h2>
                  <p className="mt-2 leading-relaxed text-chart-ink/90">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to start with a short note?"
        body="Use the form above with the decision you are trying to make, the initiative status, and who needs to be aligned."
      />
    </>
  );
}
