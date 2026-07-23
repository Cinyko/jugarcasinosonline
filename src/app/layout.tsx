import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jugarcasinosonline.net"),
  alternates: {
    canonical: "./",
  },
  title: "JugarCasinosOnline.net | Mejores Casinos Online en Latinoamérica 2026",
  description:
    "Guía completa de casinos online en Latinoamérica. Reseñas, bonos sin depósito, ruleta, blackjack, slots y más para México, Perú, Argentina, Chile y Ecuador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HM0D0VLG54"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HM0D0VLG54');
          `}
        </Script>
        <AgeGate />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
