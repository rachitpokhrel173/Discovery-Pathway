import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Destination } from "@/types";
import { resources } from "@/data/resources";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RelatedResources({ destination }: { destination: Destination }) {
  const matches = resources
    .filter((r) => r.title.toLowerCase().includes(destination.name.toLowerCase()) || r.category === "Costs & Scholarships")
    .slice(0, 3);

  if (matches.length === 0) return null;

  return (
    <section className="section-pad bg-paper">
      <Container>
        <SectionHeading eyebrow="Read next" title="Related resources" className="mb-10" />
        <div className="grid gap-5 sm:grid-cols-3">
          {matches.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group flex flex-col justify-between rounded-pass border border-ink/10 bg-paper-dim p-6 transition-all hover:border-brass hover:shadow-stamp"
            >
              <div>
                <span className="mono-label text-brass-dark">{r.category}</span>
                <h3 className="mt-2 text-lg leading-snug text-ink">{r.title}</h3>
              </div>
              <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-ink">
                Read <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
