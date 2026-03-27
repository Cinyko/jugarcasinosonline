import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | JugarCasinosOnline.net",
  description: "Términos y condiciones de uso de JugarCasinosOnline.net. Conocé las reglas de uso de nuestro sitio web.",
};

export default function TerminosYCondiciones() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#71717a] mb-10">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-white">Términos y Condiciones</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-8">Términos y Condiciones</h1>
        <p className="text-sm text-[#71717a] mb-12">Última actualización: marzo 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[#d4d4d8] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los términos</h2>
            <p>Al acceder y utilizar JugarCasinosOnline.net aceptás estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices el sitio.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Naturaleza del sitio</h2>
            <p>JugarCasinosOnline.net es un sitio informativo y de reseñas sobre casinos online. No somos un casino ni operamos ningún tipo de juego de azar. Nuestro objetivo es proporcionar información actualizada, reseñas honestas y comparativas de plataformas de casino online disponibles en Latinoamérica.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Edad mínima</h2>
            <p>Este sitio está dirigido exclusivamente a personas mayores de 18 años (o la edad legal para jugar en tu país de residencia). Al usar este sitio, confirmás que cumplís con este requisito de edad.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Enlaces de afiliado</h2>
            <p>Algunos enlaces en nuestro sitio son enlaces de afiliado. Esto significa que si te registrás en un casino a través de nuestros enlaces, podemos recibir una comisión. Esto no afecta el costo para vos ni influye en nuestras reseñas y recomendaciones, que se basan en análisis independientes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Precisión de la información</h2>
            <p>Nos esforzamos por mantener toda la información actualizada y precisa. Sin embargo, los bonos, promociones y condiciones de los casinos pueden cambiar sin previo aviso. Te recomendamos siempre verificar las condiciones directamente en el sitio del casino antes de registrarte.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Responsabilidad</h2>
            <p>JugarCasinosOnline.net no se hace responsable de:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Las acciones, productos o servicios de los casinos enlazados</li>
              <li>Pérdidas económicas derivadas del juego en los casinos reseñados</li>
              <li>Cambios en los bonos o condiciones de los casinos</li>
              <li>Problemas técnicos de las plataformas de casino</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Propiedad intelectual</h2>
            <p>Todo el contenido de este sitio (textos, diseño, logos propios, estructura) es propiedad de JugarCasinosOnline.net y está protegido por derechos de autor. Los logos y marcas de los casinos pertenecen a sus respectivos propietarios.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigencia al ser publicados en esta página.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contacto</h2>
            <p>Para cualquier consulta sobre estos términos, visitá nuestra <Link href="/contacto/" className="text-[#00C853] hover:underline">página de contacto</Link>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
