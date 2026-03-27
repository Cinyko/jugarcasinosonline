import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto | JugarCasinosOnline.net",
  description: "Contactá al equipo de JugarCasinosOnline.net. Estamos disponibles para consultas, sugerencias y colaboraciones.",
};

export default function Contacto() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#71717a] mb-10">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-white">Contacto</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Contacto</h1>
        <p className="text-lg text-[#9ca3af] mb-12 max-w-2xl leading-relaxed">
          ¿Tenés alguna pregunta, sugerencia o querés colaborar con nosotros?
          Estamos acá para ayudarte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-8">
            <div className="w-12 h-12 rounded-xl bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-[#00C853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Email</h2>
            <p className="text-[#9ca3af] text-sm mb-4">Para consultas generales, sugerencias de contenido o reportar información incorrecta.</p>
            <p className="text-[#00C853] font-bold">contacto@jugarcasinosonline.net</p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-white/[0.06] p-8">
            <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Colaboraciones</h2>
            <p className="text-[#9ca3af] text-sm mb-4">Interesado en trabajar con nosotros? Casinos, streamers y creadores de contenido son bienvenidos.</p>
            <p className="text-[#f59e0b] font-bold">partners@jugarcasinosonline.net</p>
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.03] border border-white/5 p-6">
          <p className="text-sm text-[#71717a] leading-relaxed">
            Intentamos responder todas las consultas dentro de las 48 horas hábiles.
            Para temas urgentes relacionados con juego responsable, visitá nuestra
            sección de <Link href="/juego-responsable/" className="text-[#00C853] hover:underline">Juego Responsable</Link> donde
            encontrarás recursos de ayuda inmediata.
          </p>
        </div>
      </div>
    </main>
  );
}
