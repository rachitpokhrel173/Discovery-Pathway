import { Destination } from "@/types";
import { CheckCircle2, TrendingUp, Briefcase, Wallet } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyStudyHere({ destination }: { destination: Destination }) {
  return (
    <section className="section-pad bg-paper">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading eyebrow="Why here" title={`Why students choose ${destination.name}`} />
          <ul className="mt-8 space-y-4">
            {destination.whyStudyHere.map((reason, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-route" />
                <span className="text-sm leading-relaxed text-ink/80 sm:text-base">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-pass border border-ink/10 bg-paper-dim p-7">
          <p className="mono-label mb-5 text-ink-60">At a Glance</p>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <TrendingUp size={18} className="mt-0.5 shrink-0 text-brass-dark" />
              <div>
                <p className="text-sm font-semibold text-ink">Visa Success Rate</p>
                <p className="text-sm text-ink-60">{destination.quickFacts.visaSuccessRate} for well-prepared applicants</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wallet size={18} className="mt-0.5 shrink-0 text-brass-dark" />
              <div>
                <p className="text-sm font-semibold text-ink">Living Costs</p>
                <p className="text-sm text-ink-60">{destination.quickFacts.avgLivingPerMonth} / month</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase size={18} className="mt-0.5 shrink-0 text-brass-dark" />
              <div>
                <p className="text-sm font-semibold text-ink">Work Rights</p>
                <p className="text-sm text-ink-60">{destination.quickFacts.workRights}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass-dark" />
              <div>
                <p className="text-sm font-semibold text-ink">PR Pathway</p>
                <p className="text-sm text-ink-60">
                  {destination.quickFacts.prPathway ? "Available for eligible graduates" : "Not a standard pathway"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
