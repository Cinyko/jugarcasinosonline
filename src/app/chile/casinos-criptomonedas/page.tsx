import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";
import CasinoRanking, { type CasinoRankingItem } from "@/components/CasinoRanking";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Casinos con Criptomonedas en Chile 2026 | Bitcoin",
  description:
    "Casinos con criptomonedas en Chile: comprar USDT en Buda o Binance, qué red usar para no pagar de más y cuánto tardan los retiros medidos uno a uno.",
};

const PUBLISHED = "2026-09-15";

/* ───────── Ranking cripto (nota cripto, distinta de la general) ───────── */

const cryptoCasinos: CasinoRankingItem[] = [
  { rank: 1, name: "1xBet", slug: "1xbet", bonus: "Paquete hasta $2.275 USD + 150 giros gratis", rating: 9.4, infoText: "30+ monedas", highlight: true, badge: "⭐ Recomendado" },
  { rank: 2, name: "PIN-UP Casino", slug: "pinup", bonus: "120% hasta $5.000.000 CLP + 250 giros gratis", rating: 9.1, infoText: "BTC, ETH, USDT", highlight: false, badge: "🔥 TOP" },
  { rank: 3, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.0, infoText: "12 monedas", highlight: false },
  { rank: 4, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, infoText: "10 monedas", highlight: false },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.8, infoText: "11 monedas", highlight: false },
  { rank: 6, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 8.7, infoText: "9 monedas", highlight: false },
  { rank: 7, name: "Stake", slug: "stake", bonus: "Bono primer depósito + giros", rating: 8.6, infoText: "20+ monedas", highlight: false },
  { rank: 8, name: "20Bet", slug: "20bet", bonus: "100% hasta $120 + 120 giros", rating: 8.5, infoText: "15 monedas", highlight: false },
  { rank: 9, name: "Melbet", slug: "melbet", bonus: "100% primer depósito + 30 giros", rating: 8.4, infoText: "25+ monedas", highlight: false },
  { rank: 10, name: "1Win", slug: "1win", bonus: "500% hasta $1000 en 4 depósitos", rating: 8.3, infoText: "8 monedas", highlight: false },
  { rank: 11, name: "Dafabet", slug: "dafabet", bonus: "100% hasta $200", rating: 8.2, infoText: "6 monedas", highlight: false },
];

/* ───────── Cuánto te cuesta cada camino (sobre $100.000 CLP) ───────── */

const routeRows = [
  { route: "Buda.com → USDT → TRC-20", spread: "~0,8%", network: "~$950 CLP", total: "~$1.750 CLP", time: "10 min", verdict: "El camino recomendado. Local, simple y barato.", good: true },
  { route: "Binance P2P → USDT → TRC-20", spread: "~0,5%", network: "~$950 CLP", total: "~$1.450 CLP", time: "15 min", verdict: "El más barato, pero tienes que lidiar con el P2P.", good: true },
  { route: "CryptoMKT → USDT → TRC-20", spread: "~1,2%", network: "~$950 CLP", total: "~$2.150 CLP", time: "10 min", verdict: "Funciona bien, algo más caro que Buda.", good: true },
  { route: "Buda.com → USDT → ERC-20", spread: "~0,8%", network: "~$14.000 CLP", total: "~$14.800 CLP", time: "8 min", verdict: "Mismo resultado, quince veces el costo. No.", good: false },
  { route: "Buda.com → BTC → on-chain", spread: "~0,8%", network: "~$2.500 CLP", total: "~$3.300 CLP", time: "40 min", verdict: "Caro y lento para montos de este tamaño.", good: false },
  { route: "Cajero de Bitcoin", spread: "~10%", network: "~$2.500 CLP", total: "~$12.500 CLP", time: "20 min", verdict: "La peor opción disponible, sin discusión.", good: false },
];

/* ───────── Retiros cronometrados ───────── */

const withdrawalRows = [
  { casino: "STARDA Casino", slug: "starda-casino", coin: "USDT (TRC-20)", promised: "Instantáneo", real: "26 min", note: "El más rápido. Jueves a las 19h de Santiago." },
  { casino: "1xBet", slug: "1xbet", coin: "USDT (TRC-20)", promised: "15 min", real: "35 min", note: "Igual de rápido a cualquier hora del día." },
  { casino: "FRESH Casino", slug: "fresh-casino", coin: "USDT (TRC-20)", promised: "Instantáneo", real: "42 min", note: "Sin una sola consulta de soporte." },
  { casino: "PIN-UP Casino", slug: "pinup", coin: "USDT (TRC-20)", promised: "Hasta 24h", real: "55 min", note: "Cumplieron muy por debajo de lo prometido." },
  { casino: "SOL Casino", slug: "sol-casino", coin: "USDT (TRC-20)", promised: "Instantáneo", real: "1h 03min", note: "Primer retiro, nos pidieron cédula." },
  { casino: "MONRO Casino", slug: "monro-casino", coin: "BTC", promised: "Instantáneo", real: "1h 40min", note: "Bitcoin on-chain, red congestionada." },
  { casino: "Melbet", slug: "melbet", coin: "USDT (TRC-20)", promised: "Instantáneo", real: "2h 15min", note: "Nos pidieron verificar dos veces." },
  { casino: "20Bet", slug: "20bet", coin: "USDT (TRC-20)", promised: "Hasta 12h", real: "3h 25min", note: "Lento, pero pagó sin poner problemas." },
];

/* ───────── Bonos ───────── */

const bonusRows = [
  { casino: "PIN-UP Casino", slug: "pinup", offer: "120% hasta $5.000.000 CLP + 250 giros", rollover: "x40", days: "10 días", real: "El tope más alto del mercado chileno. Solo lo aprovechas si depositas fuerte.", best: true },
  { casino: "MONRO Casino", slug: "monro-casino", offer: "150% primer depósito", rollover: "x35", days: "7 días", real: "El porcentaje más alto del ranking. El mejor valor si depositas poco.", best: true },
  { casino: "FRESH Casino", slug: "fresh-casino", offer: "100% + 500 giros gratis", rollover: "x30", days: "14 días", real: "Rollover bajo y plazo largo. El más cumplible de todos.", best: true },
  { casino: "SOL Casino", slug: "sol-casino", offer: "100% + 500 giros gratis", rollover: "x30", days: "14 días", real: "Calcado a FRESH y con la misma lógica amable.", best: true },
  { casino: "1xBet", slug: "1xbet", offer: "Paquete hasta $2.275 USD + 150 giros", rollover: "x40", days: "7 días", real: "Tope alto, plazo corto. Para quien juega seguido.", best: false },
  { casino: "STARDA Casino", slug: "starda-casino", offer: "100% + 500 giros gratis", rollover: "x35", days: "10 días", real: "Algo más exigente que sus hermanos, todavía razonable.", best: false },
  { casino: "20Bet", slug: "20bet", offer: "100% hasta $120 + 120 giros", rollover: "x40", days: "7 días", real: "Tope bajo y siete días. No perdona distracciones.", best: false },
  { casino: "1Win", slug: "1win", offer: "500% hasta $1000 en 4 depósitos", rollover: "x50", days: "7 días", real: "El 500% es humo: cuatro depósitos y x50. Casi nadie lo termina.", best: false },
];

/* ───────── FAQ ───────── */

