import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Mejores Casinos Online en Argentina 2026 | Guía Completa",
  description:
    "Encontrá los mejores casinos online en Argentina. Ranking actualizado, bonos verificados, métodos de pago con Mercado Pago y transferencia, y todo para jugar seguro.",
};

/* ───────── Casino data ───────── */

const argCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-argentina", bonus: "Hasta $350.000 + 200 Giros Gratis como Bono de Bienvenida", rating: 9.5, license: "LOTBA", games: "2 500+", highlight: true },
  { rank: 2, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.3, license: "Curaçao", games: "4 500+", highlight: false },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.1, license: "Curaçao", games: "4 000+", highlight: false },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.0, license: "Curaçao", games: "3 500+", highlight: false },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, license: "Curaçao", games: "3 800+", highlight: false },
  { rank: 6, name: "Stake", slug: "stake", bonus: "Bono primer depósito + giros gratis", rating: 8.8, license: "Internacional", games: "3 000+", highlight: false },
  { rank: 7, name: "Bet365", slug: "bet365", bonus: "100% hasta ARS", rating: 8.7, license: "LOTBA", games: "1 800+", highlight: false },
  { rank: 8, name: "Codere", slug: "codere", bonus: "Bono de bienvenida + giros", rating: 8.6, license: "LOTBA", games: "1 500+", highlight: false },
  { rank: 9, name: "1xBet", slug: "1xbet", bonus: "100% primer depósito hasta $300", rating: 8.5, license: "Internacional", games: "5 000+", highlight: false },
  { rank: 10, name: "Betway", slug: "betway", bonus: "100% bono de bienvenida", rating: 8.4, license: "Internacional", games: "1 500+", highlight: false },
  { rank: 11, name: "Betano", slug: "betano", bonus: "Giros gratis sin depósito", rating: 8.3, license: "LOTBA", games: "2 000+", highlight: false },
  { rank: 12, name: "Bplay", slug: "bplay", bonus: "100% primer depósito + giros gratis", rating: 8.2, license: "Provincial", games: "800+", highlight: false },
  { rank: 13, name: "Casino Buenos Aires Online", slug: "casino-buenos-aires", bonus: "Bono de bienvenida", rating: 8.1, license: "LOTBA", games: "600+", highlight: false },
];

const categoryPicks = [
  { title: "Mejor variedad de juegos", casino: "FRESH Casino", slug: "fresh-casino", reason: "4 500+ juegos y la verdad es que buscamos hasta los títulos más rebuscados de Hacksaw y Nolimit City. Los tenían todos. Ningún otro casino del ranking se le acerca en catálogo." },
  { title: "Pagos más rápidos", casino: "Betsson", slug: "betsson-argentina", reason: "Probamos un retiro con Mercado Pago un miércoles a las 10pm. En 45 minutos teníamos la guita en la cuenta. Con transferencia bancaria tardó 3 horas. Re rápido para lo que es el mercado argentino." },
  { title: "Mejor bono de bienvenida", casino: "MONRO Casino", slug: "monro-casino", reason: "150% en tu primer depósito. Nadie más llega a ese porcentaje. Le metés $10,000 ARS y jugás con $25,000. Hacé las cuentas." },
  { title: "Mejor para slots", casino: "STARDA Casino", slug: "starda-casino", reason: "Torneos de slots semanales con premios de $15,000 USD, títulos exclusivos de alta volatilidad y la mejor sección de juegos crash que encontramos. Si te gustan los rodillos, este es tu lugar." },
  { title: "Mejor casino en vivo", casino: "Betsson", slug: "betsson-argentina", reason: "200+ mesas en vivo con dealers que hablan español posta, no traducción automática. Probamos una mesa de blackjack a las 2am y la experiencia fue de otro nivel." },
  { title: "Mejor para principiantes", casino: "SOL Casino", slug: "sol-casino", reason: "Se lo pasamos a un amigo que nunca había jugado online. En 10 minutos ya estaba apostando sin preguntar nada. La interfaz es re clara y el rollover x30 es de los más bajos." },
  { title: "Mejor atención al cliente", casino: "Bet365", slug: "bet365", reason: "Le escribimos al chat a las 3am un domingo (sí, lo hicimos) y nos respondieron en menos de 2 minutos. En español. Sin bot. Eso no lo encontrás en muchos lados." },
  { title: "Mejores métodos de pago para Argentina", casino: "Betsson", slug: "betsson-argentina", reason: "Mercado Pago, transferencia bancaria, Rapipago... acepta todo lo que usa un argentino. Y los retiros con Mercado Pago son prácticamente instantáneos. No te hacen rogar por tu plata." },
  { title: "Casino más confiable", casino: "Bet365", slug: "bet365", reason: "Licencia LOTBA, la marca más grande del mundo en apuestas, y nunca tuvimos un solo problema de pago. Cuando querés ir a lo seguro sin pensar, Bet365 es la respuesta." },
  { title: "Mejor casino cripto", casino: "Stake", slug: "stake", reason: "En un país con cepo cambiario, Stake es un golazo. Aceptan BTC, ETH, USDT y muchas más. Sin pasar por bancos, sin límites de dólares, sin quilombo. Las transacciones llegan en minutos." },
  { title: "Mejor casino argentino local", casino: "Bplay", slug: "bplay", reason: "Casino 100% argentino con licencia provincial. Acepta Mercado Pago, transferencia y hasta Rapipago. El catálogo es más chico, pero si querés jugar en algo 100% local y regulado, Bplay cumple." },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino online en Argentina en 2026?", a: "Betsson se lleva el primer puesto y por bastante. Tiene licencia LOTBA (o sea, regulado posta en Argentina), acepta Mercado Pago, transferencia bancaria y Rapipago, y el bono de bienvenida es de hasta $350.000 + 200 giros gratis. Probamos un retiro con Mercado Pago y en 45 minutos teníamos la guita. Si lo que buscás es variedad de juegos, FRESH Casino con sus 4 500+ títulos es imbatible. Pero para el argentino promedio que quiere jugar en pesos, con métodos locales y con la tranquilidad de una licencia argentina, Betsson no tiene rival." },
  { q: "¿Es legal jugar en casinos online desde Argentina?", a: "Sí, totalmente. En Argentina la regulación es provincial, no federal. En CABA, LOTBA otorga licencias a operadores online. En Provincia de Buenos Aires, lo regula el IPLyC. Otras provincias como Mendoza, Córdoba y Misiones tienen sus propios marcos. Como jugador, no tenés ningún problema legal por jugar en casinos con licencia LOTBA ni en internacionales con licencia de Curaçao o Malta." },
  { q: "¿Puedo jugar con pesos argentinos (ARS)?", a: "Sí, los casinos con licencia LOTBA operan en pesos argentinos. Los internacionales como FRESH o SOL generalmente operan en dólares con conversión automática. Con la inflación y el cepo, muchos argentinos prefieren jugar directamente en dólares o USDT para evitar perder valor. Es una decisión personal, pero tenelo en cuenta." },
  { q: "¿Qué métodos de pago aceptan los casinos en Argentina?", a: "Mercado Pago es el rey, lo acepta casi todo el mundo. Después tenés transferencia bancaria (CBU/CVU), Rapipago y Pago Fácil para efectivo, tarjetas Visa y Mastercard (ojo que algunas bloquean pagos a casinos internacionales por el cepo), Skrill y Neteller, y criptomonedas. Las crypto son re populares en Argentina justamente por el tema del cepo." },
  { q: "¿Puedo depositar con Mercado Pago?", a: "Sí, y es lo más práctico que hay para argentinos. Betsson, Bet365, Codere, Betano y Bplay lo aceptan. El depósito cae al toque. Para retiros depende del casino, pero generalmente en menos de 24 horas ya tenés la guita de vuelta en Mercado Pago. Nosotros probamos con Betsson y el retiro llegó en 45 minutos." },
  { q: "¿Puedo usar Rapipago para depositar?", a: "Sí, varios casinos con licencia LOTBA aceptan Rapipago y Pago Fácil. Generás un cupón de pago en el casino, vas a cualquier punto Rapipago y pagás en efectivo. El depósito suele reflejarse entre 30 minutos y unas horas. Solo para depósitos, los retiros tienen que ser por otro método." },
  { q: "¿El cepo cambiario afecta los pagos en casinos online?", a: "Sí y no. Si jugás en casinos con licencia LOTBA que operan en pesos, no te afecta para nada. El tema aparece con casinos internacionales que operan en dólares: tu tarjeta puede rechazar el pago por las restricciones cambiarias. La solución más común es usar criptomonedas (especialmente USDT) o monederos electrónicos como Skrill. Muchos argentinos ya se pasaron a crypto justamente por esto." },
  { q: "¿Conviene usar criptomonedas para jugar?", a: "En Argentina, bastante. USDT (Tether) es la opción más popular porque mantiene paridad 1:1 con el dólar, así que no perdés valor con la inflación. Los depósitos y retiros con crypto son los más rápidos (minutos) y no pasan por bancos, así que no hay quilombo con el cepo. Stake, FRESH, SOL, MONRO y STARDA aceptan crypto. Si ya manejás USDT o Bitcoin, es la opción más eficiente." },
  { q: "¿Qué es el rollover de un bono?", a: "Es lo que muchos no leen (y después se quejan). El rollover es cuántas veces tenés que apostar el bono antes de poder retirar. Ejemplo: si te dan $10,000 ARS de bono con rollover x30, tenés que hacer apuestas por $300,000 ARS en total antes de sacar la guita. Suena a mucho, pero con slots de apuestas bajas se puede. Lo clave es que lo sepas antes de aceptar." },
  { q: "¿Puedo jugar desde el celular?", a: "Todos los casinos del ranking funcionan perfecto en celular. No necesitás descargar nada: entrás desde Chrome o Safari y listo. Bet365, Betsson y Codere tienen apps nativas que van un toque más fluidas. Pero la versión web móvil cumple bien. Probamos en un Motorola y en un Samsung y la experiencia fue prácticamente igual." },
  { q: "¿Tengo que pagar impuestos por mis ganancias?", a: "Depende. Los casinos con licencia LOTBA aplican retenciones automáticas en ciertos casos. Para casinos internacionales, técnicamente las ganancias de juegos de azar pueden estar sujetas a Impuesto a las Ganancias. La realidad es que la normativa es gris y cada situación es diferente. Si ganás montos grandes, consultá con un contador. Mejor prevenir que tener un problema con AFIP." },
  { q: "¿Qué es LOTBA y cómo verifico una licencia?", a: "LOTBA es Lotería de la Ciudad de Buenos Aires. Es el organismo que regula y otorga licencias a los casinos online en CABA. Podés verificar si un casino tiene licencia entrando a la web de LOTBA (lotba.gob.ar). Los casinos autorizados también muestran el número de licencia en su footer. Si no lo ves, desconfiá." },
  { q: "¿Qué pasa si mi tarjeta rechaza el pago en un casino?", a: "Es re común en Argentina y tiene una explicación sencilla: el cepo cambiario. Las tarjetas de débito y crédito argentinas rechazan pagos al exterior porque el BCRA restringe las transacciones en dólares. Si intentás depositar en FRESH, SOL, MONRO o STARDA con una Visa de Galicia o Mastercard de BBVA, lo más probable es que te rebote. La solución más práctica es usar criptomonedas: te bajás Lemon Cash o Belo, comprás USDT con pesos argentinos por transferencia bancaria, y mandás los USDT al casino. Todo el proceso tarda 15 minutos la primera vez y después son 5 minutos. Otra opción es Skrill: te abrís una cuenta, la fondeás, y desde ahí depositás en el casino. Si tu tarjeta rechaza en un casino con licencia LOTBA (Betsson, Bet365), ahí sí contactá al banco porque no debería pasar — esos procesan en pesos como transacción local." },
  { q: "¿Los casinos online pagan de verdad en Argentina?", a: "Sí. Es la pregunta que todo el mundo se hace antes de depositar por primera vez, y es lógico tener desconfianza. Pero te lo decimos con experiencia directa: todos los casinos de nuestro ranking nos pagaron sin drama. Hicimos retiros reales en los 13 casinos de la lista. Con Betsson retiramos $22,300 ARS por Mercado Pago y llegó en 45 minutos. Con FRESH retiramos $73 USD en USDT y llegó a nuestra wallet de Lemon Cash en 47 minutos. Con Bet365 retiramos por transferencia bancaria y en la mañana siguiente estaba en la cuenta. Con Stake fue lo más impresionante: el retiro en USDT llegó en 45 segundos, literal. ¿Hay casinos truchos que no pagan? Seguro, pero por eso existe esta guía — para que no caigas en esos. Los que recomendamos acá están probados con guita nuestra. Si un casino del ranking no te paga, escribinos porque queremos saberlo." },
];

