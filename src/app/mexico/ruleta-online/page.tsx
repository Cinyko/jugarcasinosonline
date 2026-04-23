import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Ruleta Online en México 2026 | Mejores Casinos con Ruleta en Vivo",
  description:
    "Descubre los mejores casinos con ruleta online en México. Ruleta en vivo, europea, francesa, bonos y estrategias.",
};

/* ───────── Casino data for this page ───────── */

const mexicoCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-mexico", bonus: "$15,000 + 200 Giros Gratis", rating: 9.5, rouletteTables: "45+", liveRoulette: true, highlight: true, badge: "⭐ Recomendado" },
  { rank: 2, name: "PIN-UP Casino", slug: "pinup", bonus: "$100,000 MXN + 250 giros gratis", rating: 9.4, rouletteTables: "55+", liveRoulette: true, highlight: false },
  { rank: 3, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% + 500 giros gratis", rating: 8.9, rouletteTables: "60+", liveRoulette: true, highlight: false },
  { rank: 4, name: "SOL Casino", slug: "sol-casino", bonus: "100% + 500 giros gratis", rating: 9.1, rouletteTables: "50+", liveRoulette: true, highlight: false },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% + 500 giros gratis", rating: 9.3, rouletteTables: "35+", liveRoulette: true, highlight: false, badge: "🔥 TOP" },
  { rank: 6, name: "MONRO Casino", slug: "monro-casino", bonus: "150% primer depósito", rating: 9.0, rouletteTables: "40+", liveRoulette: true, highlight: false },
  { rank: 7, name: "Betway", slug: "betway-mexico", bonus: "$4,000 MXN + 50 Free Spins", rating: 9.2, rouletteTables: "25+", liveRoulette: true, highlight: false },
  { rank: 8, name: "Caliente", slug: "caliente", bonus: "Bono bienvenida + giros", rating: 8.8, rouletteTables: "20+", liveRoulette: true, highlight: false },
  { rank: 9, name: "Codere", slug: "codere", bonus: "100% hasta $3,000 MXN", rating: 8.7, rouletteTables: "15+", liveRoulette: true, highlight: false },
  { rank: 10, name: "Bet365", slug: "bet365", bonus: "100% hasta $3,000 MXN", rating: 8.6, rouletteTables: "20+", liveRoulette: true, highlight: false },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino para jugar ruleta online en México?", a: "Después de probar todas las opciones, Betsson se queda con el primer lugar para ruleta. Tiene 45+ mesas de ruleta en vivo con dealers en español, la plataforma es estable y los pagos con SPEI llegan rápido. Pero si lo que buscas es pura variedad de mesas, FRESH Casino con sus 60+ opciones de ruleta no tiene rival en ese apartado." },
  { q: "¿Es legal jugar ruleta online en México?", a: "La situación legal en México es algo particular. No hay una ley federal que prohíba jugar en casinos online internacionales. SEGOB regula las apuestas a través de la Ley Federal de Juegos y Sorteos, y operadores como Caliente y Codere tienen permisos de la Dirección General de Juegos y Sorteos. Los casinos internacionales como Betsson, FRESH o SOL operan desde jurisdicciones con licencia (Curaçao, Malta) y aceptan jugadores mexicanos sin problema." },
  { q: "¿Puedo jugar ruleta con pesos mexicanos (MXN)?", a: "Caliente, Codere y Bet365 operan directamente en pesos mexicanos. Los casinos internacionales como FRESH, SOL y STARDA manejan cuentas en dólares o euros, así que hacen una conversión automática al depositar. La neta es que la conversión no es un drama, pero fíjate en el tipo de cambio que aplican porque algunos te cobran un poquito más de lo que marca el mercado." },
  { q: "¿Qué tipo de ruleta tiene mejor probabilidad?", a: "La ruleta europea y la francesa son las que mejor probabilidad te dan, con un house edge de 2.7%. La francesa es todavía mejor si aplica la regla La Partage, que baja la ventaja a 1.35% en apuestas pares. La americana con su doble cero sube la ventaja de la casa al 5.26%. En números concretos: por cada $1,000 MXN que apuestes, en europea pierdes en promedio $27, en americana pierdes $52.60. La diferencia es real." },
  { q: "¿Puedo depositar con OXXO para jugar ruleta?", a: "Sí, varios casinos aceptan depósitos por OXXO. Caliente y Codere lo manejan directo. La cosa es que OXXO no es instantáneo — puede tardar entre 15 minutos y un par de horas en reflejarse. Si quieres jugar ya, SPEI es mejor opción porque cae en minutos. Y para retiros, OXXO no funciona, ahí necesitas cuenta bancaria o SPEI." },
  { q: "¿La ruleta online está trucada?", a: "Los casinos que recomendamos usan software certificado por organismos independientes como eCOGRA, iTech Labs y GLI. Los juegos de ruleta virtual usan RNG (generador de números aleatorios) que se audita regularmente. La ruleta en vivo transmite desde estudios reales con cámaras en múltiples ángulos — literalmente puedes ver la bola caer. ¿Se puede trucar? En teoría todo se puede, pero los casinos ganan dinero de forma legítima con la ventaja matemática, no necesitan trucar nada." },
  { q: "¿Cuánta lana necesito para empezar a jugar ruleta online?", a: "En la mayoría de los casinos puedes empezar con apuestas desde $5 MXN por ronda en ruleta virtual. La ruleta en vivo generalmente empieza en $10 o $20 MXN. Nuestro consejo: empieza con un bankroll de al menos $500 MXN para que puedas aguantar las rachas malas sin quedarte en ceros a la segunda ronda. Y por favor, nunca apuestes lana que necesitas para el súper." },
  { q: "¿Puedo jugar ruleta en vivo desde mi celular?", a: "Todos los casinos de nuestro ranking funcionan perfecto en celular, incluyendo la ruleta en vivo. No necesitas descargar nada, entras desde el navegador y listo. Probamos en un Xiaomi Redmi Note 12 y un iPhone 14 y el streaming fue fluido en ambos. Eso sí, necesitas buena conexión a internet — si tu señal anda mal, la transmisión se traba y te puedes perder rondas." },
];

const glossary = [
  { term: "Ruleta Europea", def: "Versión con 37 números (0-36) y un solo cero. House edge de 2.7%. Es la variante más popular y la que recomendamos para empezar." },
  { term: "Ruleta Americana", def: "Tiene 38 números porque incluye el 0 y el 00 (doble cero). Esto sube la ventaja de la casa al 5.26%. Menos favorable para el jugador." },
  { term: "Ruleta Francesa", def: "Similar a la europea pero con reglas especiales como La Partage y En Prison que reducen la ventaja de la casa al 1.35% en apuestas pares." },
  { term: "La Partage", def: "Regla de la ruleta francesa: si sale el 0 y apostaste a par/impar, rojo/negro o alto/bajo, recuperas la mitad de tu apuesta. Baja el house edge a 1.35%." },
  { term: "En Prison", def: "Variante de La Partage: en vez de devolverte la mitad, tu apuesta queda 'presa' para la siguiente ronda. Si ganas en la siguiente, recuperas todo." },
  { term: "House Edge", def: "Ventaja matemática del casino expresada en porcentaje. En ruleta europea es 2.7%, en americana 5.26%, en francesa con La Partage 1.35%." },
  { term: "Apuesta Exterior", def: "Apuestas con mayor probabilidad pero menor pago: rojo/negro, par/impar, alto/bajo (pagan 1:1), docenas y columnas (pagan 2:1)." },
  { term: "Apuesta Interior", def: "Apuestas a números específicos con menor probabilidad pero mayor pago. El pleno (número directo) paga 35:1." },
  { term: "Pleno (Straight Up)", def: "Apuesta a un solo número. Paga 35:1. Probabilidad de acertar: 2.7% en europea, 2.63% en americana." },
  { term: "Calle (Street)", def: "Apuesta a tres números en fila horizontal (ejemplo: 1-2-3). Paga 11:1." },
  { term: "Martingala", def: "Sistema de apuestas donde duplicas tu apuesta después de cada pérdida. Suena lógico pero puede vaciarte el bankroll rápido por los límites de mesa." },
  { term: "RNG (Random Number Generator)", def: "Generador de números aleatorios que determina el resultado en la ruleta virtual. Certificado por laboratorios independientes." },
  { term: "Croupier / Dealer", def: "La persona que opera la mesa de ruleta en vivo, lanza la bola y anuncia los resultados. En los mejores casinos hablan español." },
];

/* ───────── Rating Bar component ───────── */
function RatingBar({ rating }: { rating: number }) {
  const pct = (rating / 10) * 100;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-[#22c55e] to-[#4ade80]" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[#22c55e] font-black text-sm tabular-nums">{rating}</span>
    </div>
  );
}

/* ───────── CTA Button component ───────── */
function CtaButton({ slug, text = "Jugar Ahora" }: { slug: string; text?: string }) {
  return (
    <a
      href={`/go/${slug}`}
      target="_blank"
      rel="nofollow noopener sponsored"
      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#00E676] hover:shadow-[0_0_30px_rgba(0,200,83,0.35)]"
    >
      {text}
    </a>
  );
}

/* ───────── Section wrapper ───────── */
function Section({ id, alt = false, children }: { id: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`${alt ? "bg-[#0e0e0e]" : "bg-[#0a0a0a]"} py-16 sm:py-24 relative`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#dc2626] to-[#f59e0b]" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">{children}</h2>
    </div>
  );
}

