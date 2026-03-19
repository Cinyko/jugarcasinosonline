"use client";

import { useState } from "react";
import Link from "next/link";
import { countries } from "@/data/countries";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary border-b border-surface-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-bold text-lg sm:text-xl">
            <span className="text-text">JugarCasinosOnline</span>
            <span className="text-primary">.net</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-text-muted hover:text-text transition-colors">
              Inicio
            </Link>

            {/* Country Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCountryOpen(true)}
              onMouseLeave={() => setIsCountryOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-text transition-colors">
                Países
                <svg
                  className={`w-4 h-4 transition-transform ${isCountryOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCountryOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-surface border border-surface-border shadow-xl py-2">
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/${country.slug}/mejores-casinos-online/`}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-muted hover:text-text hover:bg-surface-light transition-colors"
                    >
                      <span className="text-lg">{country.flag}</span>
                      {country.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#streamers" className="text-sm font-medium text-text-muted hover:text-text transition-colors">
              Streamers
            </Link>
            <Link href="#comparativas" className="text-sm font-medium text-text-muted hover:text-text transition-colors">
              Comparativas
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
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
        <div className="md:hidden border-t border-surface-border bg-secondary">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block py-2.5 text-sm font-medium text-text-muted hover:text-text transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>

            {/* Countries accordion */}
            <button
              className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-text-muted hover:text-text transition-colors"
              onClick={() => setIsCountryOpen(!isCountryOpen)}
            >
              Países
              <svg
                className={`w-4 h-4 transition-transform ${isCountryOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCountryOpen && (
              <div className="pl-4 space-y-1">
                {countries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/${country.slug}/mejores-casinos-online/`}
                    className="flex items-center gap-3 py-2 text-sm text-text-muted hover:text-text transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">{country.flag}</span>
                    {country.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="#streamers"
              className="block py-2.5 text-sm font-medium text-text-muted hover:text-text transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Streamers
            </Link>
            <Link
              href="#comparativas"
              className="block py-2.5 text-sm font-medium text-text-muted hover:text-text transition-colors"
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
