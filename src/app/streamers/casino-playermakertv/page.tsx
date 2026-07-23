import type { Metadata } from "next";
import Link from "next/link";
import CasinoRanking, { CasinoRankingItem } from "@/components/CasinoRanking";
import TableOfContents from "@/components/TableOfContents";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "¿En qué casino juega PlayermakerTV? Guía 2026",
  description:
    "PlayermakerTV es el streamer de slots y blackjack más visto en español. Te mostramos sus juegos y los mejores casinos online para jugar desde LATAM.",
};

/* ───────── Ranking: nuestros afiliados recomendados para LATAM ───────── */
const ranking: CasinoRankingItem[] = [
  { rank: 1, name: "Betsson", slug: "betsson-latam", bonus: "¡Duplica tu primer depósito!", rating: 9.5, highlight: true, badge: "⭐ Recomendado", infoText: "2 500+ juegos" },
  { rank: 2, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.3, badge: "🔥 TOP", infoText: "3 800+ juegos" },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.1, infoText: "4 000+ juegos" },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.0, infoText: "3 500+ juegos" },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, infoText: "4 500+ juegos" },
];

const favoriteSlots = [
  { name: "Blackjack en vivo", provider: "Evolution / Pragmatic Live", note: "El juego favorito de PlayermakerTV. Mesas con dealers reales transmitidas en tiempo real. Estrategia, tensión y la mejor ventaja para el jugador de todo el casino con juego óptimo." },
  { name: "Gates of Olympus", provider: "Pragmatic Play", note: "Cuando le da a las slots, los clásicos de alta volatilidad como Gates no faltan. Zeus, multiplicadores y esos momentos de pantalla explotada." },
  { name: "Sweet Bonanza", provider: "Pragmatic Play", note: "El de los caramelos. Pay-anywhere, tumbles y multiplicadores hasta 100x. Un fijo del slot-streaming en español." },
  { name: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", note: "El western de la volatilidad extrema, con potencial de 12.500x. El típico slot que se juega para el clip, no para la billetera." },
  { name: "Sugar Rush", provider: "Pragmatic Play", note: "Grilla de 7x7 con zonas de multiplicador que se acumulan. Volatilidad alta de esa que te hace sufrir y después te devuelve todo de golpe." },
];

const faqItems = [
  {
    q: "¿En qué casino juega PlayermakerTV?",
    a: "PlayermakerTV colabora con distintas plataformas y promociones de casino a lo largo del tiempo, en sus directos de Twitch, Kick y YouTube. No hay un único casino exclusivo confirmado de forma pública y permanente. Por eso, en vez de inventarte un dato, preferimos enfocarnos en lo que de verdad te sirve: cuáles son los casinos que nosotros probamos y recomendamos para jugar bien y seguro desde LATAM.",
  },
  {
    q: "¿Quién es PlayermakerTV?",
    a: "PlayermakerTV es uno de los streamers de slots y casino más vistos en español. Aunque su comunidad no es la más numerosa, es de las más leales: cada directo mezcla juego, interacción y promociones, con un estilo que hace que la gente vuelva día tras día. Transmite en Twitch, Kick y YouTube, y su juego favorito es el blackjack, además de slots de alta volatilidad.",
  },
  {
    q: "¿Qué juegos juega PlayermakerTV?",
    a: "Su favorito declarado es el blackjack, sobre todo en mesas en vivo. También juega slots de alta volatilidad como Gates of Olympus, Sweet Bonanza, Sugar Rush y títulos de Hacksaw como Wanted Dead or a Wild. Es de los pocos streamers de casino que combina el juego de mesa con estrategia y las tragamonedas de pura adrenalina.",
  },
  {
    q: "¿Puedo jugar en los mismos casinos que PlayermakerTV desde LATAM?",
    a: "Puedes jugar los mismos juegos (blackjack en vivo y slots populares) en cualquiera de los casinos de nuestro ranking. Para un jugador de LATAM, lo más recomendable es arrancar por Betsson, que tiene una de las mejores secciones de casino en vivo con mesas de blackjack, o por los casinos de Royal Partners como STARDA y SOL, con catálogos enormes de slots y bonos claros.",
  },
  {
    q: "¿Por qué PlayermakerTV juega blackjack y no solo slots?",
    a: "El blackjack es uno de los juegos con menor ventaja de la casa cuando se juega con estrategia óptima (cerca del 0,5%), mucho mejor para el jugador que la mayoría de los slots. Eso lo hace más estratégico y, en cámara, genera una tensión distinta a la de las tragamonedas. Es parte de lo que diferencia el contenido de PlayermakerTV de otros streamers que solo juegan slots.",
  },
  {
    q: "¿Es legal jugar en casino online en LATAM?",
    a: "Depende del país, pero en general sí, siempre que elijas un casino con licencia. Perú regula con MINCETUR, Colombia con Coljuegos y varias provincias argentinas tienen su marco. Los casinos internacionales operan con licencias de Curaçao o Malta. Lo importante es elegir plataformas con licencia clara, jugar solo lo que estés dispuesto a perder, y recordar que es entretenimiento, no una fuente de ingresos.",
  },
  {
    q: "¿Cómo se juega bien al blackjack?",
    a: "La clave del blackjack es la estrategia básica: una tabla que te dice la jugada óptima (pedir, plantarte, doblar o dividir) según tu mano y la carta visible del dealer. Jugando con estrategia básica perfecta, la ventaja de la casa baja a alrededor del 0,5%, de las mejores del casino. No garantiza ganar, pero es el juego que más respeta tu plata si lo juegas bien.",
  },
  {
    q: "¿PlayermakerTV gana mucho jugando?",
    a: "Los clips de los streamers muestran sus mejores momentos, no el balance real de horas y horas de juego. A la larga, la casa siempre tiene ventaja, y un streamer juega con un bankroll y un contexto que tú no tienes. Por eso, sea cuanto sea que muestre en cámara, no lo tomes como referencia de lo que te puede pasar a ti jugando un rato.",
  },
  {
    q: "¿Puedo ver los streams de PlayermakerTV y jugar gratis?",
    a: "Sí. Las slots tienen modo demo (gratis, con dinero ficticio) para practicar sin arriesgar, y el blackjack lo puedes practicar con tablas de estrategia básica que hay por todos lados. Es la mejor forma de aprender antes de poner plata real. Los streamers no usan demo porque su contenido es el espectáculo de la plata real, pero tú no tienes ninguna obligación de hacerlo así.",
  },
  {
    q: "¿PlayermakerTV recomienda algún casino?",
    a: "No afirmamos que PlayermakerTV recomiende ningún casino concreto a su audiencia ni que respalde los que aparecen en nuestro ranking. Nuestras recomendaciones son independientes y se basan en pruebas propias de cada plataforma. Toma las decisiones con tu criterio, no por lo que haga un streamer.",
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
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#22c55e] to-[#a855f7]" />
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
  headline: `¿En qué casino juega PlayermakerTV? Guía ${LAST_UPDATED_YEAR}`,
  description: "Dónde juega PlayermakerTV, su pasión por el blackjack y los mejores casinos online recomendados para LATAM.",
  datePublished: "2026-06-30",
  dateModified: LAST_UPDATED_ISO,
  author: { "@type": "Organization", name: "JugarCasinosOnline.net" },
  publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" },
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "PlayermakerTV",
  jobTitle: "Streamer",
  description: "Streamer de casino en español, uno de los más vistos de slots y blackjack en Twitch, Kick y YouTube.",
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.jugarcasinosonline.net/" },
    { "@type": "ListItem", position: 2, name: "Streamers", item: "https://www.jugarcasinosonline.net/streamers/" },
    { "@type": "ListItem", position: 3, name: "Casino de PlayermakerTV", item: "https://www.jugarcasinosonline.net/streamers/casino-playermakertv/" },
  ],
};

/* ═══════════════════════════════════════════════ */
export default function CasinoPlayermaker() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#22c55e]/[0.07] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a855f7]/[0.05] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/streamers" className="hover:text-white transition-colors">Streamers</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Casino de PlayermakerTV</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] anímate-pulse" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
            ¿En qué casino juega
            <br />
            <span className="bg-gradient-to-r from-[#22c55e] via-[#a855f7] to-[#22c55e] bg-clip-text text-transparent">PlayermakerTV? {LAST_UPDATED_YEAR}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            Respuesta honesta: PlayermakerTV colabora con <strong className="text-white">distintas plataformas</strong> a lo largo del tiempo, sin un único casino exclusivo confirmado de forma pública. Lo que sí sabemos es que es uno de los streamers de slots y blackjack más vistos en español. Te contamos su perfil y, sobre todo, dónde te conviene jugar a ti.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Repasamos quién es, su pasión por el blackjack (un detalle que lo diferencia del resto) y los slots que se le ven… y te decimos cuáles son los casinos que nosotros sí recomendamos para jugar desde LATAM, con bonos verificados, mesas en vivo y sin humo.
          </p>
        </div>
      </section>

      {/* TABLA DE CONTENIDOS */}
      <TableOfContents
        items={[
          { id: "ranking", label: "Ranking para LATAM" },
          { id: "como-elegimos", label: "Cómo armamos el ranking" },
          { id: "quien-es", label: "¿Quién es PlayermakerTV?" },
          { id: "blackjack", label: "El blackjack, su sello" },
          { id: "slots", label: "Sus juegos favoritos" },
          { id: "ganancias", label: "Los clips de ganancias" },
          { id: "por-que-estos-casinos", label: "¿Dónde te conviene jugar?" },
          { id: "casino-confiable", label: "Reconocer un casino confiable" },
          { id: "es-legal", label: "¿Es legal en LATAM?" },
          { id: "bonos", label: "Bonos explicados" },
          { id: "comparativa-bonos", label: "Comparativa de bonos" },
          { id: "como-registrarte", label: "Cómo registrarte" },
          { id: "metodos-pago", label: "Métodos de pago" },
          { id: "primera-sesion", label: "Tu primera sesión" },
          { id: "jugar-tips", label: "Jugar con cabeza" },
          { id: "escena-streamers", label: "La escena de streamers" },
          { id: "glosario", label: "Glosario" },
          { id: "juego-responsable", label: "Juego responsable" },
          { id: "faq", label: "Preguntas frecuentes" },
          { id: "veredicto", label: "Veredicto" },
        ]}
      />

      {/* RANKING */}
      <Section id="ranking" alt>
        <SectionTitle>Dónde jugar: nuestro ranking para LATAM</SectionTitle>
        <P>
          Empecemos por lo concreto, porque sabemos a qué viniste. Si quieres jugar en casino online, estos son los que probamos y por los que ponemos la cara. Como el casino exclusivo de PlayermakerTV no está confirmado, acá directamente te damos los que para nosotros tienen el mejor combo de bono, catálogo y pagos para un jugador de la región. No es una lista armada al voleo: cada uno pasó por nuestras manos antes de entrar.
        </P>
        <CasinoRanking casinos={ranking} infoColumnLabel="Juegos" />
        <P>
          ¿Por qué Betsson primero? Sencillo: es una marca global con años de trayectoria, bonos más claros, soporte en español que responde y métodos de pago locales. Y para un fan de PlayermakerTV tiene un plus enorme: una de las mejores secciones de casino en vivo del mercado, con un montón de mesas de blackjack con dealers reales. Más abajo te lo desmenuzamos casino por casino.
        </P>
        <P>
          Un par de aclaraciones para que leas la tabla con criterio. Los bonos que ves son los reales y vigentes al momento de actualizar esta guía (la fecha la tienes arriba, se actualiza todos los meses). Las cifras de juegos son aproximadas. Y el orden no es capricho: responde a la combinación de bono, catálogo, pagos y confianza que probamos nosotros mismos.
        </P>
        <div className="mt-6"><CtaButton slug="betsson-latam" text="Probar Betsson" /></div>
      </Section>

      {/* CÓMO ELEGIMOS */}
      <Section id="como-elegimos">
        <SectionTitle>Cómo armamos este ranking</SectionTitle>
        <P>
          Para que confíes en lo que decimos, te contamos cómo llegamos a este orden. No es al azar ni eso de “el que paga va primero” sin más criterio. Probamos cada casino con cuenta real: depositamos, jugamos slots y blackjack, pedimos retiros y le escribimos al soporte a horas raras a propósito, para ver cómo responden cuando nadie lo espera.
        </P>
        <P>
          Miramos cuatro cosas principales. El <strong className="text-white">bono y sus condiciones</strong> (no solo cuánto te dan, sino el rollover y el plazo). El <strong className="text-white">catálogo de juegos</strong> (que tengan los slots populares y buenas mesas de blackjack en vivo). Los <strong className="text-white">pagos</strong> (que los métodos sean los que usas y que los retiros lleguen rápido). Y la <strong className="text-white">confianza</strong> (licencia clara, reputación de pagos, soporte a la altura).
        </P>
        <P>
          Y para que quede todo claro, porque es la duda que muchos tienen: sí, esta página tiene enlaces de afiliado. Si te registras a través de nuestros botones, podemos recibir una comisión del casino. A ti no te cuesta nada más, y no condiciona el orden ni lo que opinamos. Si un casino no nos convence, no lo recomendamos por más que pague bien. Preferimos que vuelvas a leernos porque te dimos data honesta.
        </P>
        <P>
          Con esos cuatro filtros aplicados, Betsson queda primero por su combinación de trayectoria, bonos claros, soporte ágil y su sección de blackjack en vivo; STARDA se lleva el segundo puesto por su catálogo brutal de slots; y los Royal Partners completan un top que, para el jugador de LATAM, es un punto de partida mucho mejor que probar a ciegas.
        </P>
      </Section>

      {/* QUIÉN ES */}
      <Section id="quien-es" alt>
        <SectionTitle>¿Quién es PlayermakerTV?</SectionTitle>
        <P>
          Pongámoslo en contexto. PlayermakerTV es uno de los streamers de casino más vistos en español. Aunque su comunidad no es la más numerosa en números absolutos, es de las más leales del rubro: cada directo mezcla juego, interacción con el chat y promociones, con un estilo que consigue que la gente vuelva día tras día. En los rankings de audiencia de slots en español, suele aparecer arriba semana tras semana.
        </P>
        <P>
          Transmite en varias plataformas a la vez (Twitch, Kick y YouTube), lo que le da un alcance amplio. Y tiene un rasgo que lo diferencia de la mayoría de los streamers de casino: su juego favorito es el <strong className="text-white">blackjack</strong>, además de las slots de alta volatilidad. Mientras casi todos se concentran solo en tragamonedas, él suma el juego de mesa con estrategia, lo que le da otra textura a su contenido. Por eso medio internet busca “en qué casino juega PlayermakerTV”.
        </P>
        <P>
          Algo importante para ser honestos: no hay una confirmación pública y permanente de un único casino exclusivo de PlayermakerTV. Colabora con distintas plataformas y promociones a lo largo del tiempo, como pasa con muchos creadores. Por eso, en vez de inventarte un dato que no está confirmado, preferimos enfocarnos en lo que de verdad te sirve: dónde jugar bien y seguro, con buenas mesas de blackjack y un catálogo sólido de slots.
        </P>
        <H3>Por qué su contenido importa</H3>
        <P>
          Cuando un creador con una comunidad fiel se sienta a jugar en vivo, el impacto es real. La gente lo ve, los clips circulan, y muchas personas descubren el casino online a través de él. Por eso es clave que esta guía exista y que la escribamos con honestidad: si vas a jugar, queremos que lo hagas bien informado, con expectativas realistas y sin ilusiones falsas, eligiendo un casino confiable y no el primero que aparezca en un clip.
        </P>
      </Section>

      {/* BLACKJACK */}
      <Section id="blackjack">
        <SectionTitle>El blackjack: lo que distingue a PlayermakerTV</SectionTitle>
        <P>
          Si hay algo que diferencia a PlayermakerTV de la mayoría de los streamers de casino es su gusto por el blackjack. Y vale la pena detenerse acá, porque el blackjack es, probablemente, el mejor juego del casino para el jugador, y entenderlo te puede ahorrar mucha plata frente a las slots de pura suerte.
        </P>
        <P>
          A diferencia de las tragamonedas, donde todo es azar puro, el blackjack tiene una capa de estrategia. Jugando con la llamada estrategia básica (una tabla que te dice la jugada óptima según tu mano y la carta visible del dealer), la ventaja de la casa baja a alrededor del <strong className="text-white">0,5%</strong>. Para que dimensiones: en muchas slots la ventaja de la casa ronda el 3% o 4%. O sea, bien jugado, el blackjack respeta tu plata mucho más que la mayoría de los slots.
        </P>
        <P>
          Eso no significa que vayas a ganar siempre, ojo: la casa sigue teniendo ventaja, y a la larga gana. Pero es la diferencia entre un juego que te dura horas y uno que te funde rápido. Por eso, si te gusta el contenido de PlayermakerTV y quieres probar, el blackjack en vivo es una de las formas más sensatas de entrar al casino, siempre que aprendas la estrategia básica antes (hay tablas gratis por todos lados) y juegues con límites.
        </P>
        <H3>Dónde jugar blackjack en vivo</H3>
        <P>
          Para blackjack en vivo, Betsson es nuestra recomendación número uno: tiene una de las secciones de casino en vivo más completas del mercado, con muchísimas mesas de Evolution y Pragmatic Live, dealers que hablan español de verdad, y distintos límites de apuesta para que entres con poco. Los Royal Partners como STARDA y SOL también tienen buenas secciones en vivo. Si lo tuyo es el juego de mesa con estrategia, estás mejor servido en estos casinos que en cualquier plataforma orientada solo a slots.
        </P>
        <div className="mt-4"><CtaButton slug="betsson-latam" text="Jugar blackjack en Betsson" /></div>
      </Section>

      {/* SLOTS */}
      <Section id="slots" alt>
        <SectionTitle>Los juegos favoritos de PlayermakerTV</SectionTitle>
        <P>
          Si buscaste qué juega PlayermakerTV, acá tienes la lista. Combina su amado blackjack con slots de volatilidad media-alta, esos que te tienen 50 giros sin pagar nada y de repente explotan con un multiplicador gigante. Acá te dejamos los que más se le ven, con la data real de cada uno.
        </P>
        <P>
          Antes de la lista, un apunte importante: que sean sus favoritos no significa que sean los que más te convienen a ti. Las slots espectaculares para ver en stream son extremas justamente por eso, y eso que las hace entretenidas en cámara es lo mismo que las hace peligrosas para una billetera normal. El blackjack, en cambio, es de los más amables para tu plata si lo juegas con estrategia. Mira la lista con criterio.
        </P>
        <div className="space-y-4 my-8">
          {favoriteSlots.map((s, i) => (
            <div key={s.name} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center font-black text-white text-sm shrink-0">{i + 1}</span>
                <h3 className="text-lg font-bold text-white">{s.name}</h3>
                <span className="text-xs text-[#71717a] uppercase tracking-wider font-bold">{s.provider}</span>
              </div>
              <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">{s.note}</p>
            </div>
          ))}
        </div>
        <P>
          ¿Notas el patrón? Su top combina el blackjack en vivo (juego de mesa con estrategia) con los clásicos de Pragmatic y Hacksaw (Gates of Olympus, Sweet Bonanza, Wanted Dead or a Wild). Es una mezcla más equilibrada que la de los streamers que solo juegan tragamonedas, y eso lo hace un buen ejemplo de que no todo en el casino es apretar un botón y rezar.
        </P>
        <H3>Cómo funcionan estos slots (para que no te agarren desprevenido)</H3>
        <P>
          Entender la mecánica te ayuda a no frustrarte. En las slots de pay-anywhere ganas cuando aparecen 8 o más símbolos iguales en cualquier posición. Cuando pasa, explotan y caen nuevos, encadenando premios. Y si caen los multiplicadores, ahí ves esos x100 o más que vuelan la pantalla. La parte que los streams no muestran tanto: para llegar a los giros gratis donde está la verdadera plata, necesitas varios scatters, y eso pasa cada muchísimos giros. Mientras tanto, el saldo baja. Por eso son de alta volatilidad.
        </P>
        <P>
          Buena noticia: estos juegos los encuentras en prácticamente todos los casinos de nuestro ranking. STARDA, SOL, FRESH y MONRO tienen catálogos completos de Pragmatic y Hacksaw, y Betsson destaca en mesas en vivo, así que puedes jugar lo mismo que ves en los streams de PlayermakerTV pero con un bono de bienvenida que te da más margen.
        </P>
        <div className="mt-6"><CtaButton slug="starda-casino" text="Jugar slots en STARDA" /></div>
      </Section>

      {/* GANANCIAS */}
      <Section id="ganancias">
        <SectionTitle>Los clips de ganancias: la letra chica</SectionTitle>
        <P>
          En el contenido de casino abundan los clips de ganancias enormes, reacciones épicas, el chat enloquecido. Son clips brutales, no lo vamos a negar. El problema es lo que esos clips no te muestran, y acá tenemos que ser honestos contigo aunque no sea lo más vendedor.
        </P>
        <H3>Lo que el clip te muestra vs. lo que no</H3>
        <P>
          Un clip de 30 segundos te muestra el momento exacto en que un slot pagó fuerte o una buena racha de blackjack. Lo que no te muestra son las horas previas perdiendo, las sesiones enteras donde el saldo se fue a cero, ni el hecho de que el streamer suele jugar con un bankroll grande y, en muchos casos, con respaldo del casino. La ganancia es real como momento, pero está fuera de contexto si la tomas como “esto te puede pasar a ti jugando un rato”.
        </P>
        <H3>Por qué la casa siempre gana (la matemática sin vueltas)</H3>
        <P>
          Esto no es opinión nuestra: es matemática. Todos los juegos de casino tienen una ventaja de la casa (house edge), un porcentaje que, a lo largo de millones de jugadas, siempre queda para el casino. En las slots ronda el 3% o 4%; en el blackjack bien jugado, alrededor del 0,5%. Más baja, pero ventaja al fin. A corto plazo puedes ganar (por eso existen los clips), pero a largo plazo esa ventaja siempre se impone. Por eso conviene jugar entendiendo qué es: entretenimiento, no una fuente de ingresos.
        </P>
        <div className="rounded-2xl bg-[#f59e0b]/[0.08] border border-[#f59e0b]/25 p-6 my-6">
          <p className="text-[#fbbf24] font-bold mb-2">⚠️ El dato que cambia todo</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
            Los streamers de casino muestran sus mejores momentos, no el balance real. Si vas a jugar, define un presupuesto fijo antes de empezar, no persigas las pérdidas, y trata el casino como un gasto de entretenimiento, nunca como una forma de ganar plata.
          </p>
        </div>
      </Section>

      {/* POR QUÉ ESTOS CASINOS */}
      <Section id="por-que-estos-casinos" alt>
        <SectionTitle>¿Dónde te conviene jugar? Te lo desglosamos</SectionTitle>
        <P>
          Como el casino exclusivo de PlayermakerTV no está confirmado, lo más útil es ir directo a dónde te conviene jugar a ti. Para eso probamos cada uno de estos casinos a fondo. Te lo contamos rápido y al grano.
        </P>
        <H3>Betsson — el #1, sobre todo para blackjack</H3>
        <P>
          Si nunca jugaste online o quieres ir a lo seguro, empieza acá. Betsson es una marca global con años de trayectoria y reputación intachable de pagos. El bono es claro, el soporte en español responde de verdad, y tiene la mejor sección de casino en vivo del ranking, con un montón de mesas de blackjack con dealers reales. Para un fan de PlayermakerTV, que ama el blackjack, es la opción más redonda sin discusión.
        </P>
        <div className="my-5"><CtaButton slug="betsson-latam" text="Abrir cuenta en Betsson" /></div>
        <H3>STARDA Casino — el paraíso de los slots</H3>
        <P>
          Si lo tuyo son las tragamonedas, STARDA es nuestra recomendación fuerte. Tiene 3.800+ juegos, torneos de slots semanales con premios de verdad, y todos los Pragmatic y Hacksaw que ves en los streams. El bono es 100% en tu primer depósito + 500 giros gratis. La sección de juegos crash también es de las mejores que probamos. Un catálogo enorme con un bono claro.
        </P>
        <div className="my-5"><CtaButton slug="starda-casino" text="Jugar en STARDA" /></div>
        <H3>SOL, MONRO y FRESH — el resto del pelotón pesado</H3>
        <P>
          Los tres son de Royal Partners y los tres cumplen. <strong className="text-white">SOL Casino</strong> es ideal para el que recién arranca: interfaz clarísima, rollover bajo (x30) y 4.000 juegos. <strong className="text-white">MONRO</strong> tiene el bono más alto del ranking en porcentaje, 150% en tu primer depósito. Y <strong className="text-white">FRESH</strong> es el rey del catálogo con 4.500+ títulos. Todos tienen buenas mesas en vivo y los slots que ves en los streams.
        </P>
        <div className="my-5 flex flex-wrap gap-3">
          <CtaButton slug="sol-casino" text="Probar SOL" />
          <CtaButton slug="monro-casino" text="Probar MONRO" />
          <CtaButton slug="fresh-casino" text="Probar FRESH" />
        </div>
        <P>
          La idea es que tengas el panorama completo: no existe el mejor casino universal, existe el mejor casino para ti según cómo juegas. Si te gusta el blackjack, Betsson; si lo tuyo son los slots, STARDA o FRESH; si quieres rollover bajo, SOL; si quieres exprimir el bono, MONRO. Prueba un par y quédate con el que mejor te trate.
        </P>
      </Section>

      {/* CASINO CONFIABLE */}
      <Section id="casino-confiable">
        <SectionTitle>Cómo reconocer un casino confiable</SectionTitle>
        <P>
          Antes de meter tu plata en cualquier lado, conviene saber distinguir un casino serio de uno turbio. Es más fácil de lo que parece si sabes qué mirar. Te dejamos la checklist que usamos nosotros cada vez que evaluamos una plataforma nueva.
        </P>
        <P>
          <strong className="text-white">Uno: la licencia visible.</strong> Un casino serio muestra su licencia en el pie de página, con el número y el organismo regulador. Si no la ves por ningún lado, mala señal. <strong className="text-white">Dos: reputación de pagos.</strong> Busca el nombre del casino en foros como AskGamblers o Trustpilot y fíjate qué dice la gente sobre los retiros. Un patrón de quejas por pagos es una bandera roja gigante.
        </P>
        <P>
          <strong className="text-white">Tres: métodos de pago claros.</strong> Si acepta medios que tú conoces y usas, y explica bien los tiempos de retiro, buena señal. <strong className="text-white">Cuatro: términos legibles.</strong> Los buenos casinos tienen sus condiciones de bono escritas de forma entendible. Si la letra chica es un laberinto, desconfía. <strong className="text-white">Cinco: soporte que responde.</strong> Prueba el chat antes de depositar. Cómo y cuándo te responden te dice mucho de cómo te van a tratar el día que tengas un problema.
        </P>
        <P>
          Todos los casinos de nuestro ranking pasan esta checklist con holgura, porque justamente la aplicamos antes de recomendarlos. No los elegimos por el bono más grande, sino por el combo completo de confianza, pagos y experiencia. Esa es la diferencia entre un ranking armado con criterio y una lista de los que más pagan por aparecer. Y es justo lo que te recomendamos hacer con cualquier casino que veas en un stream: pasarlo por esta checklist antes de poner un peso.
        </P>
      </Section>

      {/* LEGALIDAD */}
      <Section id="es-legal" alt>
        <SectionTitle>¿Es legal jugar en casino online en LATAM?</SectionTitle>
        <P>
          Depende del país, pero la tendencia regional es clara: cada vez hay más regulación y más opciones legales. Perú regula el juego online a través de MINCETUR; Colombia fue pionera con Coljuegos; y en Argentina cada provincia tiene su marco (como LOTBA en la Ciudad de Buenos Aires). En todos esos casos, hay operadores con licencia local que funcionan totalmente regulados.
        </P>
        <P>
          Además de los operadores locales, hay plataformas internacionales que funcionan con licencias de Curaçao o Malta. Esas también son válidas: significa que están reguladas por otra jurisdicción, con sus propios controles y mecanismos de reclamo. Millones de personas en LATAM las usan a diario sin problema. Lo que cambia es a quién le reclamas si algo sale mal.
        </P>
        <H3>El consejo más importante</H3>
        <P>
          Huí de cualquier casino que no muestre su licencia de forma clara. Si entras a un sitio y no encuentras en el pie de página quién lo regula ni el número de licencia, ciérralo. No importa cuán lindo sea el bono. Los casinos truchos existen, y el problema no es solo jugar en algo ilegal: es que el día que ganes, capaz no te pagan y no tienes a quién reclamarle. Por eso armamos rankings, para que no tengas que arriesgarte probando a ciegas.
        </P>
        <P>
          Y un detalle no menor: jugar es solo para mayores de 18 años. Todos los casinos serios te van a pedir verificación de identidad (el KYC) antes de dejarte retirar. No es para molestarte, es requisito legal. Hazlo apenas te registras y listo.
        </P>
      </Section>

      {/* BONOS */}
      <Section id="bonos">
        <SectionTitle>Los bonos de bienvenida, explicados sin vueltas</SectionTitle>
        <P>
          Los bonos de bienvenida son una de las grandes ventajas de jugar en los casinos de nuestro ranking. Y como es un tema donde mucha gente se enreda (o acepta sin leer y después se queja), te lo explicamos bien.
        </P>
        <H3>¿Qué es un bono de bienvenida?</H3>
        <P>
          Es la plata o los giros gratis que el casino te regala por registrarte y hacer tu primer depósito. Lo típico es el bono de 100%: tú pones una cantidad y el casino te suma otro tanto. MONRO incluso tira un 150%, de los más altos que vas a encontrar. Suena a regalo, y en parte lo es, pero tiene una condición clave: el rollover.
        </P>
        <H3>El rollover: la letra chica que nadie lee</H3>
        <P>
          El rollover (o requisito de apuesta) es la cantidad de veces que tienes que apostar el bono antes de poder retirar lo que ganes con él. Si te dan un bono con rollover x30, tienes que apostar 30 veces ese monto antes de sacar. Parece mucho, pero con slots de apuestas chicas se va cumpliendo de a poco. La clave: un bono con rollover bajo (tipo x30, como el de SOL) vale más que un bono enorme con rollover altísimo.
        </P>
        <div className="rounded-2xl bg-[#3b82f6]/[0.06] border border-[#3b82f6]/20 p-6 my-6">
          <p className="text-[#60a5fa] font-bold mb-2">💡 Regla de oro de los bonos</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
            Un bono no es plata gratis que puedes retirar al toque: es un saldo para jugar con condiciones. A veces, si piensas retirar rápido, conviene rechazar el bono y jugar solo con tu depósito. Suena raro, pero es la decisión más inteligente en muchos casos.
          </p>
        </div>
        <P>
          Otra cosa, y esto le importa a un fan del blackjack: no todos los juegos aportan igual al rollover. Las slots suelen contar al 100%, pero el blackjack y otros juegos de mesa a veces aportan solo un 10% o nada. Si piensas cumplir el rollover de un bono, las tragamonedas son tus aliadas, no el blackjack. Por eso, si lo tuyo es el juego de mesa, a veces conviene directamente no aceptar el bono y jugar con tu depósito. Lee siempre las condiciones.
        </P>
        <div className="mt-2"><CtaButton slug="sol-casino" text="Ver el bono de SOL (rollover x30)" /></div>
      </Section>

      {/* COMPARATIVA DE BONOS */}
      <Section id="comparativa-bonos" alt>
        <SectionTitle>Comparativa de bonos: ¿cuál te conviene?</SectionTitle>
        <P>
          Te dejamos una comparativa rápida de los bonos de los casinos de nuestro ranking, para que veas de un vistazo cuál pega más con tu forma de jugar. Recuerda: el número grande no lo es todo, lo que manda es el combo entre el monto, el rollover y para qué tipo de jugador está pensado.
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
                ["Betsson", "Duplica tu depósito", "Blackjack y casino en vivo"],
                ["STARDA", "100% + 500 giros", "Fanáticos de los slots"],
                ["SOL", "100% + 500 giros", "Principiantes (rollover x30)"],
                ["MONRO", "150% primer depósito", "Maximizar el saldo del bono"],
                ["FRESH", "100% + 500 giros", "Cazadores de catálogo"],
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
          Como ves, no hay un bono que sea el mejor para todos: hay un bono que es el mejor para ti. Si te gusta el blackjack como a PlayermakerTV, fíjate que Betsson brilla por su casino en vivo más allá del bono. Y un truco que pocos aplican: no tienes por qué aceptar el primero que veas. Prueba un par de casinos del ranking, comparas, y quédate jugando en el que mejor te trate.
        </P>
      </Section>

      {/* REGISTRO */}
      <Section id="como-registrarte">
        <SectionTitle>Cómo crear tu cuenta paso a paso</SectionTitle>
        <P>
          Si nunca te registraste en un casino online, capaz piensas que es un trámite eterno. La verdad es que no: en menos de cinco minutos estás adentro. Te dejamos el paso a paso con Betsson de ejemplo, pero en cualquiera del ranking es casi igual.
        </P>
        <div className="space-y-4 my-6">
          {[
            { n: 1, t: "Entrá desde el botón oficial", d: "Haz clic en cualquiera de los botones verdes de esta página. Te llevan al sitio oficial del casino, sin intermediarios raros, y aseguran que el bono se active bien." },
            { n: 2, t: "Completá el registro", d: "Te van a pedir correo, contraseña, nombre, fecha de nacimiento (mayor de 18) y datos básicos. Cargá tu info real, porque después en la verificación tiene que coincidir." },
            { n: 3, t: "Verifica tu cuenta (KYC)", d: "Subí una foto de tu documento y, a veces, un selfie o comprobante de domicilio. Es requisito legal y conviene hacerlo el primer día, así cuando retires no hay demoras." },
            { n: 4, t: "Haz tu primer depósito", d: "Elige el método que más uses (transferencia, tarjeta, billetera local o cripto). Si quieres el bono, actívalo antes de confirmar. Si vas a jugar blackjack, fíjate si el bono aporta poco al rollover." },
            { n: 5, t: "A jugar (con cabeza)", d: "Ya tienes tu saldo. Busca tu mesa de blackjack o tus slots favoritos, define cuánto estás dispuesto a gastar, y disfruta. Recuerda: es entretenimiento, no trabajo." },
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
          Y eso es todo. Nada de papeleo eterno ni esperas de días. La parte que más tarda es la verificación, y aun así suele resolverse en minutos o pocas horas. Por eso insistimos en hacerla apenas te registras: es la diferencia entre retirar al toque o quedarte esperando justo cuando ganaste. Un consejo extra: activa los límites de depósito desde el primer día.
        </P>
        <div className="mt-4"><CtaButton slug="betsson-latam" text="Crear cuenta en Betsson" /></div>
      </Section>

      {/* MÉTODOS DE PAGO */}
      <Section id="metodos-pago" alt>
        <SectionTitle>Métodos de pago en LATAM</SectionTitle>
        <P>
          Este punto, aunque parezca aburrido, es de los que más impacto tienen en tu experiencia. De nada sirve un casino con buenas mesas si después no puedes depositar como quieres o los retiros tardan una eternidad. Te contamos qué opciones tienes.
        </P>
        <H3>Billeteras y transferencias locales: lo más cómodo</H3>
        <P>
          Según tu país, vas a tener opciones locales muy prácticas: Mercado Pago en Argentina, Yape y Plin en Perú, Nequi y PSE en Colombia, y transferencias bancarias en todos lados. Los casinos con presencia regional, como Betsson, los aceptan, y el depósito cae al instante. Los retiros suelen llegar el mismo día. Si quieres simpleza total, este es tu camino.
        </P>
        <H3>Tarjetas y cripto</H3>
        <P>
          Visa y Mastercard funcionan para depositar en casi todos los casinos. Para retiros suelen tardar más. Y muchas plataformas también aceptan cripto (Bitcoin, USDT), que es casi instantánea y útil en países con restricciones cambiarias. Si no manejas cripto, no te compliques: arranca con métodos locales.
        </P>
        <H3>¿Cuánto tardan los retiros?</H3>
        <P>
          Depositar es fácil en todos lados; lo que separa a un buen casino de uno malo es la velocidad para devolverte tu plata. Los retiros con billeteras locales suelen llegar el mismo día, los de cripto en minutos, y las transferencias bancarias entre unas horas y un día hábil. La primera vez siempre tarda más por la verificación, así que haz el KYC apenas te registras. Si un casino te pone trabas raras para retirar, desconfía: los serios pagan sin drama.
        </P>
      </Section>

      {/* PRIMERA SESIÓN */}
      <Section id="primera-sesion">
        <SectionTitle>Tu primera sesión, bien hecha</SectionTitle>
        <P>
          Si después de leer todo esto quieres probar, perfecto, pero hagámoslo con cabeza. Te dejamos una mini guía de cómo encarar tu primera sesión para que sea entretenida y no termine en un mal rato. Es lo que le diríamos a un amigo que nunca jugó.
        </P>
        <P>
          Primero, define tu presupuesto de entretenimiento: un monto que si lo pierdes entero, no te cambia el mes. Ese es tu techo, y no se toca. Segundo, si vas a jugar blackjack, aprende la estrategia básica antes (hay tablas gratis): es lo que hace que el juego respete tu plata. Si vas a slots, elige volatilidad media para arrancar, no los Hacksaw extremos. Tercero, pon apuestas chicas: la idea es que el presupuesto te dure.
        </P>
        <P>
          Cuarto, fíjate un punto de salida tanto para arriba como para abajo. Si ganas y llegas a una meta, retira y cierra la sesión contento; no caigas en el “una más a ver si gano más”. Y si pierdes tu presupuesto del día, se terminó por hoy. Quinto: disfruta el rato. El objetivo es pasarla bien, no hacer plata. Una última cosa: en las slots, no necesitas apostar más para “acercarte” a un premio. El RTP es fijo; apostar más solo cambia el tamaño de premios y pérdidas.
        </P>
        <div className="mt-4"><CtaButton slug="betsson-latam" text="Empezar en Betsson" /></div>
      </Section>

      {/* TIPS */}
      <Section id="jugar-tips" alt>
        <SectionTitle>Cómo jugar con cabeza (slots y blackjack)</SectionTitle>
        <P>
          Hay una diferencia abismal entre cómo juega un streamer y cómo deberías jugar tú. Estos consejos no te los da nadie en un stream, pero te pueden salvar el bolsillo, tanto en slots como en blackjack.
        </P>
        <H3>En slots: entiende la volatilidad y mira el RTP</H3>
        <P>
          Las slots de moda son de alta volatilidad: pagan poco la mayor parte del tiempo y muy de vez en cuando sueltan un premio gordo. Si recién arrancas, prueba slots de volatilidad media o baja con RTP de 96% o más. Y antes de apostar plata real, juega en modo demo para entender la mecánica.
        </P>
        <H3>En blackjack: aprende la estrategia básica</H3>
        <P>
          Es lo que diferencia jugar bien de jugar a ciegas. La estrategia básica es una tabla que te dice la jugada óptima en cada situación. Memorizarla (o tenerla a mano) baja la ventaja de la casa a alrededor del 0,5%. No garantiza ganar, pero hace que tu plata dure mucho más. Es, de lejos, la forma más inteligente de jugar al blackjack.
        </P>
        <H3>Define límites y respetalos</H3>
        <P>
          Lo más importante y lo más difícil. Antes de empezar, decide cuánto vas a jugar y cuándo vas a parar. Y la regla sagrada: nunca persigas las pérdidas. Ese “una más para recuperar” es el camino directo a perder el doble.
        </P>
        <ProsCons
          pros={[
            "Aprender la estrategia básica si vas a jugar blackjack",
            "Jugar slots con RTP de 96%+ y probar el modo demo primero",
            "Definir un presupuesto fijo y tratar el casino como entretenimiento",
            "Aprovechar los bonos, pero ojo: en blackjack suelen aportar poco al rollover",
          ]}
          cons={[
            "Perseguir las pérdidas con una apuesta más",
            "Jugar con plata que necesitas para gastos reales",
            "Copiar las apuestas altas de un streamer sin su bankroll",
            "Creer que los clips de millones reflejan una sesión normal",
          ]}
        />
      </Section>

      {/* ESCENA */}
      <Section id="escena-streamers">
        <SectionTitle>PlayermakerTV y la escena de streamers de casino</SectionTitle>
        <P>
          PlayermakerTV es parte de una escena enorme de streamers de casino en español que explotó en los últimos años. Entender ese contexto te ayuda a mirar todo esto con más perspectiva.
        </P>
        <P>
          En la escena hispana hay una camada potente: Coscu y Santutu en Argentina, MrStiven Tc en Colombia, Andynsane en Perú, los ZonaGemelos; y a nivel internacional, monstruos como xQc o Roshtein. La mayoría se concentra en las slots, así que el gusto de PlayermakerTV por el blackjack lo vuelve una rareza simpática dentro del rubro. Todos comparten el mismo formato de base: reacciones grandes y clips que circulan por todas las redes.
        </P>
        <P>
          Cuando entiendes que es una industria (con acuerdos, con producción, con un modelo de negocio claro), dejas de ver los streams como “alguien que gana fortunas jugando” y empiezas a verlos como lo que son: entretenimiento profesional. Disfruta el contenido, entiende cómo funciona el negocio, y si decides jugar, hazlo con un casino confiable y con la cabeza fría. Si quieres saber dónde juegan los demás, lo estamos investigando uno por uno.
        </P>
        <div className="mt-4"><Link href="/streamers" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#a855f7]/40 text-[#c084fc] font-bold text-sm uppercase tracking-wide transition-all hover:bg-[#a855f7]/10">Ver todos los streamers →</Link></div>
      </Section>

      {/* GLOSARIO */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario: las palabras que vas a escuchar</SectionTitle>
        <P>
          Si el casino online es nuevo para ti (o si miras streams de PlayermakerTV), vas a escuchar términos que capaz no conoces. Acá un mini diccionario para que no te pierdas.
        </P>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            { t: "RTP (Return to Player)", d: "Porcentaje teórico que un juego devuelve a largo plazo. RTP de 96% = devuelve 96 de cada 100 apostados, en promedio." },
            { t: "Estrategia básica", d: "La tabla de jugadas óptimas en blackjack. Bien aplicada, baja la ventaja de la casa a alrededor del 0,5%." },
            { t: "House Edge", d: "La ventaja matemática del casino. En slots ronda el 3-4%; en blackjack bien jugado, el 0,5%." },
            { t: "Volatilidad", d: "Qué tan seguido y qué tan grande paga un slot. Alta = premios raros pero grandes. Baja = premios frecuentes y chicos." },
            { t: "Rollover", d: "Las veces que tienes que apostar un bono antes de poder retirar. Ojo: el blackjack suele aportar poco al rollover." },
            { t: "Casino en vivo", d: "Juegos con dealers reales transmitidos en tiempo real, como las mesas de blackjack que ama PlayermakerTV." },
            { t: "Tumbles", d: "Mecánica donde los símbolos ganadores desaparecen y caen nuevos, encadenando premios. Típica de Sweet Bonanza." },
            { t: "KYC", d: "Verificación de identidad. Te piden documento y a veces selfie. Es requisito legal antes de retirar." },
            { t: "Bankroll", d: "El total de plata que destinas a jugar. Debería ser lo que puedes perder sin drama." },
            { t: "Free Spins", d: "Giros gratis en slots. Las ganancias suelen tener su propio rollover, así que lee las condiciones." },
            { t: "Multiplicador", d: "Valor que multiplica tu premio en slots. En Gates of Olympus pueden volar la pantalla." },
            { t: "Bonus buy", d: "Función que te lleva directo a los giros gratis pagando un costo alto. Pensada para bankrolls grandes." },
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
          No nos íbamos a ir sin esto. El casino no es un trabajo ni una inversión. Es entretenimiento que cuesta plata, como ir al cine. Y como todo entretenimiento que cuesta plata, hay que ponerle límites, incluso jugando al blackjack que es de los más amables.
        </P>
        <P>
          Reglas simples que te pueden ahorrar disgustos: juega solo con plata que estés dispuesto a perder, nunca con la del alquiler o la comida. Pon un presupuesto antes de empezar y respétalo, ganes o pierdas. Si pierdes, no persigas las pérdidas. Y si sientes que se te está yendo de las manos, paras. No hay vergüenza en eso, hay inteligencia.
        </P>
        <P>
          Una señal de alarma para que tengas en el radar: si te encuentras jugando para “recuperar” lo perdido, escondiendo cuánto juegas, o sacando plata de gastos importantes para apostar, para y pide ayuda. Esos son los focos rojos del juego problemático, y reconocerlos a tiempo cambia todo. Todos los casinos serios tienen herramientas de juego responsable: límites de depósito, autoexclusión, recordatorios de tiempo. Usalas sin culpa. Mayores de 18 años, siempre.
        </P>
        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6">
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
            <strong className="text-white">+18 | Juega con responsabilidad.</strong> El juego puede generar adicción. Esta guía es informativa y de entretenimiento, no una invitación a apostar más de lo que puedes permitirte. Conoce más en nuestra página de <Link href="/juego-responsable" className="text-[#22c55e] hover:underline">juego responsable</Link>.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" alt>
        <SectionTitle>Preguntas frecuentes sobre el casino de PlayermakerTV</SectionTitle>
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
          Recapitulemos. La pregunta con la que llegaste era “¿en qué casino juega PlayermakerTV?”, y la respuesta honesta es que colabora con <strong className="text-white">distintas plataformas</strong>, sin un único casino exclusivo confirmado de forma pública. Eso es lo que sabemos, y preferimos decírtelo así antes que inventarte un dato.
        </P>
        <P>
          Pero si tu pregunta de fondo era “¿y dónde juego yo?”, ahí sí somos contundentes: para la mayoría, y sobre todo si te gusta el blackjack como a él, arrancar por <strong className="text-white">Betsson</strong> (la mejor sección de casino en vivo del ranking) o por <strong className="text-white">STARDA</strong> (el paraíso de los slots) es la jugada más inteligente. Son casinos probados, regulados y con bonos claros.
        </P>
        <P>
          Y por encima de qué casino elijas, lo más importante: juega con la cabeza fría. El casino es entretenimiento, no un trabajo. Si vas al blackjack, aprende la estrategia básica; si vas a slots, pon límites. Disfruta los juegos por lo que son: entretenimiento. Ojalá esta guía te haya servido para tomar decisiones informadas y no por impulso.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="betsson-latam" text="Jugar blackjack en Betsson" />
          <CtaButton slug="starda-casino" text="Jugar slots en STARDA" />
        </div>
      </Section>

      {/* LINKS */}
      <Section id="seguir-leyendo" alt>
        <SectionTitle>Sigue leyendo</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/streamers" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Casinos de otros streamers</p>
            <p className="text-[#71717a] text-sm">¿En qué casino juegan los demás? Lo investigamos.</p>
          </Link>
          <Link href="/mexico/blackjack-online" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Blackjack online en México</p>
            <p className="text-[#71717a] text-sm">Las mejores mesas en vivo para jugar al 21.</p>
          </Link>
          <Link href="/argentina/blackjack-online" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Blackjack online en Argentina</p>
            <p className="text-[#71717a] text-sm">Dónde jugar al blackjack con las mejores condiciones.</p>
          </Link>
          <Link href="/streamers/casino-coscu" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">El casino de Coscu</p>
            <p className="text-[#71717a] text-sm">Dónde juega el gigante argentino del streaming.</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
