import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | JugarCasinosOnline.net",
  description: "Política de privacidad de JugarCasinosOnline.net. Conocé cómo recopilamos, usamos y protegemos tu información personal.",
};

export default function PoliticaDePrivacidad() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#71717a] mb-10">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-white">Política de Privacidad</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-8">Política de Privacidad</h1>
        <p className="text-sm text-[#71717a] mb-12">Última actualización: marzo 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[#d4d4d8] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Información que recopilamos</h2>
            <p>En JugarCasinosOnline.net recopilamos información mínima para mejorar tu experiencia de navegación. Esto puede incluir:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Datos de navegación anónimos (páginas visitadas, tiempo en el sitio, tipo de dispositivo)</li>
              <li>Cookies técnicas necesarias para el funcionamiento del sitio</li>
              <li>Cookies de análisis (Google Analytics) para entender cómo se usa el sitio</li>
            </ul>
            <p className="mt-3">No recopilamos datos personales como nombre, email o información financiera, a menos que nos los proporciones voluntariamente a través del formulario de contacto.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la información</h2>
            <p>La información recopilada se utiliza exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Mejorar el contenido y la experiencia de usuario del sitio</li>
              <li>Generar estadísticas agregadas de tráfico</li>
              <li>Responder consultas enviadas por el formulario de contacto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Enlaces de afiliados</h2>
            <p>Este sitio contiene enlaces de afiliado a casinos online. Cuando hacés clic en estos enlaces y te registrás en un casino, podemos recibir una comisión. Esto no tiene costo adicional para vos y nos permite mantener el sitio actualizado con contenido gratuito.</p>
            <p className="mt-3">Los enlaces de afiliado están claramente marcados con los atributos <code className="text-[#f59e0b] bg-white/5 px-1.5 py-0.5 rounded">rel=&quot;sponsored&quot;</code> en el código fuente.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
            <p>Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio</li>
              <li><strong className="text-white">Cookies de análisis:</strong> nos ayudan a entender cómo los visitantes interactúan con el sitio</li>
              <li><strong className="text-white">Cookies de afiliados:</strong> permiten rastrear las referencias a los casinos online</li>
            </ul>
            <p className="mt-3">Podés configurar tu navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Terceros</h2>
            <p>No vendemos, intercambiamos ni transferimos tu información personal a terceros. Los únicos servicios de terceros que utilizamos son:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Google Analytics (análisis de tráfico)</li>
              <li>Vercel (hosting del sitio)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Cambios a esta política</h2>
            <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta misma página con la fecha de actualización correspondiente.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contacto</h2>
            <p>Si tenés preguntas sobre nuestra política de privacidad, podés contactarnos a través de nuestra <Link href="/contacto/" className="text-[#00C853] hover:underline">página de contacto</Link>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
