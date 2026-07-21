import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/contact/ContactForm";
import OfficeDetails from "@/components/contact/OfficeDetails";

export const metadata: Metadata = {
  title: "Contact & Book a Free Consultation",
  description:
    "Book a free consultation with Discovery Pathway in Banepa, Kavrepalanchok — or reach us directly by phone, WhatsApp, or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Get in touch"
            title="Your first consultation is free."
            description="Tell us where you'd like to study and when — we'll respond within one business day with honest, specific guidance."
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <OfficeDetails />
        </div>
      </Container>
    </div>
  );
}
