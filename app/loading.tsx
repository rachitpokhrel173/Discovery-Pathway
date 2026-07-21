import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="section-pad bg-paper">
      <Container>
        <div className="animate-pulse space-y-8">
          <div className="h-4 w-32 rounded-full bg-ink/10" />
          <div className="h-10 w-2/3 rounded-lg bg-ink/10" />
          <div className="h-4 w-full max-w-lg rounded-full bg-ink/10" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 rounded-pass bg-ink/5" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
