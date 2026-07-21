import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-ink py-20">
      <Container className="flex flex-col items-center text-center">
        <span className="mono-label mb-6 rounded-full border border-paper/20 px-4 py-2 text-paper/70">
          Flight Status: Not Found
        </span>
        <h1 className="font-mono text-7xl font-semibold text-brass-light sm:text-8xl">404</h1>
        <p className="mt-6 max-w-md text-base text-paper/70 sm:text-lg">
          This gate doesn&rsquo;t exist. The page you&rsquo;re looking for may have moved or never boarded.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Back to Home
          </Link>
          <Link href="/contact" className="btn-ghost-inverse">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </div>
  );
}
