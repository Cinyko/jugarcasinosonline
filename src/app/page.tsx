import CountryGrid from "@/components/CountryGrid";
import StreamerCard from "@/components/StreamerCard";
import HeroBackground from "@/components/HeroBackground";
import { StreamerDecoration, BalanceDecoration } from "@/components/SectionDecorations";
import { countrySections } from "@/data/countries";
import { casinos, comparisons } from "@/data/casinos";
import { streamers } from "@/data/streamers";

/* ───────── Logo map: casino slug → image file ───────── */
const logoMap: Record<string, { src: string; invert?: boolean }> = {
  betsson: { src: "/img/logos/betsson.svg" },
  "fresh-casino": { src: "/img/logos/fresh.png" },
  "sol-casino": { src: "/img/logos/sol.svg" },
  "monro-casino": { src: "/img/logos/monro.svg" },
  "starda-casino": { src: "/img/logos/starda.svg" },
  stake: { src: "/img/logos/stake.png", invert: true },
  betano: { src: "/img/logos/betano.png" },
  bet365: { src: "/img/logos/bet365.svg" },
  "1xbet": { src: "/img/logos/1xbet.png" },
  inkabet: { src: "/img/logos/inkabet.png" },
  doradobet: { src: "/img/logos/doradobet.png" },
  betcris: { src: "/img/logos/betcris.svg" },
  meridianbet: { src: "/img/logos/meridianbet.webp" },
  caliente: { src: "/img/logos/caliente.png" },
  codere: { src: "/img/logos/codere.svg" },
  strendus: { src: "/img/logos/strendus.png" },
  winpot: { src: "/img/logos/winpot.svg" },
  betway: { src: "/img/logos/betway.png" },
  luckia: { src: "/img/logos/luckia.png" },
  bplay: { src: "/img/logos/bplay.webp" },
  "casino-buenos-aires": { src: "/img/logos/casinobuenosaires.webp" },
  "20bet": { src: "/img/logos/20bet.png" },
  dafabet: { src: "/img/logos/dafabet.png" },
  betfair: { src: "/img/logos/betfair.png" },
  melbet: { src: "/img/logos/melbet.webp" },
  "1win": { src: "/img/logos/1win.svg" },
};

/* ───────── Comparison logo resolver ───────── */
function casinoNameToLogo(name: string): { src: string; invert?: boolean } | undefined {
  const slug = name.toLowerCase().replace(/ casino$/i, "").replace(/\s+/g, "-");
  // Try direct match first, then slug variations
  return logoMap[slug] || logoMap[slug + "-casino"] || logoMap[name.toLowerCase().replace(/\s+/g, "-")];
}

