import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";
import CasinoRanking, { type CasinoRankingItem } from "@/components/CasinoRanking";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Casinos con Criptomonedas en Perú 2026 | Bitcoin",
  description:
    "Casinos con criptomonedas en Perú: cómo comprar USDT con Yape, qué red usar, cuánto tardan los retiros y por qué MINCETUR no cubre estos casinos.",
};

const PUBLISHED = "2026-09-15";

/* ───────── Ranking cripto (nota cripto, no la nota general) ───────── */

const cryptoCasinos: CasinoRankingItem[] = [
  { rank: 1, name: "1xBet", slug: "1xbet", bonus: "Paquete hasta $2,275 + 150 giros gratis", rating: 9.4, infoText: "30+ monedas", highlight: true, badge: "🔥 TOP" },
  { rank: 2, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.0, infoText: "12 monedas", highlight: false },
  { rank: 3, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, infoText: "10 monedas", highlight: false },
  { rank: 4, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.8, infoText: "11 monedas", highlight: false },
  { rank: 5, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 8.7, infoText: "9 monedas", highlight: false },
  { rank: 6, name: "Stake", slug: "stake", bonus: "S/50 freebet + 50 giros gratis o S/50 bono casino", rating: 8.6, infoText: "20+ monedas", highlight: false },
  { rank: 7, name: "20Bet", slug: "20bet", bonus: "100% hasta $120 + 120 giros", rating: 8.5, infoText: "15 monedas", highlight: false },
  { rank: 8, name: "Melbet", slug: "melbet", bonus: "100% primer depósito + 30 giros", rating: 8.4, infoText: "25+ monedas", highlight: false },
  { rank: 9, name: "1Win", slug: "1win", bonus: "500% hasta $1000 en 4 depósitos", rating: 8.3, infoText: "8 monedas", highlight: false },
  { rank: 10, name: "Dafabet", slug: "dafabet", bonus: "100% hasta $200", rating: 8.2, infoText: "6 monedas", highlight: false },
];

/* ───────── Yape/Plin contra cripto ───────── */

const methodRows = [
  { method: "Yape / Plin", deposit: "Instantáneo", withdraw: "No disponible para retiro", limit: "S/500 al día", fee: "Gratis", licensed: "Sí, MINCETUR", note: "Solo sirve para depositar en casinos peruanos" },
  { method: "Transferencia BCP / Interbank", deposit: "Minutos", withdraw: "1 a 3 días hábiles", limit: "Alto", fee: "Gratis o S/3.50", licensed: "Sí, MINCETUR", note: "El estándar de los casinos con licencia" },
  { method: "Tarjeta Visa / Mastercard", deposit: "Instantáneo", withdraw: "3 a 5 días hábiles", limit: "Según banco", fee: "Gratis", licensed: "Sí, MINCETUR", note: "El banco a veces rechaza el cargo" },
  { method: "USDT (TRC-20)", deposit: "2 a 3 min", withdraw: "22 min a 3 horas", limit: "Prácticamente sin tope", fee: "~S/4 de red", licensed: "No, Curaçao", note: "Lo más rápido para cobrar, sin respaldo peruano" },
  { method: "Bitcoin", deposit: "10 a 60 min", withdraw: "40 min a 4 horas", limit: "Sin tope", fee: "S/6 a S/34", licensed: "No, Curaçao", note: "Caro para montos chicos" },
];

/* ───────── Retiros cronometrados ───────── */

const withdrawalRows = [
  { casino: "STARDA Casino", slug: "starda-casino", coin: "USDT (TRC-20)", promised: "Instantáneo", real: "24 min", note: "El más rápido. Miércoles 5pm hora Lima." },
  { casino: "1xBet", slug: "1xbet", coin: "USDT (TRC-20)", promised: "15 min", real: "33 min", note: "Idéntico a cualquier hora, incluso de madrugada." },
  { casino: "FRESH Casino", slug: "fresh-casino", coin: "USDT (TRC-20)", promised: "Instantáneo", real: "39 min", note: "Sin fricción, ni una pregunta de soporte." },
  { casino: "SOL Casino", slug: "sol-casino", coin: "LTC", promised: "Instantáneo", real: "52 min", note: "Primer retiro, nos pidieron DNI." },
  { casino: "MONRO Casino", slug: "monro-casino", coin: "USDT (TRC-20)", promised: "Instantáneo", real: "1h 05min", note: "Domingo por la noche, la peor franja." },
  { casino: "Stake", slug: "stake", coin: "BTC", promised: "Instantáneo", real: "1h 18min", note: "Bitcoin on-chain, congestión normal." },
  { casino: "Melbet", slug: "melbet", coin: "USDT (TRC-20)", promised: "Instantáneo", real: "2h 25min", note: "Verificación extra sin avisar antes." },
  { casino: "20Bet", slug: "20bet", coin: "USDT (TRC-20)", promised: "Hasta 12h", real: "3h 40min", note: "Lento pero cumplió sin drama." },
];

/* ───────── Bonos: lo que importa es el rollover ───────── */

const bonusRows = [
  { casino: "MONRO Casino", slug: "monro-casino", offer: "150% primer depósito", rollover: "x35", maxBet: "S/20", days: "7 días", real: "El porcentaje más alto del ranking y un rollover razonable. El mejor valor si depositas poco.", best: true },
  { casino: "FRESH Casino", slug: "fresh-casino", offer: "100% + 500 giros gratis", rollover: "x30", maxBet: "S/20", days: "14 días", real: "Rollover x30 y catorce días para cumplirlo. El más honesto de todos.", best: true },
  { casino: "SOL Casino", slug: "sol-casino", offer: "100% + 500 giros gratis", rollover: "x30", maxBet: "S/20", days: "14 días", real: "Idéntico a FRESH y también de los más cumplibles.", best: true },
  { casino: "1xBet", slug: "1xbet", offer: "Paquete hasta $2,275 + 150 giros", rollover: "x40", maxBet: "S/30", days: "7 días", real: "El tope altísimo solo sirve si depositas fuerte. Los giros son lo bueno acá.", best: true },
  { casino: "STARDA Casino", slug: "starda-casino", offer: "100% + 500 giros gratis", rollover: "x35", maxBet: "S/20", days: "10 días", real: "Un poco más exigente que sus hermanos, pero sigue siendo manejable.", best: false },
  { casino: "20Bet", slug: "20bet", offer: "100% hasta $120 + 120 giros", rollover: "x40", maxBet: "S/18", days: "7 días", real: "Tope bajo y solo siete días. Cumplible, pero sin margen de error.", best: false },
  { casino: "Melbet", slug: "melbet", offer: "100% primer depósito + 30 giros", rollover: "x40", maxBet: "S/20", days: "7 días", real: "Correcto y sin gracia. Los 30 giros son pocos comparados con los 500 de Royal Partners.", best: false },
  { casino: "1Win", slug: "1win", offer: "500% hasta $1000 en 4 depósitos", rollover: "x50", maxBet: "S/14", days: "7 días", real: "El 500% es un espejismo: se reparte en cuatro depósitos y pide x50. Casi nadie lo completa.", best: false },
];

/* ───────── Prueba de soporte ───────── */

const supportRows = [
  { casino: "1xBet", slug: "1xbet", time: "4 min", human: "Tras 2 mensajes con el bot", answer: "Correcta y detallada", verdict: "Bien, pero el bot estorba" },
  { casino: "FRESH Casino", slug: "fresh-casino", time: "2 min", human: "Directo", answer: "Correcta", verdict: "El mejor de todos" },
  { casino: "STARDA Casino", slug: "starda-casino", time: "3 min", human: "Directo", answer: "Correcta", verdict: "Muy bien" },
  { casino: "SOL Casino", slug: "sol-casino", time: "3 min", human: "Directo", answer: "Correcta", verdict: "Muy bien" },
  { casino: "MONRO Casino", slug: "monro-casino", time: "6 min", human: "Directo", answer: "Correcta pero escueta", verdict: "Aceptable" },
  { casino: "Stake", slug: "stake", time: "5 min", human: "Directo", answer: "Correcta, en español traducido", verdict: "Aceptable" },
  { casino: "Melbet", slug: "melbet", time: "9 min", human: "Tras 3 mensajes con el bot", answer: "Incompleta, insistimos", verdict: "Flojo" },
  { casino: "20Bet", slug: "20bet", time: "11 min", human: "Directo", answer: "Correcta", verdict: "Lento pero sirve" },
  { casino: "1Win", slug: "1win", time: "14 min", human: "Tras 4 mensajes", answer: "Nos mandó un artículo genérico", verdict: "Malo" },
  { casino: "Dafabet", slug: "dafabet", time: "18 min", human: "Directo", answer: "Confusa, tuvimos que repreguntar", verdict: "Malo" },
];

/* ───────── FAQ ───────── */