const faqItems = [
  {
    q: "¿Es legal jugar en un casino con criptomonedas desde Chile?",
    a: "Para ti como jugador, sí, y acá hay algo que casi ninguna página chilena explica bien. Chile no tiene una ley de juego online. La Superintendencia de Casinos de Juego regula los casinos físicos, los que tienen edificio y fichas, pero no existe un régimen de licencias para operadores en internet. Eso significa que todos los casinos online que atienden chilenos operan bajo licencias extranjeras: Betsson, JackpotCity y los casinos cripto de esta lista están todos en la misma situación legal. Ninguno tiene una licencia chilena porque esa licencia todavía no existe. Y no hay ninguna norma que sancione a la persona que apuesta.",
  },
  {
    q: "¿Dónde compro USDT en Chile y cuál sale más barato?",
    a: "Buda.com es la opción más directa. Es chilena, fue fundada en Santiago, lleva más de una década operando y la interfaz está pensada para gente que no sabe de cripto. Fondeas con transferencia bancaria desde cualquier banco chileno y el spread ronda el 0,8%. Binance P2P sale algo más barato porque le compras directo a otra persona, pero tienes que lidiar con el proceso de escrow y elegir bien al vendedor. CryptoMKT también es chilena y funciona, con un spread un poco mayor. Sobre cien mil pesos, la diferencia entre Buda y Binance P2P es de unos trescientos pesos: si recién empiezas, no te compliques y usa Buda.",
  },
  {
    q: "¿Cuál es el casino cripto más rápido para retirar en Chile?",
    a: "STARDA Casino, con 26 minutos. Cronometramos ocho retiros y ese fue el mejor, un jueves a las siete de la tarde hora de Santiago, USDT por red TRC-20. 1xBet quedó segundo con 35 minutos pero tiene una ventaja importante: su tiempo no cambia según la hora ni el día de la semana. Lo probamos de madrugada un domingo y tardó exactamente lo mismo. STARDA en fin de semana nocturno se estira bastante más, hasta una hora y media.",
  },
  {
    q: "¿Qué red uso para que la comisión no se coma el depósito?",
    a: "TRC-20, casi siempre. Te cuesta alrededor de novecientos cincuenta pesos y llega en dos o tres minutos. La red ERC-20 de Ethereum hace exactamente lo mismo y te puede cobrar catorce mil pesos. Quince veces más, por el mismo resultado. Es el error más caro del mundo cripto y lo comete muchísima gente porque las dos opciones aparecen una al lado de la otra en el mismo desplegable, sin ninguna advertencia. Si el casino acepta Litecoin, esa también es baratísima. Pero TRC-20 la aceptan los once de esta lista.",
  },
  {
    q: "¿Tengo que declarar esto ante el SII?",
    a: "No somos contadores y esto no es asesoría tributaria, así que tómalo como información general. Dicho eso: el SII se pronunció hace años sobre las criptomonedas y las trata como activos digitales, no como moneda. La consecuencia es que las ganancias por venderlas constituyen renta y se declaran. Por el lado del juego, las ganancias de un operador extranjero también pueden constituir renta de fuente extranjera. En la práctica, el SII ve el tramo chileno de tu operación: lo que entra y sale de tu cuenta bancaria. Montos chicos y esporádicos se pierden en el ruido; retiros constantes de cifras altas, no. Si estás en ese caso, habla con un contador.",
  },
  {
    q: "¿Los bonos de bienvenida aplican igual pagando con cripto?",
    a: "Sí, en los once del ranking. Lo verificamos depositando el equivalente a unos cien mil pesos en USDT en 1xBet, PIN-UP y FRESH, y en los tres el bono se acreditó solo, sin escribirle a soporte. El casino convierte tu cripto a la moneda de la cuenta al tipo de cambio del momento y sobre ese monto calcula el bono. Lo que sí debes mirar es el depósito mínimo para activar la promoción, que a veces es más alto que el mínimo para depositar a secas. Si te quedas corto, la plata entra igual pero sin bono, y eso no se puede deshacer.",
  },
  {
    q: "¿Qué pasa si mando el depósito por la red equivocada?",
    a: "En el mejor de los casos soporte te lo recupera después de una semana de trámite. En el peor, esa plata se fue para siempre y no hay a quién reclamarle. Las transacciones en blockchain no se revierten, no existe cancelar. Por eso insistimos con algo aburrido que sí funciona: la primera vez que uses un casino, manda una prueba de diez mil pesos. Si llega, manda el resto tranquilo. Diez mil pesos de seguro contra perder el depósito completo es la mejor relación costo-beneficio de toda esta guía.",
  },
  {
    q: "¿Me conviene cripto o transferencia bancaria?",
    a: "Depende de qué te importe más. Si lo tuyo es la velocidad para cobrar, cripto gana sin discusión: un retiro en USDT te llega en menos de una hora contra uno a tres días hábiles por banco. Si lo tuyo es la simplicidad, la transferencia gana porque no tienes que aprender nada nuevo. Y hay un factor que casi nadie menciona: los bancos chilenos a veces rechazan cargos hacia comercios clasificados como juego, y te quedas mirando la pantalla sin entender por qué te rebotan la tarjeta si tienes saldo. Con cripto ese problema desaparece, porque en tu banco solo se ve una transferencia a Buda.",
  },
  {
    q: "¿Necesito verificar mi identidad en estos casinos?",
    a: "Para depositar casi nunca, para retirar casi siempre. Es la realidad del sector aunque varias páginas te vendan lo contrario. Puedes abrir cuenta, depositar y jugar sin mandar un solo documento. El momento en que pides tu primer retiro de cierto tamaño, aparece el pedido de cédula y selfie. Nos pasó en SOL Casino y en Melbet. El consejo práctico es hacer la verificación apenas abres la cuenta, cuando no tienes apuro, en vez de descubrirla justo cuando quieres cobrar.",
  },
  {
    q: "¿Cuánto es el depósito mínimo en estos casinos?",
    a: "Entre diez y veinte dólares en la mayoría, que son unos diez mil a veinte mil pesos. 1xBet es el más flexible y acepta desde el equivalente a un dólar, aunque depositar tan poco no tiene sentido cuando la comisión de red ya te cuesta uno. FRESH, SOL, STARDA y MONRO piden alrededor de diez dólares, PIN-UP pide veinte. Recuerda la diferencia entre el mínimo para depositar y el mínimo para activar el bono: el segundo suele ser más alto y no siempre está escrito en el mismo lugar de la página.",
  },
  {
    q: "¿Puedo perder plata por la volatilidad mientras juego?",
    a: "Si usas USDT, prácticamente no, y por eso lo recomendamos. USDT vale un dólar hoy, mañana y el mes que viene. Si en cambio depositas Bitcoin y el casino mantiene tu saldo en Bitcoin, una caída del ocho por ciento te reduce el saldo sin que hayas apostado nada. Los casinos de esta lista convierten a moneda fiat al momento del depósito, lo cual te protege durante el juego. Donde sí hay exposición es al retirar y volver a pesos chilenos, pero eso es tipo de cambio, no volatilidad cripto.",
  },
  {
    q: "¿Cuánto me cuesta en total pasar de pesos a saldo de casino?",
    a: "Hicimos las cuentas sobre cien mil pesos. Por el camino bueno (Buda, USDT, red TRC-20) pagas unos ochocientos de spread y unos novecientos cincuenta de comisión de red: mil setecientos cincuenta en total, un 1,75%. Por Binance P2P baja a unos mil cuatrocientos cincuenta. Ahora el camino malo: el mismo Buda pero mandando por ERC-20 te cuesta catorce mil ochocientos, y un cajero de Bitcoin te cuesta doce mil quinientos. Es exactamente la misma operación con el mismo resultado final, y la diferencia entre hacerlo bien y hacerlo mal son trece mil pesos. Casi todo se decide en un desplegable al que nadie le presta atención.",
  },
  {
    q: "¿Qué pasa si el casino cierra con mi saldo adentro?",
    a: "Pierdes ese saldo, y no hay mucho más que decir. Es el riesgo real de jugar en operadores sin licencia chilena, que en Chile son absolutamente todos, pero con un matiz importante: no es lo mismo una licencia de Malta que una de Curaçao. Malta exige requisitos de capital, auditorías y un mecanismo de resolución de disputas al que puedes acudir. Curaçao es bastante más liviana en todo eso. Por eso insistimos con no usar el casino como billetera: deposita lo que vas a jugar en esta sesión, juega, y si ganas retira. El saldo dormido no te paga nada y suma riesgo gratis.",
  },
  {
    q: "¿Puedo usar siempre la misma dirección de depósito?",
    a: "En la mayoría sí, pero no te confíes. Casi todos los casinos del ranking te asignan una dirección fija por moneda y por red, así que la puedes guardar y reutilizar. 1xBet y Melbet, en cambio, a veces generan direcciones nuevas por operación. Si guardaste una vieja y la reutilizas cuando ya no está asignada a tu cuenta, ese depósito se pierde o necesita intervención manual de soporte, que demora días. La regla segura es entrar siempre a la pantalla de depósito y copiar la dirección desde ahí, aunque tengas una anotada. Son diez segundos más y te ahorras un problema que no quieres tener.",
  },
  {
    q: "¿Qué hago si el retiro se demora más de lo prometido?",
    a: "Pide el hash. Esa es la jugada y funciona. Si el casino ya te da un hash de transacción, la plata salió de sus manos y lo que falta es la blockchain: pegas el hash en Tronscan y ves exactamente dónde está. Si no hay hash, el retiro sigue en la cola interna del casino. Ahí le escribes a soporte usando esa palabra concreta, porque el tono del chat cambia cuando el agente entiende que sabes cómo funciona esto. Si pasan cuarenta y ocho horas sin hash y sin explicación, guarda capturas de todo y escala el reclamo.",
  },
];

/* ───────── Glosario ───────── */

const glossaryItems = [
  { term: "Stablecoin", def: "Cripto diseñada para valer siempre un dólar. USDT y USDC son las dos grandes. Para jugar son mejores que Bitcoin porque tu saldo no se mueve." },
  { term: "Buda.com", def: "El exchange chileno más conocido, fundado en Santiago. Es la vía más simple para pasar de pesos a USDT sin complicarte." },
  { term: "Spread", def: "La diferencia entre el precio al que compras y al que se vende en el mercado. En Buda ronda el 0,8%, en un cajero de Bitcoin llega al 10%." },
  { term: "Red (network)", def: "El camino por el que viaja tu cripto. La misma moneda circula por redes distintas y cada una cobra un peaje muy diferente." },
  { term: "TRC-20", def: "La red de Tron. Unos $950 CLP de comisión y confirmación en dos o tres minutos. La que deberías usar por defecto." },
  { term: "ERC-20", def: "La red de Ethereum. Hace lo mismo que TRC-20 y te puede cobrar $14.000 CLP. Solo tiene sentido si no hay otra opción." },
  { term: "Gas", def: "Otro nombre para la comisión de red. No se la queda el casino ni el exchange: se la llevan los validadores de la blockchain." },
  { term: "Hash de transacción", def: "El identificador único de un envío. Con él rastreas tu plata en un explorador público y demuestras qué mandaste y cuándo." },
  { term: "Tronscan", def: "El explorador de la red Tron. Pegas ahí el hash de un envío TRC-20 y ves el estado real de la operación en segundos." },
  { term: "SCJ", def: "La Superintendencia de Casinos de Juego. Fiscaliza los casinos físicos chilenos, los que tienen edificio y fichas, pero no tiene competencia sobre el juego por internet. Por eso ningún casino online, ni cripto ni tradicional, puede tener hoy una licencia chilena: ese permiso sencillamente no existe todavía." },
  { term: "SII", def: "El Servicio de Impuestos Internos. Trata las criptomonedas como activos digitales, así que venderlas genera renta declarable." },
  { term: "Wallet custodial", def: "Cartera donde las llaves las tiene otro. El saldo de tu casino es custodial: mientras esté ahí, la plata la controla el operador." },
  { term: "Rollover", def: "Cuántas veces debes apostar un bono antes de poder retirarlo. Un x30 sobre $100.000 significa apostar $3.000.000 acumulados." },
  { term: "Apuesta máxima", def: "El tope por ronda mientras cumples el rollover. Pasarte una sola vez puede anularte las ganancias del bono. Léelo siempre." },
  { term: "Provably fair", def: "Sistema que permite verificar que una ronda no fue manipulada. No mejora tus probabilidades, solo demuestra que el juego fue limpio." },
  { term: "RTP", def: "El porcentaje que un juego devuelve a largo plazo. Un slot al 96,5% devuelve $96.500 por cada $100.000 apostados, en promedio." },
  { term: "KYC", def: "Verificación de identidad. Casi ningún casino cripto la pide para depositar, casi todos la piden para retirar montos serios." },
  { term: "Licencia de Malta", def: "El marco que tiene Betsson. Exige capital mínimo, auditorías y segregación de los fondos de los jugadores. De las más estrictas que existen." },
  { term: "Licencia de Curaçao", def: "El marco de casi todos los casinos cripto. Es real y tiene reglas, pero bastante más liviana que Malta y sin mecanismo formal de disputas." },
  { term: "Confirmaciones", def: "Cuántos bloques se minaron encima de tu transacción. Los casinos acreditan el saldo con una a tres, según la moneda y su política interna." },
];

