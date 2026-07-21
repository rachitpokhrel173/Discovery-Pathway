import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DestinationsExplorer from "@/components/destinations/DestinationsExplorer";

export const metadata: Metadata = {
  title: "Study Destinations",
  description:
    "Explore all 8 study destinations Discovery Pathway supports — South Korea, Japan, Australia, the UK, Canada, the USA, Germany, and Finland — with visa type, PR pathway, and success rate at a glance.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Destinations" }]} />
        <div className="mt-6 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="8 destinations, one process"
            title="Find where your degree takes you."
            description="Every destination below is a pathway we manage end-to-end — admissions, scholarships, and visa filing included."
          />
          <Link href="/destinations/compare" className="btn-secondary shrink-0">
            Compare countries <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12">
          <DestinationsExplorer />
        </div>
      </Container>
    </div>
  );
}
