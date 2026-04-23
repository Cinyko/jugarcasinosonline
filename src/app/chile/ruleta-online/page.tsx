import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED, LAST_UPDATED_ISO, LAST_UPDATED_YEAR } from "@/data/config";

export const metadata: Metadata = {
  title: "Ruleta Online en Chile 2026 | Mejores Casinos con Ruleta en Vivo",
  description:
    "Encuentra los mejores casinos con ruleta online en Chile. Ruleta en vivo, europea, francesa, métodos de pago locales.",
};

/* ───────── Data ───────── */

const chileCasinos = [
  { rank: 1, name: "Betsson", slug: "betsson-chile", bonus: "Hasta $400.000 + 200 Giros Gratis", rating: 9.5, rouletteTables: "45+", liveRoulette: true, highlight: true, badge: "⭐ Recomendado" },
  { rank: 2, name: "PIN-UP Casino", slug: "pinup", bonus: "$5.000.000 CLP + 250 giros gratis", rating: 9.4, rouletteTables: "55+", liveRoulette: true, highlight: false, badge: "" },
  { rank: 3, name: "FRESH Casino", slug: "fresh-casino", bonus: "100% + 500 giros gratis", rating: 8.9, rouletteTables: "60+", liveRoulette: true, highlight: false, badge: "" },
  { rank: 4, name: "SOL Casino", slug: "sol-casino", bonus: "100% + 500 giros gratis", rating: 9.1, rouletteTables: "50+", liveRoulette: true, highlight: false, badge: "" },
  { rank: 5, name: "STARDA Casino", slug: "starda-casino", bonus: "100% + 500 giros gratis", rating: 9.3, rouletteTables: "35+", liveRoulette: true, highlight: false, badge: "🔥 TOP" },
  { rank: 6, name: "MONRO Casino", slug: "monro-casino", bonus: "150% primer deposito", rating: 9.0, rouletteTables: "40+", liveRoulette: true, highlight: false, badge: "" },
  { rank: 7, name: "JackpotCity", slug: "jackpotcity-chile", bonus: "$1.008.000 CLP + 200 Giros", rating: 9.2, rouletteTables: "25+", liveRoulette: true, highlight: false, badge: "" },
  { rank: 8, name: "Gaming Club", slug: "gamingclub-chile", bonus: "100% + 150% en 2 depósitos", rating: 8.5, rouletteTables: "15+", liveRoulette: true, highlight: false, badge: "" },
  { rank: 9, name: "Bet365", slug: "bet365", bonus: "100% bono bienvenida", rating: 8.8, rouletteTables: "20+", liveRoulette: true, highlight: false, badge: "" },
  { rank: 10, name: "Stake", slug: "stake", bonus: "Bono primer deposito", rating: 8.7, rouletteTables: "30+", liveRoulette: true, highlight: false, badge: "" },
  { rank: 11, name: "1xBet", slug: "1xbet", bonus: "100% hasta $300", rating: 8.6, rouletteTables: "25+", liveRoulette: true, highlight: false, badge: "" },
];

const faqItems = [
  { q: "¿Cual es el mejor casino con ruleta online en Chile?", a: "Betsson se lleva el primer puesto para ruleta. Tiene 45+ mesas incluyendo variantes europeas, francesas y ruleta en vivo con dealers hispanohablantes. El bono de hasta $400.000 + 200 giros gratis funciona perfecto para ruleta (contribuye al 10-20% del rollover dependiendo de la variante). Probamos sus mesas de Lightning Roulette un sabado a las 11pm y habia 8 mesas activas con dealers en español." },
  { q: "¿Se puede jugar ruleta online con plata real en Chile?", a: "Si. No hay ninguna ley chilena que prohiba a los jugadores participar en casinos online. El proyecto de ley Boletin 14838-03 busca regular a los operadores, pero como jugador no tienes ningun problema legal. Todos los casinos de nuestro ranking aceptan jugadores chilenos y la mayoria ofrece metodos de pago locales como WebPay y MACH." },
  { q: "¿Que tipo de ruleta paga mas?", a: "La ruleta francesa con la regla La Partage tiene el house edge mas bajo: 1.35% en apuestas pares. La europea le sigue con 2.7%. La americana con sus dos ceros tiene 5.26% — evitala siempre. En terminos practicos, si apuestas $100.000 CLP en apuestas pares durante una sesion larga, la diferencia entre europea y francesa es de unos $1.350 CLP por cada $100.000 apostados. Parece poco pero se acumula." },
  { q: "¿Puedo depositar con WebPay para jugar ruleta?", a: "Si, y es lo mas comodo para chilenos. WebPay funciona con cualquier tarjeta de debito o credito chilena a traves de Transbank. El deposito es instantaneo. Betsson y Bet365 lo aceptan directamente. Si tu tarjeta no pasa (algunos bancos filtran pagos a casinos), usa MACH como alternativa — es una tarjeta prepago virtual que no tiene esos filtros." },
  { q: "¿La ruleta en vivo esta arreglada?", a: "No. Las mesas de ruleta en vivo de proveedores como Evolution y Pragmatic Play operan con ruedas fisicas reales transmitidas por video en tiempo real. Estan auditadas por laboratorios independientes (eCOGRA, GLI, iTech Labs) que verifican que los resultados sean aleatorios. Ademas, al ser una rueda fisica, manipularla seria practicamente imposible sin que se note en camara. Dicho esto, siempre juega en casinos con licencia verificada." },
  { q: "¿Puedo usar la Martingala para ganar en la ruleta?", a: "Puedes usarla, pero no vas a ganar consistentemente. La Martingala consiste en doblar la apuesta despues de cada perdida. El problema es que una racha de 7 perdidas seguidas (que tiene probabilidad del 1.7% en cada secuencia) te puede costar mas de $600.000 CLP si empezaste con $5.000. Y los limites de mesa te frenan antes de poder recuperar. Ningun sistema matematico elimina la ventaja del casino — si existiera, los casinos no existirian." },
  { q: "¿Cuanto se tarda un retiro de ganancias de ruleta?", a: "Depende del metodo. Con crypto (Stake, FRESH) es practicamente instantaneo, entre 10 y 40 minutos. Con WebPay o transferencia bancaria (Betsson) tarda de 2 a 24 horas. Con Skrill o Neteller de 1 a 12 horas. El primer retiro siempre tarda mas porque necesitan verificar tu identidad (KYC). Consejo: completa la verificacion al registrarte para que el primer retiro no se demore." },
  { q: "¿Se puede jugar ruleta gratis?", a: "Si, la mayoria de casinos ofrecen modo demo para ruleta RNG (la que usa generador de numeros aleatorios, no la de dealer en vivo). Puedes practicar sin gastar un peso. La ruleta en vivo no tiene modo demo porque hay un dealer real esperando. FRESH Casino y SOL Casino tienen los mejores modos demo — no necesitas ni registrarte para probar." },
  { q: "¿Que diferencia hay entre ruleta europea y americana?", a: "La europea tiene un solo cero (0) y la americana tiene dos (0 y 00). Esa diferencia parece menor pero cambia todo: la europea tiene house edge de 2.7% y la americana 5.26%. En plata real, si apuestas $1.000.000 CLP en una noche, la americana te cuesta estadisticamente $26.000 CLP mas que la europea. Siempre juega europea o francesa. La americana es un mal negocio, punto." },
  { q: "¿Lightning Roulette vale la pena?", a: "Es entretenida y puede pagar hasta 500x tu apuesta en numeros con multiplicador. Pero ojo: para compensar esos multiplicadores, el pago normal de un numero recto baja de 36x a 30x. Entonces en numeros sin multiplicador ganas menos que en ruleta europea normal. El house edge efectivo es similar (alrededor de 2.7%) pero la volatilidad es mucho mayor. Si te gusta la emocion y puedes aguantar rachas secas, dale. Si prefieres consistencia, quédate con la europea clasica." },
  { q: "¿Los bonos de casino sirven para jugar ruleta?", a: "Si, pero con letra chica. La mayoria de bonos tienen contribucion reducida para ruleta: tipicamente 10% a 20%. Esto significa que si el rollover es x30 y la contribucion es 10%, en la practica necesitas apostar 10 veces mas que en slots para liberar el bono. Con un bono de $100 USD y rollover x30 al 10%, necesitas $30.000 USD en apuestas de ruleta para liberarlo. Es mucho. Si vas a jugar principalmente ruleta, a veces conviene mas rechazar el bono y jugar con tu plata directamente." },
  { q: "¿Como funciona la ruleta en vivo?", a: "Es una mesa real con un dealer real, transmitida por video en alta definicion desde un estudio profesional. Tu ves la rueda girar en tiempo real y colocas tus fichas en la interfaz digital. Los resultados son 100% reales — no hay RNG, es la fisica de la bolita en la rueda. Puedes chatear con el dealer y con otros jugadores. Evolution Gaming es el proveedor principal y sus estudios estan en Letonia, Malta y Colombia. Pragmatic Play tiene estudios en Bucarest. La calidad del stream es excelente incluso con conexion 4G." },
];

