"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { costProfiles, accommodationMultiplier, cityTierMultiplier } from "@/data/costData";
import { formatNumber } from "@/lib/utils";

type ProgramLevel = "diploma" | "bachelor" | "master";
type Accommodation = "dormitory" | "shared" | "private";
type CityTier = "tier-1" | "tier-2" | "tier-3";

export default function CostCalculator() {
  const [countrySlug, setCountrySlug] = useState(costProfiles[0]!.slug);
  const [level, setLevel] = useState<ProgramLevel>("bachelor");
  const [accommodation, setAccommodation] = useState<Accommodation>("shared");
  const [cityTier, setCityTier] = useState<CityTier>("tier-2");
  const [years, setYears] = useState(2);

  const country = costProfiles.find((c) => c.slug === countrySlug)!;

  const breakdown = useMemo(() => {
    const tuitionPerYear = country.tuitionPerYear[level];
    const totalTuition = tuitionPerYear * years;

    const monthlyLiving =
      country.livingPerMonthBase * accommodationMultiplier[accommodation]! * cityTierMultiplier[cityTier]!;
    const totalLiving = monthlyLiving * 12 * years;

    const oneTime = country.oneTimeFees;
    const total = totalTuition + totalLiving + oneTime;

    return { tuitionPerYear, totalTuition, monthlyLiving, totalLiving, oneTime, total };
  }, [country, level, accommodation, cityTier, years]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-6 rounded-pass border border-ink/10 bg-paper p-6 sm:p-8">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Destination</label>
          <div className="grid grid-cols-4 gap-2">
            {costProfiles.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCountrySlug(c.slug)}
                className={`flex min-h-[44px] flex-col items-center justify-center rounded-lg border p-2 text-xs transition-colors ${
                  countrySlug === c.slug ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:bg-ink/5"
                }`}
              >
                <span className="text-lg">{c.flag}</span>
                {c.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Program Level</label>
          <div className="grid grid-cols-3 gap-2">
            {(["diploma", "bachelor", "master"] as ProgramLevel[]).map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`min-h-[44px] rounded-lg border text-sm capitalize transition-colors ${
                  level === l ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:bg-ink/5"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            Program Duration: <span className="font-mono text-brass-dark">{years} year{years > 1 ? "s" : ""}</span>
          </label>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-brass"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">City Tier</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "tier-1" as CityTier, label: "Major City" },
              { value: "tier-2" as CityTier, label: "Mid-size" },
              { value: "tier-3" as CityTier, label: "Regional" },
            ].map((t) => (
              <button
                key={t.value}
                onClick={() => setCityTier(t.value)}
                className={`min-h-[44px] rounded-lg border px-2 text-xs transition-colors ${
                  cityTier === t.value ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:bg-ink/5"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Accommodation</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "dormitory" as Accommodation, label: "Dormitory" },
              { value: "shared" as Accommodation, label: "Shared Flat" },
              { value: "private" as Accommodation, label: "Private" },
            ].map((a) => (
              <button
                key={a.value}
                onClick={() => setAccommodation(a.value)}
                className={`min-h-[44px] rounded-lg border px-2 text-xs transition-colors ${
                  accommodation === a.value ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:bg-ink/5"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-pass bg-ink p-6 text-paper sm:p-8">
        <div className="flex items-center justify-between border-b border-dashed border-paper/20 pb-4">
          <span className="mono-label text-paper/50">Estimated Cost Receipt</span>
          <span className="mono-label text-brass-light">
            {country.flag} {country.name}
          </span>
        </div>

        <div className="mt-6 space-y-4 font-mono text-sm">
          <div className="flex justify-between">
            <span className="text-paper/60">Tuition ({level}, ×{years}yr)</span>
            <span>NPR {formatNumber(breakdown.totalTuition)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-paper/60">Living Costs (×{years}yr)</span>
            <span>NPR {formatNumber(Math.round(breakdown.totalLiving))}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-paper/60">Visa, Insurance &amp; Flight (one-time)</span>
            <span>NPR {formatNumber(breakdown.oneTime)}</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-dashed border-paper/20 pt-6">
          <span className="text-base font-semibold text-paper">Total Estimated Cost</span>
          <span className="font-mono text-2xl font-semibold text-brass-light">
            NPR {formatNumber(Math.round(breakdown.total))}
          </span>
        </div>
        <p className="mt-2 font-mono text-xs text-paper/40">
          ≈ NPR {formatNumber(Math.round(breakdown.total / years))} / year average
        </p>

        <p className="mt-6 text-xs leading-relaxed text-paper/50">
          This is a planning estimate based on typical ranges — not a quote. Actual costs vary by
          institution and scholarship eligibility.
        </p>

        <Link href="/contact" className="btn-primary mt-6 w-full">
          Get an exact plan for my budget <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
