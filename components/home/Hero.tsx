"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brass/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-route/10 blur-3xl"
      />

      <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mono-label mb-6 inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-paper/70">
            <Plane size={13} /> Passenger&nbsp;class: Your Future
          </span>
          <h1 className="text-4xl leading-[1.08] text-paper sm:text-5xl lg:text-6xl">
            Your global education
            <br />
            begins in <span className="text-brass-light">Banepa.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/70 sm:text-lg">
            Four years, {siteConfig.stats.visasApproved}+ visas approved, and a {siteConfig.stats.successRate}%
            success rate — Discovery Pathway takes you from first consultation to boarding gate across
            South Korea, Japan, Australia, the UK, Canada, the USA, Germany, and Finland.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/destinations" className="btn-ghost-inverse">
              Explore Destinations
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative flex overflow-hidden rounded-pass bg-paper shadow-panel">
            <div className="flex-1 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="mono-label text-ink-60">Boarding Pass</span>
                <span className="mono-label rounded-full bg-route/10 px-3 py-1 text-route">Confirmed</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="mono-label text-ink-60">From</p>
                  <p className="font-display text-2xl text-ink">BNP</p>
                  <p className="text-xs text-ink-60">Banepa, Nepal</p>
                </div>
                <div>
                  <p className="mono-label text-ink-60">To</p>
                  <p className="font-display text-2xl text-ink">Anywhere</p>
                  <p className="text-xs text-ink-60">16 destinations</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-dashed border-ink/15 pt-5">
                <div>
                  <p className="mono-label text-ink-60">Gate</p>
                  <p className="font-mono text-sm text-ink">D-2</p>
                </div>
                <div>
                  <p className="mono-label text-ink-60">Status</p>
                  <p className="font-mono text-sm text-route">Approved</p>
                </div>
                <div>
                  <p className="mono-label text-ink-60">Success</p>
                  <p className="font-mono text-sm text-ink">97.9%</p>
                </div>
              </div>
              <div className="relative mt-6 h-16 w-full overflow-hidden rounded-lg bg-ink/5">
                <div className="absolute inset-0 flex items-center justify-center gap-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-10 bg-ink/70"
                      style={{ width: i % 3 === 0 ? "3px" : "1.5px" }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="perforated w-16 shrink-0 bg-brass/95 sm:w-20">
              <div className="flex h-full items-center justify-center">
                <span className="mono-label rotate-90 whitespace-nowrap text-paper">
                  DISCOVERY PATHWAY
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
