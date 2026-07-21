export function renderMarkdown(content: string) {
  const blocks = content.trim().split(/\n\n+/);

  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 mb-4 text-2xl text-ink first:mt-0">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("# ")) {
      return (
        <h1 key={i} className="mt-10 mb-4 text-3xl text-ink first:mt-0">
          {block.replace("# ", "")}
        </h1>
      );
    }
    return (
      <p key={i} className="mb-5 text-base leading-relaxed text-ink/80">
        {block}
      </p>
    );
  });
}
