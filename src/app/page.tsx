import Link from "next/link";
import CountryGrid from "@/components/CountryGrid";
import StreamerCard from "@/components/StreamerCard";
import { countrySections } from "@/data/countries";
import { casinos, comparisons } from "@/data/casinos";
import { streamers } from "@/data/streamers";

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-navy to-secondary py-20 sm:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Guía actualizada 2026</span>
          </div>

          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-tight tracking-tight mb-6">
            Tu mejor jugada
            <span className="block text-primary">empieza acá</span>
          </p>

          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-4">
            La guía más completa de casinos online para Latinoamérica
          </p>

          <p className="text-sm text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Estamos acá para ayudarte a elegir de forma segura. Reseñas honestas,
            bonos verificados y toda la info que necesitás para jugar tranquilo
            en México, Perú, Argentina, Chile y Ecuador.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#casinos-por-pais"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary font-semibold text-white text-sm transition-colors hover:bg-primary-dark"
            >
              Explorar casinos por país
            </a>
            <a
              href="#streamers"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-surface border border-surface-border font-semibold text-text text-sm transition-colors hover:bg-surface-light"
            >
              Casinos de streamers
            </a>
          </div>
        </div>
      </section>

      {/* ===== TOP CASINOS BANNER ===== */}
      <section className="bg-surface border-y border-surface-border py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {casinos.map((casino) => (
              <a
                key={casino.slug}
                href={casino.affiliateUrl}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="group flex items-center gap-4 rounded-lg bg-surface-light border border-surface-border p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 text-accent font-bold text-sm shrink-0">
                  {casino.rating}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm text-text group-hover:text-primary transition-colors truncate">
                    {casino.name}
                  </h3>
                  <p className="text-xs text-text-muted truncate">{casino.bonus}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COUNTRY GRID SECTIONS (first 3) ===== */}
      <div id="casinos-por-pais">
        {countrySections.slice(0, 3).map((section, i) => (
          <CountryGrid
            key={section.pathSuffix}
            title={section.title}
            description={section.description}
            pathSuffix={section.pathSuffix}
            variant={i % 2 === 0 ? "dark" : "darker"}
          />
        ))}
      </div>

      {/* ===== STREAMERS ===== */}
      <section id="streamers" className="bg-navy-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3">
              Casinos Online de Streamers
            </h2>
            <p className="text-text-muted max-w-2xl">
              Descubrí en qué casinos juegan tus streamers favoritos. Desde los más grandes del mundo
              hasta los que vienen pisando fuerte en la escena latina.
            </p>
          </div>

          {/* LATAM */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Streamers LATAM
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {streamers
                .filter((s) => s.category === "LATAM")
                .map((s) => (
                  <StreamerCard key={s.slug} streamer={s} />
                ))}
            </div>
          </div>

          {/* Internacionales */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Streamers Internacionales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {streamers
                .filter((s) => s.category === "Internacional")
                .map((s) => (
                  <StreamerCard key={s.slug} streamer={s} />
                ))}
            </div>
          </div>

          {/* Nicho / En Ascenso */}
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              En Ascenso
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {streamers
                .filter((s) => s.category === "Nicho")
                .map((s) => (
                  <StreamerCard key={s.slug} streamer={s} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARATIVAS ===== */}
      <section id="comparativas" className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3">
              Comparativas de Casinos Online
            </h2>
            <p className="text-text-muted max-w-2xl">
              No sabés cuál elegir? Comparamos los casinos más populares cara a cara
              para que tomes la mejor decisión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/comparativas/${comp.slug}/`}
                className="group rounded-xl bg-surface border border-surface-border p-6 transition-all duration-200 hover:border-primary/50 hover:bg-surface-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-sm font-bold text-text">{comp.casinoA}</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-xs font-bold">
                    VS
                  </span>
                  <span className="text-sm font-bold text-text">{comp.casinoB}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-primary">
                  Ver comparativa
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COUNTRY GRID SECTIONS (last 3: bonos, slots, crypto) ===== */}
      {countrySections.slice(3).map((section, i) => (
        <CountryGrid
          key={section.pathSuffix}
          title={section.title}
          description={section.description}
          pathSuffix={section.pathSuffix}
          variant={i % 2 === 0 ? "darker" : "dark"}
        />
      ))}
    </main>
  );
}
