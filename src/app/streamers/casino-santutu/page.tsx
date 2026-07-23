import type { Metadata } from "next";
import Link from "next/link";
import CasinoRanking, { CasinoRankingItem } from "@/components/CasinoRanking";
import TableOfContents from "@/components/TableOfContents";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "¿En qué casino juega Santutu? Guía 2026",
  description:
    "Santutu juega en Stake, pero te mostramos dónde jugar con mejores bonos. Sus slots favoritos, sesiones virales y los mejores casinos online de Argentina.",
};

/* ───────── Ranking: afiliados Argentina primero, Stake (casino real de Santutu) después ───────── */
const ranking: CasinoRankingItem[] = [
  { rank: 1, name: "Betsson", slug: "betsson-argentina", bonus: "Hasta $350.000 + 200 Giros Gratis", rating: 9.5, highlight: true, badge: "⭐ Recomendado", infoText: "2 500+ juegos" },
  { rank: 2, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.3, badge: "🔥 TOP", infoText: "3 800+ juegos" },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.1, infoText: "4 000+ juegos" },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.0, infoText: "3 500+ juegos" },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, infoText: "4 500+ juegos" },
  { rank: 6, name: "Stake", slug: "stake", bonus: "Bono primer depósito + giros gratis", rating: 8.8, badge: "Santutu juega acá", infoText: "3 000+ juegos" },
];

const favoriteSlots = [
  { name: "Sweet Bonanza", provider: "Pragmatic Play", note: "Caramelos, frutas y cero líneas de pago: ganás juntando símbolos donde caigan, con tumbles y multiplicadores de hasta 100x en los giros gratis. El slot más famoso del streaming, y no de casualidad." },
  { name: "Gates of Olympus", provider: "Pragmatic Play", note: "Zeus tirando rayos y multiplicadores que caen también en el juego base. El mismo motor que Sweet Bonanza pero más bestia. Un clásico del slot-streaming argentino." },
  { name: "Sugar Rush", provider: "Pragmatic Play", note: "Grilla de 7x7 con zonas de multiplicador que se acumulan. Volatilidad alta de esa que te hace sufrir 40 giros y después te devuelve todo de una." },
  { name: "Dork Unit", provider: "Hacksaw Gaming", note: "Uno de los Hacksaw más jugados por Santu. Volatilidad altísima y un potencial de premio que da vértigo. Puro material para clip viral." },
  { name: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", note: "El western de la volatilidad extrema, con potencial de 12.500x. El típico slot que se juega para el clip, no para la guita." },
];

const faqItems = [
  {
    q: "¿En qué casino juega Santutu?",
    a: "Santutu juega principalmente en Stake, donde hace sus sesiones de slots en vivo desde Kick, muchas veces junto a otros streamers como Coscu. Eso sí: que Santu juegue ahí no significa que sea la mejor opción para vos. En nuestro ranking ponemos primero los casinos que probamos y recomendamos para Argentina (Betsson, STARDA, SOL, MONRO, FRESH), y dejamos a Stake en la lista por transparencia.",
  },
  {
    q: "¿Santutu juega en Stake de verdad?",
    a: "Sí, Santutu juega en Stake en sus streams de Kick, eso es verificable en sus propias transmisiones. Como pasa con casi todos los streamers de casino, hay un acuerdo comercial de por medio. Por eso conviene verlo como entretenimiento y no como un consejo: lo que un streamer gana en cámara, con su bankroll y su respaldo, no es lo que vos vas a ganar en tu casa.",
  },
  {
    q: "¿Qué slots juega Santutu?",
    a: "Sus favoritos son los pesos pesados de Pragmatic Play: Sweet Bonanza, Gates of Olympus y Sugar Rush. También se lo ve seguido en slots de Hacksaw como Dork Unit y Wanted Dead or a Wild, de volatilidad extrema. Todos son de los que dan esos momentos de pantalla explotada que funcionan tan bien en stream.",
  },
  {
    q: "¿Quién es Santutu?",
    a: "Santutu es Santiago Rodríguez Zahn, un streamer argentino conocido por sus sesiones explosivas de slots en Kick, donde supera los 300 mil seguidores. Comparte transmisiones con figuras como Coscu y se volvió uno de los nombres fuertes de la escena de casino en español. Además de slots, transmite Counter-Strike 2 y Just Chatting.",
  },
  {
    q: "¿Puedo jugar en los mismos casinos que Santutu desde Argentina?",
    a: "Sí, podés. Podés jugar slots como los de Santu en cualquiera de los casinos de nuestro ranking. Para Argentina, lo más recomendable es arrancar por Betsson (licencia LOTBA, bonos en pesos y Mercado Pago) o por los casinos de Royal Partners como STARDA y SOL, que tienen catálogos enormes de Pragmatic y Hacksaw y bonos más claros que Stake.",
  },
  {
    q: "¿Es legal jugar en casino online en Argentina?",
    a: "Sí, siempre que elijas un casino con licencia. En Argentina cada provincia regula lo suyo: Betsson, por ejemplo, tiene licencia LOTBA (de la Ciudad de Buenos Aires). Los casinos internacionales operan con licencia de Curaçao. Lo importante es elegir plataformas con licencia clara y buena reputación de pagos, jugar solo lo que estés dispuesto a perder, y recordar que es entretenimiento, no una fuente de ingresos.",
  },
  {
    q: "¿Cuánto ganó Santutu en el casino?",
    a: "Hay clips virales donde Santu festeja ganancias grandes en una sola sesión. Pero ojo: esos clips muestran los picos, no las sesiones donde perdió. A la larga, la casa siempre tiene ventaja, y un streamer juega con un bankroll y unas condiciones que vos no tenés. Tomá esos números como espectáculo, no como expectativa de lo que te va a pasar a vos.",
  },
  {
    q: "¿Puedo depositar con Mercado Pago?",
    a: "Sí, y es lo más práctico que hay en Argentina. Betsson y otros casinos aceptan Mercado Pago, transferencia bancaria y más. El depósito cae al toque y los retiros con Mercado Pago suelen llegar en menos de una hora. Stake, donde juega Santu, funciona más con cripto, así que para pagar como pagás siempre, los casinos del ranking te resultan más cómodos.",
  },
  {
    q: "¿Conviene jugar donde juega Santutu o en otro casino?",
    a: "Depende de tu perfil. Si ya manejás cripto y querés los juegos originals tipo Plinko o Crash, Stake tiene sentido. Pero si recién arrancás, querés bonos más claros y pagar con Mercado Pago, te conviene más Betsson o un casino de Royal Partners. Por eso en nuestro ranking esos van primero y Stake va sexto.",
  },
  {
    q: "¿Hay un código promocional de Stake de Santutu?",
    a: "En distintos momentos circularon códigos asociados a streamers, pero cambian seguido y muchas veces son regionales, así que no te fíes de cualquier código que veas en redes. Si lo que buscás es un bono que valga la pena de verdad, en nuestro ranking de arriba tenés los bonos de bienvenida verificados para Argentina, sin letra chica escondida.",
  },
  {
    q: "¿Puedo ver los streams de Santutu y jugar gratis?",
    a: "Sí. Casi todos los slots que juega Santu (Sweet Bonanza, Gates of Olympus, etc.) tienen modo demo: jugás con dinero ficticio, gratis, para entender la mecánica sin arriesgar nada. Es la mejor forma de probar antes de poner plata real. Los streamers no usan demo porque su contenido es el espectáculo de la plata real, pero vos no tenés ninguna obligación de hacerlo así.",
  },
  {
    q: "¿Santutu recomienda algún casino en particular?",
    a: "Santu juega y muestra Stake en sus streams, pero nosotros no afirmamos que recomiende ningún casino concreto a su audiencia ni que respalde los que aparecen en nuestro ranking. Nuestras recomendaciones son independientes y se basan en pruebas propias de cada plataforma. Tomá las decisiones con tu criterio, no por lo que haga un streamer.",
  },
];

/* ───────── Helpers ───────── */
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
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#38bdf8] to-[#22c55e]" />
      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{children}</h2>
    </div>
  );
}

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

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#9ca3af] leading-relaxed mb-4 text-base sm:text-lg">{children}</p>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4">{children}</h3>;
}

