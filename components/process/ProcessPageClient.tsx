"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, AlertTriangle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { processStages, commonRefusalReasons } from "@/data/process";

export default function ProcessPageClient() {
  const [open, setOpen] = useState<string | null>(processStages[0]?.id ?? null);

  return (
    <div>
      <div className="bg-ink pb-14 pt-8 sm:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "Process" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="mono-label mb-4 inline-block text-brass-light">The journey</span>
            <h1 className="text-4xl text-paper sm:text-5xl">Six stages. One destination.</h1>
            <p className="mt-4 text-base leading-relaxed text-paper/70 sm:text-lg">
              Every student who works with us moves through the same six stages — nothing skipped,
              nothing rushed. Here&rsquo;s exactly what happens, and what we need from you, at each one.
            </p>
          </div>
        </Container>
      </div>

      <section className="section-pad bg-paper">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {processStages.map((stage) => (
              <div key={stage.id} className="overflow-hidden rounded-pass border border-ink/10">
                <button
                  onClick={() => setOpen(open === stage.id ? null : stage.id)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 bg-paper-dim px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brass font-mono text-sm text-brass-dark">
                      {String(stage.stage).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-ink sm:text-lg">{stage.title}</p>
                      <p className="font-mono text-xs uppercase tracking-stamp text-ink-60">{stage.duration}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink-60 transition-transform ${open === stage.id ? "rotate-180" : ""}`}
                  />
                </button>
                {open === stage.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="overflow-hidden px-6 py-6"
                  >
                    <p className="text-sm leading-relaxed text-ink/80 sm:text-base">{stage.description}</p>
                    <div className="mt-5 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="mono-label mb-2 text-brass-dark">What We Do</p>
                        <ul className="space-y-1.5">
                          {stage.whatWeDo.map((w, i) => (
                            <li key={i} className="text-sm text-ink-60">
                              — {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mono-label mb-2 text-route">What You Need</p>
                        <ul className="space-y-1.5">
                          {stage.whatYouNeed.map((w, i) => (
                            <li key={i} className="text-sm text-ink-60">
                              — {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-ink">
        <Container className="max-w-3xl">
          <div className="mb-10 flex items-center gap-3">
            <AlertTriangle size={22} className="text-brass-light" />
            <SectionHeading light title="Where most applications fail" className="mb-0" />
          </div>
          <div className="space-y-4">
            {commonRefusalReasons.map((r) => (
              <div key={r.reason} className="rounded-pass border border-paper/15 p-6">
                <p className="text-base font-semibold text-paper">{r.reason}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">{r.mitigation}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brass py-16">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-xl text-2xl text-paper sm:text-3xl">
            Ready to start stage one — for free?
          </h2>
          <Link href="/contact" className="btn-secondary border-transparent bg-ink text-paper hover:bg-ink/85 hover:text-paper">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </Container>
      </section>
    </div>
  );
}
