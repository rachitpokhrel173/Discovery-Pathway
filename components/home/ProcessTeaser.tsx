"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processStages } from "@/data/process";

export default function ProcessTeaser() {
  return (
    <section className="section-pad overflow-hidden bg-ink">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            light
            eyebrow="The journey"
            title="Six stages. One destination."
            description="From your first free consultation to the day you board — every stage is planned before it starts."
          />
          <Link href="/process" className="btn-ghost-inverse shrink-0">
            See full process <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="relative mt-16">
          <svg
            className="absolute left-0 top-6 hidden w-full lg:block"
            height="4"
            viewBox="0 0 1200 4"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0"
              y1="2"
              x2="1200"
              y2="2"
              stroke="#C8973B"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid gap-8 lg:grid-cols-6 lg:gap-4">
            {processStages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass bg-ink font-mono text-sm text-brass-light">
                  {String(stage.stage).padStart(2, "0")}
                </div>
                <h3 className="text-base font-semibold text-paper">{stage.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-stamp text-brass-light/70">
                  {stage.duration}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
