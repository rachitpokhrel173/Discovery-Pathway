import { Star } from "lucide-react";
import { Destination } from "@/types";
import { testimonials } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DestinationTestimonials({ destination }: { destination: Destination }) {
  const matches = testimonials.filter((t) => t.country === destination.name);
  if (matches.length === 0) return null;

  return (
    <section className="section-pad bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Student voices"
          title={`Students who chose ${destination.name}`}
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((t) => (
            <div key={t.id} className="rounded-pass border border-ink/10 bg-paper-dim p-6">
              <div className="mb-2 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-brass text-brass" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-stamp text-ink-60">
                {t.name} · {t.university}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
