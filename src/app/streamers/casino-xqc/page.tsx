import type { Metadata } from "next";
import Link from "next/link";
import CasinoRanking, { CasinoRankingItem } from "@/components/CasinoRanking";
import TableOfContents from "@/components/TableOfContents";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "¿En qué casino juega xQc? Guía 2026",
  description:
    "xQc juega en Stake, que le paga $200.000 por stream. Te mostramos sus slots, sus cifras récord y dónde jugar vos con mejores bonos desde LATAM.",
};

/* ───────── Ranking: afiliados LATAM primero, Stake (casino real de xQc) después ───────── */
const ranking: CasinoRankingItem[] = [
  { rank: 1, name: "Betsson", slug: "betsson-latam", bonus: "¡Duplica tu primer depósito!", rating: 9.5, highlight: true, badge: "⭐ Recomendado", infoText: "2 500+ juegos" },
  { rank: 2, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.3, badge: "🔥 TOP", infoText: "3 800+ juegos" },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.1, infoText: "4 000+ juegos" },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.0, infoText: "3 500+ juegos" },
  { rank: 5, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, infoText: "4 500+ juegos" },
  { rank: 6, name: "Stake", slug: "stake", bonus: "Bono primer depósito + giros gratis", rating: 8.8, badge: "xQc juega acá", infoText: "3 000+ juegos" },
];