function RatingBar({ rating }: { rating: number }) {
  const percent = (rating / 10) * 100;
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green to-[#4ade80] transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-green font-black text-lg tabular-nums">{rating}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ===== HERO + CASINOS ===== */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Interactive particle background */}
        <HeroBackground />
        {/* Static glow underlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-primary/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green/[0.04] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-10 text-center pointer-events-none [&_a]:pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada 2026</span>
          </div>

          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
            Tu mejor jugada
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              empieza acá
            </span>
          </p>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-2xl mx-auto mb-4 font-medium">
            La guía más completa de casinos online para Latinoamérica
          </p>

          <p className="text-base text-[#71717a] max-w-xl mx-auto mb-6 leading-relaxed">
            Reseñas honestas, bonos verificados y toda la info que necesitás
            para jugar tranquilo en México, Perú, Argentina, Chile y Ecuador.
          </p>
        </div>

        {/* Casino cards inside hero */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <h2 className="text-center text-xs font-bold text-[#71717a] uppercase tracking-[0.2em] mb-8">
            Top Casinos Recomendados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
            {casinos.map((casino, i) => {
              const logo = logoMap[casino.slug];

              return (
                <div key={casino.slug} className="relative">
                  {/* #1 Recommended badge floating above card */}
                  {i === 0 && (
                    <div className="flex justify-center mb-3">
                      <div className="bg-gradient-to-r from-gold via-accent to-gold px-5 py-1.5 rounded-full shadow-lg shadow-gold/20">
                        <span className="text-[11px] font-black text-black uppercase tracking-wider">
                          #1 Recomendado
                        </span>
                      </div>
                    </div>
                  )}

                  <a
                    href={`/go/${casino.slug}`}
                    target="_blank"
                    rel="nofollow noopener sponsored"
                    className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3 ${
                      i === 0
                        ? "hover:shadow-[0_20px_60px_rgba(251,191,36,0.2)]"
                        : "hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    }`}
                    style={{
                      boxShadow: i === 0
                        ? "0 0 0 1px rgba(251,191,36,0.3), 0 4px 30px rgba(251,191,36,0.1), 0 10px 40px rgba(0,0,0,0.3)"
                        : "0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className={`relative p-6 flex flex-col flex-1 ${
                      i === 0
                        ? "bg-gradient-to-br from-[#1a1708] via-[#141414] to-[#141414]"
                        : "bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#111111]"
                    }`}>
                      {/* Casino logo + name */}
                      <div className="flex items-center gap-3 mb-3">
                        {logo ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={logo.src}
                            alt=""
                            className={`w-9 h-9 object-contain shrink-0 rounded-lg ${logo.invert ? "invert" : ""}`}
                          />
                        ) : (
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-black text-sm ${
                            i === 0 ? "bg-gold/20 text-gold" : "bg-white/10 text-white"
                          }`}>
                            {casino.name.charAt(0)}
                          </div>
                        )}
                        <h3 className={`text-2xl font-black transition-colors duration-200 ${
                          i === 0 ? "text-gold group-hover:text-accent" : "text-white group-hover:text-primary"
                        }`}>
                          {casino.name}
                        </h3>
                      </div>

                      {/* Rating bar */}
                      <div className="mb-4">
                        <RatingBar rating={casino.rating} />
                      </div>

                      {/* Bonus */}
                      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 mb-5">
                        <p className="text-xs text-[#71717a] font-medium uppercase tracking-wider mb-1">Bono de Bienvenida</p>
                        <p className="text-sm text-white font-bold">{casino.bonus}</p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto inline-flex items-center justify-center w-full h-13 py-3.5 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide transition-all duration-300 group-hover:bg-[#00E676] group-hover:shadow-[0_0_30px_rgba(0,200,83,0.35)]">
                        Jugar Ahora
                      </div>
                    </div>

                    {/* Hover glow overlay */}
                    {i === 0 && (
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ boxShadow: "inset 0 0 40px rgba(251,191,36,0.06)" }}
                      />
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COUNTRY GRID SECTIONS (first 3 — active links) ===== */}
      <div id="casinos-por-pais">
        {countrySections.slice(0, 3).map((section, i) => (
          <CountryGrid
            key={section.pathSuffix}
            title={section.title}
            description={section.description}
            pathSuffix={section.pathSuffix}
            variant={i % 2 === 0 ? "default" : "alt"}
          />
        ))}
      </div>

      {/* ===== STREAMERS ===== */}
      <section id="streamers" className="bg-[#0a0a0a] py-24 sm:py-32 relative">
        <StreamerDecoration />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple to-primary" />
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight">
                Casinos Online de Streamers
              </h2>
            </div>
            <p className="text-[#9ca3af] max-w-2xl ml-5 text-base leading-relaxed">
              Descubrí en qué casinos juegan tus streamers favoritos. Desde los más grandes del mundo
              hasta los que vienen pisando fuerte en la escena latina.
            </p>
          </div>

          {/* LATAM */}
          <div className="mb-14">
            <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-7 ml-1">
              Streamers LATAM
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {streamers
                .filter((s) => s.category === "LATAM")
                .map((s) => (
                  <StreamerCard key={s.slug} streamer={s} />
                ))}
            </div>
          </div>

          {/* Internacionales */}
          <div className="mb-14">
            <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-7 ml-1">
              Streamers Internacionales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {streamers
                .filter((s) => s.category === "Internacional")
                .map((s) => (
                  <StreamerCard key={s.slug} streamer={s} />
                ))}
            </div>
          </div>

          {/* En Ascenso */}
          <div>
            <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-7 ml-1">
              En Ascenso
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
      <section id="comparativas" className="bg-[#0e0e0e] py-24 sm:py-32 relative">
        <BalanceDecoration />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-accent to-primary" />
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight">
                Comparativas de Casinos Online
              </h2>
            </div>
            <p className="text-[#9ca3af] max-w-2xl ml-5 text-base leading-relaxed">
              No sabés cuál elegir? Comparamos los casinos más populares cara a cara
              para que tomes la mejor decisión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {comparisons.map((comp) => {
              const logoA = casinoNameToLogo(comp.casinoA);
              const logoB = casinoNameToLogo(comp.casinoB);

              return (
                <div
                  key={comp.slug}
                  className="relative flex flex-col rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Próximamente badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20">
                      Próximamente
                    </span>
                  </div>

                  {/* Fight card background */}
                  <div className="relative bg-[#141414] flex flex-col flex-1">
                    {/* Diagonal split background */}
                    <div className="absolute inset-0 opacity-[0.06]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-tl from-accent via-transparent to-transparent" />
                    </div>

                    {/* Divider line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <div className="relative p-8">
                      {/* VS badge */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.4)]">
                          <span className="text-white font-black text-sm tracking-wide">VS</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-8">
                        {/* Casino A */}
                        <div className="flex-1 text-center">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25 flex items-center justify-center mx-auto mb-4">
                            {logoA ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img src={logoA.src} alt="" className={`w-10 h-10 object-contain ${logoA.invert ? "invert" : ""}`} />
                            ) : (
                              <span className="text-primary font-black text-xl">{comp.casinoA.charAt(0)}</span>
                            )}
                          </div>
                          <p className="text-sm font-extrabold text-white leading-tight">{comp.casinoA}</p>
                        </div>

                        {/* Casino B */}
                        <div className="flex-1 text-center">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/25 flex items-center justify-center mx-auto mb-4">
                            {logoB ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img src={logoB.src} alt="" className={`w-10 h-10 object-contain ${logoB.invert ? "invert" : ""}`} />
                            ) : (
                              <span className="text-accent font-black text-xl">{comp.casinoB.charAt(0)}</span>
                            )}
                          </div>
                          <p className="text-sm font-extrabold text-white leading-tight">{comp.casinoB}</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom bar — no link */}
                    <div className="mt-auto px-8 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-center gap-2 text-sm font-bold text-[#71717a]">
                      Comparativa completa
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COUNTRY GRID SECTIONS (last 3: bonos, slots, crypto — disabled) ===== */}
      {countrySections.slice(3).map((section, i) => (
        <CountryGrid
          key={section.pathSuffix}
          title={section.title}
          description={section.description}
          pathSuffix={section.pathSuffix}
          variant={i % 2 === 0 ? "default" : "alt"}
          disabled
        />
      ))}
    </main>
  );
}
