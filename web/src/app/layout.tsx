import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const seoDescription =
  "Fractional AI transformation leadership for regulated teams turning stalled AI ambition into governed, production-ready execution.";

export const metadata: Metadata = {
  title: {
    default: "Chart Room AI | Fractional AI Transformation Leadership",
    template: "%s | Chart Room AI",
  },
  description: seoDescription.substring(0, 155),
  openGraph: {
    title: "Chart Room AI | Fractional AI Transformation Leadership",
    description: seoDescription,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-16 rounded bg-chart-teal px-3 py-2 text-sm font-medium text-chart-navy transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
