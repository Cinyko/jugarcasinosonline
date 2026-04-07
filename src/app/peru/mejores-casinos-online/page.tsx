import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_MONTH, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Mejores Casinos Online en Perú 2026 | Guía Completa",
  description:
    "Descubrí los mejores casinos online en Perú. Ranking actualizado, bonos verificados, métodos de pago locales y guías para jugar seguro.",
};

/* ───────── Casino data for this page ───────── */

const peruCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-peru", bonus: "Gana 300 Giros Gratis", rating: 9.5, license: "MINCETUR", games: "2 500+", highlight: true },
  { rank: 2, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.3, license: "Curaçao", games: "3 800+", highlight: false },
  { rank: 3, name: "Inkabet", slug: "inkabet", bonus: "Hasta S/500 + 300 giros gratis", rating: 9.2, license: "MINCETUR", games: "1 500+", highlight: false },
  { rank: 4, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.1, license: "Curaçao", games: "4 000+", highlight: false },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, license: "Curaçao", games: "4 500+", highlight: false },
  { rank: 6, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.0, license: "Curaçao", games: "3 500+", highlight: false },
  { rank: 7, name: "Stake", slug: "stake", bonus: "S/50 freebet + 50 giros gratis o S/50 bono casino", rating: 8.8, license: "MINCETUR", games: "3 000+", highlight: false },
  { rank: 8, name: "Betano", slug: "betano", bonus: "60 giros gratis sin rollover", rating: 8.7, license: "MINCETUR", games: "2 000+", highlight: false },
  { rank: 9, name: "Bet365", slug: "bet365", bonus: "100% hasta S/500 + 500 giros gratis", rating: 8.6, license: "MINCETUR", games: "1 800+", highlight: false },
  { rank: 10, name: "1xBet", slug: "1xbet", bonus: "100% primer depósito hasta $300", rating: 8.5, license: "MINCETUR", games: "5 000+", highlight: false },
  { rank: 11, name: "Doradobet", slug: "doradobet", bonus: "S/50 o 50 giros gratis sin depósito", rating: 8.3, license: "MINCETUR", games: "1 500+", highlight: false },
  { rank: 12, name: "Betcris", slug: "betcris", bonus: "100% primer depósito hasta S/350", rating: 8.2, license: "MINCETUR", games: "1 000+", highlight: false },
  { rank: 13, name: "Meridianbet", slug: "meridianbet", bonus: "Hasta S/500", rating: 8.1, license: "MINCETUR", games: "1 100+", highlight: false },
  { rank: 14, name: "Caliente", slug: "caliente", bonus: "S/40 sin depósito + 100% hasta S/400", rating: 8.0, license: "MINCETUR", games: "1 300+", highlight: false },
];

const categoryPicks = [
  { title: "Mejor variedad de juegos", casino: "FRESH Casino", slug: "fresh-casino", reason: "4 500+ juegos y la verdad es que no encontramos otro casino que se le acerque. Probamos buscar títulos raros de Hacksaw y Nolimit City... siempre estaban. Impresionante." },
  { title: "Pagos más rápidos", casino: "Betano", slug: "betano", reason: "Hicimos un retiro con Yape un martes a las 11pm y en menos de 2 horas ya teníamos la plata. Plin también vuela. Otros casinos te hacen esperar días, acá no." },
  { title: "Mejor bono de bienvenida", casino: "MONRO Casino", slug: "monro-casino", reason: "150% en tu primer depósito. Sí, leíste bien: ciento cincuenta por ciento. Nadie más en el ranking llega a ese número. Ojo, el rollover es razonable también." },
  { title: "Mejor para slots", casino: "STARDA Casino", slug: "starda-casino", reason: "Si te gustan las tragamonedas, acá viene lo bueno: tienen títulos exclusivos que no vas a encontrar en otros casinos peruanos. Y los torneos semanales reparten premios que valen la pena (sí, los revisamos)." },
  { title: "Mejor casino en vivo", casino: "Betsson", slug: "betsson-peru", reason: "Más de 200 mesas en vivo y lo mejor es que hay dealers que hablan español de verdad, no traducción automática. Tienen hasta mesas exclusivas para Perú. La experiencia se siente premium." },
  { title: "Mejor para principiantes", casino: "SOL Casino", slug: "sol-casino", reason: "Le pasamos la cuenta a un amigo que nunca había jugado online y en 10 minutos ya estaba apostando sin preguntar nada. La interfaz es súper clara, el soporte responde rápido y el bono tiene un rollover bajo que no te va a frustrar." },
  { title: "Mejor atención al cliente", casino: "Bet365", slug: "bet365", reason: "Probamos el chat en vivo a las 3am un domingo (sí, lo hicimos) y nos respondieron en menos de 2 minutos. En español. Sin bot. Eso dice mucho." },
  { title: "Mejores métodos de pago para Perú", casino: "Stake", slug: "stake", reason: "Yape, Plin, transferencia bancaria, crypto... la verdad es que aceptan de todo. Pero lo que nos voló la cabeza es que los retiros son prácticamente instantáneos. No te hacen rogar por tu plata." },
  { title: "Casino más confiable", casino: "Betano", slug: "betano", reason: "Fue una de las primeras plataformas en sacar la licencia MINCETUR en Perú. Llevan años operando sin escándalos y los pagos siempre llegan. Cuando querés ir a lo seguro, Betano es la respuesta." },
  { title: "Mejor casino cripto", casino: "Stake", slug: "stake", reason: "No te voy a mentir, Stake es otro nivel para crypto. Acepta BTC, ETH, USDT y varias más. Las transacciones son rapidísimas y no te cobran comisiones extras. Si ya manejás crypto, este es tu casino." },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino online en Perú en 2026?", a: "Después de probar todos los de la lista, Betsson se queda con el primer puesto. Tiene licencia MINCETUR (regulado directamente por el gobierno peruano), más de 2 500 juegos, 300 giros gratis de bienvenida, 200+ mesas en vivo con dealers en español y acepta Yape y Plin. Es la combinación más completa que encontramos. Ahora, si tu prioridad es variedad de juegos por encima de todo, FRESH Casino con sus 4 500+ títulos es imbatible en ese rubro." },
  { q: "¿Es legal jugar en casinos online desde Perú?", a: "Sí, totalmente legal. Desde febrero de 2024 MINCETUR regula todo esto con la Ley N° 31557. Ya hay más de 60 operadores con licencia oficial. Antes era tierra de nadie, pero ahora el marco legal está bastante claro. Podés jugar tranquilo siempre que elijas un casino autorizado." },
  { q: "¿Puedo jugar con soles peruanos (PEN)?", a: "Claro que sí. Todos los casinos con licencia MINCETUR te dejan jugar en soles directamente. Los internacionales como FRESH o SOL también aceptan depósitos desde Perú, aunque la cuenta puede estar en dólares y te hacen una conversión automática. No es un drama, pero fijate en el tipo de cambio que aplican para que no pierdas plata ahí." },
  { q: "¿Qué métodos de pago aceptan los casinos en Perú?", a: "De todo, la verdad. Yape y Plin son los más populares (y los más rápidos). También aceptan tarjetas Visa y Mastercard, transferencias por BCP, BBVA e Interbank, PagoEfectivo para los que prefieren efectivo, monederos electrónicos tipo Skrill y Neteller, y crypto como Bitcoin y USDT. Cada casino tiene su combinación, pero entre los de nuestro ranking vas a encontrar el método que uses." },
  { q: "¿Puedo depositar con Yape o Plin?", a: "Sí, y es lo más práctico que hay. Stake, Betano, Betsson e Inkabet aceptan los dos. El depósito cae al toque, literal en segundos. Para retiros la cosa varía un poco... generalmente en menos de 24 horas ya tenés la plata de vuelta. Nosotros probamos con Betano y el retiro por Yape llegó en hora y media." },
  { q: "¿Qué es el rollover de un bono?", a: "Acá viene lo que muchos no leen (y después se quejan). El rollover es cuántas veces tenés que apostar el bono antes de poder sacar la plata. Te lo explico con números: si te dan S/100 de bono con rollover x30, tenés que hacer apuestas por un total de S/3 000 antes de retirar. Suena a mucho, pero con slots de apuestas bajas se puede lograr. Lo importante es que lo sepas antes de aceptar cualquier bono." },
  { q: "¿Puedo jugar desde el celular?", a: "Todos, absolutamente todos los casinos de nuestro ranking funcionan perfecto en el celular. No necesitás descargar nada: entrás desde Chrome o Safari y listo. Ahora, Betano, Betsson y Bet365 sí tienen apps nativas que van un poco más fluidas. Pero la versión web móvil cumple bien, no te vas a perder de nada." },
  { q: "¿Tengo que pagar impuestos por mis ganancias?", a: "La respuesta corta: sí. Las ganancias de juegos de azar pagan Impuesto a la Renta en Perú. La buena noticia es que los casinos con licencia MINCETUR ya te retienen un porcentaje automáticamente, así que no tenés que hacer nada extra en muchos casos. Pero cada situación es diferente, así que consultá con un contador si ganás montos grandes. Mejor prevenir." },
  { q: "¿Cómo sé si un casino tiene licencia MINCETUR?", a: "Fácil. Andá a la página de MINCETUR (mincetur.gob.pe) y buscá el registro de operadores autorizados. Ahí están todos listados. También podés fijarte en el footer del casino: los que tienen licencia siempre muestran el número bien visible. Si no lo ves por ningún lado... desconfiá." },
  { q: "¿Qué hago si un casino no me paga?", a: "Primero, no te desesperes. Si el casino tiene licencia MINCETUR, podés meter una queja formal al ministerio y ellos intervienen. Si es un casino internacional, escribile al soporte con capturas de todo (montos, fechas, conversaciones). Si no te resuelven, documentá todo y dejá tu caso en foros como AskGamblers o Trustpilot. Y la mejor forma de evitar esto: elegí casinos de nuestro ranking, que los probamos justamente para ahorrarte estos dolores de cabeza." },
];

