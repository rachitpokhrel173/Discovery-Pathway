"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Destination } from "@/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DestinationFAQ({ destination }: { destination: Destination }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-paper-dim">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title={`Questions about studying in ${destination.name}`} className="mb-10" />
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {destination.faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-ink">{f.question}</span>
                <Plus size={18} className={`shrink-0 text-brass-dark transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              {open === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden pb-5 text-sm leading-relaxed text-ink-60"
                >
                  {f.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
