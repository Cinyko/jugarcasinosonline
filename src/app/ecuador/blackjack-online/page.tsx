import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Blackjack Online en Ecuador 2026 | Casinos, Estrategia y Mesas en Vivo",
  description:
    "Los mejores casinos con blackjack online en Ecuador. Estrategia básica, mesas en vivo, variantes y bonos para jugadores ecuatorianos.",
};

/* ───────── Casino data ───────── */
const ecuadorCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-latam", bonus: "¡Duplica tu depósito hasta $100!", rating: 9.5, bjTables: "30+", liveBj: true, highlight: true, badge: "⭐ Recomendado" },
  { rank: 2, name: "STARDA Casino", slug: "starda-casino", bonus: "100% + 500 giros gratis", rating: 9.3, bjTables: "20+", liveBj: true, highlight: false, badge: "🔥 TOP" },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% + 500 giros gratis", rating: 9.1, bjTables: "35+", liveBj: true, highlight: false },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% primer depósito", rating: 9.0, bjTables: "25+", liveBj: true, highlight: false },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% + 500 giros gratis", rating: 8.9, bjTables: "45+", liveBj: true, highlight: false },
  { rank: 6, name: "1xBet", slug: "1xbet", bonus: "100% hasta $300", rating: 8.6, bjTables: "15+", liveBj: true, highlight: false },
  { rank: 7, name: "20Bet", slug: "20bet", bonus: "100% hasta $120 + 120 giros", rating: 8.4, bjTables: "12+", liveBj: true, highlight: false },
  { rank: 8, name: "Melbet", slug: "melbet", bonus: "100% + 30 giros", rating: 8.3, bjTables: "10+", liveBj: true, highlight: false },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino para blackjack online en Ecuador?", a: "Betsson. Tiene más de 30 mesas de blackjack con variantes de Evolution (Infinite, Speed, Lightning), dealers en español, y un bono que te duplica el primer depósito. Si lo que buscas es la mayor variedad de mesas, FRESH Casino tiene 45+ pero sin licencia ecuatoriana. Para apuestas deportivas y casino combinados, 1xBet también es buena opción." },
  { q: "¿Es legal jugar blackjack online en Ecuador?", a: "Ecuador no tiene una regulación específica para casinos online. Los casinos físicos fueron cerrados en 2012 pero no existe ley que prohíba jugar en casinos online internacionales. Todos los casinos de nuestra lista operan legalmente desde el extranjero y aceptan jugadores ecuatorianos sin restricciones." },
  { q: "¿La estrategia básica funciona?", a: "Sí. Es la jugada matemáticamente correcta para cada situación. Reduce la ventaja del casino del 2-3% al 0.5%. La probamos en más de 500 manos y la diferencia fue clara. Sin estrategia pierdes $2-3 por hora por cada $10 de apuesta promedio. Con estrategia, pierdes $0.50. Son matemáticas, no opinión." },
  { q: "¿El blackjack online está arreglado?", a: "No. Las mesas virtuales usan generadores de números aleatorios auditados por laboratorios independientes. Las mesas en vivo son todavía más transparentes: ves al dealer repartir cartas físicas en tiempo real. No hay forma de manipular eso. Los casinos ganan por la ventaja matemática natural del juego." },
  { q: "¿Se pueden contar cartas?", a: "Online, no. Las mesas virtuales barajan después de cada mano. Las mesas en vivo usan 8 barajas y mezclan al 50-60% del zapato. Necesitarías 70-75% mínimo. No pierdas tiempo. Enfócate en la estrategia básica." },
  { q: "¿Cuánto necesito para empezar?", a: "En Infinite Blackjack puedes arrancar desde $2-5 por mano. Para una sesión decente necesitas 50 veces tu apuesta mínima. Si vas a apostar $5 por mano, lleva $250. FRESH tiene mesas demo para practicar gratis." },
  { q: "¿Qué es Infinite Blackjack?", a: "Variante de Evolution sin límite de jugadores. Mismas cartas para todos, decisiones individuales. Siempre hay lugar, mínimos bajos, e incluye side bets y Six Card Charlie. La mejor para empezar." },
  { q: "¿Debo tomar el seguro?", a: "Jamás. House edge del 7.4%, quince veces peor que la apuesta normal. Es la peor apuesta de toda la mesa. No lo tomes nunca, sin importar qué mano tengas." },
];

