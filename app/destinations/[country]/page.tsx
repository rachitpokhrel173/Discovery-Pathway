import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DestinationHero from "@/components/destinations/DestinationHero";
import WhyStudyHere from "@/components/destinations/WhyStudyHere";
import UniversitiesAndCourses from "@/components/destinations/UniversitiesAndCourses";
import ScholarshipsSection from "@/components/destinations/ScholarshipsSection";
import VisaChecklist from "@/components/destinations/VisaChecklist";
import CareerOpportunities from "@/components/destinations/CareerOpportunities";
import DestinationTestimonials from "@/components/destinations/DestinationTestimonials";
import DestinationFAQ from "@/components/destinations/DestinationFAQ";
import RelatedResources from "@/components/destinations/RelatedResources";
import DestinationCTA from "@/components/destinations/DestinationCTA";

export function generateStaticParams() {
  return destinations.map((d) => ({ country: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const destination = getDestinationBySlug(country);
  if (!destination) return {};

  return {
    title: `Study in ${destination.name} — Visa, Universities & Costs`,
    description: `${destination.tagline} ${destination.visaType} guidance, ${destination.quickFacts.avgTuitionPerYear} tuition range, and a ${destination.quickFacts.visaSuccessRate} success rate through Discovery Pathway.`,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: `Study in ${destination.name} | Discovery Pathway`,
      description: destination.tagline,
      images: [{ url: destination.heroImage }],
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const destination = getDestinationBySlug(country);
  if (!destination) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: destination.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-ink pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Destinations", href: "/destinations" },
              { label: destination.name },
            ]}
          />
        </Container>
      </div>
      <DestinationHero destination={destination} />
      <WhyStudyHere destination={destination} />
      <UniversitiesAndCourses destination={destination} />
      <ScholarshipsSection destination={destination} />
      <VisaChecklist destination={destination} />
      <CareerOpportunities destination={destination} />
      <DestinationTestimonials destination={destination} />
      <DestinationFAQ destination={destination} />
      <RelatedResources destination={destination} />
      <DestinationCTA destination={destination} />
    </>
  );
}