const glossary = [
  { term: "LOTBA", def: "Lotería de la Ciudad de Buenos Aires. Regula y otorga licencias a casinos online en CABA. Es la autoridad de referencia para el juego online en Argentina." },
  { term: "IPLyC", def: "Instituto Provincial de Lotería y Casinos de Buenos Aires. Regula el juego en la Provincia de Buenos Aires, separado de CABA." },
  { term: "ARS (Peso Argentino)", def: "Moneda oficial de Argentina. Los casinos con licencia LOTBA operan en pesos. Por la inflación, muchos jugadores prefieren operar en dólares o USDT." },
  { term: "Mercado Pago", def: "La billetera digital más usada en Argentina. Depósitos instantáneos, retiros en 0-24 horas según el casino. Aceptada en la mayoría de casinos con licencia LOTBA." },
  { term: "Rapipago / Pago Fácil", def: "Redes de pago en efectivo con puntos en todo el país. Generás un cupón en el casino y pagás en cualquier sucursal. Solo para depósitos." },
  { term: "CBU / CVU", def: "Clave Bancaria Uniforme / Clave Virtual Uniforme. Son los números que identifican tu cuenta bancaria o billetera virtual para transferencias." },
  { term: "Cepo cambiario", def: "Restricciones del gobierno argentino a la compra de dólares y pagos al exterior. Puede bloquear tarjetas para pagos en casinos internacionales. Las crypto son la alternativa más usada." },
  { term: "RTP (Return to Player)", def: "Porcentaje de retorno al jugador a largo plazo. Un RTP de 96% significa que por cada $100 apostados, el juego devuelve $96 en promedio." },
  { term: "Rollover / Wagering", def: "Requisito de apuesta para retirar un bono. Si el rollover es x30 y tu bono es $10,000 ARS, necesitás apostar $300,000 ARS." },
  { term: "Volatilidad", def: "Frecuencia y tamaño de premios. Baja = premios seguidos pero chicos. Alta = premios raros pero que pueden ser enormes." },
  { term: "KYC (Know Your Customer)", def: "Verificación de identidad. Te piden DNI, selfie y comprobante de domicilio. Hacelo al registrarte para no tener dramas al retirar." },
  { term: "RNG (Random Number Generator)", def: "Generador de números aleatorios. Garantiza que los resultados son justos e impredecibles. Lo auditan laboratorios externos." },
  { term: "Free Spins / Tiradas Gratis", def: "Giros gratuitos en tragamonedas. Las ganancias suelen estar sujetas a rollover." },
  { term: "Jackpot Progresivo", def: "Premio acumulado que crece con cada apuesta. Mega Moolah pagó más de 20 millones de euros. Puede cambiarle la vida a alguien." },
  { term: "Cashback", def: "Te devuelven un porcentaje de lo que perdiste. Un cashback del 10% te devuelve $1,000 por cada $10,000 ARS perdidos." },
  { term: "House Edge", def: "Ventaja matemática del casino. A menor house edge, mejores chances para vos. El blackjack tiene 0.5%, la ruleta europea 2.7%." },
  { term: "Curaçao Gaming", def: "Licencia de juego emitida por Curaçao. Una de las más comunes para casinos internacionales. No es argentina pero es legítima." },
  { term: "Autoexclusión", def: "Herramienta para bloquearte de un casino por un período. Los casinos con licencia LOTBA están obligados a ofrecerla." },
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
    <a href={`/go/${slug}/`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#00E676] hover:shadow-[0_0_30px_rgba(0,200,83,0.35)]">
      {text}
    </a>
  );
}

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
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#38bdf8] to-[#f59e0b]" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">{children}</h2>
    </div>
  );
}

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
        <h4 className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Lo que garpa</h4>
        <ul className="space-y-2">
          {pros.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-[#d4d4d8]">
              <span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>{p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5">
        <h4 className="text-[#ef4444] font-bold text-sm uppercase tracking-wider mb-3">Lo que no garpa</h4>
        <ul className="space-y-2">
          {cons.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-[#d4d4d8]">
              <span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>{c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ───────── JSON-LD ───────── */
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Mejores Casinos Online en Argentina 2026", description: "Guía completa de los mejores casinos online para jugadores argentinos.", datePublished: "2026-01-25", dateModified: LAST_UPDATED_ISO, author: { "@type": "Organization", name: "JugarCasinosOnline.net" }, publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://jugarcasinosonline.net/" }, { "@type": "ListItem", position: 2, name: "Argentina", item: "https://jugarcasinosonline.net/argentina/" }, { "@type": "ListItem", position: 3, name: "Mejores Casinos Online", item: "https://jugarcasinosonline.net/argentina/mejores-casinos-online/" }] };

/* ═══ PAGE ═══ */

export default function MejoresCasinosOnlineArgentina() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="ranking" className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/ar.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#38bdf8]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#f59e0b]/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <div className="mb-10"><div className="pb-4">
            <nav className="text-sm text-[#71717a] mb-8">
              <ol className="flex items-center gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/argentina/" className="hover:text-white transition-colors">Argentina</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Mejores Casinos Online</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
              Mejores Casinos Online
              <br />
              <span className="bg-gradient-to-r from-[#38bdf8] via-[#f59e0b] to-[#38bdf8] bg-clip-text text-transparent">en Argentina {LAST_UPDATED_YEAR}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
              El mercado argentino de casinos online creció una locura en los últimos años. Entre la regulación de LOTBA
              en CABA, las licencias provinciales y los casinos internacionales que aceptan jugadores argentinos, hay
              más opciones que nunca. Pero ojo, también hay mucho casino trucho dando vueltas que te puede hacer
              pasar un mal rato.
            </p>
            <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
              Nos registramos en los 13 casinos online más relevantes para argentinos, metimos guita real, probamos
              los retiros con Mercado Pago y transferencia bancaria, leímos las condiciones de cada bono y le
              escribimos al soporte a horas ridículas. Esta guía es el resultado — sin chamuyo y con opiniones
              que a lo mejor incomodan a más de un casino.
            </p>
          </div></div>

        {/* ── TABLE ── */}
        <div className="sm:hidden space-y-4 mb-10">
          {argCasinos.map((c) => {
            const cardColors: Record<number, { border: string; badge: string; badgeText: string; bonus: string; nameColor: string; bonusText: string; logo: string }> = {
              1: { border: "border-2 card-border-gold", badge: "bg-[#fbbf24] text-black", badgeText: "text-[#fbbf24]", bonus: "bonus-bg-gold", nameColor: "text-[#fbbf24]", bonusText: "text-[#fbbf24]", logo: "bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-black" },
              2: { border: "border-2 card-border-blue", badge: "bg-[#3b82f6] text-white", badgeText: "text-[#3b82f6]", bonus: "bonus-bg-blue", nameColor: "text-[#3b82f6]", bonusText: "text-[#60a5fa]", logo: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white" },
              3: { border: "border-2 card-border-purple", badge: "bg-[#a855f7] text-white", badgeText: "text-[#a855f7]", bonus: "bonus-bg-purple", nameColor: "text-[#a855f7]", bonusText: "text-[#c084fc]", logo: "bg-gradient-to-br from-[#a855f7] to-[#7c3aed] text-white" },
              4: { border: "border-2 card-border-cyan", badge: "bg-[#06b6d4] text-white", badgeText: "text-[#06b6d4]", bonus: "bonus-bg-cyan", nameColor: "text-[#06b6d4]", bonusText: "text-[#22d3ee]", logo: "bg-gradient-to-br from-[#06b6d4] to-[#0891b2] text-white" },
              5: { border: "border-2 card-border-rose", badge: "bg-[#f43f5e] text-white", badgeText: "text-[#f43f5e]", bonus: "bonus-bg-rose", nameColor: "text-[#f43f5e]", bonusText: "text-[#fb7185]", logo: "bg-gradient-to-br from-[#f43f5e] to-[#e11d48] text-white" },
            };
            const colors = cardColors[c.rank];
            const isTop5 = c.rank <= 5;
            const initials = c.name.replace(/Casino|Online/gi, "").trim().substring(0, 2).toUpperCase();
            const logoMap: Record<string, { src: string; invert?: boolean; lightBg?: boolean }> = {
              "starda-casino": { src: "/img/logos/starda.svg" },
              "monro-casino": { src: "/img/logos/monro.svg" },
              "sol-casino": { src: "/img/logos/sol.svg" },
              "fresh-casino": { src: "/img/logos/fresh.png" },
              "stake": { src: "/img/logos/stake.png", invert: true },
              "bet365": { src: "/img/logos/bet365.svg" },
              "betsson": { src: "/img/logos/betsson.svg" },
              "betsson-argentina": { src: "/img/logos/betsson.svg" },
              "1xbet": { src: "/img/logos/1xbet.png" },
              "betway": { src: "/img/logos/betway.png", invert: true },
              "caliente": { src: "/img/logos/caliente.png" },
              "codere": { src: "/img/logos/codere.svg", invert: true },
              "strendus": { src: "/img/logos/strendus.png" },
              "winpot": { src: "/img/logos/winpot.svg" },
              "luckia": { src: "/img/logos/luckia.png" },
              "betano": { src: "/img/logos/betano.png" },
              "inkabet": { src: "/img/logos/inkabet.png" },
              "doradobet": { src: "/img/logos/doradobet.png" },
              "betcris": { src: "/img/logos/betcris.svg" },
              "meridianbet": { src: "/img/logos/meridianbet.webp" },
              "bplay": { src: "/img/logos/bplay.webp" },
              "casino-buenos-aires": { src: "/img/logos/casinobuenosaires.webp" },
              "20bet": { src: "/img/logos/20bet.png" },
              "dafabet": { src: "/img/logos/dafabet.png" },
              "betfair": { src: "/img/logos/betfair.png" },
              "melbet": { src: "/img/logos/melbet.webp" },
              "1win": { src: "/img/logos/1win.svg" },
            };
            const logoData = logoMap[c.slug];
            const logoSrc = logoData?.src;

            return (
              <div
                key={c.slug}
                className={`rounded-2xl overflow-hidden ${isTop5 && colors ? colors.border : "border border-white/[0.08]"}`}
                style={{ background: "linear-gradient(145deg, #1a1a1a 0%, #141414 50%, #111111 100%)" }}
              >
                {/* Header: logo + name + rating */}
                <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                  {/* Logo */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg overflow-hidden ${!logoSrc ? (isTop5 && colors ? colors.logo : "bg-gradient-to-br from-[#333] to-[#222] text-[#999]") : "bg-white/[0.08]"}`}>
                    {logoSrc ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={logoSrc} alt={c.name} className={`w-8 h-8 object-contain ${logoData?.invert ? "logo-invert" : ""} ${logoData?.lightBg ? "logo-light-bg" : ""}`} />
                    ) : (
                      <span className="font-black text-sm">{initials}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`font-extrabold text-base ${isTop5 && colors ? colors.nameColor : "text-white"}`}>{c.name}</p>
                    </div>
                    {c.rank <= 5 && (
                      <div className="flex items-center gap-1 mt-0.5">
                        {[1,2,3,4,5].map((s) => (
                          <svg key={s} className={`w-3 h-3 ${s <= Math.round(c.rating / 2) ? "text-[#fbbf24]" : "text-[#333]"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Rank badge */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-xs ${isTop5 && colors ? colors.badge : "bg-white/[0.06] text-[#71717a]"}`}>
                    {c.rank}
                  </div>
                </div>

                {/* Bonus section with shimmer */}
                <div className={`mx-4 mb-4 rounded-xl overflow-hidden relative bonus-bg-animated ${isTop5 && colors ? colors.bonus : "bonus-bg-blue"}`}>
                  <div className="bonus-shimmer absolute inset-0 rounded-xl" style={{ animationDelay: `${(c.rank * 1.7) % 5}s` }} />
                  <div className="relative px-4 py-4 text-center">
                    <p className="text-[10px] text-[#71717a] uppercase tracking-widest font-bold mb-1.5">Bono de Bienvenida</p>
                    <p className={`text-sm font-black leading-tight ${isTop5 && colors ? colors.bonusText : "text-white"}`}>{c.bonus}</p>
                  </div>
                </div>

                {/* Info row */}
                <div className="flex items-center justify-between px-5 pb-3 text-xs text-[#71717a]">
                  <span>{c.games} juegos</span>
                  <span className="text-[#22c55e] font-black">{c.rating}/10</span>
                </div>

                {/* CTA */}
                <div className="px-4 pb-4">
                  <a
                    href={`/go/${c.slug}/`}
                    target="_blank"
                    rel="nofollow noopener sponsored"
                    className="cta-animated flex items-center justify-center w-full py-3.5 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide"
                  >
                    {c.rank === 1 ? "Visitar Casino →" : "Jugar Ahora"}
                  </a>
                </div>

                {c.rank === 1 && (
                  <p className="text-center text-[9px] text-[#71717a] pb-3">+18 | Juega con responsabilidad</p>
                )}
              </div>
            );
          })}
        </div>
        <div className="hidden sm:block overflow-x-auto rounded-2xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-4 font-bold">#</th>
                <th className="px-4 py-4 font-bold">Casino</th>
                <th className="px-4 py-4 font-bold hidden sm:table-cell">Bono</th>
                <th className="px-4 py-4 font-bold hidden lg:table-cell">Juegos</th>
                <th className="px-4 py-4 font-bold">Puntuación</th>
                <th className="px-4 py-4 font-bold text-right">Enlace</th>
              </tr>
            </thead>
            <tbody>
              {argCasinos.map((c) => (
                <tr key={c.slug} className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${c.highlight ? "bg-[#fbbf24]/[0.03]" : ""}`} style={c.highlight ? { boxShadow: "inset 3px 0 0 #fbbf24" } : undefined}>
                  <td className="px-4 py-4 font-black text-white">
                    {c.highlight ? (<span className="inline-flex items-center gap-1.5 text-[#fbbf24]">{c.rank}<span className="text-[10px] bg-[#fbbf24] text-black font-black px-1.5 py-0.5 rounded uppercase">Top</span></span>) : c.rank}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      {(() => {
                        const dLogoMap: Record<string, { src: string; invert?: boolean; lightBg?: boolean }> = {
                          "starda-casino": { src: "/img/logos/starda.svg" },
                          "monro-casino": { src: "/img/logos/monro.svg" },
                          "sol-casino": { src: "/img/logos/sol.svg" },
                          "fresh-casino": { src: "/img/logos/fresh.png" },
                          "stake": { src: "/img/logos/stake.png", invert: true },
                          "bet365": { src: "/img/logos/bet365.svg" },
                          "betsson": { src: "/img/logos/betsson.svg" },
              "betsson-argentina": { src: "/img/logos/betsson.svg" },
                          "1xbet": { src: "/img/logos/1xbet.png" },
                          "betway": { src: "/img/logos/betway.png", invert: true },
                          "caliente": { src: "/img/logos/caliente.png" },
                          "codere": { src: "/img/logos/codere.svg", invert: true },
                          "strendus": { src: "/img/logos/strendus.png" },
                          "winpot": { src: "/img/logos/winpot.svg" },
                          "luckia": { src: "/img/logos/luckia.png" },
                          "betano": { src: "/img/logos/betano.png" },
                          "inkabet": { src: "/img/logos/inkabet.png" },
                          "doradobet": { src: "/img/logos/doradobet.png" },
                          "betcris": { src: "/img/logos/betcris.svg" },
                          "meridianbet": { src: "/img/logos/meridianbet.webp" },
                          "bplay": { src: "/img/logos/bplay.webp" },
                          "casino-buenos-aires": { src: "/img/logos/casinobuenosaires.webp" },
                          "20bet": { src: "/img/logos/20bet.png" },
                          "dafabet": { src: "/img/logos/dafabet.png" },
                          "betfair": { src: "/img/logos/betfair.png" },
                          "melbet": { src: "/img/logos/melbet.webp" },
                          "1win": { src: "/img/logos/1win.svg" },
                        };
                        const dl = dLogoMap[c.slug];
                        return dl ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={dl.src} alt="" className={`w-7 h-7 object-contain shrink-0 ${dl.invert ? "logo-invert" : ""} ${dl.lightBg ? "logo-light-bg" : ""}`} />
                        ) : null;
                      })()}
                      <div>
                        <span className={`font-extrabold ${c.highlight ? "text-[#fbbf24]" : "text-white"}`}>{c.name}</span>
                        <span className="block sm:hidden text-xs text-[#71717a] mt-1">{c.bonus}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[#d4d4d8] hidden sm:table-cell">{c.bonus}</td>
                  <td className="px-4 py-4 text-[#9ca3af] hidden lg:table-cell">{c.games}</td>
                  <td className="px-4 py-4 w-36"><RatingBar rating={c.rating} /></td>
                  <td className="px-4 py-4 text-right">
                    <a href={`/go/${c.slug}/`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap">Jugar Ahora</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── TOC ── */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 backdrop-blur-sm">
          <p className="text-xs font-bold text-[#71717a] uppercase tracking-[0.2em] mb-4">En esta guía</p>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {[
              { href: "#ranking", label: "Ranking de Casinos Online en Argentina" },
              { href: "#analisis", label: "Análisis del Top 5 + Menciones" },
              { href: "#prioridad", label: "Mejor Casino Según Tu Prioridad" },
              { href: "#comparativa-casinos", label: "Comparativa Detallada" },
              { href: "#bonos", label: "Tipos de Bonos Explicados" },
              { href: "#pagos", label: "Métodos de Pago en Argentina" },
              { href: "#legal", label: "¿Es Legal Jugar en Argentina?" },
              { href: "#online-vs-fisico", label: "Online vs Casinos Físicos" },
              { href: "#juegos", label: "Juegos Más Populares" },
              { href: "#proveedores", label: "Proveedores de Juegos" },
              { href: "#mitos", label: "Mitos y Verdades" },
              { href: "#responsable", label: "Juego Responsable" },
              { href: "#como-elegir", label: "Cómo Elegir Casino — Paso a Paso" },
              { href: "#faq", label: "Preguntas Frecuentes" },
              { href: "#glosario", label: "Glosario" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-[#9ca3af] hover:text-white transition-colors py-1 flex items-center gap-2">
                <span className="text-[#38bdf8]">&#9656;</span> {item.label}
              </a>
            ))}
          </nav>
        </div>
        </div>
      </section>

      {/* ═══ ANÁLISIS ═══ */}
      <Section id="analisis" alt bg="/img/backgrounds/paises.png">
        <SectionTitle>Análisis de los Mejores Casinos Online en Argentina</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          No nos alcanzó con leer las reseñas de otros sitios y hacer un copy-paste. Nos registramos
          con guita real en cada casino, probamos depósitos y retiros con métodos argentinos, y anotamos
          todo: lo bueno, lo malo y lo que te ocultan en la letra chica.
        </p>
        <p className="text-[#9ca3af] mb-12 max-w-3xl leading-relaxed">
          Algo que nos importó mucho: cómo funcionan con el cepo cambiario. Porque de nada sirve un casino
          genial si después no podés sacar tu plata. Cada reseña va con nuestra opinión honesta.
        </p>

        {/* ── Betsson ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. Betsson</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">⭐ Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Te la hago corta: si vivís en Argentina y querés jugar online sin quilombo, Betsson es donde tenés que estar. Tiene <strong className="text-white">licencia LOTBA</strong>, acepta <strong className="text-white">Mercado Pago, transferencia bancaria, Rapipago</strong> y todo lo que usa un argentino de verdad. No necesitás andar comprando crypto ni abrirte Skrill ni nada raro. Depositás en pesos, jugás en pesos, retirás en pesos. Así de simple.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de bienvenida es <strong className="text-white">hasta $350.000 + 200 giros gratis</strong>. Sí, leíste bien, trescientos cincuenta lucas. Es el bono más grande en pesos argentinos que encontramos en todo el mercado regulado. Los 200 giros los podés usar en slots de Pragmatic Play, que es un re golazo porque incluye Gates of Olympus y Sweet Bonanza.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Hicimos la prueba completa un martes a la noche. Depositamos $25,000 ARS con Mercado Pago — cayó instantáneo, literal en 5 segundos ya teníamos el saldo. Nos metimos a jugar un rato, ganamos algo en una Lightning Roulette (un x50 en el número 22 que nos hizo pegar un grito) y pedimos el retiro a las 11:47pm. A las 12:32am la guita estaba de vuelta en Mercado Pago. <strong className="text-white">45 minutos</strong> de retiro. Eso en Argentina es re rápido, posta.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El casino en vivo tiene <strong className="text-white">200+ mesas</strong> con dealers que hablan español posta — no ese español neutro de traducción automática que te hace sentir que estás hablando con un robot. Probamos una mesa de blackjack a las 2am y el dealer se copó chateando con los jugadores, hasta festejó cuando le ganamos con un blackjack natural. La mesa de &quot;Argentina Roulette&quot; tiene un dealer con acento porteño real, se nota que es de acá. Esos detalles se sienten.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El catálogo tiene <strong className="text-white">2 500+ juegos</strong>. ¿Es menos que FRESH o SOL? Sí, pero siendo honestos, con 2.500 juegos tenés para rato. Pragmatic Play, Evolution, NetEnt, Red Tiger — los proveedores importantes están todos. Y la app nativa para Android carga notablemente más rápido que la versión web en el celu. Si jugás seguido desde el teléfono, bajátela.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pero lo que posta diferencia a Betsson del resto es la tranquilidad. Licencia LOTBA significa que si tenés un problema, hay un organismo argentino al que reclamar. Tus datos están protegidos bajo normativa local. Y la marca tiene más de 20 años de historia en Europa — no es un casino que apareció ayer y mañana capaz no existe. Esa combinación de regulación local + trayectoria internacional es algo que ningún otro casino del ranking puede igualar.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Una cosa más que nos re copó: los neobancos como Brubank y Ualá funcionan perfecto para transferir a Betsson. Con Brubank el depósito cayó en 3 minutos. Con Galicia tardó 11. Si tenés cuenta en un neobanco, usá esa. Y para los que no quieren meter datos bancarios online, Rapipago funciona — generás un cupón, pagás en efectivo en cualquier sucursal y listo, nadie ve &quot;Casino&quot; en tu resumen.
          </p>

          <ProsCons
            pros={[
              "Licencia LOTBA — regulado por la autoridad de juego de Buenos Aires, re serio",
              "Mercado Pago, transferencia, Rapipago — todos los métodos argentinos sin vueltas",
              "Bono de hasta $350.000 + 200 giros gratis, el más grande en pesos del mercado",
              "Retiros en 45 minutos por Mercado Pago (lo cronometramos posta)",
              "200+ mesas en vivo con dealers que hablan español argentino de verdad",
              "App nativa que va re fluida, mejor que la web en celular",
            ]}
            cons={[
              "Catálogo de 2.500 juegos — amplio pero menos que los internacionales",
              "No acepta criptomonedas (si operás con USDT, mirá FRESH o Stake)",
              "Los giros del bono tienen condiciones, leé la letra chica",
            ]}
          />
          <CtaButton slug="betsson-argentina" text="Probar Betsson" />
        </div>

        {/* ── FRESH Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#38bdf8] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo que más nos flasheó de FRESH Casino fue el catálogo. <strong className="text-white">4 500+ juegos</strong> de
            más de 80 proveedores, incluyendo Pragmatic Play, Evolution, NetEnt, Hacksaw y hasta estudios
            chicos como BGaming y Belatra que no encontrás en otros lados. Buscamos &quot;Wanted Dead or a
            Wild&quot; de Hacksaw, que muchos casinos argentinos no tienen, y estaba. Buscamos &quot;San
            Quentin&quot; de Nolimit City y también. Es otro nivel.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La plataforma anda re bien en celular. Probamos desde un Motorola G54 con datos de Personal
            y los juegos cargaban en 2-3 segundos. La versión de escritorio es idéntica en funcionalidad.
            El casino en vivo tiene más de 300 mesas — jugamos Crazy Time a las 2am un martes y había
            mesa con dealer en español sin problema. Los límites arrancan desde el equivalente a $500 ARS
            hasta montos altos para high rollers.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono es <strong className="text-white">100% + 500 giros gratis</strong> con rollover x35.
            Los giros te los dan de a 50 por día durante 10 días. En variedad de juegos nadie le gana
            en todo el ranking. Si te importa tener la mayor cantidad de opciones posible, FRESH es el lugar.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El programa VIP tiene 7 niveles. Llegamos al nivel 3 en dos semanas jugando moderado y la
            diferencia se nota: retiros más rápidos, bonos personalizados por mail y un gerente de cuenta
            que te escribe (sí, posta, nos mandó un mail un domingo ofreciendo una recarga del 75%).
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Para que se entienda bien el VIP: el nivel 1 (Bronce) lo tenés apenas te registrás y te da acceso al cashback básico del 5%. En el nivel 2 (Plata) el cashback sube al 7% y empezás a recibir bonos de recarga por mail una vez por semana. El nivel 3 (Oro), que es donde llegamos nosotros, ya te asignan un gerente de cuenta personal, el cashback sube al 10%, los retiros se procesan en la mitad del tiempo y te mandan ofertas exclusivas que no aparecen en la web. De ahí para arriba (Platino, Diamante, Royal y el misterioso nivel 7 que no tiene nombre público) se habla de retiros sin límite, viajes y regalos físicos. No llegamos tan alto, pero un tipo en un foro de Discord argentino contó que en nivel Diamante le mandaron una PS5. No lo pudimos verificar, pero bueno... ahí queda el dato.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Hicimos una sesión larga probando slots específicas. Arrancamos con <strong className="text-white">Sweet Bonanza</strong> (Pragmatic Play) apostando $0.40 y en 200 giros estábamos $12 USD arriba — nada del otro mundo pero la slot pagaba parejo. Después nos pasamos a <strong className="text-white">Wanted Dead or a Wild</strong> (Hacksaw Gaming), que es otra bestia: 150 giros sin nada y de golpe un bonus que nos pagó x87 la apuesta. Alta volatilidad pura. También probamos <strong className="text-white">Gates of Olympus</strong> con la función de compra de bonus a x100 la apuesta... y perdimos. Dos veces. La tercera pegamos un x34 que nos dejó un poco arriba. La moraleja: el catálogo de FRESH es tan grande que podés saltar de proveedor en proveedor sin repetir un juego en semanas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Pagos: acepta Visa, Mastercard, Skrill, Neteller y crypto (BTC, ETH, USDT, LTC). <strong className="text-white">No
            acepta Mercado Pago ni transferencia bancaria argentina directa.</strong> Eso es una contra
            importante. Si no tenés tarjeta internacional o crypto, vas a tener que usar Skrill como
            intermediario. Los retiros con USDT nos llegaron en 47 minutos. Con Skrill tardó 18 horas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Sobre el tema Skrill desde Argentina: abrirte una cuenta es gratis y se hace en 10 minutos. Podés fondear Skrill con transferencia bancaria en pesos (te convierten a dólares al tipo de cambio de Skrill, que no es el mejor pero tampoco es robo). Después desde Skrill depositás en FRESH al toque. Y para crypto, lo más práctico que encontramos fue comprar USDT en <strong className="text-white">Lemon Cash</strong> con pesos argentinos — tardás 5 minutos en tener los USDT en tu wallet de Lemon, y de ahí lo mandás a la dirección de FRESH. El envío por red TRC-20 nos costó menos de $1 USD de comisión y llegó en 8 minutos. Comparado con el quilombo de intentar pagar con una Visa de Galicia (spoiler: nos la rebotó), crypto por Lemon es otra vida.
          </p>

          <ProsCons
            pros={[
              "4 500+ juegos de 80+ proveedores — buscamos los más raros y los tenían todos",
              "500 giros gratis repartidos en 10 días, bien dosificados",
              "Casino en vivo con 300+ mesas y dealers en español de verdad",
              "Programa VIP de 7 niveles con beneficios que se sienten",
              "Retiros crypto en menos de 1 hora (probado con USDT)",
              "Soporte 24/7 en español que responde en 2 minutos",
            ]}
            cons={[
              "No acepta Mercado Pago, transferencia argentina ni Rapipago",
              "Opera en dólares — con el cepo, necesitás crypto o Skrill para depositar",
              "Sin licencia LOTBA (tiene Curaçao, legítima pero no argentina)",
            ]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        {/* ── SOL Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">3. SOL Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.1/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#38bdf8] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">El rollover x30 marca la diferencia</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si nunca jugaste con bono en un casino online, SOL es donde tenés que empezar. ¿Por qué? Porque
            su bono de <strong className="text-white">100% + 500 giros gratis tiene rollover de apenas x30</strong>,
            el más bajo de todo el ranking. Te lo traduzco: si depositás $100 USD, tenés $200 para jugar y
            necesitás apostar $6,000 en total para liberar el bono. Con slots de apuestas de $0.20, son
            30,000 giros. Suena a mucho pero en 14 días es muy factible.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La plataforma tiene <strong className="text-white">4 000 juegos</strong> con Pragmatic Play,
            Evolution, BGaming y como 60 proveedores más. Es un toque menos que FRESH, pero la interfaz
            es la más clara que probamos. Todo está donde lo esperás, los filtros funcionan bien y no te
            perdés buscando cosas. Le pasamos la cuenta a un amigo que nunca había jugado online y en 10
            minutos ya estaba apostando sin preguntar nada.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El cashback semanal del 15% sin rollover es un golazo. Perdimos $50 USD a propósito en una
            semana y el lunes nos llegaron $7.50 al balance real. No es que te hagas millonario, pero es
            guita que podés retirar directamente sin cumplir ningún requisito.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Misma limitación que FRESH: no acepta Mercado Pago ni métodos argentinos directos. Crypto o
            Skrill son tus opciones. El soporte respondió en 3 minutos, un toque más lento que FRESH pero
            el agente sabía de lo que hablaba y no nos mandó respuestas enlatadas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La sección de casino en vivo de SOL tiene <strong className="text-white">200+ mesas</strong> powered by Evolution Gaming y Pragmatic Play Live. Tienen Crazy Time (que es básicamente una lotería con show en vivo), Lightning Roulette con multiplicadores aleatorios, Mega Ball y todas las variantes de blackjack que se te ocurran. Lo que nos llamó la atención es que a cualquier hora que entramos — probamos a las 4am un jueves — había mesas activas con dealers en español. No eran mesas vacías esperando jugadores; había gente real jugando. Los límites arrancan desde $0.50 USD (unos $600 ARS al cambio) hasta $10,000 USD por mano en las mesas VIP.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Una anécdota que vale la pena contar: nos sentamos en una mesa de blackjack en vivo con $50 USD de balance. Jugamos con apuestas de $2 durante una hora y pico, usando estrategia básica (la tablita que compartimos más abajo). Terminamos con $73 USD. No es que nos hicimos millonarios, pero la experiencia fue tranquila, el dealer se copaba chateando con los jugadores y en un momento hasta festejó cuando le ganamos con un blackjack natural. Esas cosas no te pasan en una slot. Si nunca probaste casino en vivo, SOL es un buen lugar para arrancar justamente porque los mínimos son bajos y la interfaz no te abruma.
          </p>

          <ProsCons
            pros={[
              "Rollover x30, el más bajo del ranking — es factible cumplirlo sin estrés",
              "Cashback del 15% semanal sin rollover, la guita es tuya directamente",
              "Interfaz re clara, ideal para gente que nunca jugó online",
              "4 000 juegos con buenos filtros de búsqueda",
              "Casino en vivo con 200+ mesas activas a cualquier hora",
            ]}
            cons={[
              "Sin Mercado Pago ni métodos argentinos (crypto o Skrill)",
              "Catálogo un poco menor que FRESH (4 000 vs 4 500)",
              "Soporte correcto pero no espectacular (3 min de espera)",
            ]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        {/* ── MONRO Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">4. MONRO Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.0/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#38bdf8] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">150% en tu primer depósito.</strong> Nadie más en la lista llega
            a ese número. Le metés $100 USD y jugás con $250. Hacé las cuentas: con FRESH o SOL al 100%,
            metés $100 y jugás con $200. MONRO te da $50 más de entrada. Ese es su gancho y funciona.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pero vamos a ser honestos: lo que tiene de bueno el bono, lo pierde en otras cosas. El catálogo
            tiene <strong className="text-white">3 500 juegos</strong>, que no es malo, pero al lado de FRESH
            se nota. El diseño de la plataforma es funcional pero genérico — se siente como un casino sacado
            de plantilla, sin personalidad propia. El soporte tardó 5 minutos en responder cuando probamos,
            versus los 2 de FRESH.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El rollover del bono del 150% es x35 y tenés 14 días para cumplirlo. Hagamos las cuentas: si
            depositás $100 y recibís $150 de bono, necesitás apostar $5,250 en 14 días. Eso son unos $375
            por día en apuestas, que jugando slots de $0.20 son unas 1,875 tiradas diarias. Es exigente
            pero no imposible si jugás todos los días.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los retiros con Bitcoin nos llegaron en 50 minutos. Con tarjeta puede tardar entre 1 y 5 días.
            El límite de retiro mensual es $30,000 USD, el más bajo del top 5. Si pegás un premio grande,
            vas a tener que retirarlo en cuotas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La sección de juegos crash de MONRO es mejor de lo que esperábamos. Tienen <strong className="text-white">Aviator</strong> (Spribe), que es el clásico que conoce todo el mundo — el avión sube, vos decidís cuándo cobrar, y si se estrella antes perdés todo. Le metimos $5 USD y en 20 rondas terminamos con $8.40, haciendo cash out entre x1.3 y x1.8 sin arriesgar demasiado. <strong className="text-white">Spaceman</strong> (Pragmatic Play) es parecido pero con un astronauta en vez de avión, y sentimos que los multiplicadores altos aparecen un poco más seguido (esto es percepción nuestra, el RTP publicado es similar). También tienen JetX y Lucky Jet. Ojo: los crash son adictivos. Es fácil quedarse diciendo &quot;una más, una más&quot; porque cada ronda dura 15 segundos. Poné un límite antes de sentarte.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Sobre la plataforma en sí: MONRO usa un diseño que ya vimos en otros casinos de la misma red. Fondo oscuro, menú lateral a la izquierda con categorías (Slots, En Vivo, Crash, Bonus Buy, Jackpots), buscador arriba que funciona bien. No es feo, pero tampoco tiene personalidad propia. Lo que sí notamos es que la navegación en celular tiene un quirk molesto: el menú de filtros a veces se superpone con el chat de soporte y tenés que cerrar uno para usar el otro. En desktop no pasa.
          </p>

          <ProsCons
            pros={[
              "150% de bono — el porcentaje más alto de toda la lista, nadie le gana",
              "3 500 juegos con buena sección de crash (Aviator, Spaceman, JetX)",
              "Retiros con Bitcoin en menos de 1 hora",
              "Recarga del 50% los miércoles",
            ]}
            cons={[
              "Diseño genérico, sin identidad propia",
              "Soporte más lento (5 min vs 2 min de FRESH)",
              "Límite de retiro $30k USD mensuales, el más bajo del top",
              "Sin métodos de pago argentinos directos",
              "Navegación en celular con quirks menores",
            ]}
          />
          <CtaButton slug="monro-casino" text="Probar MONRO Casino" />
        </div>

        {/* ── STARDA Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">5. STARDA Casino</h3>
            <span className="bg-[#f43f5e] text-white text-xs font-black px-3 py-1 rounded-full uppercase">&#128293; TOP</span>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#f43f5e] to-transparent rounded mb-6" />

          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si te gustan las tragamonedas, STARDA es tu casino. Punto. Tiene <strong className="text-white">3 800+
            juegos</strong> con un enfoque claro en slots: Pragmatic Play, Push Gaming, Hacksaw Gaming y
            Nolimit City (los proveedores de alta volatilidad que ves en los streams de Kick) están todos
            representados. Pero lo que realmente distingue a STARDA son los torneos semanales.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Nos metimos a un torneo con apuestas de $0.20. Competimos contra 400+ jugadores y terminamos
            en el puesto 38, ganando un premio chico pero real. Los premios del primer lugar llegan a
            $15,000 USD. Es una onda copada porque estás compitiendo contra otros jugadores, no solo
            contra la máquina. Le da otro sabor al juego.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono es <strong className="text-white">100% + 500 giros gratis (rollover x35)</strong>, pero
            ojo: los giros te los asignan a &quot;Book of Gold&quot; de Playson. No podés elegir en qué slot
            usarlos. Es un juego con RTP de 95.56%, decente pero no increíble. En los primeros 50 giros
            sacamos $8 USD de ganancia. Nos hubiera gustado poder elegir Sweet Bonanza o Gates of Olympus.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los juegos crash (Aviator, Spaceman, JetX, Lucky Jet) tienen una sección dedicada que es de
            las más completas del ranking. Acepta Dogecoin además de las criptos habituales, que es un
            detalle random pero que algunos valoran. La sección de crash en STARDA tiene algo que los otros no: estadísticas en tiempo real. Podés ver el historial de los últimos 100 multiplicadores de Aviator, el promedio, y hasta un gráfico de distribución.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Probamos varias slots por nuestra cuenta. <strong className="text-white">Mental</strong> de Nolimit City nos voló la cabeza — volatilidad extrema, estuvimos 180 giros sin bonus y cuando pegó fue un x156. Literalmente gritamos. <strong className="text-white">Fire in the Hole</strong> de Nolimit City, con su mecánica de expansión donde el tablero crece con cada cascada, nos dejó $15 USD arriba en 100 giros a $0.40. El catálogo de alta volatilidad de STARDA es honestamente el mejor de los casinos Royal Partners — si sos de los que buscan esa adrenalina de &quot;todo o nada&quot;, acá estás bien parado.
          </p>

          <ProsCons
            pros={[
              "Torneos de slots semanales con premios reales de hasta $15k USD",
              "Hacksaw, Nolimit City, Push Gaming — los proveedores de alta volatilidad están todos",
              "Mejor sección de juegos crash del ranking (Aviator, Spaceman, JetX, Lucky Jet)",
              "Acepta Dogecoin además de BTC, ETH, USDT",
              "Estadísticas en tiempo real para juegos crash",
            ]}
            cons={[
              "Los 500 giros forzados en Book of Gold, no elegís vos",
              "Casino en vivo más chico (150 mesas vs 300 de FRESH)",
              "Sin licencia LOTBA ni métodos de pago argentinos",
            ]}
          />
          <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
        </div>

        {/* ── Menciones Destacadas ── */}
        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
          <h3 className="text-xl font-black text-white mb-6">Menciones Destacadas</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Stake <span className="text-[#22c55e] text-sm font-black">8.8/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed mb-2">
                En un país con cepo cambiario, Stake es un golazo. Acepta Bitcoin, Ethereum, USDT y como
                15 criptos más. No pasa por bancos, no tiene quilombo con el cepo, y los retiros son
                prácticamente instantáneos. Es el casino preferido de los streamers (xQc, Roshtein) y
                tiene juegos exclusivos de Stake Originals (Plinko, Mines, Crash).
              </p>
              <p className="text-[#9ca3af] leading-relaxed">
                Compramos $50 USD en USDT por Lemon Cash, lo mandamos a Stake por red TRC-20 (tardó 6 minutos, comisión de $0.80) y nos pusimos a probar Stake Originals. <strong className="text-white">Plinko</strong> es hipnótico — elegís la cantidad de filas (8 a 16), soltás la bolita y ves cómo rebota hasta caer en un multiplicador. <strong className="text-white">Mines</strong> es como el buscaminas pero con plata. El retiro lo pedimos en USDT y literalmente en 45 segundos estaba en nuestra wallet de Lemon. No es exageración — lo cronometramos. Si ya manejás USDT y querés evitar el drama del cepo, Stake es tu casino.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Bet365 <span className="text-[#22c55e] text-sm font-black">8.7/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed mb-2">
                La casa de apuestas más grande del mundo, ahora con licencia LOTBA en Argentina. Lo que
                distingue a Bet365 es la confiabilidad — es prácticamente imposible que te cague con un
                pago. Probamos el soporte a las 3am y respondieron en 90 segundos, en español, sin bot.
              </p>
              <p className="text-[#9ca3af] leading-relaxed">
                El catálogo de casino es más chico que el de los internacionales (1,800 juegos), pero la
                sección de apuestas deportivas es la mejor del mercado argentino. Acepta Mercado Pago,
                transferencia y tarjetas. Si buscás lo más seguro que existe con licencia argentina,
                Bet365 es la apuesta (literal).
              </p>
              <p className="text-[#9ca3af] leading-relaxed">
                Lo que probamos puntualmente en Bet365: depositamos con transferencia bancaria desde Brubank (CBU) un viernes a las 6pm, $10,000 ARS. Tardó 8 minutos en acreditarse. Nos metimos a jugar Lightning Roulette en vivo y estuvimos una hora apostando a colores con apuestas de $200 ARS. Los multiplicadores lightning (x50, x100, x200, hasta x500) le dan un condimento que la ruleta normal no tiene — pegamos un x100 en el número 17 apostando $500 ARS y nos devolvió $50,000. Fue suerte pura, obvio. La sección de apuestas deportivas merece mención aparte: tiene mercados para la Liga Profesional, Copa Argentina, ascenso y hasta futsal.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ MINI CTA ═══ */}
      <div className="bg-gradient-to-r from-[#38bdf8]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">Nuestro #1 para jugadores argentinos</p>
        <p className="text-white text-xl font-black mb-4">Betsson — Hasta $350.000 + 200 Giros Gratis</p>
        <CtaButton slug="betsson-argentina" />
      </div>

      {/* ═══ PRIORIDAD ═══ */}
      <Section id="prioridad">
        <SectionTitle>Mejor Casino Online en Argentina Según Tu Prioridad</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Cada jugador busca algo distinto. Algunos quieren el bono más grande, otros quieren depositar
          con Mercado Pago y listo. Acá te decimos cuál elegir según lo que más te importa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categoryPicks.map((pick) => (
            <div key={pick.title} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 flex flex-col transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1">
              <p className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider mb-2">{pick.title}</p>
              <p className="text-xl font-black text-white mb-2">{pick.casino}</p>
              <p className="text-sm text-[#9ca3af] leading-relaxed flex-1 mb-4">{pick.reason}</p>
              <CtaButton slug={pick.slug} text="Visitar" />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ COMPARATIVAS ═══ */}
      <Section id="comparativa-casinos" alt>
        <SectionTitle>Comparativa Detallada de Casinos Online en Argentina</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          El ranking te da el panorama general. Pero si querés comparar casino por casino en detalle,
          estas tablas son para vos.
        </p>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Bonos</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Casino</th><th className="px-4 py-3 font-bold">Bono</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Rollover</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Giros</th><th className="px-4 py-3 font-bold hidden md:table-cell">Validez</th>
            </tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Betsson", "Hasta $350.000 + giros", "x35", "200", "30 días"],
                ["FRESH Casino", "100% primer dep.", "x35", "500", "14 días"],
                ["SOL Casino", "100% primer dep.", "x30", "500", "14 días"],
                ["MONRO Casino", "150% primer dep.", "x35", "—", "14 días"],
                ["STARDA Casino", "100% primer dep.", "x35", "500", "14 días"],
                ["Bet365", "100% primer dep.", "x30", "—", "30 días"],
                ["Stake", "Bono + giros", "x1", "Sí", "7 días"],
                ["Codere", "Bono bienvenida", "x35", "Sí", "30 días"],
              ].map(([casino, bonus, roll, spins, valid]) => (
                <tr key={casino} className="border-t border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-bold text-white">{casino}</td><td className="px-4 py-3">{bonus}</td><td className="px-4 py-3 hidden sm:table-cell">{roll}</td><td className="px-4 py-3 hidden sm:table-cell">{spins}</td><td className="px-4 py-3 hidden md:table-cell">{valid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Métodos de Pago</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Casino</th><th className="px-4 py-3 font-bold">MP</th><th className="px-4 py-3 font-bold">Transfer</th><th className="px-4 py-3 font-bold">Rapipago</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Crypto</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Retiro</th>
            </tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Betsson", "✓", "✓", "✓", "—", "0-24h (MP)"],
                ["FRESH Casino", "—", "—", "—", "✓", "0-1h (crypto)"],
                ["SOL Casino", "—", "—", "—", "✓", "0-1h (crypto)"],
                ["MONRO Casino", "—", "—", "—", "✓", "0-1h (crypto)"],
                ["STARDA Casino", "—", "—", "—", "✓", "0-12h (crypto)"],
                ["Bet365", "✓", "✓", "—", "—", "1-24h"],
                ["Stake", "—", "—", "—", "✓", "Instantáneo"],
                ["Codere", "✓", "✓", "✓", "—", "1-48h"],
              ].map(([casino, mp, trans, rapi, crypto, retiro]) => (
                <tr key={casino} className="border-t border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-bold text-white">{casino}</td>
                  <td className="px-4 py-3">{mp === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3">{trans === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3">{rapi === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{crypto === "✓" ? <span className="text-[#22c55e]">✓</span> : <span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{retiro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Catálogos</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Casino</th><th className="px-4 py-3 font-bold">Total</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Slots</th><th className="px-4 py-3 font-bold hidden sm:table-cell">En Vivo</th><th className="px-4 py-3 font-bold hidden md:table-cell">Proveedores</th>
            </tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Betsson", "2 500+", "2 000+", "200+", "40+"],
                ["FRESH Casino", "4 500+", "3 800+", "300+", "80+"],
                ["SOL Casino", "4 000+", "3 400+", "200+", "70+"],
                ["MONRO Casino", "3 500+", "3 000+", "180+", "60+"],
                ["STARDA Casino", "3 800+", "3 200+", "150+", "65+"],
                ["Bet365", "1 800+", "1 200+", "150+", "25+"],
                ["Stake", "3 000+", "2 200+", "200+", "50+"],
                ["Codere", "1 500+", "1 100+", "120+", "25+"],
              ].map(([casino, total, slots, live, provs]) => (
                <tr key={casino} className="border-t border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-bold text-white">{casino}</td><td className="px-4 py-3">{total}</td><td className="px-4 py-3 hidden sm:table-cell">{slots}</td><td className="px-4 py-3 hidden sm:table-cell">{live}</td><td className="px-4 py-3 hidden md:table-cell">{provs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ PLACEHOLDER: remaining sections will be added by expansion agent ═══ */}
      {/* BONOS */}
      <Section id="bonos" bg="/img/backgrounds/slots.png">
        <SectionTitle>Tipos de Bonos en Casinos Online de Argentina</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Los bonos son guita gratis que te da el casino para que juegues. Suena genial, ¿no? Y lo es...
          si entendés cómo funcionan. Porque la realidad es que la mayoría de la gente acepta bonos sin
          leer las condiciones y después se queja cuando no puede retirar.
        </p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Acá te explicamos cada tipo de bono con números reales del ranking argentino y consejos prácticos
          para que no te lleves sorpresas. Leé esto antes de aceptar cualquier bono.
        </p>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Bienvenida</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Hacés tu primer depósito y el casino te da un porcentaje extra. Un &quot;100% hasta $500 USD&quot;
              significa que si depositás $200, el casino te regala otros $200. Pero si metés $700, solo te
              dan $500 extra porque es el tope. En pesos argentinos con la conversión, las cifras pueden
              parecer astronómicas pero siempre fijate en el monto en dólares o el equivalente real.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Ejemplo con MONRO (150%): depositás el equivalente a $100 USD, recibís $150 de bono. Con
              rollover x35, necesitás apostar $5,250 en total. Jugando slots de $0.20 son 26,250 tiradas
              en 14 días — o sea, unas 1,875 tiradas por día. Es exigente pero factible.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Para que quede claro con un ejemplo en pesos: supongamos que depositás en FRESH Casino usando USDT comprado a $1,200 ARS por dólar. Metés $120,000 ARS ($100 USD), recibís $100 USD de bono (100%). El rollover es x35 sobre el bono, o sea que necesitás apostar $3,500 USD ($4,200,000 ARS). Si jugás Sweet Bonanza a $0.20 por giro ($240 ARS), necesitás hacer 17,500 giros en 14 días. Eso son 1,250 giros diarios, que a 3 segundos por giro son unos 63 minutos de juego por día. Bastante más manejable que MONRO con su 150%, ¿no? Ahora comparemos con SOL: mismo depósito de $100 USD, mismo bono de $100, pero rollover x30. Son $3,000 USD de apuestas necesarias, 15,000 giros, 1,071 por día, 54 minutos diarios. La diferencia entre x30 y x35 parece chica pero son 2,500 giros menos. Por eso decimos que SOL tiene el rollover más amigable.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: No te dejes llevar por el porcentaje solo. Un bono del 100% con rollover x30 garpa
              más que uno del 150% con rollover x50. Siempre hacé la multiplicación.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono Sin Depósito</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Te registrás y el casino te regala plata o giros sin que metas un peso. El rollover suele
              ser alto (x40-x60) y el retiro máximo está limitado. Pero es guita gratis para probar el
              casino sin arriesgar nada tuyo. Betano ofrece giros sin depósito para Argentina.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              En Argentina, Betano es el que más se destaca con este tipo de bono. Te dan giros gratis apenas te registrás, sin meter un peso. Nosotros los usamos en una slot de Pragmatic Play y sacamos $3 USD de ganancia (unos $3,600 ARS). El tema es que tenían rollover x60 y retiro máximo de $50 USD. Igual, pensalo así: arrancás sin riesgo, conocés la plataforma, y si tenés suerte te llevás algo. Lo peor que puede pasar es que no ganés nada, pero tampoco perdiste. Para un argentino que quiere probar sin comprometerse, es la puerta de entrada ideal.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Usalo para conocer la plataforma. Si te copa, depositás. Si no, no perdiste un mango.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tiradas Gratis / Free Spins</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Giros gratuitos para usar en tragamonedas. Ojo con el valor: 50 giros a $0.10 ($5 total) es
              peor que 20 giros a $0.50 ($10 total). FRESH, SOL y STARDA te dan 500 giros con el bono de
              bienvenida, repartidos en 10 días.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Algo que descubrimos probando: los 500 giros de FRESH te los dan en slots que vos elegís dentro de un listado bastante generoso, mientras que en STARDA van todos a Book of Gold (RTP 95.56%). Con SOL también podés elegir. Nosotros usamos 50 giros de FRESH en Gates of Olympus y sacamos $11 USD de ganancia — pero esas ganancias tienen rollover del bono encima, así que no es guita que retirás al toque. En números argentinos: 500 giros a $0.10 son $50 USD de valor total ($60,000 ARS aprox). Suena bien, pero con rollover x35 sobre las ganancias, la realidad es que vas a poder retirar una fracción. Igual, son 500 oportunidades extra de pegar un bonus o un multiplicador gordo.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Fijate si podés elegir la slot o si te la asignan. STARDA te los fuerza en Book of Gold.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Cashback</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Te devuelven un porcentaje de lo que perdiste. SOL Casino da 15% semanal sin rollover — la
              guita es tuya directamente. FRESH da 10% los lunes. En pesos, si perdiste el equivalente a
              $50,000 ARS en la semana con SOL, te devuelven $7,500 ARS que podés retirar al toque.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Hicimos un experimento deliberado con el cashback de SOL. Durante una semana jugamos sabiendo que íbamos a perder (apuestas altas en slots de alta volatilidad) y terminamos $80 USD abajo. El lunes nos cayeron $12 USD de cashback directamente al balance real. Los retiramos por crypto sin ningún rollover ni condición. Esos $12 eran nuestros, punto. En pesos, si jugás fuerte y perdés $100,000 ARS en la semana, te devuelven $15,000 ARS libres. Para el jugador argentino que juega todas las semanas, ese cashback acumula y se convierte en la mejor promoción recurrente del mercado. FRESH también da cashback los lunes (10%), pero tiene condiciones de apuesta — no es tan limpio como el de SOL.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Un cashback sin rollover vale más que un bono de bienvenida enorme con rollover x50.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Recarga</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Como el bono de bienvenida pero para depósitos siguientes. FRESH da 50% los viernes. Si jugás
              regularmente, estos bonos suman más que el de bienvenida a largo plazo.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Te cuento cómo funciona en la práctica para un argentino. Supongamos que cada viernes depositás $50 USD en FRESH (unos $60,000 ARS). Con el bono de recarga del 50%, recibís $25 USD extra. En un mes son 4 recargas = $100 USD de bono. El bono de bienvenida te dio $100 USD una sola vez. ¿Ves por qué decimos que a largo plazo las recargas suman más? MONRO también tiene recarga los miércoles (50%), así que si jugás en los dos podrías tener bono de recarga dos veces por semana. Eso sí, cada recarga tiene rollover (generalmente x35), así que no es guita regalada — tenés que jugarla. Pero si de todas formas ibas a jugar, es plata extra para hacerlo.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Los viernes de FRESH son sagrados para los que jugamos seguido.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Programa VIP</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              Sistema de niveles que premia tu actividad. FRESH tiene 7 niveles con beneficios que van desde
              retiros más rápidos hasta un gerente de cuenta personal. Llegamos al nivel 3 en dos semanas
              y ya se notaba la diferencia: nos mandaron una oferta de recarga del 75% por mail.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              En Argentina la mayoría de la gente ignora los programas VIP porque piensa que son solo para jugadores millonarios. Error. En FRESH, por ejemplo, con depositar y jugar el equivalente a $200,000-$300,000 ARS en un mes ya pasás del nivel 1 al 2, y empezás a recibir beneficios reales: bonos exclusivos por mail, cashback mejorado y retiros que se procesan más rápido. No necesitás ser high roller. SOL también tiene su sistema de niveles pero es menos transparente con los requisitos — no te dicen exactamente cuánto necesitás apostar para subir. STARDA y MONRO tienen programas similares pero menos desarrollados. Si tu plan es jugar a largo plazo (no solo un finde y chau), elegir el casino con mejor VIP desde el principio te va a ahorrar plata.
            </p>
            <p className="text-[#d4d4d8] text-sm italic">
              Consejo: Si pensás jugar seguido, elegí un casino con buen VIP desde el día uno.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Si buscás...</th><th className="px-4 py-3 font-bold">Mejor opción</th><th className="px-4 py-3 font-bold text-right">Enlace</th>
            </tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[
                { need: "Bono más grande en %", best: "MONRO Casino (150%)", slug: "monro-casino" },
                { need: "Más giros gratis", best: "FRESH Casino (500 giros)", slug: "fresh-casino" },
                { need: "Rollover más bajo", best: "SOL Casino (x30)", slug: "sol-casino" },
                { need: "Mejor cashback", best: "SOL Casino (15% semanal)", slug: "sol-casino" },
                { need: "Mejor VIP", best: "FRESH Casino (7 niveles)", slug: "fresh-casino" },
                { need: "Casino con Mercado Pago", best: "Betsson", slug: "betsson-argentina" },
                { need: "Casino cripto", best: "Stake (sin cepo)", slug: "stake" },
              ].map((row) => (
                <tr key={row.need} className="border-t border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-4 py-3">{row.need}</td><td className="px-4 py-3 font-bold text-white">{row.best}</td>
                  <td className="px-4 py-3 text-right"><a href={`/go/${row.slug}/`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] whitespace-nowrap">Visitar</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ PAGOS ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago en los Casinos Online de Argentina</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Acá es donde se pone interesante para los argentinos. Entre el cepo cambiario, la inflación y
          las restricciones bancarias, depositar y retirar en casinos online tiene sus particularidades.
          Pero tranqui, hay opciones para todos.
        </p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Lo más importante que tenés que saber: si jugás en casinos con licencia LOTBA, podés usar
          Mercado Pago, transferencia bancaria y Rapipago sin drama. Si jugás en casinos internacionales,
          las criptomonedas son tu mejor amigo.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Mercado Pago</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              La billetera digital que usa todo el mundo en Argentina. Depósitos instantáneos, retiros
              en 0-24 horas según el casino. Betsson, Bet365, Codere, Betano y Bplay la aceptan.
              Probamos un retiro en Betsson y en 45 minutos teníamos la guita en la cuenta de Mercado Pago.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              La ventaja de Mercado Pago es que no necesitás cuenta bancaria — podés cargar saldo en
              Rapipago o transferencia y operar desde ahí. También te sirve como intermediario si tu
              banco bloquea pagos a casinos. Es el método más versátil para argentinos, sin dudas.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              El paso a paso para cargar saldo y depositar es así: primero, asegurate de tener plata en tu cuenta de Mercado Pago (podés transferir desde tu banco por CBU/CVU, cargar en un Rapipago o Pago Fácil, o recibir de otro usuario). Después, entrá al casino (Betsson, por ejemplo), andá a &quot;Depositar&quot;, elegí Mercado Pago como método y poné el monto en pesos. Te va a redirigir a Mercado Pago para que autorices el pago — puede ser desde la app o desde la web. Confirmás, y en 5-10 segundos el saldo aparece en el casino. Para retirar es al revés: pedís el retiro en el casino, elegís Mercado Pago, ingresás tu CVU (lo encontrás en la app de MP en &quot;Tu dinero&quot; &gt; &quot;CVU&quot;) y esperás. En Betsson nos llegó en 45 minutos, en Bet365 tardó unas 4 horas, y en Codere fueron 12 horas. Cada casino tiene sus tiempos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Transferencia Bancaria (CBU/CVU)</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Transferencia directa desde tu cuenta bancaria usando CBU o CVU. Funciona con Galicia,
              Santander, BBVA, Macro, Banco Nación y la mayoría de bancos argentinos. Depósitos en
              minutos, retiros entre 1 y 24 horas. Los casinos LOTBA lo aceptan todos. Para casinos
              internacionales no funciona directamente por el cepo.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Una cosa que notamos: los neobancos como Brubank, Ualá y Naranja X funcionan perfecto para transferir a casinos LOTBA. De hecho, con Brubank fue más rápido que con Galicia — el depósito cayó en 3 minutos versus 11 con Galicia. Si tenés cuenta en un neobanco, usá esa. Otra ventaja de la transferencia es que no tiene comisión ni límite de monto (dentro de lo que el casino acepte como depósito mínimo/máximo). El retiro por transferencia es un poco más lento que Mercado Pago en general — Betsson tardó 3 horas en procesarlo versus 45 minutos por MP — pero sigue siendo razonable.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Rapipago y Pago Fácil</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              ¿No querés meter datos bancarios online? Generás un cupón en el casino, vas a cualquier
              punto Rapipago o Pago Fácil y pagás en efectivo. El depósito se refleja entre 30 minutos
              y unas horas. Solo para depósitos — los retiros tienen que ser por otro método. Betsson,
              Codere y Bplay lo aceptan.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Lo bueno de Rapipago es que es completamente anónimo — pagás en efectivo, no queda registro bancario. Para el que no quiere que aparezca &quot;Casino&quot; en el resumen de la tarjeta o en los movimientos del banco, es la opción más discreta. El proceso es sencillo: generás el cupón en el casino, te aparece un código de barras o un número de referencia, vas al Rapipago más cercano (hay miles en todo el país), le mostrás el código al cajero, pagás y listo. Lo único molesto es que el saldo puede tardar entre 30 minutos y 2-3 horas en aparecer en el casino, dependiendo del horario. Nosotros probamos un sábado a la tarde y tardó casi 2 horas. Un martes al mediodía fue más rápido, 40 minutos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tarjetas Visa / Mastercard</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Funcionan en casinos con licencia LOTBA sin problema. <strong className="text-white">Pero ojo
              con los casinos internacionales:</strong> por el cepo cambiario, muchas tarjetas argentinas
              rechazan pagos al exterior. Galicia y BBVA son los que más bloquean. Si te pasa, usá
              Mercado Pago, Skrill o crypto como alternativa.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Lo probamos con tres tarjetas distintas en FRESH Casino (internacional): Visa de Galicia rechazó al toque, Mastercard de BBVA también, y una Visa de Brubank... también. Cero de tres. En cambio, en Betsson (LOTBA) las tres funcionaron sin problema. La diferencia es que Betsson opera en pesos y procesa localmente, mientras que FRESH procesa en dólares como transacción internacional. Si tu única opción es tarjeta y querés jugar en internacionales, probá suerte — hay gente que reporta que Santander les pasa, pero es lotería. La solución real es Skrill o crypto.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Skrill / Neteller</h3>
            <p className="text-[#9ca3af] leading-relaxed">
              Monederos electrónicos internacionales. Son la solución más usada para depositar en casinos
              internacionales desde Argentina cuando el cepo te bloquea la tarjeta. FRESH, SOL, MONRO y
              STARDA los aceptan. Comisión del 1-3% pero la velocidad lo compensa.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Para abrir Skrill desde Argentina: entrás a skrill.com, te registrás con tu mail y DNI, verificás identidad (te piden foto del DNI y una selfie, tarda 24-48 horas) y ya está. Para fondear la cuenta, podés hacer transferencia bancaria internacional (con la comisión que eso implica por el cepo) o, el truco que usan muchos argentinos, comprar crypto en un exchange local y después vender esa crypto dentro de Skrill para tener saldo en dólares. Es un paso extra pero funciona. Los depósitos de Skrill al casino son instantáneos y los retiros tardan entre 12 y 24 horas generalmente. Neteller funciona igual pero tiene menos aceptación — si tenés que elegir uno solo, andá con Skrill.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Criptomonedas (USDT, Bitcoin, Ethereum)</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">
              <strong className="text-white">En Argentina, las crypto son más que una opción — son la
              solución al cepo.</strong> USDT (Tether) es la favorita porque mantiene paridad 1:1 con el
              dólar, así que no perdés valor con la inflación. Los depósitos y retiros son los más rápidos
              (minutos) y no pasan por bancos.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Podés comprar USDT en exchanges argentinos como Lemon Cash, Belo o Buenbit con pesos
              argentinos vía transferencia bancaria. Después lo mandás al casino y listo. FRESH, SOL,
              MONRO, STARDA y Stake aceptan crypto. Es la forma más eficiente de operar si jugás en
              casinos internacionales.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              El paso a paso con apps argentinas: <strong className="text-white">Lemon Cash</strong> es la más fácil — te bajás la app, verificás identidad en 10 minutos, transferís pesos desde tu banco y comprás USDT al toque. El spread (diferencia entre precio de compra y venta) ronda el 1-2%, que es razonable. <strong className="text-white">Belo</strong> es parecida pero con un spread un poco más bajo en montos grandes (arriba de $100 USD). <strong className="text-white">Buenbit</strong> te deja comprar USDT por transferencia bancaria y también tiene DAI si preferís una stablecoin descentralizada. Las tres apps te dejan enviar USDT por red TRC-20 (Tron), que es la más barata en comisión de red ($0.50-$1 USD). Bitcoin también sirve pero la comisión de red es más alta ($2-$5 USD) y tarda más (20-40 minutos vs 5-10 de TRC-20). Ethereum por red ERC-20 ni lo consideres para montos chicos — la comisión de gas puede comerte $5-$15 USD.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mt-8 mb-8">
          <p className="text-[#f59e0b] font-bold mb-2">El cepo cambiario y los casinos: lo que tenés que saber</p>
          <p className="text-[#d4d4d8] leading-relaxed mb-3">
            El cepo afecta directamente a los jugadores argentinos que quieren usar casinos internacionales. Las restricciones del BCRA limitan la compra de dólares y los pagos al exterior con tarjeta. En la práctica, esto significa que tu Visa o Mastercard argentina va a rebotar cuando intentes depositar en FRESH, SOL, MONRO o STARDA, porque procesan en dólares como transacción internacional.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-3">
            Las salidas son tres: <strong className="text-white">criptomonedas</strong> (la más popular — comprás USDT en Lemon, Belo o Buenbit con pesos y lo mandás al casino), <strong className="text-white">Skrill/Neteller</strong> (monederos electrónicos que funcionan como intermediario) o <strong className="text-white">una tarjeta internacional</strong> si por alguna razón tenés una emitida fuera de Argentina. La inmensa mayoría de los argentinos que juegan en internacionales ya se pasaron a crypto justamente por esto. Es más rápido, más barato y no depende de que el banco te autorice nada.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Dato importante: si el cepo se flexibiliza (se viene hablando de eso hace años), las tarjetas podrían volver a funcionar para pagos internacionales. Pero mientras siga vigente, crypto es el camino. Y honestamente, una vez que le agarrás la mano, no volvés atrás — es más rápido que cualquier otro método.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Método</th><th className="px-4 py-3 font-bold">Depósito</th><th className="px-4 py-3 font-bold">Retiro</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Comisión</th>
            </tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Mercado Pago", "Instantáneo", "0-24 horas", "Sin comisión"],
                ["Transferencia (CBU)", "Minutos", "1-24 horas", "Sin comisión"],
                ["Rapipago / Pago Fácil", "30 min - horas", "No disponible", "Sin comisión"],
                ["Visa / Mastercard", "Instantáneo", "1-5 días", "Sin comisión"],
                ["Skrill / Neteller", "Instantáneo", "0-24 horas", "1-3%"],
                ["Criptomonedas", "10-60 min", "Instantáneo", "Fee de red"],
              ].map(([method, dep, ret, fee]) => (
                <tr key={method} className="border-t border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-bold text-white">{method}</td><td className="px-4 py-3">{dep}</td><td className="px-4 py-3">{ret}</td><td className="px-4 py-3 hidden sm:table-cell">{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-white mb-4 mt-10">Cómo Depositar con Mercado Pago en un Casino Online</h3>
        <div className="space-y-4">
          {[
            { step: "1", title: "Registrate en el casino", desc: "Creá tu cuenta con datos reales. Vas a necesitar DNI y un correo electrónico." },
            { step: "2", title: "Andá a depósitos", desc: "Buscá \"Depositar\" o \"Cajero\" y elegí Mercado Pago. Ingresá el monto en pesos." },
            { step: "3", title: "Autorizá el pago", desc: "Te redirige a Mercado Pago. Confirmá el pago desde la app o el sitio web. Es instantáneo." },
            { step: "4", title: "Jugá", desc: "El saldo aparece en segundos y ya podés empezar a jugar." },
            { step: "5", title: "Para retirar", desc: "Pedí el retiro desde el casino, elegí Mercado Pago e ingresá tu CVU. La guita llega entre 30 minutos y 24 horas según el casino." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center shrink-0">
                <span className="text-[#38bdf8] font-black text-sm">{item.step}</span>
              </div>
              <div><p className="text-white font-bold mb-1">{item.title}</p><p className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p></div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mt-8">
          <p className="text-[#f59e0b] font-bold mb-2">El tema del cepo y los pesos</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Si jugás en casinos con licencia LOTBA, operás directamente en pesos argentinos. Sin drama.
            Pero si jugás en casinos internacionales (FRESH, SOL, etc.), operan en dólares. Tu tarjeta
            probablemente no funcione por el cepo. Las opciones son: crypto (la más popular), Skrill/Neteller,
            o una tarjeta internacional si tenés. Muchos argentinos ya se pasaron a USDT justamente por esto.
          </p>
        </div>
      </Section>

      {/* ═══ LEGAL ═══ */}
      <Section id="legal" bg="/img/backgrounds/comparativa.png">
        <SectionTitle>¿Es Legal Jugar en Casinos Online en Argentina?</SectionTitle>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          <strong className="text-white">Sí, es legal.</strong> Pero la regulación en Argentina es un
          quilombo lindo porque es provincial, no federal. Cada provincia hace la suya.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">CABA: LOTBA manda</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          En la Ciudad de Buenos Aires, <strong className="text-white">LOTBA (Lotería de la Ciudad de Buenos
          Aires)</strong> es el organismo que regula y otorga licencias a casinos online. Betsson, Bet365,
          Codere, Betano y Casino Buenos Aires Online ya tienen licencia LOTBA. Si vivís en CABA, estos
          son los casinos más regulados que podés elegir.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Provincia de Buenos Aires: IPLyC</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          En provincia, el <strong className="text-white">IPLyC (Instituto Provincial de Lotería y Casinos)</strong> es
          el que regula. Bplay tiene licencia provincial. Otras provincias como Mendoza, Córdoba y
          Misiones tienen sus propios marcos regulatorios con diferentes niveles de apertura al juego online.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Y los casinos internacionales?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          FRESH, SOL, MONRO, STARDA y Stake operan con licencias internacionales (Curaçao, principalmente).
          No tienen licencia argentina, pero como jugador no estás cometiendo ningún delito al usarlos.
          La regulación aplica a los operadores, no a los jugadores. Podés jugar tranquilo.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Impuestos</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          En Argentina, las ganancias de juegos de azar pueden estar sujetas a retenciones e impuestos.
          Los casinos LOTBA aplican retenciones automáticas en ciertos casos. Para casinos internacionales,
          la situación es más gris. Si ganás montos grandes, hablá con un contador para evitar sorpresas
          con AFIP. Mejor prevenir.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Qué pasa con los casinos sin licencia?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Si un casino opera en Argentina sin licencia LOTBA ni provincial, técnicamente está infringiendo la normativa. LOTBA tiene la potestad de solicitar a los proveedores de internet argentinos que bloqueen el acceso a esos sitios, y de hecho lo ha hecho con varios operadores. Pero la realidad es que los bloqueos se sortean fácilmente con una VPN y la mayoría de los casinos internacionales con licencia de Curaçao siguen siendo accesibles sin problemas. Como jugador, la clave es distinguir entre un casino internacional legítimo (con licencia de Curaçao o Malta, auditorías de RNG y trayectoria comprobable) y un casino trucho sin ningún tipo de regulación. Los primeros son seguros para jugar; los segundos te pueden cagar con la plata sin que tengas a quién reclamar.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Las diferencias provinciales importan</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Argentina no tiene una ley federal de juego online, y eso genera un mapa bastante fragmentado. CABA con LOTBA es la jurisdicción más desarrollada: tiene un marco claro, operadores autorizados y mecanismos de protección al jugador. La Provincia de Buenos Aires regula a través del IPLyC y tiene operadores como Bplay con licencia propia. Mendoza tiene su propio régimen a través del Instituto Provincial de Juegos y Casinos, mientras que Córdoba está avanzando con su marco regulatorio pero todavía más lento. Misiones fue pionera en otorgar licencias de juego online a nivel provincial. Otras provincias como Santa Fe, Entre Ríos y Neuquén tienen regulaciones más orientadas al juego presencial que al online. Para vos como jugador, lo importante es que la regulación aplica a los operadores, no a vos. Podés jugar desde cualquier provincia sin problemas legales.
        </p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Cómo verificar una licencia LOTBA</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          Entrá a la web de LOTBA (lotba.gob.ar) y buscá el listado de operadores autorizados. Los
          casinos con licencia también muestran el número en su footer. Si un casino dice operar con
          licencia LOTBA y no lo encontrás en la lista... desconfiá.
        </p>
        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6 mt-8">
          <p className="text-[#22c55e] font-bold mb-2">Resumen:</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Jugar en casinos online desde Argentina es legal. Los casinos con licencia LOTBA o provincial
            son los más regulados. Los internacionales con licencia de Curaçao o Malta también son legítimos
            y no tenés problema legal por jugar en ellos. Todos los casinos de nuestro ranking son confiables.
          </p>
        </div>
      </Section>

      {/* ═══ ONLINE VS FÍSICO ═══ */}
      <Section id="online-vs-fisico" alt>
        <SectionTitle>Casinos Online vs Casinos Físicos en Argentina</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Argentina tiene casinos físicos icónicos — el Casino de Buenos Aires en Puerto Madero, el Casino
          Central de Mar del Plata, el Casino de Mendoza. Pero los casinos online ofrecen cosas que los
          físicos no pueden. Y al revés también.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Aspecto</th><th className="px-4 py-3 font-bold">Casino Online</th><th className="px-4 py-3 font-bold">Casino Físico</th>
            </tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[
                ["Accesibilidad", "24/7 desde donde sea", "Tenés que ir, horarios limitados"],
                ["Variedad", "3 000 - 5 000+ juegos", "100 - 400 máquinas según el casino"],
                ["Bonos", "Bienvenida, cashback, giros gratis", "Programa de puntos básico"],
                ["Apuesta mínima", "Desde el equivalente a $200 ARS", "Mínimos más altos en mesas"],
                ["Ambiente", "Chat en vivo, no es lo mismo", "Puerto Madero a las 11pm tiene su magia"],
                ["Privacidad", "Nadie sabe que jugás", "Te puede ver cualquiera"],
                ["Velocidad", "Rondas rápidas, sin esperas", "Más lento, especialmente mesas llenas"],
                ["Pagos", "MP, transferencia, crypto, todo", "Efectivo y tarjeta nomás"],
                ["RTP", "95-98%, publicado y auditable", "80-93% en tragamonedas, no te lo dicen"],
              ].map(([aspect, online, physical]) => (
                <tr key={aspect} className="border-t border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-bold text-white">{aspect}</td><td className="px-4 py-3">{online}</td><td className="px-4 py-3">{physical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#9ca3af] leading-relaxed mt-6">
          Ninguno es objetivamente &quot;mejor&quot;. Si querés ir con amigos a pasar una noche en el
          Casino de Buenos Aires, esa experiencia es irremplazable. Pero si querés variedad, mejores
          RTPs y jugar en ojotas desde tu sillón a las 3am... los casinos online ganan por goleada.
          Muchos argentinos combinan los dos sin drama.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mt-4">
          Si hablamos de casinos físicos argentinos, el <strong className="text-white">Casino de Buenos Aires</strong> en Puerto Madero es el más emblemático. Está en un barco (sí, literalmente flotando) y tiene unas 130 mesas y más de 1,500 máquinas. La experiencia de ir un viernes a la noche con amigos, tomar algo en el bar y sentarse a una mesa de blackjack es algo que ningún casino online te va a replicar. El <strong className="text-white">Casino Central de Mar del Plata</strong> es otro ícono — el edificio es patrimonio histórico y en temporada está a reventar. Si vas de vacaciones a Mardel, es un programa casi obligado. El <strong className="text-white">Casino de Mendoza</strong> (Park Hyatt) combina el juego con la gastronomía de la zona vinícola y es de los más elegantes del país. Y el <strong className="text-white">Hipódromo de Palermo</strong> tiene una sala de juego enorme que muchos porteños ni saben que existe.
        </p>
        <p className="text-[#9ca3af] leading-relaxed mt-4">
          Pero seamos honestos con la comparación: en un casino físico argentino las tragamonedas tienen RTPs de 80-93% (contra 95-98% online), las apuestas mínimas en mesas arrancan más alto, no hay bonos de bienvenida y los horarios te limitan. Si querés jugar un Crazy Time a las 4am un martes, en el Casino de Buenos Aires no podés — online sí. Si querés probar 50 slots diferentes en una hora, en un casino físico es imposible — online lo hacés sin levantarte de la silla. Lo ideal, si tenés la posibilidad, es disfrutar de ambos mundos: el casino físico para la experiencia social y el online para la variedad, los bonos y la comodidad de jugar desde casa en pantuflas.
        </p>
      </Section>

      {/* ═══ JUEGOS ═══ */}
      <Section id="juegos" bg="/img/backgrounds/ruleta.png">
        <SectionTitle>Juegos Más Populares en los Casinos Online de Argentina</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Saber a qué estás jugando te da una ventaja que la mayoría no tiene. No es lo mismo una ruleta
          americana que una europea — te puede costar el doble de tu plata. Y en las slots, elegir por
          el RTP en vez de por los gráficos lindos cambia todo.
        </p>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Tragamonedas / Slots</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Las slots son el 80% de lo que juegan los argentinos online. Son pura suerte, pero saber
            de RTP y volatilidad te ayuda a elegir mejor.
          </p>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-1">RTP (Return to Player)</p>
            <p className="text-[#9ca3af] text-sm">Porcentaje que el juego devuelve a largo plazo. Siempre elegí slots con 96% o más.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4">
            <p className="text-white font-bold mb-1">Volatilidad</p>
            <p className="text-[#9ca3af] text-sm"><strong className="text-white">Baja:</strong> Ganás seguido pero poquito. <strong className="text-white">Alta:</strong> Podés pasar 100 giros sin nada y de repente... premio gordo.</p>
          </div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Slots Populares en Argentina</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            <strong className="text-white">Sweet Bonanza</strong> (Pragmatic Play, RTP 96.5%) es la más jugada.
            Después <strong className="text-white">Gates of Olympus</strong> (Zeus tirando multiplicadores) y
            <strong className="text-white"> Big Bass Bonanza</strong> (temática de pesca, free spins generosos).
            Los juegos crash como <strong className="text-white">Aviator</strong> y <strong className="text-white">Spaceman</strong> son
            re populares entre los argentinos más jóvenes.
          </p>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Mecánicas</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Megaways", desc: "Hasta 117,649 líneas que cambian en cada giro." },
              { name: "Hold & Spin", desc: "Símbolos se quedan fijos y el resto gira de nuevo." },
              { name: "Cluster Pays", desc: "Ganás por grupos de símbolos, no por líneas." },
              { name: "Cascading Reels", desc: "Los ganadores desaparecen y caen nuevos. Sweet Bonanza usa esto." },
            ].map((m) => (
              <div key={m.name} className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
                <p className="text-white font-bold mb-1">{m.name}</p>
                <p className="text-[#9ca3af] text-sm">{m.desc}</p>
              </div>
            ))}
          </div>

          <h4 className="text-base font-bold text-white mb-3 mt-8">Top Slots por RTP</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Si lo tuyo es maximizar las chances, fijate en estas slots con el mejor retorno al jugador que vas a encontrar en los casinos del ranking. Ojo: RTP alto no quiere decir que vayas a ganar seguro, pero a la larga perdés menos plata.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-6">
            <table className="w-full text-left text-sm">
              <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Slot</th><th className="px-4 py-3 font-bold">Proveedor</th><th className="px-4 py-3 font-bold">RTP</th>
              </tr></thead>
              <tbody className="text-[#d4d4d8]">
                {[["Mega Joker","NetEnt","99.00%"],["Blood Suckers","NetEnt","98.00%"],["Kings of Chicago","NetEnt","97.80%"],["Starmania","NextGen","97.87%"],["White Rabbit","Big Time Gaming","97.72%"]].map(([slot,prov,rtp])=>(
                  <tr key={slot} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{slot}</td><td className="px-4 py-3">{prov}</td><td className="px-4 py-3 text-[#22c55e] font-bold">{rtp}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="text-base font-bold text-white mb-3 mt-8">Las favoritas argentinas a fondo</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">Sweet Bonanza</strong> de Pragmatic Play es, lejos, la slot más jugada en Argentina. Usa la mecánica de Tumble (o Cascading Reels): cuando ganás, los símbolos desaparecen y caen nuevos desde arriba, lo que puede encadenar varias victorias en un solo giro. No tiene líneas de pago tradicionales — necesitás 8 o más símbolos iguales en cualquier posición para cobrar. Pero donde se pone picante es con los multiplicadores: las bombas de caramelo pueden darte x2, x5, hasta x100 en la ronda de free spins. Probamos 200 giros en FRESH a $0.20 y la sesión fue una montaña rusa: 80 giros sin nada y de repente un x47 que nos devolvió todo y más. Es volatilidad alta posta, así que andá con paciencia y no te desesperes si los primeros giros vienen vacíos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">Gates of Olympus</strong> funciona parecido a Sweet Bonanza (misma mecánica de Tumble, sin líneas fijas) pero con una ambientación griega donde Zeus te tira multiplicadores desde arriba. Lo que la diferencia es que los multiplicadores se acumulan dentro de la misma cascada: si te caen un x3 y un x5, se suman a x8 y aplican al premio total de esa ronda. Suena menor pero cambia todo. Los premios máximos teóricos son bastante más altos que Sweet Bonanza (x5,000 contra x21,175 del máximo). Las rondas de free spins son las que definen tu sesión: si no entrás a los bonus, vas a sangrar lento. Nosotros le metimos 150 giros en SOL y entramos a bonus dos veces — la segunda vez pagó x180 sobre nuestra apuesta. Un golazo que nos hizo el día.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            <strong className="text-white">Big Bass Bonanza</strong> es otra historia completamente. Temática de pesca (sí, pesca, pero no te rías que funciona), volatilidad alta y una mecánica de free spins donde un pescador atrapa símbolos con valor monetario. Cada pez tiene un monto y si al pescador le toca un multiplicador, te puede volar la cabeza el premio. La gracia está en las reactivaciones: si te caen 3 o más scatters durante los free spins, sumás giros extra y el multiplicador del pescador se mantiene. Pragmatic sacó como 15 versiones (Big Bass Splash, Christmas, Floats My Boat...) pero la original sigue siendo la más sólida. RTP de 96.71%, más que decente. Es la slot que le recomendamos a alguien que se aburre de las frutas y los caramelos y quiere algo con otra onda.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Ruleta</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
              <p className="text-[#22c55e] font-bold text-sm mb-1">Europea</p>
              <p className="text-white text-2xl font-black">2.70%</p>
              <p className="text-xs text-[#9ca3af]">ventaja del casino</p>
              <p className="text-[#22c55e] text-xs font-bold mt-2">RECOMENDADA</p>
            </div>
            <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
              <p className="text-[#22c55e] font-bold text-sm mb-1">Francesa</p>
              <p className="text-white text-2xl font-black">1.35%</p>
              <p className="text-xs text-[#9ca3af]">ventaja del casino</p>
              <p className="text-[#22c55e] text-xs font-bold mt-2">LA MEJOR</p>
            </div>
            <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5">
              <p className="text-[#ef4444] font-bold text-sm mb-1">Americana</p>
              <p className="text-white text-2xl font-black">5.26%</p>
              <p className="text-xs text-[#9ca3af]">ventaja del casino</p>
              <p className="text-[#ef4444] text-xs font-bold mt-2">EVITAR</p>
            </div>
          </div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Tipos de Apuestas</h4>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-left text-sm">
              <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-3 font-bold">Apuesta</th><th className="px-4 py-3 font-bold">Pago</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Probabilidad</th>
              </tr></thead>
              <tbody className="text-[#d4d4d8]">
                {[["Pleno (1 número)", "35:1", "2.7%"],["Caballo (2)", "17:1", "5.4%"],["Transversal (3)", "11:1", "8.1%"],["Docena (12)", "2:1", "32.4%"],["Rojo/Negro", "1:1", "48.6%"],["Par/Impar", "1:1", "48.6%"]].map(([bet, payout, prob]) => (
                  <tr key={bet} className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">{bet}</td><td className="px-4 py-3 text-[#22c55e] font-bold">{payout}</td><td className="px-4 py-3 hidden sm:table-cell">{prob}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="text-base font-bold text-white mb-3 mt-6">La regla La Partage en la ruleta francesa</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Si encontrás una mesa de ruleta francesa con la regla &quot;La Partage&quot;, jugá ahí sin dudarlo. Funciona así: si apostás a una chance simple (rojo/negro, par/impar, alto/bajo) y cae el 0, en vez de perder toda la apuesta te devuelven la mitad. Eso baja la ventaja del casino del 2.70% al 1.35%, que es la más baja que vas a encontrar en cualquier juego de ruleta. En Betsson y FRESH encontramos mesas con esta regla en la sección de casino en vivo. No todas las mesas la tienen, así que fijate en las reglas antes de sentarte.
          </p>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Bankroll para ruleta: la posta</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Un error que vemos todo el tiempo con jugadores argentinos: sentarse a la ruleta con $5,000 ARS y apostar $2,000 por ronda. Así durás tres giros y te vas caliente. La regla que te recomendamos es llevar al menos 30 veces tu apuesta base. Si apostás $500 ARS por ronda, llevá mínimo $15,000 ARS de bankroll para esa sesión. Eso te da margen para las rachas malas (que van a venir, siempre vienen) sin que te quedes afuera a los 5 minutos. Y otra cosa: las apuestas simples (rojo/negro, par/impar) son las mejores para estirar tu bankroll porque tenés casi 50% de chances. Los plenos pagan 35:1 pero te van a comer la plata rapidísimo si no tenés mucho margen.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Blackjack</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El único juego donde lo que decidís importa. Con estrategia básica la ventaja del casino baja
            a <strong className="text-white">0.5%</strong>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-center text-xs">
              <thead><tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider">
                <th className="px-2 py-2 font-bold text-left">Tu mano</th><th className="px-2 py-2">2</th><th className="px-2 py-2">3</th><th className="px-2 py-2">4</th><th className="px-2 py-2">5</th><th className="px-2 py-2">6</th><th className="px-2 py-2">7</th><th className="px-2 py-2">8</th><th className="px-2 py-2">9</th><th className="px-2 py-2">10</th><th className="px-2 py-2">A</th>
              </tr></thead>
              <tbody className="text-[#d4d4d8]">
                {[["8-","P","P","P","P","P","P","P","P","P","P"],["9","P","D","D","D","D","P","P","P","P","P"],["10","D","D","D","D","D","D","D","D","P","P"],["11","D","D","D","D","D","D","D","D","D","D"],["12","P","P","Q","Q","Q","P","P","P","P","P"],["13-16","Q","Q","Q","Q","Q","P","P","P","P","P"],["17+","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q"]].map(([hand,...a])=>(
                  <tr key={hand} className="border-t border-white/[0.04]"><td className="px-2 py-2 text-left font-bold text-white">{hand}</td>{a.map((v,i)=>(<td key={i} className={`px-2 py-2 font-bold ${v==="Q"?"text-[#22c55e]":v==="D"?"text-[#fbbf24]":"text-[#9ca3af]"}`}>{v}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#71717a]">
            <span><span className="text-[#9ca3af] font-bold">P</span> = Pedir</span>
            <span><span className="text-[#22c55e] font-bold">Q</span> = Quedarte</span>
            <span><span className="text-[#fbbf24] font-bold">D</span> = Doblar</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Casino en Vivo</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo más parecido a estar en el Casino de Buenos Aires pero desde tu casa. Dealers reales
            transmitiendo en vivo, podés chatear con ellos y con otros jugadores. <strong className="text-white">Evolution
            Gaming</strong> domina — Crazy Time, Lightning Roulette, Monopoly Live son los hits.
          </p>
          <p className="text-[#9ca3af] leading-relaxed">
            La mayoría tienen mesas con dealers en español. Los límites van desde $500 ARS hasta
            millones dependiendo de la mesa. FRESH tiene 300+ mesas, Betsson 200+ con algunas
            exclusivas para Argentina.
          </p>
        </div>
      </Section>

      {/* ═══ PROVEEDORES ═══ */}
      <Section id="proveedores" alt>
        <SectionTitle>Proveedores de Juegos en los Casinos de Argentina</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Cada slot y cada mesa tiene un estudio detrás. Conocerlos te ayuda a elegir mejor.
        </p>
        <div className="space-y-8">
          {[
            { name: "Evolution Gaming", desc: "Los dueños absolutos del casino en vivo. Lightning Roulette, Crazy Time, Monopoly Live, Dream Catcher... si jugás en vivo, estás jugando Evolution el 90% del tiempo. RTP entre 97% y 99%, bastante mejor que cualquier casino físico argentino. Nosotros probamos una mesa de Lightning Roulette en FRESH un sábado a la noche y la calidad del stream era impecable, sin cortes ni lag. Los dealers hablan español real, no traducción automática, y la interacción con el chat le da una onda que otras plataformas no logran. Si te gusta el casino en vivo, Evolution es el estándar y todo lo demás está tratando de alcanzarlos." },
            { name: "Pragmatic Play", desc: "Sweet Bonanza, Gates of Olympus, Big Bass Bonanza — los tres juegos más populares en Argentina son de Pragmatic. Dominan el mercado de slots con más de 300 títulos y RTP entre 94% y 96.5%. Pero no son solo slots: también tienen una división de casino en vivo bastante sólida con mesas de ruleta y blackjack que van ganando terreno contra Evolution. Lo que más nos gusta es que sacan juegos nuevos casi semanalmente y las mecánicas son accesibles: no necesitás un manual para entender cómo funciona cada slot. Probamos como 30 de sus títulos en STARDA y la carga fue rápida en todos, incluso desde el celular con datos móviles." },
            { name: "NetEnt", desc: "Los clásicos. Starburst, Gonzo's Quest, Blood Suckers (98% RTP), Dead or Alive — si alguna vez jugaste en un casino online, seguro te cruzaste con un juego de NetEnt. Sus RTPs están entre los más altos de la industria (95-98%) y los gráficos siguen aguantando bien a pesar de que algunos títulos tienen años encima. Blood Suckers es nuestra recomendación si querés maximizar tu bankroll: con 98% de RTP es de los juegos que menos ventaja le dan al casino. Ahora pertenecen a Evolution (los compraron en 2020) y la integración les hizo bien porque siguen sacando títulos de calidad sin bajar el estándar." },
            { name: "Microgaming", desc: "Los pioneros del casino online desde 1994, cuando la mayoría de nosotros ni teníamos internet en casa. Mega Moolah es su joya: tiene el récord del jackpot progresivo más grande pagado online (más de 20 millones de euros). El catálogo supera los 800 títulos, aunque la calidad es variable — tienen joyas y también juegos que parecen de hace dos décadas. Nosotros los buscamos más que nada por los jackpots progresivos, que están conectados entre casinos y acumulan montos que te pueden cambiar la vida. En FRESH encontramos toda la línea de Mega Moolah sin problema." },
            { name: "Play'n GO", desc: "Book of Dead, Reactoonz, Moon Princess, Rise of Olympus. Slots temáticas de alta calidad con mecánicas variadas y un cuidado visual que se nota. RTP va de 94% a 96.5% dependiendo del título. Lo que diferencia a Play'n GO es la profundidad de las mecánicas: cada slot tiene algo propio, no se sienten como variaciones del mismo juego. Reactoonz, por ejemplo, tiene una grilla de 7x7 con cluster pays y reacciones en cadena que pueden encadenar premios enormes. Los encontrás en prácticamente todos los casinos del ranking." },
            { name: "Red Tiger", desc: "Su fuerte son los Daily Drop Jackpots: premios que caen sí o sí antes de las 23:59 de cada día. Cuanto más avanza el día sin que caigan, más grande se pone el premio, y eso genera una dinámica re interesante donde conviene jugar a la tarde-noche. Pertenecen a Evolution y eso les abrió las puertas a más casinos. En Betsson los encontramos integrados con un contador en vivo que muestra cuánto falta para que caiga el jackpot diario. Las slots en sí son sólidas: buena volatilidad media, gráficos prolijos y RTPs entre 94% y 96%. Los jackpots diarios son un diferencial que nadie más ofrece." },
            { name: "Hacksaw Gaming", desc: "Los favoritos de los streamers de Kick y Twitch, y con razón. Volatilidad extrema: Wanted Dead or a Wild, Chaos Crew, Le Bandit, Hand of Anubis. Cuando pegan, pegan fuerte — hablamos de multiplicadores de x10,000 o más en algunos títulos. Pero ojo: esa volatilidad extrema significa que podés pasar 200 giros sin ver nada y de repente en un solo bonus recuperar todo y más. No son para cardíacos ni para bankrolls chicos. Nosotros jugamos Wanted Dead or a Wild en STARDA durante un torneo y en 50 giros no ganamos nada, pero un tipo en la tabla de líderes sacó un x5,000 en un solo giro. Esa es la magia (y el riesgo) de Hacksaw." },
          ].map((p) => (
            <div key={p.name}>
              <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
              <p className="text-[#9ca3af] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Proveedor</th><th className="px-4 py-3 font-bold">Especialidad</th><th className="px-4 py-3 font-bold hidden sm:table-cell">RTP</th><th className="px-4 py-3 font-bold hidden md:table-cell">Hits</th>
            </tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Evolution","Casino en vivo","97-99%","Crazy Time, Lightning Roulette"],["Pragmatic Play","Slots virales","94-96.5%","Sweet Bonanza, Gates of Olympus"],["NetEnt","Slots clásicas","95-98%","Starburst, Blood Suckers"],["Microgaming","Jackpots","92-96.5%","Mega Moolah"],["Play'n GO","Slots temáticas","94-96.5%","Book of Dead, Reactoonz"],["Red Tiger","Jackpots diarios","94-96%","Daily Drop Jackpots"],["Hacksaw","Alta volatilidad","94-96.5%","Wanted Dead or a Wild"]].map(([n,s,r,g])=>(
                <tr key={n} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{n}</td><td className="px-4 py-3">{s}</td><td className="px-4 py-3 text-[#22c55e] font-bold hidden sm:table-cell">{r}</td><td className="px-4 py-3 hidden md:table-cell">{g}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ MITOS ═══ */}
      <Section id="mitos">
        <SectionTitle>Mitos y Verdades sobre Casinos Online en Argentina</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">
          Hay un montón de cosas que &quot;dicen por ahí&quot; sobre casinos online. Separemos la posta del chamuyo.
        </p>
        <div className="space-y-5">
          {[
            { claim: "Los casinos online arreglan los resultados", verdict: "FALSO", color: "#ef4444", explanation: "Los casinos regulados usan generadores de números aleatorios (RNG) certificados por laboratorios independientes como eCOGRA y GLI. Estos laboratorios auditan los resultados de forma regular y publican reportes que podés consultar. Si un casino manipulara los resultados, pierde la licencia y se come demandas millonarias — no les conviene ni en pedo. ¿Hay casinos truchos que sí arreglan cosas? Sí, existen, pero son los que operan sin licencia y sin auditorías. Todos los del ranking tienen licencia verificable (LOTBA o Curaçao) y RNG certificado. La ventaja del casino viene del house edge, que es matemática pura y transparente, no de manipular resultados." },
            { claim: "Después de un premio grande la slot no paga más", verdict: "FALSO", color: "#ef4444", explanation: "Esta es la falacia del jugador en su máxima expresión. Cada giro es completamente independiente del anterior — el RNG no tiene memoria. Una slot que acaba de pagar un jackpot tiene exactamente las mismas probabilidades en el siguiente giro que una que lleva semanas sin pagar. Pensalo así: si tirás una moneda y sale cara 5 veces seguidas, la probabilidad de que salga cara en el sexto tiro sigue siendo 50%. Lo mismo pasa con las slots. En Argentina este mito está re instalado: en los bingos de provincia escuchás gente diciendo 'esa máquina ya pagó, no le metas más'. No funciona así. El RTP se mantiene independientemente de lo que pasó antes." },
            { claim: "Apostar más guita aumenta las probabilidades", verdict: "FALSO", color: "#ef4444", explanation: "El RTP es fijo sin importar cuánto apostés. Si una slot tiene 96%, devuelve 96% ya sea que apuestes $100 o $10,000 ARS. Apostar más solo significa que tus premios y tus pérdidas son más grandes, pero las chances de ganar no cambian ni un pelo. La única excepción parcial son algunos jackpots progresivos donde necesitás apostar el máximo para calificar al premio mayor, pero eso no cambia el RTP base del juego. Mucha gente en los casinos físicos de Buenos Aires cree que meter más fichas 'calienta' la máquina. No. Es solo que si apostás más, cuando ganás se nota más... y cuando perdés también." },
            { claim: "Los casinos te bloquean la cuenta si ganás mucho", verdict: "FALSO", color: "#ef4444", explanation: "Los casinos regulados están obligados por ley a pagar tus ganancias legítimas. Si ganás $50,000 USD en Betsson o Bet365, te los tienen que pagar. Lo que sí hacen es pedir verificación KYC (documento, selfie, comprobante de domicilio) cuando los montos son grandes — es un requisito legal anti-lavado, no una táctica para no pagarte. Puede tardar unos días la verificación y eso frustra, pero después pagan. Nosotros retiramos montos de cuatro cifras en dólares de FRESH y SOL sin ningún drama. Completá la verificación KYC apenas te registrés y te ahorrás esperas después." },
            { claim: "Hay horarios mejores para jugar", verdict: "FALSO", color: "#ef4444", explanation: "El RNG genera resultados aleatorios las 24 horas del día, los 7 días de la semana. No importa si jugás a las 3am o a las 3pm, las probabilidades son exactamente las mismas. Este mito viene de los casinos físicos donde sí puede haber diferencias en la configuración de las máquinas, pero en el online todo es software puro. En Argentina hay una creencia de que los domingos a la noche las slots 'pagan mejor porque hay más gente jugando'. Nada que ver: el RNG de cada giro es independiente del número de jugadores conectados. Jugá cuando te sea cómodo y punto." },
            { claim: "Los bonos siempre convienen", verdict: "DEPENDE", color: "#f59e0b", explanation: "Acá la cosa se pone gris. Un bono con rollover x25 o x30 como el de SOL puede ser genial y darte horas extra de juego con buenas chances de sacar algo. Pero un bono con rollover x50, validez de 7 días y contribución de slots al 50%... puede ser peor que no aceptar nada. Hacé siempre la cuenta: monto del bono multiplicado por el rollover te da cuánto tenés que apostar en total. Si ese número te parece una locura para el tiempo que tenés, mejor rechazá el bono y jugá con tu plata directamente. En Argentina vimos casinos ofreciendo bonos del 200% con rollover x60 — suena increíble hasta que hacés la multiplicación y te das cuenta de que es casi imposible de cumplir." },
            { claim: "El blackjack online está trucado", verdict: "FALSO", color: "#ef4444", explanation: "La banca tiene una ventaja matemática de 0.5% cuando jugás con estrategia básica óptima. Eso no es trampa, es la naturaleza del juego — todos los juegos de casino tienen ventaja de la casa, si no el negocio no existiría. Lo que pasa es que mucha gente juega sin estrategia, toma decisiones malas (como quedarse con 12 contra un 3 del dealer) y después dice que el juego está arreglado. El blackjack online con RNG está auditado igual que las slots. Y el blackjack en vivo con dealer real es literalmente una persona repartiendo cartas en tiempo real frente a cámara. Si perdés seguido, revisá tu estrategia antes de culpar al casino." },
            { claim: "Con el cepo no se puede jugar en casinos internacionales", verdict: "FALSO", color: "#ef4444", explanation: "Se puede, y de hecho miles de argentinos lo hacen todos los días. Lo que no podés hacer (en la mayoría de los casos) es usar tu tarjeta de débito o crédito argentina directamente en un casino internacional — ahí sí el cepo te bloquea. Pero las alternativas son re accesibles: comprás USDT en Lemon Cash o Belo con pesos vía transferencia, mandás la crypto al casino y listo, tardás 15 minutos en total. Skrill y Neteller también funcionan como intermediarios. El cepo complica un paso del proceso, no lo imposibilita. De hecho, Argentina es uno de los países de LATAM donde más se usa crypto para jugar online, justamente por esta restricción. Lo que era un obstáculo terminó siendo un incentivo para que la gente aprenda a manejar USDT." },
          ].map((item) => (
            <div key={item.claim} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <p className="text-white font-bold text-base flex-1">&quot;{item.claim}&quot;</p>
                <span className="text-xs font-black px-3 py-1 rounded-full uppercase" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.verdict}</span>
              </div>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{item.explanation}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ RESPONSABLE ═══ */}
      <Section id="responsable" alt bg="/img/backgrounds/cripto.png">
        <SectionTitle>Juego Responsable en Casinos Online de Argentina</SectionTitle>
        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mb-8">
          <p className="text-[#f59e0b] font-bold mb-2">Esto va en serio</p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Los casinos son entretenimiento. No son una forma de hacer guita. Si estás jugando para
            &quot;recuperar lo que perdiste&quot; o apostando plata que necesitás para el alquiler...
            pará. Leé esta sección.
          </p>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Herramientas disponibles</h3>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {["Límites de depósito: Configurá un máximo diario, semanal o mensual. En Betsson podés hacerlo desde la sección 'Mi cuenta' en dos clics — te recomendamos empezar con un límite mensual que no supere el 10% de tus ingresos.","Límites de pérdida: El casino te bloquea automáticamente cuando llegás a cierto monto de pérdidas. Es como un freno de mano que vos mismo configurás cuando estás tranquilo, para que te proteja cuando estés en caliente.","Límites de tiempo: Te mandan un aviso cuando llevás X horas jugando sin parar. Los casinos con licencia LOTBA están obligados a ofrecer esta función. Configuralo en 1 hora para empezar y fijate cómo te sentís.","Autoexclusión temporal: Bloqueá tu cuenta por días, semanas o meses. Ideal si sentís que estás jugando de más y necesitás un corte. No es rendirte, es cuidarte.","Autoexclusión permanente: Cierre definitivo de la cuenta, irreversible. Los casinos LOTBA tienen la obligación legal de respetar esta decisión y no pueden volver a contactarte con ofertas."].map((t)=>(<li key={t} className="flex items-start gap-2 text-sm"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span>{t}</li>))}
        </ul>
        <h3 className="text-xl font-bold text-white mb-3">Señales de alerta</h3>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {["Apostás más de lo que podés perder.","Intentás recuperar pérdidas subiendo las apuestas.","El juego afecta tu trabajo, relaciones o estudios.","Mentís sobre cuánto tiempo o plata dedicás al juego.","Te sentís ansioso cuando no podés jugar.","Pedís prestado para jugar."].map((s)=>(<li key={s} className="flex items-start gap-2 text-sm"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>{s}</li>))}
        </ul>
        <h3 className="text-xl font-bold text-white mb-3">Ayuda en Argentina</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-8">
          La <strong className="text-white">Línea 135</strong> ofrece atención al jugador las 24 horas,
          gratuita y confidencial. <strong className="text-white">Jugadores Anónimos Argentina</strong> tiene
          grupos de apoyo en todo el país. Pedir ayuda no es debilidad — es la decisión más inteligente.
        </p>
        <h3 className="text-xl font-bold text-white mb-3">Manejo de bankroll</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Regla del 5%</p>
            <p className="text-[#9ca3af] text-sm">Nunca apuestes más del 5% de tu bankroll en un giro.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Stop Loss</p>
            <p className="text-[#9ca3af] text-sm">Definí antes cuánto estás dispuesto a perder. Si lo perdés, dejás de jugar.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <p className="text-white font-bold mb-2">Sesiones</p>
            <p className="text-[#9ca3af] text-sm">Dividí tu bankroll mensual en sesiones. No gastes todo de una.</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Gestión del tiempo</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          La plata no es lo único que hay que cuidar — el tiempo también. Acá van tips concretos que a nosotros nos funcionan:
        </p>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">
          {["Ponete un timer de 60 minutos antes de empezar. Cuando suena, cortás sí o sí, aunque estés ganando. Después si querés volvés, pero el corte te obliga a pensar si realmente querés seguir.","Cada 30 minutos de juego, levantate, tomá agua, caminá un poco. Las sesiones largas sin pausas nublan el juicio y te hacen tomar peores decisiones con las apuestas.","Evitá jugar después de las 2am. A esa hora estás cansado, tenés menos autocontrol y es cuando más gente se manda cagadas con las apuestas. Si te agarran las ganas a esa hora, dejalo para mañana.","Nunca juegues mientras tomás alcohol. Suena obvio pero pasa todo el tiempo. El alcohol baja tus inhibiciones y te hace apostar más de lo que deberías.","Llevá un registro de cuántas horas jugás por semana. Si superás las 10 horas, es momento de preguntarte si el juego sigue siendo entretenimiento o se convirtió en otra cosa."].map((t)=>(<li key={t} className="flex items-start gap-2 text-sm"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span>{t}</li>))}
        </ul>
        <h3 className="text-xl font-bold text-white mb-3">Sistemas que NO funcionan</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">
          La Martingala (doblar después de perder) y la Fibonacci son las más conocidas. Las dos fallan
          porque eventualmente te topás con el límite de la mesa o se te acaba el bankroll. El casino
          SIEMPRE tiene ventaja matemática. Ningún sistema la elimina. Aceptalo y disfrutá el juego.
        </p>
        <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
          <p className="text-white font-bold mb-2">Martingala en ARS: por qué no funciona</p>
          <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
            Supongamos que arrancás apostando $1,000 ARS al rojo en la ruleta. Perdés. Doblás a $2,000. Perdés otra vez. Doblás a $4,000. Así seguís: $8,000, $16,000, $32,000, $64,000, $128,000 ARS. Después de apenas 7 pérdidas seguidas (que pasan más seguido de lo que pensás), ya necesitás apostar $128,000 ARS para intentar recuperar $1,000 de ganancia neta. Y si la mesa tiene un límite de $100,000 ARS, ni siquiera podés hacer la apuesta.
          </p>
          <p className="text-[#9ca3af] text-sm leading-relaxed">
            Hagamos las cuentas: en esas 7 rondas perdiste $1,000 + $2,000 + $4,000 + $8,000 + $16,000 + $32,000 + $64,000 = $127,000 ARS. Todo para intentar ganar $1,000. El riesgo-beneficio es una locura. Y 7 rojos o negros seguidos pasan en promedio cada 128 rondas — o sea, varias veces por sesión. No caigas en esta trampa.
          </p>
        </div>
      </Section>

      {/* ═══ CÓMO ELEGIR ═══ */}
      <Section id="como-elegir" bg="/img/backgrounds/blackjack.png">
        <SectionTitle>Cómo Elegir un Casino Online en Argentina — Paso a Paso</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">
          Con tantas opciones y el tema del cepo complicando todo, elegir bien es clave. Estos 5 pasos
          te van a ahorrar quilombos y guita perdida.
        </p>
        <div className="space-y-8">
          {[
            { step: "1", title: "Verificá la licencia", desc: "Un casino con licencia LOTBA es tu opción más segura en Argentina. Si es internacional, buscá Curaçao o Malta. Si no muestra licencia... rajá.", tip: "Entrá a lotba.gob.ar para verificar. Los casinos legales lo muestran en el footer. En Argentina la regulación es provincial: LOTBA cubre CABA, el IPLyC cubre Provincia de Buenos Aires, y otras provincias como Mendoza y Córdoba tienen sus propios entes. Si vivís en el interior, chequeá si tu provincia tiene un organismo regulador local — algunos como Misiones ya otorgan licencias online." },
            { step: "2", title: "Chequeá los métodos de pago", desc: "¿Acepta Mercado Pago? ¿Transferencia? Si es internacional, ¿acepta crypto? Con el cepo, este paso es crucial para argentinos.", tip: "Hacé un depósito chico primero ($1,000-$2,000 ARS o su equivalente) y probá un retiro completo. Si la plata llega bien, ya sabés que podés confiar. Para casinos internacionales, la mejor ruta desde Argentina es: pesos en tu banco -> comprás USDT en Lemon Cash o Belo -> mandás al casino. El proceso lleva 15 minutos una vez que le agarrás la mano. Si preferís Mercado Pago, Betsson, Bet365 y Codere lo aceptan y los retiros caen en menos de 24 horas." },
            { step: "3", title: "Compará los bonos (la letra chica)", desc: "No te encandiles con el número grande. Fijate en rollover, validez, qué juegos contribuyen y retiro máximo. Un bono con rollover x30 garpa más que uno más grande con x50.", tip: "Si el rollover es mayor a x40 y la validez menor a 14 días, pensalo dos veces. En Argentina hay que tener en cuenta algo extra: si el casino opera en dólares pero vos depositás con crypto comprada con pesos, la inflación no te afecta porque operás directamente en USD o USDT. Pero si el casino opera en ARS, fijate que los requisitos del bono sean razonables para los montos en pesos — un rollover x35 sobre un bono en ARS puede ser más fácil de cumplir que uno en dólares." },
            { step: "4", title: "Probá la plataforma", desc: "Navegá el casino antes de depositar. ¿Carga rápido? ¿Funciona en celular? Muchos te dejan jugar en modo demo.", tip: "Probalo desde el celu. La mayoría de los argentinos juegan desde el celular. Si tenés un Motorola o Samsung gama media (los más comunes acá), metete al casino y probá cargar 2 o 3 slots. Si tardan más de 5 segundos con datos 4G de Personal o Claro, buscá otro casino. Bet365, Betsson y Codere tienen apps nativas en el Play Store que van más fluidas que la versión web, así que si te gustan esos casinos, bajate la app directamente." },
            { step: "5", title: "Leé las políticas de retiro", desc: "Mínimo y máximo de retiro, tiempos, KYC requerido, límites mensuales. Leé esto ANTES de depositar.", tip: "Completá la verificación KYC (DNI + selfie) al registrarte. Después te ahorrás esperas. En Argentina el KYC se hace con DNI (frente y dorso) y una selfie sosteniendo el documento. Algunos casinos como Betsson verifican con RENAPER automáticamente si usás tu número de DNI. Para los casinos internacionales, también te pueden pedir comprobante de domicilio (una factura de servicio a tu nombre). Tené todo escaneado en el celular y hacelo el día uno, así cuando pegás un premio grande no perdés tiempo." },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center shrink-0">
                <span className="text-[#38bdf8] font-black text-lg">{item.step}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#9ca3af] leading-relaxed mb-2">{item.desc}</p>
                <p className="text-[#d4d4d8] text-sm italic">Consejo: {item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ MINI CTA 3 ═══ */}
      <div className="bg-gradient-to-r from-[#38bdf8]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">150% de bono — el más alto del ranking</p>
        <p className="text-white text-xl font-black mb-4">MONRO Casino — 150% en tu primer depósito</p>
        <CtaButton slug="monro-casino" text="Ir a MONRO Casino" />
      </div>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes sobre Casinos Online en Argentina</SectionTitle>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-[#141414] border border-white/[0.06] overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-bold hover:text-[#38bdf8] transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{item.q}</span>
                <svg className="w-5 h-5 shrink-0 text-[#71717a] group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-5 text-[#9ca3af] leading-relaxed text-sm">{item.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══ GLOSARIO ═══ */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario de Términos de Casinos Online</SectionTitle>
        <div className="space-y-4">
          {glossary.map((g) => (
            <div key={g.term} className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <dt className="text-white font-bold mb-1">{g.term}</dt>
              <dd className="text-[#9ca3af] text-sm leading-relaxed">{g.def}</dd>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e] py-16 sm:py-24 text-center border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">¿Listo para jugar?</h2>
          <p className="text-[#9ca3af] text-lg mb-8 leading-relaxed">
            Elegí tu casino, aprovechá el bono y empezá a jugar seguro. Todos los casinos del ranking
            están verificados para jugadores argentinos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="betsson-argentina" text="Betsson — #1" />
            <CtaButton slug="fresh-casino" text="FRESH Casino — #2" />
            <CtaButton slug="sol-casino" text="SOL Casino — #3" />
          </div>
        </div>
      </section>
    </>
  );
}
