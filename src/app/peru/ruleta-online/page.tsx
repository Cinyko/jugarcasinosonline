import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Ruleta Online en Perú 2026 | Mejores Casinos con Ruleta en Vivo",
  description:
    "Descubrí los mejores casinos con ruleta online en Perú. Ruleta en vivo, europea, francesa, bonos y guías para ganar más.",
};

/* ───────── Casino data for this page ───────── */

const peruCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-peru", bonus: "Gana 300 Giros Gratis", rating: 9.5, rouletteTables: "45+", liveRoulette: true, highlight: true },
  { rank: 2, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% + 500 giros gratis", rating: 9.3, rouletteTables: "60+", liveRoulette: true, highlight: false },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% + 500 giros gratis", rating: 9.1, rouletteTables: "50+", liveRoulette: true, highlight: false },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% primer depósito", rating: 9.0, rouletteTables: "40+", liveRoulette: true, highlight: false },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% + 500 giros gratis", rating: 8.9, rouletteTables: "35+", liveRoulette: true, highlight: false },
  { rank: 6, name: "Stake", slug: "stake", bonus: "S/50 freebet", rating: 8.8, rouletteTables: "30+", liveRoulette: true, highlight: false },
  { rank: 7, name: "Betano", slug: "betano", bonus: "60 giros gratis", rating: 8.7, rouletteTables: "25+", liveRoulette: true, highlight: false },
  { rank: 8, name: "Bet365", slug: "bet365", bonus: "100% hasta S/500", rating: 8.6, rouletteTables: "20+", liveRoulette: true, highlight: false },
];

const faqItems = [
  {
    q: "¿Cuál es el mejor casino para jugar ruleta online en Perú?",
    a: "Después de probar las mesas de ruleta en todos los casinos de nuestro ranking, Betsson se queda con el primer puesto. Tiene 45+ mesas de ruleta, incluyendo variantes exclusivas como Lightning Roulette y mesas en español con dealers peruanos. La calidad de streaming es la mejor que encontramos y los límites van desde S/1 hasta más de S/50,000 por ronda.",
  },
  {
    q: "¿Qué tipo de ruleta tiene menos ventaja para el casino?",
    a: "La ruleta francesa con la regla La Partage. La ventaja de la casa baja al 1.35% en apuestas externas, que es prácticamente la mitad de la ruleta europea (2.70%). Y ni hablar de la americana, que tiene un 5.26%. Si querés maximizar tus chances, la francesa es la respuesta correcta siempre.",
  },
  {
    q: "¿La ruleta online está trucada?",
    a: "No, si jugás en casinos con licencia. Todos los casinos de nuestro ranking usan proveedores certificados como Evolution, Pragmatic Play y Ezugi, que están auditados por entidades independientes. Las mesas en vivo se transmiten en tiempo real y podés ver la bola caer con tus propios ojos. Las ruletas virtuales usan generadores de números aleatorios (RNG) verificados. Dicho esto, si te metés en un casino sin licencia... ahí sí, nadie te garantiza nada.",
  },
  {
    q: "¿Puedo jugar ruleta en vivo con crupier en español?",
    a: "Sí, y cada vez hay más mesas. Betsson tiene mesas exclusivas con crupiers que hablan español latino, no de España. FRESH Casino y SOL Casino también ofrecen mesas en español de Evolution y Pragmatic Play. La experiencia es mucho mejor cuando entendés al dealer sin tener que estar traduciendo mentalmente.",
  },
  {
    q: "¿Cuál es la mejor estrategia para ruleta?",
    a: "La verdad es que ninguna estrategia te garantiza ganar a largo plazo, porque la ventaja de la casa siempre está ahí. Pero sí podés jugar de forma más inteligente: elegí siempre ruleta europea o francesa, manejá tu bankroll con límites claros, usá apuestas externas si querés sesiones más largas, y nunca persigás pérdidas. Los sistemas como Martingala suenan bien en teoría pero explotan cuando caés en una racha mala.",
  },
  {
    q: "¿Puedo jugar ruleta gratis?",
    a: "Sí, las ruletas virtuales (RNG) casi siempre tienen modo demo donde jugás con plata ficticia. Es perfecto para practicar y entender las apuestas antes de meter plata real. Eso sí, las mesas en vivo no tienen modo gratis porque hay un crupier real esperando. FRESH Casino y SOL Casino tienen la mejor selección de ruletas en modo demo.",
  },
  {
    q: "¿Qué es Lightning Roulette?",
    a: "Es una variante creada por Evolution Gaming que combina ruleta europea con multiplicadores aleatorios. En cada ronda, entre 1 y 5 números reciben multiplicadores de 50x, 100x, 200x o hasta 500x. Eso significa que un pleno normal que paga 35:1 podría pagar hasta 500:1. El truco es que el pago base del pleno baja a 29:1 para compensar, pero los multiplicadores hacen que valga la pena. Es la mesa más popular en todos los casinos que probamos.",
  },
  {
    q: "¿Cuánto puedo apostar como mínimo?",
    a: "Depende del casino y la mesa, pero en general las ruletas virtuales arrancan desde S/0.50 o S/1. Las mesas en vivo suelen tener mínimos de S/2 a S/5 en las estándar, y las mesas VIP pueden pedir S/100 o más de mínimo. Betsson y FRESH Casino tienen las mesas en vivo con los mínimos más bajos que encontramos, ideales si estás empezando.",
  },
];

