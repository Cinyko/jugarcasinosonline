import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mejores Casinos Online en Perú 2026 | Guía Completa",
  description:
    "Descubrí los mejores casinos online en Perú. Ranking actualizado, bonos verificados, métodos de pago locales y guías para jugar seguro.",
};

/* ───────── Casino data for this page ───────── */

const peruCasinos = [
  { rank: 1, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% hasta $500 + 200 giros gratis", rating: 9.5, license: "Curaçao", games: "4 500+", highlight: true },
  { rank: 2, name: "SOL Casino", slug: "sol-casino", bonus: "100% hasta $500 + 250 giros gratis", rating: 9.3, license: "Curaçao", games: "4 000+", highlight: false },
  { rank: 3, name: "MONRO Casino", slug: "monro-casino", bonus: "150% hasta $300 + 100 giros gratis", rating: 9.1, license: "Curaçao", games: "3 500+", highlight: false },
  { rank: 4, name: "STARDA Casino", slug: "starda-casino", bonus: "100% hasta $500 + 150 giros gratis", rating: 9.0, license: "Curaçao", games: "3 800+", highlight: false },
  { rank: 5, name: "Betano", slug: "betano", bonus: "60 giros gratis sin rollover", rating: 8.9, license: "MINCETUR", games: "2 000+", highlight: false },
  { rank: 6, name: "Betsson", slug: "betsson", bonus: "Hasta S/2000", rating: 8.8, license: "MINCETUR", games: "2 500+", highlight: false },
  { rank: 7, name: "Stake", slug: "stake", bonus: "200% hasta S/7500", rating: 8.8, license: "MINCETUR", games: "3 000+", highlight: false },
  { rank: 8, name: "Bet365", slug: "bet365", bonus: "100% hasta S/500", rating: 8.7, license: "MINCETUR", games: "1 800+", highlight: false },
  { rank: 9, name: "1xBet", slug: "1xbet", bonus: "100% hasta S/2000", rating: 8.6, license: "MINCETUR", games: "5 000+", highlight: false },
  { rank: 10, name: "Inkabet", slug: "inkabet", bonus: "Hasta S/500 + giros gratis", rating: 8.5, license: "MINCETUR", games: "1 200+", highlight: false },
  { rank: 11, name: "Doradobet", slug: "doradobet", bonus: "100% hasta S/500", rating: 8.4, license: "MINCETUR", games: "1 500+", highlight: false },
  { rank: 12, name: "Betcris", slug: "betcris", bonus: "100% primer depósito", rating: 8.3, license: "MINCETUR", games: "1 000+", highlight: false },
  { rank: 13, name: "Meridianbet", slug: "meridianbet", bonus: "Hasta S/500", rating: 8.2, license: "MINCETUR", games: "1 100+", highlight: false },
  { rank: 14, name: "Caliente", slug: "caliente", bonus: "Hasta S/1000", rating: 8.1, license: "MINCETUR", games: "1 300+", highlight: false },
];

const categoryPicks = [
  { title: "Mejor variedad de juegos", casino: "FRESH Casino", slug: "fresh-casino", reason: "Más de 4 500 juegos de 80+ proveedores. La selección más amplia del mercado." },
  { title: "Pagos más rápidos", casino: "Betano", slug: "betano", reason: "Retiros procesados en menos de 2 horas con Yape y Plin." },
  { title: "Mejor bono de bienvenida", casino: "MONRO Casino", slug: "monro-casino", reason: "150% en primer depósito, el porcentaje más alto entre nuestros recomendados." },
  { title: "Mejor para slots", casino: "STARDA Casino", slug: "starda-casino", reason: "Catálogo enfocado en tragamonedas con títulos exclusivos y torneos semanales." },
  { title: "Mejor casino en vivo", casino: "Betsson", slug: "betsson", reason: "Más de 200 mesas en vivo con dealers en español y mesas exclusivas Perú." },
  { title: "Mejor para principiantes", casino: "SOL Casino", slug: "sol-casino", reason: "Interfaz intuitiva, soporte en español 24/7 y bono amigable con rollover bajo." },
  { title: "Mejor atención al cliente", casino: "Bet365", slug: "bet365", reason: "Chat en vivo en español disponible 24/7 con tiempos de respuesta bajo 2 minutos." },
  { title: "Mejores métodos de pago para Perú", casino: "Stake", slug: "stake", reason: "Acepta Yape, Plin, transferencias bancarias, crypto y retiros instantáneos." },
  { title: "Casino más confiable", casino: "Betano", slug: "betano", reason: "Una de las primeras plataformas en obtener licencia MINCETUR en Perú." },
  { title: "Mejor casino cripto", casino: "Stake", slug: "stake", reason: "Líder mundial en casino con criptomonedas, acepta BTC, ETH, USDT y más." },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino online en Perú en 2026?", a: "Según nuestro análisis, FRESH Casino es la mejor opción general por su enorme catálogo de más de 4 500 juegos, bono de bienvenida competitivo (100% hasta $500 + 200 giros gratis) y soporte en español 24/7. Sin embargo, si buscás un casino con licencia MINCETUR, Betano y Betsson son las opciones más confiables." },
  { q: "¿Es legal jugar en casinos online desde Perú?", a: "Sí, es completamente legal. Desde febrero de 2024, MINCETUR regula y otorga licencias a operadores de juego online en Perú mediante la Ley N° 31557 y su reglamento. Más de 60 operadores ya cuentan con licencia oficial." },
  { q: "¿Puedo jugar con soles peruanos (PEN)?", a: "Sí. La mayoría de casinos con licencia MINCETUR operan en soles peruanos. Casinos internacionales como FRESH o SOL también aceptan depósitos desde Perú, aunque pueden operar en dólares con conversión automática." },
  { q: "¿Qué métodos de pago aceptan los casinos en Perú?", a: "Los métodos más comunes son Yape, Plin, tarjetas Visa/Mastercard, transferencias bancarias (BCP, BBVA, Interbank), PagoEfectivo, monederos electrónicos (Skrill, Neteller) y criptomonedas (Bitcoin, USDT)." },
  { q: "¿Puedo depositar con Yape o Plin?", a: "Sí. Varios casinos como Stake, Betano, Betsson e Inkabet aceptan depósitos a través de Yape y Plin. Los depósitos son instantáneos y los retiros suelen procesarse en menos de 24 horas." },
  { q: "¿Qué es el rollover de un bono?", a: "El rollover (o wagering) es la cantidad de veces que tenés que apostar el monto del bono antes de poder retirarlo. Por ejemplo, si recibís un bono de S/100 con rollover x30, necesitás apostar S/3 000 antes de retirar las ganancias del bono." },
  { q: "¿Puedo jugar desde el celular?", a: "Sí. Todos los casinos de nuestro ranking están optimizados para móvil. Podés jugar desde el navegador de tu celular sin descargar nada, o usar las apps nativas que ofrecen algunos operadores como Betano, Betsson y Bet365." },
  { q: "¿Tengo que pagar impuestos por mis ganancias?", a: "En Perú, las ganancias de juegos de azar están sujetas al Impuesto a la Renta. Los operadores con licencia MINCETUR retienen un porcentaje en la fuente. Consultá con un contador para tu situación específica." },
  { q: "¿Cómo sé si un casino tiene licencia MINCETUR?", a: "Podés verificarlo en la página oficial de MINCETUR (mincetur.gob.pe) donde publican el registro de operadores autorizados. Los casinos legales también muestran su número de licencia en el footer de su sitio web." },
  { q: "¿Qué hago si un casino no me paga?", a: "Si el casino tiene licencia MINCETUR, podés presentar una queja formal ante el ministerio. Si es un casino internacional, contactá primero a su soporte. Si no resuelven, dejá una reseña documentada y reportalo en foros especializados. Elegir casinos de nuestro ranking reduce significativamente este riesgo." },
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
function Section({ id, alt = false, children }: { id: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`${alt ? "bg-[#0e0e0e]" : "bg-[#0a0a0a]"} py-16 sm:py-24`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
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
  dateModified: "2026-03-19",
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

      {/* ═══ BREADCRUMB ═══ */}
      <div className="bg-[#0a0a0a] border-b border-white/[0.04]">
        <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4 text-sm text-[#71717a]">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/peru/" className="hover:text-white transition-colors">Perú</Link></li>
            <li>/</li>
            <li className="text-white font-medium">Mejores Casinos Online</li>
          </ol>
        </nav>
      </div>

      {/* ═══ SECTION 1: HERO + TABLE ═══ */}
      <Section id="ranking">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
          Mejores Casinos Online en Perú <span className="bg-gradient-to-r from-[#dc2626] to-[#f59e0b] bg-clip-text text-transparent">2026</span>
        </h1>

        <p className="text-[#9ca3af] text-lg leading-relaxed mb-4 max-w-3xl">
          El mercado de casinos online en Perú vive un momento único. Desde que MINCETUR comenzó a otorgar licencias
          oficiales en febrero de 2024, los jugadores peruanos cuentan con más opciones seguras que nunca.
          Ya son más de 60 operadores regulados, y la oferta sigue creciendo.
        </p>
        <p className="text-[#9ca3af] text-lg leading-relaxed mb-8 max-w-3xl">
          En esta guía analizamos los <strong className="text-white">14 mejores casinos online disponibles en Perú</strong>,
          evaluando bonos, catálogo de juegos, métodos de pago locales (sí, Yape y Plin incluidos), atención al cliente
          y confiabilidad. Todo para que elijas la plataforma que más te conviene sin arriesgar tu plata.
        </p>

        {/* ── COMPARISON TABLE ── */}
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-4 font-bold">#</th>
                <th className="px-4 py-4 font-bold">Casino</th>
                <th className="px-4 py-4 font-bold hidden sm:table-cell">Bono de Bienvenida</th>
                <th className="px-4 py-4 font-bold hidden md:table-cell">Licencia</th>
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
                    <span className={`font-extrabold ${c.highlight ? "text-[#fbbf24]" : "text-white"}`}>{c.name}</span>
                    <span className="block sm:hidden text-xs text-[#71717a] mt-1">{c.bonus}</span>
                  </td>
                  <td className="px-4 py-4 text-[#d4d4d8] hidden sm:table-cell">{c.bonus}</td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${c.license === "MINCETUR" ? "bg-[#22c55e]/10 text-[#22c55e]" : "bg-[#f59e0b]/10 text-[#f59e0b]"}`}>
                      {c.license}
                    </span>
                  </td>
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
        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
          <h2 className="text-lg font-black text-white mb-4">Tabla de Contenidos</h2>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {[
              { href: "#ranking", label: "Ranking de Casinos Online en Perú" },
              { href: "#analisis", label: "Análisis Detallado de los Top Casinos" },
              { href: "#prioridad", label: "Mejor Casino Según Tu Prioridad" },
              { href: "#bonos", label: "Tipos de Bonos Explicados" },
              { href: "#pagos", label: "Métodos de Pago en Perú" },
              { href: "#legal", label: "¿Es Legal Jugar en Perú?" },
              { href: "#juegos", label: "Juegos Más Populares" },
              { href: "#responsable", label: "Juego Responsable" },
              { href: "#faq", label: "Preguntas Frecuentes" },
              { href: "#glosario", label: "Glosario de Términos" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-[#9ca3af] hover:text-white transition-colors py-1 flex items-center gap-2">
                <span className="text-[#dc2626]">&#9656;</span> {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Section>

      {/* ═══ SECTION 2: DETAILED ANALYSIS ═══ */}
      <Section id="analisis" alt>
        <SectionTitle>Análisis Detallado de los Mejores Casinos</SectionTitle>
        <p className="text-[#9ca3af] mb-12 max-w-3xl leading-relaxed">
          Revisamos a fondo los casinos mejor puntuados de nuestro ranking. Para cada uno
          evaluamos la plataforma, bonos, métodos de pago y experiencia general.
        </p>

        {/* ── FRESH Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. FRESH Casino</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">Plataforma y Juegos</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            FRESH Casino se posiciona como una de las plataformas más completas disponibles para jugadores peruanos.
            Con un catálogo que supera los <strong className="text-white">4 500 juegos</strong> de más de 80 proveedores
            — incluyendo gigantes como Pragmatic Play, Evolution Gaming, NetEnt, Play&apos;n GO y Microgaming —
            la variedad es difícil de igualar.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La plataforma destaca por su diseño moderno y navegación fluida tanto en desktop como en móvil.
            Las categorías están bien organizadas: slots, casino en vivo, juegos de mesa, jackpots progresivos
            y una sección de &quot;nuevos juegos&quot; que se actualiza semanalmente. Los tiempos de carga son
            rápidos y la experiencia en celular es prácticamente idéntica a la versión de escritorio.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            En la sección de casino en vivo encontrarás más de 300 mesas, con opciones en español que incluyen
            ruleta, blackjack, baccarat y game shows populares como Crazy Time y Monopoly Live. Los límites de
            apuesta van desde S/1 hasta más de S/50 000, cubriendo tanto a principiantes como a high rollers.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Bonos y Promociones</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de bienvenida de FRESH Casino es de <strong className="text-white">100% hasta $500 + 200 giros gratis</strong>,
            distribuidos en los primeros 10 días después del depósito. El depósito mínimo para activar el bono es
            de $20 (o equivalente en soles), y el rollover es de x35 sobre el monto del bono.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Además del bono de bienvenida, FRESH ofrece recargas semanales (50% los viernes), cashback
            del 10% los lunes, torneos de slots con premios de hasta $10 000 y un programa VIP de 7 niveles
            con beneficios que incluyen retiros más rápidos, bonos personalizados y un gerente de cuenta dedicado.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Métodos de Pago</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            FRESH Casino acepta tarjetas Visa y Mastercard, transferencias bancarias, monederos electrónicos
            (Skrill, Neteller, ecoPayz) y criptomonedas (Bitcoin, Ethereum, Litecoin, USDT). El depósito
            mínimo es de $10 y los retiros se procesan entre 0 y 24 horas para e-wallets y crypto, y entre
            1 y 3 días hábiles para tarjetas y transferencias. El límite de retiro mensual es de $50 000, que
            se incrementa para miembros VIP.
          </p>

          <ProsCons
            pros={[
              "Catálogo masivo de 4 500+ juegos de 80+ proveedores",
              "Bono de bienvenida generoso con 200 giros gratis",
              "Casino en vivo con 300+ mesas y opciones en español",
              "Programa VIP con 7 niveles y beneficios reales",
              "Soporte en español 24/7 por chat en vivo",
              "Acepta criptomonedas con retiros instantáneos",
            ]}
            cons={[
              "No tiene licencia MINCETUR (opera con licencia Curaçao)",
              "No acepta Yape ni Plin directamente",
              "Rollover de x35 puede ser alto para algunos jugadores",
            ]}
          />
          <CtaButton slug="fresh-casino" text="Jugar en FRESH Casino" />
        </div>

        {/* ── SOL Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">2. SOL Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#dc2626] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">Plataforma y Juegos</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            SOL Casino es la opción ideal para quienes buscan una experiencia de casino online sin complicaciones.
            Con más de <strong className="text-white">4 000 juegos</strong> disponibles, ofrece una selección más
            que suficiente para cualquier tipo de jugador. La interfaz es limpia, intuitiva y especialmente
            amigable para principiantes.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Los proveedores incluyen Pragmatic Play, Evolution, BGaming, Endorphina y Spinomenal, entre otros.
            La sección de slots es particularmente fuerte, con filtros por proveedor, volatilidad y popularidad.
            El casino en vivo cuenta con más de 200 mesas, incluyendo variantes en español y mesas exclusivas.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Bonos y Promociones</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            SOL Casino ofrece <strong className="text-white">100% hasta $500 + 250 giros gratis</strong> como
            bono de bienvenida. Tiene la mayor cantidad de free spins entre nuestros top 4. El rollover
            es de x30 (más bajo que FRESH), y los giros se activan en bloques de 25 por día durante 10 días.
            Las promociones regulares incluyen cashback semanal del 15% y torneos diarios.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Métodos de Pago</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Acepta Visa, Mastercard, Skrill, Neteller, Bitcoin, Ethereum, Litecoin y USDT.
            Depósito mínimo de $10. Retiros procesados en 0-24h para crypto y e-wallets, 1-3 días para tarjetas.
            El límite de retiro es de $40 000 mensuales.
          </p>

          <ProsCons
            pros={[
              "250 giros gratis, la mejor oferta de free spins",
              "Rollover de x30, más accesible que la competencia",
              "Interfaz muy amigable para principiantes",
              "Cashback semanal del 15% sin rollover",
              "Soporte en español 24/7",
            ]}
            cons={[
              "Sin licencia MINCETUR (Curaçao)",
              "Catálogo ligeramente menor que FRESH",
              "No acepta métodos de pago locales peruanos",
            ]}
          />
          <CtaButton slug="sol-casino" text="Jugar en SOL Casino" />
        </div>

        {/* ── MONRO Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">3. MONRO Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.1/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#dc2626] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">Plataforma y Juegos</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            MONRO Casino apunta a un público que busca valor. Con más de <strong className="text-white">3 500 juegos</strong>,
            la plataforma tiene todo lo que necesitás: slots de alta volatilidad, casino en vivo con mesas
            en español, video poker, juegos crash y una sección de deportes virtuales.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            La navegación es sencilla y el sitio está completamente disponible en español. Funciona bien
            en móviles y los juegos cargan rápido incluso con conexiones más lentas. Los proveedores principales
            son Pragmatic Play, Spinomenal, BGaming, Belatra y Tom Horn Gaming.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Bonos y Promociones</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El punto fuerte de MONRO es su bono de <strong className="text-white">150% hasta $300 + 100 giros gratis</strong>.
            Es el porcentaje más alto de nuestro top 4. Con un depósito de $100, recibís $150 de bono.
            El rollover es de x35 con 14 días para completarlo. Las tiradas gratis se acreditan en bloques
            de 20 durante 5 días. También ofrecen recarga del 50% los miércoles y programa de cashback escalonado.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Métodos de Pago</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Visa, Mastercard, Skrill, Neteller, Bitcoin y otras criptomonedas. Depósito mínimo de $15.
            Los retiros con crypto se procesan en menos de 1 hora. Para tarjetas y transferencias, entre
            1 y 5 días hábiles. Límite mensual de $30 000.
          </p>

          <ProsCons
            pros={[
              "Bono del 150%, el porcentaje más alto del ranking",
              "Buena selección de juegos crash y deportes virtuales",
              "Retiros crypto en menos de 1 hora",
              "Sitio completamente en español",
            ]}
            cons={[
              "Sin licencia MINCETUR",
              "Límite de retiro mensual más bajo ($30k)",
              "Catálogo más pequeño que FRESH y SOL",
              "100 giros gratis es la oferta más baja del top 4",
            ]}
          />
          <CtaButton slug="monro-casino" text="Jugar en MONRO Casino" />
        </div>

        {/* ── STARDA Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">4. STARDA Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.0/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#dc2626] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">Plataforma y Juegos</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            STARDA Casino está pensado para los fanáticos de las tragamonedas. Con <strong className="text-white">3 800+ juegos</strong>
            y una sección de slots que ocupa el centro de la experiencia, es la opción perfecta si lo tuyo
            es girar rodillos. Los proveedores estrella incluyen Pragmatic Play (Sweet Bonanza, Gates of Olympus),
            Push Gaming, Hacksaw Gaming y Nolimit City.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Además de slots, STARDA organiza torneos semanales donde podés competir contra otros jugadores
            por premios que llegan hasta los $15 000. El casino en vivo tiene unas 150 mesas,
            y la sección de juegos crash (Aviator, Spaceman, JetX) es una de las más completas del mercado.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Bonos y Promociones</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Bono de <strong className="text-white">100% hasta $500 + 150 giros gratis</strong>, con rollover de x35.
            Los giros se asignan a la slot &quot;Book of Gold&quot; de Playson, un título de alta volatilidad
            con buen RTP. STARDA también ofrece bonos especiales para torneos, cashback del 10% los fines
            de semana y un programa VIP de 5 niveles con recompensas por lealtad.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Métodos de Pago</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Visa, Mastercard, Skrill, Neteller, Bitcoin, Ethereum, Litecoin, Dogecoin y USDT.
            Depósito mínimo de $10. Retiros crypto instantáneos, e-wallets en 0-12h, tarjetas en 1-3 días.
            Límite mensual de $40 000 que se eleva para VIP.
          </p>

          <ProsCons
            pros={[
              "Paraíso para amantes de las slots con torneos semanales",
              "Acepta Dogecoin y amplia variedad de criptos",
              "Juegos crash bien representados (Aviator, Spaceman, JetX)",
              "Programa VIP con beneficios escalables",
            ]}
            cons={[
              "Sin licencia MINCETUR",
              "Casino en vivo más limitado (150 mesas vs 300 de FRESH)",
              "Free spins asignados a un solo juego",
            ]}
          />
          <CtaButton slug="starda-casino" text="Jugar en STARDA Casino" />
        </div>

        {/* ── Menciones Destacadas ── */}
        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
          <h3 className="text-xl font-black text-white mb-6">Menciones Destacadas</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Betano <span className="text-[#22c55e] text-sm font-black">8.9/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed">
                Betano fue una de las primeras plataformas en obtener licencia MINCETUR, lo que la convierte en
                una de las opciones más seguras para jugadores peruanos. Su bono de 60 giros gratis sin rollover
                es único en el mercado — lo que ganás con esos giros, te lo podés retirar directamente.
                Acepta Yape y Plin, y los retiros se procesan en horas. Si la prioridad es seguridad y pagos
                rápidos con métodos locales, Betano es una apuesta segura.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-2">Betsson <span className="text-[#22c55e] text-sm font-black">8.8/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed">
                Betsson es un gigante europeo con más de 20 años de experiencia en el mercado. En Perú opera
                con licencia MINCETUR y ofrece una plataforma muy pulida con más de 2 500 juegos. Su punto
                fuerte es el casino en vivo, con más de 200 mesas exclusivas y dealers en español. El bono
                de hasta S/2 000 es generoso para el mercado local. Ideal para quienes buscan una marca
                establecida con reputación internacional impecable.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-2">Stake <span className="text-[#22c55e] text-sm font-black">8.8/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed">
                Stake revolucionó el mundo del casino online con criptomonedas y ahora opera en Perú con
                licencia MINCETUR. Su bono de 200% hasta S/7 500 es el más grande del mercado peruano.
                Acepta Yape, Plin, transferencias bancarias y prácticamente cualquier criptomoneda que exista.
                Es la plataforma preferida de streamers como xQc y Roshtein. Si te gustan las cripto o buscás
                el bono más grande, Stake es tu mejor opción.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ MINI CTA BANNER ═══ */}
      <div className="bg-gradient-to-r from-[#dc2626]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">Nuestro casino #1 recomendado para jugadores peruanos</p>
        <p className="text-white text-xl font-black mb-4">FRESH Casino — 100% hasta $500 + 200 Giros Gratis</p>
        <CtaButton slug="fresh-casino" />
      </div>

      {/* ═══ SECTION 3: BY PRIORITY ═══ */}
      <Section id="prioridad">
        <SectionTitle>Mejor Casino Según Tu Prioridad</SectionTitle>
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

      {/* ═══ SECTION 4: BONUS TYPES ═══ */}
      <Section id="bonos" alt>
        <SectionTitle>Tipos de Bonos de Casino Online Explicados</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Los bonos son una de las mejores herramientas que tenés como jugador. Pero no todos los bonos
          son iguales, y entender las diferencias puede ahorrarte problemas y ayudarte a sacar más
          provecho de tu plata.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Bienvenida</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Es el bono que recibís al hacer tu primer depósito. Normalmente es un porcentaje del monto
              depositado. Por ejemplo, un <strong className="text-white">&quot;100% hasta $500&quot;</strong> significa
              que si depositás $200, el casino te regala otros $200 para jugar, hasta un máximo de $500.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Importe típico:</strong> Entre 100% y 200% del primer depósito.
              <br /><strong className="text-white">Rollover habitual:</strong> x25 a x40.
              <br /><strong className="text-white">Validez:</strong> 7 a 30 días para cumplir el rollover.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Fijate siempre en el rollover, no solo en el monto. Un bono de $300 con rollover x25
              es mejor que uno de $500 con rollover x50.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono Sin Depósito</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              El santo grial de los bonos. Te lo dan solo por registrarte, sin necesidad de depositar un solo sol.
              Puede ser un monto en efectivo (por ejemplo, $10 gratis) o tiradas gratis. La trampa es que el
              rollover suele ser alto (x40-x60) y el retiro máximo está limitado.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Importe típico:</strong> $5 a $25 o 10-50 tiradas gratis.
              <br /><strong className="text-white">Rollover habitual:</strong> x40 a x60.
              <br /><strong className="text-white">Validez:</strong> 3 a 7 días.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Usalo para probar el casino sin riesgo. No esperes hacer fortuna con un bono sin depósito,
              pero es ideal para testear la plataforma.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tiradas Gratis / Free Spins</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Giros gratuitos para usar en tragamonedas específicas. Pueden venir como parte del bono de
              bienvenida o como promoción independiente. Las ganancias de los free spins generalmente se
              acreditan como bono sujeto a rollover.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Cantidad típica:</strong> 20 a 250 giros.
              <br /><strong className="text-white">Valor por giro:</strong> $0.10 a $0.50.
              <br /><strong className="text-white">Rollover de ganancias:</strong> x20 a x40.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Fijate en el valor del giro. 50 giros a $0.10 cada uno ($5 total) es peor que
              20 giros a $0.50 ($10 total).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Cashback</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Devolución de un porcentaje de tus pérdidas netas durante un período. Si perdiste S/1 000 en
              la semana y el cashback es del 10%, recibís S/100 de vuelta. Es uno de los bonos más justos
              porque te devuelve plata que ya perdiste.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Porcentaje típico:</strong> 5% a 20%.
              <br /><strong className="text-white">Rollover:</strong> x0 a x5 (mucho más bajo que otros bonos).
              <br /><strong className="text-white">Frecuencia:</strong> Diario, semanal o mensual.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: El cashback sin rollover es dinero real. Buscá casinos que lo ofrezcan así, como SOL Casino
              con su cashback semanal del 15%.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Recarga</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Similar al bono de bienvenida, pero para depósitos posteriores al primero. Suelen ser porcentajes
              más bajos (20%-50%) pero se repiten cada semana o mes. Son una buena forma de mantener tu bankroll
              activo sin arriesgar solo tu plata.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Importe típico:</strong> 25% a 50% del depósito.
              <br /><strong className="text-white">Rollover:</strong> x25 a x35.
              <br /><strong className="text-white">Frecuencia:</strong> Semanal (viernes es el día más común).
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: FRESH Casino ofrece 50% los viernes, que es uno de los mejores bonos de recarga del mercado.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Programa VIP / Lealtad</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Sistema de niveles que premia tu actividad. Mientras más jugás, más puntos acumulás y más
              beneficios desbloqueás: mejor cashback, límites de retiro más altos, bonos exclusivos,
              retiros prioritarios y hasta un gerente de cuenta personal.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">Niveles típicos:</strong> 5 a 10 niveles.
              <br /><strong className="text-white">Beneficios clave:</strong> Retiros más rápidos, cashback mejorado, bonos personalizados.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Si jugás regularmente, elegí un casino con buen programa VIP desde el principio.
              FRESH Casino tiene uno de los más completos con 7 niveles.
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
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Bono más grande en %", "MONRO Casino (150%)"],
                ["Más free spins", "SOL Casino (250 giros)"],
                ["Bono sin rollover", "Betano (60 giros, rollover x0)"],
                ["Mejor cashback", "SOL Casino (15% semanal)"],
                ["Bono de recarga semanal", "FRESH Casino (50% viernes)"],
                ["Mejor programa VIP", "FRESH Casino (7 niveles)"],
                ["Bono más grande en monto", "Stake (200% hasta S/7 500)"],
              ].map(([need, best]) => (
                <tr key={need} className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3">{need}</td>
                  <td className="px-4 py-3 font-bold text-white">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ SECTION 5: PAYMENT METHODS ═══ */}
      <Section id="pagos">
        <SectionTitle>Métodos de Pago para Casinos Online en Perú</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Una de las grandes ventajas de jugar en casinos con licencia MINCETUR es que aceptan
          métodos de pago locales. Acá te explicamos todas las opciones disponibles para depositar
          y retirar tu plata.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Yape</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              La billetera digital del BCP y la más popular en Perú con más de 15 millones de usuarios.
              Depósitos instantáneos, sin comisiones en la mayoría de casinos. Retiros procesados entre
              1 y 24 horas. Disponible en Stake, Betano, Betsson, Inkabet y Doradobet, entre otros.
              Es el método más cómodo si ya usás Yape para todo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Plin</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              La alternativa a Yape, respaldada por Interbank, BBVA y Scotiabank. Funciona de manera
              similar: depósitos instantáneos y retiros en menos de 24 horas. Aceptada en los mismos
              casinos que Yape. Si tu banco principal no es BCP, Plin es tu mejor opción.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tarjetas Visa / Mastercard</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              El método más universal. Aceptado en todos los casinos de nuestro ranking. Depósitos
              instantáneos, retiros en 1-5 días hábiles dependiendo del banco emisor. Las tarjetas
              de débito también funcionan. Algunos bancos peruanos pueden bloquear transacciones
              a casinos internacionales — si eso pasa, usá un e-wallet como intermediario.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Transferencia Bancaria</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Disponible con los principales bancos peruanos: BCP, BBVA, Interbank y Scotiabank.
              Ideal para montos grandes. Depósitos se procesan en minutos a pocas horas, retiros
              en 1-3 días hábiles. Sin comisiones en la mayoría de casinos regulados.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">PagoEfectivo</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Método único de Perú que te permite pagar en efectivo en bodegas, farmacias y agentes
              bancarios. Generás un código en el casino, vas a cualquier punto PagoEfectivo y pagás.
              Ideal si no tenés cuenta bancaria o preferís no usar tarjeta online. Solo para depósitos,
              los retiros se hacen por otro método.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Monederos Electrónicos (Skrill, Neteller)</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              E-wallets internacionales muy usados en casinos online. Depósitos instantáneos y retiros
              en 0-24 horas (los más rápidos junto con crypto). Útiles como intermediarios si tu banco
              bloquea pagos directos. Skrill y Neteller cobran una pequeña comisión por transacción.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Criptomonedas (Bitcoin, USDT, Ethereum)</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              El método más rápido para retiros: generalmente instantáneos o en menos de 1 hora.
              Sin comisiones del casino (solo el fee de la red blockchain). Aceptadas en FRESH, SOL,
              MONRO, STARDA y Stake. Bitcoin, Ethereum, Litecoin, USDT (Tether) y Dogecoin son las
              más comunes. Si ya manejás cripto, es la mejor opción por velocidad y privacidad.
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
      </Section>

      {/* ═══ MINI CTA BANNER 2 ═══ */}
      <div className="bg-gradient-to-r from-[#22c55e]/10 via-[#0e0e0e] to-[#22c55e]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">Acepta Yape, Plin, crypto y más</p>
        <p className="text-white text-xl font-black mb-4">Stake — 200% hasta S/7 500</p>
        <CtaButton slug="stake" text="Ir a Stake" />
      </div>

      {/* ═══ SECTION 6: LEGAL ═══ */}
      <Section id="legal" alt>
        <SectionTitle>¿Es Legal Jugar en Casinos Online en Perú?</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Sí, jugar en casinos online desde Perú es completamente legal.</strong> El marco
          regulatorio lo establece la <strong className="text-white">Ley N° 31557</strong>, promulgada en agosto de 2022,
          y su reglamento aprobado mediante el <strong className="text-white">Decreto Supremo N° 005-2023-MINCETUR</strong>.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">La regulación MINCETUR</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Desde febrero de 2024, el Ministerio de Comercio Exterior y Turismo (MINCETUR) es el organismo
          encargado de regular, supervisar y otorgar licencias a los operadores de juego online en Perú.
          Para operar legalmente, los casinos deben cumplir con requisitos estrictos de capital, seguridad
          informática, protección al jugador y juego responsable.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          A la fecha, <strong className="text-white">más de 60 operadores han obtenido licencia MINCETUR</strong>.
          Entre los más conocidos están Betano, Betsson, Stake, Bet365, 1xBet, Inkabet, Doradobet,
          Betcris, Meridianbet y Caliente. La lista crece constantemente.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Cómo verificar la licencia de un casino?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Podés verificar si un casino tiene licencia MINCETUR de dos maneras: (1) visitando la página
          oficial de MINCETUR donde publican el registro actualizado de operadores autorizados, o (2)
          revisando el footer del sitio web del casino, donde los operadores legales muestran su número
          de autorización.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">Licencias internacionales</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Casinos con licencias de Curaçao, Malta (MGA) o Gibraltar también operan en Perú. Aunque no
          tienen la licencia local MINCETUR, no es ilegal que los peruanos jueguen en ellos. Estas
          licencias internacionales garantizan estándares de seguridad y fairplay. FRESH Casino, SOL Casino,
          MONRO Casino y STARDA Casino operan con licencia de Curaçao y tienen una trayectoria sólida.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">Impuestos sobre ganancias</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          En Perú, las ganancias de juegos de azar están sujetas al Impuesto a la Renta como rentas de
          fuente peruana. Los operadores con licencia MINCETUR están obligados a retener un porcentaje
          en la fuente. Para casinos internacionales, el jugador es responsable de declarar sus ganancias.
          Te recomendamos consultar con un contador para entender tu situación fiscal específica.
        </p>

        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6 mt-8">
          <p className="text-[#22c55e] font-bold mb-2">En resumen:</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Jugar en casinos online desde Perú es legal y seguro siempre que elijas operadores con licencia
            MINCETUR o licencias internacionales reconocidas. Todos los casinos de nuestro ranking cumplen
            con estos estándares.
          </p>
        </div>
      </Section>

      {/* ═══ SECTION 7: POPULAR GAMES ═══ */}
      <Section id="juegos">
        <SectionTitle>Juegos Más Populares en Casinos Online</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Entender los juegos que vas a jugar te da una ventaja enorme. Acá desglosamos los más populares
          con datos reales que te ayudan a elegir mejor.
        </p>

        {/* Slots */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Tragamonedas / Slots</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Las tragamonedas representan más del 80% del catálogo de cualquier casino online. Son juegos
            de suerte pura, pero hay conceptos clave que te ayudan a elegir las mejores:
          </p>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-1">RTP (Return to Player)</p>
            <p className="text-[#9ca3af] text-sm">
              El porcentaje teórico que el juego devuelve a largo plazo. Un RTP de 96% significa que
              por cada S/100 apostados, el juego devuelve S/96 en promedio. Siempre elegí slots con
              RTP de 96% o más.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-1">Volatilidad</p>
            <p className="text-[#9ca3af] text-sm">
              <strong className="text-white">Baja:</strong> Premios frecuentes y pequeños. Ideal para prolongar sesiones.
              <br /><strong className="text-white">Media:</strong> Balance entre frecuencia y tamaño de premios.
              <br /><strong className="text-white">Alta:</strong> Premios raros pero potencialmente enormes. Para jugadores con bankroll grande y paciencia.
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
            Las tragamonedas más jugadas por peruanos son <strong className="text-white">Sweet Bonanza</strong> (Pragmatic Play,
            RTP 96.5%, volatilidad alta — la favorita por sus multiplicadores explosivos),
            <strong className="text-white"> Gates of Olympus</strong> (Pragmatic Play, RTP 96.5%, volatilidad alta — el dios Zeus
            que reparte multiplicadores desde el cielo) y <strong className="text-white">Big Bass Bonanza</strong> (Pragmatic Play,
            RTP 96.7%, volatilidad alta — temática de pesca con free spins muy generosos).
          </p>
        </div>

        {/* Roulette */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Ruleta</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La ruleta es el juego de casino por excelencia. Pero no todas las variantes son iguales,
            y elegir la correcta marca una diferencia enorme en tus chances.
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
            La ruleta americana tiene doble cero (0 y 00), lo que casi duplica la ventaja del casino.
            Siempre elegí la europea o la francesa. La diferencia parece pequeña, pero a largo plazo
            tu bankroll lo agradece enormemente.
          </p>
        </div>

        {/* Blackjack */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Blackjack</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El blackjack es uno de los pocos juegos de casino donde tu habilidad impacta directamente
            en el resultado. Con estrategia básica óptima, la ventaja del casino baja a apenas
            <strong className="text-white"> 0.5%</strong>, haciéndolo el juego con mejor retorno en todo el casino.
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
          <p className="text-[#d4d4d8] text-sm italic">
            Esta estrategia simplificada no es perfecta, pero reduce significativamente la ventaja del casino.
            Si querés la tabla completa, buscá &quot;blackjack basic strategy chart&quot; online.
          </p>
        </div>

        {/* Live Casino */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Casino en Vivo</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El casino en vivo conecta a jugadores con dealers reales a través de transmisión en video
            HD en tiempo real. Es lo más cercano a la experiencia de un casino físico sin salir de casa.
            Los juegos se transmiten desde estudios profesionales y podés interactuar con el dealer y
            otros jugadores por chat.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">Evolution Gaming</strong> es el proveedor líder, responsable de títulos como
            Crazy Time, Lightning Roulette, Monopoly Live y Dream Catcher. Otros proveedores importantes
            son Pragmatic Play Live y Ezugi. La mayoría ofrecen mesas con dealers que hablan español,
            lo que mejora mucho la experiencia para jugadores peruanos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed">
            Los juegos disponibles en vivo incluyen ruleta, blackjack, baccarat, poker (Casino Hold&apos;em,
            Three Card Poker), sic bo y game shows. Los límites suelen ser más altos que en juegos
            automatizados, desde S/5 hasta más de S/100 000 por ronda.
          </p>
        </div>
      </Section>

      {/* ═══ SECTION 8: RESPONSIBLE GAMBLING ═══ */}
      <Section id="responsable" alt>
        <SectionTitle>Juego Responsable</SectionTitle>

        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mb-8">
          <p className="text-[#f59e0b] font-bold mb-2">Recordatorio importante</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            El juego en casinos online es entretenimiento, no una forma de ganar plata. Siempre jugá
            con dinero que podés permitirte perder y nunca intentes recuperar pérdidas apostando más.
          </p>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">Herramientas de Control</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Todos los casinos regulados ofrecen herramientas para controlar tu actividad de juego:
        </p>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {[
            "Límites de depósito: Configurá un máximo diario, semanal o mensual.",
            "Límites de apuesta: Establecé cuánto podés apostar por ronda.",
            "Límites de pérdida: El casino te bloquea cuando alcanzás un monto de pérdida.",
            "Límites de tiempo: Recibí alertas después de cierto tiempo de sesión.",
            "Autoexclusión temporal: Bloqueá tu cuenta por días, semanas o meses.",
            "Autoexclusión permanente: Cierre definitivo de la cuenta.",
          ].map((tool) => (
            <li key={tool} className="flex items-start gap-2 text-sm">
              <span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span> {tool}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-white mb-3">Señales de Juego Problemático</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Prestá atención si reconocés alguna de estas señales:
        </p>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {[
            "Apostás más de lo que podés permitirte perder.",
            "Intentás recuperar pérdidas aumentando las apuestas.",
            "El juego afecta tus relaciones, trabajo o estudios.",
            "Mentís sobre cuánto tiempo o plata dedicás al juego.",
            "Te sentís ansioso o irritable cuando no podés jugar.",
            "Pedís plata prestada para jugar.",
          ].map((sign) => (
            <li key={sign} className="flex items-start gap-2 text-sm">
              <span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span> {sign}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-white mb-3">Recursos de Ayuda en Perú</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Si vos o alguien cercano tiene problemas con el juego, existen recursos disponibles:
          la <strong className="text-white">Línea 113</strong> del Ministerio de Salud ofrece orientación sobre adicciones,
          y organizaciones como <strong className="text-white">Jugadores Anónimos Perú</strong> brindan apoyo entre pares.
          No tengas vergüenza de pedir ayuda — es una señal de fortaleza, no de debilidad.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-8">Gestión de Bankroll</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Manejar tu bankroll (presupuesto de juego) correctamente es la habilidad más importante
          que podés desarrollar:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Regla del 5%</p>
            <p className="text-[#9ca3af] text-sm">
              Nunca apuestes más del 5% de tu bankroll total en una sola ronda. Si tu presupuesto
              es S/500, tu apuesta máxima debería ser S/25.
            </p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Stop Loss</p>
            <p className="text-[#9ca3af] text-sm">
              Definí antes de jugar cuánto estás dispuesto a perder y respetalo. Si tu stop loss
              es S/200 y los perdés, dejá de jugar. Sin excepciones.
            </p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Sesiones</p>
            <p className="text-[#9ca3af] text-sm">
              Dividí tu bankroll mensual en sesiones. Si tu presupuesto es S/1 000 al mes,
              jugá 10 sesiones de S/100 en vez de ponerlo todo de una.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">Sistemas que NO Funcionan</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          No existe ningún sistema de apuestas que venza al casino a largo plazo. La
          <strong className="text-white"> Martingala</strong> (doblar después de perder) y la
          <strong className="text-white"> Fibonacci</strong> (seguir la secuencia 1-1-2-3-5-8...) son las más conocidas
          y las dos fallan por la misma razón: eventualmente golpeás el límite de la mesa o te quedás
          sin bankroll. El casino siempre tiene una ventaja matemática que ningún sistema puede superar.
          Aceptá esto y vas a disfrutar mucho más del juego.
        </p>
      </Section>

      {/* ═══ MINI CTA BANNER 3 ═══ */}
      <div className="bg-gradient-to-r from-[#dc2626]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">150% de bono, el porcentaje más alto</p>
        <p className="text-white text-xl font-black mb-4">MONRO Casino — 150% hasta $300 + 100 Giros Gratis</p>
        <CtaButton slug="monro-casino" text="Ir a MONRO Casino" />
      </div>

      {/* ═══ SECTION 9: FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes</SectionTitle>
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
        <SectionTitle>Glosario de Términos</SectionTitle>
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
            <CtaButton slug="fresh-casino" text="FRESH Casino — #1" />
            <CtaButton slug="sol-casino" text="SOL Casino — #2" />
            <CtaButton slug="monro-casino" text="MONRO Casino — #3" />
          </div>
        </div>
      </section>
    </>
  );
}
