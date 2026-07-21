"use client";

import { useState } from "react";
import { X, Plus, Check, Minus } from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";
import { destinations } from "@/data/destinations";
import { Destination } from "@/types";

const rows: { label: string; get: (d: Destination) => React.ReactNode }[] = [
  { label: "Visa Type", get: (d) => d.visaType },
  { label: "Intakes", get: (d) => d.intakes.join(", ") },
  { label: "Avg. Tuition / Year", get: (d) => d.quickFacts.avgTuitionPerYear },
  { label: "Avg. Living / Month", get: (d) => d.quickFacts.avgLivingPerMonth },
  { label: "Visa Success Rate", get: (d) => d.quickFacts.visaSuccessRate },
  { label: "Work Rights", get: (d) => d.quickFacts.workRights },
  {
    label: "PR Pathway",
    get: (d) =>
      d.quickFacts.prPathway ? (
        <Check size={16} className="text-route" />
      ) : (
        <Minus size={16} className="text-ink-60" />
      ),
  },
];

export default function CompareTable() {
  const [selected, setSelected] = useState<string[]>([
    "south-korea",
    "australia",
    "united-kingdom",
  ]);

  const toggle = (slug: string) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 4 ? [...prev, slug] : prev
    );
  };

  const active = destinations.filter((d) => selected.includes(d.slug));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {destinations.map((d) => {
          const isOn = selected.includes(d.slug);
          return (
            <button
              key={d.slug}
              onClick={() => toggle(d.slug)}
              className={`flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${
                isOn ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:bg-ink/5"
              }`}
            >
              <FlagIcon countryCode={d.countryCode} label={d.name} className="h-4 w-6" />
              {d.name}
              {isOn ? <X size={14} /> : <Plus size={14} />}
            </button>
          );
        })}
      </div>

      {active.length === 0 ? (
        <p className="py-16 text-center text-ink-60">Select at least one country to compare.</p>
      ) : (
        <div className="overflow-x-auto rounded-pass border border-ink/10">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-ink text-paper">
                <th className="sticky left-0 bg-ink px-5 py-4 font-mono text-xs uppercase tracking-stamp">
                  Compare
                </th>
                {active.map((d) => (
                  <th key={d.slug} className="px-5 py-4">
                    <FlagIcon countryCode={d.countryCode} label={d.name} className="h-5 w-8" />
                    <span className="ml-2 font-display text-base font-normal">{d.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-paper" : "bg-paper-dim"}>
                  <td className="sticky left-0 whitespace-nowrap bg-inherit px-5 py-4 font-mono text-xs uppercase tracking-stamp text-ink-60">
                    {row.label}
                  </td>
                  {active.map((d) => (
                    <td key={d.slug} className="px-5 py-4 text-ink">
                      {row.get(d)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}