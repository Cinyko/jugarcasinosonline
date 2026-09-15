"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";
import { streamers } from "@/data/streamers";

const streamerLinks = streamers.filter((s) => s.hasArticle);

/**
 * Los paneles se renderizan SIEMPRE en el HTML y se ocultan por CSS.
 * Montarlos con {isOpen && ...} dejaba los enlaces fuera del HTML del servidor:
 * Googlebot ejecuta JS pero nunca hace hover ni clic, así que toda la
 * navegación (20 páginas de país + 9 de streamers) era invisible para el rastreo.
 */
const PANEL =
  "opacity-0 invisible -translate-y-1 pointer-events-none transition-all duration-200 " +
  "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto " +
  "group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto";

const TRIGGER =
  "flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5";

const NAV_LINK =
  "px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5";

const PANEL_INNER =
  "rounded-xl bg-surface-light border border-surface-border-light shadow-2xl shadow-black/50 py-2 overflow-hidden";

function Chevron({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Flag({ code, name, small = false }: { code: string; name: string; small?: boolean }) {
  return (
    <div className={`relative rounded-sm overflow-hidden shrink-0 shadow-sm ${small ? "w-6 h-4" : "w-7 h-5"}`}>
      <Image
        src={`https://flagcdn.com/${code}.svg`}
        alt={`Bandera de ${name}`}
        fill
        className="object-cover"
        sizes={small ? "24px" : "28px"}
      />
    </div>
  );
}

/** Menú de escritorio con las 5 variantes de país de una sección. */
function CountryMenu({
  label,
  suffix,
  itemPrefix,
}: {
  label: string;
  suffix: string;
  itemPrefix?: string;
}) {
  return (
    <div className="relative group">
      <button className={TRIGGER} aria-haspopup="true">
        {label}
        <Chevron className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>

      <div className={`absolute top-full left-0 pt-2 w-60 ${PANEL}`}>
        <div className={PANEL_INNER}>
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/${country.slug}/${suffix}`}
              className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary hover:text-white hover:bg-white/5 transition-all"
            >
              <Flag code={country.flagCode} name={country.name} />
              <span className="font-medium">
                {itemPrefix ? `${itemPrefix} ${country.name}` : country.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Igual que en escritorio: el submenú vive siempre en el HTML, solo cambia el alto.
  const sub = (menu: string) =>
    `overflow-hidden transition-all duration-200 ${
      mobileSubmenu === menu ? "max-h-[36rem] visible" : "max-h-0 invisible"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 font-extrabold text-lg sm:text-xl tracking-tight">
            <span className="text-white">JugarCasinos</span>
            <span className="text-white">Online</span>
            <span className="text-primary">.net</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className={NAV_LINK}>
              Inicio
            </Link>

            <CountryMenu label="Países" suffix="mejores-casinos-online" />
            <CountryMenu label="Ruleta" suffix="ruleta-online" itemPrefix="Ruleta en" />
            <CountryMenu label="Blackjack" suffix="blackjack-online" itemPrefix="Blackjack en" />
            <CountryMenu label="Cripto" suffix="casinos-criptomonedas" itemPrefix="Cripto en" />

            {/* Streamers Dropdown */}
            <div className="relative group">
              <button className={TRIGGER} aria-haspopup="true">
                Streamers
                <Chevron className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              <div className={`absolute top-full left-0 pt-2 w-64 ${PANEL}`}>
                <div className={`${PANEL_INNER} max-h-[70vh] overflow-y-auto`}>
                  {streamerLinks.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/streamers/casino-${s.slug}`}
                      className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/5 transition-all"
                    >
                      <span className="font-medium">{s.name}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717a]">{s.country}</span>
                    </Link>
                  ))}
                  <Link
                    href="/streamers"
                    className="block px-4 py-2.5 mt-1 text-sm font-bold text-primary hover:bg-white/5 transition-all border-t border-surface-border-light"
                  >
                    Ver todos →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/sobre-nosotros" className={NAV_LINK}>
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className={NAV_LINK}>
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-white/5 bg-[#0a0a0a]/98 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? "max-h-[calc(100vh-4rem)] overflow-y-auto visible" : "max-h-0 overflow-hidden invisible"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          <Link
            href="/"
            className="block py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={closeMenu}
          >
            Inicio
          </Link>

          {/* Mobile Países */}
          <button
            className="flex w-full items-center justify-between py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={() => toggleMobileSubmenu("paises")}
            aria-expanded={mobileSubmenu === "paises"}
          >
            Países
            <Chevron
              className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === "paises" ? "rotate-180" : ""}`}
            />
          </button>

          <div className={sub("paises")}>
            <div className="pl-3 space-y-1 border-l-2 border-primary/30 ml-3">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/${country.slug}/mejores-casinos-online`}
                  className="flex items-center gap-3 py-2.5 px-3 text-sm text-text-secondary hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  <Flag code={country.flagCode} name={country.name} small />
                  {country.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Ruleta */}
          <button
            className="flex w-full items-center justify-between py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={() => toggleMobileSubmenu("ruleta")}
            aria-expanded={mobileSubmenu === "ruleta"}
          >
            Ruleta
            <Chevron
              className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === "ruleta" ? "rotate-180" : ""}`}
            />
          </button>

          <div className={sub("ruleta")}>
            <div className="pl-3 space-y-1 border-l-2 border-[#dc2626]/30 ml-3">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/${country.slug}/ruleta-online`}
                  className="flex items-center gap-3 py-2.5 px-3 text-sm text-text-secondary hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  <Flag code={country.flagCode} name={country.name} small />
                  Ruleta en {country.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Blackjack */}
          <button
            className="flex w-full items-center justify-between py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={() => toggleMobileSubmenu("blackjack")}
            aria-expanded={mobileSubmenu === "blackjack"}
          >
            Blackjack
            <Chevron
              className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === "blackjack" ? "rotate-180" : ""}`}
            />
          </button>

          <div className={sub("blackjack")}>
            <div className="pl-3 space-y-1 border-l-2 border-[#22c55e]/30 ml-3">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/${country.slug}/blackjack-online`}
                  className="flex items-center gap-3 py-2.5 px-3 text-sm text-text-secondary hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  <Flag code={country.flagCode} name={country.name} small />
                  Blackjack en {country.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Cripto */}
          <button
            className="flex w-full items-center justify-between py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={() => toggleMobileSubmenu("cripto")}
            aria-expanded={mobileSubmenu === "cripto"}
          >
            Cripto
            <Chevron
              className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === "cripto" ? "rotate-180" : ""}`}
            />
          </button>

          <div className={sub("cripto")}>
            <div className="pl-3 space-y-1 border-l-2 border-[#f59e0b]/30 ml-3">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/${country.slug}/casinos-criptomonedas`}
                  className="flex items-center gap-3 py-2.5 px-3 text-sm text-text-secondary hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  <Flag code={country.flagCode} name={country.name} small />
                  Cripto en {country.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Streamers */}
          <button
            className="flex w-full items-center justify-between py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={() => toggleMobileSubmenu("streamers")}
            aria-expanded={mobileSubmenu === "streamers"}
          >
            Streamers
            <Chevron
              className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === "streamers" ? "rotate-180" : ""}`}
            />
          </button>

          <div className={sub("streamers")}>
            <div className="pl-3 space-y-1 border-l-2 border-purple/30 ml-3">
              {streamerLinks.map((s) => (
                <Link
                  key={s.slug}
                  href={`/streamers/casino-${s.slug}`}
                  className="flex items-center justify-between gap-3 py-2.5 px-3 text-sm text-text-secondary hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  <span>{s.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717a]">{s.country}</span>
                </Link>
              ))}
              <Link href="/streamers" className="block py-2.5 px-3 text-sm font-bold text-primary" onClick={closeMenu}>
                Ver todos →
              </Link>
            </div>
          </div>

          <Link
            href="/sobre-nosotros"
            className="block py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={closeMenu}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contacto"
            className="block py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
