"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

/**
 * Add a `logo` path once you have the official logo file from each partner
 * (most universities provide a partner/media brand kit on request — ask
 * your admissions/partnership contact there). Drop the file in
 * public/images/partners/ and reference it here, e.g. "/images/partners/sydney-met.png".
 *
 * Any partner without a logo path automatically falls back to styled text,
 * so nothing breaks while you're still collecting logo files.
 */
const partners: { name: string; logo?: string }[] = [
  { name: "Sydney Metropolitan University", logo: "/images/partners/sydneymet.png" },
  { name: "Tongmyong University", logo: "/images/partners/tongmyong_Uni.jpg" },
  { name: "Dong-Eui University", logo: "/images/partners/dongeui.png" },
  { name: "Silla University", logo: "/images/partners/Silla__Logo.png" },
  { name: "University of East London", logo: "/images/partners/eastlondon.png" },
  { name: "BPP University", logo: "/images/partners/bppuni.png" },
  { name: "Federation University" },
  { name: "Victoria University", logo: "/images/partners/Victoria_University_Logo.png" },
  { name: "British Council", logo: "/images/partners/BritishCouncil_Logo.png" },
  { name: "IDP Education", logo: "/images/partners/idp.png" },
  { name: "Busan University of Foreign Studies", logo: "/images/partners/BUFS_logo.jpg" },
  { name: "Far East University", logo: "/images/partners/fareastlogo.png" },
  { name: "Ulster University" },
  { name: "University of the Sunshine Coast", logo: "/images/partners/UniSC_Intl-Logo.png" },
  { name: "AIBI Higher Education", logo: "/images/partners/aibilogo.png" },
  { name: "The Institute of International Studies", logo: "/images/partners/TIIS.png" },
  { name: "Kyungdong University", logo: "/images/partners/kdu__logo.png" },
  { name: "Mie University", logo: "/images/partners/mieu_logo.png" },
  { name: "National Academy of Professional Studies", logo: "/images/partners/NAPS__LOGO.png" },
  { name: "Fraser Valley Partner Colleges", logo: "/images/partners/fraser.avif" },
  { name: "ECAN", logo: "/images/partners/ecan.jpeg" },
  { name: "KECAN", logo: "/images/partners/kecan.png" },
];

function PartnerLogo({ name, logo }: { name: string; logo?: string }) {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    return (
      <div className="relative h-9 w-32 shrink-0 opacity-60 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-36">
        <Image
          src={logo}
          alt={name}
          fill
          sizes="144px"
          className="object-contain"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <span className="whitespace-nowrap font-display text-xl text-ink/30 sm:text-2xl">
      {name}
    </span>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="border-y border-ink/10 bg-paper py-10">
      <Container className="mb-6">
        <p className="mono-label text-center text-ink-60 sm:text-left">
          50+ University &amp; Institutional Partners
        </p>
      </Container>
      <div className="no-scrollbar overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12">
          {[...partners, ...partners].map((partner, i) => (
            <PartnerLogo key={i} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}