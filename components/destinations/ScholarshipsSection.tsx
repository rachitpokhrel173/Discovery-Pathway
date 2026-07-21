import { Destination } from "@/types";
import { Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ScholarshipsSection({ destination }: { destination: Destination }) {
  return (
    <section className="section-pad bg-paper">
      <Container>
        <SectionHeading eyebrow="Scholarships" title="Ways to reduce your tuition cost" className="mb-10" />
        <div className="grid gap-5 sm:grid-cols-2">
          {destination.scholarships.map((s) => (
            <div key={s.name} className="rounded-pass border border-ink/10 bg-paper-dim p-6">
              <Award size={22} className="text-brass-dark" />
              <h3 className="mt-3 text-lg text-ink">{s.name}</h3>
              <p className="mt-2 font-mono text-sm text-route">{s.coverage}</p>
              <p className="mt-2 text-sm text-ink-60">{s.eligibility}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
