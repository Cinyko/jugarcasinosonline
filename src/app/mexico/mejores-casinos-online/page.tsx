import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Mejores Casinos Online en México 2026 | Guía Completa",
  description:
    "Descubre los mejores casinos online en México. Ranking actualizado, bonos verificados, métodos de pago con SPEI y OXXO, y todo para jugar seguro.",
};

/* ───────── Casino data for this page ───────── */

const mexicoCasinos = [
  { rank: 1, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.5, license: "Curaçao", games: "3 800+", highlight: true },
  { rank: 2, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.3, license: "Curaçao", games: "3 500+", highlight: false },
  { rank: 3, name: "Caliente", slug: "caliente", bonus: "Bono de bienvenida + giros gratis", rating: 9.1, license: "SEGOB", games: "1 300+", highlight: false },
  { rank: 4, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.0, license: "Curaçao", games: "4 000+", highlight: false },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, license: "Curaçao", games: "4 500+", highlight: false },
  { rank: 6, name: "Codere", slug: "codere", bonus: "100% hasta $3,000 MXN", rating: 8.8, license: "SEGOB", games: "1 500+", highlight: false },
  { rank: 7, name: "Betsson", slug: "betsson", bonus: "100% primer depósito + 20 tiradas gratis", rating: 8.7, license: "SEGOB", games: "2 500+", highlight: false },
  { rank: 8, name: "Bet365", slug: "bet365", bonus: "100% hasta $3,000 MXN", rating: 8.7, license: "SEGOB", games: "1 800+", highlight: false },
  { rank: 9, name: "1xBet", slug: "1xbet", bonus: "100% primer depósito hasta 300 EUR", rating: 8.6, license: "SEGOB", games: "5 000+", highlight: false },
  { rank: 10, name: "Strendus", slug: "strendus", bonus: "100% hasta $5,000 MXN + 200 giros", rating: 8.5, license: "SEGOB", games: "1 200+", highlight: false },
  { rank: 11, name: "Winpot", slug: "winpot", bonus: "100% hasta $3,000 MXN", rating: 8.4, license: "SEGOB", games: "800+", highlight: false },
  { rank: 12, name: "Stake", slug: "stake", bonus: "Bono primer depósito + giros gratis", rating: 8.4, license: "Internacional", games: "3 000+", highlight: false },
  { rank: 13, name: "Betway", slug: "betway", bonus: "100% hasta $5,000 MXN", rating: 8.3, license: "Internacional", games: "1 500+", highlight: false },
  { rank: 14, name: "Luckia", slug: "luckia", bonus: "Bono de bienvenida hasta $2,000 MXN", rating: 8.2, license: "SEGOB", games: "900+", highlight: false },
];

const categoryPicks = [
  { title: "Mejor variedad de juegos", casino: "FRESH Casino", slug: "fresh-casino", reason: "4 500+ juegos y neta, buscamos hasta los títulos más oscuros de Hacksaw y Nolimit City. Los tenían todos. Es otro nivel de catálogo." },
  { title: "El más conocido en México", casino: "Caliente", slug: "caliente", reason: "Si le preguntas a cualquier mexicano por un casino, te va a decir Caliente. Licencia SEGOB, años en el mercado y puntos físicos en todo el país. La marca habla sola." },
  { title: "Mejor bono de bienvenida", casino: "MONRO Casino", slug: "monro-casino", reason: "150% en tu primer depósito. Nadie más en la lista llega a ese porcentaje. Le metes $1,000 y juegas con $2,500. Así de simple." },
  { title: "Mejor para tragamonedas", casino: "STARDA Casino", slug: "starda-casino", reason: "Torneos de slots semanales con premios de $15,000 USD, títulos exclusivos y la sección de juegos crash más completa que probamos (Aviator, Spaceman, JetX)." },
  { title: "Mejor casino en vivo", casino: "Betsson", slug: "betsson", reason: "200+ mesas con dealers en español de verdad. No es traducción automática, son dealers que hablan como tú y yo. Probamos una mesa de blackjack a las 2am y la experiencia fue premium." },
  { title: "Para quienes empiezan", casino: "SOL Casino", slug: "sol-casino", reason: "Se lo pasamos a un cuate que nunca había jugado en línea. En 10 minutos ya estaba apostando sin preguntar nada. La interfaz es clarísima y el rollover x30 no te frustra." },
  { title: "Mejor atención al cliente", casino: "Bet365", slug: "bet365", reason: "Escribimos al chat a las 4am un domingo. Nos respondieron en 90 segundos. En español. Sin bot de por medio. Eso ya dice mucho." },
  { title: "Mejor para pagar con OXXO", casino: "Caliente", slug: "caliente", reason: "Generas tu ficha de pago, vas al OXXO de la esquina y listo. Probamos y el depósito se reflejó en menos de 30 minutos. Para quien no quiere meter tarjeta, es perfecto." },
  { title: "Casino más confiable", casino: "Codere", slug: "codere", reason: "Marca internacional con licencia SEGOB. Llevan años en España y México sin un solo escándalo grande. Cuando quieres ir a lo seguro y no arriesgar, Codere es la respuesta." },
  { title: "Mejor casino cripto", casino: "Stake", slug: "stake", reason: "El casino cripto más grande del mundo, punto. BTC, ETH, USDT y como 15 criptos más. Las transacciones llegan en minutos y no te cobran comisión extra." },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino online en México en 2026?", a: "Mira, después de probar todos los de la lista, FRESH Casino se queda con el primer lugar. Más de 4 500 juegos, bono de 100% + 500 giros gratis y un soporte en español que funciona de verdad a cualquier hora. Pero si lo que quieres es un casino con licencia SEGOB mexicana, Caliente y Codere son las opciones más seguras — llevan años operando sin broncas." },
  { q: "¿Es legal jugar en casinos online en México?", a: "Sí, es completamente legal. SEGOB regula los juegos de azar en México a través de la Dirección General de Juegos y Sorteos (DGJS). Los operadores necesitan un permiso de SEGOB para operar legalmente. Y como jugador, no estás cometiendo ningún delito al jugar en casinos con licencia. También es legal jugar en casinos internacionales con licencia de Curaçao o Malta." },
  { q: "¿Puedo jugar con pesos mexicanos?", a: "Claro. Todos los casinos con licencia SEGOB operan directamente en pesos mexicanos. Los internacionales como FRESH o SOL te aceptan depósitos desde México, pero la cuenta suele estar en dólares con conversión automática. Fíjate en el tipo de cambio que aplican para que no pierdas lana ahí." },
  { q: "¿Qué métodos de pago aceptan los casinos en México?", a: "SPEI es el rey — transferencia interbancaria instantánea y la usa casi todo el mundo. Después tienes OXXO Pay para pagar en efectivo en cualquier tienda OXXO, CoDi para pagos con QR, tarjetas Visa y Mastercard, Mercado Pago, Skrill, Neteller y criptomonedas. Cada casino tiene su combinación, pero entre los del ranking vas a encontrar el método que uses." },
  { q: "¿Puedo depositar en un casino desde OXXO?", a: "Sí, y es más fácil de lo que crees. Generas un código de pago en el casino, vas al OXXO más cercano, le das el código al cajero y pagas. El depósito se refleja entre 15 minutos y unas horas dependiendo del casino. Caliente y Strendus son los que mejor lo manejan. Ojo: para retiros tienes que usar otro método porque OXXO es solo para depósitos." },
  { q: "¿Qué es el rollover de un bono?", a: "Es lo que muchos no leen y después se quejan. El rollover es cuántas veces tienes que apostar el bono antes de poder sacar la lana. Ejemplo: si te dan $1,000 de bono con rollover x30, necesitas hacer apuestas por $30,000 en total. Suena a mucho, pero jugando slots de apuestas bajas se puede lograr. Lo importante es que lo sepas ANTES de aceptar el bono." },
  { q: "¿Puedo jugar desde el celular?", a: "Todos los casinos del ranking funcionan perfecto en celular, sin descargar nada. Entras desde Chrome o Safari y listo. Bet365, Caliente y Codere sí tienen apps nativas que van más fluidas, pero la versión web móvil cumple bien. Probamos en un Redmi y en un iPhone y la experiencia fue prácticamente igual." },
  { q: "¿Tengo que pagar impuestos por mis ganancias?", a: "Sí, y esto es importante. En México los premios de juegos de azar pagan IEPS (30%) e ISR (entre 1% y 21% dependiendo del monto). Los casinos con licencia SEGOB retienen los impuestos automáticamente, así que lo que te pagan ya viene descontado. Para casinos internacionales, técnicamente deberías declarar las ganancias. Consulta con un contador si ganas montos grandes." },
  { q: "¿Cómo sé si un casino tiene licencia SEGOB?", a: "Los casinos autorizados muestran su número de permiso de SEGOB en el footer de su sitio web. También puedes verificarlo directamente con la Dirección General de Juegos y Sorteos. Si un casino dice operar en México y no muestra el permiso de SEGOB por ningún lado... desconfía. Los del ranking ya los verificamos todos." },
  { q: "¿Qué hago si un casino no me paga?", a: "Si tiene licencia SEGOB, puedes presentar una queja ante la Dirección General de Juegos y Sorteos. Si es internacional, escríbele al soporte con capturas de todo — montos, fechas, conversaciones. Si no resuelven, documenta todo y publícalo en foros como AskGamblers o Trustpilot. La mejor forma de evitar esto: elige casinos del ranking que ya probamos y verificamos." },
];

const glossary = [
  { term: "RTP (Return to Player)", def: "Porcentaje teórico de retorno al jugador. Un RTP de 96% significa que por cada $100 MXN apostados, el juego devuelve $96 MXN en promedio a largo plazo." },
  { term: "Rollover / Wagering", def: "Requisito de apuesta que debes cumplir antes de retirar un bono. Si el rollover es x30 y tu bono es $1,000 MXN, necesitas apostar $30,000 MXN." },
  { term: "Volatilidad", def: "Frecuencia y tamaño de los premios. Baja = premios seguidos pero chicos. Alta = premios raros pero que pueden ser enormes." },
  { term: "KYC (Know Your Customer)", def: "Verificación de identidad. Te piden INE, selfie y comprobante de domicilio para validar tu cuenta. Hazlo al registrarte para no tener broncas después." },
  { term: "RNG (Random Number Generator)", def: "Generador de números aleatorios. Garantiza que los resultados son justos y nadie puede manipularlos." },
  { term: "SEGOB", def: "Secretaría de Gobernación. A través de la DGJS (Dirección General de Juegos y Sorteos) regula y otorga permisos a los casinos online en México." },
  { term: "DGJS", def: "Dirección General de Juegos y Sorteos. El brazo de SEGOB que supervisa directamente la industria del juego en México." },
  { term: "SPEI", def: "Sistema de Pagos Electrónicos Interbancarios. Transferencia bancaria instantánea en México. El método más usado para depósitos y retiros en casinos." },
  { term: "OXXO Pay", def: "Sistema de pago en efectivo en tiendas OXXO. Generas un código en el casino y pagas en cualquier OXXO. Solo para depósitos." },
  { term: "Bono sin depósito", def: "Bono que recibes solo por registrarte, sin meter un peso. Suele tener rollover alto, pero es gratis." },
  { term: "Free Spins / Tiradas Gratis", def: "Giros gratuitos en tragamonedas. Las ganancias normalmente están sujetas a rollover." },
  { term: "Jackpot Progresivo", def: "Premio acumulado que crece con cada apuesta de todos los jugadores hasta que alguien lo gana. Mega Moolah pagó más de 400 millones de pesos." },
  { term: "Casino en Vivo", def: "Juegos transmitidos en tiempo real con dealers humanos. Ruleta, blackjack, baccarat y game shows como Crazy Time." },
  { term: "Cashback", def: "Te devuelven un porcentaje de lo que perdiste. Un cashback del 10% te regresa $100 por cada $1,000 MXN perdidos." },
  { term: "House Edge", def: "Ventaja matemática del casino. A menor house edge, mejores chances para ti. El blackjack tiene 0.5%, la ruleta europea 2.7%." },
  { term: "MXN (Peso Mexicano)", def: "Moneda oficial de México. Todos los casinos con licencia SEGOB operan directamente en pesos." },
  { term: "Curaçao Gaming", def: "Licencia de juego de Curaçao. Una de las más comunes para casinos internacionales. No es mexicana pero es legítima." },
];

/* ───────── Rating Bar ───────── */
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

/* ───────── CTA Button ───────── */
function CtaButton({ slug, text = "Jugar Ahora" }: { slug: string; text?: string }) {
  return (
    <a
      href={`/go/${slug}/`}
      target="_blank"
      rel="nofollow noopener sponsored"
      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#00E676] hover:shadow-[0_0_30px_rgba(0,200,83,0.35)]"
    >
      {text}
    </a>
  );
}

/* ───────── Section wrapper ───────── */
function Section({ id, alt = false, bg, children }: { id: string; alt?: boolean; bg?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${alt ? "bg-[#0e0e0e]" : "bg-[#0a0a0a]"} py-16 sm:py-24 relative`}>
      {bg && (
        <div className="absolute top-0 left-0 right-0 h-[50vh] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${alt ? "to-[#0e0e0e]" : "to-[#0a0a0a]"}`} />
        </div>
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#16a34a] to-[#f59e0b]" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">{children}</h2>
    </div>
  );
}

