import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ImageSlider from "@/components/home/ImageSlider";
import DepartureBoardStats from "@/components/home/DepartureBoardStats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DestinationsPreview from "@/components/home/DestinationsPreview";
import ProcessTeaser from "@/components/home/ProcessTeaser";
import StoriesSection from "@/components/home/StoriesSection";
import ToolsTeaser from "@/components/home/ToolsTeaser";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import FAQPreview from "@/components/home/FAQPreview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Study Abroad Consultancy in Banepa, Nepal",
  description:
    "747+ visas approved, 97.9% success rate. Discovery Pathway guides Nepali students through admissions and visas for South Korea, Japan, Australia, the UK, Canada, the USA, Germany, and Finland.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImageSlider />
      <DepartureBoardStats />
      <WhyChooseUs />
      <DestinationsPreview />
      <ProcessTeaser />
      <StoriesSection />
      <ToolsTeaser />
      <PartnersMarquee />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
