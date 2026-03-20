import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casinos Online en Ecuador 2026 | JugarCasinosOnline.net",
  description:
    "Los mejores casinos online en Ecuador 2026. Guía completa con bonos exclusivos, slots, ruleta y blackjack. Sitios seguros que aceptan pagos en dólares americanos para jugadores ecuatorianos.",
};

const sections = [
  {
    title: "Mejores Casinos Online",
    href: "/ecuador/mejores-casinos-online/",
    description:
      "Los casinos online más chéveres para jugar desde Ecuador. Sitios verificados con licencia, pagos rápidos en USD y soporte en español.",
    icon: "🏆",
  },
  {
    title: "Ruleta Online",
    href: "/ecuador/ruleta-online/",
    description:
      "Juega ruleta online de ley: europea, americana y en vivo con crupieres reales. Estrategias y las mejores mesas para ecuatorianos.",
    icon: "🎯",
  },
  {
    title: "Blackjack Online",
    href: "/ecuador/blackjack-online/",
    description:
      "Aprende estrategia básica de blackjack y encuentra las mesas más bacanes disponibles para Ecuador.",
    icon: "🃏",
  },
  {
    title: "Mejores Slots",
    href: "/ecuador/mejores-slots-online/",
    description:
      "Las tragamonedas más populares entre ecuatorianos. Jackpots progresivos, alto RTP y giros gratis que están chéveres.",
    icon: "🎰",
  },
  {
    title: "Bonos Sin Depósito",
    href: "/ecuador/bonos-sin-deposito/",
    description:
      "Bonos sin depósito exclusivos para Ecuador. Prueba los casinos gratis y retira tus ganancias en dólares reales.",
    icon: "🎁",
  },
  {
    title: "Casinos con Criptomonedas",
    href: "/ecuador/casinos-criptomonedas/",
    description:
      "Casinos crypto para ecuatorianos. Deposita con Bitcoin, Ethereum o USDT de forma rápida y segura desde tu billetera.",
    icon: "₿",
  },
];

export default function EcuadorPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Glow accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#eab308]/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#eab308]/[0.03] rounded-full blur-[120px]" />
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
          <span className="text-white font-medium">Ecuador</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Ecuador flag */}
          <img
            src="https://flagcdn.com/ec.svg"
            width={48}
            height={32}
            alt="Bandera de Ecuador"
            className="rounded shadow-lg shadow-black/30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Casinos Online en{" "}
            <span className="bg-gradient-to-r from-[#eab308] to-[#facc15] bg-clip-text text-transparent">
              Ecuador
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
          El mercado de casinos online en Ecuador est&aacute; creciendo de ley. Tras el
          refer&eacute;ndum de 2025 que abri&oacute; la puerta a la regulaci&oacute;n de casinos y juegos
          de azar, el panorama para los jugadores ecuatorianos es m&aacute;s ch&eacute;vere que
          nunca. Al usar el d&oacute;lar americano como moneda oficial, tienes una ventaja
          bac&aacute;n: depositas y retiras en USD sin comisiones de conversi&oacute;n en los
          mejores casinos internacionales.
        </p>
      </section>

      {/* Section cards grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#eab308]/30 hover:bg-[#181818] hover:shadow-xl hover:shadow-[#eab308]/[0.04] hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#facc15] transition-colors duration-300">
                {section.title}
              </h2>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#eab308] group-hover:gap-3 transition-all duration-300">
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
            &iquest;Por qu&eacute; jugar en casinos online desde Ecuador es ch&eacute;vere?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Regulación en marcha",
                text: "El referéndum de 2025 marcó un antes y un después para el juego en Ecuador. Con la regulación avanzando, revisamos que cada casino cuente con licencias internacionales válidas como Curaçao o Malta para que juegues tranquilo y de ley.",
              },
              {
                title: "Ventaja del dólar americano",
                text: "Ecuador usa el USD como moneda oficial, y eso es bacán: no pierdes plata en conversiones de divisa. Depositas y retiras en dólares directamente en los casinos internacionales sin comisiones extra.",
              },
              {
                title: "Mercado en crecimiento rápido",
                text: "Cada vez más ecuatorianos descubren los casinos online. Nuestro equipo revisa cada semana los bonos, promociones y condiciones para que siempre tengas la información más chévere y actualizada del mercado.",
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
