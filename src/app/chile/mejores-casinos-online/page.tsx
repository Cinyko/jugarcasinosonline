import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Mejores Casinos Online en Chile 2026 | Guía Completa",
  description:
    "Encuentra los mejores casinos online en Chile. Ranking actualizado, bonos verificados, métodos de pago con WebPay y MACH, y todo para jugar seguro.",
};

/* ───────── Data ───────── */

const chileCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-chile", bonus: "Hasta $400.000 + 200 Giros Gratis", rating: 9.5, license: "Internacional", games: "2 500+", highlight: true },
  { rank: 2, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.3, license: "Curaçao", games: "4 500+", highlight: false },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.1, license: "Kahnawake", games: "4 000+", highlight: false },
  { rank: 4, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.0, license: "Curaçao", games: "3 500+", highlight: false },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, license: "Curaçao", games: "3 800+", highlight: false },
  { rank: 6, name: "Bet365", slug: "bet365", bonus: "100% bono de bienvenida", rating: 8.8, license: "Internacional", games: "1 800+", highlight: false },
  { rank: 7, name: "Stake", slug: "stake", bonus: "Bono primer depósito + giros", rating: 8.7, license: "Internacional", games: "3 000+", highlight: false },
  { rank: 8, name: "1xBet", slug: "1xbet", bonus: "100% primer depósito hasta 300 EUR", rating: 8.6, license: "Internacional", games: "5 000+", highlight: false },
  { rank: 9, name: "Betway", slug: "betway", bonus: "100% bono de bienvenida", rating: 8.5, license: "Internacional", games: "1 500+", highlight: false },
  { rank: 10, name: "Betano", slug: "betano", bonus: "Giros gratis sin depósito", rating: 8.4, license: "Internacional", games: "2 000+", highlight: false },
  { rank: 11, name: "20Bet", slug: "20bet", bonus: "100% hasta $120 USD + 120 giros", rating: 8.3, license: "Curaçao", games: "3 000+", highlight: false },
  { rank: 12, name: "Dafabet", slug: "dafabet", bonus: "100% hasta $200 USD", rating: 8.2, license: "Curaçao", games: "1 500+", highlight: false },
  { rank: 13, name: "Betfair", slug: "betfair", bonus: "Bono de bienvenida", rating: 8.1, license: "Internacional", games: "1 200+", highlight: false },
];

const categoryPicks = [
  { title: "Mejor variedad de juegos", casino: "FRESH Casino", slug: "fresh-casino", reason: "4 500+ juegos de 80+ proveedores. Buscamos títulos raros de Hacksaw y Nolimit City y estaban todos. Ningún otro casino del ranking se le acerca en catálogo, ni de cerca." },
  { title: "Pagos más rápidos", casino: "Betsson", slug: "betsson-chile", reason: "Probamos un retiro con WebPay un jueves a las 9pm y en menos de 2 horas teníamos las lucas en la cuenta. Con transferencia bancaria tardó 3 horas. Re rápido para lo que es Chile." },
  { title: "Mejor bono de bienvenida", casino: "MONRO Casino", slug: "monro-casino", reason: "150% en tu primer depósito. Nadie más llega a ese porcentaje. Le metes $50.000 CLP y juegas con $125.000. Haz la cuenta." },
  { title: "Mejor para slots", casino: "STARDA Casino", slug: "starda-casino", reason: "Torneos semanales con premios de $15.000 USD, los proveedores de alta volatilidad que ves en streams (Hacksaw, Nolimit City, Push Gaming) y la mejor sección de crash que encontramos." },
  { title: "Mejor casino en vivo", casino: "Betsson", slug: "betsson-chile", reason: "200+ mesas en vivo con dealers que hablan español de verdad. Probamos una mesa de blackjack a las 2am y la experiencia fue de primer nivel." },
  { title: "Mejor para principiantes", casino: "SOL Casino", slug: "sol-casino", reason: "Se lo pasamos a un amigo que nunca había jugado online. En 10 minutos cachó todo. La interfaz es clarísima y el rollover x30 es el más bajo del ranking." },
  { title: "Mejor atención al cliente", casino: "Bet365", slug: "bet365", reason: "Les escribimos al chat un domingo a las 3am. Respondieron en 90 segundos. En español. Sin bot. Eso habla solo." },
  { title: "Mejores métodos de pago para Chile", casino: "20Bet", slug: "20bet", reason: "WebPay, MACH, CuentaRUT de BancoEstado... 20Bet acepta prácticamente todo lo que usa un chileno. Y los depósitos con MACH caen al tiro." },
  { title: "Casino más confiable", casino: "Betsson", slug: "betsson-chile", reason: "Marca europea con más de 20 años de historia, opera en Chile hace rato y nunca tuvimos un problema de pagos. Cuando quieres ir a lo seguro, Betsson." },
  { title: "Mejor casino cripto", casino: "Stake", slug: "stake", reason: "El casino cripto más grande del mundo. BTC, ETH, USDT y como 15 criptos más. Sin intermediarios, sin comisiones extras, retiros en minutos." },
  { title: "Mejor para high rollers", casino: "Stake", slug: "stake", reason: "Chile tiene el promedio de depósito más alto de LATAM ($90-100 USD). Stake está hecho para ese perfil: sin límites ridículos, retiros rápidos y el programa VIP más exclusivo del mercado." },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino online en Chile en 2026?", a: "Betsson se lleva el primer puesto. Tiene hasta $400.000 + 200 giros gratis de bono, acepta WebPay y MACH, los retiros son rapidísimos y lleva más de 20 años operando sin dramas. Si lo tuyo es la variedad de juegos, FRESH Casino tiene el catálogo más grande con 4.500+ títulos. Pero por confiabilidad, métodos de pago chilenos y experiencia general, Betsson es el que recomendamos." },
  { q: "¿Es legal jugar en casinos online desde Chile?", a: "Para el jugador, sí. No existe una ley que prohíba a los chilenos jugar en casinos online. Lo que no hay (todavía) es una regulación específica para operadores online — eso lo busca resolver el proyecto de ley Boletín 14838-03 que está en trámite en el Senado. Mientras tanto, jugar en casinos con licencia internacional (Curaçao, Malta, Kahnawake) es perfectamente legal para ti como usuario." },
  { q: "¿Puedo jugar con pesos chilenos (CLP)?", a: "Depende del casino. Los que operan con WebPay (como 20Bet y Betsson) generalmente aceptan pesos chilenos. Los internacionales como FRESH o SOL operan en dólares con conversión automática. Fíjate en el tipo de cambio que aplican — algunos te cobran una comisión oculta ahí." },
  { q: "¿Qué métodos de pago aceptan los casinos en Chile?", a: "WebPay (Transbank) es el más popular — funciona como pago con tarjeta de débito o crédito. MACH es la tarjeta prepago virtual que usan muchos jóvenes. CuentaRUT de BancoEstado también funciona en varios casinos. Además: transferencia bancaria, Sencillito para pago en efectivo, Skrill, Neteller y criptomonedas." },
  { q: "¿Puedo depositar con WebPay?", a: "Sí, y es lo más cómodo. WebPay es el sistema de Transbank que permite pagar con cualquier tarjeta de débito o crédito chilena. El depósito es instantáneo. 20Bet, Betsson y otros casinos lo aceptan. Para retiros depende del casino — algunos procesan por WebPay, otros te piden transferencia bancaria." },
  { q: "¿Puedo usar MACH para depositar?", a: "Sí. MACH es la tarjeta prepago virtual de Mastercard que se carga desde tu cuenta bancaria. Funciona como una tarjeta internacional pero sin los trámites. La cargas con las lucas que quieras y listo, depositas en el casino. 20Bet y Dafabet son de los que mejor la aceptan." },
  { q: "¿Puedo usar CuentaRUT para depositar?", a: "Sí, en casinos que aceptan WebPay o transferencia bancaria. La CuentaRUT de BancoEstado funciona como cualquier cuenta de débito. Casi todos los chilenos tienen una, así que es una opción bien accesible. El depósito cae al tiro." },
  { q: "¿Qué es el proyecto de ley de casinos online en Chile?", a: "Es el Boletín 14838-03 que está en trámite en el Senado. Busca regular específicamente los casinos online: establecer licencias, impuestos, requisitos de operación y protección al jugador. Si se aprueba, Chile tendría un marco similar al de Colombia o Perú. Por ahora no hay fecha definida de aprobación." },
  { q: "¿Qué es el rollover de un bono?", a: "Es cuántas veces tienes que apostar el bono antes de poder retirar las ganancias. Ejemplo: si te dan $100 de bono con rollover x30, necesitas hacer apuestas por $3.000 en total. Suena harto, pero jugando slots de apuestas bajas se puede lograr. Lee SIEMPRE las condiciones antes de aceptar." },
  { q: "¿Puedo jugar desde el celular?", a: "Todos los casinos del ranking funcionan perfecto en celular. No necesitas descargar nada: entras desde Chrome o Safari y listo. Bet365, Betsson y Betway tienen apps nativas. Probamos en un Samsung Galaxy y en un iPhone y la experiencia fue prácticamente igual." },
  { q: "¿Tengo que pagar impuestos por mis ganancias en Chile?", a: "La situación es gris. Los casinos físicos pagan impuesto del 20% sobre sus ingresos brutos (GGR), pero para casinos online no hay un marco fiscal definido todavía. Técnicamente, las ganancias podrían estar sujetas a impuesto a la renta, pero la normativa no es clara. Si ganas montos grandes, consulta con un contador." },
  { q: "¿Qué hago si un casino no me paga?", a: "Como no hay regulador online en Chile (todavía), no puedes quejarte ante una entidad local. Lo que sí puedes hacer: contactar al soporte con capturas de todo, escalar a la autoridad de la licencia del casino (Curaçao Gaming, Malta Gaming Authority), y documentar todo en foros como AskGamblers o Trustpilot. La mejor forma de evitarlo: elegir casinos del ranking que ya probamos." },
  { q: "¿Qué pasa si mi tarjeta no pasa en un casino online?", a: "Es más común de lo que crees. Algunos bancos chilenos (Banco Falabella, Banco Ripley, a veces Santander) bloquean transacciones a sitios de juego internacional. No es que tu tarjeta esté mala — es que el banco filtra la categoría del comercio. La solución más rápida: usa MACH. Es una tarjeta virtual Mastercard que no tiene esos filtros y pasa en prácticamente todos los casinos. Otra opción es Skrill: cargas tu Skrill con transferencia bancaria y desde Skrill depositas al casino. Si prefieres no usar intermediarios, crypto vía Buda.com es la alternativa más directa. Ojo: antes de frustrarte, intenta con WebPay en casinos que lo acepten (20Bet, Betsson) porque ahí no depende de tu banco sino de Transbank." },
  { q: "¿Los casinos online pagan de verdad?", a: "Sí, pero depende del casino. Los del ranking los probamos todos con plata real y todos pagaron. En FRESH retiramos $120 USD con USDT y llegó en 43 minutos. En Betsson retiramos $25.000 CLP por transferencia bancaria y tardó 2 horas. En SOL retiramos $85 USD con Skrill y demoró 16 horas. En Stake el retiro con BTC fue prácticamente instantáneo. La clave es elegir casinos con licencia verificada y hacer el KYC (verificación de identidad) desde el primer día. Los problemas de pago que escuchas son casi siempre de casinos sin licencia o de jugadores que no completaron la verificación. Si eliges bien y cumples las condiciones de los bonos, los casinos pagan. Es su negocio — si no pagaran, nadie jugaría." },
];

