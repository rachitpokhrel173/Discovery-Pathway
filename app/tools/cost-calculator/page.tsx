import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CostCalculator from "@/components/tools/CostCalculator";

export const metadata: Metadata = {
  title: "Study Abroad Cost Calculator",
  description:
    "Estimate your total cost of studying abroad — tuition, living expenses, and one-time fees — across South Korea, Japan, Australia, the UK, Canada, the USA, Germany, and Finland.",
  alternates: { canonical: "/tools/cost-calculator" },
};

export default function CostCalculatorPage() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <Breadcrumbs items={[{ label: "Tools", href: "/destinations" }, { label: "Cost Calculator" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Know before you go"
            title="Estimate your real cost of studying abroad."
            description="Adjust destination, program level, and lifestyle to see a realistic total — updated instantly as you change any option."
          />
        </div>
        <div className="mt-12">
          <CostCalculator />
        </div>
      </Container>
    </div>
  );
}
