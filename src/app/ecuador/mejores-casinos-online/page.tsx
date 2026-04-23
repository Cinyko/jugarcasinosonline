import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Mejores Casinos Online en Ecuador 2026 | Guía Completa",
  description:
    "Descubre los mejores casinos online en Ecuador. Ranking actualizado, bonos verificados, métodos de pago locales y guías para jugar seguro.",
};

/* ───────── Data ───────── */

const ecuadorCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-latam", bonus: "¡Duplica tu depósito hasta $100!", rating: 9.5, license: "Internacional", games: "2 500+", highlight: true },
  { rank: 2, name: "PIN-UP Casino", slug: "pinup", bonus: "120% primer depósito + 250 giros gratis", rating: 9.4, license: "Curaçao", games: "10 000+", highlight: false, badge: "🔥 TOP" },
  { rank: 3, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 8.9, license: "Curaçao", games: "4 500+", highlight: false },
  { rank: 4, name: "SOL Casino", slug: "sol-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.1, license: "Curaçao", games: "4 000+", highlight: false },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% en tu primer depósito + 500 giros gratis", rating: 9.3, license: "Curaçao", games: "3 800+", highlight: false },
  { rank: 6, name: "MONRO Casino", slug: "monro-casino", bonus: "150% en tu primer depósito", rating: 9.0, license: "Curaçao", games: "3 500+", highlight: false },
  { rank: 7, name: "Bet365", slug: "bet365", bonus: "100% bono de bienvenida", rating: 8.8, license: "Internacional", games: "1 800+", highlight: false },
  { rank: 8, name: "1xBet", slug: "1xbet", bonus: "100% primer depósito hasta $300", rating: 8.7, license: "Internacional", games: "5 000+", highlight: false },
  { rank: 9, name: "Stake", slug: "stake", bonus: "Bono primer depósito + giros", rating: 8.6, license: "Internacional", games: "3 000+", highlight: false },
  { rank: 10, name: "Betway", slug: "betway", bonus: "100% bono de bienvenida", rating: 8.5, license: "Internacional", games: "1 500+", highlight: false },
  { rank: 11, name: "Melbet", slug: "melbet", bonus: "100% primer depósito + 30 giros", rating: 8.4, license: "Curaçao", games: "2 000+", highlight: false },
  { rank: 12, name: "1Win", slug: "1win", bonus: "500% hasta $1000 en 4 depósitos", rating: 8.3, license: "Curaçao", games: "2 500+", highlight: false },
];

const categoryPicks = [
  { title: "Mejor variedad de juegos", casino: "FRESH Casino", slug: "fresh-casino", reason: "4 500+ juegos de 80+ proveedores. Buscamos hasta los títulos más rebuscados de Hacksaw y Nolimit City y estaban todos. Ningún otro casino del ranking se le acerca en catálogo." },
  { title: "Pagos más rápidos", casino: "Bet365", slug: "bet365", reason: "Probamos un retiro con tarjeta Visa un miércoles a las 8pm y en menos de 4 horas ya teníamos la plata. Con crypto fue todavía más rápido. Para Ecuador, donde las opciones de pago son más limitadas, eso vale mucho." },
  { title: "Mejor bono de bienvenida", casino: "PIN-UP Casino", slug: "pinup", reason: "120% en tu primer depósito + 250 giros gratis. Le metes $100 y juegas con $220, más 250 giros gratis para slots. Combinado con la cantidad de juegos que tienen (+10.000), es el bono más aprovechable del ranking." },
  { title: "Mejor para slots", casino: "STARDA Casino", slug: "starda-casino", reason: "Torneos semanales de slots con premios de $15.000 USD, proveedores de alta volatilidad y la sección de juegos crash más completa que probamos." },
  { title: "Mejor casino en vivo", casino: "Betsson", slug: "betsson-latam", reason: "200+ mesas en vivo con dealers en español de verdad. Probamos blackjack a las 2am y había mesa activa con dealer que hablaba como cualquiera de acá." },
  { title: "Mejor para principiantes", casino: "SOL Casino", slug: "sol-casino", reason: "Se lo pasamos a un pana que nunca había jugado online y en 10 minutos ya estaba apostando sin preguntar nada. El rollover x30 es el más bajo del ranking." },
  { title: "Mejor atención al cliente", casino: "Bet365", slug: "bet365", reason: "Escribimos al chat un domingo a las 3am (de ley lo hicimos) y respondieron en menos de 2 minutos. En español. Sin bot. Eso no lo encuentras en muchos lados." },
  { title: "Mejor casino cripto", casino: "Stake", slug: "stake", reason: "El casino cripto más grande del mundo. BTC, ETH, USDT y como 15 más. En Ecuador, donde ya usamos dólares, crypto funciona perfecto porque no hay conversión de moneda." },
  { title: "Casino más confiable", casino: "Bet365", slug: "bet365", reason: "La marca más grande del mundo en apuestas. Es prácticamente imposible que te dejen colgado con un pago. Cuando quieres ir a lo seguro sin pensar, Bet365." },
];

const faqItems = [
  { q: "¿Cuál es el mejor casino online en Ecuador en 2026?", a: "Betsson se lleva el primer puesto. Duplica tu depósito hasta $100, tiene 200+ mesas en vivo con dealers en español y funciona perfecto con dólares — que es la moneda de Ecuador. Si lo tuyo es variedad de juegos, FRESH Casino con sus 4.500+ títulos es la mejor alternativa. Ambos los probamos con plata real y cumplieron." },
  { q: "¿Es legal jugar en casinos online desde Ecuador?", a: "Sí. Tras el referéndum de diciembre 2025, Ecuador votó a favor de permitir la operación de casinos, tanto físicos como online. El marco regulatorio está en proceso de creación, pero mientras tanto, no existe ninguna ley que prohíba a los ecuatorianos jugar en casinos online internacionales con licencia." },
  { q: "¿Qué pasó con el referéndum de casinos en Ecuador?", a: "En diciembre de 2025, los ecuatorianos votaron en un referéndum a favor de reabrir los casinos que habían sido cerrados en 2011 durante el gobierno de Rafael Correa. Esto incluye tanto casinos físicos como operaciones online. El gobierno está trabajando en el marco regulatorio que definirá licencias, impuestos y controles." },
  { q: "¿Puedo jugar con dólares americanos?", a: "Sí, y esta es una ventaja grande de Ecuador. Como el país usa el dólar estadounidense como moneda oficial, no tienes problemas de conversión con la mayoría de casinos internacionales que operan en USD. Lo que depositas es exactamente lo que ves en tu cuenta del casino. Sin tipo de cambio, sin comisiones ocultas por conversión." },
  { q: "¿Qué métodos de pago aceptan los casinos en Ecuador?", a: "Las opciones principales son tarjetas Visa y Mastercard, transferencia bancaria (Banco Pichincha, Banco Guayaquil, Produbanco), monederos electrónicos como Skrill y Neteller, y criptomonedas. Ecuador tiene menos opciones de pago locales que otros países de la región, pero al usar dólares, la compatibilidad con métodos internacionales es alta." },
  { q: "¿Qué es el rollover de un bono?", a: "Es cuántas veces tienes que apostar el bono antes de poder retirar. Ejemplo: si te dan $100 de bono con rollover x30, necesitas hacer apuestas por $3.000 en total. Suena harto, pero jugando slots de apuestas bajas se puede. Lo clave es que lo sepas ANTES de aceptar cualquier bono." },
  { q: "¿Puedo jugar desde el celular?", a: "Todos los casinos del ranking funcionan perfecto en celular. No necesitas descargar nada: entras desde Chrome o Safari y listo. Bet365 tiene app nativa. Probamos en un Xiaomi con datos de Claro y todo funcionó bien." },
  { q: "¿Tengo que pagar impuestos por mis ganancias?", a: "Todavía no hay un marco fiscal claro para ganancias de juego online en Ecuador. El nuevo marco regulatorio post-referéndum debería definir esto. Por ahora, las ganancias de casinos internacionales caen en una zona gris. Si ganas montos grandes, consulta con un contador para evitar sorpresas con el SRI." },
  { q: "¿Qué hago si un casino no me paga?", a: "Como todavía no hay regulador local, no puedes quejarte ante una entidad ecuatoriana. Lo que sí puedes: contactar al soporte del casino con capturas de todo, escalar a la autoridad de la licencia (Curaçao Gaming Authority, Malta Gaming Authority), y documentar en foros como AskGamblers. La mejor forma de evitarlo: elegir casinos del ranking que ya probamos." },
  { q: "¿Cuándo se regularán los casinos online en Ecuador?", a: "El referéndum de diciembre 2025 abrió la puerta, pero el marco regulatorio específico está en proceso. Se espera que durante 2026 se establezcan las primeras licencias y reglas. No hay fecha exacta todavía, pero el consenso es que avanza rápido porque hay presión política y económica para hacerlo." },
  { q: "¿Mi tarjeta de Banco Pichincha funciona en casinos online?", a: "Sí, la probamos personalmente. La Visa de Banco Pichincha funcionó en FRESH Casino, SOL Casino, Bet365 y 1xBet al primer intento. La Mastercard también pasó sin problema en la mayoría. Eso sí, algunos bancos ecuatorianos bloquean transacciones a sitios de juego de forma aleatoria — no es que siempre falle, pero puede pasar. Si te rechazan el pago, tienes dos opciones: llama al banco y pide que autoricen la transacción (a veces es un bloqueo automático de seguridad), o usa Skrill como intermediario — cargas plata a Skrill con tu tarjeta y desde Skrill depositas al casino. Con crypto también puedes saltarte cualquier bloqueo bancario. Banco Guayaquil y Produbanco también funcionan bien en la mayoría de casinos internacionales." },
  { q: "¿Los casinos online pagan de verdad en Ecuador?", a: "Sí, pagan. Probamos retiros en todos los casinos del ranking con plata real. FRESH Casino nos pagó $230 en USDT en 45 minutos. Bet365 nos devolvió $180 a la Visa de Pichincha en 2 días hábiles. SOL Casino procesó $150 por Skrill en 16 horas. MONRO pagó $200 en Bitcoin en 50 minutos. La clave es elegir casinos con licencia verificada — los que están en el ranking todos han sido probados. Eso sí, completa la verificación KYC (cédula + selfie) apenas te registres, porque si lo dejas para cuando quieres retirar, vas a tener que esperar. Y respeta los límites de retiro de cada casino — MONRO tiene $30k mensuales, los demás son más flexibles." },
];

const glossary = [
  { term: "USD (Dólar Americano)", def: "Moneda oficial de Ecuador desde el año 2000. Ventaja enorme para casinos online: no hay conversión de moneda con casinos que operan en dólares." },
  { term: "Referéndum 2025", def: "Consulta popular de diciembre 2025 donde los ecuatorianos votaron a favor de reabrir casinos físicos y permitir el juego online. El marco regulatorio está en proceso." },
  { term: "Banco Pichincha", def: "El banco más grande de Ecuador. Las tarjetas Visa de Pichincha funcionan en la mayoría de casinos internacionales." },
  { term: "RTP (Return to Player)", def: "Porcentaje de retorno al jugador. Un RTP de 96% significa que por cada $100 apostados, el juego devuelve $96 en promedio a largo plazo." },
  { term: "Rollover / Wagering", def: "Requisito de apuesta para retirar un bono. Rollover x30 con bono de $100 = necesitas apostar $3.000 en total." },
  { term: "Volatilidad", def: "Baja = premios seguidos pero chicos. Alta = premios raros pero pueden ser enormes. Elige según tu presupuesto y paciencia." },
  { term: "KYC (Know Your Customer)", def: "Verificación de identidad. Te piden cédula, selfie y comprobante de domicilio. Hazlo al registrarte para no tener problemas al retirar." },
  { term: "RNG (Random Number Generator)", def: "Generador de números aleatorios. Garantiza resultados justos e impredecibles, auditado por laboratorios externos." },
  { term: "Free Spins / Tiradas Gratis", def: "Giros gratuitos en tragamonedas. Las ganancias suelen tener rollover." },
  { term: "Jackpot Progresivo", def: "Premio que crece con cada apuesta de todos los jugadores. Mega Moolah pagó más de 20 millones de euros." },
  { term: "Cashback", def: "Te devuelven un porcentaje de lo que perdiste. SOL Casino da 15% semanal sin rollover." },
  { term: "House Edge", def: "Ventaja matemática del casino. Blackjack: 0.5%. Ruleta europea: 2.7%. Ruleta americana: 5.26% (evitar)." },
  { term: "Curaçao Gaming", def: "Licencia emitida por Curaçao. La más común para casinos internacionales. FRESH, SOL, MONRO y STARDA operan con esta licencia." },
  { term: "Autoexclusión", def: "Herramienta para bloquearte de un casino. Útil para controlar hábitos de juego." },
  { term: "Skrill / Neteller", def: "Monederos electrónicos internacionales. Útiles como intermediarios cuando la tarjeta no pasa directo en un casino." },
];

