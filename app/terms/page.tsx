import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of Discovery Pathway's website and consultancy services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="section-pad bg-paper">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
        <h1 className="mt-6 text-3xl text-ink sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 font-mono text-xs text-ink-60">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80 sm:text-base">
          <section>
            <h2 className="mb-3 text-xl text-ink">1. Services Provided</h2>
            <p>
              Discovery Pathway provides education consultancy services including destination and university
              guidance, test preparation, document processing, scholarship application support, and visa
              filing assistance. Consultation is free; service fees for application processing are disclosed
              transparently before you commit to any paid service.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">2. No Guarantee of Admission or Visa Approval</h2>
            <p>
              While Discovery Pathway maintains a strong track record and prepares every application
              thoroughly, admission and visa decisions are made solely by universities and government
              immigration authorities. We cannot and do not guarantee approval of any application.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">3. Accuracy of Information Provided</h2>
            <p>
              Clients are responsible for providing accurate, complete, and honest information — including
              full disclosure of any prior visa refusals — throughout the application process. Discovery
              Pathway is not liable for outcomes resulting from inaccurate or incomplete information
              provided by the client.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">4. Fees and Refunds</h2>
            <p>
              Service fees, where applicable, are agreed upon in writing before work begins. Refund terms
              for specific services are outlined in individual service agreements signed at the time of
              engagement.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">5. Website Use</h2>
            <p>
              Tools on this website — including the cost calculator and course finder — provide estimates
              for planning purposes only and do not constitute financial or legal advice. Figures should be
              confirmed with a counselor before making financial decisions.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">6. Contact</h2>
            <p>
              Questions about these terms can be directed to {siteConfig.email} or {siteConfig.phone}.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
