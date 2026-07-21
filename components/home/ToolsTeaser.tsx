"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, Compass, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const tools = [
  {
    icon: Calculator,
    title: "Cost Calculator",
    description: "Estimate tuition, living costs, and total budget for any destination and program level.",
    href: "/tools/cost-calculator",
    cta: "Calculate my budget",
  },
  {
    icon: Compass,
    title: "Course Finder",
    description: "Filter real programs by field of study, country, and budget to find your shortlist in minutes.",
    href: "/tools/course-finder",
    cta: "Find my course",
  },
];

export default function ToolsTeaser() {
  return (
    <section className="section-pad bg-paper-dim">
      <Container>
        <SectionHeading eyebrow="Know before you go" title="Tools that answer the real question: is this for me?" className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-2">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={tool.href}
                className="group flex h-full flex-col justify-between rounded-pass border border-ink/10 bg-paper p-8 transition-all hover:border-brass hover:shadow-stamp"
              >
                <div>
                  <tool.icon size={28} className="text-brass-dark" strokeWidth={1.6} />
                  <h3 className="mt-4 text-2xl text-ink">{tool.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-60">{tool.description}</p>
                </div>
                <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-brass-dark">
                  {tool.cta} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
