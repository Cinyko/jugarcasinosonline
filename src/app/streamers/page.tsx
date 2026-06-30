import type { Metadata } from "next";
import Link from "next/link";
import StreamerCard from "@/components/StreamerCard";
import { streamers } from "@/data/streamers";
import { LAST_UPDATED, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Casinos Online de Streamers 2026 | ¿Dónde Juegan?",
  description:
    "Descubrí en qué casinos online juegan tus streamers favoritos de LATAM y el mundo. Guías actualizadas, slots y bonos verificados.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jugarcasinosonline.net/" },
    { "@type": "ListItem", position: 2, name: "Streamers", item: "https://jugarcasinosonline.net/streamers/" },
  ],
};

const groups: { key: "LATAM" | "Internacional" | "Nicho"; label: string }[] = [
  { key: "LATAM", label: "Streamers LATAM" },
  { key: "Internacional", label: "Streamers Internacionales" },
  { key: "Nicho", label: "En Ascenso" },
];

export default function StreamersHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#a855f7]/[0.07] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-20">
          {/* Breadcrumb */}
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Streamers</li>
            </ol>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
            Casinos Online de Streamers
            <br />
            <span className="bg-gradient-to-r from-[#a855f7] via-[#22c55e] to-[#a855f7] bg-clip-text text-transparent">{LAST_UPDATED_YEAR}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            ¿Te preguntaste alguna vez en qué casino juega tu streamer favorito? Acá lo desglosamos uno por uno: dónde apuestan de verdad, qué slots les gustan y dónde podés jugar vos con bonos que valen la pena.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Investigamos a los creadores de casino más grandes de LATAM y del mundo. Te contamos la posta de cada uno y, ojo, siempre con la cabeza fría: el juego es entretenimiento, no una forma de hacer plata.
          </p>
        </div>
      </section>

      {/* ═══ STREAMERS GRID ═══ */}
      <section className="bg-[#0e0e0e] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {groups.map((g, i) => {
            const list = streamers.filter((s) => s.category === g.key);
            if (list.length === 0) return null;
            return (
              <div key={g.key} className={i === groups.length - 1 ? "" : "mb-14"}>
                <h2 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-7 ml-1">{g.label}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {list.map((s) => (
                    <StreamerCard key={s.slug} streamer={s} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