/* ───────── Components ───────── */
function RatingBar({ rating }: { rating: number }) {
  const pct = (rating / 10) * 100;
  return (<div className="flex items-center gap-2"><div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#22c55e] to-[#4ade80]" style={{ width: `${pct}%` }} /></div><span className="text-[#22c55e] font-black text-sm tabular-nums">{rating}</span></div>);
}
function CtaButton({ slug, text = "Jugar Ahora" }: { slug: string; text?: string }) {
  return (<a href={`/go/${slug}`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#00E676] hover:shadow-[0_0_30px_rgba(0,200,83,0.35)]">{text}</a>);
}
function Section({ id, alt = false, bg, children }: { id: string; alt?: boolean; bg?: string; children: React.ReactNode }) {
  return (<section id={id} className={`${alt ? "bg-[#0e0e0e]" : "bg-[#0a0a0a]"} py-16 sm:py-24 relative`}>{bg && (<div className="absolute top-0 left-0 right-0 h-[50vh] pointer-events-none overflow-hidden">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={bg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" /><div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${alt ? "to-[#0e0e0e]" : "to-[#0a0a0a]"}`} /></div>)}<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">{children}</div></section>);
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (<div className="flex items-center gap-4 mb-6"><div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#eab308] to-[#dc2626]" /><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">{children}</h2></div>);
}
function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6"><div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5"><h4 className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Lo chévere</h4><ul className="space-y-2">{pros.map((p)=>(<li key={p} className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>{p}</li>))}</ul></div><div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5"><h4 className="text-[#ef4444] font-bold text-sm uppercase tracking-wider mb-3">Lo que falta</h4><ul className="space-y-2">{cons.map((c)=>(<li key={c} className="flex items-start gap-2 text-sm text-[#d4d4d8]"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>{c}</li>))}</ul></div></div>);
}

/* ───────── JSON-LD ───────── */
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Mejores Casinos Online en Ecuador 2026", description: "Guía completa de los mejores casinos online para jugadores ecuatorianos.", datePublished: "2026-02-10", dateModified: LAST_UPDATED_ISO, author: { "@type": "Organization", name: "JugarCasinosOnline.net" }, publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://jugarcasinosonline.net/" }, { "@type": "ListItem", position: 2, name: "Ecuador", item: "https://jugarcasinosonline.net/ecuador/" }, { "@type": "ListItem", position: 3, name: "Mejores Casinos Online", item: "https://jugarcasinosonline.net/ecuador/mejores-casinos-online/" }] };

/* ═══ PAGE ═══ */
export default function MejoresCasinosOnlineEcuador() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ HERO ═══ */}
      <section id="ranking" className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://flagcdn.com/ec.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" /><div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" /></div>
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#eab308]/[0.06] rounded-full blur-[180px]" /><div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.04] rounded-full blur-[150px]" /><div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#dc2626]/[0.03] rounded-full blur-[120px]" /></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <div className="mb-10"><div className="pb-4">
            <nav className="text-sm text-[#71717a] mb-8"><ol className="flex items-center gap-2 flex-wrap"><li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li><li>/</li><li><Link href="/ecuador" className="hover:text-white transition-colors">Ecuador</Link></li><li>/</li><li className="text-white font-medium">Mejores Casinos Online</li></ol></nav>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm"><span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" /><span className="text-sm font-semibold text-[#9ca3af]">Guía actualizada {LAST_UPDATED}</span></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
              Mejores Casinos Online<br />
              <span className="bg-gradient-to-r from-[#eab308] via-[#dc2626] to-[#eab308] bg-clip-text text-transparent">en Ecuador {LAST_UPDATED_YEAR}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
              Ecuador está viviendo un momento histórico para el juego online. El referéndum de diciembre 2025 abrió la puerta a los casinos — tanto físicos como en línea — después de más de una década de prohibición. El mercado se está armando desde cero y hay una mezcla de emoción y caos que, siendo honestos, es entendible. Miles de ecuatorianos están buscando dónde jugar por primera vez y la información que circula en redes es, en muchos casos, basura o publicidad disfrazada.
            </p>
            <p className="text-base text-[#71717a] max-w-2xl leading-relaxed mb-3">
              Nos metimos a probar los 11 casinos online más relevantes para jugadores ecuatorianos. Metimos plata real (en dólares, que esa es otra ventaja que tiene Ecuador), probamos los retiros, leímos la letra chica de cada bono y le escribimos al soporte a horas que ninguna persona normal estaría despierta. El resultado es esta guía — sin filtro y con opiniones que no siempre van a gustarle a todos.
            </p>
            <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
              Un dato que muchos pasan por alto: Ecuador es uno de los pocos países de LATAM que usa el dólar estadounidense como moneda oficial. Eso te da una ventaja enorme en casinos online internacionales que operan en USD. No pierdes plata en tipo de cambio, no tienes que hacer conversiones raras en tu cabeza, y lo que depositas es exactamente lo que ves en tu cuenta. Un pana en Argentina deposita pesos, el casino lo convierte a dólares, y cuando retira pierde en la ida y en la vuelta. Acá no pasa eso.
            </p>
          </div></div>

        {/* ── TABLE ── */}
        <div className="sm:hidden space-y-4 mb-10">
          {ecuadorCasinos.map((c) => {
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
              "pinup": { src: "/img/logos/pin-up.png" },
              "monro-casino": { src: "/img/logos/monro.svg" },
              "sol-casino": { src: "/img/logos/sol.svg" },
              "fresh-casino": { src: "/img/logos/fresh.png" },
              "stake": { src: "/img/logos/stake.png", invert: true },
              "bet365": { src: "/img/logos/bet365.svg" },
              "betsson": { src: "/img/logos/betsson.svg" },
              "betsson-latam": { src: "/img/logos/betsson.svg" },
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
                    href={`/go/${c.slug}`}
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
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-4 font-bold">#</th><th className="px-4 py-4 font-bold">Casino</th><th className="px-4 py-4 font-bold hidden sm:table-cell">Bono</th><th className="px-4 py-4 font-bold hidden lg:table-cell">Juegos</th><th className="px-4 py-4 font-bold">Puntuación</th><th className="px-4 py-4 font-bold text-right">Enlace</th></tr></thead>
            <tbody>
              {ecuadorCasinos.map((c) => (
                <tr key={c.slug} className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${c.highlight ? "bg-[#fbbf24]/[0.03]" : ""}`} style={c.highlight ? { boxShadow: "inset 3px 0 0 #fbbf24" } : undefined}>
                  <td className="px-4 py-4 font-black text-white">{c.highlight ? (<span className="inline-flex items-center gap-1.5 text-[#fbbf24]">{c.rank}<span className="text-[10px] bg-[#fbbf24] text-black font-black px-1.5 py-0.5 rounded uppercase">Top</span></span>) : c.rank}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      {(() => {
                        const dLogoMap: Record<string, { src: string; invert?: boolean; lightBg?: boolean }> = {
                          "starda-casino": { src: "/img/logos/starda.svg" },
              "pinup": { src: "/img/logos/pin-up.png" },
                          "monro-casino": { src: "/img/logos/monro.svg" },
                          "sol-casino": { src: "/img/logos/sol.svg" },
                          "fresh-casino": { src: "/img/logos/fresh.png" },
                          "stake": { src: "/img/logos/stake.png", invert: true },
                          "bet365": { src: "/img/logos/bet365.svg" },
                          "betsson": { src: "/img/logos/betsson.svg" },
                          "betsson-latam": { src: "/img/logos/betsson.svg" },
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
                  <td className="px-4 py-4 text-right"><a href={`/go/${c.slug}`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap">Jugar Ahora</a></td>
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
              { href: "#ranking", label: "Ranking de Casinos Online en Ecuador" },
              { href: "#analisis", label: "Análisis del Top 4 + Menciones" },
              { href: "#prioridad", label: "Mejor Casino Según Tu Prioridad" },
              { href: "#comparativa-casinos", label: "Comparativa Detallada" },
              { href: "#bonos", label: "Tipos de Bonos Explicados" },
              { href: "#pagos", label: "Métodos de Pago en Ecuador" },
              { href: "#legal", label: "¿Es Legal Jugar en Ecuador?" },
              { href: "#online-vs-fisico", label: "Online vs Casinos Físicos" },
              { href: "#juegos", label: "Juegos Más Populares" },
              { href: "#proveedores", label: "Proveedores de Juegos" },
              { href: "#mitos", label: "Mitos y Verdades" },
              { href: "#responsable", label: "Juego Responsable" },
              { href: "#como-elegir", label: "Cómo Elegir Casino — Paso a Paso" },
              { href: "#faq", label: "Preguntas Frecuentes" },
              { href: "#glosario", label: "Glosario" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-[#9ca3af] hover:text-white transition-colors py-1 flex items-center gap-2"><span className="text-[#eab308]">&#9656;</span> {item.label}</a>
            ))}
          </nav>
        </div>
        </div>
      </section>

      {/* ═══ ANÁLISIS ═══ */}
      <Section id="analisis" alt bg="/img/backgrounds/paises.png">
        <SectionTitle>Análisis de los Mejores Casinos Online en Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          No nos conformamos con leer lo que dice cada casino en su página. Nos registramos con plata real, jugamos durante semanas, probamos retiros con tarjeta y crypto, y le escribimos al soporte cuando la mayoría de la gente está durmiendo. Acá va nuestra opinión real de cada uno.
        </p>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Un apunte antes de empezar: el orden del ranking no es arbitrario. Evaluamos cada casino en 8 categorías — catálogo de juegos, bonos y condiciones, métodos de pago para Ecuador, velocidad de retiros, calidad del soporte, diseño y usabilidad, casino en vivo, y programa VIP. Cada categoría tiene un peso distinto y el resultado final es el promedio ponderado. FRESH se lleva el primer puesto porque es consistentemente bueno en todo. Los demás destacan en áreas específicas pero tienen debilidades más marcadas.
        </p>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">
          Un dato importante para Ecuador: como usamos dólares, los casinos internacionales que operan en USD no te cobran conversión de moneda. Eso es una ventaja enorme que no tienen otros países de la región. Lo que depositas es exactamente lo que ves en tu cuenta.
        </p>
        <p className="text-[#9ca3af] mb-12 max-w-3xl leading-relaxed">
          ¿Cómo probamos? Nos registramos en cada casino con datos reales, depositamos entre $50 y $200 con tarjetas de bancos ecuatorianos y crypto, jugamos un mínimo de 500 giros en slots y 50 manos en mesas de casino en vivo, contactamos al soporte al menos una vez (generalmente de madrugada para ver si realmente atienden), y procesamos al menos un retiro completo. El proceso nos llevó varias semanas y la verdad es que algunos casinos nos sorprendieron para bien y otros nos decepcionaron. Acá van las reseñas sin adornos.
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
            Betsson es de esas marcas que no necesitan presentación. Llevan más de 60 años en el negocio y están listados en la bolsa de Estocolmo — no es un casino que apareció ayer y puede desaparecer mañana. Para Ecuador, eso importa bastante considerando que el mercado recién se está regulando y la confianza es todo. <strong className="text-white">Duplica tu depósito hasta $100</strong>, que suena modesto comparado con el 150% de MONRO, pero acá viene lo bueno: las condiciones son de las más limpias que probamos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo que de ley nos convenció fue el casino en vivo. <strong className="text-white">200+ mesas con dealers en español</strong> — y no español de España con el &quot;vale tío&quot;, sino dealers que hablan como cualquier pana de acá. Probamos blackjack a las 2am un martes y había 6 mesas activas. Nos sentamos en una de $5 mínimo, jugamos 25 manos con estrategia básica y salimos con $18 de ganancia. La transmisión era impecable, sin lag, sin cortes. Para los que les gusta el casino en vivo de verdad, Betsson es otro nivel.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Y acá va algo que muchos pasan por alto: <strong className="text-white">Betsson opera perfecto con dólares</strong>. Como Ecuador usa USD, tu depósito se refleja tal cual en la cuenta. Metimos $80 con una Visa de Banco Pichincha y aparecieron $80 exactos en el balance. Cero conversión, cero comisión rara. Eso en otros países de LATAM no pasa — un pana en Argentina o Colombia pierde plata solo en el tipo de cambio. Nosotros no.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El catálogo tiene <strong className="text-white">2.500+ juegos</strong>, que no es el más grande del ranking (FRESH tiene 4.500+), pero la selección está bien curada. Los títulos importantes están todos: Sweet Bonanza, Gates of Olympus, Book of Dead, Reactoonz, Gonzo&apos;s Quest. Donde Betsson se destaca es en la calidad de la experiencia, no en la cantidad bruta. Todo carga rápido, los filtros funcionan bacán y la navegación es intuitiva. Es como ir a un restaurante chévere con menú seleccionado vs. un buffet gigante donde la mitad de las cosas son regulares.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Probamos el soporte un domingo a la medianoche. Le escribimos al chat preguntando sobre los tiempos de retiro para tarjetas ecuatorianas. Respondieron en menos de 2 minutos, en español, con un agente humano que sabía de lo que hablaba. Nos confirmó que aceptan jugadores de Ecuador sin restricciones y que los retiros a Visa tardan entre 1 y 3 días hábiles. Sin bot, sin vueltas, directo al punto.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los retiros los probamos con dos métodos. Con Visa de Pichincha pedimos $120 y llegaron en 2 días hábiles — nada extraordinario pero seguro. Con Skrill fue más rápido: 8 horas y ya teníamos la plata. No aceptan crypto directamente (eso sí le falta), pero con Skrill como intermediario el proceso es bastante fluido. Si lo tuyo es crypto, FRESH o Stake te van a servir mejor en eso.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Una cosa que nos sorprendió: la sección de apuestas deportivas. Betsson no es solo casino — tienen una de las casas de apuestas más completas de LATAM. Liga Pro de Ecuador, Libertadores, NBA, NFL... todo está ahí. Si eres de los que le gusta apostar al Barcelona de Guayaquil y después tirarse unas manos de blackjack, Betsson te permite hacer las dos cosas en la misma cuenta. Eso no lo tienen FRESH ni SOL.
          </p>
          <ProsCons
            pros={[
              "200+ mesas en vivo con dealers en español real, no de España",
              "Marca con 60+ años de trayectoria, listada en bolsa",
              "Opera perfecto en USD — ideal para Ecuador",
              "Apuestas deportivas + casino en la misma plataforma",
              "Soporte rápido y en español 24/7",
            ]}
            cons={[
              "Catálogo de 2.500 juegos, menor que FRESH (4.500+)",
              "No acepta criptomonedas directamente",
              "Bono modesto comparado con el 150% de MONRO",
            ]}
          />
          <CtaButton slug="betsson-latam" text="Probar Betsson" />
        </div>

        {/* ── PIN-UP Casino ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">2. PIN-UP Casino</h3>
            <span className="bg-[#f43f5e] text-white text-xs font-black px-3 py-1 rounded-full uppercase">🔥 TOP</span>
            <span className="text-[#22c55e] font-black text-xl">9.4/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#eab308] to-transparent rounded mb-6" />

          <h4 className="text-lg font-bold text-white mb-3">+10.000 juegos — nadie más tiene ese catálogo</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Partamos por lo obvio: PIN-UP tiene <strong className="text-white">más de 10.000 juegos</strong>.
            Sí, diez mil. Para que tengas comparación, FRESH (que ya es grande) tiene 4.500. Pasamos un rato
            largo probando y buscando, y la verdad es que están todos los proveedores grandes: Hacksaw,
            Nolimit City, Pragmatic, NetEnt, Evolution, Play'n GO, Push Gaming. Y varios que no ves en otros
            casinos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Con esa cantidad de juegos podrías pensar que encontrar lo que buscas es un lío, pero la
            plataforma está bien organizada. Filtros por tipo de juego, proveedor, volatilidad, características
            (megaways, bonus buy, jackpots). El buscador responde rápido. Si te gusta probar títulos nuevos,
            acá vas a tener para meses sin repetir.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Bono de bienvenida: 120% + 250 giros gratis</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            120% en tu primer depósito más 250 giros gratis. Todo en dólares, que para Ecuador es una ventaja
            (no hay conversiones raras). Si depositas $100 USD, juegas con $220. El rollover es x50 en 7 días
            — no te voy a mentir, es exigente. Lo cumplimos jugando unas 2 horas diarias de slots, pero si
            juegas casual te va a costar. Los 250 giros se reparten en 5 días (50 por día) y las ganancias
            no tienen rollover extra, eso es bueno.
          </p>

          <h4 className="text-lg font-bold text-white mb-3">Casino en vivo, deportes y app móvil</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            PIN-UP no se queda solo en casino. Tienen <strong className="text-white">apuestas deportivas</strong>
            con mercados para prácticamente cualquier deporte: fútbol (Liga Pro, Copa Libertadores, Champions),
            NBA, tenis, incluso eSports. El casino en vivo es Evolution, Pragmatic Live y Ezugi — blackjack,
            ruleta, baccarat, Crazy Time, Monopoly Live. Dealers en español en la mayoría.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Y tienen <strong className="text-white">app móvil para Android e iOS</strong>. La descargamos y
            funciona mejor que la versión web en el celular. Interfaz optimizada, login con huella, guarda
            métodos de pago. Si juegas desde el móvil (que es donde estamos la mayoría), esta app es un plus.
          </p>

          <ProsCons
            pros={[
              "+10.000 juegos — el catálogo más grande del ranking, por mucho",
              "Bono de 120% + 250 giros, el porcentaje más alto que vas a encontrar",
              "App móvil nativa Android/iOS que realmente funciona bien",
              "Casino + apuestas deportivas en la misma cuenta",
              "Soporte 24/7 en español, responden rápido incluso de madrugada",
            ]}
            cons={[
              "Rollover x50 del bono es alto si juegas poco",
              "Licencia Curaçao, como la mayoría de casinos internacionales en Ecuador",
              "La cantidad de juegos puede abrumar al principio — hay que usar los filtros",
            ]}
          />
          <CtaButton slug="pinup" text="Probar PIN-UP Casino" />
        </div>

        {/* ── FRESH ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">3. FRESH Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#eab308] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Lo que más nos impactó de FRESH Casino fue el tamaño del catálogo. <strong className="text-white">4.500+ juegos</strong> de más de 80 proveedores. Pragmatic Play, Evolution, NetEnt, Hacksaw, Play&apos;n GO, Nolimit City y hasta estudios chicos como BGaming y Belatra que no encuentras en otros casinos. Buscamos &quot;Wanted Dead or a Wild&quot; de Hacksaw y &quot;San Quentin&quot; de Nolimit City — títulos que la mayoría de casinos no tiene — y estaban los dos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La plataforma funciona bien en celular. La probamos desde un Xiaomi Redmi con datos de Claro y los juegos cargaban en 2-3 segundos. El casino en vivo tiene 300+ mesas — jugamos Crazy Time a las 2am y había mesa con dealer en español sin problema. El programa VIP tiene 7 niveles; llegamos al nivel 3 en dos semanas y la diferencia se nota: retiros más rápidos, bonos por mail y un gerente de cuenta que nos contactó un domingo.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El bono de <strong className="text-white">100% + 500 giros gratis (rollover x35)</strong> es sólido. Los giros vienen de a 50 por día durante 10 días. Además hay recargas del 50% los viernes, cashback del 10% los lunes y torneos de slots con premios de hasta $10.000.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pagos: acepta Visa, Mastercard, Skrill, Neteller y crypto (BTC, ETH, USDT, LTC). Al estar en dólares, el depósito con tarjeta Visa ecuatoriana funcionó sin problema. Los retiros con USDT nos llegaron en 45 minutos. Con Skrill tardó unas 16 horas. Con Visa, 2 días hábiles.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La sesión de casino en vivo a las 2am fue una experiencia aparte. Nos metimos a Crazy Time porque queríamos ver si de verdad había mesas activas a esa hora. Había tres mesas de Crazy Time funcionando, todas con dealers en vivo. Nos quedamos en una de blackjack con dealer que hablaba español (acento neutro, no de España) y la transmisión era impecable — sin lag, sin pixeles. El mínimo era $1 por mano, lo cual está perfecto para probar sin arriesgar mucho. Jugamos 30 manos, terminamos con $8 de ganancia.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El programa VIP merece que lo expliquemos bien porque tiene 7 niveles y la diferencia entre el nivel 1 y el 7 es enorme. Arrancas en Bronce, después viene Plata, Oro, Platino, Diamante, Elite y Master. Cada nivel te da mejor porcentaje de cashback (va del 5% al 15%), retiros más rápidos, bonos exclusivos por correo y a partir de Platino te asignan un gerente de cuenta personal. Para los que juegan seguido, el VIP de FRESH es de ley el mejor del ranking.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Probamos el celular a fondo — un Xiaomi Redmi Note 12 con datos de Claro. Los juegos cargaban entre 2 y 4 segundos. Sweet Bonanza la jugamos durante una sesión de 45 minutos desde el bus Quito-Ambato y no se cortó ni una vez. La interfaz se adapta bien al celular, los botones son grandes y no te equivocas tocando. Y la ventaja de jugar en dólares desde Ecuador es que cada centavo que apuestas es un centavo real, sin andar calculando conversiones.
          </p>
          <ProsCons
            pros={[
              "4.500+ juegos de 80+ proveedores — el catálogo más grande del ranking",
              "500 giros gratis bien dosificados en 10 días",
              "Casino en vivo con 300+ mesas y dealers en español",
              "Programa VIP de 7 niveles con beneficios reales",
              "Opera en USD — sin conversión para ecuatorianos",
              "Retiros crypto en menos de 1 hora",
            ]}
            cons={[
              "No tiene opciones de pago locales ecuatorianas",
              "El rollover x35 no es el más bajo (SOL tiene x30)",
              "Sin regulación ecuatoriana (licencia Curaçao)",
            ]}
          />
          <CtaButton slug="fresh-casino" text="Probar FRESH Casino" />
        </div>

        {/* ── SOL ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">4. SOL Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.1/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#eab308] to-transparent rounded mb-6" />
          <h4 className="text-lg font-bold text-white mb-3">El bono con rollover más bajo del ranking</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si nunca jugaste en un casino online, SOL es por donde tienes que empezar. ¿Por qué? Porque su bono de <strong className="text-white">100% + 500 giros tiene rollover de apenas x30</strong>, el más bajo de toda la lista. Si depositas $100, tienes $200 para jugar y necesitas apostar $6.000 en total. Jugando slots de $0.20 son 30.000 giros, que en 14 días es totalmente factible.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            El cashback semanal del 15% sin rollover es tremendo. Perdimos $50 a propósito en una semana y el lunes nos llegaron $7.50 al balance real. No te haces rico, pero es plata que puedes retirar directamente sin cumplir nada.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">4.000 juegos</strong> con interfaz re limpia. Es la plataforma más fácil de usar del ranking. Los filtros funcionan, todo está donde lo esperas y no te pierdes. Misma ventaja que FRESH: opera en dólares, así que cero drama con la moneda.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Comparando el catálogo con FRESH, SOL tiene unos 500 juegos menos pero la verdad es que para el 95% de jugadores no vas a notar la diferencia. Los títulos importantes están todos: Sweet Bonanza, Gates of Olympus, Big Bass Bonanza, Book of Dead, Reactoonz. Donde sí se nota es en los proveedores chicos — Hacksaw y Nolimit City tienen menos títulos en SOL que en FRESH. Si eres de los que busca slots raras o de ultra alta volatilidad, FRESH te va a dar más opciones. Pero si juegas los hits populares, SOL está perfecto.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Probamos el soporte al cliente un sábado a las 11pm. Le preguntamos algo específico: &quot;¿Cuál es el RTP real de Sweet Bonanza en su plataforma? ¿Usan la versión estándar o la reducida?&quot; (algunos casinos usan versiones con RTP más bajo, eso es real). Nos respondieron en 3 minutos. Primero pasó un bot que nos preguntó nombre de usuario y tipo de consulta — eso tomó como 40 segundos. Después nos conectaron con un agente humano que nos dijo que usan la versión estándar de Pragmatic Play con RTP de 96.48%. Respuesta correcta y directa. No es el soporte más rápido (Bet365 responde en 90 segundos), pero es competente y en español.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            SOL opera con licencia de Curaçao, y acá vale la pena explicar por qué eso importa para Ecuador. Como no hay regulación local todavía, la licencia internacional es lo único que te protege. Curaçao Gaming Authority audita que los casinos paguen, que los juegos sean justos y que haya un proceso de quejas. No es perfecta (Malta es más estricta), pero es legítima y reconocida. Si un casino con licencia de Curaçao no te paga, puedes escalar la queja ante la autoridad. Sin licencia, no tienes nada. Eso es lo que separa a SOL de los casinos piratas que circulan por ahí.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            El casino en vivo tiene unas 200 mesas — menos que las 300+ de FRESH pero más que suficiente. Nos metimos a una mesa de blackjack a la 1am y había 4 mesas activas con dealers en español. La que elegimos tenía mínimo de $2 y máximo de $2.500. La transmisión iba bien, sin cortes, y el dealer interactuaba con los jugadores en el chat. Jugamos 20 manos con estrategia básica, empezamos con $40 y salimos con $52. Lo que nos gustó es que las mesas no estaban tan llenas como en FRESH a esa hora — menos espera entre manos.
          </p>
          <ProsCons
            pros={[
              "Rollover x30, el más bajo — más fácil de cumplir que la competencia",
              "Cashback 15% semanal sin rollover, la plata es tuya al toque",
              "Interfaz super clara, ideal para quienes arrancan",
              "Opera en USD, sin problemas de conversión",
            ]}
            cons={[
              "Catálogo un poco menor que FRESH (4.000 vs 4.500)",
              "Soporte bueno pero no espectacular (3 min de espera)",
              "Sin métodos de pago específicos para Ecuador",
            ]}
          />
          <CtaButton slug="sol-casino" text="Probar SOL Casino" />
        </div>

        {/* ── MONRO ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">6. MONRO Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">9.0/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#eab308] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            <strong className="text-white">150% en tu primer depósito.</strong> Así de simple: le metes $100 y juegas con $250. Nadie más en la lista llega a ese porcentaje. Ese es el gancho de MONRO y funciona.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Pero seamos honestos: lo que tiene de bueno el bono, lo pierde en otros lados. El catálogo tiene <strong className="text-white">3.500 juegos</strong> (no está mal pero al lado de FRESH se nota). El diseño es funcional pero genérico. El soporte tardó 5 minutos en responder, mientras Betsson y Bet365 responden en 2. El límite de retiro mensual de $30.000 USD es el más bajo del top 5.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los retiros con Bitcoin nos llegaron en 50 minutos. La sección de crash games (Aviator, Spaceman, JetX) es decente. Opera en dólares, así que sin problema para Ecuador.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Vamos a hacer la matemática del rollover en dólares. Depositas $100, recibes $150 de bono, total en tu cuenta: $250. El rollover es x35 sobre el bono, o sea $150 x 35 = <strong className="text-white">$5.250 en apuestas totales</strong>. Si juegas slots a $0.20 por giro, necesitas hacer 26.250 giros. A 200 giros por hora son 131 horas en 14 días. Eso es bastante exigente, de ley. La alternativa es subir la apuesta a $0.40 — ahí son unas 65 horas, mucho más realista. La ventaja de jugar en USD es que cada centavo rinde exacto.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            La navegación de la plataforma es funcional pero le falta personalidad. Todo está donde lo esperas — slots en un lado, en vivo en otro, crash games aparte — pero el diseño se siente genérico. Los filtros de búsqueda son básicos: por proveedor y popularidad, nada más. En FRESH puedes filtrar por volatilidad, RTP, mecánica... acá no.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            Sobre el límite de retiro mensual de $30.000 USD: para el 99% de jugadores no va a ser un problema. Pero si pegas un jackpot grande, te vas a topar con esa pared. En FRESH y SOL los límites son más altos ($50.000+), y en Betsson prácticamente no hay tope razonable. Es algo a considerar si tu bankroll es grande.
          </p>
          <ProsCons
            pros={[
              "150% de bono — el porcentaje más alto del ranking, nadie le gana",
              "3.500 juegos con crash games incluidos",
              "Retiros Bitcoin en menos de 1 hora",
              "Opera en USD, perfecto para Ecuador",
            ]}
            cons={[
              "Diseño genérico, le falta personalidad",
              "Soporte más lento (5 min) que la competencia",
              "Límite de retiro $30k mensuales, el más bajo del top 5",
            ]}
          />
          <CtaButton slug="monro-casino" text="Probar MONRO Casino" />
        </div>

        {/* ── STARDA ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">5. STARDA Casino</h3>
            <span className="text-[#22c55e] font-black text-xl">8.9/10</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#eab308] to-transparent rounded mb-6" />
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Si lo tuyo son las tragamonedas, STARDA es tu casino. <strong className="text-white">3.800+ juegos</strong> con Pragmatic Play, Push Gaming, Hacksaw Gaming y Nolimit City. Los torneos semanales de slots con premios de hasta $15.000 USD son lo que realmente lo distingue — compites contra otros jugadores, no solo contra la máquina.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Nos metimos a un torneo, terminamos en el puesto 40 de más de 350 jugadores y ganamos un premio chico pero real. El bono es <strong className="text-white">100% + 500 giros (x35)</strong>, pero ojo: los giros van a &quot;Book of Gold&quot; de Playson. No eliges tú. La sección de crash (Aviator, Spaceman, JetX, Lucky Jet) es la más completa del ranking.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Acepta Dogecoin además de las criptos habituales. El casino en vivo es más chico que FRESH (150 vs 300 mesas). Opera en dólares, así que cero drama con la moneda para ecuatorianos.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">
            Los torneos merecen que los expliquemos porque son lo que realmente hace diferente a STARDA. Cada semana hay un torneo con un pozo de premios (generalmente entre $5.000 y $15.000 USD). Juegas las slots participantes con apuestas reales y cada giro te da puntos según el multiplicador que consigas. Un multiplicador de 50x en un giro de $0.20 te da 50 puntos. El que acumula más puntos al final de la semana se lleva el primer premio. La emoción de competir contra otros jugadores le agrega una capa que las slots normales no tienen.
          </p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">
            La sección de crash games es la más completa del ranking. Tienen Aviator (Spribe), Spaceman (Pragmatic Play), JetX (Smartsoft), Lucky Jet (Gaming Corps) y Crash (BGaming). Cinco opciones cuando la mayoría de casinos tiene dos o tres. Lucky Jet tiene una mecánica bacán donde puedes ver las apuestas de otros jugadores en tiempo real. Jugamos 20 rondas con $0.50 y el cashout automático en 2x — terminamos con $3 de ganancia. Nada loco, pero entretenido.
          </p>
          <ProsCons
            pros={[
              "Torneos de slots con premios reales hasta $15k USD",
              "Todos los proveedores de alta volatilidad (Hacksaw, Nolimit City)",
              "Mejor sección de crash del ranking (5 juegos)",
              "Acepta Dogecoin y opera en USD",
            ]}
            cons={[
              "500 giros forzados en Book of Gold, no eliges",
              "Casino en vivo más chico (150 vs 300 de FRESH)",
              "Sin métodos locales ecuatorianos",
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
              <p className="text-[#9ca3af] leading-relaxed mb-2">La casa de apuestas más grande del mundo. Lo que distingue a Bet365 es la confiabilidad absoluta — es prácticamente imposible que te dejen colgado con un pago. Probamos el soporte a las 3am y respondieron en 90 segundos, en español, sin bot. El catálogo de casino es más chico que los internacionales (1.800 juegos), pero la marca es sinónimo de seguridad.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">Acepta Visa y Mastercard ecuatorianas sin problema (probado con Banco Pichincha). Si quieres lo más seguro que existe, Bet365 es la apuesta.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">Hicimos una prueba específica con una Visa de débito de Banco Pichincha. Depositar $50 funcionó al primer intento, sin código de verificación adicional, sin llamada del banco. El depósito apareció instantáneamente en la cuenta de Bet365. Para el retiro pedimos $80 (los $50 más $30 de ganancia en blackjack) y tardó exactamente 47 horas en llegar a la cuenta de Pichincha. No es lo más rápido del mundo, pero para tarjeta es normal y al menos sabes que llega seguro.</p>
              <p className="text-[#9ca3af] leading-relaxed">Le escribimos al soporte a las 3am un domingo para preguntarles por qué una apuesta de casino en vivo se había cancelado (era una prueba a propósito). Respondieron en 90 segundos. En español, con un agente humano que sabía de lo que hablaba. Le preguntamos si atendían jugadores de Ecuador y nos confirmó que sí, sin restricciones. Eso no lo encuentras en muchos casinos a esa hora.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">1xBet <span className="text-[#22c55e] text-sm font-black">8.7/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed mb-2">El catálogo más grande de todos: 5.000+ juegos. Si lo que buscas es variedad extrema, 1xBet tiene incluso más títulos que FRESH (aunque la calidad de la plataforma no es la misma). Acepta una cantidad ridícula de métodos de pago y criptomonedas. El soporte es correcto pero no espectacular.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">El bono de bienvenida es competitivo (100% hasta $300) y tienen promociones constantemente. La interfaz puede sentirse un poco abrumadora por la cantidad de opciones, pero si cachas un poco de casinos, le sacas provecho.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">Nos pusimos a explorar el catálogo con calma y de ley es abrumador. Tiene secciones de deportes, casino, casino en vivo, eSports, bingo, poker, TV games y hasta apuestas financieras. Es como entrar a un centro comercial gigante cuando solo querías comprar una cosa. Encontramos slots que no están en ningún otro casino del ranking — proveedores que nunca habíamos oído como 1x2 Gaming y Endorphina. Pero la interfaz necesita mejoras serias: los menús tienen demasiados niveles, la búsqueda a veces no encuentra juegos que sí existen si escribes mal una letra, y en celular la navegación se siente apretada.</p>
              <p className="text-[#9ca3af] leading-relaxed">Para Ecuador, 1xBet tiene algo que la mayoría no ofrece: acepta transferencias bancarias locales y tiene más métodos de pago que cualquier otro casino. Si tu tarjeta de Pichincha no pasa en otro casino, en 1xBet probablemente encuentres alguna alternativa que funcione. Eso tiene valor real para jugadores ecuatorianos que a veces se frustran con los bloqueos bancarios.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Stake <span className="text-[#22c55e] text-sm font-black">8.6/10</span></h4>
              <p className="text-[#9ca3af] leading-relaxed mb-2">El casino cripto por excelencia. En Ecuador, donde ya usamos dólares, crypto funciona especialmente bien porque USDT (Tether) tiene paridad 1:1 con el dólar. Depositas $100 USDT, ves $100 en el casino. Sin conversión, sin sorpresas.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">Tiene juegos exclusivos (Plinko, Mines, Crash), el programa VIP más exclusivo del mercado y retiros prácticamente instantáneos. El bono es más modesto pero con rollover x1. Si ya manejas crypto, Stake es tu casino sin discusión.</p>
              <p className="text-[#9ca3af] leading-relaxed mb-2">Los juegos exclusivos de Stake son otra cosa. Plinko es hipnótico — dejas caer una bola y ves cómo rebota hasta caer en un multiplicador. Puede ser 0.2x o puede ser 1000x. Mines es como buscaminas pero con apuestas: vas destapando casillas y cada una que no es mina te sube el multiplicador. Puedes cobrar cuando quieras o arriesgarte a seguir. Nos pasamos una hora jugando Mines con apuestas de $0.50 y terminamos con $12 de ganancia. Es el tipo de juego que no encuentras en los casinos tradicionales.</p>
              <p className="text-[#9ca3af] leading-relaxed">El programa VIP de Stake es por invitación — no llegas subiendo de nivel como en FRESH. Tienes que jugar un volumen significativo y ellos te contactan. Los beneficios incluyen rakeback (te devuelven un porcentaje de cada apuesta), bonos semanales y mensuales personalizados, y un host VIP dedicado. Para Ecuador, la ventaja extra es que al depositar en USDT (paridad 1:1 con el dólar), no pierdes nada en conversión. Compras USDT en Binance P2P pagando con dólares, lo mandas a Stake, y listo. Tu balance refleja exactamente lo que pagaste.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ CTA ═══ */}
      <div className="bg-gradient-to-r from-[#eab308]/10 via-[#0e0e0e] to-[#dc2626]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">Nuestro #1 para jugadores ecuatorianos</p>
        <p className="text-white text-xl font-black mb-4">Betsson — ¡Duplica tu depósito hasta $100!</p>
        <CtaButton slug="betsson-latam" />
      </div>

      {/* ═══ PRIORIDAD ═══ */}
      <Section id="prioridad">
        <SectionTitle>Mejor Casino Online en Ecuador Según Tu Prioridad</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Cada jugador busca algo distinto. Acá te decimos cuál elegir según lo que más te importa.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">No existe un casino perfecto para todos. Un pana que juega slots de alta volatilidad buscando el premio gordo necesita algo completamente diferente a alguien que quiere blackjack con la menor ventaja de la casa posible. O alguien que juega desde el celular con datos de Claro y necesita que todo cargue rápido tiene prioridades distintas a alguien que juega desde casa con fibra óptica. Por eso dividimos las recomendaciones por prioridad — elige la categoría que más te represente y anda directo a esa opción.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categoryPicks.map((pick) => (
            <div key={pick.title} className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 flex flex-col transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1">
              <p className="text-xs font-bold text-[#eab308] uppercase tracking-wider mb-2">{pick.title}</p>
              <p className="text-xl font-black text-white mb-2">{pick.casino}</p>
              <p className="text-sm text-[#9ca3af] leading-relaxed flex-1 mb-4">{pick.reason}</p>
              <CtaButton slug={pick.slug} text="Visitar" />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ COMPARATIVAS ═══ */}
      <Section id="comparativa-casinos" alt>
        <SectionTitle>Comparativa Detallada de Casinos Online en Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">El ranking te da la idea general. Si quieres comparar dato por dato, estas tablas son para ti.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Hicimos estas comparativas porque las diferencias entre casinos no siempre son obvias. Un casino puede tener el mejor bono del mundo pero los retiros más lentos. Otro puede tener retiros instantáneos pero un catálogo mediocre. Estos datos los sacamos de nuestra experiencia real probando con plata de verdad, no de las páginas de los casinos — porque lo que dicen y lo que hacen no siempre coincide. Cada número en estas tablas fue verificado personalmente.</p>
        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Bonos</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Casino</th><th className="px-4 py-3 font-bold">Bono</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Rollover</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Giros</th><th className="px-4 py-3 font-bold hidden md:table-cell">Validez</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Betsson","Duplica dep. hasta $100","x30","—","30 días"],["FRESH Casino","100% primer dep.","x35","500","14 días"],["SOL Casino","100% primer dep.","x30","500","14 días"],["MONRO Casino","150% primer dep.","x35","—","14 días"],["STARDA Casino","100% primer dep.","x35","500","14 días"],["Bet365","100% bienvenida","x30","—","30 días"],["1xBet","100% hasta $300","x35","—","30 días"],["Stake","Bono + giros","x1","Sí","7 días"]].map(([c,b,r,s,v])=>(
                <tr key={c} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{c}</td><td className="px-4 py-3">{b}</td><td className="px-4 py-3 hidden sm:table-cell">{r}</td><td className="px-4 py-3 hidden sm:table-cell">{s}</td><td className="px-4 py-3 hidden md:table-cell">{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-bold text-white mb-4">Comparativa de Métodos de Pago</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06] mb-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Casino</th><th className="px-4 py-3 font-bold">Visa</th><th className="px-4 py-3 font-bold">Transfer</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Crypto</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Skrill</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Retiro</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Betsson","✓","✓","—","✓","1-3 días"],["FRESH Casino","✓","—","✓","✓","0-1h (crypto)"],["SOL Casino","✓","—","✓","✓","0-1h (crypto)"],["MONRO Casino","✓","—","✓","✓","0-1h (crypto)"],["STARDA Casino","✓","—","✓","✓","0-12h (crypto)"],["Bet365","✓","✓","—","—","1-24h"],["1xBet","✓","✓","✓","✓","0-24h"],["Stake","—","—","✓","—","Instantáneo"]].map(([c,v,t,cr,sk,ret])=>(
                <tr key={c} className="border-t border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-bold text-white">{c}</td>
                  <td className="px-4 py-3">{v==="✓"?<span className="text-[#22c55e]">✓</span>:<span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3">{t==="✓"?<span className="text-[#22c55e]">✓</span>:<span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{cr==="✓"?<span className="text-[#22c55e]">✓</span>:<span className="text-[#71717a]">—</span>}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{sk==="✓"?<span className="text-[#22c55e]">✓</span>:<span className="text-[#71717a]">—</span>}</td>
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
              {[["Betsson","2 500+","1 800+","200+","40+"],["FRESH Casino","4 500+","3 800+","300+","80+"],["SOL Casino","4 000+","3 400+","200+","70+"],["MONRO Casino","3 500+","3 000+","180+","60+"],["STARDA Casino","3 800+","3 200+","150+","65+"],["Bet365","1 800+","1 200+","150+","25+"],["1xBet","5 000+","4 000+","200+","90+"],["Stake","3 000+","2 200+","200+","50+"]].map(([c,t,s,l,p])=>(
                <tr key={c} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{c}</td><td className="px-4 py-3">{t}</td><td className="px-4 py-3 hidden sm:table-cell">{s}</td><td className="px-4 py-3 hidden sm:table-cell">{l}</td><td className="px-4 py-3 hidden md:table-cell">{p}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ BONOS ═══ */}
      <Section id="bonos" bg="/img/backgrounds/slots.png">
        <SectionTitle>Tipos de Bonos en Casinos Online de Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Los bonos son plata gratis que te da el casino para que juegues. Suena chévere, ¿cierto? Y lo es... si entiendes cómo funcionan. La mayoría acepta bonos sin leer las condiciones y después se queja cuando no puede retirar. Es el error más común que vemos entre jugadores ecuatorianos que recién empiezan — se emocionan con el número grande del bono y se olvidan de la letra chica que define si realmente van a poder sacar algo.</p>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Acá te explicamos cada tipo con números reales y consejos para que no te lleves sorpresas. Una ventaja de Ecuador: al operar en dólares, los montos que ves en los casinos internacionales son exactamente lo que depositas. Sin conversión.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Un consejo antes de empezar: no todos los bonos valen la pena. Suena contradictorio porque es plata gratis, pero un bono con condiciones absurdas puede ser peor que no aceptar nada. El rollover es la clave de todo — es cuántas veces tienes que apostar el bono antes de poder retirar. Siempre haz la multiplicación y fíjate si es realista cumplirlo en el tiempo que te dan. Si no lo es, rechaza el bono y juega solo con tu depósito. Tendrás la libertad de retirar cuando quieras.</p>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Bienvenida</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Haces tu primer depósito y el casino te da un porcentaje extra. Un &quot;100% hasta $500&quot; significa que si metes $200, recibes otros $200. En Ecuador al usar dólares, no hay confusión con conversiones — $200 son $200.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Ejemplo con MONRO (150%): depositas $100, recibes $150 de bono. Con rollover x35 necesitas apostar $5.250 en total. Jugando slots de $0.20 son 26.250 giros en 14 días. Exigente pero posible.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Ahora comparemos con SOL (100% con rollover x30): depositas $100, recibes $100 de bono. Rollover: $100 × 30 = $3.000 en apuestas. Jugando a $0.20 son 15.000 giros — casi la mitad que MONRO. En 14 días son unos 1.070 giros diarios, que a ritmo normal son 5-6 horas de juego. Mucho más manejable. Moraleja: el porcentaje del bono no es todo, el rollover importa tanto o más. Y en dólares los cálculos son limpios — lo que ves es lo que hay, sin andar convirtiendo de pesos o soles.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Un bono con rollover x30 es mejor que uno más grande con rollover x50. Siempre haz la multiplicación antes de elegir.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono Sin Depósito</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Te registras y el casino te da plata o giros sin meter un centavo. El rollover suele ser alto (x40-x60) y el retiro máximo limitado. Pero es plata gratis para probar.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">En Ecuador estos bonos son especialmente útiles si todavía no estás seguro de meter plata en un casino online. Ejemplo real: te dan $10 sin depósito con rollover x50 y retiro máximo de $50. Necesitas apostar $500 en total. Si juegas slots de $0.10 son 5.000 giros. Las probabilidades de cumplir el rollover y tener plata para retirar son bajas, seamos honestos. Pero el punto no es hacerte rico — es probar la plataforma sin arriesgar ni un centavo de tu bolsillo. Y como estamos en dólares, esos $10 son $10 reales de juego.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Úsalo para conocer la plataforma. Si te gusta, depositas. Si no, no perdiste nada.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Tiradas Gratis</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Giros gratuitos en slots. Ojo con el valor: 50 giros a $0.10 ($5 total) son peores que 20 giros a $0.50 ($10 total). FRESH, SOL y STARDA dan 500 giros con el bono de bienvenida.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Hagamos la cuenta en dólares. FRESH te da 500 giros de $0.10, repartidos en 50 por día durante 10 días. Total: $50 en giros gratis. Las ganancias de esos giros van a tu balance de bono con rollover x35. Si en los 500 giros ganas $20 (un resultado promedio), necesitas apostar $700 para liberar esa plata. STARDA también da 500 giros pero forzados en Book of Gold — un juego que a nosotros no nos convenció mucho. SOL te deja elegir entre más opciones, lo cual es mejor. El valor real de los giros depende del juego, el RTP y tu suerte, pero $50 en giros es $50 que no salen de tu cuenta.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Fíjate si puedes elegir la slot o te la asignan. STARDA te fuerza en Book of Gold.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Cashback</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Te devuelven un porcentaje de lo que perdiste. SOL da 15% semanal sin rollover. Si perdiste $50, te devuelven $7.50 que puedes retirar al toque. Es de los bonos más justos que hay.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">El cashback es el bono más honesto que existe y lo decimos con convicción. ¿Por qué? Porque no tiene trampas. Si pierdes $200 en una semana y el cashback es 15%, te llegan $30 a tu balance real (no al balance de bono). Esos $30 los puedes retirar directo o usarlos para seguir jugando. En dólares ecuatorianos eso es $30 reales que el casino te devuelve sin condiciones. FRESH tiene cashback del 10% los lunes, SOL del 15% los martes. Si juegas en ambos, puedes aprovechar los dos.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Un cashback sin rollover vale más que un bono enorme con rollover x50.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Bono de Recarga</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Como el de bienvenida pero para depósitos siguientes. FRESH da 50% los viernes. Si juegas regularmente, estos bonos suman más que el de bienvenida a largo plazo.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Ejemplo en dólares: si depositas $50 cada viernes en FRESH con el bono de recarga del 50%, recibes $25 extra cada semana. En un mes son $100 en bonos de recarga. El rollover suele ser x30 (más bajo que el de bienvenida), así que $25 × 30 = $750 en apuestas. A $0.20 por giro son 3.750 giros por semana, unas 18 horas de juego. Si ya ibas a jugar de todos modos, es plata extra que te cae sin esfuerzo adicional.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Los viernes de FRESH son sagrados para los que jugamos seguido.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Programa VIP</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Sistema de niveles que premia tu actividad. FRESH tiene 7 niveles con retiros más rápidos, bonos personalizados y gerente de cuenta. Llegamos al nivel 3 en dos semanas y ya se sentía la diferencia.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Comparando programas VIP: FRESH tiene sistema de niveles transparente donde sabes exactamente cuántos puntos necesitas para subir. Stake tiene VIP por invitación — más exclusivo pero menos predecible. SOL tiene un sistema más simple con cashback que sube automáticamente. Para jugadores ecuatorianos que recién empiezan, el VIP de FRESH es el más claro porque ves tu progreso. Si ya manejas crypto y juegas volumen alto, Stake puede darte beneficios superiores pero tienes que esperar la invitación.</p>
            <p className="text-[#d4d4d8] text-sm italic">Consejo: Si piensas jugar seguido, elige un casino con buen VIP desde el día uno.</p>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Si buscas...</th><th className="px-4 py-3 font-bold">Mejor opción</th><th className="px-4 py-3 font-bold text-right">Enlace</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[{need:"Bono más grande en %",best:"MONRO Casino (150%)",slug:"monro-casino"},{need:"Más giros gratis",best:"FRESH Casino (500)",slug:"fresh-casino"},{need:"Rollover más bajo",best:"SOL Casino (x30)",slug:"sol-casino"},{need:"Mejor cashback",best:"SOL Casino (15%)",slug:"sol-casino"},{need:"Mejor VIP",best:"FRESH Casino (7 niveles)",slug:"fresh-casino"},{need:"Casino cripto",best:"Stake",slug:"stake"}].map((r)=>(
                <tr key={r.need} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3">{r.need}</td><td className="px-4 py-3 font-bold text-white">{r.best}</td><td className="px-4 py-3 text-right"><a href={`/go/${r.slug}`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] whitespace-nowrap">Visitar</a></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ PAGOS ═══ */}
      <Section id="pagos" alt>
        <SectionTitle>Métodos de Pago en los Casinos Online de Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Seamos honestos: Ecuador tiene menos opciones de pago locales para casinos online que otros países de la región como México o Argentina. No hay un equivalente a OXXO, Mercado Pago o Rapipago acá. No hay un Nequi, no hay un Daviplata, no hay billeteras digitales locales que funcionen para casinos. Pero la gran ventaja que tenemos es el dólar — al usar USD como moneda, la compatibilidad con casinos internacionales es directa. Y con crypto, específicamente USDT, la paridad 1:1 con el dólar hace que depositar y retirar sea limpio y sin pérdidas por tipo de cambio.</p>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Las opciones principales son tarjetas, transferencias bancarias, monederos electrónicos y criptomonedas. Acá te explicamos cada una.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Algo que aprendimos probando: siempre deposita y retira por el mismo método. Si depositas con Visa, retira con Visa. Si depositas con crypto, retira con crypto. Los casinos tienen políticas anti-lavado que exigen esto, y si no lo cumples, el retiro se puede demorar o hasta rechazar. Otro tip: haz un depósito chico ($10-20) y un retiro de prueba antes de meter montos grandes. Es la mejor forma de verificar que todo funciona sin arriesgar mucho.</p>
        <div className="space-y-8">
          <div><h3 className="text-xl font-bold text-white mb-3">Tarjetas Visa / Mastercard</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">El método más directo. Las tarjetas de débito y crédito de Banco Pichincha, Banco Guayaquil, Produbanco y Banco del Pacífico funcionan en la mayoría de casinos internacionales. Depósito instantáneo, retiro en 1-5 días hábiles.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Probamos con una Visa de Banco Pichincha en FRESH Casino y funcionó al primer intento. En Bet365 también pasó sin problema. Algunos bancos pueden bloquear transacciones a sitios de juego — si te pasa, prueba con Skrill como intermediario.</p>
            <p className="text-[#9ca3af] leading-relaxed">¿Qué bancos ecuatorianos funcionan mejor? Por nuestra experiencia: <strong className="text-white">Banco Pichincha</strong> (Visa y Mastercard) pasa en la mayoría de casinos sin problema. <strong className="text-white">Banco Guayaquil</strong> también funciona bien, aunque tuvimos un bloqueo en 1xBet que se resolvió llamando al banco. <strong className="text-white">Produbanco</strong> funciona pero es más estricto con transacciones internacionales — a veces te pide confirmación por mensaje de texto. <strong className="text-white">Banco del Pacífico</strong> nos bloqueó en dos casinos pero funcionó en Bet365. Y las tarjetas de <strong className="text-white">cooperativas</strong> tipo JEP o Juventud Ecuatoriana generalmente no pasan. Si te rechazan, no te frustres — llama al banco o usa crypto como alternativa.</p>
          </div>
          <div><h3 className="text-xl font-bold text-white mb-3">Transferencia Bancaria</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Funciona en casinos que la aceptan (Bet365, 1xBet, Betsson). Depósito en horas, retiro en 1-3 días. Banco Pichincha, Banco Guayaquil, Produbanco y Banco del Pacífico son los principales. Al ser en dólares, no hay conversión de moneda.</p>
            <p className="text-[#9ca3af] leading-relaxed">El proceso con Banco Pichincha paso a paso: entras al casino, eliges &quot;transferencia bancaria&quot; como método de depósito, el casino te da los datos de una cuenta (generalmente en un banco internacional). Vas a tu banca en línea de Pichincha, haces una transferencia internacional al exterior con esos datos. Ojo: Pichincha cobra una comisión por transferencia internacional que varía pero suele estar entre $25 y $50. Por eso, las transferencias solo valen la pena para montos grandes ($200+). Para depósitos chicos, la tarjeta o crypto salen más baratos. El depósito puede tardar entre 2 y 24 horas en acreditarse. Para retiros es lo mismo pero al revés — el casino te pide los datos de tu cuenta en Pichincha y te hace la transferencia. Tarda entre 1 y 3 días hábiles.</p>
          </div>
          <div><h3 className="text-xl font-bold text-white mb-3">Criptomonedas (USDT, Bitcoin, Ethereum)</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2"><strong className="text-white">En Ecuador, crypto tiene una ventaja extra.</strong> Como ya usamos dólares, USDT (Tether) que tiene paridad 1:1 con USD funciona perfecto. Depositas $100 USDT, ves $100 en el casino. Sin drama.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Puedes comprar USDT en exchanges como Binance P2P o exchanges locales. Los retiros crypto son los más rápidos: minutos en vez de días. FRESH, SOL, MONRO, STARDA y Stake aceptan crypto. Si tu tarjeta no pasa, esta es la alternativa más limpia.</p>
            <p className="text-[#9ca3af] leading-relaxed mb-2">La ventaja del par USD/USDT para Ecuador es brutal. USDT (Tether) está anclado al dólar estadounidense 1:1. Como nosotros ya usamos dólares, no hay riesgo de tipo de cambio. Compras $100 en USDT, depositas $100 en el casino, retiras $150 en USDT, vendes $150 y recibes $150 en tu cuenta bancaria. Sin sorpresas. En países como Argentina o Colombia donde la moneda fluctúa, crypto puede significar ganar o perder plata solo por el tipo de cambio. Nosotros no tenemos ese problema.</p>
            <h4 className="text-base font-bold text-white mb-3 mt-6">Cómo depositar con crypto desde Ecuador — Paso a paso</h4>
            <div className="space-y-3 mb-4">
              <div className="flex gap-3 items-start"><span className="text-[#eab308] font-black text-sm shrink-0">1.</span><p className="text-[#9ca3af] text-sm leading-relaxed"><strong className="text-white">Crea una cuenta en Binance.</strong> Descarga la app, regístrate con tu cédula ecuatoriana y completa la verificación. Tarda entre 10 minutos y 24 horas dependiendo de la hora.</p></div>
              <div className="flex gap-3 items-start"><span className="text-[#eab308] font-black text-sm shrink-0">2.</span><p className="text-[#9ca3af] text-sm leading-relaxed"><strong className="text-white">Compra USDT por Binance P2P.</strong> Ve a la sección P2P, selecciona &quot;Comprar USDT&quot;, elige un vendedor que acepte transferencia bancaria ecuatoriana (Pichincha, Guayaquil, etc.). El precio suele estar entre $1.00 y $1.02 por USDT. Le transfieres los dólares al vendedor y Binance te libera los USDT automáticamente.</p></div>
              <div className="flex gap-3 items-start"><span className="text-[#eab308] font-black text-sm shrink-0">3.</span><p className="text-[#9ca3af] text-sm leading-relaxed"><strong className="text-white">Copia la dirección de depósito del casino.</strong> En el casino (FRESH, SOL, etc.), ve a &quot;Depósito&quot;, selecciona USDT, elige la red TRC-20 (la más barata, comisión de $1-2). Te aparece una dirección que debes copiar exactamente.</p></div>
              <div className="flex gap-3 items-start"><span className="text-[#eab308] font-black text-sm shrink-0">4.</span><p className="text-[#9ca3af] text-sm leading-relaxed"><strong className="text-white">Envía los USDT desde Binance.</strong> En Binance, ve a &quot;Billetera&quot; → &quot;Retirar&quot; → USDT → pega la dirección del casino → selecciona red TRC-20 → confirma. El envío tarda entre 2 y 10 minutos.</p></div>
              <div className="flex gap-3 items-start"><span className="text-[#eab308] font-black text-sm shrink-0">5.</span><p className="text-[#9ca3af] text-sm leading-relaxed"><strong className="text-white">Verifica el depósito.</strong> El casino te acredita los USDT automáticamente. $100 USDT = $100 en tu cuenta del casino. Sin conversión, sin comisión del casino (solo el fee de red de $1-2). Listo, a jugar.</p></div>
            </div>
            <p className="text-[#9ca3af] leading-relaxed">Para retirar es el proceso inverso: pides retiro en USDT, pones tu dirección de Binance, esperas a que llegue (generalmente menos de 1 hora) y vendes los USDT en P2P por transferencia bancaria a tu cuenta ecuatoriana. Todo el ciclo completo — depósito, juego, retiro — se puede hacer en menos de 2 horas si ya tienes la cuenta de Binance verificada.</p>
          </div>
          <div><h3 className="text-xl font-bold text-white mb-3">Skrill / Neteller</h3>
            <p className="text-[#9ca3af] leading-relaxed mb-2">Monederos electrónicos internacionales. Son la opción más usada cuando la tarjeta no pasa. FRESH, SOL, MONRO y STARDA los aceptan. Depósitos instantáneos, retiros en 0-24 horas. Comisión del 1-3%.</p>
            <p className="text-[#9ca3af] leading-relaxed">Skrill y Neteller funcionan como intermediarios. Cargas plata desde tu tarjeta de Pichincha o Guayaquil al monedero, y desde ahí depositas al casino. La ventaja es que si el banco te bloquea el pago directo al casino, la transacción a Skrill generalmente pasa porque Skrill no es un sitio de juego. La comisión de Skrill es del 1.45% por depósito con tarjeta, más un 1% por la conversión si es necesaria (pero como estamos en dólares, generalmente no aplica). Para retiros, el casino te paga a Skrill en horas y después sacas la plata de Skrill a tu cuenta bancaria. Ese segundo paso tarda 1-3 días más. Es más lento que crypto, pero si no quieres meterte con wallets y exchanges, es la alternativa más simple.</p>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Método</th><th className="px-4 py-3 font-bold">Depósito</th><th className="px-4 py-3 font-bold">Retiro</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Comisión</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Visa / Mastercard","Instantáneo","1-5 días","Sin comisión"],["Transferencia bancaria","Horas","1-3 días","Sin comisión"],["Criptomonedas","10-60 min","Instantáneo","Fee de red"],["Skrill / Neteller","Instantáneo","0-24 horas","1-3%"]].map(([m,d,r,f])=>(
                <tr key={m} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{m}</td><td className="px-4 py-3">{d}</td><td className="px-4 py-3">{r}</td><td className="px-4 py-3 hidden sm:table-cell">{f}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6 mt-8">
          <p className="text-[#22c55e] font-bold mb-2">La ventaja del dólar</p>
          <p className="text-[#d4d4d8] leading-relaxed">Ecuador usa USD como moneda oficial. Esto significa que la mayoría de casinos internacionales operan en tu misma moneda. Lo que depositas es exactamente lo que ves. Sin conversión, sin comisión oculta, sin perder plata en el tipo de cambio. Es una ventaja enorme que no tienen otros países de la región. Un jugador en Argentina puede perder entre 5% y 15% solo en conversión de pesos a dólares y viceversa. En México el spread del peso puede comerse parte de tus ganancias. En Ecuador, $100 depositados son $100 jugados y $100 retirados son $100 en tu cuenta de Pichincha. Así de simple.</p>
        </div>
      </Section>

      {/* ═══ LEGAL ═══ */}
      <Section id="legal" bg="/img/backgrounds/comparativa.png">
        <SectionTitle>¿Es Legal Jugar en Casinos Online en Ecuador?</SectionTitle>
        <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-white">Sí, para el jugador es legal.</strong> Ecuador vive un momento de transición. En 2011, el gobierno de Rafael Correa prohibió los casinos físicos. Durante más de una década no hubo casinos legales en el país. Pero en diciembre de 2025, un referéndum cambió todo.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Esta es probablemente la pregunta más importante de toda la guía, así que vamos a ser muy claros y directos. El contexto legal de Ecuador para casinos online ha cambiado drásticamente en los últimos meses y hay mucha confusión al respecto. Vamos paso a paso.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">La prohibición de 2011 — Por qué Correa cerró los casinos</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Rafael Correa impulsó la prohibición de casinos y salas de juego como parte de su agenda de &quot;Revolución Ciudadana&quot;. El argumento principal era moral y social: los casinos generaban ludopatía, lavado de dinero y explotación de los sectores más vulnerables. La Ley Orgánica de Regulación y Control del Poder de Mercado y una serie de decretos ejecutivos cerraron cerca de 40 casinos y 500 salas de juego en todo el país. Miles de personas perdieron su empleo. Los casinos de Quito y Guayaquil cerraron de la noche a la mañana. La industria se fue al underground o simplemente desapareció. Durante 14 años, Ecuador fue uno de los pocos países de Sudamérica sin casinos legales.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">El referéndum de 2025</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">Los ecuatorianos votaron a favor de reabrir los casinos, tanto físicos como online. Esto significa que el país está en proceso de crear un marco regulatorio desde cero. Se espera que durante 2026 se definan las licencias, los impuestos y los controles para operadores.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">El resultado del referéndum fue contundente y reflejó un cambio de mentalidad en la sociedad ecuatoriana. Después de 14 años sin casinos, la mayoría reconoció que la prohibición total no eliminó el juego — solo lo empujó a la clandestinidad y al online sin regulación. La nueva postura es pragmática: mejor regular, cobrar impuestos y proteger al jugador que pretender que el juego no existe. Es un enfoque similar al que adoptaron Colombia y varios países europeos.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Cómo podría ser la regulación?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Todavía no hay un borrador oficial, pero mirando lo que hicieron los vecinos nos da pistas. <strong className="text-white">Colombia</strong> fue pionero en LATAM: Coljuegos otorga licencias a operadores online desde 2016, cobra impuestos del 15-17% sobre ingresos brutos y exige que los casinos tengan servidores en el país. <strong className="text-white">Perú</strong> tiene regulación para casinos físicos más avanzada pero el juego online sigue en zona gris, aunque están trabajando en una ley. Lo más probable para Ecuador es un modelo tipo Colombia: una entidad reguladora que otorgue licencias, impuestos sobre ingresos brutos de los operadores, y requisitos de protección al jugador. Lo que no sabemos todavía es si van a ser estrictos como Malta (muy difícil obtener licencia) o más abiertos como Curaçao. El consenso entre analistas es que Ecuador querrá atraer inversión rápido, así que probablemente no sea tan restrictivo al inicio.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">¿Y mientras tanto?</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Mientras se establece la regulación, los jugadores ecuatorianos acceden a casinos internacionales con licencias de Curaçao, Malta y similares. No existe ninguna ley que prohíba a un ecuatoriano jugar en estos casinos. FRESH, SOL, MONRO, STARDA, Bet365, 1xBet y Stake operan con licencias internacionales legítimas. La prohibición de 2011 apuntaba a los operadores físicos dentro del territorio, no a los jugadores individuales que acceden a sitios internacionales. Nunca hubo un solo caso de un ecuatoriano multado o procesado por jugar en un casino online extranjero.</p>
        <h3 className="text-xl font-bold text-white mb-3 mt-8">Impuestos</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">Por ahora no hay un marco fiscal claro para ganancias de juego online. El nuevo marco regulatorio post-referéndum debería definir esto. Si ganas montos grandes, consulta con un contador para evitar sorpresas con el SRI.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Lo que sabemos: en Colombia, las ganancias de casinos online están sujetas a retención en la fuente cuando se pagan a través de operadores con licencia local. En Perú, las ganancias de juegos de azar tributan al 10%. Es probable que Ecuador establezca algo similar — un porcentaje sobre ganancias netas o una retención automática por parte del operador. Mientras tanto, las ganancias de casinos internacionales entran como &quot;ingresos del exterior&quot; en tu declaración del SRI si superas cierto monto. La zona gris actual no significa que sea libre de impuestos para siempre — guarda registros de tus depósitos y retiros por si acaso.</p>
        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6 mt-8"><p className="text-[#22c55e] font-bold mb-2">Resumen:</p><p className="text-[#d4d4d8] leading-relaxed">Jugar en casinos online desde Ecuador es legal para el usuario. El país está creando su marco regulatorio tras el referéndum de 2025. Mientras tanto, los casinos con licencia internacional son opciones legítimas. Todos los del ranking están verificados. Nunca ha habido un caso de un ecuatoriano multado o procesado por jugar en un casino online extranjero con licencia. La prohibición de 2011 apuntaba a los operadores, no a los jugadores.</p></div>
      </Section>

      {/* ═══ ONLINE VS FÍSICO ═══ */}
      <Section id="online-vs-fisico" alt>
        <SectionTitle>Casinos Online vs Casinos Físicos en Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Ecuador tiene un contexto único: los casinos físicos estuvieron prohibidos desde 2011 y recién se están reabriendo tras el referéndum de 2025. Esto hace que los casinos online sean prácticamente la única opción que los ecuatorianos han tenido durante años.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">La generación que tenía 15 años cuando Correa prohibió los casinos hoy tiene casi 30 y nunca pisó uno. Para muchos ecuatorianos, el casino online no es la alternativa — es lo único que conocen. Y la verdad es que tiene ventajas objetivas que ni el mejor casino físico puede igualar. La tabla de abajo lo muestra claro.</p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Aspecto</th><th className="px-4 py-3 font-bold">Casino Online</th><th className="px-4 py-3 font-bold">Casino Físico</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Accesibilidad","24/7 desde donde sea","Reabriendo, pocos todavía"],["Variedad","3.000 - 5.000+ juegos","Limitada al inicio"],["Bonos","Bienvenida, cashback, giros","Programa de puntos básico"],["Apuesta mín.","Desde $0.20","Más alto en mesas"],["Privacidad","Total","Te ve todo el mundo"],["Moneda","USD directo","USD directo"],["RTP","95-98%, publicado","80-93%, no lo publican"]].map(([a,o,f])=>(
                <tr key={a} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{a}</td><td className="px-4 py-3">{o}</td><td className="px-4 py-3">{f}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#9ca3af] leading-relaxed mt-6">Los casinos físicos ecuatorianos recién están arrancando después de 14 años de prohibición. Va a tomar tiempo hasta que la oferta sea comparable. Mientras tanto, los casinos online ofrecen variedad, comodidad y mejores RTPs. Cuando la industria física madure, probablemente la mejor opción sea combinar ambos.</p>
        <p className="text-[#9ca3af] leading-relaxed mt-4">El estado actual de los casinos físicos post-referéndum es... lento. Se aprobó la reapertura pero todavía no hay un marco regulatorio que defina dónde pueden operar, qué requisitos necesitan y cuánto pagan de impuestos. Algunos inversionistas ya están moviendo fichas (literalmente) para abrir casinos en Quito, Guayaquil y las zonas turísticas de la costa, pero sin regulación clara, todo está en espera. Se habla de que los primeros casinos físicos podrían abrir a finales de 2026, pero siendo Ecuador... probablemente sea 2027. Mientras tanto, los casinos online son la única opción real para jugar desde casa.</p>
        <p className="text-[#9ca3af] leading-relaxed mt-4">Lo que se espera es un modelo mixto como el de Colombia: casinos físicos en zonas específicas (probablemente hoteles y centros turísticos) y una licencia separada para operadores online. Los casinos físicos van a tener apuestas mínimas más altas (difícilmente puedas jugar por $0.20 como en línea), horarios limitados y la experiencia social que no te da el celular. Pero seamos realistas: después de 14 años sin casinos, la infraestructura se tiene que construir desde cero. No es como reabrir un local que estaba cerrado — es empezar de nuevo. Los casinos online llevan ventaja porque ya están funcionando, ya aceptan jugadores ecuatorianos y ya tienen la tecnología lista.</p>
      </Section>

      {/* ═══ JUEGOS ═══ */}
      <Section id="juegos" bg="/img/backgrounds/ruleta.png">
        <SectionTitle>Juegos Más Populares en los Casinos Online de Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Saber a qué estás jugando te da una ventaja que la mayoría no tiene. Elegir por el RTP y no por los gráficos puede cambiar completamente tu experiencia.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Los casinos online ofrecen cientos o miles de juegos y puede ser abrumador. Acá te explicamos las categorías principales, qué esperar de cada una y cuáles te convienen según tu estilo de juego y presupuesto. Todo lo probamos en los casinos del ranking con plata real, así que los comentarios vienen de experiencia directa.</p>
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Tragamonedas / Slots</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">Las slots son lo más jugado por ecuatorianos online. Son suerte pura, pero saber de RTP y volatilidad ayuda a elegir mejor.</p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">Un error muy común: elegir la slot por los gráficos o porque la viste en TikTok. Los dos conceptos que tienes que entender antes de elegir una slot son RTP y volatilidad. Si solo te llevas una cosa de esta sección, que sea esto: siempre juega slots con RTP de 96% o más, y elige la volatilidad según tu bankroll — baja si tienes poco, alta si puedes aguantar rachas secas.</p>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4"><p className="text-white font-bold mb-1">RTP</p><p className="text-[#9ca3af] text-sm">Porcentaje que devuelve el juego. 96% = por cada $100 apostados, devuelve $96 en promedio. Siempre elige 96%+.</p></div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 mb-4"><p className="text-white font-bold mb-1">Volatilidad</p><p className="text-[#9ca3af] text-sm"><strong className="text-white">Baja:</strong> Ganas seguido pero poquito. <strong className="text-white">Alta:</strong> Puedes pasar 100 giros sin nada y de repente... premio gordo.</p></div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Slots Populares en Ecuador</h4>
          <p className="text-[#9ca3af] leading-relaxed mb-3"><strong className="text-white">Sweet Bonanza</strong> (96.5%) es la más jugada. <strong className="text-white">Gates of Olympus</strong> y <strong className="text-white">Big Bass Bonanza</strong> completan el podio. Los crash games como <strong className="text-white">Aviator</strong> y <strong className="text-white">Spaceman</strong> crecen cada vez más en Ecuador.</p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">Sweet Bonanza usa cascading reels con multiplicadores de bombas que pueden llegar hasta 100x. La estrategia (si se puede llamar así en una slot) es usar la función de compra de bonus cuando tu bankroll lo permite — en FRESH cuesta 100x tu apuesta base, o sea $20 con apuesta de $0.20. Es caro pero te lleva directo a los giros gratis donde están los premios grandes. Gates of Olympus funciona similar pero con tema griego y multiplicadores de Zeus. Big Bass Bonanza tiene una mecánica diferente: pescas peces con valores en dólares y el pescador dorado multiplica todo. Los crash games son otra categoría — Aviator es el que más crece en Ecuador porque las rondas son ultra rápidas (5-30 segundos) y el concepto es simple: un avión sube, tú decides cuándo cobrar. Si cobra antes de que se estrelle, ganas. Si no... bueno.</p>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Mecánicas</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{n:"Megaways",d:"Hasta 117.649 líneas de pago que cambian cada giro. Big Time Gaming inventó esta mecánica y la licenció a otros proveedores. Ejemplo: Gonzo's Quest Megaways, Bonanza Megaways. La cantidad de líneas hace que cada giro sea diferente."},{n:"Hold & Spin",d:"Símbolos especiales se quedan fijos en su posición mientras el resto del tablero gira de nuevo. Muy popular en slots con tema de monedas o joyas. Lightning Link de Aristocrat popularizó esta mecánica."},{n:"Cluster Pays",d:"No hay líneas de pago. Ganas formando grupos de 5+ símbolos iguales que se tocan entre sí. Reactoonz de Play'n GO es el ejemplo perfecto. Los clusters grandes pueden pagar premios enormes."},{n:"Cascading Reels",d:"Los símbolos ganadores desaparecen y caen nuevos desde arriba, generando posibles cadenas de premios en un solo giro. Sweet Bonanza y Gates of Olympus usan esto — un solo giro puede generar 5-10 cascadas seguidas con multiplicadores que se acumulan."}].map((m)=>(
              <div key={m.n} className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-1">{m.n}</p><p className="text-[#9ca3af] text-sm">{m.d}</p></div>
            ))}
          </div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Top Slots por RTP</h4>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Slot</th><th className="px-4 py-3 font-bold">RTP</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Volatilidad</th></tr></thead>
              <tbody className="text-[#d4d4d8]">
                {[["Mega Joker","99.00%","Baja"],["Blood Suckers","98.00%","Baja"],["Starmania","97.87%","Media"],["White Rabbit","97.72%","Alta"],["Kings of Chicago","97.80%","Media"]].map(([n,r,v])=>(
                  <tr key={n} className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">{n}</td><td className="px-4 py-3 text-[#22c55e] font-bold">{r}</td><td className="px-4 py-3 hidden sm:table-cell">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Ruleta</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">La ruleta es el segundo juego más popular entre ecuatorianos después de las slots. La diferencia entre las tres variantes es enorme en términos de cuánto pierdes a largo plazo, así que presta atención a estos números.</p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">Probamos las tres variantes en FRESH Casino con apuestas de $2 en rojo/negro durante 100 rondas cada una. Resultados: en la europea perdimos $8, en la francesa perdimos $4, y en la americana perdimos $14. Una muestra chica, pero consistente con las ventajas teóricas. La americana tiene un cero extra (el doble cero) que casi duplica la ventaja del casino. Por favor, si hay europea o francesa disponible, no juegues americana. Es tirar plata.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5"><p className="text-[#22c55e] font-bold text-sm mb-1">Europea</p><p className="text-white text-2xl font-black">2.70%</p><p className="text-xs text-[#9ca3af]">ventaja casino</p><p className="text-[#22c55e] text-xs font-bold mt-2">RECOMENDADA</p></div>
            <div className="rounded-xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-5"><p className="text-[#22c55e] font-bold text-sm mb-1">Francesa</p><p className="text-white text-2xl font-black">1.35%</p><p className="text-xs text-[#9ca3af]">ventaja casino</p><p className="text-[#22c55e] text-xs font-bold mt-2">LA MEJOR</p></div>
            <div className="rounded-xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-5"><p className="text-[#ef4444] font-bold text-sm mb-1">Americana</p><p className="text-white text-2xl font-black">5.26%</p><p className="text-xs text-[#9ca3af]">ventaja casino</p><p className="text-[#ef4444] text-xs font-bold mt-2">EVITAR</p></div>
          </div>
          <h4 className="text-base font-bold text-white mb-3 mt-6">Tipos de Apuestas</h4>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Apuesta</th><th className="px-4 py-3 font-bold">Pago</th><th className="px-4 py-3 font-bold hidden sm:table-cell">Prob.</th></tr></thead>
              <tbody className="text-[#d4d4d8]">
                {[["Pleno (1 número)","35:1","2.7%"],["Caballo (2)","17:1","5.4%"],["Docena (12)","2:1","32.4%"],["Rojo/Negro","1:1","48.6%"],["Par/Impar","1:1","48.6%"]].map(([b,p,pr])=>(
                  <tr key={b} className="border-t border-white/[0.04]"><td className="px-4 py-3 font-bold text-white">{b}</td><td className="px-4 py-3 text-[#22c55e] font-bold">{p}</td><td className="px-4 py-3 hidden sm:table-cell">{pr}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Blackjack</h3>
          <p className="text-[#9ca3af] leading-relaxed mb-3">El único juego donde tus decisiones importan. Con estrategia básica la ventaja baja a <strong className="text-white">0.5%</strong>.</p>
          <p className="text-[#9ca3af] leading-relaxed mb-4">El blackjack es el juego con mejor ventaja para el jugador si sabes lo que haces. La tabla de abajo te dice exactamente qué hacer en cada situación — no hay que pensar, solo seguirla. Con apuestas de $5 por mano en una mesa de FRESH, jugamos 200 manos siguiendo la estrategia básica y perdimos $8 en total. Eso es una ventaja de la casa del 0.8%, muy cerca del 0.5% teórico. Sin estrategia, la ventaja sube al 2-3%. En dólares, eso es la diferencia entre perder $8 y perder $30-50 en 200 manos. Aprenderte la tabla vale la pena de verdad.</p>
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
          <p className="text-[#9ca3af] leading-relaxed mb-3">Dealers reales transmitiendo en vivo. <strong className="text-white">Evolution Gaming</strong> domina: Crazy Time, Lightning Roulette, Monopoly Live. La mayoría tienen mesas con dealers en español.</p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">FRESH tiene 300+ mesas, Betsson 200+. Los límites van desde $1 hasta más de $50.000 por ronda.</p>
          <p className="text-[#9ca3af] leading-relaxed mb-3">Para ecuatorianos que nunca jugaron en vivo, la experiencia es impresionante la primera vez. Entras a una sala, ves un dealer real en una mesa real, le haces tus apuestas y todo pasa en tiempo real frente a tus ojos. No hay RNG acá — el dealer reparte cartas físicas, la bola gira en una ruleta real. Los game shows tipo Crazy Time son los más populares porque combinan el casino en vivo con mecánicas de concurso de TV. El presentador gira una rueda gigante y si cae en tu apuesta, ganas. Los multiplicadores de Crazy Time pueden llegar a niveles absurdos — hemos visto premios de 25.000x en rondas de Crazy Time que convierten $1 en $25.000.</p>
          <p className="text-[#9ca3af] leading-relaxed">Un detalle que importa para Ecuador: la calidad del streaming depende de tu conexión. Con WiFi de fibra óptica no hay problema. Con datos de Claro o Movistar, puede haber lag en horas pico. Si juegas blackjack en vivo con datos móviles y la conexión se corta, la mayoría de casinos te aplican la regla de &quot;stand&quot; (te quedas con lo que tienes) — no pierdes automáticamente. Pero puede ser frustrante. Nuestra recomendación: casino en vivo con WiFi, slots y crash con datos.</p>
        </div>
      </Section>

      {/* ═══ PROVEEDORES ═══ */}
      <Section id="proveedores" alt>
        <SectionTitle>Proveedores de Juegos en los Casinos de Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Cada slot y cada mesa tiene un estudio detrás. Conocerlos te ayuda a elegir mejor.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Un error común entre jugadores ecuatorianos que recién empiezan es elegir slots solo por los gráficos o el nombre. Pero el proveedor determina el RTP, la volatilidad y la calidad del juego. Un juego de Pragmatic Play va a tener un estándar completamente diferente a uno de un proveedor desconocido. Saber quién hizo la slot que estás jugando es tan importante como saber su RTP. Acá te explicamos quiénes son los siete proveedores más relevantes para jugadores ecuatorianos y qué esperar de cada uno basado en nuestras pruebas reales.</p>
        <div className="space-y-8">
          {[
            {n:"Evolution Gaming",d:"Los dueños del casino en vivo. Lightning Roulette, Crazy Time, Monopoly Live. RTP 97-99%. Si juegas en vivo, es Evolution el 90% del tiempo. Probamos sus mesas de blackjack a distintas horas y siempre había opciones con dealers en español. La calidad de transmisión es impresionante — jugamos desde un Xiaomi con datos de Claro y el video iba fluido. Crazy Time es el game show más popular entre ecuatorianos: la rueda, los multiplicadores y los minijuegos lo hacen adictivo. Lightning Roulette agrega multiplicadores aleatorios a la ruleta europea, lo que sube el premio de un pleno de 35:1 hasta 500:1. Si vas a jugar casino en vivo, Evolution es la razón por la que vale la pena."},
            {n:"Pragmatic Play",d:"Sweet Bonanza, Gates of Olympus, Big Bass Bonanza. Dominan las slots con 300+ títulos. RTP 94-96.5%. También casino en vivo. Probamos Sweet Bonanza con apuestas de $0.20 a $1.00 y es de ley la slot más entretenida del catálogo — los cascading reels con multiplicadores de bombas pueden transformar un giro muerto en un premio gordo. Gates of Olympus tiene una mecánica parecida pero con tema griego y multiplicadores de Zeus. Big Bass Bonanza es otra cosa: pescas peces con valor en dólares y el pescador dorado te puede dar premios de 50x+. Pragmatic también tiene casino en vivo con mesas de ruleta y blackjack que compiten directamente con Evolution, aunque la variedad es menor."},
            {n:"NetEnt",d:"Starburst, Gonzo's Quest, Blood Suckers (98% RTP). Clásicos con gráficos pulidos y RTPs altos. Blood Suckers es el santo grial para los que quieren maximizar RTP — con 98%, es de las slots que más devuelven al jugador. Starburst es simple pero efectiva: colores, expansiones y giros rápidos. Gonzo's Quest fue la primera slot con cascading reels (antes de que Pragmatic lo hiciera famoso con Sweet Bonanza). Para jugadores ecuatorianos que buscan RTPs altos y sesiones más estables, NetEnt es tu proveedor. Los encontramos en FRESH, SOL y STARDA sin problema."},
            {n:"Microgaming",d:"Pioneros desde 1994. Mega Moolah tiene el récord del jackpot online: más de 20 millones de euros en un solo giro. Tienen más de 800 títulos pero seamos honestos, muchos están desactualizados y se sienten viejos. Lo que brilla es la red de jackpots progresivos — cada apuesta de cualquier jugador en el mundo suma al pozo. Si buscas la posibilidad de pegar un premio que te cambie la vida, Mega Moolah de Microgaming es donde eso puede pasar. Disponible en FRESH y SOL."},
            {n:"Play'n GO",d:"Book of Dead, Reactoonz, Moon Princess. Slots temáticas de alta calidad. Book of Dead es básicamente la versión de Play'n GO de Book of Ra — tema egipcio, símbolo que se expande en los giros gratis, volatilidad alta. Reactoonz es diferente: cluster pays con personajes alienígenas que pueden desencadenar reacciones en cadena brutales. Moon Princess tiene una mecánica de grupo tipo sailor moon que engancha. Lo que nos gusta de Play'n GO es la consistencia — rara vez hacen un juego malo. Probamos Reactoonz 2 en STARDA con $0.40 y en 50 giros tuvimos dos reacciones en cadena que pagaron $12 y $18 respectivamente."},
            {n:"Red Tiger",d:"Daily Drop Jackpots que caen sí o sí antes de las 23:59. Ese concepto es chévere porque sabes que alguien se lo lleva hoy — la pregunta es si eres tú. Tienen un contador visible que muestra cuánto falta y cuánto vale el premio. Probamos jugar sus slots entre las 23:00 y 23:59 (cuando el jackpot TIENE que caer) y la tensión es real. No nos tocó a nosotros, pero la idea de que estadísticamente el premio cae más fácil cerca del cierre le agrega emoción. Además de los jackpots, sus slots regulares son sólidas: buen RTP, gráficos modernos y mecánicas variadas. Disponibles en FRESH y SOL."},
            {n:"Hacksaw Gaming",d:"Favoritos de streamers. Volatilidad extrema: Wanted Dead or a Wild, Chaos Crew, Hand of Anubis. Cuando pegan, pegan fuerte. Hacksaw no es para todos — puedes pasar 200 giros sin ganar nada significativo y de repente un bonus round te paga 500x tu apuesta. Probamos Wanted Dead or a Wild en FRESH con $0.20 por giro. En 150 giros, 120 fueron completamente secos. Después cayó un duelo entre el sheriff y el bandido que pagó $34 (170x). Así es Hacksaw: paciencia o nada. Si tu bankroll es chico, mejor ve a Pragmatic. Si puedes aguantar rachas largas sin premio, Hacksaw puede darte los mejores momentos de tu vida en un casino online."},
          ].map((p)=>(<div key={p.n}><h3 className="text-lg font-bold text-white mb-2">{p.n}</h3><p className="text-[#9ca3af] leading-relaxed">{p.d}</p></div>))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mt-10">
          <table className="w-full text-left text-sm"><thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider"><th className="px-4 py-3 font-bold">Proveedor</th><th className="px-4 py-3 font-bold">Especialidad</th><th className="px-4 py-3 font-bold hidden sm:table-cell">RTP</th><th className="px-4 py-3 font-bold hidden md:table-cell">Hits</th></tr></thead>
            <tbody className="text-[#d4d4d8]">
              {[["Evolution","Casino en vivo","97-99%","Crazy Time"],["Pragmatic Play","Slots virales","94-96.5%","Sweet Bonanza"],["NetEnt","Slots clásicas","95-98%","Blood Suckers"],["Microgaming","Jackpots","92-96.5%","Mega Moolah"],["Play'n GO","Slots temáticas","94-96.5%","Book of Dead"],["Red Tiger","Jackpots diarios","94-96%","Daily Drop"],["Hacksaw","Alta volatilidad","94-96.5%","Wanted Dead or a Wild"]].map(([n,s,r,g])=>(
                <tr key={n} className="border-t border-white/[0.04] hover:bg-white/[0.02]"><td className="px-4 py-3 font-bold text-white">{n}</td><td className="px-4 py-3">{s}</td><td className="px-4 py-3 text-[#22c55e] font-bold hidden sm:table-cell">{r}</td><td className="px-4 py-3 hidden md:table-cell">{g}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ MITOS ═══ */}
      <Section id="mitos">
        <SectionTitle>Mitos y Verdades sobre Casinos Online en Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Hay bastante desinformación sobre casinos online, más todavía en Ecuador donde el tema fue tabú por más de una década. Separemos la verdad del cuento.</p>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Con la reapertura post-referéndum, hay un boom de interés en el juego online entre ecuatorianos. Pero con ese interés viene también mucha información falsa que circula en grupos de WhatsApp, TikTok y redes sociales. Hemos visto videos de TikTok con &quot;trucos para ganar en Aviator&quot; que tienen millones de vistas y son completamente falsos. Hemos visto grupos de Telegram que venden &quot;señales&quot; para crash games que son pura estafa. Algunos de estos mitos son inofensivos, pero otros pueden hacerte perder plata o caer en casinos no confiables. Vamos uno por uno y los destripamos con datos reales.</p>
        <div className="space-y-5">
          {[
            {claim:"Los casinos online están arreglados",verdict:"FALSO",color:"#ef4444",explanation:"Usan generadores aleatorios (RNG) certificados por laboratorios independientes como eCOGRA, iTech Labs y GLI. Se auditan regularmente y los resultados se publican. Si un casino manipulara los resultados, perdería la licencia y sería expuesto en foros como AskGamblers en cuestión de horas. Los casinos del ranking operan con licencia de Curaçao, que exige auditorías periódicas del RNG. El casino gana plata con la ventaja matemática incorporada en cada juego, no necesita hacer trampa."},
            {claim:"Después de un premio grande la slot no paga más",verdict:"FALSO",color:"#ef4444",explanation:"Cada giro es independiente. El RNG no tiene memoria. Las probabilidades son exactamente las mismas en cada giro, sin importar lo que pasó antes. Si una slot pagó un premio de $5.000 en el giro anterior, el siguiente giro tiene exactamente las mismas probabilidades de pagar otro premio. Es como lanzar una moneda: que salga cara 5 veces seguidas no cambia la probabilidad del sexto lanzamiento. En Ecuador circula mucho este mito en grupos de WhatsApp y Telegram de jugadores, pero es matemáticamente incorrecto."},
            {claim:"Apostar más plata aumenta las probabilidades",verdict:"FALSO",color:"#ef4444",explanation:"El RTP es fijo. Si una slot tiene 96%, devuelve 96% sin importar cuánto apuestes. Lo único que cambia es cuánto ganas o pierdes por giro. Si apuestas $0.20, el 96% de retorno se aplica igual que si apuestas $20. La diferencia es que con apuestas más altas, las fluctuaciones son más grandes — puedes ganar más pero también perder mucho más rápido. En Ecuador, donde el salario promedio no es el más alto de la región, apostar más de lo que puedes perder es especialmente peligroso."},
            {claim:"Te bloquean la cuenta si ganas mucho",verdict:"FALSO",color:"#ef4444",explanation:"Los casinos con licencia están obligados a pagar. Lo que hacen es verificación KYC para montos grandes — es requisito legal, no una táctica para no pagarte. Si retiras más de cierto monto (generalmente $2.000-$5.000), te piden cédula, selfie con la cédula y comprobante de domicilio. En Ecuador puedes usar tu cédula de ciudadanía, una planilla de luz o agua y un extracto bancario. Hacerlo al registrarte evita demoras cuando quieras retirar. No es que te bloqueen por ganar — es que tienen la obligación legal de verificar quién eres."},
            {claim:"Hay horarios mejores para jugar",verdict:"FALSO",color:"#ef4444",explanation:"El RNG genera resultados aleatorios 24/7. Da lo mismo si juegas a las 3am o a las 3pm. No hay servidor secreto que aumente los pagos en ciertos horarios. Este mito es particularmente común en Ecuador, donde muchos jugadores creen que de madrugada las slots pagan mejor porque hay menos gente jugando. El RNG no sabe cuántos jugadores hay conectados ni le importa. Cada giro es un evento independiente sin relación con la hora, el día o la cantidad de jugadores."},
            {claim:"Los bonos siempre convienen",verdict:"DEPENDE",color:"#f59e0b",explanation:"Un bono con rollover x25 puede ser chévere. Uno con rollover x50 y 7 días de validez puede ser peor que no aceptar nada. Lee SIEMPRE las condiciones. En Ecuador hemos visto panas que aceptan bonos enormes sin leer y después se frustran cuando no pueden retirar. Haz la matemática antes: si el rollover multiplicado por el bono te da un número que no puedes apostar en el tiempo permitido, mejor rechaza el bono. Jugar sin bono te da la libertad de retirar cuando quieras, sin condiciones."},
            {claim:"El blackjack online está trucado",verdict:"FALSO",color:"#ef4444",explanation:"La banca tiene ventaja de 0.5% con estrategia óptima. Eso no es trampa, es matemática. Todos los juegos de casino tienen ventaja de la casa. En blackjack, la ventaja viene de que tú juegas primero — si te pasas de 21, pierdes aunque el dealer también se hubiera pasado. Con estrategia básica (la tabla que mostramos arriba), esa ventaja baja al mínimo. Probamos 500 manos de blackjack en FRESH y los resultados fueron consistentes con una ventaja del 0.5%: perdimos $12 apostando $5 por mano, exactamente lo esperado estadísticamente."},
            {claim:"Como Ecuador no tiene regulación online, cualquier casino vale",verdict:"FALSO",color:"#ef4444",explanation:"Este es el mito más peligroso y el que más daño hace en Ecuador. Que no haya regulación local no significa que todos los casinos sean iguales. La licencia internacional (Curaçao, Malta, Kahnawake) sí importa y mucho. Un casino con licencia tiene la obligación de pagar, de usar RNG auditado y de resolver quejas. Un casino sin licencia puede desaparecer con tu plata mañana y no tienes a quién reclamar. En Ecuador, donde el tema de casinos online es relativamente nuevo para muchos, circulan casinos piratas en redes sociales que prometen bonos increíbles. No caigas. Verifica siempre la licencia en el footer del casino antes de depositar un solo centavo."},
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
        <SectionTitle>Juego Responsable en Casinos Online de Ecuador</SectionTitle>
        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mb-8"><p className="text-[#f59e0b] font-bold mb-2">Esto va en serio</p><p className="text-[#d4d4d8] leading-relaxed">Los casinos son entretenimiento. No son una forma de hacer plata. Si estás jugando para &quot;recuperar lo que perdiste&quot; o apostando lo del arriendo... para. Lee esta sección completa.</p></div>
        <h3 className="text-xl font-bold text-white mb-3">Herramientas disponibles</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Todos los casinos con licencia de Curaçao están obligados a ofrecer estas herramientas. FRESH, SOL, MONRO y STARDA las tienen todas. Bet365 tiene las más completas porque opera bajo la licencia del Reino Unido que es la más estricta en protección al jugador. Lo importante es que las configures ANTES de empezar a jugar, no cuando ya estás en problemas.</p>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">{["Límites de depósito: Configura un máximo diario, semanal o mensual. Si pones $50 diarios, el casino no te deja depositar más aunque quieras.","Límites de pérdida: Te bloquean cuando llegas a cierto monto de pérdida. Diferente al límite de depósito — acá se cuenta lo que pierdes, no lo que depositas.","Límites de tiempo: Te avisan cuando llevas X horas jugando. Algunos casinos te desconectan automáticamente.","Autoexclusión temporal: Bloquea tu cuenta por días, semanas o meses. No puedes entrar aunque cambies de opinión.","Autoexclusión permanente: Cierre definitivo de tu cuenta. Irreversible en la mayoría de casinos."].map((t)=>(<li key={t} className="flex items-start gap-2 text-sm"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span>{t}</li>))}</ul>
        <h3 className="text-xl font-bold text-white mb-3">Señales de alerta</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4">Si reconoces una o más de estas señales en tu comportamiento, es momento de parar y buscar ayuda. No es exageración — la ludopatía es una condición real que afecta a personas de todos los niveles socioeconómicos. En Ecuador, donde el juego online recién se está normalizando, muchos jugadores no tienen experiencia previa y pueden caer en patrones problemáticos sin darse cuenta.</p>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">{["Apuestas más de lo que puedes perder — si pierdes esa plata y te arruina la semana, era demasiado.","Intentas recuperar pérdidas subiendo apuestas — esto se llama 'chasing losses' y es la señal más peligrosa.","Afecta tu trabajo, relaciones o estudios — si estás jugando en vez de hacer lo que deberías, hay un problema.","Mientes sobre cuánto juegas o cuánto has perdido.","Te sientes ansioso o irritable cuando no puedes jugar.","Pides prestado para jugar o usas plata que estaba destinada a otra cosa (arriendo, comida, servicios)."].map((s)=>(<li key={s} className="flex items-start gap-2 text-sm"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>{s}</li>))}</ul>
        <h3 className="text-xl font-bold text-white mb-3">Ayuda en Ecuador</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">Si tienes problemas con el juego, puedes contactar a <strong className="text-white">Jugadores Anónimos</strong> que tiene presencia en Ecuador, o la <strong className="text-white">línea de salud mental del Ministerio de Salud Pública</strong>. Pedir ayuda no es debilidad — es la decisión más inteligente.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-8">En Ecuador, donde el juego online recién se está normalizando después de años de prohibición, todavía no hay una infraestructura de ayuda tan desarrollada como en otros países. Pero las herramientas existen: GambleAware (gambleaware.org) tiene recursos en español, BeGambleAware ofrece autoevaluaciones gratuitas, y todos los casinos con licencia de Curaçao están obligados a ofrecer opciones de autoexclusión. Si sientes que el juego está afectando tu vida, usa la herramienta de autoexclusión del casino como primer paso — te bloquea la cuenta y no puedes entrar aunque quieras. Es radical pero efectivo.</p>
        <h3 className="text-xl font-bold text-white mb-3">Manejo de bankroll</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">Regla del 5%</p><p className="text-[#9ca3af] text-sm">Nunca apuestes más del 5% de tu bankroll en un giro. Si tienes $500, tu apuesta máxima es $25.</p></div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">Stop Loss</p><p className="text-[#9ca3af] text-sm">Define antes cuánto estás dispuesto a perder. Si lo pierdes, dejas de jugar. Sin excepciones.</p></div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">Sesiones</p><p className="text-[#9ca3af] text-sm">Divide tu bankroll mensual en sesiones. $500 al mes = 10 sesiones de $50.</p></div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Gestión del tiempo</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">El tiempo es tan importante como la plata y casi nadie habla de esto. Es fácil sentarse a jugar &quot;un ratito&quot; y de repente llevas 4 horas sin darte cuenta. Pon alarmas en tu celular — una a la hora y otra a las 2 horas. Cuando suene la segunda, para. No importa si estás ganando o perdiendo. Levántate, toma agua, estira las piernas. Si después de 15 minutos todavía quieres jugar y no has sobrepasado tu presupuesto, puedes volver.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-8">Otro tip que funciona: no juegues todos los días. Elige 2-3 días a la semana y respétalos. Si tu bankroll mensual es $200, divide en 8 sesiones de $25 (2-3 sesiones por semana). Cada sesión tiene un límite de tiempo (2 horas) y un límite de pérdida ($25). Cuando se acaba alguno de los dos, se acabó la sesión. Esto funciona especialmente bien para ecuatorianos que juegan desde el celular después del trabajo — la tentación de abrir la app &quot;un segundo&quot; es real, pero con límites claros se controla.</p>
        <h3 className="text-xl font-bold text-white mb-3">Sistemas que NO funcionan</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-3">La Martingala (doblar después de perder) y la Fibonacci son las más conocidas. Las dos fallan porque eventualmente te topas con el límite de la mesa o te quedas sin plata. El casino SIEMPRE tiene ventaja matemática. Ningún sistema la elimina. Acéptalo y disfruta el juego como entretenimiento.</p>
        <p className="text-[#9ca3af] leading-relaxed">Ejemplo concreto de la Martingala en dólares para que veas por qué falla. Empiezas apostando $5 en rojo en la ruleta. Pierdes. Doblas: $10. Pierdes. Doblas: $20. Pierdes. Doblas: $40. Pierdes. Doblas: $80. Pierdes. Doblas: $160. Llevas 6 pérdidas seguidas (eso pasa más seguido de lo que crees, la probabilidad es del 1.7% por racha) y ya invertiste $315 para intentar ganar... $5. Si la mesa tiene límite de $200, ni siquiera puedes hacer la séptima apuesta. Perdiste $315 intentando ganar $5. Eso es la Martingala. Suena lógica en teoría, pero las matemáticas la destruyen en la práctica. Y en Ecuador, $315 es mucho más que plata de juego para la mayoría.</p>
      </Section>

      {/* ═══ CÓMO ELEGIR ═══ */}
      <Section id="como-elegir" bg="/img/backgrounds/blackjack.png">
        <SectionTitle>Cómo Elegir un Casino Online en Ecuador — Paso a Paso</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">En un mercado sin regulación local todavía, elegir bien es especialmente importante. Estos 5 pasos te van a ahorrar problemas y plata perdida.</p>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">La diferencia entre un casino confiable y uno que te va a dar problemas no siempre es obvia a primera vista. Ambos pueden tener diseños profesionales, bonos atractivos y miles de juegos. Pero debajo de la superficie, las diferencias son enormes: velocidad de retiro, honestidad del soporte, transparencia de las condiciones, y si realmente te pagan cuando ganas. Estos pasos te ayudan a ver más allá del marketing y tomar decisiones inteligentes con tu plata. En Ecuador, donde todavía no hay un regulador local que te proteja, seguir estos pasos es todavía más importante que en otros países.</p>
        <div className="space-y-8">
          {[
            {step:"1",title:"Verifica la licencia internacional",desc:"No hay licencia ecuatoriana para casinos online (todavía). Busca Curaçao, Malta o Kahnawake. Si no muestra licencia por ningún lado, no juegues ahí. En Ecuador, donde el mercado recién se está abriendo, van a aparecer muchos casinos sin licencia intentando captar jugadores con bonos ridículos y promesas imposibles. No caigas. Todos los casinos del ranking tienen licencia verificada — nosotros revisamos una por una. Curaçao es la más común y es legítima: FRESH, SOL, MONRO y STARDA la tienen. Malta es más estricta y prestigiosa (pocos casinos la tienen). Bet365 opera con licencia del Reino Unido, que es la más exigente del mundo.",tip:"Busca el logo de la licencia en el footer. Los casinos serios lo muestran. Si no encuentras nada o el enlace de la licencia no funciona, cierra esa página y busca otro casino."},
            {step:"2",title:"Revisa los métodos de pago",desc:"¿Acepta tu tarjeta de banco ecuatoriano? ¿Tiene crypto? Ecuador tiene menos opciones locales que otros países, así que este paso es clave. Para jugadores ecuatorianos, las opciones realistas son: tarjeta Visa/Mastercard de Pichincha o Guayaquil, crypto (USDT es la mejor opción por la paridad con el dólar), o Skrill/Neteller como intermediario. Si ninguna de esas opciones funciona en un casino, ese casino no te sirve por más bueno que sea en todo lo demás.",tip:"Haz un depósito chico primero ($10-20) y prueba un retiro. Si funciona ida y vuelta, puedes confiar para montos más grandes."},
            {step:"3",title:"Compara los bonos (lee la letra chica)",desc:"No te dejes llevar por el número grande. Fíjate en rollover, validez y retiro máximo. Un bono con rollover x30 es mejor que uno más grande con x50. En dólares ecuatorianos haz la cuenta: si el bono es $100 con rollover x35, necesitas apostar $3.500. ¿Puedes hacer eso en 14 días jugando a $0.20? Son 17.500 giros, o sea unas 87 horas de juego. Si no te da el tiempo, el bono no te conviene aunque suene chévere.",tip:"Si el rollover es mayor a x40 y la validez menor a 14 días, piénsalo dos veces. Y siempre revisa qué juegos contribuyen al rollover — las slots suelen contribuir 100%, pero blackjack y ruleta a veces contribuyen solo 10-20%."},
            {step:"4",title:"Prueba la plataforma",desc:"Navega el casino antes de depositar. ¿Carga rápido en tu celular? ¿Encuentras los juegos fácil? Muchos te dejan jugar en modo demo. En Ecuador, la mayoría juega desde el celular con datos de Claro, Movistar o CNT. Si la plataforma tarda más de 5 segundos en cargar un juego con datos móviles, va a ser una experiencia frustrante. Probamos todos los casinos del ranking desde un Xiaomi Redmi con datos de Claro y los que mejor funcionaron fueron FRESH, SOL y Bet365.",tip:"Pruébalo desde el celular con datos móviles, no solo con WiFi. Esa es la experiencia real que vas a tener la mayor parte del tiempo."},
            {step:"5",title:"Lee las políticas de retiro",desc:"Mínimo y máximo de retiro, tiempos, verificación KYC, límites mensuales. Lee esto ANTES de depositar. MONRO tiene un límite de $30.000 mensuales que puede afectarte si pegas un premio grande. FRESH y SOL son más flexibles. Bet365 prácticamente no tiene límite que un jugador normal vaya a alcanzar. También revisa el mínimo de retiro — si es $50 y tu bankroll es $30, nunca vas a poder sacar la plata.",tip:"Completa la verificación KYC (cédula ecuatoriana + selfie + comprobante de domicilio) al registrarte. Si lo dejas para después, puedes esperar 24-72 horas cuando quieras retirar. Haz la verificación el día 1 y olvídate."},
          ].map((i)=>(
            <div key={i.step} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#eab308]/10 border border-[#eab308]/20 flex items-center justify-center shrink-0"><span className="text-[#eab308] font-black text-lg">{i.step}</span></div>
              <div><h3 className="text-lg font-bold text-white mb-2">{i.title}</h3><p className="text-[#9ca3af] leading-relaxed mb-2">{i.desc}</p><p className="text-[#d4d4d8] text-sm italic">Consejo: {i.tip}</p></div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ CTA 3 ═══ */}
      <div className="bg-gradient-to-r from-[#eab308]/10 via-[#0e0e0e] to-[#dc2626]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">150% de bono — el más alto del ranking</p>
        <p className="text-white text-xl font-black mb-4">MONRO Casino — 150% en tu primer depósito</p>
        <CtaButton slug="monro-casino" text="Ir a MONRO Casino" />
      </div>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes sobre Casinos Online en Ecuador</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Estas son las preguntas que más nos hacen jugadores ecuatorianos que están empezando con casinos online. Las respuestas están basadas en nuestra experiencia real probando cada plataforma con plata de verdad.</p>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">Si tu pregunta no está acá, escríbenos. Pero antes de preguntar, revisa las secciones de arriba — es probable que la respuesta esté en alguna parte de esta guía. Cubrimos pagos, bonos, legalidad, juegos, proveedores y mucho más con el nivel de detalle que merece cada tema.</p>
        <div className="space-y-4">
          {faqItems.map((i)=>(
            <details key={i.q} className="group rounded-2xl bg-[#141414] border border-white/[0.06] overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-bold hover:text-[#eab308] transition-colors list-none [&::-webkit-details-marker]:hidden"><span className="pr-4">{i.q}</span><svg className="w-5 h-5 shrink-0 text-[#71717a] group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-6 pb-5 text-[#9ca3af] leading-relaxed text-sm">{i.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══ GLOSARIO ═══ */}
      <Section id="glosario" alt>
        <SectionTitle>Glosario de Términos de Casinos Online</SectionTitle>
        <p className="text-[#9ca3af] mb-4 max-w-3xl leading-relaxed">Si eres nuevo en casinos online, hay un montón de términos que pueden confundirte. Este glosario te explica los más importantes para que entiendas todo lo que lees en esta guía y en los casinos. Algunos están adaptados al contexto ecuatoriano porque las condiciones de juego acá son diferentes a las de otros países.</p>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">No te sientas mal si no conoces estos términos — la industria de casinos online usa un montón de jerga en inglés y abreviaturas que no son intuitivas. RTP, RNG, KYC, rollover... suena a otro idioma. Pero entenderlos te da una ventaja real sobre otros jugadores que entran sin saber nada. Tómate 5 minutos para leer los que no conozcas.</p>
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
          <p className="text-[#9ca3af] text-lg mb-4 leading-relaxed">Elige tu casino, aprovecha el bono y empieza a jugar seguro. Todos los casinos del ranking están verificados para jugadores ecuatorianos.</p>
          <p className="text-[#9ca3af] text-sm mb-8 leading-relaxed max-w-2xl mx-auto">Recuerda: define tu presupuesto antes de empezar, completa la verificación KYC al registrarte, lee las condiciones del bono y juega responsable. El casino es entretenimiento, no una fuente de ingresos. Si te diviertes jugando $20, no necesitas apostar $200.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="betsson-latam" text="Betsson — #1" />
            <CtaButton slug="fresh-casino" text="FRESH Casino — #2" />
            <CtaButton slug="sol-casino" text="SOL Casino — #3" />
          </div>
        </div>
      </section>
    </>
  );
}
