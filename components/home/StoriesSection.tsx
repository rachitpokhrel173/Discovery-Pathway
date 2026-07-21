"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function StoriesSection() {
  const fallback = testimonials[0]!;
  const featured = testimonials.find((t) => t.featured) ?? fallback;
  const rest = testimonials.filter((t) => t.id !== featured.id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="section-pad bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Real student stories"
          title="They didn't just get a visa. They got a plan."
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 rounded-pass bg-ink p-8 text-paper sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12"
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brass/15">
            <Quote size={32} className="text-brass-light" />
          </div>
          <div>
            <div className="mb-3 flex gap-1">
              {Array.from({ length: featured.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-brass-light text-brass-light" />
              ))}
            </div>
            <p className="font-display text-xl leading-snug text-paper sm:text-2xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <p className="mt-5 font-mono text-sm text-paper/60">
              {featured.name} — {featured.university}, {featured.country}
            </p>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-end gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 hover:bg-ink/5"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 hover:bg-ink/5"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {rest.map((t) => (
            <div
              key={t.id}
              className="w-[280px] shrink-0 snap-start rounded-pass border border-ink/10 bg-paper-dim p-6"
            >
              <div className="mb-2 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-brass text-brass" />
                ))}
              </div>
              <p className="line-clamp-4 text-sm leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-stamp text-ink-60">
                {t.name} · {t.country}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