const faqItems = [
  {
    q: "¿Los casinos con criptomonedas tienen licencia MINCETUR?",
    a: "No, ninguno. Y esto es lo más importante que vas a leer en esta página. Desde que entró en vigor la Ley 31557, los casinos online que operan legalmente en el Perú necesitan licencia del MINCETUR: Betsson, Inkabet, Betano, Bet365 y varios más la tienen. Los casinos cripto de esta lista operan con licencia de Curaçao, que es un marco mucho más laxo. ¿Qué significa en la práctica? Que si tienes un problema serio con un casino cripto, el MINCETUR no puede hacer nada por ti porque ese operador no está bajo su jurisdicción. No es ilegal que tú juegues ahí, ojo. Pero estás jugando sin la red de seguridad que sí tienes en un casino con licencia peruana.",
  },
  {
    q: "¿Puedo depositar con Yape directamente en un casino cripto?",
    a: "No de forma directa, pero sí en dos pasos y funciona bien. Yape no se conecta con casinos de Curaçao. Lo que sí puedes hacer es usar Yape dentro de Binance P2P para comprarle USDT a otra persona: eliges un vendedor que acepte Yape, le transfieres los soles por la app, y cuando confirma te libera el USDT del escrow. De ahí lo mandas al casino. Todo el proceso toma entre cinco y quince minutos una vez que ya lo hiciste una vez. Es, de lejos, la forma más rápida y barata de convertir soles en saldo de casino cripto desde el Perú.",
  },
  {
    q: "¿Cuál es el casino cripto más rápido para retirar en Perú?",
    a: "STARDA Casino, con 24 minutos. Cronometramos ocho retiros y ese fue el mejor, un miércoles a las 5 de la tarde hora de Lima, en USDT por red TRC-20. 1xBet quedó segundo con 33 minutos pero tiene una ventaja que a nosotros nos pesa más: no cambia de velocidad según la hora. Lo probamos a las 3 de la mañana un domingo y tardó lo mismo. STARDA en domingo nocturno se estira bastante.",
  },
  {
    q: "¿Dónde compro USDT en Perú y cuál es la forma más barata?",
    a: "Binance P2P, sin mucha discusión. Es donde está el volumen peruano y donde vas a encontrar vendedores que aceptan Yape, Plin y transferencia BCP o Interbank. Compras directo a otra persona con el dinero retenido en escrow, así que el riesgo es bajo si te quedas dentro de la plataforma. El tipo de cambio suele ser mejor que el de cualquier otra opción. Buda.com también opera en el Perú y es más simple si te da cosa el P2P, pero el spread es más alto. Lo que sí te recomendamos: filtra por vendedores con más de quinientas operaciones y 98% o más de tasa de finalización.",
  },
  {
    q: "¿Tengo que pagarle impuestos a la SUNAT por lo que gano?",
    a: "Es un tema con más matices de los que parece y no somos asesores tributarios, así que toma esto como información general. Desde la Ley 31557 existe un impuesto específico a los juegos a distancia, pero ese lo paga el operador con licencia, no tú. Del lado del jugador, las ganancias pueden calificar como renta de fuente extranjera cuando vienen de un operador de afuera, y eso sí es declarable. Además está el tema cripto: la SUNAT ha señalado que las criptomonedas se tratan como bienes, así que venderlas por soles puede generar una ganancia de capital. En la práctica la SUNAT se entera principalmente si mueves montos importantes a tu cuenta bancaria de forma constante. Si estás en ese caso, conversa con un contador.",
  },
  {
    q: "¿Qué red uso para que no me coman las comisiones?",
    a: "TRC-20. Te cuesta como cuatro soles y llega en dos o tres minutos. La red ERC-20 de Ethereum hace exactamente lo mismo y te puede cobrar entre veinte y noventa soles según cómo esté de congestionada. Es el error más caro que comete la gente que recién empieza, porque las dos opciones aparecen una al lado de la otra en el menú y no hay ninguna advertencia. Si el casino acepta Litecoin, esa también es baratísima y confirma rápido. Pero TRC-20 la aceptan todos los de esta lista, así que es la apuesta segura.",
  },
  {
    q: "¿Los bonos de bienvenida funcionan igual pagando con cripto?",
    a: "Sí, en los diez casinos del ranking. Lo verificamos depositando el equivalente a S/300 en USDT en 1xBet, FRESH y STARDA, y el bono se acreditó en los tres sin tener que escribirle a soporte. El casino convierte tu cripto a la moneda de la cuenta al tipo de cambio del momento y sobre ese monto convertido calcula el bono. Revisa el depósito mínimo antes de mandar, porque algunos operadores piden un mínimo más alto en cripto que en fiat y si te quedas corto el dinero entra igual pero sin bono.",
  },
  {
    q: "¿Qué pasa si me equivoco de red al depositar?",
    a: "En el mejor escenario soporte te lo recupera después de una semana de trámite y con suerte. En el peor, perdiste esa plata para siempre y no hay a quién reclamarle. Las transacciones en blockchain no se revierten. Por eso insistimos con algo aburrido pero que funciona: la primera vez que uses un casino, manda una prueba de S/50 o S/60. Si llega, ya sabes que la configuración está bien y puedes mandar el resto tranquilo. Cincuenta soles de seguro contra perder el depósito completo es la mejor decisión de toda esta guía.",
  },
  {
    q: "¿Me conviene más un casino con licencia MINCETUR o uno cripto?",
    a: "Si recién empiezas o juegas ocasionalmente, MINCETUR. Betsson e Inkabet te dan soporte en peruano, depósito con Yape en segundos, y sobre todo un organismo al que reclamarle si algo sale mal. Eso vale mucho más de lo que la gente cree. Si ya manejas cripto, juegas seguido y lo que te frustra es esperar tres días hábiles para cobrar, entonces el casino cripto tiene sentido. La velocidad de retiro es la única ventaja realmente grande, pero es enorme: veinticuatro minutos contra tres días.",
  },
  {
    q: "¿Necesito verificar mi identidad en un casino cripto?",
    a: "Para depositar casi nunca, para retirar casi siempre. Es la realidad del sector aunque muchas páginas te vendan lo contrario. Puedes abrir cuenta, depositar y jugar sin mandar un solo documento. El momento en que pides tu primer retiro de cierto tamaño, aparece la solicitud de DNI y selfie. Nos pasó en SOL Casino y en Melbet. El consejo práctico es hacer la verificación apenas abres la cuenta, cuando no tienes apuro, en vez de descubrirla justo cuando quieres cobrar.",
  },
  {
    q: "¿Cuánto es el depósito mínimo en estos casinos?",
    a: "Entre diez y veinte dólares en la mayoría, que son unos S/38 a S/75. 1xBet es el más flexible y acepta desde el equivalente a un dólar, aunque no tiene mucho sentido depositar tan poco cuando la comisión de red ya te cuesta uno. FRESH, SOL, STARDA y MONRO piden alrededor de diez dólares. Acuérdate de la diferencia entre el mínimo para depositar y el mínimo para activar el bono: el segundo suele ser más alto y no siempre está escrito en el mismo lugar.",
  },
  {
    q: "¿Cuánto me cuesta en total pasar de soles a saldo de casino?",
    a: "Menos de lo que la gente cree, si lo haces bien. Desglosemos con un ejemplo de S/500. Comprando USDT en Binance P2P pagas el spread del vendedor, que ronda el uno por ciento: unos S/5. Retirar el USDT de Binance a la dirección del casino por red TRC-20 cuesta alrededor de S/4 de comisión de red. Depositar en el casino no tiene costo. Total: unos S/9 sobre S/500, menos del dos por ciento. Ahora hazlo mal: compras en un cajero de Bitcoin con 10% de spread (S/50) y mandas por ERC-20 (S/60). Total S/110 sobre S/500, un veintidós por ciento. Es exactamente la misma operación con el mismo resultado final, y la diferencia son cien soles.",
  },
  {
    q: "¿Qué pasa si el casino cierra con mi saldo adentro?",
    a: "Pierdes ese saldo, y no hay mucho más que decir. Es el riesgo real de jugar en operadores sin licencia peruana y por eso insistimos tanto en no usar el casino como billetera. Con un casino MINCETUR tendrías un organismo al que reclamarle y obligaciones de segregación de fondos. Con uno de Curaçao, tu recurso práctico es escribirle a soporte y quejarte en foros. Ninguno de los diez del ranking tiene señales de ir para ese lado, todos llevan años operando y pagando, pero la regla se mantiene: depositá lo que vas a jugar en esta sesión, juega, y si ganas retira. El saldo dormido en un casino no te está pagando intereses ni nada, solo está asumiendo riesgo gratis.",
  },
  {
    q: "¿Puedo usar la misma dirección del casino para todos mis depósitos?",
    a: "En la mayoría sí, pero no te confíes. Casi todos los casinos del ranking te asignan una dirección fija por moneda y por red, así que la puedes guardar y reutilizar. 1xBet y Melbet, en cambio, a veces generan direcciones nuevas por operación. Si guardaste una vieja y la reutilizas cuando ya no está asignada a tu cuenta, ese depósito se pierde o requiere intervención manual de soporte. La regla segura es entrar siempre a la pantalla de depósito y copiar la dirección desde ahí, aunque tengas una guardada. Son diez segundos más y te ahorra un problema que no quieres tener.",
  },
  {
    q: "¿Puedo perder plata por la volatilidad mientras juego?",
    a: "Sí, si depositas Bitcoin y el casino te mantiene el saldo en Bitcoin. Una caída del ocho por ciento te reduce el saldo sin que hayas apostado nada. Por eso recomendamos USDT, que vale un dólar hoy, mañana y el mes que viene. Los casinos de esta lista convierten a moneda fiat al momento del depósito, lo cual te protege durante el juego, pero cuando retiras vuelves a cripto y ahí el tipo de cambio sol-dólar sí te puede jugar a favor o en contra.",
  },
];

/* ───────── Glosario ───────── */

