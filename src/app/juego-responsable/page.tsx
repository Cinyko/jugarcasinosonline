import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Juego Responsable | JugarCasinosOnline.net",
  description: "Información sobre juego responsable. Consejos para jugar de forma segura y recursos de ayuda si el juego se convierte en un problema.",
};

export default function JuegoResponsable() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#71717a] mb-10">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-white">Juego Responsable</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-8">Juego Responsable</h1>

        <div className="rounded-xl bg-[#fbbf24]/5 border border-[#fbbf24]/20 p-6 mb-12">
          <div className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/20 text-[#dc2626] font-black text-sm shrink-0">
              +18
            </span>
            <p className="text-[#d4d4d8] leading-relaxed">
              El juego debe ser una forma de entretenimiento, nunca una fuente de ingresos ni una solución a problemas económicos.
              Si sentís que el juego está afectando tu vida, buscá ayuda profesional.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-[#d4d4d8] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Consejos para jugar de forma responsable</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-white">Establecé un presupuesto:</strong> antes de jugar, decidí cuánto podés permitirte perder y no superes ese límite bajo ninguna circunstancia.</li>
              <li><strong className="text-white">Poné un límite de tiempo:</strong> decidí cuánto tiempo vas a jugar antes de empezar. Usá alarmas o las herramientas de límite que ofrecen los casinos.</li>
              <li><strong className="text-white">No persigas las pérdidas:</strong> si perdiste, no intentes recuperar el dinero apostando más. Eso solo empeora la situación.</li>
              <li><strong className="text-white">No juegues bajo influencia:</strong> el alcohol y otras sustancias afectan tu capacidad de tomar decisiones racionales.</li>
              <li><strong className="text-white">Jugá por diversión:</strong> el juego es entretenimiento. Si dejó de ser divertido, es momento de parar.</li>
              <li><strong className="text-white">No pidas prestado para jugar:</strong> si necesitás dinero prestado para apostar, es una señal clara de que algo no está bien.</li>
              <li><strong className="text-white">Conocé las probabilidades:</strong> la casa siempre tiene ventaja a largo plazo. Ninguna estrategia garantiza ganancias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Señales de que el juego puede ser un problema</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Gastás más de lo que podés permitirte perder</li>
              <li>El juego afecta tus relaciones personales o tu trabajo</li>
              <li>Mentís sobre cuánto jugás o cuánto perdiste</li>
              <li>Sentís ansiedad o irritabilidad cuando no podés jugar</li>
              <li>Intentás recuperar las pérdidas apostando más</li>
              <li>Descuidás responsabilidades importantes por jugar</li>
              <li>Pedís dinero prestado para jugar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Herramientas de los casinos</h2>
            <p>La mayoría de los casinos online ofrecen herramientas para ayudarte a controlar tu juego:</p>
            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li><strong className="text-white">Límites de depósito:</strong> establecé un máximo diario, semanal o mensual</li>
              <li><strong className="text-white">Límites de pérdida:</strong> definí cuánto estás dispuesto a perder</li>
              <li><strong className="text-white">Límites de sesión:</strong> controlá cuánto tiempo jugás</li>
              <li><strong className="text-white">Autoexclusión:</strong> bloqueá tu cuenta temporal o permanentemente</li>
              <li><strong className="text-white">Verificación de realidad:</strong> recordatorios periódicos de cuánto tiempo llevás jugando</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Recursos de ayuda</h2>
            <p>Si vos o alguien que conocés tiene problemas con el juego, estos recursos pueden ayudar:</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-5">
                <h3 className="text-lg font-bold text-white mb-1">Jugadores Anónimos</h3>
                <p className="text-sm text-[#9ca3af]">Organización internacional de ayuda mutua para personas con problemas de juego.</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-5">
                <h3 className="text-lg font-bold text-white mb-1">GamCare</h3>
                <p className="text-sm text-[#9ca3af]">Servicio de asesoramiento y apoyo para problemas de juego (en inglés).</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-5">
                <h3 className="text-lg font-bold text-white mb-1">Línea de ayuda de tu país</h3>
                <p className="text-sm text-[#9ca3af]">Consultá con las autoridades de juego de tu país para encontrar líneas de ayuda locales.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
