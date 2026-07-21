import { Destination } from "@/types";
import Container from "@/components/ui/Container";
import FlagIcon from "@/components/ui/FlagIcon";

export default function DestinationHero({ destination }: { destination: Destination }) {
  const facts = [
    { label: "Visa Type", value: destination.visaType },
    { label: "Intakes", value: destination.intakes.join(" / ") },
    { label: "Avg. Tuition/Yr", value: destination.quickFacts.avgTuitionPerYear },
    { label: "Success Rate", value: destination.quickFacts.visaSuccessRate },
  ];

  return (
    <section className="bg-ink pb-14 pt-8 sm:pb-20">
      <Container>
        <div className="flex items-center gap-3">
          <FlagIcon countryCode={destination.countryCode} label={destination.name} className="h-11 w-16" />
          {destination.mostPopular && (
            <span className="mono-label rounded-full bg-brass px-3 py-1 text-paper">Most Popular</span>
          )}
        </div>
        <h1 className="mt-5 text-4xl text-paper sm:text-5xl lg:text-6xl">{destination.name}</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          {destination.tagline}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-pass border border-paper/10 bg-paper/10 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-ink-soft p-5">
              <p className="mono-label text-paper/50">{f.label}</p>
              <p className="mt-2 font-mono text-sm text-paper sm:text-base">{f.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}