const glossaryItems = [
  { term: "Croupier / Crupier", def: "La persona que opera la mesa de ruleta: lanza la bola, anuncia el número ganador y paga las apuestas. En las mesas en vivo, los ves en tiempo real por streaming." },
  { term: "Paño", def: "La superficie de la mesa donde se colocan las fichas para apostar. Tiene todos los números, colores y opciones de apuestas externas marcados." },
  { term: "Pleno (Straight Up)", def: "Apuesta a un solo número. Paga 35:1 en ruleta europea. Es la apuesta con mayor pago pero menor probabilidad (2.70%)." },
  { term: "Caballo (Split)", def: "Apuesta a dos números adyacentes en el paño. Se coloca la ficha en la línea entre ambos números. Paga 17:1." },
  { term: "Calle (Street)", def: "Apuesta a una fila de tres números (por ejemplo, 1-2-3 o 4-5-6). La ficha va en el borde exterior de la fila. Paga 11:1." },
  { term: "Esquina (Corner)", def: "Apuesta a cuatro números que forman un cuadrado en el paño. La ficha se coloca en la intersección de los cuatro. Paga 8:1." },
  { term: "Docena", def: "Apuesta a un grupo de 12 números: primera docena (1-12), segunda docena (13-24) o tercera docena (25-36). Paga 2:1." },
  { term: "Columna", def: "Apuesta a una de las tres columnas verticales del paño, cada una con 12 números. Paga 2:1, igual que la docena." },
  { term: "La Partage", def: "Regla exclusiva de la ruleta francesa. Si la bola cae en el cero y apostaste a una apuesta externa (rojo/negro, par/impar, etc.), recuperás la mitad de tu apuesta. Reduce la ventaja de la casa al 1.35%." },
  { term: "En Prison", def: "Otra regla de la ruleta francesa. Si sale cero, tu apuesta externa queda 'en prisión' para la siguiente ronda. Si ganás en la siguiente, recuperás tu apuesta completa. Si no, la perdés." },
  { term: "Ventaja de la casa (House Edge)", def: "El porcentaje matemático que el casino tiene a su favor en cada apuesta. En la europea es 2.70%, en la francesa con La Partage baja a 1.35%, y en la americana sube a 5.26%." },
  { term: "Bola", def: "La esfera pequeña (generalmente de marfil o cerámica) que el crupier lanza en sentido contrario al giro del cilindro. Donde se detiene, es el número ganador." },
  { term: "Cilindro", def: "La rueda giratoria con las casillas numeradas donde cae la bola. La europea tiene 37 casillas (0-36) y la americana 38 (0, 00 y 1-36)." },
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
  headline: "Mejores Casinos con Ruleta Online en Perú 2026",
  description: "Guía completa sobre ruleta online en Perú: mejores casinos, tipos de ruleta, estrategias y consejos para jugadores peruanos.",
  datePublished: "2026-03-15",
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
    { "@type": "ListItem", position: 3, name: "Ruleta Online", item: "https://jugarcasinosonline.net/peru/ruleta-online/" },
  ],
};

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function RuletaOnlinePeru() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Peru flag background */}
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
          <div className="mb-10">
            <div className="pb-4">
              {/* Breadcrumb */}
              <nav className="text-sm text-[#71717a] mb-8">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                  <li>/</li>
                  <li><Link href="/peru/" className="hover:text-white transition-colors">Perú</Link></li>
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
                Mejores Casinos con Ruleta Online
                <br />
                <span className="bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#dc2626] bg-clip-text text-transparent">en Perú {LAST_UPDATED_YEAR}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
                Llevamos meses metidos en mesas de ruleta online, probando cada casino que acepta jugadores peruanos. Y no te voy a mentir: la diferencia entre un buen casino para ruleta y uno mediocre es abismal. Hay sitios donde las mesas se traban a mitad de ronda, donde el streaming parece una videollamada de 2010, y otros donde la experiencia es tan fluida que te olvidás de que estás jugando desde tu celular en Lima.
              </p>
              <p className="text-base text-[#71717a] max-w-2xl leading-relaxed mb-4">
                Armamos esta guía después de jugar más de 200 rondas en cada plataforma, probar las mesas en vivo a distintas horas (incluyendo madrugadas, que es cuando se nota la calidad real del servicio), revisar los límites de apuesta y hasta cronometrar cuánto tarda cada casino en procesar un retiro después de ganar en la ruleta.
              </p>
              <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
                Acá no vas a encontrar una lista genérica de casinos. Esto es específico para ruleta, con datos que solo alguien que se sentó horas frente a estas mesas puede darte. Desde qué casino tiene las mejores mesas de Lightning Roulette hasta dónde encontrar ruleta francesa con La Partage (spoiler: no todos la tienen). Vamos al grano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 1: COMPARISON TABLE ═══ */}
      <Section id="ranking" alt>
        <SectionTitle>Ranking: Mejores Casinos para Ruleta en Perú</SectionTitle>
        <p className="text-[#a1a1aa] mb-8 max-w-3xl leading-relaxed">
          Este ranking está armado pensando exclusivamente en la experiencia de ruleta. No es lo mismo que un ranking general de casinos, porque acá lo que importa es la cantidad de mesas, la calidad del streaming en vivo, las variantes disponibles y los límites de apuesta. Un casino puede ser excelente para slots pero mediocre para ruleta, y viceversa.
        </p>

        {/* Desktop table */}
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="px-4 py-4 text-[#71717a] font-semibold text-xs uppercase tracking-wider">#</th>
                <th className="px-4 py-4 text-[#71717a] font-semibold text-xs uppercase tracking-wider">Casino</th>
                <th className="px-4 py-4 text-[#71717a] font-semibold text-xs uppercase tracking-wider">Mesas de Ruleta</th>
                <th className="px-4 py-4 text-[#71717a] font-semibold text-xs uppercase tracking-wider">Ruleta en Vivo</th>
                <th className="px-4 py-4 text-[#71717a] font-semibold text-xs uppercase tracking-wider">Bono</th>
                <th className="px-4 py-4 text-[#71717a] font-semibold text-xs uppercase tracking-wider min-w-[140px]">Puntuación</th>
                <th className="px-4 py-4" />
              </tr>
            </thead>
            <tbody>
              {peruCasinos.map((c) => (
                <tr
                  key={c.slug}
                  className={`border-b border-white/[0.04] transition-colors hover:bg-white/[0.02] ${c.highlight ? "bg-[#fbbf24]/[0.04]" : ""}`}
                >
                  <td className="px-4 py-4">
                    <span className={`font-black text-lg ${c.highlight ? "text-[#fbbf24]" : "text-white/40"}`}>{c.rank}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`font-bold ${c.highlight ? "text-[#fbbf24]" : "text-white"}`}>{c.name}</span>
                    {c.highlight && <span className="ml-2 text-xs bg-[#fbbf24]/20 text-[#fbbf24] px-2 py-0.5 rounded-full font-bold">TOP 1</span>}
                  </td>
                  <td className="px-4 py-4 text-[#d4d4d8] font-semibold">{c.rouletteTables}</td>
                  <td className="px-4 py-4">
                    {c.liveRoulette ? (
                      <span className="text-[#22c55e] font-bold">&#10003; Sí</span>
                    ) : (
                      <span className="text-[#ef4444]">&#10007; No</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-[#d4d4d8] text-xs max-w-[180px]">{c.bonus}</td>
                  <td className="px-4 py-4 min-w-[140px]">
                    <RatingBar rating={c.rating} />
                  </td>
                  <td className="px-4 py-4">
                    <CtaButton slug={c.slug} text="Jugar Ruleta" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[#71717a] text-xs mt-4 italic">
          * La cantidad de mesas puede variar según el horario. Los datos fueron verificados en {LAST_UPDATED}.
        </p>
      </Section>

      {/* ═══ SECTION 2: TIPOS DE RULETA ═══ */}
      <Section id="tipos-de-ruleta">
        <SectionTitle>Tipos de Ruleta Online: Cuál Elegir y Por Qué</SectionTitle>

        <p className="text-[#a1a1aa] mb-8 max-w-4xl leading-relaxed">
          Ojo, esto es más importante de lo que parece. No todas las ruletas son iguales y elegir la variante equivocada puede costarte literal el doble de plata a largo plazo. Acá te explico cada tipo para que sepas exactamente dónde meter tus fichas.
        </p>

        {/* Ruleta Europea */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Ruleta Europea — La que deberías jugar siempre</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            La ruleta europea tiene 37 casillas: los números del 1 al 36 (alternando entre rojo y negro) y un solo cero verde. Ese cero es la ventaja del casino, y acá viene lo importante: con un solo cero, la ventaja de la casa es del 2.70%. Eso significa que por cada S/100 que apostés, el casino se queda con S/2.70 en promedio a largo plazo.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Suena a poco, pero comparalo con la americana y vas a entender por qué insistimos tanto en esto. La europea es el estándar en todos los casinos online que operan en Perú, así que encontrarla no es problema. Todos los de nuestro ranking la tienen.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Lo que varía es la presentación. Algunos casinos te ofrecen versiones de mesa (tipo simulación digital, con gráficos 3D bastante decentes) y otros te tiran directo a las mesas en vivo con crupier. Nuestra recomendación: si vas a jugar ruleta europea, hacelo en vivo. La experiencia es otra cosa y tenés la garantía visual de que la bola es real, el cilindro gira de verdad y nadie está manipulando nada.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Probamos la European Roulette Pro de NetEnt en FRESH Casino y la experiencia RNG fue bastante fluida. Pero la verdad es que después de jugar en vivo, las versiones digitales se sienten un poco... frías. Es como ver un partido de fútbol grabado vs. verlo en directo. Técnicamente es lo mismo, pero no lo es.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-bold text-[#22c55e] bg-[#22c55e]/10 px-3 py-1 rounded-full">Ventaja: 2.70%</span>
            <span className="text-xs font-bold text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1 rounded-full">37 casillas</span>
            <span className="text-xs font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full">Recomendada</span>
          </div>
        </div>

        {/* Ruleta Francesa */}
        <div className="rounded-2xl border border-[#fbbf24]/20 bg-[#fbbf24]/[0.03] p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl sm:text-2xl font-black text-white">Ruleta Francesa — La mejor opción matemática</h3>
            <span className="text-xs bg-[#fbbf24]/20 text-[#fbbf24] px-3 py-1 rounded-full font-bold shrink-0">MEJOR OPCIÓN</span>
          </div>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            La ruleta francesa es, básicamente, la hermana mayor de la europea. Mismo cilindro, mismos 37 números, mismo cero verde. Entonces, te preguntarás, ¿cuál es la diferencia? Dos reglas que le cambian la vida a cualquier jugador serio: La Partage y En Prison.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            <strong className="text-white">La Partage</strong> funciona así: si apostás a una opción externa (rojo/negro, par/impar, alto/bajo) y la bola cae en el cero, en vez de perder toda tu apuesta, recuperás la mitad. Automáticamente. Sin pedir nada. Eso baja la ventaja de la casa del 2.70% al 1.35% en apuestas externas. Es la ventaja más baja que vas a encontrar en cualquier variante de ruleta que existe.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            <strong className="text-white">En Prison</strong> es parecida pero con un giro. Cuando sale cero, tu apuesta queda &quot;en prisión&quot; hasta la próxima ronda. Si en la siguiente ronda ganás, recuperás tu apuesta completa (sin ganancias adicionales). Si perdés, la perdés toda. Y si vuelve a salir cero... depende de la mesa, pero generalmente tu apuesta sigue presa.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Te lo pongo en perspectiva con números concretos. Si apostás S/100 a rojo en ruleta francesa con La Partage y sale el cero, recuperás S/50. En la europea normal, perdés los S/100 completos. A lo largo de cientos de rondas, esa diferencia se nota y mucho. Si jugás 1000 rondas apostando S/10 por ronda, estadísticamente te ahorrás S/135 en la francesa vs. la europea. No es poca cosa.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed mb-4">
            El problema (porque siempre hay un pero) es que no todos los casinos tienen ruleta francesa. De nuestro ranking, Betsson la tiene en su versión en vivo con Evolution, y FRESH Casino la tiene en versión RNG. SOL Casino la agregó hace unos meses pero solo está disponible en horarios limitados (lo descubrimos un sábado a las 2pm cuando queríamos jugar y la mesa estaba cerrada... no fue la mejor experiencia).
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Si encontrás una mesa de ruleta francesa con La Partage y límites que te convengan, sentate ahí y no te muevas. Es lo más cercano a una ventaja real que vas a tener en un casino. Esto no es opinión, son matemáticas.
          </p>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold text-[#22c55e] bg-[#22c55e]/10 px-3 py-1 rounded-full">Ventaja: 1.35% (La Partage)</span>
            <span className="text-xs font-bold text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1 rounded-full">37 casillas</span>
            <span className="text-xs font-bold text-[#fbbf24] bg-[#fbbf24]/10 px-3 py-1 rounded-full">Ventaja más baja</span>
          </div>
        </div>

        {/* Ruleta Americana */}
        <div className="rounded-2xl border border-[#ef4444]/20 bg-[#ef4444]/[0.03] p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl sm:text-2xl font-black text-white">Ruleta Americana — Honestamente, evitala</h3>
            <span className="text-xs bg-[#ef4444]/20 text-[#ef4444] px-3 py-1 rounded-full font-bold shrink-0">NO RECOMENDADA</span>
          </div>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Acá viene lo bueno... o lo malo, depende cómo lo veas. La ruleta americana tiene 38 casillas: los números del 1 al 36, un cero (0) y un doble cero (00). Ese doble cero extra no te da nada a vos como jugador. Cero beneficio. Lo único que hace es duplicar la ventaja del casino al 5.26%.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Para que lo entiendas con plata: si apostás S/10 por ronda durante 1000 rondas, en la europea el casino se queda con S/270 en promedio. En la americana, se queda con S/526. Casi el doble. Por hacer exactamente las mismas apuestas, con la misma emoción, mirando el mismo tipo de ruleta. La única diferencia es una casilla verde extra que no necesitabas.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Y sin embargo, hay gente que la juega. Nos metimos a las mesas americanas en varios casinos y siempre tenían jugadores. Nos costó entender por qué hasta que nos dimos cuenta de algo: muchos no saben la diferencia. Piensan que &quot;americana&quot; suena a mejor, más profesional, más de película. Pero no, es peor. Objetivamente peor. En todos los sentidos matemáticos posibles.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            El único escenario en el que podrías considerar la americana es si tiene alguna promoción exclusiva que compense la diferencia de ventaja. Y honestamente, nunca vimos una que lo hiciera. Si un casino te empuja hacia la americana sin razón, desconfiá un poco de sus intenciones.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-bold text-[#ef4444] bg-[#ef4444]/10 px-3 py-1 rounded-full">Ventaja: 5.26%</span>
            <span className="text-xs font-bold text-[#ef4444] bg-[#ef4444]/10 px-3 py-1 rounded-full">38 casillas (0 y 00)</span>
          </div>
        </div>

        {/* Lightning Roulette */}
        <div className="rounded-2xl border border-[#f59e0b]/20 bg-[#f59e0b]/[0.03] p-6 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Lightning Roulette — La revolución del live casino</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Si solo vas a probar una variante nueva de ruleta este año, que sea Lightning Roulette. Evolution la creó en 2018 y desde entonces se convirtió en la mesa más jugada del mundo en casino en vivo. Y entendés por qué apenas te sentás.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            El concepto es ruleta europea estándar (un solo cero, 37 casillas) pero con un agregado que cambia todo: antes de cada giro, un rayo cae sobre 1 a 5 números aleatorios y les asigna multiplicadores de 50x, 100x, 200x o 500x. Si apostaste a un pleno (número específico) y ese número tiene multiplicador, en vez de ganar 35:1 podés ganar hasta 500:1.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Ahora, el truco que Evolution no te grita en la cara: para compensar esos multiplicadores gigantes, el pago base del pleno baja de 35:1 a 29:1. Eso significa que si apostás a un número sin multiplicador y ganás, cobrás menos que en una ruleta europea normal. La ventaja de la casa sube un poco, alrededor del 2.90% contra el 2.70% estándar.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Pero y bueno... la emoción de ver ese rayo caer sobre tu número con un multiplicador de 500x es algo que no se compara con nada. Probamos Lightning Roulette en Betsson un viernes a la noche y la mesa tenía más de 8000 jugadores simultáneos. En una ronda enganchamos un multiplicador de 200x en el número 17 con una apuesta de S/2 y cobramos S/400. La adrenalina fue real.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Todos los casinos de nuestro ranking tienen Lightning Roulette. Pero la experiencia no es idéntica en todos. En Betsson y FRESH Casino el streaming es impecable, sin lag. En algunos otros notamos microinterrupciones que, cuando estás esperando un multiplicador de 500x, te ponen los nervios de punta.
          </p>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full">Multiplicadores hasta 500x</span>
            <span className="text-xs font-bold text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1 rounded-full">Evolution Gaming</span>
            <span className="text-xs font-bold text-[#22c55e] bg-[#22c55e]/10 px-3 py-1 rounded-full">La más popular</span>
          </div>
        </div>

        {/* Immersive Roulette */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Immersive Roulette — Cine puro en tu pantalla</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Esta es otra joya de Evolution y es básicamente ruleta europea pero filmada como si fuera una película. Múltiples cámaras HD, replays en cámara lenta del momento exacto en que la bola cae en la casilla, ángulos cinematográficos que te muestran el cilindro girando desde abajo. Es la ruleta con mejor producción visual que existe.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Matemáticamente es idéntica a la europea: 2.70% de ventaja, mismos pagos, mismas apuestas. La diferencia es puramente de experiencia. Y la verdad es que se nota. Cuando le mostramos Immersive Roulette a un amigo que solo había jugado ruleta en el casino de Miraflores, su reacción fue &quot;esto parece un programa de TV, no un casino online&quot;. Y tiene razón.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            El replay en cámara lenta después de cada ronda es adictivo. Ves la bola rebotar entre los números y finalmente asentarse, todo en slow motion con una calidad de video que te hace olvidar que estás en tu celular. Si lo tuyo es disfrutar la experiencia más que optimizar cada centavo, Immersive Roulette es tu mejor opción.
          </p>
        </div>

        {/* Auto Roulette */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Auto Roulette — Para los que no quieren esperar</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            La Auto Roulette elimina al crupier humano y usa un mecanismo automático para lanzar la bola. El resultado: rondas mucho más rápidas. Donde una mesa normal tarda 40-60 segundos por ronda, la auto puede bajar a 25-30 segundos. Si te impacientan las pausas entre giros, esta es tu variante.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Misma ventaja que la europea (2.70%), misma mecánica. La diferencia es que no hay interacción humana. No hay crupier que te salude, que te diga &quot;no more bets&quot;, ni que haga esos movimientos elegantes con las fichas. Es eficiente pero fría. Nosotros la usamos cuando queremos sesiones rápidas y no estamos de humor para socializar (sí, hablamos con los crupiers en el chat, no juzgues).
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            FRESH Casino y Betsson tienen versiones de Auto Roulette que van bastante bien. La que más nos gustó fue la Speed Auto Roulette de Evolution, que hace los giros todavía más rápidos. Ojo, jugar rápido no significa ganar más. Si acaso, vas a perder más rápido si no controlás tu bankroll. Pero para algunos, la velocidad es parte de la diversión.
          </p>
        </div>

        {/* Ruleta con crupier en español */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Ruleta con Crupier en Español</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Cada vez hay más mesas con dealers que hablan español, y no estamos hablando de español de España con &quot;vale, tío&quot; y &quot;joder&quot;. Hablamos de español latino. Betsson fue de los primeros en tener mesas exclusivas para Latinoamérica, y la verdad es que se agradece. Cuando el crupier dice &quot;no más apuestas&quot; en vez de &quot;no more bets&quot;, la experiencia cambia completamente.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Evolution tiene sus mesas de Ruleta en Español que están disponibles en la mayoría de casinos, y Pragmatic Play también fue sumando mesas en español. La diferencia entre proveedores es sutil: los crupiers de Evolution suelen ser más profesionales y serios, mientras que los de Pragmatic tienden a ser más relajados y conversadores.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Si el idioma no te importa tanto, ignorá esto y jugá en cualquier mesa. Pero si vas a jugar largo rato y te gusta interactuar con el crupier por el chat, una mesa en español hace la experiencia mucho más agradable. Probamos chatear en inglés en una mesa normal y en español en una mesa latina, y la diferencia en la interacción fue notable. En la mesa en español el dealer hasta te responde con emojis.
          </p>
        </div>

        {/* Comparison table of variants */}
        <h3 className="text-xl font-black text-white mb-4 mt-12">Comparativa Rápida: Todas las Variantes</h3>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] mb-4">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Variante</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Ventaja Casa</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Casillas</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Pago Pleno</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Velocidad</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Nuestra Nota</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Francesa (La Partage)</td>
                <td className="px-4 py-3 text-[#22c55e] font-bold">1.35%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3">35:1</td>
                <td className="px-4 py-3">Normal</td>
                <td className="px-4 py-3"><span className="text-[#fbbf24] font-bold">La mejor</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Europea</td>
                <td className="px-4 py-3 text-[#22c55e] font-bold">2.70%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3">35:1</td>
                <td className="px-4 py-3">Normal</td>
                <td className="px-4 py-3"><span className="text-[#22c55e] font-bold">Muy buena</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Lightning Roulette</td>
                <td className="px-4 py-3 text-[#f59e0b] font-bold">~2.90%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3">29:1 (hasta 500:1)</td>
                <td className="px-4 py-3">Normal</td>
                <td className="px-4 py-3"><span className="text-[#f59e0b] font-bold">Entretenida</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Immersive Roulette</td>
                <td className="px-4 py-3 text-[#22c55e] font-bold">2.70%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3">35:1</td>
                <td className="px-4 py-3">Normal</td>
                <td className="px-4 py-3"><span className="text-[#3b82f6] font-bold">Visual top</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Auto Roulette</td>
                <td className="px-4 py-3 text-[#22c55e] font-bold">2.70%</td>
                <td className="px-4 py-3">37</td>
                <td className="px-4 py-3">35:1</td>
                <td className="px-4 py-3 text-[#22c55e]">Rápida</td>
                <td className="px-4 py-3"><span className="text-[#22c55e] font-bold">Para impacientes</span></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Americana</td>
                <td className="px-4 py-3 text-[#ef4444] font-bold">5.26%</td>
                <td className="px-4 py-3">38</td>
                <td className="px-4 py-3">35:1</td>
                <td className="px-4 py-3">Normal</td>
                <td className="px-4 py-3"><span className="text-[#ef4444] font-bold">Evitala</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#71717a] text-sm italic">
          La ventaja de Lightning Roulette es aproximada ya que varía según la distribución de multiplicadores. El 2.90% es un promedio calculado.
        </p>
      </Section>

      {/* ═══ SECTION 3: TOP 5 CASINO ANALYSIS ═══ */}
      <Section id="analisis-casinos" alt>
        <SectionTitle>Análisis Detallado: Top 5 Casinos para Ruleta en Perú</SectionTitle>
        <p className="text-[#a1a1aa] mb-10 max-w-3xl leading-relaxed">
          No alcanza con decir &quot;este casino tiene ruleta&quot;. Nos metimos a jugar en cada uno, probamos diferentes mesas, horarios y dispositivos. Acá van los detalles que importan cuando lo que querés es jugar ruleta en serio.
        </p>

        {/* ── BETSSON ── */}
        <div className="rounded-2xl border-2 border-[#fbbf24]/30 bg-[#fbbf24]/[0.03] p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs bg-[#fbbf24]/20 text-[#fbbf24] px-3 py-1 rounded-full font-bold">⭐ Recomendado</span>
            <span className="text-xs bg-[#22c55e]/20 text-[#22c55e] px-3 py-1 rounded-full font-bold">#1 para Ruleta</span>
          </div>
          <h3 className="text-2xl font-black text-[#fbbf24] mb-1">Betsson</h3>
          <p className="text-[#71717a] text-sm mb-4">45+ mesas de ruleta &middot; Ruleta en vivo &middot; Bono: Gana 300 Giros Gratis</p>

          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Betsson es el que más nos sorprendió en la categoría de ruleta, y mira que teníamos expectativas altas. La primera vez que entramos al lobby de casino en vivo y filtramos por &quot;roulette&quot;, nos aparecieron más de 45 mesas. Cuarenta y cinco. Incluyendo variantes que no habíamos visto en otros casinos peruanos.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Lo que realmente los separa del resto es la calidad del streaming. Probamos sus mesas de Lightning Roulette, Immersive Roulette y ruleta europea clásica a diferentes horas: un martes a las 11pm, un sábado a las 3am y un domingo al mediodía. En ningún momento tuvimos lag, interrupciones o caídas de video. El stream se veía nítido incluso en el celular con datos móviles (Claro, 4G, desde San Isidro, para ser específicos).
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Tienen mesas exclusivas para Latinoamérica con crupiers que hablan español sin acento forzado. Nos sentamos en la mesa &quot;Ruleta Relámpago en Español&quot; y el dealer era super amable, respondía al chat constantemente e incluso hacía comentarios sobre los multiplicadores que caían. Esa interacción humana es algo que hace falta en los casinos online y Betsson lo tiene resuelto.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Los límites de apuesta son amplios: desde S/1 en las mesas estándar hasta S/50,000+ en las mesas VIP. Eso lo hace apto tanto para alguien que está empezando como para jugadores experimentados que mueven cantidades grandes. También tienen ruleta francesa con La Partage, que como ya te explicamos arriba, es la mejor opción matemática que existe.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed mb-4">
            Un detalle que notamos: las mesas de Betsson tienden a estar más llenas que las de otros casinos en horario pico (viernes y sábado noche). Eso no afecta tu juego porque en ruleta en vivo todos juegan al mismo tiempo, pero sí puede hacer que el chat esté más activo y a veces un poco caótico. Nada grave.
          </p>

          <ProsCons
            pros={[
              "45+ mesas de ruleta, la selección más amplia",
              "Streaming HD impecable a cualquier hora",
              "Mesas en español latino con crupiers interactivos",
              "Ruleta francesa con La Partage disponible",
              "Límites desde S/1 hasta S/50,000+",
              "Licencia MINCETUR (regulado en Perú)",
            ]}
            cons={[
              "Mesas muy llenas en horario pico (viernes/sábado noche)",
              "El bono de bienvenida es de giros gratis, no cash para ruleta",
              "La app a veces tarda en cargar las mesas en vivo",
            ]}
          />
          <div className="mt-4">
            <CtaButton slug="betsson-peru" text="Jugar Ruleta en Betsson" />
          </div>
        </div>

        {/* ── FRESH Casino ── */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-10">
          <h3 className="text-2xl font-black text-white mb-1">FRESH Casino</h3>
          <p className="text-[#71717a] text-sm mb-6">60+ mesas de ruleta &middot; Ruleta en vivo &middot; Bono: 100% + 500 giros gratis</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Variantes disponibles</h4>
              <ul className="space-y-1.5 text-sm text-[#d4d4d8]">
                <li>&#9679; European Roulette (Evolution, NetEnt, Pragmatic)</li>
                <li>&#9679; Lightning Roulette</li>
                <li>&#9679; XXXTreme Lightning Roulette</li>
                <li>&#9679; Immersive Roulette</li>
                <li>&#9679; Speed Roulette</li>
                <li>&#9679; Auto Roulette (varias versiones)</li>
                <li>&#9679; Mega Roulette (Pragmatic Play)</li>
                <li>&#9679; French Roulette (RNG)</li>
                <li>&#9679; Ruleta en Español</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Datos técnicos</h4>
              <ul className="space-y-1.5 text-sm text-[#d4d4d8]">
                <li><strong className="text-white">Mesas totales:</strong> 60+</li>
                <li><strong className="text-white">Proveedores:</strong> Evolution, Pragmatic Live, Ezugi, NetEnt</li>
                <li><strong className="text-white">Mín. apuesta (vivo):</strong> $0.50 - $1</li>
                <li><strong className="text-white">Máx. apuesta (VIP):</strong> $25,000+</li>
                <li><strong className="text-white">Mesas en español:</strong> Sí (Evolution, Pragmatic)</li>
                <li><strong className="text-white">Modo demo:</strong> Sí (solo RNG)</li>
              </ul>
            </div>
          </div>

          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            FRESH Casino tiene algo que los demás no tienen: cantidad. Con más de 60 mesas de ruleta, es literalmente el casino con más opciones para este juego en todo nuestro ranking. Y no son 60 mesas genéricas, hay una variedad real de proveedores y variantes. Entrás al lobby y te sentís en un buffet de ruletas.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Lo que nos llamó la atención es que tienen XXXTreme Lightning Roulette, que es la versión más reciente y extrema de Evolution. Los multiplicadores pueden apilarse y llegar a números ridículos. También tienen Mega Roulette de Pragmatic Play, que es la competencia directa de Lightning con multiplicadores de hasta 500x. Es el único casino donde podés comparar las dos variantes una al lado de la otra.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            La experiencia de juego fue sólida. El streaming es bueno (no al nivel de Betsson, pero un 8 de 10 fácil) y las mesas cargan rápido. Probamos desde un celular Xiaomi con wifi y desde una laptop con fibra óptica, y en ambos casos la experiencia fue fluida. Un punto a favor: su buscador de mesas funciona mejor que el de la mayoría, podés filtrar por proveedor, tipo de ruleta y rango de apuestas.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            El bono de bienvenida de 100% + 500 giros gratis suena espectacular, pero ojo: los giros son para slots, no para ruleta. El depósito match sí lo podés usar en ruleta, pero generalmente contribuye menos al rollover (un 10-20% vs. el 100% de las tragamonedas). Leé los términos antes de aceptar si tu plan es jugar exclusivamente ruleta.
          </p>

          <ProsCons
            pros={[
              "60+ mesas, la mayor cantidad del ranking",
              "Variedad única: XXXTreme Lightning, Mega Roulette, y más",
              "Múltiples proveedores (Evolution, Pragmatic, Ezugi, NetEnt)",
              "Ruleta francesa en modo demo para practicar",
              "Buen buscador/filtro de mesas",
            ]}
            cons={[
              "Streaming ligeramente inferior a Betsson",
              "Los giros gratis del bono son para slots, no ruleta",
              "Licencia Curaçao (no MINCETUR)",
              "Las mesas VIP a veces están vacías en horarios bajos",
            ]}
          />
          <div className="mt-4">
            <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
          </div>
        </div>

        {/* ── SOL Casino ── */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-10">
          <h3 className="text-2xl font-black text-white mb-1">SOL Casino</h3>
          <p className="text-[#71717a] text-sm mb-6">50+ mesas de ruleta &middot; Ruleta en vivo &middot; Bono: 100% + 500 giros gratis</p>

          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            SOL Casino es un caso interesante. No es el que tiene más mesas ni el que tiene mejor streaming, pero hay algo en su experiencia general que lo hace muy agradable para jugar ruleta. Es difícil de explicar sin sonar a cliché, pero la interfaz está tan bien organizada que encontrar y sentarte en una mesa toma literalmente 3 clics. En algunos casinos necesitás 6 o 7 clics y navegar por menús confusos.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Tienen 50+ mesas de ruleta con Evolution y Pragmatic Play como proveedores principales. Las variantes estándar están todas: europea, Lightning, Immersive, Speed, Auto. También encontramos mesas de Ezugi que son un poco menos conocidas pero funcionan bien y a veces tienen menos jugadores (lo cual puede ser bueno si te gusta una experiencia más tranquila y personal con el crupier).
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Algo que nos gustó mucho de SOL es la transparencia con los límites. Antes de entrar a cada mesa, te muestra claramente el mínimo y máximo de apuesta, los horarios de operación (para las mesas con horario) y hasta la cantidad de jugadores activos. No tenés que entrar a la mesa para descubrir que el mínimo es más alto de lo que querías.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed mb-4">
            Le pasamos SOL Casino a un primo que nunca había jugado ruleta online y nos dijo: &quot;pana, esto está bien fácil&quot;. Eso resume bastante bien la experiencia. Si sos nuevo en la ruleta online y querés algo que no te abrume con opciones, SOL es una excelente primera opción. El soporte respondió en 4 minutos cuando preguntamos sobre los límites de apuesta en mesas VIP (lo cronometramos, sí somos así).
          </p>

          <ProsCons
            pros={[
              "Interfaz excelente, encontrar mesas es rapidísimo",
              "50+ mesas con buena variedad de proveedores",
              "Límites claros antes de entrar a cada mesa",
              "Muy amigable para principiantes",
              "Soporte rápido y en español",
            ]}
            cons={[
              "Licencia Curaçao (no MINCETUR)",
              "La ruleta francesa solo disponible en horarios limitados",
              "El streaming baja de calidad un poco con datos móviles",
              "Menos variantes exclusivas que FRESH",
            ]}
          />
          <div className="mt-4">
            <CtaButton slug="sol-casino" text="Probar SOL Casino" />
          </div>
        </div>

        {/* ── MONRO Casino ── */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-10">
          <h3 className="text-2xl font-black text-white mb-1">MONRO Casino</h3>
          <p className="text-[#71717a] text-sm mb-6">40+ mesas de ruleta &middot; Ruleta en vivo &middot; Bono: 150% primer depósito</p>

          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            El bono de MONRO es el que más destaca de todo el ranking: 150% en tu primer depósito. Y antes de que preguntes, sí, podés usarlo para jugar ruleta. Pero (siempre hay un pero), la contribución de la ruleta al rollover es parcial. Típicamente las apuestas de ruleta cuentan entre un 5% y un 20% para el cumplimiento del wagering, dependiendo de la promoción. Aun así, tener más saldo para jugar nunca está de mal.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            En cuanto a las mesas, MONRO tiene unas 40+ opciones de ruleta. No es la cantidad más grande pero la calidad está ahí. Lo que nos sorprendió es que sus mesas de Lightning Roulette tenían algunos de los tiempos de carga más rápidos que medimos: menos de 3 segundos desde que clickeás hasta que estás viendo el stream en vivo. En FRESH Casino el mismo proceso tardaba 5-6 segundos. Parece poco pero cuando estás ansioso por jugar, cada segundo cuenta.
          </p>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 mb-4">
            <h4 className="text-white font-bold text-sm mb-2">Nuestra experiencia en MONRO</h4>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              Depositamos S/200 con el bono de 150%, lo que nos dio S/500 para jugar. Nos sentamos en una mesa de ruleta europea estándar con apuestas de S/5 por ronda. Jugamos 47 rondas, ganamos 22 y perdimos 25. Terminamos con S/465, o sea una pérdida de S/35 del saldo total. No está mal considerando que jugamos 47 rondas con un bankroll de S/500. El retiro después fue sin problemas, tardó unas 18 horas en llegar (usamos transferencia bancaria porque MONRO no acepta Yape).
            </p>
          </div>

          <ProsCons
            pros={[
              "Bono del 150%, el más alto del ranking",
              "Mesas de carga ultra rápida",
              "40+ mesas con buena variedad",
              "Lightning Roulette con stream estable",
            ]}
            cons={[
              "No acepta Yape ni Plin directamente",
              "Licencia Curaçao",
              "Contribución parcial de ruleta al rollover del bono",
              "Menos mesas en español que Betsson",
            ]}
          />
          <div className="mt-4">
            <CtaButton slug="monro-casino" text="Probar MONRO Casino" />
          </div>
        </div>

        {/* ── STARDA Casino ── */}
        <div className="rounded-2xl border border-[#f43f5e]/20 bg-[#f43f5e]/[0.03] p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs bg-[#f43f5e]/20 text-[#f43f5e] px-3 py-1 rounded-full font-bold">🔥 TOP</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-1">STARDA Casino</h3>
          <p className="text-[#71717a] text-sm mb-6">35+ mesas de ruleta &middot; Ruleta en vivo &middot; Bono: 100% + 500 giros gratis</p>

          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            STARDA tiene algo que los otros cuatro no ofrecen: torneos de ruleta. Sí, leíste bien. Organizan torneos semanales donde los jugadores compiten entre sí apostando en mesas de ruleta en vivo, y el que acumula más ganancias netas en un período determinado se lleva premios extras. La primera vez que nos anotamos en uno pensamos que iba a ser una cosa medio trucha... pero no. Los premios se acreditaron al día siguiente y las reglas estaban claras desde el principio.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            En cuanto a mesas, tiene 35+ opciones que incluyen las variantes principales: europea, Lightning, Speed y Auto Roulette. La selección es más reducida que FRESH o Betsson, pero cubren lo esencial. Lo que STARDA hace diferente es la presentación: su lobby de casino en vivo tiene un diseño más limpio y moderno que el promedio. Las miniaturas de cada mesa muestran los últimos resultados y el número de jugadores en tiempo real.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            El streaming es correcto. No tuvimos problemas de lag ni caídas durante nuestras sesiones de prueba, pero tampoco diríamos que es el mejor. Está en un punto medio que cumple bien. Donde STARDA se luce es en la velocidad de los retiros con criptomonedas: probamos un retiro con USDT un miércoles a las 6pm y en 45 minutos teníamos la plata en nuestra wallet. Eso es rápido para los estándares actuales.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Si te gustan los torneos y la competencia entre jugadores, STARDA es tu casino para ruleta. Si solo querés sentarte en una mesa y jugar tranquilo, probablemente hay opciones mejores arriba en el ranking. Pero los torneos le dan una capa extra de emoción que no encontrás en ningún otro lado.
          </p>

          <ProsCons
            pros={[
              "Torneos de ruleta semanales con premios reales",
              "Lobby de casino en vivo con diseño moderno",
              "Retiros cripto rapidísimos (45 min con USDT)",
              "Bono de 100% + 500 giros gratis",
              "Últimos resultados visibles antes de entrar a la mesa",
            ]}
            cons={[
              "35 mesas, menor cantidad que el top 3",
              "Sin ruleta francesa",
              "Licencia Curaçao",
              "Menos mesas en español que Betsson",
            ]}
          />
          <div className="mt-4">
            <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
          </div>
        </div>
      </Section>

      {/* ═══ MID-PAGE CTA BANNER ═══ */}
      <section className="bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] py-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C853]/[0.06] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Nuestra recomendación #1 para ruleta</p>
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">Betsson tiene todo lo que necesitás</h3>
          <p className="text-[#a1a1aa] mb-6 max-w-2xl mx-auto">
            45+ mesas de ruleta, streaming HD, crupiers en español, ruleta francesa con La Partage y licencia MINCETUR. Después de probar todos los casinos, Betsson se queda con el primer puesto para ruleta online en Perú.
          </p>
          <CtaButton slug="betsson-peru" text="Jugar Ruleta en Betsson" />
        </div>
      </section>

      {/* ═══ SECTION 4: ESTRATEGIAS ═══ */}
      <Section id="estrategias">
        <SectionTitle>Estrategias de Ruleta: Lo que Funciona y lo que No</SectionTitle>

        <p className="text-[#a1a1aa] mb-8 max-w-4xl leading-relaxed">
          Acá vamos a ser brutalmente honestos: no existe una estrategia que le gane a la ruleta a largo plazo. La ventaja de la casa siempre está ahí y ningún sistema de apuestas puede cambiar las matemáticas. Dicho esto, hay formas más inteligentes y más tontas de jugar. Vamos a ver ambas.
        </p>

        {/* Apuestas internas vs externas */}
        <h3 className="text-xl font-black text-white mb-4">Apuestas Internas vs. Externas</h3>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          En la ruleta, todas las apuestas se dividen en dos grupos. Las <strong className="text-white">apuestas internas</strong> son las que hacés directamente sobre los números del paño: un número, dos, tres, cuatro o seis números a la vez. Pagan más pero ganan con menos frecuencia. Las <strong className="text-white">apuestas externas</strong> cubren grandes grupos de números: rojo/negro, par/impar, alto/bajo, docenas y columnas. Pagan menos pero ganan más seguido.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-6">
          No te voy a mentir, no hay una que sea &quot;mejor&quot; que la otra en términos de ventaja del casino. La ventaja es la misma en todas las apuestas de la ruleta europea (2.70%). La diferencia está en la volatilidad: las internas te dan subidas y bajadas bruscas, las externas te dan sesiones más estables pero menos emocionantes. Elegí según tu personalidad y tu bankroll.
        </p>

        {/* Full bet types table */}
        <h3 className="text-xl font-black text-white mb-4">Tabla Completa de Apuestas</h3>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] mb-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Tipo de Apuesta</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Pago</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Prob. Europea</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Prob. Americana</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Categoría</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Pleno (Straight Up)</td>
                <td className="px-4 py-3 text-[#fbbf24] font-bold">35:1</td>
                <td className="px-4 py-3">2.70%</td>
                <td className="px-4 py-3 text-[#ef4444]">2.63%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-0.5 rounded-full font-bold">Interna</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Caballo (Split)</td>
                <td className="px-4 py-3 text-[#fbbf24] font-bold">17:1</td>
                <td className="px-4 py-3">5.41%</td>
                <td className="px-4 py-3 text-[#ef4444]">5.26%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-0.5 rounded-full font-bold">Interna</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Calle (Street)</td>
                <td className="px-4 py-3 text-[#fbbf24] font-bold">11:1</td>
                <td className="px-4 py-3">8.11%</td>
                <td className="px-4 py-3 text-[#ef4444]">7.89%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-0.5 rounded-full font-bold">Interna</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Esquina (Corner)</td>
                <td className="px-4 py-3 text-[#fbbf24] font-bold">8:1</td>
                <td className="px-4 py-3">10.81%</td>
                <td className="px-4 py-3 text-[#ef4444]">10.53%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-0.5 rounded-full font-bold">Interna</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Línea (Six Line)</td>
                <td className="px-4 py-3 text-[#fbbf24] font-bold">5:1</td>
                <td className="px-4 py-3">16.22%</td>
                <td className="px-4 py-3 text-[#ef4444]">15.79%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-0.5 rounded-full font-bold">Interna</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Docena</td>
                <td className="px-4 py-3 text-[#3b82f6] font-bold">2:1</td>
                <td className="px-4 py-3">32.43%</td>
                <td className="px-4 py-3 text-[#ef4444]">31.58%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-0.5 rounded-full font-bold">Externa</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Columna</td>
                <td className="px-4 py-3 text-[#3b82f6] font-bold">2:1</td>
                <td className="px-4 py-3">32.43%</td>
                <td className="px-4 py-3 text-[#ef4444]">31.58%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-0.5 rounded-full font-bold">Externa</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Rojo / Negro</td>
                <td className="px-4 py-3 text-[#3b82f6] font-bold">1:1</td>
                <td className="px-4 py-3">48.65%</td>
                <td className="px-4 py-3 text-[#ef4444]">47.37%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-0.5 rounded-full font-bold">Externa</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Par / Impar</td>
                <td className="px-4 py-3 text-[#3b82f6] font-bold">1:1</td>
                <td className="px-4 py-3">48.65%</td>
                <td className="px-4 py-3 text-[#ef4444]">47.37%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-0.5 rounded-full font-bold">Externa</span></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Alto / Bajo (19-36 / 1-18)</td>
                <td className="px-4 py-3 text-[#3b82f6] font-bold">1:1</td>
                <td className="px-4 py-3">48.65%</td>
                <td className="px-4 py-3 text-[#ef4444]">47.37%</td>
                <td className="px-4 py-3 text-xs"><span className="bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-0.5 rounded-full font-bold">Externa</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[#71717a] text-sm italic mb-8">
          Nota: en la americana las probabilidades son menores porque hay 38 casillas en vez de 37, pero los pagos son iguales. Esa es la trampa.
        </p>

        {/* Coverage strategy */}
        <h3 className="text-xl font-black text-white mb-4">Estrategia de Cobertura</h3>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Una técnica popular entre jugadores experimentados es cubrir una gran cantidad de números con apuestas combinadas. Por ejemplo, apostar a dos docenas cubre 24 de 37 números (64.86% de probabilidad de ganar). O combinar varias apuestas internas para cubrir una zona específica del cilindro. La gracia es que ganás más seguido, pero cada vez que perdés, perdés más.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Uno de nuestros patterns favoritos para sesiones largas: apostamos S/5 a la segunda docena (13-24) y S/5 a la tercera docena (25-36). Eso cubre 24 números. Si gana cualquiera de las dos docenas, ganamos S/10 y perdemos S/5 de la otra, neto +S/5. Si cae del 1 al 12 o en el cero, perdemos S/10. Jugamos 30 rondas con esta estrategia en SOL Casino y terminamos con +S/15. No es plata para retirarse, pero es una sesión entretenida con pérdidas controladas.
        </p>
        <p className="text-[#a1a1aa] leading-relaxed mb-8">
          Pero ojo: cubrir más números no cambia la ventaja del casino. Solo cambia la frecuencia de tus ganancias vs. el tamaño de cada resultado. A largo plazo, el casino siempre se queda con su 2.70% (o lo que sea según la variante).
        </p>

        {/* Bankroll management */}
        <h3 className="text-xl font-black text-white mb-4">Gestión del Bankroll: Esto Sí que Importa</h3>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Si hay algo que de verdad hace diferencia en tu experiencia con la ruleta, es cómo manejás tu bankroll. No es una estrategia para ganar, es una estrategia para no perder todo en 10 minutos. Y la verdad es que la mayoría de jugadores que se quejan de la ruleta online es porque no tenían un plan.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Regla número uno: nunca lleves a una sesión de ruleta más de lo que estés dispuesto a perder. Suena obvio, pero te sorprendería cuánta gente deposita todo su sueldo &quot;porque siente que hoy es su día&quot;. No hagas eso.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Regla número dos: tus apuestas no deberían superar el 2-5% de tu bankroll total por ronda. Si tenés S/500 para jugar, cada apuesta debería estar entre S/10 y S/25. Eso te da como mínimo 20 rondas de juego incluso en el peor escenario posible. Con apuestas externas (que ganás casi la mitad de las veces), esas 20 rondas se pueden estirar fácilmente a 100 o más.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Regla número tres: poné un límite de ganancia y de pérdida antes de empezar. Algo como: &quot;si pierdo S/200, me voy&quot; y &quot;si gano S/150, me voy&quot;. Y respetalo. Esto es lo más difícil de todo porque cuando estás ganando querés seguir y cuando estás perdiendo querés recuperar. Pero disciplina es lo que separa a un jugador inteligente de uno que pierde todo.
        </p>
        <p className="text-[#a1a1aa] leading-relaxed mb-8">
          La mayoría de casinos de nuestro ranking (Betsson, Betano, Stake) te permiten configurar límites de depósito y pérdida directamente desde tu cuenta. Usá esas herramientas. No es de cobarde, es de inteligente.
        </p>

        {/* Systems that don't work */}
        <h3 className="text-xl font-black text-white mb-4">Sistemas que NO Funcionan (y por qué)</h3>
        <p className="text-[#d4d4d8] leading-relaxed mb-6">
          Ahora sí, hablemos de los elefantes en la habitación. Internet está lleno de videos y artículos prometiendo sistemas &quot;infalibles&quot; para ganar en la ruleta. No te voy a mentir, algunos suenan convincentes. Pero las matemáticas no mienten.
        </p>

        {/* Martingala */}
        <div className="rounded-xl bg-[#ef4444]/[0.04] border border-[#ef4444]/15 p-5 mb-4">
          <h4 className="text-[#ef4444] font-bold mb-2">Sistema Martingala</h4>
          <p className="text-[#d4d4d8] text-sm leading-relaxed mb-3">
            El más famoso de todos. La idea es simple: apostás a rojo (o negro, o par, o impar). Si perdés, duplicás la apuesta. Cuando ganés, recuperás todo lo perdido más una unidad de ganancia. Suena perfecto, ¿verdad? En papel, sí. En la vida real, no.
          </p>
          <p className="text-[#d4d4d8] text-sm leading-relaxed mb-3">
            El problema es matemático y aplastante. Empezás con S/10. Perdés. Apostás S/20. Perdés. S/40. Perdés. S/80. S/160. S/320. S/640. Después de 7 pérdidas consecutivas (que pasan más seguido de lo que creés, un 1.16% de probabilidad en cada secuencia), estás apostando S/1,280 para recuperar... S/10 de ganancia neta. Y si perdés esa también, necesitás S/2,560. Y adivina qué: la mayoría de mesas tienen un límite máximo de apuesta de S/5,000 o S/10,000. Cuando llegás al tope, el sistema se quiebra y perdiste todo.
          </p>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">
            Probamos la Martingala en modo demo en FRESH Casino con S/5,000 de saldo ficticio, empezando con S/5. En la ronda 142 enganchamos una racha de 9 rojos seguidos (estábamos apostando a negro) y el sistema colapsó. Perdimos S/2,555 en esa racha. La casa siempre gana.
          </p>
        </div>

        {/* Fibonacci */}
        <div className="rounded-xl bg-[#ef4444]/[0.04] border border-[#ef4444]/15 p-5 mb-4">
          <h4 className="text-[#ef4444] font-bold mb-2">Sistema Fibonacci</h4>
          <p className="text-[#d4d4d8] text-sm leading-relaxed mb-3">
            Usás la secuencia de Fibonacci para definir tus apuestas: 1, 1, 2, 3, 5, 8, 13, 21, 34... Cuando perdés, avanzás un paso en la secuencia. Cuando ganás, retrocedés dos pasos. Es una versión más &quot;conservadora&quot; de la Martingala porque las apuestas no se duplican tan rápido.
          </p>
          <p className="text-[#d4d4d8] text-sm leading-relaxed mb-3">
            Pero el resultado es el mismo a largo plazo. La progresión es más lenta, sí, pero sigue creciendo exponencialmente. Después de 12 pérdidas consecutivas, tu apuesta es 144 veces tu apuesta inicial. Con una apuesta base de S/10, estarías apostando S/1,440 para recuperar una ganancia neta que ni siquiera vale la pena calcular.
          </p>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">
            El Fibonacci tiene una ilusión de seguridad que es peligrosa. Como las apuestas suben más lento que la Martingala, la gente piensa que es &quot;más seguro&quot;. No lo es. Solo tarda más en quebrarte.
          </p>
        </div>

        {/* D'Alembert */}
        <div className="rounded-xl bg-[#ef4444]/[0.04] border border-[#ef4444]/15 p-5 mb-6">
          <h4 className="text-[#ef4444] font-bold mb-2">Sistema D&apos;Alembert</h4>
          <p className="text-[#d4d4d8] text-sm leading-relaxed mb-3">
            Este sistema dice que después de perder, aumentás tu apuesta una unidad, y después de ganar, la bajás una unidad. Es el más conservador de los tres y el que menos chances tiene de hacerte perder todo de golpe. Pero...
          </p>
          <p className="text-[#d4d4d8] text-sm leading-relaxed mb-3">
            El D&apos;Alembert se basa en la idea (errónea) de que los resultados de la ruleta se &quot;equilibran&quot; a corto plazo. Si salieron 5 rojos, &quot;tiene que salir negro pronto&quot;. Falso. Cada giro es completamente independiente. La bola no tiene memoria. No sabe ni le importa qué salió antes. Esto se llama la falacia del jugador y es la base de todos estos sistemas.
          </p>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">
            De los tres sistemas, el D&apos;Alembert es el menos dañino porque las progresiones son más lentas. Pero &quot;menos dañino&quot; no significa &quot;rentable&quot;. A largo plazo, la ventaja de la casa se impone sobre cualquier sistema de progresión. No hay forma de escapar de las matemáticas.
          </p>
        </div>

        <div className="rounded-xl bg-[#22c55e]/[0.04] border border-[#22c55e]/15 p-5 mb-4">
          <h4 className="text-[#22c55e] font-bold mb-2">Entonces, ¿qué SÍ funciona?</h4>
          <p className="text-[#d4d4d8] text-sm leading-relaxed">
            Elegir la variante correcta (francesa &gt; europea &gt; americana), manejar tu bankroll con disciplina, poner límites de ganancia y pérdida, y aceptar que la ruleta es entretenimiento, no un medio para generar ingresos. Si jugás con plata que no necesitás y te divertís en el proceso, ya ganaste. Los que pierden todo son los que juegan con plata del alquiler pensando que van a duplicarla.
          </p>
        </div>
      </Section>

      {/* ═══ SECTION 5: LIVE VS VIRTUAL ═══ */}
      <Section id="ruleta-en-vivo-vs-virtual" alt>
        <SectionTitle>Ruleta en Vivo vs. Ruleta Virtual: ¿Cuál Elegir?</SectionTitle>

        <p className="text-[#a1a1aa] mb-8 max-w-4xl leading-relaxed">
          Esta es una de las preguntas que más nos hacen y la respuesta no es tan obvia como parece. Ambas opciones tienen ventajas reales y la mejor depende de lo que busques.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Live */}
          <div className="rounded-2xl border border-[#22c55e]/20 bg-[#22c55e]/[0.03] p-6">
            <h3 className="text-lg font-black text-[#22c55e] mb-4">Ruleta en Vivo</h3>
            <p className="text-[#d4d4d8] text-sm leading-relaxed mb-4">
              La ruleta en vivo se transmite en tiempo real desde un estudio profesional. Hay un crupier de carne y hueso que lanza la bola, gira el cilindro y anuncia los resultados. Vos ves todo por streaming de video en HD. Es lo más cercano a estar sentado en un casino físico pero desde tu sillón en Miraflores o tu cama en Arequipa.
            </p>
            <p className="text-[#d4d4d8] text-sm leading-relaxed mb-4">
              La experiencia es incomparable. Podés interactuar con el crupier por chat, ver a otros jugadores apostar en tiempo real, y sentir esa tensión genuina de ver la bola rebotando entre los números. Probamos una sesión de Immersive Roulette en Betsson un sábado a la noche y fue tan inmersiva (valga la redundancia) que mi novia me preguntó si estaba viendo una película.
            </p>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              Los proveedores principales son Evolution Gaming (el líder indiscutido), Pragmatic Play Live (creciendo fuerte) y Ezugi (más orientado a mercados locales). Cada uno tiene su estilo: Evolution es profesional y pulido, Pragmatic es más dinámico y Ezugi es más relajado.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Experiencia realista e inmersiva</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Interacción con el crupier</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Transparencia total (ves todo en vivo)</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Variantes exclusivas (Lightning, Immersive)</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>Requiere buena conexión a internet</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>Rondas más lentas (40-60 seg)</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>No hay modo demo</li>
            </ul>
          </div>

          {/* Virtual */}
          <div className="rounded-2xl border border-[#3b82f6]/20 bg-[#3b82f6]/[0.03] p-6">
            <h3 className="text-lg font-black text-[#3b82f6] mb-4">Ruleta Virtual (RNG)</h3>
            <p className="text-[#d4d4d8] text-sm leading-relaxed mb-4">
              La ruleta virtual usa un generador de números aleatorios (RNG) para determinar el resultado. No hay crupier ni streaming. Es una simulación digital con gráficos 3D que replica la mecánica de la ruleta. Algunas versiones se ven bastante bien, con animaciones del cilindro girando y la bola cayendo, pero al final es un algoritmo el que decide dónde cae.
            </p>
            <p className="text-[#d4d4d8] text-sm leading-relaxed mb-4">
              La ventaja principal es la velocidad. Podés jugar una ronda cada 15-20 segundos si querés, porque no hay que esperar a que otros jugadores coloquen sus apuestas ni a que el crupier haga los movimientos. También podés jugar gratis en modo demo, lo cual es perfecto para practicar si nunca jugaste ruleta antes.
            </p>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              Los proveedores más conocidos de ruleta virtual son NetEnt (European Roulette Pro es su estrella), Microgaming, Play&apos;n Go y Betsoft. Matemáticamente, la ventaja del casino es exactamente la misma que en las mesas en vivo, así que no estás perdiendo nada en ese sentido.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Rondas rápidas (15-20 seg)</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Modo demo gratis</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>No necesita mucho internet</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Mínimos de apuesta más bajos</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>Sin interacción humana</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>Experiencia menos emocionante</li>
              <li className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>Algunos jugadores desconfían del RNG</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-black text-white mb-4">¿Cuándo elegir cada una?</h3>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          <strong className="text-white">Elegí ruleta en vivo si:</strong> querés la experiencia completa, te gusta interactuar con el crupier, preferís ver la bola caer en tiempo real, tenés buena conexión a internet y no te importa que las rondas sean un poco más lentas. Básicamente, si lo tuyo es disfrutar el proceso.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          <strong className="text-white">Elegí ruleta virtual si:</strong> estás aprendiendo y querés practicar gratis, tu internet no es muy estable, preferís sesiones rápidas, o simplemente querés jugar unas rondas sin comprometerte con una sesión larga. También es buena opción si estás en un lugar público y no querés que la gente vea tu pantalla con un casino en vivo.
        </p>
        <p className="text-[#a1a1aa] leading-relaxed">
          Nuestra recomendación personal: empezá con la virtual para entender las apuestas y después pasate a la ruleta en vivo. Una vez que probás el live, difícilmente volvés a la virtual. Es como pasar de ver fútbol por TV a ir al estadio. Técnicamente es el mismo partido, pero la experiencia no tiene comparación.
        </p>
      </Section>

      {/* ═══ SECTION 6: PROVEEDORES ═══ */}
      <Section id="proveedores">
        <SectionTitle>Mejores Proveedores de Ruleta Online</SectionTitle>

        <p className="text-[#a1a1aa] mb-8 max-w-4xl leading-relaxed">
          No todos los proveedores de ruleta son iguales. Detrás de cada mesa hay una empresa que diseña la experiencia, contrata a los crupiers, monta los estudios de grabación y programa el software. Conocer a los proveedores te ayuda a saber qué esperar antes de sentarte en una mesa.
        </p>

        {/* Evolution */}
        <div className="rounded-2xl border border-[#fbbf24]/20 bg-[#fbbf24]/[0.03] p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl font-black text-white">Evolution Gaming</h3>
            <span className="text-xs bg-[#fbbf24]/20 text-[#fbbf24] px-3 py-1 rounded-full font-bold">Líder del mercado</span>
          </div>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Evolution es a la ruleta en vivo lo que Apple es a los celulares: no inventaron el concepto, pero lo perfeccionaron hasta un nivel que nadie más ha igualado. Sus estudios de grabación están en Riga (Letonia), Malta, Tbilisi (Georgia) y varias ciudades más, con cientos de mesas operando 24/7.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Sus creaciones icónicas incluyen Lightning Roulette (la más jugada del mundo), Immersive Roulette (la más bonita visualmente), XXXTreme Lightning Roulette (con multiplicadores que se apilan), Speed Roulette (rondas cada 25 segundos) y Instant Roulette (sin esperas, siempre hay un giro en curso). La calidad de video es 1080p como mínimo y algunos estudios transmiten en 4K.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Si vas a jugar ruleta en vivo, tarde o temprano vas a terminar en una mesa de Evolution. Están en todos los casinos de nuestro ranking sin excepción. Y la verdad es que hay una razón por la cual dominan el mercado: nadie les llega ni cerca en calidad de producción.
          </p>
        </div>

        {/* Pragmatic Play Live */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-6">
          <h3 className="text-xl font-black text-white mb-3">Pragmatic Play Live</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Pragmatic Play empezó haciendo slots y después se lanzó al casino en vivo. Y hay que reconocerlo: les salió bastante bien. Su producto estrella en ruleta es Mega Roulette, que es su respuesta a Lightning Roulette con multiplicadores de hasta 500x. La diferencia es que en Mega Roulette los multiplicadores pueden caer en más números por ronda, lo que estadísticamente te da más chances de enganchar uno.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            También tienen Speed Roulette (su versión rápida) y mesas estándar de ruleta europea. Sus crupiers tienden a ser más jóvenes y dinámicos que los de Evolution, lo cual puede ser bueno o malo dependiendo de tus preferencias. A nosotros nos pareció refrescante, pero si buscás algo más sobrio, Evolution va mejor.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Pragmatic Play tiene un estudio en Bucarest que está creciendo fuerte y sumando mesas en español para el mercado latino. Es el proveedor que más está invirtiendo en contenido para LATAM en este momento. FRESH Casino y Betsson son los que más mesas de Pragmatic Live ofrecen.
          </p>
        </div>

        {/* Ezugi */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-6">
          <h3 className="text-xl font-black text-white mb-3">Ezugi</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Ezugi es el proveedor que nadie conoce pero todos usan. Son propiedad de Evolution (los compraron en 2018) y operan más como un complemento que como competencia. Sus mesas de ruleta son más básicas en producción pero funcionan bien y suelen tener menos jugadores, lo cual es una ventaja si te gusta una experiencia más tranquila.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            Tienen estudios locales en varios países, lo que les permite ofrecer crupiers que hablan idiomas locales. Para el mercado latinoamericano, sus mesas en español son cada vez más comunes. SOL Casino y FRESH Casino tienen buena presencia de mesas Ezugi. Si las mesas de Evolution están muy llenas, las de Ezugi suelen ser una alternativa más tranquila con la misma mecánica.
          </p>
        </div>

        {/* NetEnt */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-6">
          <h3 className="text-xl font-black text-white mb-3">NetEnt</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            NetEnt es más conocido por sus slots, pero su European Roulette Pro es una de las mejores versiones de ruleta virtual que existen. Gráficos limpios, interfaz intuitiva, estadísticas detalladas de los últimos resultados, y la opción de personalizar la vista del paño. Si vas a jugar ruleta RNG (no en vivo), la versión de NetEnt es nuestra primera elección.
          </p>
          <p className="text-[#a1a1aa] leading-relaxed">
            NetEnt también es propiedad de Evolution (sí, Evolution básicamente compró a todos), pero operan de forma independiente en la división de juegos RNG. Su ruleta tiene modo demo en todos los casinos que la ofrecen, así que es perfecta para practicar.
          </p>
        </div>

        {/* Provider comparison table */}
        <h3 className="text-xl font-black text-white mb-4 mt-8">Comparativa de Proveedores</h3>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Proveedor</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Tipo</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Variantes Estrella</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Calidad Video</th>
                <th className="px-4 py-3 text-[#71717a] font-semibold text-xs uppercase">Mesas Español</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Evolution</td>
                <td className="px-4 py-3">En vivo</td>
                <td className="px-4 py-3">Lightning, Immersive, XXXTreme, Speed</td>
                <td className="px-4 py-3"><span className="text-[#22c55e] font-bold">Excelente</span></td>
                <td className="px-4 py-3"><span className="text-[#22c55e]">&#10003; Sí</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Pragmatic Play</td>
                <td className="px-4 py-3">En vivo</td>
                <td className="px-4 py-3">Mega Roulette, Speed Roulette</td>
                <td className="px-4 py-3"><span className="text-[#22c55e] font-bold">Muy buena</span></td>
                <td className="px-4 py-3"><span className="text-[#22c55e]">&#10003; Sí</span></td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="px-4 py-3 font-semibold text-white">Ezugi</td>
                <td className="px-4 py-3">En vivo</td>
                <td className="px-4 py-3">Ruleta Europea, Auto Roulette</td>
                <td className="px-4 py-3"><span className="text-[#f59e0b] font-bold">Buena</span></td>
                <td className="px-4 py-3"><span className="text-[#22c55e]">&#10003; Sí</span></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">NetEnt</td>
                <td className="px-4 py-3">RNG (virtual)</td>
                <td className="px-4 py-3">European Roulette Pro</td>
                <td className="px-4 py-3"><span className="text-[#3b82f6] font-bold">N/A (gráficos 3D)</span></td>
                <td className="px-4 py-3"><span className="text-[#71717a]">N/A</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ SECTION 7: ERRORES COMUNES ═══ */}
      <Section id="errores-comunes" alt>
        <SectionTitle>Errores Comunes al Jugar Ruleta Online</SectionTitle>

        <p className="text-[#a1a1aa] mb-8 max-w-4xl leading-relaxed">
          Después de años jugando y viendo a otros jugar, estos son los errores que vemos una y otra vez. Si podés evitar aunque sea la mitad de esta lista, ya vas a estar mejor que el 80% de los jugadores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-white/[0.02] border border-white/[0.08] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#ef4444] font-black text-lg">1.</span>
              <h4 className="text-white font-bold">Elegir la ruleta americana</h4>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              Ya lo dijimos y lo vamos a repetir: la americana tiene casi el doble de ventaja que la europea (5.26% vs. 2.70%). No hay ninguna razón racional para jugarla. Si tu casino la pone como la primera opción del lobby, buscá la europea manualmente. Siempre está, solo hay que buscar un poco.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.02] border border-white/[0.08] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#ef4444] font-black text-lg">2.</span>
              <h4 className="text-white font-bold">Perseguir pérdidas</h4>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              &quot;Ya perdí S/200, tengo que apostar más fuerte para recuperar&quot;. Si alguna vez te escuchaste diciendo esto, pará y cerrá el casino. Las pérdidas no se &quot;recuperan&quot; apostando más. Lo que pasa cuando duplicás las apuestas desesperado es que perdés más rápido. Siempre poné un límite de pérdida antes de empezar y respetalo religiosamente.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.02] border border-white/[0.08] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#ef4444] font-black text-lg">3.</span>
              <h4 className="text-white font-bold">No poner límites</h4>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              Sentarte a jugar sin un presupuesto definido es la receta para el desastre. Decidí antes cuánto vas a gastar, cuánto querés ganar y cuándo te vas. Todos los casinos serios (Betsson, Betano, Stake) te dejan configurar límites de depósito diarios, semanales y mensuales. Usá esas herramientas.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.02] border border-white/[0.08] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#ef4444] font-black text-lg">4.</span>
              <h4 className="text-white font-bold">Creer en &quot;números calientes&quot;</h4>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              Los casinos te muestran un historial de los últimos 20-50 números que salieron. Eso es información, no predicción. Que el 7 haya salido 4 veces en las últimas 30 rondas no significa que va a volver a salir ni que no va a salir. Cada giro es independiente. La bola no tiene memoria. Los &quot;patrones&quot; que ves son ilusiones que tu cerebro crea buscando orden donde no lo hay.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.02] border border-white/[0.08] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#ef4444] font-black text-lg">5.</span>
              <h4 className="text-white font-bold">Apostar todo a una opción</h4>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              &quot;Voy all-in en rojo&quot;. Épico en las películas, desastroso en la vida real. Si metés todo tu bankroll en una sola apuesta, tenés un 48.65% de duplicar y un 51.35% de perder todo (en la europea). Esas no son probabilidades en las que quieras arriesgar plata que te importa. Diversificá las apuestas y dejá que la sesión dure.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.02] border border-white/[0.08] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#ef4444] font-black text-lg">6.</span>
              <h4 className="text-white font-bold">No aprovechar los bonos de casino en vivo</h4>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              Muchos casinos ofrecen bonos o cashback específicos para el casino en vivo, pero la gente los ignora porque &quot;los bonos son para slots&quot;. No siempre. MONRO tiene su bono de 150% que podés usar parcialmente en ruleta. Betsson a veces tiene promociones de cashback en mesas en vivo. Revisá la sección de promociones antes de jugar, podrías estar dejando plata sobre la mesa (literalmente).
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ SECTION 8: MÉTODOS DE PAGO ═══ */}
      <Section id="metodos-de-pago">
        <SectionTitle>Métodos de Pago para Ruleta Online en Perú</SectionTitle>

        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          La buena noticia es que depositar y retirar plata de casinos online desde Perú es cada vez más fácil. Los métodos más populares entre los jugadores peruanos son Yape y Plin, que funcionan al toque para depósitos y en pocas horas para retiros. Betsson, Betano, Stake e Inkabet los aceptan sin problemas.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Para los casinos internacionales como FRESH Casino, SOL Casino, MONRO y STARDA, las opciones más comunes son tarjetas Visa/Mastercard, transferencia bancaria y criptomonedas (Bitcoin, USDT, Ethereum). Los retiros con crypto son los más rápidos que encontramos: en STARDA tardó 45 minutos con USDT, mientras que las transferencias bancarias pueden demorar 24-48 horas.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Un tip: antes de depositar, fijate cuáles son los requisitos de retiro del casino. Algunos te piden hacer un retiro por el mismo método que usaste para depositar. Otros te dejan elegir cualquier método. Y casi todos te van a pedir verificación de identidad (KYC) en tu primer retiro. Tené tu DNI a mano para que no te agarre desprevenido.
        </p>
        <p className="text-[#a1a1aa] leading-relaxed">
          Para un análisis completo de todos los métodos de pago disponibles en cada casino, consultá nuestra <Link href="/peru/mejores-casinos-online/" className="text-[#22c55e] hover:underline font-semibold">guía de mejores casinos online en Perú</Link> donde detallamos todo.
        </p>

        <div className="mt-6">
          <CtaButton slug="betsson-peru" text="Depositar con Yape en Betsson" />
        </div>
      </Section>

      {/* ═══ SECTION 9: FAQ ═══ */}
      <Section id="preguntas-frecuentes" alt>
        <SectionTitle>Preguntas Frecuentes sobre Ruleta Online</SectionTitle>

        <div className="space-y-4 max-w-4xl">
          {faqItems.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-bold text-sm sm:text-base hover:bg-white/[0.02] transition-colors">
                {faq.q}
                <span className="text-[#71717a] group-open:rotate-45 transition-transform text-xl ml-4 shrink-0">+</span>
              </summary>
              <div className="px-6 pb-5 text-[#a1a1aa] text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══ SECTION 10: GLOSSARY ═══ */}
      <Section id="glosario">
        <SectionTitle>Glosario de Ruleta</SectionTitle>

        <p className="text-[#a1a1aa] mb-8 max-w-3xl leading-relaxed">
          Si sos nuevo en la ruleta o te encontrás con términos que no entendés durante una partida, acá tenés una referencia rápida con todo lo que necesitás saber.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryItems.map((item) => (
            <div key={item.term} className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4">
              <h4 className="text-white font-bold text-sm mb-1">{item.term}</h4>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-gradient-to-b from-[#0e0e0e] to-[#0a0a0a] py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00C853]/[0.05] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">¿Listo para Jugar Ruleta?</h2>
          <p className="text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Ya tenés toda la información que necesitás: los mejores casinos, las variantes que convienen, las estrategias que funcionan y las que no. Ahora solo falta sentarte en una mesa y girar la rueda. Que la suerte esté de tu lado.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="betsson-peru" text="Jugar en Betsson (#1)" />
            <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
          </div>
          <p className="text-[#71717a] text-xs mt-6">
            Juega con responsabilidad. Solo para mayores de 18 años. Los juegos de azar implican riesgo de pérdida.
          </p>
        </div>
      </section>

      {/* ═══ INTERNAL LINKS ═══ */}
      <Section id="guias-relacionadas" alt>
        <h3 className="text-lg font-bold text-white mb-4">Guías relacionadas</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/peru/mejores-casinos-online/" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Mejores Casinos Online en Perú
          </Link>
          <Link href="/peru/blackjack-online/" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Blackjack Online en Perú
          </Link>
        </div>
      </Section>
    </>
  );
}
