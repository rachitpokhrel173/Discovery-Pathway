"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FlagIcon from "@/components/ui/FlagIcon";
import { destinations } from "@/data/destinations";

export default function DestinationsPreview() {
  return (
    <section className="section-pad bg-paper-dim">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Where you could go"
            title="Eight destinations. One process."
            description="Every stamp below is a real pathway we manage end-to-end — from admission to visa filing."
          />
          <Link href="/destinations" className="btn-secondary shrink-0">
            View all destinations <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={d.mostPopular ? "col-span-2 row-span-2" : ""}
            >
              <Link
                href={`/destinations/${d.slug}`}
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-pass border-2 border-dashed border-ink/15 bg-paper p-5 transition-all hover:border-brass hover:shadow-stamp ${
                  d.mostPopular ? "min-h-[220px] p-7" : "min-h-[160px]"
                }`}
              >
                {d.mostPopular && (
                  <span className="mono-label absolute right-4 top-4 rounded-full bg-brass px-3 py-1 text-paper">
                    Most Popular
                  </span>
                )}
                <div>
                  <FlagIcon
                    countryCode={d.countryCode}
                    label={d.name}
                    className={d.mostPopular ? "h-9 w-14" : "h-7 w-11"}
                  />
                  <h3 className={`mt-3 font-display text-ink ${d.mostPopular ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                    {d.name}
                  </h3>
                  {d.mostPopular && (
                    <p className="mt-2 max-w-xs text-sm text-ink-60">{d.tagline}</p>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-stamp text-ink-60">{d.visaType}</span>
                  <ArrowUpRight size={16} className="text-ink-60 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}