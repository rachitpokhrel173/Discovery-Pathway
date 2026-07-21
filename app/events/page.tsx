import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import EventsList from "@/components/events/EventsList";

export const metadata: Metadata = {
  title: "Events & Seminars",
  description:
    "Upcoming and past seminars, webinars, and workshops from Discovery Pathway — TOPIK scholarships, visa writing, and test preparation.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Events" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Seminars & webinars"
            title="Learn from us in person or online."
            description="Free sessions on scholarships, visa writing, and test preparation — hosted in Banepa and online."
          />
        </div>
        <div className="mt-12">
          <EventsList />
        </div>
      </Container>
    </div>
  );
}
