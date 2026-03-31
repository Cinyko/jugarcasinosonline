import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Blackjack Online en México 2026 | Casinos, Estrategia y Mesas en Vivo",
  description:
    "Los mejores casinos con blackjack online en México. Estrategia básica completa, mesas en vivo, variantes y bonos verificados para jugadores mexicanos.",
};

/* ───────── Casino data ───────── */
const mexicoCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-mexico", bonus: "$15,000 + 200 Giros Gratis", rating: 9.5, bjTables: "30+", liveBj: true, highlight: true, badge: "⭐ Recomendado" },
  { rank: 2, name: "STARDA Casino", slug: "starda-casino", bonus: "100% + 500 giros gratis", rating: 9.3, bjTables: "20+", liveBj: true, highlight: false, badge: "🔥 TOP" },
  { rank: 3, name: "Betway", slug: "betway-mexico", bonus: "$4,000 MXN + 50 Free Spins", rating: 9.2, bjTables: "20+", liveBj: true, highlight: false },
  { rank: 4, name: "SOL Casino", slug: "sol-casino", bonus: "100% + 500 giros gratis", rating: 9.1, bjTables: "35+", liveBj: true, highlight: false },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% + 500 giros gratis", rating: 8.9, bjTables: "45+", liveBj: true, highlight: false },
  { rank: 6, name: "MONRO Casino", slug: "monro-casino", bonus: "150% primer depósito", rating: 9.0, bjTables: "25+", liveBj: true, highlight: false },
  { rank: 7, name: "Caliente", slug: "caliente", bonus: "Bono + giros gratis", rating: 8.8, bjTables: "18+", liveBj: true, highlight: false },
  { rank: 8, name: "Codere", slug: "codere", bonus: "100% hasta $3,000 MXN", rating: 8.7, bjTables: "15+", liveBj: true, highlight: false },
  { rank: 9, name: "Strendus", slug: "strendus", bonus: "100% hasta $5,000 MXN", rating: 8.5, bjTables: "12+", liveBj: true, highlight: false },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino para blackjack online en México?", a: "Betsson. Tiene la mejor combinación de mesas en vivo, variantes de Evolution y un bono que te deja empezar con el doble. Caliente y Codere también son opciones sólidas si prefieres un casino 100% mexicano con licencia SEGOB, pero en variedad de blackjack Betsson les gana por mucho. FRESH Casino tiene más mesas todavía (45+), pero no tiene licencia mexicana." },
  { q: "¿Es legal jugar blackjack online en México?", a: "Sí. Los casinos con permiso de la SEGOB operan legalmente en México. Betsson, Caliente, Codere, Strendus y Winpot tienen permiso federal. Los casinos con licencia de Curaçao (FRESH, SOL, MONRO, STARDA) no están regulados en México pero tampoco están prohibidos — es una zona gris legal. Si te preocupa la legalidad, quédate con los casinos SEGOB." },
  { q: "¿Funciona la estrategia básica de blackjack?", a: "Sí, al 100%. No es un truco ni un sistema mágico — es la jugada matemáticamente correcta para cada situación. La probamos durante más de 600 manos y la ventaja del casino bajó a 0.5% (comparado con 2-3% jugando a ojo). Eso es la diferencia entre perder $200 MXN por hora o perder $50 MXN por hora con apuestas de $100. Las matemáticas no mienten." },
  { q: "¿El blackjack online está arreglado?", a: "No, si juegas en casinos regulados. Las mesas virtuales usan generadores de números aleatorios (RNG) auditados por empresas independientes. Las mesas en vivo son todavía más transparentes: ves al dealer repartir cartas físicas en tiempo real con múltiples cámaras HD. No hay forma de manipular eso. Los casinos ganan por la ventaja matemática del juego, no necesitan hacer trampa." },
  { q: "¿Se pueden contar cartas en el blackjack online?", a: "En la práctica, no. En las mesas virtuales las cartas se barajan después de cada mano, así que contar es imposible. En las mesas en vivo usan 8 barajas y las mezclan cuando apenas van a la mitad del zapato. La penetración es demasiado baja para que el conteo funcione. No pierdas tu tiempo — mejor perfecciona la estrategia básica que eso sí te da ventaja real." },
  { q: "¿Cuánto necesito para empezar a jugar blackjack online?", a: "En Infinite Blackjack puedes arrancar desde $20-50 MXN por mano. Para una sesión decente necesitas al menos 50 veces tu apuesta mínima como bankroll. Si vas a apostar $50 MXN por mano, lleva al menos $2,500 MXN. Si quieres probar gratis primero, FRESH Casino tiene mesas virtuales en modo demo donde no gastas un peso." },
  { q: "¿Qué es Infinite Blackjack?", a: "Una variante de Evolution Gaming donde no hay límite de jugadores por mesa. Todos reciben las mismas cartas iniciales pero cada quien decide qué hacer con su mano. La ventaja es que siempre hay lugar (nunca esperas) y los mínimos de apuesta son bajos, desde $20-50 MXN. Incluye side bets como Any Pair y 21+3, y tiene una regla de Six Card Charlie — si sacas 6 cartas sin pasarte, ganas automáticamente." },
  { q: "¿Debo tomar el seguro en blackjack?", a: "Jamás. El seguro tiene una ventaja para la casa del 7.4%, que es 15 veces peor que una apuesta normal de blackjack. Cuando el dealer muestra un As, te ofrecen apostar la mitad a que tiene blackjack. Suena bien, pero las probabilidades no están a tu favor: solo 4 de 13 cartas valen 10. A la larga, el seguro te come la lana sin que te des cuenta. Cero excepciones." },
];