const favoriteSlots = [
  { name: "Sugar Rush", provider: "Pragmatic Play", note: "Uno de los que más se le ven a xQc. Grilla de 7x7 con zonas de multiplicador que se acumulan. Volatilidad alta y potencial de premio enorme." },
  { name: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", note: "El western de la volatilidad extrema, con potencial de 12.500x. Uno de los favoritos de xQc para esos clips de pantalla explotada que dan la vuelta al mundo." },
  { name: "The Dog House", provider: "Pragmatic Play", note: "Wilds pegajosos con multiplicador en los giros gratis. Un clásico que aparece seguido en sus sesiones largas." },
  { name: "Gates of Olympus", provider: "Pragmatic Play", note: "Zeus tirando rayos y multiplicadores que caen también en el juego base. El slot más streameado del mundo, infaltable." },
  { name: "Sweet Bonanza", provider: "Pragmatic Play", note: "El de los caramelos. Pay-anywhere, tumbles y multiplicadores hasta 100x. Visualmente vibrante y con potencial explosivo." },
];

const faqItems = [
  {
    q: "¿En qué casino juega xQc?",
    a: "xQc juega en Stake, que es además su principal patrocinador. Hace sus sesiones de slots, blackjack y juegos originals en sus transmisiones de Kick. Eso sí: que xQc juegue ahí no significa que sea la mejor opción para vos. En nuestro ranking ponemos primero los casinos que probamos y recomendamos para LATAM (Betsson, STARDA, SOL, MONRO, FRESH), y dejamos a Stake en la lista por transparencia.",
  },
  {
    q: "¿Cuánto le paga Stake a xQc por stream?",
    a: "Según declaró el propio xQc, Stake le paga alrededor de 200.000 dólares por cada transmisión de casino, sin importar la audiencia, cuánto apueste ni la duración del stream. Eso te da una idea de la escala del negocio detrás del casino-streaming y de por qué es clave verlo como entretenimiento profesional y no como un consejo de inversión.",
  },
  {
    q: "¿Qué slots juega xQc?",
    a: "Sus favoritos son los de Pragmatic Play y Hacksaw Gaming: Sugar Rush, Wanted Dead or a Wild, The Dog House, Gates of Olympus y Sweet Bonanza. También juega bastante blackjack y los originals de Stake como Plinko y Crash. Todos los slots que prefiere son de volatilidad alta, los que dan esos momentos virales de pantalla explotada.",
  },
  {
    q: "¿Quién es xQc?",
    a: "xQc es Félix Lengyel, un streamer canadiense y ex jugador profesional de Overwatch que se convirtió en uno de los creadores más vistos del mundo. Con millones de seguidores, firmó en 2023 un contrato millonario con Kick que incluía contenido de casino patrocinado por Stake. Es, posiblemente, el streamer de casino más grande del planeta.",
  },
  {
    q: "¿Puedo jugar en los mismos casinos que xQc desde LATAM?",
    a: "Podés jugar los mismos slots que xQc en cualquiera de los casinos de nuestro ranking. Stake opera para muchos países, pero para un jugador de LATAM lo más recomendable es arrancar por Betsson o por los casinos de Royal Partners (STARDA, SOL, MONRO, FRESH), que tienen catálogos enormes de Pragmatic y Hacksaw, bonos más claros y métodos de pago locales.",
  },
  {
    q: "¿Es legal jugar en casino online en LATAM?",
    a: "Depende del país, pero en general sí, siempre que elijas un casino con licencia. Países como Perú (MINCETUR), Colombia (Coljuegos) y varias provincias argentinas regulan el juego online. Los casinos internacionales operan con licencias de Curaçao o Malta. Lo importante es elegir plataformas con licencia clara, jugar solo lo que estés dispuesto a perder, y recordar que es entretenimiento, no una fuente de ingresos.",
  },
  {
    q: "¿Cuánto apostó xQc en Stake?",
    a: "En un momento xQc reveló cifras de apuestas acumuladas (turnover) que llegaban a miles de millones de dólares, lo que generó mucha polémica. Pero ojo: turnover no es lo que ganó ni lo que perdió, es el total movido a lo largo de incontables apuestas. Esos números gigantes son posibles solo con un bankroll y un respaldo que un jugador común no tiene, y por eso no hay que tomarlos como referencia.",
  },
  {
    q: "¿Conviene jugar donde juega xQc o en otro casino?",
    a: "Depende de tu perfil. Si ya manejás cripto y querés los juegos originals tipo Plinko o Crash, Stake tiene sentido. Pero si recién arrancás, querés bonos más claros y pagar con métodos locales, te conviene más Betsson o un casino de Royal Partners. Por eso en nuestro ranking esos van primero y Stake va sexto.",
  },
  {
    q: "¿xQc volvió a Twitch?",
    a: "xQc llegó a indicar que evaluaba volver a Twitch, con la idea de mantener banners de Stake en el fondo sin promocionar el sitio directamente, dadas las reglas de Twitch sobre contenido de casino. Más allá de en qué plataforma transmita, lo importante para vos es lo mismo: su contenido es entretenimiento profesional, no una guía de cómo ganar plata.",
  },
  {
    q: "¿Puedo ver los streams de xQc y jugar gratis?",
    a: "Sí. Casi todos los slots que juega xQc (Sugar Rush, Gates of Olympus, etc.) tienen modo demo: jugás con dinero ficticio, gratis, para entender la mecánica sin arriesgar nada. Es la mejor forma de probar antes de poner plata real. Los streamers no usan demo porque su contenido es el espectáculo de la plata real, pero vos no tenés ninguna obligación de hacerlo así.",
  },
  {
    q: "¿xQc recomienda algún casino en particular?",
    a: "xQc juega y muestra Stake en sus streams como patrocinado, pero nosotros no afirmamos que recomiende ningún casino a su audiencia ni que respalde los que aparecen en nuestro ranking. Nuestras recomendaciones son independientes y se basan en pruebas propias de cada plataforma. Tomá las decisiones con tu criterio, no por lo que haga un streamer.",
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
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#a855f7] to-[#22c55e]" />
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
  headline: `¿En qué casino juega xQc? Guía ${LAST_UPDATED_YEAR}`,
  description: "Dónde juega xQc (Stake), sus slots favoritos, sus cifras récord y los mejores casinos online recomendados para LATAM.",
  datePublished: "2026-06-30",
  dateModified: LAST_UPDATED_ISO,
  author: { "@type": "Organization", name: "JugarCasinosOnline.net" },
  publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" },
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "xQc",
  alternateName: "Félix Lengyel",
  nationality: "Canadá",
  jobTitle: "Streamer",
  description: "Streamer canadiense, ex jugador profesional de Overwatch y uno de los creadores de casino más grandes del mundo.",
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jugarcasinosonline.net/" },
    { "@type": "ListItem", position: 2, name: "Streamers", item: "https://jugarcasinosonline.net/streamers/" },
    { "@type": "ListItem", position: 3, name: "Casino de xQc", item: "https://jugarcasinosonline.net/streamers/casino-xqc/" },
  ],
};

/* ═══════════════════════════════════════════════ */
export default function CasinoXqc() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#a855f7]/[0.07] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/streamers" className="hover:text-white transition-colors">Streamers</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Casino de xQc</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
            ¿En qué casino juega
            <br />
            <span className="bg-gradient-to-r from-[#a855f7] via-[#22c55e] to-[#a855f7] bg-clip-text text-transparent">xQc? {LAST_UPDATED_YEAR}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
            Respuesta corta: xQc juega en <strong className="text-white">Stake</strong>, que además es su patrocinador y le paga alrededor de $200.000 por cada stream de casino. Pero que el streamer de casino más grande del mundo juegue ahí no quiere decir que sea lo que más te conviene a vos. Te explicamos por qué y dónde sí.
          </p>
          <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
            Repasamos sus cifras récord, sus slots favoritos y la polémica de los miles de millones en apuestas… y te decimos cuáles son los casinos que nosotros sí recomendamos para jugar desde LATAM, con bonos verificados, métodos de pago locales y sin humo.
          </p>
        </div>
      </section>

      {/* TABLA DE CONTENIDOS */}
      <TableOfContents
        items={[
          { id: "ranking", label: "Ranking para LATAM" },
          { id: "como-elegimos", label: "Cómo armamos el ranking" },
          { id: "quien-es", label: "¿Quién es xQc?" },
          { id: "historia-casino", label: "xQc y el casino-streaming" },
          { id: "casino-de-xqc", label: "Stake al detalle" },
          { id: "slots", label: "Slots favoritos" },
          { id: "ganancias", label: "Sus cifras récord" },
          { id: "stake-vs-ranking", label: "Stake vs recomendados" },
          { id: "por-que-estos-casinos", label: "¿Dónde te conviene jugar?" },
          { id: "casino-confiable", label: "Reconocer un casino confiable" },
          { id: "es-legal", label: "¿Es legal en LATAM?" },
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
        <SectionTitle>Dónde jugar: nuestro ranking para LATAM</SectionTitle>
        <P>
          Empecemos por lo concreto, porque sabemos a qué viniste. Si querés jugar en casino online, estos son los que probamos y por los que ponemos la cara. xQc juega en Stake (lo tenés sexto, lo metimos por transparencia), pero arriba van los que para nosotros tienen el mejor combo de bono, catálogo y pagos para un jugador de la región. No es una lista armada al voleo: cada uno pasó por nuestras manos antes de entrar.
        </P>
        <CasinoRanking casinos={ranking} infoColumnLabel="Juegos" />
        <P>
          ¿Por qué Betsson primero y no Stake? Sencillo: Betsson es una marca global con años de trayectoria, bonos más claros, soporte en español que responde y métodos de pago locales. Stake es bárbaro para cripto, pero está pensado para un perfil específico, no para cualquiera que recién arranca. Más abajo te lo desmenuzamos casino por casino para que no te quede ninguna duda.
        </P>
        <P>
          Un par de aclaraciones para que leas la tabla con criterio. Los bonos que ves son los reales y vigentes al momento de actualizar esta guía (la fecha la tenés arriba, se actualiza todos los meses). Las cifras de juegos son aproximadas y van cambiando porque los casinos suman títulos seguido. Y el orden no es capricho: responde a la combinación de bono, catálogo, pagos y confianza que probamos nosotros mismos.
        </P>
        <div className="mt-6"><CtaButton slug="betsson-latam" text="Probar Betsson" /></div>
      </Section>

      {/* CÓMO ELEGIMOS */}
      <Section id="como-elegimos">
        <SectionTitle>Cómo armamos este ranking</SectionTitle>
        <P>
          Para que confíes en lo que decimos, te contamos cómo llegamos a este orden. No es al azar ni eso de “el que paga va primero” sin más criterio. Probamos cada casino con cuenta real: depositamos, jugamos, pedimos retiros y le escribimos al soporte a horas raras a propósito, para ver cómo responden cuando nadie lo espera. Esa es la única forma de saber si un casino es bueno de verdad o solo en el papel.
        </P>
        <P>
          Miramos cuatro cosas principales. El <strong className="text-white">bono y sus condiciones</strong> (no solo cuánto te dan, sino el rollover y el plazo). El <strong className="text-white">catálogo de juegos</strong> (que tengan los slots que la gente busca, los mismos de los streams). Los <strong className="text-white">pagos</strong> (que los métodos sean los que usás y que los retiros lleguen rápido). Y la <strong className="text-white">confianza</strong> (licencia clara, reputación de pagos, soporte a la altura).
        </P>
        <P>
          Y para que quede todo claro, porque es la duda que muchos tienen: sí, esta página tiene enlaces de afiliado. Si te registrás a través de nuestros botones, podemos recibir una comisión del casino. A vos no te cuesta nada más, y no condiciona el orden ni lo que opinamos. Si un casino no nos convence, no lo recomendamos por más que pague bien. Preferimos que vuelvas a leernos porque te dimos data honesta.
        </P>
        <P>
          Con esos cuatro filtros aplicados, Betsson queda primero por su combinación de trayectoria, bonos claros y soporte ágil; STARDA se lleva el segundo puesto por su catálogo brutal de slots; y así hasta Stake, que metimos sexto no porque sea malo, sino porque, para el jugador promedio de LATAM, las opciones de arriba son un mejor punto de partida.
        </P>
      </Section>

      {/* QUIÉN ES */}
      <Section id="quien-es" alt>
        <SectionTitle>¿Quién es xQc?</SectionTitle>
        <P>
          Pongámoslo en contexto. xQc es Félix Lengyel, un canadiense que primero se hizo conocido como jugador profesional de Overwatch y después se convirtió en uno de los streamers más vistos de la historia. Su estilo caótico, rapidísimo y sin filtros lo volvió un fenómeno: durante años fue de los creadores con más horas vistas del planeta, con una comunidad enorme y devota.
        </P>
        <P>
          En 2023 dio un golpe que sacudió a toda la industria: firmó un contrato millonario con Kick (se habló de cifras de entre 70 y 100 millones de dólares) que incluía la obligación de producir contenido de casino patrocinado por Stake. Desde entonces, las sesiones de slots y juegos de casino se volvieron una parte central de su contenido, y xQc pasó a ser, posiblemente, el streamer de casino más grande del mundo.
        </P>
        <P>
          ¿Por qué te contamos todo esto? Porque entender la escala del negocio detrás de xQc es la mejor vacuna contra la ilusión. No estás viendo a alguien que descubrió cómo ganar plata jugando; estás viendo a un profesional al que le pagan fortunas por transmitir, con un respaldo económico que ningún jugador común tiene. Esa diferencia es la base de toda esta guía.
        </P>
        <H3>Las cifras que rompieron internet</H3>
        <P>
          xQc fue protagonista de varias polémicas relacionadas con sus cifras de casino. En un momento se filtraron números de apuestas acumuladas (turnover) que llegaban a miles de millones de dólares, lo que generó debate en todo el mundo del gaming. Y el propio xQc reveló que Stake le pagaba alrededor de 200.000 dólares por stream, sin importar cuánta gente lo viera, cuánto apostara ni cuánto durara la transmisión.
        </P>
        <P>
          Estos datos son importantes porque desnudan cómo funciona el negocio. El turnover de miles de millones no significa que ganó ni que perdió esa cantidad: es el total movido a lo largo de incontables apuestas, posible solo con un bankroll descomunal. Y el pago fijo por stream demuestra que su incentivo principal es transmitir, no necesariamente ganar. Para un espectador que quiere imitarlo, esto es justo lo que hay que tener clarísimo.
        </P>
        <H3>Por qué su contenido de casino importa tanto</H3>
        <P>
          Cuando el streamer de casino más grande del mundo se sienta a jugar slots en vivo, el impacto es enorme. Millones de personas lo ven, y después los clips se riegan por todas las redes. Eso significa que un montón de gente, sobre todo joven, descubre el casino online a través de xQc. Por eso es clave que esta guía exista y que la escribamos con honestidad: si vas a jugar, queremos que lo hagas bien informado y sin ilusiones falsas.
        </P>
      </Section>

      {/* HISTORIA CASINO */}
      <Section id="historia-casino">
        <SectionTitle>xQc y la explosión del casino-streaming</SectionTitle>
        <P>
          La movida de xQc con el casino no salió de la nada: él fue, de hecho, una de las figuras centrales que empujaron el formato a escala mundial. Para entender bien dónde juega y por qué, conviene mirar la película completa.
        </P>
        <P>
          El slot-streaming explotó cuando creadores enormes empezaron a transmitir sesiones de casino con apuestas descomunales. Funcionaba: las reacciones a un slot que explota son adictivas de ver, los clips vuelan y los acuerdos con las plataformas de casino eran extraordinariamente generosos. Twitch endureció sus reglas sobre contenido de apuestas, y muchos de esos creadores migraron a Kick, una plataforma con vínculos con el mundo del gambling y una política mucho más relajada. xQc fue una de las caras de esa migración.
        </P>
        <P>
          Su contrato con Kick es, en parte, la razón del crecimiento explosivo de esa plataforma. Cuando un creador de su tamaño se muda con obligaciones de producir contenido de casino, arrastra a millones de espectadores y le da legitimidad al formato. Por eso, hablar del casino de xQc no es hablar solo de un streamer: es hablar de toda una industria que se construyó alrededor de este tipo de contenido.
        </P>
        <P>
          Que haga este tipo de contenido no lo convierte ni en un genio de las apuestas ni en un villano: es un creador haciendo lo que el mercado le paga por hacer. El punto donde nosotros ponemos el ojo no es en juzgarlo, sino en cuidarte a vos, porque la diferencia entre ver un stream y ponerte a apostar con tu plata es enorme, y nadie te la explica mientras festeja un multiplicador gigante en cámara.
        </P>
      </Section>

      {/* CASINO DE XQC (STAKE) */}
      <Section id="casino-de-xqc" alt>
        <SectionTitle>El casino de xQc: Stake al detalle</SectionTitle>
        <P>
          Vamos al hueso. El casino de xQc es <strong className="text-white">Stake</strong>, que además es su patrocinador principal. Es la plataforma con la que se lo asocia y donde pasó la mayoría de sus sesiones de casino. Si lo seguís, lo viste mil veces ahí: la interfaz oscura, las apuestas en cripto, los números subiendo y bajando a una velocidad que marea.
        </P>
        <P>
          Stake es, probablemente, la plataforma de casino más asociada al mundo del streaming a nivel global. Nació fuerte en cripto y se hizo gigante patrocinando creadores de contenido y hasta equipos deportivos. Tiene más de 3.000 juegos entre slots, mesas en vivo y los famosos originals (Plinko, Crash, Mines), procesa pagos en cripto a una velocidad que ningún banco te da, y una comunidad de apostadores enorme.
        </P>
        <H3>¿Por qué xQc juega en Stake y no en otro?</H3>
        <P>
          La razón principal es directa y pública: es su patrocinador, y le paga una fortuna por transmitir ahí. No es que xQc evaluó cien casinos y eligió el mejor para el jugador común; es que firmó un acuerdo comercial enorme. Por eso es justo el motivo por el que no podés tomar “xQc juega en Stake” como “Stake es el mejor casino para mí”. Son cosas completamente distintas.
        </P>
        <P>
          Más allá del patrocinio, Stake tiene cosas que objetivamente funcionan bien para un streamer: cripto para mover montos grandes en cámara, y los slots y originals que mejor rinden en stream. Pero “ideal para hacer contenido” no es lo mismo que “ideal para tu bolsillo”, y esa diferencia es la clave de toda esta nota.
        </P>
        <H3>Más allá de los slots: en vivo y originals</H3>
        <P>
          Stake no es solo tragamonedas. Tiene una sección de casino en vivo con mesas de los proveedores grandes (ruleta, blackjack, baccarat, game shows) con dealers reales transmitidos en tiempo real, y xQc juega bastante blackjack ahí. Y tiene su carta más fuerte: los originals, juegos propios de la plataforma que no vas a encontrar en otro lado, como Plinko (esa pirámide de clavos donde la bolita cae rebotando), Crash, Mines y Dice. Son simples, rápidos y muy visuales, perfectos para stream.
        </P>
        <H3>Seguridad, comunidad y soporte</H3>
        <P>
          Como marca global con años de trayectoria, Stake tiene una infraestructura sólida: encriptación, sistemas provably fair en sus originals, y una comunidad enorme. Es un casino serio, no un sitio improvisado, y eso hay que decirlo claro. Donde sí pierde puntos para el jugador de LATAM es en lo cotidiano: el soporte no es tan ágil, los bonos son menos claros, y la operatoria asume que te manejás con cripto en vez de métodos locales.
        </P>
        <ProsCons
          pros={[
            "Cripto rápida: depósitos y retiros en minutos, sin pasar por bancos",
            "Catálogo enorme con los slots más streameados del mundo",
            "Los originals (Plinko, Crash, Mines) que no encontrás en otros lados",
            "Marca global con años de trayectoria y comunidad gigante",
          ]}
          cons={[
            "Pensado para usuarios de cripto: si no manejás USDT o BTC, hay curva",
            "Los bonos son menos claros y generosos que los de Betsson o STARDA",
            "Soporte en español menos ágil que el de los casinos del ranking",
            "Para LATAM, perdés la comodidad de los métodos de pago locales",
          ]}
        />
        <P>
          Conclusión honesta: Stake es un casino serio y podés jugar ahí si te manejás con cripto. Pero si recién arrancás, o si querés bonos más jugosos y pagar con métodos locales, hay opciones mejores. Por eso va sexto en nuestro ranking. No es un palo a Stake, es darte el dato real.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="stake" text="Ver Stake" />
          <CtaButton slug="starda-casino" text="Probar STARDA (recomendado)" />
        </div>
      </Section>

      {/* SLOTS */}
      <Section id="slots">
        <SectionTitle>Los slots favoritos de xQc</SectionTitle>
        <P>
          Si buscaste “casino slots xQc” o “qué slots juega xQc”, esta es tu sección. xQc, como buen streamer de casino, juega slots de volatilidad alta: esos que te tienen 50 giros sin pagar nada y de repente explotan con un multiplicador gigante. Son los que dan los clips virales que dan la vuelta al mundo. Acá te dejamos los que más se le ven, con la data real de cada uno.
        </P>
        <P>
          Antes de la lista, un apunte importante: que sean sus favoritos no significa que sean los que más te convienen a vos. Son slots espectaculares para ver en stream justamente porque son extremos, y eso que los hace tan entretenidos en cámara es lo mismo que los hace peligrosos para un bolsillo normal. Mirá la lista con curiosidad, probalos en demo si querés, pero no asumas que vas a tener la misma suerte que se ve en los clips.
        </P>
        <div className="space-y-4 my-8">
          {favoriteSlots.map((s, i) => (
            <div key={s.name} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center font-black text-white text-sm shrink-0">{i + 1}</span>
                <h3 className="text-lg font-bold text-white">{s.name}</h3>
                <span className="text-xs text-[#71717a] uppercase tracking-wider font-bold">{s.provider}</span>
              </div>
              <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">{s.note}</p>
            </div>
          ))}
        </div>
        <P>
          ¿Notás un patrón? Casi todos son de Pragmatic Play y de Hacksaw Gaming, los dos proveedores que dominan el slot-streaming. Sugar Rush, Gates of Olympus y Sweet Bonanza son de los más jugados del planeta, y comparten ese estilo de pay-anywhere (ganás juntando símbolos iguales en cualquier lado) y tumbles (los ganadores desaparecen y caen nuevos, encadenando premios). Los Hacksaw como Wanted Dead or a Wild llevan la volatilidad al extremo.
        </P>
        <H3>Cómo funcionan estos slots (para que no te agarren desprevenido)</H3>
        <P>
          Entender la mecánica te ayuda a no frustrarte. En estos slots no hay líneas de pago tradicionales: ganás cuando aparecen 8 o más símbolos iguales en cualquier posición. Cuando pasa, explotan y caen nuevos, encadenando premios. Y si en esa cadena caen los multiplicadores, ahí ves esos x100, x250 o más que vuelan la pantalla. La parte que los streams no muestran tanto: para llegar a los giros gratis donde está la verdadera plata, necesitás que caigan varios scatters, y eso pasa cada muchísimos giros.
        </P>
        <P>
          Un consejo de los que no te dan en un stream: estos slots son de alta volatilidad. La mayoría de las veces te van a comer el saldo de a poco, y muy de vez en cuando te van a dar un premio grande. xQc apuesta montos disparatados, y aun así pierde sesiones enteras. Si vas a probarlos, hacelo con apuestas chicas. Y si querés algo más tranquilo para empezar, buscá slots de volatilidad media o baja: ganás más seguido y la sesión te dura mucho más.
        </P>
        <P>
          Buena noticia: estos slots los encontrás en prácticamente todos los casinos de nuestro ranking. STARDA, SOL, FRESH y MONRO tienen catálogos completos de Pragmatic y Hacksaw, así que podés jugar los mismos títulos que ves en los streams de xQc pero con un bono de bienvenida que te da más margen.
        </P>
        <div className="mt-6"><CtaButton slug="starda-casino" text="Jugar slots en STARDA" /></div>
      </Section>

      {/* GANANCIAS */}
      <Section id="ganancias" alt>
        <SectionTitle>Las cifras de xQc: la letra chica</SectionTitle>
        <P>
          xQc es famoso por sus números gigantes: clips de ganancias enormes, apuestas de miles de dólares por giro, turnover de miles de millones. Son cifras que impresionan, no lo vamos a negar. El problema es lo que esos números no te muestran, y acá tenemos que ser honestos con vos aunque no sea lo más vendedor.
        </P>
        <H3>Lo que el clip te muestra vs. lo que no</H3>
        <P>
          Un clip de 30 segundos te muestra el momento exacto en que un slot de alta volatilidad pagó fuerte. Lo que no te muestra son las horas previas perdiendo, las sesiones enteras donde el saldo se fue a cero, ni el hecho de que xQc juega con un bankroll descomunal y, encima, cobra un pago fijo enorme por transmitir. La ganancia es real como momento, pero está completamente fuera de contexto si la tomás como “esto te puede pasar a vos jugando un rato”.
        </P>
        <H3>Por qué la casa siempre gana (la matemática sin vueltas)</H3>
        <P>
          Esto no es una opinión nuestra ni un mensaje moralista: es matemática pura. Todos los juegos de casino tienen una ventaja de la casa (house edge), un porcentaje que, a lo largo de millones de jugadas, siempre queda para el casino. En los slots se ve en el RTP: si un slot tiene 96% de RTP, devuelve 96 de cada 100 apostados en promedio, y el resto es la ganancia de la casa. A corto plazo podés ganar (por eso existen los clips virales), pero a largo plazo esa ventaja siempre se impone.
        </P>
        <P>
          ¿Esto quiere decir que está mal jugar? Para nada. Quiere decir que tenés que jugar entendiendo qué es: un entretenimiento que, estadísticamente, te va a costar plata, igual que te cuesta ir al cine o salir a comer. La diferencia es que en el casino existe la ilusión de que podés ganar, y esa ilusión, reforzada por las cifras de los streamers, es la que hace que mucha gente apueste más de lo que debería. Si tenés clara la matemática, jugás más tranquilo y con expectativas realistas.
        </P>
        <div className="rounded-2xl bg-[#f59e0b]/[0.08] border border-[#f59e0b]/25 p-6 my-6">
          <p className="text-[#fbbf24] font-bold mb-2">⚠️ El dato que cambia todo</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
            Los streamers de casino muestran sus mejores momentos y cobran fortunas por transmitir. Si vas a jugar, definí un presupuesto fijo antes de empezar, no persigas las pérdidas, y tratá el casino como un gasto de entretenimiento, nunca como una forma de ganar plata.
          </p>
        </div>
      </Section>

      {/* CARA A CARA */}
      <Section id="stake-vs-ranking">
        <SectionTitle>Stake vs. nuestros recomendados: cara a cara</SectionTitle>
        <P>
          Para que lo veas de un pantallazo, armamos esta comparativa entre el casino donde juega xQc (Stake) y los dos que más recomendamos para LATAM (Betsson y STARDA). No es que uno sea bueno y otro malo: sirven para perfiles distintos.
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
                ["Bono de bienvenida", "Menos claro", "Duplica tu depósito", "100% + 500 giros"],
                ["Pago estrella", "Cripto (USDT, BTC)", "Métodos locales", "Cripto y tarjetas"],
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
          Lo ves claro: si tu mundo es la cripto y querés los originals que hicieron famoso a Stake, ese es tu lugar. Pero si querés un bono más jugoso, pagar con métodos locales y un soporte que responda al toque, Betsson o STARDA te van a tratar mejor. Probá y sacá tus propias conclusiones.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="betsson-latam" text="Probar Betsson" />
          <CtaButton slug="starda-casino" text="Probar STARDA" />
        </div>
      </Section>

      {/* POR QUÉ ESTOS CASINOS */}
      <Section id="por-que-estos-casinos">
        <SectionTitle>¿Podés jugar donde juega xQc? Sí, pero…</SectionTitle>
        <P>
          La respuesta es sí: podés crearte una cuenta en Stake y jugar los mismos slots que ves en sus streams. Pero antes de que lo hagas, dejanos darte el panorama completo, porque para eso probamos cada uno de estos casinos a fondo. Te lo contamos rápido y al grano.
        </P>
        <H3>Betsson — el #1 para empezar</H3>
        <P>
          Si nunca jugaste online o querés ir a lo seguro, empezá acá. Betsson es una marca global con años de trayectoria y reputación intachable de pagos. El bono de bienvenida es claro, el soporte en español responde de verdad, y tiene una de las mejores secciones de casino en vivo del mercado, con más de 200 mesas y dealers que hablan español de verdad. Si además te gustan las apuestas deportivas, lo tenés todo en la misma cuenta. Es la opción más redonda para el jugador promedio.
        </P>
        <div className="my-5"><CtaButton slug="betsson-latam" text="Abrir cuenta en Betsson" /></div>
        <H3>STARDA Casino — el paraíso de los slots</H3>
        <P>
          Si lo tuyo son las tragamonedas (o sea, si viniste por lo de xQc), STARDA es nuestra recomendación fuerte. Tiene 3.800+ juegos, torneos de slots semanales con premios de verdad, y todos los Pragmatic y Hacksaw que ves en los streams. El bono es 100% en tu primer depósito + 500 giros gratis. Para un fan del contenido de xQc, es el casino que más se le parece en espíritu, pero con un bono que Stake no te da.
        </P>
        <div className="my-5"><CtaButton slug="starda-casino" text="Jugar en STARDA" /></div>
        <H3>SOL, MONRO y FRESH — el resto del pelotón pesado</H3>
        <P>
          Los tres son de Royal Partners y los tres cumplen. <strong className="text-white">SOL Casino</strong> es ideal para el que recién arranca: interfaz clarísima, rollover bajo (x30) y 4.000 juegos. <strong className="text-white">MONRO</strong> tiene el bono más alto del ranking en porcentaje, 150% en tu primer depósito. Y <strong className="text-white">FRESH</strong> es el rey del catálogo con 4.500+ títulos; buscás un slot raro y lo tiene. Cualquiera de los tres es una mejor puerta de entrada que Stake si no manejás cripto.
        </P>
        <div className="my-5 flex flex-wrap gap-3">
          <CtaButton slug="sol-casino" text="Probar SOL" />
          <CtaButton slug="monro-casino" text="Probar MONRO" />
          <CtaButton slug="fresh-casino" text="Probar FRESH" />
        </div>
        <H3>Y Stake, ¿cuándo sí?</H3>
        <P>
          Stake tiene sentido si ya manejás cripto, si te gustan los originals tipo Plinko o Crash, y si valorás los retiros instantáneos en USDT por encima de un bono más grande. Es un casino legítimo, no estamos diciendo lo contrario. Solo decimos que para la mayoría de los que recién se meten, los de arriba son un mejor punto de partida. Probá, comparás, y quedate con el que te cierre.
        </P>
      </Section>

      {/* CASINO CONFIABLE */}
      <Section id="casino-confiable" alt>
        <SectionTitle>Cómo reconocer un casino confiable</SectionTitle>
        <P>
          Antes de meter tu plata en cualquier lado, conviene saber distinguir un casino serio de uno turbio. Es más fácil de lo que parece si sabés qué mirar. Te dejamos la checklist que usamos nosotros cada vez que evaluamos una plataforma nueva.
        </P>
        <P>
          <strong className="text-white">Uno: la licencia visible.</strong> Un casino serio muestra su licencia en el pie de página, con el número y el organismo regulador. Si no la ves por ningún lado, mala señal. <strong className="text-white">Dos: reputación de pagos.</strong> Buscá el nombre del casino en foros como AskGamblers o Trustpilot y fijate qué dice la gente sobre los retiros. Un patrón de quejas por pagos es una bandera roja gigante.
        </P>
        <P>
          <strong className="text-white">Tres: métodos de pago claros.</strong> Si acepta medios que vos conocés y usás, y explica bien los tiempos de retiro, buena señal. <strong className="text-white">Cuatro: términos legibles.</strong> Los buenos casinos tienen sus condiciones de bono escritas de forma entendible. Si la letra chica es un laberinto, desconfiá. <strong className="text-white">Cinco: soporte que responde.</strong> Probá el chat antes de depositar. Cómo y cuándo te responden te dice mucho de cómo te van a tratar el día que tengas un problema.
        </P>
        <P>
          Todos los casinos de nuestro ranking pasan esta checklist con holgura, porque justamente la aplicamos antes de recomendarlos. No los elegimos por el bono más grande, sino por el combo completo de confianza, pagos y experiencia. Esa es la diferencia entre un ranking armado con criterio y una lista de los que más pagan por aparecer.
        </P>
      </Section>

      {/* LEGALIDAD */}
      <Section id="es-legal">
        <SectionTitle>¿Es legal jugar en casino online en LATAM?</SectionTitle>
        <P>
          Depende del país, pero la tendencia regional es clara: cada vez hay más regulación y más opciones legales. Perú regula el juego online a través de MINCETUR; Colombia fue pionera con Coljuegos; y en Argentina cada provincia tiene su marco (como LOTBA en la Ciudad de Buenos Aires). En todos esos casos, hay operadores con licencia local que funcionan totalmente regulados.
        </P>
        <P>
          Además de los operadores locales, hay plataformas internacionales que funcionan con licencias de Curaçao o Malta. Esas también son válidas: significa que están reguladas por otra jurisdicción, con sus propios controles y mecanismos de reclamo. Millones de personas en LATAM las usan a diario sin problema. Lo que cambia es a quién le reclamás si algo sale mal.
        </P>
        <H3>El consejo más importante</H3>
        <P>
          Huí de cualquier casino que no muestre su licencia de forma clara. Si entrás a un sitio y no encontrás en el pie de página quién lo regula ni el número de licencia, cerralo. No importa cuán lindo sea el bono. Los casinos truchos existen, y el problema no es solo jugar en algo ilegal: es que el día que ganes, capaz no te pagan y no tenés a quién reclamarle. Por eso armamos rankings, para que no tengas que arriesgarte probando a ciegas.
        </P>
        <P>
          Y un detalle no menor: jugar es solo para mayores de 18 años. Todos los casinos serios te van a pedir verificación de identidad (el KYC) antes de dejarte retirar. No es para molestarte, es requisito legal. Hacelo apenas te registrás y listo.
        </P>
      </Section>

      {/* BONOS */}
      <Section id="bonos" alt>
        <SectionTitle>Los bonos de bienvenida, explicados sin vueltas</SectionTitle>
        <P>
          Una de las grandes diferencias entre jugar donde juega xQc (Stake) y jugar en los casinos de nuestro ranking es el bono de bienvenida. Y como es un tema donde mucha gente se enreda (o acepta sin leer y después se queja), te lo explicamos bien.
        </P>
        <H3>¿Qué es un bono de bienvenida?</H3>
        <P>
          Es la plata o los giros gratis que el casino te regala por registrarte y hacer tu primer depósito. Lo típico es el bono de 100%: vos ponés una cantidad y el casino te suma otro tanto. MONRO incluso tira un 150%, de los más altos que vas a encontrar. Suena a regalo, y en parte lo es, pero tiene una condición clave: el rollover.
        </P>
        <H3>El rollover: la letra chica que nadie lee</H3>
        <P>
          El rollover (o requisito de apuesta) es la cantidad de veces que tenés que apostar el bono antes de poder retirar lo que ganes con él. Si te dan un bono con rollover x30, tenés que apostar 30 veces ese monto antes de sacar. Parece mucho, pero con slots de apuestas chicas se va cumpliendo de a poco. La clave: un bono con rollover bajo (tipo x30, como el de SOL) vale más que un bono enorme con rollover altísimo.
        </P>
        <div className="rounded-2xl bg-[#3b82f6]/[0.06] border border-[#3b82f6]/20 p-6 my-6">
          <p className="text-[#60a5fa] font-bold mb-2">💡 Regla de oro de los bonos</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm sm:text-base">
            Un bono no es plata gratis que podés retirar al toque: es un saldo para jugar con condiciones. A veces, si pensás retirar rápido, conviene rechazar el bono y jugar solo con tu depósito. Suena raro, pero es la decisión más inteligente en muchos casos.
          </p>
        </div>
        <P>
          Otra cosa: no todos los juegos aportan igual al rollover. Las slots suelen contar al 100%, pero los juegos de mesa a veces aportan solo un 10% o nada. Si tu plan es cumplir el rollover, las tragamonedas son tus aliadas. Y ojo con los giros gratis: las ganancias que sacás de ellos casi siempre también tienen su propio rollover. Antes de aceptar cualquier bono, hacé la cuenta mental del monto por el rollover y fijate si es razonable para cómo jugás vos.
        </P>
        <div className="mt-2"><CtaButton slug="sol-casino" text="Ver el bono de SOL (rollover x30)" /></div>
      </Section>

      {/* COMPARATIVA DE BONOS */}
      <Section id="comparativa-bonos">
        <SectionTitle>Comparativa de bonos: ¿cuál te conviene?</SectionTitle>
        <P>
          Ya que hablamos tanto de bonos, te dejamos una comparativa rápida de los que ofrecen los casinos de nuestro ranking, para que veas de un vistazo cuál pega más con tu forma de jugar. Recordá: el número grande no lo es todo, lo que manda es el combo entre el monto, el rollover y para qué tipo de jugador está pensado.
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
                ["Betsson", "Duplica tu depósito", "Empezar seguro, todo público"],
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
            { n: 1, t: "Entrá desde el botón oficial", d: "Hacé clic en cualquiera de los botones verdes de esta página. Te llevan al sitio oficial del casino, sin intermediarios raros, y aseguran que el bono se active bien." },
            { n: 2, t: "Completá el registro", d: "Te van a pedir correo, contraseña, nombre, fecha de nacimiento (mayor de 18) y datos básicos. Cargá tu info real, porque después en la verificación tiene que coincidir." },
            { n: 3, t: "Verificá tu cuenta (KYC)", d: "Subí una foto de tu documento y, a veces, un selfie o comprobante de domicilio. Es requisito legal y conviene hacerlo el primer día, así cuando retires no hay demoras." },
            { n: 4, t: "Hacé tu primer depósito", d: "Elegí el método que más uses (transferencia, tarjeta, billetera local o cripto). Si querés el bono, activalo antes de confirmar. Fijate el depósito mínimo para el bono." },
            { n: 5, t: "A jugar (con cabeza)", d: "Ya tenés tu saldo más el bono. Buscá tus slots favoritos, definí cuánto estás dispuesto a gastar, y disfrutá. Recordá: es entretenimiento, no trabajo." },
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
          Y eso es todo. Nada de papeleo eterno ni esperas de días. La parte que más tarda es la verificación, y aun así suele resolverse en minutos o pocas horas. Por eso insistimos en hacerla apenas te registrás: es la diferencia entre retirar al toque o quedarte esperando justo cuando ganaste. Un consejo extra: activá los límites de depósito desde el primer día.
        </P>
        <div className="mt-4"><CtaButton slug="betsson-latam" text="Crear cuenta en Betsson" /></div>
      </Section>

      {/* MÉTODOS DE PAGO */}
      <Section id="metodos-pago">
        <SectionTitle>Métodos de pago en LATAM</SectionTitle>
        <P>
          Acá se nota la diferencia entre jugar en Stake (puro cripto) o en un casino con onda local. Te contamos qué opciones tenés y cuál conviene según tu caso, porque este punto, aunque parezca aburrido, es de los que más impacto tienen en tu experiencia.
        </P>
        <H3>Billeteras y transferencias locales: lo más cómodo</H3>
        <P>
          Según tu país, vas a tener opciones locales muy prácticas: Mercado Pago en Argentina, Yape y Plin en Perú, Nequi y PSE en Colombia, y transferencias bancarias en todos lados. Los casinos con presencia regional, como Betsson, los aceptan, y el depósito cae al instante. Los retiros suelen llegar el mismo día. Si querés simpleza total, este es tu camino.
        </P>
        <H3>Tarjetas de débito y crédito</H3>
        <P>
          Visa y Mastercard funcionan para depositar en casi todos los casinos. Para retiros suelen tardar más, y algunos bancos en la región ponen trabas a las transacciones de juego. Por eso, si pensás retirar seguido, las billeteras locales o las transferencias suelen ser más prácticas que la tarjeta.
        </P>
        <H3>Cripto: el camino de Stake</H3>
        <P>
          Acá es donde Stake brilla y se entiende por qué tantos streamers lo usan. Con cripto (Bitcoin, USDT) los depósitos y retiros son casi instantáneos, sin pasar por bancos. Si ya manejás cripto, es una ventaja real, sobre todo en países con restricciones cambiarias. Si no tenés idea, no te compliques: arrancá con métodos locales en un casino con presencia regional y dejá la cripto para más adelante.
        </P>
        <H3>¿Cuánto tardan los retiros?</H3>
        <P>
          Depositar es fácil en todos lados; lo que separa a un buen casino de uno malo es la velocidad para devolverte tu plata. Los retiros con billeteras locales suelen llegar el mismo día, los de cripto en minutos, y las transferencias bancarias entre unas horas y un día hábil. La primera vez siempre tarda más por la verificación, así que hacé el KYC apenas te registrás. Si un casino te pone trabas raras para retirar, desconfiá: los serios pagan sin drama.
        </P>
      </Section>

      {/* PRIMERA SESIÓN */}
      <Section id="primera-sesion" alt>
        <SectionTitle>Tu primera sesión de slots, bien hecha</SectionTitle>
        <P>
          Si después de leer todo esto querés probar, perfecto, pero hagámoslo con cabeza. Te dejamos una mini guía de cómo encarar tu primera sesión de slots para que sea entretenida y no termine en un mal rato. Es lo que le diríamos a un amigo que nunca jugó.
        </P>
        <P>
          Primero, definí tu presupuesto de entretenimiento: un monto que si lo perdés entero, no te cambia el mes. Ese es tu techo, y no se toca. Segundo, elegí un slot de volatilidad media para arrancar (no te tires de una a los Hacksaw de volatilidad extrema que juega xQc). Tercero, poné apuestas chicas: la idea es que el presupuesto te dure y disfrutes muchos giros, no que lo quemes en cinco minutos buscando el premio gordo.
        </P>
        <P>
          Cuarto, fijate un punto de salida tanto para arriba como para abajo. Si ganás y llegás a una meta que te pusiste, retirá y cerrá la sesión contento; no caigas en el “una más a ver si gano más”. Y si perdés tu presupuesto del día, se terminó por hoy, sin dramas. Quinto: disfrutá el rato. El objetivo es pasarla bien, no hacer plata. Una última cosa que mucha gente no sabe: no necesitás apostar más para “acercarte” a un premio. El RTP es un porcentaje fijo, da igual si apostás chico o grande; lo único que cambia es el tamaño de los premios y las pérdidas.
        </P>
        <div className="mt-4"><CtaButton slug="sol-casino" text="Empezar tranquilo en SOL" /></div>
      </Section>

      {/* TIPS SLOTS */}
      <Section id="jugar-slots-tips">
        <SectionTitle>Cómo jugar slots como xQc (sin fundirte)</SectionTitle>
        <P>
          Ya sabemos que viniste por las slots. Y está bien: son divertidas y los streams las hacen ver como una montaña rusa. Pero hay una diferencia abismal entre cómo juega un streamer al que le pagan por transmitir y cómo deberías jugar vos. Estos consejos no te los da nadie en un stream, pero te pueden salvar el bolsillo.
        </P>
        <H3>Entendé la volatilidad</H3>
        <P>
          Los slots favoritos de xQc son de alta volatilidad: pagan poco la mayor parte del tiempo y muy de vez en cuando sueltan un premio gordo. Genial para un clip, brutal para un bankroll chico. Si recién arrancás, probá slots de volatilidad media o baja: ganás más seguido y la sesión dura más.
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
            "Copiar las apuestas de un streamer al que le pagan por transmitir",
            "Creer que los clips de millones reflejan una sesión normal",
          ]}
        />
      </Section>

      {/* ERRORES */}
      <Section id="errores-comunes" alt>
        <SectionTitle>Los 5 errores del que copia a un streamer</SectionTitle>
        <P>
          Después de ver mucho contenido de casino, identificamos los errores que se repiten en el que empieza a jugar copiando lo que ve en un stream. Si los esquivás, ya jugás mejor que la mayoría.
        </P>
        <div className="space-y-4 my-6">
          {[
            { t: "Copiar las apuestas altas sin tener el bankroll", d: "xQc apuesta montos disparatados que para él son parte de un negocio donde cobra fortunas por transmitir. Si los copiás con tu sueldo, fundís el saldo en minutos. Apostá en proporción a TU bankroll." },
            { t: "Creer que el clip viral es una sesión normal", d: "La ganancia gigante es el mejor momento de horas de stream. Por cada clip de ganancia hay muchas sesiones perdedoras que no se hacen virales." },
            { t: "Perseguir las pérdidas", d: "El error más caro. Después de perder viene el una más para recuperar, y esa lógica transforma una pérdida chica en un problema grande." },
            { t: "Usar el bonus buy sin entenderlo", d: "Comprar el bonus cuesta carísimo. Los streamers lo hacen para el espectáculo; para un bankroll normal, es la forma más rápida de quedarte sin saldo." },
            { t: "No leer las condiciones del bono", d: "Aceptar un bono sin mirar el rollover es el clásico. Después te quejás de que no te dejan retirar, cuando no cumpliste una condición que estaba escrita." },
          ].map((e, i) => (
            <div key={e.t} className="flex gap-4 rounded-2xl bg-[#141414] border border-white/[0.06] p-5">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center font-black text-white shrink-0">{i + 1}</span>
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
        <SectionTitle>xQc y la escena global de streamers de casino</SectionTitle>
        <P>
          xQc no juega solo: es la cara más visible de una escena global enorme de streamers de casino que explotó en los últimos años. Entender ese contexto te ayuda a mirar todo esto con más perspectiva.
        </P>
        <P>
          A nivel internacional, junto a xQc están figuras como Roshtein, el rey global de los slots; y en el mundo hispano hay una camada potente con Coscu y Santutu en Argentina, MrStiven Tc en Colombia y Andynsane en Perú. Todos comparten el mismo formato: slots de alta volatilidad, reacciones grandes, y clips que circulan por todas las redes. Es una industria con miles de millones de dólares en juego.
        </P>
        <P>
          Cuando entendés que es una industria (con acuerdos millonarios, con producción, con un modelo de negocio claro), dejás de ver los streams como “alguien que gana fortunas jugando” y empezás a verlos como lo que son: entretenimiento profesional pagado. xQc es buenísimo en lo que hace, pero lo que hace es contenido, no un tutorial de cómo hacerte rico. Si te copa este tipo de contenido y querés saber dónde juegan los demás, lo estamos investigando uno por uno.
        </P>
        <div className="mt-4"><Link href="/streamers" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#a855f7]/40 text-[#c084fc] font-bold text-sm uppercase tracking-wide transition-all hover:bg-[#a855f7]/10">Ver todos los streamers →</Link></div>
      </Section>

      {/* GLOSARIO */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario: las palabras que vas a escuchar</SectionTitle>
        <P>
          Si te metés en el mundo del casino online (o si mirás streams de xQc), vas a escuchar términos que capaz no conocés. Acá un mini diccionario para que no te pierdas.
        </P>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            { t: "RTP (Return to Player)", d: "Porcentaje teórico que un juego devuelve a largo plazo. RTP de 96% = devuelve 96 de cada 100 apostados, en promedio." },
            { t: "Volatilidad", d: "Qué tan seguido y qué tan grande paga un slot. Alta = premios raros pero grandes. Baja = premios frecuentes y chicos." },
            { t: "Rollover", d: "Las veces que tenés que apostar un bono antes de poder retirar. Bono con rollover x30 = apostar 30 veces ese monto." },
            { t: "Tumbles", d: "Mecánica donde los símbolos ganadores desaparecen y caen nuevos, encadenando premios. Típica de Sweet Bonanza y Sugar Rush." },
            { t: "Multiplicador", d: "Valor que multiplica tu premio. En Gates of Olympus pueden aparecer multiplicadores enormes que vuelan la pantalla." },
            { t: "Turnover", d: "El total apostado a lo largo de muchas jugadas. No es lo que ganaste ni perdiste: es el volumen movido. Las cifras gigantes de xQc son turnover." },
            { t: "KYC", d: "Verificación de identidad. Te piden documento y a veces selfie. Es requisito legal antes de retirar." },
            { t: "House Edge", d: "La ventaja matemática del casino. Es por qué, a la larga, la casa siempre gana." },
            { t: "Bankroll", d: "El total de plata que destinás a jugar. Debería ser lo que podés perder sin drama." },
            { t: "Originals", d: "Juegos propios de plataformas como Stake (Plinko, Crash, Mines) que no encontrás en casinos tradicionales." },
            { t: "Free Spins", d: "Giros gratis en slots. Las ganancias suelen tener su propio rollover, así que leé las condiciones." },
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
          No nos íbamos a ir sin esto. Ver a xQc mover cifras de millones es entretenido, pero el casino no es un trabajo ni una inversión (para vos; para él literalmente lo es, le pagan por transmitir). Para el resto, es entretenimiento que cuesta plata, como ir al cine. Y como todo entretenimiento que cuesta plata, hay que ponerle límites.
        </P>
        <P>
          Reglas simples que te pueden ahorrar disgustos: jugá solo con plata que estés dispuesto a perder, nunca con la del alquiler o la comida. Poné un presupuesto antes de empezar y respetalo, ganes o pierdas. Si perdés, no persigas las pérdidas. Y si sentís que se te está yendo de las manos, parás. No hay vergüenza en eso, hay inteligencia.
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
        <SectionTitle>Preguntas frecuentes sobre el casino de xQc</SectionTitle>
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
          Recapitulemos. La pregunta con la que llegaste era “¿en qué casino juega xQc?”, y la respuesta es <strong className="text-white">Stake</strong>, que además es su patrocinador y le paga una fortuna por transmitir. Eso es un hecho, y ahora ya sabés el contexto completo: por qué juega ahí, qué slots le gustan y por qué esas cifras récord hay que tomarlas con pinzas.
        </P>
        <P>
          Pero si tu pregunta de fondo era “¿y dónde juego yo?”, nuestra respuesta es distinta: para la mayoría, arrancar por <strong className="text-white">Betsson</strong> o por <strong className="text-white">STARDA</strong> (el paraíso de los slots, con un bono que te da margen) es una jugada más inteligente que copiar a un streamer al que le pagan por jugar. Stake es legítimo y podés usarlo si te manejás con cripto, pero no es necesariamente tu mejor punto de partida.
        </P>
        <P>
          Y por encima de qué casino elijas, lo más importante: jugá con la cabeza fría. El casino es entretenimiento, no un trabajo (salvo que seas xQc). Poné límites, respetalos, y disfrutá los slots por lo que son: un juego. Ojalá esta guía te haya servido no solo para saber dónde juega xQc, sino para entender todo lo que hay detrás y tomar decisiones informadas.
        </P>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton slug="betsson-latam" text="Empezar con Betsson" />
          <CtaButton slug="starda-casino" text="Jugar slots en STARDA" />
        </div>
      </Section>

      {/* LINKS */}
      <Section id="seguir-leyendo" alt>
        <SectionTitle>Seguí leyendo</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/streamers" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Casinos de otros streamers</p>
            <p className="text-[#71717a] text-sm">¿En qué casino juegan los demás? Lo investigamos.</p>
          </Link>
          <Link href="/streamers/casino-coscu" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">El casino de Coscu</p>
            <p className="text-[#71717a] text-sm">Dónde juega el gigante argentino del streaming.</p>
          </Link>
          <Link href="/mexico/mejores-casinos-online" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Mejores casinos en México</p>
            <p className="text-[#71717a] text-sm">Ranking completo con bonos verificados.</p>
          </Link>
          <Link href="/peru/mejores-casinos-online" className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#22c55e]/30 transition-colors">
            <p className="text-white font-bold mb-1">Mejores casinos en Perú</p>
            <p className="text-[#71717a] text-sm">Los más confiables para jugadores peruanos.</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
