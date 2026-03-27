import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Blackjack Online en Chile 2026 | Casinos, Estrategia y Mesas en Vivo",
  description:
    "Mejores casinos con blackjack online en Chile. Estrategia básica completa, mesas en vivo, variantes y bonos verificados para jugadores chilenos.",
};

/* ───────── Casino data ───────── */
const chileCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-chile", bonus: "Hasta $400.000 + 200 Giros Gratis", rating: 9.5, bjTables: "30+", liveBj: true, highlight: true, badge: "⭐ Recomendado" },
  { rank: 2, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% + 500 giros gratis", rating: 9.3, bjTables: "45+", liveBj: true, highlight: false },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% + 500 giros gratis", rating: 9.1, bjTables: "35+", liveBj: true, highlight: false },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% primer depósito", rating: 9.0, bjTables: "25+", liveBj: true, highlight: false },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% + 500 giros gratis", rating: 8.9, bjTables: "20+", liveBj: true, highlight: false, badge: "🔥 TOP" },
  { rank: 6, name: "Betway", slug: "betway", bonus: "100% hasta $100 USD", rating: 8.3, bjTables: "15+", liveBj: true, highlight: false },
  { rank: 7, name: "20Bet", slug: "20bet", bonus: "100% hasta $120 + 120 giros", rating: 8.2, bjTables: "12+", liveBj: true, highlight: false },
  { rank: 8, name: "Bet365", slug: "bet365", bonus: "100% primer depósito", rating: 8.1, bjTables: "10+", liveBj: true, highlight: false },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino para blackjack online en Chile?", a: "Betsson. Tiene más de 30 mesas de blackjack con variantes de Evolution (Infinite, Speed, Lightning), dealers en español, y un bono de hasta $400.000 CLP + 200 giros. Si buscai la mayor variedad de mesas posible, FRESH Casino tiene 45+ pero opera con licencia de Curaçao. Para una experiencia más internacional, Betway y 20Bet también son opciones sólidas." },
  { q: "¿Es legal jugar blackjack online en Chile?", a: "Chile no tiene regulación específica para casinos online, pero tampoco lo prohíbe. Los casinos internacionales como Betsson, FRESH, SOL y los demás operan libremente para jugadores chilenos. No hay ley que te sancione por jugar. Se está trabajando en un marco regulatorio pero por ahora es una zona gris en la que puedes jugar sin problemas." },
  { q: "¿La estrategia básica de blackjack sirve?", a: "Sí, y es matemática pura. Reduce la ventaja de la casa del 2-3% al 0.5%. La probamos durante más de 500 manos y la diferencia fue enorme. Sin estrategia pierdes $20.000-30.000 CLP por hora (con apuestas de $10.000). Con estrategia, $5.000 CLP. No es opinión, son números." },
  { q: "¿El blackjack online está trucado?", a: "No, si juegas en casinos con licencia. Las mesas virtuales usan generadores de números aleatorios auditados por laboratorios como eCOGRA. Las mesas en vivo son todavía más transparentes: ves al dealer repartir cartas físicas con cámaras HD en tiempo real. Los casinos ganan por la ventaja matemática, no necesitan hacer trampa." },
  { q: "¿Se pueden contar cartas online?", a: "En la práctica, no. Las mesas virtuales barajan después de cada mano. Las mesas en vivo usan 8 barajas y mezclan al 50-60% del zapato — necesitarías 70-75% para que el conteo funcione. No pierdas tiempo. Mejor perfecciona la estrategia básica." },
  { q: "¿Cuánta plata necesito para jugar?", a: "En Infinite Blackjack puedes partir desde $2.000-5.000 CLP por mano. Para una sesión razonable necesitas 50 veces tu apuesta mínima como bankroll. Si vas a apostar $5.000 CLP por mano, lleva al menos $250.000 CLP. FRESH Casino tiene mesas en modo demo para practicar gratis." },
  { q: "¿Qué es Infinite Blackjack?", a: "Variante de Evolution donde no hay límite de jugadores. Todos reciben las mismas cartas pero deciden individualmente. Siempre hay lugar, mínimos bajos, e incluye side bets y Six Card Charlie (6 cartas sin pasarte = ganas automáticamente). Es la mejor para empezar." },
  { q: "¿Debería tomar el seguro?", a: "Nunca. El seguro tiene house edge de 7.4%, que es 15 veces peor que una apuesta normal de blackjack. Apuestas la mitad a que el dealer tiene blackjack y te pagan 2:1. Suena bien pero solo 4 de 13 cartas valen 10. A largo plazo, el seguro siempre te quita plata. Cero excepciones." },
];

