import type { Metadata } from "next";
import Link from "next/link";
import CasinoRanking, { CasinoRankingItem } from "@/components/CasinoRanking";
import TableOfContents from "@/components/TableOfContents";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "¿En qué casino juega BUTIsito? Guía 2026",
  description:
    "BUTIsito hace contenido de casino y slots en Kick. Te mostramos sus juegos y los mejores casinos online de Perú para que juegues seguro.",
};

/* ───────── Ranking: afiliados Perú primero, Stake (casino asociado a la escena) después ───────── */
const ranking: CasinoRankingItem[] = [
  { rank: 1, name: "Betsson", slug: "betsson-peru", bonus: "Gana 300 Giros Gratis", rating: 9.5, highlight: true, badge: "⭐ Recomendado", infoText: "2 500+ juegos" },
  { rank: 2, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.3, badge: "🔥 TOP", infoText: "3 800+ juegos" },
  { rank: 3, name: "Inkabet", slug: "inkabet", bonus: "Hasta S/500 + 300 giros gratis", rating: 9.2, infoText: "1 500+ juegos" },
  { rank: 4, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.1, infoText: "4 000+ juegos" },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, infoText: "4 500+ juegos" },
  { rank: 6, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.0, infoText: "3 500+ juegos" },
  { rank: 7, name: "Stake", slug: "stake", bonus: "S/50 freebet + 50 giros gratis o S/50 bono casino", rating: 8.8, badge: "Escena peruana", infoText: "3 000+ juegos" },
];

