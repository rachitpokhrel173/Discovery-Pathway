import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Discovery Pathway collects, uses, and protects the personal information of prospective and current students.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-pad bg-paper">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="mt-6 text-3xl text-ink sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 font-mono text-xs text-ink-60">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80 sm:text-base">
          <section>
            <h2 className="mb-3 text-xl text-ink">1. Information We Collect</h2>
            <p>
              When you submit a consultation request, register for an event, or otherwise contact us, we
              collect information you provide directly — including your name, email address, phone number,
              preferred study destination, and any details shared in a message field. For visa and admission
              processing after you engage our services, we collect academic transcripts, financial documents,
              and identification documents strictly as required by universities and immigration authorities.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">2. How We Use Your Information</h2>
            <p>
              Information is used to respond to consultation requests, process university and visa
              applications on your behalf, communicate updates about your application status, and — where
              you've opted in — inform you about relevant seminars, scholarships, or intake deadlines.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">3. Sharing With Third Parties</h2>
            <p>
              We share application-relevant documents only with the specific universities, embassies, or
              immigration authorities involved in your application — and only with your knowledge and
              consent as part of the application process. We do not sell personal information to third
              parties for marketing purposes.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">4. Data Retention</h2>
            <p>
              Application-related documents are retained for as long as reasonably necessary to support your
              ongoing case and for a limited period afterward in case of visa renewal or reference needs.
              You may request deletion of your data at any time by contacting us directly.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">5. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information held by
              Discovery Pathway at any time by emailing {siteConfig.email} or visiting our office in Banepa.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl text-ink">6. Contact</h2>
            <p>
              Questions about this policy can be directed to {siteConfig.email} or {siteConfig.phone}.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
