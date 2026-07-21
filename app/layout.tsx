import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import StickyConsultCTA from "@/components/layout/StickyConsultCTA";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/lib/utils";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Study Abroad Consultancy in Banepa, Nepal`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "study abroad Nepal",
    "Banepa education consultancy",
    "South Korea visa Nepal",
    "Japan student visa Nepal",
    "Australia student visa Nepal",
    "IELTS Banepa",
    "TOPIK Nepal",
    "Discovery Pathway",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Study Abroad Consultancy in Banepa, Nepal`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Study Abroad Consultancy in Banepa, Nepal`,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chandeshwori Margh",
      addressLocality: "Banepa",
      addressRegion: "Kavrepalanchok",
      addressCountry: "NP",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.tiktok],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brass focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-[var(--header-height)]">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <StickyConsultCTA />
        <ScrollToTop />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
