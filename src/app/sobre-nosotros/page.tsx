import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros | JugarCasinosOnline.net",
  description:
    "Conocé al equipo detrás de JugarCasinosOnline.net. Jugadores y analistas con experiencia real en casinos online de Latinoamérica.",
};

export default function SobreNosotros() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#71717a] mb-10">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-white">Sobre Nosotros</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-10">Sobre JugarCasinosOnline.net</h1>

        <div className="space-y-12 text-[#d4d4d8] leading-relaxed">

          {/* Intro */}
          <section>
            <p className="text-lg mb-4">
              Somos un equipo de jugadores, analistas y entusiastas de los casinos online con años de experiencia
              en el mercado latinoamericano. No somos una corporación ni una agencia de marketing — somos gente
              que genuinamente disfruta del juego online y que se cansó de encontrar reseñas genéricas que
              no ayudan a nadie.
            </p>
            <p>
              Arrancamos este proyecto porque cada vez que buscábamos información sobre casinos para LATAM,
              nos topábamos con lo mismo: contenido traducido de Europa que no aplica acá, bonos que no
              funcionan en tu país, y cero información sobre métodos de pago locales. Así que decidimos
              hacerlo nosotros mismos, probando todo de primera mano.
            </p>
          </section>

          {/* Misión */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Nuestra misión</h2>
            <p className="mb-4">
              Ayudar a los jugadores de México, Perú, Argentina, Chile y Ecuador a elegir casinos online
              seguros, con información honesta y actualizada. Punto. No hay letra chica.
            </p>
            <p>
              Sabemos que elegir un casino puede ser abrumador — hay cientos de opciones y no todas son
              confiables. Nuestro trabajo es separar la paja del trigo para que vos solo te preocupes por
              disfrutar del juego. Y si un casino no nos convence, lo decimos. Así de simple.
            </p>
          </section>

          {/* Metodología */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cómo evaluamos los casinos</h2>
            <p className="mb-6">
              No nos limitamos a leer la página de un casino y escribir una reseña. Nuestro proceso de
              evaluación es bastante más intenso que eso (y sí, nos divierte hacerlo):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
                <div className="w-10 h-10 rounded-lg bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center mb-3">
                  <span className="text-[#00C853] font-black text-lg">$</span>
                </div>
                <h3 className="text-white font-bold mb-2">Jugamos con plata real</h3>
                <p className="text-sm text-[#9ca3af]">
                  Nos registramos, depositamos y jugamos como cualquier usuario normal. No hay otra forma
                  de saber cómo funciona realmente un casino.
                </p>
              </div>

              <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center mb-3">
                  <span className="text-[#f59e0b] font-black text-lg">&#128275;</span>
                </div>
                <h3 className="text-white font-bold mb-2">Verificamos licencias</h3>
                <p className="text-sm text-[#9ca3af]">
                  Chequeamos que cada casino tenga licencia vigente, ya sea MINCETUR, SEGOB, Curaçao
                  o la que corresponda. Sin licencia, no entra en nuestra lista.
                </p>
              </div>

              <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
                <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center mb-3">
                  <span className="text-[#dc2626] font-black text-lg">&#9201;</span>
                </div>
                <h3 className="text-white font-bold mb-2">Testeamos retiros</h3>
                <p className="text-sm text-[#9ca3af]">
                  La prueba de fuego de cualquier casino. Pedimos retiros por distintos métodos y medimos
                  cuánto tardan. Porque de nada sirve ganar si no podés cobrar.
                </p>
              </div>

              <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5">
                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-3">
                  <span className="text-[#8b5cf6] font-black text-lg">&#128172;</span>
                </div>
                <h3 className="text-white font-bold mb-2">Evaluamos el soporte</h3>
                <p className="text-sm text-[#9ca3af]">
                  Contactamos al soporte en distintos horarios (sí, a las 3am también) para ver si realmente
                  responden y si la ayuda sirve de algo.
                </p>
              </div>
            </div>
          </section>

          {/* Criterios */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Nuestros criterios de evaluación</h2>
            <p className="mb-5">Cada casino pasa por un análisis basado en estos puntos clave:</p>
            <div className="space-y-3">
              {[
                { label: "Licencia y seguridad", desc: "Tipo de licencia, cifrado SSL, historial de la empresa." },
                { label: "Bonos y promociones", desc: "Monto real del bono, requisitos de apuesta (rollover), y si las condiciones son razonables." },
                { label: "Métodos de pago locales", desc: "Si acepta transferencias bancarias, Mercado Pago, SPEI, PSE y otros métodos que usamos en LATAM." },
                { label: "Catálogo de juegos", desc: "Cantidad y calidad de juegos, proveedores (Evolution, Pragmatic, etc.), y opciones en vivo." },
                { label: "Soporte al cliente", desc: "Disponibilidad, idioma español, tiempo de respuesta y calidad de la ayuda." },
                { label: "Velocidad de retiro", desc: "Cuánto tardan realmente los retiros por cada método, no lo que dicen en su web." },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start rounded-lg bg-white/[0.02] border border-white/[0.04] px-5 py-4">
                  <span className="text-[#00C853] font-bold mt-0.5 shrink-0">&#10003;</span>
                  <div>
                    <span className="text-white font-bold">{item.label}:</span>{" "}
                    <span className="text-[#9ca3af]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Independencia editorial */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Independencia editorial</h2>
            <p className="mb-4">
              Acá viene la parte que a mucha gente le genera dudas, y con razón. Sí, este sitio genera
              ingresos a través de enlaces de afiliado. Cuando te registrás en un casino desde nuestro link,
              podemos recibir una comisión. Eso es transparente y no vamos a esconderlo.
            </p>
            <p className="mb-4">
              Pero ojo: nuestras reseñas no se escriben según quién paga más. Si Betsson es nuestro #1
              recomendado es porque después de probarlo extensivamente en cada país, es el que mejor
              combina licencia, variedad de juegos, métodos de pago locales y velocidad de retiro.
              No porque nos pague más que otro (de hecho, hay casinos que nos ofrecen mejores comisiones
              y están más abajo en el ranking).
            </p>
            <p>
              Si un casino empeora su servicio, baja en nuestro ranking. Si uno nuevo demuestra ser mejor,
              sube. Así de simple. Nuestra credibilidad es lo único que tenemos, y no la vamos a vender
              por una comisión más alta.
            </p>
          </section>

          {/* Disclaimer de afiliados */}
          <section>
            <div className="rounded-xl bg-[#f59e0b]/5 border border-[#f59e0b]/20 p-6">
              <h2 className="text-lg font-bold text-[#f59e0b] mb-3">Disclaimer de afiliados</h2>
              <p className="text-[#d4d4d8]">
                Este sitio contiene enlaces de afiliado. Cuando te registrás a través de nuestros enlaces,
                podemos recibir una comisión sin costo adicional para vos. Esto nos ayuda a mantener la
                web actualizada y gratuita. Nuestras recomendaciones se basan en evaluaciones reales e
                independientes — los acuerdos comerciales no influyen en el contenido editorial.
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
            <p className="mb-4">
              ¿Tenés alguna pregunta, querés sugerir un casino para que lo revisemos, o encontraste
              información desactualizada? Escribinos:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 flex-1">
                <p className="text-sm text-[#71717a] mb-1">Consultas generales</p>
                <p className="text-[#00C853] font-bold">contacto@jugarcasinosonline.net</p>
              </div>
              <div className="rounded-xl bg-[#141414] border border-white/[0.06] p-5 flex-1">
                <p className="text-sm text-[#71717a] mb-1">Colaboraciones y partnerships</p>
                <p className="text-[#f59e0b] font-bold">partners@jugarcasinosonline.net</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#71717a]">
              También podés visitar nuestra <Link href="/contacto/" className="text-[#00C853] hover:underline">página de contacto</Link> para
              más información.
            </p>
          </section>

          {/* Juego responsable */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Juego responsable</h2>
            <p className="mb-4">
              Nos tomamos esto en serio. El juego online tiene que ser entretenimiento, no una fuente de
              estrés ni de problemas financieros. Si sentís que el juego está dejando de ser divertido
              o está afectando tu vida, pará y buscá ayuda.
            </p>
            <p>
              Tenemos una sección completa dedicada al{" "}
              <Link href="/juego-responsable/" className="text-[#00C853] hover:underline font-bold">juego responsable</Link>{" "}
              con consejos prácticos, señales de alerta y recursos de ayuda. Te recomendamos leerla.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
