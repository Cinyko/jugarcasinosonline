import Link from "next/link";
import { countries } from "@/data/countries";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-surface-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-1 font-bold text-xl mb-4">
              <span className="text-text">JugarCasinosOnline</span>
              <span className="text-primary">.net</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              Tu guía confiable para encontrar los mejores casinos online en Latinoamérica.
              Reseñas honestas, bonos verificados y comparativas actualizadas.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/politica-de-privacidad/" className="text-sm text-text-muted hover:text-text transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones/" className="text-sm text-text-muted hover:text-text transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/juego-responsable/" className="text-sm text-text-muted hover:text-text transition-colors">
                  Juego Responsable
                </Link>
              </li>
              <li>
                <Link href="/contacto/" className="text-sm text-text-muted hover:text-text transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Country Links */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Países
            </h3>
            <ul className="space-y-3">
              {countries.map((country) => (
                <li key={country.slug}>
                  <Link
                    href={`/${country.slug}/mejores-casinos-online/`}
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
                  >
                    <span>{country.flag}</span>
                    Casinos en {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-surface-border">
          <div className="rounded-lg bg-surface p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0">
                +18
              </span>
              <div className="text-xs text-text-muted leading-relaxed">
                <p className="font-semibold text-text mb-1">Juego Responsable</p>
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
