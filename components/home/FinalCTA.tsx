import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section className="bg-brass py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="mono-label text-paper/70">Now Boarding</span>
        <h2 className="max-w-2xl text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
          Your consultation is free. Your future shouldn&rsquo;t wait.
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-secondary border-transparent bg-ink text-paper hover:bg-ink/85 hover:text-paper">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="btn-secondary border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink">
            <Phone size={16} /> {siteConfig.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
