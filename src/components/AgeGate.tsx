"use client";

import { useState, useEffect } from "react";

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

  const handleConfirm = () => {
    setCookie(COOKIE_NAME, "true", COOKIE_DAYS);
    setShow(false);
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 25px 80px rgba(0,0,0,0.7)" }}
      >
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] p-8 sm:p-10 text-center">
          {/* Logo */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-0.5 font-extrabold text-xl">
              <span className="text-white">JugarCasinos</span>
              <span className="text-white">Online</span>
              <span className="text-[#dc2626]">.net</span>
            </span>
          </div>

          {/* +18 icon */}
          <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-[#dc2626]/10 border-2 border-[#dc2626]/30 flex items-center justify-center">
            <span className="text-[#dc2626] font-black text-3xl">+18</span>
          </div>

          {/* Text */}
          <p className="text-[#d4d4d8] text-base leading-relaxed mb-8">
            Este sitio contiene información sobre casinos online y está dirigido exclusivamente a mayores de 18 años.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleConfirm}
              className="w-full py-3.5 rounded-xl bg-[#00C853] font-extrabold text-white text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#00E676] hover:shadow-[0_0_30px_rgba(0,200,83,0.35)] cursor-pointer"
            >
              Soy mayor de 18 años
            </button>
            <button
              onClick={handleReject}
              className="w-full py-3.5 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/30 font-extrabold text-[#dc2626] text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#dc2626]/20 cursor-pointer"
            >
              Soy menor de edad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
