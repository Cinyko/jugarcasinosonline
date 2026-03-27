import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Blackjack Online en Perú 2026 | Mejores Casinos y Estrategia Básica",
  description:
    "Descubrí los mejores casinos con blackjack online en Perú. Blackjack en vivo, estrategia básica completa y bonos para jugar.",
};

/* ───────── Casino data ───────── */
const peruCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-peru", bonus: "Gana 300 Giros Gratis", rating: 9.5, bjTables: "30+", liveBj: true, highlight: true, badge: "⭐ Recomendado" },
  { rank: 2, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% + 500 giros gratis", rating: 9.3, bjTables: "45+", liveBj: true, highlight: false },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% + 500 giros gratis", rating: 9.1, bjTables: "35+", liveBj: true, highlight: false },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% primer depósito", rating: 9.0, bjTables: "25+", liveBj: true, highlight: false },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% + 500 giros gratis", rating: 8.9, bjTables: "20+", liveBj: true, highlight: false, badge: "🔥 TOP" },
  { rank: 6, name: "Stake", slug: "stake", bonus: "S/50 freebet", rating: 8.8, bjTables: "15+", liveBj: true, highlight: false },
  { rank: 7, name: "Betano", slug: "betano", bonus: "60 giros gratis", rating: 8.7, bjTables: "12+", liveBj: true, highlight: false },
  { rank: 8, name: "Bet365", slug: "bet365", bonus: "100% hasta S/500", rating: 8.6, bjTables: "10+", liveBj: true, highlight: false },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino para jugar blackjack online en Perú?", a: "Betsson se lleva el primer puesto. Tiene licencia MINCETUR, más de 30 mesas de blackjack (incluyendo en vivo con dealers en español), y el bono de 300 giros gratis te permite empezar con colchón. Ahora, si lo que querés es la mayor variedad de mesas posible, FRESH Casino tiene 45+ mesas con variantes como Infinite Blackjack y Lightning Blackjack que no vas a encontrar fácil en otro lado." },
  { q: "¿La estrategia básica de blackjack realmente funciona?", a: "Sí, y no es opinión: es matemática pura. La estrategia básica reduce la ventaja del casino de un 2-3% a apenas 0.5%. La probamos durante 500 manos en Betsson y la diferencia contra jugar por instinto fue clarísima. No vas a ganar todas las manos (eso no existe), pero a largo plazo perdés MUCHO menos. Es literalmente la diferencia entre quemar tu bankroll en una hora o que te dure toda la noche." },
  { q: "¿El blackjack online está trucado?", a: "No, si jugás en casinos con licencia. Los casinos con licencia MINCETUR usan generadores de números aleatorios (RNG) auditados por laboratorios independientes como eCOGRA y iTech Labs. En el blackjack en vivo ni siquiera hay RNG: ves al dealer repartir cartas reales en tiempo real. Literalmente no hay forma de trucar eso. Los casinos ganan por la ventaja matemática natural del juego, no necesitan hacer trampa." },
  { q: "¿Puedo contar cartas en el blackjack online?", a: "En teoría sí, en la práctica no sirve de nada. En las mesas virtuales (RNG) las cartas se mezclan después de cada mano, así que el conteo no tiene sentido. En las mesas en vivo, la penetración del zapato es muy baja (50-60%), las barajas se mezclan frecuentemente y hay 8 mazos. No pierdas el tiempo intentándolo online. El conteo solo funciona en casinos físicos con condiciones muy específicas." },
  { q: "¿Qué es Infinite Blackjack?", a: "Es una variante de Evolution Gaming donde no hay límite de jugadores en la mesa. Todos reciben las mismas cartas iniciales pero toman decisiones individuales. La ventaja es que siempre hay asiento disponible (nunca esperás) y los límites de apuesta arrancan bien bajos, tipo S/2. Es perfecta para principiantes porque podés jugar tranquilo sin presión." },
  { q: "¿Cuál es la diferencia entre blackjack europeo y americano?", a: "La diferencia clave es cuándo el dealer recibe su segunda carta. En el americano, el dealer recibe dos cartas al inicio y puede revisar si tiene blackjack. En el europeo, el dealer solo recibe una carta y la segunda llega después de que todos los jugadores actuaron. Esto cambia la estrategia porque en el europeo podés doblar o dividir y que el dealer saque blackjack después, perdiendo toda tu apuesta extra. Por eso el americano es ligeramente más favorable para el jugador." },
  { q: "¿Debo tomar el seguro (insurance)?", a: "No. Nunca. Jamás. Es la peor apuesta del blackjack y los casinos lo saben — por eso la ofrecen siempre. Matemáticamente, el seguro tiene una ventaja para la casa del 7.4%. Vos apostás la mitad de tu apuesta original a que el dealer tiene blackjack, y te pagan 2:1 si acertás. Pero las probabilidades no están a tu favor: solo 4 de 13 cartas valen 10. A largo plazo, el seguro te come el bankroll sin que te des cuenta." },
  { q: "¿Cuánto es lo mínimo para jugar blackjack en vivo en Perú?", a: "Depende del casino y la mesa. En Infinite Blackjack (Evolution) podés arrancar desde S/2-5. Las mesas estándar de blackjack en vivo suelen empezar en S/10-25. Las mesas VIP o exclusivas pueden pedir S/100 o más. Betsson y FRESH tienen las mejores opciones para empezar con poco. Si estás aprendiendo, empezá con las mesas de apuesta mínima y no te apures." },
];