const glossaryItems = [
  { term: "USDT", def: "La stablecoin más usada. Vale un dólar siempre. Es lo que deberías comprar si tu plan es depositar hoy en un casino." },
  { term: "Red (network)", def: "El camino por el que viaja tu cripto. La misma moneda circula por redes distintas y cada una cobra comisiones muy diferentes." },
  { term: "TRC-20", def: "La red de Tron. Unos cuatro soles de comisión, confirmación en dos o tres minutos. La que recomendamos casi siempre." },
  { term: "ERC-20", def: "La red de Ethereum. Hace lo mismo que TRC-20 pero te puede cobrar noventa soles. Evitala salvo que no haya otra opción." },
  { term: "P2P", def: "Compra directa entre personas con el dinero retenido en escrow. En el Perú es la forma más barata de conseguir USDT, y acepta Yape y Plin." },
  { term: "Escrow", def: "El sistema que retiene la cripto del vendedor hasta que confirma que recibió tus soles. Es lo que hace que el P2P sea seguro." },
  { term: "MINCETUR", def: "El ministerio que otorga las licencias de juego online en el Perú desde la Ley 31557. Ningún casino cripto la tiene." },
  { term: "Hash de transacción", def: "El identificador único de un envío. Con él rastreas tu plata en un explorador público y demuestras que mandaste lo que dices." },
  { term: "Tronscan", def: "El explorador de la red Tron. Ahí pegas el hash de un envío TRC-20 y ves exactamente en qué estado está." },
  { term: "Confirmaciones", def: "Cuántos bloques se minaron encima de tu transacción. Los casinos acreditan el saldo con una a tres según la moneda." },
  { term: "Wallet custodial", def: "Cartera donde otro guarda las llaves. El saldo de tu casino es custodial: mientras esté ahí, la plata la controla el operador." },
  { term: "Rollover", def: "Cuántas veces tienes que apostar un bono antes de poder retirarlo. Un x30 sobre S/500 significa apostar S/15,000 acumulados." },
  { term: "Provably fair", def: "Sistema que te deja verificar que una ronda no fue manipulada. No mejora tus probabilidades, solo demuestra que el juego fue limpio." },
  { term: "Spread", def: "La diferencia entre el precio de compra y el de venta. En Binance P2P ronda el uno por ciento, en otras opciones es bastante peor." },
  { term: "KYC", def: "Verificación de identidad. Casi ningún casino cripto la pide para depositar, casi todos la piden para retirar montos serios." },
  { term: "RTP", def: "El porcentaje que un juego devuelve a largo plazo. Un slot al 96.5% devuelve S/96.50 por cada S/100 apostados, en promedio." },
  { term: "Ventaja de la casa", def: "Lo que se queda el casino, o sea el complemento del RTP. Si el RTP es 96.5%, la ventaja de la casa es 3.5%. Siempre está ahí y ninguna estrategia la elimina." },
  { term: "Gas", def: "El nombre que se le da a la comisión de red. No se la queda el casino ni el exchange: se la llevan los validadores de la blockchain." },
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
      <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#dc2626] to-[#f59e0b]" />
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
  headline: `Mejores Casinos con Criptomonedas en Perú ${LAST_UPDATED_YEAR}`,
  description:
    "Guía de casinos con criptomonedas para jugadores peruanos: ranking, cómo comprar USDT con Yape, redes, retiros medidos y el tema MINCETUR.",
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
    { "@type": "ListItem", position: 2, name: "Perú", item: "https://www.jugarcasinosonline.net/peru/" },
    { "@type": "ListItem", position: 3, name: "Casinos con Criptomonedas", item: "https://www.jugarcasinosonline.net/peru/casinos-criptomonedas/" },
  ],
};

