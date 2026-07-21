import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import TeamRoster from "@/components/team/TeamRoster";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the counselors, instructors, and case managers at Discovery Pathway who guide every Nepali student from consultation to visa approval.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Team" }]} />
        <div className="mt-6 max-w-2xl">
          <SectionHeading
            eyebrow="Who you'll work with"
            title="One counselor, start to finish."
            description="Nine people in Banepa who handle every visa file, test class, and admission form personally — not a call center."
          />
        </div>
        <div className="mt-12">
          <TeamRoster />
        </div>
      </Container>
    </div>
  );
}
