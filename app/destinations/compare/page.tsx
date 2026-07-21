import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CompareTable from "@/components/destinations/CompareTable";

export const metadata: Metadata = {
  title: "Compare Study Destinations",
  description:
    "Compare tuition, living costs, visa success rate, work rights, and PR pathways across South Korea, Japan, Australia, the UK, Canada, the USA, Germany, and Finland.",
  alternates: { canonical: "/destinations/compare" },
};

export default function ComparePage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: "Compare" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Side by side"
            title="Compare up to 4 countries at once."
            description="Select the destinations you're weighing against each other to see cost, visa outcome, and work-rights differences in one table."
          />
        </div>
        <div className="mt-12">
          <CompareTable />
        </div>
      </Container>
    </div>
  );
}
