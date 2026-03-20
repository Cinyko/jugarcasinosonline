import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casinos Online en México 2026 | JugarCasinosOnline.net",
  description:
    "Guía definitiva de casinos online en México 2026. Encuentra los casinos regulados por SEGOB, bonos exclusivos, ruleta, blackjack, slots y casinos crypto para jugadores mexicanos.",
};

const sections = [
  {
    title: "Mejores Casinos Online",
    href: "/mexico/mejores-casinos-online/",
    description:
      "Los casinos online más seguros y confiables para jugadores mexicanos, todos con licencia vigente.",
    icon: "🏆",
  },
  {
    title: "Ruleta Online",
    href: "/mexico/ruleta-online/",
    description:
      "Juega ruleta online en México: variantes, estrategias ganadoras y las mejores mesas en vivo.",
    icon: "🎯",
  },
  {
    title: "Blackjack Online",
    href: "/mexico/blackjack-online/",
    description:
      "Domina el blackjack online. Aprende estrategia básica, conteo de cartas y dónde jugar en México.",
    icon: "🃏",
  },
  {
    title: "Mejores Slots",
    href: "/mexico/mejores-slots-online/",
    description:
      "Las tragamonedas más populares en México. Jackpots progresivos, alto RTP y giros gratis.",
    icon: "🎰",
  },
  {
    title: "Bonos Sin Depósito",
    href: "/mexico/bonos-sin-deposito/",
    description:
      "Consigue bonos sin depósito exclusivos para México. Juega gratis y retira ganancias reales.",
    icon: "🎁",
  },
  {
    title: "Casinos con Criptomonedas",
    href: "/mexico/casinos-criptomonedas/",
    description:
      "Casinos crypto disponibles en México. Deposita con Bitcoin, Ethereum, USDT y más de forma segura.",
    icon: "₿",
  },
];

export default function MexicoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Glow accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#16a34a]/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#16a34a]/[0.03] rounded-full blur-[120px]" />
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
          <span className="text-white font-medium">México</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Mexico flag */}
          <img
            src="https://flagcdn.com/48x36/mx.png"
            srcSet="https://flagcdn.com/96x72/mx.png 2x"
            width={48}
            height={36}
            alt="Bandera de México"
            className="rounded shadow-lg shadow-black/30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Casinos Online en{" "}
            <span className="bg-gradient-to-r from-[#16a34a] to-[#4ade80] bg-clip-text text-transparent">
              México
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
          México se ha convertido en uno de los mercados de juego online más
          grandes de Latinoamérica. Con la regulación de SEGOB y cada vez más
          operadores con licencia, tienes opciones seguras y variadas para
          jugar. Aquí te ayudamos a encontrar los mejores casinos, bonos y
          juegos disponibles para ti.
        </p>
      </section>

      {/* Section cards grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#16a34a]/30 hover:bg-[#181818] hover:shadow-xl hover:shadow-[#16a34a]/[0.04] hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#4ade80] transition-colors duration-300">
                {section.title}
              </h2>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16a34a] group-hover:gap-3 transition-all duration-300">
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
            ¿Por qué confiar en nuestra guía de casinos para México?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Operadores regulados",
                text: "Verificamos que cada casino cuente con permiso de SEGOB o licencia internacional reconocida. Tu seguridad es lo primero.",
              },
              {
                title: "Pagos en pesos mexicanos",
                text: "Evaluamos los métodos de pago que realmente usas: SPEI, OXXO, tarjetas bancarias mexicanas y transferencias locales.",
              },
              {
                title: "Contenido actualizado",
                text: "Nuestro equipo revisa cada semana las promociones, bonos y condiciones de los casinos para que siempre tengas la información más reciente.",
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
