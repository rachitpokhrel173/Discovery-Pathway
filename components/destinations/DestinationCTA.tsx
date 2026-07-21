import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Destination } from "@/types";
import Container from "@/components/ui/Container";

export default function DestinationCTA({ destination }: { destination: Destination }) {
  return (
    <section className="bg-brass py-14 sm:py-16">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-xl text-2xl text-paper sm:text-3xl">
          Ready to start your {destination.name} application?
        </h2>
        <Link href="/contact" className="btn-secondary border-transparent bg-ink text-paper hover:bg-ink/85 hover:text-paper">
          Book a {destination.name} consultation <ArrowRight size={16} />
        </Link>
      </Container>
    </section>
  );
}
