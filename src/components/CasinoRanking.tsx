type CardColorSet = {
  border: string;
  badge: string;
  bonus: string;
  nameColor: string;
  bonusText: string;
  logo: string;
};

const cardColors: Record<number, CardColorSet> = {
  1: {
    border: "border-2 card-border-gold",
    badge: "bg-[#fbbf24] text-black",
    bonus: "bonus-bg-gold",
    nameColor: "text-[#fbbf24]",
    bonusText: "text-[#fbbf24]",
    logo: "bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-black",
  },
  2: {
    border: "border-2 card-border-rose",
    badge: "bg-[#f43f5e] text-white",
    bonus: "bonus-bg-rose",
    nameColor: "text-[#f43f5e]",
    bonusText: "text-[#fb7185]",
    logo: "bg-gradient-to-br from-[#f43f5e] to-[#e11d48] text-white",
  },
  3: {
    border: "border-2 card-border-blue",
    badge: "bg-[#3b82f6] text-white",
    bonus: "bonus-bg-blue",
    nameColor: "text-[#3b82f6]",
    bonusText: "text-[#60a5fa]",
    logo: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white",
  },
  4: {
    border: "border-2 card-border-purple",
    badge: "bg-[#a855f7] text-white",
    bonus: "bonus-bg-purple",
    nameColor: "text-[#a855f7]",
    bonusText: "text-[#c084fc]",
    logo: "bg-gradient-to-br from-[#a855f7] to-[#7c3aed] text-white",
  },
  5: {
    border: "border-2 card-border-cyan",
    badge: "bg-[#06b6d4] text-white",
    bonus: "bonus-bg-cyan",
    nameColor: "text-[#06b6d4]",
    bonusText: "text-[#22d3ee]",
    logo: "bg-gradient-to-br from-[#06b6d4] to-[#0891b2] text-white",
  },
};

const logoMap: Record<string, { src: string; invert?: boolean; lightBg?: boolean }> = {
  "starda-casino": { src: "/img/logos/starda.svg" },
  "monro-casino": { src: "/img/logos/monro.svg" },
  "sol-casino": { src: "/img/logos/sol.svg" },
  "fresh-casino": { src: "/img/logos/fresh.png" },
  "stake": { src: "/img/logos/stake.png", invert: true },
  "bet365": { src: "/img/logos/bet365.svg" },
  "betsson": { src: "/img/logos/betsson.svg" },
  "betsson-peru": { src: "/img/logos/betsson.svg" },
  "betsson-mexico": { src: "/img/logos/betsson.svg" },
  "betsson-chile": { src: "/img/logos/betsson.svg" },
  "betsson-argentina": { src: "/img/logos/betsson.svg" },
  "betsson-latam": { src: "/img/logos/betsson.svg" },
  "1xbet": { src: "/img/logos/1xbet.png" },
  "betway": { src: "/img/logos/betway.png", invert: true },
  "betway-mexico": { src: "/img/logos/betway.png", invert: true },
  "caliente": { src: "/img/logos/caliente.png" },
  "codere": { src: "/img/logos/codere.svg", invert: true },
  "strendus": { src: "/img/logos/strendus.png" },
  "winpot": { src: "/img/logos/winpot.svg" },
  "luckia": { src: "/img/logos/luckia.png" },
  "betano": { src: "/img/logos/betano.png" },
  "inkabet": { src: "/img/logos/inkabet.png" },
  "doradobet": { src: "/img/logos/doradobet.png" },
  "betcris": { src: "/img/logos/betcris.svg" },
  "meridianbet": { src: "/img/logos/meridianbet.webp" },
  "bplay": { src: "/img/logos/bplay.webp" },
  "casino-buenos-aires": { src: "/img/logos/casinobuenosaires.webp" },
  "20bet": { src: "/img/logos/20bet.png" },
  "dafabet": { src: "/img/logos/dafabet.png" },
  "betfair": { src: "/img/logos/betfair.png" },
  "melbet": { src: "/img/logos/melbet.jpg" },
  "1win": { src: "/img/logos/1win.svg" },
  "pinup": { src: "/img/logos/pin-up.png" },
  "jackpotcity-chile": { src: "/img/logos/jackpotcity.png" },
};

export type CasinoRankingItem = {
  rank: number;
  name: string;
  slug: string;
  bonus: string;
  rating: number;
  highlight?: boolean;
  badge?: string;
  /** Text shown as secondary info, e.g. "45+ mesas" or "4 500+ juegos" */
  infoText: string;
};

interface CasinoRankingProps {
  casinos: CasinoRankingItem[];
  /** Column header for the secondary info column in the desktop table */
  infoColumnLabel: string;
}

function RatingBar({ rating }: { rating: number }) {
  const pct = (rating / 10) * 100;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#22c55e] to-[#4ade80]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[#22c55e] font-black text-sm tabular-nums">{rating}</span>
    </div>
  );
}