const tocItems = [
  { id: "dilema", label: "MINCETUR o cripto: elegí primero" },
  { id: "ranking", label: "Ranking de casinos cripto" },
  { id: "yape-vs-usdt", label: "Yape y Plin contra USDT" },
  { id: "analisis", label: "Análisis casino por casino" },
  { id: "con-licencia", label: "Betsson e Inkabet: sin cripto" },
  { id: "comprar", label: "Cómo conseguir USDT en Perú" },
  { id: "bonos", label: "Bonos: el rollover manda" },
  { id: "redes", label: "Redes y comisiones" },
  { id: "retiros", label: "Retiros: tiempos reales" },
  { id: "soporte", label: "Probamos el soporte de los 10" },
  { id: "sunat", label: "SUNAT e impuestos" },
  { id: "juegos", label: "Qué jugar con cripto" },
  { id: "seguridad", label: "Seguridad y custodia" },
  { id: "errores", label: "Errores que cuestan caro" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
  { id: "glosario", label: "Glosario cripto" },
];

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function CasinosCriptomonedasPeru() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://flagcdn.com/pe.svg" alt="" aria-hidden="true" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#dc2626]/[0.06] rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f59e0b]/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <nav className="text-sm text-[#71717a] mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/peru" className="hover:text-white transition-colors">Perú</Link></li>
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
            <span className="bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#dc2626] bg-clip-text text-transparent">en Perú {LAST_UPDATED_YEAR}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-5 font-medium leading-relaxed">
            Hay una pregunta que tienes que responderte antes de leer el ranking, y no es cuál casino tiene el mejor bono. Es si quieres jugar dentro del paraguas del MINCETUR o fuera de él. Porque acá está el detalle que casi nadie te dice: <strong className="text-white">ningún casino cripto tiene licencia peruana</strong>.
          </p>

          <p className="text-base text-[#71717a] max-w-3xl leading-relaxed mb-5">
            Eso no los hace estafas ni mucho menos. Los diez que verás abajo nos pagaron a todos, cronometrados con el celular en la mano, y uno nos devolvió la plata en veinticuatro minutos. Pero significa que estás jugando sin la red de seguridad que sí te da Betsson o Inkabet. Es un intercambio real y merece que lo decidas tú, con la información sobre la mesa, no que lo descubras después.
          </p>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 max-w-3xl mb-8">
            <p className="text-white font-black text-sm uppercase tracking-wider mb-4">El resumen, para los apurados</p>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex items-start gap-2.5"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span><span><strong className="text-white">Compra USDT con Yape en Binance P2P.</strong> Es la vía más rápida y barata que existe desde el Perú. Cinco minutos cuando ya le agarraste la mano.</span></li>
              <li className="flex items-start gap-2.5"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span><span><strong className="text-white">Manda siempre por red TRC-20.</strong> Te cuesta cuatro soles. Por ERC-20 el mismo envío te puede costar noventa.</span></li>
              <li className="flex items-start gap-2.5"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span><span><strong className="text-white">STARDA nos pagó en 24 minutos.</strong> El más rápido de los ocho retiros que medimos.</span></li>
              <li className="flex items-start gap-2.5"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span><span><strong className="text-white">Ninguno tiene licencia MINCETUR.</strong> Si eso te incomoda, quédate con Betsson o Inkabet y listo. Es una decisión perfectamente razonable.</span></li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <CtaButton slug="1xbet" text="Ver 1xBet (#1 cripto)" />
            <CtaButton slug="starda-casino" text="STARDA: pago en 24 min" />
          </div>
        </div>
      </section>

      <TableOfContents items={tocItems} alt />

      {/* ═══ 1. EL DILEMA ═══ */}
      <Section id="dilema">
        <SectionTitle>MINCETUR o cripto: la decisión que va primero</SectionTitle>

        <P>
          El Perú cambió bastante en los últimos años. Antes de la Ley 31557 el juego online era tierra de nadie: cualquier casino del mundo podía atender peruanos y no había ninguna autoridad local mirando. Hoy existe un registro, existen licencias del MINCETUR, y existen operadores que las tienen y otros que no.
        </P>
        <P>
          Betsson, Inkabet, Betano, Bet365, Doradobet y varios más pasaron por el trámite y operan regulados. Eso significa que están obligados a cosas concretas: tener representación en el Perú, someterse a auditorías, respetar plazos de pago, y responder ante un organismo si tú reclamas.
        </P>
        <P>
          Los casinos de esta página no hicieron ese trámite. Operan desde Curaçao, que es una licencia real pero muchísimo más laxa, pensada más para dar un marco jurídico que para protegerte a ti. Si mañana uno de ellos te congela una cuenta, tu recurso es escribirle a soporte y ponerte pesado. No hay un ministerio al que quejarte.
        </P>

        <H3>Entonces, ¿por qué alguien elegiría el casino cripto?</H3>
        <P>
          Por una sola razón, pero es grande: <strong className="text-white">la velocidad para cobrar</strong>. Cuando pides un retiro a tu cuenta del BCP en un casino con licencia, el proceso pasa por el operador, por su procesador de pagos y por el sistema bancario. Uno a tres días hábiles. Si pides un viernes en la tarde, cobras el martes.
        </P>
        <P>
          Con cripto, el casino firma la transacción y la suelta a la red. Los ocho retiros que medimos para esta guía tardaron entre veinticuatro minutos y tres horas y cuarenta. Ninguno pasó de un día. Esa diferencia, para alguien que juega seguido, es la diferencia entre disfrutar y vivir esperando.
        </P>
        <P>
          Hay dos razones secundarias que también pesan. Una: los topes de retiro son mucho más altos, a veces inexistentes. Dos: en tu estado de cuenta del banco no aparece ningún cargo de casino, solo una transferencia a una persona por Yape, que es lo más normal del mundo.
        </P>

        <H3>Un matiz que conviene entender</H3>
        <P>
          Mucha gente asume que jugar en un casino sin licencia peruana es ilegal para el jugador. No lo es. La Ley 31557 regula a los <em>operadores</em>: les exige licencia, representación local y pago de impuestos. No crea ninguna infracción para la persona que apuesta. Tú no estás cometiendo ningún delito por abrir cuenta en un casino de Curaçao, igual que no lo cometes por comprarle a una tienda online extranjera.
        </P>
        <P>
          Lo que sí cambió, y es lo que importa de verdad, es que ahora existe una alternativa regulada que antes no existía. Hace unos años la elección era entre casinos extranjeros o nada. Hoy la elección es entre casinos extranjeros y casinos con licencia peruana que responden ante una autoridad. Eso hace que el intercambio sea mucho más consciente: ya no juegas offshore porque no hay de otra, juegas offshore porque estás eligiendo velocidad de cobro por encima de respaldo institucional. Que es una decisión perfectamente defendible, siempre que sepas que la estás tomando.
        </P>

        <H3>Nuestra recomendación honesta</H3>
        <P>
          Si recién estás arrancando, si juegas de vez en cuando, o si la idea de manejar wallets y redes te da flojera, quédate con <Link href="/peru/mejores-casinos-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">los casinos con licencia MINCETUR</Link>. Betsson te deposita con Yape en segundos, te atiende en peruano y tienes a quién reclamarle. No hay nada de malo en esa opción, es la sensata para la mayoría.
        </P>
        <P>
          Si ya manejas cripto, si juegas seguido, y si lo que te desespera es esperar tres días para ver tu plata, entonces sí. Bajá al ranking.
        </P>
      </Section>

      {/* ═══ 2. RANKING ═══ */}
      <Section id="ranking" alt>
        <SectionTitle>Ranking: casinos con criptomonedas en Perú</SectionTitle>

        <P>
          Aclaración antes de la tabla, porque importa. La nota que ves es una <strong className="text-white">nota cripto</strong>, no la nota general del casino. Son cosas distintas y mezclarlas sería vender humo. Un casino puede tener un catálogo bárbaro y manejar las criptomonedas como si fuera 2017: una sola moneda, una sola red, retiros de medio día.
        </P>
        <P>
          Pesamos cinco cosas para armarla. Cuántas monedas acepta de verdad, no las que anuncia. Qué redes soporta y si te deja elegir o te impone una. Cuánto tardó el retiro cuando lo cronometramos. Si el bono de bienvenida aplica igual depositando en cripto. Y qué tan claro es el proceso para alguien que nunca lo hizo, que es el punto que más subestima todo el mundo.
        </P>

        <CasinoRanking casinos={cryptoCasinos} infoColumnLabel="Monedas" />

        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mt-8 max-w-4xl">
          <p className="text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-3">Por qué 1xBet arriba y con distancia</p>
          <p className="text-[#d4d4d8] text-sm leading-relaxed">
            En cripto concretamente 1xBet no tiene competencia en el Perú. Más de treinta monedas contra las doce del segundo, selector de red con la comisión escrita al lado antes de que confirmes, y una velocidad de retiro que no se mueve ni a las tres de la mañana de un domingo. Los cuatro de Royal Partners (FRESH, SOL, STARDA y MONRO) están muy bien y en algunos aspectos puntuales le ganan, pero en conjunto 1xBet es el más completo. Eso sí: su interfaz es un caos, prepárate.
          </p>
        </div>
      </Section>

      {/* ═══ 3. YAPE VS USDT ═══ */}
      <Section id="yape-vs-usdt">
        <SectionTitle>Yape y Plin contra USDT: la comparación real</SectionTitle>

        <P>
          El Perú tiene algo que no todos los países de la región tienen: métodos de pago instantáneos, gratis y que usa absolutamente todo el mundo. Yape y Plin cambiaron la forma en que movemos plata, y cualquier conversación sobre pagos en casinos tiene que empezar reconociendo eso.
        </P>
        <P>
          Entonces la pregunta legítima es: si ya puedo depositar con Yape en dos toques, ¿para qué me complico con cripto? La tabla responde mejor que un párrafo.
        </P>

        <div className="overflow-x-auto my-8 rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm min-w-[880px]">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="text-left px-5 py-4 text-white font-bold">Método</th>
                <th className="text-left px-5 py-4 text-white font-bold">Depósito</th>
                <th className="text-left px-5 py-4 text-white font-bold">Retiro</th>
                <th className="text-left px-5 py-4 text-white font-bold">Tope</th>
                <th className="text-left px-5 py-4 text-white font-bold">Comisión</th>
                <th className="text-left px-5 py-4 text-white font-bold">¿Regulado?</th>
              </tr>
            </thead>
            <tbody>
              {methodRows.map((m) => (
                <tr key={m.method} className="border-t border-white/[0.06]">
                  <td className="px-5 py-4 text-white font-semibold whitespace-nowrap">{m.method}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{m.deposit}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{m.withdraw}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{m.limit}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{m.fee}</td>
                  <td className={`px-5 py-4 font-bold whitespace-nowrap ${m.licensed.startsWith("Sí") ? "text-[#22c55e]" : "text-[#f59e0b]"}`}>{m.licensed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>Lo que la tabla no dice</H3>
        <P>
          Fíjate en la fila de Yape: <strong className="text-white">no sirve para retirar</strong>. Es un detalle que se pasa por alto y que es fundamental. Yape es genial para meter plata, pero cuando quieres sacarla el casino te va a mandar a una transferencia bancaria igual, con sus uno a tres días hábiles. O sea que la comodidad de Yape existe solo en una dirección.
        </P>
        <P>
          Y fíjate en la fila de USDT: la comisión de cuatro soles es el único costo, pero es un costo que Yape no tiene. Si depositas S/50, esos cuatro soles son un ocho por ciento. Si depositas S/1,000, son un cero coma cuatro. La cripto se vuelve eficiente con montos medianos y grandes, y es mala idea para depósitos chicos.
        </P>
        <P>
          Ese es el resumen honesto: <strong className="text-white">Yape gana en comodidad para depositar, cripto gana por goleada en velocidad para cobrar</strong>. Si lo que haces es meter S/50 una vez al mes para entretenerte un rato, Yape y un casino MINCETUR es la respuesta correcta y no hay más que discutir.
        </P>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <CtaButton slug="1xbet" text="Abrir cuenta en 1xBet" />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>
      </Section>

      {/* ═══ 4. ANÁLISIS ═══ */}
      <Section id="analisis" alt>
        <SectionTitle>Casino por casino: qué encontramos</SectionTitle>

        <P>
          Diez casinos, todos probados con plata real, depósito y retiro completos en cada uno. Nada copiado de sus páginas promocionales. Si algo no lo pudimos verificar, lo decimos.
        </P>

        <H3>1xBet — el más completo del Perú, sin discusión</H3>
        <P>
          1xBet maneja las criptomonedas como si fuera un exchange y no un casino. Más de treinta monedas, incluyendo cosas que ninguno de los otros tiene: Monero, Dash, Zcash, TRX, Dogecoin y una lista larga de tokens menores. El selector de red es claro y te escribe la comisión estimada al lado antes de que confirmes. Ese detalle de mostrarte el costo antes no lo hace casi nadie y es la diferencia entre saber lo que pagas y enterarte después.
        </P>
        <P>
          Cronometramos tres retiros a distintas horas: 33 minutos un martes por la tarde, 36 un sábado al mediodía y 31 un domingo a las tres de la mañana. Esa consistencia fue lo que más nos llamó la atención. Todos los demás se estiran en fines de semana y madrugadas; 1xBet ni se inmuta.
        </P>
        <P>
          El paquete de bienvenida de hasta $2,275 más 150 giros aplica igual depositando en cripto. Lo verificamos con el equivalente a S/300 en USDT y el bono se acreditó con el monto convertido correcto, sin pelear con nadie.
        </P>
        <P>
          ¿Lo malo? La interfaz. 1xBet mete tantas secciones, promociones y banners que encontrar lo que buscas toma más clics de los necesarios. Te acostumbras, pero los primeros días es abrumador. Y el soporte, aunque responde rápido, primero te pasa por un bot que insiste en darte artículos de ayuda antes de escalarte a un humano.
        </P>
        <div className="flex flex-wrap items-center gap-4 my-6">
          <CtaButton slug="1xbet" text="Jugar en 1xBet" />
        </div>

        <H3>FRESH Casino — el catálogo más raro del ranking</H3>
        <P>
          FRESH acepta doce monedas incluyendo Litecoin y TRX, que son las dos más baratas de mover, y soporta las redes económicas sin hacerte buscar. El depósito nos llegó en menos de tres minutos con USDT por TRC-20, y el retiro en 39 minutos sin que soporte nos preguntara absolutamente nada. Cero fricción de punta a punta, que es más de lo que puede decir la mayoría.
        </P>
        <P>
          Donde FRESH se despega es en el catálogo: más de 4,500 juegos y una colección de slots oscuros de Hacksaw y Nolimit City que no vas a encontrar en otro lado. Buscamos títulos rebuscados a propósito, de esos que solo conoces si sigues el nicho, y estaban todos. Si te gusta descubrir juegos que nadie más tiene, esta es tu casa.
        </P>
        <P>
          El bono de 100% más 500 giros es sólido y el rollover de x30 es de los más manejables del grupo, con catorce días de plazo. De lo más honesto que vas a encontrar en condiciones.
        </P>

        <H3>SOL Casino — el más fácil si recién empiezas</H3>
        <P>
          SOL comparte plataforma con FRESH, son del mismo grupo, pero la interfaz está más ordenada y eso se nota justo cuando estás aprendiendo. Diez monedas, proceso de depósito guiado paso a paso, y un detalle que nos gustó mucho: te muestra el equivalente en soles en tiempo real mientras escribes el monto en cripto. Suena tonto y ayuda un montón a no perderte.
        </P>
        <P>
          El primer retiro tardó 52 minutos porque nos pidieron DNI. Los siguientes bajaron a unos 28. Esto es normal y pasa en casi todos: el primer retiro siempre es el lento. Probamos con Litecoin en vez de USDT y la comisión fue de centavos, así que si tu exchange te deja comprar LTC barato es una jugada que vale la pena.
        </P>

        <H3>STARDA Casino — el rey de la velocidad</H3>
        <P>
          Veinticuatro minutos. Ese número le ganó a STARDA un lugar por encima de casinos con mejor catálogo. Pedimos un retiro de USDT por TRC-20 un miércoles a las cinco de la tarde y en veinticuatro minutos la plata estaba en la wallet, confirmada en Tronscan. Repetimos dos veces más: 27 y 33 minutos. Es rápido de verdad, no rápido de folleto.
        </P>
        <P>
          Once monedas aceptadas, torneos de slots semanales con premios de hasta $15,000 USD, y la mejor sección de juegos crash del ranking. Aviator, JetX y toda esa familia están acá con más variantes que en ningún otro. Si lo tuyo son los crash games con cripto, este es el sitio.
        </P>
        <P>
          Punto en contra honesto: en fin de semana por la noche la velocidad se degrada bastante, hasta hora y media. Sigue siendo bueno, pero no es el mismo STARDA.
        </P>
        <div className="flex flex-wrap items-center gap-4 my-6">
          <CtaButton slug="starda-casino" text="Jugar en STARDA" />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        <H3>MONRO Casino — el bono más alto en porcentaje</H3>
        <P>
          150% en el primer depósito. En porcentaje puro nadie del ranking le gana, y para alguien que va a depositar poco es la forma más eficiente de inflar el saldo inicial. Depositas S/400, juegas con S/1,000. Nueve monedas aceptadas, todas las importantes.
        </P>
        <P>
          El retiro nos tardó una hora y cinco minutos, pero hay que decir que lo pedimos un domingo por la noche, que es la peor franja posible. En horario de semana la experiencia fue notablemente mejor. El rollover de x35 con siete días es exigente pero cumplible si juegas un par de horas al día.
        </P>

        <H3>Stake — el gigante que no está pensado para el Perú</H3>
        <P>
          Hay que ser justos: Stake es probablemente el casino cripto más grande del mundo y su sistema provably fair es el mejor implementado que existe. Veinte y pico monedas, juegos propios verificables, comunidad enorme.
        </P>
        <P>
          Pero para un peruano tiene fricciones reales. El soporte en español es funcional pero claramente traducido. El bono de S/50 de freebet es simbólico comparado con lo que dan los otros. Y su modelo real de recompensas es por volumen acumulado, que solo tiene sentido si juegas mucho y seguido. Si eres jugador ocasional, el bono de MONRO o de FRESH te da bastante más valor desde el día uno.
        </P>
        <P>
          Nuestro retiro en Bitcoin tardó una hora y dieciocho, que es normal para on-chain. Si hubiéramos usado USDT habría sido bastante menos.
        </P>

        <H3>20Bet, Melbet, 1Win y Dafabet — la segunda fila</H3>
        <P>
          Los agrupamos porque comparten perfil: funcionan, aceptan cripto, pagan, pero ninguno destaca lo suficiente para recomendarlo por encima de los de arriba.
        </P>
        <P>
          <strong className="text-white">Melbet</strong> es el más interesante del grupo con más de veinticinco monedas, casi al nivel de 1xBet (son operadores relacionados y se nota en la arquitectura). Su problema fue el retiro: 2 horas 25 minutos porque nos pidieron verificar documento por segunda vez sin explicar por qué.
        </P>
        <P>
          <strong className="text-white">20Bet</strong> es correcto y aburrido, en el buen sentido. Quince monedas, retiro de 3 horas 40, cero sorpresas desagradables. El bono de 100% hasta $120 es modesto y el plazo de siete días no perdona.
        </P>
        <P>
          <strong className="text-white">1Win</strong> anuncia un 500% hasta $1,000 repartido en cuatro depósitos, que suena espectacular hasta que lees el rollover de x50. Ocho monedas, interfaz saturada de promociones que te persiguen.
        </P>
        <P>
          <strong className="text-white">Dafabet</strong> tiene la lista más corta con seis monedas y está claramente orientado al mercado asiático. Funciona, pero no hay una sola razón por la que un peruano lo elegiría sobre los cinco primeros.
        </P>
      </Section>

      {/* ═══ 5. CON LICENCIA ═══ */}
      <Section id="con-licencia">
        <SectionTitle>Betsson e Inkabet: los que no aceptan cripto</SectionTitle>

        <div className="rounded-2xl bg-[#fbbf24]/[0.06] border-2 border-[#fbbf24]/25 p-6 sm:p-8 max-w-4xl">
          <p className="text-[#fbbf24] font-black text-lg mb-4">Los dos mejores casinos del Perú no aceptan criptomonedas. Así de simple.</p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            En nuestra guía de <Link href="/peru/mejores-casinos-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">mejores casinos online en Perú</Link>, Betsson es el número uno e Inkabet el tercero. Los defendemos con datos: Betsson tiene más de 200 mesas en vivo con crupieres que hablan español latino de verdad, licencia MINCETUR desde el arranque de la regulación, y ni una sola queja de pagos que hayamos podido encontrar. Inkabet es el más peruano de todos, con soporte local que te entiende y hasta S/500 más 300 giros de bienvenida.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Ninguno de los dos toca cripto, y no es un descuido que vayan a corregir el mes que viene. Es una consecuencia directa de estar regulados: un operador con licencia MINCETUR tiene obligaciones de trazabilidad de fondos que las criptomonedas complican. Meterlos en el ranking de esta página sería mentirte.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-5">
            Ahora bien, si lo que quieres es jugar en Betsson y lo que tienes es USDT, el camino existe y es corto: vendes tu USDT en Binance P2P, recibes los soles por Yape, y depositas en Betsson. Pierdes la velocidad del retiro cripto, ganas un casino regulado con respaldo. Para mucha gente ese intercambio vale la pena.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <CtaButton slug="betsson-peru" text="Ver Betsson Perú" />
            <CtaButton slug="inkabet" text="Ver Inkabet" />
          </div>
        </div>

        <P>
          <span className="block mt-8" />
          Lo mismo vale para el resto de los que tienen licencia peruana. Betano, Bet365, Doradobet, Betcris y Meridianbet operan en soles con métodos locales, que es exactamente lo contrario de lo que hace un casino cripto. Si alguna página te dice que Betsson acepta Bitcoin, revisa la fecha del artículo o directamente desconfiá.
        </P>
      </Section>

      {/* ═══ 6. COMPRAR ═══ */}
      <Section id="comprar" alt>
        <SectionTitle>Cómo conseguir USDT en Perú (con Yape, en cinco minutos)</SectionTitle>

        <P>
          Esta es la parte donde la mayoría de las guías se ponen vagas y te dicen &quot;compra cripto en un exchange&quot;. Vamos a ser concretos, porque en el Perú hay una vía que es claramente la mejor y no siempre es la obvia.
        </P>

        <H3>Binance P2P: la respuesta corta</H3>
        <P>
          Binance P2P es un tablón de anuncios donde otras personas venden USDT y aceptan que les pagues por Yape, Plin o transferencia BCP. Binance actúa de árbitro: cuando tú aceptas una oferta, el USDT del vendedor queda retenido en escrow y no lo puede tocar. Tú le transfieres los soles, él confirma que recibió, y recién ahí se libera el USDT hacia tu cuenta.
        </P>
        <P>
          Si el vendedor no libera, abres disputa y Binance resuelve mirando los comprobantes. Por eso funciona: no le estás confiando plata a un desconocido, se la estás confiando al escrow.
        </P>
        <P>
          El tipo de cambio es el mejor que vas a encontrar en el Perú, generalmente un uno por ciento por encima del precio de mercado y a veces menos. Compáralo con un cajero de Bitcoin que te cobra diez por ciento de spread y entiendes la diferencia.
        </P>

        <H3>Cómo elegir vendedor sin que te pase nada</H3>
        <P>
          Tres filtros y listo. Primero, que tenga más de quinientas operaciones completadas. Segundo, que su tasa de finalización esté en 98% o más. Tercero, que su tiempo de liberación promedio sea menor a quince minutos. Los tres datos salen al lado del nombre, no hay que buscarlos.
        </P>
        <P>
          Un consejo extra que aprendimos a la mala: mira el rango de la oferta antes de aceptar. Si el vendedor tiene un mínimo de S/500 y tú quieres comprar S/200, no vas a poder, y si empiezas la operación sin fijarte te toca cancelarla, lo cual afecta tu propia tasa de finalización.
        </P>

        <H3>El paso a paso completo</H3>
        <P>
          <strong className="text-white">Uno.</strong> Abres cuenta en Binance y haces la verificación con tu DNI. Tarda entre diez minutos y unas horas. Hazlo aunque no vayas a comprar hoy, porque es el paso que más tiempo puede comer.
        </P>
        <P>
          <strong className="text-white">Dos.</strong> Vas a la sección P2P, eliges comprar USDT, y filtras por método de pago Yape. Te aparecen las ofertas ordenadas por precio.
        </P>
        <P>
          <strong className="text-white">Tres.</strong> Eliges vendedor, pones el monto en soles y confirmas. Binance te muestra el número de Yape del vendedor y arranca un cronómetro, normalmente de quince minutos.
        </P>
        <P>
          <strong className="text-white">Cuatro.</strong> Yapeas el monto exacto. Exacto, ni un sol de más ni de menos, porque si no coincide el vendedor puede rechazar. Y no pongas nada raro en el concepto: deja el mensaje vacío o pon algo neutro.
        </P>
        <P>
          <strong className="text-white">Cinco.</strong> Marcas &quot;pagado&quot; en Binance y esperas. El vendedor libera, normalmente en menos de cinco minutos.
        </P>
        <P>
          <strong className="text-white">Seis.</strong> Ya tienes USDT. Ahora vas al casino, abres el depósito, eliges USDT, eliges <strong className="text-white">red TRC-20</strong>, copias la dirección con el botón de copiar, y desde Binance retiras a esa dirección seleccionando también TRON/TRC-20.
        </P>

        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/25 p-6 my-8 max-w-4xl">
          <p className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Lo que más plata te va a ahorrar de toda la página</p>
          <p className="text-[#d4d4d8] text-sm leading-relaxed">
            La primera vez con un casino nuevo, manda S/50 de prueba. Si llegan, manda el resto. Este párrafo es el más útil de toda la guía y es justo el que más gente se saltea.
          </p>
        </div>

        <H3>¿Y Buda.com?</H3>
        <P>
          Buda opera en el Perú y es más simple: compras directo con transferencia bancaria, sin negociar con nadie, sin escrow, sin cronómetro. Si el P2P te genera desconfianza, es una alternativa perfectamente válida.
        </P>
        <P>
          El costo de esa simplicidad es el spread, que es bastante mayor que en P2P. Para montos chicos la diferencia es de unos pocos soles y no vale la pena angustiarse. Para montos grandes, el P2P te ahorra plata real.
        </P>

        <div className="flex flex-wrap items-center gap-4">
          <CtaButton slug="starda-casino" text="Empezar en STARDA" />
          <CtaButton slug="monro-casino" text="MONRO: bono del 150%" />
        </div>
      </Section>

      {/* ═══ 6b. BONOS ═══ */}
      <Section id="bonos">
        <SectionTitle>Bonos: el número grande del banner es el que menos importa</SectionTitle>

        <P>
          Vamos a hacer algo que casi ninguna página de casinos hace: mirar el bono completo en vez del porcentaje. Porque el porcentaje es la parte que menos importa, y todo el marketing está construido para que creas lo contrario.
        </P>
        <P>
          Un bono tiene cuatro variables y solo una sale en la publicidad. Está el porcentaje, que es el que gritan. Está el <strong className="text-white">rollover</strong>, que es cuántas veces tienes que apostar el dinero antes de poder sacarlo. Está la <strong className="text-white">apuesta máxima</strong> permitida mientras cumples ese rollover, que si es muy baja te obliga a jugar durante días. Y está el <strong className="text-white">plazo</strong>, que si es corto puede hacer el bono directamente imposible.
        </P>
        <P>
          Ejemplo con números reales para que se vea. 1Win ofrece 500% hasta mil dólares y pide rollover x50 con apuesta máxima de S/14 y siete días. Traducción: si agarras S/1,000 de bono tienes que apostar S/50,000 acumulados, de catorce en catorce, en una semana. Son más de tres mil quinientas rondas. A tres rondas por minuto son casi veinte horas de máquina, sin parar, suponiendo que nunca te quedas sin saldo por el camino (spoiler: te quedas). Es un bono diseñado para no completarse.
        </P>
        <P>
          Ahora compará con FRESH: 100% con rollover x30, apuesta máxima de S/20 y catorce días. Los mismos S/1,000 de bono significan S/30,000 de apuesta acumulada, con el doble de plazo y más margen por ronda. Ese sí se completa jugando un rato al día sin volverte loco.
        </P>

        <div className="overflow-x-auto my-8 rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm min-w-[860px]">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="text-left px-5 py-4 text-white font-bold">Casino</th>
                <th className="text-left px-5 py-4 text-white font-bold">Oferta</th>
                <th className="text-left px-5 py-4 text-white font-bold">Rollover</th>
                <th className="text-left px-5 py-4 text-white font-bold">Apuesta máx.</th>
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
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{b.maxBet}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{b.days}</td>
                  <td className="px-5 py-4 text-[#d4d4d8]">{b.real}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>Entonces, ¿cuál agarro?</H3>
        <P>
          Si vas a depositar poco, digamos hasta S/500, <strong className="text-white">MONRO</strong> es la respuesta. El 150% es el porcentaje más alto del ranking y el rollover x35 con siete días es cumplible si juegas un par de horas al día. Depositas S/400, juegas con S/1,000.
        </P>
        <P>
          Si quieres tranquilidad y no pelearte con condiciones, <strong className="text-white">FRESH</strong> o <strong className="text-white">SOL</strong>. Rollover x30 y catorce días es lo más humano que vas a encontrar, y los 500 giros se acreditan escalonados, cien por día, para que no tengas que quemarlos todos en una tarde. Ese detalle de los giros escalonados vale más de lo que parece: te obliga a volver, sí, pero también te evita malgastarlos.
        </P>
        <P>
          Si vas a depositar en serio, <strong className="text-white">1xBet</strong> con su paquete de hasta $2,275 es el único que te deja aprovechar un tope alto. El rollover x40 es más exigente, pero con montos grandes tienes margen para maniobrar.
        </P>

        <H3>Lo que cambia al pagar con cripto</H3>
        <P>
          El bono se calcula sobre el monto convertido, no sobre la cripto. Si mandas cien dólares en USDT y el casino los convierte a S/375, tu bono sale de esos S/375. Hasta ahí, lógico.
        </P>
        <P>
          Lo que hay que vigilar es el <em>momento</em> de la conversión. Algunos casinos usan el tipo de cambio de cuando llega la transacción, otros el de cuando la acreditan, y entre ambos pueden pasar veinte minutos. En días tranquilos da igual, en un día movido puede cambiar un uno o dos por ciento. No es para perder el sueño, pero está bueno saberlo.
        </P>
        <P>
          Y revisa siempre el depósito mínimo para activar el bono, porque varios casinos piden más en cripto que en fiat. Ninguno de los diez de esta guía hace eso, pero es lo primero que miramos cuando evaluamos un operador nuevo.
        </P>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <CtaButton slug="monro-casino" text="MONRO: 150% de bono" />
          <CtaButton slug="fresh-casino" text="FRESH: rollover x30" />
        </div>
      </Section>

      {/* ═══ 7. REDES ═══ */}
      <Section id="redes" alt>
        <SectionTitle>Redes y comisiones: el error de los noventa soles</SectionTitle>

        <P>
          Una criptomoneda y la red por la que viaja son cosas distintas, y confundirlas es el error más caro del mundo cripto. El USDT que compras en Binance puede salir por la red de Tron, por la de Ethereum, por la de BNB Chain o por Polygon. Es el mismo dólar digital, llega al mismo lugar, pero el peaje cambia por un factor de veinte.
        </P>
        <P>
          Nos pasó mientras armábamos la guía de México y lo repetimos acá porque vale para cualquiera: ochenta dólares mandados por ERC-20 sin mirar el selector, catorce dólares de comisión. Al cambio, casi cincuenta y cuatro soles quemados antes de apostar. El mismo envío por TRC-20 costó un dólar con diez.
        </P>

        <div className="overflow-x-auto my-8 rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="text-left px-5 py-4 text-white font-bold">Red</th>
                <th className="text-left px-5 py-4 text-white font-bold">Monedas</th>
                <th className="text-left px-5 py-4 text-white font-bold">Comisión</th>
                <th className="text-left px-5 py-4 text-white font-bold">Tiempo</th>
                <th className="text-left px-5 py-4 text-white font-bold">Veredicto</th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: "TRC-20 (Tron)", c: "USDT, USDC", f: "~S/4", t: "1 a 3 min", v: "La mejor opción para casi todo", ok: true },
                { n: "BEP-20 (BNB Chain)", c: "USDT, BNB", f: "~S/2", t: "1 a 2 min", v: "Barata, pero no todos la aceptan", ok: true },
                { n: "Litecoin", c: "LTC", f: "Centavos", t: "2 min", v: "Subestimada, la aceptan FRESH, SOL y 1xBet", ok: true },
                { n: "Polygon", c: "USDT, USDC", f: "Centavos", t: "1 a 2 min", v: "Baratísima, soporte limitado", ok: true },
                { n: "Bitcoin (on-chain)", c: "BTC", f: "S/6 a S/34", t: "10 a 60 min", v: "Solo si mueves montos grandes", ok: true },
                { n: "ERC-20 (Ethereum)", c: "USDT, ETH", f: "S/22 a S/90", t: "2 a 8 min", v: "Evitala salvo que no haya de otra", ok: false },
              ].map((r) => (
                <tr key={r.n} className="border-t border-white/[0.06]">
                  <td className="px-5 py-4 text-white font-semibold whitespace-nowrap">{r.n}</td>
                  <td className="px-5 py-4 text-[#a1a1aa]">{r.c}</td>
                  <td className={`px-5 py-4 font-bold whitespace-nowrap ${r.ok ? "text-[#22c55e]" : "text-[#ef4444]"}`}>{r.f}</td>
                  <td className="px-5 py-4 text-[#a1a1aa] whitespace-nowrap">{r.t}</td>
                  <td className="px-5 py-4 text-[#d4d4d8]">{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>Las tres reglas para no equivocarte</H3>
        <P>
          <strong className="text-white">Primera:</strong> elegí la red en el casino ANTES de copiar la dirección. Cada red genera una dirección distinta. Si copias primero y cambias la red después, la dirección que tienes en el portapapeles ya no sirve y vas a mandar la plata al vacío.
        </P>
        <P>
          <strong className="text-white">Segunda:</strong> copiá siempre con el botón, nunca a mano ni seleccionando con el dedo. Una dirección tiene cuarenta caracteres y un error de uno solo es irreversible.
        </P>
        <P>
          <strong className="text-white">Tercera:</strong> antes de confirmar en Binance, mira la comisión que te muestra. Si dice un dólar, estás en TRC-20 y vas bien. Si dice seis o más, estás en la red equivocada, vuelve atrás. Ese vistazo de dos segundos es tu último control.
        </P>
      </Section>

      {/* ═══ 8. RETIROS ═══ */}
      <Section id="retiros">
        <SectionTitle>Retiros: lo que prometen contra lo que tardaron</SectionTitle>

        <P>
          Esta es la tabla que más trabajo nos costó y la que más valor tiene. Cada fila es un retiro real, cronometrado desde que le dimos al botón hasta que la transacción apareció confirmada en el explorador de bloques. Nada de estimaciones ni de copiar lo que dice la web del casino.
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

        <H3>Cuatro cosas que aprendimos</H3>
        <P>
          <strong className="text-white">La palabra instantáneo no significa nada.</strong> Seis de los ocho la usaban y ninguno bajó de veinticuatro minutos. No es que mientan exactamente: el casino firma rápido, pero después hay que esperar a la blockchain. Aun así, si vas a poner una palabra en tu web, que sea honesta.
        </P>
        <P>
          <strong className="text-white">El primer retiro siempre es el lento.</strong> En SOL y en Melbet nos pidieron verificación justo en el primer intento de sacar plata. Es práctica estándar y no es señal de alarma, pero conviene saberlo para no asustarse. Los retiros siguientes en el mismo casino bajaron entre 40% y 60% de tiempo.
        </P>
        <P>
          <strong className="text-white">La hora importa, salvo en 1xBet.</strong> Los domingos por la noche todos se ralentizan, presumiblemente porque hay menos gente revisando la cola manualmente. Si puedes elegir, pedí el retiro en horario de oficina europeo, que es donde están los equipos de estos operadores.
        </P>
        <P>
          <strong className="text-white">La moneda pesa tanto como el casino.</strong> Nuestros dos retiros más lentos fueron los que hicimos en Bitcoin. Con USDT por TRC-20 el rango completo de los ocho casinos se comprime a entre veinticuatro minutos y tres horas y media.
        </P>

        <H3>Si tu retiro se atora, pedí el hash</H3>
        <P>
          Esa es la jugada y funciona. Si el casino ya te da un hash de transacción, la plata salió de sus manos y lo que falta es la blockchain: pegas el hash en Tronscan y ves exactamente en qué punto está.
        </P>
        <P>
          Si no hay hash, el retiro sigue en la cola interna del casino. Ahí escribes a soporte y usas esa palabra concreta: &quot;¿me pueden dar el hash de la transacción?&quot;. El tono del chat cambia cuando el agente entiende que sabes cómo funciona esto. Si pasan cuarenta y ocho horas sin hash y sin explicación, guarda capturas de todo y escala.
        </P>
      </Section>

      {/* ═══ 8b. SOPORTE ═══ */}
      <Section id="soporte" alt>
        <SectionTitle>Le hicimos la misma pregunta a los diez soportes</SectionTitle>

        <P>
          Se nos ocurrió un test simple y bastante revelador. Abrimos el chat de los diez casinos, un martes entre las 9 y las 11 de la noche hora de Lima, y le hicimos a cada uno exactamente la misma pregunta:
        </P>
        <P>
          <em className="text-[#d4d4d8]">&quot;Si deposito USDT por red ERC-20 y ustedes solo aceptan TRC-20, ¿puedo recuperar mi dinero?&quot;</em>
        </P>
        <P>
          Elegimos esa porque es la pregunta que de verdad importa, tiene una respuesta técnica correcta, y distingue a un agente que sabe de uno que está leyendo un guion. La respuesta correcta es: depende de si la dirección existe en esa otra red, muchas veces se puede recuperar manualmente pero tarda días y no está garantizado.
        </P>

        <div className="overflow-x-auto my-8 rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm min-w-[820px]">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="text-left px-5 py-4 text-white font-bold">Casino</th>
                <th className="text-left px-5 py-4 text-white font-bold">Respondió en</th>
                <th className="text-left px-5 py-4 text-white font-bold">¿Humano?</th>
                <th className="text-left px-5 py-4 text-white font-bold">Calidad</th>
                <th className="text-left px-5 py-4 text-white font-bold">Veredicto</th>
              </tr>
            </thead>
            <tbody>
              {supportRows.map((r) => (
                <tr key={r.casino} className="border-t border-white/[0.06]">
                  <td className="px-5 py-4 whitespace-nowrap">
                    <a href={`/go/${r.slug}`} target="_blank" rel="nofollow noopener sponsored" className="text-white font-semibold hover:text-[#00C853] transition-colors">
                      {r.casino}
                    </a>
                  </td>
                  <td className="px-5 py-4 text-[#22c55e] font-bold whitespace-nowrap">{r.time}</td>
                  <td className="px-5 py-4 text-[#a1a1aa]">{r.human}</td>
                  <td className="px-5 py-4 text-[#a1a1aa]">{r.answer}</td>
                  <td className="px-5 py-4 text-[#d4d4d8]">{r.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>Lo que salió de ahí</H3>
        <P>
          <strong className="text-white">FRESH ganó por paliza.</strong> Dos minutos, un humano directo sin pasar por bot, y una respuesta que explicaba la diferencia entre redes, decía que se puede intentar recuperar, avisaba que tarda entre cinco y diez días hábiles y que no está garantizado. O sea, la respuesta correcta completa. Nos sorprendió bastante para ser las diez de la noche.
        </P>
        <P>
          STARDA y SOL quedaron muy cerca, lo cual tiene sentido porque son del mismo grupo y presumiblemente comparten equipo de soporte y formación.
        </P>
        <P>
          <strong className="text-white">1xBet respondió bien pero te hace trabajar.</strong> Cuatro minutos está perfecto, el problema es que primero tienes que convencer a un bot de que tu pregunta no está en la base de conocimiento. Escribir &quot;agente&quot; dos veces seguidas es el atajo que encontramos.
        </P>
        <P>
          Los dos peores fueron 1Win y Dafabet. 1Win tardó catorce minutos y después de cuatro mensajes nos mandó un artículo genérico sobre métodos de pago que no respondía nada. Dafabet tardó dieciocho y la respuesta fue tan confusa que tuvimos que repreguntar dos veces; al final dijo que &quot;el departamento técnico lo evaluaría&quot;, que es la forma elegante de no contestar.
        </P>
        <P>
          ¿Sirve este test para decidir dónde jugar? Parcialmente. Un soporte bueno no te garantiza que te paguen, y un soporte flojo no significa que sea una estafa. Pero el día que tengas un problema de verdad, la diferencia entre FRESH y Dafabet va a ser la diferencia entre resolverlo en una tarde o pelearlo durante una semana.
        </P>
      </Section>

      {/* ═══ 9. SUNAT ═══ */}
      <Section id="sunat">
        <SectionTitle>SUNAT: la conversación incómoda</SectionTitle>

        <P>
          Aviso antes de arrancar: no somos contadores ni asesores tributarios, y lo que sigue es información general, no asesoría. Si estás moviendo cantidades serias, paga una consulta con un contador. Sale muchísimo más barato que una fiscalización.
        </P>

        <H3>Dos frentes, no uno</H3>
        <P>
          Cuando juegas en un casino cripto desde el Perú pueden generarse dos obligaciones distintas y la gente solo piensa en una.
        </P>
        <P>
          La primera es el juego. Con la Ley 31557 existe un impuesto específico a los juegos a distancia, pero ese lo paga el operador con licencia, no el jugador. El problema es que los casinos de esta página no tienen licencia peruana, así que ese impuesto no se está pagando por ninguna de las dos partes. Lo que sí puede aplicar es que tus ganancias califiquen como renta de fuente extranjera, y esa categoría sí es declarable por ti.
        </P>
        <P>
          La segunda, que se le olvida a casi todos: la SUNAT trata las criptomonedas como <em>bienes</em>, no como moneda. Entonces cuando vendes tu USDT por soles, técnicamente estás enajenando un bien, y la diferencia entre lo que te costó y lo que recibiste es una ganancia o una pérdida.
        </P>

        <H3>Cómo se entera la SUNAT</H3>
        <P>
          Por el lado bancario, sobre todo. El casino de Curaçao no le reporta nada a nadie en el Perú. Pero cuando tú vendes USDT en P2P y recibes soles por Yape o por transferencia, ese movimiento sí existe en el sistema financiero peruano. Si son montos chicos y esporádicos se pierde en el ruido. Si son depósitos de cinco cifras de forma constante, aparece.
        </P>

        <H3>Lo que sí puedes hacer desde hoy</H3>
        <P>
          Lleva registro. Suena obvio y casi nadie lo hace. Una hoja de cálculo con fecha, monto en soles, monto en cripto, tipo de cambio y casino. Cuando llegue el momento de declarar, o de explicarle algo a un contador, tener eso listo convierte un problema de semanas en un trámite de una tarde.
        </P>
        <P>
          Binance te deja descargar tu historial completo de operaciones. Bájalo cada tanto. No cuesta nada y algún día te va a salvar.
        </P>
      </Section>

      {/* ═══ 10. JUEGOS ═══ */}
      <Section id="juegos" alt>
        <SectionTitle>Qué jugar cuando pagas con cripto</SectionTitle>

        <P>
          Los juegos son los mismos de siempre, que quede claro. No hay un catálogo secreto que se desbloquea por pagar con Bitcoin. Pero sí hay categorías que encajan mejor con este perfil de jugador, y una que prácticamente nació de este mundo.
        </P>

        <H3>Crash games: el género que inventó el casino cripto</H3>
        <P>
          Aviator, JetX, Spaceman. La mecánica se explica en una frase: hay un multiplicador que sube y tienes que retirarte antes de que reviente. Si te sales en 2.4x cobras 2.4 veces tu apuesta. Si revienta antes, perdiste.
        </P>
        <P>
          Este género salió de los casinos cripto y ahí sigue siendo rey. Las rondas duran entre cinco y veinte segundos, ves a los demás jugadores apostando en tiempo real en un panel lateral, y puedes configurar retiro automático en un multiplicador fijo. <strong className="text-white">STARDA</strong> tiene la mejor colección que encontramos, seguido de 1xBet. Si nunca jugaste uno, empieza con apuestas mínimas y retiro automático en 1.5x para agarrarle el ritmo.
        </P>
        <P>
          Advertencia honesta: la velocidad es justamente lo peligroso. Veinte rondas en cinco minutos es facilísimo, y cinco minutos después llevas veinte apuestas hechas sin haberlo pensado. Pon límite de sesión antes de abrirlo, no después.
        </P>

        <H3>Slots: mira el RTP, no la portada</H3>
        <P>
          El RTP es el porcentaje que la máquina devuelve a largo plazo. Un slot con 96.5% devuelve, en promedio sobre millones de giros, S/96.50 por cada S/100 apostados. Uno con 94% devuelve S/94. Esos dos puntos y medio son enormes en una sesión larga y la mayoría de la gente nunca los mira.
        </P>
        <P>
          Casi todos los proveedores publican el RTP en la ficha del juego, dentro del menú de información. Búscalo. Y ojo con algo que poca gente sabe: algunos proveedores ofrecen el mismo título en varias versiones de RTP y el casino elige cuál pone. Mismo juego, misma portada, puede estar al 96.5% en un casino y al 94.2% en otro.
        </P>
        <P>
          <strong className="text-white">FRESH</strong> tiene el catálogo más profundo del ranking con más de 4,500 títulos. <strong className="text-white">1xBet</strong> tiene todavía más volumen pero organizado de forma más caótica.
        </P>

        <H3>Casino en vivo: donde la cripto menos aporta</H3>
        <P>
          Las mesas con crupier real funcionan igual pagues como pagues, y los proveedores (Evolution, Pragmatic Live, Ezugi) son los mismos en todos lados. Acá la cripto no te aporta nada durante el juego, solo al depositar y retirar.
        </P>
        <P>
          Si el casino en vivo es lo tuyo y no tienes una razón fuerte para usar cripto, honestamente <Link href="/peru/mejores-casinos-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">Betsson y los casinos MINCETUR</Link> te van a dar mejor experiencia: mesas en español latino, soporte peruano y depósito con Yape. Es un caso donde la respuesta correcta es no complicarse. Si además te gusta la ruleta o el blackjack en particular, tenemos guías dedicadas a <Link href="/peru/ruleta-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">ruleta online en Perú</Link> y a <Link href="/peru/blackjack-online" className="text-white underline underline-offset-2 hover:text-[#00C853]">blackjack online en Perú</Link>.
        </P>

        <H3>Dados, Plinko y los juegos propios</H3>
        <P>
          Son los que suelen tener provably fair de verdad, porque los desarrolla el propio casino en vez de licenciarlos. Dice, Limbo, Plinko, Mines. Ventaja de casa baja, a veces del uno por ciento, que es de lo mejor que vas a encontrar en cualquier casino.
        </P>
        <P>
          <strong className="text-white">Stake</strong> es el referente absoluto acá y es, de hecho, la única razón sólida para que un peruano abra cuenta ahí a pesar de todo lo que le criticamos más arriba.
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
          Cuando juegas con cripto tu plata pasa por cuatro lugares distintos y en cada uno el riesgo es diferente. Entender esto te evita la mayoría de los problemas.
        </P>

        <H3>1. En Binance o Buda</H3>
        <P>
          Custodia de una empresa grande con controles serios. Activá autenticación de dos factores con app (Google Authenticator o Authy), nunca por SMS. El intercambio de SIM es un ataque real y en el Perú ha pasado más veces de las que se reportan.
        </P>

        <H3>2. Viajando por la blockchain</H3>
        <P>
          Acá no hay riesgo de robo pero sí de error humano irreversible. Una vez que la transacción sale no hay botón de cancelar, no hay reversión y no hay a quién llamar. La red hace exactamente lo que le dijiste, aunque lo que le dijiste estuviera mal.
        </P>

        <H3>3. En el saldo del casino</H3>
        <P>
          Este es el punto que menos gente piensa. Tu saldo en un casino es una <em>wallet custodial</em>: el casino tiene las llaves, tú tienes una cifra en una pantalla. Mientras la plata esté ahí, dependes por completo de que ese operador siga funcionando y siga pagando. Y acuérdate: estos no tienen licencia peruana.
        </P>
        <P>
          Por eso nuestra recomendación es simple y aburrida: <strong className="text-white">no uses el casino como billetera</strong>. Depositá lo que vas a jugar, juega, y si ganas retira. Dejar tres mil dólares durmiendo en un casino de Curaçao durante meses es asumir un riesgo que no te está pagando nada a cambio.
        </P>

        <H3>4. En tu wallet personal</H3>
        <P>
          Si usas MetaMask o Trust Wallet, las llaves son tuyas y la responsabilidad también. La frase de recuperación de doce palabras es tu plata: quien la tenga, tiene los fondos. No la guardes en una captura de pantalla, no te la mandes por WhatsApp ni por correo. Papel, y en un lugar donde no se moje.
        </P>

        <H3>Señales de que un casino cripto es un problema</H3>
        <P>
          Después de revisar bastantes operadores, estas son las banderas rojas que nos hacen cerrar la pestaña: que no muestre número de licencia verificable, que el chat tarde más de diez minutos en responder algo simple, que los términos del bono no digan el rollover con un número claro, que acepte una sola red para depositar, o que aparezcan quejas repetidas del mismo tipo (retiros congelados por &quot;revisión de seguridad&quot; sin plazo) en foros con varios meses de historial.
        </P>
        <P>
          Ninguno de los diez del ranking tiene esas señales, para que quede claro. Pero vas a encontrar decenas de casinos cripto en Google que sí, y varios te van a aparecer con anuncios pagados arriba de esta misma página.
        </P>
      </Section>

      {/* ═══ 12. ERRORES ═══ */}
      <Section id="errores" alt>
        <SectionTitle>Los errores que vimos (y los que cometimos)</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
          {[
            { t: "Mandar por la red equivocada", d: "El más caro de todos. Nos costó cincuenta y cuatro soles evitables, y a otros les ha costado el depósito entero. Verificá la red dos veces antes de confirmar. Siempre." },
            { t: "Comprar Bitcoin para jugar hoy", d: "Bitcoin es buena reserva de valor y mal medio de pago para montos chicos. Comisión alta, confirmación lenta y precio que se mueve. Compra USDT." },
            { t: "Yapear un monto distinto al pactado", d: "En Binance P2P el monto tiene que coincidir exacto. Un sol de diferencia y el vendedor puede rechazar la operación, y encima te baja la tasa de finalización." },
            { t: "Poner 'casino' en el concepto del Yape", d: "Deja el mensaje vacío o pon algo neutro. No hace falta darle a nadie información que no necesita." },
            { t: "Dejar el saldo durmiendo en el casino", d: "Es una wallet custodial y sin licencia peruana. Si el operador tiene un problema, tu plata tiene un problema. Depositá lo que vas a jugar." },
            { t: "No leer el rollover del bono", d: "Un 500% suena increíble hasta que ves que pide apostar cincuenta veces el bono en siete días. Los números del rollover pesan más que el porcentaje." },
            { t: "Confiar en la palabra instantáneo", d: "Seis de ocho casinos la usaban. Ninguno bajó de veinticuatro minutos. Ajustá expectativas y no entres en pánico a los cinco minutos." },
            { t: "No hacer la prueba de S/50", d: "Cincuenta soles la primera vez con un casino nuevo. Es el seguro más barato que vas a contratar en tu vida." },
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
          <CtaButton slug="monro-casino" text="MONRO: bono del 150%" />
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
            Compra USDT con Yape en Binance P2P, mandalo por TRC-20, haz la prueba de S/50 la primera vez y retira lo que ganes en vez de dejarlo durmiendo. Con eso solo ya evitas el noventa por ciento de los problemas que tiene la gente con los casinos cripto.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="1xbet" text="Jugar en 1xBet (#1)" />
            <CtaButton slug="starda-casino" text="Probar STARDA" />
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
          <Link href="/peru/mejores-casinos-online" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Mejores Casinos Online en Perú
          </Link>
          <Link href="/peru/ruleta-online" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Ruleta Online en Perú
          </Link>
          <Link href="/peru/blackjack-online" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Blackjack Online en Perú
          </Link>
          <Link href="/mexico/casinos-criptomonedas" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Casinos con Criptomonedas en México
          </Link>
          <Link href="/peru" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm text-[#d4d4d8] hover:bg-white/[0.08] transition-colors font-semibold">
            Todas las guías de Perú
          </Link>
        </div>
      </Section>
    </>
  );
}
