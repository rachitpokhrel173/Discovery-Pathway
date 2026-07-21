"use client";

import { useState, useMemo } from "react";
import { Star, PlayCircle } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const countries = ["All", ...Array.from(new Set(testimonials.map((t) => t.country)))];

export default function SuccessStoriesGrid() {
  const [country, setCountry] = useState("All");

  const filtered = useMemo(
    () => (country === "All" ? testimonials : testimonials.filter((t) => t.country === country)),
    [country]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {countries.map((c) => (
          <button
            key={c}
            onClick={() => setCountry(c)}
            className={`min-h-[40px] rounded-full border px-4 text-sm font-medium transition-colors ${
              country === c ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:bg-ink/5"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <div key={t.id} className="flex flex-col rounded-pass border border-ink/10 bg-paper-dim p-6">
            {t.videoUrl ? (
              <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-ink/90">
                <PlayCircle size={40} className="text-brass-light" />
              </div>
            ) : (
              <div className="mb-2 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brass text-brass" />
                ))}
              </div>
            )}
            <p className="flex-1 text-sm leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-5 border-t border-dashed border-ink/15 pt-4">
              <p className="text-sm font-semibold text-ink">{t.name}</p>
              <p className="font-mono text-xs uppercase tracking-stamp text-ink-60">
                {t.university} · {t.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