export default function CasinoRanking({ casinos, infoColumnLabel }: CasinoRankingProps) {
  return (
    <>
      {/* ── Mobile cards (sm:hidden) ── */}
      <div className="sm:hidden space-y-4 mb-10">
        {casinos.map((c) => {
          const colors = cardColors[c.rank];
          const isTop5 = c.rank <= 5;
          const initials = c.name.replace(/Casino|Online/gi, "").trim().substring(0, 2).toUpperCase();
          const logoData = logoMap[c.slug];
          const logoSrc = logoData?.src;

          return (
            <div
              key={c.slug}
              className={`rounded-2xl overflow-hidden ${isTop5 && colors ? colors.border : "border border-white/[0.08]"}`}
              style={{ background: "linear-gradient(145deg, #1a1a1a 0%, #141414 50%, #111111 100%)" }}
            >
              {/* Header: logo + name + rank */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg overflow-hidden ${
                    !logoSrc
                      ? isTop5 && colors
                        ? colors.logo
                        : "bg-gradient-to-br from-[#333] to-[#222] text-[#999]"
                      : "bg-white/[0.08]"
                  }`}
                >
                  {logoSrc ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={logoSrc}
                      alt={c.name}
                      className={`w-8 h-8 object-contain ${logoData?.invert ? "logo-invert" : ""} ${logoData?.lightBg ? "logo-light-bg" : ""}`}
                    />
                  ) : (
                    <span className="font-black text-sm">{initials}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className={`font-extrabold text-base ${isTop5 && colors ? colors.nameColor : "text-white"}`}>
                      {c.name}
                    </p>
                    {c.badge && (
                      <span
                        className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase ${
                          c.highlight ? "bg-[#fbbf24] text-black" : "bg-[#f43f5e] text-white"
                        }`}
                      >
                        {c.badge}
                      </span>
                    )}
                  </div>
                  {c.rank <= 5 && (
                    <div className="flex items-center gap-1 mt-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg
                          key={s}
                          className={`w-3 h-3 ${s <= Math.round(c.rating / 2) ? "text-[#fbbf24]" : "text-[#333]"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-xs ${
                    isTop5 && colors ? colors.badge : "bg-white/[0.06] text-[#71717a]"
                  }`}
                >
                  {c.rank}
                </div>
              </div>

              {/* Bonus */}
              <div
                className={`mx-4 mb-4 rounded-xl overflow-hidden relative bonus-bg-animated ${
                  isTop5 && colors ? colors.bonus : "bonus-bg-blue"
                }`}
              >
                <div className="bonus-shimmer absolute inset-0 rounded-xl" style={{ animationDelay: `${(c.rank * 1.7) % 5}s` }} />
                <div className="relative px-4 py-4 text-center">
                  <p className="text-[10px] text-[#71717a] uppercase tracking-widest font-bold mb-1.5">
                    Bono de Bienvenida
                  </p>
                  <p className={`text-sm font-black leading-tight ${isTop5 && colors ? colors.bonusText : "text-white"}`}>
                    {c.bonus}
                  </p>
                </div>
              </div>

              {/* Info row */}
              <div className="flex items-center justify-between px-5 pb-3 text-xs text-[#71717a]">
                <span>{c.infoText}</span>
                <span className="text-[#22c55e] font-black">{c.rating}/10</span>
              </div>

              {/* CTA */}
              <div className="px-4 pb-4">
                <a
                  href={`/go/${c.slug}`}
                  target="_blank"
                  rel="nofollow noopener sponsored"
                  className="cta-animated flex items-center justify-center w-full py-3.5 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide"
                >
                  {c.rank === 1 ? "Visitar Casino →" : "Jugar Ahora"}
                </a>
              </div>

              {c.rank === 1 && (
                <p className="text-center text-[9px] text-[#71717a] pb-3">+18 | Juega con responsabilidad</p>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Desktop table (hidden sm:block) ── */}
      <div className="hidden sm:block overflow-x-auto rounded-2xl border border-white/[0.06] mb-10">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-4 font-bold">#</th>
              <th className="px-4 py-4 font-bold">Casino</th>
              <th className="px-4 py-4 font-bold hidden sm:table-cell">Bono de Bienvenida</th>
              <th className="px-4 py-4 font-bold hidden lg:table-cell">{infoColumnLabel}</th>
              <th className="px-4 py-4 font-bold">Puntuación</th>
              <th className="px-4 py-4 font-bold text-right">Enlace</th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((c) => {
              const dl = logoMap[c.slug];
              return (
                <tr
                  key={c.slug}
                  className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${
                    c.highlight ? "bg-[#fbbf24]/[0.03]" : ""
                  }`}
                  style={c.highlight ? { boxShadow: "inset 3px 0 0 #fbbf24" } : undefined}
                >
                  <td className="px-4 py-4 font-black text-white">
                    {c.highlight ? (
                      <span className="inline-flex items-center gap-1.5 text-[#fbbf24]">
                        {c.rank}
                        <span className="text-[10px] bg-[#fbbf24] text-black font-black px-1.5 py-0.5 rounded uppercase">
                          Top
                        </span>
                      </span>
                    ) : (
                      c.rank
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      {dl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={dl.src}
                          alt=""
                          className={`w-7 h-7 object-contain shrink-0 ${dl.invert ? "logo-invert" : ""} ${dl.lightBg ? "logo-light-bg" : ""}`}
                        />
                      ) : null}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-extrabold ${c.highlight ? "text-[#fbbf24]" : "text-white"}`}>
                            {c.name}
                          </span>
                          {c.badge && (
                            <span
                              className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase ${
                                c.highlight ? "bg-[#fbbf24] text-black" : "bg-[#f43f5e] text-white"
                              }`}
                            >
                              {c.badge}
                            </span>
                          )}
                        </div>
                        <span className="block sm:hidden text-xs text-[#71717a] mt-1">{c.bonus}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[#d4d4d8] hidden sm:table-cell">{c.bonus}</td>
                  <td className="px-4 py-4 text-[#9ca3af] hidden lg:table-cell">{c.infoText}</td>
                  <td className="px-4 py-4 w-36">
                    <RatingBar rating={c.rating} />
                  </td>
                  <td className="px-4 py-4 text-right">
                    <a
                      href={`/go/${c.slug}`}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap"
                    >
                      Jugar Ahora
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