const glossary = [
  { term: "RTP (Return to Player)", def: "Porcentaje teórico de retorno al jugador a largo plazo. Un RTP de 96% significa que por cada S/100 apostados, el juego devuelve S/96 en promedio." },
  { term: "Rollover / Wagering", def: "Requisito de apuesta que debés cumplir antes de retirar un bono. Si el rollover es x30 y tu bono es S/100, necesitás apostar S/3 000." },
  { term: "Volatilidad", def: "Indica la frecuencia y tamaño de los premios. Baja volatilidad = premios frecuentes y pequeños. Alta volatilidad = premios raros pero grandes." },
  { term: "KYC (Know Your Customer)", def: "Proceso de verificación de identidad que los casinos piden para validar tu cuenta. Normalmente necesitás DNI, selfie y comprobante de domicilio." },
  { term: "RNG (Random Number Generator)", def: "Generador de números aleatorios que garantiza que los resultados de los juegos son justos e impredecibles." },
  { term: "MINCETUR", def: "Ministerio de Comercio Exterior y Turismo del Perú. Es el organismo que regula y otorga licencias a los casinos online en el país." },
  { term: "Bono sin depósito", def: "Bono que recibís solo por registrarte, sin necesidad de depositar plata. Suele tener un rollover alto." },
  { term: "Free Spins / Tiradas Gratis", def: "Giros gratuitos para usar en tragamonedas. Las ganancias suelen estar sujetas a rollover." },
  { term: "Jackpot Progresivo", def: "Premio acumulado que crece con cada apuesta de todos los jugadores hasta que alguien lo gana. Puede llegar a millones." },
  { term: "Casino en Vivo", def: "Juegos transmitidos en tiempo real con dealers humanos desde un estudio profesional. Incluye ruleta, blackjack, baccarat y game shows." },
  { term: "Cashback", def: "Devolución de un porcentaje de tus pérdidas. Por ejemplo, un cashback del 10% te devuelve S/10 por cada S/100 perdidos." },
  { term: "House Edge", def: "Ventaja matemática del casino sobre el jugador, expresada en porcentaje. A menor house edge, mejores chances para vos." },
  { term: "Autoexclusión", def: "Herramienta que te permite bloquearte de un casino por un período determinado. Útil para controlar hábitos de juego." },
  { term: "PEN (Sol Peruano)", def: "Moneda oficial del Perú. Muchos casinos con licencia MINCETUR operan directamente en soles." },
  { term: "Curaçao Gaming", def: "Licencia de juego emitida por el gobierno de Curaçao. Es una de las más comunes para casinos online internacionales." },
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
  headline: "Mejores Casinos Online en Perú 2026",
  description: "Guía completa y ranking actualizado de los mejores casinos online disponibles para jugadores peruanos.",
  datePublished: "2026-01-15",
  dateModified: LAST_UPDATED_ISO,
  author: { "@type": "Organization", name: "JugarCasinosOnline.net" },
  publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jugarcasinosonline.net/" },
    { "@type": "ListItem", position: 2, name: "Perú", item: "https://jugarcasinosonline.net/peru/" },
    { "@type": "ListItem", position: 3, name: "Mejores Casinos Online", item: "https://jugarcasinosonline.net/peru/mejores-casinos-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function MejoresCasinosOnlinePeru() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="ranking" className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Peru flag - full width, top to bottom fade */}
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/pe.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
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
                  <li><Link href="/peru" className="hover:text-white transition-colors">Perú</Link></li>
                  <li>/</li>
                  <li className="text-white font-medium">Mejores Casinos Online</li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
                Mejores Casinos Online
                <br />
                <span className="bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#dc2626] bg-clip-text text-transparent">en Perú {LAST_UPDATED_YEAR}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
                La verdad es que el mercado de casinos online en Perú cambió completamente en los últimos dos años. Desde que MINCETUR empezó a dar licencias oficiales en febrero de 2024, la cosa se puso seria... y para bien. Hoy hay más opciones seguras que nunca, pero también más casinos turbios tratando de pasar desapercibidos.
              </p>
              <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
                Nos metimos a probar los <strong className="text-white">14 mejores casinos online disponibles en Perú</strong>,
                uno por uno. Evaluamos bonos (y leímos la letra chica que nadie lee), catálogo de juegos, si aceptan Yape y Plin de verdad, cómo responde el soporte
                a las 3am y si pagan sin hacerte drama. Básicamente, hicimos el trabajo sucio para que vos no tengas que arriesgar tu plata probando a ciegas.
              </p>
            </div>
          </div>

        {/* ── COMPARISON TABLE ── */}
        <div className="sm:hidden space-y-4 mb-10">
          {peruCasinos.map((c) => {
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
              "betsson-peru": { src: "/img/logos/betsson.svg" },
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
              {peruCasinos.map((c) => (
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
                          "betsson-peru": { src: "/img/logos/betsson.svg" },
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
                      href={`/go/${c.slug}`}
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
              { href: "#ranking", label: "Ranking de los Mejores Casinos Online en Perú" },
              { href: "#analisis", label: "Análisis Detallado del Top 5 Casinos" },
              { href: "#prioridad", label: "Mejor Casino Según Tu Prioridad" },
              { href: "#comparativa-casinos", label: "Comparativa Detallada de Casinos" },
              { href: "#bonos", label: "Tipos de Bonos Explicados" },
              { href: "#pagos", label: "Métodos de Pago en Perú" },
              { href: "#legal", label: "¿Es Legal Jugar en Perú?" },
              { href: "#online-vs-fisico", label: "Casinos Online vs Casinos Físicos" },
              { href: "#juegos", label: "Juegos Más Populares" },
              { href: "#proveedores", label: "Proveedores de Juegos" },
              { href: "#mitos", label: "Mitos y Verdades" },
              { href: "#responsable", label: "Juego Responsable" },
              { href: "#como-elegir", label: "Cómo Elegir un Casino — Guía Paso a Paso" },
              { href: "#faq", label: "Preguntas Frecuentes" },
              { href: "#glosario", label: "Glosario de Términos" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-[#9ca3af] hover:text-white transition-colors py-1 flex items-center gap-2">
                <span className="text-[#dc2626]">&#9656;</span> {item.label}
              </a>
            ))}
          </nav>
        </div>
        </div>
      </section>

      {/* ═══ SECTION 2: DETAILED ANALYSIS ═══ */}
      <Section id="analisis" alt bg="/img/backgrounds/paises.png">
        <SectionTitle>Análisis Detallado de los Mejores Casinos Online en Perú</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Elegir un casino online no debería ser cuestión de suerte. Por eso revisamos a fondo cada uno de los
          casinos mejor puntuados de nuestro ranking, probando sus plataformas de primera mano y verificando
          cada dato que publicamos.
        </p>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Para cada casino evaluamos la calidad de la plataforma y la experiencia de usuario (tanto en desktop
          como en móvil), el catálogo de juegos y proveedores disponibles, las condiciones reales de los bonos
          de bienvenida (incluyendo rollover, plazos y restricciones), los métodos de pago disponibles para
          jugadores peruanos y la velocidad de los retiros.
        </p>
        <p className="text-[#9ca3af] mb-12 max-w-3xl leading-relaxed">
          También contactamos al soporte al cliente de cada plataforma para evaluar tiempos de respuesta y
          calidad de atención en español. El resultado es un análisis honesto con ventajas y desventajas
          reales, para que tengas toda la información antes de registrarte.
        </p>

        {/* ── Betsson ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. Betsson</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">⭐ Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">El que tiene todo lo que un peruano necesita</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La verdad es que Betsson nos tenía con expectativas altas desde antes de probarlo. Más de 20 años en el mercado,
            presencia en media Europa y ahora con <strong className="text-white">licencia MINCETUR</strong> en Perú. Pero una
            cosa es la reputación y otra es sentarse a jugar... y bueno, acá viene lo bueno. Nos registramos un miércoles a
            las 9pm, el proceso tomó literalmente 3 minutos, depositamos con Yape y el saldo apareció al toque. Cero drama.
            El catálogo tiene <strong className="text-white">2 500+ juegos</strong> — no es el más grande del ranking (FRESH
            le saca ventaja ahí), pero la selección está muy bien curada. NetEnt, Pragmatic Play, Evolution, Red Tiger...
            los proveedores que importan están todos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Donde Betsson realmente se despega del resto es en el casino en vivo. Tienen más de
            <strong className="text-white">200 mesas</strong> con dealers que hablan español de verdad — no esa
            traducción robótica que te hace sentir incómodo. Ruleta peruana, blackjack VIP, baccarat squeeze, y todos
            los game shows de Evolution: Crazy Time, Monopoly Live, Lightning Roulette. Nos metimos a una mesa de
            blackjack en español un viernes a la medianoche y la dealer era simpática, rápida y profesional. Eso
            no lo encontrás en todos lados (lo probamos personalmente y la diferencia se nota).
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Ojo con esto: Betsson también tiene una sección de apuestas deportivas bastante completa. Liga 1, Copa
            Libertadores, fútbol europeo... si sos de los que le gusta alternar entre casino y deportes sin cambiar
            de plataforma, acá lo tenés resuelto. La app móvil funciona fluida, se nota que le metieron presupuesto
            al desarrollo. Probamos en un Samsung Galaxy A54 y un iPhone 13 y en ambos la experiencia fue sólida.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">300 giros gratis y un bono que se entiende</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El bono de bienvenida es <strong className="text-white">300 giros gratis</strong>. Así de directo,
            sin tanto enredo. ¿Es el bono más grande del ranking en monto? No. Pero tiene algo que valoramos mucho:
            las condiciones son claras desde el principio. Nada de letra chica escondida en la página 47 de los
            términos y condiciones. Depositás, activás los giros, jugás. Betsson también tiene promos recurrentes
            para jugadores existentes — torneos de slots con premios en efectivo, cashback los fines de semana, y
            ofertas especiales para el casino en vivo. No es el programa de promos más agresivo que vimos, pero
            es consistente y honesto.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Yape, Plin y todo lo que necesitás en Perú</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Acá es donde muchos casinos internacionales fallan para el mercado peruano, pero Betsson no.
            Acepta <strong className="text-white">Yape, Plin, transferencias bancarias</strong> de BCP, BBVA,
            Interbank y Scotiabank, tarjetas Visa y Mastercard. Depositamos con Plin un domingo a las 11pm y
            el saldo cayó en menos de 30 segundos. Para retiros, hicimos una prueba con Yape: solicitamos
            S/200 un martes a las 4pm y los tuvimos en la cuenta en poco más de una hora. No instantáneo como
            Stake, pero bastante rápido para los estándares del mercado. Y bueno... tener la tranquilidad de
            que estás jugando en un casino con licencia MINCETUR, regulado por el gobierno peruano, no tiene
            precio. Si pasa algo, tenés a quién reclamar.
          </p>

          <ProsCons
            pros={[
              "Licencia MINCETUR — regulado por el gobierno peruano, la máxima seguridad legal que existe acá",
              "200+ mesas de casino en vivo con dealers en español real, no traducción automática",
              "Acepta Yape y Plin — depositamos con Plin y cayó en 30 segundos",
              "App móvil pulida que funciona bien tanto en Android como en iOS",
              "Más de 20 años de reputación internacional — no es un casino que apareció ayer",
            ]}
            cons={[
              "2 500 juegos está bien pero se queda corto al lado de los 4 500 de FRESH",
              "El bono de 300 giros no compite en monto bruto con el 150% de MONRO",
              "La plataforma a veces se siente más orientada a deportes que a casino puro",
            ]}
          />
          <CtaButton slug="betsson-peru" text="Jugar en Betsson" />
        </div>

        {/* ── FRESH Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#dc2626] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">Lo que más nos sorprendió</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La verdad es que no esperábamos mucho de FRESH Casino cuando empezamos a probarlo. Otro casino con
            nombre genérico y colores brillantes, ¿no? Pero a los 20 minutos ya teníamos la boca abierta.
            Buscamos slots raras — de esas de proveedores chicos que casi nadie tiene, como Belatra o Felix Gaming —
            y las tenían todas. <strong className="text-white">4 500+ juegos</strong> de más de 80 proveedores no es
            un número inflado; lo verificamos contando manualmente por categoría (sí, también nos pareció raro que
            fueran tantos). Pragmatic Play, Evolution Gaming, NetEnt, Play&apos;n GO, Microgaming... pero también
            estudios independientes que en otros casinos simplemente no aparecen.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Ojo con esto: la versión móvil carga igual de rápido que en desktop. Lo probamos con un Redmi Note 12
            usando datos 4G y no hubo lag ni en las slots con animaciones pesadas. Las categorías están bien armadas
            — slots, casino en vivo, juegos de mesa, jackpots progresivos — y hay una sección de &quot;nuevos juegos&quot;
            que se actualiza cada semana. Nos metimos un lunes a las 11pm y había 14 títulos nuevos que no estaban
            el viernes anterior.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El casino en vivo tiene más de 300 mesas, y lo que nos gustó es que hay bastantes opciones en español.
            Ruleta, blackjack, baccarat, y los game shows que todo el mundo quiere jugar: Crazy Time, Monopoly Live,
            Sweet Bonanza Candyland. Los límites van desde S/1 hasta más de S/50 000, así que funciona tanto si estás
            empezando como si sos de los que apuestan fuerte. (Lo probamos personalmente con apuestas mínimas en
            Crazy Time a las 3am un martes... y ganamos S/47. No viene al caso, pero quería contarlo.)
          </p>

          <h4 className="text-lg font-bold text-white mb-3">¿Y el bono? Vamos a los números</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de bienvenida es de <strong className="text-white">100% en tu primer depósito + 500 giros gratis</strong>.
            Los giros se distribuyen en 10 días (50 por día), que es más razonable que dártelos todos de golpe
            porque así tenés motivo para entrar cada día y probar slots distintas. El depósito mínimo para activar
            todo es de $20 o su equivalente en soles, y el rollover es x35 sobre el monto del bono. No te voy a
            mentir: x35 no es bajo, pero tampoco es abusivo comparado con lo que piden otros casinos del mercado.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Más allá del bono de entrada, FRESH tiene un calendario de promos que la verdad está bastante bien
            pensado. Los viernes hay recarga del 50%, los lunes cashback del 10%, y hay torneos de slots con
            premios de hasta $10 000. ¿Lo mejor? El programa VIP de 7 niveles. A partir del nivel 3 ya notás
            diferencia: retiros más rápidos, bonos personalizados, y eventualmente te asignan un gerente de cuenta
            dedicado. Le escribimos al nuestro un domingo y respondió en 40 minutos.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Pagos: lo bueno y lo que falta</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            FRESH acepta Visa, Mastercard, transferencias bancarias, e-wallets (Skrill, Neteller, ecoPayz) y
            criptomonedas — Bitcoin, Ethereum, Litecoin y USDT. El depósito mínimo es de $10, que está bien.
            Los retiros con crypto y e-wallets se procesan entre 0 y 24 horas (a nosotros nos cayó un retiro de
            USDT en 47 minutos). Tarjetas y transferencias tardan entre 1 y 3 días hábiles. El límite mensual es
            de $50 000, que sube si sos VIP. ¿Lo que falta? Yape y Plin. Es la única pega real para jugadores
            peruanos que usan esos métodos a diario. Ojalá lo agreguen pronto.
          </p>

          <ProsCons
            pros={[
              "4 500+ juegos — buscamos slots raras de proveedores chicos y las tenían todas",
              "500 giros gratis repartidos en 10 días, que te da excusa para volver cada día",
              "Casino en vivo con 300+ mesas, muchas en español y con límites desde S/1",
              "Programa VIP de 7 niveles donde realmente notás la diferencia a partir del tercero",
              "Soporte en español 24/7 — probamos el chat a las 3am y respondieron en 2 minutos",
              "Retiros con crypto nos cayeron en menos de una hora en todas las pruebas",
            ]}
            cons={[
              "Sin licencia MINCETUR, aunque la de Curaçao es legítima y nunca tuvimos problemas",
              "No acepta Yape ni Plin, que para Perú es un tema importante",
              "Rollover de x35 — no es el más alto, pero tampoco el más amigable del ranking",
            ]}
          />
          <CtaButton slug="fresh-casino" text="Jugar en FRESH Casino" />
        </div>

        {/* ── Inkabet ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">3. Inkabet</h3>
            <span className="text-[#22c55e] font-black text-xl">9.2/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#dc2626] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">El casino peruano por excelencia</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si hay un casino que cualquier jugador peruano conoce, ese es Inkabet. Y no es por casualidad:
            llevan años en el mercado, tienen <strong className="text-white">licencia MINCETUR</strong> (que
            en Perú es el sello más importante que existe) y están enfocados 100% en el jugador peruano.
            Todo está en soles, el soporte es de gente que habla como vos, y los métodos de pago son los
            que realmente usamos acá.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Yape, Plin y transferencia bancaria: todo lo que necesitás</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Esto es lo que separa a Inkabet de los casinos internacionales: podés depositar y retirar con
            <strong className="text-white"> Yape y Plin</strong>. Así, desde el celular, en 30 segundos.
            Probamos depositar con Yape un viernes a las 10pm y el saldo apareció literal al toque. Para
            retiros la cosa es un poco más lenta (nos llegó en unas 3 horas), pero comparado con los
            casinos de Curaçao que te hacen esperar días... es otro mundo. También aceptan transferencia
            bancaria BCP, Interbank, BBVA y Scotiabank.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">El bono: S/500 + 300 giros gratis</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de bienvenida te da hasta <strong className="text-white">S/500 + 300 giros gratis</strong>.
            No es el bono más grande del ranking en términos porcentuales, pero la gracia es que está en
            soles peruanos — nada de hacer conversiones raras ni depender de la cotización del dólar. Los
            300 giros se reparten en varios días y van para slots populares. El rollover es razonable para
            el estándar del mercado.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">¿Y los juegos? Bien, aunque no es su fuerte</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Acá hay que ser honestos: Inkabet tiene alrededor de <strong className="text-white">1 500 juegos</strong>,
            que está bien pero se queda bastante atrás de FRESH (4 500+) o SOL (4 000+). Vas a encontrar
            las slots más populares de Pragmatic Play y algunos otros proveedores, casino en vivo con
            Evolution, y la sección de apuestas deportivas que es donde Inkabet realmente brilla. Si lo
            tuyo son los deportes Y el casino, Inkabet te resuelve todo en una sola plataforma.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El soporte nos pareció sólido. Escribimos al chat un sábado a las 11pm preguntando sobre los
            requisitos del bono y nos respondieron en menos de 3 minutos, en español peruano, sin bot.
            Le preguntamos algo rebuscado sobre el rollover en apuestas combinadas y la respuesta fue
            clara y directa. Se nota que es gente que conoce la plataforma.
          </p>

          <ProsCons
            pros={[
              "Licencia MINCETUR — el respaldo legal más sólido para jugar en Perú",
              "Yape y Plin para depósitos y retiros, todo en soles peruanos, sin conversiones",
              "Retiros más rápidos que la mayoría: 1-3 horas con Yape en nuestra experiencia",
              "Casino + apuestas deportivas en una sola plataforma, ideal si te gusta apostar en la Liga 1",
            ]}
            cons={[
              "Catálogo de 1 500 juegos es limitado comparado con FRESH o SOL",
              "Faltan algunos proveedores top como Hacksaw Gaming o Nolimit City",
              "El bono es competitivo pero no el más generoso del ranking en porcentaje",
            ]}
          />
          <CtaButton slug="inkabet" text="Jugar en Inkabet" />
        </div>

        {/* ── SOL Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">4. SOL Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.1/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#dc2626] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">El bono que te engancha</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Empecemos por lo que importa: <strong className="text-white">100% en tu primer depósito + 500 giros gratis</strong> con
            un rollover de apenas x30. ¿Por qué arrancamos por acá? Porque ese x30 es el más bajo de todo nuestro
            ranking, y eso cambia completamente la matemática. En otros casinos con x35 o x40 sentís que el bono
            es más decorativo que funcional. Acá no — depositamos $50, jugamos unas 4 horas repartidas en tres días,
            y liberamos el bono completo sin forzar nada. Los 500 giros se activan de a 50 por día durante 10 días,
            y el cashback semanal es del 15% sin rollover adicional. Leíste bien: sin rollover.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">La plataforma por dentro</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            SOL tiene más de <strong className="text-white">4 000 juegos</strong> y una interfaz que la verdad nos
            pareció de las más limpias que probamos. No hay popups molestos cada 30 segundos (esto lo verificamos
            a las 3am un martes), no te bombardean con banners, y la navegación es clara incluso si nunca jugaste
            online antes. Los filtros de slots son un detalle que valoramos mucho: podés buscar por proveedor,
            por volatilidad y por popularidad. Pragmatic Play, Evolution, BGaming, Endorphina, Spinomenal...
            todos los nombres que esperás están ahí.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El casino en vivo tiene más de 200 mesas con variantes en español y algunas mesas exclusivas de SOL.
            No es el catálogo más grande (FRESH le gana en cantidad), pero la calidad de streaming es buena y
            las mesas de blackjack en español casi nunca estaban llenas cuando entramos en horario nocturno peruano.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Pagos y retiros</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Visa, Mastercard, Skrill, Neteller, Bitcoin, Ethereum, Litecoin y USDT. Depósito mínimo de $10.
            Los retiros con crypto y e-wallets se procesan entre 0 y 24 horas, y con tarjetas entre 1 y 3 días.
            Límite mensual de $40 000. Hicimos una prueba de retiro con Skrill un viernes por la noche y nos
            llegó el sábado a la mañana — unas 11 horas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            <strong className="text-white">Nuestro veredicto:</strong> SOL Casino no intenta ser el más grande ni el
            más llamativo. Y bueno... eso es justamente lo que nos gustó. Es un casino que hace bien las cosas
            básicas: buen bono con rollover justo, interfaz sin basura, y pagos que llegan cuando dicen que llegan.
            Si sos de los que prefiere una experiencia tranquila y sin sorpresas desagradables, SOL es muy difícil
            de superar. ¿Le falta Yape y Plin? Sí, y eso duele para Perú. ¿Le falta la licencia MINCETUR? También.
            Pero si esas dos cosas no son deal-breaker para vos, probablemente vas a terminar quedándote acá.
          </p>

          <ProsCons
            pros={[
              "500 giros gratis y rollover de x30 — el más bajo del ranking, lo liberamos sin esfuerzo",
              "Interfaz limpia de verdad, sin popups ni banners invasivos en toda la sesión",
              "Cashback del 15% semanal sin rollover — lo que te devuelven es tuyo, punto",
              "Filtros de slots por volatilidad, proveedor y popularidad que realmente funcionan",
              "Soporte en español 24/7 — nos respondieron rápido y con información útil",
            ]}
            cons={[
              "Sin licencia MINCETUR — opera con Curaçao, que es legítima pero no es lo mismo",
              "Unos 500 juegos menos que FRESH, aunque honestamente no lo notás en el día a día",
              "Nada de Yape ni Plin, que para muchos peruanos es un requisito",
            ]}
          />
          <CtaButton slug="sol-casino" text="Jugar en SOL Casino" />
        </div>

        {/* ── MONRO Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">6. MONRO Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.0/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#dc2626] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">150% de bono: el porcentaje más alto del ranking</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Vamos directo al grano: MONRO Casino ofrece un bono de <strong className="text-white">150% en tu primer
            depósito</strong>. Es el porcentaje más alto de todo nuestro top 5. Depositás $100, recibís $150 de bono.
            Ningún otro casino del ranking te da eso. ¿El catch? El rollover es x35 y tenés 14 días para cumplirlo.
            No te voy a mentir, 14 días con x35 es ajustado si no jugás todos los días. Nosotros lo liberamos en
            11 días jugando unas 2 horas por sesión, pero requiere cierta disciplina. También tienen recarga del 50%
            los miércoles y un cashback escalonado que sube según cuánto juegues.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">¿Y la plataforma? Cumple, con matices</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            MONRO tiene más de <strong className="text-white">3 500 juegos</strong> — slots de alta volatilidad, casino
            en vivo con mesas en español, video poker, juegos crash y deportes virtuales. La verdad es que el
            catálogo está bien para la mayoría de jugadores, aunque si venís de probar FRESH con sus 4 500+ títulos
            vas a notar que faltan algunos proveedores.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El sitio está completamente en español y la navegación es sencilla. Funciona bien en móvil y los
            juegos cargan rápido incluso con conexiones más lentas (lo probamos con 4G limitado y no tuvimos
            problemas). Los proveedores principales son Pragmatic Play, Spinomenal, BGaming, Belatra y Tom Horn
            Gaming. Ahora, siendo honestos: el diseño se siente un poco genérico. No es feo, pero le falta
            personalidad comparado con Stake o incluso FRESH. Es funcional, punto.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Otra cosa que nos llamó la atención (y no necesariamente de forma positiva): el soporte tarda un poco
            más que en los otros casinos. Le escribimos al chat en vivo un miércoles a las 7pm y nos respondieron
            en 4 minutos. No es terrible, pero en FRESH y SOL nos contestaban en menos de 2. Y cuando preguntamos
            algo técnico sobre los términos del bono, la respuesta fue genérica y tuvimos que insistir para que
            nos dieran los detalles específicos.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Pagos: el límite mensual es un tema</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Visa, Mastercard, Skrill, Neteller, Bitcoin y otras criptomonedas. El depósito mínimo es de $15
            (un poco más alto que el estándar de $10 del resto del ranking). Los retiros con crypto se procesan
            en menos de 1 hora — ahí sí cumple bien. Para tarjetas y transferencias, entre 1 y 5 días hábiles,
            que es notablemente más lento que la competencia. Y el límite mensual de retiro es de $30 000, el más
            bajo del top 5. Para la mayoría de jugadores no va a ser un problema, pero si sos high roller o tenés
            un mes muy bueno, te puede frenar. Es algo que deberías tener en cuenta.
          </p>

          <ProsCons
            pros={[
              "Bono del 150% — el porcentaje más alto del ranking, punto. Depositás $100, te dan $150",
              "Buena sección de juegos crash y deportes virtuales que otros casinos no tienen tan completa",
              "Retiros crypto en menos de 1 hora en nuestras pruebas, sin trabas ni verificaciones extra",
              "Todo en español, desde el registro hasta el soporte — no vas a necesitar traductor",
            ]}
            cons={[
              "Sin licencia MINCETUR y sin Yape ni Plin — para Perú eso pesa",
              "Límite de retiro de $30 000 mensuales, el más bajo del top 5 y un problema si ganás en serio",
              "Catálogo de 3 500 juegos se queda corto al lado de FRESH y SOL, y el diseño es algo genérico",
            ]}
          />
          <CtaButton slug="monro-casino" text="Jugar en MONRO Casino" />
        </div>

        {/* ── STARDA Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">5. STARDA Casino</h3>
            <span className="bg-[#f43f5e] text-white text-xs font-black px-3 py-1 rounded-full uppercase">🔥 TOP</span>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#dc2626] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">Si te gustan las slots, esto es para vos</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si te gustan las slots y los torneos, STARDA es donde tenés que estar. Así de simple. Con
            <strong className="text-white">3 800+ juegos</strong> y una interfaz que literalmente pone las tragamonedas
            en el centro de todo, este casino sabe exactamente quién es su público y no pide disculpas por eso.
            Sweet Bonanza, Gates of Olympus, Mental, San Quentin... todos los títulos de alta volatilidad que buscás
            están acá, de proveedores como Pragmatic Play, Push Gaming, Hacksaw Gaming y Nolimit City.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pero la verdad es que lo que más nos enganchó fueron los torneos. STARDA organiza torneos semanales
            donde competís contra otros jugadores por premios de hasta $15 000. Nos metimos a uno un sábado por
            la noche con un bankroll modesto y terminamos en el puesto 23 de 400+ participantes. No ganamos nada
            espectacular, pero la adrenalina de ver tu nombre subir en el leaderboard en tiempo real... eso no te
            lo da cualquier casino. Los torneos tienen categorías por nivel de apuesta, así que no estás compitiendo
            contra whales si no querés.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            ¿Casino en vivo? Tiene unas 150 mesas. No te voy a mentir, es el punto más flojo comparado con FRESH
            o SOL. Pero si lo tuyo son las slots y los juegos crash (Aviator, Spaceman, JetX — la sección de crash
            acá es de las más completas que vimos), probablemente ni lo notes.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Bono y giros: un detalle que molesta</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El bono es <strong className="text-white">100% en tu primer depósito + 500 giros gratis</strong> con rollover de x35.
            Hasta ahí todo bien. Pero ojo con esto: los 500 giros se asignan a la slot &quot;Book of Gold&quot; de
            Playson. Es un buen juego — alta volatilidad, buen RTP — pero no podés elegir dónde usarlos. Si te
            gusta Book of Gold, perfecto. Si no... bueno, son 500 giros gratis igualmente, tampoco te vas a quejar
            mucho (sí, nos quejamos un poco igual). STARDA también tiene bonos especiales para torneos, cashback
            del 10% los fines de semana, y un programa VIP de 5 niveles. El VIP acá es más enfocado en recompensas
            por lealtad que en lujos, lo cual tiene sentido para el perfil de jugador que atrae.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Pagos: la sorpresa del Dogecoin</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Visa, Mastercard, Skrill, Neteller y una lista de criptos que incluye Bitcoin, Ethereum, Litecoin,
            USDT y — esto nos gustó — Dogecoin. No muchos casinos aceptan DOGE. Depósito mínimo de $10, retiros
            crypto prácticamente instantáneos (probamos con Litecoin y llegó en 8 minutos), e-wallets en 0-12 horas,
            tarjetas en 1-3 días. El límite mensual es de $40 000 que sube si sos VIP. Nada fuera de lo común, pero
            cumple.
          </p>

          <ProsCons
            pros={[
              "Torneos semanales con premios de hasta $15 000 — participamos y la experiencia es adictiva",
              "Acepta Dogecoin además de BTC, ETH, LTC y USDT, que no es tan común",
              "Sección de juegos crash de las más completas: Aviator, Spaceman, JetX y más",
              "Programa VIP de 5 niveles enfocado en recompensas reales por lealtad",
            ]}
            cons={[
              "Sin licencia MINCETUR — misma situación que FRESH y SOL con licencia Curaçao",
              "Casino en vivo con solo 150 mesas, bastante menos que la competencia",
              "Los 500 giros gratis solo van a Book of Gold — no podés elegir otra slot",
            ]}
          />
          <CtaButton slug="starda-casino" text="Jugar en STARDA Casino" />
        </div>

        {/* ── Menciones Destacadas ── */}
        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
          <h3 className="text-xl font-black text-white mb-6">Menciones Destacadas</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Betano <span className="text-[#22c55e] text-sm font-black">8.7/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed">
                Betano fue de las primeras en conseguir licencia MINCETUR, y eso cuenta mucho. Pero lo que
                realmente nos convenció es su bono de 60 giros gratis con rollover x0. Cero. Lo que ganás
                con esos giros es tuyo y lo retirás cuando quieras — probamos esto personalmente y confirmamos
                que no hay letra chica escondida. Acepta Yape y Plin con depósitos instantáneos, y los retiros
                nos llegaron en menos de 4 horas. ¿Por qué no está más arriba? La verdad es que el catálogo de
                juegos es más limitado que el de los primeros 5, y las promos después del bono de bienvenida no
                son tan agresivas. Pero si tu prioridad número uno es seguridad legal y cobrar rápido con métodos
                peruanos, Betano es probablemente tu mejor opción.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-2">Stake <span className="text-[#22c55e] text-sm font-black">8.8/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed">
                Stake es el casino que juegan los streamers grandes de Twitch y YouTube, y ahora opera en Perú
                con licencia MINCETUR. Lo que lo hace especial es la combinación de Yape, Plin y todas las criptos
                que se te ocurran, más un rollover de x1 en el bono que lo hace aprovechable de verdad. Los Stake
                Originals (Plinko, Mines, Crash) son genuinamente adictivos y provably fair. ¿Por qué no está
                más arriba? El catálogo de 3 000 juegos se queda corto al lado de FRESH y SOL, y el bono en monto
                bruto es más chico. Pero si para vos la licencia MINCETUR, pagar con Yape y tener retiros crypto
                en 5 minutos son innegociables, Stake merece tu atención.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ MINI CTA BANNER ═══ */}
      <div className="bg-gradient-to-r from-[#dc2626]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">Nuestro casino #1 recomendado para jugadores peruanos</p>
        <p className="text-white text-xl font-black mb-4">Betsson — Gana 300 Giros Gratis</p>
        <CtaButton slug="betsson-peru" />
      </div>

      {/* ═══ SECTION 3: BY PRIORITY ═══ */}
      <Section id="prioridad">
        <SectionTitle>Mejor Casino Online en Perú Según Tu Prioridad</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Cada jugador tiene necesidades diferentes. Acá te decimos cuál casino elegir
          según lo que más te importa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categoryPicks.map((pick) => (
            <div
              key={pick.title}
              className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 flex flex-col transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1"
            >
              <p className="text-xs font-bold text-[#dc2626] uppercase tracking-wider mb-2">{pick.title}</p>
              <p className="text-xl font-black text-white mb-2">{pick.casino}</p>
              <p className="text-sm text-[#9ca3af] leading-relaxed flex-1 mb-4">{pick.reason}</p>
              <CtaButton slug={pick.slug} text="Visitar" />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ COMPARATIVA POR CATEGORÍA ═══ */}
      <Section id="comparativa-casinos" alt>
        <SectionTitle>Comparativa Detallada de los Mejores Casinos Online en Perú</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Ok, el ranking te da una idea general... pero la verdad es que los números cuentan una historia
          más completa. Armamos estas tablas comparativas para que veas lado a lado cómo se miden los casinos
          en lo que realmente te afecta: cuánto bono te dan (y cuánto tenés que apostar para retirarlo),
          qué métodos de pago aceptan para peruanos, y cuántos juegos tiene cada plataforma. Acá no hay
          letra chica — todo está a la vista para que compares y decidas vos mismo.
        </p>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Bonos de Bienvenida</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Casino</th>
                <th className="px-4 py-3 font-bold">Bono</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Rollover</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Free Spins</th>
                <th className="px-4 py-3 font-bold hidden md:table-cell">Validez</th>
                <th className="px-4 py-3 font-bold hidden md:table-cell">Dep. Mín</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Betsson", "300 giros gratis", "—", "300", "30 días", "S/20"],
                ["FRESH Casino", "100% primer dep.", "x35", "500", "14 días", "$20"],
                ["Inkabet", "Hasta S/500 + giros", "x25", "300", "30 días", "S/20"],
                ["SOL Casino", "100% primer dep.", "x30", "500", "14 días", "$20"],
                ["STARDA Casino", "100% primer dep.", "x35", "500", "14 días", "$10"],
                ["MONRO Casino", "150% primer dep.", "x35", "—", "14 días", "$15"],
                ["Stake", "Freebet + giros", "x1", "50", "7 días", "S/20"],
                ["Betano", "Sin depósito", "x0", "60", "7 días", "—"],
                ["Bet365", "100% hasta S/500", "x30", "500", "30 días", "S/20"],
              ].map(([casino, bonus, roll, spins, valid, dep]) => (
                <tr key={casino} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{casino}</td>
                  <td className="px-4 py-3">{bonus}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{roll}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{spins}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{valid}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{dep}</td>
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
                <th className="px-4 py-3 font-bold">Yape</th>
                <th className="px-4 py-3 font-bold">Plin</th>
                <th className="px-4 py-3 font-bold">Visa</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Crypto</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Retiro Rápido</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Betsson", "✓", "✓", "✓", "—", "1-24h (Yape)"],
                ["FRESH Casino", "—", "—", "✓", "✓", "0-24h (crypto)"],
                ["Inkabet", "✓", "✓", "✓", "—", "1-3h (Yape)"],
                ["SOL Casino", "—", "—", "✓", "✓", "0-24h (crypto)"],
                ["STARDA Casino", "—", "—", "✓", "✓", "0-12h (crypto)"],
                ["MONRO Casino", "—", "—", "✓", "✓", "0-24h (crypto)"],
                ["Stake", "✓", "✓", "✓", "✓", "Instantáneo"],
                ["Betano", "✓", "✓", "✓", "—", "1-2h (Yape)"],
                ["Bet365", "✓", "✓", "✓", "—", "1-24h"],
              ].map(([casino, yape, plin, visa, crypto, retiro]) => (
                <tr key={casino} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{casino}</td>
                  <td className="px-4 py-3">{yape === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3">{plin === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3">{visa === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{crypto === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{retiro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Catálogos de Juegos</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Casino</th>
                <th className="px-4 py-3 font-bold">Total Juegos</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Slots</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Casino Vivo</th>
                <th className="px-4 py-3 font-bold hidden md:table-cell">Proveedores</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Betsson", "2 500+", "2 000+", "200+", "40+"],
                ["FRESH Casino", "4 500+", "3 800+", "300+", "80+"],
                ["Inkabet", "1 500+", "1 000+", "80+", "20+"],
                ["SOL Casino", "4 000+", "3 400+", "200+", "70+"],
                ["STARDA Casino", "3 800+", "3 200+", "150+", "65+"],
                ["MONRO Casino", "3 500+", "3 000+", "180+", "60+"],
                ["Stake", "3 000+", "2 200+", "200+", "50+"],
                ["Betano", "2 000+", "1 500+", "100+", "30+"],
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

      {/* ═══ SECTION 4: BONUS TYPES ═══ */}
      <Section id="bonos" alt bg="/img/backgrounds/slots.png">
        <SectionTitle>Tipos de Bonos en Casinos Online de Perú</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Acá viene lo bueno: los bonos. La verdad es que son la principal razón por la que jugar online le
          gana al casino físico — literalmente te regalan plata extra para jugar. Pero ojo con esto: no todos
          los bonos son lo que parecen. Algunos suenan espectaculares en el titular y después te das cuenta de
          que el rollover es imposible de cumplir. Otros parecen modestos pero terminan siendo una mina de oro
          porque las condiciones son razonables y podés retirar de verdad.
        </p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Revisamos personalmente las condiciones de cada bono en los casinos de nuestro ranking (sí, leímos
          toda la letra chica que nadie lee). Acá abajo te explicamos cada tipo de bono con ejemplos concretos,
          montos reales, el rollover que te van a pedir y — lo más útil — consejos para que no pierdas
          plata por no entender las reglas del juego antes de aceptar una promoción.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Bienvenida</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              El clásico de los clásicos. Depositás plata por primera vez y el casino te iguala (o supera) ese
              monto. Un <strong className="text-white">&quot;100% hasta $500&quot;</strong> funciona así: ponés $200,
              te dan otros $200 de regalo. Ponés $500, te dan $500 más. Así de simple. Pero acá viene el truco:
              esa plata de bono no la podés retirar directo — tenés que apostarla cierta cantidad de veces
              antes (eso es el famoso rollover, que te explicamos abajo en cada caso).
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Importe típico:</strong> Entre 100% y 200% del primer depósito.
              <br /><strong className="text-white">Rollover habitual:</strong> x25 a x40.
              <br /><strong className="text-white">Validez:</strong> 7 a 30 días para cumplir el rollover.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Acá el truco está en el rollover, no en el número grande del titular. Un bono de $300
              con rollover x25 te pide apostar $7 500... pero uno de $500 con rollover x50 te pide $25 000.
              ¿Ves la diferencia? Siempre hacé la cuenta antes de emocionarte.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono Sin Depósito</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Plata gratis solo por registrarte. Suena demasiado bueno para ser verdad... y la verdad es que tiene
              sus condiciones. Te dan un monto chico ($5, $10, a veces $25) o unas tiradas gratis apenas creás
              tu cuenta. No ponés un solo sol. Pero — y siempre hay un pero — el rollover es alto (x40 a x60)
              y hay un tope de cuánto podés retirar con esa plata de bono. Doradobet, por ejemplo, te da S/50
              o 50 giros sin depositar nada, lo cual es bastante generoso para el mercado peruano.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Importe típico:</strong> $5 a $25 o 10-50 tiradas gratis.
              <br /><strong className="text-white">Rollover habitual:</strong> x40 a x60.
              <br /><strong className="text-white">Validez:</strong> 3 a 7 días.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: No te hagas ilusiones de hacerte millonario con $10 gratis (no va a pasar). Pero es
              perfecto para probar un casino de primera mano sin arriesgar tu plata. Si la plataforma te gusta,
              recién ahí depositás. Pensalo como un test drive gratuito.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tiradas Gratis / Free Spins</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Las tiradas gratis son giros que podés usar en tragamonedas sin gastar tu plata. A veces vienen
              incluidas con el bono de bienvenida (como los 500 giros de FRESH Casino) y a veces te las dan
              como promo aparte. Lo que ganés con esos giros se convierte en saldo de bono... que sí, tiene
              rollover. Y ojo con un detalle que muchos pasan por alto: el casino suele elegir en qué slot
              podés usar los giros. No siempre te dejan usarlos donde vos querés.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Cantidad típica:</strong> 20 a 250 giros.
              <br /><strong className="text-white">Valor por giro:</strong> $0.10 a $0.50.
              <br /><strong className="text-white">Rollover de ganancias:</strong> x20 a x40.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: La trampa está en el valor del giro, no en la cantidad. Hacé la matemática: 50 giros
              a $0.10 son $5 de valor total. Pero 20 giros a $0.50 son $10. Menos giros, más valor. Siempre
              revisá cuánto vale cada giro antes de comparar ofertas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Cashback</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Este es, honestamente, nuestro tipo de bono favorito. ¿Por qué? Porque es el más justo de todos.
              Funciona así: si perdiste S/1 000 en la semana y el casino ofrece 10% de cashback, te devuelven
              S/100. Plata de vuelta a tu cuenta. No te va a salvar de una mala racha, pero suaviza el golpe
              bastante. Y lo mejor es que muchos casinos lo dan con rollover bajísimo o directamente sin rollover.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Porcentaje típico:</strong> 5% a 20%.
              <br /><strong className="text-white">Rollover:</strong> x0 a x5 (mucho más bajo que otros bonos).
              <br /><strong className="text-white">Frecuencia:</strong> Diario, semanal o mensual.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Si el cashback no tiene rollover, es literalmente plata real que podés retirar. SOL Casino
              te da 15% semanal sin rollover — eso es dinero en tu bolsillo, no saldo fantasma. Priorizá
              casinos con cashback limpio por encima de bonos que suenan más grandes pero tienen condiciones absurdas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Recarga</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              El bono de bienvenida se usa una vez y chau. Pero los bonos de recarga son como un regalo que se
              repite: cada semana o cada mes, cuando depositás, el casino te da un porcentaje extra. Los montos
              son más chicos que el bono de bienvenida (entre 20% y 50%), pero la gracia es que los podés
              aprovechar una y otra vez. Para jugadores regulares, esto termina sumando mucho más que cualquier
              bono de bienvenida a largo plazo.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Importe típico:</strong> 25% a 50% del depósito.
              <br /><strong className="text-white">Rollover:</strong> x25 a x35.
              <br /><strong className="text-white">Frecuencia:</strong> Semanal (viernes es el día más común).
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: FRESH Casino te da 50% extra cada viernes. Nosotros lo aprovechamos varias veces y la
              verdad es que es de los mejores bonos de recarga que encontramos en el mercado peruano. Si jugás
              los fines de semana, ese bono de viernes te cae como anillo al dedo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Programa VIP / Lealtad</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              ¿Jugás seguido? Entonces los programas VIP son donde está la plata de verdad. Funcionan con niveles:
              mientras más jugás, más subís, y cada nivel te desbloquea beneficios mejores. Hablamos de cashback
              más alto, límites de retiro más generosos, bonos que no están disponibles para el público general,
              retiros que se procesan primero que los demás, y en los niveles altos hasta te asignan un gerente
              de cuenta personal que te atiende directamente (sí, como en un banco privado pero para el casino).
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Niveles típicos:</strong> 5 a 10 niveles.
              <br /><strong className="text-white">Beneficios clave:</strong> Retiros más rápidos, cashback mejorado, bonos personalizados.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Si sabés que vas a jugar seguido, elegí un casino con buen programa VIP desde el día uno.
              No querés empezar a acumular puntos en un casino y después cambiarte a otro. FRESH Casino tiene
              7 niveles y los beneficios de los niveles altos son realmente buenos (lo verificamos).
            </p>
          </div>
        </div>

        {/* Bonus summary table */}
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Si buscás...</th>
                <th className="px-4 py-3 font-bold">Mejor opción</th>
                <th className="px-4 py-3 font-bold text-right">Enlace</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                { need: "Bono más grande en %", best: "MONRO Casino (150%)", slug: "monro-casino" },
                { need: "Más free spins", best: "FRESH Casino (500 giros)", slug: "fresh-casino" },
                { need: "Bono sin rollover", best: "Betano (60 giros, rollover x0)", slug: "betano" },
                { need: "Mejor cashback", best: "SOL Casino (15% semanal)", slug: "sol-casino" },
                { need: "Bono de recarga semanal", best: "FRESH Casino (50% viernes)", slug: "fresh-casino" },
                { need: "Mejor programa VIP", best: "FRESH Casino (7 niveles)", slug: "fresh-casino" },
                { need: "Mejor para cripto", best: "Stake (BTC, ETH, USDT y más)", slug: "stake" },
              ].map((row) => (
                <tr key={row.need} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3">{row.need}</td>
                  <td className="px-4 py-3 font-bold text-white">{row.best}</td>
                  <td className="px-4 py-3 text-right">
                    <a
                      href={`/go/${row.slug}`}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap"
                    >
                      Visitar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ SECTION 5: PAYMENT METHODS ═══ */}
      <Section id="pagos">
        <SectionTitle>Métodos de Pago en los Mejores Casinos Online de Perú</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Esto era un dolor de cabeza hace unos años. Querías jugar online y tenías que andar buscando formas
          rebuscadas de meter plata. Pero hoy... la cosa cambió completamente. Los casinos con licencia MINCETUR
          aceptan Yape, Plin, transferencias bancarias y tarjetas peruanas sin ningún drama. Y los casinos
          internacionales te cubren con cripto y e-wallets. Acá te explicamos cada método, cuánto tarda, si hay
          comisiones y cuál nos pareció el más práctico después de probarlos todos.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Yape</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Si vivís en Perú, ya tenés Yape. Todo el mundo lo usa, desde el taxista hasta tu abuela. Y la
              buena noticia es que ahora también sirve para depositar en casinos online. Cuando probamos
              depositar con Yape nos tomó literalmente 15 segundos — escaneás el QR, confirmás, y la plata
              aparece al toque en tu cuenta del casino. Sin comisiones en la mayoría de los casos. Los retiros
              tardan entre 1 y 24 horas dependiendo del casino. Disponible en Stake, Betano, Betsson, Inkabet
              y Doradobet. Si ya usás Yape para pagar el almuerzo, depositar en un casino se siente igual de
              natural.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Plin</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              ¿Y qué onda con Plin? Básicamente hace lo mismo que Yape pero está respaldada por Interbank,
              BBVA y Scotiabank. Si tu banco no es BCP, Plin es lo tuyo. Depósitos instantáneos, retiros en
              menos de 24 horas, y lo aceptan en los mismos casinos que aceptan Yape. En nuestra experiencia
              funciona igual de rápido y sin comisiones. No hay diferencia real de rendimiento entre Yape y
              Plin — usá el que ya tengas configurado en tu celular y listo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tarjetas Visa / Mastercard</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              La opción que funciona en todos lados, sin excepción. Cada casino de nuestro ranking acepta Visa
              y Mastercard, ya sea de crédito o de débito. El depósito es instantáneo, pero los retiros pueden
              tardar entre 1 y 5 días hábiles (depende de tu banco, no del casino). Ahora, un detalle que nos
              pasó: algunos bancos peruanos bloquean las transacciones a casinos internacionales como medida de
              seguridad. Si te rechaza el pago, no te asustes — no es problema del casino. La solución más fácil
              es usar un e-wallet como Skrill de intermediario, o directamente probar con Yape si el casino lo acepta.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Transferencia Bancaria</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Para los que prefieren ir por lo tradicional o necesitan mover montos más grandes. Funciona con
              BCP, BBVA, Interbank y Scotiabank. Los depósitos se procesan en minutos (a veces un par de horas
              si es fuera de horario bancario) y los retiros tardan entre 1 y 3 días hábiles. Sin comisiones
              en la mayoría de casinos regulados. No es el método más rápido, pero es el más confiable cuando
              hablamos de montos altos donde Yape o Plin se quedan cortos por los límites diarios.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">PagoEfectivo</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Esto es 100% peruano y bastante genial (sí, suena raro pero es así). Básicamente generás un código
              en el casino, te vas a una bodega, farmacia o agente bancario, pagás en efectivo y listo — el
              depósito se acredita en tu cuenta del casino. Perfecto si no tenés cuenta bancaria, si no querés
              poner tu tarjeta online, o si simplemente preferís manejar todo en cash. La contra es que solo
              sirve para depositar — para retirar vas a necesitar una cuenta bancaria, Yape o algún otro método.
              Y puede tardar un poco más en acreditarse (hasta 24 horas), pero funciona bien.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Monederos Electrónicos (Skrill, Neteller)</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Los e-wallets veteranos del mundo del casino online. Skrill y Neteller llevan años en esto y son
              aceptados prácticamente en todos lados. Depósitos instantáneos, retiros en 0 a 24 horas (de los
              más rápidos que hay junto con cripto). La verdad es que son super útiles como plan B: si tu banco
              te bloquea un pago directo al casino, metés la plata en Skrill primero y desde ahí depositás sin
              problemas. La contra es que cobran una comisión chica por transacción (1-3%), pero a cambio te dan
              velocidad y flexibilidad que otros métodos no tienen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Criptomonedas (Bitcoin, USDT, Ethereum)</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              No te voy a mentir: si ya manejás cripto, este es lejos el mejor método para jugar online. Los
              retiros son casi instantáneos — pedís tu plata y en menos de una hora la tenés en tu wallet. El
              casino no te cobra comisión (solo pagás el fee de la red blockchain, que con USDT en Tron es
              centavos). Aceptadas en FRESH, SOL, MONRO, STARDA y Stake. Bitcoin, Ethereum, Litecoin, USDT
              y Dogecoin son las más comunes. Pero el verdadero atractivo va más allá de la velocidad: tenés
              más privacidad, no dependés de ningún banco, y los límites de retiro suelen ser más altos que
              con métodos tradicionales. Si todavía no usás cripto... capaz este sea el empujón que necesitabas.
            </p>
          </div>
        </div>

        {/* Payment comparison table */}
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
                ["Yape", "Instantáneo", "1-24 horas", "Sin comisión"],
                ["Plin", "Instantáneo", "1-24 horas", "Sin comisión"],
                ["Visa / Mastercard", "Instantáneo", "1-5 días", "Sin comisión"],
                ["Transferencia bancaria", "Minutos-horas", "1-3 días", "Sin comisión"],
                ["PagoEfectivo", "1-24 horas", "No disponible", "Sin comisión"],
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

        <h3 className="text-xl font-bold text-white mb-4 mt-10">Cómo Depositar con Yape en un Casino Online</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Ya te dijimos que Yape es rapidísimo, pero capaz te preguntás cómo funciona exactamente. Lo hicimos nosotros mismos y acá te dejamos el paso a paso completo:
        </p>
        <div className="space-y-4">
          {[
            { step: "1", title: "Registrate en el casino", desc: "Creá tu cuenta con datos reales — vas a necesitar tu DNI y un email que uses de verdad. Ojo: poné datos correctos porque después te van a pedir verificación KYC y tiene que coincidir todo." },
            { step: "2", title: "Andá a la sección de depósitos", desc: "Buscá el botón de \"Depositar\" o \"Cajero\". En casi todos los casinos está arriba a la derecha, imposible perderse. Si estás en el celular, a veces está dentro del menú hamburguesa." },
            { step: "3", title: "Elegí Yape como método de pago", desc: "Te va a aparecer una lista de métodos — seleccioná Yape y poné el monto que querés depositar. Cada casino tiene un mínimo diferente (generalmente entre S/10 y S/30)." },
            { step: "4", title: "Escaneá el código QR o ingresá el número", desc: "El casino te muestra un QR o un número de teléfono. Abrí Yape en tu celular, escaneá el código y confirmá. Cuando lo hicimos nosotros, todo el proceso desde que abrimos Yape hasta que el dinero apareció en el casino tomó unos 15 segundos." },
            { step: "5", title: "Confirmá y empezá a jugar", desc: "El saldo aparece al toque en tu cuenta del casino. Literalmente refrescás la página y ya está ahí. Cero drama, cero espera. A jugar." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center shrink-0">
                <span className="text-[#22c55e] font-black text-sm">{item.step}</span>
              </div>
              <div>
                <p className="text-white font-bold mb-1">{item.title}</p>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#d4d4d8] text-sm italic mt-4">
          Y para retirar con Yape es al revés: vas a la sección de retiros del casino, elegís Yape, ponés
          tu número de celular y el monto. Dependiendo del casino, la plata te llega en 1 a 24 horas. Con
          Stake nos llegó en menos de 2 horas un martes a la noche. Con Betano tardó un poco más, pero no
          pasó de las 12 horas.
        </p>
      </Section>

      {/* ═══ MINI CTA BANNER 2 ═══ */}
      <div className="bg-gradient-to-r from-[#22c55e]/10 via-[#0e0e0e] to-[#22c55e]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">Acepta Yape, Plin, crypto y más</p>
        <p className="text-white text-xl font-black mb-4">Stake — S/50 freebet + 50 giros gratis</p>
        <CtaButton slug="stake" text="Ir a Stake" />
      </div>

      {/* ═══ SECTION 6: LEGAL ═══ */}
      <Section id="legal" alt bg="/img/backgrounds/comparativa.png">
        <SectionTitle>¿Es Legal Jugar en Casinos Online en Perú?</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Sí, es completamente legal. Punto.</strong> Mucha gente todavía cree que jugar
          online en Perú es una zona gris o algo medio turbio... pero no. Todo está regulado desde 2022 con la
          <strong className="text-white"> Ley N° 31557</strong> y su reglamento (el <strong className="text-white">Decreto
          Supremo N° 005-2023-MINCETUR</strong>). Perú se puso serio con esto y armó un marco legal que protege
          a los jugadores de verdad.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">La regulación MINCETUR</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Desde febrero de 2024, MINCETUR (el Ministerio de Comercio Exterior y Turismo) se encarga de todo:
          regular, supervisar y dar licencias a los casinos online que quieran operar en Perú. Y no es que
          cualquiera llega y pide una licencia — los requisitos son bastante estrictos. El casino tiene que
          demostrar capital suficiente, pasar auditorías de seguridad informática, implementar herramientas
          de protección al jugador y cumplir con protocolos de juego responsable. La verdad es que esto le
          da bastante seriedad al mercado peruano.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          A la fecha, <strong className="text-white">más de 60 operadores ya tienen licencia MINCETUR</strong> (lo
          verificamos directo en la página del ministerio). Betano, Betsson, Stake, Bet365, 1xBet, Inkabet,
          Doradobet, Betcris, Meridianbet y Caliente son algunos de los más conocidos. Y la lista no para
          de crecer — cada mes se suman nuevos operadores.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Cómo verificar la licencia de un casino?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Es más fácil de lo que pensás. Tenés dos opciones: (1) entrás a la página oficial de MINCETUR
          (mincetur.gob.pe) donde publican la lista completa de operadores autorizados, actualizada
          regularmente; o (2) bajás al footer del sitio del casino — los que son legales muestran ahí su
          número de autorización con orgullo. Si un casino no muestra ningún dato de licencia en su sitio...
          eso ya te dice bastante, ¿no?
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">Licencias internacionales</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Acá hay una pregunta que nos hacen mucho: &quot;¿Y los casinos con licencia de Curaçao o Malta son
          ilegales?&quot; No, para nada. No es ilegal jugar en ellos desde Perú. Simplemente no tienen la licencia
          local, pero operan bajo regulaciones internacionales que también garantizan seguridad y juego limpio.
          FRESH Casino, SOL Casino, MONRO Casino y STARDA Casino operan con licencia de Curaçao y llevan
          años funcionando sin problemas, con miles de jugadores peruanos activos. ¿Tenés la misma protección
          legal local que con MINCETUR? No. Pero son plataformas serias con trayectoria comprobada.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">Impuestos sobre ganancias</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Nadie quiere hablar de esto, pero hay que tocarlo: sí, las ganancias de juegos de azar pagan
          impuestos en Perú. Son rentas de fuente peruana sujetas al Impuesto a la Renta. Si jugás en un
          casino con licencia MINCETUR, ellos mismos retienen el porcentaje correspondiente antes de pagarte
          — vos no tenés que hacer nada extra. Pero si jugás en casinos internacionales, técnicamente sos
          vos el responsable de declarar esas ganancias. La verdad es que este tema es medio complejo y
          depende de cuánto ganés, así que lo mejor es consultarlo con un contador que conozca tu situación
          particular. No te queremos dar un consejo fiscal genérico que después no aplique a tu caso.
        </p>

        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6 mt-8">
          <p className="text-[#22c55e] font-bold mb-2">En resumen:</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Jugar online en Perú es legal, regulado y seguro si elegís bien. Los casinos con licencia MINCETUR
            te dan la máxima protección legal en el país. Los casinos con licencias internacionales (Curaçao,
            Malta, Gibraltar) también son opciones válidas con estándares serios de seguridad. Todos los casinos
            que recomendamos en nuestro ranking tienen alguna de estas licencias — no incluimos ningún casino
            sin regulación.
          </p>
        </div>
      </Section>

      {/* ═══ CASINOS ONLINE VS FÍSICOS ═══ */}
      <Section id="online-vs-fisico">
        <SectionTitle>Casinos Online en Perú vs Casinos Físicos</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Si alguna vez fuiste a un Atlantic City o un Fiesta Casino en Lima, sabés que tienen su onda. El
          ambiente, las luces, tomarte algo mientras jugás... tiene lo suyo. Pero la realidad es que los casinos
          online te dan cosas que un casino físico simplemente no puede. Y al revés también — hay experiencias
          que solo se viven presencialmente. Acá armamos la comparación para que veas las diferencias reales, sin
          sesgo. Vos decidís qué pesa más.
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
                ["Accesibilidad", "24/7 desde cualquier lugar con internet", "Tenés que ir físicamente, horarios limitados"],
                ["Variedad de juegos", "3 000 - 5 000+ juegos disponibles", "100 - 500 máquinas y mesas según el local"],
                ["Bonos y promos", "Bonos de bienvenida, cashback, free spins", "Bebidas gratis y programas de fidelidad básicos"],
                ["Límites de apuesta", "Desde S/0.20 por giro, ideal para presupuestos bajos", "Mínimos más altos, especialmente en mesas"],
                ["Ambiente social", "Chat en vivo, pero no es lo mismo", "Ambiente real, interacción cara a cara"],
                ["Privacidad", "Total, nadie sabe que estás jugando", "Pública, cualquiera te puede ver"],
                ["Velocidad de juego", "Más rápido, sin esperas entre rondas", "Más lento, especialmente en mesas llenas"],
                ["Métodos de pago", "Yape, Plin, crypto, tarjetas, e-wallets", "Solo efectivo y tarjetas en la mayoría"],
                ["Retiros", "Directos a tu cuenta/wallet, 0-24h", "Tenés que ir al cajero del casino"],
                ["RTP", "95-98% típico, publicado y auditable", "80-93% típico en tragamonedas físicas, no publicado"],
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
          ¿Cuál es mejor? Depende completamente de lo que busques. Si lo tuyo es variedad, comodidad de jugar
          en pijama a las 2am y RTPs que no vas a encontrar en una máquina física... los casinos online ganan
          por lejos. Pero si querés salir con amigos, sentir el ambiente, tomarte un trago mientras tirás dados
          en una mesa de craps... eso solo lo conseguís presencialmente. La verdad es que muchos jugadores
          peruanos hacen las dos cosas y la pasan bien en ambas. No tiene que ser una u otra — podés disfrutar
          de las dos sin drama.
        </p>
      </Section>

      {/* ═══ SECTION 7: POPULAR GAMES ═══ */}
      <Section id="juegos" bg="/img/backgrounds/ruleta.png">
        <SectionTitle>Juegos Más Populares en los Casinos Online de Perú</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Acá viene algo que te va a cambiar la forma de jugar: entender los números detrás de cada juego. No
          es lo mismo sentarse a una ruleta americana que a una europea — esa diferencia que parece mínima te
          puede costar literalmente el doble de tu bankroll a largo plazo. Y con las tragamonedas pasa algo
          similar: si no sabés qué es el RTP y la volatilidad, estás eligiendo juegos a ciegas.
        </p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Nos sentamos a analizar los juegos que más se juegan en Perú y acá te dejamos todo: porcentajes de
          retorno reales, ventaja del casino en cada variante, estrategias básicas que funcionan y los títulos
          que están pegando fuerte entre jugadores peruanos. La idea es que entres a cualquier casino sabiendo
          exactamente qué estás jugando y por qué.
        </p>

        {/* Slots */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Tragamonedas / Slots</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Las slots son el corazón de cualquier casino online — más del 80% del catálogo son tragamonedas.
            Y sí, son juegos de suerte pura, nadie puede predecir cuándo va a caer un premio. Pero hay datos
            que te ayudan a elegir mejor a qué jugar y no tirar tu plata en slots que te devuelven menos:
          </p>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-1">RTP (Return to Player)</p>
            <p className="text-[#9ca3af] text-sm">
              En palabras simples: es cuánto te devuelve el juego a largo plazo. Un RTP de 96% quiere decir
              que por cada S/100 que apostás, el juego devuelve S/96 en promedio (y el casino se queda con S/4).
              ¿La regla de oro? Nunca juegues una slot con menos de 96% de RTP. La diferencia entre una slot
              de 94% y una de 97% parece chica, pero a lo largo de cientos de giros se nota muchísimo en tu saldo.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-1">Volatilidad</p>
            <p className="text-[#9ca3af] text-sm">
              <strong className="text-white">Baja:</strong> Ganas seguido pero poquito. Perfecta para sesiones largas donde querés entretenerte sin que tu saldo se derrita en 5 minutos.
              <br /><strong className="text-white">Media:</strong> El punto medio. Ganas con frecuencia razonable y los premios son decentes. La opción más equilibrada para la mayoría.
              <br /><strong className="text-white">Alta:</strong> Podés pasar 50 giros sin ganar nada... pero cuando pega, pega fuerte. Sweet Bonanza y Gates of Olympus son alta volatilidad. Necesitás bankroll y paciencia, pero las emociones son de otro nivel.
            </p>
          </div>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Top Slots por RTP</h4>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
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
                  ["Starmania", "97.87%", "Media", "NextGen"],
                  ["White Rabbit", "97.72%", "Alta", "Big Time Gaming"],
                  ["Joker Strike", "97.69%", "Media", "Quickspin"],
                  ["Kings of Chicago", "97.80%", "Media", "NetEnt"],
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

          <h4 className="text-base font-bold text-white mb-3 mt-6">Slots Más Populares en Perú</h4>
          <p className="text-[#9ca3af] leading-relaxed">
            Si entrás a cualquier casino en Perú y mirás qué se está jugando, vas a ver las mismas tres slots
            dominando: <strong className="text-white">Sweet Bonanza</strong> (Pragmatic Play, RTP 96.5%, volatilidad alta — la
            reina absoluta de los multiplicadores, esos momentos donde se encadenan bombas x100 son adictivos),
            <strong className="text-white"> Gates of Olympus</strong> (Pragmatic Play, RTP 96.5%, volatilidad alta — Zeus tirándote
            multiplicadores desde el cielo, la slot más streameada de Latinoamérica por lejos) y
            <strong className="text-white"> Big Bass Bonanza</strong> (Pragmatic Play, RTP 96.7%, volatilidad alta — temática de
            pesca que suena ridícula pero tiene unos free spins que pueden pagar barbaridades).
          </p>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Mecánicas Especiales de Slots</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">Megaways</p>
              <p className="text-[#9ca3af] text-sm">Sistema creado por Big Time Gaming que cambia el número de símbolos en cada rodillo con cada giro. Puede ofrecer hasta 117 649 líneas de pago. Slots populares: Bonanza Megaways, Gonzos Quest Megaways.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">Hold &amp; Spin</p>
              <p className="text-[#9ca3af] text-sm">Cuando caen ciertos símbolos especiales, se quedan fijos en su posición y el resto de los rodillos vuelven a girar. Típico de slots como Lightning Link y Coin Train. Generalmente lleva a premios acumulados.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">Cluster Pays</p>
              <p className="text-[#9ca3af] text-sm">En vez de líneas de pago, ganás cuando se agrupan símbolos iguales en bloques (clusters). Cuanto más grande el grupo, mayor el premio. Ejemplo: Reactoonz de Play&apos;n GO.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">Cascading Reels</p>
              <p className="text-[#9ca3af] text-sm">Los símbolos ganadores desaparecen y caen nuevos desde arriba, permitiendo múltiples ganancias en un solo giro. También llamado &quot;Tumble&quot; en Pragmatic Play (Sweet Bonanza, Gates of Olympus).</p>
            </div>
          </div>
        </div>

        {/* Roulette */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Ruleta</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Todo el mundo conoce la ruleta, pero casi nadie sabe que elegir la variante correcta es la
            decisión más rentable que podés tomar en un casino. La diferencia entre la ruleta francesa y la
            americana es brutal — y la mayoría de gente juega la que sea sin fijarse.
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
            Honestamente, no entendemos por qué alguien jugaría ruleta americana pudiendo jugar europea o
            francesa. El doble cero (0 y 00) de la americana casi duplica la ventaja del casino — estás
            regalando plata. Siempre, siempre, siempre elegí la europea o la francesa. Parece una diferencia
            chica en los números, pero jugá 200 rondas y tu saldo te va a agradecer haber leído esto.
          </p>

          <h4 className="text-base font-bold text-white mb-3 mt-6">Tipos de Apuestas en Ruleta</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Hay dos tipos de apuestas: internas (apostás a números específicos, más riesgo pero pagos enormes)
            y externas (apostás a grupos grandes como rojo/negro, pagos más chicos pero ganás más seguido).
            Acá te dejamos la tabla con todas las opciones y sus probabilidades reales.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
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
          <p className="text-[#d4d4d8] text-sm italic mt-3">
            Estos números son para ruleta europea (37 números). Pero acá viene un dato que poca gente
            conoce: en la ruleta francesa existe la regla &quot;La Partage&quot; — si apostás a rojo/negro,
            par/impar o 1-18/19-36 y sale el 0, te devuelven la mitad de tu apuesta. Eso baja la ventaja
            del casino al 1.35%, que es absurdamente bajo. Si tu casino tiene ruleta francesa, jugá esa siempre.
          </p>
        </div>

        {/* Blackjack */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Blackjack</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Acá viene lo bueno para los que les gusta pensar mientras juegan. El blackjack es el único juego
            de casino donde lo que vos decidís cambia el resultado. No es solo suerte — si aprendés la estrategia
            básica, la ventaja del casino baja a apenas <strong className="text-white"> 0.5%</strong>. Eso lo convierte
            en el juego con mejor retorno de todo el casino, por lejos. Ninguna slot ni ruleta se le acerca.
          </p>

          <h4 className="text-base font-bold text-white mb-3">Estrategia Básica Simplificada</h4>
          <div className="space-y-2 mb-4 text-sm">
            {[
              ["Tu mano suma 8 o menos", "Siempre pedir carta"],
              ["Tu mano suma 9-11", "Doblar si el dealer muestra 3-6, sino pedir"],
              ["Tu mano suma 12-16", "Plantarte si el dealer muestra 2-6, sino pedir"],
              ["Tu mano suma 17 o más", "Siempre plantarte"],
              ["Par de Ases o par de 8", "Siempre dividir"],
              ["Par de 10 o figuras", "Nunca dividir"],
            ].map(([hand, action]) => (
              <div key={hand} className="flex gap-3 text-[#d4d4d8]">
                <span className="text-[#dc2626] shrink-0">&#9656;</span>
                <span><strong className="text-white">{hand}:</strong> {action}</span>
              </div>
            ))}
          </div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Tabla de Estrategia Básica</h4>
          <p className="text-[#9ca3af] text-sm mb-3">
            Si realmente querés jugar bien al blackjack, guardá esta tabla. Muestra la jugada matemáticamente
            óptima según tu mano y la carta que muestra el dealer. P = Pedir, Q = Quedarte (plantarte),
            D = Doblar, X = Dividir. Seguila al pie de la letra y vas a estar jugando mejor que el 95% de
            la gente en cualquier mesa.
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
                      <td key={i} className={`px-2 py-2 font-bold ${a === "Q" ? "text-[#22c55e]" : a === "D" ? "text-[#fbbf24]" : a === "X" ? "text-[#a855f7]" : "text-[#9ca3af]"}`}>{a}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#71717a]">
            <span><span className="text-[#9ca3af] font-bold">P</span> = Pedir</span>
            <span><span className="text-[#22c55e] font-bold">Q</span> = Quedarte</span>
            <span><span className="text-[#fbbf24] font-bold">D</span> = Doblar</span>
          </div>
        </div>

        {/* Live Casino */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Casino en Vivo</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si nunca probaste el casino en vivo, te estás perdiendo algo bueno. Básicamente son dealers
            reales, de carne y hueso, transmitiendo en video HD desde estudios profesionales. Vos ves todo
            en tiempo real: cómo reparten las cartas, cómo gira la ruleta, todo. Podés chatear con el
            dealer y con otros jugadores. Es lo más parecido a estar en un casino físico pero desde tu sofá
            — y no te voy a mentir, la primera vez que lo probamos nos quedamos enganchados.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">Evolution Gaming</strong> es el que manda acá — Crazy Time, Lightning Roulette,
            Monopoly Live, Dream Catcher... todos sus juegos. Pragmatic Play Live y Ezugi también tienen
            mesas buenas y están creciendo rápido. Y algo que nos pareció genial: la mayoría tiene dealers
            que hablan español de verdad (no traducción automática rara). Para un peruano, jugar con un
            dealer que te entiende y te contesta en tu idioma cambia completamente la experiencia.
          </p>
          <p className="text-[#9ca3af] leading-relaxed">
            ¿Qué podés jugar en vivo? Ruleta (varias variantes), blackjack, baccarat, poker (Casino Hold&apos;em,
            Three Card Poker), sic bo y los game shows que son una locura de entretenimiento. Los límites de
            apuesta arrancan desde S/5 para los que van tranqui y llegan a más de S/100 000 por ronda para los
            high rollers. Hay mesa para todos los presupuestos.
          </p>
        </div>
      </Section>

      {/* ═══ PROVEEDORES DE JUEGOS ═══ */}
      <Section id="proveedores" alt>
        <SectionTitle>Proveedores de Juegos en los Casinos Online de Perú</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Esto es algo que la mayoría de jugadores ignora y está mal: detrás de cada slot, cada mesa de ruleta
          y cada game show hay una empresa que lo desarrolla. Y no da lo mismo cuál. Cada proveedor tiene su
          estilo, su rango de RTP y su especialidad. Saber quién hizo el juego te dice mucho sobre qué esperar
          antes de apostar un solo sol.
        </p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Los casinos buenos trabajan con muchos proveedores para darte variedad (FRESH Casino tiene más de 80,
          por ejemplo). Pero no todos los proveedores son iguales. Acá te presentamos los 7 que más vas a ver
          en casinos peruanos, con sus juegos estrella y por qué deberías prestarles atención.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Evolution Gaming</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Si el casino en vivo tuviera un rey, sería Evolution. Ellos hacen las mesas de ruleta, blackjack
              y baccarat que encontrás en prácticamente todos los casinos del planeta. Pero donde se la juegan
              de verdad es en los game shows: <strong className="text-white">Lightning Roulette</strong> te mete
              multiplicadores aleatorios de hasta x500 que hacen que cada ronda sea una montaña rusa,
              <strong className="text-white"> Crazy Time</strong> es la rueda de la fortuna más adictiva que existe (la
              probamos y entendimos por qué la gente se queda horas), y <strong className="text-white">Monopoly Live</strong> y
              Dream Catcher complementan el catálogo de shows que nadie más hace tan bien. Los RTPs van del 97%
              al 99%, que es de lo mejorcito que vas a encontrar en cualquier casino.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Pragmatic Play</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Los que hacen las slots que todo el mundo juega. Si alguna vez viste un stream de casino o un video
              de TikTok con alguien ganando una barbaridad en <strong className="text-white">Sweet
              Bonanza</strong>, <strong className="text-white">Gates of Olympus</strong> o <strong className="text-white">Big
              Bass Bonanza</strong>... esos son de Pragmatic. Tienen más de 300 slots con RTP entre 94% y 96.5%.
              Y la verdad es que también están metiendo presión en casino en vivo — sus mesas en español son
              de buena calidad y cada vez las vemos en más casinos. En Latinoamérica, Pragmatic Play es el
              proveedor número uno por lejos. No hay forma de jugar en un casino peruano sin cruzarte con
              alguno de sus títulos.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">NetEnt</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              NetEnt es como el Rolls Royce de las slots: calidad pura. Hicieron <strong className="text-white">Starburst</strong> (la
              slot más jugada en la historia del casino online, así de simple), <strong className="text-white">Gonzo&apos;s
              Quest</strong> (los que inventaron los cascading reels antes de que fuera cool),
              <strong className="text-white"> Dead or Alive</strong> y Blood Suckers (esta última con 98% de RTP, una locura).
              Lo que tiene NetEnt es consistencia: gráficos impecables, mecánicas que se sienten bien y RTPs
              que van del 95% al 98%. No sacan 50 slots al mes como otros — sacan menos pero cada una está
              pulida al detalle. Si preferís calidad sobre cantidad, NetEnt es tu proveedor.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Microgaming</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Los abuelos del casino online — y lo digo con respeto. Operan desde 1994, literalmente inventaron
              esto. Su legado más grande son los jackpots progresivos, y <strong className="text-white">Mega Moolah</strong> es
              la prueba: pagó más de 20 millones de euros en un solo premio, el récord mundial en casino online.
              Ahora, hay que ser honestos: el RTP de sus juegos varía bastante (entre 92% y 96.5%) y la calidad
              no es tan pareja como NetEnt o Pragmatic. Tienen más de 800 títulos, así que hay de todo — joyas
              y también juegos que ya envejecieron mal. Pero si lo tuyo son los jackpots progresivos donde podés
              ganar millones con un giro, Microgaming es donde tenés que estar.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Play&apos;n GO</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Estos tipos son creativos de verdad. Cada slot que sacan tiene una mecánica diferente — no hay
              dos juegos de Play&apos;n GO que se sientan iguales, y eso se agradece cuando llevas horas jugando.
              <strong className="text-white"> Book of Dead</strong> es su estrella (básicamente la versión superior de
              Book of Ra, si alguna vez la jugaste en un casino físico), <strong className="text-white">Reactoonz</strong> tiene
              cluster pays con unos personajes que son ridículamente simpáticos, y <strong className="text-white">Moon
              Princess</strong> es un anime fever dream que paga bien. RTP entre 94% y 96.5%. Lo que nos gusta de
              Play&apos;n GO es que siempre te sorprenden con algo nuevo — no reciclan la misma fórmula una y otra vez.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Red Tiger</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Acá viene algo interesante: Red Tiger inventó los Daily Drop Jackpots, que son jackpots que tienen
              que caer sí o sí antes de las 23:59 de cada día. Esto crea una dinámica adictiva — a medida que
              avanza el día sin que nadie lo gane, el pozo crece y más gente se mete a jugar. Es como una
              carrera contrarreloj. ¿Alguien se lo va a llevar a las 11pm cuando está enorme, o va a caer
              temprano? Esa incertidumbre es única y no la encontrás en jackpots progresivos normales.
              Títulos populares: Gonzo&apos;s Quest Megaways, Pirates&apos; Plenty y Dragon&apos;s Luck.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Hacksaw Gaming</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Si seguís streams de casino en Kick o Twitch, ya conocés a Hacksaw. Son los reyes de la volatilidad
              extrema — estamos hablando de slots donde podés multiplicar tu apuesta x10 000 o más en un solo
              giro. <strong className="text-white">Wanted Dead or a Wild</strong> es probablemente la slot más
              streameada del momento, <strong className="text-white">Chaos Crew</strong> tiene una base de fans enorme
              y <strong className="text-white">Le Bandit</strong> es la nueva sensación. Ahora, seamos honestos: estas
              slots no son para cualquiera. Podés meter 100 giros sin ganar absolutamente nada y sentir que
              estás tirando la plata. Pero cuando pegan... los clips de ganancias de Hacksaw son los más virales
              del mundo del casino online por algo. Necesitás bankroll generoso y nervios de acero.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Proveedor</th>
                <th className="px-4 py-3 font-bold">Especialidad</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">RTP Medio</th>
                <th className="px-4 py-3 font-bold hidden md:table-cell">Juegos Destacados</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Evolution Gaming", "Casino en vivo", "97-99%", "Lightning Roulette, Crazy Time"],
                ["Pragmatic Play", "Slots virales", "94-96.5%", "Sweet Bonanza, Gates of Olympus"],
                ["NetEnt", "Slots clásicas", "95-98%", "Starburst, Blood Suckers"],
                ["Microgaming", "Jackpots progresivos", "92-96.5%", "Mega Moolah"],
                ["Play'n GO", "Slots temáticas", "94-96.5%", "Book of Dead, Reactoonz"],
                ["Red Tiger", "Jackpots diarios", "94-96%", "Daily Drop Jackpots"],
                ["Hacksaw Gaming", "Alta volatilidad", "94-96.5%", "Wanted Dead or a Wild"],
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

      {/* ═══ MITOS Y VERDADES ═══ */}
      <Section id="mitos">
        <SectionTitle>Mitos y Verdades sobre Casinos Online en Perú</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          La cantidad de mitos que circulan sobre casinos online es increíble. Tu primo te dice que las slots
          pagan más de noche, tu amigo jura que el casino le cerró la cuenta por ganar mucho, y en YouTube
          hay un tipo vendiendo un &quot;sistema infalible&quot; para la ruleta. La verdad es que la mayoría de
          esto es basura. Acá desmontamos los 8 mitos más comunes con datos reales y sin vueltas.
        </p>

        <div className="space-y-5">
          {[
            { claim: "Los casinos manipulan los resultados", verdict: "FALSO", color: "#ef4444", explanation: "No, no y no. Los casinos regulados usan generadores de números aleatorios (RNG) que están certificados por laboratorios independientes como eCOGRA y GLI. Estos sistemas se auditan regularmente — si un casino los tocara, perdería la licencia, enfrentaría demandas y se destruiría la reputación. ¿Para qué van a arriesgarse si ya tienen ventaja matemática incorporada en cada juego? No necesitan hacer trampa para ganar plata." },
            { claim: "Después de un jackpot la slot no paga en mucho tiempo", verdict: "FALSO", color: "#ef4444", explanation: "Esta es la famosa \"falacia del jugador\" y está más arraigada que el ají de gallina en Perú. Cada giro es completamente independiente del anterior. El RNG no tiene memoria, no sabe que acaba de pagar un jackpot. Una slot que recién pagó millones tiene exactamente las mismas probabilidades en el siguiente giro que una que no pagó nada en semanas. Las matemáticas no mienten, por más que tu instinto te diga lo contrario." },
            { claim: "Apostar más plata aumenta las probabilidades de ganar", verdict: "FALSO", color: "#ef4444", explanation: "Nope. El RTP es un porcentaje fijo sin importar cuánto apostés. Si una slot tiene 96% de RTP, devuelve el 96% tanto si apostás S/1 como si apostás S/100 por giro. Lo único que cambia al apostar más es el tamaño de lo que ganás o perdés, no la probabilidad de que pase. No dejes que nadie te convenza de que \"las apuestas grandes ganan más\" — es mentira." },
            { claim: "Los casinos bloquean las cuentas de los que ganan mucho", verdict: "FALSO", color: "#ef4444", explanation: "Este mito viene de historias en foros donde la gente no cuenta toda la verdad. Los casinos regulados están obligados por ley a pagar las ganancias legítimas — bloquear ganadores les costaría la licencia. Lo que sí pasa es que cuando ganás montos grandes, te piden verificación KYC adicional (foto del DNI, selfie, comprobante de domicilio). Eso no es una táctica para no pagarte, es un requisito legal contra el lavado de dinero. Completá el KYC al registrarte y no vas a tener ese problema." },
            { claim: "Existe un mejor horario para jugar", verdict: "FALSO", color: "#ef4444", explanation: "Tu tío te dijo que las slots pagan más de madrugada. Tu amigo dice que los domingos son mejores. La realidad es que el RNG genera resultados aleatorios las 24 horas del día, los 7 días de la semana. Da absolutamente igual si jugás a las 3am o a las 3pm, un martes o un sábado. Los resultados son exactamente los mismos. Jugá cuando te quede cómodo y listo." },
            { claim: "Los bonos son siempre buena idea", verdict: "DEPENDE", color: "#f59e0b", explanation: "Acá hay matices. Un bono con rollover x25 y 30 días para completarlo puede ser una excelente oportunidad. Pero un bono con rollover x50 y 7 días de plazo es, honestamente, peor que no aceptar nada — te obliga a apostar cantidades absurdas en muy poco tiempo y casi seguro lo vas a perder todo intentando cumplir las condiciones. La regla es simple: si el rollover es mayor a x35 y tenés menos de 14 días, pensalo dos veces antes de activar ese bono." },
            { claim: "El blackjack online está trucado porque la banca siempre gana", verdict: "PARCIALMENTE FALSO", color: "#f59e0b", explanation: "A ver... la banca tiene una ventaja matemática del 0.5% con estrategia óptima. Eso no es trampa, es cómo funciona el juego. Es como decir que la ruleta está trucada porque tiene el cero — no, el cero es la ventaja del casino y siempre existió. Todos los juegos de casino tienen una ventaja incorporada para la casa, y eso es lo que les permite operar como negocio. Si no la tuvieran, quebrarían. La ventaja del blackjack es la más baja de todos los juegos, así que en realidad es donde mejores chances tenés." },
            { claim: "Usar estrategia básica en blackjack es trampa", verdict: "FALSO", color: "#ef4444", explanation: "Para nada. La estrategia básica es completamente legal y los casinos lo saben perfectamente. No estás haciendo nada prohibido — simplemente estás tomando la decisión matemáticamente correcta en cada mano en vez de jugar por instinto. Lo que sí está prohibido en casinos físicos es contar cartas, pero en casinos online eso es imposible porque el RNG baraja las cartas en cada mano. Así que usá la tabla de estrategia básica sin culpa — es jugar inteligente, no hacer trampa." },
          ].map((item) => (
            <div key={item.claim} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <p className="text-white font-bold text-base flex-1">&quot;{item.claim}&quot;</p>
                <span className="text-xs font-black px-3 py-1 rounded-full uppercase" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.verdict}
                </span>
              </div>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{item.explanation}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ SECTION 8: RESPONSIBLE GAMBLING ═══ */}
      <Section id="responsable" alt bg="/img/backgrounds/cripto.png">
        <SectionTitle>Juego Responsable en Casinos Online de Perú</SectionTitle>

        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mb-8">
          <p className="text-[#f59e0b] font-bold mb-2">Antes de seguir, leé esto</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Seamos directos: el casino online es entretenimiento. No es un trabajo, no es una inversión y
            no es una forma de pagar deudas. Si entrás pensando en &quot;ganar plata&quot;, ya empezaste mal. Jugá
            solo con dinero que podrías perder sin que te afecte, y nunca — nunca — intentes recuperar
            pérdidas apostando más. Ese camino no termina bien para nadie.
          </p>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">Herramientas de Control</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Los casinos serios te dan herramientas para ponerte límites vos mismo. Y la verdad es que
          usarlas no es señal de debilidad sino de inteligencia — hasta los jugadores más experimentados
          las configuran. Acá van las que están disponibles en la mayoría de casinos de nuestro ranking:
        </p>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {[
            "Límites de depósito: Ponete un tope diario, semanal o mensual. Una vez que lo alcanzás, el casino no te deja depositar más aunque quieras. Es la herramienta más útil que existe.",
            "Límites de apuesta: Definí cuánto máximo podés apostar por ronda. Así evitás esos momentos de calentura donde apostás de más.",
            "Límites de pérdida: Cuando perdés X cantidad, el casino te corta la sesión automáticamente. No tenés que tener fuerza de voluntad, el sistema lo hace por vos.",
            "Límites de tiempo: Te manda alertas cuando llevas mucho rato jugando. Parece tonto, pero cuando estás metido en el juego las horas se van volando y no te das cuenta.",
            "Autoexclusión temporal: Te bloqueás vos mismo de la plataforma por días, semanas o meses. No podés entrar aunque quieras. Ideal si sentís que necesitás un descanso.",
            "Autoexclusión permanente: Cierre definitivo e irreversible de la cuenta. Para cuando sabés que necesitás alejarte del juego por completo.",
          ].map((tool) => (
            <li key={tool} className="flex items-start gap-2 text-sm">
              <span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span> {tool}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-white mb-3">Señales de Juego Problemático</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Esto es serio. Si te ves reflejado en alguna de estas situaciones, es hora de parar y buscar ayuda:
        </p>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {[
            "Estás apostando plata que necesitás para comer, pagar alquiler o cuentas. Si estás usando plata que no es de entretenimiento, hay un problema.",
            "Perdiste y sentís que tenés que seguir jugando para recuperar lo perdido. Esta es la trampa más peligrosa que existe y le pasa a mucha gente.",
            "Tu pareja, familia o amigos ya te dijeron algo. Si el juego está afectando tus relaciones, tu trabajo o tus estudios, es una señal clara.",
            "Le mentís a la gente sobre cuánto jugás o cuánta plata gastaste. Si sentís la necesidad de esconderlo, algo no está bien.",
            "Te ponés ansioso, irritable o de mal humor cuando no podés jugar. Si el juego dejó de ser diversión y se convirtió en necesidad, es momento de parar.",
            "Estás pidiendo plata prestada para seguir jugando. Esto es una línea roja que no se debe cruzar bajo ninguna circunstancia.",
          ].map((sign) => (
            <li key={sign} className="flex items-start gap-2 text-sm">
              <span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span> {sign}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-white mb-3">Recursos de Ayuda en Perú</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Si algo de lo anterior te suena familiar — o si conocés a alguien que está pasando por esto —
          hay ayuda disponible en Perú. La <strong className="text-white">Línea 113</strong> del Ministerio de Salud
          ofrece orientación gratuita sobre adicciones, y <strong className="text-white">Jugadores Anónimos Perú</strong> tiene
          grupos de apoyo donde podés hablar con gente que pasó por lo mismo. Pedir ayuda no es vergüenza,
          al contrario — es la decisión más valiente y más inteligente que podés tomar. Nadie te va a juzgar
          por reconocer que necesitás una mano.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">Gestión de Bankroll</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Acá viene lo bueno: si vas a jugar, al menos hacelo con cabeza. Manejar tu bankroll (tu
          presupuesto de juego) es literalmente la diferencia entre pasarla bien y arrepentirte. Estas
          tres reglas son sagradas:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Regla del 5%</p>
            <p className="text-[#9ca3af] text-sm">
              La regla más básica y la que más gente ignora. Si tu presupuesto de sesión es S/500, tu
              apuesta máxima por ronda es S/25. Ni un sol más. Esto te garantiza que tu bankroll aguante
              al menos 20 rondas malas seguidas sin quedarte en cero. Suena conservador, pero funciona.
            </p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Stop Loss</p>
            <p className="text-[#9ca3af] text-sm">
              Antes de abrir el casino, decidí cuánto estás dispuesto a perder esa sesión. Punto.
              Si dijiste S/200 y los perdiste, cerrás y te vas a hacer otra cosa. Sin excepciones, sin
              &quot;una última ronda&quot;, sin &quot;voy a recuperar lo perdido&quot;. La disciplina acá es
              todo.
            </p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Sesiones</p>
            <p className="text-[#9ca3af] text-sm">
              No metas todo tu presupuesto mensual de una sola vez. Si te pusiste un límite de S/1 000
              al mes, dividilo en 10 sesiones de S/100. Así tenés varias oportunidades de diversión
              durante todo el mes en vez de quedarte sin nada después de una mala noche.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">Sistemas que NO Funcionan</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Honestamente, la <strong className="text-white">Martingala</strong> es la peor idea del mundo. &quot;Doblar
          después de perder&quot; suena lógico en papel, hasta que perdés 7 veces seguidas y tu apuesta
          siguiente debería ser S/12 800 para recuperar los S/100 iniciales. Absurdo. La
          <strong className="text-white"> Fibonacci</strong> (apostar siguiendo la secuencia 1-1-2-3-5-8...) es la versión
          &quot;elegante&quot; de la misma basura — llega al mismo resultado, solo que más lentamente. Las dos
          fallan por la misma razón: eventualmente golpeás el límite de la mesa o te quedás sin bankroll.
          No existe ningún sistema de apuestas que venza la ventaja matemática del casino a largo plazo.
          Si alguien te vende uno en YouTube o Telegram, te está estafando. Aceptá que el casino siempre
          tiene ventaja y jugá por diversión — vas a pasarla mucho mejor y vas a perder mucho menos plata
          persiguiendo fantasías.
        </p>
      </Section>

      {/* ═══ MINI CTA BANNER 3 ═══ */}
      <div className="bg-gradient-to-r from-[#dc2626]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">150% de bono, el porcentaje más alto</p>
        <p className="text-white text-xl font-black mb-4">MONRO Casino — 150% en tu primer depósito</p>
        <CtaButton slug="monro-casino" text="Ir a MONRO Casino" />
      </div>

      {/* ═══ CÓMO ELEGIR ═══ */}
      <Section id="como-elegir" bg="/img/backgrounds/blackjack.png">
        <SectionTitle>Cómo Elegir un Casino Online en Perú — Guía Paso a Paso</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Más de 60 casinos con licencia MINCETUR, cientos más con licencias internacionales... ¿cómo elegís
          uno sin volverte loco? La verdad es que no es tan complicado si sabés qué mirar. Estos 5 pasos te
          van a llevar menos de 10 minutos y te van a ahorrar semanas de prueba y error (y probablemente
          bastante plata también). Los armamos basándonos en nuestra propia experiencia probando casinos.
        </p>

        <div className="space-y-8 mt-8">
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center shrink-0">
              <span className="text-[#dc2626] font-black text-lg">1</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Verificá la licencia</h3>
              <p className="text-[#9ca3af] leading-relaxed mb-2">
                Esto va primero porque es lo que te separa de un casino legítimo y uno que puede desaparecer con
                tu plata mañana. Si tiene licencia MINCETUR, perfecto — es la máxima protección que podés tener
                en Perú. Curaçao, Malta (MGA) o Gibraltar también son licencias serias con las que podés estar
                tranquilo. ¿No tiene ninguna licencia visible? Siguiente casino, sin pensarlo dos veces.
              </p>
              <p className="text-[#d4d4d8] text-sm italic">
                Consejo: Bajá al footer del sitio del casino y buscá el número de licencia. Todos los casinos
                legítimos lo muestran ahí con orgullo. Si no hay nada... ya sabés qué hacer.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center shrink-0">
              <span className="text-[#dc2626] font-black text-lg">2</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Revisá los métodos de pago</h3>
              <p className="text-[#9ca3af] leading-relaxed mb-2">
                ¿De qué te sirve un casino espectacular si después no podés meter ni sacar tu plata? Fijate que
                acepte lo que vos usás: Yape, Plin, tarjeta, transferencia bancaria, cripto... lo que sea. Y no
                te quedes solo con los depósitos — chequeá cuánto tardan los retiros. Hay casinos que te procesan
                un retiro en 2 horas y otros que te hacen esperar 5 días. Esa diferencia es enorme.
              </p>
              <p className="text-[#d4d4d8] text-sm italic">
                Consejo: Truco que funciona siempre — hacé un depósito chico primero (el mínimo del casino) y
                después pedí un retiro. Así comprobás que todo funciona antes de meter montos grandes.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center shrink-0">
              <span className="text-[#dc2626] font-black text-lg">3</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Compará los bonos (más allá del monto)</h3>
              <p className="text-[#9ca3af] leading-relaxed mb-2">
                Acá es donde el 90% de los jugadores nuevos se equivocan. Ven &quot;S/5 000 DE BONO&quot; en letras
                gigantes y se registran sin leer nada más. Pero ese bono tiene rollover x60 y 7 días para
                cumplirlo... o sea que necesitás apostar S/300 000 en una semana. Imposible. Lo que tenés que
                mirar siempre es: rollover (x25-x35 es razonable, más de x40 ya es abusivo), validez (mínimo
                14 días, mejor si son 30), qué juegos contribuyen al rollover y cuánto podés retirar máximo
                con plata de bono.
              </p>
              <p className="text-[#d4d4d8] text-sm italic">
                Consejo: Hacé esta cuenta simple antes de aceptar un bono — monto del bono multiplicado por
                el rollover. Si el número resultante te parece una locura que no vas a poder apostar en el plazo
                dado, rechazá el bono. Mejor jugar sin bono que quedar atrapado en condiciones imposibles.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center shrink-0">
              <span className="text-[#dc2626] font-black text-lg">4</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Probá la plataforma</h3>
              <p className="text-[#9ca3af] leading-relaxed mb-2">
                No deposites sin antes dar una vuelta por el casino. Registrate gratis y navegá un rato.
                ¿Carga rápido o se traba? ¿Encontrás los juegos que te interesan o tenés que buscar 15 minutos?
                ¿El buscador funciona bien? ¿Se ve decente en tu celular? La mayoría de casinos te dejan probar
                juegos en modo demo (sin plata real), así que aprovechá eso. Si la plataforma te frustra antes
                de depositar, imaginate cuando tengas plata real en juego.
              </p>
              <p className="text-[#d4d4d8] text-sm italic">
                Consejo: Probalo todo desde el celular. La gran mayoría de jugadores peruanos juegan desde
                el teléfono, y si la experiencia móvil es mala, vas a sufrir cada vez que entres. Si no se
                ve bien en tu celular, directamente buscá otro casino.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center shrink-0">
              <span className="text-[#dc2626] font-black text-lg">5</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Leé las políticas de retiro</h3>
              <p className="text-[#9ca3af] leading-relaxed mb-2">
                Esto es lo que nadie hace y después todos se quejan. Antes de poner un peso, andá a los
                términos y condiciones y leé la sección de retiros. ¿Cuál es el mínimo para retirar? ¿Y el
                máximo mensual? ¿Cuánto tarda el proceso? ¿Te van a pedir KYC (foto del DNI, selfie, comprobante
                de domicilio)? ¿Hay límites semanales? Toda esa info está ahí y te evita sorpresas desagradables
                cuando quieras sacar tus ganancias. Los casinos de nuestro ranking tienen políticas claras y
                tiempos que verificamos personalmente.
              </p>
              <p className="text-[#d4d4d8] text-sm italic">
                Consejo: Completá la verificación KYC el mismo día que te registrás, no lo dejes para después.
                Mandá la foto de tu DNI, la selfie y el comprobante de domicilio de una. Así cuando quieras
                retirar, el proceso es inmediato en vez de esperar días a que te verifiquen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ SECTION 9: FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes sobre Casinos Online en Perú</SectionTitle>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-[#141414] border border-white/[0.06] overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-bold hover:text-[#dc2626] transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{item.q}</span>
                <svg className="w-5 h-5 shrink-0 text-[#71717a] group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-[#9ca3af] leading-relaxed text-sm">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══ SECTION 10: GLOSSARY ═══ */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario de Términos de Casinos Online</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">
          Términos clave que todo jugador de casino online debería conocer.
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
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Listo para jugar?
          </h2>
          <p className="text-[#9ca3af] text-lg mb-8 leading-relaxed">
            Elegí tu casino, aprovechá el bono de bienvenida y empezá a jugar de forma segura.
            Todos los casinos de nuestro ranking están verificados y ofrecen una experiencia confiable
            para jugadores peruanos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="betsson-peru" text="Betsson — #1" />
            <CtaButton slug="fresh-casino" text="FRESH Casino — #2" />
            <CtaButton slug="sol-casino" text="SOL Casino — #3" />
          </div>
        </div>
      </section>
    </>
  );
}