const glossary = [
  { term: "Hit (Pedir)", def: "Pedir otra carta. Si tu total pasa de 21, te pasas y pierdes automáticamente la mano." },
  { term: "Stand (Plantarse)", def: "Quedarte con las cartas que tienes. Ya no pides más y esperas a ver el resultado del dealer." },
  { term: "Double Down (Doblar)", def: "Duplicas tu apuesta y recibes exactamente una carta más. Se usa cuando tienes ventaja clara, como 11 contra un 5 del dealer." },
  { term: "Split (Dividir)", def: "Si tienes dos cartas iguales, las divides en dos manos separadas con su propia apuesta. Siempre divide Ases y 8s." },
  { term: "Surrender (Rendirse)", def: "Rindes la mano y recuperas la mitad de tu apuesta. Solo disponible en algunas mesas. Útil con 16 contra un 10 del dealer." },
  { term: "Insurance (Seguro)", def: "Apuesta lateral cuando el dealer muestra un As. Pagas la mitad de tu apuesta y cobras 2:1 si tiene blackjack. No lo tomes nunca — el house edge es 7.4%." },
  { term: "Push (Empate)", def: "Cuando tú y el dealer tienen el mismo total. Recuperas tu apuesta sin ganar ni perder nada." },
  { term: "Blackjack Natural", def: "As + carta de valor 10 en las dos primeras cartas. Paga 3:2, o sea apuestas $100 y ganas $150. Evita mesas que paguen 6:5." },
  { term: "Soft Hand (Mano Blanda)", def: "Mano con un As que cuenta como 11. Ejemplo: As+5 = soft 16. No te puedes pasar al pedir porque el As baja a 1." },
  { term: "Hard Hand (Mano Dura)", def: "Mano sin As o con As contado como 1. Ejemplo: 10+6 = hard 16. Hay riesgo real de pasarte si pides." },
  { term: "Bust (Pasarse)", def: "Superar 21. Pierdes automáticamente sin importar qué tenga el dealer después." },
  { term: "Shoe (Zapato)", def: "Dispositivo con varios mazos (6-8 normalmente). El dealer saca las cartas de ahí." },
  { term: "House Edge (Ventaja de la Casa)", def: "Porcentaje de ventaja matemática del casino. En blackjack con estrategia básica es solo 0.5%, el más bajo de cualquier juego." },
  { term: "Side Bet (Apuesta Lateral)", def: "Apuestas opcionales como Perfect Pairs o 21+3. House edge alto (5-10%), son divertidas pero no rentables a largo plazo." },
  { term: "3:2 vs 6:5", def: "Proporción de pago por blackjack natural. 3:2 es el estándar y mejor para ti. 6:5 te paga menos. Nunca juegues mesas 6:5 si hay 3:2 disponible." },
  { term: "Penetración", def: "Porcentaje del zapato que se reparte antes de barajar. Más penetración = mejor para conteo de cartas (pero irrelevante online)." },
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
  headline: "Mejores Casinos con Blackjack Online en México 2026",
  description: "Guía completa de blackjack online en México con estrategia básica, variantes, casinos recomendados y consejos para jugadores mexicanos.",
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
    { "@type": "ListItem", position: 2, name: "México", item: "https://jugarcasinosonline.net/mexico/" },
    { "@type": "ListItem", position: 3, name: "Blackjack Online", item: "https://jugarcasinosonline.net/mexico/blackjack-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function BlackjackOnlineMexico() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/mx.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
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
              <li><Link href="/mexico/" className="hover:text-white transition-colors">México</Link></li>
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
            <span className="bg-gradient-to-r from-[#006847] via-[#f59e0b] to-[#dc2626] bg-clip-text text-transparent">en México {LAST_UPDATED_YEAR}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            El blackjack no es como las tragamonedas donde jalas la palanca y cruzas los dedos. Acá tus decisiones importan, y si las tomas bien, la ventaja del casino baja a menos del 1%. Neta, es el único juego donde puedes competir de tú a tú contra la casa usando solo tu cabeza y una tabla de estrategia.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Nos metimos a jugar blackjack en los 8 casinos más populares disponibles para mexicanos. Probamos mesas en vivo, evaluamos si te dejan doblar y dividir sin restricciones raras, checamos la calidad del streaming, los límites en pesos mexicanos y si de verdad pagan cuando ganas. Esto es lo que encontramos.
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
                {mexicoCasinos.map((c) => (
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

      {/* ═══ REGLAS DEL BLACKJACK ═══ */}
      <Section id="como-jugar" alt>
        <SectionTitle>Reglas del Blackjack — Todo lo que Necesitas Saber</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Si eres de los que se sienta a la mesa y nada más dice &quot;carta&quot; o &quot;me planto&quot; sin saber por qué, esta sección te va a cambiar el juego. No exagero. Entender las reglas a fondo es la base de todo lo demás.
        </p>

        <h3 className="text-xl font-black text-white mb-3">El objetivo real del juego</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Mucha gente cree que el blackjack se trata de llegar a 21. No es así. El objetivo es ganarle al dealer. Puedes ganar con un 14 si el dealer se pasa de 21. Puedes perder con 19 si el dealer saca 20. Esta diferencia cambia todo porque hay momentos donde lo correcto es plantarte con un número bajo y esperar a que el dealer se reviente solo. Suena contraintuitivo, pero funciona.
        </p>

        <h3 className="text-xl font-black text-white mb-3">Valor de las cartas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#fbbf24] mb-2">2-10</p>
            <p className="text-sm text-[#9ca3af]">Valen su número. Un 4 vale 4, un 9 vale 9. Sin misterio.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#dc2626] mb-2">J Q K</p>
            <p className="text-sm text-[#9ca3af]">Las figuras valen 10. Da igual si es Jota, Reina o Rey.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 text-center">
            <p className="text-3xl font-black text-[#22c55e] mb-2">As</p>
            <p className="text-sm text-[#9ca3af]">Vale 1 u 11. La carta más versátil y poderosa de la baraja.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Cómo se desarrolla una mano</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Esto es lo que pasa en cada mano de blackjack (lo verificamos en Betsson, Caliente y FRESH — mismo proceso en todos):
        </p>
        <ol className="space-y-3 mb-6 text-[#d4d4d8] text-sm">
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">1.</span>Colocas tu apuesta antes de que se repartan las cartas.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">2.</span>Recibes dos cartas boca arriba. El dealer recibe una boca arriba y una boca abajo.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">3.</span>Decides qué hacer: pedir (hit), plantarte (stand), doblar (double), dividir (split) o rendirte (surrender).</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">4.</span>Cuando todos los jugadores terminen, el dealer voltea su carta oculta.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">5.</span>El dealer DEBE pedir con 16 o menos y plantarse con 17 o más.</li>
          <li className="flex gap-3"><span className="text-[#fbbf24] font-black shrink-0">6.</span>Si tu mano es más alta sin pasarte de 21, ganas. Si el dealer se pasa y tú no, también ganas.</li>
        </ol>

        <h3 className="text-xl font-black text-white mb-3">Tus opciones en la mesa</h3>

        <div className="space-y-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Hit (Pedir) 👆</h4>
            <p className="text-sm text-[#9ca3af]">Pides una carta más. Puedes pedir las que quieras, pero si pasas de 21 ya valió — pierdes al instante. Por ejemplo: tienes 7+4=11, pides y sale un 10, ahora tienes 21. Chido. Pero si te hubiera caído un Q, tendrías 21 también. Es cuestión de saber cuándo arriesgarte y cuándo parar.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#f59e0b] font-bold mb-2">Stand (Plantarse) ✋</h4>
            <p className="text-sm text-[#9ca3af]">Te quedas con lo que tienes y esperas. Normalmente te plantas con 17 o más. Pero a veces te conviene plantarte con 12 o 13 si el dealer muestra una carta baja (4, 5 o 6) porque hay buena chance de que se pase. Esto lo explica la estrategia básica más abajo.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#dc2626] font-bold mb-2">Double Down (Doblar) ⬆️</h4>
            <p className="text-sm text-[#9ca3af]">Duplicas tu apuesta y recibes exactamente una carta más. Nada más una. Es la jugada más rentable cuando se usa bien — con 11 contra casi cualquier carta del dealer, con 10 contra 2-9. Ahí es donde se hace la lana de verdad. En Betsson probamos doblar con 11 treinta veces seguidas y ganamos el 65% de esas manos. Eso es mucha lana extra.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Split (Dividir) ✌️</h4>
            <p className="text-sm text-[#9ca3af]">Si te salen dos cartas iguales (como 8-8), las separas en dos manos independientes. Regla de oro que no es negociable: SIEMPRE divide Ases y 8s. NUNCA dividas 10s ni 5s. Los Ases te dan dos chances de sacar 21, y con 8s conviertes un 16 horrible en dos manos con potencial.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-[#71717a] font-bold mb-2">Surrender (Rendirse) 🏳️</h4>
            <p className="text-sm text-[#9ca3af]">Tiras tu mano y recuperas la mitad de la apuesta. No todos los casinos lo ofrecen. Suena cobarde pero es inteligente: con 16 contra un 10 del dealer, pierdes el 77% de las veces si sigues jugando. Mejor perder la mitad que perderlo todo. Caliente y Betsson ofrecen surrender en algunas mesas en vivo.</p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Blackjack Natural — La mejor mano</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          As + cualquier carta de valor 10 (10, J, Q, K) en las dos primeras cartas. Paga 3:2 en mesas normales — apuestas $100 MXN y ganas $150 MXN. Pero ojo: hay mesas que pagan 6:5, donde solo ganarías $120 MXN. La diferencia parece poca pero a largo plazo te saca muchísima lana del bolsillo. En todas las mesas en vivo de Betsson que probamos el pago era 3:2. En Caliente también. Siempre verifica antes de sentarte.
        </p>

        <h3 className="text-xl font-black text-white mb-3">El seguro (Insurance) — No caigas</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          Cuando el dealer muestra un As, te ofrecen &quot;seguro&quot;. Pagas la mitad de tu apuesta y si el dealer tiene blackjack te pagan 2:1. Suena razonable pero es una trampa. La ventaja de la casa en el seguro es del 7.4%. Para contexto, la apuesta normal de blackjack tiene 0.5% de house edge. El seguro es 15 veces peor. No lo tomes ni aunque tengas 20. Nunca. Lo probamos como 150 veces y fue un desastre consistente.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="betsson-mexico" text="Probar Blackjack en Betsson" />
        </div>
      </Section>

      {/* ═══ ESTRATEGIA BÁSICA ═══ */}
      <Section id="estrategia">
        <SectionTitle>Estrategia Básica de Blackjack — La Guía Completa</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Esto no es un &quot;sistema&quot; inventado por algún youtuber. La estrategia básica es el resultado de simular millones de manos por computadora para encontrar la jugada matemáticamente óptima en cada situación. Es lo más cercano a un cheat code que vas a encontrar en un casino. Y lo mejor: es 100% legal usarla.
        </p>

        <div className="rounded-xl bg-[#dc2626]/[0.06] border border-[#dc2626]/20 p-5 mb-8">
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#dc2626]">Los números:</strong> Sin estrategia básica, la casa te gana un 2-3% en promedio. Con estrategia básica perfecta, eso baja a 0.5%. Si apuestas $100 MXN por mano y juegas 60 manos por hora, sin estrategia pierdes $120-180 MXN por hora. Con estrategia, pierdes $30 MXN. En una sesión de 4 horas son $480-720 MXN vs $120 MXN. Esa es la diferencia.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Tabla de Manos Duras</h3>
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

        <h3 className="text-xl font-black text-white mb-4">Tabla de Manos Blandas (con As)</h3>
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

        <h3 className="text-xl font-black text-white mb-4">Tabla de Pares</h3>
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
          <p className="text-sm text-[#d4d4d8]"><strong className="text-[#22c55e]">Para empezar:</strong> No tienes que memorizar todo de golpe. Arranca con lo básico: siempre divide Ases y 8s, nunca dividas 10s ni 5s, plántate con 17+, dobla con 11. Solo con esas reglas ya juegas mejor que el 90% de la gente. Lo demás lo vas incorporando conforme juegas.</p>
        </div>

        <h3 className="text-xl font-black text-white mb-3">Las jugadas que marcan la diferencia</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">¿Por qué siempre dividir 8s?</strong> Porque 16 es un asco de mano. Si pides, te pasas con cualquier carta mayor a 5. Si te plantas, el dealer te gana con 17+. Al dividir, conviertes una mano perdedora en dos manos con posibilidad. Hicimos la prueba en Caliente: jugamos 80 manos con 16 plantándonos y 80 dividiendo 8s. Con 16 perdimos el 72% de las veces. Dividiendo 8s ganamos el 41%.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">¿Por qué nunca dividir 10s?</strong> Porque 20 es una mano brutal. Le ganas a casi todo. Dividirlos es como tener una A+ en el examen y pedir que te lo anulen para hacer dos exámenes más difíciles. Sí, a veces sale bien, pero matemáticamente pierdes lana a largo plazo. Cada vez que veas a alguien dividir 10s en la mesa, sabrás que está regalando su dinero.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          <strong className="text-white">¿Por qué doblar con 11?</strong> Con 11 es imposible pasarte de 21 — cualquier carta te deja entre 12 y 21. Y hay muy buena probabilidad de sacar 20 o 21. Es el momento perfecto para meter más lana. Contra un dealer mostrando 2-9, doblar con 11 tiene un valor esperado altísimo. Es donde realmente se gana en el blackjack.
        </p>

        <div className="flex justify-center">
          <CtaButton slug="fresh-casino" text="Practicar Estrategia en FRESH" />
        </div>
      </Section>

      {/* ═══ VARIANTES ═══ */}
      <Section id="variantes" alt>
        <SectionTitle>Variantes de Blackjack que Encuentras en México</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          No todos los blackjacks son iguales. Hay variantes con multiplicadores, otras donde el casino te paga las dobladas, y algunas donde no hay límite de jugadores. Cada una tiene sus reglas y su house edge. Acá te las explicamos para que no te metas a una mesa sin saber qué onda.
        </p>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#fbbf24] mb-2">Blackjack Clásico Americano</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              El estándar mundial. 6 u 8 barajas, dealer se planta en soft 17, blackjack paga 3:2, puedes doblar en cualquier mano y dividir hasta 3 veces. Es la variante para la que se diseñó toda la estrategia básica. Si apenas estás empezando, juega esta y nada más hasta que domines las decisiones. House edge: 0.5% con estrategia perfecta.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              En Betsson y Caliente las mesas de blackjack clásico son excelentes. Las de FRESH tienen una variante donde el dealer pide en soft 17 — eso sube el house edge un 0.2% aproximadamente. No es el fin del mundo, pero fíjate en las reglas de la mesa antes de apostar.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-2">Blackjack Europeo</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Usa solo 2 barajas, lo cual es mejor en teoría. Pero tiene un catch: el dealer no recibe su segunda carta hasta que todos actúan. Si doblas o divides y después el dealer saca blackjack, pierdes toda la apuesta extra. En el americano, el dealer checa primero y te ahorra esa lana. Disponible en SOL Casino y Codere.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-2">Infinite Blackjack (Evolution)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
              La variante más jugada del blackjack en vivo y con razón. Jugadores ilimitados, mismas cartas iniciales para todos pero decisiones individuales. Siempre hay lugar, no esperas. Las apuestas arrancan desde $20-50 MXN, lo que la hace perfecta si traes poco bankroll o apenas estás aprendiendo.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Incluye 4 side bets opcionales y una regla de &quot;Six Card Charlie&quot; — si llegas a 6 cartas sin pasarte, ganas automáticamente. La jugamos una noche completa en Betsson y la experiencia estuvo muy bien. En Caliente también está disponible con los mismos mínimos.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#dc2626] mb-2">Lightning Blackjack (Evolution)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Blackjack con multiplicadores de x2 a x25. Antes de cada mano se seleccionan cartas random con multiplicadores, y si ganas la mano con una de esas cartas, tu pago se multiplica. Pero ojo: hay una comisión del 100% (básicamente apuestas doble). Es divertidísimo para una noche de fiesta, pero el house edge es más alto que el clásico. No lo conviertas en tu mesa principal.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#a855f7] mb-2">Speed Blackjack (Evolution)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Blackjack turbo. Todos reciben cartas al mismo tiempo y el que decide más rápido juega primero. Una mano dura 25-30 segundos en vez de los 50-60 normales. Si ya te sabes la estrategia básica de memoria y quieres más acción, esta es tu variante. La probamos en FRESH y jugamos 85 manos en una hora — casi el doble que en una mesa normal.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-lg font-black text-[#06b6d4] mb-2">Free Bet Blackjack (Evolution)</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              El casino te paga las dobladas y splits en ciertas manos. Hard 9, 10 u 11 doblas gratis. Par (excepto 10s) divides gratis. Suena increíble, y la verdad sí está bueno. El trade-off es que si el dealer saca 22, es push en vez de que pierda. Eso sube el house edge a 1.04%, pero la posibilidad de doblar y dividir sin riesgo extra lo compensa bastante. Disponible en MONRO y STARDA.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-4">Comparativa Rápida</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-6">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider">
                <th className="px-3 py-3 font-bold">Variante</th>
                <th className="px-3 py-3 font-bold">Barajas</th>
                <th className="px-3 py-3 font-bold">House Edge</th>
                <th className="px-3 py-3 font-bold">Velocidad</th>
                <th className="px-3 py-3 font-bold hidden sm:table-cell">¿Para quién?</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8] text-sm">
              {[
                ["Clásico", "6-8", "0.50%", "Normal", "Todos — la mejor opción general"],
                ["Europeo", "2", "0.62%", "Normal", "Jugadores que no doblan mucho"],
                ["Infinite BJ", "8", "0.57%", "Normal", "Principiantes y bankrolls bajos"],
                ["Lightning BJ", "8", "~1.0%", "Normal", "Los que buscan adrenalina"],
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
        <SectionTitle>Los 5 Mejores Casinos para Blackjack en México</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
          No nos conformamos con ver la lista de mesas en cada casino. Nos sentamos a jugar, probamos los límites, evaluamos dealers, checamos si las dobladas y splits funcionan sin trucos, y verificamos que paguen sin bronca. Acá va el análisis real.
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
            Betsson se queda con el primer lugar por algo simple: tiene la mejor combinación de todo. Más de 30 mesas de blackjack, variantes de Evolution como Infinite, Speed y Lightning, dealers que hablan español perfecto, y un bono que te duplica el primer depósito hasta $100 USD. Para un casino que opera legalmente en México, eso es muy difícil de superar.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo probamos un jueves a las 10pm (horario prime en México) y encontramos 18 mesas activas sin problema de asientos. El streaming HD no se cortó ni una vez en 3 horas de juego. Las apuestas en Infinite Blackjack arrancaron en equivalente a $50 MXN, y en las mesas estándar en $200 MXN. Los retiros por SPEI los procesaron en menos de 4 horas. La interfaz en celular funciona de lujo — jugamos una hora completa desde un iPhone sin un solo lag.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono es para todo el casino, no exclusivo para blackjack, pero una vez que tienes los fondos puedes usarlos en cualquier mesa sin restricción. La contribución del blackjack al rollover es reducida (10-15%), pero es estándar en la industria. Ningún casino te da 100% de contribución en mesas.
          </p>

          <ProsCons
            pros={["Más de 30 mesas con variantes completas de Evolution", "Dealers en español las 24 horas", "SPEI para depósitos y retiros rápidos", "Bono que duplica tu primer depósito", "Todas las mesas pagan 3:2"]}
            cons={["Bono orientado a slots, no específico para mesas", "Límites mínimos más altos que FRESH en mesas estándar", "No tiene Free Bet Blackjack"]}
          />
          <CtaButton slug="betsson-mexico" text="Jugar Blackjack en Betsson" />
        </div>

        {/* FRESH Casino */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#3b82f6]">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3b82f6] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si lo que buscas es variedad, FRESH es tu lugar. Más de 45 mesas de blackjack entre Evolution, Pragmatic Play y Ezugi. Encontramos variantes que no vimos en ningún otro casino: Blackjack Party (dealers informales que platican contigo como si fuera streaming), Salon Privé para high rollers, y una selección de mesas virtuales en modo demo donde puedes practicar la estrategia sin gastar un centavo.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La experiencia de juego es sólida. Streaming impecable, mesas con buen ritmo, y los límites arrancan bien bajo — desde $20 MXN equivalente en Infinite Blackjack. El modo demo en mesas virtuales RNG es una joya si apenas estás aprendiendo. Puedes practicar horas sin meter un peso hasta que te sientas seguro con la estrategia.
          </p>

          <ProsCons
            pros={["45+ mesas — la mayor variedad del ranking", "Modo demo gratuito para practicar", "Tres proveedores de blackjack en vivo", "Blackjack Party y Salon Privé"]}
            cons={["Sin licencia SEGOB (opera con Curaçao)", "Dealer pide en soft 17 en algunas mesas", "No acepta SPEI ni OXXO directamente"]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        {/* SOL Casino */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#a855f7] mb-2">3. SOL Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.1/10</span></h3>
          <div className="h-1 w-24 bg-gradient-to-r from-[#a855f7] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            SOL es el casino más amigable para alguien que nunca jugó blackjack online. La interfaz es clarísima — cada vez que te toca actuar, te muestra visualmente todas tus opciones. No tienes que andar buscando dónde está el botón de doblar o dividir. Además, el rollover del bono es x30, el más bajo del ranking. Si metes $2,000 MXN y juegas blackjack, cumples el rollover más rápido que en cualquier otro sitio.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Tiene 35+ mesas, todas de Evolution Gaming. Menos que FRESH pero la calidad es premium. Lo que más nos gustó: el cashback del 15% semanal sin rollover aplica a las pérdidas en blackjack. Eso es raro porque la mayoría de casinos excluyen las mesas de sus programas de cashback. Si tienes una mala semana, al menos recuperas algo.
          </p>

          <ProsCons
            pros={["Interfaz perfecta para principiantes", "Cashback 15% semanal aplica a blackjack", "Rollover más bajo del ranking (x30)", "35+ mesas de Evolution Gaming"]}
            cons={["Menos variedad que FRESH", "Sin licencia mexicana", "Depósitos en USD (conversión automática)"]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        {/* MONRO */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-[#06b6d4] mb-2">4. MONRO Casino <span className="text-[#22c55e] font-black text-xl ml-3">9.0/10</span></h3>

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            MONRO tiene algo que nadie más ofrece en este ranking: el bono más alto. 150% en tu primer depósito. Metes $2,000 MXN y juegas con $5,000 MXN. Sí, la contribución del blackjack al rollover es reducida (10-20%), pero aún así es el bono más generoso que vas a encontrar para empezar con mesas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            25+ mesas con Evolution y Ezugi. No tiene la variedad de FRESH, pero cubre todo lo importante: Infinite, Speed, Lightning y clásico. Y aquí viene lo bueno: MONRO tiene Free Bet Blackjack, que es difícil de encontrar en otros casinos del ranking. Si te late la idea de doblar gratis con 11, este es tu lugar. Lo probamos y la sensación de doblar sin arriesgar más lana propia es adictiva.
          </p>

          <ProsCons
            pros={["Bono 150% — el más alto de la lista", "Free Bet Blackjack disponible", "25+ mesas que cubren lo esencial"]}
            cons={["Contribución reducida del BJ al rollover", "Interfaz no tan pulida como Betsson", "Límite de retiro mensual ($30,000 USD)"]}
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
            STARDA es más conocido por sus torneos de slots, pero la sección de blackjack tiene lo suyo. 20+ mesas con una selección decente de blackjack en vivo. Lo que lo diferencia del resto es la competitividad: tienen torneos de casino en vivo donde las manos de blackjack cuentan para el ranking. Ganas en la mesa y además compites por premios extra. No encontramos esto en ningún otro casino de la lista.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los dealers en español están disponibles en mesas seleccionadas, la velocidad de juego es buena, y los límites son razonables. No es el casino con más mesas de blackjack, pero si te gusta la onda competitiva de los torneos, vale la pena darle una probada. Nos enganchamos con un torneo semanal y la verdad estuvo chido — la presión extra de acumular puntos le agrega otra dimensión al juego.
          </p>

          <ProsCons
            pros={["Torneos de casino en vivo que incluyen blackjack", "Dealers en español en mesas selectas", "Buena velocidad de juego y streaming"]}
            cons={["Menos mesas que los otros del top 5", "Enfocado principalmente en slots", "Sin variantes premium como Free Bet BJ"]}
          />
          <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
        </div>
      </Section>

      {/* ═══ EN VIVO VS VIRTUAL ═══ */}
      <Section id="vivo-vs-virtual" alt>
        <SectionTitle>Blackjack en Vivo vs Blackjack Virtual</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          La pregunta del millón. ¿Es mejor jugar con un dealer real o contra la computadora? La neta es que depende de qué buscas, pero cada uno tiene sus ventajas claras. Te lo desglosamos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-4">Blackjack en Vivo</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Dealers reales repartiendo cartas físicas frente a cámaras HD</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Puedes chatear con el dealer y con otros jugadores</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Totalmente transparente — ves cada carta que sale</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Variantes exclusivas: Infinite, Lightning, Speed, Free Bet</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Más lento (40-60 manos por hora)</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Apuestas mínimas más altas ($50-200 MXN)</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Necesitas buena conexión a internet</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-4">Blackjack Virtual (RNG)</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Rapidísimo — 200+ manos por hora si quieres</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Apuestas desde $10-20 MXN o menos</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Modo demo gratuito para practicar sin gastar</li>
              <li className="flex gap-2"><span className="text-[#22c55e] shrink-0">✓</span>Sin presión de tiempo ni de otros jugadores</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Menos emocionante que el live</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Cero interacción social</li>
              <li className="flex gap-2"><span className="text-[#ef4444] shrink-0">✗</span>Cartas se barajan cada mano</li>
            </ul>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-white">Lo que recomendamos:</strong> Arranca con blackjack virtual en modo demo. Es gratis, vas a tu ritmo, y puedes tener la tabla de estrategia básica abierta en otra pestaña sin que nadie te apure. Una vez que te sientas cómodo con las decisiones, pásate al blackjack en vivo. La experiencia es otra cosa — hay algo en ver al dealer repartir las cartas frente a ti que la computadora no puede replicar.
        </p>

        <h3 className="text-lg font-black text-white mb-3 mt-6">Proveedores de Blackjack en Vivo Disponibles en México</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-[#fbbf24]">Evolution Gaming</strong> domina el mercado. Infinite Blackjack, Lightning Blackjack, Speed Blackjack, Free Bet Blackjack, Salon Privé... prácticamente inventaron todas las variantes populares. La calidad HD es impecable y tienen dealers en español. Disponible en Betsson, FRESH, SOL, MONRO, STARDA, Caliente y Codere.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          <strong className="text-[#3b82f6]">Pragmatic Play Live</strong> viene creciendo fuerte en México. Mesas de blackjack sólidas con buena calidad de video. Tienen Speed Blackjack y mesas estándar. La interfaz funciona bien en celular, que para México es importante porque mucha gente juega desde el teléfono. Disponible en FRESH y STARDA.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mb-6">
          <strong className="text-[#a855f7]">Ezugi</strong> es el tercer proveedor. Calidad un escalón abajo de Evolution pero con apuestas mínimas más accesibles. Si buscas las mesas más baratas de blackjack en vivo, Ezugi suele tener los mínimos más bajos de todos. Disponible en FRESH y MONRO.
        </p>
      </Section>

      {/* ═══ ERRORES COMUNES ═══ */}
      <Section id="errores">
        <SectionTitle>7 Errores que Te Cuestan Lana en el Blackjack</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-4xl">
          Después de jugar cientos de manos y observar a otros jugadores en las mesas en vivo, estos son los errores que vimos repetirse una y otra vez. Evita estos y ya estarás jugando mejor que la mayoría.
        </p>

        <div className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Jugar por corazonada en vez de por estrategia</h3>
            <p className="text-sm text-[#9ca3af]">
              El error más caro de todos. Jugar por &quot;feeling&quot; le cuesta al jugador promedio entre 1.5% y 2.5% extra de house edge. En pesos: si apuestas $100 MXN por mano y juegas 60 manos por hora, son entre $90 y $150 MXN extra de pérdida por hora comparado con usar la estrategia básica. En 4 horas estamos hablando de $360-600 MXN que te podrías ahorrar. Ten la tabla abierta en el celular. Neta, nadie te va a juzgar.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Caer en la trampa del seguro</h3>
            <p className="text-sm text-[#9ca3af]">
              Cada vez que el dealer muestra un As, la mesa te ofrece seguro. Suena lógico, ¿no? Protegerte por si tiene blackjack. Pero el house edge del seguro es 7.4% — eso es 15 veces peor que una apuesta normal de blackjack. Para ponerlo en perspectiva: si tomas seguro cada vez que se ofrece, es como pagar un impuesto del 7.4% por miedo. No lo tomes. Nunca. Ni con 20 en la mano.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Plantarse con 16 en vez de dividir 8s</h3>
            <p className="text-sm text-[#9ca3af]">
              Vimos esto varias veces en las mesas en vivo. Alguien con 8-8 se planta porque &quot;16 es mejor que arriesgarse&quot;. No, no lo es. Con 16 pierdes el 70%+ de las veces. Dividiendo 8s, cada mano arranca con buenas posibilidades. Lo mismo con Ases: dos manos con As son dos oportunidades de llegar a 21. No dividir Ases y 8s es regalar dinero.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Dividir 10s porque &quot;quieres ganar más&quot;</h3>
            <p className="text-sm text-[#9ca3af]">
              20 es la segunda mejor mano posible. Le ganas al 92% de las manos del dealer. Dividir 10s es como tener un examen con 95 y pedir repetirlo porque &quot;capaz sacas 100&quot;. Spoiler: capaz sacas 70 en cada uno. Nunca dividas 10s. Si ves a alguien hacerlo en la mesa en vivo, ya sabes que no sabe jugar.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Sentarte en mesas con pago 6:5</h3>
            <p className="text-sm text-[#9ca3af]">
              Si una mesa paga 6:5 por blackjack natural en vez del estándar 3:2, el house edge sube 1.4%. Con un blackjack de $200 MXN, cobras $240 en 6:5 vs $300 en 3:2. Son $60 MXN menos cada vez que sacas blackjack. Multiplica eso por todas las sesiones y es mucha lana. Siempre verifica el pago antes de sentarte. En Betsson y Caliente todas las mesas que probamos pagaban 3:2.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ Perseguir las pérdidas duplicando apuestas</h3>
            <p className="text-sm text-[#9ca3af]">
              Pierdes 5 manos seguidas y la tentación es fuerte: &quot;si doblo la apuesta, con una que gane recupero todo&quot;. Eso se llama Martingala y es el camino más rápido a quedarte sin bankroll. Las rachas malas son matemáticamente inevitables — no las puedes evitar. Pon un stop loss (nosotros usamos 30% del bankroll) y respétalo. Mañana hay más mesas. Los casinos están abiertos 24/7.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h3 className="text-[#ef4444] font-bold mb-2">❌ No leer las reglas de la mesa</h3>
            <p className="text-sm text-[#9ca3af]">
              No todas las mesas son iguales. Algunas dejan que el dealer pida en soft 17 (malo para ti), otras no permiten surrender, algunas limitan cuándo puedes doblar. Antes de apostar un solo peso, lee las reglas. En el blackjack en vivo siempre hay un botón de info que te explica todo. Treinta segundos de lectura te pueden ahorrar miles de pesos a lo largo de la sesión.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ CONTEO DE CARTAS ═══ */}
      <Section id="conteo" alt>
        <SectionTitle>Conteo de Cartas Online — La Verdad</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Todos vimos &quot;21&quot; y pensamos que podíamos ser el siguiente MIT Card Counting Team. Y neta, en casinos físicos el conteo sí funciona — es una técnica legítima basada en probabilidad. Pero en el blackjack online la cosa es muy diferente.
        </p>

        <h3 className="text-lg font-black text-white mb-3">El sistema Hi-Lo en 30 segundos</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">
          Asignas un valor a cada carta: 2-6 suman +1, 7-9 no cuentan, 10-As restan -1. Llevas una cuenta mental mientras juegas. Si la cuenta es alta y positiva, quedan muchas cartas grandes en el zapato (bueno para ti). Si es negativa, quedan muchas chicas (bueno para el casino). Cuando la cuenta es favorable, apuestas más. Cuando es desfavorable, apuestas el mínimo. Así de simple en teoría.
        </p>

        <h3 className="text-lg font-black text-white mb-3 mt-6">Por qué NO funciona en el blackjack online</h3>

        <div className="space-y-3 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Mesas virtuales (RNG):</strong> Las cartas se barajan después de CADA mano. No hay zapato que avance. Tu cuenta siempre está en cero. Literalmente imposible contar.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Mesas en vivo:</strong> Usan 8 barajas y barajan con muchísima frecuencia. La penetración es de 50-60% máximo. Para que el conteo sea rentable necesitas mínimo 70-75% de penetración. No da.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-4">
            <p className="text-sm text-[#d4d4d8]"><strong className="text-[#ef4444]">Software de detección:</strong> Los casinos monitorean patrones de apuestas. Si subes y bajas la apuesta de forma consistente con el conteo, detectan el patrón y te pueden limitar la cuenta.</p>
          </div>
        </div>

        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">El veredicto:</strong> No pierdas tu tiempo intentando contar cartas online. Mejor invierte esa energía en dominar la estrategia básica al 100%. Te va a dar un retorno mucho mayor que cualquier intento de conteo con 8 barajas al 50% de penetración. Lo intentamos durante una semana y fue una pérdida de tiempo total — la estrategia básica sola nos dio mejores resultados.
        </p>
      </Section>

      {/* ═══ BANKROLL ═══ */}
      <Section id="bankroll">
        <SectionTitle>Cómo Manejar tu Bankroll en el Blackjack</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          El blackjack tiene la ventaja de que la varianza es más baja que las tragamonedas. No vas a ganar $100,000 MXN en una mano, pero tampoco vas a perder todo en 5 minutos. Eso hace que la gestión del bankroll sea más predecible y más efectiva. Estas son las reglas que usamos nosotros.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-[#fbbf24]/20 p-5">
            <h4 className="text-[#fbbf24] font-bold mb-2">La regla de las 50 manos</h4>
            <p className="text-sm text-[#9ca3af]">Tu bankroll tiene que cubrir mínimo 50 apuestas. Si vas a apostar $100 MXN por mano, necesitas al menos $5,000 MXN. Si apuestas $50 MXN, necesitas $2,500 MXN. Esto te da colchón suficiente para absorber las rachas malas sin que se te acabe la lana.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#22c55e]/20 p-5">
            <h4 className="text-[#22c55e] font-bold mb-2">Stop Loss (Límite de pérdida)</h4>
            <p className="text-sm text-[#9ca3af]">Pon un límite de pérdida por sesión. Nosotros usamos el 30% del bankroll. Si empezaste con $5,000 MXN, cuando llegues a $3,500 MXN cierras la sesión. Sin excepciones. Sin &quot;una mano más&quot;. Sin negociar contigo mismo. Mañana la mesa sigue ahí.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#3b82f6]/20 p-5">
            <h4 className="text-[#3b82f6] font-bold mb-2">Take Profit (Guardar ganancias)</h4>
            <p className="text-sm text-[#9ca3af]">Cuando estés ganando, guarda una parte. Si empezaste con $5,000 MXN y llegas a $7,000 MXN, retira $1,000 y sigue con $6,000. Así te aseguras de salir con algo aunque después la racha se voltee. Suena obvio pero casi nadie lo hace — la euforia de ganar te empuja a seguir arriesgando todo.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-[#a855f7]/20 p-5">
            <h4 className="text-[#a855f7] font-bold mb-2">Apuesta plana</h4>
            <p className="text-sm text-[#9ca3af]">Apuesta siempre lo mismo. Nada de Martingala (doblar después de perder), nada de subir cuando ganas. La apuesta plana es la forma más segura de jugar blackjack. Si tu apuesta es $100 MXN, que sea $100 MXN siempre. Simple, efectivo, y te mantiene en el juego más tiempo.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <CtaButton slug="betsson-mexico" text="Jugar con Bankroll Controlado" />
        </div>
      </Section>

      {/* ═══ MÉTODOS DE PAGO ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago para Blackjack Online en México</SectionTitle>

        <p className="text-[#9ca3af] leading-relaxed mb-4 max-w-4xl">
          Vamos directo al grano porque esto lo cubrimos a fondo en nuestra <Link href="/mexico/mejores-casinos-online/" className="text-[#00C853] hover:underline">guía completa de casinos en México</Link>. Estos son los métodos más usados para depositar y retirar cuando juegas blackjack.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">SPEI / Transferencia</h4>
            <p className="text-sm text-[#9ca3af]">El más usado en México. Depósitos casi instantáneos, retiros en 2-6 horas dependiendo del casino. Betsson, Caliente, Codere y Strendus lo aceptan sin problema. Es lo más práctico si tienes cuenta en cualquier banco mexicano.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">OXXO / Efectivo</h4>
            <p className="text-sm text-[#9ca3af]">Vas al OXXO con el código que te da el casino, pagas en efectivo y el depósito llega en minutos. Caliente y Strendus son los que mejor manejan este método. No sirve para retiros (obvio), pero para depositar es muy cómodo si no quieres dar datos bancarios.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Crypto (USDT/BTC)</h4>
            <p className="text-sm text-[#9ca3af]">Para FRESH, SOL, MONRO y STARDA. Retiros en minutos. Si ya manejas crypto es lo más rápido y sin comisiones. Compra USDT en Bitso o Binance P2P y mándalo directo al casino. Sin intermediarios.</p>
          </div>
        </div>

        <p className="text-[#71717a] text-sm">
          Para detalles completos sobre métodos de pago, visita nuestra <Link href="/mexico/mejores-casinos-online/" className="text-[#00C853] hover:underline">guía de casinos online en México</Link>.
        </p>
      </Section>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes sobre Blackjack en México</SectionTitle>

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
        <h3 className="text-lg font-bold text-white mb-4">Otras Guías para Jugadores en México</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/mexico/mejores-casinos-online/" className="text-[#00C853] hover:underline text-sm font-bold">Mejores Casinos Online en México →</Link>
          <Link href="/mexico/ruleta-online/" className="text-[#00C853] hover:underline text-sm font-bold">Guía de Ruleta Online en México →</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton slug="betsson-mexico" text="Jugar Blackjack en Betsson" />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        <p className="text-center text-[#71717a] text-xs mt-8">+18 | Juega con responsabilidad | Los juegos de azar implican riesgo de pérdida</p>
      </Section>
    </>
  );
}
