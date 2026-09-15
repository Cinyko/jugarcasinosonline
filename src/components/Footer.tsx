import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";
import { streamers } from "@/data/streamers";
import { LAST_UPDATED_YEAR } from "@/data/config";

const streamerLinks = streamers.filter((s) => s.hasArticle);

/* Solo estas cuatro secciones existen como página. No añadir aquí nada
   de countrySections que no tenga su carpeta en src/app/[pais]/. */
const sections = [
  { suffix: "mejores-casinos-online", label: "Mejores casinos online" },
  { suffix: "ruleta-online", label: "Ruleta online" },
  { suffix: "blackjack-online", label: "Blackjack online" },
  { suffix: "casinos-criptomonedas", label: "Casinos con cripto" },
];

const legal = [
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/juego-responsable", label: "Juego Responsable" },
  { href: "/politica-de-privacidad", label: "Política de Privacidad" },
  { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
];

const COL_TITLE = "text-xs font-bold text-white uppercase tracking-widest mb-5";
const FOOT_LINK = "text-sm text-text-muted hover:text-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand */}
        <div className="max-w-2xl mb-14">
          <Link href="/" className="inline-flex items-center gap-0.5 font-extrabold text-xl mb-5">
            <span className="text-white">JugarCasinosOnline</span>
            <span className="text-primary">.net</span>
          </Link>
          <p className="text-sm text-text-muted leading-relaxed">
            Tu guía confiable para encontrar los mejores casinos online en Latinoamérica.
            Reseñas honestas, bonos verificados y comparativas actualizadas.
          </p>
        </div>

        {/* Guías por país */}
        <div className="pt-10 border-t border-white/5">
          <h2 className={COL_TITLE}>Guías por país</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-9">
            {countries.map((country) => (
              <div key={country.slug}>
                <Link href={`/${country.slug}`} className="flex items-center gap-2.5 mb-3.5 group">
                  <div className="relative w-6 h-4 rounded-sm overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src={`https://flagcdn.com/${country.flagCode}.svg`}
                      alt={`Bandera de ${country.name}`}
                      fill
                      className="object-cover"
                      sizes="24px"
                    />
                  </div>
                  <span className="text-sm font-bold text-text-secondary group-hover:text-white transition-colors">
                    {country.name}
                  </span>
                </Link>
                <ul
                  className="space-y-2.5 pl-1 border-l-2"
                  style={{ borderColor: `${country.color}59` }}
                >
                  {sections.map((section) => (
                    <li key={section.suffix} className="pl-3">
                      <Link href={`/${country.slug}/${section.suffix}`} className={FOOT_LINK}>
                        {section.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Streamers · Legal · Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14 pt-10 border-t border-white/5">
          <div>
            <h2 className={COL_TITLE}>Casinos de streamers</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {streamerLinks.map((s) => (
                <li key={s.slug}>
                  <Link href={`/streamers/casino-${s.slug}`} className={FOOT_LINK}>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/streamers" className="text-sm font-bold text-primary hover:text-white transition-colors">
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={COL_TITLE}>Legal</h2>
            <ul className="space-y-3.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={FOOT_LINK}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={COL_TITLE}>Contacto</h2>
            <p className="text-sm text-text-muted mb-5">
              ¿Tienes preguntas o sugerencias? Contáctanos:
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contacto@jugarcasinosonline.net"
                  className="flex items-center gap-3 text-sm text-text-muted hover:text-white transition-colors"
                >
                  <span className="text-base">&#9993;</span>
                  contacto@jugarcasinosonline.net
                </a>
              </li>
              <li>
                <Link href="/" className="flex items-center gap-3 text-sm text-text-muted hover:text-white transition-colors">
                  <span className="text-base">&#127760;</span>
                  www.jugarcasinosonline.net
                </Link>
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
                  El juego puede ser adictivo; juega con responsabilidad. Establece límites de tiempo y dinero
                  antes de jugar. Si sientes que el juego se está convirtiendo en un problema,
                  busca ayuda profesional. Los bonos y promociones están sujetos a términos y condiciones
                  de cada casino.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-text-muted">
            &copy; {LAST_UPDATED_YEAR} JugarCasinosOnline.net — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
