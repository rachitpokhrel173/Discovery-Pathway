"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { faqs } from "@/data/faqs";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: string;
}

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results: SearchResult[] = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    const destResults: SearchResult[] = destinations
      .filter((d) => d.name.toLowerCase().includes(q) || d.tagline.toLowerCase().includes(q))
      .map((d) => ({
        title: d.name,
        description: d.tagline,
        href: `/destinations/${d.slug}`,
        type: "Destination",
      }));

    const faqResults: SearchResult[] = faqs
      .filter((f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
      .slice(0, 5)
      .map((f) => ({
        title: f.question,
        description: f.answer,
        href: `/faq#${f.id}`,
        type: "FAQ",
      }));

    return [...destResults, ...faqResults];
  }, [query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-ink/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="mx-auto mt-24 w-[92%] max-w-2xl rounded-pass bg-paper shadow-panel"
      >
        <div className="flex items-center gap-3 border-b border-ink/10 px-5 py-4">
          <SearchIcon size={20} className="text-ink-60" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, FAQs, resources…"
            className="flex-1 bg-transparent text-base text-ink placeholder:text-ink-60 focus:outline-none"
          />
          <button onClick={onClose} aria-label="Close search" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-ink/5">
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim().length >= 2 && results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-ink-60">No results for &ldquo;{query}&rdquo;.</p>
          )}
          {results.map((r) => (
            <Link
              key={r.href + r.title}
              href={r.href}
              onClick={onClose}
              className="group flex items-start justify-between gap-4 rounded-xl px-4 py-3 hover:bg-ink/5"
            >
              <div>
                <span className="mono-label text-brass-dark">{r.type}</span>
                <p className="mt-1 text-sm font-semibold text-ink">{r.title}</p>
                <p className="line-clamp-1 text-xs text-ink-60">{r.description}</p>
              </div>
              <ArrowRight size={16} className="mt-1 shrink-0 text-ink-60 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
          {query.trim().length < 2 && (
            <p className="px-4 py-8 text-center text-sm text-ink-60">Start typing to search the site.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