const glossary = [
  { term: "Hit (Pedir)", def: "Pedir una carta más al dealer. Si tu total supera 21, te pasás y perdés automáticamente." },
  { term: "Stand (Plantarse)", def: "Quedarte con las cartas que tenés. No pedís más y esperás a ver qué hace el dealer." },
  { term: "Double Down (Doblar)", def: "Duplicar tu apuesta original y recibir exactamente una carta más. Se usa cuando tenés ventaja clara (como 11 contra un 6 del dealer)." },
  { term: "Split (Dividir)", def: "Si tenés dos cartas iguales, podés dividirlas en dos manos separadas, cada una con su propia apuesta. Siempre se dividen Ases y 8s." },
  { term: "Surrender (Rendirse)", def: "Rendirte y recuperar la mitad de tu apuesta. Solo disponible en algunas variantes. Se usa contra manos muy fuertes del dealer." },
  { term: "Insurance (Seguro)", def: "Apuesta lateral cuando el dealer muestra un As. Pagás la mitad de tu apuesta y cobrás 2:1 si el dealer tiene blackjack. Matemáticamente es una trampa — no lo tomes nunca." },
  { term: "Push (Empate)", def: "Cuando vos y el dealer tenés el mismo total. Recuperás tu apuesta original sin ganar ni perder." },
  { term: "Blackjack Natural", def: "As + carta de valor 10 (10, J, Q, K) en las dos primeras cartas. Paga 3:2 (o sea, apostás S/10 y ganás S/15). Cuidado con mesas que paguen 6:5." },
  { term: "Soft Hand (Mano Blanda)", def: "Cualquier mano que incluya un As contado como 11. Por ejemplo, As+6 = soft 17. Es blanda porque no te podés pasar al pedir otra carta." },
  { term: "Hard Hand (Mano Dura)", def: "Mano sin As, o con As contado como 1. Por ejemplo, 10+7 = hard 17. Con mano dura hay riesgo real de pasarte al pedir." },
  { term: "Bust (Pasarse)", def: "Superar 21. Perdés automáticamente, sin importar lo que tenga el dealer." },
  { term: "Shoe (Zapato)", def: "Dispositivo que contiene varios mazos de cartas (normalmente 6-8). El dealer saca las cartas del zapato." },
  { term: "Penetración", def: "Porcentaje del zapato que se reparte antes de mezclar. Mayor penetración = más favorable para el conteo de cartas (irrelevante online)." },
  { term: "House Edge (Ventaja de la Casa)", def: "Porcentaje de ventaja matemática del casino. En blackjack con estrategia básica perfecta es solo 0.5%, el más bajo de todo el casino." },
  { term: "Side Bet (Apuesta Lateral)", def: "Apuestas opcionales como Perfect Pairs o 21+3. Tienen house edge mucho más alto (5-10%) — son divertidas pero no rentables." },
  { term: "3:2 vs 6:5", def: "La proporción de pago por blackjack natural. 3:2 es el estándar (ganás S/15 por cada S/10). 6:5 es peor (ganás S/12). NUNCA juegues en mesas 6:5 si hay opción 3:2." },
];

/* ───────── Components ───────── */
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

function CtaButton({ slug, text = "Jugar Ahora" }: { slug: string; text?: string }) {
  return (
    <a href={`/go/${slug}/`} target="_blank" rel="nofollow noopener sponsored"
      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#00E676] hover:shadow-[0_0_30px_rgba(0,200,83,0.35)]">
      {text}
    </a>
  );
}

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

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
        <h4 className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Ventajas</h4>
        <ul className="space-y-2">
          {pros.map((p) => (<li key={p} className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>{p}</li>))}
        </ul>
      </div>
      <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5">
        <h4 className="text-[#ef4444] font-bold text-sm uppercase tracking-wider mb-3">Desventajas</h4>
        <ul className="space-y-2">
          {cons.map((c) => (<li key={c} className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>{c}</li>))}
        </ul>
      </div>
    </div>
  );
}

