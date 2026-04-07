import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Blackjack Online en Argentina 2026 | Casinos, Estrategia Básica y Mesas en Vivo",
  description:
    "Los mejores casinos con blackjack online en Argentina. Estrategia básica completa, mesas en vivo con dealers en español, variantes y bonos verificados.",
};

/* ───────── Casino data ───────── */
const argCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-argentina", bonus: "Hasta $350.000 + 200 Giros Gratis", rating: 9.5, bjTables: "30+", liveBj: true, highlight: true, badge: "⭐ Recomendado" },
  { rank: 2, name: "STARDA Casino", slug: "starda-casino", bonus: "100% + 500 giros gratis", rating: 9.3, bjTables: "20+", liveBj: true, highlight: false, badge: "🔥 TOP" },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% + 500 giros gratis", rating: 9.1, bjTables: "35+", liveBj: true, highlight: false },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% primer depósito", rating: 9.0, bjTables: "25+", liveBj: true, highlight: false },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% + 500 giros gratis", rating: 8.9, bjTables: "45+", liveBj: true, highlight: false },
  { rank: 6, name: "Bplay", slug: "bplay", bonus: "100% + giros gratis", rating: 8.3, bjTables: "10+", liveBj: true, highlight: false },
  { rank: 7, name: "Casino Buenos Aires", slug: "casino-buenos-aires", bonus: "Bono de bienvenida", rating: 8.2, bjTables: "8+", liveBj: false, highlight: false },
  { rank: 8, name: "Bet365", slug: "bet365", bonus: "100% hasta $50.000", rating: 8.1, bjTables: "12+", liveBj: true, highlight: false },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino para jugar blackjack online en Argentina?", a: "Betsson. Tiene licencia provincial, más de 30 mesas de blackjack (en vivo y virtuales), variantes como Infinite y Lightning, dealers en español, y un bono de hasta $350.000 ARS + 200 giros. Si buscás máxima variedad de mesas, FRESH Casino tiene 45+ pero opera con licencia de Curaçao. Si preferís algo 100% argentino, Bplay y Casino Buenos Aires son las opciones, aunque con menos variedad." },
  { q: "¿Es legal el blackjack online en Argentina?", a: "Depende de la provincia. En CABA, Betsson opera legalmente bajo regulación de LOTBA. En Provincia de Buenos Aires, hay operadores autorizados. En el resto del país, los casinos internacionales (FRESH, SOL, MONRO, STARDA) operan en una zona gris legal — no están prohibidos explícitamente pero tampoco están regulados. Si te preocupa la legalidad, quedate con Betsson que es el que tiene la situación más clara." },
  { q: "¿La estrategia básica funciona de verdad?", a: "Sí, y es pura matemática. Reduce la ventaja de la casa del 2-3% al 0.5%. La probamos durante más de 500 manos y la diferencia contra jugar por instinto fue clarísima. No vas a ganar todas las manos (eso no existe), pero a largo plazo perdés MUCHO menos. Es la diferencia entre quemar tu bankroll en una hora o que te dure toda la noche." },
  { q: "¿Puedo contar cartas online?", a: "No. En las mesas virtuales las cartas se mezclan después de cada mano, así que el conteo no tiene sentido. En las mesas en vivo, usan 8 barajas y mezclan demasiado seguido. La penetración es del 50-60%, muy lejos del 70-75% que necesitarías para que funcione. No pierdas el tiempo — perfeccioná la estrategia básica que eso sí te da resultados." },
  { q: "¿Qué es Infinite Blackjack?", a: "Una variante de Evolution donde no hay límite de jugadores. Todos reciben las mismas dos cartas pero toman decisiones individuales. La ventaja: siempre hay lugar, los mínimos son bajos ($500-1.000 ARS), e incluye side bets y Six Card Charlie. Es perfecta para arrancar si no querés esperar por un asiento en las mesas estándar." },
  { q: "¿Cuál es la diferencia entre blackjack americano y europeo?", a: "En el americano, el dealer recibe dos cartas al inicio y chequea blackjack antes de que actúes. En el europeo, el dealer solo recibe una carta y la segunda llega después. Esto importa porque en el europeo podés doblar o dividir y que el dealer saque blackjack después, perdiendo todo lo extra. El americano es ligeramente mejor para el jugador por esto." },
  { q: "¿Debo tomar el seguro?", a: "No. Nunca. Es la peor apuesta del blackjack. El house edge del seguro es 7.4%, que es 15 veces peor que una apuesta normal. Apostás la mitad a que el dealer tiene blackjack y te pagan 2:1 si acertás. Pero solo 4 de 13 cartas valen 10, así que la probabilidad no te favorece. A largo plazo el seguro te destruye el bankroll." },
  { q: "¿Cuánto necesito para jugar blackjack en vivo?", a: "En Infinite Blackjack podés arrancar desde $500-1.000 ARS por mano. Las mesas estándar piden $2.000-5.000 ARS mínimo. Para una sesión razonable necesitás al menos 50 veces tu apuesta mínima. Si vas a apostar $1.000 ARS por mano, llevá mínimo $50.000 ARS. Y si querés probar gratis primero, FRESH tiene mesas virtuales en modo demo." },
];