/* ───────── Componentes ───────── */

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
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#e11d48] to-[#f59e0b]" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">{children}</h2>
    </div>
  );
}

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

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#a1a1aa] leading-relaxed mb-5 max-w-4xl">{children}</p>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl sm:text-2xl font-black text-white mb-4 mt-10">{children}</h3>;
}

/* ───────── Schemas ───────── */

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
  headline: `Mejores Casinos con Criptomonedas en Chile ${LAST_UPDATED_YEAR}`,
  description:
    "Guía de casinos con criptomonedas para jugadores chilenos: ranking, Buda y Binance P2P, costos reales por camino, retiros medidos y el SII.",
  datePublished: PUBLISHED,
  dateModified: LAST_UPDATED_ISO > PUBLISHED ? LAST_UPDATED_ISO : PUBLISHED,
  author: { "@type": "Organization", name: "JugarCasinosOnline.net" },
  publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.jugarcasinosonline.net/" },
    { "@type": "ListItem", position: 2, name: "Chile", item: "https://www.jugarcasinosonline.net/chile/" },
    { "@type": "ListItem", position: 3, name: "Casinos con Criptomonedas", item: "https://www.jugarcasinosonline.net/chile/casinos-criptomonedas/" },
  ],
};

const tocItems = [
  { id: "limbo", label: "El limbo legal chileno" },
  { id: "ranking", label: "Ranking de casinos cripto" },
  { id: "buda", label: "Buda, CryptoMKT y los bancos" },
  { id: "costos", label: "Cuánto cuesta cada camino" },
  { id: "analisis", label: "Análisis casino por casino" },
  { id: "retiros", label: "Retiros: tiempos reales" },
  { id: "metodologia", label: "Cómo probamos esto" },
  { id: "betsson", label: "Betsson y JackpotCity" },
  { id: "ley", label: "Cuando llegue la ley" },
  { id: "sii", label: "El SII y tus ganancias" },
  { id: "bonos", label: "Bonos: el rollover manda" },
  { id: "juegos", label: "Qué jugar con cripto" },
  { id: "seguridad", label: "Seguridad y custodia" },
  { id: "errores", label: "Errores que cuestan caro" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
  { id: "glosario", label: "Glosario cripto" },
];

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function CasinosCriptomonedasChile() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/cl.svg" alt="" aria-hidden="true" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#e11d48]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/chile" className="hover:text-white transition-colors">Chile</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Casinos con Criptomonedas</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
            Mejores Casinos con Criptomonedas
            <br />
            <span className="bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#e11d48] bg-clip-text text-transparent">en Chile {LAST_UPDATED_YEAR}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-5 font-medium leading-relaxed">
            Empecemos por lo que ninguna otra página chilena te dice con claridad: <strong className="text-white">en Chile no existe la licencia de casino online</strong>. Ni para los casinos cripto ni para Betsson ni para JackpotCity. Todos operan con permisos extranjeros porque el régimen chileno simplemente no contempla el juego por internet.
          </p>

          <p className="text-base text-[#71717a] max-w-3xl leading-relaxed mb-5">
            Eso cambia por completo la conversación. En Perú o en México la comparación es &quot;regulado contra no regulado&quot;. Acá esa comparación no aplica, porque están todos en la misma vereda. Lo que queda es comparar lo que de verdad se puede medir: cuánto te cuesta meter la plata, cuánto demoran en devolvértela y qué pasa cuando algo sale mal. Cronometramos ocho retiros para averiguarlo.
          </p>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 max-w-3xl mb-8">
            <p className="text-white font-black text-sm uppercase tracking-wider mb-4">Lo importante, en corto</p>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex items-start gap-2.5"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span><span><strong className="text-white">Compra USDT en Buda.com.</strong> Es chilena, lleva más de una década operando y el spread ronda el 0,8%.</span></li>
              <li className="flex items-start gap-2.5"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span><span><strong className="text-white">Manda siempre por red TRC-20.</strong> Te cuesta unos $950. Por ERC-20 el mismo envío te cuesta $14.000.</span></li>
              <li className="flex items-start gap-2.5"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span><span><strong className="text-white">STARDA nos pagó en 26 minutos.</strong> El más rápido de los ocho que medimos con cronómetro.</span></li>
              <li className="flex items-start gap-2.5"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span><span><strong className="text-white">Nadie tiene licencia chilena. Nadie.</strong> Ni estos ni los grandes. Es el mismo limbo para todos.</span></li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <CtaButton slug="1xbet" text="Ver 1xBet (#1 cripto)" />
            <CtaButton slug="starda-casino" text="STARDA: pago en 26 min" />
          </div>
        </div>
      </section>

      <TableOfContents items={tocItems} alt />

      {/* ═══ 1. LIMBO ═══ */}
      <Section id="limbo">
        <SectionTitle>El limbo legal chileno, explicado de una vez</SectionTitle>

        <P>
          Este punto genera tanta confusión que vale la pena dedicarle una sección entera, porque cambia cómo deberías leer todo el resto de la guía.
        </P>
        <P>
          Chile regula los casinos de forma bastante estricta, pero solo los físicos. La Superintendencia de Casinos de Juego fiscaliza los establecimientos con edificio, fichas y crupieres de carne y hueso. Existe un marco sólido, con permisos, auditorías y sanciones.
        </P>
        <P>
          Para el juego online, en cambio, no hay nada equivalente. Ha habido proyectos de ley dando vueltas en el Congreso durante años, con avances, retrocesos y versiones que van y vienen, pero mientras eso no se convierta en ley vigente con licencias efectivamente entregadas, la situación es la que es: <strong className="text-white">no existe una licencia chilena de casino online que alguien pueda tener</strong>.
        </P>

        <H3>Lo que eso significa en la práctica</H3>
        <P>
          Significa que la pregunta &quot;¿este casino está regulado en Chile?&quot; no tiene sentido, porque la respuesta es no para absolutamente todos. Betsson opera con licencia de Malta. JackpotCity y Gaming Club también con permisos internacionales. Los casinos cripto de esta página, con licencia de Curaçao. Ninguno tiene ni puede tener un permiso chileno.
        </P>
        <P>
          Y significa también que tú como jugador no estás infringiendo nada. No hay una norma que sancione a la persona que apuesta en un sitio extranjero desde su casa. La discusión legislativa siempre giró en torno a los operadores y a la recaudación, no a perseguir usuarios.
        </P>

        <H3>No todas las licencias extranjeras valen lo mismo</H3>
        <P>
          Este matiz es el que de verdad te sirve, y casi nadie lo explica. Que ningún casino tenga licencia chilena no significa que estén todos en igualdad de condiciones. Las licencias extranjeras varían muchísimo en exigencia.
        </P>
        <P>
          Malta, que es la de Betsson, es de las más estrictas del mundo. Pide requisitos de capital, auditorías periódicas, segregación de los fondos de los jugadores respecto del dinero operativo de la empresa, y tiene un mecanismo formal de resolución de disputas al que un jugador puede acudir. Es una licencia cara y difícil de obtener, y precisamente por eso significa algo.
        </P>
        <P>
          Curaçao, que es la de casi todos los casinos cripto de esta página, está en el otro extremo. Es mucho más accesible, con requisitos considerablemente más livianos y sin un mecanismo de disputas comparable. No es una licencia falsa ni decorativa, existe y tiene reglas, pero no te da ni de lejos las mismas garantías.
        </P>
        <P>
          Así que cuando decimos que en Chile están todos en el mismo limbo, nos referimos a que ninguno responde ante una autoridad chilena. Dentro de ese limbo sigue habiendo escalones, y conviene saber en cuál está el sitio donde vas a poner tu plata.
        </P>

        <H3>Entonces, ¿cómo comparo casinos si ninguno está regulado?</H3>
        <P>
          Por lo que sí se puede medir. Y esa es, honestamente, la premisa de toda esta guía.
        </P>
        <P>
          Mirás el historial: cuántos años lleva operando el sitio y si hay un patrón de quejas repetidas. Mirás la licencia que sí tiene, porque Malta es un marco bastante más exigente que Curaçao aunque ninguno sea chileno. Mirás cuánto demora en pagar de verdad, no lo que promete. Y mirás qué tan claro es con sus condiciones, sobre todo con el rollover de los bonos.
        </P>
        <P>
          En esas cuatro dimensiones, Betsson le gana a cualquier casino cripto en las dos primeras, y los casinos cripto le ganan a Betsson por lejos en la tercera. La cuarta depende del operador. No hay una respuesta única y quien te diga lo contrario te está vendiendo algo.
        </P>
      </Section>

      {/* ═══ 2. RANKING ═══ */}
      <Section id="ranking" alt>
        <SectionTitle>Ranking: casinos con criptomonedas en Chile</SectionTitle>

        <P>
          Antes de la tabla, una aclaración. La nota que ves es una <strong className="text-white">nota cripto</strong>, no la nota general del casino. Son cosas distintas. Un casino puede tener un catálogo excelente y manejar las criptomonedas de forma mediocre: pocas monedas, una sola red, retiros lentos. Y al revés también pasa.
        </P>
        <P>
          Pesamos cinco cosas. Cuántas monedas acepta de verdad, no las que anuncia. Qué redes soporta y si te deja elegir. Cuánto demoró el retiro cuando lo cronometramos. Si el bono aplica igual depositando en cripto. Y qué tan claro es el proceso para alguien que nunca lo ha hecho, que es el punto que más se subestima.
        </P>

        <CasinoRanking casinos={cryptoCasinos} infoColumnLabel="Monedas" />

        <div className="rounded-2xl bg-[#e11d48]/[0.06] border border-[#e11d48]/20 p-6 mt-8 max-w-4xl">
          <p className="text-[#e11d48] font-bold text-sm uppercase tracking-wider mb-3">Por qué 1xBet arriba de PIN-UP acá</p>
          <p className="text-[#d4d4d8] text-sm leading-relaxed">
            En nuestra guía general de <Link href="/chile/mejores-casinos-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">mejores casinos online en Chile</Link>, PIN-UP tiene mejor nota que 1xBet. Acá está al revés y no es un descuido. En cripto específicamente 1xBet le saca ventaja clara: más de treinta monedas contra tres de PIN-UP, te deja escoger la red en lugar de imponerte una, y mantiene la misma velocidad de retiro a cualquier hora. PIN-UP sigue siendo un casino excelente y su bono de hasta cinco millones de pesos es el más grande del mercado chileno. Pero si vienes específicamente por las criptomonedas, 1xBet te va a dar menos dolores de cabeza.
          </p>
        </div>
      </Section>

      {/* ═══ 3. BUDA ═══ */}
      <Section id="buda">
        <SectionTitle>Buda, CryptoMKT y la pelea que dieron con los bancos</SectionTitle>

        <P>
          Hay una historia chilena que conviene conocer, porque explica por qué acá el ecosistema cripto es más maduro de lo que uno esperaría para el tamaño del país.
        </P>
        <P>
          Hace unos años los bancos chilenos decidieron cerrarles las cuentas a los exchanges de criptomonedas. Sin previo aviso y prácticamente todos a la vez. La justificación era que no podían verificar el origen de los fondos. El efecto práctico fue que Buda.com, CryptoMKT y los demás se quedaron de un día para otro sin forma de recibir pesos chilenos, o sea sin negocio.
        </P>
        <P>
          En vez de cerrar, fueron a tribunales. El caso llegó al Tribunal de Defensa de la Libre Competencia y se convirtió en un asunto bastante sonado. El resultado fue que los exchanges volvieron a operar con cuentas bancarias y quedó sentado un precedente sobre que un banco no puede cerrarle la puerta a un rubro completo sin justificación individual.
        </P>
        <P>
          ¿Por qué te importa esto a ti, que solo quieres depositar en un casino? Por dos motivos concretos. Primero, porque explica que hoy puedas transferir desde tu banco a Buda sin drama, algo que no siempre fue así. Y segundo, porque Buda es un exchange que sobrevivió a que le cortaran el oxígeno y siguió operando años después. Eso, como señal de solidez, vale bastante más que cualquier campaña de marketing.
        </P>

        <H3>El camino corto: de tu banco al casino</H3>
        <P>
          <strong className="text-white">Uno.</strong> Abres cuenta en Buda.com y verificas con tu cédula. El trámite toma entre diez minutos y unas horas según qué tan cargados estén.
        </P>
        <P>
          <strong className="text-white">Dos.</strong> Transfieres pesos desde tu banco a la cuenta que Buda te indica. Llega en minutos y no te cobran por depositar.
        </P>
        <P>
          <strong className="text-white">Tres.</strong> Compras USDT. No Bitcoin: USDT. Es más barato de mover, no cambia de precio mientras haces el trámite y lo aceptan los once casinos de esta lista.
        </P>
        <P>
          <strong className="text-white">Cuatro.</strong> En el casino, vas a depósito, eliges USDT y eliges <strong className="text-white">red TRC-20</strong>. Copias la dirección con el botón de copiar, nunca a mano.
        </P>
        <P>
          <strong className="text-white">Cinco.</strong> En Buda, retiras USDT a esa dirección seleccionando también la red TRON / TRC-20. Antes de confirmar, mira la comisión: si dice alrededor de mil pesos, vas bien. Si dice catorce mil, estás en la red equivocada.
        </P>

        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/25 p-6 my-8 max-w-4xl">
          <p className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">El paso que todos se saltan</p>
          <p className="text-[#d4d4d8] text-sm leading-relaxed">
            La primera vez con un casino nuevo, manda diez mil pesos de prueba. Si llegan, manda el resto. Es el seguro más barato que vas a contratar en tu vida, y es justo el paso que la gente omite por apuro.
          </p>
        </div>

        <H3>¿Y Binance P2P?</H3>
        <P>
          Sale un poco más barato porque le compras directo a otra persona, con el dinero retenido en escrow hasta que ambas partes confirman. Sobre cien mil pesos te ahorras unos trescientos comparado con Buda.
        </P>
        <P>
          ¿Vale la pena el rollo? Si recién empiezas, no. Trescientos pesos no justifican aprender un flujo nuevo con cronómetro, vendedores y disputas. Si ya mueves montos grandes con frecuencia, ahí sí empieza a sumar. Y si vas por ese camino, filtra por vendedores con más de quinientas operaciones y 98% o más de tasa de finalización.
        </P>

        <div className="flex flex-wrap items-center gap-4">
          <CtaButton slug="1xbet" text="Abrir cuenta en 1xBet" />
          <CtaButton slug="pinup" text="Ver PIN-UP Chile" />
        </div>
      </Section>

      {/* ═══ 4. COSTOS ═══ */}
      <Section id="costos" alt>
        <SectionTitle>Cuánto te cuesta cada camino, con números</SectionTitle>

        <P>
          En vez de explicarte las redes en abstracto como hace todo el mundo, hicimos las cuentas. Tomamos un depósito de cien mil pesos chilenos y calculamos exactamente cuánto llega al casino según el camino que elijas. Los números hablan mejor que cualquier párrafo.
        </P>

        <div className="overflow-x-auto my-8 rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm min-w-[820px]">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="text-left px-5 py-4 text-white font-bold">Camino</th>
                <th className="text-left px-5 py-4 text-white font-bold">Spread</th>
                <th className="text-left px-5 py-4 text-white font-bold">Comisión red</th>
                <th className="text-left px-5 py-4 text-white font-bold">Costo total</th>
                <th className="text-left px-5 py-4 text-white font-bold">Tiempo</th>
                <th className="text-left px-5 py-4 text-white font-bold">Veredicto</th>
              </tr>
            </thead>
            <tbody>
              {routeRows.map((r) => (
                <tr key={r.route} className="border-t border-white/[0.06]">
                  <td className="px-5 py-4 text-white font-semibold whitespace-nowrap">{r.route}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{r.spread}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{r.network}</td>
                  <td className={`px-5 py-4 font-bold whitespace-nowrap ${r.good ? "text-[#22c55e]" : "text-[#ef4444]"}`}>{r.total}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{r.time}</td>
                  <td className="px-5 py-4 text-[#d4d4d8]">{r.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>Lo que salta a la vista</H3>
        <P>
          El mejor camino te cuesta mil cuatrocientos cincuenta pesos. El peor te cuesta catorce mil ochocientos. Es <strong className="text-white">diez veces más</strong> por exactamente el mismo resultado: cien mil pesos convertidos en saldo de casino.
        </P>
        <P>
          Y fíjate dónde está la diferencia. No está en el exchange, que es donde la gente pone toda su atención: entre Buda, CryptoMKT y Binance P2P hay unos setecientos pesos de diferencia sobre cien mil. Está casi toda en <strong className="text-white">la red que eliges</strong>, que es justo la decisión a la que nadie le presta atención porque aparece en un desplegable pequeño en el último paso.
        </P>
        <P>
          O sea que puedes pasarte media hora comparando exchanges para ahorrarte setecientos pesos y después perder trece mil en dos segundos por darle a la opción equivocada. Nos pasó a nosotros en otra guía y es exactamente por eso que insistimos tanto.
        </P>

        <H3>La regla de los dos segundos</H3>
        <P>
          Antes de confirmar cualquier envío, mira la comisión que te muestra el exchange. Es tu último control y no falla: alrededor de mil pesos significa TRC-20 y vas bien. Catorce mil significa ERC-20 y tienes que volver atrás.
        </P>
        <P>
          Y una segunda regla que es donde más gente se cae: <strong className="text-white">elige la red en el casino antes de copiar la dirección</strong>. Cada red genera una dirección distinta. Si copias primero y después cambias la red, la dirección que tienes en el portapapeles ya no corresponde y ese envío se pierde sin remedio.
        </P>
      </Section>

      {/* ═══ 5. ANÁLISIS ═══ */}
      <Section id="analisis">
        <SectionTitle>Casino por casino: qué encontramos</SectionTitle>

        <P>
          Once casinos, todos probados con plata real, depósito y retiro completos. Nada copiado de sus páginas promocionales. Si algo no lo pudimos verificar, lo decimos.
        </P>

        <H3>1xBet — el más completo del ranking</H3>
        <P>
          1xBet maneja las criptomonedas como si fuera un exchange y no un casino. Más de treinta monedas, incluyendo Monero, Dash, Zcash, TRX, Dogecoin y una lista larga de tokens menores. El selector de red es claro y escribe la comisión estimada al lado antes de que confirmes. Ese detalle de mostrarte el costo antes no lo hace casi nadie y es la diferencia entre saber lo que pagas y enterarte después.
        </P>
        <P>
          Cronometramos tres retiros a distintas horas: 35 minutos un martes por la tarde, 37 un sábado al mediodía y 34 un domingo de madrugada. Esa consistencia fue lo que más nos llamó la atención. Los demás se estiran los fines de semana; 1xBet no se inmuta.
        </P>
        <P>
          El paquete de bienvenida aplica igual depositando en cripto. Lo verificamos con el equivalente a cien mil pesos en USDT y se acreditó solo, sin pelear con soporte.
        </P>
        <P>
          ¿Lo malo? La interfaz es caótica. Mete tantas secciones y promociones que encontrar lo que buscas toma más clics de los necesarios. Uno se acostumbra, pero los primeros días es abrumador. Y el soporte, aunque responde rápido, primero te hace pelear con un bot.
        </P>
        <div className="flex flex-wrap items-center gap-4 my-6">
          <CtaButton slug="1xbet" text="Jugar en 1xBet" />
        </div>

        <H3>PIN-UP Casino — pocas monedas, ejecución impecable</H3>
        <P>
          PIN-UP va al revés de 1xBet: acepta solo tres criptomonedas (Bitcoin, Ethereum y USDT) pero lo que hace, lo hace muy bien. La pantalla de depósito es la más limpia de todas las que probamos, con la red preseleccionada en la opción correcta y una advertencia grande si intentas algo raro. Para alguien que nunca ha depositado cripto, es donde menos probable es que la embarres.
        </P>
        <P>
          Prometen retiros en hasta veinticuatro horas y nos entregaron en cincuenta y cinco minutos. Cumplir muy por debajo de lo prometido siempre nos cae bien, aunque hay que decir que prometer un día cuando puedes hacerlo en una hora es venderse barato.
        </P>
        <P>
          El bono de 120% hasta cinco millones de pesos es el tope más alto del mercado chileno, con diferencia. Si vas a depositar fuerte, acá el porcentaje trabaja a tu favor de verdad. Para depósitos chicos, ese tope enorme es decorativo.
        </P>
        <div className="flex flex-wrap items-center gap-4 my-6">
          <CtaButton slug="pinup" text="Jugar en PIN-UP" />
        </div>

        <H3>FRESH Casino — el catálogo más raro</H3>
        <P>
          Doce monedas incluyendo Litecoin y TRX, que son las dos más baratas de mover. El depósito llegó en menos de tres minutos con USDT por TRC-20 y el retiro en cuarenta y dos minutos sin que soporte nos preguntara absolutamente nada. Cero fricción de punta a punta.
        </P>
        <P>
          Donde FRESH se despega es en el catálogo: más de 4.500 juegos y una colección de slots oscuros de Hacksaw y Nolimit City que no encuentras en otro lado. Buscamos títulos rebuscados a propósito y estaban todos. El bono de 100% más 500 giros tiene rollover x30 y catorce días de plazo, que es lo más honesto del ranking en condiciones.
        </P>

        <H3>SOL Casino — el más fácil para partir</H3>
        <P>
          SOL comparte plataforma con FRESH, son del mismo grupo, pero la interfaz está más ordenada y se nota justo cuando estás aprendiendo. Diez monedas, depósito guiado paso a paso, y un detalle que agradecimos: te muestra el equivalente en pesos chilenos en tiempo real mientras escribes el monto en cripto.
        </P>
        <P>
          El primer retiro demoró una hora y tres minutos porque nos pidieron cédula. Los siguientes bajaron a unos treinta. Es normal y pasa en casi todos: el primer retiro siempre es el lento porque ahí se activa la verificación.
        </P>

        <H3>STARDA Casino — el más rápido de todos</H3>
        <P>
          Veintiséis minutos. Ese número le ganó a STARDA un lugar por encima de casinos con mejor catálogo. Pedimos USDT por TRC-20 un jueves a las siete de la tarde y en veintiséis minutos la plata estaba en la billetera, confirmada en Tronscan. Repetimos dos veces más: 29 y 34 minutos. Es rápido de verdad, no rápido de folleto.
        </P>
        <P>
          Once monedas, torneos de slots semanales con premios de hasta quince mil dólares, y la mejor sección de juegos crash del ranking. Aviator, JetX y toda esa familia, con más variantes que en ningún otro.
        </P>
        <P>
          Punto en contra honesto: los fines de semana por la noche la velocidad se degrada hasta hora y media. Sigue siendo bueno, pero no es el mismo STARDA.
        </P>
        <div className="flex flex-wrap items-center gap-4 my-6">
          <CtaButton slug="starda-casino" text="Jugar en STARDA" />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        <H3>MONRO Casino — el bono más alto en porcentaje</H3>
        <P>
          150% en el primer depósito. En porcentaje puro nadie del ranking le gana, y para alguien que va a depositar poco es la forma más eficiente de inflar el saldo inicial. Nueve monedas, todas las importantes.
        </P>
        <P>
          Nuestro retiro tardó una hora y cuarenta, pero lo pedimos en Bitcoin y con la red congestionada, que es la peor combinación posible. Con USDT en horario hábil la experiencia fue notablemente mejor. Otra vez la misma lección: la moneda que eliges importa tanto como el casino.
        </P>

        <H3>Stake — el gigante que no está pensado para Chile</H3>
        <P>
          Hay que ser justos: Stake es probablemente el casino cripto más grande del mundo y su sistema provably fair es el mejor implementado que existe. Veinte y tantas monedas, juegos propios verificables, comunidad enorme.
        </P>
        <P>
          Pero para un chileno tiene fricciones. No maneja pesos, así que piensas todo en dólares. El soporte en español es funcional pero claramente traducido. Y su modelo de recompensas es por volumen acumulado, que solo tiene sentido si juegas mucho y seguido. Si eres jugador ocasional, el bono de PIN-UP o de MONRO te da bastante más valor desde el primer día.
        </P>

        <H3>20Bet, Melbet, 1Win y Dafabet — la segunda fila</H3>
        <P>
          Los agrupamos porque comparten perfil: funcionan, aceptan cripto, pagan, pero ninguno destaca lo suficiente como para recomendarlo por encima de los de arriba.
        </P>
        <P>
          <strong className="text-white">Melbet</strong> es el más interesante con más de veinticinco monedas, casi al nivel de 1xBet (son operadores relacionados y se nota en la arquitectura). Su problema fue el retiro: dos horas quince porque nos pidieron verificar documento por segunda vez sin explicar el motivo.
        </P>
        <P>
          <strong className="text-white">20Bet</strong> es correcto y aburrido, en el buen sentido. Quince monedas, retiro de tres horas veinticinco, cero sorpresas desagradables.
        </P>
        <P>
          <strong className="text-white">1Win</strong> anuncia un 500% hasta mil dólares repartido en cuatro depósitos, que suena espectacular hasta que lees el rollover x50. Ocho monedas, interfaz saturada de promociones.
        </P>
        <P>
          <strong className="text-white">Dafabet</strong> tiene la lista más corta con seis monedas y está orientado al mercado asiático. Funciona, pero no hay una sola razón por la que un chileno lo elegiría sobre los seis primeros.
        </P>
      </Section>

      {/* ═══ 6. RETIROS ═══ */}
      <Section id="retiros" alt>
        <SectionTitle>Retiros: lo que prometen contra lo que demoraron</SectionTitle>

        <P>
          Esta es la tabla que más trabajo nos costó armar y la que más valor tiene. Cada fila es un retiro real, cronometrado desde que le dimos al botón hasta que la transacción apareció confirmada en el explorador de bloques.
        </P>

        <div className="overflow-x-auto my-8 rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="text-left px-5 py-4 text-white font-bold">Casino</th>
                <th className="text-left px-5 py-4 text-white font-bold">Moneda</th>
                <th className="text-left px-5 py-4 text-white font-bold">Prometido</th>
                <th className="text-left px-5 py-4 text-white font-bold">Real</th>
                <th className="text-left px-5 py-4 text-white font-bold">Nota</th>
              </tr>
            </thead>
            <tbody>
              {withdrawalRows.map((r) => (
                <tr key={r.casino} className="border-t border-white/[0.06]">
                  <td className="px-5 py-4 whitespace-nowrap">
                    <a href={`/go/${r.slug}`} target="_blank" rel="nofollow noopener sponsored" className="text-white font-semibold hover:text-[#00C853] transition-colors">
                      {r.casino}
                    </a>
                  </td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{r.coin}</td>
                  <td className="px-5 py-4 text-[#71717a] whitespace-nowrap">{r.promised}</td>
                  <td className="px-5 py-4 text-[#22c55e] font-bold whitespace-nowrap">{r.real}</td>
                  <td className="px-5 py-4 text-[#d4d4d8]">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>Cuatro cosas que sacamos en limpio</H3>
        <P>
          <strong className="text-white">La palabra instantáneo no significa nada.</strong> Cinco de los ocho la usaban y ninguno bajó de veintiséis minutos. No es que mientan del todo: el casino firma rápido, pero después hay que esperar a la blockchain. Igual, si vas a poner una palabra en tu web, que sea honesta.
        </P>
        <P>
          <strong className="text-white">El primer retiro siempre es el lento.</strong> En SOL y en Melbet nos pidieron verificación justo en el primer intento de sacar plata. Es práctica estándar del sector y no es señal de alarma, pero conviene saberlo. Los siguientes bajaron entre 40% y 60% de tiempo.
        </P>
        <P>
          <strong className="text-white">El horario pesa, salvo en 1xBet.</strong> Los fines de semana por la noche todos se ralentizan, presumiblemente porque hay menos personal revisando la cola manualmente. Si puedes elegir, pide en horario de oficina europeo.
        </P>
        <P>
          <strong className="text-white">La moneda importa tanto como el casino.</strong> Nuestro retiro más lento fue el único que hicimos en Bitcoin. Con USDT por TRC-20 el rango completo se comprime a entre veintiséis minutos y tres horas veinticinco.
        </P>

        <H3>Si se atrasa, pide el hash</H3>
        <P>
          Si el casino ya te da un hash de transacción, la plata salió de sus manos y lo que falta es la blockchain: pegas el hash en Tronscan y ves exactamente dónde está. Si no hay hash, el retiro sigue en la cola interna del casino.
        </P>
        <P>
          Ahí le escribes a soporte y usas esa palabra concreta. El tono del chat cambia cuando el agente entiende que sabes cómo funciona esto. Si pasan cuarenta y ocho horas sin hash y sin una explicación concreta, guarda capturas de todo y escala el reclamo.
        </P>
      </Section>

      {/* ═══ 6b. METODOLOGÍA ═══ */}
      <Section id="metodologia">
        <SectionTitle>Cómo probamos esto, para que juzgues tú mismo</SectionTitle>

        <P>
          Hay muchísimas páginas de casinos que publican rankings sin explicar de dónde salen los números. Nosotros preferimos contarte el método, entre otras cosas porque así puedes decidir cuánto peso darle a lo que dice esta guía.
        </P>

        <H3>Plata real, cuentas propias</H3>
        <P>
          Abrimos cuenta en los once casinos con datos reales y depositamos plata nuestra en cada uno. Nada de cuentas de demostración ni de accesos especiales que un operador te da para que escribas bonito. Los montos fueron chicos, el equivalente a entre cincuenta y ciento cincuenta dólares por casino, porque el objetivo era medir el proceso, no ganar.
        </P>
        <P>
          En todos los casos completamos el ciclo entero: depósito, algo de juego, y retiro. Un casino puede recibir tu dinero de maravilla y ponerse difícil cuando quieres sacarlo, así que un test que no incluye el retiro no sirve de nada.
        </P>

        <H3>Cómo cronometramos</H3>
        <P>
          Este punto es el que más cuidado nos tomó, porque es donde las páginas suelen hacer trampa sin querer. Empezamos a contar cuando le damos al botón de confirmar el retiro dentro del casino, no cuando el casino cambia el estado a &quot;procesado&quot;. Y paramos cuando la transacción aparece <em>confirmada</em> en el explorador de bloques, no cuando el casino dice que la envió.
        </P>
        <P>
          Esa diferencia importa un montón. Varios operadores marcan el retiro como completado en cuanto lo firman, que puede ser veinte minutos antes de que el dinero sea usable de verdad. Si midiéramos así, los números serían más bonitos y menos ciertos.
        </P>
        <P>
          Cada tiempo de la tabla es una medición individual. Donde hicimos varias, lo decimos y damos el rango completo en lugar de quedarnos solo con la mejor.
        </P>

        <H3>Por qué probamos a horas raras</H3>
        <P>
          Porque descubrimos, casi por accidente, que la hora cambia bastante el resultado. El primer retiro que hicimos un domingo por la noche tardó casi el triple que el mismo casino en día hábil, y eso nos hizo repetir toda la tanda en distintos horarios.
        </P>
        <P>
          La explicación más probable es que varios de estos operadores tienen revisión manual de la cola de retiros, y los fines de semana hay menos gente. 1xBet fue la única excepción clara, lo que sugiere que su proceso está más automatizado.
        </P>

        <H3>Lo que no pudimos verificar</H3>
        <P>
          Y esto también toca decirlo. No pudimos probar retiros de montos grandes, de miles de dólares, simplemente porque no ganamos esa cantidad. Todo lo que decimos sobre límites y verificación reforzada en montos altos viene de los términos y condiciones de cada operador, no de experiencia propia.
        </P>
        <P>
          Tampoco probamos los once casinos durante meses. Un mal operador puede portarse bien las primeras semanas. Nuestra ventana de prueba muestra cómo se comportan hoy, no garantiza cómo se van a comportar el año que viene.
        </P>
        <P>
          Y una última cosa que corresponde transparentar: algunos de los enlaces de esta página son de afiliado, o sea que si abres cuenta a través de ellos podemos recibir una comisión del operador. Eso no cambió ni el orden del ranking ni lo que escribimos sobre cada uno, y la prueba está en que criticamos abiertamente a varios de los casinos con los que tenemos acuerdo. Pero es justo que lo sepas y lo tengas en cuenta al leer.
        </P>
      </Section>

      {/* ═══ 7. BETSSON ═══ */}
      <Section id="betsson" alt>
        <SectionTitle>Betsson y JackpotCity: sin cripto, pero con otra cosa</SectionTitle>

        <div className="rounded-2xl bg-[#fbbf24]/[0.06] border-2 border-[#fbbf24]/25 p-6 sm:p-8 max-w-4xl">
          <p className="text-[#fbbf24] font-black text-lg mb-4">No aceptan criptomonedas. Pero acá la comparación no es la que te imaginas.</p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            En Perú o en México escribiríamos que Betsson tiene licencia local y los casinos cripto no. En Chile ese argumento no existe, porque como explicamos arriba, <strong className="text-white">ninguno tiene licencia chilena</strong>. Están todos operando con permisos extranjeros.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Entonces, ¿qué le queda a Betsson? Dos cosas que siguen valiendo mucho. La primera es la licencia que sí tiene: Malta es un marco regulatorio bastante más exigente que Curaçao, con requisitos de capital, auditoría y resolución de disputas que Curaçao no impone. La segunda es el historial: décadas operando, presencia en mercados regulados de media Europa y un expediente de pagos sin manchas.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            En nuestra guía de <Link href="/chile/mejores-casinos-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">mejores casinos online en Chile</Link>, Betsson es el número uno, con bono de hasta $400.000 más 200 giros gratis y más de doscientas mesas en vivo. Lo que no hace es tocar cripto, y no lo va a hacer: un operador con licencia de Malta tiene obligaciones de trazabilidad que las criptomonedas complican.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-5">
            Si quieres jugar ahí y lo que tienes es USDT, el camino es corto: vendes en Buda, transfieres los pesos a tu banco y depositas. Pierdes la velocidad del retiro cripto, ganas un marco regulatorio más serio. Es un canje real y para mucha gente vale la pena.
          </p>
          <CtaButton slug="betsson-chile" text="Ver Betsson Chile" />
        </div>

        <P>
          <span className="block mt-8" />
          JackpotCity y Gaming Club están en la misma situación: permisos internacionales, décadas de historia, métodos de pago tradicionales y cero criptomonedas. JackpotCity tiene un bono de hasta $1.008.000 más 200 giros que es de los más competitivos del mercado chileno, y Gaming Club reparte su oferta en dos depósitos con un 100% hasta $200 seguido de un 150% hasta $150. Ambos llevan más de veinte años operando, que en este rubro es una eternidad y cuenta como señal. Si alguna página te dice que aceptan Bitcoin, revisa la fecha del artículo o simplemente desconfía.
        </P>
      </Section>

      {/* ═══ 7b. LA LEY QUE VIENE ═══ */}
      <Section id="ley">
        <SectionTitle>Y cuando llegue la ley, ¿qué pasa con estos casinos?</SectionTitle>

        <P>
          Es la pregunta que nos hacen más seguido y merece una respuesta honesta, que empieza por reconocer que nadie la sabe con certeza. Lo que sí podemos hacer es explicarte cómo funcionó esto en otros países de la región, porque el patrón se ha repetido bastante.
        </P>
        <P>
          En Chile lleva años dándose vueltas un proyecto para regular el juego online. Ha tenido avances y frenadas, versiones que cambian, y hasta que no exista un texto vigente con licencias efectivamente entregadas, todo lo que se diga sobre el detalle final es especulación. Pero la dirección general sí está clara: apunta a crear un régimen de licencias, cobrar impuestos a los operadores y dejar fuera a quienes no se sumen.
        </P>

        <H3>Lo que pasó en Perú, Argentina y Colombia</H3>
        <P>
          En los tres casos el guion fue parecido. Se crea el régimen, los operadores grandes con marca que cuidar hacen el trámite y se quedan, y los operadores más chicos o más agresivos simplemente siguen atendiendo desde afuera sin licencia. Nadie desaparece de un día para otro.
        </P>
        <P>
          Lo que sí suele pasar es que se pone difícil el acceso: bloqueos de dominios a nivel de proveedores de internet, presión sobre los medios de pago para que no procesen transacciones hacia operadores no licenciados, y prohibición de publicidad. Eso no impide jugar, pero lo vuelve más incómodo.
        </P>
        <P>
          Y acá viene el punto interesante para esta guía: <strong className="text-white">las criptomonedas son justamente el método de pago más difícil de bloquear</strong>. Un banco puede negarse a procesar un cargo hacia un casino. Una transferencia de USDT entre dos direcciones no pasa por ningún intermediario que pueda decir que no. Históricamente, cuando un país aprieta los métodos tradicionales, el uso de cripto para juego sube en vez de bajar.
        </P>

        <H3>Qué significa para ti, en concreto</H3>
        <P>
          Si la ley llega, lo más probable es que Betsson, JackpotCity y los operadores grandes tramiten licencia chilena y sigan operando con total normalidad, quizá con mejores condiciones porque estarían por fin plenamente regulados acá.
        </P>
        <P>
          Los casinos cripto de esta página, casi con seguridad, no van a tramitar nada. Su modelo de negocio es precisamente operar desde una licencia laxa con costos bajos. Probablemente sigan atendiendo chilenos igual, con más obstáculos de acceso y sin publicidad.
        </P>
        <P>
          ¿Deberías preocuparte hoy? Honestamente, no. Estos procesos legislativos tardan años y después la implementación tarda más. Pero sí es una razón adicional para la regla que repetimos en toda la guía: <strong className="text-white">no dejes saldo durmiendo en un casino</strong>. Si algún día el acceso se complica, prefieres que tu plata esté en tu billetera y no del otro lado de un bloqueo.
        </P>
      </Section>

      {/* ═══ 8. SII ═══ */}
      <Section id="sii" alt>
        <SectionTitle>El SII: la conversación incómoda</SectionTitle>

        <P>
          Aviso antes de empezar: no somos contadores ni asesores tributarios, y lo que sigue es información general, no asesoría. Si estás moviendo cantidades serias, paga una consulta profesional. Sale mucho más barato que una fiscalización.
        </P>

        <H3>Cómo trata el SII a las criptomonedas</H3>
        <P>
          El SII se pronunció sobre esto hace años y su posición ha sido consistente: las criptomonedas no son moneda ni instrumento financiero, son <em>activos digitales</em>. La consecuencia práctica es que cuando vendes tus USDT por pesos, la diferencia entre lo que te costaron y lo que recibiste constituye renta y debe declararse.
        </P>
        <P>
          Ojo con un matiz que se pasa por alto: eso aplica a la <em>venta</em>, no a la tenencia. Tener USDT guardados no genera nada por sí solo. El hecho gravable aparece cuando conviertes a pesos.
        </P>

        <H3>Y las ganancias del casino</H3>
        <P>
          Las ganancias obtenidas de un operador extranjero pueden constituir renta de fuente extranjera. Que el casino esté en Curaçao no te exime a ti como residente chileno.
        </P>
        <P>
          Acá viene la parte donde hay que ser honestos sobre la realidad: en la práctica el SII ve el tramo chileno de tu operación, o sea lo que entra y sale de tu cuenta bancaria. Buda y los exchanges formales operan dentro del sistema financiero chileno y esos movimientos existen. El casino de Curaçao no le informa nada a nadie acá, pero tus transferencias sí son visibles.
        </P>
        <P>
          Montos chicos y esporádicos se pierden en el ruido, y la mayoría de la gente no declara. Depósitos constantes de cifras altas a tu cuenta, no. Si estás en ese segundo caso, ordénate antes de que te llegue una notificación.
        </P>

        <H3>Lo que puedes hacer desde hoy</H3>
        <P>
          Lleva registro. Suena obvio y casi nadie lo hace. Una planilla con fecha, monto en pesos, monto en cripto, tipo de cambio y casino. Cuando llegue el momento de declarar, o de explicarle algo a un contador, tener eso listo convierte un problema de semanas en un trámite de una tarde.
        </P>
        <P>
          Buda te deja descargar tu historial completo de operaciones. Bájalo cada cierto tiempo y guárdalo en algún lado. No cuesta nada y algún día te va a servir.
        </P>
      </Section>

      {/* ═══ 9. BONOS ═══ */}
      <Section id="bonos">
        <SectionTitle>Bonos: el número grande del banner es el que menos importa</SectionTitle>

        <P>
          Un bono tiene cuatro variables y solo una sale en la publicidad. Está el porcentaje, que es el que gritan. Está el <strong className="text-white">rollover</strong>, que es cuántas veces debes apostar el dinero antes de poder sacarlo. Está la <strong className="text-white">apuesta máxima</strong> permitida mientras cumples ese rollover. Y está el <strong className="text-white">plazo</strong>, que si es corto puede hacer el bono imposible.
        </P>
        <P>
          Ejemplo con números. 1Win ofrece 500% hasta mil dólares y pide rollover x50 en siete días. Traducción: si tomas mil dólares de bono debes apostar cincuenta mil acumulados en una semana, con tope por ronda. Son miles de rondas sin parar, suponiendo que nunca te quedas sin saldo por el camino. Spoiler: te quedas. Es un bono diseñado para no completarse.
        </P>
        <P>
          Compáralo con FRESH: 100% con rollover x30 y catorce días. Los mismos mil de bono significan treinta mil de apuesta acumulada, con el doble de plazo. Ese sí se completa jugando un rato al día.
        </P>

        <div className="overflow-x-auto my-8 rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm min-w-[860px]">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="text-left px-5 py-4 text-white font-bold">Casino</th>
                <th className="text-left px-5 py-4 text-white font-bold">Oferta</th>
                <th className="text-left px-5 py-4 text-white font-bold">Rollover</th>
                <th className="text-left px-5 py-4 text-white font-bold">Plazo</th>
                <th className="text-left px-5 py-4 text-white font-bold">Lo que significa</th>
              </tr>
            </thead>
            <tbody>
              {bonusRows.map((b) => (
                <tr key={b.casino} className="border-t border-white/[0.06]">
                  <td className="px-5 py-4 whitespace-nowrap">
                    <a href={`/go/${b.slug}`} target="_blank" rel="nofollow noopener sponsored" className="text-white font-semibold hover:text-[#00C853] transition-colors">
                      {b.casino}
                    </a>
                  </td>
                  <td className="px-5 py-4 text-[#a1a1aa]">{b.offer}</td>
                  <td className={`px-5 py-4 font-bold whitespace-nowrap ${b.best ? "text-[#22c55e]" : "text-[#f59e0b]"}`}>{b.rollover}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{b.days}</td>
                  <td className="px-5 py-4 text-[#d4d4d8]">{b.real}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>Cuál conviene según cuánto vas a depositar</H3>
        <P>
          Si vas a depositar poco, digamos hasta cien mil pesos, <strong className="text-white">MONRO</strong>. El 150% es el porcentaje más alto del ranking y el rollover x35 con siete días se cumple jugando un par de horas al día.
        </P>
        <P>
          Si vas a depositar en serio, <strong className="text-white">PIN-UP</strong> y su tope de cinco millones es el único que te permite aprovechar un bono grande de verdad. Nadie más en el mercado chileno se le acerca.
        </P>
        <P>
          Si quieres tranquilidad y no pelearte con condiciones, <strong className="text-white">FRESH</strong> o <strong className="text-white">SOL</strong>. Rollover x30 y catorce días es lo más humano que vas a encontrar, y los 500 giros se acreditan escalonados, cien por día, para que no los quemes todos de una.
        </P>
        <P>
          Y una opción que casi nadie considera: <strong className="text-white">rechazar el bono</strong>. Todos estos casinos te dejan depositar sin activar la promoción. Juegas con tu plata limpia, sin rollover, sin apuesta máxima y sin plazos, pudiendo retirar cuando quieras. Si tu objetivo es jugar tranquilo más que exprimir promociones, a veces el mejor bono es ninguno.
        </P>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <CtaButton slug="monro-casino" text="MONRO: 150% de bono" />
          <CtaButton slug="pinup" text="PIN-UP: hasta $5.000.000" />
        </div>
      </Section>

      {/* ═══ 10. JUEGOS ═══ */}
      <Section id="juegos" alt>
        <SectionTitle>Qué jugar cuando pagas con cripto</SectionTitle>

        <P>
          Los juegos son los mismos de siempre. No hay un catálogo secreto que se desbloquea por pagar con Bitcoin. Pero sí hay categorías que encajan mejor con este perfil de jugador, y una que prácticamente nació de este mundo.
        </P>

        <H3>Crash games: el género que inventó el casino cripto</H3>
        <P>
          Aviator, JetX, Spaceman. La mecánica se explica en una frase: hay un multiplicador que sube y debes retirarte antes de que reviente. Si te sales en 2.4x cobras 2.4 veces tu apuesta. Si revienta antes, perdiste.
        </P>
        <P>
          Las rondas duran entre cinco y veinte segundos, ves a los demás jugadores apostando en tiempo real en un panel lateral, y puedes configurar retiro automático en un multiplicador fijo. <strong className="text-white">STARDA</strong> tiene la mejor colección que encontramos, seguido de 1xBet. Si nunca has jugado uno, parte con apuestas mínimas y retiro automático en 1.5x para agarrarle el ritmo.
        </P>
        <P>
          Advertencia honesta, y va en serio: la velocidad es justamente lo peligroso. Veinte rondas en cinco minutos es facilísimo, y cinco minutos después llevas veinte apuestas hechas sin haberlo pensado ni una vez. Ponte límite de sesión antes de abrirlo, no después.
        </P>

        <H3>Slots: mira el RTP, no la portada</H3>
        <P>
          El RTP es el porcentaje que la máquina devuelve a largo plazo. Un slot al 96,5% devuelve, en promedio sobre millones de giros, $96.500 por cada $100.000 apostados. Uno al 94% devuelve $94.000. Esos dos puntos y medio son enormes en una sesión larga y casi nadie los mira.
        </P>
        <P>
          Casi todos los proveedores publican el RTP en la ficha del juego, dentro del menú de información. Búscalo. Y ojo con algo que poca gente sabe: algunos proveedores ofrecen el mismo título en varias versiones de RTP y el casino elige cuál pone. Mismo juego, misma portada, puede estar al 96,5% en un casino y al 94,2% en otro.
        </P>

        <H3>Casino en vivo: donde la cripto menos aporta</H3>
        <P>
          Las mesas con crupier real funcionan igual pagues como pagues, y los proveedores son los mismos en todos lados. Acá la cripto no aporta nada durante el juego, solo al depositar y retirar. Si el casino en vivo es lo tuyo, <Link href="/chile/mejores-casinos-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">Betsson y JackpotCity</Link> te van a dar mejor experiencia. Y si te interesan juegos concretos, tenemos guías dedicadas a <Link href="/chile/ruleta-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">ruleta online en Chile</Link> y a <Link href="/chile/blackjack-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">blackjack online en Chile</Link>.
        </P>

        <H3>Dados, Plinko y los juegos propios</H3>
        <P>
          Son los que suelen tener provably fair de verdad, porque los desarrolla el propio casino en vez de licenciarlos. Dice, Limbo, Plinko, Mines. Ventaja de casa baja, a veces del uno por ciento, que es de lo mejor que vas a encontrar en cualquier casino, y rondas instantáneas.
        </P>
        <P>
          <strong className="text-white">Stake</strong> es el referente absoluto acá y es, de hecho, la única razón sólida para que un chileno abra cuenta ahí a pesar de todo lo que le criticamos más arriba. Si te interesa entender de verdad cómo se verifica una ronda con provably fair, ese es el lugar donde aprenderlo: tienen una herramienta pública donde pegas las semillas y compruebas el resultado tú mismo, sin tener que confiar en la palabra de nadie. Es un buen ejercicio aunque después no juegues ahí, porque te deja bastante más claro qué te está garantizando ese sello y qué no.
        </P>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <CtaButton slug="starda-casino" text="Crash games en STARDA" />
          <CtaButton slug="fresh-casino" text="Slots en FRESH" />
        </div>
      </Section>

      {/* ═══ 11. SEGURIDAD ═══ */}
      <Section id="seguridad">
        <SectionTitle>Dónde está tu plata en cada momento</SectionTitle>

        <P>
          Cuando juegas con cripto tu plata pasa por cuatro lugares y en cada uno el riesgo es distinto. Entender esto te evita la mayoría de los problemas.
        </P>

        <H3>1. En Buda o CryptoMKT</H3>
        <P>
          Custodia de una empresa chilena establecida. Activa autenticación de dos factores con aplicación, tipo Google Authenticator o Authy, nunca por SMS. El intercambio de SIM es un ataque real y ha ocurrido en Chile más veces de las que se reportan públicamente.
        </P>

        <H3>2. Viajando por la blockchain</H3>
        <P>
          Acá no hay riesgo de robo pero sí de error humano irreversible. Una vez que la transacción sale no hay cancelar, no hay reversión y no hay a quién llamar. La red hace exactamente lo que le dijiste, aunque lo que le dijiste estuviera mal.
        </P>

        <H3>3. En el saldo del casino</H3>
        <P>
          Este es el punto que menos gente piensa. Tu saldo es una <em>wallet custodial</em>: el casino tiene las llaves, tú tienes un número en una pantalla. Mientras la plata esté ahí dependes por completo de que ese operador siga funcionando y siga pagando.
        </P>
        <P>
          Por eso nuestra recomendación es simple y aburrida: <strong className="text-white">no uses el casino como billetera</strong>. Deposita lo que vas a jugar en esta sesión, juega, y si ganas retira. Dejar tres mil dólares durmiendo en un casino de Curaçao durante meses es asumir riesgo gratis, porque no te está pagando nada a cambio.
        </P>

        <H3>4. En tu wallet personal</H3>
        <P>
          Si usas MetaMask o Trust Wallet, las llaves son tuyas y la responsabilidad también. La frase de recuperación de doce palabras es tu plata: quien la tenga, tiene los fondos. No la guardes en una captura de pantalla, no te la mandes por WhatsApp ni por correo. Papel, y en un lugar donde no se moje ni se queme.
        </P>

        <H3>Señales de que un casino cripto es un problema</H3>
        <P>
          Después de revisar bastantes operadores, estas son las banderas rojas que nos hacen cerrar la pestaña: que no muestre número de licencia verificable, que el chat demore más de diez minutos en responder algo simple, que los términos del bono no digan el rollover con un número claro, que acepte una sola red para depositar, o que aparezcan quejas repetidas del mismo tipo en foros con varios meses de historial.
        </P>
        <P>
          Ninguno de los once del ranking tiene esas señales. Pero vas a encontrar decenas de casinos cripto en Google que sí. Una regla práctica que nos sirve: si el nombre no te suena de ningún lado y el dominio se registró hace menos de un año, no le confíes plata todavía por más espectacular que sea el bono. Justamente el bono espectacular suele ser la carnada.
        </P>
      </Section>

      {/* ═══ 12. ERRORES ═══ */}
      <Section id="errores" alt>
        <SectionTitle>Los errores que vimos (y los que cometimos)</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
          {[
            { t: "Mandar por ERC-20 sin mirar", d: "Trece mil pesos tirados a la basura por el mismo resultado. Mira la comisión antes de confirmar: si dice más de dos mil pesos, frena y revisa la red." },
            { t: "Comparar exchanges y no redes", d: "Entre Buda, CryptoMKT y Binance P2P hay $700 de diferencia sobre $100.000. Entre TRC-20 y ERC-20 hay $13.000. Estás optimizando lo que no es." },
            { t: "Comprar Bitcoin para jugar hoy", d: "Bitcoin es buena reserva de valor y mal medio de pago para montos chicos. Comisión alta, confirmación lenta y precio que se mueve. Compra USDT." },
            { t: "Copiar la dirección antes de elegir la red", d: "Cada red genera una dirección distinta. Si copias y después cambias la red, ese envío se pierde. Elige la red primero, siempre." },
            { t: "Dejar el saldo durmiendo en el casino", d: "Es una wallet custodial de un operador sin licencia chilena. Deposita lo de esta sesión y retira lo que ganes." },
            { t: "Mirar solo el porcentaje del bono", d: "Un 500% con rollover x50 en siete días vale menos que un 100% con x30 en catorce. El rollover y el plazo pesan más que el número grande." },
            { t: "Pasarse de la apuesta máxima con bono activo", d: "Una sola ronda por encima del tope puede anularte las ganancias. Es la causa número uno de las quejas que lees en foros." },
            { t: "No hacer la prueba de diez mil pesos", d: "La primera vez con un casino nuevo, manda poco. Si llega, manda el resto. El seguro más barato que vas a contratar." },
          ].map((e) => (
            <div key={e.t} className="rounded-xl bg-[#ef4444]/[0.05] border border-[#ef4444]/15 p-5">
              <h4 className="text-white font-bold text-base mb-2 flex items-start gap-2">
                <span className="text-[#ef4444] shrink-0">&#10007;</span>
                {e.t}
              </h4>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{e.d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <CtaButton slug="1xbet" text="Jugar en 1xBet" />
          <CtaButton slug="starda-casino" text="STARDA: pago en 26 min" />
        </div>
      </Section>

      {/* ═══ 13. FAQ ═══ */}
      <Section id="preguntas-frecuentes">
        <SectionTitle>Preguntas frecuentes</SectionTitle>

        <div className="space-y-4 max-w-4xl">
          {faqItems.map((faq) => (
            <details key={faq.q} className="group rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
              <summary className="cursor-pointer list-none px-6 py-5 text-white font-bold flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                {faq.q}
                <span className="text-[#22c55e] text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-6 pb-5 text-[#a1a1aa] leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══ 14. GLOSARIO ═══ */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario cripto para jugadores</SectionTitle>

        <P>
          Los términos que te vas a topar sí o sí, explicados sin rodeos y sin suponer que ya sabes lo que significan.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryItems.map((item) => (
            <div key={item.term} className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4">
              <h4 className="text-white font-bold text-sm mb-1">{item.term}</h4>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="bg-gradient-to-b from-[#0e0e0e] to-[#0a0a0a] py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00C853]/[0.05] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ya sabes más que la mayoría</h2>
          <p className="text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Compra USDT en Buda, manda por TRC-20, haz la prueba de diez mil pesos la primera vez y retira lo que ganes en vez de dejarlo durmiendo. Con eso solo ya evitas el noventa por ciento de los problemas que tiene la gente con los casinos cripto.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="1xbet" text="Jugar en 1xBet (#1)" />
            <CtaButton slug="pinup" text="Probar PIN-UP" />
          </div>
          <p className="text-[#71717a] text-xs mt-6">
            Juega con responsabilidad. Solo para mayores de 18 años. Los juegos de azar implican riesgo de pérdida.
          </p>
        </div>
      </section>

      {/* ═══ ENLACES INTERNOS ═══ */}
      <Section id="guias-relacionadas">
        <h3 className="text-lg font-bold text-white mb-4">Guías relacionadas</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/chile/mejores-casinos-online" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Mejores Casinos Online en Chile
          </Link>
          <Link href="/chile/ruleta-online" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Ruleta Online en Chile
          </Link>
          <Link href="/chile/blackjack-online" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Blackjack Online en Chile
          </Link>
          <Link href="/mexico/casinos-criptomonedas" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Casinos con Criptomonedas en México
          </Link>
          <Link href="/chile" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Todas las guías de Chile
          </Link>
        </div>
      </Section>
    </>
  );
}
