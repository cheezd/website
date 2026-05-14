import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#why-chart-room", label: "Why Chart Room AI" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-chart-navy/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:max-w-6xl">
        <Link
          href="#top"
          className="font-semibold tracking-tight text-white transition-opacity hover:opacity-90 min-h-11 inline-flex items-center"
        >
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/90 sm:justify-end"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded underline-offset-4 transition-colors hover:text-chart-teal hover:underline decoration-chart-teal/80 min-h-11 inline-flex items-center"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
