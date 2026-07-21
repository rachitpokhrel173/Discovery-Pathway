import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ResourcesGrid from "@/components/resources/ResourcesGrid";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description:
    "Guides on visa disclosure, scholarships, test preparation, and destination-specific advice from Discovery Pathway's counselors.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Resources" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Free resources"
            title="Guides worth reading before you apply."
            description="Written by the counselors who actually file these applications — searchable by keyword or topic."
          />
        </div>
        <div className="mt-12">
          <ResourcesGrid />
        </div>
      </Container>
    </div>
  );
}