/* ───────── JSON-LD ───────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `¿En qué casino juega Santutu? Guía ${LAST_UPDATED_YEAR}`,
  description: "Dónde juega Santutu (Stake), sus slots favoritos y los mejores casinos online recomendados para Argentina.",
  datePublished: "2026-06-30",
  dateModified: LAST_UPDATED_ISO,
  author: { "@type": "Organization", name: "JugarCasinosOnline.net" },
  publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" },
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Santutu",
  alternateName: "Santiago Rodríguez Zahn",
  nationality: "Argentina",
  jobTitle: "Streamer",
  description: "Streamer argentino conocido por sus sesiones de slots en Kick, parte de la escena de casino en español.",
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.jugarcasinosonline.net/" },
    { "@type": "ListItem", position: 2, name: "Streamers", item: "https://www.jugarcasinosonline.net/streamers/" },
    { "@type": "ListItem", position: 3, name: "Casino de Santutu", item: "https://www.jugarcasinosonline.net/streamers/casino-santutu/" },
  ],
};

/* ═══════════════════════════════════════════════ */
export default function CasinoSantutu() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#38bdf8]/[0.07] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/streamers" className="hover:text-white transition-colors">Streamers</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Casino de Santutu</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
            ¿En qué casino juega
            <br />
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#22c55e] to-[#38bdf8] bg-clip-text text-transparent">Santutu? {LAST_UPDATED_YEAR}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            Directo al grano, che: Santutu juega en <strong className="text-white">Stake</strong>, donde hace sus sesiones de slots en Kick, muchas veces al lado de Coscu. Pero que él juegue ahí no quiere decir que sea lo que más te conviene a vos. Te explicamos por qué y dónde sí.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Nos clavamos horas de sus directos, cruzamos datos y armamos esta guía para que sepas la posta: en qué casino apuesta Santu, qué slots le gustan, qué onda esos clips donde la pantalla explota… y cuáles son los casinos que nosotros sí recomendamos para jugar desde Argentina, con bonos verificados, en pesos y con Mercado Pago.
          </p>
        </div>
      </section>

      {/* TABLA DE CONTENIDOS */}
      <TableOfContents
        items={[
          { id: "ranking", label: "Ranking para Argentina" },
          { id: "como-elegimos", label: "Cómo armamos el ranking" },
          { id: "quien-es", label: "¿Quién es Santutu?" },
          { id: "historia-casino", label: "Su relación con el casino" },
          { id: "casino-de-santutu", label: "Stake al detalle" },
          { id: "slots", label: "Slots favoritos" },
          { id: "ganancias", label: "Los clips de millones" },
          { id: "stake-vs-ranking", label: "Stake vs recomendados" },
          { id: "por-que-estos-casinos", label: "¿Dónde te conviene jugar?" },
          { id: "casino-confiable", label: "Reconocer un casino confiable" },
          { id: "es-legal", label: "¿Es legal en Argentina?" },
          { id: "bonos", label: "Bonos explicados" },
          { id: "comparativa-bonos", label: "Comparativa de bonos" },
          { id: "como-registrarte", label: "Cómo registrarte" },
          { id: "metodos-pago", label: "Métodos de pago" },
          { id: "primera-sesion", label: "Tu primera sesión" },
          { id: "jugar-slots-tips", label: "Jugar slots con cabeza" },
          { id: "errores-comunes", label: "Errores comunes" },
          { id: "escena-streamers", label: "La escena de streamers" },
          { id: "glosario", label: "Glosario" },
          { id: "juego-responsable", label: "Juego responsable" },
          { id: "faq", label: "Preguntas frecuentes" },
          { id: "veredicto", label: "Veredicto" },
        ]}
      />

      {/* RANKING */}
      <Section id="ranking" alt>
        <SectionTitle>Dónde jugar: nuestro ranking para Argentina</SectionTitle>
        <P>
          Empecemos por lo concreto, porque sabemos a qué viniste. Si querés jugar en casino online desde Argentina, estos son los que probamos y por los que ponemos la cara. Santu juega en Stake (lo tenés sexto, lo metimos por transparencia), pero arriba van los que para nosotros tienen el mejor combo de bono, catálogo y pagos para un jugador argentino de carne y hueso. No es una lista armada al voleo: cada uno pasó por nuestras manos antes de entrar.
        </P>
        <CasinoRanking casinos={ranking} infoColumnLabel="Juegos" />
        <P>
          ¿Por qué Betsson primero y no Stake? Sencillo: Betsson tiene licencia LOTBA (o sea, regulación argentina de verdad), bonos en pesos, acepta Mercado Pago, y un soporte en español que responde cuando lo necesitás. Stake es un golazo para cripto, pero no es para cualquiera, sobre todo si recién arrancás. Más abajo te lo desmenuzamos casino por casino para que no te quede ninguna duda.
        </P>
        <P>
          Antes de que tomes la tabla como escritura sagrada, dos aclaraciones. Los bonos están verificados al mes que figura arriba (la guía se actualiza sola, no como otras que llevan dos años diciendo “2024”). Y las posiciones no las decidió un algoritmo ni un gerente comercial: las decidió nuestra guita, depositada y retirada casino por casino. Método rústico, resultados honestos.
        </P>
        <div className="mt-6"><CtaButton slug="betsson-argentina" text="Probar Betsson Argentina" /></div>
      </Section>

      {/* CÓMO ELEGIMOS */}
      <Section id="como-elegimos">
        <SectionTitle>Cómo armamos este ranking</SectionTitle>
        <P>
          Para que confíes en lo que decimos, te contamos cómo llegamos a este orden, porque no es al azar ni eso de “el que paga va primero” sin más criterio. Probamos cada casino con cuenta real: depositamos con Mercado Pago, jugamos, pedimos retiros y le escribimos al soporte a horas raras a propósito, para ver cómo responden cuando nadie lo espera. Esa es la única forma de saber si un casino es bueno de verdad o solo en el papel.
        </P>
        <P>
          El examen tuvo cuatro materias. <strong className="text-white">Bono</strong>: no el número gordo del banner, sino el rollover y el plazo, que son los que deciden si sirve. <strong className="text-white">Catálogo</strong>: que estén los slots que la gente juega de verdad, los de los streams. <strong className="text-white">Pagos</strong>: Mercado Pago y bancos argentinos, con retiros que lleguen. <strong className="text-white">Confianza</strong>: licencia visible y soporte que exista. Aprobar tres de cuatro no alcanzaba.
        </P>
        <P>
          Momento transparencia (tranqui, es corto): sí, hay enlaces de afiliado en esta página. Te registrás desde nuestros botones y el casino nos tira una comisión — a vos te sale exactamente lo mismo. ¿Nos compra eso la opinión? No: hay casinos que pagan lindo y acá no aparecen porque los retiros eran un chiste. La comisión es el negocio; el ranking es otra cosa.
        </P>
        <P>
          Con esos cuatro filtros aplicados, Betsson queda primero por su combinación de licencia local, bonos en pesos y pagos rápidos; STARDA se lleva el segundo puesto por su catálogo brutal de slots y sus torneos; y así hasta Stake, que metimos sexto no porque sea malo, sino porque, para el jugador argentino promedio, las opciones de arriba son un mejor punto de partida. Es el mismo criterio que usamos en todas nuestras guías.
        </P>
      </Section>

      {/* QUIÉN ES */}
      <Section id="quien-es" alt>
        <SectionTitle>¿Quién es Santutu?</SectionTitle>
        <P>
          Pongámoslo en contexto para el que recién cae. Santutu es Santiago Rodríguez Zahn, un streamer argentino que se hizo un nombre fuerte en la escena del casino en español a fuerza de sesiones explosivas de slots. Si seguís el ambiente, seguro lo viste en transmisiones compartidas con Coscu y otros referentes, donde la dinámica de grupo y las reacciones a los premios grandes se vuelven puro espectáculo.
        </P>
        <P>
          Su casa principal es Kick, donde ya pasa los <strong className="text-white">300 mil seguidores</strong>. Ahí transmite sobre todo Slots & Casino, pero también Counter-Strike 2 y Just Chatting. Su estilo es intenso: cuando una slot explota, lo vive con todo, y esa energía es justo lo que engancha a su comunidad y hace que sus clips circulen por todos lados. Por eso medio internet busca “en qué casino juega Santutu”. Bueno, a eso vinimos.
        </P>
        <P>
          Lo que diferencia a Santu es que es genuino: cuando gana, festeja como cualquiera de nosotros; cuando pierde, también se le nota en la cara. Esa autenticidad, sin poses, es lo que hace que la gente lo banque tanto. Y ese alcance es justo lo que hace que valga la pena hablar de su contenido de casino con seriedad y no como una nota más de farándula, porque detrás hay miles de personas que lo miran y después googlean dónde jugar.
        </P>
        <H3>Parte de la camada que cambió el streaming de casino</H3>
        <P>
          Santu pertenece a esa generación de creadores que convirtió el contenido de slots en un fenómeno masivo en español. Lo que antes era nicho, hoy llena directos con miles de personas en simultáneo. Esa camada, con Coscu a la cabeza y un montón de nombres alrededor, le dio al casino-streaming una identidad propia en LATAM: reacciones grandes, jerga compartida, colaboraciones entre streamers y una comunidad que se mueve de un canal a otro.
        </P>
        <P>
          Entender ese contexto te ayuda a mirar todo con más perspectiva. No estás viendo a un pibe que descubrió la fórmula para hacerse rico jugando; estás viendo a un profesional del entretenimiento haciendo lo que mejor sabe, dentro de una industria que paga bien por ese contenido. Esa distinción es la base de toda esta guía, y es lo que te va a permitir disfrutar sus streams sin confundirlos con un plan financiero.
        </P>
        <H3>Por qué su contenido de casino importa tanto</H3>
        <P>
          Ahora hacé la cuenta: agarrá una comunidad de ese tamaño, sentá al creador a jugar slots en vivo, y mirá lo que pasa. Miles de pibes viendo, clips que explotan en TikTok a la hora, y una porción nada menor del público googleando “casino de Santu” antes de que termine el stream. Ese efecto dominó es exactamente la razón por la que esta página existe — y por la que conviene leerla entera antes de imitar nada.
        </P>
      </Section>

      {/* HISTORIA CASINO */}
      <Section id="historia-casino">
        <SectionTitle>La relación de Santutu con el casino</SectionTitle>
        <P>
          La movida de Santu con el contenido de casino es parte de una ola que arrasó con el streaming en español en los últimos años. Para entender bien dónde juega y por qué, conviene mirar la película completa y no solo la foto del clip viral.
        </P>
        <P>
          El formato del slot-streaming explotó a nivel mundial, con referentes moviendo apuestas descomunales en vivo. Funcionaba: las reacciones a un slot que explota son adictivas de ver, los clips vuelan y los acuerdos con las plataformas de casino eran (y son) muy generosos. Kick, que nació con una política amigable hacia el contenido de apuestas, se volvió el hogar natural de estos streamers, y Santu encontró ahí su espacio para hacer este tipo de transmisiones sin las restricciones de otras plataformas.
        </P>
        <P>
          Conviene entender por qué Kick y no Twitch. Twitch endureció sus reglas sobre contenido de casino hace unos años y restringió que los streamers grandes promocionaran ciertos sitios de apuestas. Un montón de creadores se mudaron entonces a Kick, que nació con una política mucho más relajada. Cuando ves a Santu jugando casino en Kick, estás viendo contenido que en Twitch difícilmente existiría igual, y eso te da una pista de la industria que hay detrás.
        </P>
        <P>
          Y aclaremos algo antes de que el debate se ponga binario: Santu no es ni un genio de las apuestas ni el demonio que arruina a la juventud. Es un tipo que entretiene muy bien haciendo un contenido que da para hablar, dentro de una industria que mueve millones. Las dos cosas pueden ser ciertas a la vez (sí, se puede).
        </P>
      </Section>

      {/* CASINO DE SANTUTU (STAKE) */}
      <Section id="casino-de-santutu" alt>
        <SectionTitle>El casino de Santutu: Stake al detalle</SectionTitle>
        <P>
          Vamos al hueso. El casino de Santutu es <strong className="text-white">Stake</strong>. Es la plataforma con la que se lo asocia y donde pasó la mayoría de sus sesiones más recordadas, muchas de ellas compartidas con otros streamers. Si lo seguís en Kick, lo viste mil veces ahí: la interfaz oscura, las apuestas en cripto, los números subiendo y bajando a una velocidad que marea.
        </P>
        <P>
          Stake es la marca que se te viene a la cabeza cuando escuchás “casino de streamer”, y no por casualidad: se hizo gigante a base de cripto y de firmar cheques a medio Kick. Hoy tiene 3.000+ juegos, mesas en vivo, sus propios jueguitos exclusivos y una comunidad que parece secta (lo decimos con cariño). Su gracia: la plata entra y sale en minutos si te movés con USDT.
        </P>
        <H3>¿Por qué Santu juega en Stake y no en otro?</H3>
        <P>
          ¿Por qué Stake y no otro? Separemos la paja del trigo. Razón uno, la que nadie dice en voz alta pero todos saben: hay contrato. Como el 90% de los streamers de casino del planeta, Santu tiene (o tuvo) un acuerdo comercial con la plataforma. Razón dos, la técnica: la cripto no pregunta y los slots de Stake son los que mejor rinden en cámara. Ninguna de las dos razones habla de si a VOS te conviene — anotá eso.
        </P>
        <P>
          La segunda razón es práctica: Stake funciona con cripto, y eso para un streamer es comodísimo para mover montos grandes en cámara sin pasar por bancos. Y en Argentina, con el cepo y todo el quilombo cambiario que conocemos, la parte de cripto sí es una ventaja real para el usuario común. La tercera: tiene los slots que mejor funcionan en stream y cargan rápido. Pero “ideal para hacer contenido” no es lo mismo que “ideal para tu bolsillo”, y esa diferencia es la clave de toda esta nota.
        </P>
        <H3>Más allá de los slots: en vivo y originals</H3>
        <P>
          Ojo que Stake no vive solo de slots. Hay casino en vivo completo — ruleta, blackjack, baccarat, Crazy Time y toda la familia de game shows — y están los famosos originals: Plinko, Crash, Mines. Jueguitos simples, hipnóticos y exclusivos de la casa que ya son parte del paisaje de cualquier stream. Si alguna vez viste una bolita rebotando entre clavijas mientras el chat grita, era Plinko.
        </P>
        <H3>Seguridad, comunidad y soporte</H3>
        <P>
          ¿Es seguro? A nivel infraestructura, sí: años operando, encriptación seria, sistema provably fair en sus juegos propios (podés verificar cada resultado, cosa que casi nadie hace pero está buena que exista). El “pero” para el jugador argentino es más mundano: sin Mercado Pago, sin pesos, sin soporte que entienda “no me llegó la plata al Galicia”. Seguro es; cómodo, no tanto.
        </P>
        <P>
          En lo móvil, Stake funciona bien desde el navegador del celular, que es donde juega la mayoría en LATAM, así que no vas a tener drama para entrar desde el teléfono. Pero, de nuevo, la experiencia está pensada para el que ya vive en el ecosistema cripto. Si tu día a día es Mercado Pago y las apps que ya usás, vas a sentir que los casinos de nuestro ranking te hablan en tu idioma, mientras que Stake te pide adaptarte a su forma de funcionar.
        </P>
        <ProsCons
          pros={[
            "Cripto rápida: depósitos y retiros en minutos, sin pasar por bancos (clave con el cepo)",
            "Catálogo enorme con los slots más streameados del mundo",
            "Los originals (Plinko, Crash, Mines) que no encontrás en otros lados",
            "Marca global con años de trayectoria y comunidad gigante",
          ]}
          cons={[
            "Pensado para usuarios de cripto: si no manejás USDT o BTC, hay curva",
            "Los bonos son menos claros y generosos que los de Betsson o STARDA",
            "Soporte en español menos ágil que el de los casinos del ranking",
            "Para Argentina, perdés la comodidad de Mercado Pago",
          ]}
        />
        <P>
          ¿Nuestro veredicto sobre Stake? Es un casino en serio, no un tugurio. Si manejás cripto con soltura, adelante, nadie te va a frenar. Ahora, si tu billetera es Mercado Pago y tu banco es de acá, elegir Stake es como importar un auto que no tiene repuestos en el país: lindo, pero te complicaste solo. Por eso está donde está en el ranking.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="stake" text="Ver Stake" />
          <CtaButton slug="starda-casino" text="Probar STARDA (recomendado)" />
        </div>
      </Section>

      {/* SLOTS */}
      <Section id="slots">
        <SectionTitle>Los slots favoritos de Santutu</SectionTitle>
        <P>
          Si buscaste “casino slots Santutu” o “slots favoritos de Santutu”, esta es tu sección. Santu, como buen streamer de casino, juega slots de volatilidad media-alta: esos que te tienen 50 giros sin pagar nada y de repente explotan con un multiplicador gigante. Son los que dan los clips virales, los gritos y los festejos que después circulan por TikTok. Acá te dejamos los que más se le ven, con la data real de cada uno.
        </P>
        <P>
          Antes de la lista, un apunte importante: que sean sus favoritos no significa que sean los que más te convienen a vos. Son slots espectaculares para ver en stream justamente porque son extremos, y eso que los hace tan entretenidos en cámara es lo mismo que los hace peligrosos para un bolsillo normal. Mirá la lista con curiosidad, probalos en demo si querés, pero no asumas que vas a tener la misma suerte que se ve en los clips.
        </P>
        <div className="space-y-4 my-8">
          {favoriteSlots.map((s, i) => (
            <div key={s.name} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0284c7] flex items-center justify-center font-black text-white text-sm shrink-0">{i + 1}</span>
                <h3 className="text-lg font-bold text-white">{s.name}</h3>
                <span className="text-xs text-[#71717a] uppercase tracking-wider font-bold">{s.provider}</span>
              </div>
              <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">{s.note}</p>
            </div>
          ))}
        </div>
        <P>
          ¿Notás un patrón? Casi todos son de Pragmatic Play y de Hacksaw Gaming, los dos proveedores que dominan el slot-streaming. Sweet Bonanza y Gates of Olympus son de los más jugados del planeta, y comparten ese estilo de pay-anywhere (ganás juntando símbolos iguales en cualquier lado) y tumbles (los ganadores desaparecen y caen nuevos, encadenando premios). Los Hacksaw como Dork Unit suben la volatilidad a niveles extremos, ideales para el clip pero brutales para el bankroll.
        </P>
        <H3>Cómo funcionan estos slots (para que no te agarren desprevenido)</H3>
        <P>
          Entender la mecánica te ayuda a no frustrarte. En estos slots no hay líneas de pago tradicionales: ganás cuando aparecen 8 o más símbolos iguales en cualquier posición. Cuando pasa, explotan y caen nuevos, encadenando premios. Y si en esa cadena caen los multiplicadores, ahí ves esos x100, x250 o más que vuelan la pantalla. La parte que los streams no muestran tanto: para llegar a los giros gratis donde está la verdadera plata, necesitás que caigan varios scatters, y eso pasa cada muchísimos giros. Mientras tanto, el saldo baja.
        </P>
        <P>
          Dato que ningún stream te va a dar (porque mata el show): estos slots son de volatilidad alta, o sea que su estado natural es comerte el saldo de a mordiscos y pagar fuerte cada muerte de obispo. El streamer banca esas sequías con un bankroll de streamer. Vos, con un sueldo normal, no tenés por qué bancarlas: apuestas chicas y volatilidad media, que el juego dure.
        </P>
        <P>
          Buena noticia: estos slots los encontrás en prácticamente todos los casinos de nuestro ranking. STARDA, SOL, FRESH y MONRO tienen catálogos completos de Pragmatic y Hacksaw, así que podés jugar los mismos títulos que ves en los streams de Santu pero con un bono de bienvenida que te da más margen para divertirte.
        </P>
        <div className="mt-6"><CtaButton slug="starda-casino" text="Jugar slots en STARDA" /></div>
      </Section>

      {/* GANANCIAS */}
      <Section id="ganancias" alt>
        <SectionTitle>Esos clips de millones: la letra chica</SectionTitle>
        <P>
          Seguro viste alguno: Santu festejando una ganancia enorme, reacciones épicas, el chat enloquecido. Son clips brutales, no lo vamos a negar. El problema es lo que esos clips no te muestran, y acá tenemos que ser honestos con vos aunque no sea lo más vendedor.
        </P>
        <H3>Lo que el clip te muestra vs. lo que no</H3>
        <P>
          El clip de 30 segundos es la mejor pieza de marketing jamás inventada, y ni siquiera es intencional. Te muestra el bonus que pagó x500; convenientemente no te muestra las cuatro horas previas de saldo en bajada, ni las tres recargas, ni la cara del final de la noche. No es mentira, es edición. Pero vos consumís la edición, no la noche completa — no lo pierdas de vista.
        </P>
        <H3>Por qué la casa siempre gana (la matemática sin vueltas)</H3>
        <P>
          Y esto no es sermón de tía, es aritmética: todo juego de casino tiene ventaja de la casa. Un RTP de 96% significa que, promediando millones de giros, el juego devuelve 96 y se queda 4. Ese 4% no duerme, no se emociona y no tiene rachas: simplemente cobra. Se le puede ganar una noche (por eso existen los clips); no se le gana el año.
        </P>
        <P>
          ¿Esto quiere decir que está mal jugar? Para nada. Quiere decir que tenés que jugar entendiendo qué es: un entretenimiento que, estadísticamente, te va a costar plata, igual que te cuesta ir al cine o salir a comer. La diferencia es que en el casino existe la ilusión de que podés ganar, y esa ilusión, reforzada por los clips de los streamers, es la que hace que mucha gente apueste más de lo que debería. Si tenés clara la matemática, jugás más tranquilo y con expectativas realistas. Y eso, paradójicamente, hace que la pases mejor.
        </P>
        <div className="rounded-2xl bg-[#f59e0b]/[0.08] border border-[#f59e0b]/25 p-6 my-6">
          <p className="text-[#fbbf24] font-bold mb-2">⚠️ El dato que cambia todo</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
          Lo que ves en un stream es el highlight, no el promedio. Si vas a jugar: número fijo antes de arrancar, cero intentos heroicos de recuperación, y el casino anotado donde va — en gastos de salida, al lado del asado y la birra. Jamás en la columna de ingresos.
        </p>
        </div>
      </Section>

      {/* CARA A CARA */}
      <Section id="stake-vs-ranking">
        <SectionTitle>Stake vs. nuestros recomendados: cara a cara</SectionTitle>
        <P>
          Para que lo veas de un pantallazo, armamos esta comparativa entre el casino donde juega Santu (Stake) y los dos que más recomendamos para Argentina (Betsson y STARDA). No es que uno sea bueno y otro malo: sirven para perfiles distintos.
        </P>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] my-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-4 font-bold">Característica</th>
                <th className="px-4 py-4 font-bold">Stake</th>
                <th className="px-4 py-4 font-bold">Betsson</th>
                <th className="px-4 py-4 font-bold">STARDA</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Licencia", "Curaçao", "LOTBA (local)", "Curaçao"],
                ["Bono", "Menos claro", "Hasta $350.000 + 200 giros", "100% + 500 giros"],
                ["Pago estrella", "Cripto (USDT, BTC)", "Mercado Pago", "Cripto y tarjetas"],
                ["Ideal para", "Usuarios de cripto", "Todo público", "Fans de slots"],
                ["Soporte en español", "Correcto", "Muy ágil", "24/7"],
                ["Originals (Plinko, Crash)", "Sí", "No", "No"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-4 py-3 font-bold text-white">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3">{row[2]}</td>
                  <td className="px-4 py-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Lo ves claro: si tu mundo es la cripto y querés los originals que hicieron famoso a Stake, ese es tu lugar. Pero si querés un bono más jugoso en pesos, pagar con Mercado Pago y un soporte que responda al toque, Betsson o STARDA te van a tratar mejor. Probá y sacá tus propias conclusiones: al final, el mejor casino es el que mejor se adapta a vos.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="betsson-argentina" text="Probar Betsson" />
          <CtaButton slug="starda-casino" text="Probar STARDA" />
        </div>
      </Section>

      {/* POR QUÉ ESTOS CASINOS */}
      <Section id="por-que-estos-casinos">
        <SectionTitle>¿Podés jugar donde juega Santutu? Sí, pero…</SectionTitle>
        <P>
          La respuesta es sí: podés crearte una cuenta en Stake y jugar los mismos slots que ves en sus streams. Pero antes de que lo hagas, dejanos darte el panorama completo, porque para eso probamos cada uno de estos casinos a fondo. Te lo contamos rápido y al grano.
        </P>
        <H3>Betsson — el #1 para empezar</H3>
        <P>
          ¿Recién arrancás? No la pienses tanto: Betsson. Licencia LOTBA — regulación porteña real, no un papelito de una isla — bono en pesos argentinos, Mercado Pago integrado y soporte que responde en criollo. Hicimos la prueba de fuego (retiro un domingo a la noche, el peor horario posible) y la plata apareció al otro día antes del mediodía. Poco épico, muy confiable. Exactamente lo que querés de un casino.
        </P>
        <div className="my-5"><CtaButton slug="betsson-argentina" text="Abrir cuenta en Betsson" /></div>
        <H3>STARDA Casino — el paraíso de los slots</H3>
        <P>
          Si lo tuyo son las tragamonedas (o sea, si viniste por lo de Santu), STARDA es nuestra recomendación fuerte. Tiene 3.800+ juegos, torneos de slots semanales con premios de verdad, y todos los Pragmatic y Hacksaw que ves en los streams. El bono es 100% en tu primer depósito + 500 giros gratis. La sección de juegos crash (Aviator y compañía) es de las mejores que probamos. Para un fan del contenido de Santu, es el casino que más se le parece en espíritu, pero con un bono que Stake no te da.
        </P>
        <div className="my-5"><CtaButton slug="starda-casino" text="Jugar en STARDA" /></div>
        <H3>SOL, MONRO y FRESH — el resto del pelotón pesado</H3>
        <P>
          El pelotón de Royal Partners viene con reparto de roles: <strong className="text-white">SOL</strong> para el debutante (interfaz clara, rollover x30 que no te esclaviza, 4.000 juegos), <strong className="text-white">MONRO</strong> para el que quiere arrancar con el tanque lleno (150% de bono, el más alto de la lista), y <strong className="text-white">FRESH</strong> para el coleccionista: 4.500+ títulos, buscás la slot más oscura del catálogo de Hacksaw y la tiene. Cualquiera de los tres te recibe mejor que Stake si la cripto no es lo tuyo.
        </P>
        <div className="my-5 flex flex-wrap gap-3">
          <CtaButton slug="sol-casino" text="Probar SOL" />
          <CtaButton slug="monro-casino" text="Probar MONRO" />
          <CtaButton slug="fresh-casino" text="Probar FRESH" />
        </div>
        <H3>Y Stake, ¿cuándo sí?</H3>
        <P>
          Stake tiene sentido si ya manejás cripto, si te gustan los originals tipo Plinko o Crash que no vas a encontrar en otros lados, y si valorás los retiros instantáneos en USDT por encima de un bono más grande. Es un casino legítimo, no estamos diciendo lo contrario. Solo decimos que para la mayoría de los argentinos que recién se meten, los de arriba son un mejor punto de partida. Probá, comparás, y quedate con el que te cierre.
        </P>
      </Section>

      {/* CASINO CONFIABLE */}
      <Section id="casino-confiable" alt>
        <SectionTitle>Cómo reconocer un casino confiable</SectionTitle>
        <P>
          Antes de meter tu guita en cualquier lado, conviene saber distinguir un casino serio de uno turbio. Es más fácil de lo que parece si sabés qué mirar. Te dejamos la checklist que usamos nosotros cada vez que evaluamos una plataforma nueva, para que la apliques vos también.
        </P>
        <P>
          <strong className="text-white">Uno: la licencia visible.</strong> Un casino serio muestra su licencia en el pie de página (LOTBA u otra provincial para los argentinos, Curaçao o Malta para los internacionales). Si no la ves, mala señal. <strong className="text-white">Dos: reputación de pagos.</strong> Buscá el nombre del casino en foros como AskGamblers o Trustpilot y fijate qué dice la gente de los retiros. Un patrón de quejas por pagos es una bandera roja gigante.
        </P>
        <P>
          <strong className="text-white">Tres: métodos de pago locales.</strong> Mercado Pago y transferencia de bancos de acá, ida y vuelta; si para cobrar te piden una billetera que nunca escuchaste nombrar, sospechá. <strong className="text-white">Cuatro: términos legibles.</strong> Si necesitás un abogado para entender el bono, el bono no está para que lo entiendas. Los casinos serios escriben claro porque no tienen nada que esconder. <strong className="text-white">Cinco: soporte que responde.</strong> Probá el chat antes de depositar. Cómo y cuándo te responden te dice mucho de cómo te van a tratar el día que tengas un problema.
        </P>
        <P>
          ¿Adiviná qué? Todos los del ranking pasan esa checklist, porque la checklist vino antes que el ranking, no al revés. No elegimos por bono gordo ni por comisión linda: elegimos por el aburrido criterio de “paga cuando tiene que pagar”. Guardate la lista igual — afuera de esta página hay una fauna interesante.
        </P>
      </Section>

      {/* LEGALIDAD */}
      <Section id="es-legal">
        <SectionTitle>¿Es legal jugar en casino online en Argentina?</SectionTitle>
        <P>
          Pregunta justa, y la respuesta corta es: sí, pero depende de tu provincia. Argentina no tiene una ley nacional única de juego online (cada provincia regula lo suyo), y eso genera un mapa medio enredado que conviene entender antes de poner un peso. Te lo simplificamos.
        </P>
        <P>
          La Ciudad de Buenos Aires fue de las primeras en ordenar el tema a través de LOTBA, que da licencias a los operadores que quieren funcionar legalmente para los porteños. Provincia de Buenos Aires tiene su propio sistema, y otras provincias fueron sacando sus marcos. Betsson, por ejemplo, tiene licencia LOTBA, así que para un jugador de CABA está jugando con todas las de la ley. Los casinos de Royal Partners (STARDA, SOL, MONRO, FRESH) operan con licencia de Curaçao, que es internacional y válida.
        </P>
        <H3>El consejo más importante</H3>
        <P>
          Huí de cualquier casino que no muestre su licencia de forma clara. Si entrás a un sitio y no encontrás en el pie de página quién lo regula ni el número de licencia, cerralo. No importa cuán lindo sea el bono. Los casinos truchos existen, y el problema no es solo jugar en algo ilegal: es que el día que ganes, capaz no te pagan y no tenés a quién reclamarle. Por eso armamos rankings, para que no tengas que arriesgarte probando a ciegas.
        </P>
        <P>
          Y el clásico que nunca falta: +18, sin excepciones ni viveza criolla. Todo casino serio te va a pedir el KYC (DNI, a veces selfie) antes de soltarte un retiro — es ley, no maldad. Consejo de viejo zorro: hacelo apenas te registrás, cuando no hay plata en juego y estás tranquilo. El KYC de apuro, con un premio esperando, es otro deporte.
        </P>
      </Section>

      {/* BONOS */}
      <Section id="bonos" alt>
        <SectionTitle>Los bonos de bienvenida, explicados sin vueltas</SectionTitle>
        <P>
          Una de las grandes diferencias entre jugar donde juega Santu (Stake) y jugar en los casinos de nuestro ranking es el bono de bienvenida. Y como es un tema donde mucha gente se marea (o acepta sin leer y después se queja), te lo explicamos bien.
        </P>
        <H3>¿Qué es un bono de bienvenida?</H3>
        <P>
          El bono de bienvenida es el saldo extra (o los giros) que el casino te da por depositar por primera vez. El formato estrella es el 100%: ponés $10.000, jugás con $20.000. Suena a regalo; es más bien un préstamo con condiciones — el casino te presta emoción a cambio de que apuestes cierta cantidad antes de retirar. Bien usado, suma. Mal leído, frustra.
        </P>
        <H3>El rollover: la letra chica que nadie lee</H3>
        <P>
          El rollover (o requisito de apuesta) es la cantidad de veces que tenés que apostar el bono antes de poder retirar lo que ganes con él. Si te dan $10.000 de bono con rollover x30, tenés que apostar $300.000 antes de sacar. Parece mucho, pero con slots de apuestas chicas se va cumpliendo de a poco. La clave: un bono con rollover bajo (tipo x30, como el de SOL) vale más que un bono enorme con rollover altísimo.
        </P>
        <div className="rounded-2xl bg-[#3b82f6]/[0.06] border border-[#3b82f6]/20 p-6 my-6">
          <p className="text-[#60a5fa] font-bold mb-2">💡 Regla de oro de los bonos</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
          Repetí conmigo: el bono no es plata retirable, es saldo condicionado. La diferencia parece semántica hasta que intentás retirar y te aparece el rollover pendiente. Dato fino que pocos usan: si tu plan es jugar poco y retirar rápido, rechazá el bono directamente — plata limpia, sin ataduras, cero letra chica. Esa opción existe siempre y nadie la publicita (por razones obvias).
        </p>
        </div>
        <P>
          Trampita clásica del rollover: no todos los juegos aportan igual. Slots al 100%, mesas al 10% o directamente nada — está en las condiciones, en la parte que nadie lee. ¿Sos de ruleta o blackjack y agarraste bono? Puede que estés liberando a paso de tortuga sin saberlo. Leé la tabla de aportes antes, no después de encontrarte la sorpresa.
        </P>
        <div className="mt-2"><CtaButton slug="sol-casino" text="Ver el bono de SOL (rollover x30)" /></div>
              <P>
          Y un clásico argentino para cerrar: el bono leído a las apuradas. Todos conocemos a alguien que aceptó un 100% sin mirar el plazo, jugó tranquilo dos semanas creyendo que tenía tiempo, y descubrió que el rollover vencía a los 7 días. ¿El casino lo estafó? No — estaba escrito. ¿Se sintió estafado igual? Obvio. Moraleja: los cinco minutos que tardás en leer las condiciones son la mejor inversión de toda tu carrera de jugador, y mirá que acá hablamos de plata.
        </P>
      </Section>

      {/* COMPARATIVA DE BONOS */}
      <Section id="comparativa-bonos">
        <SectionTitle>Comparativa de bonos: ¿cuál te conviene?</SectionTitle>
        <P>
          Para no marearte con números sueltos, acá va todo junto: los bonos del ranking, lado a lado. Miralos con ojo de comprador, no de enamorado:
        </P>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] my-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-4 font-bold">Casino</th>
                <th className="px-4 py-4 font-bold">Bono</th>
                <th className="px-4 py-4 font-bold">Mejor para</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Betsson", "Hasta $350.000 + 200 giros", "Empezar seguro, Mercado Pago"],
                ["STARDA", "100% + 500 giros", "Fanáticos de los slots"],
                ["SOL", "100% + 500 giros", "Principiantes (rollover x30)"],
                ["MONRO", "150% primer depósito", "Maximizar el saldo del bono"],
                ["FRESH", "100% + 500 giros", "Cazadores de catálogo"],
                ["Stake", "Bono + giros", "Usuarios de cripto"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.04]">
                  <td className="px-4 py-3 font-bold text-white">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Como ves, no hay un bono que sea el mejor para todos: hay un bono que es el mejor para vos. Y un truco que pocos aplican: no tenés por qué aceptar el primero que veas. Podés crearte cuenta en dos o tres casinos del ranking, comparar sus bonos y catálogos con tu propia experiencia, y quedarte jugando en el que mejor te trate. Total, todos son de confianza.
        </P>
      </Section>

      {/* REGISTRO */}
      <Section id="como-registrarte" alt>
        <SectionTitle>Cómo crear tu cuenta paso a paso</SectionTitle>
        <P>
          Si nunca te registraste en un casino online, capaz pensás que es un trámite eterno. La verdad es que no: en menos de cinco minutos estás adentro. Te dejamos el paso a paso con Betsson de ejemplo, pero en cualquiera del ranking es casi igual.
        </P>
        <div className="space-y-4 my-6">
          {[
            { n: 1, t: "Entrá por la puerta correcta", d: "Usá los botones verdes de esta guía: van al sitio oficial con el bono ya activado. Googlear el casino y entrar al primer resultado es jugar a la lotería de los clones truchos." },
            { n: 2, t: "Completá el registro", d: "Te van a pedir correo, contraseña, nombre, fecha de nacimiento (mayor de 18) y datos básicos. Cargá tu info real, porque después en la verificación tiene que coincidir." },
            { n: 3, t: "Verificá tu cuenta (KYC)", d: "Subí una foto de tu DNI y, a veces, un selfie o comprobante de domicilio. Es requisito legal y conviene hacerlo el primer día, así cuando retires no hay demoras ni excusas." },
            { n: 4, t: "Hacé tu primer depósito", d: "Elegí el método que más uses (Mercado Pago, transferencia, tarjeta o cripto). Si querés el bono, activalo antes de confirmar. Fijate el depósito mínimo para el bono." },
            { n: 5, t: "A jugar (con cabeza)", d: "Ya tenés tu saldo más el bono. Buscá tus slots favoritos, definí cuánto estás dispuesto a gastar, y disfrutá. Recordá: es entretenimiento, no laburo." },
          ].map((s) => (
            <div key={s.n} className="flex gap-4 rounded-2xl bg-[#141414] border border-white/[0.06] p-5">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center font-black text-white shrink-0">{s.n}</span>
              <div>
                <h3 className="text-white font-bold mb-1">{s.t}</h3>
                <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <P>
          Fin del trámite. ¿Viste que no era el infierno burocrático que imaginabas? Lo único que puede demorar un rato es la verificación, y aun así se resuelve en horas. La moraleja de siempre: el papeleo se hace el día uno, con la cabeza fría — no el día que tenés un retiro grande esperando y las pulsaciones a mil.
        </P>
        <div className="mt-4"><CtaButton slug="betsson-argentina" text="Crear cuenta en Betsson" /></div>
              <P>
          Un consejo final de registro, de argentino a argentino: cargá bien tu DNI desde el arranque. El KYC compara todo — nombre, fecha, número — y cualquier diferencia entre lo que escribiste y lo que dice el documento te frena el primer retiro justo cuando menos paciencia tenés. Dos minutos de prolijidad hoy te ahorran dos días de tickets al soporte mañana. Palabra de quien ya pasó por esa.
        </P>
      </Section>

      {/* MÉTODOS DE PAGO */}
      <Section id="metodos-pago">
        <SectionTitle>Métodos de pago en Argentina</SectionTitle>
        <P>
          Acá se nota la diferencia entre jugar en Stake (puro cripto) o en un casino con onda local. Te contamos qué opciones tenés y cuál conviene según tu caso, porque este punto, aunque parezca aburrido, es de los que más impacto tienen en tu experiencia.
        </P>
        <H3>Mercado Pago y transferencias: lo más cómodo</H3>
        <P>
          Seamos honestos: en Argentina, el método de pago es Mercado Pago y después está todo lo demás. Ya lo tenés en el celu, ya lo usás para todo, y los casinos con licencia local lo aceptan sin drama. Nuestro retiro de prueba en Betsson: pedido a las 22:14, acreditado a la mañana siguiente. Sin tickets de soporte, sin “está en proceso” eterno. Así de simple tiene que ser.
        </P>
        <H3>Tarjetas de débito y crédito</H3>
        <P>
          Visa y Mastercard funcionan para depositar en la mayoría de los casinos. Para depósitos es instantáneo. Para retiros, ojo, suele tardar más y algunos bancos en Argentina ponen trabas a las transacciones de juego. Por eso, si pensás retirar seguido, Mercado Pago o transferencia suelen ser más prácticos que la tarjeta.
        </P>
        <H3>Cripto: el camino de Stake</H3>
        <P>
          Y acá sí, aplausos para Stake: en velocidad cripto no hay con qué darle. Depósitos y retiros casi instantáneos con Bitcoin o USDT, sin bancos en el medio, sin feriados, sin horario bancario. Si vivís en ese ecosistema, es objetivamente lo mejor del mercado. Si no sabés qué es una wallet... esta virtud te queda tan lejos como un Lamborghini sin nafta.
        </P>
        <H3>¿Cuánto tardan los retiros?</H3>
        <P>
          Regla de oro para juzgar casinos: todos te reciben la plata con una sonrisa; la personalidad se les nota cuando se la pedís de vuelta. Referencias reales de nuestras pruebas: Mercado Pago en horas (Betsson), cripto en minutos (Stake), transferencias dentro del día. Todo lo que supere 48 horas sin explicación es un casino contándote quién es. Escuchalo.
        </P>
      </Section>

      {/* PRIMERA SESIÓN */}
      <Section id="primera-sesion" alt>
        <SectionTitle>Tu primera sesión de slots, bien hecha</SectionTitle>
        <P>
          Si después de leer todo esto querés probar, perfecto, pero hagámoslo con cabeza. Te dejamos una mini guía de cómo encarar tu primera sesión de slots para que sea entretenida y no termine en un mal rato. Es lo que le diríamos a un amigo que nunca jugó.
        </P>
        <P>
          Primero, definí tu presupuesto de entretenimiento: un monto que si lo perdés entero, no te cambia el mes. Ese es tu techo, y no se toca. Segundo, elegí un slot de volatilidad media para arrancar (no te tires de una a los Hacksaw de volatilidad extrema que juega Santu, esos te funden rápido). Tercero, poné apuestas chicas: la idea es que el presupuesto te dure y disfrutes muchos giros, no que lo quemes en cinco minutos buscando el premio gordo.
        </P>
        <P>
          Cuarto, fijate un punto de salida tanto para arriba como para abajo. Si ganás y llegás a una meta que te pusiste, retirá y cerrá la sesión contento; no caigas en el “una más a ver si gano más”, porque ahí es donde se devuelve todo. Y si perdés tu presupuesto del día, se terminó por hoy, sin dramas. Quinto: disfrutá el rato. El objetivo es pasarla bien, no hacer plata. Una última cosa que mucha gente no sabe: no necesitás apostar más para “acercarte” a un premio. El RTP es un porcentaje fijo, da igual si apostás chico o grande; lo único que cambia es el tamaño de los premios y las pérdidas.
        </P>
        <div className="mt-4"><CtaButton slug="sol-casino" text="Empezar tranquilo en SOL" /></div>
      </Section>

      {/* TIPS SLOTS */}
      <Section id="jugar-slots-tips">
        <SectionTitle>Cómo jugar slots como Santu (sin fundirte)</SectionTitle>
        <P>
          Ya sabemos que viniste por las slots. Y está bien: son divertidas y los streams las hacen ver como una montaña rusa de emociones. Pero hay una diferencia abismal entre cómo juega un streamer y cómo deberías jugar vos. Estos consejos no te los da nadie en un stream, pero te pueden salvar el bolsillo.
        </P>
        <H3>Entendé la volatilidad</H3>
        <P>
          Los slots favoritos de Santu son de alta volatilidad: pagan poco la mayor parte del tiempo y muy de vez en cuando sueltan un premio gordo. Genial para un clip, brutal para un bankroll chico. Si recién arrancás, probá slots de volatilidad media o baja: ganás más seguido y la sesión dura más.
        </P>
        <H3>Mirá el RTP y usá el modo demo</H3>
        <P>
          El RTP es el porcentaje teórico que un slot devuelve a largo plazo. Elegí slots con 96% o más. Y antes de apostar plata real, jugá un rato en modo demo (gratis, con dinero ficticio) para entender la mecánica. Los streamers no usan demo porque su contenido es el espectáculo de la plata real, pero vos no tenés por qué.
        </P>
        <H3>Definí límites y respetalos</H3>
        <P>
          Lo más importante y lo más difícil. Antes de empezar, decidí cuánto vas a jugar y cuándo vas a parar. Y la regla sagrada: nunca persigas las pérdidas. Ese “una más para recuperar” es el camino directo a perder el doble.
        </P>
        <ProsCons
          pros={[
            "Definir un presupuesto fijo antes de empezar",
            "Jugar slots con RTP de 96%+ y probar el modo demo primero",
            "Tratar el casino como entretenimiento, no como ingreso",
            "Aprovechar los bonos pero leyendo siempre el rollover",
          ]}
          cons={[
            "Perseguir las pérdidas con una apuesta más",
            "Jugar con plata que necesitás para gastos reales",
            "Copiar las apuestas altas de un streamer sin su bankroll",
            "Creer que los clips de millones reflejan una sesión normal",
          ]}
        />
      </Section>

      {/* ERRORES */}
      <Section id="errores-comunes" alt>
        <SectionTitle>Los 5 errores del que copia a un streamer</SectionTitle>
        <P>
          Años viendo streams y foros dejan un patrón clarísimo: el que llega al casino desde un clip comete siempre los mismos cinco errores. Siempre. Los listamos acá con la esperanza (moderada) de que vos seas la excepción:
        </P>
        <div className="space-y-4 my-6">
          {[
            { t: "Copiar las apuestas altas sin tener el bankroll", d: "Santu apuesta montos que para él son parte de su laburo. Si los copiás con tu sueldo, fundís el saldo en minutos. Apostá en proporción a TU bankroll." },
            { t: "Creer que el clip viral es una sesión normal", d: "El clip es la lotería ganada de la semana, no el martes promedio. Por cada bonus épico que viste hay decenas de sesiones grises que nadie subió a ningún lado (adiviná por qué)." },
            { t: "Perseguir las pérdidas", d: "El famoso 'una más y me voy'. Spoiler: nunca es una más, y la pérdida chica que era anécdota se vuelve número que duele. La plata perdida se despide, no se persigue." },
            { t: "Usar el bonus buy sin entenderlo", d: "Pagar 100 veces tu apuesta por un bonus que no garantiza nada. Al streamer se lo financia el contenido; a vos no te lo financia nadie. Matemática hostil, evitala." },
            { t: "No leer las condiciones del bono", d: "Aceptar un bono sin mirar el rollover es el clásico. Después te quejás de que no te dejan retirar, cuando no cumpliste una condición que estaba escrita." },
          ].map((e, i) => (
            <div key={e.t} className="flex gap-4 rounded-2xl bg-[#141414] border border-white/[0.06] p-5">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0284c7] flex items-center justify-center font-black text-white shrink-0">{i + 1}</span>
              <div>
                <h3 className="text-white font-bold mb-1">{e.t}</h3>
                <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">{e.d}</p>
              </div>
            </div>
          ))}
        </div>
        <P>
          Si leés esta lista y pensás “a mí no me va a pasar”, justo ese pensamiento es el que mete a la gente en problemas. Nadie planea perder de más; pasa de a poco, en el calor del momento. Por eso lo mejor que podés hacer es decidir tus límites antes de empezar, cuando tenés la cabeza fría, y respetarlos pase lo que pase. El casino va a estar ahí mañana; tu plata, si la cuidás, también.
        </P>
      </Section>

      {/* ESCENA */}
      <Section id="escena-streamers">
        <SectionTitle>Santutu y la escena de streamers de casino</SectionTitle>
        <P>
          Santu no juega solo, y eso es parte de su gracia: muchas de sus sesiones más recordadas son colaborativas, con otros streamers reaccionando juntos a los premios. Es parte de una escena enorme de creadores de casino en español que explotó en los últimos años, sobre todo en Kick. Entender ese contexto te ayuda a mirar todo esto con más perspectiva.
        </P>
        <P>
          En Argentina están Coscu y el propio Santu; en Colombia, MrStiven Tc; en Perú, gente como Andynsane; y a nivel internacional, monstruos como xQc o Roshtein que mueven apuestas que dan vértigo. Todos comparten el mismo formato: slots de alta volatilidad, reacciones grandes, y clips que circulan por todas las redes. Es una industria con sus códigos, sus colaboraciones y su público fiel.
        </P>
        <P>
          Cuando entendés que es una industria (con acuerdos, con producción, con un modelo de negocio claro), dejás de ver los streams como “un pibe que gana fortunas jugando” y empezás a verlos como lo que son: entretenimiento profesional. Santu es buenísimo en lo que hace, pero lo que hace es contenido, no un tutorial de cómo forrarte de guita. Si te copa este tipo de contenido y querés saber dónde juegan los demás, lo estamos investigando uno por uno.
        </P>
        <div className="mt-4"><Link href="/streamers" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#a855f7]/40 text-[#c084fc] font-bold text-sm uppercase tracking-wide transition-all hover:bg-[#a855f7]/10">Ver todos los streamers →</Link></div>
              <P>
          Última reflexión sobre la escena, y va con onda: ser fan de Santu está bárbaro, pero fijate cómo consumís el contenido. ¿Lo mirás como quien mira fútbol — por el espectáculo, sabiendo que no vas a jugar en primera? Perfecto. ¿Lo mirás anotando qué slot juega para copiarlo después? Ahí ya cambiaste de deporte sin darte cuenta, y en el nuevo jugás con desventaja. El mejor fan es el que disfruta gratis lo que a otros les sale carísimo.
        </P>
      </Section>

      {/* GLOSARIO */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario: las palabras que vas a escuchar</SectionTitle>
        <P>
          Si te estás metiendo al casino online (o si mirás streams de Santu), vas a escuchar términos que capaz no conocés. Acá un mini diccionario para que no te pierdas.
        </P>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            { t: "RTP (Return to Player)", d: "Lo que el juego devuelve a la larga: 96% = devuelve 96 de cada 100. El detalle es que 'a la larga' son millones de giros, no tu viernes." },
            { t: "Volatilidad", d: "El temperamento del slot: alta paga poco seguido y fuerte (la de los streams), baja paga seguido y modesto (la que te conviene para arrancar)." },
            { t: "Rollover", d: "El precio oculto del bono: cuántas veces hay que apostarlo antes de retirar. $100 con x30 = $3.000 apostados. Ahora releé ese banner de '200% de bono'." },
            { t: "Tumbles", d: "Los símbolos que ganan explotan y caen otros, encadenando premios en un mismo giro. La mecánica estrella de Sweet Bonanza y por la que el chat grita 'UNA MÁS'." },
            { t: "Multiplicador", d: "El número que convierte un premio normal en clip viral. Los x500 de Gates of Olympus existen; aparecen justo lo suficiente para que creas que son frecuentes." },
            { t: "Free Spins", d: "Giros gratis en slots. Las ganancias suelen tener su propio rollover, así que leé las condiciones." },
            { t: "KYC", d: "Verificación de identidad. Te piden DNI y a veces selfie. Es requisito legal antes de retirar." },
            { t: "House Edge", d: "La ventaja matemática del casino. Es por qué, a la larga, la casa siempre gana." },
            { t: "Bankroll", d: "El total de plata que destinás a jugar. Debería ser lo que podés perder sin drama." },
            { t: "Originals", d: "Los juegos caseros de Stake: Plinko, Crash, Mines. Simples, adictivos y verificables. No los vas a encontrar en ningún otro casino, y esa es la idea." },
            { t: "LOTBA", d: "La Lotería de la Ciudad de Buenos Aires, que regula y licencia el juego online en CABA." },
            { t: "Bonus buy", d: "El botón de 'salteate la espera' que cuesta 100 apuestas de una. Gran invento para el espectáculo, pésimo invento para tu saldo." },
          ].map((g) => (
            <div key={g.t} className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <p className="text-white font-bold mb-1">{g.t}</p>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{g.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* JUEGO RESPONSABLE */}
      <Section id="juego-responsable">
        <SectionTitle>Antes de jugar: la charla importante</SectionTitle>
        <P>
          No nos íbamos a ir sin esto. Ver a Santu ganar millones es entretenido, pero el casino no es un trabajo ni una inversión. Es entretenimiento que cuesta plata, como ir al cine. Y como todo entretenimiento que cuesta plata, hay que ponerle límites.
        </P>
        <P>
          Las reglas son tres y las conocés antes de leerlas, pero repetirlas nunca está de más: se juega con plata de sobra (la del alquiler tiene dueño y no sos vos), se define el presupuesto antes de entrar (después ya está la adrenalina opinando), y se respeta el stop gane o pierda. Aburridas las tres. Efectivas las tres. Así funciona casi todo lo que funciona.
        </P>
        <P>
          Una señal de alarma para que tengas en el radar: si te encontrás jugando para “recuperar” lo perdido, escondiendo cuánto jugás, o sacando plata de gastos importantes para apostar, pará y pedí ayuda. Esos son los focos rojos del juego problemático, y reconocerlos a tiempo cambia todo. Todos los casinos serios tienen herramientas de juego responsable: límites de depósito, autoexclusión, recordatorios de tiempo. Usalas sin culpa. Mayores de 18 años, siempre.
        </P>
        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6">
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
            <strong className="text-white">+18 | Jugá con responsabilidad.</strong> El juego puede generar adicción. Esta guía es informativa y de entretenimiento, no una invitación a apostar más de lo que podés permitirte. Conocé más en nuestra página de <Link href="/juego-responsable" className="text-[#22c55e] hover:underline">juego responsable</Link>.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" alt>
        <SectionTitle>Preguntas frecuentes sobre el casino de Santutu</SectionTitle>
        <div className="space-y-4 mt-8">
          {faqItems.map((f) => (
            <div key={f.q} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6">
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">{f.q}</h3>
              <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* VEREDICTO */}
      <Section id="veredicto">
        <SectionTitle>Veredicto: ¿dónde jugar entonces?</SectionTitle>
        <P>
          Recapitulemos. La pregunta con la que llegaste era “¿en qué casino juega Santutu?”, y la respuesta es <strong className="text-white">Stake</strong>, donde hace sus slots en Kick. Eso es un hecho, y ahora ya sabés el contexto completo: por qué juega ahí, qué slots le gustan y por qué esos clips de millones hay que tomarlos con pinzas.
        </P>
        <P>
          Ahora, si lo que en realidad viniste a preguntar era “¿y yo dónde juego?”, ahí vamos con munición: para la enorme mayoría, <strong className="text-white">Betsson</strong> (licencia porteña, pesos, Mercado Pago) o <strong className="text-white">STARDA</strong> (el patio de juegos slotero, con bono generoso) son jugadas más inteligentes que calcar al streamer de turno. Stake queda para cuando la cripto sea tu idioma nativo — si es que ese día llega, y no pasa nada si no llega.
        </P>
        <P>
          Y por encima de qué casino elijas, lo más importante: jugá con la cabeza fría. El casino es entretenimiento, no un trabajo. Poné límites, respetalos, y disfrutá los slots por lo que son: un juego. Ojalá esta guía te haya servido no solo para saber dónde juega Santu, sino para entender todo lo que hay detrás y tomar decisiones informadas. Y recordá: el mejor casino siempre va a ser el que mejor se adapte a vos, no el que más suene en los streams.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="betsson-argentina" text="Empezar con Betsson" />
          <CtaButton slug="starda-casino" text="Jugar slots en STARDA" />
        </div>
      </Section>

      {/* LINKS */}
      <Section id="seguir-leyendo" alt>
        <SectionTitle>Seguí leyendo</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/argentina/mejores-casinos-online" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Mejores casinos en Argentina</p>
            <p className="text-[#71717a] text-sm">El ranking completo, con bonos verificados.</p>
          </Link>
          <Link href="/streamers/casino-coscu" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">El casino de Coscu</p>
            <p className="text-[#71717a] text-sm">Dónde juega el gigante argentino del streaming.</p>
          </Link>
          <Link href="/argentina/ruleta-online" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Ruleta online en Argentina</p>
            <p className="text-[#71717a] text-sm">Las mejores mesas en vivo para argentinos.</p>
          </Link>
          <Link href="/streamers" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Casinos de otros streamers</p>
            <p className="text-[#71717a] text-sm">¿En qué casino juegan los demás? Lo investigamos.</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
