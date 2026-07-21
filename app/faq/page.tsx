import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQSearch from "@/components/faq/FAQSearch";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Searchable answers on admissions, visa disclosure, costs, scholarships, and life abroad — across all 8 destinations Discovery Pathway supports.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="section-pad bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Common questions"
            title="Search our full FAQ."
            description="Answers on getting started, destinations, visas, costs, and life abroad — searchable by keyword or category."
          />
        </div>
        <div className="mt-12">
          <FAQSearch />
        </div>
      </Container>
    </div>
  );
}
