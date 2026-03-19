import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casinos Online en Perú 2026 | JugarCasinosOnline.net",
  description:
    "Guía completa de casinos online en Perú 2026. Descubre los mejores casinos, bonos sin depósito, ruleta, blackjack, slots y casinos con criptomonedas para jugadores peruanos.",
};

const sections = [
  {
    title: "Mejores Casinos Online",
    href: "/peru/mejores-casinos-online/",
    description:
      "Ranking actualizado con los casinos online más confiables y seguros para jugadores peruanos.",
    icon: "🏆",
  },
  {
    title: "Ruleta Online",
    href: "/peru/ruleta-online/",
    description:
      "Todo sobre la ruleta online en Perú: estrategias, variantes y las mejores mesas en vivo.",
    icon: "🎯",
  },
  {
    title: "Blackjack Online",
    href: "/peru/blackjack-online/",
    description:
      "Aprende a jugar blackjack online como un profesional. Guías, tips y los mejores sitios.",
    icon: "🃏",
  },
  {
    title: "Mejores Slots",
    href: "/peru/mejores-slots-online/",
    description:
      "Las tragamonedas online más populares en Perú. Jackpots, RTP alto y giros gratis.",
    icon: "🎰",
  },
  {
    title: "Bonos Sin Depósito",
    href: "/peru/bonos-sin-deposito/",
    description:
      "Bonos exclusivos sin depósito para jugadores peruanos. Juega gratis y gana dinero real.",
    icon: "🎁",
  },
  {
    title: "Casinos con Criptomonedas",
    href: "/peru/casinos-criptomonedas/",
    description:
      "Los mejores casinos crypto en Perú. Depósitos rápidos con Bitcoin, USDT y más.",
    icon: "₿",
  },
];

export default function PeruPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Glow accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#dc2626]/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#dc2626]/[0.03] rounded-full blur-[120px]" />
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
          <span className="text-white font-medium">Perú</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Peru flag */}
          <img
            src="https://flagcdn.com/48x36/pe.png"
            srcSet="https://flagcdn.com/96x72/pe.png 2x"
            width={48}
            height={36}
            alt="Bandera de Perú"
            className="rounded shadow-lg shadow-black/30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Casinos Online en{" "}
            <span className="bg-gradient-to-r from-[#dc2626] to-[#f87171] bg-clip-text text-transparent">
              Perú
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
          El mercado de casinos online en Perú está en pleno crecimiento.
          Acá te traemos toda la información que necesitas para elegir dónde
          jugar con seguridad: desde los casinos más confiables hasta los
          mejores bonos y juegos disponibles para jugadores peruanos.
        </p>
      </section>

      {/* Section cards grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#dc2626]/30 hover:bg-[#181818] hover:shadow-xl hover:shadow-[#dc2626]/[0.04] hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#f87171] transition-colors duration-300">
                {section.title}
              </h2>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#dc2626] group-hover:gap-3 transition-all duration-300">
                Ver más
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
            ¿Por qué confiar en nuestra guía de casinos para Perú?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Reseñas verificadas",
                text: "Probamos cada casino personalmente. Evaluamos métodos de pago locales como Yape, Plin y transferencias bancarias peruanas.",
              },
              {
                title: "Información actualizada",
                text: "Nuestro equipo revisa constantemente las ofertas y condiciones de cada operador para que siempre tengas datos al día.",
              },
              {
                title: "Enfoque en Perú",
                text: "Nos enfocamos en lo que realmente importa al jugador peruano: soles como moneda, soporte en español y licencias confiables.",
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
