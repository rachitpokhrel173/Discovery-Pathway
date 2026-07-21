import { Destination } from "@/types";
import { FileCheck2, FolderCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VisaChecklist({ destination }: { destination: Destination }) {
  return (
    <section className="section-pad bg-ink">
      <Container>
        <SectionHeading light eyebrow="Requirements" title="What the visa application actually needs" className="mb-10" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-pass border border-paper/15 p-7">
            <div className="mb-5 flex items-center gap-2">
              <FileCheck2 size={20} className="text-brass-light" />
              <h3 className="text-lg text-paper">Visa Requirements</h3>
            </div>
            <ul className="space-y-3">
              {destination.visaRequirements.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-paper/75">
                  <span className="mono-label mt-0.5 shrink-0 text-brass-light">{String(i + 1).padStart(2, "0")}</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-pass border border-paper/15 p-7">
            <div className="mb-5 flex items-center gap-2">
              <FolderCheck size={20} className="text-brass-light" />
              <h3 className="text-lg text-paper">Documents Required</h3>
            </div>
            <ul className="space-y-3">
              {destination.documentsRequired.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-paper/75">
                  <span className="mono-label mt-0.5 shrink-0 text-brass-light">{String(i + 1).padStart(2, "0")}</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
