"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, Clock } from "lucide-react";
import { resources } from "@/data/resources";

const categories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];

export default function ResourcesGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesQuery =
        query.trim() === "" ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="mb-6 flex items-center gap-3 rounded-full border border-ink/15 bg-paper px-5 py-1">
        <Search size={18} className="text-ink-60" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides and articles…"
          className="min-h-[48px] flex-1 bg-transparent text-sm text-ink placeholder:text-ink-60 focus:outline-none"
        />
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`min-h-[40px] rounded-full border px-4 text-sm font-medium transition-colors ${
              category === c ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:bg-ink/5"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink-60">No resources match your search.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group flex flex-col justify-between rounded-pass border border-ink/10 bg-paper-dim p-6 transition-all hover:border-brass hover:shadow-stamp"
            >
              <div>
                <span className="mono-label text-brass-dark">{r.category}</span>
                <h3 className="mt-2 text-lg leading-snug text-ink">{r.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-60">{r.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="flex items-center gap-1 font-mono text-xs text-ink-60">
                  <Clock size={12} /> {r.readingTime}
                </span>
                <ArrowUpRight size={16} className="text-ink-60 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