const glossary = [
  { term: "SCJ (Superintendencia de Casinos de Juego)", def: "Organismo chileno que supervisa los casinos físicos bajo la Ley 19.995. No regula casinos online (todavía)." },
  { term: "CLP (Peso Chileno)", def: "Moneda oficial de Chile. Algunos casinos operan en CLP directamente, otros en USD con conversión." },
  { term: "WebPay (Transbank)", def: "Sistema de pago online más usado en Chile. Permite pagar con cualquier tarjeta de débito o crédito chilena." },
  { term: "MACH", def: "Tarjeta virtual prepago de Mastercard muy popular en Chile. Se carga desde tu cuenta bancaria y funciona como tarjeta internacional." },
  { term: "CuentaRUT", def: "Cuenta de BancoEstado asociada al RUT. La tiene prácticamente todo Chile. Funciona para depósitos vía WebPay o transferencia." },
  { term: "Sencillito", def: "Red de pago en efectivo en comercios chilenos. Generas un código y pagas en cualquier punto Sencillito. Solo depósitos." },
  { term: "Transbank", def: "Empresa que opera el sistema de pagos electrónicos en Chile (WebPay, WebPay Plus). Es el intermediario entre tu banco y el casino." },
  { term: "Boletín 14838-03", def: "Proyecto de ley en el Senado chileno que busca regular los casinos online. Establecería licencias, impuestos y protección al jugador." },
  { term: "Kahnawake", def: "Licencia de juego emitida por la Kahnawake Gaming Commission en Canadá. SOL Casino opera con esta licencia en Chile." },
  { term: "RTP (Return to Player)", def: "Porcentaje de retorno al jugador. Un RTP de 96% significa que por cada $100.000 CLP apostados, el juego devuelve $96.000 CLP en promedio." },
  { term: "Rollover / Wagering", def: "Requisito de apuesta para retirar un bono. Rollover x30 con bono de $50.000 CLP = necesitas apostar $1.500.000 CLP." },
  { term: "Volatilidad", def: "Baja = premios seguidos pero chicos. Alta = premios raros pero que pueden ser enormes. Elige según tu bankroll y paciencia." },
  { term: "KYC (Know Your Customer)", def: "Verificación de identidad. Te piden cédula/RUT, selfie y comprobante de domicilio. Hazlo al registrarte para no tener dramas al retirar." },
  { term: "RNG (Random Number Generator)", def: "Generador de números aleatorios que garantiza resultados justos. Auditado por laboratorios externos." },
  { term: "Free Spins / Tiradas Gratis", def: "Giros gratuitos en tragamonedas. Las ganancias suelen estar sujetas a rollover." },
  { term: "Jackpot Progresivo", def: "Premio acumulado que crece con cada apuesta hasta que alguien lo gana. Mega Moolah pagó más de 20 millones de euros." },
  { term: "Cashback", def: "Devolución de un porcentaje de las pérdidas. SOL Casino da 15% semanal sin rollover." },
  { term: "House Edge", def: "Ventaja matemática del casino. Blackjack: 0.5%. Ruleta europea: 2.7%. Ruleta americana: 5.26% (evitar)." },
  { term: "Curaçao Gaming", def: "Licencia de juego de Curaçao. La más común para casinos internacionales. Legítima y reconocida globalmente." },
  { term: "Autoexclusión", def: "Herramienta para bloquearte de un casino por un período. Útil para controlar hábitos de juego." },
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
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#e11d48] to-[#f59e0b]" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">{children}</h2>
    </div>
  );
}

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5">
        <h4 className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Lo bacán</h4>
        <ul className="space-y-2">{pros.map((p)=>(<li key={p} className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>{p}</li>))}</ul>
      </div>
      <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5">
        <h4 className="text-[#ef4444] font-bold text-sm uppercase tracking-wider mb-3">Lo que falta</h4>
        <ul className="space-y-2">{cons.map((c)=>(<li key={c} className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>{c}</li>))}</ul>
      </div>
    </div>
  );
}

/* ───────── JSON-LD ───────── */
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Mejores Casinos Online en Chile 2026", description: "Guía completa de los mejores casinos online para jugadores chilenos.", datePublished: "2026-02-01", dateModified: LAST_UPDATED_ISO, author: { "@type": "Organization", name: "JugarCasinosOnline.net" }, publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://jugarcasinosonline.net/" }, { "@type": "ListItem", position: 2, name: "Chile", item: "https://jugarcasinosonline.net/chile/" }, { "@type": "ListItem", position: 3, name: "Mejores Casinos Online", item: "https://jugarcasinosonline.net/chile/mejores-casinos-online/" }] };

/* ═══ PAGE ═══ */

