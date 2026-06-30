import type { MetadataRoute } from "next";
import { LAST_UPDATED_ISO } from "@/data/config";
import { streamers } from "@/data/streamers";

const BASE = "https://www.jugarcasinosonline.net";

const countries = ["peru", "mexico", "argentina", "chile", "ecuador"];
const sections = ["mejores-casinos-online", "ruleta-online", "blackjack-online"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = LAST_UPDATED_ISO;

  const staticPages = [
    { url: `${BASE}`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/streamers`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE}/sobre-nosotros`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE}/contacto`, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${BASE}/politica-de-privacidad`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/terminos-y-condiciones`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/juego-responsable`, changeFrequency: "yearly" as const, priority: 0.4 },
  ].map((p) => ({ ...p, lastModified: lastmod }));

  const countryIndex = countries.map((c) => ({
    url: `${BASE}/${c}`,
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const countryPages = countries.flatMap((c) =>
    sections.map((s) => ({
      url: `${BASE}/${c}/${s}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  const streamerPages = streamers
    .filter((s) => s.hasArticle)
    .map((s) => ({
      url: `${BASE}/streamers/casino-${s.slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...countryIndex, ...countryPages, ...streamerPages];
}
