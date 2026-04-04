"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_NAME = "age_verified";
const COOKIE_DAYS = 30;

function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!getCookie(COOKIE_NAME)) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const handleAccept = () => {
    setCookie(COOKIE_NAME, "true", COOKIE_DAYS);
    setShow(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-white/10 bg-[#111111]/95 backdrop-blur-md shadow-[0_-4px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#dc2626]/10 border border-[#dc2626]/25 text-[#dc2626] font-black text-sm shrink-0">
            +18
          </span>
          <p className="text-sm text-[#9ca3af] leading-relaxed">
            Este sitio está dirigido a mayores de 18 años. Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, confirmas que eres mayor de 18 años y aceptas nuestra{" "}
            <Link href="/politica-de-privacidad/" className="text-white underline underline-offset-2 hover:text-[#00C853] transition-colors">
              política de cookies
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#00C853] font-bold text-white text-sm transition-all duration-200 hover:bg-[#00E676] cursor-pointer whitespace-nowrap"
          >
            Aceptar y continuar
          </button>
          <Link
            href="/politica-de-privacidad/"
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-center font-bold text-[#9ca3af] text-sm transition-colors hover:text-white whitespace-nowrap"
          >
            Más información
          </Link>
        </div>
      </div>
    </div>
  );
}