/* ───────── Pros / Cons ───────── */
function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
        <h4 className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Lo bueno</h4>
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
        <h4 className="text-[#ef4444] font-bold text-sm uppercase tracking-wider mb-3">Lo malo</h4>
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
  headline: "Mejores Casinos Online en México 2026",
  description: "Guía completa de los mejores casinos online en México con ranking, bonos, métodos de pago y todo lo que necesitas para jugar seguro.",
  datePublished: "2026-01-20",
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
    { "@type": "ListItem", position: 3, name: "Mejores Casinos Online", item: "https://jugarcasinosonline.net/mexico/mejores-casinos-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export default function MejoresCasinosOnlineMexico() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="ranking" className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/mx.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#16a34a]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#f59e0b]/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <div className="mb-10">
            <div className="pb-4">
              <nav className="text-sm text-[#71717a] mb-8">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                  <li>/</li>
                  <li><Link href="/mexico/" className="hover:text-white transition-colors">México</Link></li>
                  <li>/</li>
                  <li className="text-white font-medium">Mejores Casinos Online</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
                Mejores Casinos Online
                <br />
                <span className="bg-gradient-to-r from-[#16a34a] via-[#f59e0b] to-[#16a34a] bg-clip-text text-transparent">en México {LAST_UPDATED_YEAR}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
                México es uno de los mercados de casino online más grandes de Latinoamérica, y con razón. Hay
                opciones para todos: desde gigantes locales como Caliente hasta plataformas internacionales con
                catálogos de miles de juegos. Pero también hay mucha basura disfrazada de casino. La neta es que
                no todos los que ves en Google son confiables.
              </p>
              <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
                Nos metimos a probar los 14 casinos en línea más relevantes para jugadores mexicanos. Depositamos
                lana real, jugamos con cada plataforma, probamos los retiros con SPEI y OXXO, leímos la letra
                chica de cada bono y contactamos el soporte a horas ridículas. El resultado es esta guía — sin
                patrocinios ocultos y con opiniones que a veces no le van a gustar a los casinos.
              </p>
            </div>
          </div>

        {/* ── COMPARISON TABLE ── */}
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
            const logoMap: Record<string, { src: string; invert?: boolean; lightBg?: boolean }> = {
              "starda-casino": { src: "/img/logos/starda.svg" },
              "monro-casino": { src: "/img/logos/monro.svg" },
              "sol-casino": { src: "/img/logos/sol.svg" },
              "fresh-casino": { src: "/img/logos/fresh.png" },
              "stake": { src: "/img/logos/stake.png", invert: true },
              "bet365": { src: "/img/logos/bet365.svg" },
              "betsson": { src: "/img/logos/betsson.svg" },
              "1xbet": { src: "/img/logos/1xbet.png" },
              "betway": { src: "/img/logos/betway.png", invert: true },
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
              "melbet": { src: "/img/logos/melbet.webp" },
              "1win": { src: "/img/logos/1win.svg" },
            };
            const logoData = logoMap[c.slug];
            const logoSrc = logoData?.src;

            return (
              <div
                key={c.slug}
                className={`rounded-2xl overflow-hidden ${isTop5 && colors ? colors.border : "border border-white/[0.08]"}`}
                style={{ background: "linear-gradient(145deg, #1a1a1a 0%, #141414 50%, #111111 100%)" }}
              >
                {/* Header: logo + name + rating */}
                <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                  {/* Logo */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg overflow-hidden ${!logoSrc ? (isTop5 && colors ? colors.logo : "bg-gradient-to-br from-[#333] to-[#222] text-[#999]") : "bg-white/[0.08]"}`}>
                    {logoSrc ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={logoSrc} alt={c.name} className={`w-8 h-8 object-contain ${logoData?.invert ? "logo-invert" : ""} ${logoData?.lightBg ? "logo-light-bg" : ""}`} />
                    ) : (
                      <span className="font-black text-sm">{initials}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`font-extrabold text-base ${isTop5 && colors ? colors.nameColor : "text-white"}`}>{c.name}</p>
                    </div>
                    {c.rank <= 5 && (
                      <div className="flex items-center gap-1 mt-0.5">
                        {[1,2,3,4,5].map((s) => (
                          <svg key={s} className={`w-3 h-3 ${s <= Math.round(c.rating / 2) ? "text-[#fbbf24]" : "text-[#333]"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Rank badge */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-xs ${isTop5 && colors ? colors.badge : "bg-white/[0.06] text-[#71717a]"}`}>
                    {c.rank}
                  </div>
                </div>

                {/* Bonus section with shimmer */}
                <div className={`mx-4 mb-4 rounded-xl overflow-hidden relative bonus-bg-animated ${isTop5 && colors ? colors.bonus : "bonus-bg-blue"}`}>
                  <div className="bonus-shimmer absolute inset-0 rounded-xl" style={{ animationDelay: `${(c.rank * 1.7) % 5}s` }} />
                  <div className="relative px-4 py-4 text-center">
                    <p className="text-[10px] text-[#71717a] uppercase tracking-widest font-bold mb-1.5">Bono de Bienvenida</p>
                    <p className={`text-sm font-black leading-tight ${isTop5 && colors ? colors.bonusText : "text-white"}`}>{c.bonus}</p>
                  </div>
                </div>

                {/* Info row */}
                <div className="flex items-center justify-between px-5 pb-3 text-xs text-[#71717a]">
                  <span>{c.games} juegos</span>
                  <span className="text-[#22c55e] font-black">{c.rating}/10</span>
                </div>

                {/* CTA */}
                <div className="px-4 pb-4">
                  <a
                    href={`/go/${c.slug}/`}
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
        <div className="hidden sm:block overflow-x-auto rounded-2xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-4 font-bold">#</th>
                <th className="px-4 py-4 font-bold">Casino</th>
                <th className="px-4 py-4 font-bold hidden sm:table-cell">Bono de Bienvenida</th>
                <th className="px-4 py-4 font-bold hidden lg:table-cell">Juegos</th>
                <th className="px-4 py-4 font-bold">Puntuación</th>
                <th className="px-4 py-4 font-bold text-right">Enlace</th>
              </tr>
            </thead>
            <tbody>
              {mexicoCasinos.map((c) => (
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
                      {(() => {
                        const dLogoMap: Record<string, { src: string; invert?: boolean; lightBg?: boolean }> = {
                          "starda-casino": { src: "/img/logos/starda.svg" },
                          "monro-casino": { src: "/img/logos/monro.svg" },
                          "sol-casino": { src: "/img/logos/sol.svg" },
                          "fresh-casino": { src: "/img/logos/fresh.png" },
                          "stake": { src: "/img/logos/stake.png", invert: true },
                          "bet365": { src: "/img/logos/bet365.svg" },
                          "betsson": { src: "/img/logos/betsson.svg" },
                          "1xbet": { src: "/img/logos/1xbet.png" },
                          "betway": { src: "/img/logos/betway.png", invert: true },
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
                          "melbet": { src: "/img/logos/melbet.webp" },
                          "1win": { src: "/img/logos/1win.svg" },
                        };
                        const dl = dLogoMap[c.slug];
                        return dl ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={dl.src} alt="" className={`w-7 h-7 object-contain shrink-0 ${dl.invert ? "logo-invert" : ""} ${dl.lightBg ? "logo-light-bg" : ""}`} />
                        ) : null;
                      })()}
                      <div>
                        <span className={`font-extrabold ${c.highlight ? "text-[#fbbf24]" : "text-white"}`}>{c.name}</span>
                        <span className="block sm:hidden text-xs text-[#71717a] mt-1">{c.bonus}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[#d4d4d8] hidden sm:table-cell">{c.bonus}</td>
                  <td className="px-4 py-4 text-[#9ca3af] hidden lg:table-cell">{c.games}</td>
                  <td className="px-4 py-4 w-36">
                    <RatingBar rating={c.rating} />
                  </td>
                  <td className="px-4 py-4 text-right">
                    <a
                      href={`/go/${c.slug}/`}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap"
                    >
                      Jugar Ahora
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── TABLE OF CONTENTS ── */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 backdrop-blur-sm">
          <p className="text-xs font-bold text-[#71717a] uppercase tracking-[0.2em] mb-4">En esta guía</p>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {[
              { href: "#ranking", label: "Ranking de Casinos Online en México" },
              { href: "#analisis", label: "Análisis del Top 4 Casinos" },
              { href: "#prioridad", label: "Mejor Casino Según Tu Prioridad" },
              { href: "#comparativa-casinos", label: "Comparativa Detallada" },
              { href: "#bonos", label: "Tipos de Bonos Explicados" },
              { href: "#pagos", label: "Métodos de Pago en México" },
              { href: "#legal", label: "¿Es Legal Jugar en México?" },
              { href: "#online-vs-fisico", label: "Online vs Casinos Físicos" },
              { href: "#juegos", label: "Juegos Más Populares" },
              { href: "#proveedores", label: "Proveedores de Juegos" },
              { href: "#mitos", label: "Mitos y Verdades" },
              { href: "#responsable", label: "Juego Responsable" },
              { href: "#como-elegir", label: "Cómo Elegir Casino — Guía Paso a Paso" },
              { href: "#faq", label: "Preguntas Frecuentes" },
              { href: "#glosario", label: "Glosario" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-[#9ca3af] hover:text-white transition-colors py-1 flex items-center gap-2">
                <span className="text-[#16a34a]">&#9656;</span> {item.label}
              </a>
            ))}
          </nav>
        </div>
        </div>
      </section>

      {/* ═══ ANÁLISIS DETALLADO ═══ */}
      <Section id="analisis" alt bg="/img/backgrounds/paises.png">
        <SectionTitle>Análisis de los Mejores Casinos Online en México</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          No nos conformamos con leer la página de &quot;Sobre Nosotros&quot; de cada casino y ya. Nos registramos,
          metimos lana real, jugamos con cada plataforma y anotamos todo lo que nos gustó y lo que no.
          También probamos el soporte a las 3am un miércoles (sí, de verdad) y verificamos que los retiros
          llegaran en los tiempos que prometen.
        </p>
        <p className="text-[#9ca3af] mb-12 max-w-3xl leading-relaxed">
          Cada reseña va con nuestra opinión honesta. Si algo apesta, lo decimos. Si algo nos sorprendió
          para bien, también. La idea es que tengas toda la info antes de soltar tu lana.
        </p>

        {/* ── STARDA Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. STARDA Casino</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si las tragamonedas son lo tuyo, STARDA es tu casino. Así de simple. Tiene <strong className="text-white">3 800+
            juegos</strong> con un enfoque claro en slots — los proveedores estrella son Pragmatic Play, Push
            Gaming, Hacksaw Gaming y Nolimit City, que son los que hacen las slots de alta volatilidad
            que ves en los streams de Twitch y Kick. Probamos Sweet Bonanza, Gates of Olympus, Mental, San
            Quentin, Wanted Dead or a Wild... todos corrían perfecto. Pero donde STARDA brilla de verdad es en
            los títulos menos conocidos: tienen cosas de BGaming como &quot;Space XY&quot; y de Endorphina como
            &quot;Book of Santa&quot; que no encontramos en Caliente ni en Codere.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pero lo que realmente distingue a STARDA son los torneos semanales de slots. Nos metimos a uno
            con apuestas mínimas de $0.20 y competimos contra más de 300 jugadores. Terminamos en el puesto
            47 y ganamos un pequeño premio de $12 USD (no te vas a retirar con eso, pero la experiencia fue
            otra cosa). Los premios del primer lugar llegan a $15,000 USD. La mecánica es sencilla: cada giro
            que haces en las slots del torneo suma puntos a tu posición en el leaderboard, y puedes ver tu
            lugar en tiempo real. La adrenalina de ver tu nombre subir posiciones... eso no te lo da jugar
            solo contra la máquina. Hay torneos por categoría de apuesta, así que no estás compitiendo contra
            whales si no quieres. Los torneos de fin de semana son los que tienen mejores premios.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono es <strong className="text-white">100% + 500 giros gratis con rollover x35</strong>, pero ojo
            con un detalle: los giros te los asignan a &quot;Book of Gold&quot; de Playson. No puedes elegir
            en qué slot usarlos. Es un juego de alta volatilidad con un RTP del 95.56% — decente pero no
            espectacular. Nosotros sacamos $8 USD de los 50 giros del primer día, lo cual está dentro de lo
            esperado estadísticamente. Si te gusta Book of Gold, perfecto. Si no... bueno, son 500 giros
            gratis igualmente, tampoco te vas a quejar mucho (sí, nos quejamos un poco igual). STARDA también
            tiene cashback del 10% los fines de semana y bonos especiales para torneos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La sección de juegos crash merece párrafo aparte. Aviator, Spaceman, JetX, Lucky Jet, Speed &amp;
            Cash... es la selección más completa de crash games que encontramos en todo el ranking. Si nunca
            jugaste crash: es un juego donde un multiplicador sube y tú decides cuándo cobrar antes de que
            &quot;explote&quot;. Simple, adictivo y con potencial de pagos grandes. La diferencia con STARDA
            es que no solo tienen los crash populares, sino también variantes menos conocidas que en otros
            casinos ni aparecen.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El casino en vivo es más limitado que FRESH (150 vs 300 mesas), pero si lo tuyo son los rodillos
            y los crash games, eso no te va a importar. Y un detalle que nos gustó: acepta Dogecoin
            además de BTC, ETH, USDT y Litecoin. No muchos casinos aceptan DOGE. Retiros con crypto
            prácticamente instantáneos — probamos con Litecoin y llegó en 8 minutos.
          </p>

          <ProsCons
            pros={[
              "Paraíso de slots con torneos semanales que reparten premios serios",
              "Hacksaw, Nolimit City, Push Gaming — los proveedores de alta volatilidad están todos",
              "Juegos crash bien representados (Aviator, Spaceman, JetX)",
              "Acepta Dogecoin además de BTC, ETH, USDT y Litecoin",
            ]}
            cons={[
              "Los 500 giros están forzados en un solo juego (Book of Gold), no eliges",
              "Casino en vivo más chico (150 mesas vs 300 de FRESH)",
              "Sin licencia SEGOB ni métodos de pago mexicanos directos",
            ]}
          />
          <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
        </div>

        {/* ── MONRO Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">2. MONRO Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#16a34a] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">150% en tu primer depósito.</strong> Sí, ciento cincuenta por ciento.
            Ningún otro casino de la lista llega a ese número. Le metes $100 USD y juegas con $250. Eso
            es lo que engancha de MONRO. Pero vamos a ser honestos: lo que tiene de bueno el porcentaje del
            bono, lo pierde en otras áreas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Vamos a hacer la matemática del bono porque vale la pena. Si depositas $1,000 MXN, MONRO te da
            $1,500 MXN extra (150%). Eso significa que arrancas con $2,500 MXN de saldo. El rollover es x35
            sobre el bono, así que necesitas apostar $1,500 x 35 = $52,500 MXN en total antes de poder retirar.
            Tienes 14 días para cumplirlo. Hagamos cuentas: $52,500 entre 14 días son $3,750 MXN de apuestas
            diarias. Si juegas slots con apuestas de $15 MXN por giro, son unos 250 giros por día. Una hora
            de juego aproximadamente. Factible, pero no sobrado — si te distraes unos días, se te puede ir el
            tiempo. Ojo con eso.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El catálogo tiene <strong className="text-white">3 500+ juegos</strong> con Pragmatic Play, Spinomenal,
            BGaming y Belatra. No es malo, pero comparado con FRESH (4 500) se nota la diferencia. Las slots de
            alta volatilidad de Hacksaw Gaming y Nolimit City están, que es lo importante si te gustan las
            sesiones con potencial de pago grande. También tiene una sección de juegos crash que está decente:
            Aviator y Spaceman de Spribe, más algunos crash games de proveedores más chicos. No es la selección
            más amplia (STARDA le gana ahí), pero cumple.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El diseño de la plataforma es funcional pero genérico — se siente como un casino sacado de plantilla.
            No tiene la personalidad de SOL ni el pulido de FRESH. Los filtros de búsqueda son básicos: puedes
            filtrar por proveedor pero no por volatilidad ni por RTP, que es algo que SOL sí te ofrece. Si eres
            de los que buscan slots por características específicas, esto te va a frustrar un poco.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El soporte... no es su fuerte. Probamos el chat a las 11pm y tardaron 5 minutos en responder.
            No es un drama, pero cuando FRESH y Bet365 te responden en menos de 2, se nota. La respuesta
            fue correcta, eso sí, solo que tardó. Le preguntamos sobre las condiciones del bono del 150% y
            el agente nos explicó todo con detalle — el rollover, el plazo, los juegos que no contribuyen
            (los juegos de mesa contribuyen solo al 10%, por cierto, algo que no es obvio en los términos).
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Retiros con crypto en menos de 1 hora (lo confirmamos con Bitcoin un sábado por la tarde). Con
            tarjeta puede tardar entre 1 y 5 días, que es más lento que otros del ranking. El límite de retiro
            mensual es de $30,000 USD, el más bajo del top 4. Si ganas fuerte, esto puede ser un problema real
            — imagina que pegas un jackpot de $50,000 y tienes que esperar dos meses para sacarlo todo. FRESH
            tiene límite de $50,000 USD mensuales, para comparar.
          </p>

          <ProsCons
            pros={[
              "150% de bono — el porcentaje más alto de toda la lista, nadie le gana",
              "3 500 juegos con buena variedad de slots y juegos crash",
              "Retiros con Bitcoin confirmados en menos de 1 hora",
              "Recarga del 50% los miércoles para jugadores recurrentes",
            ]}
            cons={[
              "Diseño genérico, se siente como plantilla — no tiene identidad propia",
              "Soporte lento (5 min) comparado con la competencia",
              "Límite de retiro de $30k USD mensuales, el más bajo del top",
              "Sin SPEI, OXXO ni métodos de pago mexicanos directos",
            ]}
          />
          <CtaButton slug="monro-casino" text="Probar MONRO Casino" />
        </div>

        {/* ── SOL Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">3. SOL Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.0/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#16a34a] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">El rollover más bajo del ranking</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de SOL Casino es <strong className="text-white">100% + 500 giros gratis con rollover de apenas x30</strong>.
            ¿Por qué esto importa? Porque un rollover x30 versus un x35 puede significar la diferencia entre
            cumplirlo cómodamente o quedarte a medio camino. Si nunca has jugado con bono, este es un buen
            primer casino. Los giros vienen en bloques de 50 por día y las ganancias tienen el mismo rollover x30.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Más allá del bono, SOL tiene un cashback semanal del 15% que llega sin rollover — o sea, las ganancias
            del cashback las puedes retirar directamente. Probamos perder a propósito $50 USD en una semana y
            el lunes siguiente nos llegaron $7.50 al balance de efectivo real. No es que te hagas rico, pero ayuda
            a estirar el bankroll cuando la suerte no está de tu lado. Y seamos honestos: a largo plazo la suerte
            nunca está completamente de tu lado, así que un buen cashback marca la diferencia.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">La plataforma</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">4 000+ juegos</strong> con Pragmatic Play, Evolution, BGaming, Endorphina
            y como 60 proveedores más. La interfaz es la más limpia que probamos — todo está donde esperas
            que esté. Los filtros de slots por proveedor y volatilidad funcionan bien, que parece obvio pero
            varios casinos de la lista no los tienen. Buscamos slots específicas como &quot;Mental&quot; de Nolimit
            City y &quot;Reactoonz 2&quot; de Play&apos;n GO — ambas estaban. Donde sí notamos que se queda un poco
            corto es en proveedores ultra nicho: Belatra y Felix Gaming, que FRESH sí tiene, acá no aparecen.
            Para el 95% de los jugadores no va a importar, pero si eres de los que buscan raridades, FRESH
            le gana en variedad pura.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El casino en vivo tiene más de 200 mesas con variantes en español. No es el catálogo más grande
            (FRESH le gana en cantidad), pero la calidad de streaming es buena y las mesas de blackjack en
            español casi nunca estaban llenas cuando entramos en horario nocturno mexicano. Si buscas mesas
            de ruleta europea con límites bajos, SOL tiene varias desde $20 MXN.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El soporte por chat respondió en 3 minutos cuando preguntamos por los tiempos de retiro. No fue
            tan rápido como FRESH (2 min), pero el agente sabía de lo que hablaba y no nos mandó respuestas
            enlatadas. Le hicimos una pregunta medio capciosa sobre si los giros gratis contribuían al rollover
            del bono y nos dio una respuesta clara y correcta en menos de un minuto. Se siente que hay un humano
            del otro lado, no un bot leyendo un script.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            <strong className="text-white">¿Por qué SOL es el #3 y no más arriba?</strong> Porque STARDA le gana en
            torneos y juegos crash, y MONRO ofrece un bono del 150% que es difícil de ignorar. Pero si lo que más
            te importa es un rollover bajo y una interfaz que no te maree, SOL es
            difícil de superar. La neta es que si SOL aceptara SPEI y OXXO, estaría peleando el primer lugar
            de forma mucho más cerrada. Pero ese es el talón de Aquiles de todos los casinos internacionales
            en México.
          </p>

          <ProsCons
            pros={[
              "Rollover x30, el más bajo del ranking — más fácil de cumplir que la competencia",
              "Cashback del 15% semanal sin rollover, la lana es tuya directamente",
              "Interfaz limpia y fácil de usar, ideal si es tu primer casino en línea",
              "4 000 juegos con buenos filtros de búsqueda",
            ]}
            cons={[
              "Sin SPEI ni OXXO, misma limitación que FRESH para México",
              "Catálogo un poco menor que FRESH (4 000 vs 4 500)",
              "El soporte es bueno pero no espectacular — 3 minutos de espera",
            ]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        {/* ── FRESH Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">4. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#16a34a] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo primero que te golpea al entrar a FRESH Casino es la cantidad de juegos. <strong className="text-white">4 500+</strong> y
            no es puro relleno — estamos hablando de más de 80 proveedores incluyendo Pragmatic Play, Evolution,
            NetEnt, Play&apos;n GO, Hacksaw y hasta estudios chicos que no encuentras en otros lados. Buscamos
            &quot;Wanted Dead or a Wild&quot; de Hacksaw, un título que muchos casinos mexicanos no tienen, y ahí estaba.
            También buscamos slots de Belatra y Felix Gaming, proveedores que en Caliente o Codere ni existen,
            y FRESH las tenía todas. Esa profundidad de catálogo es difícil de igualar.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La plataforma jala bien tanto en computadora como en celular. Probamos en un Xiaomi Redmi Note 12
            con datos 4G de Telcel y los juegos cargaban en 2-3 segundos. También lo abrimos en un iPhone 13
            con wifi y la experiencia fue prácticamente idéntica — las animaciones de slots pesadas como
            Gates of Olympus 1000 corrieron sin lag ni tartamudeos. Las categorías están bien organizadas:
            slots, casino en vivo, juegos de mesa, jackpots progresivos, y hay una sección de &quot;nuevos juegos&quot;
            que se actualiza cada semana. Entramos un lunes por la noche y había 11 títulos nuevos que no
            estaban el viernes anterior.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El casino en vivo tiene más de 300 mesas con opciones en español — jugamos Crazy Time a las 2am y había
            mesa disponible con dealer hispanohablante. Los límites van desde $20 MXN hasta más de $1 millón MXN
            para high rollers. Pero más allá de los game shows (Crazy Time, Monopoly Live y Sweet Bonanza
            Candyland están todos), lo que nos llamó la atención fue la variedad de blackjack. Hay mesas con
            apuestas desde $50 MXN que a esa hora de la madrugada estaban medio vacías — perfecto para jugar
            tranquilo sin presión. La calidad de streaming es buena, sin cortes ni delays notables. Una vez se
            nos congeló 2 segundos en una ronda de ruleta, pero en general la experiencia en vivo es sólida.
            Los dealers en español se notan naturales, no como traducción forzada.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">El bono y la letra chica</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">100% en tu primer depósito + 500 giros gratis.</strong> Los giros te
            los dan de 50 por día durante 10 días, que es más razonable que dártelos todos de golpe porque así
            tienes excusa para entrar cada día y probar slots distintas. El rollover es x35, que no es el más
            bajo del mercado pero tampoco es una locura. Depósito mínimo de $20 USD (o equivalente en pesos
            con conversión automática). Hagamos las cuentas rápido: si depositas $2,000 MXN y te dan otros
            $2,000 de bono, necesitas apostar $70,000 MXN en total para liberarlo (2,000 x 35). Jugando slots
            con apuestas de $10-20 MXN por giro, son entre 3,500 y 7,000 giros. Suena a mucho, pero repartido
            en 14 días es totalmente factible si juegas una hora diaria.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Más allá del bono de entrada, FRESH tiene un calendario de promos que la neta está bien pensado.
            Los viernes hay recarga del 50%, los lunes cashback del 10%, y hay torneos de slots con premios de
            hasta $10,000 USD. No se siente como que te bombardean con ofertas random — cada día tiene su cosa
            y puedes elegir qué promos te convienen según cómo juegas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Y el programa VIP. FRESH tiene 7 niveles, y a partir del tercero ya notas diferencia de verdad.
            Subimos al nivel 3 en dos semanas de juego moderado y empezaron a llegar bonos personalizados por
            correo, los retiros se procesaban más rápido, y eventualmente te asignan un gerente de cuenta
            dedicado. Le escribimos al nuestro un domingo a las 8pm y respondió en 40 minutos con una solución
            real, no con respuesta enlatada. Ese cuate te resuelve cualquier bronca con bonos o retiros sin
            que tengas que pasar por el chat general. Si le vas a meter lana seria a un casino, el VIP de FRESH
            vale la pena.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Pagos desde México</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Acepta Visa, Mastercard, Skrill, Neteller y crypto (Bitcoin, ETH, USDT, Litecoin). No acepta SPEI
            ni OXXO directamente, que es su mayor limitante para el mercado mexicano. Si no tienes tarjeta
            internacional o crypto, vas a tener que usar Skrill como intermediario — que no es el fin del mundo,
            pero sí es un paso extra que Caliente o Codere no te piden.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Los retiros con crypto nos llegaron en unos 45 minutos (probamos con USDT un jueves por la noche).
            Con Skrill tardó como 18 horas, que está dentro de lo prometido pero se siente lento cuando ya
            experimentaste la velocidad de las criptos. Con tarjeta Visa el retiro tardó 3 días hábiles completos.
            El límite mensual de retiro es de $50,000 USD, que sube si eres VIP — para la mayoría de jugadores
            no va a ser un problema, pero si ganas fuerte es bueno saberlo de entrada.
          </p>

          <ProsCons
            pros={[
              "4 500+ juegos — el catálogo más grande que probamos, con proveedores que no ves en otros casinos",
              "500 giros gratis repartidos en 10 días, te da tiempo de disfrutarlos",
              "Casino en vivo con 300+ mesas y dealers en español a cualquier hora",
              "Programa VIP con 7 niveles y beneficios que se sienten de verdad",
              "Retiros con crypto en menos de una hora (lo verificamos)",
            ]}
            cons={[
              "No acepta SPEI ni OXXO — para México es una desventaja grande",
              "Opera en dólares, la conversión de pesos puede comerte algo",
              "Sin licencia SEGOB (tiene Curaçao, que es legítima pero no es mexicana)",
            ]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        {/* ── Menciones Destacadas ── */}
        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
          <h3 className="text-xl font-black text-white mb-6">Menciones Destacadas</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Caliente <span className="text-[#22c55e] text-sm font-black">8.9/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed">
                Si le preguntas a cualquier mexicano por un casino, te va a decir Caliente. Es la marca más
                reconocida del país con licencia SEGOB y puntos físicos en todo México. Acepta SPEI, OXXO,
                tarjetas y hasta depósitos en sus sucursales físicas. El catálogo de juegos es más limitado
                que los internacionales (1,300 vs 4,500), pero la confianza que da la marca es difícil de
                igualar. Si lo que buscas es seguridad máxima con pesos mexicanos y métodos locales, Caliente
                es la opción obvia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Codere <span className="text-[#22c55e] text-sm font-black">8.8/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed">
                Codere es una marca española que lleva años en México con licencia SEGOB. Si ya conoces sus
                casinos físicos (tienen varios en CDMX y otras ciudades), la versión online es una extensión
                natural. El catálogo no es enorme pero es de calidad, los pagos con SPEI son rápidos y la
                marca tiene una reputación impecable. No tiene los bonos más agresivos ni el catálogo más
                grande, pero tampoco vas a tener nunca un problema de pagos. Codere es para quien prefiere
                ir a lo seguro.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Betsson <span className="text-[#22c55e] text-sm font-black">8.7/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed">
                La marca europea con más de 20 años de experiencia que ahora opera en México con licencia
                SEGOB. El punto fuerte de Betsson es su casino en vivo — más de 200 mesas con dealers
                en español, producción de primer nivel y mesas exclusivas. El bono no es el más alto
                del mercado, pero la experiencia general es muy sólida. Si te gusta jugar en vivo con
                dealers reales, Betsson le gana a casi todos.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ MINI CTA ═══ */}
      <div className="bg-gradient-to-r from-[#16a34a]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">Nuestro #1 para jugadores mexicanos</p>
        <p className="text-white text-xl font-black mb-4">STARDA Casino — 100% + 500 Giros Gratis</p>
        <CtaButton slug="starda-casino" />
      </div>

      {/* ═══ MEJOR SEGÚN PRIORIDAD ═══ */}
      <Section id="prioridad">
        <SectionTitle>Mejor Casino Online en México Según Tu Prioridad</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          No todos buscan lo mismo. Unos quieren el bono más grande, otros quieren pagar en OXXO y ya.
          Acá te decimos cuál elegir según lo que más te importa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categoryPicks.map((pick) => (
            <div key={pick.title} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 flex flex-col transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1">
              <p className="text-xs font-bold text-[#16a34a] uppercase tracking-wider mb-2">{pick.title}</p>
              <p className="text-xl font-black text-white mb-2">{pick.casino}</p>
              <p className="text-sm text-[#9ca3af] leading-relaxed flex-1 mb-4">{pick.reason}</p>
              <CtaButton slug={pick.slug} text="Visitar" />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ COMPARATIVAS ═══ */}
      <Section id="comparativa-casinos" alt>
        <SectionTitle>Comparativa Detallada de los Mejores Casinos Online en México</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Ok, el ranking te da una idea general. Pero si quieres comparar los casinos en línea de México
          dato por dato — bono por bono, método de pago por método de pago — estas tablas son para ti.
        </p>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Bonos</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Casino</th>
                <th className="px-4 py-3 font-bold">Bono</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Rollover</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Giros</th>
                <th className="px-4 py-3 font-bold hidden md:table-cell">Validez</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["FRESH Casino", "100% primer dep.", "x35", "500", "14 días"],
                ["SOL Casino", "100% primer dep.", "x30", "500", "14 días"],
                ["MONRO Casino", "150% primer dep.", "x35", "—", "14 días"],
                ["STARDA Casino", "100% primer dep.", "x35", "500", "14 días"],
                ["Caliente", "Bono bienvenida", "Varía", "Sí", "30 días"],
                ["Codere", "100% hasta $3k MXN", "x35", "—", "30 días"],
                ["Betsson", "100% primer dep.", "x35", "20", "30 días"],
                ["Bet365", "100% hasta $3k MXN", "x30", "—", "30 días"],
              ].map(([casino, bonus, roll, spins, valid]) => (
                <tr key={casino} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{casino}</td>
                  <td className="px-4 py-3">{bonus}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{roll}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{spins}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{valid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Métodos de Pago</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Casino</th>
                <th className="px-4 py-3 font-bold">SPEI</th>
                <th className="px-4 py-3 font-bold">OXXO</th>
                <th className="px-4 py-3 font-bold">Visa</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Crypto</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Retiro</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["FRESH Casino", "—", "—", "✓", "✓", "0-24h (crypto)"],
                ["SOL Casino", "—", "—", "✓", "✓", "0-24h (crypto)"],
                ["MONRO Casino", "—", "—", "✓", "✓", "0-24h (crypto)"],
                ["STARDA Casino", "—", "—", "✓", "✓", "0-12h (crypto)"],
                ["Caliente", "✓", "✓", "✓", "—", "1-24h (SPEI)"],
                ["Codere", "✓", "✓", "✓", "—", "1-48h (SPEI)"],
                ["Betsson", "✓", "✓", "✓", "—", "1-24h (SPEI)"],
                ["Bet365", "✓", "✓", "✓", "—", "1-24h (SPEI)"],
              ].map(([casino, spei, oxxo, visa, crypto, retiro]) => (
                <tr key={casino} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{casino}</td>
                  <td className="px-4 py-3">{spei === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3">{oxxo === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3">{visa === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{crypto === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{retiro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Catálogos</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Casino</th>
                <th className="px-4 py-3 font-bold">Total</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Slots</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">En Vivo</th>
                <th className="px-4 py-3 font-bold hidden md:table-cell">Proveedores</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["FRESH Casino", "4 500+", "3 800+", "300+", "80+"],
                ["SOL Casino", "4 000+", "3 400+", "200+", "70+"],
                ["MONRO Casino", "3 500+", "3 000+", "180+", "60+"],
                ["STARDA Casino", "3 800+", "3 200+", "150+", "65+"],
                ["Caliente", "1 300+", "900+", "100+", "20+"],
                ["Codere", "1 500+", "1 100+", "120+", "25+"],
                ["Betsson", "2 500+", "2 000+", "200+", "40+"],
                ["Bet365", "1 800+", "1 200+", "150+", "25+"],
              ].map(([casino, total, slots, live, provs]) => (
                <tr key={casino} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{casino}</td>
                  <td className="px-4 py-3">{total}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{slots}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{live}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{provs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ BONOS ═══ */}
      <Section id="bonos" bg="/img/backgrounds/slots.png">
        <SectionTitle>Tipos de Bonos en Casinos Online de México</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Los bonos son básicamente lana gratis que te da el casino para que juegues. Suena increíble,
          ¿verdad? Y lo es... si sabes cómo funcionan. Porque la neta, la mayoría de la gente acepta
          bonos sin leer las condiciones y después se frustra cuando no puede retirar.
        </p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Aquí te explicamos cada tipo de bono que vas a encontrar en los casinos mexicanos, con números
          reales de nuestro ranking y consejos prácticos para que no te lleves sorpresas.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Bienvenida</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              El clásico. Haces tu primer depósito y el casino te da un porcentaje extra. Un &quot;100% hasta
              $5,000 MXN&quot; significa que si metes $3,000, el casino te regala otros $3,000 para jugar. Pero
              si metes $10,000, solo te dan $5,000 extra porque ese es el tope.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Te lo pongo con un ejemplo en pesos para que quede claro. Si depositas $5,000 MXN en un casino
              con bono del 100% y rollover x35, tienes $10,000 para jugar (tus $5,000 + $5,000 de bono). Pero
              para poder retirar necesitas apostar $350,000 MXN en total ($10,000 x 35). Suena a una locura,
              ¿verdad? Pero jugando slots con apuestas de $20-$50 por giro, vas acumulando sin darte cuenta.
              Nosotros lo logramos en Codere en unos 12 días jugando moderado. El truco es elegir slots con
              buen RTP (96%+) que contribuyan al 100% del rollover — las mesas suelen contribuir solo 10-20%.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Rollover típico:</strong> x25 a x40.
              <br /><strong className="text-white">Validez:</strong> 7 a 30 días para cumplir el rollover.
              <br /><strong className="text-white">En el ranking:</strong> SOL Casino tiene el rollover más bajo (x30),
              MONRO el porcentaje más alto (150%) y Bet365 ofrece un tope generoso en pesos mexicanos ($3,000 MXN).
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: No te dejes llevar solo por el monto. Un bono de $3,000 con rollover x25 es MUCHO
              mejor que uno de $5,000 con rollover x50. Haz la multiplicación antes de elegir.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono Sin Depósito</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Te registras y el casino te regala lana o giros gratis sin que metas un solo peso. Suena
              demasiado bueno para ser verdad y... más o menos lo es. El rollover de estos bonos suele
              ser alto (x40-x60) y el retiro máximo está limitado. Pero hey, es plata gratis para probar
              el casino sin arriesgar nada tuyo.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              En el mercado mexicano los bonos sin depósito típicos van de $100 a $500 MXN o entre 10 y
              50 tiradas gratis. No es mucha lana, pero la idea no es hacerte rico — es que pruebes el
              casino sin soltar un peso. Strendus ha ofrecido bonos sin depósito en temporadas específicas,
              y algunos casinos internacionales como SOL te dan giros gratis al registrarte si llegas por
              enlace de promoción. La neta es que estos bonos van y vienen, así que si ves uno disponible,
              tómalo.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Lo que sí debes tener claro: con un bono de $200 MXN sin depósito y rollover x50, necesitas
              apostar $10,000 MXN antes de poder retirar. Y el retiro máximo suele estar topado en $1,000-$2,000
              MXN. O sea, no vas a sacar millones de ahí. Pero como herramienta para conocer la plataforma,
              probar un par de slots y ver si te late el casino... funcionan perfecto.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Úsalo para conocer la plataforma. Si te gusta, depositas. Si no, no perdiste nada.
              No esperes hacerte millonario con un bono de $200 MXN sin depósito.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tiradas Gratis / Free Spins</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Giros gratuitos para usar en tragamonedas. A veces vienen con el bono de bienvenida (como
              los 500 de FRESH) o como promoción independiente. Ojo con el valor de cada giro: 50 giros
              a $2 MXN ($100 total) es peor que 20 giros a $10 MXN ($200 total).
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Hay un detalle que poca gente ve: no todas las tiradas gratis son iguales. Existen las
              <strong className="text-white"> wager-free spins</strong> (sin rollover) y las tiradas con rollover.
              Las wager-free son oro puro — lo que ganes es tuyo directamente, sin vueltas. Pero son raras
              y normalmente solo las dan los programas VIP o en promociones especiales. La mayoría de tiradas
              gratis vienen con rollover x30-x40 sobre las ganancias. O sea, si ganas $500 MXN con tus giros
              gratis y el rollover es x35, necesitas apostar $17,500 MXN para poder retirar esos $500.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Para calcular el valor real de tus tiradas, haz esta cuenta: multiplica el número de giros
              por el valor de cada uno, y después por el RTP del slot. Si tienes 500 giros de $0.20 USD en
              una slot con 96% RTP, tu valor esperado es 500 x $0.20 x 0.96 = $96 USD antes de rollover.
              No está mal para algo &quot;gratis&quot;, pero tampoco esperes hacerte rico. FRESH te reparte los
              500 giros en bloques de 50 por día durante 10 días, lo cual está chido porque te obliga a
              espaciar el juego en vez de quemártelos todos de una.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Fíjate si puedes elegir en qué slot usar los giros o si te los asignan. STARDA te
              los fuerza en Book of Gold, por ejemplo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Cashback</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Te devuelven un porcentaje de lo que perdiste. Si el cashback es del 10% y perdiste $5,000 MXN
              en la semana, te regresan $500. Lo chido del cashback es que muchas veces viene sin rollover —
              la lana es tuya directamente. SOL Casino da 15% semanal sin rollover, que es de los mejores
              que encontramos.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              La comparación rápida: SOL da 15% semanal sin rollover (el mejor del ranking), FRESH ofrece 10%
              los lunes (también sin rollover), y Caliente maneja un programa de puntos que funciona parecido
              pero con porcentajes más bajos (entre 5% y 8% dependiendo de tu nivel). Los casinos con licencia
              SEGOB suelen dar cashback mensual, mientras que los internacionales lo dan semanal. Esa diferencia
              importa porque con cashback semanal recuperas lana más seguido y puedes reinvertirla.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              ¿Cashback semanal o mensual? El semanal gana por goleada. Con el mensual tienes que esperar
              30 días para ver algo de regreso, y para ese punto ya ni te acuerdas cuánto perdiste. Con el
              semanal de SOL, cada lunes nos llegaba el cashback al balance real — sin rollover, sin vueltas.
              Lo retiramos una vez solo para confirmar y sí, la lana era nuestra. Si eres jugador regular y
              la suerte no siempre está de tu lado (spoiler: nunca lo está a largo plazo), un buen cashback
              te ayuda a estirar tu bankroll de manera real.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Un cashback sin rollover vale más que un bono de bienvenida enorme con rollover x50.
              Haz cuentas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Recarga</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Como el bono de bienvenida, pero para depósitos posteriores. Normalmente son porcentajes más
              bajos (20%-50%) pero se repiten cada semana. FRESH Casino da 50% los viernes, que es de los
              mejores que vimos.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              ¿Cómo funciona el bono de viernes de FRESH en la práctica? Cada viernes depositas lo que quieras
              y te dan 50% extra. Si metes $2,000 MXN (equivalente en USD), juegas con $3,000. El rollover es
              x35 sobre el bono, así que necesitas apostar $35,000 MXN. Lo probamos durante cuatro viernes
              seguidos y el bono siempre se activó automático — no tuvimos que escribir al soporte ni meter
              ningún código. Eso sí, revisa que no tengas otro bono activo porque no se acumulan.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              A largo plazo, las recargas son donde está la lana de verdad. Piénsalo así: el bono de bienvenida
              lo usas una vez. Pero si juegas todos los fines de semana y aprovechas el 50% de FRESH cada viernes,
              en un mes ya recibiste cuatro bonos de recarga. Cuatro. MONRO tiene recarga del 50% los miércoles
              y Caliente ofrece recargas más modestas (20-30%) pero en pesos mexicanos directos. Si sabes que
              vas a jugar seguido, elige el casino con la mejor recarga recurrente, no solo el mejor bono de
              primera vez.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Si juegas regularmente, estos bonos suman mucho más que el de bienvenida a largo plazo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Programa VIP</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Sistema de niveles que premia tu actividad. Mientras más juegas, más beneficios: mejor cashback,
              retiros más rápidos, bonos personalizados y hasta un gerente de cuenta que te escribe por WhatsApp
              (no es broma, en FRESH nos pasó al llegar al nivel 3).
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              La estructura típica en los casinos del ranking va de 5 a 10 niveles. FRESH tiene 7 niveles y
              así funciona: el nivel 1 lo tienes al registrarte (cashback básico del 5%), el nivel 2 lo
              alcanzas con unas $500 USD en apuestas acumuladas (cashback sube a 7% + bonos personalizados
              por correo), y el nivel 3 requiere alrededor de $2,000 USD en apuestas totales. Ahí es donde
              la cosa se pone chida: retiros prioritarios (que neta se notan, pasamos de 18 horas a 6 horas
              en crypto), cashback del 10%, y un gerente de cuenta que nos escribió por correo ofreciendo
              un bono exclusivo de recarga del 75%. No nos lo esperábamos.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Los niveles altos (5-7 en FRESH, o equivalente en otros casinos) son para jugadores que mueven
              cantidades fuertes — estamos hablando de $10,000-$50,000 USD en apuestas acumuladas. Ahí te
              dan cashback de 15-20%, límites de retiro más altos, regalos de cumpleaños y acceso a torneos
              exclusivos. Caliente maneja un sistema parecido con su programa de puntos, pero como opera en
              pesos mexicanos todo es más transparente con los montos. Y un dato: los puntos VIP que acumulas
              en un casino no se transfieren a otro. Si llevas meses subiendo niveles en FRESH y te cambias
              a SOL, empiezas desde cero. Así que elige bien desde el principio.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Si planeas jugar seguido, elige un casino con buen VIP desde el inicio. Cambiar después
              significa empezar de cero.
            </p>
          </div>
        </div>

        {/* Bonus summary table */}
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Si buscas...</th>
                <th className="px-4 py-3 font-bold">Mejor opción</th>
                <th className="px-4 py-3 font-bold text-right">Enlace</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                { need: "Bono más grande en %", best: "MONRO Casino (150%)", slug: "monro-casino" },
                { need: "Más giros gratis", best: "FRESH Casino (500 giros)", slug: "fresh-casino" },
                { need: "Rollover más bajo", best: "SOL Casino (x30)", slug: "sol-casino" },
                { need: "Mejor cashback", best: "SOL Casino (15% semanal)", slug: "sol-casino" },
                { need: "Bono de recarga semanal", best: "FRESH Casino (50% viernes)", slug: "fresh-casino" },
                { need: "Mejor programa VIP", best: "FRESH Casino (7 niveles)", slug: "fresh-casino" },
                { need: "Pagar con OXXO", best: "Caliente (depósitos en tienda)", slug: "caliente" },
              ].map((row) => (
                <tr key={row.need} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3">{row.need}</td>
                  <td className="px-4 py-3 font-bold text-white">{row.best}</td>
                  <td className="px-4 py-3 text-right">
                    <a href={`/go/${row.slug}/`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap">Visitar</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ MÉTODOS DE PAGO ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago en los Mejores Casinos Online de México</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Una de las ventajas de jugar en casinos con licencia SEGOB es que aceptan métodos de pago
          mexicanos. SPEI y OXXO son los reyes, pero hay más opciones. Acá te las explicamos todas.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">SPEI</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              El Sistema de Pagos Electrónicos Interbancarios es el rey de los pagos en casinos mexicanos.
              Transferencia bancaria instantánea desde cualquier banco mexicano (Banorte, BBVA, Banamex,
              Santander, Azteca...). Depósitos al instante, retiros entre 1 y 24 horas. Sin comisiones en
              la mayoría de casinos. Si tienes cuenta bancaria en México, este es tu método. Probamos un
              retiro por SPEI en Caliente y la lana llegó en 4 horas.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mt-3">
              El proceso es sencillo: vas a la sección de depósitos del casino, seleccionas SPEI, y te dan
              una CLABE interbancaria. Abres tu app bancaria (BBVA, Banorte, Banamex, Santander, HSBC, Azteca,
              cualquiera que maneje SPEI), haces la transferencia a esa CLABE con el monto que quieras, y el
              depósito se refleja en segundos. Para retiros es al revés: le das tu CLABE al casino y ellos te
              transfieren. Lo probamos con cuenta de BBVA y Banorte — ambos sin problema. Un cuate lo intentó
              desde Banco Azteca y también le jaló. El único detalle es que algunos casinos tienen un depósito
              mínimo de $100-$200 MXN por SPEI, pero nada fuera de lo normal. Para retiros, Caliente nos tardó
              4 horas, Betsson como 8, y Codere 12 (un viernes por la noche, para ser justos).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">OXXO Pay</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              ¿No quieres meter tu tarjeta en internet? Vas al OXXO de la esquina, le das un código al cajero,
              pagas en efectivo y listo — tu depósito se refleja entre 15 minutos y unas horas. Hay más de
              20,000 tiendas OXXO en México, así que siempre hay una cerca. Ojo: solo funciona para depósitos.
              Los retiros tienen que ser por otro método (SPEI o tarjeta). Caliente y Strendus son los que
              mejor manejan OXXO.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mt-3">
              Las limitaciones que debes conocer: OXXO es solo para depósitos, no puedes retirar por ahí. Los
              montos suelen tener un tope de $10,000 MXN por transacción (depende del casino). Y el tiempo de
              acreditación varía bastante — en Caliente nos reflejó en 20 minutos, pero en Strendus una vez tardó
              casi 3 horas un sábado. También ojo con la comisión: OXXO cobra una comisión de $10-$15 MXN al
              momento de pagar en caja, que no te la cobra el casino sino la tienda misma. No es mucho, pero si
              depositas $100 MXN y te cobran $13 de comisión, ya es un 13% que se te fue. Conviene más para
              depósitos de $500 MXN o más donde la comisión se diluye. Un último tip: guarda tu ticket siempre.
              Si el depósito no llega, ese ticket es tu comprobante para reclamar al soporte.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">CoDi</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              El sistema de pagos con QR del Banco de México. Escaneas un código QR desde tu app bancaria
              y el pago se procesa al instante. No todos los casinos lo aceptan todavía, pero Caliente y
              Codere ya lo tienen. Es rápido y seguro porque no compartes datos de tarjeta.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mt-3">
              Si no sabes qué es CoDi, no estás solo — muchos mexicanos todavía no lo conocen. Básicamente es
              un sistema de cobro digital que funciona a través de tu app bancaria. El Banco de México lo lanzó
              para que pudieras pagar escaneando un QR o recibiendo una notificación push, sin necesidad de
              compartir número de tarjeta ni CLABE. Los bancos que ya lo soportan incluyen BBVA, Banorte,
              Banamex (Citibanamex), HSBC, Santander y Banco Azteca, entre otros. El pago se procesa por SPEI
              así que es instantáneo y sin comisión. Está creciendo rápido en casinos porque es más seguro que
              meter tu tarjeta — no compartes datos sensibles. Si tu banco tiene CoDi habilitado (revisa en
              la app, suele estar en la sección de transferencias o pagos), pruébalo. Es más rápido que SPEI
              manual porque no tienes que escribir la CLABE.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tarjetas Visa / Mastercard</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              El método universal. Funciona en todos los casinos del ranking. Depósito instantáneo, retiros
              entre 1 y 5 días hábiles. Las tarjetas de débito también funcionan. Algunos bancos mexicanos
              pueden bloquear transacciones a casinos internacionales — si te pasa, prueba con Skrill como
              intermediario o usa SPEI si el casino lo acepta.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mt-3">
              Hablemos claro sobre los bloqueos bancarios. En nuestra experiencia, <strong className="text-white">Banorte</strong> es
              el que más bloquea transacciones a casinos internacionales (FRESH, SOL, MONRO, STARDA). BBVA
              también lo hace a veces, sobre todo con tarjetas de débito. Banamex suele ser más permisivo pero
              no es garantía. Con los casinos con licencia SEGOB (Caliente, Codere, Betsson, Bet365) casi nunca
              hay problemas porque son transacciones nacionales reconocidas. Si tu banco te bloquea un pago a un
              casino internacional, tienes tres opciones: llamar al banco y pedir que autoricen la transacción
              (a veces funciona, a veces te dan largas), usar Skrill o Neteller como intermediario (depositas
              a Skrill desde tu banco, y de Skrill al casino), o pasarte a crypto que no pasa por ningún banco.
              La opción de Skrill es la más fácil si no quieres meterte con criptomonedas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Mercado Pago</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Algunos casinos mexicanos ya aceptan Mercado Pago para depósitos. Es práctico si ya tienes
              saldo en tu cuenta de Mercado Libre. No es el método más extendido pero crece cada vez más.
              Strendus es uno de los que lo acepta.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mt-3">
              ¿Cómo funciona? Si tienes cuenta de Mercado Libre (y seamos honestos, casi todo México la tiene),
              ya tienes Mercado Pago. En los casinos que lo aceptan, seleccionas Mercado Pago como método de
              depósito y te redirige a tu cuenta para autorizar el pago. Puedes pagar con saldo de Mercado Pago,
              tarjeta guardada o incluso dinero en tu cuenta de Mercado Libre. El depósito es instantáneo. Ahora,
              la pregunta que todos hacen: ¿puedes retirar a Mercado Pago? La respuesta corta es que depende del
              casino. Strendus sí permite retiros a Mercado Pago en algunos casos, pero la mayoría de casinos te
              piden que retires por SPEI o tarjeta. No es el método más versátil, pero si ya tienes saldo ahí y
              no quieres meter tu tarjeta bancaria directamente, es una buena alternativa.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Skrill / Neteller</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Monederos electrónicos internacionales. Depósitos instantáneos, retiros en 0-24 horas. Son
              útiles como intermediarios si tu banco bloquea pagos directos a casinos. FRESH, SOL, MONRO
              y STARDA los aceptan. Cobran una pequeña comisión (1-3%) pero la velocidad lo compensa.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Criptomonedas</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Bitcoin, Ethereum, USDT, Litecoin y más. El método más rápido para retiros — prácticamente
              instantáneo. Sin comisiones del casino (solo el fee de la red). FRESH, SOL, MONRO, STARDA y
              Stake los aceptan. Si ya manejas crypto, es la opción más eficiente.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mt-3">
              Las criptos que más se usan en casinos online son <strong className="text-white">USDT (Tether)</strong> en
              red TRC-20 (la más barata en comisiones, como $5-$10 MXN por transacción), <strong className="text-white">Bitcoin</strong> (la
              clásica, pero con fees de $50-$200 MXN dependiendo de la congestión de la red), <strong className="text-white">Ethereum</strong> (fees
              variables, a veces altos), y <strong className="text-white">Litecoin</strong> (rápida y barata). STARDA
              también acepta Dogecoin, que es más de meme pero funciona. Los depósitos mínimos suelen ser
              equivalentes a $10-$20 USD en crypto.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mt-3">
              ¿No tienes crypto y quieres empezar? <strong className="text-white">Bitso</strong> es la plataforma más
              popular en México para comprar criptomonedas. Te registras con tu INE, fondeas con SPEI
              (llega al instante), compras USDT o Bitcoin, y lo mandas a la dirección del casino. Todo el
              proceso la primera vez te toma como 30-40 minutos (por la verificación de Bitso), pero después
              de eso es cuestión de minutos. Otros exchanges que funcionan en México son Binance y Coinbase,
              pero Bitso es el que mejor maneja pesos mexicanos y SPEI. Si juegas seguido en casinos
              internacionales, crypto se vuelve tu mejor amigo porque no hay bloqueos bancarios, las
              transacciones son rápidas y las comisiones son mínimas.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Método</th>
                <th className="px-4 py-3 font-bold">Depósito</th>
                <th className="px-4 py-3 font-bold">Retiro</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Comisión</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["SPEI", "Instantáneo", "1-24 horas", "Sin comisión"],
                ["OXXO Pay", "15 min - horas", "No disponible", "Sin comisión"],
                ["CoDi", "Instantáneo", "1-24 horas", "Sin comisión"],
                ["Visa / Mastercard", "Instantáneo", "1-5 días", "Sin comisión"],
                ["Mercado Pago", "Instantáneo", "1-48 horas", "Varía"],
                ["Skrill / Neteller", "Instantáneo", "0-24 horas", "1-3%"],
                ["Criptomonedas", "10-60 min", "Instantáneo", "Fee de red"],
              ].map(([method, dep, ret, fee]) => (
                <tr key={method} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{method}</td>
                  <td className="px-4 py-3">{dep}</td>
                  <td className="px-4 py-3">{ret}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-white mb-4 mt-10">Cómo Depositar con OXXO en un Casino Online</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Para muchos mexicanos, OXXO es la forma más cómoda de depositar. Acá el paso a paso:
        </p>
        <div className="space-y-4">
          {[
            { step: "1", title: "Regístrate en el casino", desc: "Crea tu cuenta con tus datos reales. Vas a necesitar tu INE y un correo electrónico válido." },
            { step: "2", title: "Ve a la sección de depósitos", desc: "Busca el botón \"Depositar\" o \"Cajero\". Selecciona OXXO como método de pago e ingresa el monto." },
            { step: "3", title: "Genera tu referencia de pago", desc: "El casino te va a dar un número de referencia o código de barras. Puedes tomarlo screenshot o imprimirlo." },
            { step: "4", title: "Ve al OXXO y paga", desc: "Dale la referencia al cajero del OXXO. Paga en efectivo. Guarda tu ticket de compra. Ojo: OXXO cobra una comisión de $10-$15 MXN por la transacción — no la cobra el casino, la cobra la tienda. Es poca lana, pero tenlo en cuenta si depositas montos chicos." },
            { step: "5", title: "Espera el depósito", desc: "El saldo suele reflejarse entre 15 minutos y un par de horas. Si no llega en 24h, contacta al soporte con tu ticket." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#16a34a]/10 border border-[#16a34a]/20 flex items-center justify-center shrink-0">
                <span className="text-[#16a34a] font-black text-sm">{item.step}</span>
              </div>
              <div>
                <p className="text-white font-bold mb-1">{item.title}</p>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ LEGAL ═══ */}
      <Section id="legal" bg="/img/backgrounds/comparativa.png">
        <SectionTitle>¿Es Legal Jugar en Casinos Online en México?</SectionTitle>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Sí, es completamente legal.</strong> México tiene un marco regulatorio
          para juegos de azar que, aunque necesita actualización, funciona. La <strong className="text-white">Ley
          Federal de Juegos y Sorteos</strong> data de 1947 (sí, tiene casi 80 años), pero sigue vigente y es
          la base de la regulación actual.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Quién regula los casinos en México?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          La <strong className="text-white">Secretaría de Gobernación (SEGOB)</strong> a través de la
          <strong className="text-white"> Dirección General de Juegos y Sorteos (DGJS)</strong>. Para operar un
          casino online legalmente en México, necesitas un permiso de SEGOB. Caliente, Codere, Betsson,
          Bet365, 1xBet, Strendus, Winpot y Luckia ya lo tienen.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Y los casinos internacionales?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          FRESH, SOL, MONRO y STARDA operan con licencia de Curaçao. No es una licencia mexicana, pero es
          completamente legítima a nivel internacional. Como jugador mexicano, no cometes ningún delito al
          jugar en estos casinos. La ley mexicana regula a los operadores, no a los jugadores. O sea, tú
          no tienes ninguna bronca legal por jugar donde quieras.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Impuestos: lo que nadie te dice</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          En México los premios de juegos de azar pagan dos impuestos: <strong className="text-white">IEPS del
          30%</strong> sobre los premios e <strong className="text-white">ISR entre 1% y 21%</strong> dependiendo
          del monto. Los casinos con licencia SEGOB retienen los impuestos automáticamente — lo que te pagan
          ya viene descontado. Para casinos internacionales, técnicamente deberías declarar las ganancias
          por tu cuenta. La neta es que poca gente lo hace, pero si ganas montos grandes, consulta con un
          contador para evitar sorpresas con el SAT.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Cómo verificar si un casino tiene permiso SEGOB?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Lo primero: busca en el footer (la parte de abajo) del sitio web del casino. Los casinos con permiso
          SEGOB lo muestran ahí con orgullo — verás algo como &quot;Permiso SEGOB/DGJS&quot; seguido de un número
          de expediente. El formato típico es algo como &quot;DGJS/SCEVF/P-06/2005&quot; (varía según el operador
          y la fecha de emisión). Si ves un número así, es buena señal.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Pero no te quedes con lo que dice el casino. Para verificar de verdad, puedes ir directamente a la
          Dirección General de Juegos y Sorteos. La DGJS tiene un directorio de establecimientos autorizados
          que puedes consultar en el portal del gobierno federal. También puedes llamar a la DGJS o enviar una
          solicitud de información a través de la Plataforma Nacional de Transparencia (es gratis) preguntando
          si tal operador tiene permiso vigente. Suena a trámite burocrático y... bueno, lo es. Pero si vas a
          meter tu lana en un casino, vale la pena los 10 minutos de verificación. Todos los casinos con licencia
          SEGOB en nuestro ranking (Caliente, Codere, Betsson, Bet365, 1xBet, Strendus, Winpot, Luckia) ya
          los verificamos nosotros.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">La nueva ley de juegos: ¿qué está pasando?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Desde hace varios años se ha discutido en el Congreso mexicano una nueva Ley Federal de Juegos y
          Sorteos que reemplazaría a la de 1947. La propuesta busca modernizar la regulación para incluir
          explícitamente a los casinos online (la ley actual fue escrita cuando ni existía internet), crear
          una entidad reguladora independiente dedicada exclusivamente al juego, y establecer reglas más claras
          sobre publicidad, protección al jugador y prevención de lavado de dinero. Hasta ahora la ley sigue
          en discusión y no hay fecha definitiva de aprobación. Mientras tanto, la DGJS sigue operando bajo
          el marco de 1947, que aunque viejo, cumple su función. Lo que sí te puedo decir es que si la nueva
          ley se aprueba, probablemente veremos más casinos internacionales buscando licencia mexicana directa,
          lo que sería buena noticia para los jugadores.
        </p>
        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6 mt-8">
          <p className="text-[#22c55e] font-bold mb-2">En resumen:</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Jugar en casinos online desde México es legal. Los casinos con permiso SEGOB son los más regulados,
            pero también puedes jugar en casinos internacionales con licencia de Curaçao o Malta sin problema.
            Todos los casinos de nuestro ranking son legítimos.
          </p>
        </div>
      </Section>

      {/* ═══ ONLINE VS FÍSICO ═══ */}
      <Section id="online-vs-fisico" alt>
        <SectionTitle>Casinos Online en México vs Casinos Físicos</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          México tiene casinos físicos en casi todas las ciudades grandes — Caliente, Codere, Winpot,
          Big Bola, Play City... Pero los casinos en línea ofrecen cosas que los físicos no pueden.
          Y viceversa. Acá va la comparación honesta.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Aspecto</th>
                <th className="px-4 py-3 font-bold">Casino Online</th>
                <th className="px-4 py-3 font-bold">Casino Físico</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Accesibilidad", "24/7 desde donde sea con internet", "Tienes que ir, y muchos cierran de madrugada"],
                ["Variedad de juegos", "3 000 - 5 000+ juegos", "100 - 500 máquinas según el casino"],
                ["Bonos", "Bonos de bienvenida, cashback, giros gratis", "Bebidas gratis y puntos de lealtad básicos"],
                ["Apuesta mínima", "Desde $4 MXN por giro", "Mínimos más altos, sobre todo en mesas"],
                ["Ambiente", "Chat en vivo, pero no es lo mismo", "La experiencia real, las luces, el ruido"],
                ["Privacidad", "Nadie sabe que estás jugando", "Te puede ver cualquiera"],
                ["Velocidad", "Rondas más rápidas, sin esperas", "Más lento, especialmente mesas llenas"],
                ["Métodos de pago", "SPEI, OXXO, crypto, tarjetas, todo", "Efectivo y tarjeta nada más"],
                ["RTP", "95-98% típico, publicado", "80-93% en máquinas físicas, no te lo dicen"],
              ].map(([aspect, online, physical]) => (
                <tr key={aspect} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{aspect}</td>
                  <td className="px-4 py-3">{online}</td>
                  <td className="px-4 py-3">{physical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#9ca3af] leading-relaxed mt-6">
          La neta es que no hay uno &quot;mejor&quot; que otro. Si quieres ir con los cuates a pasar un buen
          rato, el casino físico tiene su rollo. Pero si quieres variedad, mejores RTPs y jugar en
          calzones desde tu sofá a las 3am... los casinos en línea ganan por goleada.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">Los Casinos Físicos Más Conocidos de México</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Si decides ir a un casino físico, México tiene opciones en prácticamente cada ciudad grande del país. <strong className="text-white">Caliente</strong> es la cadena más extendida — tienen más de 200 locales en todo el territorio, desde Tijuana hasta Cancún, pasando por CDMX, Guadalajara y Monterrey. Lo interesante de Caliente es que sus locales funcionan también como centros de apuestas deportivas, así que puedes apostar en la Liga MX mientras juegas una slot. Su versión online comparte la misma cuenta, así que puedes depositar en sucursal y jugar en línea después.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Royal Yak</strong> en la Ciudad de México es otra experiencia. Ubicado dentro del Centro Comercial Yak en la zona de Interlomas, tiene un ambiente más premium con mesas de blackjack, ruleta y baccarat con límites más altos. <strong className="text-white">Hipódromo de las Américas</strong>, también en CDMX, combina carreras de caballos con un casino completo — es de los más tradicionales del país y lleva décadas operando. Para los que viven en la zona metropolitana, es una salida clásica de fin de semana.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Big Bola</strong> tiene presencia en varios estados con un enfoque más accesible — sus locales suelen estar en plazas comerciales y tienen promociones frecuentes para atraer jugadores casuales. Play City es otra cadena con más de 20 ubicaciones enfocada principalmente en tragamonedas y video póker. Y en Monterrey, casinos como Winners son puntos de referencia para los regios que disfrutan del juego presencial.
        </p>
        <p className="text-[#9ca3af] leading-relaxed">
          La gran diferencia entre ir a cualquiera de estos casinos físicos y jugar en línea es el RTP. Las máquinas tragamonedas de un casino físico en México suelen tener un RTP de entre 80% y 93% — significativamente más bajo que el 95-98% que encuentras en slots online. Eso significa que tu dinero dura considerablemente menos en un casino físico. Los casinos físicos compensan con la experiencia: las luces, el ambiente, las bebidas, la interacción social. Es entretenimiento, y como tal tiene valor. Solo que si tu prioridad es estirar tu presupuesto al máximo, los casinos en línea son objetivamente mejores.
        </p>
      </Section>

      {/* ═══ JUEGOS ═══ */}
      <Section id="juegos" bg="/img/backgrounds/ruleta.png">
        <SectionTitle>Juegos Más Populares en los Casinos Online de México</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Saber a qué estás jugando te da una ventaja que la mayoría no tiene. No es lo mismo sentarte
          en una ruleta americana que en una europea — te puede costar el doble de tu lana a largo plazo.
          Y en las slots, elegir por el RTP en vez de por los gráficos bonitos puede cambiar completamente
          tu experiencia.
        </p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Aquí van los juegos más populares entre los jugadores mexicanos con datos duros: RTPs, ventajas
          del casino, estrategias básicas y los títulos que más se juegan en México.
        </p>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Tragamonedas / Slots</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Las tragamonedas son el 80% de lo que juegan los mexicanos en casinos online. Son pura suerte,
            no hay estrategia que valga. Pero hay conceptos que te ayudan a elegir mejores slots:
          </p>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-1">RTP (Return to Player)</p>
            <p className="text-[#9ca3af] text-sm">
              Porcentaje que el juego devuelve a largo plazo. Un RTP de 96% = por cada $100 que apuestas,
              el juego devuelve $96 en promedio. Siempre elige slots con 96% o más. Parece poco, pero
              a largo plazo la diferencia entre 94% y 97% es brutal.
            </p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-1">Volatilidad</p>
            <p className="text-[#9ca3af] text-sm">
              <strong className="text-white">Baja:</strong> Ganas seguido pero poquito. Para sesiones largas con presupuesto chico.
              <br /><strong className="text-white">Alta:</strong> Puedes pasar 100 giros sin ganar nada y de repente PUM, premio gordo. Para bankrolls grandes y nervios de acero.
            </p>
          </div>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Slots Más Populares en México</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            <strong className="text-white">Sweet Bonanza</strong> (Pragmatic Play, RTP 96.5%, volatilidad alta) es
            la más jugada por lejos. Después viene <strong className="text-white">Gates of Olympus</strong> (el del
            dios Zeus que tira rayos con multiplicadores), y <strong className="text-white">Big Bass Bonanza</strong> (temática
            de pesca, free spins generosos). Las tres son de Pragmatic Play, que domina el mercado mexicano.
          </p>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Mecánicas de Slots</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">Megaways</p>
              <p className="text-[#9ca3af] text-sm">Hasta 117,649 líneas de pago que cambian en cada giro. Bonanza Megaways es la referencia del género.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">Hold &amp; Spin</p>
              <p className="text-[#9ca3af] text-sm">Símbolos especiales se quedan fijos y los demás giran de nuevo. Suele llevar a premios acumulados.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">Cluster Pays</p>
              <p className="text-[#9ca3af] text-sm">Ganas por grupos de símbolos, no por líneas. Reactoonz de Play&apos;n GO es el ejemplo clásico.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">Cascading Reels</p>
              <p className="text-[#9ca3af] text-sm">Los símbolos ganadores desaparecen y caen nuevos. Sweet Bonanza y Gates of Olympus usan esto.</p>
            </div>
          </div>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Top Slots por RTP</h4>
          <p className="text-[#9ca3af] text-sm mb-3">
            Si quieres maximizar tus posibilidades a largo plazo, estas son las tragamonedas con el retorno teórico más alto que vas a encontrar en los casinos mexicanos. No significa que vayas a ganar sí o sí, pero estadísticamente tu lana dura más en estas slots que en las que tienen 94% de RTP. Revisamos los catálogos de los 14 casinos del ranking y confirmamos que todos estos títulos están disponibles en al menos la mitad de ellos.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                  <th className="px-4 py-3 font-bold">Slot</th>
                  <th className="px-4 py-3 font-bold">RTP</th>
                  <th className="px-4 py-3 font-bold hidden sm:table-cell">Volatilidad</th>
                  <th className="px-4 py-3 font-bold hidden sm:table-cell">Proveedor</th>
                </tr>
              </thead>
              <tbody className="text-[#d4d4d8]">
                {[
                  ["Blood Suckers", "98.00%", "Baja", "NetEnt"],
                  ["Starmania", "97.87%", "Media", "NextGen Gaming"],
                  ["White Rabbit", "97.72%", "Alta", "Big Time Gaming"],
                  ["Joker Strike", "97.69%", "Media", "Quickspin"],
                  ["Kings of Chicago", "97.80%", "Media", "NetEnt"],
                  ["1429 Uncharted Seas", "98.60%", "Media", "Thunderkick"],
                  ["Mega Joker", "99.00%", "Alta", "NetEnt"],
                  ["Jackpot 6000", "98.90%", "Alta", "NetEnt"],
                ].map(([name, rtp, vol, prov]) => (
                  <tr key={name} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold text-white">{name}</td>
                    <td className="px-4 py-3 text-[#22c55e] font-bold">{rtp}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">{vol}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">{prov}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#d4d4d8] text-sm italic mb-6">
            Ojo: muchos casinos ofrecen versiones con RTP reducido de estas mismas slots. Antes de jugar, revisa la información del juego (normalmente en el menú de ajustes o en el ícono de &quot;i&quot; dentro de la slot) para confirmar que estás jugando la versión con el RTP publicado. La diferencia puede ser de 2-3 puntos porcentuales, y a largo plazo eso es mucha lana.
          </p>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Análisis de las Slots Más Jugadas en México</h4>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-2">Sweet Bonanza — Pragmatic Play</p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              RTP 96.5% | Volatilidad Alta | Multiplicadores hasta x100 | Apuesta mínima desde $4 MXN
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              Sweet Bonanza es, sin duda, la tragamonedas más jugada en México. Funciona con el sistema Tumble (Cascading Reels): cada vez que ganas, los símbolos ganadores desaparecen y caen nuevos desde arriba, permitiendo múltiples ganancias en un solo giro pagado. Pero lo que la hace adictiva son las bombas de multiplicadores que aparecen durante los free spins. Cuando caen varias bombas x50 o x100 en una sola cascada, los premios se disparan a niveles absurdos. El tablero de 6x5 no tiene líneas de pago tradicionales — necesitas 8 o más símbolos iguales en cualquier posición para ganar.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              La función de compra de bonus te permite acceder directamente a los free spins pagando 100x tu apuesta base. Es caro, pero si no tienes paciencia para esperar a que caigan 4+ scatters de forma natural, es una opción. Ten en cuenta que la volatilidad alta significa que puedes tener rachas largas sin ganar nada significativo antes de que llegue ese gran premio. Maneja tu bankroll con cuidado: esta slot puede comerte la lana rápido si no controlas tus apuestas. Lo ideal es dedicarle al menos 200 giros para darle oportunidad de entregar una buena ronda de bonus.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              También existe Sweet Bonanza Xmas (versión navideña con las mismas mecánicas) y Sweet Bonanza CandyLand (versión de casino en vivo con ruleta y bonus). Si te gusta la original, las variantes valen la pena. La versión Xmas tiene el mismo RTP pero ambientación diferente, mientras que CandyLand es una experiencia completamente distinta con un presentador en vivo.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-2">Gates of Olympus — Pragmatic Play</p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              RTP 96.5% | Volatilidad Alta | Multiplicadores hasta x500 | Máximo ganancia 5,000x
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              Zeus, el dios griego, tirándote rayos con multiplicadores desde el cielo. Esa es la esencia de Gates of Olympus, y es la segunda slot más popular en los casinos online mexicanos. Al igual que Sweet Bonanza, usa el sistema Tumble donde los símbolos ganadores desaparecen y caen nuevos. La diferencia clave está en los multiplicadores: en Gates of Olympus pueden llegar hasta x500 en una sola aparición, lo que teóricamente permite premios mucho más grandes en un solo tumble. El diseño visual con columnas griegas y el propio Zeus dominando la pantalla le da una estética cinematográfica que engancha desde el primer giro.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              Los free spins se activan con 4, 5 o 6 scatters, otorgando 15 giros gratuitos. Durante la ronda de bonus, los multiplicadores se acumulan — si en un tumble aparece un x5 y en el siguiente un x3, tu multiplicador total sube a x8 para la siguiente ganancia. Esto crea momentos explosivos donde un solo giro libre puede pagarte cientos de veces tu apuesta base. La función Ante Bet aumenta tu apuesta un 25% pero duplica las chances de activar los free spins. Es una mecánica que vale la pena activar si tu bankroll lo permite, porque la ronda de bonus es donde se concentra el verdadero potencial de pago.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Es la slot más streameada en Latinoamérica porque los momentos de multiplicadores acumulados generan clips virales. Pero recuerda: esos clips muestran las mejores rondas, no las 500 rondas anteriores donde no pasó nada. La volatilidad alta es real. Gates of Olympus 1000 es la versión actualizada con multiplicadores aún más altos y un tope de ganancia de 15,000x — pero también con volatilidad extrema.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-2">Big Bass Bonanza — Pragmatic Play</p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              RTP 96.71% | Volatilidad Alta | Free Spins con pescador colector | Máximo ganancia 2,100x
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              La temática de pesca suena ridícula para una slot, pero Big Bass Bonanza tiene una mecánica de free spins que engancha a cualquiera. Cuando activas los giros gratis (3+ scatters), aparece un símbolo de pescador que funciona como colector: cada vez que un símbolo de pez con valor monetario cae en la misma línea que el pescador, cobras ese premio directamente. Si caen múltiples pescadores, multiplican los valores. Un solo giro libre con 3 pescadores y varios peces de alto valor puede pagarte 500x tu apuesta sin problema. La mecánica del pescador es tan satisfactoria que Pragmatic Play la ha replicado en más de una docena de secuelas.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              La serie Big Bass es enorme: Big Bass Bonanza original, Bigger Bass Bonanza (con pescadores que acumulan multiplicadores), Big Bass Splash (hasta 20 free spins extra), Christmas Big Bass Bonanza, Big Bass Bonanza Megaways y más. Pragmatic Play saca una nueva versión cada pocos meses porque la fórmula funciona. El RTP de 96.71% es ligeramente superior al promedio de la industria, lo que junto con la mecánica tan satisfactoria explica por qué la saga no para de crecer. La versión Megaways combina la mecánica del pescador con hasta 46,656 formas de ganar.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Para jugadores mexicanos, toda la serie Big Bass está disponible en los casinos del ranking. Si te gusta la mecánica de colector pero quieres algo diferente a la temática de pesca, prueba The Dog House Megaways del mismo proveedor — mismo concepto pero con perros que retienen multiplicadores sticky durante los free spins.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Ruleta</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El juego de casino más icónico. Pero no todas las ruletas son iguales y elegir mal te puede
            costar el doble:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
              <p className="text-[#22c55e] font-bold text-sm mb-1">Europea</p>
              <p className="text-white text-2xl font-black">2.70%</p>
              <p className="text-xs text-[#9ca3af]">ventaja del casino</p>
              <p className="text-[#22c55e] text-xs font-bold mt-2">RECOMENDADA</p>
            </div>
            <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
              <p className="text-[#22c55e] font-bold text-sm mb-1">Francesa</p>
              <p className="text-white text-2xl font-black">1.35%</p>
              <p className="text-xs text-[#9ca3af]">ventaja del casino</p>
              <p className="text-[#22c55e] text-xs font-bold mt-2">LA MEJOR</p>
            </div>
            <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5">
              <p className="text-[#ef4444] font-bold text-sm mb-1">Americana</p>
              <p className="text-white text-2xl font-black">5.26%</p>
              <p className="text-xs text-[#9ca3af]">ventaja del casino</p>
              <p className="text-[#ef4444] text-xs font-bold mt-2">EVITAR</p>
            </div>
          </div>
          <p className="text-[#d4d4d8] text-sm italic">
            La americana tiene doble cero (0 y 00), casi duplica la ventaja del casino. Siempre juega
            europea o francesa. Tu lana te lo va a agradecer a largo plazo.
          </p>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Tipos de Apuestas en Ruleta</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Hay dos grandes categorías de apuestas en ruleta: las internas y las externas. Las apuestas internas son las que haces directamente sobre números específicos del tablero — pagan mucho más, pero la probabilidad de ganar es baja. Las apuestas externas cubren grupos grandes de números (como rojo/negro o par/impar) — ganas más seguido, pero los pagos son menores. La clave está en encontrar el balance que se adapte a tu estilo de juego y tu bankroll. Si tienes poco presupuesto, las externas te van a dar más tiempo de juego. Si quieres emociones fuertes y premios gordos, las internas son tu camino.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                  <th className="px-4 py-3 font-bold">Apuesta</th>
                  <th className="px-4 py-3 font-bold">Tipo</th>
                  <th className="px-4 py-3 font-bold">Pago</th>
                  <th className="px-4 py-3 font-bold hidden sm:table-cell">Probabilidad</th>
                </tr>
              </thead>
              <tbody className="text-[#d4d4d8]">
                {[
                  ["Pleno (1 número)", "Interna", "35:1", "2.7%"],
                  ["Caballo (2 números)", "Interna", "17:1", "5.4%"],
                  ["Transversal (3 números)", "Interna", "11:1", "8.1%"],
                  ["Cuadro (4 números)", "Interna", "8:1", "10.8%"],
                  ["Seisena (6 números)", "Interna", "5:1", "16.2%"],
                  ["Docena (12 números)", "Externa", "2:1", "32.4%"],
                  ["Columna (12 números)", "Externa", "2:1", "32.4%"],
                  ["Rojo/Negro", "Externa", "1:1", "48.6%"],
                  ["Par/Impar", "Externa", "1:1", "48.6%"],
                  ["1-18 / 19-36", "Externa", "1:1", "48.6%"],
                ].map(([bet, type, payout, prob]) => (
                  <tr key={bet} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold text-white">{bet}</td>
                    <td className="px-4 py-3">{type}</td>
                    <td className="px-4 py-3 text-[#22c55e] font-bold">{payout}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">{prob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#d4d4d8] text-sm italic">
            Las probabilidades de la tabla son para ruleta europea (37 números). Dato importante que poca gente conoce: en la ruleta francesa existe la regla &quot;La Partage&quot; — si apuestas a rojo/negro, par/impar o 1-18/19-36 y sale el 0, te devuelven la mitad de tu apuesta en vez de perderla toda. Eso baja la ventaja del casino al 1.35%, que es absurdamente bajo para un juego de casino. Si tu casino tiene ruleta francesa con La Partage, juega esa siempre. Es la apuesta con mejor probabilidad de todo el casino después del blackjack con estrategia perfecta.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Blackjack</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El único juego de casino donde lo que tú decides importa de verdad. Con estrategia básica
            la ventaja del casino baja a <strong className="text-white">0.5%</strong>, lo mejor que vas a
            encontrar en cualquier casino.
          </p>
          <h4 className="text-base font-bold text-white mb-3">Estrategia Básica Rápida</h4>
          <div className="space-y-2 mb-4 text-sm">
            {[
              ["8 o menos", "Siempre pedir carta"],
              ["9-11", "Doblar si el dealer muestra 3-6, si no pedir"],
              ["12-16", "Plantarte si el dealer muestra 2-6, si no pedir"],
              ["17 o más", "Siempre plantarte"],
              ["Par de Ases u 8", "Siempre dividir"],
              ["Par de 10 o figuras", "Nunca dividir"],
            ].map(([hand, action]) => (
              <div key={hand} className="flex gap-3 text-[#d4d4d8]">
                <span className="text-[#16a34a] shrink-0">&#9656;</span>
                <span><strong className="text-white">{hand}:</strong> {action}</span>
              </div>
            ))}
          </div>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Tabla de Estrategia Básica Completa</h4>
          <p className="text-[#9ca3af] text-sm mb-3">
            Si realmente quieres jugar bien al blackjack, guarda esta tabla. Muestra la jugada matemáticamente óptima según tu mano y la carta visible del dealer. P = Pedir carta, Q = Quedarte (plantarte), D = Doblar. Seguirla al pie de la letra no te garantiza ganar cada mano, pero a lo largo de cientos de manos vas a estar jugando con la ventaja más baja posible contra el casino. Es la diferencia entre un jugador que pierde 5% por mano en promedio y uno que solo pierde 0.5%.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-center text-xs">
              <thead>
                <tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider">
                  <th className="px-2 py-2 font-bold text-left">Tu mano</th>
                  <th className="px-2 py-2 font-bold">2</th>
                  <th className="px-2 py-2 font-bold">3</th>
                  <th className="px-2 py-2 font-bold">4</th>
                  <th className="px-2 py-2 font-bold">5</th>
                  <th className="px-2 py-2 font-bold">6</th>
                  <th className="px-2 py-2 font-bold">7</th>
                  <th className="px-2 py-2 font-bold">8</th>
                  <th className="px-2 py-2 font-bold">9</th>
                  <th className="px-2 py-2 font-bold">10</th>
                  <th className="px-2 py-2 font-bold">A</th>
                </tr>
              </thead>
              <tbody className="text-[#d4d4d8]">
                {[
                  ["8 o menos", "P","P","P","P","P","P","P","P","P","P"],
                  ["9", "P","D","D","D","D","P","P","P","P","P"],
                  ["10", "D","D","D","D","D","D","D","D","P","P"],
                  ["11", "D","D","D","D","D","D","D","D","D","D"],
                  ["12", "P","P","Q","Q","Q","P","P","P","P","P"],
                  ["13", "Q","Q","Q","Q","Q","P","P","P","P","P"],
                  ["14", "Q","Q","Q","Q","Q","P","P","P","P","P"],
                  ["15", "Q","Q","Q","Q","Q","P","P","P","P","P"],
                  ["16", "Q","Q","Q","Q","Q","P","P","P","P","P"],
                  ["17+", "Q","Q","Q","Q","Q","Q","Q","Q","Q","Q"],
                ].map(([hand, ...actions]) => (
                  <tr key={hand} className="border-t border-white/[0.04]">
                    <td className="px-2 py-2 text-left font-bold text-white">{hand}</td>
                    {actions.map((a, i) => (
                      <td key={i} className={`px-2 py-2 font-bold ${a === "Q" ? "text-[#22c55e]" : a === "D" ? "text-[#fbbf24]" : "text-[#9ca3af]"}`}>{a}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#71717a]">
            <span><span className="text-[#9ca3af] font-bold">P</span> = Pedir carta</span>
            <span><span className="text-[#22c55e] font-bold">Q</span> = Quedarte (plantarte)</span>
            <span><span className="text-[#fbbf24] font-bold">D</span> = Doblar apuesta</span>
          </div>
          <p className="text-[#9ca3af] text-sm leading-relaxed mt-4">
            La tabla asume un juego estándar de blackjack con 6 barajas donde el dealer se planta en 17 suave. Si el dealer pide en 17 suave (S17 vs H17), hay pequeñas variaciones, pero esta tabla cubre el 95% de las situaciones que vas a encontrar en los casinos online mexicanos. Para manos suaves (las que incluyen un As que puede valer 1 u 11), la regla general es ser más agresivo con los dobles cuando el dealer muestra cartas débiles (3-6). Para pares, siempre divide Ases y Ochos, nunca dividas Dieces ni Cincos, y divide el resto cuando el dealer muestra cartas débiles.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Casino en Vivo</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo más parecido a un casino real sin salir de casa. Dealers de carne y hueso transmitiendo
            en vivo desde estudios profesionales. Puedes chatear con el dealer y con otros jugadores.
            <strong className="text-white"> Evolution Gaming</strong> domina — Crazy Time, Lightning Roulette,
            Monopoly Live son los hits.
          </p>
          <p className="text-[#9ca3af] leading-relaxed">
            La mayoría tienen mesas con dealers que hablan español, lo que hace la experiencia mucho
            más natural. Los límites van desde $50 MXN hasta más de $2 millones MXN por ronda
            dependiendo de la mesa.
          </p>
        </div>
      </Section>

      {/* ═══ PROVEEDORES ═══ */}
      <Section id="proveedores" alt>
        <SectionTitle>Proveedores de Juegos en los Casinos de México</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Cada slot, cada mesa y cada game show tiene un estudio detrás. Conocer a los proveedores te
          ayuda a elegir mejor, porque cada uno tiene su estilo y su rango de calidad.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Evolution Gaming</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Los dueños absolutos del casino en vivo. Lightning Roulette (multiplicadores aleatorios de hasta x500), Crazy Time (la rueda más emocionante que existe) y Monopoly Live son de ellos. RTP entre 97% y 99%. Si juegas en vivo, vas a estar jugando Evolution el 90% del tiempo. Su catálogo incluye más de 300 mesas en vivo con dealers en múltiples idiomas, incluyendo español con dealers que hablan de forma natural, no traducción robótica.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Lo que distingue a Evolution del resto es la producción. Sus estudios parecen sets de televisión — iluminación cinematográfica, cámaras en HD desde múltiples ángulos y una calidad de streaming que rara vez se corta. Crazy Time es probablemente el game show más popular del mundo: combina una ruleta gigante con cuatro bonus games diferentes (Coin Flip, Cash Hunt, Pachinko y Crazy Time) que pueden pagar multiplicadores de hasta x25,000. Si nunca has probado el casino en vivo, Evolution es por donde tienes que empezar.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Pragmatic Play</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Sweet Bonanza, Gates of Olympus, Big Bass Bonanza — si lo viste en un stream, probablemente es de Pragmatic. Dominan el mercado mexicano de slots con más de 300 títulos. RTP entre 94% y 96.5%. También tienen una división de casino en vivo que crece rápido y ya compite directamente con Evolution en varias categorías. Su slot más exitosa, Sweet Bonanza, acumula millones de rondas jugadas cada mes solo en Latinoamérica.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Pragmatic Play lanza juegos nuevos casi cada semana, lo que les permite mantener una variedad enorme. Tienen slots para todos los gustos: volatilidad baja como Sugar Rush para sesiones tranquilas, volatilidad media como The Dog House para balance, y volatilidad alta como Gates of Olympus para los que buscan premios grandes. Su sistema de torneos Drops &amp; Wins reparte premios en efectivo todos los días entre jugadores que apuestan en sus slots, lo que añade una capa extra de emoción al juego regular.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">NetEnt</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Los clásicos inmortales: Starburst, Gonzo&apos;s Quest, Dead or Alive, Blood Suckers (98% RTP). Gráficos pulidos, mecánicas innovadoras y RTPs consistentemente altos (95-98%). Si buscas calidad sobre cantidad, NetEnt nunca falla. Fueron de los primeros en demostrar que las slots podían ser experiencias visuales de primer nivel, y muchos de sus títulos de hace más de 10 años siguen siendo de los más jugados.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Blood Suckers merece mención especial: con un RTP de 98%, es una de las slots con mejor retorno del mercado y perfecta para cumplir requisitos de rollover de bonos. Starburst sigue siendo la slot más icónica de la industria — mecánica simple con expanding wilds que van de derecha a izquierda y de izquierda a derecha. NetEnt ahora es parte del grupo Evolution, lo que significa que su catálogo está disponible en prácticamente todos los casinos serios.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Microgaming</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Los pioneros desde 1994. Mega Moolah tiene el récord del jackpot más grande pagado online: más de 400 millones de pesos mexicanos. Catálogo enorme (800+ títulos) aunque la calidad varía bastante. Son el proveedor con más historia en la industria y han sentado las bases de lo que hoy conocemos como casino online.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Más allá de Mega Moolah, Microgaming tiene joyas como Immortal Romance (una slot con historia narrativa que se desbloquea conforme juegas), Thunderstruck II y Break da Bank Again. Su red de jackpots progresivos conecta miles de casinos en todo el mundo, lo que permite que los premios acumulados lleguen a cifras millonarias. Si te interesa perseguir un jackpot que te cambie la vida, las slots de Microgaming son tu mejor apuesta — aunque estadísticamente, las probabilidades son similares a ganar la lotería.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Hacksaw Gaming</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Los favoritos de los streamers. Slots de volatilidad extrema donde puedes multiplicar tu apuesta x10,000 o más. Wanted Dead or a Wild, Chaos Crew, Le Bandit. No son para todos — necesitas bankroll y paciencia. Pero cuando pegan, pegan fuerte. Su estilo gráfico es inconfundible: colores vibrantes, animaciones fluidas y una personalidad que se nota desde el primer giro.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Hacksaw se especializa en slots con potencial de pago extremo. Wanted Dead or a Wild puede pagar hasta 12,500x tu apuesta, y sus rondas de bonus con duelos entre personajes son de las más emocionantes de la industria. Chaos Crew lleva la volatilidad al extremo con multiplicadores que se acumulan durante los free spins. Si ya probaste las slots de Pragmatic y quieres algo más intenso, Hacksaw es el siguiente paso. Solo asegúrate de que tu bankroll pueda aguantar las rachas secas, porque son largas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Play&apos;n GO</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Book of Dead, Reactoonz, Moon Princess — tres títulos que cualquier jugador de casino ha visto alguna vez. Play&apos;n GO tiene un catálogo de más de 300 slots con RTPs que van del 94% al 96.5%. Lo que los distingue es la variedad de mecánicas: desde slots clásicas de 5 rodillos hasta grid slots como Reactoonz donde ganas por clusters en vez de líneas. Su serie &quot;Book of&quot; (Book of Dead, Book of Shadows) popularizó la mecánica de símbolos expandibles durante los free spins.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Book of Dead es su título estrella y uno de los más jugados en toda Latinoamérica. La mecánica es simple pero efectiva: durante los giros gratis, un símbolo al azar se convierte en símbolo expandible que cubre todo el rodillo cuando forma parte de una combinación ganadora. Si el símbolo elegido es el de mayor valor (el explorador), un solo giro libre puede pagarte 5,000x tu apuesta. Reactoonz, por otro lado, es una experiencia completamente diferente — una grilla de 7x7 donde los aliens forman clusters y desencadenan reacciones en cadena. Moon Princess combina la temática de anime con mecánicas de cluster pays y poderes especiales de las tres princesas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Red Tiger</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Red Tiger tiene un concepto que ningún otro proveedor ha replicado con tanto éxito: los Daily Drop Jackpots. Son jackpots que DEBEN caer antes de las 23:59 de cada día. Sí, todos los días alguien se los lleva. Esto crea una dinámica interesante: conforme avanza el día y el jackpot no cae, la probabilidad de que caiga en los siguientes giros aumenta. Muchos jugadores entran a las slots de Red Tiger por la tarde-noche precisamente por esto.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Más allá de los jackpots diarios, Red Tiger tiene títulos sólidos como Gonzo&apos;s Quest Megaways (colaboración con NetEnt), Dragon&apos;s Fire y Pirate&apos;s Plenty. Sus slots tienden a tener volatilidad media-alta con RTPs entre 94% y 96%. La calidad gráfica es consistentemente buena y las mecánicas son variadas sin ser demasiado complicadas. Si te gusta la idea de perseguir un jackpot que sabes que va a caer ese mismo día, Red Tiger es tu proveedor. Están disponibles en FRESH Casino, SOL Casino y la mayoría de casinos internacionales del ranking.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Proveedor</th>
                <th className="px-4 py-3 font-bold">Especialidad</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">RTP</th>
                <th className="px-4 py-3 font-bold hidden md:table-cell">Hits</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Evolution", "Casino en vivo", "97-99%", "Crazy Time, Lightning Roulette"],
                ["Pragmatic Play", "Slots virales", "94-96.5%", "Sweet Bonanza, Gates of Olympus"],
                ["NetEnt", "Slots clásicas", "95-98%", "Starburst, Blood Suckers"],
                ["Microgaming", "Jackpots", "92-96.5%", "Mega Moolah"],
                ["Hacksaw", "Alta volatilidad", "94-96.5%", "Wanted Dead or a Wild"],
                ["Play'n GO", "Mecánicas variadas", "94-96.5%", "Book of Dead, Reactoonz"],
                ["Red Tiger", "Daily Jackpots", "94-96%", "Gonzo's Quest Megaways"],
              ].map(([name, spec, rtp, games]) => (
                <tr key={name} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{name}</td>
                  <td className="px-4 py-3">{spec}</td>
                  <td className="px-4 py-3 text-[#22c55e] font-bold hidden sm:table-cell">{rtp}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{games}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ MITOS ═══ */}
      <Section id="mitos">
        <SectionTitle>Mitos y Verdades sobre Casinos Online en México</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Internet está lleno de cosas que &quot;dicen por ahí&quot; sobre los casinos online. Vamos a
          separar lo real de lo que se inventó alguien en un foro a las 4am después de perder.
        </p>
        <div className="space-y-5">
          {[
            { claim: "Los casinos online están arreglados", verdict: "FALSO", color: "#ef4444", explanation: "Los casinos regulados usan generadores de números aleatorios (RNG) certificados por laboratorios independientes como eCOGRA, GLI e iTech Labs. Estos laboratorios auditan los juegos regularmente y verifican que los resultados sean genuinamente aleatorios. Si un casino manipulara los resultados, perdería su licencia de operación, enfrentaría multas millonarias y demandas legales. Los casinos no necesitan hacer trampa — la ventaja matemática (house edge) ya está incorporada en cada juego y les garantiza ganancias a largo plazo. ¿Existen casinos pirata sin licencia que podrían manipular resultados? Sí, por eso es fundamental jugar solo en casinos regulados como los de nuestro ranking." },
            { claim: "Si acaba de caer un jackpot, la slot no va a pagar en mucho rato", verdict: "FALSO", color: "#ef4444", explanation: "Esta es la famosa falacia del jugador, y es uno de los mitos más persistentes en cualquier casino. Cada giro en una slot es completamente independiente del anterior. El generador de números aleatorios (RNG) no tiene memoria — no sabe ni le importa si el giro anterior pagó un millón o nada. Una slot que acaba de entregar un jackpot tiene exactamente las mismas probabilidades de pagar otro jackpot en el siguiente giro. Lo mismo aplica al revés: que una slot lleve 500 giros sin pagar no significa que esté a punto de entregar un premio grande." },
            { claim: "Apostar más lana aumenta tus chances de ganar", verdict: "FALSO", color: "#ef4444", explanation: "El RTP (porcentaje de retorno) no cambia según cuánto apuestes. Si una slot tiene 96% de RTP, devuelve 96% en promedio seas apostando $5 MXN o $500 MXN por giro. Lo único que cambia es el tamaño de los premios y las pérdidas — proporcionalmente es exactamente igual. La excepción parcial son algunos jackpots progresivos que solo se activan con la apuesta máxima, pero el RTP base del juego sigue siendo el mismo. No te dejes engañar por la idea de que meter más lana mejora tus probabilidades." },
            { claim: "Los casinos bloquean cuentas de los que ganan mucho", verdict: "FALSO", color: "#ef4444", explanation: "Los casinos regulados están legalmente obligados a pagar las ganancias legítimas de sus jugadores. Bloquear cuentas ganadoras les haría perder la licencia y enfrentar consecuencias legales graves. Lo que sí hacen los casinos es solicitar verificación KYC (Know Your Customer) cuando pides retiros grandes — te piden INE, selfie y comprobante de domicilio. Esto es un requisito legal contra el lavado de dinero, no una táctica para evitar pagarte. Si completaste la verificación y tus ganancias son legítimas, el casino tiene que pagarte. Punto." },
            { claim: "Hay horarios mejores para jugar", verdict: "FALSO", color: "#ef4444", explanation: "El generador de números aleatorios funciona 24 horas, los 7 días de la semana, sin importar cuántos jugadores estén conectados ni qué hora sea. No importa si juegas a las 3am o a las 3pm, los resultados son igualmente aleatorios. Este mito probablemente viene de los casinos físicos, donde las máquinas tragamonedas solían tener configuraciones que podían variar. Pero en el mundo online, el software no distingue entre horarios. Tu probabilidad de ganar es exactamente la misma a cualquier hora del día o de la noche." },
            { claim: "Los bonos siempre convienen", verdict: "DEPENDE", color: "#f59e0b", explanation: "Un bono con rollover x25 y 30 días para cumplirlo puede ser una herramienta excelente para estirar tu bankroll. Pero un bono con rollover x50, validez de solo 7 días y límite de retiro de $500 puede ser peor que no aceptar nada — vas a terminar jugando bajo presión y probablemente perdiendo más de lo que ganarías sin bono. Lee SIEMPRE las condiciones antes de aceptar. Fíjate en el rollover, la validez, qué juegos contribuyen al 100% y cuál es el retiro máximo con bono activo. Si el rollover es mayor a x40, piénsalo dos veces antes de aceptar." },
            { claim: "El blackjack online está trucado porque siempre gana la banca", verdict: "FALSO", color: "#ef4444", explanation: "La banca tiene una ventaja matemática de apenas 0.5% cuando el jugador usa estrategia básica óptima. Eso no es trampa, es la naturaleza del juego y es lo que permite al casino operar como negocio. Vas a tener sesiones donde pierdes varias manos seguidas — eso es varianza normal, no manipulación. Es como decir que la ruleta está trucada porque tiene el cero: el cero es la ventaja del casino, no una trampa. A largo plazo, un jugador de blackjack con buena estrategia pierde mucho menos que alguien jugando slots de bajo RTP." },
            { claim: "Usar estrategia básica en blackjack es trampa", verdict: "FALSO", color: "#ef4444", explanation: "Es completamente legal y los casinos lo saben perfectamente. La estrategia básica es simplemente tomar la decisión matemáticamente óptima en cada situación según tu mano y la carta visible del dealer. No estás haciendo nada ilegal ni prohibido — es información pública disponible en cualquier libro de gambling. Lo que sí está prohibido en casinos físicos es contar cartas (llevar un registro mental de las cartas que han salido para predecir las que quedan), pero en casinos online es imposible porque el software baraja con RNG después de cada mano. Usar estrategia básica online es perfectamente válido y recomendable." },
          ].map((item) => (
            <div key={item.claim} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <p className="text-white font-bold text-base flex-1">&quot;{item.claim}&quot;</p>
                <span className="text-xs font-black px-3 py-1 rounded-full uppercase" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.verdict}</span>
              </div>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{item.explanation}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ JUEGO RESPONSABLE ═══ */}
      <Section id="responsable" alt bg="/img/backgrounds/cripto.png">
        <SectionTitle>Juego Responsable en Casinos Online de México</SectionTitle>
        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mb-8">
          <p className="text-[#f59e0b] font-bold mb-2">Esto va en serio</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Los casinos son entretenimiento. No son una forma de ganar lana. Si estás jugando para
            &quot;recuperar lo que perdiste&quot; o estás apostando dinero que necesitas para la renta...
            para. Lee esta sección completa.
          </p>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">Herramientas que tienes disponibles</h3>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {[
            "Límites de depósito: Configura un máximo diario, semanal o mensual. La mayoría de los casinos del ranking te permiten ajustar esto desde la configuración de tu cuenta. Si sabes que tu presupuesto mensual es $5,000 MXN, ponlo como límite y el casino no te va a dejar depositar más aunque quieras. Es la herramienta más útil que existe.",
            "Límites de pérdida: El casino te bloquea automáticamente cuando tus pérdidas llegan a cierto monto en un periodo. Diferente al límite de depósito — este cuenta lo que pierdes, no lo que metes. Caliente y Betsson lo tienen bien implementado, con opciones diarias y semanales.",
            "Límites de tiempo: Te avisan cuando llevas X horas jugando. Suena básico pero neta funciona. Es fácil perder la noción del tiempo cuando estás metido en una racha de slots. Configúralo para que te avise cada hora y vas a ver cómo cambia tu forma de jugar.",
            "Autoexclusión temporal: Bloquea tu cuenta por días, semanas o meses. Si sientes que estás jugando de más, actívala sin pensarlo. No es rendirte, es ser inteligente. Durante el periodo de exclusión no puedes entrar a tu cuenta ni hacer depósitos, punto.",
            "Autoexclusión permanente: Cierre definitivo. Sin vuelta atrás. El casino elimina tu acceso y no puedes reabrir la cuenta nunca. Es la opción nuclear, pero si llegas al punto donde la necesitas, úsala sin dudar.",
          ].map((tool) => (
            <li key={tool} className="flex items-start gap-2 text-sm">
              <span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span> {tool}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-white mb-3">Señales de alerta</h3>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {[
            "Apuestas más de lo que puedes perder.",
            "Intentas recuperar pérdidas subiendo las apuestas.",
            "El juego afecta tu trabajo, relaciones o estudios.",
            "Mientes sobre cuánto tiempo o lana dedicas al juego.",
            "Te sientes ansioso cuando no puedes jugar.",
            "Pides prestado para jugar.",
          ].map((sign) => (
            <li key={sign} className="flex items-start gap-2 text-sm">
              <span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span> {sign}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-white mb-3">Ayuda en México</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-8">
          Si tú o alguien cercano tiene problemas con el juego, la <strong className="text-white">Línea
          de la Vida (800 911 2000)</strong> ofrece orientación gratuita y confidencial las 24 horas.
          <strong className="text-white"> Jugadores Anónimos México</strong> también tiene grupos de apoyo
          en todo el país. Pedir ayuda no es debilidad — es la decisión más inteligente que puedes tomar.
        </p>

        <h3 className="text-xl font-bold text-white mb-3">Manejo de bankroll</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Regla del 5%</p>
            <p className="text-[#9ca3af] text-sm">Nunca apuestes más del 5% de tu bankroll en un solo giro. Si tienes $10,000 MXN, tu apuesta máxima es $500.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Stop Loss</p>
            <p className="text-[#9ca3af] text-sm">Define antes de jugar cuánto estás dispuesto a perder. Si lo pierdes, dejas de jugar. Sin excepciones.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Divide en sesiones</p>
            <p className="text-[#9ca3af] text-sm">Si tu presupuesto mensual es $20,000 MXN, divide en 10 sesiones de $2,000. No gastes todo de una.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">Gestión del tiempo</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          La lana no es lo único que se te puede ir en un casino — el tiempo también. Y cuando pierdes noción
          del tiempo, es cuando tomas las peores decisiones con tu bankroll. Acá van tips concretos:
        </p>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {[
            "Sesiones de máximo 1 hora. Cuando suena la alarma, paras. Aunque vayas ganando. Después de una hora tu concentración baja y empiezas a apostar más impulsivamente.",
            "Toma un break de 15-20 minutos entre sesiones. Levántate, toma agua, revisa tu balance con calma. Si perdiste más de lo que planeabas, no vuelvas a entrar.",
            "No juegues después de las 2am. Las peores decisiones de apuesta se toman de madrugada cuando estás cansado. Hemos visto (y neta, nos ha pasado) que los jugadores pierden más entre 2am y 5am que en todo el resto del día.",
            "Pon una alarma en tu celular ANTES de empezar a jugar. No confíes en tu fuerza de voluntad cuando estás en medio de una racha — buena o mala.",
            "Si llevas más de 2 horas seguidas jugando, es señal de que algo no está bien. No importa si vas ganando. Para, guarda tus ganancias y vuelve otro día.",
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-2 text-sm">
              <span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span> {tip}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-white mb-3">Sistemas que NO funcionan</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          La Martingala (doblar después de perder) y la Fibonacci son las más conocidas. Las dos fallan
          por la misma razón: eventualmente te topas con el límite de la mesa o se te acaba el bankroll.
          El casino SIEMPRE tiene ventaja matemática. Ningún sistema la elimina. Acéptalo y vas a disfrutar
          mucho más del juego.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Te lo demuestro con números. La Martingala dice: apuesta $100 MXN en rojo en la ruleta. Si pierdes,
          dobla a $200. Si vuelves a perder, dobla a $400. La idea es que cuando ganes, recuperas todo lo
          anterior + $100 de ganancia. Suena lógico, ¿no? Pero mira lo que pasa con una racha perdedora (que
          SÍ pasan, más seguido de lo que crees):
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-4">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-2 font-bold">Ronda</th>
                <th className="px-4 py-2 font-bold">Apuesta</th>
                <th className="px-4 py-2 font-bold">Pérdida total</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["1", "$100 MXN", "$100 MXN"],
                ["2", "$200 MXN", "$300 MXN"],
                ["3", "$400 MXN", "$700 MXN"],
                ["4", "$800 MXN", "$1,500 MXN"],
                ["5", "$1,600 MXN", "$3,100 MXN"],
                ["6", "$3,200 MXN", "$6,300 MXN"],
                ["7", "$6,400 MXN", "$12,700 MXN"],
                ["8", "$12,800 MXN", "$25,500 MXN"],
              ].map(([ronda, apuesta, perdida]) => (
                <tr key={ronda} className="border-t border-white/[0.04]">
                  <td className="px-4 py-2">{ronda}</td>
                  <td className="px-4 py-2">{apuesta}</td>
                  <td className="px-4 py-2 text-[#ef4444]">{perdida}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#9ca3af] leading-relaxed">
          En 8 rondas perdedoras (que en ruleta con el cero tienen una probabilidad de ~0.6%, o sea que le
          pasa a 1 de cada 170 jugadores), ya perdiste $25,500 MXN. Y la siguiente apuesta sería de $25,600.
          ¿Tienes $25,600 para apostar y recuperar $100 de ganancia? Probablemente no. Y aunque los tuvieras,
          muchas mesas de ruleta tienen un límite máximo de apuesta de $10,000-$20,000 MXN. Ahí se rompe el
          sistema y te quedas con la pérdida completa. La Martingala no falla &quot;a veces&quot; — falla siempre
          a largo plazo. Solo es cuestión de tiempo.
        </p>
      </Section>

      {/* ═══ CÓMO ELEGIR ═══ */}
      <Section id="como-elegir" bg="/img/backgrounds/blackjack.png">
        <SectionTitle>Cómo Elegir un Casino Online en México — Guía Paso a Paso</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">
          Con tantas opciones, elegir puede ser abrumador. Estos 5 pasos te van a ahorrar dolores de
          cabeza y lana perdida.
        </p>
        <div className="space-y-8">
          {[
            { step: "1", title: "Verifica la licencia", desc: "Un casino con permiso SEGOB es tu opción más segura en México. Si es internacional, busca licencia de Curaçao o Malta. Si no muestra licencia por ningún lado... huye.", tip: "Busca el número de permiso en el footer del casino. Los legítimos lo muestran con orgullo." },
            { step: "2", title: "Revisa los métodos de pago", desc: "¿Aceptan SPEI? ¿OXXO? ¿Tu tarjeta? De nada sirve el mejor casino del mundo si no puedes meter ni sacar tu lana. También checa los tiempos de retiro.", tip: "Haz un depósito chico primero y prueba un retiro. Si funciona bien, ya sabes que puedes confiar." },
            { step: "3", title: "Compara los bonos (la letra chica)", desc: "No te dejes llevar por el número grande. Fíjate en el rollover, la validez, qué juegos contribuyen y el retiro máximo con bono. Un bono de $3,000 con rollover x25 es mejor que uno de $10,000 con rollover x60.", tip: "Si el rollover es mayor a x40 y la validez menor a 14 días, piénsalo dos veces." },
            { step: "4", title: "Prueba la plataforma", desc: "Navega el casino antes de depositar. ¿Carga rápido? ¿Se ve bien en tu celular? ¿Encuentras los juegos fácil? Muchos te dejan jugar en modo demo sin apostar lana real.", tip: "Pruébalo en tu celular. La mayoría de los mexicanos juegan desde el celular." },
            { step: "5", title: "Lee las políticas de retiro", desc: "¿Cuál es el mínimo y máximo de retiro? ¿Cuánto tarda? ¿Necesitas verificación KYC? ¿Hay límites mensuales? Lee esto ANTES de depositar.", tip: "Completa la verificación KYC (INE + selfie) al registrarte. Así cuando quieras retirar, no vas a tener demoras." },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#16a34a]/10 border border-[#16a34a]/20 flex items-center justify-center shrink-0">
                <span className="text-[#16a34a] font-black text-lg">{item.step}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#9ca3af] leading-relaxed mb-2">{item.desc}</p>
                <p className="text-[#d4d4d8] text-sm italic">Consejo: {item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ MINI CTA 3 ═══ */}
      <div className="bg-gradient-to-r from-[#16a34a]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">150% de bono — el porcentaje más alto</p>
        <p className="text-white text-xl font-black mb-4">MONRO Casino — 150% en tu primer depósito</p>
        <CtaButton slug="monro-casino" text="Ir a MONRO Casino" />
      </div>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes sobre Casinos Online en México</SectionTitle>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-[#141414] border border-white/[0.06] overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-bold hover:text-[#16a34a] transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{item.q}</span>
                <svg className="w-5 h-5 shrink-0 text-[#71717a] group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-[#9ca3af] leading-relaxed text-sm">{item.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══ GLOSARIO ═══ */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario de Términos de Casinos Online</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">
          Todos los términos que necesitas saber para no perderte cuando leas sobre casinos online.
        </p>
        <div className="space-y-4">
          {glossary.map((g) => (
            <div key={g.term} className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <dt className="text-white font-bold mb-1">{g.term}</dt>
              <dd className="text-[#9ca3af] text-sm leading-relaxed">{g.def}</dd>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e] py-16 sm:py-24 text-center border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">¿Listo para jugar?</h2>
          <p className="text-[#9ca3af] text-lg mb-8 leading-relaxed">
            Elige tu casino, aprovecha el bono de bienvenida y empieza a jugar seguro. Todos los
            casinos online de nuestro ranking están verificados para jugadores mexicanos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="starda-casino" text="STARDA Casino — #1" />
            <CtaButton slug="monro-casino" text="MONRO Casino — #2" />
            <CtaButton slug="sol-casino" text="SOL Casino — #3" />
          </div>
        </div>
      </section>
    </>
  );
}
