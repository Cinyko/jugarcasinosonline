"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

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
            <Link href="/" className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Inicio
            </Link>

            {/* Country Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCountryOpen(true)}
              onMouseLeave={() => setIsCountryOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Países
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isCountryOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCountryOpen && (
                <div className="absolute top-full left-0 pt-2 w-60">
                <div className="rounded-xl bg-surface-light border border-surface-border-light shadow-2xl shadow-black/50 py-2 overflow-hidden">
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/${country.slug}/mejores-casinos-online/`}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary hover:text-white hover:bg-white/5 transition-all"
                    >
                      <div className="relative w-7 h-5 rounded-sm overflow-hidden shrink-0 shadow-sm">
                        <Image
                          src={`https://flagcdn.com/${country.flagCode}.svg`}
                          alt={`Bandera de ${country.name}`}
                          fill
                          className="object-cover"
                          sizes="28px"
                        />
                      </div>
                      <span className="font-medium">{country.name}</span>
                    </Link>
                  ))}
                </div>
                </div>
              )}
            </div>

            <Link href="#streamers" className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Streamers
            </Link>
            <Link href="#comparativas" className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Comparativas
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
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
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]/98 backdrop-blur-md">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>

            <button
              className="flex w-full items-center justify-between py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsCountryOpen(!isCountryOpen)}
            >
              Países
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isCountryOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCountryOpen && (
              <div className="pl-3 space-y-1 border-l-2 border-primary/30 ml-3">
                {countries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/${country.slug}/mejores-casinos-online/`}
                    className="flex items-center gap-3 py-2.5 px-3 text-sm text-text-secondary hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="relative w-6 h-4 rounded-sm overflow-hidden shrink-0">
                      <Image
                        src={`https://flagcdn.com/${country.flagCode}.svg`}
                        alt={`Bandera de ${country.name}`}
                        fill
                        className="object-cover"
                        sizes="24px"
                      />
                    </div>
                    {country.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="#streamers"
              className="block py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Streamers
            </Link>
            <Link
              href="#comparativas"
              className="block py-3 px-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Comparativas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
