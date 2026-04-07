import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-0.5 font-extrabold text-xl mb-5">
              <span className="text-white">JugarCasinosOnline</span>
              <span className="text-primary">.net</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Tu guía confiable para encontrar los mejores casinos online en Latinoamérica.
              Reseñas honestas, bonos verificados y comparativas actualizadas.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Legal
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link href="/politica-de-privacidad" className="text-sm text-text-muted hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="text-sm text-text-muted hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/juego-responsable" className="text-sm text-text-muted hover:text-white transition-colors">
                  Juego Responsable
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-text-muted hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-sm text-text-muted hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Contacto
            </h3>
            <p className="text-sm text-text-muted mb-5">
              ¿Tienes preguntas o sugerencias? Contáctanos:
            </p>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contacto@jugarcasinosonline.net" className="flex items-center gap-3 text-sm text-text-muted hover:text-white transition-colors">
                  <span className="text-base">&#9993;</span>
                  contacto@jugarcasinosonline.net
                </a>
              </li>
              <li>
                <a href="tel:+34644293358" className="flex items-center gap-3 text-sm text-text-muted hover:text-white transition-colors">
                  <span className="text-base">&#128241;</span>
                  +34 644 29 33 58
                </a>
              </li>
              <li>
                <a href="https://jugarcasinosonline.net" className="flex items-center gap-3 text-sm text-text-muted hover:text-white transition-colors">
                  <span className="text-base">&#127760;</span>
                  jugarcasinosonline.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-6 mb-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary font-black text-sm shrink-0">
                +18
              </span>
              <div className="text-[13px] text-text-muted leading-relaxed">
                <p className="font-bold text-text-secondary mb-1.5">Juego Responsable</p>
                <p>
                  Este sitio está dirigido exclusivamente a personas mayores de 18 años.
                  El juego puede ser adictivo, jugá con responsabilidad. Establecé límites de tiempo y dinero
                  antes de jugar. Si sentís que el juego se está convirtiendo en un problema,
                  buscá ayuda profesional. Los bonos y promociones están sujetos a términos y condiciones
                  de cada casino.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-text-muted">
            &copy; 2026 JugarCasinosOnline.net — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