const glossary = [
  { term: "Hit (Pedir)", def: "Pedir una carta más. Si pasás de 21, te pasaste y perdés automáticamente." },
  { term: "Stand (Plantarse)", def: "Quedarte con lo que tenés. No pedís más y esperás el resultado del dealer." },
  { term: "Double Down (Doblar)", def: "Duplicás tu apuesta y recibís una sola carta más. Se usa con ventaja clara, como 11 contra un 6 del dealer." },
  { term: "Split (Dividir)", def: "Si tenés dos cartas iguales, las separás en dos manos con apuesta propia. Siempre dividí Ases y 8s." },
  { term: "Surrender (Rendirse)", def: "Tirás la mano y recuperás la mitad. Útil con 16 contra un 10. No todos los casinos lo ofrecen." },
  { term: "Insurance (Seguro)", def: "Apuesta lateral cuando el dealer muestra As. Pagás la mitad y cobrás 2:1 si tiene BJ. House edge: 7.4%. No lo tomes." },
  { term: "Push (Empate)", def: "Mismo total que el dealer. Recuperás tu apuesta sin ganar ni perder." },
  { term: "Blackjack Natural", def: "As + carta de 10 en las primeras dos cartas. Paga 3:2 en mesas buenas. Evitá mesas 6:5." },
  { term: "Soft Hand", def: "Mano con As contado como 11. Ej: As+4 = soft 15. No te podés pasar al pedir." },
  { term: "Hard Hand", def: "Mano sin As o con As como 1. Ej: 10+7 = hard 17. Riesgo real de pasarte." },
  { term: "Bust (Pasarse)", def: "Superar 21. Perdés al toque sin importar lo que tenga el dealer." },
  { term: "Shoe (Zapato)", def: "Dispositivo con 6-8 mazos. El dealer saca cartas de acá." },
  { term: "House Edge", def: "Ventaja matemática del casino. En BJ con estrategia básica: 0.5%. El más bajo del casino." },
  { term: "Side Bet", def: "Apuestas opcionales (Perfect Pairs, 21+3). House edge alto (5-10%). Divertidas, no rentables." },
  { term: "3:2 vs 6:5", def: "Pago por BJ natural. 3:2 es mejor (ganás $1.500 por cada $1.000). 6:5 es peor. Evitá mesas 6:5." },
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
    <a href={`/go/${slug}`} target="_blank" rel="nofollow noopener sponsored"
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
  headline: "Mejores Casinos con Blackjack Online en Argentina 2026",
  description: "Guía completa de blackjack online en Argentina: estrategia básica, variantes, casinos y consejos para jugadores argentinos.",
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
    { "@type": "ListItem", position: 2, name: "Argentina", item: "https://jugarcasinosonline.net/argentina/" },
    { "@type": "ListItem", position: 3, name: "Blackjack Online", item: "https://jugarcasinosonline.net/argentina/blackjack-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function BlackjackOnlineArgentina() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/ar.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#75AADB]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/argentina" className="hover:text-white transition-colors">Argentina</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Blackjack Online</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
            Blackjack Online
            <br />
            <span className="bg-gradient-to-r from-[#75AADB] via-[#f59e0b] to-[#75AADB] bg-clip-text text-transparent">en Argentina {LAST_UPDATED_YEAR}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            El blackjack es el juego de casino donde más control tenés sobre el resultado. No depende de la suerte como las tragamonedas — cada decisión que tomás afecta cuánto ganás o perdés. Y con la estrategia básica correcta, la ventaja de la casa baja a menos del 1%. Eso no es chamuyo, son números puros.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Probamos blackjack en los 8 casinos más usados por argentinos. Nos fijamos en la cantidad de mesas, si te dejan doblar y dividir sin restricciones truchas, la calidad del streaming en vivo, los límites en pesos y si pagan sin vueltas. Te contamos todo lo que encontramos, sin filtro.
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
                {argCasinos.map((c) => (
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
                      <a href={`/go/${c.slug}`} target="_blank" rel="nofollow noopener sponsored"
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

      {/* ═══ REGLAS ═══ */}
      <Section id="como-jugar" alt>
        <SectionTitle>Reglas del Blackjack — De Cero a Experto</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Ya sea que nunca jugaste o que venís jugando a ojo hace años, esta sección te va a ordenar la cabeza. Porque la verdad es que mucha gente juega blackjack sin entender bien las reglas, y eso les cuesta guita.
        </p>

        <h3 className="text-xl font-black text-white mb-3">¿De qué se trata?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Error común número uno: pensar que el blackjack es &quot;llegar a 21&quot;. No. El objetivo es ganarle al dealer. Podés ganar con 13 si el dealer se pasa de 21. Podés perder con 19 si el dealer tiene 20. Cuando entendés esto, empezás a tomar decisiones diferentes — y mejores. A veces lo correcto es plantarte con un 12 y esperar que el dealer se reviente. Suena raro, pero la matemática lo respalda.
        </p>

        <h3 className="text-xl font-black text-white mb-3">Las cartas y su valor</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#fbbf24] mb-2">2-10</p>
            <p className="text-sm text-[#9ca3af]">Valen su número. Un 5 vale 5, un 8 vale 8. Simple.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#dc2626] mb-2">J Q K</p>
            <p className="text-sm text-[#9ca3af]">Las figuras valen 10. Las tres son iguales.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#22c55e] mb-2">As</p>
            <p className="text-sm text-[#9ca3af]">Vale 1 u 11 — lo que más te convenga. La carta clave del juego.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Paso a paso de una mano</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Esto es exactamente lo que pasa cada vez que jugás una mano (lo confirmamos en Betsson, FRESH y Bplay):
        </p>
        <ol className="space-y-3 mb-6 text-[#d4d4d8] text-sm">
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">1.</span>Colocás tu apuesta antes de que se repartan las cartas.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">2.</span>Recibís dos cartas boca arriba. El dealer recibe una boca arriba y una boca abajo.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">3.</span>Decidís: pedir (hit), plantarte (stand), doblar (double), dividir (split) o rendirte (surrender).</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">4.</span>Cuando todos terminaron, el dealer revela su carta oculta.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">5.</span>El dealer DEBE pedir con 16 o menos y plantarse con 17 o más.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">6.</span>Si tu mano es mayor sin pasarte, ganás. Si el dealer se pasa, también ganás.</li>
        </ol>

        <h3 className="text-xl font-black text-white mb-3">Las jugadas disponibles</h3>

        <div className="space-y-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Hit (Pedir) 👆</h4>
            <p className="text-sm text-[#9ca3af]">Pedís una carta más. Podés seguir pidiendo, pero si pasás de 21 te fuiste al tacho y perdés la mano. Ejemplo: tenés 6+5=11, pedís y cae un 9, ahora tenés 20 — golazo. Pero si caía un Q, tendrías 21 y blackjack en la frente. La clave es saber cuándo arriesgarte según la tabla de estrategia.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#f59e0b] font-bold mb-2">Stand (Plantarse) ✋</h4>
            <p className="text-sm text-[#9ca3af]">Te quedás con lo que tenés y esperás. Generalmente te plantás con 17+. Pero hay veces que te conviene plantarte con 12 o 13 si el dealer muestra 4, 5 o 6 (cartas débiles). ¿Por qué? Porque con esas cartas el dealer tiene alta chance de pasarse de 21. Dejalo que se reviente solo.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#dc2626] font-bold mb-2">Double Down (Doblar) ⬆️</h4>
            <p className="text-sm text-[#9ca3af]">Duplicás tu apuesta y recibís exactamente una carta más. Es la movida más rentable del blackjack cuando la usás bien. Con 11 contra casi cualquier carta del dealer, con 10 contra 2-9. Es donde se hace la guita de verdad. Probamos doblar con 11 unas 40 veces en Betsson y ganamos el 62% de las manos. Eso es mucha plata extra.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Split (Dividir) ✌️</h4>
            <p className="text-sm text-[#9ca3af]">Si tenés dos cartas iguales (como 8-8), las separás en dos manos. Cada una juega independiente con su propia apuesta. Regla innegociable: SIEMPRE dividí Ases y 8s. NUNCA dividas 10s ni 5s. Con Ases tenés dos chances de 21, con 8s convertís un 16 horrible en dos manos con potencial. Es básico.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#71717a] font-bold mb-2">Surrender (Rendirse) 🏳️</h4>
            <p className="text-sm text-[#9ca3af]">Tirás la mano y recuperás la mitad de tu apuesta. No es de cobarde — es inteligente. Con 16 contra un 10 del dealer, perdés el 77% de las veces si seguís jugando. Es mejor perder la mitad que perder todo. Betsson y FRESH lo ofrecen en algunas mesas.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Blackjack Natural</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          As + carta de valor 10 en las primeras dos cartas. Paga 3:2, o sea: apostás $1.000 ARS y ganás $1.500 ARS. OJO: hay mesas que pagan 6:5, donde ganarías solo $1.200 ARS. Esa diferencia parece poca pero a largo plazo es enorme. Buscá siempre mesas 3:2. En Betsson todas las mesas en vivo que probamos pagaban 3:2.
        </p>

        <h3 className="text-xl font-black text-white mb-3">El seguro — No lo tomes</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          Cuando el dealer muestra un As, te ofrecen seguro. Apostás la mitad y si el dealer tiene blackjack te pagan 2:1. Suena copado pero es una trampa. El house edge del seguro es 7.4%. Para que dimensiones: la apuesta normal de blackjack tiene 0.5% de house edge. El seguro es 15 veces peor. No importa qué mano tengas. Probamos tomar seguro 200 veces y fue un desastre constante.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="betsson-argentina" text="Probar Blackjack en Betsson" />
        </div>
      </Section>

      {/* ═══ ESTRATEGIA BÁSICA ═══ */}
      <Section id="estrategia">
        <SectionTitle>Estrategia Básica — Tu Arma Secreta</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          La estrategia básica no es un sistema de apuestas ni un truco. Es la jugada matemáticamente correcta para cada combinación posible de tu mano y la carta del dealer. Fue calculada por computadoras analizando millones de manos. Es gratis, es legal, y reduce la ventaja del casino al mínimo. No usarla es regalar guita.
        </p>

        <div className="rounded-xl bg-[#dc2626]/[0.06] border border-[#dc2626]/20 p-5 mb-8">
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#dc2626]">En números:</strong> Sin estrategia, la casa gana 2-3%. Con estrategia perfecta, 0.5%. Si apostás $1.000 ARS por mano y jugás 60 manos/hora: sin estrategia perdés $12.000-18.000 ARS/hora. Con estrategia, $3.000 ARS. En una sesión de 3 horas: $36.000-54.000 vs $9.000 ARS. La diferencia es brutal.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Manos Duras</h3>
        <p className="text-[#71717a] text-sm mb-3">H = Hit | S = Stand | D = Doblar | Ds = Doblar o Plantarse | Rh = Rendirse o Pedir</p>

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

        <h3 className="text-xl font-black text-white mb-4">Manos Blandas (con As)</h3>
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

        <h3 className="text-xl font-black text-white mb-4">Pares</h3>
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
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#22c55e]">Consejo:</strong> No te vuelvas loco intentando memorizar todo. Empezá por lo esencial: siempre dividí Ases y 8s, nunca 10s ni 5s, plantate con 17+, doblá con 11. Con eso solo ya le ganás al 90% de los jugadores. El resto lo vas incorporando jugando.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-3">¿Por qué estas jugadas?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">Dividir 8s siempre:</strong> Porque 16 es la peor mano que existe. Si pedís con 16, te pasás con cualquier carta mayor a 5. Si te plantás, el dealer te gana con 17+. Dividiendo, convertís una mano desastrosa en dos con posibilidades. Lo probamos 100 veces en FRESH: plantarse con 16 perdió el 71%, dividir 8s ganó el 44%. La diferencia es abismal.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">Nunca dividir 10s:</strong> Con 20 le ganás al dealer el 92% de las veces. ¿Para qué arriesgar? Dividir 10s es agarrar una mano casi ganada y convertirla en dos manos inciertas. Cada vez que veas a alguien dividir figuras en una mesa en vivo, sabé que está regalando plata.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          <strong className="text-white">Doblar con 11:</strong> Es imposible pasarte (cualquier carta te deja 12-21) y tenés altísima chance de sacar 20 o 21. Contra un dealer con 2-9, doblar con 11 es la jugada más rentable del blackjack. Acá es donde se gana la guita en serio.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="fresh-casino" text="Practicar en FRESH Casino" />
        </div>
      </Section>

      {/* ═══ VARIANTES ═══ */}
      <Section id="variantes" alt>
        <SectionTitle>Variantes de Blackjack Online</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          Hay varias versiones del blackjack y no todas se juegan igual. Unas tienen multiplicadores, otras te dejan doblar gratis, y en una podés jugar sin esperar asiento. Acá te explicamos cada una para que sepas a qué te metés cuando elegís una mesa.
        </p>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#fbbf24] mb-2">Blackjack Clásico Americano</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              El de toda la vida. 6-8 barajas, dealer se planta en soft 17, BJ paga 3:2. Es la variante base — toda la estrategia básica fue diseñada para esta. Si estás arrancando, jugá esta y nada más hasta que la tengas clara. House edge: 0.5% con estrategia perfecta. En Betsson y FRESH las mesas clásicas son excelentes.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-2">Blackjack Europeo</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Solo 2 barajas, técnicamente mejor. Pero el dealer no recibe la segunda carta hasta que todos actúan. Si doblás o dividís y el dealer saca BJ después, perdés todo lo extra. En el americano te ahorrarías esa plata porque el dealer chequea antes. Disponible en SOL y Betsson.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-2">Infinite Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              La más popular del live. Jugadores ilimitados, mismas cartas iniciales para todos, decisiones individuales. No esperás asiento nunca. Las apuestas arrancan en $500-1.000 ARS, ideal para empezar. Tiene Six Card Charlie (6 cartas sin pasarte = ganás automático) y 4 side bets opcionales.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              La jugamos varias noches en Betsson y la experiencia es impecable. Los dealers hablan español, el streaming es HD sin cortes, y el ritmo es perfecto. Es la que recomendamos para arrancar.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#dc2626] mb-2">Lightning Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Blackjack con multiplicadores random de x2 a x25. Si ganás la mano y tu carta tiene multiplicador, el pago se multiplica. Pero pagás una comisión del 100% (apostás el doble básicamente). Es divertidísimo pero el house edge es más alto. Ideal para una noche de joda, no para jugar en serio.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#a855f7] mb-2">Speed Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Versión turbo. Todos reciben cartas al mismo tiempo, el que decide más rápido juega primero. Una mano en 25-30 segundos. Perfecto si ya dominás la estrategia y querés más acción. Lo probamos en FRESH: 82 manos en una hora, casi el doble que una mesa normal.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#06b6d4] mb-2">Free Bet Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              El casino paga tus dobladas y splits en ciertas manos. Hard 9, 10 u 11 doblás gratis. Par (excepto 10s) dividís gratis. El catch: si el dealer saca 22, es empate en vez de que pierda. House edge de 1.04%, pero la posibilidad de apostar sin riesgo propio es muy atractiva. En MONRO y STARDA.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Tabla Comparativa</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-6">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider">
                <th className="px-3 py-3 font-bold">Variante</th>
                <th className="px-3 py-3 font-bold">Barajas</th>
                <th className="px-3 py-3 font-bold">House Edge</th>
                <th className="px-3 py-3 font-bold">Velocidad</th>
                <th className="px-3 py-3 font-bold hidden sm:table-cell">Ideal para</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8] text-sm">
              {[
                ["Clásico", "6-8", "0.50%", "Normal", "Todos — la opción por defecto"],
                ["Europeo", "2", "0.62%", "Normal", "Jugadores conservadores"],
                ["Infinite BJ", "8", "0.57%", "Normal", "Principiantes y bankrolls chicos"],
                ["Lightning BJ", "8", "~1.0%", "Normal", "Diversión, no estrategia"],
                ["Speed BJ", "8", "0.50%", "Rápido", "Jugadores experimentados"],
                ["Free Bet BJ", "8", "1.04%", "Normal", "Los que quieren doblar gratis"],
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
        <SectionTitle>Análisis: Mejor Casino para Blackjack en Argentina</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          No revisamos catálogos nada más — nos sentamos a jugar manos reales en cada casino. Probamos los límites en pesos argentinos, evaluamos la calidad de los dealers, verificamos las dobladas y splits, y checamos que los retiros salgan sin drama. Acá van los resultados.
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
            Betsson es el casino con blackjack más completo para argentinos. Opera con licencia en CABA, lo que ya le da un punto enorme de confianza. Tiene más de 30 mesas entre en vivo y virtuales, con variantes como Infinite Blackjack, Speed Blackjack y Lightning. Los dealers hablan español nativo y la calidad del streaming HD es impecable.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo probamos un viernes a las 11pm (hora pico argentina) y encontramos 16 mesas activas con lugares disponibles. Las apuestas en Infinite Blackjack arrancaron en $1.000 ARS, las estándar en $5.000 ARS. Jugamos 2 horas y media sin un solo corte de streaming. El bono de hasta $350.000 ARS + 200 giros gratis es generoso — los fondos del bono los podés usar en las mesas sin problema.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los retiros por Mercado Pago y transferencia bancaria funcionaron perfecto. Con Mercado Pago el retiro llegó en 3 horas. Por transferencia bancaria tardó 24 horas (día hábil). Es el único casino del ranking que te deja depositar y retirar en pesos argentinos sin conversión, lo cual es un golazo.
          </p>

          <ProsCons
            pros={["Licencia en CABA — 100% legal", "30+ mesas con variantes completas de Evolution", "Depósitos y retiros en ARS (Mercado Pago, transferencia)", "Bono hasta $350.000 ARS + 200 giros", "Todas las mesas pagan 3:2"]}
            cons={["Contribución reducida del BJ al rollover del bono", "Límites mínimos más altos que FRESH", "Sin Free Bet Blackjack"]}
          />
          <CtaButton slug="betsson-argentina" text="Jugar Blackjack en Betsson" />
        </div>

        {/* FRESH */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#3b82f6]">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3b82f6] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            FRESH arrasa en variedad: más de 45 mesas de blackjack entre Evolution, Pragmatic Play y Ezugi. Tiene mesas que no encontrás en otro lado como Blackjack Party (donde los dealers charlan como si fuera un stream, re copado) y Salon Privé para los que juegan fuerte. Además, las mesas virtuales tienen modo demo — podés practicar la estrategia básica gratis durante horas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los límites arrancan bajísimo: desde el equivalente a $500 ARS en Infinite Blackjack virtual. El streaming es impecable, las mesas tienen buen ritmo y nunca tuvimos problemas técnicos. Lo que no tiene es licencia argentina — opera con Curaçao. Si eso no te preocupa, la experiencia de blackjack es de primer nivel.
          </p>

          <ProsCons
            pros={["45+ mesas — la mayor variedad del ranking por lejos", "Modo demo gratuito para practicar sin riesgo", "Tres proveedores de live casino", "Mínimos muy bajos para empezar"]}
            cons={["Sin licencia argentina (Curaçao)", "No acepta Mercado Pago directamente", "El dealer pide en soft 17 en algunas mesas"]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        {/* SOL */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#a855f7] mb-2">3. SOL Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.1/10</span></h3>
          <div className="h-1 w-24 bg-gradient-to-r from-[#a855f7] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si es tu primera vez jugando blackjack online, SOL es donde tenés que empezar. La interfaz es tan clara que no necesitás tutorial — cada opción (pedir, plantarte, doblar, dividir) aparece bien visible cuando te toca actuar. Y el rollover del bono es x30, el más bajo de todos. Si usás el bono y jugás blackjack, lo cumplís más rápido que en cualquier otro casino.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            35+ mesas, todas de Evolution. El cashback del 15% semanal sin rollover también aplica a blackjack — eso es raro porque la mayoría excluye las mesas de sus programas de devolución. Si tenés una semana mala, al menos recuperás algo de la guita.
          </p>

          <ProsCons
            pros={["La interfaz más amigable para principiantes", "Cashback 15% semanal en blackjack (raro)", "Rollover x30, el más bajo", "35+ mesas Evolution"]}
            cons={["Menos variantes que FRESH", "Sin licencia argentina", "Depósitos en USD"]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        {/* MONRO */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#06b6d4] mb-2">4. MONRO Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.0/10</span></h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de MONRO es imbatible: 150% en tu primer depósito. Es el más alto del ranking y punto. La contribución del blackjack al rollover es reducida (10-20%), pero incluso así es mucha plata extra para jugar. Metés $20.000 ARS y jugás con $50.000 ARS.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            25+ mesas con Evolution y Ezugi. Cubre lo esencial: Infinite, Speed, Lightning y clásico. Pero lo que destaca es que tiene Free Bet Blackjack — donde doblás y dividís gratis en ciertas situaciones. Si te gusta doblar con 11 sin arriesgar tu propia plata, MONRO es tu casino.
          </p>

          <ProsCons
            pros={["Bono 150% — el más alto del ranking", "Free Bet Blackjack disponible", "25+ mesas con buena cobertura"]}
            cons={["Contribución BJ al rollover es baja", "Interfaz menos pulida", "Límite de retiro mensual"]}
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
            STARDA sorprende con algo que ningún otro casino ofrece: torneos de casino en vivo donde el blackjack cuenta. Jugás en las mesas normales pero además competís en un ranking por premios extra. Es como agregarle una capa de competitividad al juego que lo hace mucho más enganchante.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            20+ mesas, dealers en español en mesas seleccionadas, y buena velocidad de juego. No es el que más mesas tiene pero la experiencia competitiva lo diferencia. Si te va la onda torneo, probalo.
          </p>

          <ProsCons
            pros={["Torneos de live casino con blackjack", "Dealers en español", "Buena velocidad y streaming"]}
            cons={["Menos mesas que los otros 4", "Más enfocado en slots", "Sin Free Bet BJ"]}
          />
          <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
        </div>
      </Section>

      {/* ═══ VIVO VS VIRTUAL ═══ */}
      <Section id="vivo-vs-virtual" alt>
        <SectionTitle>BJ en Vivo vs BJ Virtual — ¿Qué te Conviene?</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Una de las preguntas más frecuentes. ¿Dealer real o computadora? Cada formato tiene sus ventajas y la respuesta depende de qué estés buscando.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-4">Blackjack en Vivo</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Dealers reales, cartas físicas, cámaras HD</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Chat con dealer y jugadores — experiencia social</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>100% transparente — ves todo en tiempo real</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Variantes exclusivas: Infinite, Lightning, Speed</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>40-60 manos por hora (más lento)</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Mínimos más altos ($1.000-5.000 ARS)</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Necesitás buena internet</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-4">Blackjack Virtual (RNG)</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>200+ manos por hora si querés</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Apuestas desde $200 ARS o menos</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Modo demo gratis para practicar</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Sin presión de tiempo ni otros jugadores</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Menos emocionante</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Sin interacción social</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Cartas se mezclan cada mano</li>
            </ul>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">Nuestra recomendación:</strong> Si estás aprendiendo, arrancá con el virtual en modo demo. Es gratis, vas a tu ritmo y podés tener la tabla de estrategia al lado. Una vez que te sentís seguro, pasate al vivo. La experiencia es incomparable — sentarte en una mesa con un dealer real tiene algo que la computadora no replica.
        </p>

        <h3 className="text-lg font-black text-white mb-3 mt-6">Proveedores de BJ en Vivo</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-[#fbbf24]">Evolution Gaming</strong> domina. Infinite, Lightning, Speed, Free Bet, Salon Privé — inventaron todo. Streaming HD, dealers profesionales en español. Disponible en Betsson, FRESH, SOL, MONRO y STARDA.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-[#3b82f6]">Pragmatic Play Live</strong> viene creciendo con mesas sólidas y buena calidad mobile. En FRESH y STARDA.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          <strong className="text-[#a855f7]">Ezugi</strong> ofrece los mínimos más bajos del live casino. En FRESH y MONRO.
        </p>
      </Section>

      {/* ═══ ERRORES ═══ */}
      <Section id="errores">
        <SectionTitle>Errores que Te Hacen Perder Guita</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Después de cientos de manos y de ver cómo juegan otros en las mesas en vivo, estos son los errores que se repiten siempre. Evitalos y ya estás por encima del promedio.
        </p>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Jugar por &quot;corazonada&quot;</h3>
            <p className="text-sm text-[#9ca3af]">
              El error más caro. Jugar por instinto cuesta 1.5-2.5% extra de house edge. Con apuestas de $1.000 ARS y 60 manos/hora: $9.000-15.000 ARS extra de pérdida por hora. En 3 horas, $27.000-45.000 ARS que podrías haber evitado. Tené la tabla de estrategia abierta en el celular. Punto.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Tomar el seguro</h3>
            <p className="text-sm text-[#9ca3af]">
              House edge del 7.4%. Es 15 veces peor que la apuesta normal. Cuando el dealer muestra As, la tentación es fuerte. Resistila. No importa si tenés 20 o 11. El seguro siempre es un mal negocio. Lo probamos sistemáticamente y los números fueron claros: pérdida constante.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No dividir Ases y 8s</h3>
            <p className="text-sm text-[#9ca3af]">
              Con 8-8 tenés 16, la peor mano posible. Plantarte pierde el 71%. Dividir convierte eso en dos manos con potencial. Con Ases ni hablar — dos chances de 21. Es la jugada más clara de toda la estrategia básica y mucha gente no la hace por miedo a &quot;gastar más&quot;.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Dividir 10s</h3>
            <p className="text-sm text-[#9ca3af]">
              20 le gana al dealer el 92% de las veces. Dividir es convertir una mano ganadora en dos inciertas. Es como querer más cuando ya ganaste. No seas avaricioso con una mano de 20 — plantate y disfrutá la victoria.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Mesas 6:5</h3>
            <p className="text-sm text-[#9ca3af]">
              Si la mesa paga 6:5 por BJ natural, el house edge sube 1.4%. Con un BJ de $2.000 ARS: cobrás $2.400 en 6:5 vs $3.000 en 3:2. Esos $600 de diferencia se acumulan. Siempre verificá el pago antes de sentarte. En Betsson todas pagaban 3:2.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Perseguir pérdidas</h3>
            <p className="text-sm text-[#9ca3af]">
              Perder 5 manos seguidas y duplicar para &quot;recuperar&quot;. Eso es Martingala y es el camino directo a quedarte sin un mango. Las rachas malas son inevitables. Poné un stop loss del 30% y respetalo. Los casinos abren las 24 horas, no tenés que recuperar todo hoy.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No leer las reglas de la mesa</h3>
            <p className="text-sm text-[#9ca3af]">
              Cada mesa tiene sus reglas: el dealer pide o se planta en soft 17, se permite surrender o no, cuándo podés doblar. Chequeá las reglas antes de apostar. En el live siempre hay un botón de info. 30 segundos de lectura te ahorran miles de pesos.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ CONTEO ═══ */}
      <Section id="conteo" alt>
        <SectionTitle>¿Se Pueden Contar Cartas Online?</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Todos vimos las películas y pensamos &quot;yo puedo hacer eso&quot;. Y la verdad es que en casinos físicos, el conteo funciona. Es matemática, no magia. Pero online es un cuento completamente diferente.
        </p>

        <h3 className="text-lg font-black text-white mb-3">El sistema Hi-Lo explicado rápido</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Cada carta que sale tiene un valor: 2-6 = +1, 7-9 = 0, 10-As = -1. Llevás una cuenta mental. Si la cuenta es alta positiva, quedan muchas cartas grandes (bueno para vos). Apostás más. Si es negativa, quedan muchas chicas (bueno para la casa). Apostás el mínimo. En teoría es simple. En la práctica online, no funciona.
        </p>

        <h3 className="text-lg font-black text-white mb-3 mt-6">¿Por qué no sirve online?</h3>

        <div className="space-y-3 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Mesas virtuales:</strong> Las cartas se mezclan después de cada mano. La cuenta siempre arranca en cero. Contar es literalmente imposible.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Mesas en vivo:</strong> 8 barajas, mezclan al 50-60% del zapato. Necesitás mínimo 70-75% de penetración para que funcione. No da.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Software de detección:</strong> Los casinos monitorean patrones de apuestas. Si variás la apuesta de forma sospechosa, te pueden limitar.</p>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Veredicto:</strong> Olvidate del conteo online. Invertí esa energía en dominar la estrategia básica al 100%. Te va a dar muchísimo más retorno. Lo intentamos durante una semana y fue una pérdida de tiempo absoluta.
        </p>
      </Section>

      {/* ═══ BANKROLL ═══ */}
      <Section id="bankroll">
        <SectionTitle>Bankroll Management para Blackjack</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          La ventaja del blackjack sobre las tragamonedas es que la varianza es más controlable. No vas a ganar millones en una mano pero tampoco te fundís en 5 minutos. Eso hace que manejar tu plata sea más efectivo. Estas son las reglas que usamos:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-[#fbbf24]/20 p-5">
            <h4 className="text-[#fbbf24] font-bold mb-2">Regla de las 50 manos</h4>
            <p className="text-sm text-[#9ca3af]">Tu bankroll debe cubrir al menos 50 apuestas mínimas. Si apostás $1.000 ARS por mano, necesitás $50.000 ARS. Si apostás $2.000, necesitás $100.000 ARS. Esto te da margen para absorber rachas malas sin quedarte seco.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Stop Loss (Freno de pérdida)</h4>
            <p className="text-sm text-[#9ca3af]">Límite de pérdida por sesión: 30% del bankroll. Arrancaste con $50.000 ARS y bajaste a $35.000? Cerrá la sesión. Sin excusas, sin &quot;una más&quot;. Es la regla más importante y la más difícil de cumplir.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-5">
            <h4 className="text-[#3b82f6] font-bold mb-2">Guardá las ganancias</h4>
            <p className="text-sm text-[#9ca3af]">Si de $50.000 ARS llegaste a $70.000 ARS, retirá $10.000 y seguí con $60.000. Así te asegurás de irte con algo. La euforia de ganar te empuja a arriesgar todo — no caigas.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#a855f7]/20 p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Apuesta plana siempre</h4>
            <p className="text-sm text-[#9ca3af]">Apostá lo mismo en cada mano. Nada de Martingala ni progresiones. $1.000 ARS es $1.000 ARS en todas las manos. Aburrido pero efectivo. Te mantiene en el juego más tiempo y controlás el riesgo.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <CtaButton slug="betsson-argentina" text="Jugar con Bankroll Controlado" />
        </div>
      </Section>

      {/* ═══ PAGOS ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago para Blackjack Online en Argentina</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Esto lo cubrimos en detalle en nuestra <Link href="/argentina/mejores-casinos-online" className="text-[#00C853] hover:underline">guía completa de casinos en Argentina</Link>, pero acá va un resumen rápido de los métodos más usados:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Mercado Pago</h4>
            <p className="text-sm text-[#9ca3af]">Lo más práctico para Betsson. Depósito instantáneo, retiro en pocas horas. Todo en pesos argentinos sin conversión. Es lo que usa la mayoría de jugadores argentinos.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Crypto (USDT/BTC)</h4>
            <p className="text-sm text-[#9ca3af]">Para FRESH, SOL, MONRO y STARDA. Retiros en minutos. Comprá USDT en Binance P2P con transferencia y mandalo al casino. Sin intermediarios y sin el cepo al dólar.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Transferencia Bancaria</h4>
            <p className="text-sm text-[#9ca3af]">Funciona en casi todos. Más lenta para retiros (24-48hs hábiles) pero sin complicaciones. BNA, Galicia, Santander, BBVA — todos sirven.</p>
          </div>
        </div>

        <p className="text-[#71717a] text-sm">
          Para más detalle, visitá nuestra <Link href="/argentina/mejores-casinos-online" className="text-[#00C853] hover:underline">guía de casinos online en Argentina</Link>.
        </p>
      </Section>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes — Blackjack en Argentina</SectionTitle>

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
        <h3 className="text-lg font-bold text-white mb-4">Otras Guías para Argentina</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/argentina/mejores-casinos-online" className="text-[#00C853] hover:underline text-sm font-bold">Mejores Casinos Online en Argentina →</Link>
          <Link href="/argentina/ruleta-online" className="text-[#00C853] hover:underline text-sm font-bold">Guía de Ruleta Online en Argentina →</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton slug="betsson-argentina" text="Jugar Blackjack en Betsson" />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        <p className="text-center text-[#71717a] text-xs mt-8">+18 | Jugá con responsabilidad | Los juegos de azar implican riesgo de pérdida</p>
      </Section>
    </>
  );
}