const favoriteSlots = [
  { name: "Sweet Bonanza", provider: "Pragmatic Play", note: "El de los caramelos y las frutas. Pay-anywhere, tumbles y multiplicadores hasta 100x. Un fijo en las sesiones de slots de los streamers peruanos." },
  { name: "Gates of Olympus", provider: "Pragmatic Play", note: "Zeus tirando rayos y multiplicadores que caen en el juego base. El slot más streameado del mundo, infaltable." },
  { name: "Sugar Rush", provider: "Pragmatic Play", note: "Grilla de 7x7 con zonas de multiplicador que se acumulan. Volatilidad alta de esa que te hace sufrir varios giros y después te devuelve todo de golpe." },
  { name: "The Dog House", provider: "Pragmatic Play", note: "Wilds pegajosos con multiplicador en los giros gratis. Un clásico que aparece seguido en las sesiones largas." },
  { name: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", note: "El western de la volatilidad extrema, con potencial de 12.500x. El típico slot que se juega para el clip, no para la billetera." },
];

const faqItems = [
  {
    q: "¿En qué casino juega BUTIsito?",
    a: "BUTIsito hace contenido de casino y slots en Kick, junto a su contenido de Dota 2 y Just Chatting. No hay una confirmación pública y permanente de un único casino exclusivo, pero se lo asocia a la escena de streamers peruanos, donde Stake es la plataforma dominante. Sea como sea, que un streamer juegue en un casino no significa que sea la mejor opción para ti: en nuestro ranking ponemos primero los casinos que probamos y recomendamos para Perú.",
  },
  {
    q: "¿Quién es BUTIsito?",
    a: "BUTIsito es Renato Rodolfo Butilier, un streamer peruano conocido por su comunidad en Kick. Empezó con contenido de videojuegos como Dota 2 y Fall Guys, y fue sumando momentos de slots y casino, además de Just Chatting y entretenimiento con su comunidad. Es uno de los nombres que viene creciendo fuerte en la escena peruana de Kick.",
  },
  {
    q: "¿Qué slots juega BUTIsito?",
    a: "Como buen creador de contenido de casino, se lo ve con los slots más populares del momento: Sweet Bonanza, Gates of Olympus y Sugar Rush de Pragmatic Play, además de títulos de Hacksaw como Wanted Dead or a Wild. Son slots de volatilidad media-alta, los que dan esos momentos de pantalla explotada que funcionan tan bien en stream.",
  },
  {
    q: "¿Puedo jugar en los mismos casinos que BUTIsito desde Perú?",
    a: "Sí. Puedes jugar los mismos slots populares en cualquiera de los casinos de nuestro ranking. Para Perú, lo más recomendable es arrancar por Betsson (licencia MINCETUR y acepta Yape y Plin), por Inkabet (100% peruano) o por los casinos de Royal Partners como STARDA y SOL, que tienen catálogos enormes de Pragmatic y Hacksaw y bonos de bienvenida claros.",
  },
  {
    q: "¿Es legal jugar en casino online en Perú?",
    a: "Sí, totalmente legal. Desde febrero de 2024, MINCETUR regula el juego online en Perú con la Ley N° 31557, y ya hay más de 60 operadores con licencia oficial. Lo importante es elegir casinos con licencia clara y buena reputación de pagos, jugar solo lo que estés dispuesto a perder, y recordar que es entretenimiento, no una fuente de ingresos.",
  },
  {
    q: "¿Puedo depositar con Yape o Plin?",
    a: "Sí, y es lo más práctico que hay en Perú. Betsson, Inkabet y otros casinos con licencia MINCETUR aceptan Yape y Plin. El depósito cae al toque, literal en segundos, y los retiros suelen llegar en menos de 24 horas. Es la forma más cómoda de jugar desde Perú sin complicarte con cripto.",
  },
  {
    q: "¿BUTIsito gana mucho jugando al casino?",
    a: "Los clips de los streamers muestran sus mejores momentos, no el balance real de horas y horas de juego. A la larga, la casa siempre tiene ventaja, y un streamer juega con un bankroll y un contexto que tú no tienes. Por eso, sea cuanto sea que muestre en cámara, no lo tomes como referencia de lo que te puede pasar a ti jugando un rato.",
  },
  {
    q: "¿Conviene jugar donde se asocia a BUTIsito o en otro casino?",
    a: "Depende de tu perfil. Si ya manejas cripto y quieres los juegos originals tipo Plinko o Crash, Stake tiene sentido. Pero si recién arrancas, quieres bonos más claros y pagar con Yape o Plin, te conviene más Betsson, Inkabet o un casino de Royal Partners. Por eso en nuestro ranking esos van primero.",
  },
  {
    q: "¿Puedo ver los streams de BUTIsito y jugar gratis?",
    a: "Sí. Casi todos los slots populares (Sweet Bonanza, Gates of Olympus, etc.) tienen modo demo: juegas con dinero ficticio, gratis, para entender la mecánica sin arriesgar nada. Es la mejor forma de probar antes de poner plata real. Los streamers no usan demo porque su contenido es el espectáculo de la plata real, pero tú no tienes ninguna obligación de hacerlo así.",
  },
  {
    q: "¿BUTIsito recomienda algún casino en particular?",
    a: "No afirmamos que BUTIsito recomiende ningún casino concreto a su audiencia ni que respalde los que aparecen en nuestro ranking. Nuestras recomendaciones son independientes y se basan en pruebas propias de cada plataforma. Toma las decisiones con tu criterio, no por lo que haga un streamer.",
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
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#22c55e] to-[#dc2626]" />
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
  headline: `¿En qué casino juega BUTIsito? Guía ${LAST_UPDATED_YEAR}`,
  description: "Dónde hace contenido de casino BUTIsito, sus slots populares y los mejores casinos online recomendados para Perú.",
  datePublished: "2026-06-30",
  dateModified: LAST_UPDATED_ISO,
  author: { "@type": "Organization", name: "JugarCasinosOnline.net" },
  publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" },
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "BUTIsito",
  alternateName: "Renato Rodolfo Butilier",
  nationality: "Perú",
  jobTitle: "Streamer",
  description: "Streamer peruano de Kick, conocido por su contenido de casino, slots, Dota 2 y entretenimiento.",
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.jugarcasinosonline.net/" },
    { "@type": "ListItem", position: 2, name: "Streamers", item: "https://www.jugarcasinosonline.net/streamers/" },
    { "@type": "ListItem", position: 3, name: "Casino de BUTIsito", item: "https://www.jugarcasinosonline.net/streamers/casino-butisito/" },
  ],
};

/* ═══════════════════════════════════════════════ */
export default function CasinoButisito() {
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
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#dc2626]/[0.04] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/streamers" className="hover:text-white transition-colors">Streamers</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Casino de BUTIsito</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] anímate-pulse" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
            ¿En qué casino juega
            <br />
            <span className="bg-gradient-to-r from-[#22c55e] via-[#dc2626] to-[#22c55e] bg-clip-text text-transparent">BUTIsito? {LAST_UPDATED_YEAR}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            Directo al grano, causa: BUTIsito hace contenido de casino y slots en <strong className="text-white">Kick</strong>, dentro de la escena peruana donde <strong className="text-white">Stake</strong> es la plataforma dominante. Pero que un streamer juegue en cierto casino no quiere decir que sea lo que más te conviene a ti. Te explicamos por qué y dónde sí.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Repasamos quién es, qué slots se le ven y la escena en la que se mueve… y te decimos cuáles son los casinos que nosotros sí recomendamos para jugar desde Perú, con bonos verificados y que aceptan Yape y Plin.
          </p>
        </div>
      </section>

      {/* TABLA DE CONTENIDOS */}
      <TableOfContents
        items={[
          { id: "ranking", label: "Ranking para Perú" },
          { id: "como-elegimos", label: "Cómo armamos el ranking" },
          { id: "quien-es", label: "¿Quién es BUTIsito?" },
          { id: "historia-casino", label: "La escena peruana de Kick" },
          { id: "casino-de-la-escena", label: "Stake al detalle" },
          { id: "slots", label: "Slots populares" },
          { id: "ganancias", label: "Los clips de ganancias" },
          { id: "stake-vs-ranking", label: "Stake vs recomendados" },
          { id: "por-que-estos-casinos", label: "¿Dónde te conviene jugar?" },
          { id: "casino-confiable", label: "Reconocer un casino confiable" },
          { id: "es-legal", label: "¿Es legal en Perú?" },
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
        <SectionTitle>Dónde jugar: nuestro ranking para Perú</SectionTitle>
        <P>
          Empecemos por lo concreto, porque sabemos a qué viniste. Si quieres jugar en casino online desde Perú, estos son los que probamos y por los que ponemos la cara. La escena de BUTIsito se mueve en Stake (lo tienes último, por transparencia), pero arriba van los que para nosotros tienen el mejor combo de bono, catálogo y pagos para un jugador peruano de carne y hueso. No es una lista armada al voleo: cada uno pasó por nuestras manos antes de entrar.
        </P>
        <CasinoRanking casinos={ranking} infoColumnLabel="Juegos" />
        <P>
          ¿Por qué Betsson primero? Sencillo: tiene licencia MINCETUR (regulación peruana de verdad), acepta Yape y Plin, soporte en español que responde y bonos más claros. Inkabet, que metimos tercero, es 100% peruano y de los más conocidos del país. Stake es bacán para cripto, pero no es para cualquiera. Más abajo te lo desmenuzamos casino por casino.
        </P>
        <P>
          Un par de aclaraciones para que leas la tabla con criterio. Los bonos que ves son los reales y vigentes al momento de actualizar esta guía (la fecha la tienes arriba, se actualiza todos los meses). Las cifras de juegos son aproximadas. Y el orden no es capricho: responde a la combinación de bono, catálogo, pagos y confianza que probamos nosotros mismos.
        </P>
        <div className="mt-6"><CtaButton slug="betsson-peru" text="Probar Betsson Perú" /></div>
      </Section>

      {/* CÓMO ELEGIMOS */}
      <Section id="como-elegimos">
        <SectionTitle>Cómo armamos este ranking</SectionTitle>
        <P>
          Para que confíes en lo que decimos, te contamos cómo llegamos a este orden. No es al azar ni eso de “el que paga va primero” sin más criterio. Probamos cada casino con cuenta real: depositamos con Yape, jugamos, pedimos retiros y le escribimos al soporte a horas raras a propósito, para ver cómo responden cuando nadie lo espera.
        </P>
        <P>
          Miramos cuatro cosas. El <strong className="text-white">bono y sus condiciones</strong> (no solo cuánto te dan, sino el rollover y el plazo). El <strong className="text-white">catálogo</strong> (que tengan los slots que la gente busca). Los <strong className="text-white">pagos</strong> (que acepten Yape, Plin y que los retiros lleguen rápido). Y la <strong className="text-white">confianza</strong> (licencia MINCETUR o internacional seria, reputación de pagos, soporte a la altura).
        </P>
        <P>
          Y para que quede claro, porque es la duda que muchos tienen: sí, esta página tiene enlaces de afiliado. Si te registras por nuestros botones, podemos recibir una comisión del casino. A ti no te cuesta ni un sol más, y no condiciona el orden ni lo que opinamos. Si un casino no nos convence, no lo recomendamos por más que pague bien. Preferimos que vuelvas a leernos porque te dimos data honesta.
        </P>
        <P>
          Con esos cuatro filtros aplicados, Betsson queda primero por su combinación de licencia local, Yape/Plin y bonos claros; STARDA se lleva el segundo puesto por su catálogo brutal de slots; e Inkabet entra fuerte como la opción 100% peruana. Y así hasta Stake, que metimos último no porque sea malo, sino porque, para el jugador peruano promedio, las opciones de arriba son un mejor punto de partida.
        </P>
      </Section>

      {/* QUIÉN ES */}
      <Section id="quien-es" alt>
        <SectionTitle>¿Quién es BUTIsito?</SectionTitle>
        <P>
          Pongámoslo en contexto para el que recién cae. BUTIsito es Renato Rodolfo Butilier, un streamer peruano que se hizo un nombre en Kick con una comunidad fiel y un estilo cercano. Arrancó con contenido de videojuegos (Dota 2, Fall Guys y compañía) y, como muchos creadores de la región, fue sumando momentos de slots y casino, además de Just Chatting y entretenimiento con su gente.
        </P>
        <P>
          Su casa es Kick, donde transmite en español y mezcla gaming, casino y charla. Es uno de esos nombres que viene creciendo fuerte dentro de la escena peruana de streamers, y por eso cada vez más gente busca “en qué casino juega BUTIsito”. Bueno, a eso vinimos: a darte el contexto real y, sobre todo, a contarte dónde te conviene jugar a ti.
        </P>
        <P>
          Algo importante para ser honestos: a diferencia de otros streamers que tienen un acuerdo público y permanente con una sola plataforma, no hay una confirmación oficial y estable de un único casino exclusivo de BUTIsito. Lo que sí sabemos es que hace contenido de casino dentro de la escena peruana de Kick, donde la plataforma dominante es Stake. Por eso, en vez de inventarte un dato que no está confirmado, preferimos enfocarnos en lo que de verdad te sirve: dónde jugar bien y seguro.
        </P>
        <H3>Por qué su contenido de casino importa</H3>
        <P>
          Cuando un creador con comunidad se sienta a jugar slots en vivo, el impacto es real. La gente lo ve, los clips circulan, y un montón de personas descubren el casino online a través de él. Por eso es clave que esta guía exista y que la escribamos con honestidad: si vas a jugar, queremos que lo hagas bien informado, con expectativas realistas y sin ilusiones falsas, eligiendo un casino confiable y no el primero que aparezca en un clip.
        </P>
      </Section>

      {/* HISTORIA / ESCENA */}
      <Section id="historia-casino">
        <SectionTitle>BUTIsito y la escena peruana de casino en Kick</SectionTitle>
        <P>
          El contenido de casino de BUTIsito es parte de una ola que arrasó con el streaming en español en los últimos años, y en Perú tiene su propia identidad. Para entender el panorama, conviene mirar la película completa.
        </P>
        <P>
          El formato del slot-streaming explotó a nivel mundial, con referentes moviendo apuestas grandes en vivo. Funcionaba: las reacciones a un slot que explota son adictivas de ver, los clips vuelan y los acuerdos con las plataformas de casino eran generosos. Kick, que nació con una política amigable hacia el contenido de apuestas, se volvió el hogar natural de estos streamers, y en Perú se armó una camada fuerte de creadores que mezclan gaming y casino.
        </P>
        <P>
          Conviene entender por qué Kick y no Twitch. Twitch endureció sus reglas sobre contenido de casino hace unos años. Un montón de creadores se mudaron entonces a Kick, que nació con una política mucho más relajada. Cuando ves contenido de casino en Kick, estás viendo algo que en Twitch difícilmente existiría igual, y eso te da una pista de la industria que hay detrás.
        </P>
        <P>
          Que un creador haga este tipo de contenido no lo convierte ni en un genio de las apuestas ni en un villano: es entretenimiento dentro de un formato que paga bien. El punto donde nosotros ponemos el ojo no es en juzgar a nadie, sino en cuidarte a ti, porque la diferencia entre ver un stream y ponerte a apostar con tus lucas es enorme, y nadie te la explica mientras festeja un multiplicador gigante en cámara.
        </P>
      </Section>

      {/* STAKE / LA ESCENA */}
      <Section id="casino-de-la-escena" alt>
        <SectionTitle>Stake: el casino de la escena peruana, al detalle</SectionTitle>
        <P>
          Como te contamos, la plataforma dominante en la escena de streamers peruanos de Kick es <strong className="text-white">Stake</strong>. Si sigues a los creadores de casino del país, seguro la viste mil veces: la interfaz oscura, las apuestas, los números subiendo y bajando a una velocidad que marea.
        </P>
        <P>
          Stake es, probablemente, la plataforma de casino más asociada al mundo del streaming a nivel global. Nació fuerte en cripto y se hizo gigante patrocinando creadores de contenido. Tiene más de 3.000 juegos entre slots, mesas en vivo y los famosos originals (Plinko, Crash, Mines), procesa pagos en cripto rapidísimo, y una comunidad enorme. En Perú opera con su versión local.
        </P>
        <H3>¿Por qué los streamers eligen Stake?</H3>
        <P>
          Por dos razones principales. La primera, comercial: Stake tiene acuerdos con un montón de creadores, y eso explica buena parte de su presencia en los streams. Es su trabajo y no tiene nada de raro, pero es justo el motivo por el que no puedes tomar “lo veo jugando en Stake” como “Stake es el mejor casino para mí”. La segunda, práctica: la cripto y los slots que mejor rinden en stream. Pero “ideal para hacer contenido” no es lo mismo que “ideal para tu bolsillo”.
        </P>
        <ProsCons
          pros={[
            "Cripto rápida: depósitos y retiros en minutos, sin pasar por bancos",
            "Catálogo enorme con los slots más streameados del mundo",
            "Los originals (Plinko, Crash, Mines) que no encuentras en otros lados",
            "Marca global con años de trayectoria y comunidad gigante",
          ]}
          cons={[
            "Pensado para usuarios de cripto: si no manejas USDT o BTC, hay curva",
            "Los bonos son menos claros y generosos que los de Betsson o STARDA",
            "Soporte en español menos ágil que el de los casinos del ranking",
            "Para Perú, pierdes la comodidad de Yape, Plin y PagoEfectivo",
          ]}
        />
        <P>
          Conclusión honesta: Stake es un casino serio y puedes jugar ahí si te manejas con cripto. Pero si recién arrancas, o si quieres bonos más jugosos y pagar con Yape o Plin, hay opciones mejores. Por eso va último en nuestro ranking. No es un palo a Stake, es darte el dato real.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="stake" text="Ver Stake" />
          <CtaButton slug="starda-casino" text="Probar STARDA (recomendado)" />
        </div>
      </Section>

      {/* SLOTS */}
      <Section id="slots">
        <SectionTitle>Los slots populares en la escena de BUTIsito</SectionTitle>
        <P>
          Si buscaste “casino slots BUTIsito” o qué tragamonedas se ven en su contenido, esta es tu sección. En la escena peruana de casino se juegan los slots más populares del momento: esos de volatilidad media-alta que te tienen 50 giros sin pagar nada y de repente explotan con un multiplicador gigante. Son los que dan los clips virales. Acá te dejamos los más comunes, con la data real de cada uno.
        </P>
        <P>
          Antes de la lista, un apunte importante: que estén de moda no significa que sean los que más te convienen a ti. Son slots espectaculares para ver en stream justamente porque son extremos, y eso que los hace tan entretenidos en cámara es lo mismo que los hace peligrosos para una billetera normal. Mira la lista con curiosidad, pruébalos en demo si quieres, pero no asumas que vas a tener la misma suerte que se ve en los clips.
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
          ¿Notas un patrón? Casi todos son de Pragmatic Play y de Hacksaw Gaming, los dos proveedores que dominan el slot-streaming. Sweet Bonanza y Gates of Olympus son de los más jugados del planeta, y comparten ese estilo de pay-anywhere (ganas juntando símbolos iguales en cualquier lado) y tumbles (los ganadores desaparecen y caen nuevos, encadenando premios).
        </P>
        <H3>Cómo funcionan estos slots (para que no te agarren desprevenido)</H3>
        <P>
          Entender la mecánica te ayuda a no frustrarte. En estos slots no hay líneas de pago tradicionales: ganas cuando aparecen 8 o más símbolos iguales en cualquier posición. Cuando pasa, explotan y caen nuevos, encadenando premios. Y si en esa cadena caen los multiplicadores, ahí ves esos x100, x250 o más que vuelan la pantalla. La parte que los streams no muestran tanto: para llegar a los giros gratis donde está la verdadera plata, necesitas que caigan varios scatters, y eso pasa cada muchísimos giros.
        </P>
        <P>
          Un consejo de los que no te dan en un stream: estos slots son de alta volatilidad. La mayoría de las veces te van a comer el saldo de a poco, y muy de vez en cuando te van a dar un premio grande. Los streamers apuestan montos que para ti serían una locura, y aun así pierden seguido. Si vas a probarlos, hazlo con apuestas chicas. Y si quieres algo más tranquilo, busca slots de volatilidad media o baja: ganas más seguido y la sesión te dura mucho más.
        </P>
        <P>
          Buena noticia: estos slots los encuentras en prácticamente todos los casinos de nuestro ranking. STARDA, SOL, FRESH y MONRO tienen catálogos completos de Pragmatic y Hacksaw, así que puedes jugar los mismos títulos que ves en los streams pero con un bono de bienvenida que te da más margen.
        </P>
        <div className="mt-6"><CtaButton slug="starda-casino" text="Jugar slots en STARDA" /></div>
      </Section>

      {/* GANANCIAS */}
      <Section id="ganancias" alt>
        <SectionTitle>Los clips de ganancias: la letra chica</SectionTitle>
        <P>
          En el contenido de casino abundan los clips de ganancias enormes, reacciones épicas, el chat enloquecido. Son clips brutales, no lo vamos a negar. El problema es lo que esos clips no te muestran, y acá tenemos que ser honestos contigo aunque no sea lo más vendedor.
        </P>
        <H3>Lo que el clip te muestra vs. lo que no</H3>
        <P>
          Un clip de 30 segundos te muestra el momento exacto en que un slot de alta volatilidad pagó fuerte. Lo que no te muestra son las horas previas perdiendo, las sesiones enteras donde el saldo se fue a cero, ni el hecho de que el streamer suele jugar con un bankroll grande y, en muchos casos, con respaldo del casino. La ganancia es real como momento, pero está fuera de contexto si la tomas como “esto te puede pasar a ti jugando un rato”.
        </P>
        <H3>Por qué la casa siempre gana (la matemática sin vueltas)</H3>
        <P>
          Esto no es opinión nuestra: es matemática. Todos los juegos de casino tienen una ventaja de la casa (house edge), un porcentaje que, a lo largo de millones de jugadas, siempre queda para el casino. En los slots se ve en el RTP: si un slot tiene 96% de RTP, devuelve 96 de cada 100 apostados en promedio, y el resto es la ganancia de la casa. A corto plazo puedes ganar (por eso existen los clips), pero a largo plazo esa ventaja siempre se impone.
        </P>
        <P>
          ¿Esto quiere decir que está mal jugar? Para nada. Quiere decir que tienes que jugar entendiendo qué es: un entretenimiento que, estadísticamente, te va a costar plata, igual que te cuesta ir al cine o salir a comer. La diferencia es que en el casino existe la ilusión de que puedes ganar, y esa ilusión, reforzada por los clips, es la que hace que mucha gente apueste más de lo que debería. Si tienes clara la matemática, juegas más tranquilo y con expectativas realistas.
        </P>
        <div className="rounded-2xl bg-[#f59e0b]/[0.08] border border-[#f59e0b]/25 p-6 my-6">
          <p className="text-[#fbbf24] font-bold mb-2">⚠️ El dato que cambia todo</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
            Los streamers de casino muestran sus mejores momentos, no el balance real. Si vas a jugar, define un presupuesto fijo antes de empezar, no persigas las pérdidas, y trata el casino como un gasto de entretenimiento, nunca como una forma de ganar plata.
          </p>
        </div>
      </Section>

      {/* CARA A CARA */}
      <Section id="stake-vs-ranking">
        <SectionTitle>Stake vs. nuestros recomendados: cara a cara</SectionTitle>
        <P>
          Para que lo veas de un pantallazo, armamos esta comparativa entre Stake (la plataforma de la escena) y los dos que más recomendamos para Perú (Betsson e Inkabet). No es que uno sea bueno y otro malo: sirven para perfiles distintos.
        </P>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] my-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-4 font-bold">Característica</th>
                <th className="px-4 py-4 font-bold">Stake</th>
                <th className="px-4 py-4 font-bold">Betsson</th>
                <th className="px-4 py-4 font-bold">Inkabet</th>
              </tr>
            </thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Licencia", "Internacional", "MINCETUR", "MINCETUR"],
                ["Bono", "Menos claro", "300 giros gratis", "Hasta S/500 + 300 giros"],
                ["Pago estrella", "Cripto (USDT, BTC)", "Yape y Plin", "Yape y Plin"],
                ["Ideal para", "Usuarios de cripto", "Todo público", "Lo 100% peruano"],
                ["Soporte en español", "Correcto", "Muy ágil", "Local 24/7"],
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
          Lo ves claro: si tu mundo es la cripto y quieres los originals que hicieron famoso a Stake, ese es tu lugar. Pero si quieres un bono más jugoso, pagar con Yape o Plin y un soporte que responda al toque, Betsson o Inkabet te van a tratar mejor. Prueba y saca tus propias conclusiones.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="betsson-peru" text="Probar Betsson" />
          <CtaButton slug="inkabet" text="Probar Inkabet" />
        </div>
      </Section>

      {/* POR QUÉ ESTOS CASINOS */}
      <Section id="por-que-estos-casinos">
        <SectionTitle>¿Dónde te conviene jugar? Te lo desglosamos</SectionTitle>
        <P>
          Más allá de dónde se mueva la escena, lo importante es dónde te conviene jugar a ti. Para eso probamos cada uno de estos casinos a fondo. Te lo contamos rápido y al grano.
        </P>
        <H3>Betsson — el #1 para empezar</H3>
        <P>
          Si nunca jugaste online o quieres ir a lo seguro, empieza acá. Betsson tiene licencia MINCETUR (regulación peruana de verdad), acepta Yape y Plin, y el soporte en español responde de verdad. Tiene una de las mejores secciones de casino en vivo del mercado. Probamos un retiro con Yape un martes a la noche y en menos de 2 horas teníamos las lucas. Es la opción más redonda para el jugador promedio.
        </P>
        <div className="my-5"><CtaButton slug="betsson-peru" text="Abrir cuenta en Betsson" /></div>
        <H3>Inkabet — la opción 100% peruana</H3>
        <P>
          Inkabet es uno de los casinos más conocidos del Perú, con licencia MINCETUR y un bono de hasta S/500 + 300 giros gratis. Acepta Yape y Plin, el soporte es local y responde rápido, y tiene una buena mezcla de casino y apuestas deportivas. Si quieres jugar en algo de acá, regulado y con cara conocida, Inkabet cumple de sobra.
        </P>
        <div className="my-5"><CtaButton slug="inkabet" text="Jugar en Inkabet" /></div>
        <H3>STARDA, SOL, FRESH y MONRO — el pelotón de los slots</H3>
        <P>
          Si lo tuyo son las tragamonedas, los Royal Partners son tu lugar. <strong className="text-white">STARDA</strong> tiene 3.800+ juegos y torneos semanales; <strong className="text-white">SOL</strong> es ideal para principiantes por su rollover bajo (x30); <strong className="text-white">FRESH</strong> es el rey del catálogo con 4.500+ títulos; y <strong className="text-white">MONRO</strong> tiene el bono más alto en porcentaje, 150%. Todos tienen los Pragmatic y Hacksaw que ves en los streams, con bonos más claros que Stake.
        </P>
        <div className="my-5 flex flex-wrap gap-3">
          <CtaButton slug="starda-casino" text="Probar STARDA" />
          <CtaButton slug="sol-casino" text="Probar SOL" />
          <CtaButton slug="fresh-casino" text="Probar FRESH" />
        </div>
        <H3>Y Stake, ¿cuándo sí?</H3>
        <P>
          Stake tiene sentido si ya manejas cripto, si te gustan los originals tipo Plinko o Crash, y si valoras los retiros instantáneos en USDT por encima de un bono más grande. Es un casino legítimo, no estamos diciendo lo contrario. Solo decimos que para la mayoría de los peruanos que recién se meten, los de arriba son un mejor punto de partida.
        </P>
      </Section>

      {/* CASINO CONFIABLE */}
      <Section id="casino-confiable" alt>
        <SectionTitle>Cómo reconocer un casino confiable</SectionTitle>
        <P>
          Antes de meter tus lucas en cualquier lado, conviene saber distinguir un casino serio de uno turbio. Es más fácil de lo que parece si sabes qué mirar. Te dejamos la checklist que usamos nosotros cada vez que evaluamos una plataforma nueva.
        </P>
        <P>
          <strong className="text-white">Uno: la licencia visible.</strong> Un casino serio muestra su licencia en el pie de página (MINCETUR para los peruanos, Curaçao o Malta para los internacionales). Si no la ves, mala señal. <strong className="text-white">Dos: reputación de pagos.</strong> Busca el nombre del casino en foros como AskGamblers o Trustpilot y fíjate qué dice la gente de los retiros. Un patrón de quejas por pagos es una bandera roja gigante.
        </P>
        <P>
          <strong className="text-white">Tres: métodos de pago locales.</strong> Que acepte Yape, Plin y transferencias de bancos peruanos es buena señal. <strong className="text-white">Cuatro: términos legibles.</strong> Los buenos casinos tienen sus condiciones de bono escritas de forma entendible. Si la letra chica es un laberinto, desconfía. <strong className="text-white">Cinco: soporte que responde.</strong> Prueba el chat antes de depositar. Cómo y cuándo te responden te dice mucho de cómo te van a tratar el día que tengas un problema.
        </P>
        <P>
          Todos los casinos de nuestro ranking pasan esta checklist con holgura, porque justamente la aplicamos antes de recomendarlos. No los elegimos por el bono más grande, sino por el combo completo de confianza, pagos y experiencia. Esa es la diferencia entre un ranking armado con criterio y una lista de los que más pagan por aparecer.
        </P>
      </Section>

      {/* LEGALIDAD */}
      <Section id="es-legal">
        <SectionTitle>¿Es legal jugar en casino online en Perú?</SectionTitle>
        <P>
          Sí, totalmente legal. Desde febrero de 2024, el Perú regula el juego online de forma seria a través de <strong className="text-white">MINCETUR</strong> y la Ley N° 31557. Antes era tierra de nadie, pero ahora el marco legal está bastante claro y ya hay más de 60 operadores con licencia oficial. Por eso puedes jugar tranquilo siempre que elijas un casino autorizado.
        </P>
        <P>
          Además de los operadores con licencia MINCETUR (como Betsson o Inkabet), hay plataformas internacionales que funcionan con licencias de Curaçao o Malta. Esas también son válidas: significa que están reguladas por otra jurisdicción, con sus propios controles y mecanismos de reclamo. Miles de peruanos las usan a diario sin problema. Lo que cambia es a quién le reclamas si algo sale mal.
        </P>
        <H3>El consejo más importante</H3>
        <P>
          Huí de cualquier casino que no muestre su licencia de forma clara. Si entras a un sitio y no encuentras en el pie de página quién lo regula ni el número de licencia, ciérralo. No importa cuán lindo sea el bono. Los casinos truchos existen, y el problema no es solo jugar en algo ilegal: es que el día que ganes, capaz no te pagan y no tienes a quién reclamarle. Por eso armamos rankings, para que no tengas que arriesgarte probando a ciegas.
        </P>
        <P>
          Y un detalle no menor: jugar es solo para mayores de 18 años. Todos los casinos serios te van a pedir verificación de identidad (el KYC) antes de dejarte retirar. No es para molestarte, es requisito legal. Hazlo apenas te registras y listo. Si un casino con licencia MINCETUR no te paga, puedes meter una queja formal al ministerio, que es la ventaja de jugar en algo regulado localmente.
        </P>
      </Section>

      {/* BONOS */}
      <Section id="bonos" alt>
        <SectionTitle>Los bonos de bienvenida, explicados sin vueltas</SectionTitle>
        <P>
          Una de las grandes diferencias entre jugar en Stake y jugar en los casinos de nuestro ranking es el bono de bienvenida. Y como es un tema donde mucha gente se enreda (o acepta sin leer y después se queja), te lo explicamos bien.
        </P>
        <H3>¿Qué es un bono de bienvenida?</H3>
        <P>
          Es la plata o los giros gratis que el casino te regala por registrarte y hacer tu primer depósito. Lo típico es el bono de 100%: tú pones una cantidad y el casino te suma otro tanto. MONRO incluso tira un 150%, de los más altos que vas a encontrar. Suena a regalo, y en parte lo es, pero tiene una condición clave: el rollover.
        </P>
        <H3>El rollover: la letra chica que nadie lee</H3>
        <P>
          El rollover (o requisito de apuesta) es la cantidad de veces que tienes que apostar el bono antes de poder retirar lo que ganes con él. Si te dan S/100 de bono con rollover x30, tienes que apostar S/3.000 antes de sacar. Parece mucho, pero con slots de apuestas chicas se va cumpliendo de a poco. La clave: un bono con rollover bajo (tipo x30, como el de SOL) vale más que un bono enorme con rollover altísimo.
        </P>
        <div className="rounded-2xl bg-[#3b82f6]/[0.06] border border-[#3b82f6]/20 p-6 my-6">
          <p className="text-[#60a5fa] font-bold mb-2">💡 Regla de oro de los bonos</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
            Un bono no es plata gratis que puedes retirar al toque: es un saldo para jugar con condiciones. A veces, si piensas retirar rápido, conviene rechazar el bono y jugar solo con tu depósito. Suena raro, pero es la decisión más inteligente en muchos casos.
          </p>
        </div>
        <P>
          Otra cosa: no todos los juegos aportan igual al rollover. Las slots suelen contar al 100%, pero los juegos de mesa a veces aportan solo un 10% o nada. Si tu plan es cumplir el rollover, las tragamonedas son tus aliadas. Y ojo con los giros gratis: las ganancias que sacas de ellos casi siempre también tienen su propio rollover. Antes de aceptar cualquier bono, haz la cuenta mental del monto por el rollover y fíjate si es razonable para cómo juegas tú.
        </P>
        <div className="mt-2"><CtaButton slug="sol-casino" text="Ver el bono de SOL (rollover x30)" /></div>
      </Section>

      {/* COMPARATIVA DE BONOS */}
      <Section id="comparativa-bonos">
        <SectionTitle>Comparativa de bonos: ¿cuál te conviene?</SectionTitle>
        <P>
          Ya que hablamos tanto de bonos, te dejamos una comparativa rápida de los que ofrecen los casinos de nuestro ranking, para que veas de un vistazo cuál pega más con tu forma de jugar. Recuerda: el número grande no lo es todo, lo que manda es el combo entre el monto, el rollover y para qué tipo de jugador está pensado.
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
                ["Betsson", "300 giros gratis", "Empezar seguro, Yape/Plin"],
                ["STARDA", "100% + 500 giros", "Fanáticos de los slots"],
                ["Inkabet", "Hasta S/500 + 300 giros", "Lo 100% peruano"],
                ["SOL", "100% + 500 giros", "Principiantes (rollover x30)"],
                ["FRESH", "100% + 500 giros", "Cazadores de catálogo"],
                ["MONRO", "150% primer depósito", "Maximizar el saldo del bono"],
                ["Stake", "S/50 freebet o bono", "Usuarios de cripto"],
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
          Como ves, no hay un bono que sea el mejor para todos: hay un bono que es el mejor para ti. Y un truco que pocos aplican: no tienes por qué aceptar el primero que veas. Puedes crearte cuenta en dos o tres casinos del ranking, comparar sus bonos y catálogos con tu propia experiencia, y quedarte jugando en el que mejor te trate. Total, todos son de confianza.
        </P>
      </Section>

      {/* REGISTRO */}
      <Section id="como-registrarte" alt>
        <SectionTitle>Cómo crear tu cuenta paso a paso</SectionTitle>
        <P>
          Si nunca te registraste en un casino online, capaz piensas que es un trámite eterno. La verdad es que no: en menos de cinco minutos estás adentro. Te dejamos el paso a paso con Betsson de ejemplo, pero en cualquiera del ranking es casi igual.
        </P>
        <div className="space-y-4 my-6">
          {[
            { n: 1, t: "Entrá desde el botón oficial", d: "Haz clic en cualquiera de los botones verdes de esta página. Te llevan al sitio oficial del casino, sin intermediarios raros, y aseguran que el bono se active bien." },
            { n: 2, t: "Completá el registro", d: "Te van a pedir correo, contraseña, nombre, fecha de nacimiento (mayor de 18) y datos básicos. Cargá tu info real, porque después en la verificación tiene que coincidir." },
            { n: 3, t: "Verifica tu cuenta (KYC)", d: "Subí una foto de tu DNI y, a veces, un selfie. Es requisito legal y conviene hacerlo el primer día, así cuando retires no hay demoras ni excusas." },
            { n: 4, t: "Haz tu primer depósito", d: "Elige el método que más uses (Yape, Plin, transferencia, tarjeta o cripto). Si quieres el bono, actívalo antes de confirmar. Fíjate el depósito mínimo para el bono." },
            { n: 5, t: "A jugar (con cabeza)", d: "Ya tienes tu saldo más el bono. Busca tus slots favoritos, define cuánto estás dispuesto a gastar, y disfruta. Recuerda: es entretenimiento, no trabajo." },
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
        <div className="mt-4"><CtaButton slug="betsson-peru" text="Crear cuenta en Betsson" /></div>
      </Section>

      {/* MÉTODOS DE PAGO */}
      <Section id="metodos-pago">
        <SectionTitle>Métodos de pago en Perú</SectionTitle>
        <P>
          Acá se nota la diferencia entre jugar en Stake (puro cripto) o en un casino con onda local. Te contamos qué opciones tienes y cuál conviene según tu caso, porque este punto, aunque parezca aburrido, es de los que más impacto tienen en tu experiencia.
        </P>
        <H3>Yape y Plin: lo más cómodo</H3>
        <P>
          Para el peruano promedio, Yape y Plin son el rey. Los usas para todo, ya los tienes en el celu, y los casinos con licencia MINCETUR los aceptan. El depósito cae al toque, literal en segundos, y los retiros suelen llegar en menos de 24 horas. Probamos un retiro con Yape en Betsson un martes a la noche y en hora y media teníamos las lucas. Si quieres simpleza total, este es tu camino.
        </P>
        <H3>Tarjetas, transferencias y PagoEfectivo</H3>
        <P>
          Visa y Mastercard funcionan para depositar en casi todos los casinos. También aceptan transferencias por BCP, BBVA e Interbank, y PagoEfectivo para los que prefieren pagar en efectivo. Cada plataforma tiene su combinación, pero entre los del ranking vas a encontrar el método que uses.
        </P>
        <H3>Cripto: el camino de Stake</H3>
        <P>
          Con cripto (Bitcoin, USDT) los depósitos y retiros son casi instantáneos, sin pasar por bancos. Si ya manejas cripto, es una ventaja real. Si no tienes idea, no te compliques: arranca con Yape o Plin en un casino con licencia MINCETUR y deja la cripto para más adelante.
        </P>
        <H3>¿Cuánto tardan los retiros?</H3>
        <P>
          Depositar es fácil en todos lados; lo que separa a un buen casino de uno malo es la velocidad para devolverte tu plata. Los retiros con Yape suelen llegar en menos de 24 horas (a veces en un par de horas), los de cripto en minutos, y las transferencias bancarias entre unas horas y un día hábil. La primera vez siempre tarda más por la verificación, así que haz el KYC apenas te registras. Si un casino te pone trabas raras para retirar, desconfía: los serios pagan sin drama.
        </P>
      </Section>

      {/* PRIMERA SESIÓN */}
      <Section id="primera-sesion" alt>
        <SectionTitle>Tu primera sesión de slots, bien hecha</SectionTitle>
        <P>
          Si después de leer todo esto quieres probar, perfecto, pero hagámoslo con cabeza. Te dejamos una mini guía de cómo encarar tu primera sesión de slots para que sea entretenida y no termine en un mal rato. Es lo que le diríamos a un pata que nunca jugó.
        </P>
        <P>
          Primero, define tu presupuesto de entretenimiento: un monto que si lo pierdes entero, no te cambia el mes. Ese es tu techo, y no se toca. Segundo, elige un slot de volatilidad media para arrancar (no te tires de una a los Hacksaw de volatilidad extrema). Tercero, pon apuestas chicas: la idea es que el presupuesto te dure y disfrutes muchos giros, no que lo quemes en cinco minutos buscando el premio gordo.
        </P>
        <P>
          Cuarto, fíjate un punto de salida tanto para arriba como para abajo. Si ganas y llegas a una meta que te pusiste, retira y cierra la sesión contento; no caigas en el “una más a ver si gano más”. Y si pierdes tu presupuesto del día, se terminó por hoy, sin dramas. Quinto: disfruta el rato. El objetivo es pasarla bien, no hacer plata. Una última cosa que mucha gente no sabe: no necesitas apostar más para “acercarte” a un premio. El RTP es un porcentaje fijo, da igual si apuestas chico o grande; lo único que cambia es el tamaño de los premios y las pérdidas.
        </P>
        <div className="mt-4"><CtaButton slug="sol-casino" text="Empezar tranquilo en SOL" /></div>
      </Section>

      {/* TIPS SLOTS */}
      <Section id="jugar-slots-tips">
        <SectionTitle>Cómo jugar slots con cabeza</SectionTitle>
        <P>
          Ya sabemos que viniste por las slots. Y está bien: son divertidas y los streams las hacen ver como una montaña rusa. Pero hay una diferencia abismal entre cómo juega un streamer y cómo deberías jugar tú. Estos consejos no te los da nadie en un stream, pero te pueden salvar la billetera.
        </P>
        <H3>Entiende la volatilidad</H3>
        <P>
          Los slots de moda son de alta volatilidad: pagan poco la mayor parte del tiempo y muy de vez en cuando sueltan un premio gordo. Genial para un clip, brutal para un bankroll chico. Si recién arrancas, prueba slots de volatilidad media o baja: ganas más seguido y la sesión dura más.
        </P>
        <H3>Mira el RTP y usa el modo demo</H3>
        <P>
          El RTP es el porcentaje teórico que un slot devuelve a largo plazo. Elige slots con 96% o más. Y antes de apostar plata real, juega un rato en modo demo (gratis, con dinero ficticio) para entender la mecánica. Los streamers no usan demo porque su contenido es el espectáculo de la plata real, pero tú no tienes por qué.
        </P>
        <H3>Define límites y respetalos</H3>
        <P>
          Lo más importante y lo más difícil. Antes de empezar, decide cuánto vas a jugar y cuándo vas a parar. Y la regla sagrada: nunca persigas las pérdidas. Ese “una más para recuperar” es el camino directo a perder el doble.
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
            "Jugar con plata que necesitas para gastos reales",
            "Copiar las apuestas altas de un streamer sin su bankroll",
            "Creer que los clips de millones reflejan una sesión normal",
          ]}
        />
      </Section>

      {/* ERRORES */}
      <Section id="errores-comunes" alt>
        <SectionTitle>Los 5 errores del que copia a un streamer</SectionTitle>
        <P>
          Después de ver mucho contenido de casino, identificamos los errores que se repiten en el que empieza a jugar copiando lo que ve en un stream. Si los esquivas, ya juegas mejor que la mayoría.
        </P>
        <div className="space-y-4 my-6">
          {[
            { t: "Copiar las apuestas altas sin tener el bankroll", d: "Los streamers apuestan montos que para ellos son parte de su trabajo. Si los copias con tu sueldo, fundes el saldo en minutos. Apostá en proporción a TU bankroll." },
            { t: "Creer que el clip viral es una sesión normal", d: "La ganancia gigante es el mejor momento de horas de stream. Por cada clip de ganancia hay muchas sesiones perdedoras que no se hacen virales." },
            { t: "Perseguir las pérdidas", d: "El error más caro. Después de perder viene el una más para recuperar, y esa lógica transforma una pérdida chica en un problema grande." },
            { t: "Usar el bonus buy sin entenderlo", d: "Comprar el bonus cuesta carísimo. Los streamers lo hacen para el espectáculo; para un bankroll normal, es la forma más rápida de quedarte sin saldo." },
            { t: "No leer las condiciones del bono", d: "Aceptar un bono sin mirar el rollover es el clásico. Después te quejas de que no te dejan retirar, cuando no cumpliste una condición que estaba escrita." },
          ].map((e, i) => (
            <div key={e.t} className="flex gap-4 rounded-2xl bg-[#141414] border border-white/[0.06] p-5">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center font-black text-white shrink-0">{i + 1}</span>
              <div>
                <h3 className="text-white font-bold mb-1">{e.t}</h3>
                <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">{e.d}</p>
              </div>
            </div>
          ))}
        </div>
        <P>
          Si lees esta lista y piensas “a mí no me va a pasar”, justo ese pensamiento es el que mete a la gente en problemas. Nadie planea perder de más; pasa de a poco, en el calor del momento. Por eso lo mejor que puedes hacer es decidir tus límites antes de empezar, cuando tienes la cabeza fría, y respetarlos pase lo que pase. El casino va a estar ahí mañana; tu plata, si la cuidas, también.
        </P>
      </Section>

      {/* ESCENA */}
      <Section id="escena-streamers">
        <SectionTitle>BUTIsito y la escena de streamers de casino</SectionTitle>
        <P>
          BUTIsito es parte de una escena enorme de streamers de casino en español que explotó en los últimos años, sobre todo en Kick. Entender ese contexto te ayuda a mirar todo esto con más perspectiva.
        </P>
        <P>
          En Perú hay una camada fuerte de creadores que mezclan gaming y casino, con Andynsane como uno de los referentes; en Argentina están Coscu y Santutu; en Colombia, MrStiven Tc; y a nivel internacional, monstruos como xQc o Roshtein que mueven apuestas que dan vértigo. Todos comparten el mismo formato: slots de alta volatilidad, reacciones grandes, y clips que circulan por todas las redes.
        </P>
        <P>
          Cuando entiendes que es una industria (con acuerdos, con producción, con un modelo de negocio claro), dejas de ver los streams como “un pata que gana fortunas jugando” y empiezas a verlos como lo que son: entretenimiento profesional. Disfruta el contenido, entiende cómo funciona el negocio, y si decides jugar, hazlo con un casino confiable y con la cabeza fría. Si quieres saber dónde juegan los demás, lo estamos investigando uno por uno.
        </P>
        <div className="mt-4"><Link href="/streamers" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#a855f7]/40 text-[#c084fc] font-bold text-sm uppercase tracking-wide transition-all hover:bg-[#a855f7]/10">Ver todos los streamers →</Link></div>
      </Section>

      {/* GLOSARIO */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario: las palabras que vas a escuchar</SectionTitle>
        <P>
          Si estás empezando en el casino online (o si miras streams de slots), vas a escuchar términos que capaz no conoces. Acá un mini diccionario para que no te pierdas.
        </P>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            { t: "RTP (Return to Player)", d: "Porcentaje teórico que un juego devuelve a largo plazo. RTP de 96% = devuelve 96 de cada 100 apostados, en promedio." },
            { t: "Volatilidad", d: "Qué tan seguido y qué tan grande paga un slot. Alta = premios raros pero grandes. Baja = premios frecuentes y chicos." },
            { t: "Rollover", d: "Las veces que tienes que apostar un bono antes de poder retirar. Bono de S/100 con rollover x30 = apostar S/3.000." },
            { t: "Tumbles", d: "Mecánica donde los símbolos ganadores desaparecen y caen nuevos, encadenando premios. Típica de Sweet Bonanza y Sugar Rush." },
            { t: "Multiplicador", d: "Valor que multiplica tu premio. En Gates of Olympus pueden aparecer multiplicadores enormes que vuelan la pantalla." },
            { t: "Free Spins", d: "Giros gratis en slots. Las ganancias suelen tener su propio rollover, así que lee las condiciones." },
            { t: "KYC", d: "Verificación de identidad. Te piden DNI y a veces selfie. Es requisito legal antes de retirar." },
            { t: "House Edge", d: "La ventaja matemática del casino. Es por qué, a la larga, la casa siempre gana." },
            { t: "Bankroll", d: "El total de plata que destinas a jugar. Debería ser lo que puedes perder sin drama." },
            { t: "Originals", d: "Juegos propios de plataformas como Stake (Plinko, Crash, Mines) que no encuentras en casinos tradicionales." },
            { t: "MINCETUR", d: "El ministerio que regula y otorga licencias a los casinos online en Perú." },
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
          No nos íbamos a ir sin esto. El casino no es un trabajo ni una inversión. Es entretenimiento que cuesta plata, como ir al cine. Y como todo entretenimiento que cuesta plata, hay que ponerle límites.
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
        <SectionTitle>Preguntas frecuentes sobre el casino de BUTIsito</SectionTitle>
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
          Recapitulemos. La pregunta con la que llegaste era “¿en qué casino juega BUTIsito?”, y la respuesta honesta es que hace contenido de casino en <strong className="text-white">Kick</strong>, dentro de la escena peruana donde Stake es la plataforma dominante, sin un acuerdo único confirmado de forma pública. Eso es lo que sabemos, y preferimos decírtelo así antes que inventarte un dato.
        </P>
        <P>
          Pero si tu pregunta de fondo era “¿y dónde juego yo?”, ahí sí somos contundentes: para la mayoría de los peruanos, arrancar por <strong className="text-white">Betsson</strong>, por <strong className="text-white">Inkabet</strong> (lo 100% nacional) o por <strong className="text-white">STARDA</strong> (el paraíso de los slots) es una jugada más inteligente que copiar a cualquier streamer. Stake es legítimo y puedes usarlo si te manejas con cripto, pero no es necesariamente tu mejor punto de partida.
        </P>
        <P>
          Y por encima de qué casino elijas, lo más importante: juega con la cabeza fría. El casino es entretenimiento, no un trabajo. Pon límites, respetalos, y disfruta los slots por lo que son: un juego. El mejor casino siempre va a ser el que mejor se adapte a ti, no el que más suene en los streams.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="betsson-peru" text="Empezar con Betsson" />
          <CtaButton slug="inkabet" text="Probar Inkabet" />
        </div>
      </Section>

      {/* LINKS */}
      <Section id="seguir-leyendo" alt>
        <SectionTitle>Sigue leyendo</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/peru/mejores-casinos-online" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Mejores casinos en Perú</p>
            <p className="text-[#71717a] text-sm">El ranking completo, con bonos verificados.</p>
          </Link>
          <Link href="/streamers/casino-andynsane" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">El casino de Andynsane</p>
            <p className="text-[#71717a] text-sm">Otro grande de la escena peruana de Kick.</p>
          </Link>
          <Link href="/peru/ruleta-online" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Ruleta online en Perú</p>
            <p className="text-[#71717a] text-sm">Las mejores mesas en vivo para peruanos.</p>
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
