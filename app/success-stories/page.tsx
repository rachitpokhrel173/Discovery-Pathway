import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SuccessStoriesGrid from "@/components/stories/SuccessStoriesGrid";

export const metadata: Metadata = {
  title: "Student Success Stories",
  description:
    "Real stories from Nepali students Discovery Pathway placed in South Korea, Japan, Australia, the UK, and Canada — filterable by destination.",
  alternates: { canonical: "/success-stories" },
};

export default function SuccessStoriesPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Success Stories" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Real outcomes"
            title="They didn't just get a visa. They got a plan."
            description="Filter by destination to read stories from students who walked the exact path you're considering."
          />
        </div>
        <div className="mt-12">
          <SuccessStoriesGrid />
        </div>
      </Container>
    </div>
  );
}
