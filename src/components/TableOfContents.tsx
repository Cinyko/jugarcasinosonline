interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  /** Match the background of the surrounding section flow (#0a0a0a default, #0e0e0e alt) */
  alt?: boolean;
}

export default function TableOfContents({ items, alt = false }: TableOfContentsProps) {
  return (
    <section className={`${alt ? "bg-[#0e0e0e]" : "bg-[#0a0a0a]"} py-10`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Tabla de contenidos"
          className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8"
        >
          <p className="flex items-center gap-3 text-white font-black text-lg mb-5">
            <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-[#dc2626] to-[#f59e0b]" />
            Tabla de contenidos
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5 list-none">
            {items.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-2.5 text-sm text-[#9ca3af] hover:text-white transition-colors py-0.5"
                >
                  <span className="text-[#22c55e] font-black text-xs tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:underline underline-offset-4 decoration-[#22c55e]/40">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