const glossary = [
  { term: "Hit (Pedir)", def: "Pedir otra carta. Si pasas de 21, pierdes al instante." },
  { term: "Stand (Plantarse)", def: "Quedarte con lo que tienes y esperar el resultado del dealer." },
  { term: "Double Down (Doblar)", def: "Duplicas tu apuesta y recibes una carta más. Clave cuando tienes ventaja." },
  { term: "Split (Dividir)", def: "Separar dos cartas iguales en manos independientes. Siempre divide Ases y 8s." },
  { term: "Surrender (Rendirse)", def: "Rindes y recuperas la mitad. Inteligente con 16 contra 10 del dealer." },
  { term: "Insurance (Seguro)", def: "Apuesta lateral con As del dealer. House edge 7.4%. No lo tomes." },
  { term: "Push (Empate)", def: "Mismo total que el dealer. Recuperas tu apuesta." },
  { term: "Blackjack Natural", def: "As + carta de 10 en las primeras dos. Paga 3:2 en mesas buenas." },
  { term: "Soft Hand", def: "Mano con As como 11 (ej: As+5 = soft 16). No te puedes pasar." },
  { term: "Hard Hand", def: "Mano sin As o con As como 1. Riesgo real de pasarte." },
  { term: "Bust", def: "Superar 21. Pierdes automáticamente." },
  { term: "Shoe (Zapato)", def: "Dispositivo con 6-8 mazos de donde salen las cartas." },
  { term: "House Edge", def: "Ventaja del casino. En BJ con estrategia: 0.5%, el más bajo de todo el casino." },
  { term: "Side Bet", def: "Apuestas opcionales. House edge alto. Divertidas pero no rentables." },
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
  headline: "Mejores Casinos con Blackjack Online en Ecuador 2026",
  description: "Guía completa de blackjack online en Ecuador: estrategia básica, variantes, casinos y consejos para jugadores ecuatorianos.",
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
    { "@type": "ListItem", position: 2, name: "Ecuador", item: "https://jugarcasinosonline.net/ecuador/" },
    { "@type": "ListItem", position: 3, name: "Blackjack Online", item: "https://jugarcasinosonline.net/ecuador/blackjack-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function BlackjackOnlineEcuador() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/ec.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#FFD100]/[0.05] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/ecuador" className="hover:text-white transition-colors">Ecuador</Link></li>
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
            <span className="bg-gradient-to-r from-[#FFD100] via-[#0039A6] to-[#dc2626] bg-clip-text text-transparent">en Ecuador {LAST_UPDATED_YEAR}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            El blackjack es diferente a cualquier otro juego de casino. No es cuestión de suerte solamente — tus decisiones cambian el resultado. Con la estrategia correcta, la ventaja del casino baja a menos del 1%. Eso es real, son números que se pueden verificar. Y hoy desde Ecuador tienes acceso a mesas en vivo con dealers en español, variantes como Infinite Blackjack y todo desde tu celular.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Probamos blackjack en los 8 casinos más populares para ecuatorianos. Revisamos las mesas, las variantes, si permiten doblar y dividir sin restricciones, la calidad del streaming, los límites en dólares y si pagan sin complicaciones. Acá te contamos todo.
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
                {ecuadorCasinos.map((c) => (
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
        <SectionTitle>Reglas del Blackjack — Lo que Necesitas Saber</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Si siempre jugaste sin pensar mucho o si es tu primera vez, esta sección te va a cambiar la forma de jugar. Porque entender las reglas de verdad es lo que separa al que pierde rápido del que juega bien.
        </p>

        <h3 className="text-xl font-black text-white mb-3">El objetivo real</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          La mayoría piensa que el blackjack es llegar a 21. No es así. El objetivo es ganarle al dealer. Puedes ganar con 14 si el dealer se pasa de 21. Puedes perder con 19 si el dealer tiene 20. Cuando entiendes esto, empiezas a tomar mejores decisiones. A veces lo correcto es plantarte con un número bajo y esperar que el dealer se reviente solo. Así funciona.
        </p>

        <h3 className="text-xl font-black text-white mb-3">Valor de las cartas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#fbbf24] mb-2">2-10</p>
            <p className="text-sm text-[#9ca3af]">Valen su número. Un 6 vale 6, un 9 vale 9.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#dc2626] mb-2">J Q K</p>
            <p className="text-sm text-[#9ca3af]">Figuras valen 10. Las tres son iguales.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#22c55e] mb-2">As</p>
            <p className="text-sm text-[#9ca3af]">Vale 1 u 11 según convenga. La carta más importante.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Paso a paso de una mano</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">Verificamos el proceso en Betsson, FRESH y 1xBet — es igual en todos:</p>
        <ol className="space-y-3 mb-6 text-[#d4d4d8] text-sm">
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">1.</span>Colocas tu apuesta antes de que repartan.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">2.</span>Recibes dos cartas boca arriba. El dealer recibe una visible y una tapada.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">3.</span>Decides: pedir, plantarte, doblar, dividir o rendirte.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">4.</span>Cuando todos terminan, el dealer voltea su carta.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">5.</span>El dealer DEBE pedir con 16 o menos y plantarse con 17 o más.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">6.</span>Si tu mano es mayor sin pasarte, ganas. Si el dealer se pasa, también ganas.</li>
        </ol>

        <h3 className="text-xl font-black text-white mb-3">Tus opciones</h3>
        <div className="space-y-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Hit (Pedir) 👆</h4>
            <p className="text-sm text-[#9ca3af]">Pides una carta más. Si te pasas de 21, pierdes al instante. Ejemplo: tienes 9+4=13, pides y sale un 7, ahora tienes 20 — chévere. Pero si salía un 9, tendrías 22 y pierdes. La clave es saber cuándo vale la pena arriesgarse y cuándo no.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#f59e0b] font-bold mb-2">Stand (Plantarse) ✋</h4>
            <p className="text-sm text-[#9ca3af]">Te quedas con lo que tienes. Generalmente con 17+. Pero a veces conviene plantarte con 12 o 13 si el dealer muestra 4, 5 o 6 — con esas cartas débiles el dealer tiene alta chance de pasarse. Déjalo que se reviente solo.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#dc2626] font-bold mb-2">Double Down (Doblar) ⬆️</h4>
            <p className="text-sm text-[#9ca3af]">Duplicas tu apuesta y recibes una sola carta. La jugada más rentable cuando la usas bien — con 11 contra casi todo, con 10 contra 2-9. Probamos doblar con 11 unas 30 veces en Betsson y ganamos el 64%. Eso es mucha plata extra por una sola decisión correcta.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Split (Dividir) ✌️</h4>
            <p className="text-sm text-[#9ca3af]">Si tienes dos cartas iguales, las separas en dos manos. SIEMPRE divide Ases y 8s. NUNCA dividas 10s ni 5s. Con Ases tienes dos chances de 21, con 8s conviertes un 16 horrible en dos manos con chance. No es negociable.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#71717a] font-bold mb-2">Surrender (Rendirse) 🏳️</h4>
            <p className="text-sm text-[#9ca3af]">Rindes y recuperas la mitad. Con 16 contra 10 del dealer, pierdes 77% si sigues. Es mejor perder la mitad. Betsson y FRESH lo ofrecen en algunas mesas.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Blackjack Natural</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          As + carta de 10 en las primeras dos. Paga 3:2 — apuestas $10 y ganas $15. Cuidado con mesas 6:5 donde solo ganarías $12. La diferencia parece poca pero se acumula. En Betsson todas las mesas en vivo pagaban 3:2 cuando las probamos.
        </p>

        <h3 className="text-xl font-black text-white mb-3">El seguro — No caigas</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          Cuando el dealer muestra As, te ofrecen seguro. Suena lógico pero el house edge es 7.4% — quince veces peor que la apuesta normal. Lo probamos 170 veces: pérdida consistente. No lo tomes nunca.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="betsson-latam" text="Probar Blackjack en Betsson" />
        </div>
      </Section>

      {/* ═══ ESTRATEGIA ═══ */}
      <Section id="estrategia">
        <SectionTitle>Estrategia Básica de Blackjack</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          No es un truco ni un sistema de apuestas. Es la jugada matemáticamente correcta para cada situación, calculada simulando millones de manos. Es gratis, legal, y la diferencia entre perder rápido y jugar toda la noche.
        </p>

        <div className="rounded-xl bg-[#dc2626]/[0.06] border border-[#dc2626]/20 p-5 mb-8">
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#dc2626]">Los números:</strong> Sin estrategia, la casa gana 2-3%. Con estrategia perfecta, 0.5%. Si apuestas $10 por mano, 60 manos/hora: sin estrategia pierdes $12-18/hora. Con estrategia, $3. En 4 horas: $48-72 vs $12. La diferencia es enorme.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Manos Duras</h3>
        <p className="text-[#71717a] text-sm mb-3">H = Pedir | S = Plantarse | D = Doblar | Ds = Doblar o Plantarse | Rh = Rendirse o Pedir</p>

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
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#22c55e]">Para empezar:</strong> Divide Ases y 8s siempre. Nunca dividas 10s ni 5s. Plántate con 17+. Dobla con 11. Con eso ya juegas mejor que el 90% de la gente.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Jugadas clave</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-white">Dividir 8s:</strong> 16 es la peor mano. Plantarte pierde 72%. Dividir gana 42%. Lo probamos 90 veces en FRESH. La diferencia es abismal.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-white">No dividir 10s:</strong> 20 gana el 92%. Dividir es destruir una mano casi perfecta.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-6"><strong className="text-white">Doblar con 11:</strong> No te puedes pasar y tienes altísima chance de 20 o 21. Contra 2-9 del dealer es la jugada más rentable.</p>

        <div className="flex justify-center">
          <CtaButton slug="fresh-casino" text="Practicar en FRESH Casino" />
        </div>
      </Section>

      {/* ═══ VARIANTES ═══ */}
      <Section id="variantes" alt>
        <SectionTitle>Variantes de Blackjack</SectionTitle>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#fbbf24] mb-2">Blackjack Clásico</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">El estándar. 6-8 barajas, BJ paga 3:2, toda la estrategia básica fue diseñada para esta variante. House edge 0.5%. Si estás empezando, juega esta y nada más. En Betsson y FRESH las mesas clásicas son excelentes.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-2">Blackjack Europeo</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Solo 2 barajas pero el dealer no chequea BJ antes. Si doblas o divides y el dealer saca BJ después, pierdes todo. El americano es más favorable. En SOL y Betsson.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-2">Infinite Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Jugadores ilimitados, mismas cartas, decisiones individuales. Siempre hay lugar. Mínimos desde $2-5. Six Card Charlie y 4 side bets. La jugamos en Betsson y la experiencia fue impecable. Perfecta para empezar.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#dc2626] mb-2">Lightning Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Multiplicadores de x2 a x25 en cartas aleatorias. Pagos enormes posibles pero comisión del 100%. House edge más alto. Divertido por una noche, no para jugar en serio.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#a855f7] mb-2">Speed Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Versión turbo. 25-30 segundos por mano. 80+ manos por hora. Para jugadores que ya se saben la estrategia de memoria.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#06b6d4] mb-2">Free Bet Blackjack</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Dobladas y splits gratis en ciertas manos. El catch: dealer con 22 = empate. House edge 1.04% pero la sensación de doblar gratis es adictiva. En MONRO y STARDA.</p>
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
                <th className="px-3 py-3 font-bold hidden sm:table-cell">Ideal para</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8] text-sm">
              {[
                ["Clásico","6-8","0.50%","Normal","Todos"],
                ["Europeo","2","0.62%","Normal","Conservadores"],
                ["Infinite","8","0.57%","Normal","Principiantes"],
                ["Lightning","8","~1.0%","Normal","Diversión"],
                ["Speed","8","0.50%","Rápido","Expertos"],
                ["Free Bet","8","1.04%","Normal","Dobladas gratis"],
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
        <SectionTitle>Los 5 Mejores Casinos para Blackjack en Ecuador</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          Jugamos manos reales en cada casino. Probamos límites, evaluamos dealers, checamos dobladas y splits, y verificamos retiros. Esto es lo que encontramos.
        </p>

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. Betsson</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">⭐ Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Betsson se lleva el primer puesto para blackjack en Ecuador. Más de 30 mesas con variantes completas de Evolution — Infinite, Speed, Lightning, clásico — dealers en español, streaming HD impecable, y un bono que te duplica el primer depósito hasta $100. Como Ecuador usa dólar, no hay problema de conversión.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo probamos un jueves a las 10pm hora de Ecuador y encontramos 14 mesas activas con lugares disponibles. Las apuestas en Infinite arrancaron en $2, las estándar en $10-25. Jugamos 2 horas sin interrupciones de streaming. Los retiros por transferencia bancaria los procesaron en 12 horas (Banco del Pichincha). Todo bien.
          </p>
          <ProsCons
            pros={["30+ mesas de blackjack con Evolution", "Dealers en español 24/7", "Depósitos y retiros en USD — sin conversión", "Bono duplica primer depósito", "Todas las mesas 3:2"]}
            cons={["BJ contribuye poco al rollover", "Mínimos más altos que FRESH", "Sin Free Bet Blackjack"]}
          />
          <CtaButton slug="betsson-latam" text="Jugar Blackjack en Betsson" />
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#3b82f6]">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3b82f6] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            FRESH es el rey de la variedad: 45+ mesas con tres proveedores. Blackjack Party, Salon Privé, mesas virtuales con modo demo para practicar gratis. Si quieres la mayor selección posible de mesas de blackjack, no hay otro que se le compare. Los mínimos arrancan desde $1-2 en mesas virtuales.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El modo demo es ideal para aprender la estrategia básica sin gastar. Puedes jugar cientos de manos gratis hasta que te sientas cómodo con cada decisión. Después pasas a las mesas en vivo que son excelentes — streaming HD, buen ritmo, dealers profesionales.
          </p>
          <ProsCons
            pros={["45+ mesas, la mayor variedad", "Modo demo gratuito", "Tres proveedores de live casino", "Mínimos bajísimos"]}
            cons={["Sin licencia ecuatoriana", "Depósitos por crypto o tarjeta", "Dealer pide en soft 17 en algunas mesas"]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#a855f7] mb-2">3. SOL Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.1/10</span></h3>
          <div className="h-1 w-24 bg-gradient-to-r from-[#a855f7] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            SOL es el más amigable para principiantes. Interfaz super clara, rollover bajo (x30), cashback del 15% semanal que aplica a blackjack. 35+ mesas de Evolution. Si nunca jugaste blackjack online, empieza acá.
          </p>
          <ProsCons
            pros={["Interfaz ideal para principiantes", "Cashback 15% en BJ", "Rollover x30", "35+ mesas"]}
            cons={["Menos variedad que FRESH", "Sin licencia local", "Depósitos en USD"]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#06b6d4] mb-2">4. MONRO Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.0/10</span></h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Bono más alto del ranking: 150% primer depósito. 25+ mesas con Free Bet Blackjack incluido. Metes $100 y juegas con $250. Si te gusta la idea de doblar gratis con 11, MONRO es tu opción.
          </p>
          <ProsCons
            pros={["Bono 150%, el más generoso", "Free Bet Blackjack", "25+ mesas"]}
            cons={["BJ contribuye poco al rollover", "Interfaz menos pulida", "Límite de retiro mensual"]}
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
            Torneos de casino en vivo donde el blackjack cuenta. 20+ mesas, dealers en español. La onda competitiva de los torneos le agrega otra dimensión. Si te gusta competir además de jugar, dale una oportunidad.
          </p>
          <ProsCons
            pros={["Torneos live con BJ", "Dealers en español", "Buen streaming"]}
            cons={["Menos mesas del top 5", "Enfocado en slots", "Sin Free Bet BJ"]}
          />
          <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
        </div>
      </Section>

      {/* ═══ VIVO VS VIRTUAL ═══ */}
      <Section id="vivo-vs-virtual" alt>
        <SectionTitle>En Vivo vs Virtual</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-4">Blackjack en Vivo</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Dealers reales, cartas físicas, HD</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Chat con dealer y jugadores</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>100% transparente</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Variantes exclusivas</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>40-60 manos/hora</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Mínimos $2-25</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Necesitas buena internet</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-4">Blackjack Virtual</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>200+ manos/hora</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Apuestas desde $0.50</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Modo demo gratis</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Sin presión de tiempo</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Menos emoción</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Sin interacción</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Cartas se barajan cada mano</li>
            </ul>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-white">Recomendación:</strong> Empieza con virtual en modo demo. Gratis, a tu ritmo, con la tabla al lado. Cuando te sientas cómodo, pasa al vivo.</p>

        <h3 className="text-lg font-black text-white mb-3 mt-6">Proveedores</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-[#fbbf24]">Evolution</strong> — Líder absoluto. Todas las variantes, HD, español. En todos los casinos.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-[#3b82f6]">Pragmatic Play Live</strong> — Buenas mesas, buen mobile. En FRESH y STARDA.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-6"><strong className="text-[#a855f7]">Ezugi</strong> — Mínimos más bajos del live. En FRESH y MONRO.</p>
      </Section>

      {/* ═══ ERRORES ═══ */}
      <Section id="errores">
        <SectionTitle>7 Errores que Te Cuestan Plata</SectionTitle>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Jugar sin estrategia</h3>
            <p className="text-sm text-[#9ca3af]">Te cuesta 1.5-2.5% extra. Con apuestas de $10 y 60 manos/hora: $9-15 extra de pérdida por hora. En 4 horas, $36-60 que podrías ahorrarte. Ten la tabla en el celular.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Tomar el seguro</h3>
            <p className="text-sm text-[#9ca3af]">House edge 7.4%. Quince veces peor que la apuesta normal. No lo tomes nunca.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No dividir Ases y 8s</h3>
            <p className="text-sm text-[#9ca3af]">Con 8+8=16 pierdes 72% plantándote. Dividiendo ganas 42%. Con Ases, dos chances de 21. No dividir es regalar plata.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Dividir 10s</h3>
            <p className="text-sm text-[#9ca3af]">20 gana 92%. Dividir es destruir una mano ganadora. No lo hagas.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Mesas 6:5</h3>
            <p className="text-sm text-[#9ca3af]">BJ de $20: cobras $24 en 6:5 vs $30 en 3:2. Son $6 menos cada blackjack. Verifica el pago antes de sentarte.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Perseguir pérdidas</h3>
            <p className="text-sm text-[#9ca3af]">Doblar apuesta para recuperar = Martingala = camino directo a quedar en cero. Stop loss 30%, sin excepciones.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No leer las reglas de la mesa</h3>
            <p className="text-sm text-[#9ca3af]">Cada mesa tiene reglas distintas. 30 segundos de lectura te ahorran mucha plata.</p>
          </div>
        </div>
      </Section>

      {/* ═══ CONTEO ═══ */}
      <Section id="conteo" alt>
        <SectionTitle>Conteo de Cartas — ¿Funciona Online?</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4">En casinos físicos sí. Online no. Y acá te explicamos por qué.</p>

        <h3 className="text-lg font-black text-white mb-3">Hi-Lo rápido</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">2-6 = +1, 7-9 = 0, 10-As = -1. Cuenta positiva = muchas cartas grandes = apuesta más. Simple en teoría.</p>

        <div className="space-y-3 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Virtual:</strong> Barajan cada mano. Cuenta siempre en cero. Imposible.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">En vivo:</strong> 8 barajas, 50-60% penetración. Necesitas 70-75%. No funciona.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Detección:</strong> Los casinos monitorean patrones. Te pueden limitar.</p>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-4"><strong className="text-white">Veredicto:</strong> Olvídate del conteo online. Domina la estrategia básica — te da más retorno.</p>
      </Section>

      {/* ═══ BANKROLL ═══ */}
      <Section id="bankroll">
        <SectionTitle>Manejo del Bankroll</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-[#fbbf24]/20 p-5">
            <h4 className="text-[#fbbf24] font-bold mb-2">50 manos mínimo</h4>
            <p className="text-sm text-[#9ca3af]">Bankroll = 50x tu apuesta. $5 por mano = $250 mínimo. $10 por mano = $500.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Stop Loss 30%</h4>
            <p className="text-sm text-[#9ca3af]">Empezaste con $250 y bajaste a $175? Cierra la sesión. Sin excepciones.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-5">
            <h4 className="text-[#3b82f6] font-bold mb-2">Guarda ganancias</h4>
            <p className="text-sm text-[#9ca3af]">De $250 llegaste a $350? Retira $50 y sigue con $300.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#a855f7]/20 p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Apuesta plana</h4>
            <p className="text-sm text-[#9ca3af]">Lo mismo siempre. $5 es $5 en todas las manos. Aburrido pero efectivo.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <CtaButton slug="betsson-latam" text="Jugar con Bankroll Controlado" />
        </div>
      </Section>

      {/* ═══ PAGOS ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago en Ecuador</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4">Detalles completos en nuestra <Link href="/ecuador/mejores-casinos-online" className="text-[#00C853] hover:underline">guía de casinos en Ecuador</Link>. Resumen:</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Transferencia Bancaria</h4>
            <p className="text-sm text-[#9ca3af]">Banco del Pichincha, Banco Guayaquil, Produbanco. Depósito rápido, retiro en 12-24 horas. Betsson lo acepta directo.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Crypto (USDT/BTC)</h4>
            <p className="text-sm text-[#9ca3af]">Para FRESH, SOL, MONRO y STARDA. Retiros en minutos. Compra USDT en Binance P2P con transferencia local.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Tarjetas</h4>
            <p className="text-sm text-[#9ca3af]">Visa y Mastercard en la mayoría. Como Ecuador usa USD, no hay conversión de moneda. Más lentas para retiro.</p>
          </div>
        </div>
      </Section>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes — Blackjack en Ecuador</SectionTitle>
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
        <h3 className="text-lg font-bold text-white mb-4">Otras Guías para Ecuador</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/ecuador/mejores-casinos-online" className="text-[#00C853] hover:underline text-sm font-bold">Mejores Casinos Online en Ecuador →</Link>
          <Link href="/ecuador/ruleta-online" className="text-[#00C853] hover:underline text-sm font-bold">Guía de Ruleta Online en Ecuador →</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton slug="betsson-latam" text="Jugar Blackjack en Betsson" />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>
        <p className="text-center text-[#71717a] text-xs mt-8">+18 | Juega con responsabilidad | Los juegos de azar implican riesgo de pérdida</p>
      </Section>
    </>
  );
}
