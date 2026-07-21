"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";
import { destinations } from "@/data/destinations";

type PrFilter = "all" | "pr" | "no-pr";

export default function DestinationsExplorer() {
  const [prFilter, setPrFilter] = useState<PrFilter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchesPr =
        prFilter === "all" ||
        (prFilter === "pr" && d.quickFacts.prPathway) ||
        (prFilter === "no-pr" && !d.quickFacts.prPathway);
      const matchesQuery =
        query.trim() === "" ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.popularCourses.some((c) => c.toLowerCase().includes(query.toLowerCase()));
      return matchesPr && matchesQuery;
    });
  }, [prFilter, query]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 rounded-pass border border-ink/10 bg-paper-dim p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-ink-60">
          <SlidersHorizontal size={16} />
          <span className="mono-label">Filter</span>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by country or course…"
          className="min-h-[44px] flex-1 rounded-full border border-ink/15 bg-paper px-4 text-sm focus:border-brass focus:outline-none sm:max-w-xs"
        />
        <div className="flex gap-2">
          {(["all", "pr", "no-pr"] as PrFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setPrFilter(f)}
              className={`min-h-[44px] rounded-full px-4 text-sm font-medium transition-colors ${
                prFilter === f ? "bg-ink text-paper" : "border border-ink/15 text-ink hover:bg-ink/5"
              }`}
            >
              {f === "all" ? "All Countries" : f === "pr" ? "PR Pathway" : "No PR Pathway"}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink-60">No destinations match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/destinations/${d.slug}`}
                className="group flex h-full flex-col justify-between rounded-pass border-2 border-dashed border-ink/15 bg-paper p-6 transition-all hover:border-brass hover:shadow-stamp"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <FlagIcon countryCode={d.countryCode} label={d.name} className="h-8 w-12" />
                    {d.mostPopular && (
                      <span className="mono-label rounded-full bg-brass px-2.5 py-1 text-paper">Popular</span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-xl text-ink">{d.name}</h3>
                  <p className="mt-1 text-sm text-ink-60">{d.tagline}</p>
                </div>
                <div className="mt-5 space-y-1.5 border-t border-dashed border-ink/15 pt-4 font-mono text-xs text-ink-60">
                  <div className="flex justify-between">
                    <span>VISA</span>
                    <span className="text-ink">{d.visaType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SUCCESS</span>
                    <span className="text-route">{d.quickFacts.visaSuccessRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PR PATHWAY</span>
                    <span className="text-ink">{d.quickFacts.prPathway ? "Yes" : "No"}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brass-dark">
                  View destination <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
