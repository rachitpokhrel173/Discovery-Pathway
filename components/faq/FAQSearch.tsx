"use client";

import { useState, useMemo } from "react";
import { Search, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "@/data/faqs";

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FAQSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCategory = category === "All" || f.category === category;
      const matchesQuery =
        query.trim() === "" ||
        f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase());
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
          placeholder="Search FAQs — try 'refusal' or 'scholarship'…"
          className="min-h-[48px] flex-1 bg-transparent text-sm text-ink placeholder:text-ink-60 focus:outline-none"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
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
        <p className="py-16 text-center text-ink-60">No FAQs match &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {filtered.map((f) => (
            <div key={f.id} id={f.id}>
              <button
                onClick={() => setOpen(open === f.id ? null : f.id)}
                className="flex min-h-[44px] w-full items-start justify-between gap-4 py-5 text-left"
              >
                <div>
                  <span className="mono-label text-brass-dark">{f.category}</span>
                  <p className="mt-1 text-base font-medium text-ink sm:text-lg">{f.question}</p>
                </div>
                <Plus size={18} className={`mt-1 shrink-0 text-brass-dark transition-transform ${open === f.id ? "rotate-45" : ""}`} />
              </button>
              {open === f.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden pb-5 text-sm leading-relaxed text-ink-60 sm:text-base"
                >
                  {f.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
