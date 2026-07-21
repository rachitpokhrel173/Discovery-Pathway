import { Destination } from "@/types";
import { Landmark, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function UniversitiesAndCourses({ destination }: { destination: Destination }) {
  return (
    <section className="section-pad bg-paper-dim">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Partner institutions" title="Universities we place students at" />
          <ul className="mt-6 divide-y divide-ink/10 border-t border-ink/10">
            {destination.universities.map((u) => (
              <li key={u.name} className="flex items-center gap-3 py-4">
                <Landmark size={18} className="shrink-0 text-brass-dark" />
                <div>
                  <p className="text-sm font-semibold text-ink sm:text-base">{u.name}</p>
                  <p className="text-xs text-ink-60">{u.city}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading eyebrow="Popular programs" title="Courses students apply for most" />
          <div className="mt-6 flex flex-wrap gap-2">
            {destination.popularCourses.map((c) => (
              <span
                key={c}
                className="flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm text-ink"
              >
                <BookOpen size={14} className="text-brass-dark" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
