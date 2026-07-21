import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Discovery Pathway's office, student send-offs, university visits, and seminars in Banepa, Nepal.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Gallery" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Behind the scenes"
            title="Life at Discovery Pathway."
            description="Office days, send-offs, university visits, and seminars — filtered by category."
          />
        </div>
        <div className="mt-12">
          <GalleryGrid />
        </div>
      </Container>
    </div>
  );
}
