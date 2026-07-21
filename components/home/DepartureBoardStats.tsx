"use client";

import Container from "@/components/ui/Container";
import { useCountUp } from "@/hooks/useCountUp";
import { siteConfig } from "@/lib/utils";

function Stat({
  target,
  suffix,
  label,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const { ref, value } = useCountUp(target, 1400, decimals);
  return (
    <div ref={ref} className="flex flex-col items-center border-r border-paper/10 px-4 py-8 text-center last:border-r-0 sm:py-10">
      <span className="font-mono text-4xl font-semibold text-brass-light sm:text-5xl">
        {value}
        {suffix}
      </span>
      <span className="mono-label mt-3 text-paper/60">{label}</span>
    </div>
  );
}

export default function DepartureBoardStats() {
  return (
    <section className="bg-ink-soft">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <Stat target={siteConfig.stats.visasApproved} suffix="+" label="Visas Approved" />
          <Stat target={siteConfig.stats.successRate} suffix="%" label="Success Rate" decimals={1} />
          <Stat target={siteConfig.stats.universityPartners} suffix="+" label="University Partners" />
          <Stat target={siteConfig.stats.destinations} suffix="" label="Destinations" />
        </div>
      </Container>
    </section>
  );
}
