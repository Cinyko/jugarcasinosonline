import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casinos Online en Chile 2026 | JugarCasinosOnline.net",
  description:
    "Los mejores casinos online en Chile 2026. Encuentra sitios seguros con pagos por WebPay, MACH y criptomonedas. Bonos exclusivos, slots, ruleta y blackjack para jugadores chilenos.",
};

const sections = [
  {
    title: "Mejores Casinos Online",
    href: "/chile/mejores-casinos-online/",
    description:
      "Los casinos online m\u00e1s bacanes para jugar en Chile. Sitios verificados, pagos r\u00e1pidos y atenci\u00f3n en espa\u00f1ol.",
    icon: "\uD83C\uDFC6",
  },
  {
    title: "Ruleta Online",
    href: "/chile/ruleta-online/",
    description:
      "Juga ruleta online al tiro: europea, americana y en vivo con dealers reales. Estrategias y mejores mesas.",
    icon: "\uD83C\uDFAF",
  },
  {
    title: "Blackjack Online",
    href: "/chile/blackjack-online/",
    description:
      "Aprende estrategia b\u00e1sica de blackjack y encuentra las mejores mesas online disponibles en Chile.",
    icon: "\uD83C\uDCCF",
  },
  {
    title: "Mejores Slots",
    href: "/chile/mejores-slots-online/",
    description:
      "Las tragamonedas m\u00e1s populares entre los chilenos. Jackpots progresivos, alto RTP y giros gratis.",
    icon: "\uD83C\uDFB0",
  },
  {
    title: "Bonos Sin Dep\u00f3sito",
    href: "/chile/bonos-sin-deposito/",
    description:
      "Bonos sin dep\u00f3sito exclusivos para Chile. Prueba los casinos gratis y retira tus ganancias en lucas reales.",
    icon: "\uD83C\uDF81",
  },
  {
    title: "Casinos con Criptomonedas",
    href: "/chile/casinos-criptomonedas/",
    description:
      "Casinos crypto para chilenos. Deposita con Bitcoin, Ethereum o USDT de forma r\u00e1pida y segura.",
    icon: "\u20BF",
  },
];

export default function ChilePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Glow accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#e11d48]/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e11d48]/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm text-[#71717a]">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            Inicio
          </Link>
          <span>/</span>
          <span className="text-white font-medium">Chile</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Chile flag */}
          <img
            src="https://flagcdn.com/cl.svg"
            width={48}
            height={32}
            alt="Bandera de Chile"
            className="rounded shadow-lg shadow-black/30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Casinos Online en{" "}
            <span className="bg-gradient-to-r from-[#e11d48] to-[#fb7185] bg-clip-text text-transparent">
              Chile
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
          Chile es uno de los mercados de juego online que m&aacute;s r&aacute;pido crece en
          Latinoam&eacute;rica. Aunque la regulaci&oacute;n a&uacute;n est&aacute; en tr&aacute;mite con el
          Bolet&iacute;n 14838-03, ya existen opciones bac&aacute;n para jugar de forma segura.
          Con m&eacute;todos de pago como WebPay, MACH y transferencias bancarias en
          pesos chilenos, depositar tus lucas y retirar ganancias es al tiro.
        </p>
      </section>

      {/* Section cards grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#e11d48]/30 hover:bg-[#181818] hover:shadow-xl hover:shadow-[#e11d48]/[0.04] hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#fb7185] transition-colors duration-300">
                {section.title}
              </h2>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e11d48] group-hover:gap-3 transition-all duration-300">
                Ver m&aacute;s
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom info section */}
      <section className="relative z-10 bg-[#0e0e0e] border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            &iquest;Por qu&eacute; confiar en nuestra gu&iacute;a de casinos para Chile?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Regulaci\u00f3n en camino",
                text: "Chile avanza con el Bolet\u00edn 14838-03 para regular el juego online. Mientras tanto, revisamos que cada casino cuente con licencias internacionales v\u00e1lidas como Cura\u00e7ao o Malta para que juegues tranquilo.",
              },
              {
                title: "Pagos con WebPay y MACH",
                text: "Evaluamos los m\u00e9todos de pago que realmente se usan en Chile: WebPay, MACH, transferencias bancarias en pesos chilenos y billeteras crypto. Depositar y retirar tus lucas es f\u00e1cil y r\u00e1pido.",
              },
              {
                title: "Informaci\u00f3n actualizada al tiro",
                text: "Nuestro equipo revisa cada semana los bonos, promociones y condiciones de los casinos. Siempre tienes la data m\u00e1s fresca del mercado chileno para tomar la mejor decisi\u00f3n.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
