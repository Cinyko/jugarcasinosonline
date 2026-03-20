import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casinos Online en Argentina 2026 | JugarCasinosOnline.net",
  description:
    "Guía completa de casinos online en Argentina 2026. Casinos regulados por LOTBA, bonos exclusivos, pagos con Mercado Pago y Rapipago, y opciones crypto para jugadores argentinos.",
};

const sections = [
  {
    title: "Mejores Casinos Online",
    href: "/argentina/mejores-casinos-online/",
    description:
      "Descubrí los casinos online más seguros y confiables para jugadores argentinos, todos con licencia vigente.",
    icon: "🏆",
  },
  {
    title: "Ruleta Online",
    href: "/argentina/ruleta-online/",
    description:
      "Jugá a la ruleta online en Argentina: variantes, estrategias ganadoras y las mejores mesas en vivo.",
    icon: "🎯",
  },
  {
    title: "Blackjack Online",
    href: "/argentina/blackjack-online/",
    description:
      "Dominá el blackjack online. Aprendé estrategia básica, conteo de cartas y dónde jugar en Argentina.",
    icon: "🃏",
  },
  {
    title: "Mejores Slots",
    href: "/argentina/mejores-slots-online/",
    description:
      "Las tragamonedas más populares en Argentina. Jackpots progresivos, alto RTP y giros gratis.",
    icon: "🎰",
  },
  {
    title: "Bonos Sin Depósito",
    href: "/argentina/bonos-sin-deposito/",
    description:
      "Conseguí bonos sin depósito exclusivos para Argentina. Jugá gratis y retirá ganancias reales.",
    icon: "🎁",
  },
  {
    title: "Casinos con Criptomonedas",
    href: "/argentina/casinos-criptomonedas/",
    description:
      "Casinos crypto disponibles en Argentina. Depositá con Bitcoin, Ethereum, USDT y protegé tu dinero de la inflación.",
    icon: "₿",
  },
];

export default function ArgentinaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Glow accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#38bdf8]/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#38bdf8]/[0.03] rounded-full blur-[120px]" />
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
          <span className="text-white font-medium">Argentina</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Argentina flag */}
          <img
            src="https://flagcdn.com/48x36/ar.png"
            srcSet="https://flagcdn.com/96x72/ar.png 2x"
            width={48}
            height={36}
            alt="Bandera de Argentina"
            className="rounded shadow-lg shadow-black/30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Casinos Online en{" "}
            <span className="bg-gradient-to-r from-[#38bdf8] to-[#7dd3fc] bg-clip-text text-transparent">
              Argentina
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
          Argentina avanza rápido en la regulación del juego online. Con LOTBA
          otorgando licencias en Buenos Aires y cada vez más provincias
          habilitando operadores legales, encontrá opciones seguras para jugar.
          Además, gracias a la popularidad de Mercado Pago y las criptomonedas
          como refugio frente a la inflación, depositar y retirar nunca fue tan
          fácil.
        </p>
      </section>

      {/* Section cards grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#38bdf8]/30 hover:bg-[#181818] hover:shadow-xl hover:shadow-[#38bdf8]/[0.04] hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#7dd3fc] transition-colors duration-300">
                {section.title}
              </h2>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#38bdf8] group-hover:gap-3 transition-all duration-300">
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
            ¿Por qué confiar en nuestra guía de casinos para Argentina?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Licencias LOTBA y provinciales",
                text: "Verificamos que cada casino cuente con licencia de LOTBA (Ciudad de Buenos Aires) o habilitación provincial vigente. Elegí siempre operadores regulados para jugar tranquilo.",
              },
              {
                title: "Pagos con Mercado Pago y Rapipago",
                text: "Evaluamos los métodos de pago que realmente usás: Mercado Pago, Rapipago, transferencias bancarias en pesos argentinos y billeteras cripto para proteger tu plata de la inflación.",
              },
              {
                title: "Información actualizada",
                text: "Nuestro equipo revisa cada semana las promociones, bonos y condiciones de los casinos para que siempre tengas la data más reciente del mercado argentino.",
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