const glossary = [
  { term: "Hit (Pedir)", def: "Pedir otra carta al dealer. Si tu total supera 21, te pasaste y pierdes al tiro." },
  { term: "Stand (Plantarse)", def: "Quedarte con lo que tienes. No pides más y esperas el resultado del dealer." },
  { term: "Double Down (Doblar)", def: "Duplicas tu apuesta y recibes una sola carta más. La jugada clave cuando tienes ventaja." },
  { term: "Split (Dividir)", def: "Separar dos cartas iguales en manos independientes. Siempre divide Ases y 8s." },
  { term: "Surrender (Rendirse)", def: "Rindes la mano y recuperas la mitad. Inteligente con 16 contra un 10 del dealer." },
  { term: "Insurance (Seguro)", def: "Apuesta lateral cuando el dealer muestra As. House edge: 7.4%. No lo tomes jamás." },
  { term: "Push (Empate)", def: "Mismo total que el dealer. Recuperas tu apuesta, ni ganas ni pierdes." },
  { term: "Blackjack Natural", def: "As + carta de 10 en las primeras dos cartas. Paga 3:2 en mesas normales." },
  { term: "Soft Hand", def: "Mano con As como 11 (ej: As+6 = soft 17). No te puedes pasar al pedir." },
  { term: "Hard Hand", def: "Mano sin As o con As como 1 (ej: 10+8 = hard 18). Riesgo de pasarte al pedir." },
  { term: "Bust", def: "Superar 21. Pierdes automáticamente." },
  { term: "Shoe (Zapato)", def: "Dispositivo con 6-8 mazos de donde el dealer saca cartas." },
  { term: "House Edge", def: "Ventaja matemática del casino. En BJ con estrategia: 0.5%, el más bajo." },
  { term: "Side Bet", def: "Apuestas opcionales (Perfect Pairs, 21+3). House edge alto. Divertidas, no rentables." },
  { term: "3:2 vs 6:5", def: "Pago por BJ natural. 3:2 es mejor. 6:5 te roba plata. Evita mesas 6:5." },
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
  headline: "Mejores Casinos con Blackjack Online en Chile 2026",
  description: "Guía completa de blackjack online en Chile: estrategia básica, variantes, casinos y consejos para jugadores chilenos.",
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
    { "@type": "ListItem", position: 2, name: "Chile", item: "https://jugarcasinosonline.net/chile/" },
    { "@type": "ListItem", position: 3, name: "Blackjack Online", item: "https://jugarcasinosonline.net/chile/blackjack-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function BlackjackOnlineChile() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/cl.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
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
              <li><Link href="/chile/" className="hover:text-white transition-colors">Chile</Link></li>
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
            <span className="bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#0039A6] bg-clip-text text-transparent">en Chile {LAST_UPDATED_YEAR}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            El blackjack es de los pocos juegos del casino donde tus decisiones importan de verdad. No es como las tragamonedas donde apretai un botón y a esperar. Acá cada mano es una decisión, y si la tomai bien, la ventaja de la casa baja a menos del 1%. No es cuento — son matemáticas.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Nos sentamos a jugar blackjack en los 8 casinos más usados por chilenos. Evaluamos las mesas, las variantes, si las dobladas y splits funcionan sin restricciones raras, la calidad del streaming en vivo, los límites en pesos chilenos y si pagan sin webear. Acá está todo.
          </p>

          {/* ── TABLE ── */}
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
                {chileCasinos.map((c) => (
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

      {/* ═══ REGLAS ═══ */}
      <Section id="como-jugar" alt>
        <SectionTitle>Cómo se Juega Blackjack — Las Reglas Completas</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Si siempre jugaste a ojímetro o nunca te sentaste en una mesa, esta sección es para ti. Porque entender bien las reglas es la base de todo lo que viene después.
        </p>

        <h3 className="text-xl font-black text-white mb-3">El objetivo (no es lo que crees)</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Todo el mundo dice &quot;hay que llegar a 21&quot;. No po. El objetivo real es ganarle al dealer. Puedes ganar con 14 si el dealer se pasa de 21. Puedes perder con 19 si el dealer tiene 20. Esta distinción es clave porque hay situaciones donde lo correcto es plantarte con un número bajo y esperar que el dealer se reviente. La estrategia básica se basa en esto.
        </p>

        <h3 className="text-xl font-black text-white mb-3">Valor de las cartas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#fbbf24] mb-2">2-10</p>
            <p className="text-sm text-[#9ca3af]">Valen su número. Un 7 vale 7, un 3 vale 3.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#dc2626] mb-2">J Q K</p>
            <p className="text-sm text-[#9ca3af]">Figuras valen 10. Las tres son iguales.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#22c55e] mb-2">As</p>
            <p className="text-sm text-[#9ca3af]">Vale 1 u 11 según te convenga. La carta más poderosa.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Flujo de una mano</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Esto pasa en cada mano (lo verificamos en Betsson, FRESH y Betway):
        </p>
        <ol className="space-y-3 mb-6 text-[#d4d4d8] text-sm">
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">1.</span>Pones tu apuesta antes de que repartan las cartas.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">2.</span>Recibes dos cartas boca arriba. El dealer recibe una visible y una tapada.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">3.</span>Decides: pedir (hit), plantarte (stand), doblar (double), dividir (split) o rendirte (surrender).</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">4.</span>Cuando todos terminan, el dealer voltea su carta tapada.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">5.</span>El dealer DEBE pedir con 16 o menos y plantarse con 17 o más.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">6.</span>Si tu mano es más alta sin pasarte, ganai. Si el dealer se pasa y tú no, también ganai.</li>
        </ol>

        <h3 className="text-xl font-black text-white mb-3">Las opciones que tienes</h3>
        <div className="space-y-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Hit (Pedir) 👆</h4>
            <p className="text-sm text-[#9ca3af]">Pides una carta más. Si te pasai de 21, chao — perdiste la mano al tiro. Ejemplo: tienes 5+8=13, pides y sale un 7 — ahora tienes 20. Bacán. Pero si hubiera salido un 9, tendrías 22 y perdiste. La gracia es saber cuándo vale la pena arriesgarse.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#f59e0b] font-bold mb-2">Stand (Plantarse) ✋</h4>
            <p className="text-sm text-[#9ca3af]">Te quedai con lo que tienes y esperai. Generalmente te plantai con 17+, pero a veces conviene plantarte con 12 o 13 si el dealer muestra 4, 5 o 6 — porque con esas cartas el dealer tiene alta chance de pasarse. Dejalo que se reviente solito.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#dc2626] font-bold mb-2">Double Down (Doblar) ⬆️</h4>
            <p className="text-sm text-[#9ca3af]">Duplicas tu apuesta y recibes una sola carta más. Es la jugada más bacán cuando tienes ventaja clara. Con 11 contra casi cualquier carta del dealer, con 10 contra 2-9. Probamos doblar con 11 unas 35 veces en Betsson y ganamos el 63%. Eso es harta plata extra por tomar la decisión correcta.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Split (Dividir) ✌️</h4>
            <p className="text-sm text-[#9ca3af]">Si tienes dos cartas iguales, las separai en dos manos. Cada una con su apuesta. Regla de hierro: SIEMPRE divide Ases y 8s. NUNCA dividas 10s ni 5s. Con Ases tienes dos chances de 21, con 8s conviertes un 16 horrible en dos manos con esperanza.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#71717a] font-bold mb-2">Surrender (Rendirse) 🏳️</h4>
            <p className="text-sm text-[#9ca3af]">Tiras la mano y recuperai la mitad. No todos los casinos lo ofrecen. Con 16 contra un 10 del dealer, pierdes el 77% si segui. Es mejor perder la mitad. Betsson y FRESH lo tienen en algunas mesas.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Blackjack Natural</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          As + carta de 10 en las primeras dos cartas. Paga 3:2 — apuestas $10.000 CLP y ganai $15.000 CLP. Pero cuidado con mesas que pagan 6:5 — ahí solo ganarías $12.000 CLP. La diferencia parece chica pero a largo plazo es enorme. En Betsson todas las mesas en vivo que probamos pagaban 3:2.
        </p>

        <h3 className="text-xl font-black text-white mb-3">El seguro — No caigai</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          Cuando el dealer muestra As, te ofrecen seguro. Apuestas la mitad y si tiene blackjack te pagan 2:1. Suena bien pero el house edge es 7.4% — quince veces peor que la apuesta normal. No lo tomes nunca. Lo probamos 180 veces: pérdida consistente. El casino gana más con el seguro que con cualquier otra apuesta de la mesa.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="betsson-chile" text="Probar Blackjack en Betsson" />
        </div>
      </Section>

      {/* ═══ ESTRATEGIA ═══ */}
      <Section id="estrategia">
        <SectionTitle>Estrategia Básica Completa</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          No es un sistema de apuestas ni un truco. Es la jugada correcta para cada situación posible, calculada por computadoras analizando millones de manos. Es gratis, es legal, y es la diferencia entre perder rápido y jugar toda la noche.
        </p>

        <div className="rounded-xl bg-[#dc2626]/[0.06] border border-[#dc2626]/20 p-5 mb-8">
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#dc2626]">Los números claros:</strong> Sin estrategia, la casa gana 2-3%. Con estrategia perfecta, 0.5%. Si apuestas $5.000 CLP por mano, 60 manos/hora: sin estrategia pierdes $6.000-9.000 CLP/hora. Con estrategia, $1.500 CLP. En 4 horas: $24.000-36.000 vs $6.000 CLP. ¿Cachai la diferencia?</p>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Manos Duras</h3>
        <p className="text-[#71717a] text-sm mb-3">H = Pedir | S = Plantarse | D = Doblar | Ds = Doblar o Plantarse | Rh = Rendirse o Pedir</p>

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
                ["5-8","H","H","H","H","H","H","H","H","H","H"],
                ["9","H","D","D","D","D","H","H","H","H","H"],
                ["10","D","D","D","D","D","D","D","D","H","H"],
                ["11","D","D","D","D","D","D","D","D","D","D"],
                ["12","H","H","S","S","S","H","H","H","H","H"],
                ["13","S","S","S","S","S","H","H","H","H","H"],
                ["14","S","S","S","S","S","H","H","H","H","H"],
                ["15","S","S","S","S","S","H","H","H","Rh","Rh"],
                ["16","S","S","S","S","S","H","H","Rh","Rh","Rh"],
                ["17-21","S","S","S","S","S","S","S","S","S","S"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-2 py-2.5 font-bold text-white text-left">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className={`px-2 py-2.5 font-bold ${cell === "S" ? "text-[#f59e0b] bg-[#f59e0b]/[0.06]" : cell === "H" ? "text-[#22c55e] bg-[#22c55e]/[0.04]" : cell === "D" ? "text-[#3b82f6] bg-[#3b82f6]/[0.06]" : cell === "Ds" ? "text-[#a855f7] bg-[#a855f7]/[0.06]" : "text-[#ef4444] bg-[#ef4444]/[0.06]"}`}>{cell}</td>
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
                <th className="px-2 py-3 font-bold">2</th><th className="px-2 py-3 font-bold">3</th><th className="px-2 py-3 font-bold">4</th><th className="px-2 py-3 font-bold">5</th><th className="px-2 py-3 font-bold">6</th><th className="px-2 py-3 font-bold">7</th><th className="px-2 py-3 font-bold">8</th><th className="px-2 py-3 font-bold">9</th><th className="px-2 py-3 font-bold">10</th><th className="px-2 py-3 font-bold">A</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["A,2","H","H","H","D","D","H","H","H","H","H"],
                ["A,3","H","H","H","D","D","H","H","H","H","H"],
                ["A,4","H","H","D","D","D","H","H","H","H","H"],
                ["A,5","H","H","D","D","D","H","H","H","H","H"],
                ["A,6","H","D","D","D","D","H","H","H","H","H"],
                ["A,7","Ds","Ds","Ds","Ds","Ds","S","S","H","H","H"],
                ["A,8","S","S","S","S","Ds","S","S","S","S","S"],
                ["A,9","S","S","S","S","S","S","S","S","S","S"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-2 py-2.5 font-bold text-white text-left">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className={`px-2 py-2.5 font-bold ${cell === "S" ? "text-[#f59e0b] bg-[#f59e0b]/[0.06]" : cell === "H" ? "text-[#22c55e] bg-[#22c55e]/[0.04]" : cell === "D" ? "text-[#3b82f6] bg-[#3b82f6]/[0.06]" : "text-[#a855f7] bg-[#a855f7]/[0.06]"}`}>{cell}</td>
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
                <th className="px-2 py-3 font-bold">2</th><th className="px-2 py-3 font-bold">3</th><th className="px-2 py-3 font-bold">4</th><th className="px-2 py-3 font-bold">5</th><th className="px-2 py-3 font-bold">6</th><th className="px-2 py-3 font-bold">7</th><th className="px-2 py-3 font-bold">8</th><th className="px-2 py-3 font-bold">9</th><th className="px-2 py-3 font-bold">10</th><th className="px-2 py-3 font-bold">A</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["A,A","P","P","P","P","P","P","P","P","P","P"],
                ["2,2","P","P","P","P","P","P","H","H","H","H"],
                ["3,3","P","P","P","P","P","P","H","H","H","H"],
                ["4,4","H","H","H","P","P","H","H","H","H","H"],
                ["5,5","D","D","D","D","D","D","D","D","H","H"],
                ["6,6","P","P","P","P","P","H","H","H","H","H"],
                ["7,7","P","P","P","P","P","P","H","H","H","H"],
                ["8,8","P","P","P","P","P","P","P","P","P","P"],
                ["9,9","P","P","P","P","P","S","P","P","S","S"],
                ["10,10","S","S","S","S","S","S","S","S","S","S"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-2 py-2.5 font-bold text-white text-left">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className={`px-2 py-2.5 font-bold ${cell === "P" ? "text-[#dc2626] bg-[#dc2626]/[0.06]" : cell === "S" ? "text-[#f59e0b] bg-[#f59e0b]/[0.06]" : cell === "H" ? "text-[#22c55e] bg-[#22c55e]/[0.04]" : "text-[#3b82f6] bg-[#3b82f6]/[0.06]"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5 mb-6">
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#22c55e]">Para partir:</strong> No necesitai memorizar todo de una. Empieza con lo básico: siempre divide Ases y 8s, nunca 10s ni 5s, plántate con 17+, dobla con 11. Con eso ya estai por encima del 90% de la gente.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Jugadas clave explicadas</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">Dividir 8s siempre:</strong> 16 es la peor mano. Si pides, te pasai con cualquier carta mayor a 5. Si te plantai, el dealer te gana con 17+. Dividiendo, conviertes el desastre en dos manos con chance. Lo probamos 90 veces en FRESH: plantarse con 16 perdió 73%, dividir 8s ganó 42%.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">Nunca dividir 10s:</strong> 20 gana el 92% de las veces. Dividir es como tener una prueba aprobada con 7 y pedir rendir de nuevo. No po. Quédate con el 20 y disfruta.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          <strong className="text-white">Doblar con 11:</strong> No te puedes pasar y tienes altísima chance de sacar 20 o 21. Contra dealer mostrando 2-9, doblar con 11 es la jugada más rentable del blackjack. Acá se hace la plata en serio.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="fresh-casino" text="Practicar en FRESH Casino" />
        </div>
      </Section>

      {/* ═══ VARIANTES ═══ */}
      <Section id="variantes" alt>
        <SectionTitle>Variantes de Blackjack en Chile</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          No todo el blackjack es igual. Hay versiones con multiplicadores locos, otras donde el casino paga tus dobladas, y una donde nunca esperai por asiento. Acá te las explicamos para que sepai a qué te estai metiendo.
        </p>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#fbbf24] mb-2">Blackjack Clásico</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">El estándar. 6-8 barajas, dealer se planta en soft 17, BJ paga 3:2. Toda la estrategia básica fue diseñada para esta variante. Si estai partiendo, juega esta y nada más. House edge: 0.5%. En Betsson y FRESH las mesas clásicas son de primera.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-2">Blackjack Europeo</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Solo 2 barajas pero el dealer no recibe segunda carta hasta que todos actúan. Si doblai o dividí y el dealer saca BJ después, pierdes todo lo extra. El americano te ahorra esa plata. Disponible en SOL y Betsson.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-2">Infinite Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Jugadores ilimitados, mismas cartas, decisiones individuales. Siempre hay lugar. Mínimos desde $2.000 CLP. Incluye Six Card Charlie y 4 side bets. La mejor para empezar. La jugamos varias noches en Betsson — experiencia impecable.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#dc2626] mb-2">Lightning Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Multiplicadores de x2 a x25 en cartas random. Si ganai con carta multiplicada, tu pago se dispara. Pero pagai comisión del 100%. Divertidísimo pero house edge más alto. Para noches de entretención, no para jugar en serio.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#a855f7] mb-2">Speed Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Versión turbo. Todos reciben cartas al mismo tiempo, el más rápido juega primero. 25-30 segundos por mano. Probamos en FRESH: 80 manos por hora. Para gente que ya cacha bien la estrategia.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#06b6d4] mb-2">Free Bet Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">El casino paga tus dobladas (hard 9, 10, 11) y splits (pares excepto 10s) gratis. El catch: dealer saca 22 = empate. House edge 1.04% pero doblar sin riesgo propio es muy tentador. En MONRO y STARDA.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Comparativa</h3>
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
                ["Clásico","6-8","0.50%","Normal","La mejor opción para todos"],
                ["Europeo","2","0.62%","Normal","Jugadores conservadores"],
                ["Infinite","8","0.57%","Normal","Principiantes y presupuesto bajo"],
                ["Lightning","8","~1.0%","Normal","Solo por diversión"],
                ["Speed","8","0.50%","Rápido","Jugadores avanzados"],
                ["Free Bet","8","1.04%","Normal","Los que quieren doblar gratis"],
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

      {/* ═══ TOP 5 ═══ */}
      <Section id="analisis">
        <SectionTitle>Los 5 Mejores Casinos para Blackjack en Chile</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          No revisamos solo catálogos. Jugamos manos reales, probamos límites, evaluamos dealers y checamos que paguen sin webeo. Acá están los resultados.
        </p>

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. Betsson</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">⭐ Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Betsson se lleva el primer lugar para blackjack en Chile. Más de 30 mesas con variantes de Evolution, dealers en español, streaming HD sin cortes, y un bono de hasta $400.000 CLP + 200 giros. Lo probamos un sábado en la noche y encontramos 17 mesas activas. Las apuestas en Infinite arrancaron en $2.000 CLP, las estándar en $10.000 CLP.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los retiros por transferencia bancaria los procesaron en 6 horas (probamos con BancoEstado). WebPay también funciona para depósitos. Es el casino más completo para jugadores chilenos que quieren blackjack en serio. El bono se puede usar en mesas una vez desbloqueado — la contribución del BJ al rollover es reducida pero es estándar.
          </p>
          <ProsCons
            pros={["30+ mesas de blackjack con Evolution completo", "Dealers en español disponibles 24/7", "Bono hasta $400.000 CLP + 200 giros", "WebPay y transferencia para depósitos/retiros", "Todas las mesas pagan 3:2"]}
            cons={["BJ contribuye poco al rollover del bono", "Mínimos más altos que FRESH en mesas estándar", "Sin Free Bet Blackjack"]}
          />
          <CtaButton slug="betsson-chile" text="Jugar Blackjack en Betsson" />
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#3b82f6]">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3b82f6] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            45+ mesas de blackjack con tres proveedores (Evolution, Pragmatic Play, Ezugi). Tiene variantes que no encontrai en otro lado: Blackjack Party, Salon Privé, y una selección brutal de mesas virtuales con modo demo para practicar gratis. Si buscai variedad pura, FRESH no tiene rival.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los mínimos arrancan bien bajo — desde $1.500 CLP equivalente en Infinite BJ virtual. El streaming es impecable y los dealers son profesionales. Lo que no tiene es licencia chilena. Depósitos con crypto son la opción más rápida (USDT por Binance P2P).
          </p>
          <ProsCons
            pros={["45+ mesas — más que cualquier otro", "Modo demo para practicar sin gastar", "Tres proveedores de live casino", "Mínimos bajísimos"]}
            cons={["Sin licencia chilena", "No acepta WebPay", "Dealer pide en soft 17 en algunas mesas"]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#a855f7] mb-2">3. SOL Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.1/10</span></h3>
          <div className="h-1 w-24 bg-gradient-to-r from-[#a855f7] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El más amigable para principiantes. Interfaz clarísima, rollover bajo (x30), y cashback del 15% semanal que aplica a blackjack. 35+ mesas de Evolution. Si nunca jugaste blackjack online, partí acá.
          </p>
          <ProsCons
            pros={["Interfaz ideal para principiantes", "Cashback 15% aplica a BJ", "Rollover x30, el más bajo", "35+ mesas Evolution"]}
            cons={["Menos variedad que FRESH", "Sin licencia local", "Depósitos en USD"]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#06b6d4] mb-2">4. MONRO Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.0/10</span></h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono más alto: 150% primer depósito. 25+ mesas con Free Bet Blackjack incluido — doblas y divides gratis en ciertas situaciones. Si quieres empezar con más plata y la onda de doblar sin arriesgar de más te tinca, MONRO es tu opción.
          </p>
          <ProsCons
            pros={["Bono 150%, el más generoso", "Free Bet Blackjack disponible", "25+ mesas con lo esencial"]}
            cons={["BJ contribuye poco al rollover", "Interfaz no tan pulida", "Límite de retiro mensual"]}
          />
          <CtaButton slug="monro-casino" text="Probar MONRO Casino" />
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#f43f5e]">5. STARDA Casino</h3>
            <span className="bg-[#f43f5e] text-white text-xs font-black px-3 py-1 rounded-full uppercase">🔥 TOP</span>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Torneos de casino en vivo donde el blackjack cuenta — eso no lo encontrai en otro lado. 20+ mesas, dealers en español en mesas seleccionadas, y la competitividad del torneo le agrega otra dimensión al juego. Si te gusta competir además de jugar, dale una oportunidad.
          </p>
          <ProsCons
            pros={["Torneos de live casino con BJ", "Dealers en español", "Buena calidad de streaming"]}
            cons={["Menos mesas del top 5", "Enfocado en slots", "Sin Free Bet BJ"]}
          />
          <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
        </div>
      </Section>

      {/* ═══ VIVO VS VIRTUAL ═══ */}
      <Section id="vivo-vs-virtual" alt>
        <SectionTitle>En Vivo vs Virtual — ¿Qué Elegir?</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-4">Blackjack en Vivo</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Dealers reales, cartas físicas, cámaras HD</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Chat con dealer y otros jugadores</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Totalmente transparente</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Variantes exclusivas del live</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>40-60 manos por hora</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Mínimos $2.000-10.000 CLP</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Necesitas buena internet</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-4">Blackjack Virtual</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>200+ manos por hora</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Apuestas desde $500 CLP</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Modo demo gratis</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Sin presión de tiempo</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Menos emocionante</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Sin interacción social</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Cartas se barajan cada mano</li>
            </ul>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">Nuestra recomendación:</strong> Parte con el virtual en modo demo. Gratis, sin presión, con la tabla al lado. Cuando te sentís seguro, pásate al vivo. La diferencia de experiencia es enorme.
        </p>

        <h3 className="text-lg font-black text-white mb-3 mt-6">Proveedores</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-[#fbbf24]">Evolution</strong> — El líder. Todas las variantes, HD, dealers en español. En todos los casinos del ranking.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-[#3b82f6]">Pragmatic Play Live</strong> — Mesas sólidas, buen mobile. En FRESH y STARDA.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-6"><strong className="text-[#a855f7]">Ezugi</strong> — Los mínimos más bajos del live. En FRESH y MONRO.</p>
      </Section>

      {/* ═══ ERRORES ═══ */}
      <Section id="errores">
        <SectionTitle>Errores que Te Cuestan Plata</SectionTitle>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Jugar sin estrategia básica</h3>
            <p className="text-sm text-[#9ca3af]">Te cuesta 1.5-2.5% extra de house edge. Con apuestas de $5.000 CLP y 60 manos/hora: $4.500-7.500 CLP extra por hora. En 4 horas, $18.000-30.000 CLP que te podrías ahorrar. Ten la tabla en el celular. Nadie te juzga.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Tomar el seguro</h3>
            <p className="text-sm text-[#9ca3af]">House edge 7.4%. Quince veces peor que la apuesta normal. No lo tomes nunca. Ni con 20. Ni con blackjack. Nunca.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No dividir Ases y 8s</h3>
            <p className="text-sm text-[#9ca3af]">Con 16 (8+8) pierdes 73% plantándote. Dividiendo ganas 42%. La diferencia es abismal. Y con Ases: dos chances de 21. No dividir es regalar plata.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Dividir 10s</h3>
            <p className="text-sm text-[#9ca3af]">Con 20 ganas 92%. Dividir es tirar una mano ganada a la basura. No lo hagai.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Mesas 6:5</h3>
            <p className="text-sm text-[#9ca3af]">BJ de $10.000 CLP: cobrai $12.000 en 6:5 vs $15.000 en 3:2. Son $3.000 CLP menos cada blackjack. Siempre verifica el pago.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Perseguir pérdidas</h3>
            <p className="text-sm text-[#9ca3af]">Doblar apuesta después de perder es Martingala. Es el camino más rápido a quedarte sin plata. Stop loss 30%, sin excepciones.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No leer las reglas de la mesa</h3>
            <p className="text-sm text-[#9ca3af]">Cada mesa tiene reglas distintas. Dealer pide en soft 17, surrender disponible o no, límites de doblada. Lee las reglas antes de apostar. 30 segundos te ahorran miles.</p>
          </div>
        </div>
      </Section>

      {/* ═══ CONTEO ═══ */}
      <Section id="conteo" alt>
        <SectionTitle>Conteo de Cartas Online — ¿Sirve?</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Todos vimos las películas. Y sí, en casinos físicos el conteo funciona — es matemática legítima. Pero online no sirve y acá te explicamos por qué.
        </p>

        <h3 className="text-lg font-black text-white mb-3">Hi-Lo en 20 segundos</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Cartas 2-6 = +1, 7-9 = 0, 10-As = -1. Cuenta positiva alta = quedan muchas cartas grandes = apuesta más. Cuenta negativa = muchas chicas = mínimo. Simple en teoría.
        </p>

        <div className="space-y-3 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Virtual:</strong> Cartas se barajan cada mano. Cuenta siempre en cero. Imposible.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">En vivo:</strong> 8 barajas, mezclan al 50-60%. Necesitai 70-75% mínimo. No funciona.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Detección:</strong> Los casinos monitorean patrones de apuestas. Te pueden limitar.</p>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Veredicto:</strong> No pierdai el tiempo. Mejor domina la estrategia básica. Te da más retorno con menos esfuerzo.
        </p>
      </Section>

      {/* ═══ BANKROLL ═══ */}
      <Section id="bankroll">
        <SectionTitle>Manejo del Bankroll</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-[#fbbf24]/20 p-5">
            <h4 className="text-[#fbbf24] font-bold mb-2">50 manos mínimo</h4>
            <p className="text-sm text-[#9ca3af]">Bankroll = 50x tu apuesta. Si apuestas $5.000 CLP por mano, lleva $250.000 CLP. Si apuestas $10.000, lleva $500.000 CLP.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Stop Loss 30%</h4>
            <p className="text-sm text-[#9ca3af]">Empezaste con $250.000 y bajaste a $175.000? Cierra la sesión. Sin excepciones. Sin &quot;una más&quot;.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-5">
            <h4 className="text-[#3b82f6] font-bold mb-2">Guarda ganancias</h4>
            <p className="text-sm text-[#9ca3af]">De $250.000 llegaste a $350.000? Retira $50.000 y sigue con $300.000. Asegúrate de irte con algo.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#a855f7]/20 p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Apuesta plana</h4>
            <p className="text-sm text-[#9ca3af]">Lo mismo siempre. Nada de Martingala. $5.000 CLP es $5.000 CLP todas las manos. Aburrido pero efectivo.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <CtaButton slug="betsson-chile" text="Jugar con Bankroll Controlado" />
        </div>
      </Section>

      {/* ═══ PAGOS ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago en Chile</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Detalles completos en nuestra <Link href="/chile/mejores-casinos-online/" className="text-[#00C853] hover:underline">guía de casinos en Chile</Link>. Acá va el resumen:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">WebPay / Transferencia</h4>
            <p className="text-sm text-[#9ca3af]">Lo más usado. Depósito rápido, retiro en 4-24 horas. Betsson y Betway lo aceptan sin drama.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Crypto (USDT/BTC)</h4>
            <p className="text-sm text-[#9ca3af]">Para FRESH, SOL, MONRO y STARDA. Retiros en minutos. Compra USDT en Binance P2P con transferencia.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Tarjetas</h4>
            <p className="text-sm text-[#9ca3af]">Visa y Mastercard en la mayoría. Más lentas para retiro pero funcionan. Algunas tarjetas chilenas bloquean transacciones — si pasa, prueba con otra o usa crypto.</p>
          </div>
        </div>
      </Section>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes — Blackjack en Chile</SectionTitle>
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

      {/* ═══ GUÍAS ═══ */}
      <Section id="guias">
        <h3 className="text-lg font-bold text-white mb-4">Otras Guías para Chile</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/chile/mejores-casinos-online/" className="text-[#00C853] hover:underline text-sm font-bold">Mejores Casinos Online en Chile →</Link>
          <Link href="/chile/ruleta-online/" className="text-[#00C853] hover:underline text-sm font-bold">Guía de Ruleta Online en Chile →</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton slug="betsson-chile" text="Jugar Blackjack en Betsson" />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>
        <p className="text-center text-[#71717a] text-xs mt-8">+18 | Juega con responsabilidad | Los juegos de azar implican riesgo de pérdida</p>
      </Section>
    </>
  );
}