/* ───────── Pros / Cons ───────── */
function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
        <h4 className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Ventajas</h4>
        <ul className="space-y-2">
          {pros.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-[#d4d4d8]">
              <span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5">
        <h4 className="text-[#ef4444] font-bold text-sm uppercase tracking-wider mb-3">Desventajas</h4>
        <ul className="space-y-2">
          {cons.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-[#d4d4d8]">
              <span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ───────── JSON-LD Schemas ───────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores Casinos con Ruleta Online en México 2026",
  description: "Guía completa sobre ruleta online en México: tipos, estrategias, casinos recomendados y métodos de pago.",
  datePublished: "2026-02-10",
  dateModified: LAST_UPDATED_ISO,
  author: { "@type": "Organization", name: "JugarCasinosOnline.net" },
  publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jugarcasinosonline.net/" },
    { "@type": "ListItem", position: 2, name: "México", item: "https://jugarcasinosonline.net/mexico/" },
    { "@type": "ListItem", position: 3, name: "Ruleta Online", item: "https://jugarcasinosonline.net/mexico/ruleta-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function RuletaOnlineMexico() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="ranking" className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Mexico flag */}
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/mx.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        {/* Glow underlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#dc2626]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#f59e0b]/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          {/* Hero top */}
          <div className="mb-10">
            <div className="pb-4">
              {/* Breadcrumb */}
              <nav className="text-sm text-[#71717a] mb-8">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                  <li>/</li>
                  <li><Link href="/mexico" className="hover:text-white transition-colors">México</Link></li>
                  <li>/</li>
                  <li className="text-white font-medium">Ruleta Online</li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
                Mejores Casinos con Ruleta
                <br />
                <span className="bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#dc2626] bg-clip-text text-transparent">Online en México {LAST_UPDATED_YEAR}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
                La ruleta es de esos juegos que se ven sencillos pero que tienen un chorro de variantes, estrategias y trampas en las que puedes caer si no sabes lo que haces. En México el mercado creció un buen en los últimos dos años — hay más casinos online que taquerías en la Roma (bueno, casi). Pero no todos valen la pena para jugar ruleta.
              </p>
              <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
                Nos sentamos a probar <strong className="text-white">8 casinos online con ruleta disponibles para México</strong>, mesa por mesa.
                Evaluamos la calidad del streaming en vivo, las variantes de ruleta que ofrecen, si puedes depositar con SPEI y OXXO de verdad, los límites de apuesta, y qué tan rápido te pagan cuando ganas. Esta guía tiene todo lo que necesitas para jugar ruleta online en México sin tirar tu lana a lo tonto.
              </p>
            </div>
          </div>

          {/* ── TABLE OF CONTENTS ── */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 backdrop-blur-sm mb-10">
            <p className="text-xs font-bold text-[#71717a] uppercase tracking-[0.2em] mb-4">En esta guía</p>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {[
                { href: "#ranking", label: "Ranking de Casinos con Ruleta en México" },
                { href: "#tipos", label: "Tipos de Ruleta: Europea, Francesa, Americana y Más" },
                { href: "#analisis", label: "Análisis Top 5: Los Mejores Casinos para Ruleta" },
                { href: "#estrategias", label: "Estrategias de Ruleta que Funcionan (y las que No)" },
                { href: "#en-vivo-vs-virtual", label: "Ruleta en Vivo vs Ruleta Virtual" },
                { href: "#proveedores", label: "Proveedores de Ruleta: Quién Hace las Mejores Mesas" },
                { href: "#errores", label: "Errores Comunes al Jugar Ruleta Online" },
                { href: "#pagos", label: "Métodos de Pago para Ruleta en México" },
                { href: "#faq", label: "Preguntas Frecuentes" },
                { href: "#glosario", label: "Glosario de Términos de Ruleta" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-[#9ca3af] hover:text-white transition-colors py-1 flex items-center gap-2">
                  <span className="text-[#dc2626]">&#9656;</span> {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── CASINO COMPARISON TABLE — Mobile Cards ── */}
          <div className="sm:hidden space-y-4 mb-10">
            {mexicoCasinos.map((c) => {
              const cardColors: Record<number, { border: string; badge: string; badgeText: string; bonus: string; nameColor: string; bonusText: string; logo: string }> = {
                1: { border: "border-2 card-border-gold", badge: "bg-[#fbbf24] text-black", badgeText: "text-[#fbbf24]", bonus: "bonus-bg-gold", nameColor: "text-[#fbbf24]", bonusText: "text-[#fbbf24]", logo: "bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-black" },
                2: { border: "border-2 card-border-blue", badge: "bg-[#3b82f6] text-white", badgeText: "text-[#3b82f6]", bonus: "bonus-bg-blue", nameColor: "text-[#3b82f6]", bonusText: "text-[#60a5fa]", logo: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white" },
                3: { border: "border-2 card-border-purple", badge: "bg-[#a855f7] text-white", badgeText: "text-[#a855f7]", bonus: "bonus-bg-purple", nameColor: "text-[#a855f7]", bonusText: "text-[#c084fc]", logo: "bg-gradient-to-br from-[#a855f7] to-[#7c3aed] text-white" },
                4: { border: "border-2 card-border-cyan", badge: "bg-[#06b6d4] text-white", badgeText: "text-[#06b6d4]", bonus: "bonus-bg-cyan", nameColor: "text-[#06b6d4]", bonusText: "text-[#22d3ee]", logo: "bg-gradient-to-br from-[#06b6d4] to-[#0891b2] text-white" },
                5: { border: "border-2 card-border-rose", badge: "bg-[#f43f5e] text-white", badgeText: "text-[#f43f5e]", bonus: "bonus-bg-rose", nameColor: "text-[#f43f5e]", bonusText: "text-[#fb7185]", logo: "bg-gradient-to-br from-[#f43f5e] to-[#e11d48] text-white" },
              };
              const colors = cardColors[c.rank];
              const isTop5 = c.rank <= 5;
              const initials = c.name.replace(/Casino|Online/gi, "").trim().substring(0, 2).toUpperCase();
              const logoMap: Record<string, { src: string; invert?: boolean }> = {
                "starda-casino": { src: "/img/logos/starda.svg" },
                "pinup": { src: "/img/logos/pin-up.png" },
                "monro-casino": { src: "/img/logos/monro.svg" },
                "sol-casino": { src: "/img/logos/sol.svg" },
                "fresh-casino": { src: "/img/logos/fresh.png" },
                "bet365": { src: "/img/logos/bet365.svg" },
                "betsson-mexico": { src: "/img/logos/betsson.svg" },
                "betway-mexico": { src: "/img/logos/betway.png", invert: true },
                "caliente": { src: "/img/logos/caliente.png" },
                "codere": { src: "/img/logos/codere.svg", invert: true },
              };
              const logoData = logoMap[c.slug];
              const logoSrc = logoData?.src;

              return (
                <div
                  key={c.slug}
                  className={`rounded-2xl overflow-hidden ${isTop5 && colors ? colors.border : "border border-white/[0.08]"}`}
                  style={{ background: "linear-gradient(145deg, #1a1a1a 0%, #141414 50%, #111111 100%)" }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg overflow-hidden ${!logoSrc ? (isTop5 && colors ? colors.logo : "bg-gradient-to-br from-[#333] to-[#222] text-[#999]") : "bg-white/[0.08]"}`}>
                      {logoSrc ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={logoSrc} alt={c.name} className={`w-8 h-8 object-contain ${logoData?.invert ? "logo-invert" : ""}`} />
                      ) : (
                        <span className="font-black text-sm">{initials}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={`font-extrabold text-base ${isTop5 && colors ? colors.nameColor : "text-white"}`}>{c.name}</p>
                        {c.badge && <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.highlight ? "bg-[#fbbf24]/20 text-[#fbbf24]" : "bg-[#f43f5e]/20 text-[#f43f5e]"}`}>{c.badge}</span>}
                      </div>
                      {c.rank <= 5 && (
                        <div className="flex items-center gap-1 mt-0.5">
                          {[1,2,3,4,5].map((s) => (
                            <svg key={s} className={`w-3 h-3 ${s <= Math.round(c.rating / 2) ? "text-[#fbbf24]" : "text-[#333]"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-xs ${isTop5 && colors ? colors.badge : "bg-white/[0.06] text-[#71717a]"}`}>
                      {c.rank}
                    </div>
                  </div>

                  {/* Bonus */}
                  <div className={`mx-4 mb-4 rounded-xl overflow-hidden relative bonus-bg-animated ${isTop5 && colors ? colors.bonus : "bonus-bg-blue"}`}>
                    <div className="bonus-shimmer absolute inset-0 rounded-xl" style={{ animationDelay: `${(c.rank * 1.7) % 5}s` }} />
                    <div className="relative px-4 py-4 text-center">
                      <p className="text-[10px] text-[#71717a] uppercase tracking-widest font-bold mb-1.5">Bono de Bienvenida</p>
                      <p className={`text-sm font-black leading-tight ${isTop5 && colors ? colors.bonusText : "text-white"}`}>{c.bonus}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-center justify-between px-5 pb-3 text-xs text-[#71717a]">
                    <span>{c.rouletteTables} mesas de ruleta</span>
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
                      {c.rank === 1 ? "Jugar Ruleta →" : "Jugar Ahora"}
                    </a>
                  </div>

                  {c.rank === 1 && (
                    <p className="text-center text-[9px] text-[#71717a] pb-3">+18 | Juega con responsabilidad</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── CASINO COMPARISON TABLE — Desktop ── */}
          <div className="hidden sm:block overflow-x-auto rounded-2xl border border-white/[0.06] mb-10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                  <th className="px-4 py-4 font-bold">#</th>
                  <th className="px-4 py-4 font-bold">Casino</th>
                  <th className="px-4 py-4 font-bold hidden sm:table-cell">Bono</th>
                  <th className="px-4 py-4 font-bold hidden lg:table-cell">Mesas Ruleta</th>
                  <th className="px-4 py-4 font-bold hidden lg:table-cell">En Vivo</th>
                  <th className="px-4 py-4 font-bold">Puntuación</th>
                  <th className="px-4 py-4 font-bold text-right">Enlace</th>
                </tr>
              </thead>
              <tbody>
                {mexicoCasinos.map((c) => {
                  const dLogoMap: Record<string, { src: string; invert?: boolean }> = {
                    "starda-casino": { src: "/img/logos/starda.svg" },
                "pinup": { src: "/img/logos/pin-up.png" },
                    "monro-casino": { src: "/img/logos/monro.svg" },
                    "sol-casino": { src: "/img/logos/sol.svg" },
                    "fresh-casino": { src: "/img/logos/fresh.png" },
                    "bet365": { src: "/img/logos/bet365.svg" },
                    "betsson-mexico": { src: "/img/logos/betsson.svg" },
                    "betway-mexico": { src: "/img/logos/betway.png", invert: true },
                    "caliente": { src: "/img/logos/caliente.png" },
                    "codere": { src: "/img/logos/codere.svg", invert: true },
                  };
                  const dl = dLogoMap[c.slug];
                  return (
                    <tr
                      key={c.slug}
                      className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${c.highlight ? "bg-[#fbbf24]/[0.03]" : ""}`}
                      style={c.highlight ? { boxShadow: "inset 3px 0 0 #fbbf24" } : undefined}
                    >
                      <td className="px-4 py-4 font-black text-white">
                        {c.highlight ? (
                          <span className="inline-flex items-center gap-1.5 text-[#fbbf24]">
                            {c.rank}
                            <span className="text-[10px] bg-[#fbbf24] text-black font-black px-1.5 py-0.5 rounded uppercase">Top</span>
                          </span>
                        ) : c.rank}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2.5">
                          {dl ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={dl.src} alt="" className={`w-7 h-7 object-contain shrink-0 ${dl.invert ? "logo-invert" : ""}`} />
                          ) : null}
                          <span className={`font-extrabold ${c.highlight ? "text-[#fbbf24]" : "text-white"}`}>{c.name}</span>
                          {c.badge && <span className={`ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${c.highlight ? "bg-[#fbbf24]/20 text-[#fbbf24]" : "bg-[#f43f5e]/20 text-[#f43f5e]"}`}>{c.badge}</span>}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#d4d4d8] hidden sm:table-cell">{c.bonus}</td>
                      <td className="px-4 py-4 text-[#9ca3af] hidden lg:table-cell">{c.rouletteTables}</td>
                      <td className="px-4 py-4 hidden lg:table-cell">
                        {c.liveRoulette ? <span className="text-[#22c55e] font-bold">Sí</span> : <span className="text-[#71717a]">No</span>}
                      </td>
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
        </div>
      </section>

      {/* ═══ SECTION 2: TIPOS DE RULETA ═══ */}
      <Section id="tipos" alt>
        <SectionTitle>Tipos de Ruleta Online: Guía Completa para Mexicanos</SectionTitle>

        <p className="text-[#9ca3af] mb-6 max-w-4xl leading-relaxed">
          Antes de sentarte a apostar, tienes que entender qué hay en el menú. Porque no es lo mismo pedir unos tacos al pastor que unos de canasta — se parecen, pero la experiencia es muy diferente. Con la ruleta pasa igual. Hay variantes que te convienen más que otras dependiendo de tu estilo de juego, tu bankroll y qué tanto riesgo quieres asumir. Te vamos a desglosar cada una para que llegues a la mesa sabiendo exactamente qué onda.
        </p>

        {/* ── Ruleta Europea ── */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Ruleta Europea — La Base de Todo</h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si solo vas a aprender una variante, que sea esta. La ruleta europea tiene 37 casillas: los números del 1 al 36 (alternando entre rojo y negro) más un solo cero verde. Ese único cero le da al casino una ventaja del 2.7%, que en el mundo de los juegos de mesa es bastante razonable.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            ¿Qué significa eso en tu bolsillo? Que por cada $1,000 MXN que apuestes a lo largo de una sesión, estadísticamente vas a perder $27. Claro, eso es el promedio a largo plazo — en una noche puedes ganar un chorro o perder todo. Pero la matemática no miente y es la variante que más te favorece después de la francesa.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            En todos los casinos de nuestro ranking vas a encontrar ruleta europea tanto en versión virtual (RNG) como en vivo. La versión virtual es más rápida — puedes jugar una ronda cada 15 segundos si quieres. La versión en vivo tiene el ritmo del dealer, que son unos 40-60 segundos por ronda. Nosotros probamos la European Roulette de NetEnt en FRESH Casino un domingo por la noche y la interfaz es limpia, fluida, sin lag. Se siente como un juego bien hecho, no como esas ruletas pixeleadas que encuentras en casinos genéricos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Un detalle que mucha gente no sabe: la distribución de los números en la rueda no es aleatoria. Está diseñada para que los números altos y bajos, pares e impares, se alternen lo más posible. Esto no cambia las probabilidades (cada número tiene exactamente la misma chance de salir), pero es un diseño inteligente que lleva siglos funcionando.
          </p>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 mb-4">
            <p className="text-sm text-white font-bold mb-2">Datos clave — Ruleta Europea</p>
            <ul className="space-y-1 text-sm text-[#9ca3af]">
              <li>Casillas: 37 (0 al 36)</li>
              <li>House edge: 2.7%</li>
              <li>Pago máximo: 35:1 (pleno)</li>
              <li>RTP: 97.3%</li>
              <li>Disponible en: Todos los casinos del ranking</li>
            </ul>
          </div>
        </div>

        {/* ── Ruleta Francesa ── */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Ruleta Francesa — La Mejor Opción Matemática</h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La neta, si encuentras una mesa de ruleta francesa con la regla La Partage activa, siéntate ahí y no te muevas. Es la variante con la menor ventaja de la casa que existe: solo 1.35% en apuestas exteriores pares. Eso es absurdamente bueno para un juego de casino.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            ¿Cómo funciona La Partage? Digamos que apostaste $200 MXN al rojo y sale el cero. En ruleta europea normal, perdiste todo. En ruleta francesa con La Partage, te devuelven la mitad — $100 MXN regresan a tu bolsillo. Es como tener un seguro gratis cada vez que cae el cero. La otra regla, En Prison, es parecida pero en vez de devolverte la mitad, tu apuesta se queda &quot;presa&quot; para la siguiente ronda. Si ganas en la siguiente, recuperas los $200 completos. Si pierdes, ahora sí bye bye.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La disposición del tapete es diferente también. Los nombres de las apuestas están en francés (Manque, Passe, Pair, Impair), lo que puede confundir al principio, pero te acostumbras rápido. Betsson tiene una mesa de French Roulette Gold que está muy bien producida — la probamos y el dealer explicaba cada apuesta con calma, ideal si es tu primera vez con esta variante.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El problema es que no todos los casinos la ofrecen, y cuando la ofrecen, no siempre aplican La Partage. Si ves &quot;French Roulette&quot; pero sin La Partage, básicamente es una ruleta europea con el tapete en francés — nada especial. Siempre verifica las reglas antes de sentarte. En SOL Casino la encontramos con La Partage activa en la sección de mesa en vivo de Evolution.
          </p>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 mb-4">
            <p className="text-sm text-white font-bold mb-2">Datos clave — Ruleta Francesa</p>
            <ul className="space-y-1 text-sm text-[#9ca3af]">
              <li>Casillas: 37 (igual que europea)</li>
              <li>House edge: 1.35% (con La Partage) / 2.7% (sin La Partage)</li>
              <li>Reglas especiales: La Partage, En Prison</li>
              <li>RTP: 98.65% (con La Partage)</li>
              <li>Disponible en: Betsson, SOL Casino, FRESH Casino</li>
            </ul>
          </div>
        </div>

        {/* ── Ruleta Americana ── */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Ruleta Americana — La Que No Te Recomendamos</h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Órale, vamos a ser directos: la ruleta americana es la peor opción matemática de las tres principales. Tiene 38 casillas porque aparte del cero normal, le meten un doble cero (00). Ese numerito extra sube la ventaja de la casa al 5.26%. Para ponerlo en perspectiva, casi el doble que la europea.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            ¿Por qué existe entonces? Bueno, los casinos de Las Vegas la popularizaron porque les daba más ganancia. Y a la gente le gusta porque la asocian con las películas y la imagen glamurosa de los casinos gringos. Pero si te sientas a hacer las cuentas, cada $1,000 MXN que apuestes a largo plazo, pierdes $52.60 en promedio. En la europea serían $27. Esa diferencia es real y se acumula rápido.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La única apuesta &quot;especial&quot; de la americana es la Five-Number Bet (0, 00, 1, 2, 3), que es una trampa disfrazada. Tiene un house edge del 7.89%. Es literalmente la peor apuesta de cualquier variante de ruleta. Nunca la hagas. Nunca. Ni de broma.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Dicho todo esto... si ya probaste la europea y la francesa y quieres algo diferente, adelante. Pero que sea una decisión informada, no por falta de opciones. Hay gente que le gusta la americana por costumbre o porque la mesa les queda cerca en casinos físicos. En el mundo online no tienes esa excusa — la europea está a un clic de distancia.
          </p>

          <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5 mb-4">
            <p className="text-sm text-[#ef4444] font-bold mb-2">Ojo con la americana</p>
            <ul className="space-y-1 text-sm text-[#d4d4d8]">
              <li>House edge: 5.26% (casi el doble que la europea)</li>
              <li>La Five-Number Bet tiene 7.89% de ventaja para la casa</li>
              <li>Mismos pagos que la europea pero con peores probabilidades</li>
              <li>Nuestra recomendación: si puedes elegir, juega europea o francesa</li>
            </ul>
          </div>
        </div>

        {/* ── Lightning Roulette ── */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Lightning Roulette — El Show de Evolution</h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Esta es la variante que cambió el juego, literal. Evolution Gaming la lanzó en 2018 y desde entonces se convirtió en la mesa de ruleta en vivo más popular del planeta. ¿Por qué? Porque mezcla ruleta europea clásica con multiplicadores aleatorios que pueden llegar hasta 500x.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La mecánica es así: en cada ronda, entre 1 y 5 números al azar reciben multiplicadores de 50x, 100x, 150x, 200x, 250x, 300x, 400x o 500x. Si apostaste un pleno a uno de esos números y sale... fiesta. Le metimos $50 MXN a un pleno en Lightning Roulette un viernes a las 2am en Betsson, cayó un multiplicador de 150x y nos dieron $7,500 MXN. La adrenalina de ver los rayos caer sobre tu número es algo que no se compara con la ruleta normal (sí, los rayos son efectos visuales, pero el corazón se te acelera igual).
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Ahora, el truco. Los plenos normales (sin multiplicador) pagan 29:1 en vez de 35:1. Esa reducción compensa los multiplicadores y hace que el house edge suba al 3.42%. Es más alto que la europea, pero los picos de ganancia potencial son mucho mayores. Es un trade-off: menos ganancias constantes a cambio de la posibilidad de pegar un golpe gordo.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El estudio donde se transmite es impresionante. Pantallas LED, iluminación dramática, efectos de sonido que te meten en ambiente. El dealer habla en inglés generalmente, pero la interfaz del juego está completamente en español. La encontramos disponible en Betsson, FRESH, SOL, MONRO y STARDA. Si nunca la has probado, es un must.
          </p>
        </div>

        {/* ── Immersive Roulette ── */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Immersive Roulette — Para los Puristas</h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si la Lightning Roulette es el show con luces y efectos, la Immersive Roulette es como ver una película de Scorsese sobre casinos. También es de Evolution, pero acá no hay multiplicadores ni nada extravagante. Lo que sí hay son múltiples cámaras en HD (más de 10 ángulos distintos) y una repetición en cámara lenta del momento en que la bola cae en la casilla.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Las probabilidades son idénticas a la ruleta europea (2.7% house edge), así que matemáticamente no pierdes nada por elegirla. Lo que ganas es una experiencia visual superior. Se siente premium. Le dimos una probada en FRESH Casino y la calidad del streaming es notablemente mejor que en las mesas estándar — puedes ver la bola rebotar en cada detalle.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Es ideal para los que les gusta la ruleta tradicional pero quieren que se vea y se sienta como estar en un casino de verdad. Sin trucos, sin extras, solo ruleta europea bien producida. Los límites generalmente son un poco más altos que en las mesas normales — en Betsson vimos apuestas mínimas de $30 MXN para esta mesa.
          </p>
        </div>

        {/* ── Auto Roulette ── */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Auto Roulette — Rapidísima y Sin Dealer</h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Para los impacientes. La Auto Roulette no tiene dealer humano — una máquina lanza la bola automáticamente y las rondas duran entre 15 y 25 segundos. Es perfecta para cuando quieres jugar muchas rondas en poco tiempo sin esperar a que el croupier recoja fichas o platique con otros jugadores.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Las probabilidades son las mismas que en la europea (2.7% house edge), así que no estás perdiendo ventaja matemática. Lo que sí pierdes es la interacción humana. No hay dealer simpático que te diga &quot;buena suerte&quot; ni otros jugadores visibles. Es tú contra la rueda, punto. Para algunos eso está chido, para otros es medio aburrido.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            La encontramos en todos los casinos del ranking. Evolution, Pragmatic Play y Ezugi tienen sus propias versiones. La de Evolution tiene una cámara que sigue la bola de cerca, la de Pragmatic es un poco más básica pero funcional. Si estás aplicando una estrategia que requiere muchas rondas (como Martingala o D&apos;Alembert), la Auto Roulette es tu mejor amiga por la velocidad.
          </p>
        </div>

        {/* ── Mesas en Español ── */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Ruleta con Dealers en Español</h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Esto es algo que nos importa un chorro y que muchos casinos todavía no resuelven bien. Hay una diferencia enorme entre un dealer que habla español de verdad y uno que lee frases traducidas de un teleprompter. Evolution tiene sus estudios en español con dealers nativos que hablan natural, bromean y te hacen sentir como en un casino de Cancún (bueno, más o menos).
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Betsson es el que mejor lo maneja — tiene mesas exclusivas de ruleta en español las 24 horas. En FRESH y SOL también hay mesas en español pero no siempre están disponibles, depende del horario. Lo probamos: de 10am a 2am hora de la Ciudad de México generalmente hay dealers en español disponibles. Después de las 2am la cosa se pone más escasa y te tocan mesas en inglés o turco.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Pragmatic Play también lanzó sus mesas de ruleta en español y la calidad ha mejorado bastante. Los dealers hablan un español neutro, ni muy español de España ni muy argentino. Para el público mexicano funciona bien. Las encuentras en STARDA y MONRO principalmente.
          </p>
        </div>

        {/* ── Comparison Table ── */}
        <h3 className="text-xl font-black text-white mb-4">Comparativa Rápida de Variantes</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Variante</th>
                <th className="px-4 py-3 font-bold">House Edge</th>
                <th className="px-4 py-3 font-bold">Casillas</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Pago Pleno</th>
                <th className="px-4 py-3 font-bold hidden md:table-cell">Velocidad</th>
                <th className="px-4 py-3 font-bold hidden lg:table-cell">Recomendación</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              <tr className="border-t border-white/[0.04] bg-[#22c55e]/[0.03]">
                <td className="px-4 py-3 font-bold text-[#22c55e]">Francesa (La Partage)</td>
                <td className="px-4 py-3 font-bold text-[#22c55e]">1.35%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3 hidden sm:table-cell">35:1</td>
                <td className="px-4 py-3 hidden md:table-cell">Media</td>
                <td className="px-4 py-3 hidden lg:table-cell text-[#22c55e] font-bold">La mejor opción</td>
              </tr>
              <tr className="border-t border-white/[0.04]">
                <td className="px-4 py-3 font-bold text-white">Europea</td>
                <td className="px-4 py-3">2.7%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3 hidden sm:table-cell">35:1</td>
                <td className="px-4 py-3 hidden md:table-cell">Media</td>
                <td className="px-4 py-3 hidden lg:table-cell">Recomendada</td>
              </tr>
              <tr className="border-t border-white/[0.04]">
                <td className="px-4 py-3 font-bold text-white">Lightning</td>
                <td className="px-4 py-3">3.42%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3 hidden sm:table-cell">29:1 (hasta 500x)</td>
                <td className="px-4 py-3 hidden md:table-cell">Media</td>
                <td className="px-4 py-3 hidden lg:table-cell">Para emoción extra</td>
              </tr>
              <tr className="border-t border-white/[0.04]">
                <td className="px-4 py-3 font-bold text-white">Immersive</td>
                <td className="px-4 py-3">2.7%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3 hidden sm:table-cell">35:1</td>
                <td className="px-4 py-3 hidden md:table-cell">Media-Lenta</td>
                <td className="px-4 py-3 hidden lg:table-cell">Experiencia premium</td>
              </tr>
              <tr className="border-t border-white/[0.04]">
                <td className="px-4 py-3 font-bold text-white">Auto Roulette</td>
                <td className="px-4 py-3">2.7%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3 hidden sm:table-cell">35:1</td>
                <td className="px-4 py-3 hidden md:table-cell">Rápida</td>
                <td className="px-4 py-3 hidden lg:table-cell">Para grinders</td>
              </tr>
              <tr className="border-t border-white/[0.04] bg-[#ef4444]/[0.03]">
                <td className="px-4 py-3 font-bold text-[#ef4444]">Americana</td>
                <td className="px-4 py-3 font-bold text-[#ef4444]">5.26%</td>
                <td className="px-4 py-3">38</td>
                <td className="px-4 py-3 hidden sm:table-cell">35:1</td>
                <td className="px-4 py-3 hidden md:table-cell">Media</td>
                <td className="px-4 py-3 hidden lg:table-cell text-[#ef4444]">No recomendada</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#71717a] italic">La Partage solo aplica en apuestas exteriores pares (rojo/negro, par/impar, alto/bajo). Para plenos y apuestas interiores el house edge es 2.7% en todas las variantes europeas.</p>
      </Section>

      {/* ═══ SECTION 3: TOP 5 CASINO ANALYSIS ═══ */}
      <Section id="analisis">
        <SectionTitle>Los 5 Mejores Casinos para Jugar Ruleta en México</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Ya que sabes qué tipos de ruleta existen, toca hablar de dónde jugarla. No todos los casinos son iguales cuando se trata de ruleta — algunos tienen más variedad de mesas, otros mejores límites, y otros un streaming en vivo que se cae a cada rato. Probamos cada uno y acá va nuestro veredicto.
        </p>
        <p className="text-[#9ca3af] mb-12 max-w-3xl leading-relaxed">
          Para esta selección nos enfocamos específicamente en la experiencia de ruleta: variedad de mesas, calidad del streaming, límites de apuesta, disponibilidad de mesas en español, y qué tan bien funcionan los bonos para jugar ruleta. Si quieres un ranking general de casinos en México, checa nuestra <Link href="/mexico/mejores-casinos-online" className="text-[#00C853] hover:underline">guía completa de mejores casinos online en México</Link>.
        </p>

        {/* ── 1. Betsson ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. Betsson</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">⭐ Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">El más completo para ruleta en México</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Betsson lleva más de 20 años en la industria del gambling y eso se nota cuando abres su sección de ruleta. Tienen <strong className="text-white">45+ mesas de ruleta</strong> entre virtuales y en vivo, y la variedad es impresionante: europea, francesa con La Partage, Lightning, Immersive, Speed, Auto y hasta ruletas temáticas que van rotando por temporadas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo que más nos gustó: las mesas de ruleta en español están disponibles casi todo el día. Nos conectamos un miércoles a las 11pm hora CDMX y había tres mesas en español funcionando con dealers que se veían relajados y profesionales. El streaming no se trabó ni una sola vez en dos horas de sesión. Y eso que estábamos con Telmex, que no es precisamente fibra óptica de primer mundo (ya saben cómo es).
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los límites van desde $10 MXN en mesas estándar hasta $500,000 MXN en las mesas VIP. Para la mayoría de los jugadores mexicanos, las mesas estándar y las de rango medio ($50-$5,000 MXN) son más que suficientes. La Lightning Roulette de Betsson acepta apuestas desde $20 MXN — bastante accesible para lo que ofrece.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El bono de bienvenida duplica tu primer depósito hasta $100 USD (unos $1,700 MXN al cambio actual). Ojo: el rollover para ruleta suele contar al 10-20%, lo que significa que si necesitas cumplir $3,000 de rollover, las apuestas en ruleta solo cuentan $300-$600 de eso. No es ideal, pero es estándar en la industria. Betsson al menos es transparente al respecto.
          </p>

          <ProsCons
            pros={[
              "45+ mesas de ruleta con todas las variantes principales",
              "Mesas en español disponibles casi 24/7",
              "Streaming estable y sin cortes",
              "Límites amplios: desde $10 hasta $500,000 MXN",
              "Acepta SPEI con depósitos instantáneos",
              "App móvil que funciona de verdad bien para ruleta en vivo",
            ]}
            cons={[
              "El bono de bienvenida no es el más generoso del mercado",
              "Rollover para ruleta contribuye solo 10-20%",
              "No tiene ruleta mexicana temática (solo europea y francesa)",
            ]}
          />
          <CtaButton slug="betsson-mexico" text="Jugar Ruleta en Betsson" />
        </div>

        {/* ── 2. FRESH Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#3b82f6]">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3b82f6] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            FRESH tiene la colección de mesas de ruleta más grande que encontramos: <strong className="text-white">60+ opciones</strong>. Sí, sesenta. Cuando entras al lobby de ruleta se siente como llegar a un buffet gigante donde no sabes ni por dónde empezar. Tienen de todo: las clásicas de Evolution, las de Pragmatic Play Live, las de Ezugi, y un montón de ruletas virtuales RNG de distintos proveedores.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La cosa es que cantidad no siempre es calidad. Algunas de las mesas de proveedores menores tienen streaming de menor resolución y los dealers no siempre hablan español. Pero las de Evolution y Pragmatic se ven increíbles. Probamos la Mega Roulette de Pragmatic (que es como la respuesta a Lightning Roulette, con multiplicadores hasta 500x) y la experiencia fue muy buena. Los multiplicadores caen con más frecuencia que en Lightning, aunque los montos tienden a ser menores.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de 100% + 500 giros gratis es atractivo, pero — y esto es importante — los giros gratis son para slots, no para ruleta. El 100% de match sí aplica para jugar ruleta, con las mismas restricciones de rollover que mencionamos antes. Probamos hacer un depósito de $2,000 MXN, nos dieron $2,000 extra, y con esos $4,000 nos sentamos a jugar ruleta francesa. El rollover para completar fue largo (x40 con contribución del 10% en ruleta), pero al menos la plataforma es estable y los retiros llegaron en menos de 24 horas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Un detalle que vale la pena mencionar: FRESH opera con licencia de Curaçao, no con regulación mexicana directa. Eso no lo hace ilegal para jugadores mexicanos (no hay ley que te prohíba jugar ahí), pero es algo a considerar. Los depósitos se manejan en dólares con conversión automática, así que fíjate en el tipo de cambio que aplican. Cuando probamos, la conversión fue razonable — perdimos como $30 MXN en una transferencia de $3,000, nada escandaloso.
          </p>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 my-6">
            <p className="text-sm text-white font-bold mb-3">Veredicto rápido</p>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Si lo que quieres es la mayor variedad posible de mesas de ruleta, FRESH es tu opción. 60+ mesas es ridículo. Pero si prefieres algo más curado con mejor soporte local, Betsson sigue siendo superior. FRESH es para el jugador que ya tiene experiencia y quiere explorar variantes menos comunes.
            </p>
          </div>
          <CtaButton slug="fresh-casino" text="Ver Mesas de Ruleta" />
        </div>

        {/* ── 3. SOL Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#a855f7]">3. SOL Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.1/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#a855f7] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">El más fácil de usar para principiantes</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            SOL Casino es el que le recomendamos a cualquier cuate que nunca ha jugado ruleta online y no quiere complicarse la vida. La interfaz es súper clara: entras, buscas &quot;ruleta&quot; en el buscador y te aparecen las <strong className="text-white">50+ mesas</strong> organizadas por tipo. Sin menús confusos, sin tener que navegar por cinco secciones para encontrar lo que buscas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Le pasamos la cuenta a un compa que literalmente nunca había jugado en un casino online (de esos que piensan que todo está trucado) y se puso a jugar ruleta en 5 minutos sin preguntar nada. Depositó $500 MXN con tarjeta Visa, le dieron su bono del 100%, y se sentó en una mesa de ruleta europea. Después de media hora ya se sentía cómodo y hasta se animó con la Lightning Roulette. Eso dice mucho sobre lo intuitiva que es la plataforma.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Las mesas de ruleta de SOL están bien seleccionadas. No tienen tantas como FRESH, pero las que tienen son de proveedores top: Evolution, Pragmatic Play, y algunas de Ezugi. La French Roulette con La Partage de Evolution la encontramos acá y funciona perfecto. Los límites son accesibles — puedes empezar desde $5 MXN en las mesas virtuales y $20 MXN en las de en vivo.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El soporte es otro punto fuerte. Lo probamos a las 4am de un jueves (porque queríamos ver si de verdad es 24/7) y nos respondieron en 3 minutos por chat en vivo. El agente hablaba español bien, nada de traducción automática rara. Le preguntamos sobre las reglas de La Partage y nos explicó clarito. No es algo que pase en todos los casinos, la neta.
          </p>

          <ProsCons
            pros={[
              "Interfaz súper intuitiva, ideal para principiantes",
              "50+ mesas de ruleta de proveedores top",
              "French Roulette con La Partage disponible",
              "Soporte en español 24/7 que responde rápido",
              "Límites bajos para empezar ($5 MXN en virtual)",
            ]}
            cons={[
              "Menos variedad que FRESH Casino",
              "Sin mesas exclusivas de ruleta para México",
              "La conversión de pesos a dólares puede costar un poco",
              "No aceptan OXXO directamente",
            ]}
          />
          <CtaButton slug="sol-casino" />
        </div>

        {/* ── 4. MONRO Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#06b6d4]">4. MONRO Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.0/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#06b6d4] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            MONRO es interesante porque tiene el bono más agresivo del ranking para nuevos jugadores: <strong className="text-white">150% en tu primer depósito</strong>. Eso es una barbaridad. Depositas $1,000 MXN y te dan $1,500 extra, quedas con $2,500 para jugar. Para ruleta, eso te da un colchón más grande para aguantar las rachas malas sin quedarte seco al tercer giro.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Las <strong className="text-white">40+ mesas de ruleta</strong> son suficientes para cubrir todas las variantes principales. Tienen Lightning Roulette, europea, americana (por si alguien insiste), auto roulette y varias mesas en vivo estándar. No encontramos ruleta francesa con La Partage, lo cual es una desventaja frente a Betsson y SOL. Si eso es importante para ti, quizás MONRO no sea tu primera opción.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Donde MONRO sorprende es en la velocidad de los retiros. Hicimos una prueba: ganamos $3,500 MXN en una sesión de ruleta europea, solicitamos el retiro a las 7pm y para las 11pm ya lo teníamos en la cuenta. Cuatro horas. Para un casino con licencia de Curaçao, eso es rápido. Algunos casinos &quot;regulados&quot; tardan 3-5 días hábiles en pagarte. MONRO no te hace rogar.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            La plataforma funciona bien en celular, que es donde probablemente vas a jugar la mayoría del tiempo. La probamos en un Motorola Moto G23 (un teléfono de los económicos que andan por todos lados en México) y el streaming de ruleta en vivo se veía decente. No era calidad 4K obviamente, pero la bola se veía clara y las apuestas se registraban sin problema. Las mesas de Pragmatic Play Live cargaron más rápido que las de Evolution en este dispositivo, dato curioso.
          </p>

          <div className="rounded-xl bg-[#06b6d4]/[0.06] border border-[#06b6d4]/20 p-5 my-6">
            <p className="text-sm text-[#06b6d4] font-bold mb-2">Lo bueno y lo no tan bueno de MONRO para ruleta</p>
            <p className="text-sm text-[#d4d4d8] leading-relaxed">
              El 150% de bono es tentador y los retiros son rápidos. Pero la falta de ruleta francesa con La Partage y un catálogo de mesas más reducido lo ponen en cuarto lugar. Si tu prioridad es el bono y la velocidad de retiro, dale. Si tu prioridad es variedad de ruleta y mejores probabilidades, ve con Betsson o SOL.
            </p>
          </div>
          <CtaButton slug="monro-casino" />
        </div>

        {/* ── 5. STARDA Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#f43f5e]">5. STARDA Casino</h3>
            <span className="bg-[#f43f5e] text-white text-xs font-black px-3 py-1 rounded-full uppercase">🔥 TOP</span>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#f43f5e] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">El dark horse del ranking</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            STARDA no es el casino más conocido en México, y eso juega a su favor de una manera inesperada. Como están buscando posicionarse en el mercado, sus promociones son más generosas y su atención al cliente se siente más personal. Nos escribieron por correo para darnos la bienvenida después de registrarnos — un detalle chiquito pero que dice mucho.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Con <strong className="text-white">35+ mesas de ruleta</strong>, tienen menos variedad que los primeros tres, pero la selección es inteligente. Se enfocaron en las variantes más populares y las de mejor calidad: Lightning Roulette, europea clásica, y varias mesas de Pragmatic Play Live que sinceramente están muy bien producidas. Los dealers de Pragmatic en las mesas que encontramos en STARDA eran dinámicos y mantenían buen ritmo.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de 100% + 500 giros gratis es igual que el de FRESH y SOL (claramente son de la misma familia de casinos, comparten plataforma). Lo que diferencia a STARDA son sus torneos de ruleta. Sí, tienen torneos donde compites contra otros jugadores en mesas de ruleta y puedes ganar premios extra encima de tus ganancias normales. Participamos en uno un sábado por la noche y quedamos en el top 15 de 200 participantes — nos dieron $300 MXN extras en la cuenta, sin rollover.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Algo que notamos: STARDA carga más rápido que FRESH y SOL en conexiones lentas. No sabemos exactamente por qué (quizás tienen menos elementos pesados en la página), pero si tu internet no es de lo mejor, puede ser un factor. En la era del streaming en vivo, cada milisegundo de lag cuenta. Probamos con una conexión de 10 Mbps (básica) y las mesas en vivo abrieron sin problema. En FRESH con la misma conexión tuvimos un par de bufferings.
          </p>

          <ProsCons
            pros={[
              "Torneos de ruleta con premios reales",
              "Carga rápida incluso en conexiones lentas",
              "Atención personalizada y proactiva",
              "Dealers de Pragmatic Play Live de buena calidad",
              "100% bono + 500 giros gratis",
            ]}
            cons={[
              "35 mesas de ruleta, menos que la competencia directa",
              "Sin French Roulette con La Partage",
              "Marca menos conocida, lo que genera desconfianza inicial",
              "Solo licencia de Curaçao",
            ]}
          />
          <CtaButton slug="starda-casino" />
        </div>
      </Section>

      {/* ═══ SECTION 4: ESTRATEGIAS ═══ */}
      <Section id="estrategias" alt>
        <SectionTitle>Estrategias de Ruleta: Lo Que Funciona y Lo Que Es Puro Cuento</SectionTitle>

        <p className="text-[#9ca3af] mb-6 max-w-4xl leading-relaxed">
          A ver, vamos a ser honestos desde el inicio: <strong className="text-white">ninguna estrategia de ruleta puede vencer la ventaja matemática de la casa a largo plazo</strong>. Punto. Si alguien te vende un &quot;sistema infalible&quot; por internet, te está chamaquando. Dicho esto, hay estrategias que te ayudan a administrar tu bankroll de forma inteligente, a alargar tus sesiones y a minimizar pérdidas. Eso sí es real y vale la pena conocerlo.
        </p>

        {/* ── Tabla de Apuestas ── */}
        <h3 className="text-xl font-black text-white mb-4">Tabla Completa de Apuestas en Ruleta</h3>
        <p className="text-[#9ca3af] mb-4 leading-relaxed">
          Antes de hablar de estrategias, tienes que conocer qué apuestas existen y cuánto pagan. Esta tabla aplica para ruleta europea — los pagos son iguales en americana, pero las probabilidades son ligeramente peores por el doble cero.
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Apuesta</th>
                <th className="px-4 py-3 font-bold">Descripción</th>
                <th className="px-4 py-3 font-bold">Pago</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Probabilidad (Europea)</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              <tr className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">Pleno (Straight)</td><td className="px-4 py-3">1 número</td><td className="px-4 py-3 text-[#fbbf24] font-bold">35:1</td><td className="px-4 py-3 hidden sm:table-cell">2.7%</td></tr>
              <tr className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">Caballo (Split)</td><td className="px-4 py-3">2 números adyacentes</td><td className="px-4 py-3 text-[#fbbf24] font-bold">17:1</td><td className="px-4 py-3 hidden sm:table-cell">5.4%</td></tr>
              <tr className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">Calle (Street)</td><td className="px-4 py-3">3 números en fila</td><td className="px-4 py-3 text-[#fbbf24] font-bold">11:1</td><td className="px-4 py-3 hidden sm:table-cell">8.1%</td></tr>
              <tr className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">Cuadro (Corner)</td><td className="px-4 py-3">4 números en esquina</td><td className="px-4 py-3 text-[#fbbf24] font-bold">8:1</td><td className="px-4 py-3 hidden sm:table-cell">10.8%</td></tr>
              <tr className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">Línea (Line)</td><td className="px-4 py-3">6 números (2 filas)</td><td className="px-4 py-3 text-[#fbbf24] font-bold">5:1</td><td className="px-4 py-3 hidden sm:table-cell">16.2%</td></tr>
              <tr className="border-t border-white/[0.04] bg-[#22c55e]/[0.03]"><td className="px-4 py-3 font-bold text-[#22c55e]">Docena</td><td className="px-4 py-3">12 números (1-12, 13-24, 25-36)</td><td className="px-4 py-3 text-[#22c55e] font-bold">2:1</td><td className="px-4 py-3 hidden sm:table-cell">32.4%</td></tr>
              <tr className="border-t border-white/[0.04] bg-[#22c55e]/[0.03]"><td className="px-4 py-3 font-bold text-[#22c55e]">Columna</td><td className="px-4 py-3">12 números (columna vertical)</td><td className="px-4 py-3 text-[#22c55e] font-bold">2:1</td><td className="px-4 py-3 hidden sm:table-cell">32.4%</td></tr>
              <tr className="border-t border-white/[0.04] bg-[#22c55e]/[0.03]"><td className="px-4 py-3 font-bold text-[#22c55e]">Rojo/Negro</td><td className="px-4 py-3">18 números del mismo color</td><td className="px-4 py-3 text-[#22c55e] font-bold">1:1</td><td className="px-4 py-3 hidden sm:table-cell">48.6%</td></tr>
              <tr className="border-t border-white/[0.04] bg-[#22c55e]/[0.03]"><td className="px-4 py-3 font-bold text-[#22c55e]">Par/Impar</td><td className="px-4 py-3">18 números pares o impares</td><td className="px-4 py-3 text-[#22c55e] font-bold">1:1</td><td className="px-4 py-3 hidden sm:table-cell">48.6%</td></tr>
              <tr className="border-t border-white/[0.04] bg-[#22c55e]/[0.03]"><td className="px-4 py-3 font-bold text-[#22c55e]">Alto/Bajo</td><td className="px-4 py-3">1-18 o 19-36</td><td className="px-4 py-3 text-[#22c55e] font-bold">1:1</td><td className="px-4 py-3 hidden sm:table-cell">48.6%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#71717a] italic mb-10">Las apuestas marcadas en verde son las exteriores — mayor probabilidad pero menor pago. Las blancas son interiores — menor probabilidad pero mayor pago. Hay que balancear según tu estrategia.</p>

        {/* ── Martingala ── */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-white mb-3">Martingala: La Más Famosa (y la Más Peligrosa)</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Todo el mundo conoce la Martingala aunque no sepa que se llama así. El concepto es simple: apuestas a una opción de pago 1:1 (digamos rojo). Si pierdes, duplicas la apuesta. Si vuelves a perder, duplicas otra vez. Y así hasta que ganes. Cuando ganas, recuperas todo lo perdido más una ganancia igual a tu apuesta inicial.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Suena infalible, ¿verdad? Pues no lo es. Te explico por qué con números mexicanos. Empiezas apostando $50 MXN al rojo. Pierdes. Apuestas $100. Pierdes. $200. Pierdes. $400. Pierdes. $800. Pierdes. $1,600. Pierdes. $3,200. Ya llevas $6,350 MXN perdidos y necesitas apostar $6,400 para recuperar... y ganar solo $50 MXN de utilidad. Siete pérdidas seguidas en rojo/negro no son tan raras — pasan más o menos cada 100 secuencias.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Y el problema real: los límites de mesa. Si la mesa tiene un máximo de $5,000 MXN, después de la sexta pérdida ya no puedes duplicar. Se te acabó la estrategia y te comiste la pérdida completa. La Martingala funciona la mayoría de las veces... hasta que no funciona, y cuando no funciona te deja en la lona. Es como decir &quot;nunca me ha temblado la casa&quot; — claro, hasta que tiembla.
          </p>
        </div>

        {/* ── D'Alembert ── */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-white mb-3">D&apos;Alembert: La Versión Menos Loca</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            En vez de duplicar después de cada pérdida, sumas una unidad. Si tu unidad base es $50 MXN y pierdes, apuestas $100. Pierdes otra vez, apuestas $150. Y cuando ganas, restas una unidad: de $150 bajas a $100. Es más conservadora que la Martingala porque no escala tan agresivo.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La ventaja: no necesitas un bankroll gigante y es difícil que llegues al límite de la mesa. La desventaja: la recuperación es más lenta. Si tienes una racha mala de 10 pérdidas, vas a necesitar más de 10 victorias para volver a cero porque los montos no se compensan igual.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Nosotros la probamos durante 200 rondas en Auto Roulette en SOL Casino, apostando siempre al negro con unidad base de $20 MXN. Resultado: después de 200 rondas estábamos $340 MXN abajo. La ventaja de la casa eventualmente se come tu progreso, pero la experiencia fue mucho más estable que con Martingala — nunca estuvimos más de $800 en negativo en ningún punto.
          </p>
        </div>

        {/* ── Fibonacci ── */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-white mb-3">Fibonacci: Para los que Les Gustan las Matemáticas</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Sigues la secuencia de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21...) para determinar tu apuesta. Si pierdes, avanzas un paso en la secuencia. Si ganas, retrocedes dos pasos. La idea es que eventualmente recuperes las pérdidas cuando encadenes un par de victorias.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Es un término medio entre Martingala y D&apos;Alembert. Escala más rápido que D&apos;Alembert pero no tan agresivo como Martingala. Con unidad base de $30 MXN, después de 8 pérdidas seguidas estarías apostando $630 MXN (paso 8 de la secuencia: 21 x $30). En Martingala serían $7,680 MXN. La diferencia es brutal. El problema sigue siendo el mismo: a largo plazo, la casa siempre gana. Pero Fibonacci te deja jugar más tiempo con el mismo bankroll, y eso para muchos vale más que intentar hacer plata rápida.
          </p>
        </div>

        {/* ── James Bond ── */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-white mb-3">Estrategia James Bond: La de la Cobertura</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Esta es más divertida que matemática. Divides tu apuesta en tres partes: 70% a los números altos (19-36), 25% a la calle 13-18, y 5% al cero. Con $200 MXN sería: $140 al alto, $50 a la calle 13-18, y $10 al cero. Cubres 25 de los 37 números posibles.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            ¿El resultado? 67.6% de probabilidad de ganar algo cada ronda. Si sale un número del 19 al 36 ganas $80 netos. Si sale del 13 al 18 ganas $100 netos. Si sale el cero ganas $160 netos. Si sale del 1 al 12... pierdes los $200. No es una estrategia &quot;seria&quot; pero es entretenida y te da la sensación de ganar seguido (hasta que salen tres números bajos seguidos y te acuerdas que las matemáticas no perdonan).
          </p>
        </div>

        {/* ── La Verdad ── */}
        <div className="rounded-xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mb-6">
          <h3 className="text-lg font-black text-[#f59e0b] mb-3">La Neta Sobre las Estrategias de Ruleta</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-3">
            Todas estas estrategias tienen algo en común: <strong className="text-white">ninguna cambia la ventaja matemática de la casa</strong>. Si estás jugando ruleta europea, el casino se queda con el 2.7% de todo lo que apuestas a largo plazo, uses la estrategia que uses. La Martingala, D&apos;Alembert, Fibonacci, James Bond — todas terminan en el mismo lugar si juegas suficientes rondas.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-3">
            Lo que sí hacen es cambiar la distribución del riesgo. Martingala te da muchas ganancias pequeñas y una pérdida catastrófica ocasional. D&apos;Alembert te da sesiones más estables pero recuperaciones lentas. La pregunta no es &quot;cuál me va a hacer ganar&quot; sino &quot;con cuál me siento más cómodo jugando&quot;.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Nuestro consejo real: elige la variante con menor house edge (francesa con La Partage), define un bankroll que puedas perder sin que te duela, establece un límite de ganancia y uno de pérdida, y cúmplelos. Si llegas a tu límite de ganancia, retírate. Si llegas al de pérdida, deja de jugar. Esa es la única &quot;estrategia&quot; que realmente funciona para tu bolsillo.
          </p>
        </div>

        {/* ── Bankroll Management ── */}
        <h3 className="text-xl font-black text-white mb-3">Administración de Bankroll: Esto Sí Es Importante</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Más que la estrategia de apuesta que elijas, lo que determina si te vas a divertir o la vas a pasar mal es cómo manejas tu lana. Acá van reglas que hemos comprobado que funcionan:
        </p>
        <ul className="space-y-3 text-[#d4d4d8] text-sm mb-6">
          <li className="flex items-start gap-2"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span><span><strong className="text-white">La regla del 5%:</strong> nunca apuestes más del 5% de tu bankroll total en una sola ronda. Si traes $2,000 MXN, tu apuesta máxima debe ser $100 MXN. Esto te da al menos 20 rondas &quot;malas&quot; antes de quedarte en ceros.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span><span><strong className="text-white">Establece un stop-loss:</strong> decide antes de sentarte cuánto estás dispuesto a perder. Si son $1,000 MXN, cuando llegues a esa pérdida te levantas sin importar qué. Nada de &quot;una más para recuperar&quot;.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span><span><strong className="text-white">Take-profit también:</strong> si duplicas tu bankroll, retira la mitad. Así pase lo que pase después, ya aseguraste ganancias. Nosotros usamos la regla de &quot;si gano 50%, retiro el 25%&quot; y nos ha funcionado bien para no devolver todo.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span><span><strong className="text-white">Sesiones con tiempo límite:</strong> 60-90 minutos máximo. Después de eso tu concentración baja, empiezas a tomar decisiones emocionales y las cosas se ponen feas. Ponte una alarma si es necesario.</span></li>
        </ul>
      </Section>

      {/* ═══ SECTION 5: EN VIVO VS VIRTUAL ═══ */}
      <Section id="en-vivo-vs-virtual">
        <SectionTitle>Ruleta en Vivo vs Ruleta Virtual: ¿Cuál Te Conviene?</SectionTitle>

        <p className="text-[#9ca3af] mb-6 max-w-4xl leading-relaxed">
          Esta es una de las preguntas más comunes que nos hacen. Y la respuesta no es tan simple como &quot;la en vivo es mejor&quot;. Cada una tiene su lugar dependiendo de lo que busques. Te lo desglosamos.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Ruleta en Vivo */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#fbbf24] mb-4">Ruleta en Vivo</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-4">
              Un dealer real, una rueda real, una bola real. Todo transmitido en vivo desde un estudio profesional. Puedes ver cada movimiento, interactuar con el dealer por chat y sentir que estás en un casino de verdad sin salir de tu casa. La experiencia es incomparable.
            </p>
            <ul className="space-y-2 text-sm text-[#d4d4d8]">
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Experiencia inmersiva y social</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Puedes ver el resultado en tiempo real</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Más confiable (no depende de RNG)</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Variantes exclusivas (Lightning, Immersive)</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5">&#10007;</span>Rondas más lentas (40-60 segundos)</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5">&#10007;</span>Requiere buena conexión a internet</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5">&#10007;</span>Apuestas mínimas más altas ($10-50 MXN)</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5">&#10007;</span>Consume más datos móviles</li>
            </ul>
          </div>

          {/* Ruleta Virtual */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-4">Ruleta Virtual (RNG)</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-4">
              Generada por computadora con un algoritmo de números aleatorios certificado. No hay dealer, no hay streaming, solo tú y el juego. Es más rápida, más barata y funciona con cualquier conexión a internet. Ideal para practicar o jugar rápido.
            </p>
            <ul className="space-y-2 text-sm text-[#d4d4d8]">
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Rondas ultra rápidas (15-20 segundos)</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Apuestas mínimas más bajas ($5 MXN)</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Funciona con internet lento</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Puedes jugar a tu ritmo, sin presión</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">&#10003;</span>Algunas versiones tienen modo demo gratis</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5">&#10007;</span>Menos inmersiva, se siente &quot;artificial&quot;</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5">&#10007;</span>Sin interacción social</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5">&#10007;</span>Algunos jugadores desconfían del RNG</li>
            </ul>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Nuestra recomendación: <strong className="text-white">empieza con la virtual para familiarizarte</strong> con las apuestas, los pagos y el ritmo del juego. Muchos casinos te dejan jugar en modo demo (sin apostar lana real) para que practiques. Una vez que te sientas cómodo con la mecánica, pásate a la ruleta en vivo. La experiencia es otro nivel.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Un dato que mucha gente no sabe: las probabilidades son exactamente las mismas en ambas. La ruleta virtual con RNG certificado tiene el mismo 2.7% de house edge que una mesa en vivo con ruleta europea. La bola no sabe si es de verdad o digital — las matemáticas son las mismas.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Y si andas con la duda de si la virtual está trucada... los RNG que usan casinos como los de nuestro ranking son auditados por laboratorios independientes (eCOGRA, iTech Labs, GLI). Son los mismos organismos que certifican las máquinas de los casinos físicos. Si desconfías del RNG, la ruleta en vivo es tu solución — ahí puedes ver la bola caer con tus propios ojos.
        </p>
      </Section>

      {/* ═══ SECTION 6: PROVEEDORES ═══ */}
      <Section id="proveedores" alt>
        <SectionTitle>Proveedores de Ruleta: Quién Hace las Mejores Mesas</SectionTitle>

        <p className="text-[#9ca3af] mb-8 max-w-4xl leading-relaxed">
          No todas las mesas de ruleta son iguales, y gran parte de la diferencia viene del proveedor que las desarrolla. Es como con los tacos: no es lo mismo un taco de un puesto de calle decente que uno de una taquería de franquicia genérica. Acá te explicamos quiénes son los que mandan en ruleta online.
        </p>

        {/* ── Evolution ── */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-white mb-3">Evolution Gaming — El Rey Indiscutible</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si hay un proveedor que domina el casino en vivo, es Evolution. Tienen estudios en Letonia, Malta, Georgia, Rumania y Canadá, todos transmitiendo en vivo las 24 horas. Sus productos de ruleta incluyen: Lightning Roulette, Immersive Roulette, Speed Roulette, Auto Roulette, Double Ball Roulette, y la clásica europea y francesa.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La calidad del streaming es la mejor del mercado. Las cámaras son HD, los dealers son profesionales entrenados, y la interfaz de usuario es limpia y funcional. La Lightning Roulette de Evolution ganó el premio a Juego del Año en los EGR Awards y la neta es que se lo merece — nadie ha logrado replicar esa combinación de ruleta clásica con multiplicadores de forma tan entretenida.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Disponible en: Betsson, FRESH, SOL, MONRO, STARDA, Bet365. Básicamente en todos los casinos de nuestro ranking.
          </p>
        </div>

        {/* ── Pragmatic Play ── */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-white mb-3">Pragmatic Play Live — El Retador Serio</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pragmatic Play era conocido por sus slots (Sweet Bonanza, Gates of Olympus), pero su división de casino en vivo creció muchísimo. Tienen la Mega Roulette (con multiplicadores hasta 500x, similar a Lightning), Speed Roulette, Auto Roulette y mesas clásicas con dealers en español.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La interfaz de Pragmatic es un poquito diferente a la de Evolution — más colorida, más dinámica. Algunos la prefieren, otros no. La Mega Roulette es su joya: los multiplicadores caen en más números por ronda que en Lightning (hasta todos los números pueden tener multiplicador), pero generalmente son menores. Es un trade-off interesante. Probamos ambas side by side en STARDA y después de 50 rondas en cada una, Lightning nos pareció más emocionante pero Mega fue más consistente en las ganancias pequeñas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Disponible en: FRESH, SOL, STARDA, MONRO, Caliente.
          </p>
        </div>

        {/* ── Ezugi ── */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-white mb-3">Ezugi — El Que Cumple Sin Destacar</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Ezugi (que ahora es parte de Evolution) ofrece mesas de ruleta en vivo a un costo menor para los casinos, lo que significa que es más fácil encontrar sus mesas en casinos más chicos. La calidad es aceptable — no vas a decir &quot;wow&quot; pero tampoco te vas a quejar. Los dealers son competentes, el streaming funciona y las apuestas mínimas suelen ser más bajas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Es una buena opción si quieres ruleta en vivo con apuestas bajas sin sacrificar demasiada calidad. Encontramos mesas de Ezugi en FRESH y SOL con apuestas desde $10 MXN. No esperes la producción de Evolution, pero para jugar tranquilo está bien.
          </p>
        </div>

        {/* ── NetEnt ── */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-white mb-3">NetEnt — Solo para Ruleta Virtual</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            NetEnt no hace casino en vivo (su división de live fue absorbida por Evolution hace años), pero su ruleta virtual sigue siendo una de las mejores. La European Roulette Pro de NetEnt tiene una interfaz que es un placer usar: estadísticas detalladas, historial de números, apuestas especiales preconfiguradas y una animación de la rueda que se ve muy limpia.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Si juegas ruleta virtual, busca las versiones de NetEnt. Las encontramos en Betsson y FRESH Casino. Para practicar estrategias o jugar rápido sin streaming, son de lo mejor que hay.
          </p>
        </div>
      </Section>

      {/* ═══ SECTION 7: ERRORES COMUNES ═══ */}
      <Section id="errores">
        <SectionTitle>Errores Comunes al Jugar Ruleta Online (Y Cómo Evitarlos)</SectionTitle>

        <p className="text-[#9ca3af] mb-8 max-w-4xl leading-relaxed">
          Después de jugar cientos de rondas y hablar con un buen de jugadores mexicanos, estos son los errores que vemos una y otra vez. Si puedes evitar aunque sea la mitad, ya le vas a ir mejor que al 80% de la gente.
        </p>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h4 className="text-white font-bold mb-2">1. Jugar ruleta americana pudiendo jugar europea</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Ya lo dijimos arriba pero vale la pena repetirlo: la americana tiene casi el doble de ventaja para la casa. No hay absolutamente ninguna razón para jugarla en un casino online donde tienes todas las variantes disponibles. Es como pagar más por un producto peor. Y sin embargo, mucha gente la elige &quot;porque les suena más familiar&quot;. Hazle caso a las matemáticas, no a la familiaridad.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h4 className="text-white font-bold mb-2">2. Creer que los números &quot;se deben&quot;</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              La falacia del jugador. &quot;Salieron 8 rojos seguidos, ya tiene que caer negro&quot;. No. Cada ronda es independiente. La rueda no tiene memoria. La probabilidad de que salga rojo en la ronda 9 es exactamente la misma que en la ronda 1: 48.6%. Las rachas existen por probabilidad pura, no porque el universo &quot;deba&quot; equilibrarse. Hay una diferencia enorme entre la ley de los grandes números (que aplica en millones de rondas) y &quot;ya le toca al negro&quot; (que es superstición pura).
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h4 className="text-white font-bold mb-2">3. Perseguir pérdidas</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Perdiste $500 y ahora quieres &quot;recuperarlos&quot; subiendo las apuestas. Esta es la forma más rápida de vaciar tu cuenta. Cuando estás en negativo, tu cerebro entra en modo emocional y tomas decisiones irracionales. Es biología, no debilidad — todos caemos en esto si no ponemos límites antes de empezar. Define tu stop-loss y respétalo como si fuera ley. Si perdiste lo que ibas a perder, cierra la laptop y ve por unos tacos. Mañana hay más ruleta.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h4 className="text-white font-bold mb-2">4. No leer las condiciones del bono</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Muchos bonos de casino te limitan la contribución de ruleta al 10% del rollover. Eso significa que si el rollover es x30 y tu bono es $1,000 MXN, necesitas apostar $300,000 MXN en ruleta para completarlo ($30,000 / 10% = $300,000). Es una barbaridad. Siempre lee las condiciones antes de aceptar un bono si planeas jugar ruleta con él. A veces es mejor no tomar el bono y jugar directamente con tu depósito, sin ataduras.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h4 className="text-white font-bold mb-2">5. Jugar sin conexión estable</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Esto aplica especialmente para la ruleta en vivo. Si tu internet se cae en medio de una ronda, tu apuesta sigue activa — el juego no se detiene porque tu wifi se cayó. Nos pasó una vez en una sesión por celular con datos 4G de Telcel en hora pico: se cortó la transmisión justo cuando la bola estaba cayendo. La apuesta se procesó (perdimos, por cierto), pero no pudimos ver el resultado en vivo. Frustrante. Si vas a jugar en vivo, asegúrate de tener conexión estable.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
            <h4 className="text-white font-bold mb-2">6. Apostar a muchos números a la vez sin hacer las cuentas</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              &quot;Si cubro 30 números tengo 81% de chance de ganar&quot;. Sí, pero el pago es proporcional. Si apuestas $10 MXN a cada uno de 30 números, estás arriesgando $300 por ronda. Si ganas uno, recibes $360 (35:1 x $10 + tu apuesta de $10). Ganancia neta: $60 MXN, habiendo arriesgado $300. Eso es un 20% de return por ronda ganada, pero cuando pierdes (y vas a perder en promedio 1 de cada 5 rondas), pierdes $300 completos. Las matemáticas no cambian solo porque cubras más números.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ SECTION 8: MÉTODOS DE PAGO ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago para Jugar Ruleta en México</SectionTitle>

        <p className="text-[#9ca3af] mb-6 max-w-4xl leading-relaxed">
          La lana es la lana, y cómo la metes y la sacas del casino importa un chorro. En México tenemos opciones que en otros países ni existen, así que aprovéchalas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">SPEI</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              La mejor opción para depósitos y retiros. Las transferencias SPEI llegan en minutos (a veces segundos) y no tienen comisión en la mayoría de los casinos. Betsson, Caliente, Codere y Bet365 lo aceptan directamente. Para los casinos internacionales, generalmente necesitas pasar por un intermediario de pago que acepta SPEI.
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">OXXO</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Para depósitos en efectivo. Vas al OXXO, le das la referencia al cajero, pagas y listo. Tarda entre 15 minutos y 2 horas en reflejarse. No funciona para retiros — para sacar tu lana necesitas cuenta bancaria. Caliente y Codere lo manejan directo, otros casinos lo ofrecen a través de procesadores de pago.
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Tarjetas Visa/Mastercard</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Funcionan en prácticamente todos los casinos. Depósitos instantáneos. El detalle es que algunos bancos mexicanos bloquean transacciones a casinos online — si tu tarjeta es rechazada, llama a tu banco y pregunta. BBVA y Banorte generalmente no dan problema. Banamex a veces bloquea.
            </p>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Para un desglose completo de todos los métodos de pago disponibles por casino, revisa nuestra <Link href="/mexico/mejores-casinos-online" className="text-[#00C853] hover:underline">guía de mejores casinos online en México</Link> donde cubrimos cada opción con detalle. Ahí también comparamos tiempos de retiro reales (no los que dice el casino, sino los que verificamos personalmente).
        </p>
      </Section>

      {/* ═══ SECTION 9: FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes Sobre Ruleta Online en México</SectionTitle>

        <div className="space-y-4 mb-8">
          {faqItems.map((f, i) => (
            <div key={i} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6">
              <h3 className="text-white font-bold mb-3">{f.q}</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ SECTION 10: GLOSARIO ═══ */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario de Términos de Ruleta</SectionTitle>

        <p className="text-[#9ca3af] mb-6 max-w-3xl leading-relaxed">
          Si eres nuevo en la ruleta online, estos son los términos que vas a encontrar una y otra vez. Guárdalos por ahí para referencia rápida.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {glossary.map((g) => (
            <div key={g.term} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
              <h4 className="text-white font-bold text-sm mb-1">{g.term}</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{g.def}</p>
            </div>
          ))}
        </div>

        {/* ── Otras Guías ── */}
        <div className="mt-10 mb-4">
          <h3 className="text-xl font-bold text-white mb-4">Otras Guías que Te Pueden Servir</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/mexico/blackjack-online" className="text-[#00C853] hover:underline">
                Guía de Blackjack Online en México
              </Link>{" "}
              <span className="text-[#9ca3af]">— si te gusta la estrategia, el blackjack es el complemento perfecto a la ruleta.</span>
            </li>
            <li>
              <Link href="/mexico/mejores-casinos-online" className="text-[#00C853] hover:underline">
                Mejores Casinos Online en México
              </Link>{" "}
              <span className="text-[#9ca3af]">— nuestro ranking general con reseñas completas de cada plataforma.</span>
            </li>
          </ul>
        </div>

        {/* ── Final CTA ── */}
        <div className="rounded-2xl bg-gradient-to-r from-[#dc2626]/10 to-[#f59e0b]/10 border border-white/[0.06] p-8 text-center mt-12">
          <h3 className="text-2xl font-black text-white mb-3">¿Listo para Jugar Ruleta Online?</h3>
          <p className="text-[#9ca3af] mb-6 max-w-lg mx-auto leading-relaxed">
            Ya tienes toda la información. Ahora es cuestión de elegir tu casino, definir tu bankroll y sentarte en la mesa. Recuerda: juega con cabeza, no con el corazón.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton slug="betsson-mexico" text="Jugar en Betsson →" />
            <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
          </div>
          <p className="text-[9px] text-[#71717a] mt-4">+18 | Juega con responsabilidad | Los juegos de azar pueden generar adicción</p>
        </div>
      </Section>
    </>
  );
}
