"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Users, Landmark } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Full disclosure, always",
    body: "Prior visa refusals — yours or a sponsor's — are declared and explained, never hidden. It's the difference between an application that survives scrutiny and one that doesn't.",
  },
  {
    icon: GraduationCap,
    title: "Test prep under one roof",
    body: "IELTS, TOPIK, and Japanese language instruction happen in-house, taught by staff who prepare your visa file too — so coaching and paperwork stay in sync.",
  },
  {
    icon: Landmark,
    title: "50+ university partners",
    body: "Direct relationships across Korea, Japan, Australia, the UK, Canada, the USA, Germany, and Finland mean faster admission decisions and real scholarship access.",
  },
  {
    icon: Users,
    title: "One counselor, start to finish",
    body: "The person who assesses your eligibility in week one is reachable through visa filing and pre-departure — no handoffs, no repeating your story.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why Discovery Pathway"
              title="An agency that treats your file like it matters."
              description="Four years in Banepa taught us that most failed applications aren't rejected for lack of merit — they're rejected for lack of preparation. We built our process around closing that gap."
            />
          </div>

          <div className="divide-y divide-ink/10 border-t border-ink/10">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 py-7"
              >
                <r.icon size={26} className="mt-1 shrink-0 text-brass-dark" strokeWidth={1.6} />
                <div>
                  <h3 className="text-xl text-ink">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-60 sm:text-base">{r.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