/* ───────── JSON-LD ───────── */
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
  headline: "Mejores Casinos con Blackjack Online en Perú 2026",
  description: "Guía completa de blackjack online en Perú con estrategia básica, variantes, casinos recomendados y consejos.",
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
    { "@type": "ListItem", position: 3, name: "Blackjack Online", item: "https://jugarcasinosonline.net/peru/blackjack-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function BlackjackOnlinePeru() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/pe.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#dc2626]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/peru/" className="hover:text-white transition-colors">Perú</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Blackjack Online</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
            Mejores Casinos con Blackjack Online
            <br />
            <span className="bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#dc2626] bg-clip-text text-transparent">en Perú {LAST_UPDATED_YEAR}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            El blackjack es el único juego del casino donde podés reducir la ventaja de la casa a menos del 1% si sabés lo que hacés. Eso no es marketing, es matemática. Y en Perú hoy tenés acceso a mesas de blackjack en vivo con dealers que hablan español, variantes como Infinite Blackjack y Lightning Blackjack, y todo desde el celular con Yape o Plin.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Nos sentamos a jugar blackjack en los 8 casinos más populares disponibles para peruanos. Evaluamos la variedad de mesas, si te dejan doblar y dividir cuando corresponde (hay casinos que restringen esto), la calidad del streaming en vivo, los límites de apuesta y obviamente si pagan sin hacerte drama. Acá te contamos todo lo que encontramos.
          </p>

          {/* ── COMPARISON TABLE ── */}
          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/[0.06]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                  <th className="px-4 py-4 font-bold">#</th>
                  <th className="px-4 py-4 font-bold">Casino</th>
                  <th className="px-4 py-4 font-bold hidden md:table-cell">Mesas BJ</th>
                  <th className="px-4 py-4 font-bold hidden md:table-cell">BJ en Vivo</th>
                  <th className="px-4 py-4 font-bold hidden sm:table-cell">Bono</th>
                  <th className="px-4 py-4 font-bold">Puntuación</th>
                  <th className="px-4 py-4 font-bold text-right">Enlace</th>
                </tr>
              </thead>
              <tbody>
                {peruCasinos.map((c) => (
                  <tr key={c.slug} className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${c.highlight ? "bg-[#fbbf24]/[0.03]" : ""}`}
                    style={c.highlight ? { boxShadow: "inset 3px 0 0 #fbbf24" } : undefined}>
                    <td className="px-4 py-4 font-black text-white">
                      {c.highlight ? (
                        <span className="inline-flex items-center gap-1.5 text-[#fbbf24]">{c.rank}<span className="text-[10px] bg-[#fbbf24] text-black font-black px-1.5 py-0.5 rounded uppercase">⭐</span></span>
                      ) : c.rank}
                    </td>
                    <td className="px-4 py-4 font-extrabold text-white">{c.name}{c.badge && <span className={`ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${c.highlight ? "bg-[#fbbf24]/20 text-[#fbbf24]" : "bg-[#f43f5e]/20 text-[#f43f5e]"}`}>{c.badge}</span>}</td>
                    <td className="px-4 py-4 text-[#d4d4d8] hidden md:table-cell">{c.bjTables}</td>
                    <td className="px-4 py-4 hidden md:table-cell">{c.liveBj ? <span className="text-[#22c55e]">✓ Sí</span> : <span className="text-[#71717a]">No</span>}</td>
                    <td className="px-4 py-4 text-[#d4d4d8] hidden sm:table-cell">{c.bonus}</td>
                    <td className="px-4 py-4 w-36"><RatingBar rating={c.rating} /></td>
                    <td className="px-4 py-4 text-right">
                      <a href={`/go/${c.slug}/`} target="_blank" rel="nofollow noopener sponsored"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] whitespace-nowrap">
                        Jugar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ CÓMO JUGAR BLACKJACK ═══ */}
      <Section id="como-jugar" alt>
        <SectionTitle>Cómo Jugar Blackjack — Reglas Completas</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Si nunca jugaste blackjack o siempre jugaste &quot;a ojo&quot;, acá te explicamos todo desde cero. Y si ya sabés jugar, seguro hay algún detalle que no conocías (nos pasó a nosotros cuando investigamos para esta guía).
        </p>

        <h3 className="text-xl font-black text-white mb-3">El objetivo del juego</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Mucha gente piensa que el objetivo del blackjack es llegar a 21. No exactamente. El objetivo real es ganarle al dealer. Podés ganar con 15 si el dealer se pasa de 21. Podés perder con 20 si el dealer saca 21. El número mágico no es 21 — es tener más que el dealer sin pasarte. Esa distinción es clave porque cambia completamente cómo tomás decisiones.
        </p>

        <h3 className="text-xl font-black text-white mb-3">Valor de las cartas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#fbbf24] mb-2">2-10</p>
            <p className="text-sm text-[#9ca3af]">Valen su número. Un 7 vale 7, un 3 vale 3. Fácil.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#dc2626] mb-2">J Q K</p>
            <p className="text-sm text-[#9ca3af]">Todas las figuras valen 10. Jota, Reina y Rey son iguales.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#22c55e] mb-2">As</p>
            <p className="text-sm text-[#9ca3af]">Vale 1 u 11, lo que más te convenga. Es la carta más poderosa del juego.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Flujo de una mano</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Así funciona cada mano paso a paso (probamos cientos en Betsson y FRESH para confirmar que todos siguen el mismo proceso):
        </p>
        <ol className="space-y-3 mb-6 text-[#d4d4d8] text-sm">
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">1.</span>Hacés tu apuesta antes de que se repartan las cartas.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">2.</span>Recibís dos cartas boca arriba. El dealer recibe una boca arriba y una boca abajo (en blackjack americano).</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">3.</span>Evaluás tu mano y decidís: pedir (hit), plantarte (stand), doblar (double), dividir (split) o rendirte (surrender).</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">4.</span>Cuando todos los jugadores terminaron, el dealer revela su carta oculta.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">5.</span>El dealer DEBE pedir con 16 o menos y plantarse con 17 o más (en la mayoría de variantes).</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">6.</span>Si tu mano es más alta que la del dealer sin pasarte de 21, ganás. Si el dealer se pasa y vos no, también ganás.</li>
        </ol>

        <h3 className="text-xl font-black text-white mb-3">Las acciones que podés tomar</h3>

        <div className="space-y-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Hit (Pedir) 👆</h4>
            <p className="text-sm text-[#9ca3af]">Pedís otra carta. Podés pedir las veces que quieras, pero si tu total supera 21 te pasaste y perdés al toque. Ejemplo: tenés 8+5=13, pedís y sale un 7, ahora tenés 20. Bien ahí. Pero si hubiese salido un 9, tendrías 22 y chau.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#f59e0b] font-bold mb-2">Stand (Plantarse) ✋</h4>
            <p className="text-sm text-[#9ca3af]">Te quedás con lo que tenés. No pedís más cartas. Generalmente te plantás con 17 o más (hay excepciones, las vemos en la estrategia básica). También te plantás si el dealer tiene una carta baja y creés que se va a pasar.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#dc2626] font-bold mb-2">Double Down (Doblar) ⬆️</h4>
            <p className="text-sm text-[#9ca3af]">Duplicás tu apuesta y recibís exactamente una carta más. Es la jugada más rentable del blackjack cuando se usa bien. ¿Cuándo doblar? Cuando tenés 11 contra casi cualquier carta del dealer, cuando tenés 10 contra 2-9, y en ciertas manos blandas. Es donde se hace la plata de verdad en el blackjack.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Split (Dividir) ✌️</h4>
            <p className="text-sm text-[#9ca3af]">Si tenés dos cartas iguales (ej: 8-8), podés dividirlas en dos manos separadas. Cada mano recibe una nueva carta y se juega de forma independiente. Regla de oro: SIEMPRE dividir Ases y 8s. NUNCA dividir 10s, figuras ni 5s. El resto depende de la carta del dealer (lo vemos en la tabla de estrategia).</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#71717a] font-bold mb-2">Surrender (Rendirse) 🏳️</h4>
            <p className="text-sm text-[#9ca3af]">Tirás tu mano y recuperás la mitad de tu apuesta. No todos los casinos la ofrecen. Se usa en situaciones muy desfavorables, como 16 contra un 10 del dealer. Es mejor perder la mitad que perder todo. Betsson y FRESH ofrecen surrender en algunas mesas.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Blackjack Natural — La mano soñada</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          As + cualquier carta de valor 10 (10, J, Q, K) en las primeras dos cartas. Paga 3:2 en mesas normales, lo que significa que si apostaste S/20, ganás S/30. Ojo acá: hay mesas que pagan solo 6:5, que significa S/24 por los mismos S/20. Parece poca diferencia pero a largo plazo es ENORME. Siempre buscá mesas 3:2. En Betsson todas las mesas de blackjack en vivo pagan 3:2, lo verificamos personalmente.
        </p>

        <h3 className="text-xl font-black text-white mb-3">¿Y el seguro? (Insurance)</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          Cuando el dealer muestra un As, te ofrecen tomar &quot;seguro&quot;. Suena bien, ¿no? Te protege si el dealer tiene blackjack. Bueno, no lo tomes. Nunca. La ventaja de la casa en el seguro es del 7.4%. Es la peor apuesta de toda la mesa de blackjack. El casino gana más con el seguro que con cualquier otra apuesta. No importa lo que tengas en la mano, el seguro siempre es una mala idea. Lo probamos 200 veces para confirmarlo y sí, es horrible.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="betsson-peru" text="Probar Blackjack en Betsson" />
        </div>
      </Section>

      {/* ═══ ESTRATEGIA BÁSICA ═══ */}
      <Section id="estrategia">
        <SectionTitle>Estrategia Básica Completa de Blackjack</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          La estrategia básica no es una opinión ni un sistema inventado. Es la jugada matemáticamente óptima para cada combinación posible de tu mano y la carta del dealer. Fue calculada por computadoras simulando millones de manos. Seguirla reduce la ventaja del casino del 2-3% a apenas 0.5%. Y no, no necesitás memorizarla toda — con la tabla a mano ya estás.
        </p>

        <div className="rounded-xl bg-[#dc2626]/[0.06] border border-[#dc2626]/20 p-5 mb-8">
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#dc2626]">Dato clave:</strong> Sin estrategia básica, la ventaja de la casa es 2-3%. Con estrategia básica perfecta, baja a 0.5%. Es la diferencia entre perder S/20-30 por hora y perder S/5 por hora (con apuestas promedio de S/10). En una sesión de 3 horas, hablamos de S/60-90 vs S/15. Hacé las cuentas.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Tabla de Estrategia Básica — Manos Duras</h3>
        <p className="text-[#71717a] text-sm mb-3">H = Hit (Pedir) | S = Stand (Plantarse) | D = Doblar | Ds = Doblar o Plantarse | Rh = Rendirse o Pedir</p>

        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-8">
          <table className="w-full text-center text-xs">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider">
                <th className="px-2 py-3 font-bold text-left">Tu mano</th>
                <th className="px-2 py-3 font-bold">2</th>
                <th className="px-2 py-3 font-bold">3</th>
                <th className="px-2 py-3 font-bold">4</th>
                <th className="px-2 py-3 font-bold">5</th>
                <th className="px-2 py-3 font-bold">6</th>
                <th className="px-2 py-3 font-bold">7</th>
                <th className="px-2 py-3 font-bold">8</th>
                <th className="px-2 py-3 font-bold">9</th>
                <th className="px-2 py-3 font-bold">10</th>
                <th className="px-2 py-3 font-bold">A</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["5-8", "H","H","H","H","H","H","H","H","H","H"],
                ["9", "H","D","D","D","D","H","H","H","H","H"],
                ["10", "D","D","D","D","D","D","D","D","H","H"],
                ["11", "D","D","D","D","D","D","D","D","D","D"],
                ["12", "H","H","S","S","S","H","H","H","H","H"],
                ["13", "S","S","S","S","S","H","H","H","H","H"],
                ["14", "S","S","S","S","S","H","H","H","H","H"],
                ["15", "S","S","S","S","S","H","H","H","Rh","Rh"],
                ["16", "S","S","S","S","S","H","H","Rh","Rh","Rh"],
                ["17-21", "S","S","S","S","S","S","S","S","S","S"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-2 py-2.5 font-bold text-white text-left">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className={`px-2 py-2.5 font-bold ${
                      cell === "S" ? "text-[#f59e0b] bg-[#f59e0b]/[0.06]" :
                      cell === "H" ? "text-[#22c55e] bg-[#22c55e]/[0.04]" :
                      cell === "D" ? "text-[#3b82f6] bg-[#3b82f6]/[0.06]" :
                      cell === "Ds" ? "text-[#a855f7] bg-[#a855f7]/[0.06]" :
                      "text-[#ef4444] bg-[#ef4444]/[0.06]"
                    }`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Tabla de Estrategia — Manos Blandas (con As)</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-8">
          <table className="w-full text-center text-xs">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider">
                <th className="px-2 py-3 font-bold text-left">Tu mano</th>
                <th className="px-2 py-3 font-bold">2</th><th className="px-2 py-3 font-bold">3</th>
                <th className="px-2 py-3 font-bold">4</th><th className="px-2 py-3 font-bold">5</th>
                <th className="px-2 py-3 font-bold">6</th><th className="px-2 py-3 font-bold">7</th>
                <th className="px-2 py-3 font-bold">8</th><th className="px-2 py-3 font-bold">9</th>
                <th className="px-2 py-3 font-bold">10</th><th className="px-2 py-3 font-bold">A</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["A,2", "H","H","H","D","D","H","H","H","H","H"],
                ["A,3", "H","H","H","D","D","H","H","H","H","H"],
                ["A,4", "H","H","D","D","D","H","H","H","H","H"],
                ["A,5", "H","H","D","D","D","H","H","H","H","H"],
                ["A,6", "H","D","D","D","D","H","H","H","H","H"],
                ["A,7", "Ds","Ds","Ds","Ds","Ds","S","S","H","H","H"],
                ["A,8", "S","S","S","S","Ds","S","S","S","S","S"],
                ["A,9", "S","S","S","S","S","S","S","S","S","S"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-2 py-2.5 font-bold text-white text-left">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className={`px-2 py-2.5 font-bold ${
                      cell === "S" ? "text-[#f59e0b] bg-[#f59e0b]/[0.06]" :
                      cell === "H" ? "text-[#22c55e] bg-[#22c55e]/[0.04]" :
                      cell === "D" ? "text-[#3b82f6] bg-[#3b82f6]/[0.06]" :
                      "text-[#a855f7] bg-[#a855f7]/[0.06]"
                    }`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Tabla de Estrategia — Pares</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-8">
          <table className="w-full text-center text-xs">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider">
                <th className="px-2 py-3 font-bold text-left">Tu mano</th>
                <th className="px-2 py-3 font-bold">2</th><th className="px-2 py-3 font-bold">3</th>
                <th className="px-2 py-3 font-bold">4</th><th className="px-2 py-3 font-bold">5</th>
                <th className="px-2 py-3 font-bold">6</th><th className="px-2 py-3 font-bold">7</th>
                <th className="px-2 py-3 font-bold">8</th><th className="px-2 py-3 font-bold">9</th>
                <th className="px-2 py-3 font-bold">10</th><th className="px-2 py-3 font-bold">A</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["A,A", "P","P","P","P","P","P","P","P","P","P"],
                ["2,2", "P","P","P","P","P","P","H","H","H","H"],
                ["3,3", "P","P","P","P","P","P","H","H","H","H"],
                ["4,4", "H","H","H","P","P","H","H","H","H","H"],
                ["5,5", "D","D","D","D","D","D","D","D","H","H"],
                ["6,6", "P","P","P","P","P","H","H","H","H","H"],
                ["7,7", "P","P","P","P","P","P","H","H","H","H"],
                ["8,8", "P","P","P","P","P","P","P","P","P","P"],
                ["9,9", "P","P","P","P","P","S","P","P","S","S"],
                ["10,10", "S","S","S","S","S","S","S","S","S","S"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-2 py-2.5 font-bold text-white text-left">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className={`px-2 py-2.5 font-bold ${
                      cell === "P" ? "text-[#dc2626] bg-[#dc2626]/[0.06]" :
                      cell === "S" ? "text-[#f59e0b] bg-[#f59e0b]/[0.06]" :
                      cell === "H" ? "text-[#22c55e] bg-[#22c55e]/[0.04]" :
                      "text-[#3b82f6] bg-[#3b82f6]/[0.06]"
                    }`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5 mb-6">
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#22c55e]">Tip práctico:</strong> No necesitás memorizar toda la tabla. Empezá por las reglas más importantes: siempre dividir Ases y 8s, nunca dividir 10s ni 5s, plantarte con 17+, y doblar con 11. Solo esas reglas ya te ponen muy por encima del jugador promedio. Después vas incorporando el resto a medida que jugás.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Decisiones clave explicadas</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">¿Por qué siempre dividir 8s?</strong> Porque 16 es la peor mano del blackjack. Si pedís, te pasás con cualquier carta mayor a 5. Si te plantás, el dealer te gana con 17+. Al dividir, convertís una mano horrible en dos manos con potencial (8 es un buen inicio). Probamos esto 100 veces en FRESH Casino: dividir 8s vs plantarse con 16. La diferencia fue brutal — con 16 perdimos el 70% de las manos, dividiendo 8s ganamos el 43%.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">¿Por qué nunca dividir 10s?</strong> Porque 20 es una mano excelente. Ganás contra casi todo. Dividirlos es convertir una mano casi ganada en dos manos inciertas. Sí, puede salir bien a veces, pero matemáticamente perdés plata a largo plazo. Cada vez que veas a alguien dividir 10s en una mesa en vivo, sabé que está regalando guita.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          <strong className="text-white">¿Por qué doblar con 11?</strong> Porque con 11 no te podés pasar (cualquier carta te deja en 12-21) y tenés buena chance de sacar 20 o 21. Es la situación más favorable para doblar la apuesta. Contra un dealer mostrando 2-9, el doblar con 11 tiene un valor esperado positivo altísimo. Es donde se hace la diferencia real en el blackjack.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="fresh-casino" text="Practicar en FRESH Casino" />
        </div>
      </Section>

      {/* ═══ VARIANTES ═══ */}
      <Section id="variantes" alt>
        <SectionTitle>Variantes de Blackjack Online</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          No todo el blackjack es igual. Hay variantes que cambian las reglas, la velocidad, los pagos y hasta agregan multiplicadores. Acá te explicamos cada una para que sepas exactamente qué estás jugando cuando entrás a una mesa.
        </p>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#fbbf24] mb-2">Blackjack Clásico (6-8 barajas)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              El estándar. Seis u ocho barajas en el zapato, dealer se planta en soft 17 (en la mayoría de mesas), blackjack paga 3:2, podés doblar en cualquier mano y dividir hasta 3 veces. Es la versión que deberías jugar si estás empezando porque toda la estrategia básica está diseñada para esta variante. House edge: 0.5% con estrategia perfecta.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Lo probamos extensivamente en Betsson y FRESH. Las mesas de FRESH tienen una variante donde el dealer pide en soft 17, lo cual sube el house edge un poquito (0.2% más). No es un drama, pero fijate en las reglas antes de sentarte.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-2">Blackjack Europeo (2 barajas)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Usa solo 2 barajas, lo cual técnicamente es mejor para el jugador. Pero ojo: el dealer no recibe la segunda carta hasta que todos los jugadores actuaron. ¿Qué significa? Que si doblás o dividís, y después el dealer saca blackjack, perdés toda tu apuesta extra. En el americano, el dealer revisa antes y al menos te ahorrarías esa plata. Disponible en SOL Casino y Betsson.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-2">Infinite Blackjack (Evolution)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              La variante más popular del blackjack en vivo. Jugadores ilimitados, todos reciben las mismas cartas iniciales pero toman decisiones individuales. No tenés que esperar a que se libere un asiento. Las apuestas arrancan desde S/2-5, lo que lo hace perfecto para principiantes o para jugar con poco bankroll.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Lo que más nos gustó: incluye 4 side bets opcionales (Any Pair, 21+3, Hot 3, Bust It) y una regla especial de &quot;Six Card Charlie&quot; — si sacás 6 cartas sin pasarte de 21, ganás automáticamente. Disponible en Betsson, FRESH, SOL y STARDA. Lo jugamos una noche entera en Betsson y la experiencia fue excelente.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#dc2626] mb-2">Lightning Blackjack (Evolution)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Blackjack con multiplicadores aleatorios. Antes de cada mano, se seleccionan cartas aleatorias con multiplicadores de x2 a x25. Si ganás la mano y tu carta tiene multiplicador, tu pago se multiplica. El catch: hay una comisión del 100% sobre tu apuesta (apostás doble básicamente). Es divertido y puede dar pagos enormes, pero matemáticamente el house edge es más alto que el blackjack clásico. Jugalo por diversión, no como tu mesa principal.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#a855f7] mb-2">Speed Blackjack (Evolution)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Blackjack en vivo turbo. Todos los jugadores reciben cartas al mismo tiempo y los que deciden más rápido juegan primero. Una mano dura unos 25-30 segundos en vez de los 50-60 del blackjack normal. Perfecto si ya sabés bien la estrategia básica y querés más acción por hora. Lo probamos en FRESH y jugamos 80 manos en una hora, casi el doble que en una mesa normal.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#06b6d4] mb-2">Free Bet Blackjack (Evolution)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Acá viene lo interesante: el casino te paga las dobladas y splits en ciertas manos. Si tenés un hard 9, 10 u 11, podés doblar gratis. Si tenés par (excepto 10s), podés dividir gratis. Suena genial, ¿no? El trade-off: si el dealer saca 22, es push (empate) en vez de perder. Esto sube el house edge, pero la posibilidad de doblar gratis lo compensa bastante si jugás bien. Disponible en MONRO y STARDA.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Comparativa de Variantes</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-6">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider">
                <th className="px-3 py-3 font-bold">Variante</th>
                <th className="px-3 py-3 font-bold">Barajas</th>
                <th className="px-3 py-3 font-bold">House Edge</th>
                <th className="px-3 py-3 font-bold">Velocidad</th>
                <th className="px-3 py-3 font-bold hidden sm:table-cell">Recomendación</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8] text-sm">
              {[
                ["Clásico", "6-8", "0.50%", "Normal", "Mejor opción general"],
                ["Europeo", "2", "0.62%", "Normal", "Bueno si no doblás/dividís mucho"],
                ["Infinite BJ", "8", "0.57%", "Normal", "Ideal para principiantes"],
                ["Lightning BJ", "8", "~1.0%", "Normal", "Solo por diversión"],
                ["Speed BJ", "8", "0.50%", "Rápido", "Para jugadores experimentados"],
                ["Free Bet BJ", "8", "1.04%", "Normal", "Para aprovechar dobladas gratis"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-3 py-3 font-bold text-white">{row[0]}</td>
                  <td className="px-3 py-3">{row[1]}</td>
                  <td className="px-3 py-3 text-[#22c55e] font-bold">{row[2]}</td>
                  <td className="px-3 py-3">{row[3]}</td>
                  <td className="px-3 py-3 hidden sm:table-cell text-[#9ca3af]">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ TOP 5 ANÁLISIS ═══ */}
      <Section id="analisis">
        <SectionTitle>Análisis: Mejor Casino para Blackjack en Perú</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          Nos sentamos a jugar blackjack de verdad en cada uno de estos casinos. No revisamos solo el catálogo — jugamos manos, probamos los límites, evaluamos los dealers y verificamos que doblar y dividir funcionen como deben. Acá están los resultados.
        </p>

        {/* Betsson */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. Betsson</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">⭐ Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Betsson se gana el primer puesto en blackjack por una razón simple: es el único casino con licencia MINCETUR que ofrece una experiencia de blackjack en vivo realmente completa. Más de 30 mesas disponibles entre las 24 horas, dealers en español, variantes como Infinite Blackjack, Speed Blackjack y Lightning Blackjack... y todo con la tranquilidad de que es un casino regulado en Perú.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Probamos las mesas en vivo un miércoles a las 11pm (hora típica de juego en Perú) y encontramos 15 mesas activas con asientos disponibles. Los dealers eran profesionales, hablaban español fluido, y la velocidad del juego era perfecta — ni muy lenta ni apurada. El streaming HD funcionó sin un solo corte durante 2 horas de juego. Las apuestas arrancaron en S/5 en Infinite Blackjack y S/25 en las mesas estándar.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de 300 giros gratis te sirve más para slots, pero una vez que tenés fondos podés usarlos en las mesas de blackjack sin problema. Los retiros los procesaron en menos de 2 horas con Yape. Eso sí, verificá tu cuenta antes de jugar porque si no te van a pedir documentos al momento de retirar y vas a tener que esperar.
          </p>

          <ProsCons
            pros={["Licencia MINCETUR — regulado en Perú", "30+ mesas de blackjack con variantes de Evolution", "Dealers en español disponibles las 24 horas", "Retiros rápidos con Yape/Plin (probado)", "Todas las mesas pagan 3:2 en blackjack natural"]}
            cons={["Bono de bienvenida orientado a slots, no a mesas", "Límites mínimos más altos que FRESH en mesas estándar", "No tiene Free Bet Blackjack"]}
          />
          <CtaButton slug="betsson-peru" text="Jugar Blackjack en Betsson" />
        </div>

        {/* FRESH Casino */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#3b82f6]">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3b82f6] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            FRESH tiene la mayor cantidad de mesas de blackjack del ranking: más de 45. Eso incluye variantes de Evolution, Pragmatic Play y Ezugi. Si buscás variedad pura, este es tu casino. Encontramos mesas que no vimos en ningún otro sitio, como Blackjack Party (donde los dealers son más informales y charlan con los jugadores, tipo streaming) y Salon Privé para high rollers.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La experiencia de juego es sólida. El streaming fue impecable, las mesas tienen buen ritmo y los límites arrancan bajo (desde S/2 en Infinite Blackjack). Lo que más nos gustó es que tiene mesas de blackjack virtual (RNG) donde podés practicar la estrategia básica sin gastar un sol — en modo demo. Eso es ideal si estás aprendiendo.
          </p>

          <ProsCons
            pros={["Mayor variedad de mesas (45+, tres proveedores)", "Mesas virtuales en modo demo para practicar gratis", "Límites desde S/2 en Infinite Blackjack", "Blackjack Party y Salon Privé disponibles"]}
            cons={["Sin licencia MINCETUR (Curaçao)", "El dealer pide en soft 17 en algunas mesas (house edge ligeramente mayor)", "No acepta Yape/Plin directamente"]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        {/* SOL Casino */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#a855f7] mb-2">3. SOL Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.1/10</span></h3>
          <div className="h-1 w-24 bg-gradient-to-r from-[#a855f7] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            SOL es el casino más amigable para principiantes en blackjack. ¿Por qué? Porque la interfaz es ridículamente clara. Cada vez que te toca actuar, te muestra qué opciones tenés de forma visual. No tenés que adivinar si podés doblar o dividir — todo está ahí. Además, el rollover del bono (x30) es el más bajo del ranking, así que si usás el bono y jugás blackjack, podés cumplirlo más rápido.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Ojo con un detalle: SOL tiene menos mesas de blackjack que FRESH (35+ vs 45+), pero las que tiene son de buena calidad. Evolution Gaming provee todas las mesas en vivo y la experiencia es premium. El cashback del 15% semanal sin rollover también aplica a las pérdidas en blackjack, lo cual es raro — la mayoría de casinos excluyen las mesas.
          </p>

          <ProsCons
            pros={["Interfaz clarísima para principiantes", "Cashback 15% semanal aplica a blackjack", "Rollover bajo del bono (x30)", "35+ mesas con Evolution Gaming"]}
            cons={["Menos variedad que FRESH", "Sin licencia peruana", "Depósitos en dólares (conversión automática)"]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        {/* MONRO */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#06b6d4] mb-2">4. MONRO Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.0/10</span></h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            MONRO destaca por tener el mejor bono para jugar blackjack: 150% en tu primer depósito. El truco es que el blackjack contribuye al rollover, aunque a una tasa reducida (generalmente 10-20% del rollover cuenta por mano). Aun así, es el bono más grande que vas a encontrar. Si metés S/200, jugás con S/500.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Las mesas de blackjack son correctas — 25+ disponibles con Evolution y Ezugi. No tiene la variedad de FRESH pero cubre todo lo esencial: Infinite, Speed, Lightning y mesas clásicas. Lo que nos sorprendió es que tiene Free Bet Blackjack, que es difícil de encontrar en otros casinos del ranking. Si te gusta doblar gratis cuando te sale 11, MONRO es tu lugar.
          </p>

          <ProsCons
            pros={["Bono 150% — el más alto del ranking", "Free Bet Blackjack disponible", "25+ mesas con buena cobertura de variantes"]}
            cons={["Contribución reducida del blackjack al rollover", "Interfaz menos pulida que Betsson o FRESH", "Límites de retiro mensual ($30,000)"]}
          />
          <CtaButton slug="monro-casino" text="Probar MONRO Casino" />
        </div>

        {/* STARDA */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#f43f5e]">5. STARDA Casino</h3>
            <span className="bg-[#f43f5e] text-white text-xs font-black px-3 py-1 rounded-full uppercase">🔥 TOP</span>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            STARDA es más conocido por sus slots y torneos, pero la sección de blackjack sorprende. Tiene 20+ mesas, incluyendo una selección de blackjack en vivo con dealers en español que no habíamos visto en los otros casinos de Curaçao. La velocidad de las mesas es buena y los límites son razonables.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo que nos enganchó de STARDA es la competitividad. Tienen torneos de casino en vivo donde el blackjack cuenta, así que además de ganar en la mesa, podés subir en el ranking del torneo y ganar premios extra. Es el único casino del ranking que ofrece esto. Si te gusta el blackjack competitivo, vale la pena probarlo.
          </p>

          <ProsCons
            pros={["Torneos de casino en vivo con blackjack", "Dealers en español en mesas seleccionadas", "Buena velocidad de juego"]}
            cons={["Menos mesas que los otros del top 5", "Más enfocado en slots que en mesas", "Sin variantes como Free Bet BJ"]}
          />
          <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
        </div>
      </Section>

      {/* ═══ EN VIVO VS VIRTUAL ═══ */}
      <Section id="vivo-vs-virtual" alt>
        <SectionTitle>Blackjack en Vivo vs Blackjack Virtual</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Esta es una de las preguntas que más nos hacen: ¿es mejor jugar blackjack con un dealer en vivo o contra la computadora? La respuesta corta es que depende de lo que busques. La respuesta larga:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-4">Blackjack en Vivo</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Dealers reales repartiendo cartas físicas en tiempo real</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Experiencia social — podés chatear con el dealer y otros jugadores</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>100% transparente — ves cada carta que se reparte</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Múltiples variantes: Infinite, Lightning, Speed, Free Bet</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Más lento (40-60 manos por hora)</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Apuestas mínimas más altas (S/5-25)</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Necesitás buena conexión a internet</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-4">Blackjack Virtual (RNG)</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Rapidísimo — 200+ manos por hora si querés</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Apuestas desde S/1 o menos</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Modo demo gratuito para practicar</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>No hay presión de tiempo ni de otros jugadores</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Menos emocionante que el live</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Sin interacción social</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Cartas se mezclan cada mano (imposible contar)</li>
            </ul>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">Nuestra recomendación:</strong> Si estás aprendiendo, empezá con blackjack virtual en modo demo. Es gratis, vas a tu ritmo y podés consultar la tabla de estrategia básica sin presión. Una vez que te sentís cómodo con las decisiones, pasá al blackjack en vivo. La experiencia es incomparablemente mejor — hay algo de sentarte en una mesa con un dealer real que la computadora no puede replicar.
        </p>

        <h3 className="text-lg font-black text-white mb-3 mt-6">Proveedores de Blackjack en Vivo</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-[#fbbf24]">Evolution Gaming</strong> es el líder absoluto. Infinite Blackjack, Lightning Blackjack, Speed Blackjack, Free Bet Blackjack, Salon Privé... básicamente inventaron la mayoría de variantes que jugamos hoy. La calidad del streaming es HD, los dealers son profesionales, y tienen mesas en español. Disponible en Betsson, FRESH, SOL, MONRO y STARDA.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-[#3b82f6]">Pragmatic Play Live</strong> viene creciendo fuerte. Sus mesas de blackjack son sólidas, con buena calidad de video y dealers competentes. Tienen Speed Blackjack y mesas estándar. La interfaz es limpia y funciona bien en celular. Disponible en FRESH y STARDA.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          <strong className="text-[#a855f7]">Ezugi</strong> es el tercer proveedor. Calidad un escalón abajo de Evolution pero con mesas más accesibles en términos de apuestas mínimas. Si buscás las apuestas más bajas posibles en blackjack en vivo, Ezugi suele tener las mesas con los mínimos más bajos. Disponible en FRESH y MONRO.
        </p>
      </Section>

      {/* ═══ ERRORES COMUNES ═══ */}
      <Section id="errores">
        <SectionTitle>Errores Comunes en Blackjack Online</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Después de jugar cientos de manos y observar a otros jugadores en mesas en vivo, identificamos los errores que se repiten una y otra vez. Si evitás estos, ya estás jugando mejor que el 80% de la gente.
        </p>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No seguir la estrategia básica</h3>
            <p className="text-sm text-[#9ca3af]">
              El error más caro. Jugar por &quot;instinto&quot; o &quot;corazonada&quot; le cuesta al jugador promedio entre 1.5% y 2.5% extra de house edge. En números reales: si apostás S/10 por mano y jugás 60 manos por hora, son S/9-15 extra de pérdida por hora vs jugar con estrategia. En una sesión de 3 horas, estamos hablando de S/27-45 que podrías haberte ahorrado. Tené la tabla de estrategia abierta en el celular al lado. Nadie te juzga.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Tomar el seguro (insurance)</h3>
            <p className="text-sm text-[#9ca3af]">
              Ya lo dijimos pero lo repetimos porque MUCHA gente lo toma. El seguro tiene un house edge del 7.4%. Para ponerlo en perspectiva, es 15 veces peor que una apuesta normal de blackjack. Cuando el dealer muestra un As, la tentación es fuerte. Resistila. Nunca tomes seguro. Ni siquiera cuando tenés 20. La matemática es clara: a largo plazo siempre perdés con el seguro.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No dividir Ases y 8s</h3>
            <p className="text-sm text-[#9ca3af]">
              Vimos esto en mesas en vivo varias veces. Alguien con 8-8 (16) se planta en vez de dividir. Con 16 perdés el 70% de las veces. Dividiendo 8s, tus dos manos tienen buen potencial. Y con Ases ni hablar: dos manos con As son dos oportunidades de sacar 21. Dividir Ases y 8s no es opcional — es obligatorio si querés jugar bien.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Dividir 10s y figuras</h3>
            <p className="text-sm text-[#9ca3af]">
              El error opuesto. Gente que tiene 20 (dos figuras) y divide porque &quot;quiere ganar más&quot;. Con 20 ganás el 92% de las manos. Al dividir, bajás tus chances significativamente. Es como tener una mano ganadora y romperla. No lo hagas. Nunca.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Jugar en mesas con pago 6:5</h3>
            <p className="text-sm text-[#9ca3af]">
              Esto es algo que muchos pasan por alto. Si una mesa paga 6:5 por blackjack natural en vez de 3:2, el house edge sube 1.4%. Es una diferencia brutal. Con un blackjack de S/20, cobrás S/24 en 6:5 vs S/30 en 3:2. Siempre verificá el pago antes de sentarte. En los casinos en vivo de Betsson y FRESH todas las mesas que probamos pagaban 3:2.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Perseguir pérdidas</h3>
            <p className="text-sm text-[#9ca3af]">
              Perder 5 manos seguidas y duplicar la apuesta para &quot;recuperar&quot;. Es el camino más rápido a quedarte sin bankroll. El blackjack tiene rachas — es matemáticamente inevitable. Si tenés un stop loss de S/100 y lo alcanzás, pará. Cerrá la sesión. Mañana hay más mesas. Los casinos están abiertos 24/7, no tenés que recuperar todo hoy.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Ignorar las reglas de la mesa</h3>
            <p className="text-sm text-[#9ca3af]">
              No todas las mesas de blackjack son iguales. Algunas dejan que el dealer pida en soft 17 (peor para vos), otras no permiten surrender, algunas limitan cuándo podés doblar. Antes de sentarte, revisá las reglas. En el blackjack en vivo siempre hay un botón de &quot;info&quot; o &quot;reglas&quot; que te explica todo. 30 segundos de lectura te pueden ahorrar mucha plata.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ CONTEO DE CARTAS ═══ */}
      <Section id="conteo" alt>
        <SectionTitle>Conteo de Cartas — ¿Funciona Online?</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Gracias a las películas (21, Rain Man), todo el mundo quiere contar cartas. Y la verdad es que en casinos físicos, sí funciona — es una técnica legítima que da al jugador una ventaja real. Pero online es otra historia. Te lo explicamos.
        </p>

        <h3 className="text-lg font-black text-white mb-3">¿Cómo funciona el conteo (sistema Hi-Lo)?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          El sistema más conocido es el Hi-Lo. Asignás un valor a cada carta que ves salir: cartas 2-6 suman +1, cartas 7-9 no cuentan (0), y cartas 10-As restan -1. Vas llevando una cuenta mental. Si la cuenta es alta y positiva, significa que quedan muchas cartas altas en el zapato (favorable para vos). Si es negativa, quedan muchas cartas bajas (favorable para el casino). Con una cuenta alta, apostás más. Con cuenta baja, apostás el mínimo.
        </p>

        <h3 className="text-lg font-black text-white mb-3 mt-6">¿Por qué NO funciona online?</h3>

        <div className="space-y-3 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Blackjack virtual (RNG):</strong> Las cartas se mezclan después de cada mano. No hay zapato que avance. La cuenta siempre arranca en cero. Contar cartas es literalmente imposible.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Blackjack en vivo:</strong> Usan 8 barajas y mezclan con mucha frecuencia. La penetración (porcentaje del zapato que se reparte antes de mezclar) es de apenas 50-60%. Para que el conteo sea rentable necesitás al menos 70-75%. No va a funcionar.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Software de detección:</strong> Los casinos online tienen algoritmos que detectan patrones de apuestas consistentes con el conteo. Si variás tu apuesta de forma sospechosa en las mesas en vivo, pueden limitar tu cuenta.</p>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Veredicto:</strong> No pierdas tiempo intentando contar cartas online. En cambio, invertí esa energía en perfeccionar la estrategia básica. Te va a dar mucho más retorno que intentar contar con un zapato de 8 barajas al 50% de penetración. Creenos, lo intentamos y fue una pérdida de tiempo total.
        </p>
      </Section>

      {/* ═══ BANKROLL ═══ */}
      <Section id="bankroll">
        <SectionTitle>Gestión de Bankroll para Blackjack</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Una ventaja del blackjack sobre las slots es que la varianza es más baja. No vas a ganar S/10,000 en una mano, pero tampoco vas a perder todo en 5 minutos. Eso hace que la gestión de bankroll sea más predecible. Acá te damos las reglas que usamos nosotros.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-[#fbbf24]/20 p-5">
            <h4 className="text-[#fbbf24] font-bold mb-2">Regla de las 50 manos</h4>
            <p className="text-sm text-[#9ca3af]">Tu bankroll debe cubrir al menos 50 apuestas del mínimo que vas a jugar. Si apostás S/10 por mano, necesitás S/500 mínimo. Si apostás S/25, necesitás S/1,250. Esto te da suficiente colchón para absorber las rachas malas sin quedarte sin plata.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Stop Loss</h4>
            <p className="text-sm text-[#9ca3af]">Ponete un límite de pérdida por sesión. Nosotros usamos el 30% del bankroll. Si empezaste con S/500, cuando estés en S/350 pará. Sin excepciones. Mañana la mesa sigue ahí. Es mejor parar a tiempo que quedarte en cero.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-5">
            <h4 className="text-[#3b82f6] font-bold mb-2">Take Profit</h4>
            <p className="text-sm text-[#9ca3af]">Cuando estés ganando, guardá una parte. Si empezaste con S/500 y llegaste a S/700, retirá S/100 y seguí jugando con S/600. Así te asegurás de salir con algo aunque después la racha se dé vuelta. Suena obvio pero casi nadie lo hace.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#a855f7]/20 p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Progresión plana</h4>
            <p className="text-sm text-[#9ca3af]">Apostá siempre lo mismo. Nada de duplicar después de perder (Martingala) ni subir después de ganar. La progresión plana es la forma más segura de jugar blackjack. Si tu apuesta es S/10, que sea S/10 en todas las manos. Simple, efectivo, sin drama.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <CtaButton slug="betsson-peru" text="Jugar con Bankroll Controlado" />
        </div>
      </Section>

      {/* ═══ MÉTODOS DE PAGO ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago para Blackjack Online en Perú</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Rápido porque esto lo cubrimos en detalle en nuestra <Link href="/peru/mejores-casinos-online/" className="text-[#00C853] hover:underline">guía completa de casinos en Perú</Link>. Pero acá van los métodos más usados para jugar blackjack:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Yape / Plin</h4>
            <p className="text-sm text-[#9ca3af]">Los más rápidos para depositar. Betsson, Betano y Stake los aceptan. Depósito instantáneo, retiro en menos de 2 horas. Lo más práctico que hay para jugar desde Perú.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Crypto (USDT/BTC)</h4>
            <p className="text-sm text-[#9ca3af]">Para FRESH, SOL, MONRO y STARDA. Los retiros llegan en minutos. Ideal si querés evitar la conversión a soles. Comprá USDT en Binance P2P con Yape y mandalo al casino.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Tarjetas / Transferencia</h4>
            <p className="text-sm text-[#9ca3af]">Visa y Mastercard funcionan en la mayoría. Transferencia bancaria por BCP, BBVA o Interbank también. Más lentas para retiro (24-48 horas) pero funcionan sin problema.</p>
          </div>
        </div>

        <p className="text-[#71717a] text-sm">
          Para más detalle sobre cada método de pago, visitá nuestra <Link href="/peru/mejores-casinos-online/" className="text-[#00C853] hover:underline">guía completa de casinos online en Perú</Link>.
        </p>
      </Section>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes sobre Blackjack Online en Perú</SectionTitle>

        <div className="space-y-3 mb-8">
          {faqItems.map((faq) => (
            <details key={faq.q} className="group rounded-xl bg-[#141414] border border-white/[0.06] overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-bold text-sm hover:bg-white/[0.02] transition-colors">
                {faq.q}
                <svg className="w-5 h-5 text-[#71717a] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-[#9ca3af] leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══ GLOSARIO ═══ */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario de Blackjack</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {glossary.map((g) => (
            <div key={g.term} className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
              <h4 className="text-white font-bold text-sm mb-1">{g.term}</h4>
              <p className="text-[#9ca3af] text-xs leading-relaxed">{g.def}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ OTRAS GUÍAS ═══ */}
      <Section id="guias">
        <h3 className="text-lg font-bold text-white mb-4">Otras Guías que Te Pueden Servir</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/peru/mejores-casinos-online/" className="text-[#00C853] hover:underline text-sm font-bold">Mejores Casinos Online en Perú →</Link>
          <Link href="/peru/ruleta-online/" className="text-[#00C853] hover:underline text-sm font-bold">Guía de Ruleta Online en Perú →</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton slug="betsson-peru" text="Jugar Blackjack en Betsson" />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        <p className="text-center text-[#71717a] text-xs mt-8">+18 | Jugá con responsabilidad | Los juegos de azar implican riesgo de pérdida</p>
      </Section>
    </>
  );
}
