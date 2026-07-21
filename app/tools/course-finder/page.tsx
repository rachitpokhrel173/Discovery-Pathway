import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CourseFinder from "@/components/tools/CourseFinder";

export const metadata: Metadata = {
  title: "Course Finder",
  description:
    "Filter real study-abroad programs by field, level, and budget across 8 destinations to build your shortlist in minutes.",
  alternates: { canonical: "/tools/course-finder" },
};

export default function CourseFinderPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Tools", href: "/destinations" }, { label: "Course Finder" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Find your program"
            title="Filter your way to a shortlist."
            description="Narrow by field of study, level, and budget to see real programs across our partner destinations."
          />
        </div>
        <div className="mt-12">
          <CourseFinder />
        </div>
      </Container>
    </div>
  );
}
