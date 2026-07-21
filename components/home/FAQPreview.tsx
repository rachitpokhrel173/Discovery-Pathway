"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

const preview = [faqs[0], faqs[4], faqs[6]];

export default function FAQPreview() {
  const [open, setOpen] = useState<string | null>(preview[0]?.id ?? null);

  return (
    <section className="section-pad bg-paper">
      <Container className="max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="Common questions"
          title="Answers before you have to ask."
          className="mb-10"
        />
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {preview.map((f) => f && (
            <div key={f.id}>
              <button
                onClick={() => setOpen(open === f.id ? null : f.id)}
                className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-ink sm:text-lg">{f.question}</span>
                <Plus
                  size={18}
                  className={`shrink-0 text-brass-dark transition-transform ${open === f.id ? "rotate-45" : ""}`}
                />
              </button>
              {open === f.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden pb-5 text-sm leading-relaxed text-ink-60 sm:text-base"
                >
                  {f.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="btn-secondary">
            Search all FAQs <ArrowUpRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
