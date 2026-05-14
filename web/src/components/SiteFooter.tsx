export function SiteFooter() {
  return (
    <footer className="border-t border-chart-navy/10 bg-chart-navy text-white">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-12 lg:max-w-6xl">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-8">
          <p className="text-lg font-semibold tracking-tight">Chart Room AI LLC</p>
          <p className="max-w-xl text-sm text-white/75">
            Virginia · Fractional AI transformation leadership for regulated financial
            services and technology organizations.
          </p>
        </div>
        <div className="space-y-3 text-xs leading-relaxed text-white/60">
          <p>
            <strong className="text-white/80">General.</strong> Information on this site
            is for general informational purposes only. It is not legal, tax,
            accounting, or investment advice, and is not a substitute for a signed
            consulting or advisory engagement.
          </p>
          <p>
            <strong className="text-white/80">Securities.</strong> Chart Room AI LLC is not
            a broker-dealer or registered investment adviser. Nothing herein is investment
            advice or a solicitation to buy or sell securities or other financial instruments.
          </p>
          <p className="pt-2 text-white/45">
            Have counsel review disclaimers before you rely on them in high-stakes contexts.
          </p>
        </div>
      </div>
    </footer>
  );
}
