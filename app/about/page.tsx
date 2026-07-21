import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DepartureBoardStats from "@/components/home/DepartureBoardStats";

export const metadata: Metadata = {
  title: "About Discovery Pathway",
  description:
    "Discovery Pathway is a Banepa-based international education consultancy founded to make honest, end-to-end visa and admissions guidance accessible outside Kathmandu.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-ink pb-14 pt-8 sm:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="mono-label mb-4 inline-block text-brass-light">Our story</span>
            <h1 className="text-4xl text-paper sm:text-5xl">
              Built in Banepa, for students Kathmandu-based agencies overlook.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
              Discovery Pathway started with a simple observation: strong students in Kavrepalanchok were
              traveling to Kathmandu for consultancy services that could just as easily exist locally —
              and often receiving generic, high-volume treatment when they got there.
            </p>
          </div>
        </Container>
      </div>

      <DepartureBoardStats />

      <section className="section-pad bg-paper">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our approach" title="Full disclosure over quick approval." />
            <p className="mt-5 text-sm leading-relaxed text-ink-60 sm:text-base">
              We built our process around a specific belief: an application that discloses prior visa
              refusals honestly and addresses them directly will outperform one that hides them —
              every time, with every embassy. That principle shapes how every counselor here is trained,
              and it's why families with complicated histories specifically seek us out.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Where we work" title="One office, every desk under one roof." />
            <p className="mt-5 text-sm leading-relaxed text-ink-60 sm:text-base">
              Test preparation, document processing, and visa filing all happen from our Banepa office —
              not outsourced across multiple vendors. Your IELTS instructor and your visa case manager
              work down the hall from each other, which means nothing gets lost in translation between
              your test scores and your application.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-paper-dim">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="Three commitments we don't compromise on" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-pass border border-ink/10 bg-paper p-6">
              <ShieldCheck size={24} className="text-brass-dark" />
              <h3 className="mt-3 text-lg text-ink">Honest disclosure</h3>
              <p className="mt-2 text-sm text-ink-60">
                Prior refusals are declared and explained, never concealed — for your file's integrity
                and your own peace of mind.
              </p>
            </div>
            <div className="rounded-pass border border-ink/10 bg-paper p-6">
              <Users size={24} className="text-brass-dark" />
              <h3 className="mt-3 text-lg text-ink">One point of contact</h3>
              <p className="mt-2 text-sm text-ink-60">
                The counselor who takes your first call is reachable through visa filing and pre-departure.
              </p>
            </div>
            <div className="rounded-pass border border-ink/10 bg-paper p-6">
              <MapPin size={24} className="text-brass-dark" />
              <h3 className="mt-3 text-lg text-ink">Rooted in Kavrepalanchok</h3>
              <p className="mt-2 text-sm text-ink-60">
                Based in Banepa, serving students across the district without requiring a trip to
                Kathmandu for every step.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brass py-16">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-xl text-2xl text-paper sm:text-3xl">Meet the team behind every application.</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/team" className="btn-secondary border-transparent bg-ink text-paper hover:bg-ink/85 hover:text-paper">
              Meet the team
            </Link>
            <Link href="/contact" className="btn-secondary border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
