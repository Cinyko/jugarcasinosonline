import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Redirecciones de afiliado: no aportan contenido indexable y
      // se comen presupuesto de rastreo siguiendo 307s a los trackers.
      disallow: "/go/",
    },
    sitemap: "https://www.jugarcasinosonline.net/sitemap.xml",
  };
}
