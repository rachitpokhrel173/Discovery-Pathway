"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";
import { getCountryCode } from "@/lib/utils";
import { courses, fields, levels, budgetTiers } from "@/data/courses";

export default function CourseFinder() {
  const [field, setField] = useState<string>("all");
  const [level, setLevel] = useState<string>("all");
  const [budget, setBudget] = useState<string>("all");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      return (
        (field === "all" || c.field === field) &&
        (level === "all" || c.level === level) &&
        (budget === "all" || c.budgetTier === budget)
      );
    });
  }, [field, level, budget]);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-pass border border-ink/10 bg-paper-dim p-5 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-stamp text-ink-60">Field of Study</label>
          <select
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="min-h-[44px] w-full rounded-lg border border-ink/15 bg-paper px-3 text-sm focus:border-brass focus:outline-none"
          >
            <option value="all">All Fields</option>
            {fields.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-stamp text-ink-60">Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="min-h-[44px] w-full rounded-lg border border-ink/15 bg-paper px-3 text-sm focus:border-brass focus:outline-none"
          >
            <option value="all">All Levels</option>
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-stamp text-ink-60">Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="min-h-[44px] w-full rounded-lg border border-ink/15 bg-paper px-3 text-sm focus:border-brass focus:outline-none"
          >
            <option value="all">Any Budget</option>
            {budgetTiers.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-sm text-ink-60">{filtered.length} course{filtered.length !== 1 ? "s" : ""} found</p>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink-60">No courses match these filters — try widening your search.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <Link
              key={c.id}
              href={`/destinations/${c.countrySlug}`}
              className="group flex flex-col justify-between rounded-pass border border-ink/10 bg-paper p-5 transition-all hover:border-brass hover:shadow-stamp"
            >
              <div>
                <div className="flex items-center justify-between">
                  <FlagIcon countryCode={getCountryCode(c.countrySlug)} label={c.countryName} className="h-6 w-9" />
                  <span
                    className={`mono-label rounded-full px-2.5 py-1 ${
                      c.budgetTier === "Budget"
                        ? "bg-route/10 text-route"
                        : c.budgetTier === "Mid-range"
                        ? "bg-brass/15 text-brass-dark"
                        : "bg-ink/10 text-ink-60"
                    }`}
                  >
                    {c.budgetTier}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-1 text-xs text-ink-60">{c.countryName} · {c.level} · {c.duration}</p>
              </div>
              <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-brass-dark">
                <GraduationCap size={14} /> View destination
                <ArrowUpRight size={14} className="ml-auto transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}