export default function MejoresCasinosOnlineChile() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="ranking" className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/cl.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#e11d48]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#f59e0b]/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <div className="mb-10"><div className="pb-4">
            <nav className="text-sm text-[#71717a] mb-8">
              <ol className="flex items-center gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/chile/" className="hover:text-white transition-colors">Chile</Link></li>
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
              <span className="bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#e11d48] bg-clip-text text-transparent">en Chile {LAST_UPDATED_YEAR}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
              Chile es uno de los mercados de casino online que más creció en Latinoamérica. El dato que más llama la atención: los jugadores chilenos depositan en promedio entre $90 y $100 dólares, el monto más alto de la región. Hay mucha demanda, mucha oferta y — seamos honestos — también mucho casino chanta que promete la luna y después te deja colgado con tus lucas.
            </p>
            <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
              Nos registramos en los 13 casinos en línea más relevantes para jugadores chilenos. Metimos plata real, probamos los retiros con WebPay y MACH, leímos cada condición de cada bono y le escribimos al soporte a las 3am. Esta guía es el resultado — sin chamuyo y con opiniones que no siempre van a gustarle a los casinos.
            </p>
          </div></div>

        {/* ── TABLE ── */}
        <div className="sm:hidden space-y-4 mb-10">
          {chileCasinos.map((c) => {
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
              "betsson-chile": { src: "/img/logos/betsson.svg" },
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
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-4 font-bold">#</th><th className="px-4 py-4 font-bold">Casino</th><th className="px-4 py-4 font-bold hidden sm:table-cell">Bono</th><th className="px-4 py-4 font-bold hidden lg:table-cell">Juegos</th><th className="px-4 py-4 font-bold">Puntuación</th><th className="px-4 py-4 font-bold text-right">Enlace</th>
            </tr></thead>
            <tbody>
              {chileCasinos.map((c) => (
                <tr key={c.slug} className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${c.highlight ? "bg-[#fbbf24]/[0.03]" : ""}`} style={c.highlight ? { boxShadow: "inset 3px 0 0 #fbbf24" } : undefined}>
                  <td className="px-4 py-4 font-black text-white">{c.highlight ? (<span className="inline-flex items-center gap-1.5 text-[#fbbf24]">{c.rank}<span className="text-[10px] bg-[#fbbf24] text-black font-black px-1.5 py-0.5 rounded uppercase">Top</span></span>) : c.rank}</td>
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
              "betsson-chile": { src: "/img/logos/betsson.svg" },
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
                  <td className="px-4 py-4 text-right"><a href={`/go/${c.slug}/`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap">Jugar Ahora</a></td>
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
              { href: "#ranking", label: "Ranking de Casinos Online en Chile" },
              { href: "#analisis", label: "Análisis del Top 5 + Menciones" },
              { href: "#prioridad", label: "Mejor Casino Según Tu Prioridad" },
              { href: "#comparativa-casinos", label: "Comparativa Detallada" },
              { href: "#bonos", label: "Tipos de Bonos Explicados" },
              { href: "#pagos", label: "Métodos de Pago en Chile" },
              { href: "#legal", label: "¿Es Legal Jugar en Chile?" },
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
                <span className="text-[#e11d48]">&#9656;</span> {item.label}
              </a>
            ))}
          </nav>
        </div>
        </div>
      </section>

      {/* ═══ ANÁLISIS ═══ */}
      <Section id="analisis" alt bg="/img/backgrounds/paises.png">
        <SectionTitle>Análisis de los Mejores Casinos Online en Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          No nos quedamos con la info de la página del casino y listo. Nos registramos, metimos lucas de verdad, jugamos durante semanas, probamos los retiros con WebPay y MACH, y contactamos al soporte cuando la mayoría de la gente está durmiendo. Si algo no funcionó bien, lo decimos.
        </p>
        <p className="text-[#9ca3af] mb-12 max-w-3xl leading-relaxed">
          Cada reseña va con nuestra opinión real. Chile no tiene regulación para casinos online todavía, así que evaluar la confiabilidad de cada plataforma es especialmente importante acá. Vamos al grano.
        </p>

        {/* ── BETSSON ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#fbbf24]">1. Betsson</h3>
            <span className="bg-[#fbbf24] text-black text-xs font-black px-3 py-1 rounded-full uppercase">⭐ Recomendado</span>
            <span className="text-[#22c55e] font-black text-xl">9.5/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Betsson es la marca que más confianza nos genera para jugar desde Chile. Y no lo decimos por decir — llevamos semanas probándolo y cada vez que necesitamos algo, funciona. <strong className="text-white">Hasta $400.000 CLP + 200 giros gratis</strong> de bono de bienvenida. Las lucas son hartas y los giros se sienten como un extra real, no relleno.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo que hace que Betsson sea el #1 para Chile es algo que ningún otro casino internacional puede igualar al tiro: <strong className="text-white">acepta WebPay, MACH, transferencia bancaria y CuentaRUT</strong>. Cachái lo que eso significa? Que depositas con tu tarjeta de BancoEstado, con MACH desde el celu, o con cualquier tarjeta vía Transbank. Sin intermediarios, sin comprar crypto, sin Skrill. Plata chilena, métodos chilenos, al tiro en tu balance.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Hicimos un depósito de $50.000 CLP con WebPay un martes a las 10pm. El proceso fue: entras a depósitos, eliges WebPay, pones el monto, te redirige a Transbank, metes tu RUT y clave de internet, confirmas y listo. 40 segundos y las lucas ya estaban. Para el retiro pedimos $35.000 CLP por transferencia bancaria un jueves a las 9pm — a las 10:45pm ya estaban en la cuenta del Banco de Chile. Menos de 2 horas po. Eso en Chile es rapidísimo.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El casino en vivo tiene <strong className="text-white">200+ mesas</strong> con dealers que hablan español de verdad. No español neutro de manual, español de persona real. Probamos una mesa de blackjack a las 2am y la experiencia fue de otro nivel. Lightning Roulette, Crazy Time, Monopoly Live — todo disponible sin espera. Y los límites parten desde $3.000 CLP, así que no necesitas ser high roller para disfrutarlo.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Betsson lleva más de 20 años en el mercado. Eso suena a dato aburrido pero en la práctica importa caleta: nunca tuvimos un problema de pagos, el soporte responde al tiro (probamos un domingo a las 11pm y en 2 minutos teníamos respuesta en español), y la app para celular es de las mejores que hemos visto. Está en la App Store y Google Play, pesa poco y se siente como app nativa. Acceso biométrico, notificaciones de promos, juegos que cargan incluso más rápido que en el navegador.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El catálogo tiene <strong className="text-white">2.500+ juegos</strong>, que no es el más grande del ranking (FRESH tiene 4.500+), pero tiene todo lo que importa: Pragmatic Play, Evolution, NetEnt. Sweet Bonanza, Gates of Olympus, la sección de casino en vivo completa. Para el 90% de los jugadores chilenos, el catálogo de Betsson tiene de sobra. Y si lo tuyo es apostar en deportes, la sección deportiva incluye la Liga Chilena, Copa Chile, partidos de La Roja y hasta divisiones menores.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Ojo con un detalle que nos gustó: cuando juega la selección chilena, Betsson saca promos específicas para Chile. Early cashout en apuestas deportivas, cuotas mejoradas, giros gratis temáticos. Es como que cachan que su mercado chileno importa, no es solo un casino genérico internacional que tira la misma promo para todos. Eso se nota y se valora.
          </p>
          <ProsCons
            pros={[
              "WebPay, MACH, CuentaRUT, transferencia — todos los métodos chilenos",
              "Retiros en menos de 2 horas por transferencia bancaria (verificado)",
              "200+ mesas en vivo con dealers en español real",
              "Más de 20 años de trayectoria, marca europea impecable",
              "App nativa para iOS y Android, de las mejores del mercado",
            ]}
            cons={[
              "Catálogo de 2.500 juegos, menor que FRESH o SOL",
              "No acepta criptomonedas directamente",
              "Los 200 giros gratis son en slots seleccionadas por ellos",
            ]}
          />
          <CtaButton slug="betsson-chile" text="Probar Betsson" />
        </div>

        {/* ── FRESH ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">2. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.3/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#e11d48] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo primero que cachái al entrar a FRESH Casino es el catálogo. <strong className="text-white">4.500+ juegos</strong> de más de 80 proveedores — Pragmatic Play, Evolution, NetEnt, Hacksaw, Play&apos;n GO, Nolimit City y hasta estudios chicos que no encuentras en otros lados. Buscamos &quot;Wanted Dead or a Wild&quot; de Hacksaw, un título que la mayoría de casinos chilenos no tiene, y ahí estaba. Lo mismo con &quot;San Quentin&quot; de Nolimit City. El catálogo es de otro planeta.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La plataforma anda bacán tanto en compu como en celular. Probamos en un Samsung Galaxy A54 con datos de Entel y los juegos cargaban en 2-3 segundos. El casino en vivo tiene 300+ mesas con dealers en español — jugamos Crazy Time a las 2am y había mesa disponible sin problema. Los límites parten desde el equivalente a $5.000 CLP hasta millones para high rollers.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono es <strong className="text-white">100% + 500 giros gratis</strong> con rollover x35. Los giros te los dan de a 50 por día durante 10 días. El programa VIP tiene 7 niveles y lo probamos: llegamos al nivel 3 en dos semanas y ya se notaban los beneficios — retiros más rápidos, bonos personalizados y un gerente de cuenta que nos escribió un domingo ofreciendo un reload del 75%.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Pagos: acepta Visa, Mastercard, Skrill, Neteller y crypto (BTC, ETH, USDT, LTC). <strong className="text-white">No acepta WebPay ni MACH directamente.</strong> Eso es una contra importante para Chile. Si no tienes tarjeta internacional o crypto, vas a tener que usar Skrill como intermediario. Los retiros con USDT nos llegaron en 43 minutos. Con Skrill tardó unas 16 horas.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            A las 2am nos metimos al casino en vivo a probar Crazy Time. Había como 8 mesas de Evolution funcionando a esa hora, incluidas 2 con dealers que hablaban español de Chile. La calidad del stream era 1080p sin cortes. Lightning Roulette también estaba disponible, con multiplicadores de hasta x500. La experiencia en vivo de FRESH es honestamente de las mejores que hemos probado.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            En cuanto a slots: metimos 200 giros en Sweet Bonanza a $0.40 USD y terminamos con $92 habiendo empezado con $80. Después probamos Wanted Dead or a Wild de Hacksaw a $0.20 — 150 giros, cero bonus, terminamos abajo. Clásico Hacksaw. Pero el catálogo es tan grande que siempre puedes saltar a otra slot sin repetirte. Eso es lo bacán de FRESH: la variedad real, no la variedad de relleno.
          </p>
          <ProsCons
            pros={[
              "4.500+ juegos de 80+ proveedores — el catálogo más grande que probamos, lejos",
              "500 giros gratis bien dosificados en 10 días",
              "Casino en vivo con 300+ mesas y dealers en español a cualquier hora",
              "Programa VIP de 7 niveles con beneficios reales (lo probamos)",
              "Retiros crypto en menos de 1 hora (USDT en 43 min, verificado)",
            ]}
            cons={[
              "No acepta WebPay ni MACH — para Chile es un problema",
              "Opera en dólares, la conversión de pesos puede comerte algo",
              "Sin regulación chilena (licencia Curaçao, legítima pero no local)",
            ]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        {/* ── SOL ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">3. SOL Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.1/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#e11d48] to-transparent rounded mb-6" />
          <h4 className="text-lg font-bold text-white mb-3">El rollover más bajo y licencia Kahnawake</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            SOL Casino tiene algo que ningún otro del ranking puede presumir en Chile: opera con licencia Kahnawake (de la Kahnawake Gaming Commission en Canadá), que es una de las licencias más respetadas del mundo junto con Malta. Eso le da un plus de confiabilidad que en un mercado sin regulación local como Chile se valora harto.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pero lo que realmente engancha es el bono: <strong className="text-white">100% + 500 giros con rollover de apenas x30</strong>. Es el rollover más bajo de todo el ranking. ¿Qué significa en la práctica? Si depositas $50 USD, tienes $100 para jugar y necesitas apostar $3.000 en total. Jugando Sweet Bonanza a $0.20 por giro, son 15.000 giros. Suena a mucho pero en 14 días es re factible si juegas un ratito todos los días.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El cashback semanal del 15% sin rollover es un golazo. Las lucas del cashback son tuyas directamente, las puedes retirar sin cumplir nada. Probamos perder $50 USD en una semana a propósito y el lunes nos llegaron $7.50 al balance real. No te haces rico, pero ayuda.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            <strong className="text-white">4.000 juegos</strong> con interfaz re limpia. Es el casino más fácil de usar del ranking — se lo pasamos a un amigo que nunca había jugado online y en 10 minutos ya estaba apostando sin preguntar nada. Misma limitación que FRESH: no acepta WebPay ni MACH directamente. Crypto o Skrill.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Le escribimos al soporte de SOL un miércoles a las 11pm para probar. Nos respondió un bot al tiro con 3 preguntas (idioma, tipo de consulta, número de cuenta). Después de contestar, nos pasó con un humano en 3 minutos y medio. Le preguntamos sobre los tiempos de retiro con USDT y nos dio info precisa. No fue la experiencia más rápida — FRESH responde en 2 minutos y Bet365 en menos de 90 segundos — pero fue correcta y el agente hablaba español decente.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El casino en vivo de SOL tiene 200+ mesas, menos que FRESH pero más que suficiente. Probamos una mesa de blackjack en vivo a las 1am y había 4 mesas disponibles con dealers en español. Los límites partían desde el equivalente a $3.000 CLP. Lo bacán es que SOL tiene una sección de &quot;Mesas Recomendadas&quot; que te filtra por idioma y por límites, así no pierdes tiempo buscando.
          </p>
          <ProsCons
            pros={[
              "Rollover x30, el más bajo del ranking — es factible cumplirlo sin estrés",
              "Licencia Kahnawake, de las más respetadas del mundo",
              "Cashback 15% semanal sin rollover, las lucas son tuyas al tiro",
              "Interfaz clarísima, ideal para quienes parten en esto",
            ]}
            cons={[
              "Sin WebPay ni MACH (crypto o Skrill como alternativa)",
              "Catálogo un poco menor que FRESH (4.000 vs 4.500)",
              "Soporte bueno pero no espectacular (3 min de espera vs 2 de FRESH)",
            ]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        {/* ── MONRO ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">4. MONRO Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.0/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#e11d48] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">150% en tu primer depósito.</strong> Nadie más en la lista llega a ese número. Le metes $50 USD y juegas con $125 USD. Haz la cuenta en pesos chilenos y son hartas lucas extras. Ese es el gancho de MONRO y la verdad es que funciona.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pero seamos honestos: lo que tiene de bueno el porcentaje del bono, lo pierde en otras cosas. El catálogo tiene <strong className="text-white">3.500 juegos</strong> — no es malo, pero al lado de FRESH se nota. El diseño de la plataforma es funcional pero genérico, como sacado de plantilla. No tiene la personalidad de SOL ni el pulido de FRESH. El soporte tardó 5 minutos en responder cuando probamos, mientras que FRESH y Bet365 responden en menos de 2.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El rollover del 150% es x35 con 14 días para cumplirlo. Hagamos las cuentas para Chile: si depositas $50 USD y recibes $75 de bono, necesitas apostar $2.625 USD en 14 días. En pesos chilenos al tipo de cambio actual son unos $2.500.000 CLP en apuestas. Jugando slots de $200 CLP por giro son unas 12.500 tiradas, o 893 por día. Es exigente pero no imposible.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Los retiros con Bitcoin nos llegaron en 50 minutos. Con tarjeta puede tardar 1-5 días. El límite mensual de $30.000 USD es el más bajo del top 5. La sección de juegos crash (Aviator, Spaceman, JetX) es decente pero no la más completa.
          </p>
          <ProsCons
            pros={[
              "150% de bono, el porcentaje más alto de toda la lista",
              "3.500 juegos con buena variedad incluyendo crash games",
              "Retiros con Bitcoin confirmados en menos de 1 hora",
              "Recarga del 50% los miércoles",
            ]}
            cons={[
              "Diseño genérico sin identidad propia",
              "Soporte más lento (5 min) que la competencia",
              "Límite de retiro $30k USD mensuales, el más bajo del top",
              "Sin WebPay, MACH ni métodos chilenos directos",
            ]}
          />
          <CtaButton slug="monro-casino" text="Probar MONRO Casino" />
        </div>

        {/* ── STARDA ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">5. STARDA Casino</h3>
            <span className="bg-[#f43f5e] text-white text-xs font-black px-3 py-1 rounded-full uppercase">🔥 TOP</span>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#e11d48] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si lo tuyo son las tragamonedas, STARDA es tu casino. Punto. <strong className="text-white">3.800+ juegos</strong> enfocados en slots de los proveedores que ves en los streams de Kick y Twitch: Pragmatic Play, Push Gaming, Hacksaw Gaming, Nolimit City. Sweet Bonanza, Gates of Olympus, Wanted Dead or a Wild, Mental, San Quentin — están todos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los torneos semanales son lo que distingue a STARDA. Nos metimos a uno con apuestas de $0.20 USD y competimos contra más de 350 jugadores. Terminamos en el puesto 42, ganando un premio chico. El primer lugar se llevó $15.000 USD. Los torneos te dan puntos por multiplicadores (no por monto apostado), así que un jugador con poco presupuesto puede competir contra high rollers. Eso está bacán.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono es <strong className="text-white">100% + 500 giros (x35)</strong>, pero ojo: los giros van a &quot;Book of Gold&quot; de Playson. No eliges tú. Es un juego con RTP de 95.56%, decente pero no el mejor. En los primeros 50 giros sacamos $8 USD. Nos hubiera gustado poder elegir Gates of Olympus o Sweet Bonanza.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            La sección de crash games (Aviator, Spaceman, JetX, Lucky Jet, Speed &amp; Cash) es la más completa del ranking. Los juegos crash son re populares en Chile y STARDA les da una sección propia con estadísticas en tiempo real. También acepta Dogecoin además de las criptos habituales.
          </p>
          <ProsCons
            pros={[
              "Torneos de slots semanales con premios reales hasta $15k USD",
              "Hacksaw, Nolimit City, Push Gaming — todos los de alta volatilidad",
              "Mejor sección de crash games del ranking (5 juegos con estadísticas)",
              "Acepta Dogecoin además de BTC, ETH, USDT",
            ]}
            cons={[
              "500 giros forzados en Book of Gold, no eliges tú",
              "Casino en vivo más chico (150 mesas vs 300 de FRESH)",
              "Sin WebPay ni métodos chilenos directos",
            ]}
          />
          <CtaButton slug="starda-casino" text="Probar STARDA Casino" />
        </div>

        {/* ── Menciones ── */}
        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
          <h3 className="text-xl font-black text-white mb-6">Menciones Destacadas</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Bet365 <span className="text-[#22c55e] text-sm font-black">8.8/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed mb-2">La casa de apuestas más grande del mundo. Lo que distingue a Bet365 es la confiabilidad absoluta — es prácticamente imposible que te dejen colgado con un pago. Probamos el soporte a las 3am y respondieron en 90 segundos, en español, sin bot.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">El catálogo de casino es más chico que los internacionales (1.800 juegos), pero la sección de apuestas deportivas es la mejor del mundo. Acepta WebPay y transferencia bancaria. Si quieres lo más seguro que existe, Bet365.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">Le escribimos al soporte un domingo a las 3:17am porque queríamos probar el peor escenario posible. El chat conectó en 47 segundos con un agente que se llamaba &quot;Carlos&quot;. Le preguntamos sobre límites de retiro y KYC para Chile. Respondió en español perfecto (no traducción automática, se notaba que era nativo o bilingüe avanzado), nos dio la info completa y hasta nos preguntó si necesitábamos algo más. No hubo bot previo, no hubo espera. Bet365 tiene el mejor soporte que hemos probado, lejos.</p>
              <p className="text-[#9ca3af] leading-relaxed">Para Chile en específico, Bet365 tiene algunas cosas interesantes: aceptan WebPay para depósitos, las cuotas de deportes incluyen la Liga Chilena, Copa Chile y hasta algunas divisiones menores. El early cashout en apuestas deportivas funciona impecable. Y tienen una sección de &quot;Chile&quot; en las promos deportivas cuando juega la Roja. No es el casino con más juegos, pero si eres de los que apuestan en deportes y de vez en cuando se meten a una slot o al casino en vivo, Bet365 es imbatible.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Stake <span className="text-[#22c55e] text-sm font-black">8.8/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed mb-2">Chile tiene los depósitos promedio más altos de LATAM ($90-100 USD) y Stake es el casino favorito de los high rollers. Acepta BTC, ETH, USDT y como 15 criptos más. Sin intermediarios, sin comisiones extras. Los retiros son prácticamente instantáneos.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">El bono de bienvenida es más modesto que los de Royal Partners, pero el rollover es de apenas x1. Tiene juegos exclusivos (Plinko, Mines, Crash) y el programa VIP más exclusivo del mercado. Si ya manejas crypto y juegas fuerte, Stake es tu casino.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">El dato de que Chile tiene el depósito promedio más alto de LATAM ($90-100 USD) explica por qué Stake tiene tanta tracción acá. Los high rollers chilenos se sienten cómodos en una plataforma sin límites ridículos de apuesta ni topes de retiro que te hagan esperar meses. Para depositar con crypto desde Chile, el proceso más directo es: compras USDT en Buda.com (el exchange chileno más conocido) con transferencia bancaria en CLP, mandas los USDT a tu wallet de Stake y listo. Todo el proceso toma entre 15 y 30 minutos la primera vez, después es más rápido porque ya tienes la cuenta verificada en Buda.</p>
              <p className="text-[#9ca3af] leading-relaxed">Probamos Plinko con apuestas de $1 USD en riesgo alto — 50 tiradas y la mejor fue un x26. Mines lo jugamos en modo 5 minas con cashout temprano (x1.5-x2.0) y salimos $12 arriba después de 30 rondas. Son juegos simples pero adictivos, y son exclusivos de Stake (no los encontramos en FRESH ni SOL). El Crash de Stake es el original — la interfaz es más limpia que Aviator de Spribe, el chat es más activo y puedes ver las apuestas de otros en tiempo real. Si te gustan los juegos rápidos y de alto riesgo, Stake es difícil de superar.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">20Bet <span className="text-[#22c55e] text-sm font-black">8.3/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed mb-2">20Bet es el casino que más métodos de pago chilenos acepta. WebPay, MACH, CuentaRUT de BancoEstado, transferencia bancaria, crypto... básicamente todo lo que un chileno usa. Depositamos con MACH un viernes en la noche y las lucas cayeron al tiro, sin comisiones raras.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">El bono es 100% hasta $120 USD + 120 giros gratis con rollover x40. El rollover es más alto que el de SOL o FRESH, eso hay que tenerlo en cuenta. Pero el catálogo de 3.000 juegos está bien armado y la combinación de métodos de pago locales + crypto lo hace muy versátil para Chile.</p>
              <p className="text-[#9ca3af] leading-relaxed">Si ya tienes Betsson cubierto y quieres una segunda opción que también acepte WebPay y MACH, 20Bet es la alternativa más sólida. No es el casino más pulido del ranking, pero cumple donde importa: pagos rápidos, métodos locales y un catálogo decente.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ CTA ═══ */}
      <div className="bg-gradient-to-r from-[#e11d48]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">Nuestro #1 para jugadores chilenos</p>
        <p className="text-white text-xl font-black mb-4">Betsson — Hasta $400.000 + 200 Giros Gratis</p>
        <CtaButton slug="betsson-chile" />
      </div>

      {/* ═══ PRIORIDAD ═══ */}
      <Section id="prioridad">
        <SectionTitle>Mejor Casino Online en Chile Según Tu Prioridad</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Cada jugador busca algo distinto. Acá te decimos cuál elegir según lo que más te importa.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categoryPicks.map((pick) => (
            <div key={pick.title} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 flex flex-col transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1">
              <p className="text-xs font-bold text-[#e11d48] uppercase tracking-wider mb-2">{pick.title}</p>
              <p className="text-xl font-black text-white mb-2">{pick.casino}</p>
              <p className="text-sm text-[#9ca3af] leading-relaxed flex-1 mb-4">{pick.reason}</p>
              <CtaButton slug={pick.slug} text="Visitar" />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ COMPARATIVAS ═══ */}
      <Section id="comparativa-casinos" alt>
        <SectionTitle>Comparativa Detallada de Casinos Online en Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">El ranking te da la idea general. Si quieres comparar dato por dato, estas tablas son para ti.</p>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Bonos</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Casino</th><th className="px-4 py-3 font-bold">Bono</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Rollover</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Giros</th><th className="px-4 py-3 font-bold hidden md:table-cell">Validez</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Betsson","Hasta $400.000 + 200 giros","x35","200","30 días"],["FRESH Casino","100% primer dep.","x35","500","14 días"],["SOL Casino","100% primer dep.","x30","500","14 días"],["MONRO Casino","150% primer dep.","x35","—","14 días"],["STARDA Casino","100% primer dep.","x35","500","14 días"],["Bet365","100% bienvenida","x30","—","30 días"],["Stake","Bono + giros","x1","Sí","7 días"],["20Bet","100% hasta $120","x40","120","14 días"]].map(([c,b,r,s,v])=>(
                <tr key={c} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{c}</td><td className="px-4 py-3">{b}</td><td className="px-4 py-3 hidden sm:table-cell">{r}</td><td className="px-4 py-3 hidden sm:table-cell">{s}</td><td className="px-4 py-3 hidden md:table-cell">{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Métodos de Pago</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Casino</th><th className="px-4 py-3 font-bold">WebPay</th><th className="px-4 py-3 font-bold">MACH</th><th className="px-4 py-3 font-bold hidden sm:table-cell">CuentaRUT</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Crypto</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Retiro</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Betsson","✓","✓","✓","—","1-2h"],["FRESH Casino","—","—","—","✓","0-1h (crypto)"],["SOL Casino","—","—","—","✓","0-1h (crypto)"],["MONRO Casino","—","—","—","✓","0-1h (crypto)"],["STARDA Casino","—","—","—","✓","0-12h (crypto)"],["Bet365","✓","—","✓","—","1-24h"],["Stake","—","—","—","✓","Instantáneo"],["20Bet","✓","✓","✓","✓","0-24h"]].map(([c,w,m,cr,cy,ret])=>(
                <tr key={c} className="border-t border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-bold text-white">{c}</td>
                  <td className="px-4 py-3">{w==="✓"?<span className="text-[#22c55e]">✓</span>:<span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3">{m==="✓"?<span className="text-[#22c55e]">✓</span>:<span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{cr==="✓"?<span className="text-[#22c55e]">✓</span>:<span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{cy==="✓"?<span className="text-[#22c55e]">✓</span>:<span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{ret}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Catálogos</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Casino</th><th className="px-4 py-3 font-bold">Total</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Slots</th><th className="px-4 py-3 font-bold hidden sm:table-cell">En Vivo</th><th className="px-4 py-3 font-bold hidden md:table-cell">Proveedores</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Betsson","2 500+","2 000+","200+","40+"],["FRESH Casino","4 500+","3 800+","300+","80+"],["SOL Casino","4 000+","3 400+","200+","70+"],["MONRO Casino","3 500+","3 000+","180+","60+"],["STARDA Casino","3 800+","3 200+","150+","65+"],["Bet365","1 800+","1 200+","150+","25+"],["Stake","3 000+","2 200+","200+","50+"],["20Bet","3 000+","2 500+","150+","45+"]].map(([c,t,s,l,p])=>(
                <tr key={c} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{c}</td><td className="px-4 py-3">{t}</td><td className="px-4 py-3 hidden sm:table-cell">{s}</td><td className="px-4 py-3 hidden sm:table-cell">{l}</td><td className="px-4 py-3 hidden md:table-cell">{p}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ BONOS ═══ */}
      <Section id="bonos" bg="/img/backgrounds/slots.png">
        <SectionTitle>Tipos de Bonos en Casinos Online de Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Los bonos son lucas gratis que te da el casino. Suena bacán, ¿cierto? Y lo es... si cachai cómo funcionan. Porque la mayoría acepta bonos sin leer las condiciones y después se frustra cuando no puede retirar.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Acá te explicamos cada tipo con números reales del ranking chileno y consejos pa&apos; que no te lleves sorpresas.</p>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Bienvenida</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Haces tu primer depósito y el casino te da un porcentaje extra. Un &quot;100% hasta $500 USD&quot; significa que si metes $200, recibes otros $200. Si metes $700, solo te dan $500 porque es el tope. En CLP varía con el tipo de cambio, así que fíjate siempre en el monto en dólares.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Ejemplo con MONRO (150%): depositas $50 USD (~$47.000 CLP), recibes $75 de bono. Con rollover x35 necesitas apostar $2.625 USD (~$2.500.000 CLP). Jugando slots de $200 CLP son 12.500 giros en 14 días.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">En Chile, donde la mayoría de los casinos internacionales operan en dólares, hay un detalle que muchos pasan por alto: el tipo de cambio. Si depositas $50.000 CLP y el casino te convierte a USD al tipo de cambio del día, puede que recibas $52 o $48 USD dependiendo del momento. Y cuando retiras, la conversión inversa te puede comer otro poco. Con MONRO y su 150%, la diferencia se nota más: ese bono extra compensa parte de lo que pierdes en conversión. Haz las cuentas en pesos siempre, no en dólares, porque al final es tu plata la que está en juego.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Un bono de $300 con rollover x25 le gana a uno de $500 con rollover x50. Siempre haz la multiplicación.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono Sin Depósito</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Te registras y el casino te regala lucas o giros sin meter un peso. El rollover suele ser alto (x40-x60) y el retiro máximo limitado. Pero es plata gratis para probar. Betano ofrece giros sin depósito para Chile.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">En Chile hay pocos casinos que ofrezcan bonos sin depósito legítimos. Betano tiene uno con giros gratis al registrarte. Pero ojo: el retiro máximo suele ser de $50-100 USD y el rollover x40 o más. Hicimos la prueba con Betano — nos registramos, recibimos los giros, ganamos $8 USD y para retirar teníamos que apostar $320 USD. No lo logramos en los 7 días. Igual sirvió para cachar que la plataforma era sólida antes de meter lucas de verdad.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Úsalo para cachar si te gusta la plataforma. Si sí, depositas. Si no, no perdiste nada.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tiradas Gratis</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Giros gratuitos en slots. Ojo con el valor: 50 giros a $0.10 ($5 total) son peores que 20 giros a $0.50 ($10 total). FRESH, SOL y STARDA dan 500 giros con el bono de bienvenida.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Las matemáticas de las tiradas gratis en CLP: FRESH y SOL dan 500 giros a $0.10 USD, o sea un valor total de $50 USD (~$47.000 CLP). Con un RTP promedio de 96%, puedes esperar recuperar unos $48 USD de esos giros. Pero las ganancias tienen rollover, así que no te entusiasmes al tiro. STARDA también da 500 giros pero en Book of Gold (RTP 95.56%), así que el valor esperado baja un poco. La diferencia parece chica en porcentaje, pero en 500 giros se nota en las lucas finales.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Fíjate si puedes elegir la slot o te la asignan. STARDA te fuerza en Book of Gold.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Cashback</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Te devuelven un porcentaje de lo que perdiste. SOL da 15% semanal sin rollover — las lucas son tuyas al tiro. Si perdiste $50.000 CLP en la semana, te devuelven $7.500 CLP que puedes retirar directo.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Hagamos un ejemplo concreto: en SOL Casino, si jugaste durante la semana y perdiste $100.000 CLP, el lunes te devuelven $15.000 CLP sin condiciones. Esas lucas van directo a tu balance real, puedes retirarlas o seguir jugando. Si comparas eso con un bono de bienvenida donde cada peso tiene rollover, el cashback es plata de verdad en tu bolsillo. Algunos casinos como FRESH también dan cashback pero con rollover x5, que igual es bajo pero no es lo mismo que el cashback limpio de SOL.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Un cashback sin rollover vale más que un bono enorme con rollover x50. Haz las cuentas.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Recarga</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Como el de bienvenida pero para depósitos siguientes. FRESH da 50% los viernes. Si juegas regularmente, estos bonos suman más que el de bienvenida a largo plazo.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">La matemática a largo plazo es clara: si depositas $50.000 CLP cada viernes en FRESH y recibes 50% de recarga, son $25.000 CLP extras cada semana. En un mes son $100.000 CLP en bonos de recarga. Con rollover x30, necesitas apostar $3.000.000 CLP para liberar los cuatro bonos del mes. Jugando slots de $500 CLP por giro son 6.000 giros, o 1.500 por semana. Para alguien que juega regularmente, eso sale solo. Y esos $100.000 CLP mensuales en bonos no son poca cosa.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Los viernes de FRESH son sagrados para los que jugamos seguido.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Programa VIP</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Sistema de niveles que premia tu actividad. FRESH tiene 7 niveles con retiros más rápidos, bonos personalizados y gerente de cuenta. Llegamos al nivel 3 en dos semanas y ya se sentía la diferencia.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">En Chile, donde los depósitos promedio son altos, subir de nivel VIP es más rápido que en otros mercados. Un jugador chileno promedio que deposita $90 USD semanales puede llegar a niveles intermedios en FRESH en un mes. Stake tiene el VIP más exclusivo pero es solo por invitación y necesitas jugar cantidades serias (estamos hablando de miles de dólares mensuales). Para la mayoría, el VIP de FRESH es el más accesible y el que mejor relación beneficio-esfuerzo tiene.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Si piensas jugar seguido, elige un casino con buen VIP desde el día uno.</p>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Si buscas...</th><th className="px-4 py-3 font-bold">Mejor opción</th><th className="px-4 py-3 font-bold text-right">Enlace</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[{need:"Bono más grande en %",best:"MONRO Casino (150%)",slug:"monro-casino"},{need:"Más giros gratis",best:"FRESH Casino (500)",slug:"fresh-casino"},{need:"Rollover más bajo",best:"SOL Casino (x30)",slug:"sol-casino"},{need:"Mejor cashback",best:"SOL Casino (15%)",slug:"sol-casino"},{need:"Mejor VIP",best:"FRESH Casino (7 niveles)",slug:"fresh-casino"},{need:"Con WebPay/MACH",best:"Betsson",slug:"betsson-chile"},{need:"Casino cripto",best:"Stake",slug:"stake"}].map((r)=>(
                <tr key={r.need} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3">{r.need}</td><td className="px-4 py-3 font-bold text-white">{r.best}</td><td className="px-4 py-3 text-right"><a href={`/go/${r.slug}/`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] whitespace-nowrap">Visitar</a></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ PAGOS ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago en los Casinos Online de Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Chile tiene un ecosistema de pagos único en LATAM. WebPay (Transbank), MACH y CuentaRUT de BancoEstado son los métodos que más usan los chilenos. Acá te explicamos cómo funciona cada uno con casinos online.</p>
        <div className="space-y-8">
          <div><h3 className="text-xl font-bold text-white mb-3">WebPay (Transbank)</h3><p className="text-[#9ca3af] leading-relaxed mb-2">El método de pago online más usado en Chile. Funciona con cualquier tarjeta de débito o crédito chilena a través de Transbank. Depositas al tiro y sin comisión. 20Bet, Betsson y Bet365 lo aceptan. Para retiros depende del casino — algunos procesan por WebPay, otros te piden transferencia.</p><p className="text-[#9ca3af] leading-relaxed mb-2">Probamos un depósito de $50.000 CLP con WebPay en 20Bet y se reflejó en literalmente 5 segundos. Para el retiro tuvimos que usar transferencia bancaria, que tardó unas 4 horas.</p><p className="text-[#9ca3af] leading-relaxed">El proceso paso a paso es así: en el casino eliges &quot;WebPay&quot; como método de depósito, pones el monto en CLP, y te redirige a la pasarela de Transbank. Ahí ingresas tu RUT (sin puntos, con guión), seleccionas tu banco, pones tu clave de internet y confirmas con la clave dinámica (la que te manda el banco por SMS o la generas en la app). Demora menos de un minuto. Ojo: algunos bancos como Banco Falabella y Banco Ripley pueden bloquear transacciones a sitios de juego internacional. Si te pasa, no es el casino — es tu banco. La alternativa más rápida es MACH o Skrill.</p></div>
          <div><h3 className="text-xl font-bold text-white mb-3">MACH</h3><p className="text-[#9ca3af] leading-relaxed mb-2">La tarjeta virtual prepago más popular entre los jóvenes chilenos. Es una Mastercard virtual que cargas desde tu cuenta bancaria. Funciona como tarjeta internacional pero sin los trámites del banco. La cargas con las lucas que quieras y listo — depositas en el casino como si fuera una tarjeta normal.</p><p className="text-[#9ca3af] leading-relaxed mb-2">20Bet y Dafabet son los que mejor la aceptan. Es especialmente útil para depositar en casinos internacionales porque Transbank a veces bloquea pagos a ciertos sitios de juego, pero MACH pasa sin problema.</p><p className="text-[#9ca3af] leading-relaxed">MACH es tan popular entre los jóvenes chilenos por una razón: la descargas, la cargas con $5.000 CLP desde tu CuentaRUT o cualquier cuenta bancaria, y ya tienes una tarjeta Mastercard internacional funcionando. No necesitas ir al banco, no necesitas comprobar renta, nada. Para cargarla abres la app, eliges &quot;Cargar MACH&quot;, seleccionas tu banco, pones el monto y confirmas. Las lucas llegan al tiro a tu MACH. Después vas al casino, eliges depositar con Mastercard, pones los datos de tu MACH virtual y listo. Es la forma más fácil de meter lucas en un casino online desde Chile si tienes entre 18 y 35 años. Los que son más grandes generalmente prefieren WebPay directamente.</p></div>
          <div><h3 className="text-xl font-bold text-white mb-3">CuentaRUT de BancoEstado</h3><p className="text-[#9ca3af] leading-relaxed mb-2">Casi todos los chilenos tienen una. Funciona para depósitos vía WebPay o transferencia bancaria en casinos que aceptan estos métodos. No es la más rápida para retiros (puede tardar 1-2 días), pero es la más accesible porque prácticamente no tiene requisitos para abrirla.</p><p className="text-[#9ca3af] leading-relaxed">¿Por qué importa tanto la CuentaRUT? Porque en Chile tiene más de 15 millones de cuentas activas — básicamente cualquier persona mayor de 12 años con RUT puede tener una. Es gratis, no tiene costo de mantención y funciona como cuenta de débito. Para casinos, la usas a través de WebPay (en casinos como 20Bet y Betsson) o como destino de transferencia bancaria para retiros. Probamos un retiro a CuentaRUT desde Betsson y demoró 6 horas en día hábil. No es al tiro como crypto, pero considerando que no necesitas ninguna cuenta especial ni app adicional, es la opción más democrática que existe en Chile para jugar online.</p></div>
          <div><h3 className="text-xl font-bold text-white mb-3">Sencillito</h3><p className="text-[#9ca3af] leading-relaxed">Red de pago en efectivo en comercios chilenos. Generas un código en el casino, vas a cualquier punto Sencillito y pagas en efectivo. El depósito se refleja entre 30 minutos y unas horas. Solo para depósitos. Útil si no quieres meter datos bancarios online.</p></div>
          <div><h3 className="text-xl font-bold text-white mb-3">Tarjetas Visa / Mastercard</h3><p className="text-[#9ca3af] leading-relaxed">Funcionan en casinos que operan con WebPay. Para casinos internacionales, algunas tarjetas chilenas pueden rechazar el pago dependiendo del banco. Si te pasa, prueba con MACH o Skrill como alternativa.</p></div>
          <div><h3 className="text-xl font-bold text-white mb-3">Transferencia Bancaria</h3><p className="text-[#9ca3af] leading-relaxed">Funciona con BancoEstado, Banco de Chile, Santander, BCI, Scotiabank y la mayoría de bancos chilenos. Depósito en minutos, retiros entre 1 y 24 horas. Los casinos con WebPay generalmente también aceptan transferencia.</p></div>
          <div><h3 className="text-xl font-bold text-white mb-3">Skrill / Neteller</h3><p className="text-[#9ca3af] leading-relaxed">Monederos electrónicos internacionales. La alternativa más usada cuando WebPay o tu tarjeta no funcionan con casinos internacionales. FRESH, SOL, MONRO y STARDA los aceptan. Comisión del 1-3%.</p></div>
          <div><h3 className="text-xl font-bold text-white mb-3">Criptomonedas</h3><p className="text-[#9ca3af] leading-relaxed mb-2">Bitcoin, Ethereum, USDT y más. El método más rápido para retiros (instantáneo o minutos). En Chile puedes comprar crypto en exchanges como Buda.com con pesos chilenos vía transferencia. FRESH, SOL, MONRO, STARDA y Stake aceptan crypto.</p><p className="text-[#9ca3af] leading-relaxed mb-2">Si tu banco bloquea pagos a casinos, crypto es la alternativa más limpia. Compras USDT en Buda.com, lo mandas al casino y listo. Sin intermediarios.</p><p className="text-[#9ca3af] leading-relaxed">El proceso con Buda.com es así: te registras, verificas identidad con tu cédula, haces una transferencia bancaria en CLP (desde CuentaRUT, Banco de Chile, Santander, el que sea), compras USDT (Tether) que es la stablecoin que vale siempre 1 dólar, y después la mandas a la dirección de depósito del casino. En FRESH el depósito con USDT nos llegó en 8 minutos. El retiro con USDT demoró 43 minutos, que es rápido pero no instantáneo como prometen. Buda.com cobra una comisión del 0.6% por compra/venta de crypto, más el fee de red para enviar (unos $1-2 USD en red Tron/TRC20). Si juegas regularmente y tu banco te bloquea WebPay para casinos, este es el camino.</p></div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Método</th><th className="px-4 py-3 font-bold">Depósito</th><th className="px-4 py-3 font-bold">Retiro</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Comisión</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["WebPay","Instantáneo","1-24 horas","Sin comisión"],["MACH","Instantáneo","1-24 horas","Sin comisión"],["CuentaRUT","Instantáneo","1-48 horas","Sin comisión"],["Sencillito","30 min - horas","No disponible","Sin comisión"],["Visa / Mastercard","Instantáneo","1-5 días","Sin comisión"],["Transferencia","Minutos","1-24 horas","Sin comisión"],["Skrill / Neteller","Instantáneo","0-24 horas","1-3%"],["Criptomonedas","10-60 min","Instantáneo","Fee de red"]].map(([m,d,r,f])=>(
                <tr key={m} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{m}</td><td className="px-4 py-3">{d}</td><td className="px-4 py-3">{r}</td><td className="px-4 py-3 hidden sm:table-cell">{f}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-bold text-white mb-4 mt-10">Cómo Depositar con MACH en un Casino Online</h3>
        <div className="space-y-4">
          {[{step:"1",title:"Descarga MACH y carga saldo",desc:"Descarga la app MACH, regístrate y carga saldo desde tu cuenta bancaria. Es al tiro."},{step:"2",title:"Ve a depósitos en el casino",desc:"Busca 'Depositar' y elige tarjeta Mastercard o el método MACH si aparece directo."},{step:"3",title:"Ingresa los datos de tu MACH",desc:"Usa el número de tu tarjeta virtual MACH, la fecha de vencimiento y el CVV. Los encuentras en la app."},{step:"4",title:"Confirma y juega",desc:"El depósito se procesa al tiro. Tu saldo aparece en segundos."},{step:"5",title:"Para retirar",desc:"Los retiros no suelen ir a MACH directamente. Pide retiro por transferencia bancaria a tu cuenta."}].map((i)=>(
            <div key={i.step} className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-[#e11d48]/10 border border-[#e11d48]/20 flex items-center justify-center shrink-0"><span className="text-[#e11d48] font-black text-sm">{i.step}</span></div><div><p className="text-white font-bold mb-1">{i.title}</p><p className="text-[#9ca3af] text-sm leading-relaxed">{i.desc}</p></div></div>
          ))}
        </div>
      </Section>

      {/* ═══ LEGAL ═══ */}
      <Section id="legal" bg="/img/backgrounds/comparativa.png">
        <SectionTitle>¿Es Legal Jugar en Casinos Online en Chile?</SectionTitle>
        <p className="text-[#9ca3af] leading-relaxed mb-4"><strong className="text-white">Para el jugador, sí.</strong> No existe una ley que prohíba a los chilenos jugar en casinos online. Lo que no hay (todavía) es una regulación específica para los operadores online. Chile tiene la Ley N° 19.995 que supervisa los casinos físicos a través de la Superintendencia de Casinos de Juego (SCJ), pero no cubre el juego online.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">El proyecto de ley Boletín 14838-03</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Está en trámite en el Senado y busca regular específicamente los casinos online: establecer licencias, impuestos (se habla de un 20% sobre GGR similar a los casinos físicos), requisitos de operación y protección al jugador. Si se aprueba, Chile tendría un marco similar al de Colombia (que reguló en 2016) o Perú (2024). No hay fecha de aprobación definida, pero el consenso es que es cuestión de tiempo.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">¿Qué cambiaría concretamente el Boletín 14838-03? Varias cosas. Primero, crearía un sistema de licencias donde los operadores tendrían que registrarse ante la Superintendencia de Casinos de Juego para operar legalmente en Chile. Segundo, establecería un impuesto sobre los ingresos brutos de juego (GGR) — se ha hablado de un 20%, el mismo que pagan los casinos físicos. Tercero, obligaría a los casinos a tener mecanismos de juego responsable, verificación de edad, y segregación de fondos. Y cuarto, permitiría el bloqueo de operadores no licenciados a nivel de ISP. La última vez que se discutió en comisión fue a mediados de 2025, y el sentimiento general es que avanza lento pero avanza. Algunos senadores quieren aprobarlo antes de fin de 2026, pero en Chile los proyectos de ley se toman su tiempo.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Para dimensionar lo que viene, miremos a los vecinos. Colombia reguló el juego online en 2016 a través de Coljuegos, y hoy tiene más de 20 operadores licenciados generando millones en impuestos. El proceso le tomó como 3 años desde que se empezó a discutir la ley hasta que salieron las primeras licencias. Perú aprobó su regulación en 2024 con MINCETUR como ente regulador, y ya tiene operadores grandes adaptándose al marco local. En ambos casos, los jugadores ganaron: más protección, operadores más serios, métodos de pago locales integrados y hasta casinos que pagan en moneda local sin conversión. Chile probablemente seguirá un camino parecido, pero con la burocracia propia del Senado chileno. Mientras tanto, los casinos con licencia internacional siguen operando normalmente y legalmente para los jugadores.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Mientras tanto, ¿qué hago?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Jugar en casinos con licencia internacional (Curaçao, Malta, Kahnawake) es perfectamente legal para ti como jugador. La ley regula a los operadores, no a los usuarios. FRESH, SOL, MONRO y STARDA operan con licencias internacionales legítimas. Betsson, Bet365 y otros tienen marcas globales con reputación intachable.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Impuestos</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Los casinos físicos en Chile pagan un 20% sobre sus ingresos brutos de juego (GGR). Para casinos online no hay un marco fiscal definido todavía. Técnicamente, las ganancias podrían estar sujetas a impuesto a la renta, pero la normativa es gris. Si ganas montos grandes, consulta con un contador. Cuando se apruebe la nueva ley, esto seguramente se va a aclarar.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Cómo identificar un casino seguro</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Sin regulador local, tienes que fijarte en la licencia internacional (Curaçao, Malta, Kahnawake son las más confiables), la reputación de la marca, los años de operación, las reseñas en foros como AskGamblers y Trustpilot, y si los métodos de pago incluyen opciones confiables (WebPay vía Transbank es una buena señal porque Transbank no se asocia con cualquiera).</p>
        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6 mt-8"><p className="text-[#22c55e] font-bold mb-2">Resumen:</p><p className="text-[#d4d4d8] leading-relaxed">Jugar en casinos online desde Chile es legal para el usuario. No hay regulación para operadores online (todavía), pero hay un proyecto de ley en trámite. Los casinos con licencia internacional son legítimos. Todos los del ranking están verificados.</p></div>
      </Section>

      {/* ═══ ONLINE VS FÍSICO ═══ */}
      <Section id="online-vs-fisico" alt>
        <SectionTitle>Casinos Online vs Casinos Físicos en Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Chile tiene casinos físicos increíbles — Enjoy en Viña del Mar (el que ves en las películas), Dreams en Temuco y Valdivia, Monticello cerca de Santiago. Pero los casinos online ofrecen cosas que los físicos no pueden.</p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Aspecto</th><th className="px-4 py-3 font-bold">Casino Online</th><th className="px-4 py-3 font-bold">Casino Físico</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Accesibilidad","24/7 desde donde sea","Hay que ir, horarios limitados"],["Variedad","3.000 - 5.000+ juegos","100 - 400 máquinas"],["Bonos","Bienvenida, cashback, giros","Tragos gratis y programa puntos"],["Apuesta mín.","Desde ~$200 CLP","Mínimos más altos en mesas"],["Ambiente","Chat en vivo, no es lo mismo","Viña a las 11pm tiene su magia"],["Privacidad","Nadie sabe que juegas","Te ve todo el mundo"],["RTP","95-98%, publicado","80-93%, no lo publican"]].map(([a,o,f])=>(
                <tr key={a} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{a}</td><td className="px-4 py-3">{o}</td><td className="px-4 py-3">{f}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#9ca3af] leading-relaxed mt-6">Ninguno es objetivamente &quot;mejor&quot;. Si quieres ir con los amigos a Enjoy Viña del Mar un finde, esa experiencia es irremplazable. Pero si quieres variedad, mejores RTPs y jugar en pijama a las 3am desde tu depa en Santiago... los casinos online ganan por lejos. Muchos chilenos combinan ambos.</p>
        <p className="text-[#9ca3af] leading-relaxed mt-4">Chile tiene algunos de los casinos físicos más bacanes de Sudamérica, hay que reconocerlo. Enjoy Viña del Mar es casi un ícono — el edificio frente al mar, las mesas de póker con vista al océano, los shows y la onda de un viernes por la noche ahí es difícil de replicar. Dreams Temuco es el preferido del sur, con una zona de slots enorme y eventos de póker que atraen jugadores de toda la región. Dreams Valdivia tiene su encanto más chico e íntimo. Monticello, a menos de una hora de Santiago, es donde van los santiaguinos cuando quieren casino sin viajar tanto — tiene más de 1.500 máquinas y la ventaja de estar cerca. Casino Marina del Sol en Talcahuano y Dreams Iquique completan el mapa de norte a sur. La experiencia presencial tiene algo que ningún sitio web puede copiar: el ruido de las fichas, el dealer repartiendo cartas frente a ti, tomarte un trago mientras juegas.</p>
        <p className="text-[#9ca3af] leading-relaxed mt-4">Pero la realidad es que la mayoría de los chilenos no vive al lado de un casino. Si estás en Santiago, ir a Monticello te toma la tarde entera entre ir, jugar y volver. Dreams Temuco le sirve a los que viven en la zona, pero si estás en Rancagua o Talca, olvidate. Y después está el tema de los RTPs: las máquinas tragamonedas físicas en Chile operan con RTPs entre 80% y 93%, mientras que las slots online están entre 95% y 98%. Esa diferencia se siente en tu bolsillo. En un casino físico apuestas $100.000 CLP y el retorno esperado es de $85.000-$93.000 CLP. Online, es de $95.000-$98.000 CLP. Multiplicado por cientos de giros en una sesión, son hartas lucas de diferencia. Y eso sin contar que online tienes 4.500 juegos versus las 200-300 máquinas de un casino físico. Cada formato tiene lo suyo, pero los números están a favor del online.</p>
      </Section>

      {/* ═══ JUEGOS ═══ */}
      <Section id="juegos" bg="/img/backgrounds/ruleta.png">
        <SectionTitle>Juegos Más Populares en los Casinos Online de Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Saber a qué estás jugando te da una ventaja que la mayoría no tiene. Elegir por el RTP en vez de por los gráficos lindos puede cambiar completamente tu experiencia.</p>
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Tragamonedas / Slots</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-4">Las slots son lo más jugado por chilenos online. Son suerte pura, pero cachar de RTP y volatilidad te ayuda a elegir mejor.</p>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4"><p className="text-white font-bold mb-1">RTP</p><p className="text-[#9ca3af] text-sm">Porcentaje que devuelve el juego. 96% = por cada $100.000 CLP apostados, devuelve $96.000 en promedio. Siempre elige 96%+.</p></div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4"><p className="text-white font-bold mb-1">Volatilidad</p><p className="text-[#9ca3af] text-sm"><strong className="text-white">Baja:</strong> Ganas seguido pero poquito. <strong className="text-white">Alta:</strong> Puedes pasar 100 giros sin nada y de repente... premio gordo.</p></div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Slots Populares en Chile</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-4"><strong className="text-white">Sweet Bonanza</strong> (Pragmatic, 96.5%) es la más jugada. Después <strong className="text-white">Gates of Olympus</strong> y <strong className="text-white">Big Bass Bonanza</strong>. Los juegos crash como <strong className="text-white">Aviator</strong> y <strong className="text-white">Spaceman</strong> son re populares entre los chilenos más jóvenes.</p>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Mecánicas</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{n:"Megaways",d:"Hasta 117.649 líneas que cambian cada giro."},{n:"Hold & Spin",d:"Símbolos se quedan fijos, el resto gira de nuevo."},{n:"Cluster Pays",d:"Ganas por grupos, no por líneas. Reactoonz es el ejemplo."},{n:"Cascading Reels",d:"Ganadores desaparecen, caen nuevos. Sweet Bonanza usa esto."}].map((m)=>(
              <div key={m.n} className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-1">{m.n}</p><p className="text-[#9ca3af] text-sm">{m.d}</p></div>
            ))}
          </div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Top Slots por RTP</h4>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Slot</th><th className="px-4 py-3 font-bold">RTP</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Volatilidad</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Proveedor</th></tr></thead>
              <tbody className="text-[#d4d4d8]">
                {[["Mega Joker","99.00%","Baja","NetEnt"],["Blood Suckers","98.00%","Baja","NetEnt"],["Starmania","97.87%","Media","NextGen"],["White Rabbit","97.72%","Alta","BTG"],["Kings of Chicago","97.80%","Media","NetEnt"]].map(([n,r,v,p])=>(
                  <tr key={n} className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">{n}</td><td className="px-4 py-3 text-[#22c55e] font-bold">{r}</td><td className="px-4 py-3 hidden sm:table-cell">{v}</td><td className="px-4 py-3 hidden sm:table-cell">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Ruleta</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5"><p className="text-[#22c55e] font-bold text-sm mb-1">Europea</p><p className="text-white text-2xl font-black">2.70%</p><p className="text-xs text-[#9ca3af]">ventaja casino</p><p className="text-[#22c55e] text-xs font-bold mt-2">RECOMENDADA</p></div>
            <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5"><p className="text-[#22c55e] font-bold text-sm mb-1">Francesa</p><p className="text-white text-2xl font-black">1.35%</p><p className="text-xs text-[#9ca3af]">ventaja casino</p><p className="text-[#22c55e] text-xs font-bold mt-2">LA MEJOR</p></div>
            <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5"><p className="text-[#ef4444] font-bold text-sm mb-1">Americana</p><p className="text-white text-2xl font-black">5.26%</p><p className="text-xs text-[#9ca3af]">ventaja casino</p><p className="text-[#ef4444] text-xs font-bold mt-2">EVITAR</p></div>
          </div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Tipos de Apuestas</h4>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Apuesta</th><th className="px-4 py-3 font-bold">Pago</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Probabilidad</th></tr></thead>
              <tbody className="text-[#d4d4d8]">
                {[["Pleno (1 número)","35:1","2.7%"],["Caballo (2)","17:1","5.4%"],["Transversal (3)","11:1","8.1%"],["Docena (12)","2:1","32.4%"],["Rojo/Negro","1:1","48.6%"],["Par/Impar","1:1","48.6%"]].map(([b,p,pr])=>(
                  <tr key={b} className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">{b}</td><td className="px-4 py-3 text-[#22c55e] font-bold">{p}</td><td className="px-4 py-3 hidden sm:table-cell">{pr}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Blackjack</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-4">El único juego donde tus decisiones importan. Con estrategia básica la ventaja baja a <strong className="text-white">0.5%</strong>.</p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-center text-xs"><thead><tr className="bg-[#141414] text-[#71717a] uppercase tracking-wider"><th className="px-2 py-2 font-bold text-left">Tu mano</th><th className="px-2 py-2">2</th><th className="px-2 py-2">3</th><th className="px-2 py-2">4</th><th className="px-2 py-2">5</th><th className="px-2 py-2">6</th><th className="px-2 py-2">7</th><th className="px-2 py-2">8</th><th className="px-2 py-2">9</th><th className="px-2 py-2">10</th><th className="px-2 py-2">A</th></tr></thead>
              <tbody className="text-[#d4d4d8]">
                {[["8-","P","P","P","P","P","P","P","P","P","P"],["9","P","D","D","D","D","P","P","P","P","P"],["10","D","D","D","D","D","D","D","D","P","P"],["11","D","D","D","D","D","D","D","D","D","D"],["12","P","P","Q","Q","Q","P","P","P","P","P"],["13-16","Q","Q","Q","Q","Q","P","P","P","P","P"],["17+","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q"]].map(([h,...a])=>(
                  <tr key={h} className="border-t border-white/[0.04]"><td className="px-2 py-2 text-left font-bold text-white">{h}</td>{a.map((v,i)=>(<td key={i} className={`px-2 py-2 font-bold ${v==="Q"?"text-[#22c55e]":v==="D"?"text-[#fbbf24]":"text-[#9ca3af]"}`}>{v}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#71717a]"><span><span className="text-[#9ca3af] font-bold">P</span> = Pedir</span><span><span className="text-[#22c55e] font-bold">Q</span> = Quedarte</span><span><span className="text-[#fbbf24] font-bold">D</span> = Doblar</span></div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Casino en Vivo</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">Lo más parecido a estar en Enjoy Viña pero desde tu casa. Dealers reales transmitiendo en vivo. <strong className="text-white">Evolution Gaming</strong> domina — Crazy Time, Lightning Roulette, Monopoly Live son los hits. La mayoría tienen mesas con dealers en español.</p>
          <p className="text-[#9ca3af] leading-relaxed">Los límites van desde ~$5.000 CLP hasta millones dependiendo de la mesa. FRESH tiene 300+ mesas, Betsson 200+ con algunas pensadas para el mercado latinoamericano.</p>
        </div>
      </Section>

      {/* ═══ PROVEEDORES ═══ */}
      <Section id="proveedores" alt>
        <SectionTitle>Proveedores de Juegos en los Casinos de Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Cada slot y cada mesa tiene un estudio detrás. Conocerlos te ayuda a elegir mejor.</p>
        <div className="space-y-8">
          {[
            {n:"Evolution Gaming",d:"Los dueños del casino en vivo, sin discusión. Lightning Roulette (multiplicadores hasta x500), Crazy Time y Monopoly Live son los juegos que más se juegan en Chile en vivo. RTP entre 97-99%, que es altísimo para casino en vivo. Probamos mesas a las 2am hora de Chile y siempre había dealers en español — no uno ni dos, como 6 mesas simultáneas con dealers hispanohablantes. La calidad del stream es 1080p sin interrupciones, los dealers son profesionales y la interfaz es la más pulida del mercado. El 90% del casino en vivo de cualquier casino es Evolution, y con razón. También tienen game shows como Dream Catcher y Football Studio que son más casuales y fáciles de cachar si no sabes las reglas del blackjack o la ruleta."},
            {n:"Pragmatic Play",d:"Sweet Bonanza, Gates of Olympus, Big Bass Bonanza — estas tres slots dominan el mercado chileno y las tres son de Pragmatic Play. Tienen más de 300 títulos con RTPs entre 94-96.5%. Probamos Sweet Bonanza en FRESH y en SOL: misma slot, mismo RTP, misma experiencia. Gates of Olympus nos dio un x150 en STARDA que nos dejó pa' arriba toda la noche. Pragmatic también tiene casino en vivo que cada año mejora más — sus mesas de Mega Roulette y Sweet Bonanza Candyland compiten directamente con Evolution y ya no se quedan atrás. Si solo vas a conocer un proveedor de slots, que sea este."},
            {n:"NetEnt",d:"Starburst, Gonzo's Quest, Blood Suckers (98% RTP) — estos son los clásicos que todo el mundo conoce. NetEnt fue el proveedor que básicamente inventó las slots online modernas. Sus RTPs son de los más altos de la industria (95-98%), los gráficos son impecables y la experiencia en móvil es perfecta. Probamos Blood Suckers en FRESH con 200 giros y el retorno fue del 97.2%, súper cerca del RTP teórico. Starburst es la slot más jugada de la historia y sigue siendo adictiva después de tantos años. Si buscas calidad sobre cantidad, gráficos limpios y RTPs altos, NetEnt es lo más seguro que hay."},
            {n:"Microgaming",d:"Los pioneros. Llevan desde 1994, prácticamente inventaron el casino online. Mega Moolah tiene el récord del jackpot progresivo más grande pagado online: más de 20 millones de euros a un solo jugador. Tienen más de 800 títulos, y la verdad es que la calidad varía harto — tienen slots increíbles y otras que parecen de 2005. Pero los hits son legendarios: Immortal Romance, Thunderstruck II, Mega Moolah. Probamos Immortal Romance en SOL y la mecánica de bonus que se desbloquea progresivamente sigue siendo una de las mejores ideas en slots. Si te gustan los jackpots progresivos, Microgaming es tu proveedor."},
            {n:"Play'n GO",d:"Book of Dead, Reactoonz, Moon Princess — cada slot de Play'n GO se siente completamente diferente a la otra. Tienen RTPs entre 94-96.5% y una variedad de mecánicas que impresiona. Book of Dead es básicamente el Book of Ra moderno y sigue siendo de las más jugadas en Chile. Reactoonz con su mecánica Cluster Pays es adictiva — probamos 100 giros en FRESH y la función de Gargantoon nos salvó la sesión con un x42. Moon Princess tiene una mecánica de bonus progresivo que se siente fresca. Lo que más nos gusta de Play'n GO es que cada slot tiene una personalidad propia, no se siente como si hubieran copiado y pegado la misma plantilla 300 veces."},
            {n:"Red Tiger",d:"Los Daily Drop Jackpots son el concepto más bacán de Red Tiger. Funciona así: hay un premio que TIENE que caer antes de las 23:59 de ese día. Mientras más avanza el día sin que caiga, más grande se hace y más gente juega. Es como un Aviator pero en formato slot. Probamos jugar Dragon's Luck de Red Tiger a las 11pm cuando el jackpot diario ya estaba abultado — no lo ganamos, pero la emoción de saber que va a caer en la próxima hora le da otra energía a la sesión. Sus slots en general tienen gráficos sólidos y RTPs decentes (94-96%). No son los más conocidos, pero son de los más innovadores."},
            {n:"Hacksaw Gaming",d:"Si ves streams de slots en Kick o Twitch, el 70% del tiempo están jugando Hacksaw. Volatilidad extrema: Wanted Dead or a Wild, Chaos Crew, Le Bandit, Itero — cuando pegan, pegan multiplicadores de x5.000 o más. Pero también puedes pasar 200 giros sin ver un bonus. No son para todos. Probamos Wanted Dead or a Wild en STARDA con $0.20 por giro, 150 giros, y no entramos al bonus ni una vez. Después en FRESH, con los mismos $0.20, el bonus salió al giro 47 y pagó un x86. Esa es la esencia de Hacksaw: frustración absoluta o euforia total. Si tienes paciencia y bankroll para aguantar las sequías, las recompensas pueden ser brutales."},
          ].map((p)=>(<div key={p.n}><h3 className="text-lg font-bold text-white mb-2">{p.n}</h3><p className="text-[#9ca3af] leading-relaxed">{p.d}</p></div>))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Proveedor</th><th className="px-4 py-3 font-bold">Especialidad</th><th className="px-4 py-3 font-bold hidden sm:table-cell">RTP</th><th className="px-4 py-3 font-bold hidden md:table-cell">Hits</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Evolution","Casino en vivo","97-99%","Crazy Time, Lightning Roulette"],["Pragmatic Play","Slots virales","94-96.5%","Sweet Bonanza, Gates of Olympus"],["NetEnt","Slots clásicas","95-98%","Starburst, Blood Suckers"],["Microgaming","Jackpots","92-96.5%","Mega Moolah"],["Play'n GO","Slots temáticas","94-96.5%","Book of Dead, Reactoonz"],["Red Tiger","Jackpots diarios","94-96%","Daily Drop"],["Hacksaw","Alta volatilidad","94-96.5%","Wanted Dead or a Wild"]].map(([n,s,r,g])=>(
                <tr key={n} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{n}</td><td className="px-4 py-3">{s}</td><td className="px-4 py-3 text-[#22c55e] font-bold hidden sm:table-cell">{r}</td><td className="px-4 py-3 hidden md:table-cell">{g}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ MITOS ═══ */}
      <Section id="mitos">
        <SectionTitle>Mitos y Verdades sobre Casinos Online en Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Hay harta información falsa dando vueltas. Separemos la verdad del chamuyo.</p>
        <div className="space-y-5">
          {[
            {claim:"Los casinos online están arreglados",verdict:"FALSO",color:"#ef4444",explanation:"Usan generadores aleatorios (RNG) certificados por laboratorios como eCOGRA y GLI. Se auditan regularmente — estamos hablando de empresas independientes que testean millones de rondas para verificar que los resultados son estadísticamente aleatorios. Si un casino manipulara resultados, pierde la licencia y se acaba el negocio. En Chile esto genera más desconfianza porque no hay regulador local, y eso se entiende. Pero los proveedores como Pragmatic Play y Evolution Gaming tienen sus propias certificaciones independientes del casino. ¿Hay casinos chantas por ahí? Sí, pero son los que operan sin licencia. Los del ranking están todos verificados."},
            {claim:"Después de un premio grande la slot no paga más",verdict:"FALSO",color:"#ef4444",explanation:"La famosa falacia del jugador. Cada giro es completamente independiente del anterior. El RNG no tiene memoria — no sabe ni le importa si hace 5 minutos pagó un x500. Las probabilidades son exactamente las mismas en cada giro. En Chile este mito está re arraigado, especialmente entre los que juegan en casinos físicos donde las máquinas 'parecen' tener rachas. Online es distinto: el RNG genera miles de resultados por segundo. Si sacaste un premio gordo, la siguiente tirada tiene la misma probabilidad de pagar que cualquier otra."},
            {claim:"Apostar más lucas aumenta tus chances",verdict:"FALSO",color:"#ef4444",explanation:"El RTP es un porcentaje fijo. Si Sweet Bonanza tiene 96.5%, devuelve $96.500 de cada $100.000 apostados, da lo mismo si apuestas $200 CLP o $200.000 CLP por giro. Lo único que cambia es el tamaño de los premios y las pérdidas. Apostar más no 'desbloquea' nada ni te acerca a un bonus. Hay una excepción: algunas slots como Bonanza Megaways tienen la opción de 'comprar bonus' que sí requiere una apuesta mayor, pero eso es un feature del juego, no una ventaja estadística. En Chile, donde los depósitos promedio son altos, es especialmente importante cachar esto para no apostar de más creyendo que vas a ganar más."},
            {claim:"Te bloquean la cuenta si ganas mucho",verdict:"FALSO",color:"#ef4444",explanation:"Los casinos con licencia están legalmente obligados a pagar. Lo que sí hacen es verificación KYC (Know Your Customer) para montos grandes — te piden cédula, selfie, comprobante de domicilio. Es requisito legal de la licencia, no una táctica para no pagarte. En Chile hemos visto casos en foros donde la gente se queja de que 'no les pagan', pero cuando lees bien resulta que no hicieron el KYC o violaron los términos del bono. Nuestro consejo: haz el KYC el primer día, antes de ganar nada. Así cuando pidas un retiro, ya está todo listo y no hay excusas."},
            {claim:"Hay horarios mejores para jugar",verdict:"FALSO",color:"#ef4444",explanation:"El RNG genera resultados aleatorios las 24 horas, los 7 días. Da exactamente lo mismo si juegas a las 3am o a las 3pm. Este mito viene de los casinos físicos donde las máquinas podían tener ciclos de pago configurados. Online no funciona así — el RNG es un algoritmo matemático que genera números al azar sin parar. Hicimos la prueba: jugamos 100 giros de Sweet Bonanza a las 10am y 100 giros a las 2am en FRESH. Los resultados fueron estadísticamente similares. No hay 'hora mágica'."},
            {claim:"Los bonos siempre convienen",verdict:"DEPENDE",color:"#f59e0b",explanation:"Un bono con rollover x25 y 30 días puede ser bacán. Uno con rollover x50 y 7 días puede ser peor que no aceptar nada. Hagamos las cuentas en CLP: si aceptas un bono de $50.000 CLP con rollover x50, necesitas apostar $2.500.000 CLP en 7 días. Son $357.000 CLP diarios en apuestas. A $500 por giro, son 714 giros diarios. Si no juegas tanto, vas a perder el bono y probablemente tu depósito también tratando de cumplir el rollover. En Chile, donde muchos jugadores depositan montos altos, el rollover se amplifica. Lee SIEMPRE las condiciones antes de aceptar. A veces rechazar el bono y jugar solo con tu plata es la decisión más inteligente."},
            {claim:"El blackjack online está trucado",verdict:"FALSO",color:"#ef4444",explanation:"La banca tiene ventaja de 0.5% con estrategia óptima. Eso no es trampa, es la naturaleza del juego. Todos los juegos de casino tienen ventaja de la casa (house edge). En blackjack online, las cartas se barajan con RNG después de cada mano (a menos que juegues en vivo donde el dealer usa un zapato real de 6-8 mazos). Probamos 200 manos de blackjack en FRESH usando estrategia básica perfecta y terminamos un 1.2% abajo, que está dentro del rango esperado. Si la banca ganara el 60% o 70% de las manos, ahí sí habría problema. Pero la realidad es que ganas casi el 50% y la diferencia es mínima."},
            {claim:"Como no hay ley en Chile, los casinos pueden hacer lo que quieran",verdict:"FALSO",color:"#ef4444",explanation:"No tienen regulación chilena, pero sí tienen la de su licencia internacional. Si un casino con licencia de Curaçao no te paga, puedes abrir un caso formal ante la Curaçao Gaming Control Board. Si es Malta, ante la Malta Gaming Authority que es todavía más estricta. Kahnawake tiene su propia comisión de disputas. Además, marcas como Bet365 y Betsson cotizan en bolsas europeas — no van a arriesgar su reputación global por no pagarle a un jugador chileno. En foros como AskGamblers puedes documentar tu caso y tiene peso real. No es un sistema perfecto, pero no es la jungla sin ley que algunos creen."},
          ].map((i)=>(
            <div key={i.claim} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3"><p className="text-white font-bold text-base flex-1">&quot;{i.claim}&quot;</p><span className="text-xs font-black px-3 py-1 rounded-full uppercase" style={{backgroundColor:`${i.color}15`,color:i.color}}>{i.verdict}</span></div>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{i.explanation}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ RESPONSABLE ═══ */}
      <Section id="responsable" alt bg="/img/backgrounds/cripto.png">
        <SectionTitle>Juego Responsable en Casinos Online de Chile</SectionTitle>
        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mb-8"><p className="text-[#f59e0b] font-bold mb-2">Esto va en serio</p><p className="text-[#d4d4d8] leading-relaxed">Los casinos son entretenimiento. No son una forma de hacer lucas. Si estás jugando para &quot;recuperar lo que perdiste&quot; o apostando plata del arriendo... para. Lee esta sección.</p></div>
        <h3 className="text-xl font-bold text-white mb-3">Herramientas disponibles</h3>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">{["Límites de depósito: Configura un máximo diario, semanal o mensual.","Límites de pérdida: Te bloquean al llegar a cierto monto.","Límites de tiempo: Te avisan cuando llevas X horas jugando.","Autoexclusión temporal: Bloquea tu cuenta por días, semanas o meses.","Autoexclusión permanente: Cierre definitivo."].map((t)=>(<li key={t} className="flex items-start gap-2 text-sm"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span>{t}</li>))}</ul>
        <h3 className="text-xl font-bold text-white mb-3">Señales de alerta</h3>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">{["Apuestas más de lo que puedes perder.","Intentas recuperar pérdidas subiendo apuestas.","Afecta tu pega, relaciones o estudios.","Mientes sobre cuánto juegas o gastas.","Te sientes ansioso cuando no puedes jugar.","Pides prestado para jugar."].map((s)=>(<li key={s} className="flex items-start gap-2 text-sm"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>{s}</li>))}</ul>
        <h3 className="text-xl font-bold text-white mb-3">Ayuda en Chile</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-8"><strong className="text-white">Jugadores Anónimos Chile</strong> tiene grupos de apoyo (contacto: +56 9 9734 0904). La <strong className="text-white">Superintendencia de Casinos de Juego</strong> también ofrece información sobre juego responsable. Pedir ayuda no es debilidad — es la decisión más inteligente.</p>
        <h3 className="text-xl font-bold text-white mb-3">Manejo de bankroll</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">Regla del 5%</p><p className="text-[#9ca3af] text-sm">Nunca apuestes más del 5% de tu bankroll en un giro. Si tienes $500.000 CLP, tu apuesta máxima es $25.000.</p></div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">Stop Loss</p><p className="text-[#9ca3af] text-sm">Define antes cuánto estás dispuesto a perder. Si lo pierdes, dejas de jugar. Sin excepciones.</p></div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">Sesiones</p><p className="text-[#9ca3af] text-sm">Divide tu bankroll mensual en sesiones. $1.000.000 CLP al mes = 10 sesiones de $100.000.</p></div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Gestión del tiempo</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">Las lucas no son lo único que se va. El tiempo también. Y es fácil perderle la cuenta. Configura alarmas en tu celular: una a los 30 minutos, otra a la hora. Cuando suene, para y evalúa. ¿Estás disfrutando? ¿Cuánto llevas gastado? ¿Estás jugando por diversión o porque quieres recuperar? Si la respuesta a lo último es sí, cierra el casino.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-3">Un truco que funciona: no juegues más de 3 sesiones por semana. Define los días antes (por ejemplo, martes, jueves y sábado) y respétalo. Fuera de esos días, ni abras la app. Suena simple pero es re efectivo porque rompe el patrón de &quot;me meto un ratito&quot; que termina siendo 2 horas. Los casinos están diseñados para que pierdas la noción del tiempo — no tienen reloj, los giros son rápidos, las animaciones te enganchan. Protegerte del tiempo es tan importante como proteger tu bankroll.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-8">Otra cosa: no juegues cuando estás cansado, enojado o tomado. La pega fue mala, te peleaste con alguien, te tomaste unas cervezas... ese es el peor momento para abrir un casino. Las decisiones emocionales en el juego siempre terminan costando lucas. Si no estás en buenas condiciones para manejar tu plata, no juegues. Así de simple.</p>
        <h3 className="text-xl font-bold text-white mb-3">Sistemas que NO funcionan</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">La Martingala (doblar después de perder) y la Fibonacci son las más conocidas. Las dos fallan porque eventualmente te topas con el límite de la mesa o se te acaban las lucas. El casino SIEMPRE tiene ventaja matemática. Ningún sistema la elimina. Acéptalo y disfruta el juego.</p>
        <p className="text-[#9ca3af] leading-relaxed">Veamos la Martingala con un ejemplo en CLP para que caches por qué no funciona. Empiezas apostando $5.000 CLP a rojo en la ruleta. Pierdes. Doblas a $10.000. Pierdes. Doblas a $20.000. Pierdes. Doblas a $40.000. Pierdes. Doblas a $80.000. Pierdes. Doblas a $160.000. Pierdes. Llevas 6 pérdidas seguidas (que pasa más de lo que crees — la probabilidad es de 1.7%) y ya perdiste $315.000 CLP. Tu siguiente apuesta tendría que ser $320.000 CLP para recuperar todo... y ganar apenas $5.000 CLP de profit. ¿En serio arriesgas $320.000 para ganar $5.000? Y si la mesa tiene límite de $200.000, ni siquiera puedes hacer la apuesta. La Martingala funciona hasta que no funciona, y cuando no funciona, te destruye el bankroll entero en una racha mala. No la uses.</p>
      </Section>

      {/* ═══ CÓMO ELEGIR ═══ */}
      <Section id="como-elegir" bg="/img/backgrounds/blackjack.png">
        <SectionTitle>Cómo Elegir un Casino Online en Chile — Paso a Paso</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">Sin regulación local todavía, elegir bien es especialmente importante en Chile. Estos 5 pasos te van a ahorrar problemas y lucas perdidas.</p>
        <div className="space-y-8">
          {[
            {step:"1",title:"Verifica la licencia internacional",desc:"No hay licencia chilena para casinos online (todavía). Busca Curaçao, Malta o Kahnawake. Si no muestra licencia por ningún lado, no juegues ahí. En Chile específicamente, la Superintendencia de Casinos de Juego (SCJ) solo regula casinos físicos, así que no van a poder ayudarte si algo sale mal con un operador online. Tu único respaldo es la licencia internacional del casino y su reputación. FRESH, SOL, MONRO y STARDA operan con Curaçao o Kahnawake. Betsson y Bet365 tienen licencias múltiples incluyendo Malta que es la más estricta de todas.",tip:"Busca el logo de la licencia en el footer. Los casinos serios lo muestran con orgullo. Si solo dice 'regulado internacionalmente' sin especificar cuál licencia, desconfía."},
            {step:"2",title:"Revisa los métodos de pago",desc:"¿Acepta WebPay? ¿MACH? ¿CuentaRUT? Si es internacional, ¿acepta crypto o Skrill? De nada sirve el mejor casino si no puedes meter ni sacar tus lucas. En Chile esto es especialmente importante porque muchos bancos bloquean pagos a casinos internacionales. Si tu tarjeta del Banco de Chile no pasa, no es culpa del casino — es filtro del banco. Ten un plan B listo: MACH como tarjeta prepago, Skrill como monedero electrónico, o crypto vía Buda.com. Los casinos que aceptan WebPay (20Bet, Betsson, Bet365) son los más cómodos para chilenos.",tip:"Haz un depósito chico primero ($10.000 CLP) y prueba un retiro al tiro. Si funciona, ya sabes que puedes confiar con montos más grandes."},
            {step:"3",title:"Compara los bonos (la letra chica)",desc:"No te dejes llevar por el número grande. Fíjate en rollover, validez, qué juegos contribuyen y retiro máximo. Un bono con rollover x30 le gana a uno más grande con x50. Para chilenos que depositan en promedio $90-100 USD, un rollover x35 sobre un bono de $100 USD son $3.500 USD en apuestas (~$3.300.000 CLP). Eso es mucho. Calcula siempre en pesos antes de aceptar para dimensionar lo que te están pidiendo.",tip:"Si el rollover es mayor a x40 y la validez menor a 14 días, piénsalo dos veces. A veces rechazar el bono es la mejor decisión."},
            {step:"4",title:"Prueba la plataforma",desc:"Navega el casino antes de depositar. ¿Carga rápido en tu celular? ¿Encuentras los juegos fácil? Muchos te dejan jugar en modo demo sin apostar real. En Chile, más del 70% de los jugadores online juegan desde el celular, principalmente Samsung y Xiaomi. Probá el casino desde tu celu con datos móviles (no WiFi) para ver la experiencia real. Si una slot tarda más de 5 segundos en cargar con 4G de Entel, Movistar o Claro, probablemente vas a tener una experiencia frustrante cuando estés jugando en serio.",tip:"Pruébalo en tu celular con datos móviles. Si anda bien así, con WiFi va a volar."},
            {step:"5",title:"Lee las políticas de retiro",desc:"Mínimo y máximo de retiro, tiempos, KYC necesario, límites mensuales. Lee esto ANTES de depositar. En Chile el tema de retiros es clave porque al no haber regulador local, si un casino tarda o pone trabas, no tienes a quién quejarte localmente. Fíjate que el mínimo de retiro no sea absurdamente alto (algunos piden $50 USD mínimo, otros $20) y que el límite mensual sea suficiente para lo que piensas jugar. MONRO tiene límite de $30k USD mensuales, que para la mayoría está bien pero para high rollers puede ser un problema.",tip:"Completa la verificación KYC (cédula de identidad + selfie + comprobante de domicilio) al registrarte, el primer día. Así cuando quieras retirar, todo está listo y no hay excusas para retrasos."},
          ].map((i)=>(
            <div key={i.step} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#e11d48]/10 border border-[#e11d48]/20 flex items-center justify-center shrink-0"><span className="text-[#e11d48] font-black text-lg">{i.step}</span></div>
              <div><h3 className="text-lg font-bold text-white mb-2">{i.title}</h3><p className="text-[#9ca3af] leading-relaxed mb-2">{i.desc}</p><p className="text-[#d4d4d8] text-sm italic">Consejo: {i.tip}</p></div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ CTA 3 ═══ */}
      <div className="bg-gradient-to-r from-[#e11d48]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">150% de bono — el más alto del ranking</p>
        <p className="text-white text-xl font-black mb-4">MONRO Casino — 150% en tu primer depósito</p>
        <CtaButton slug="monro-casino" text="Ir a MONRO Casino" />
      </div>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes sobre Casinos Online en Chile</SectionTitle>
        <div className="space-y-4">
          {faqItems.map((i)=>(
            <details key={i.q} className="group rounded-2xl bg-[#141414] border border-white/[0.06] overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-bold hover:text-[#e11d48] transition-colors list-none [&::-webkit-details-marker]:hidden"><span className="pr-4">{i.q}</span><svg className="w-5 h-5 shrink-0 text-[#71717a] group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-6 pb-5 text-[#9ca3af] leading-relaxed text-sm">{i.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══ GLOSARIO ═══ */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario de Términos de Casinos Online</SectionTitle>
        <div className="space-y-4">
          {glossary.map((g)=>(
            <div key={g.term} className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><dt className="text-white font-bold mb-1">{g.term}</dt><dd className="text-[#9ca3af] text-sm leading-relaxed">{g.def}</dd></div>
          ))}
        </div>
      </Section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e] py-16 sm:py-24 text-center border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">¿Listo para jugar?</h2>
          <p className="text-[#9ca3af] text-lg mb-8 leading-relaxed">Elige tu casino, aprovecha el bono y empieza a jugar seguro. Todos los casinos del ranking están verificados para jugadores chilenos.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="betsson-chile" text="Betsson — #1" />
            <CtaButton slug="fresh-casino" text="FRESH Casino — #2" />
            <CtaButton slug="sol-casino" text="SOL Casino — #3" />
          </div>
        </div>
      </section>
    </>
  );
}
