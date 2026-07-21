import type { Metadata } from "next";
import ProcessPageClient from "@/components/process/ProcessPageClient";

export const metadata: Metadata = {
  title: "The Application Process",
  description:
    "The six-stage journey from free consultation to departure — guidance, test prep, documentation, admission, visa filing, and pre-departure orientation.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
