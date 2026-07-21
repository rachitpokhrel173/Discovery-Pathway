import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { resources, getResourceBySlug } from "@/data/resources";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { renderMarkdown } from "@/lib/markdown";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getResourceBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function ResourcePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getResourceBySlug(slug);
  if (!post) notFound();

  const related = resources.filter((r) => r.slug !== post.slug && r.category === post.category).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
  };

  return (
    <div className="section-pad bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: post.title }]} />

        <div className="mt-6">
          <span className="mono-label text-brass-dark">{post.category}</span>
          <h1 className="mt-3 text-3xl text-ink sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 font-mono text-xs text-ink-60">
            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readingTime}
            </span>
          </div>
        </div>

        <div className="mt-10">{renderMarkdown(post.content)}</div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-ink/10 pt-10">
            <p className="mono-label mb-5 text-ink-60">Related Reading</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="rounded-pass border border-ink/10 bg-paper-dim p-5 transition-colors hover:border-brass"
                >
                  <p className="text-sm font-semibold text-ink">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link href="/resources" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brass-dark">
          <ArrowLeft size={16} /> Back to all resources
        </Link>
      </Container>
    </div>
  );
}
