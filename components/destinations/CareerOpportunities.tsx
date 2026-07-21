import { Destination } from "@/types";
import { Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CareerOpportunities({ destination }: { destination: Destination }) {
  return (
    <section className="section-pad bg-paper-dim">
      <Container>
        <SectionHeading eyebrow="After graduation" title="Career opportunities" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          {destination.careerOpportunities.map((c, i) => (
            <div key={i} className="flex items-start gap-3 rounded-pass border border-ink/10 bg-paper p-5">
              <Briefcase size={18} className="mt-0.5 shrink-0 text-brass-dark" />
              <p className="text-sm leading-relaxed text-ink/80">{c}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