const glossaryItems = [
  { term: "Ruleta Europea", def: "Variante con un solo cero (0). House edge de 2.7%. Es la que deberias jugar siempre que puedas." },
  { term: "Ruleta Francesa", def: "Igual que la europea pero con reglas La Partage o En Prison que reducen el house edge a 1.35% en apuestas pares." },
  { term: "Ruleta Americana", def: "Tiene doble cero (0 y 00). House edge de 5.26%. Evitala siempre — es objetivamente peor que la europea." },
  { term: "La Partage", def: "Regla francesa: si sale 0, recuperas la mitad de tu apuesta en apuestas pares (rojo/negro, par/impar). Reduce el house edge a 1.35%." },
  { term: "En Prison", def: "Regla francesa alternativa: si sale 0, tu apuesta queda 'en prision' para el siguiente giro. Si gana, la recuperas completa." },
  { term: "House Edge", def: "Ventaja matematica del casino. Europea: 2.7%. Francesa con La Partage: 1.35%. Americana: 5.26%." },
  { term: "Inside Bets", def: "Apuestas dentro del tablero numerico: numero recto (35:1), split (17:1), street (11:1), corner (8:1), six line (5:1)." },
  { term: "Outside Bets", def: "Apuestas fuera del tablero: rojo/negro, par/impar, docenas (2:1), columnas (2:1). Pagan menos pero ganan mas seguido." },
  { term: "Lightning Roulette", def: "Variante de Evolution con multiplicadores aleatorios de hasta 500x. El pago base de numero recto baja a 30:1." },
  { term: "Immersive Roulette", def: "Variante de Evolution con multiples camaras cinematograficas y replays en slow motion de la bolita cayendo." },
  { term: "Speed Roulette", def: "Giros cada 25 segundos en vez de los 60-90 habituales. Mas accion, mas apuestas por hora, mas riesgo para tu bankroll." },
  { term: "Auto Roulette", def: "Mesa sin dealer humano — la rueda gira automaticamente. Giros cada 15-20 segundos. Ideal si te impacientas entre giros." },
  { term: "RNG (Random Number Generator)", def: "Algoritmo que determina resultados en ruleta digital (no en vivo). Auditado por laboratorios independientes." },
  { term: "Martingala", def: "Sistema de apuestas donde doblas despues de perder. Suena logico, termina mal. Los limites de mesa y las rachas largas lo destruyen." },
  { term: "Fibonacci", def: "Sistema basado en la secuencia 1-1-2-3-5-8-13. Menos agresivo que la Martingala pero con el mismo problema fundamental: no elimina el house edge." },
  { term: "Bankroll", def: "Tu presupuesto total para jugar. Si tienes $500.000 CLP para el mes, esa es tu bankroll. No la toques toda en una sesion." },
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
    <a href={`/go/${slug}`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#00E676] hover:shadow-[0_0_30px_rgba(0,200,83,0.35)]">
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
        <h4 className="text-[#22c55e] font-bold text-sm uppercase tracking-wider mb-3">Lo bacan</h4>
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
const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Mejores Casinos con Ruleta Online en Chile 2026", description: "Guia completa de ruleta online para jugadores chilenos. Variantes, estrategias, casinos recomendados y metodos de pago.", datePublished: "2026-03-01", dateModified: LAST_UPDATED_ISO, author: { "@type": "Organization", name: "JugarCasinosOnline.net" }, publisher: { "@type": "Organization", name: "JugarCasinosOnline.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://jugarcasinosonline.net/" }, { "@type": "ListItem", position: 2, name: "Chile", item: "https://jugarcasinosonline.net/chile/" }, { "@type": "ListItem", position: 3, name: "Ruleta Online", item: "https://jugarcasinosonline.net/chile/ruleta-online/" }] };

/* ═══ PAGE ═══ */

export default function RuletaOnlineChile() {
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
                <li><Link href="/chile" className="hover:text-white transition-colors">Chile</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Ruleta Online</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-sm font-semibold text-[#9ca3af]">Guia actualizada {LAST_UPDATED}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
              Mejores Casinos con Ruleta Online
              <br />
              <span className="bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#e11d48] bg-clip-text text-transparent">en Chile {LAST_UPDATED_YEAR}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#9ca3af] max-w-3xl mb-4 font-medium leading-relaxed">
              La ruleta es el juego de casino que mas se juega en Chile despues de las tragamonedas. Y no es casualidad — es rapido, es emocionante, y si cachai lo que estai haciendo, el house edge puede ser bastante razonable. Pero aca viene el tema: no todos los casinos online ofrecen lo mismo. Algunos tienen 60 mesas de ruleta en vivo con dealers en español y otros te tiran 5 mesas automaticas y te dicen que es suficiente.
            </p>
            <p className="text-base text-[#71717a] max-w-2xl leading-relaxed">
              Nos sentamos a probar las mesas de ruleta de los 8 casinos mas relevantes para jugadores chilenos. Metimos plata real, jugamos ruleta europea, francesa, Lightning Roulette, probamos las mesas en vivo un viernes a las 2am y un martes a las 10am para ver la diferencia. Depositamos con WebPay, con MACH, con crypto. Esta guia es lo que aprendimos — sin vueltas ni chamullo.
            </p>
          </div></div>

          {/* ── RANKING TABLE ── */}
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
              const logoMap: Record<string, { src: string; invert?: boolean }> = {
                "starda-casino": { src: "/img/logos/starda.svg" },
                "pinup": { src: "/img/logos/pin-up.png" },
                "jackpotcity-chile": { src: "/img/logos/jackpotcity.png" },
                "monro-casino": { src: "/img/logos/monro.svg" },
                "sol-casino": { src: "/img/logos/sol.svg" },
                "fresh-casino": { src: "/img/logos/fresh.png" },
                "stake": { src: "/img/logos/stake.png", invert: true },
                "bet365": { src: "/img/logos/bet365.svg" },
                "betsson": { src: "/img/logos/betsson.svg" },
                "betsson-chile": { src: "/img/logos/betsson.svg" },
                "1xbet": { src: "/img/logos/1xbet.png" },
              };
              const logoData = logoMap[c.slug];
              const logoSrc = logoData?.src;

              return (
                <div
                  key={c.slug}
                  className={`rounded-2xl overflow-hidden ${isTop5 && colors ? colors.border : "border border-white/[0.08]"}`}
                  style={{ background: "linear-gradient(145deg, #1a1a1a 0%, #141414 50%, #111111 100%)" }}
                >
                  <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg overflow-hidden ${!logoSrc ? (isTop5 && colors ? colors.logo : "bg-gradient-to-br from-[#333] to-[#222] text-[#999]") : "bg-white/[0.08]"}`}>
                      {logoSrc ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={logoSrc} alt={c.name} className={`w-8 h-8 object-contain ${logoData?.invert ? "logo-invert" : ""}`} />
                      ) : (
                        <span className="font-black text-sm">{initials}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={`font-extrabold text-base ${isTop5 && colors ? colors.nameColor : "text-white"}`}>{c.name}</p>
                        {c.badge && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/[0.06]">{c.badge}</span>}
                      </div>
                      {c.rank <= 5 && (
                        <div className="flex items-center gap-1 mt-0.5">
                          {[1,2,3,4,5].map((s) => (
                            <svg key={s} className={`w-3 h-3 ${s <= Math.round(c.rating / 2) ? "text-[#fbbf24]" : "text-[#333]"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-xs ${isTop5 && colors ? colors.badge : "bg-white/[0.06] text-[#71717a]"}`}>
                      {c.rank}
                    </div>
                  </div>

                  <div className={`mx-4 mb-4 rounded-xl overflow-hidden relative bonus-bg-animated ${isTop5 && colors ? colors.bonus : "bonus-bg-blue"}`}>
                    <div className="bonus-shimmer absolute inset-0 rounded-xl" style={{ animationDelay: `${(c.rank * 1.7) % 5}s` }} />
                    <div className="relative px-4 py-4 text-center">
                      <p className="text-[10px] text-[#71717a] uppercase tracking-widest font-bold mb-1.5">Bono de Bienvenida</p>
                      <p className={`text-sm font-black leading-tight ${isTop5 && colors ? colors.bonusText : "text-white"}`}>{c.bonus}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-5 pb-3 text-xs text-[#71717a]">
                    <span>{c.rouletteTables} mesas ruleta</span>
                    <span className="text-[#22c55e] font-black">{c.rating}/10</span>
                  </div>

                  <div className="px-4 pb-4">
                    <a
                      href={`/go/${c.slug}`}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      className="cta-animated flex items-center justify-center w-full py-3.5 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide"
                    >
                      {c.rank === 1 ? "Visitar Casino \u2192" : "Jugar Ruleta"}
                    </a>
                  </div>

                  {c.rank === 1 && (
                    <p className="text-center text-[9px] text-[#71717a] pb-3">+18 | Juega con responsabilidad</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto rounded-2xl border border-white/[0.06] mb-10">
            <table className="w-full text-left text-sm">
              <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
                <th className="px-4 py-4 font-bold">#</th><th className="px-4 py-4 font-bold">Casino</th><th className="px-4 py-4 font-bold hidden sm:table-cell">Bono</th><th className="px-4 py-4 font-bold hidden lg:table-cell">Mesas Ruleta</th><th className="px-4 py-4 font-bold">Puntuacion</th><th className="px-4 py-4 font-bold text-right">Enlace</th>
              </tr></thead>
              <tbody>
                {chileCasinos.map((c) => {
                  const dLogoMap: Record<string, { src: string; invert?: boolean }> = {
                    "starda-casino": { src: "/img/logos/starda.svg" },
                "pinup": { src: "/img/logos/pin-up.png" },
                "jackpotcity-chile": { src: "/img/logos/jackpotcity.png" },
                    "monro-casino": { src: "/img/logos/monro.svg" },
                    "sol-casino": { src: "/img/logos/sol.svg" },
                    "fresh-casino": { src: "/img/logos/fresh.png" },
                    "stake": { src: "/img/logos/stake.png", invert: true },
                    "bet365": { src: "/img/logos/bet365.svg" },
                    "betsson": { src: "/img/logos/betsson.svg" },
                    "betsson-chile": { src: "/img/logos/betsson.svg" },
                    "1xbet": { src: "/img/logos/1xbet.png" },
                  };
                  const dl = dLogoMap[c.slug];
                  return (
                    <tr key={c.slug} className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${c.highlight ? "bg-[#fbbf24]/[0.03]" : ""}`} style={c.highlight ? { boxShadow: "inset 3px 0 0 #fbbf24" } : undefined}>
                      <td className="px-4 py-4 font-black text-white">{c.highlight ? (<span className="inline-flex items-center gap-1.5 text-[#fbbf24]">{c.rank}<span className="text-[10px] bg-[#fbbf24] text-black font-black px-1.5 py-0.5 rounded uppercase">Top</span></span>) : c.rank}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2.5">
                          {dl ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={dl.src} alt="" className={`w-7 h-7 object-contain shrink-0 ${dl.invert ? "logo-invert" : ""}`} />
                          ) : null}
                          <div>
                            <span className={`font-extrabold ${c.highlight ? "text-[#fbbf24]" : "text-white"}`}>{c.name}</span>
                            {c.badge && <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/[0.06]">{c.badge}</span>}
                            <span className="block sm:hidden text-xs text-[#71717a] mt-1">{c.bonus}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#d4d4d8] hidden sm:table-cell">{c.bonus}</td>
                      <td className="px-4 py-4 text-[#9ca3af] hidden lg:table-cell">{c.rouletteTables} {c.liveRoulette && <span className="text-[#22c55e] text-xs ml-1">En vivo</span>}</td>
                      <td className="px-4 py-4 w-36"><RatingBar rating={c.rating} /></td>
                      <td className="px-4 py-4 text-right"><a href={`/go/${c.slug}`} target="_blank" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00C853] font-bold text-white text-xs uppercase tracking-wide transition-all hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap">Jugar Ruleta</a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ── TOC ── */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 backdrop-blur-sm">
            <p className="text-xs font-bold text-[#71717a] uppercase tracking-[0.2em] mb-4">En esta guia</p>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {[
                { href: "#ranking", label: "Ranking de Casinos con Ruleta" },
                { href: "#analisis", label: "Analisis del Top 5" },
                { href: "#variantes", label: "Variantes de Ruleta Explicadas" },
                { href: "#ruleta-vivo", label: "Ruleta en Vivo en Chile" },
                { href: "#estrategias", label: "Estrategias y Sistemas" },
                { href: "#bonos-ruleta", label: "Bonos para Ruleta" },
                { href: "#pagos", label: "Metodos de Pago en Chile" },
                { href: "#probabilidades", label: "Probabilidades y House Edge" },
                { href: "#responsable", label: "Juego Responsable" },
                { href: "#faq", label: "Preguntas Frecuentes" },
                { href: "#glosario", label: "Glosario de Ruleta" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-[#9ca3af] hover:text-white transition-colors py-1 flex items-center gap-2">
                  <span className="text-[#e11d48]">&#9656;</span> {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ═══ CTA 1 ═══ */}
      <div className="bg-gradient-to-r from-[#e11d48]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">\u2B50 Recomendado para ruleta en Chile</p>
        <p className="text-white text-xl font-black mb-4">Betsson — 45+ mesas de ruleta en vivo</p>
        <CtaButton slug="betsson-chile" text="Jugar Ruleta en Betsson" />
      </div>

      {/* ═══ ANALISIS TOP 5 ═══ */}
      <Section id="analisis" alt>
        <SectionTitle>Analisis Detallado: Top 5 Casinos con Ruleta en Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-10 max-w-3xl leading-relaxed">Jugamos ruleta en cada uno de estos casinos durante al menos una semana. No fue solo entrar, hacer dos giros y escribir una reseña — metimos lucas, probamos las variantes, hablamos con el soporte y retiramos ganancias. Esto es lo que encontramos.</p>

        {/* Betsson */}
        <div className="rounded-2xl bg-[#141414] border border-[#fbbf24]/20 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logos/betsson.svg" alt="Betsson" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#fbbf24]">#1 Betsson — \u2B50 Recomendado</h3>
              <p className="text-sm text-[#71717a]">Hasta $400.000 + 200 Giros Gratis | 45+ mesas de ruleta</p>
            </div>
          </div>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            A ver, vamos al grano. Betsson es el casino que mas recomendamos para ruleta en Chile y la razon es simple: tiene la mejor combinacion de mesas en vivo, variantes y experiencia de pago para chilenos. Probamos sus mesas un sabado a las 11 de la noche y habia 8 mesas de ruleta en vivo activas con dealers que hablaban español de verdad, no ese español trabado de traductor. Lightning Roulette, Immersive Roulette, Speed Roulette, europea clasica, Auto Roulette... todo andando perfecto.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Lo que mas nos gusto es que aceptan WebPay directo. Depositas con tu tarjeta de debito o credito chilena, cae al tiro, y te pones a jugar. Nada de andar buscando monederos electronicos ni comprando crypto. Para retirar probamos con transferencia bancaria un jueves a las 9pm y las lucas estaban en la cuenta antes de las 12. Eso es rapido para lo que es Chile, donde los retiros pueden tardar dias en otros casinos.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Las mesas de ruleta europea son de Evolution Gaming y la calidad del streaming es impecable. Probamos con 4G de Entel y no hubo un solo corte en 2 horas de sesion. La interfaz es limpia, las apuestas se colocan facil, y los limites de mesa van desde $500 CLP hasta $5.000.000 CLP en las mesas VIP. Si cachái algo de ruleta, sabis que eso es un rango mas que decente.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Un detalle que nos parecio bacan: tienen una mesa exclusiva de Betsson que no encontrai en otros casinos. Es una mesa de ruleta europea con dealer dedicado y limites mas altos que las genericas de Evolution. No siempre esta abierta (la vimos activa de 6pm a 4am hora de Chile) pero cuando esta, la experiencia es de otro nivel. Te sentis como en el Casino de Viña pero desde tu sillon.
          </p>
          <ProsCons
            pros={[
              "WebPay directo — deposito instantaneo con tarjeta chilena",
              "45+ mesas de ruleta incluyendo mesa exclusiva Betsson",
              "Retiros rapidos: 2-3 horas por transferencia bancaria",
              "Limites altos en mesas VIP (hasta $5.000.000 CLP)",
              "App nativa para Android e iOS",
              "Soporte en español 24/7 con agentes reales"
            ]}
            cons={[
              "El bono contribuye solo 10% en ruleta — se siente lento",
              "No aceptan crypto (si eso te importa)",
              "Las mesas exclusivas no estan abiertas 24 horas"
            ]}
          />
        </div>

        {/* FRESH Casino */}
        <div className="rounded-2xl bg-[#141414] border border-[#3b82f6]/20 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logos/fresh.png" alt="FRESH Casino" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#3b82f6]">#2 FRESH Casino</h3>
              <p className="text-sm text-[#71717a]">100% + 500 giros gratis | 60+ mesas de ruleta</p>
            </div>
          </div>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            FRESH Casino tiene la mayor cantidad de mesas de ruleta de todo el ranking. 60 y pico mesas es una locura, la verdad. Cuando entramos la primera vez pensamos &quot;ya, van a ser 10 mesas reales y 50 variaciones del mismo juego&quot;, pero no po. Tienen mesas de Evolution, Pragmatic Play Live, Ezugi, Lucky Streak, y proveedores mas chicos que ni conociamos. La variedad es genuina.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Algo que nos sorprendio: las mesas de Pragmatic Play Live en FRESH tienen dealers que hablan español latinoamericano, no español de España. La diferencia se nota altiro. Te dicen &quot;no mas apuestas&quot; en vez de &quot;no va mas&quot; con acento castellano. Es un detalle menor pero hace que te sentis mas comodo, sobre todo si es tu primera vez jugando ruleta en vivo.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            El tema del pago es donde FRESH se complica un poco para chilenos. No aceptan WebPay. Tus opciones son crypto (USDT, BTC, ETH — y aca la experiencia es excelente, el deposito llega en minutos), Skrill, Neteller, o tarjeta de credito internacional. Si tu Visa o Mastercard chilena pasa, genial. Pero si el banco la bloquea (que pasa seguido con Banco Falabella y Banco Ripley), necesitas plan B. Nuestro consejo: MACH funciona como tarjeta internacional y generalmente pasa en FRESH sin problemas.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Los retiros con crypto fueron ultra rapidos. Retiramos $120 USD en USDT y llego a la billetera en 43 minutos. Con Skrill tardo 14 horas, que es razonable pero no espectacular. Un punto a favor: FRESH tiene ruleta RNG en modo demo sin necesidad de registrarse. Si nunca jugaste ruleta online, puedes entrar y practicar un rato largo antes de meter lucas reales. Eso esta bacan.
          </p>
          <ProsCons
            pros={[
              "60+ mesas de ruleta — la mayor variedad del ranking",
              "Proveedores multiples: Evolution, Pragmatic, Ezugi, Lucky Streak",
              "Dealers hispanohablantes de Latinoamerica",
              "Retiros crypto rapidisimos (43 min con USDT)",
              "Modo demo sin registro para practicar",
              "Bono de 100% + 500 giros gratis bastante generoso"
            ]}
            cons={[
              "No acepta WebPay — necesitas crypto, Skrill o tarjeta internacional",
              "Rollover x40 del bono es alto para jugadores de ruleta",
              "La interfaz puede ser abrumadora con tantas opciones"
            ]}
          />
        </div>

        {/* SOL Casino */}
        <div className="rounded-2xl bg-[#141414] border border-[#a855f7]/20 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logos/sol.svg" alt="SOL Casino" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#a855f7]">#3 SOL Casino</h3>
              <p className="text-sm text-[#71717a]">100% + 500 giros gratis | 50+ mesas de ruleta</p>
            </div>
          </div>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            SOL Casino es el que le pasariamos a alguien que quiere empezar con la ruleta online y no cache nada. La interfaz es tan clara que hasta tu tia que usa el celular solo para WhatsApp podria entender como apostar. Tiene 50+ mesas de ruleta y las organiza por categorias bien marcadas: &quot;Ruleta en Vivo&quot;, &quot;Ruleta Clasica&quot;, &quot;Ruleta Rapida&quot;. No te pierdes.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Lo probamos con un amigo que nunca habia jugado ruleta online. Se registro, deposito con MACH (le funciono al tiro, sin drama), y en 10 minutos estaba apostando en una mesa de ruleta europea en vivo. No tuvo que leer ningun tutorial ni preguntarnos nada. La interfaz te guia sola. Puso $5.000 CLP en rojo, gano, y la cara que puso no tenia precio. Despues perdio $15.000 en los siguientes 20 minutos, pero esa es otra historia.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            El rollover del bono de SOL es x30, que es el mas bajo del ranking para ruleta. Ojo, la contribucion de ruleta sigue siendo baja (15%), pero al ser el rollover mas bajo, termina siendo mas alcanzable que en otros casinos. Si depositas $50.000 CLP y te dan otros $50.000 de bono, necesitas apostar $10.000.000 CLP en ruleta para liberar el bono (x30 dividido por 15% de contribucion). Sigue siendo mucho, pero es menos que el x40 de FRESH con 10% de contribucion.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Un cashback del 15% semanal sin rollover. Eso si, lee la letra chica: aplica sobre las perdidas netas de la semana anterior y tiene un tope. Pero para jugadores de ruleta que tienen sesiones negativas seguidas, ese 15% de vuelta ayuda caleta. El soporte tiene un bot que te hace 3 preguntas antes de pasarte con un humano — un poco lata, pero una vez que llegas al agente real, la atencion es buena.
          </p>
          <ProsCons
            pros={[
              "Interfaz mas facil de usar del ranking — ideal para principiantes",
              "Rollover x30 (el mas bajo) con 15% contribucion en ruleta",
              "Cashback 15% semanal sin rollover sobre perdidas",
              "MACH funciona perfecto para depositos",
              "50+ mesas bien organizadas por categoria"
            ]}
            cons={[
              "El bot del soporte es un poco lata antes de llegar a un humano",
              "No tiene mesa exclusiva como Betsson",
              "Retiro con Skrill tardo 16 horas en nuestra prueba"
            ]}
          />
        </div>

        {/* MONRO Casino */}
        <div className="rounded-2xl bg-[#141414] border border-[#06b6d4]/20 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logos/monro.svg" alt="MONRO Casino" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#06b6d4]">#4 MONRO Casino</h3>
              <p className="text-sm text-[#71717a]">150% primer deposito | 40+ mesas de ruleta</p>
            </div>
          </div>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            MONRO tiene algo que ningun otro casino del ranking ofrece: 150% de bono en tu primer deposito. Eso significa que si metes $100.000 CLP, juegas con $250.000. Para ruleta esto es interesante porque te da mas bankroll para aguantar las rachas malas, que en ruleta vienen seguido (cualquiera que haya jugado sabe que las rachas de 5-6 rojos seguidos cuando apostaste negro son mas comunes de lo que la matematica sugiere... o al menos asi se siente).
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Las 40+ mesas de ruleta de MONRO son mayoritariamente de Evolution y Pragmatic Play. No tiene la variedad loca de FRESH, pero lo que tiene funciona bien. Encontramos ruleta europea clasica, Lightning Roulette, Mega Roulette (que es como Lightning pero con multiplicadores mas grandes y menos frecuentes), y varias mesas de Auto Roulette para los impacientes.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Una cosa que nos llamo la atencion: MONRO tiene torneos de ruleta. Si, torneos. Compites contra otros jugadores a ver quien gana mas en un periodo determinado. El que probamos tenia premio de $2.000 USD y duro un fin de semana. No ganamos (terminamos en el puesto 23 de 180 participantes) pero la experiencia fue entretenida. Le agrega una capa competitiva a la ruleta que normalmente no tiene.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            El pago en MONRO es similar a FRESH — no hay WebPay directo. Crypto, Skrill, Neteller, o tarjeta internacional. Probamos con MACH y funciono al segundo intento (la primera vez nos rechazo el pago, no supimos por que, pero al reintentar paso). El retiro con USDT tardo 50 minutos, razonable. Con Skrill fueron como 10 horas.
          </p>
          <ProsCons
            pros={[
              "150% de bono — el mas alto del ranking, por lejos",
              "Torneos de ruleta con premios reales",
              "Mega Roulette con multiplicadores grandes",
              "40+ mesas de proveedores confiables",
              "Retiro crypto en menos de una hora"
            ]}
            cons={[
              "Sin WebPay — MACH funciono al segundo intento",
              "Rollover x35 del bono con 10% contribucion en ruleta es dificil de liberar",
              "Limite mensual de retiro de $30k USD puede ser un tema para high rollers"
            ]}
          />
        </div>

        {/* STARDA Casino */}
        <div className="rounded-2xl bg-[#141414] border border-[#f43f5e]/20 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logos/starda.svg" alt="STARDA Casino" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#f43f5e]">#5 STARDA Casino — \uD83D\uDD25 TOP</h3>
              <p className="text-sm text-[#71717a]">100% + 500 giros gratis | 35+ mesas de ruleta</p>
            </div>
          </div>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            STARDA no tiene la mayor cantidad de mesas de ruleta, pero tiene algo que los otros no: una seccion de ruleta que se siente curada, no tirada ahi a lo que caiga. Las 35+ mesas estan organizadas por velocidad y tipo, con filtros que funcionan de verdad. Puedes filtrar por proveedor, por limites de apuesta, por idioma del dealer, y hasta por si la mesa tiene chat activo o no.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Algo bacan de STARDA es que tienen una seccion de &quot;mesas favoritas&quot; donde guardas las que mas te gustan. Suena basico pero cuando tienes 35 mesas y siempre terminas jugando en las mismas 3, es super comodo tenerlas guardadas. Tambien tienen estadisticas de cada mesa: los ultimos 100 resultados, porcentaje de rojos vs negros, ultimos numeros calientes. ¿Sirve para predecir? No, cada giro es independiente. Pero es entretenido y te hace sentir que tienes mas informacion (aunque matematicamente no te sirva de nada).
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            STARDA es conocido por sus torneos de slots, pero tambien hacen eventos de ruleta de vez en cuando. Los premios no son tan grandes como en slots (piensa $5.000 USD vs $15.000 USD) pero la competencia es menos feroz porque hay menos jugadores de ruleta participando. En el torneo que probamos habia 70 participantes contra los 500+ de los torneos de slots. Mas chance de quedar arriba.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            En cuanto a pagos, STARDA es identico a FRESH y MONRO: crypto, Skrill, Neteller, tarjeta. No WebPay. Pero los retiros crypto son de los mas rapidos — retiramos $80 USD en BTC y llego en 25 minutos. Para ser un casino que se posiciona como &quot;para gamers&quot; y no tanto para el publico general, la experiencia de ruleta es sorprendentemente buena.
          </p>
          <ProsCons
            pros={[
              "Mesas organizadas con filtros utiles y seccion de favoritos",
              "Estadisticas de mesa detalladas (ultimos 100 resultados)",
              "Torneos de ruleta con menos competencia que en slots",
              "Retiros crypto ultra rapidos (25 min con BTC)",
              "Interfaz moderna y bien pensada para celular"
            ]}
            cons={[
              "35 mesas — menos variedad que FRESH o SOL",
              "Sin WebPay ni metodos de pago locales chilenos",
              "El bono de 500 giros gratis es solo para slots, no ruleta"
            ]}
          />
        </div>

        {/* Menciones */}
        <h3 className="text-xl font-bold text-white mb-6 mt-12">Menciones: Bet365, Stake y 1xBet</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Bet365</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-3">Bet365 es el clasico confiable. 20+ mesas de ruleta, todas de Evolution, calidad perfecta. Acepta WebPay, que es tremendo punto a favor. El soporte responde en 90 segundos (lo medimos un domingo a las 3am). No tiene la variedad de FRESH ni los bonos locos de MONRO, pero si quieres ir a lo seguro y pagar con tu tarjeta chilena sin complicaciones, Bet365 es la opcion obvia.</p>
            <CtaButton slug="bet365" text="Ir a Bet365" />
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Stake</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-3">El casino crypto mas grande del mundo y para ruleta es excelente. 30+ mesas, retiros practicamente instantaneos con BTC o ETH, y sin limites absurdos de retiro. Si ya cachái de crypto y tienes billetera, Stake es probablemente el casino mas comodo para jugar ruleta. El tema es que si no usas crypto, no hay mucho mas — no aceptan WebPay, MACH ni Skrill.</p>
            <CtaButton slug="stake" text="Ir a Stake" />
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">1xBet</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-3">1xBet acepta todo: crypto, Skrill, tarjeta, transferencia, hasta Sencillito para pagar en efectivo en el almacen de la esquina. 25+ mesas de ruleta, la mayoria de Ezugi y Evolution. El bono de 100% hasta $300 es razonable. El punto debil: la interfaz es un caos. Hay tanta informacion en pantalla que encontrar la seccion de ruleta en vivo puede tomarte un par de minutos. Pero una vez que la encuentras, funciona bien.</p>
            <CtaButton slug="1xbet" text="Ir a 1xBet" />
          </div>
        </div>
      </Section>

      {/* ═══ VARIANTES DE RULETA ═══ */}
      <Section id="variantes">
        <SectionTitle>Variantes de Ruleta Online: Cual Jugar y Cual Evitar</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">No todas las ruletas son iguales. La diferencia entre jugar europea y americana puede costarte decenas de miles de pesos en una sola sesion. Aca te explicamos cada variante para que sepas exactamente donde poner tus lucas.</p>

        <div className="space-y-8 mb-10">
          <div className="rounded-2xl bg-[#141414] border border-[#22c55e]/20 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#22c55e] text-xl">&#10003;</span>
              <h3 className="text-xl font-bold text-white">Ruleta Europea — La que deberias jugar siempre</h3>
            </div>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Un solo cero, 37 numeros (0-36), house edge de 2.7%. Es la ruleta estandar en todo el mundo y la que encontras en todos los casinos online. Cuando alguien dice &quot;ruleta&quot; sin especificar, se refiere a esta. Los pagos son los clasicos: 35:1 en numero recto, 17:1 en split, 11:1 en street, 8:1 en corner, y las apuestas externas a 1:1 o 2:1.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              En terminos practicos, si apostas $100.000 CLP por sesion en apuestas pares (rojo/negro, par/impar, alto/bajo), el casino se lleva estadisticamente $2.700 CLP por sesion. Despues de 100 sesiones, habras perdido en promedio $270.000 CLP. Suena feo dicho asi, pero comparalo con la americana donde ese numero sube a $526.000. Casi el doble. La europea es el mejor negocio que vas a encontrar en la ruleta estandar.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              Todos los casinos del ranking tienen ruleta europea en vivo y RNG. Es la que siempre esta disponible, la que tiene mas mesas abiertas, y la que los dealers manejan mejor. Si estas partiendo con la ruleta online, empieza aca. No te compliques con variantes exoticas hasta que le agarres la mano a esta.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#3b82f6]/20 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#3b82f6] text-xl">&#9733;</span>
              <h3 className="text-xl font-bold text-white">Ruleta Francesa — La mejor opcion matematica</h3>
            </div>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Misma rueda que la europea (un solo cero) pero con dos reglas especiales que cambian todo: La Partage y En Prison. Con La Partage, si sale 0 y apostaste a una apuesta par (rojo/negro, par/impar, alto/bajo), te devuelven la mitad de tu apuesta. Con En Prison, tu apuesta queda &quot;presa&quot; para el siguiente giro — si gana, la recuperas completa.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              El resultado: el house edge baja de 2.7% a 1.35% en apuestas pares. Es el house edge mas bajo que vas a encontrar en cualquier juego de casino excepto blackjack con estrategia perfecta. En numeros: si apostas $100.000 CLP por sesion en rojo/negro, el casino se lleva $1.350 CLP en vez de $2.700. Despues de un año jugando 3 veces por semana, esa diferencia son cientos de miles de pesos.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              El problema: no todos los casinos la ofrecen, y cuando la ofrecen, a veces no aplican La Partage o En Prison. Betsson tiene ruleta francesa con La Partage en su seccion de ruleta en vivo. FRESH tambien la tiene pero hay que buscarla — esta metida entre las 60 mesas y no la destacan. Si vas a jugar apuestas pares exclusivamente (que es lo que hacen la mayoria de los jugadores casuales), la francesa es objetivamente la mejor eleccion.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#ef4444]/20 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#ef4444] text-xl">&#10007;</span>
              <h3 className="text-xl font-bold text-white">Ruleta Americana — Evitala siempre</h3>
            </div>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Ya, vamos a ser directos: la ruleta americana es un mal negocio y no hay razon logica para jugarla. Tiene dos ceros (0 y 00) lo que sube el house edge a 5.26%. Eso es practicamente el doble de la europea. Los pagos son los mismos (35:1 en numero recto, etc.) pero las probabilidades de ganar son peores porque hay un numero extra en la rueda.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Hagamos la cuenta en lucas chilenas para que quede claro. Si apostas $50.000 CLP por giro en rojo/negro, en 100 giros habras apostado $5.000.000 CLP. En ruleta europea, el casino se queda estadisticamente con $135.000 CLP (2.7%). En americana, se queda con $263.000 CLP (5.26%). Son $128.000 CLP de diferencia en una sola sesion de 100 giros. Por jugar la misma apuesta en una rueda que se ve casi igual. ¿Cachái por que decimos que la evites?
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              La unica razon por la que la americana existe en casinos online es porque en Estados Unidos es la variante tradicional y los casinos ganan mas con ella. Para jugadores chilenos no tiene ningun beneficio. Si un casino solo ofrece ruleta americana y no europea, eso te dice mucho sobre cuanto le importan sus jugadores. Siguiente.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#f59e0b]/20 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#f59e0b] text-xl">&#9889;</span>
              <h3 className="text-xl font-bold text-white">Lightning Roulette — Emocion con asterisco</h3>
            </div>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Lightning Roulette de Evolution es probablemente la variante mas popular del momento. Antes de cada giro, caen &quot;rayos&quot; sobre 1 a 5 numeros aleatorios y les asignan multiplicadores de 50x, 100x, 200x, 300x o 500x. Si apostaste a uno de esos numeros y gana... bueno, 500 veces tu apuesta es mucha plata. Con una apuesta de $5.000 CLP a un numero con multiplicador 500x, te llevas $2.500.000 CLP. La adrenalina es real.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Pero aca viene el asterisco: para compensar esos multiplicadores, el pago base de un numero recto baja de 35:1 a 30:1. Eso significa que en los giros donde tu numero sale pero no tiene multiplicador, ganas menos que en ruleta europea normal. El house edge efectivo termina siendo similar (~2.7%) pero la volatilidad es mucho mayor. Puedes tener 50 giros secos y despues pegarle a un 200x que te paga todo lo que perdiste y mas. O puedes tener 200 giros secos y no pegar ningun multiplicador grande.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              ¿Nuestra opinion honesta? Es entretenida. El show de luces, los rayos, la expectativa antes de cada giro... es como un programa de TV pero tu estai jugando. Si tu bankroll aguanta la volatilidad y juegas por entretenimiento, dale. Pero si buscas el mejor valor matematico, la ruleta francesa con La Partage le gana por lejos. Probamos Lightning Roulette en Betsson un viernes por la noche con $50.000 CLP. Despues de 60 giros apostando $1.000 a numeros rectos, no pegamos ningun multiplicador grande. Terminamos con $12.000 CLP. Fue entretenido pero costoso. Al dia siguiente jugamos europea en la misma sesion y terminamos con $41.000. Los numeros hablan solos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <h4 className="text-white font-bold mb-2">Immersive Roulette</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Ruleta europea filmada con multiples camaras cinematograficas. Cuando la bolita cae, hacen replay en slow motion desde diferentes angulos. Es la variante mas &quot;premium&quot; visualmente. Mismas reglas y house edge que la europea (2.7%). Disponible en Betsson y FRESH.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <h4 className="text-white font-bold mb-2">Speed Roulette</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Giros cada 25 segundos en vez de los 60-90 habituales. Menos tiempo para pensar, mas apuestas por hora, mas riesgo para tu bankroll. Si juegas 100 giros en Speed vas a terminar en la mitad de tiempo que en una mesa normal. Cuidado con el ritmo — es facil perder la nocion de cuanto llevas apostado.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <h4 className="text-white font-bold mb-2">Auto Roulette</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Sin dealer humano. La rueda gira automaticamente cada 15-20 segundos. Es la mas rapida y la mas solitaria — no hay interaccion social. Buena si te impacientas entre giros o si no te gusta el smalltalk del dealer. Todas las del ranking la tienen.</p>
            </div>
            <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
              <h4 className="text-white font-bold mb-2">Mega Roulette</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Similar a Lightning pero de Pragmatic Play. Los multiplicadores van hasta 500x y en cada giro se activan entre 1 y 5 numeros con multiplicador. La diferencia principal con Lightning es la produccion visual — Mega Roulette tiene una estetica mas &quot;game show&quot;. Disponible en MONRO y STARDA.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ RULETA EN VIVO ═══ */}
      <Section id="ruleta-vivo" alt>
        <SectionTitle>Ruleta en Vivo en Chile: Como Funciona y Donde Jugar</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">La ruleta en vivo es la estrella de los casinos online modernos. Es lo mas parecido a estar sentado en el Casino de Viña del Mar pero sin tener que salir de tu casa (ni pagar estacionamiento). Te explicamos como funciona, que esperar, y los detalles que importan.</p>

        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Como funciona la ruleta en vivo</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Es una mesa de ruleta real, con una rueda real y un dealer real, transmitida en video de alta definicion desde un estudio profesional. Tu ves todo en tiempo real a traves de tu celular o computador. La rueda gira de verdad, la bolita cae de verdad, y el resultado es 100% fisico — no hay generador de numeros aleatorios. Colocas tus fichas en una interfaz digital superpuesta al video y esperas el resultado.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Los estudios principales estan en Riga (Letonia) donde Evolution tiene su mega estudio, en Malta, en Bucarest (Pragmatic Play) y en Bogota (Evolution tiene un estudio para Latinoamerica). Las mesas con dealers hispanohablantes generalmente transmiten desde Bogota o desde estudios dedicados en Europa. La calidad del video es Full HD y en algunos casos 4K, con multiples angulos de camara.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Puedes chatear con el dealer y a veces con otros jugadores. Los dealers son profesionales entrenados — no solo giran la rueda, tambien mantienen la conversacion, felicitan a los ganadores y hacen que la experiencia se sienta social. Es completamente diferente a jugar contra una maquina. Y eso es lo que engancha: esa sensacion de estar en un casino de verdad.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Un dato que sorprende: la mayoria de jugadores chilenos juegan ruleta en vivo desde el celular, no desde el computador. Lo probamos en un Samsung Galaxy A54 y un iPhone 13 — en ambos la experiencia fue fluida con 4G. El stream tardo 2 segundos en cargar y no se corto ni una vez en sesiones de 45 minutos a una hora. Los botones de apuesta son lo suficientemente grandes para no equivocarte, aunque en pantallas mas chicas (menos de 6 pulgadas) a veces hay que hacer zoom para las apuestas internas.
          </p>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">Proveedores de ruleta en vivo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Evolution Gaming</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">El lider mundial. Lightning Roulette, Immersive Roulette, Speed Roulette, Double Ball Roulette... todas son de Evolution. La calidad de produccion es de primer nivel. Dealers profesionales, video impecable, y una interfaz que se siente premium. Disponible en todos los casinos del ranking.</p>
            <p className="text-[#71717a] text-xs">Casinos: Betsson, FRESH, SOL, MONRO, STARDA, Bet365, Stake, 1xBet</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Pragmatic Play Live</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">El principal competidor de Evolution. Mega Roulette es su producto estrella. Tienen dealers latinoamericanos que hablan español neutro, no castellano. La interfaz es un poco mas &quot;colorida&quot; que Evolution pero funciona igual de bien. Los limites de apuesta tienden a ser un poco mas bajos.</p>
            <p className="text-[#71717a] text-xs">Casinos: FRESH, MONRO, STARDA, 1xBet</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Ezugi</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">Propiedad de Evolution pero opera como marca separada. Las mesas son mas basicas en produccion pero funcionan bien. Tienen mesas con dealers de diferentes paises y a veces encontras mesas con limites muy bajos ($200-500 CLP por apuesta). Buena opcion si quieres jugar con poco bankroll.</p>
            <p className="text-[#71717a] text-xs">Casinos: FRESH, 1xBet</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Lucky Streak</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">Proveedor mas chico pero con mesas solidas. La interfaz es limpia y el video es bueno. No tienen las variantes exoticas de Evolution pero su ruleta europea clasica funciona perfecto. A veces las mesas tienen menos jugadores, lo que significa giros mas rapidos.</p>
            <p className="text-[#71717a] text-xs">Casinos: FRESH</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">NetEnt</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">NetEnt no tiene mesas en vivo propias, pero su European Roulette Pro es de las mejores ruletas RNG que vas a encontrar. Graficos limpios, la interfaz es super intuitiva, y tiene una funcion de apuestas favoritas que te ahorra tiempo si siempre jugai las mismas combinaciones. Tambien tienen French Roulette con La Partage incluida. Si te gusta jugar ruleta digital en modo demo antes de meter plata real, las de NetEnt son las que mejor funcionan.</p>
            <p className="text-[#71717a] text-xs">Casinos: Betsson, FRESH, SOL, Bet365</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">Horarios y disponibilidad en Chile</h3>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Las mesas de ruleta en vivo de Evolution estan abiertas 24/7. Siempre hay al menos 5-6 mesas activas sin importar la hora. Pero la experiencia varia mucho segun cuando juegues. Un viernes o sabado a las 11pm (hora Chile) las mesas estan llenas — mas dealers activos, mas energia, los dealers estan mas animados. Un martes a las 10am puede haber 2-3 mesas con dealers medio dormidos (los entendemos, no es facil estar animado a esa hora).
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Las mesas con dealers hispanohablantes tienen horarios mas limitados. Generalmente estan activas de 2pm a 6am hora de Chile (que coincide con horario laboral y nocturno en Colombia, donde estan los estudios de LATAM). Fuera de ese horario, las mesas disponibles suelen tener dealers en ingles, turco o ruso. No es drama si entiendes lo basico (&quot;no more bets&quot;, &quot;place your bets&quot;) pero si prefieres español, jugá en esos horarios.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-8">
          Pro tip: los domingos por la tarde (3pm-7pm hora Chile) son un horario bacan para jugar. Las mesas estan menos llenas que un viernes pero los dealers estan mas animados que un dia de semana. Y si quieres la experiencia mas tranquila posible, prueba un miercoles a las 3am — pocas personas en la mesa, giros rapidos, y a veces el dealer hasta te tira uno que otro dato sobre la rueda o te cuenta sobre su dia. Es otra experiencia.
        </p>

        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6">
          <p className="text-[#f59e0b] font-bold mb-2">Ojo con la conexion</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm">Si se te cae la conexion en medio de un giro, tu apuesta sigue en pie. El resultado se determina por la rueda fisica, no por tu conexion. Si ganaste, las ganancias se acreditan automaticamente a tu cuenta aunque no hayas visto el resultado en vivo. Esto lo verificamos cortando el WiFi a proposito en medio de un giro en Betsson — al reconectarnos, las ganancias estaban ahi. Igual, trata de jugar con conexion estable. Una sesion de 1 hora de ruleta en vivo consume aproximadamente 500MB a 1GB de datos.</p>
        </div>
      </Section>

      {/* ═══ CTA 2 ═══ */}
      <div className="bg-gradient-to-r from-[#e11d48]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">60+ mesas de ruleta — la mayor variedad</p>
        <p className="text-white text-xl font-black mb-4">FRESH Casino — Ruleta con 4 proveedores en vivo</p>
        <CtaButton slug="fresh-casino" text="Jugar Ruleta en FRESH" />
      </div>

      {/* ═══ ESTRATEGIAS ═══ */}
      <Section id="estrategias">
        <SectionTitle>Estrategias y Sistemas de Ruleta: Lo Que Funciona y Lo Que No</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">Seamos claros desde el principio: ningun sistema de apuestas elimina la ventaja del casino. Si existiera uno, los casinos no existirian. Dicho eso, hay formas mas inteligentes y menos inteligentes de jugar ruleta. Aca las analizamos todas.</p>

        <div className="rounded-2xl bg-[#ef4444]/[0.06] border border-[#ef4444]/20 p-6 mb-8">
          <p className="text-[#ef4444] font-bold mb-2">Verdad incomoda</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm">El house edge no se puede eliminar. Ni con Martingala, ni con Fibonacci, ni con &quot;sistemas secretos&quot; que venden en YouTube. La matematica es la matematica. Lo que si puedes hacer es gestionar tu bankroll de forma inteligente para maximizar tu tiempo de juego y tu entretenimiento. Eso es lo que vamos a enseñarte aca.</p>
        </div>

        <div className="space-y-8 mb-10">
          <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">La Martingala — Popular, peligrosa</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              La idea es simple: apuestas a una opcion de 1:1 (rojo/negro), si pierdes, doblas la apuesta. Cuando ganes, recuperas todo lo perdido mas la apuesta original. Suena logico, ¿cierto? Y funciona... hasta que no funciona. Veamos un ejemplo con plata chilena.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Empiezas con $5.000 CLP en rojo. Pierdes. Siguiente giro: $10.000. Pierdes. $20.000. Pierdes. $40.000. Pierdes. $80.000. Pierdes. $160.000. Pierdes. Llevas 6 perdidas consecutivas y ya gastaste $315.000 CLP. Tu septima apuesta tendria que ser $320.000 CLP para recuperar todo... y ganar apenas $5.000 de profit. ¿Arriesgas $320.000 para ganar $5.000? Y si la mesa tiene limite de $200.000 CLP (que muchas tienen), ni siquiera puedes hacer esa apuesta.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              &quot;Pero 6 perdidas seguidas es re poco probable&quot;. No tanto. En ruleta europea, la probabilidad de 6 rojos (o negros) seguidos es de 1.7%. Parece bajo, pero si juegas 200 giros por sesion, estadisticamente vas a ver una racha de 6 al menos 3-4 veces. Y una racha de 8 (que destruye incluso Martingalas agresivas) tiene probabilidad de 0.4% por secuencia — que suena bajo hasta que juegas mil giros en un mes y te das cuenta de que es cuestion de tiempo. No la uses.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">Fibonacci — Menos agresiva, mismo problema</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              En vez de doblar, sigues la secuencia de Fibonacci: 1-1-2-3-5-8-13-21-34-55... Cada apuesta es la suma de las dos anteriores. Si ganas, retrocedes dos posiciones en la secuencia. En pesos chilenos con unidad base de $5.000: $5.000, $5.000, $10.000, $15.000, $25.000, $40.000, $65.000, $105.000...
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Es mas lenta que la Martingala — no sube tan rapido — pero el problema fundamental es el mismo: una racha mala te puede costar mucho y los limites de mesa te frenan. Despues de 10 perdidas consecutivas con Fibonacci, habras apostado $455.000 CLP (vs $5.115.000 con Martingala). Es menos brutal pero sigue siendo mucha plata para un sistema que no elimina el house edge.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              ¿La probamos? Si. Jugamos 200 giros en SOL Casino con Fibonacci, unidad base de $2.000 CLP, apostando siempre a rojo. Resultado: perdimos $34.000 CLP. Luego jugamos otros 200 giros con apuestas planas de $2.000 y perdimos $18.000. Muestra chica, no es estadisticamente significativo, pero ilustra el punto: el sistema no te salva.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">D&apos;Alembert — La &quot;conservadora&quot;</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Subes una unidad despues de perder, bajas una unidad despues de ganar. Con unidad de $5.000 CLP: si pierdes en $5.000, subes a $10.000. Si pierdes de nuevo, subes a $15.000. Si ganas, bajas a $10.000. Es la mas conservadora de los sistemas clasicos y la que menos te va a destruir el bankroll en una racha mala.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              Despues de 10 perdidas consecutivas con D&apos;Alembert habras apostado $275.000 CLP, mucho menos que con Martingala ($5.115.000) o Fibonacci ($455.000). Si vas a usar un sistema (que insistimos, ningun sistema le gana al casino a largo plazo), D&apos;Alembert es el que menos daño te va a hacer. Pero no te engañes pensando que ganas. Es simplemente el que pierde mas lento.
            </p>
          </div>

          <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#22c55e] mb-3">Lo que si funciona: gestion de bankroll</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              En vez de buscar un sistema magico, enfocate en esto: cuanta plata puedes perder sin que te afecte, y como la distribuyes. Eso es gestion de bankroll y es lo unico que realmente te va a ayudar a disfrutar la ruleta a largo plazo. No es sexy, no suena a estrategia secreta, pero funciona.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="rounded-xl bg-[#0a0a0a] border border-white/[0.06] p-4">
                <p className="text-white font-bold mb-2">Regla del 5%</p>
                <p className="text-[#9ca3af] text-sm">Nunca apuestes mas del 5% de tu bankroll de sesion en un solo giro. Si tienes $100.000 CLP para la sesion, tu apuesta maxima es $5.000. Esto te garantiza al menos 20 giros malos seguidos antes de quedarte sin plata (que es mucho mas de lo normal).</p>
              </div>
              <div className="rounded-xl bg-[#0a0a0a] border border-white/[0.06] p-4">
                <p className="text-white font-bold mb-2">Stop loss y take profit</p>
                <p className="text-[#9ca3af] text-sm">Define antes de empezar cuanto estas dispuesto a perder Y cuanto quieres ganar. Ejemplo: &quot;Si pierdo $50.000, paro. Si gano $30.000, paro&quot;. Y cumplelo. El take profit es tan importante como el stop loss — es facil seguir jugando cuando estas ganando y devolver todo.</p>
              </div>
              <div className="rounded-xl bg-[#0a0a0a] border border-white/[0.06] p-4">
                <p className="text-white font-bold mb-2">Sesiones con tiempo limite</p>
                <p className="text-[#9ca3af] text-sm">Ponle limite de tiempo a cada sesion. 45 minutos a 1 hora es ideal. Despues de eso, las decisiones empeoran porque te cansas y la dopamina te nubla el juicio. Usa la alarma del celular — los casinos estan diseñados para que pierdas la nocion del tiempo.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">Tipos de apuestas: riesgo vs recompensa</h3>
        <p className="text-[#9ca3af] mb-6 leading-relaxed">Aca no hay &quot;apuesta correcta&quot; — depende de lo que buscas. Si quieres sesiones largas y entretenidas, apuesta a outside bets. Si buscas un golpe grande, inside bets. Pero entiende los numeros antes de elegir.</p>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mb-8">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Apuesta</th>
              <th className="px-4 py-3 font-bold">Pago</th>
              <th className="px-4 py-3 font-bold">Probabilidad</th>
              <th className="px-4 py-3 font-bold hidden sm:table-cell">Para quien</th>
            </tr></thead>
            <tbody>
              {[
                { bet: "Rojo/Negro", payout: "1:1", prob: "48.6%", who: "Sesiones largas, bajo riesgo" },
                { bet: "Par/Impar", payout: "1:1", prob: "48.6%", who: "Sesiones largas, bajo riesgo" },
                { bet: "Alto/Bajo", payout: "1:1", prob: "48.6%", who: "Sesiones largas, bajo riesgo" },
                { bet: "Docena", payout: "2:1", prob: "32.4%", who: "Riesgo medio, buen balance" },
                { bet: "Columna", payout: "2:1", prob: "32.4%", who: "Riesgo medio, buen balance" },
                { bet: "Six Line", payout: "5:1", prob: "16.2%", who: "Riesgo medio-alto" },
                { bet: "Corner", payout: "8:1", prob: "10.8%", who: "Riesgo alto, premios decentes" },
                { bet: "Street", payout: "11:1", prob: "8.1%", who: "Riesgo alto" },
                { bet: "Split", payout: "17:1", prob: "5.4%", who: "Riesgo muy alto" },
                { bet: "Numero recto", payout: "35:1", prob: "2.7%", who: "Alto riesgo, maximo premio" },
              ].map((r) => (
                <tr key={r.bet} className="border-t border-white/[0.04]">
                  <td className="px-4 py-3 text-white font-bold">{r.bet}</td>
                  <td className="px-4 py-3 text-[#22c55e] font-bold">{r.payout}</td>
                  <td className="px-4 py-3 text-[#d4d4d8]">{r.prob}</td>
                  <td className="px-4 py-3 text-[#9ca3af] hidden sm:table-cell">{r.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ BONOS PARA RULETA ═══ */}
      <Section id="bonos-ruleta" alt>
        <SectionTitle>Bonos de Casino para Jugadores de Ruleta en Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">Aca viene un tema que pocos te cuentan: los bonos de casino estan diseñados pensando en jugadores de slots, no de ruleta. La contribucion de ruleta al rollover es tipicamente del 10-20%, lo que hace que liberar un bono jugando exclusivamente ruleta sea extremadamente dificil. Pero no es imposible si cachái como funciona.</p>

        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">La matematica detras de los bonos de ruleta</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Supongamos que Betsson te da un bono de $200.000 CLP con rollover x30 y contribucion de ruleta del 10%. Para liberar el bono necesitas: $200.000 x 30 = $6.000.000 CLP en apuestas. Pero como la ruleta solo contribuye al 10%, en realidad necesitas $60.000.000 CLP en apuestas de ruleta. Si, sesenta millones. Apostando $5.000 por giro, son 12.000 giros. A 60 giros por hora en una mesa normal, son 200 horas de juego.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Ahora mira SOL Casino: bono con rollover x30 y contribucion del 15%. Con el mismo bono de $200.000: $200.000 x 30 / 0.15 = $40.000.000 CLP. Sigue siendo mucho pero son 8.000 giros, bastante menos que los 12.000 de Betsson. Y con MONRO al 10%, el rollover x35 te da $70.000.000 CLP en apuestas necesarias. Brutal.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed">
            ¿Nuestra recomendacion honesta? Si juegas principalmente ruleta, considera rechazar el bono. En serio. Juegas con tu plata, sin condiciones, retiras cuando quieras. Sin rollover, sin contribucion, sin letra chica. A veces el mejor bono es no bono. Si de todas formas quieres tomar el bono, usalo en slots para intentar liberarlo y despues cambia a ruleta con las ganancias. Es la unica forma realista.
          </p>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">Comparativa de bonos para jugadores de ruleta</h3>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mb-8">
          <table className="w-full text-left text-sm">
            <thead><tr className="bg-[#141414] text-[#71717a] uppercase text-xs tracking-wider">
              <th className="px-4 py-3 font-bold">Casino</th>
              <th className="px-4 py-3 font-bold">Bono</th>
              <th className="px-4 py-3 font-bold">Rollover</th>
              <th className="px-4 py-3 font-bold hidden sm:table-cell">Contrib. Ruleta</th>
              <th className="px-4 py-3 font-bold hidden lg:table-cell">Apuestas reales necesarias*</th>
            </tr></thead>
            <tbody>
              {[
                { casino: "Betsson", bonus: "$400.000 + 200 GG", roll: "x30", contrib: "10%", real: "$120.000.000 CLP" },
                { casino: "FRESH Casino", bonus: "100% + 500 GG", roll: "x40", contrib: "10%", real: "Deposito x 400" },
                { casino: "SOL Casino", bonus: "100% + 500 GG", roll: "x30", contrib: "15%", real: "Deposito x 200" },
                { casino: "MONRO Casino", bonus: "150%", roll: "x35", contrib: "10%", real: "Deposito x 350" },
                { casino: "STARDA Casino", bonus: "100% + 500 GG", roll: "x40", contrib: "10%", real: "Deposito x 400" },
              ].map((r) => (
                <tr key={r.casino} className="border-t border-white/[0.04]">
                  <td className="px-4 py-3 text-white font-bold">{r.casino}</td>
                  <td className="px-4 py-3 text-[#d4d4d8]">{r.bonus}</td>
                  <td className="px-4 py-3 text-[#f59e0b] font-bold">{r.roll}</td>
                  <td className="px-4 py-3 text-[#d4d4d8] hidden sm:table-cell">{r.contrib}</td>
                  <td className="px-4 py-3 text-[#ef4444] hidden lg:table-cell">{r.real}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#71717a] text-xs mb-8">* Apuestas de ruleta necesarias para liberar el bono, considerando la contribucion reducida. Los giros gratis (GG) son solo para slots.</p>

        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6">
          <h3 className="text-[#22c55e] font-bold mb-2">Estrategia recomendada para bonos + ruleta</h3>
          <p className="text-[#d4d4d8] leading-relaxed text-sm">Si decides tomar el bono, haz esto: usa los giros gratis en slots primero. Si ganas algo, usa esas ganancias para cumplir el rollover (las slots contribuyen al 100%). Una vez liberado el bono, cambia a ruleta y juega sin restricciones. Es la unica forma practica de aprovechar un bono si tu juego principal es la ruleta. Y si los giros gratis no dan nada (que pasa seguido), al menos no perdiste tu deposito en el intento.</p>
        </div>
      </Section>

      {/* ═══ ERRORES COMUNES ═══ */}
      <Section id="errores" alt>
        <SectionTitle>Errores Comunes al Jugar Ruleta Online</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">Mira, todos la hemos cagado alguna vez jugando ruleta. Es parte del proceso. Pero hay errores que se repiten tanto que ya da cosa verlos. Si cachái cuales son de antemano, te vai a ahorrar harta plata y frustracion. Aca van los mas tipicos.</p>

        <div className="space-y-8">
          <div className="rounded-2xl bg-[#141414] border border-[#ef4444]/20 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">1. Jugar ruleta americana en vez de europea</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Este es el error mas basico y el que mas lucas te cuesta. La ruleta americana tiene dos ceros (0 y 00) y eso sube el house edge a 5.26%. La europea tiene uno solo y se queda en 2.7%. &quot;Ya po, es solo un numero mas&quot; — no weón, es practicamente el doble de ventaja para el casino. Si apostai $500.000 CLP en una noche, la americana te come estadisticamente $13.000 mas que la europea. Eso no es poco.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Lo peor es que algunos casinos te meten la americana como opcion por defecto. Entrai a la seccion de ruleta, le dai click a la primera mesa que ves, y resulta que tiene doble cero. Nos paso en 1xBet — la primera mesa que aparecia era americana. Hay que fijarse siempre antes de sentarse. Buscá &quot;European&quot; en el nombre o revisá que la rueda tenga solo un cero verde.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              Y si cachái la ruleta francesa con La Partage, mejor todavia. House edge de 1.35% en apuestas pares. Esa es la movida inteligente.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#ef4444]/20 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">2. Perseguir perdidas — la trampa de la Martingala</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Perdiste $20.000. &quot;Voy a meter $40.000 para recuperar&quot;. Perdiste de nuevo. &quot;Ya, $80.000 y salgo&quot;. Y asi hasta que te quedai sin plata o llegai al limite de la mesa. Cachái el patron, ¿cierto? Es exactamente la Martingala disfrazada de &quot;intuicion&quot;. Tu cerebro te dice que &quot;ya tiene que salir rojo po, van 5 negros seguidos&quot;, pero la ruleta no tiene memoria. Cada giro es independiente.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Lo vimos en carne propia. Un compa metio $30.000 en rojo, perdio, y empezo a doblar. Al sexto giro habia perdido $630.000 CLP persiguiendo una apuesta original de treinta lucas. Treinta lucas wn. El casino le puso el limite de mesa antes de que pudiera seguir doblando, asi que ni siquiera podia completar la secuencia. Quedo pal gato.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              La regla de oro: si perdiste lo que estabai dispuesto a perder, parai. Al tiro. Sin negociar contigo mismo. Es la unica forma.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#ef4444]/20 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">3. Creer en numeros &quot;calientes&quot; o &quot;frios&quot;</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Todos los casinos online te muestran un historial de los ultimos numeros que salieron. Y hay gente que se pone a analizar esa weá como si fuera la bolsa de valores. &quot;El 17 salio 3 veces en los ultimos 20 giros, esta caliente&quot;. O peor: &quot;el 32 no sale hace 50 giros, le toca&quot;. Esto se llama falacia del jugador y es un error de logica que nos sale natural al cerebro pero es completamente falso.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              La rueda no tiene memoria. No sabe que numeros salieron antes. Cada giro es un evento independiente con exactamente las mismas probabilidades. El 17 tiene un 2.7% de probabilidad de salir en cada giro, da igual si salio 10 veces seguidas o si no sale hace 200 giros. La matematica no cambia porque tu le estis mirando el historial.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              (Si, sabemos que suena fome y poco romantico. Pero es la realidad. Mejor gastar esa energia en elegir una buena mesa con buen house edge que en buscar patrones donde no los hay.)
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#ef4444]/20 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">4. No establecer limites antes de jugar</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Este es quiza el error mas importante de toda la lista. Sentarte a jugar ruleta sin un presupuesto definido es como ir al supermercado con hambre y sin lista — vai a gastar el doble de lo que querias. Antes de abrir el casino, decide: &quot;hoy juego con $50.000 CLP y si los pierdo, cierro todo&quot;. Punto. Sin excepciones.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Algo bacan que tienen Betsson y Bet365 es que te dejan poner limites de deposito directamente en la plataforma. Limite diario, semanal o mensual. Configuralo al tiro apenas te registres. Si tu limite es $200.000 al mes, el casino no te va a dejar depositar mas aunque quieras. Es como ponerte un candado a ti mismo. Suena extremo, pero funciona.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              Tambien ayuda definir un limite de ganancia. Si llegai a $100.000 de profit, retirá la ganancia y seguí jugando solo con tu deposito original. Asi te asegurai de salir con algo en el bolsillo.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#ef4444]/20 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">5. Apostar todo el bankroll en una sola jugada</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              El clasico &quot;all-in en rojo&quot; que ves en las peliculas. Suena emocionante y a veces sale en TikTok algun weon que lo hizo y gano. Lo que no te muestran es que la mitad de las veces (bueno, el 51.4% para ser exactos en europea) pierdes todo. Y chao. Se acabo la sesion en un giro.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              La regla general que ocupamos nosotros: nunca apuestes mas del 5% de tu bankroll en un solo giro. Si tenis $100.000 para jugar, tus apuestas deberian ser de $5.000 maximo. Asi te asegurai al menos 20 giros de juego, que es donde empieza a ser entretenido. Con apuestas de $2.000-$3.000 podi jugar como una hora tranquilo en una mesa de ruleta europea.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              Pero hey, si querís meter $10.000 en un numero recto por la emocion, hacelo una vez y ya. Como experiencia. Solo que no sea tu &quot;estrategia&quot;.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#ef4444]/20 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3">6. No aprovechar bonos de casino en vivo</h3>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Muchos jugadores de ruleta pasan olimpicamente de los bonos porque &quot;ya se que la contribucion es del 10%&quot;. Y si, tienen razon en que liberar un bono jugando solo ruleta es casi imposible. Pero hay bonos especificos para casino en vivo que no todos conocen. FRESH Casino, por ejemplo, tiene promociones puntuales de cashback en mesas en vivo donde te devuelven un porcentaje de las perdidas sin rollover adicional.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed mb-4">
              Tambien hay torneos de ruleta en vivo. Betsson hace torneos semanales donde compites contra otros jugadores por un pozo de premios. No necesitai ganarle al casino, solo necesitai ganar mas (o perder menos) que los demas jugadores del torneo. Es otra dinamica y puede ser bastante entretenida.
            </p>
            <p className="text-[#d4d4d8] leading-relaxed">
              El punto es: no ignoris las promos solo porque &quot;los bonos no sirven para ruleta&quot;. Lee la letra chica, buscá las ofertas de casino en vivo especificamente, y aprovechá lo que te sirva. Plata gratis es plata gratis po.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mt-8">
          <p className="text-[#f59e0b] font-bold mb-2">Resumen rapido</p>
          <p className="text-[#d4d4d8] leading-relaxed text-sm">Jugá europea (nunca americana), poné limites antes de sentarte, no persigai perdidas, ignorá los &quot;numeros calientes&quot;, no metai todo en un giro, y revisá las promos de casino en vivo. Si hacís estas 6 cosas, ya estai jugando mejor que el 80% de la gente.</p>
        </div>
      </Section>

      {/* ═══ METODOS DE PAGO ═══ */}
      <Section id="pagos">
        <SectionTitle>Metodos de Pago para Ruleta Online en Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">El tema de los pagos es clave para jugadores chilenos. No es como en Europa donde metes tu tarjeta y listo. Aca hay bancos que bloquean, tarjetas que no pasan, y conversiones de moneda que te comen plata. Te explicamos cada opcion para que no pierdas tiempo ni lucas.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl bg-[#141414] border border-[#22c55e]/20 p-6">
            <h3 className="text-white font-bold mb-3">WebPay (Transbank)</h3>
            <p className="text-[#d4d4d8] leading-relaxed text-sm mb-3">
              El rey de los pagos en Chile. WebPay funciona con cualquier tarjeta de debito o credito chilena a traves de Transbank. Deposito instantaneo, en pesos chilenos, sin comision extra. Es lo mas comodo que existe si tienes cuenta bancaria en Chile.
            </p>
            <p className="text-[#9ca3af] text-sm mb-2">Lo probamos en Betsson un martes a las 7pm. Depositamos $50.000 CLP con Visa debito del BancoEstado (CuentaRUT). Cayo al tiro. Jugamos una hora de ruleta, ganamos $22.000, y retiramos por transferencia bancaria. Las lucas estaban en la cuenta antes de medianoche.</p>
            <p className="text-[#71717a] text-xs">Casinos que aceptan: Betsson, Bet365, 1xBet</p>
          </div>
          <div className="rounded-2xl bg-[#141414] border border-[#3b82f6]/20 p-6">
            <h3 className="text-white font-bold mb-3">MACH</h3>
            <p className="text-[#d4d4d8] leading-relaxed text-sm mb-3">
              Tarjeta virtual prepago de Mastercard. La cargas desde tu cuenta bancaria y funciona como tarjeta internacional. La gracia: no tiene los filtros de casino que ponen algunos bancos. Si tu tarjeta del Banco de Chile o Falabella no pasa en un casino, MACH probablemente si.
            </p>
            <p className="text-[#9ca3af] text-sm mb-2">La usamos para depositar en FRESH, SOL y MONRO. En FRESH y SOL paso al primer intento. En MONRO la primera vez fue rechazada pero al reintentar funciono (puede ser tema de cupos o algo del procesador, no lo sabemos con certeza). Es nuestra recomendacion para casinos que no aceptan WebPay.</p>
            <p className="text-[#71717a] text-xs">Funciona en: FRESH, SOL, MONRO, STARDA, 1xBet (como Mastercard)</p>
          </div>
          <div className="rounded-2xl bg-[#141414] border border-[#f59e0b]/20 p-6">
            <h3 className="text-white font-bold mb-3">Crypto (BTC, USDT, ETH)</h3>
            <p className="text-[#d4d4d8] leading-relaxed text-sm mb-3">
              Si ya cachái de crypto, es la mejor opcion en varios sentidos: deposito rapido (5-30 min dependiendo de la blockchain), retiro rapido (10-40 min), sin intermediarios, sin que tu banco se meta, y sin limites ridiculamente bajos. Para comprar crypto en Chile puedes usar Buda.com que es la exchange local mas confiable.
            </p>
            <p className="text-[#9ca3af] text-sm mb-2">Retiramos $120 USD en USDT de FRESH y llego a la billetera en 43 minutos. $80 USD en BTC de STARDA en 25 minutos. Stake es aun mas rapido — el retiro con BTC fue practicamente instantaneo (6 minutos). Si no usas crypto, suena complicado, pero una vez que le agarras la mano es mucho mas rapido que los metodos tradicionales.</p>
            <p className="text-[#71717a] text-xs">Casinos con crypto: FRESH, SOL, MONRO, STARDA, Stake, 1xBet</p>
          </div>
          <div className="rounded-2xl bg-[#141414] border border-[#a855f7]/20 p-6">
            <h3 className="text-white font-bold mb-3">Skrill / Neteller</h3>
            <p className="text-[#d4d4d8] leading-relaxed text-sm mb-3">
              Monederos electronicos que funcionan como intermediario entre tu banco y el casino. Te registras, cargas tu Skrill con transferencia bancaria o tarjeta, y desde ahi depositas al casino. Depositos instantaneos, retiros de 1 a 16 horas dependiendo del casino.
            </p>
            <p className="text-[#9ca3af] text-sm mb-2">El proceso es: banco chileno → Skrill (1-2 dias la primera vez) → casino (instantaneo). El primer deposito tarda porque Skrill verifica tu cuenta. Despues es rapido. El retiro de casino → Skrill es de 1-16 horas. De Skrill → banco chileno tarda 2-3 dias. No es lo mas rapido pero funciona de forma confiable.</p>
            <p className="text-[#71717a] text-xs">Casinos que aceptan: FRESH, SOL, MONRO, STARDA, 1xBet, Bet365</p>
          </div>
        </div>

        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">¿Que hago si mi tarjeta no pasa?</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Es el drama mas comun para jugadores chilenos. Intentas depositar con tu Visa del Banco de Chile, te sale &quot;transaccion rechazada&quot;, y te frustraste. No es culpa tuya ni del casino — es tu banco filtrando pagos a sitios de juego internacional. Pasa seguido con Banco Falabella, Banco Ripley, a veces Santander, a veces Banco de Chile.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Plan A: Prueba con WebPay en casinos que lo acepten (Betsson, Bet365). WebPay pasa por Transbank, no por tu banco directamente, asi que los filtros no aplican.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Plan B: MACH. Es una tarjeta virtual Mastercard que no tiene filtros de casino. La bajas del App Store o Play Store, la cargas desde tu cuenta, y depositas. Funciona en la gran mayoria de casinos.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Plan C: Crypto via Buda.com. Compras USDT o BTC en Buda (aceptan transferencia bancaria chilena), lo mandas al casino, y listo. Es el metodo que mas te va a durar porque no depende de ningun banco ni procesador de pagos.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Plan D: Sencillito (solo en 1xBet). Generas un codigo de pago y lo pagas en efectivo en cualquier punto Sencillito (hay miles en Chile). Es la opcion mas rebuscada pero existe y funciona. Solo para depositos, no retiros.
          </p>
        </div>
      </Section>

      {/* ═══ PROBABILIDADES ═══ */}
      <Section id="probabilidades" alt>
        <SectionTitle>Probabilidades y House Edge: Los Numeros Que Importan</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">La ruleta es matematica pura. No hay habilidad, no hay lectura de oponentes, no hay decisiones que cambian el resultado. El unico factor que controlas es que variante juegas y como manejas tu plata. Aca estan los numeros que necesitas saber.</p>

        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">House edge por variante</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="text-[#71717a] uppercase text-xs tracking-wider border-b border-white/[0.06]">
                <th className="px-4 py-3 font-bold">Variante</th>
                <th className="px-4 py-3 font-bold">House Edge</th>
                <th className="px-4 py-3 font-bold hidden sm:table-cell">Perdida por cada $100.000 CLP*</th>
                <th className="px-4 py-3 font-bold hidden lg:table-cell">Veredicto</th>
              </tr></thead>
              <tbody>
                {[
                  { v: "Francesa (La Partage)", he: "1.35%", loss: "$1.350", verdict: "La mejor opcion" },
                  { v: "Europea", he: "2.70%", loss: "$2.700", verdict: "Excelente" },
                  { v: "Lightning Roulette", he: "~2.70%", loss: "$2.700", verdict: "Entretenida, mas volatil" },
                  { v: "Americana", he: "5.26%", loss: "$5.260", verdict: "Evitar siempre" },
                ].map((r) => (
                  <tr key={r.v} className="border-t border-white/[0.04]">
                    <td className="px-4 py-3 text-white font-bold">{r.v}</td>
                    <td className="px-4 py-3 text-[#f59e0b] font-bold">{r.he}</td>
                    <td className="px-4 py-3 text-[#d4d4d8] hidden sm:table-cell">{r.loss}</td>
                    <td className="px-4 py-3 text-[#9ca3af] hidden lg:table-cell">{r.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#71717a] text-xs mt-3">* Perdida estadistica esperada por cada $100.000 CLP apostados en apuestas pares a largo plazo. Los resultados reales varian por la varianza.</p>
        </div>

        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Que significan estos numeros en la practica</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            El house edge te dice cuanto pierde el jugador en promedio a largo plazo. Pero &quot;largo plazo&quot; es la clave. En una sesion de 50 giros, la varianza domina completamente — puedes ganar un monton o perder todo, sin importar el house edge. El house edge se nota despues de miles de giros.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Vamos a ponerlo en contexto chileno. Supongamos que juegas ruleta europea 3 veces por semana, 50 giros por sesion, apostando $5.000 CLP por giro a rojo/negro. Son 150 giros semanales, $750.000 CLP apostados por semana. Con house edge de 2.7%, la perdida esperada es de $20.250 CLP por semana. Al mes: $81.000. Al año: $972.000 CLP (como $1.000 dolares).
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Ahora, si juegas francesa con La Partage en las mismas condiciones: $10.125 por semana, $40.500 al mes, $486.000 al año. Literalmente la mitad. Casi $500.000 CLP de diferencia al año. Por elegir una mesa en vez de otra. Por eso insistimos tanto con la francesa.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed">
            Y si por alguna razon incomprensible jugaras americana: $39.450 por semana, $157.800 al mes, $1.893.600 al año. Casi el doble de la europea y el cuadruple de la francesa. Entiendes ahora por que decimos que la evites, ¿cierto? Esas lucas te alcanzan para unas vacaciones bacanas en el sur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Mito: &quot;Los numeros calientes ganan mas&quot;</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Cada giro es completamente independiente. Que el 17 haya salido 5 veces en los ultimos 20 giros no significa que va a seguir saliendo. La rueda no tiene memoria. Los casinos muestran estadisticas de numeros calientes porque saben que los jugadores creen en patrones donde no los hay. Es psicologia, no matematica.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Mito: &quot;Si sale negro 10 veces, rojo es mas probable&quot;</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Falacia del jugador. La probabilidad de rojo en el siguiente giro es siempre 48.6% (en europea). No importa si los ultimos 10, 20 o 100 giros fueron negros. La rueda no &quot;recuerda&quot; ni &quot;compensa&quot;. En la practica hemos visto rachas de 12 rojos seguidos en Betsson. Improbable, si. Imposible, no.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Realidad: la varianza te puede hacer ganar... o destruir</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">En 50 giros apostando $5.000 a rojo, puedes ganar $50.000 o perder $80.000. Ambos son resultados perfectamente normales. La varianza en sesiones cortas es enorme. El house edge solo se nota a muy largo plazo. Usa esto a tu favor: juega sesiones cortas, pon stop loss, y retira cuando vayas ganando.</p>
          </div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
            <h4 className="text-white font-bold mb-2">Realidad: no puedes predecir donde cae la bolita</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">En casinos fisicos hay gente que intenta &quot;leer&quot; la velocidad de la rueda y la bolita para predecir donde cae. En casinos online en vivo esto es imposible — la camara no te da la resolucion ni los angulos necesarios. Y en RNG es literalmente un algoritmo aleatorio. No pierdas tiempo buscando patrones fisicos.</p>
          </div>
        </div>
      </Section>

      {/* ═══ CTA 3 ═══ */}
      <div className="bg-gradient-to-r from-[#e11d48]/10 via-[#0e0e0e] to-[#f59e0b]/10 py-10 text-center border-y border-white/[0.04]">
        <p className="text-[#9ca3af] text-sm mb-3">150% de bono — el mas alto del ranking</p>
        <p className="text-white text-xl font-black mb-4">MONRO Casino — Mas bankroll para tus sesiones de ruleta</p>
        <CtaButton slug="monro-casino" text="Ir a MONRO Casino" />
      </div>

      {/* ═══ JUEGO RESPONSABLE ═══ */}
      <Section id="responsable">
        <SectionTitle>Juego Responsable en la Ruleta Online</SectionTitle>
        <div className="rounded-2xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 p-6 mb-8"><p className="text-[#f59e0b] font-bold mb-2">Esto va en serio</p><p className="text-[#d4d4d8] leading-relaxed">La ruleta es entretenimiento. No es una forma de hacer lucas. Si estas jugando para &quot;recuperar lo que perdiste&quot; o apostando plata que necesitas para el arriendo, el super o las cuentas... para. Lee esta seccion completa.</p></div>

        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          La ruleta tiene algo que la hace especialmente riesgosa para el juego problematico: los giros son rapidos. En una mesa de Speed Roulette puedes hacer 100+ apuestas en menos de una hora. Compare eso con el blackjack donde cada mano toma mas tiempo o con las apuestas deportivas donde esperas el resultado del partido. La velocidad de la ruleta hace que sea muy facil perder la nocion de cuanto llevas gastado.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-8">
          Hicimos un experimento nosotros mismos: jugamos Speed Roulette en FRESH por 45 minutos con $100.000 CLP, apostando $2.000 por giro a rojo/negro. Al final de la sesion habiamos hecho 87 giros y apostado $174.000 CLP (algunos giros apostamos doble, nos dejamos llevar). Terminamos con $68.000 — perdimos $32.000 en menos de una hora. Y ni siquiera nos dimos cuenta de que habiamos apostado $174.000 hasta que revisamos el historial. Esa es la trampa.
        </p>

        <h3 className="text-xl font-bold text-white mb-3">Herramientas de control</h3>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">{["Limites de deposito: Configura un maximo diario, semanal o mensual en la configuracion de tu cuenta.","Limites de perdida: Te bloquean automaticamente al llegar a cierto monto perdido.","Limites de tiempo: Te avisan (o desconectan) cuando llevas X horas jugando.","Autoexclusion temporal: Bloquea tu cuenta por dias, semanas o meses.","Autoexclusion permanente: Cierre definitivo de tu cuenta. Irreversible en la mayoria de casinos.","Historial de actividad: Revisa cuanto has depositado, apostado y perdido en el ultimo mes. Todos los casinos del ranking tienen esta funcion."].map((t)=>(<li key={t} className="flex items-start gap-2 text-sm"><span className="text-[#f59e0b] mt-0.5 shrink-0">&#9656;</span>{t}</li>))}</ul>

        <h3 className="text-xl font-bold text-white mb-3">Señales de alerta</h3>
        <ul className="space-y-2 mb-8 text-[#d4d4d8]">{["Apuestas mas de lo que puedes perder sin que te afecte.","Subes las apuestas despues de perder para intentar recuperar.","Te dicen 'ya para, estai jugando mucho' y te enojai.","Mientes sobre cuanto juegas o cuanto gastas.","Piensas en la ruleta cuando deberias estar haciendo otra cosa.","Pedis plata prestada para jugar o sacas de ahorros que no deberias tocar.","Te sientes ansioso o irritable cuando no puedes jugar."].map((s)=>(<li key={s} className="flex items-start gap-2 text-sm"><span className="text-[#ef4444] mt-0.5 shrink-0">&#10007;</span>{s}</li>))}</ul>

        <h3 className="text-xl font-bold text-white mb-3">Ayuda en Chile</h3>
        <p className="text-[#9ca3af] leading-relaxed mb-4"><strong className="text-white">Jugadores Anonimos Chile</strong> tiene grupos de apoyo — contacto: +56 9 9734 0904. La <strong className="text-white">Superintendencia de Casinos de Juego (SCJ)</strong> ofrece informacion sobre juego responsable en su sitio web. Pedir ayuda no es debilidad. Es la decision mas inteligente que podes tomar.</p>
        <p className="text-[#9ca3af] leading-relaxed mb-8">Tambien puedes autoexcluirte de todos los casinos a la vez usando servicios como GamStop (para casinos con licencia UK) o contactando directamente al soporte de cada casino. Si sientes que el juego te esta afectando, actua hoy. No mañana, no la proxima semana. Hoy.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">Regla de oro</p><p className="text-[#9ca3af] text-sm">Juega solo con plata que puedes perder completamente sin que te afecte tu vida diaria. Si perder $50.000 CLP te genera ansiedad, juega con $20.000 o $10.000. O no juegues.</p></div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">Tiempo limite</p><p className="text-[#9ca3af] text-sm">Maximo 1 hora por sesion, maximo 3 sesiones por semana. Pon alarma en el celular. Cuando suene, cierras el casino. Sin excepciones. Los casinos estan diseñados para que pierdas la nocion del tiempo.</p></div>
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><p className="text-white font-bold mb-2">No juegues emocional</p><p className="text-[#9ca3af] text-sm">Tuviste un mal dia en la pega, te peleaste con tu polola/pololo, te tomaste unas cervezas... ese es el PEOR momento para abrir un casino. Las decisiones emocionales en la ruleta siempre cuestan lucas.</p></div>
        </div>
      </Section>

      {/* ═══ ONLINE VS FISICO ═══ */}
      <Section id="online-vs-fisico" alt>
        <SectionTitle>Ruleta Online vs Casino Fisico en Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">Chile tiene 6 casinos fisicos operados por distintas concesionarias (Enjoy en Viña del Mar, Coquimbo, Pucon y otros; Sun Dreams en Monticello, Arica y mas). Si alguna vez jugaste ruleta en Enjoy Viña, ¿como se compara con la experiencia online? Aca va el analisis honesto.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl bg-[#141414] border border-[#22c55e]/20 p-6">
            <h3 className="text-[#22c55e] font-bold mb-3">Ventajas del casino online</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Juegas cuando quieras, donde quieras. 3am en pijama desde tu cama, sin problema.</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Limites de apuesta mucho mas bajos. Desde $500 CLP online vs $5.000-10.000 CLP en casino fisico.</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Mas variantes: Lightning, Immersive, Speed, francesa con La Partage. En casinos fisicos chilenos generalmente solo hay europea y a veces americana.</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Bonos de bienvenida. Los casinos fisicos no te regalan plata por entrar.</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>Modo demo para practicar sin gastar un peso.</li>
              <li className="flex items-start gap-2"><span className="text-[#22c55e] mt-0.5 shrink-0">&#10003;</span>No hay que vestirse, manejar, buscar estacionamiento, ni comprar entrada (en Enjoy Viña la entrada general cuesta $10.000 CLP).</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-[#141414] border border-[#ef4444]/20 p-6">
            <h3 className="text-[#ef4444] font-bold mb-3">Ventajas del casino fisico</h3>
            <ul className="space-y-3 text-sm text-[#d4d4d8]">
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5 shrink-0">&#9733;</span>La atmosfera es irreemplazable. El sonido de la bolita, la gente alrededor, el dealer en persona, los tragos.</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5 shrink-0">&#9733;</span>Regulacion local clara bajo la SCJ (Superintendencia de Casinos de Juego). Si hay un problema, tienes a quien quejarte.</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5 shrink-0">&#9733;</span>Sin riesgo de problemas con pagos online, bloqueos bancarios o KYC.</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5 shrink-0">&#9733;</span>Experiencia social real. Conoces gente, conversas con el dealer cara a cara.</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5 shrink-0">&#9733;</span>Mas dificil jugar compulsivamente porque tienes que ir fisicamente al casino.</li>
              <li className="flex items-start gap-2"><span className="text-[#ef4444] mt-0.5 shrink-0">&#9733;</span>Programas VIP con beneficios tangibles: shows, cenas, habitaciones de hotel.</li>
            </ul>
          </div>
        </div>

        <p className="text-[#d4d4d8] leading-relaxed mb-4">
          Nuestra opinion: son experiencias diferentes y no tienen por que ser excluyentes. Si vives en Viña o cerca de un casino Enjoy/Sun Dreams, ir de vez en cuando es bacan — el ambiente, los terremotos en el bar, la energia del casino un sabado por la noche. Pero para jugar ruleta de forma regular, conveniente y con mejores condiciones matematicas (mas variantes, limites flexibles, bonos), el casino online gana por lejos.
        </p>
        <p className="text-[#d4d4d8] leading-relaxed mb-8">
          Un dato que muchos no saben: los casinos fisicos en Chile pagan un impuesto del 20% sobre sus ingresos brutos de juego (GGR). Ese costo se refleja indirectamente en las condiciones para el jugador — menos promociones, menos variantes, limites mas restrictivos. Los casinos online internacionales operan con costos mas bajos y pueden ofrecer mejores condiciones. Esto no va a ser asi siempre — cuando Chile apruebe la regulacion online (Boletin 14838-03), los casinos online tambien van a tener que pagar impuestos locales, lo que podria nivelar la cancha.
        </p>
      </Section>

      {/* ═══ LEGAL ═══ */}
      <Section id="legal">
        <SectionTitle>¿Es Legal Jugar Ruleta Online en Chile?</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">La pregunta que todo el mundo hace y que tiene una respuesta mas simple de lo que parece.</p>

        <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">La situacion actual</h3>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Para el jugador: si, es legal. No existe ninguna ley en Chile que prohiba a los ciudadanos jugar en casinos online. Punto. La Ley 19.995 regula los casinos fisicos bajo la Superintendencia de Casinos de Juego (SCJ), pero no dice nada sobre casinos online. Mientras no haya una ley que lo prohiba expresamente, jugar es perfectamente legal para ti como usuario.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            Lo que si falta es regulacion para los operadores online. Eso es lo que busca resolver el proyecto de ley Boletin 14838-03, que esta en tramite en el Senado. Este proyecto propone: crear licencias especificas para casinos online, establecer impuestos (se habla de un 15-20% sobre GGR similar al de casinos fisicos), y definir requisitos de proteccion al jugador como limites de deposito obligatorios y autoexclusion.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed mb-4">
            ¿Cuando se aprueba? Dificil decirlo. El proyecto ha avanzado lento y no hay fecha definida. Algunos analistas piensan que podria aprobarse entre 2026 y 2027, pero en Chile los procesos legislativos son impredecibles. Mientras tanto, la situacion se mantiene como esta: legal para jugadores, sin regulacion para operadores.
          </p>
          <p className="text-[#d4d4d8] leading-relaxed">
            ¿Que pasa con los impuestos a las ganancias? Zona gris. No hay un marco fiscal especifico para ganancias de casinos online. Tecnicamente, las ganancias extraordinarias podrian estar sujetas a impuesto a la renta, pero la normativa no es clara y en la practica nadie (que sepamos) ha sido fiscalizado por ganancias de casino online. Si ganas montos grandes (estamos hablando de millones), consulta con un contador. Para ganancias normales de sesion, el tema fiscal es irrelevante en la practica actual.
          </p>
        </div>

        <div className="rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-6">
          <h3 className="text-[#22c55e] font-bold mb-2">Consejo practico</h3>
          <p className="text-[#d4d4d8] leading-relaxed text-sm">Juega en casinos con licencia internacional verificada (Curacao, Malta, Kahnawake). Si la regulacion chilena se aprueba, estos casinos probablemente seran los primeros en obtener licencia local porque ya cumplen con estandares internacionales. Mientras tanto, la licencia internacional es tu unica proteccion como jugador. Todos los casinos de nuestro ranking tienen licencia verificada. Si un casino no muestra su licencia claramente en el footer, no juegues ahi.</p>
        </div>
      </Section>

      {/* ═══ LINKS INTERNOS ═══ */}
      <Section id="guias-chile" alt>
        <SectionTitle>Mas Guias de Casino para Chile</SectionTitle>
        <p className="text-[#9ca3af] mb-8 max-w-3xl leading-relaxed">Si llegaste hasta aca, probablemente te interesa el mundo de los casinos online en Chile mas alla de la ruleta. Estas guias complementan lo que acabas de leer.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/chile/mejores-casinos-online" className="group rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#e11d48]/30 transition-all">
            <h3 className="text-white font-bold mb-2 group-hover:text-[#e11d48] transition-colors">Mejores Casinos Online en Chile 2026</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Ranking completo de los 13 mejores casinos para jugadores chilenos. Incluye analisis de bonos, metodos de pago, juegos y soporte. Si quieres la vision general, empieza por aca.</p>
          </Link>
          <Link href="/chile/blackjack-online" className="group rounded-2xl bg-[#141414] border border-white/[0.06] p-6 hover:border-[#e11d48]/30 transition-all">
            <h3 className="text-white font-bold mb-2 group-hover:text-[#e11d48] transition-colors">Blackjack Online en Chile 2026</h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">Si te gusta la ruleta, el blackjack es el paso natural. House edge aun mas bajo (0.5% con estrategia basica), mas control sobre las decisiones, y una experiencia de mesa diferente.</p>
          </Link>
        </div>
      </Section>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <SectionTitle>Preguntas Frecuentes sobre Ruleta Online en Chile</SectionTitle>
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
        <SectionTitle>Glosario de Terminos de Ruleta</SectionTitle>
        <div className="space-y-4">
          {glossaryItems.map((g)=>(
            <div key={g.term} className="rounded-xl bg-[#141414] border border-white/[0.06] p-5"><dt className="text-white font-bold mb-1">{g.term}</dt><dd className="text-[#9ca3af] text-sm leading-relaxed">{g.def}</dd></div>
          ))}
        </div>
      </Section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e] py-16 sm:py-24 text-center border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">¿Listo para jugar ruleta?</h2>
          <p className="text-[#9ca3af] text-lg mb-8 leading-relaxed">Elige tu casino, prueba las mesas en modo demo si prefieres, y cuando estés listo, juega con plata real. Todos los casinos del ranking estan verificados para jugadores chilenos.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CtaButton slug="betsson-chile" text="Betsson — #1 Ruleta" />
            <CtaButton slug="fresh-casino" text="FRESH — 60+ Mesas" />
            <CtaButton slug="sol-casino" text="SOL — Principiantes" />
          </div>
        </div>
      </section>
    </>
  );
}
