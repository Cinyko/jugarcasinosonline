export interface Country {
  name: string;
  slug: string;
  flagCode: string;
  description: string;
  color: string;
}

export interface Casino {
  name: string;
  slug: string;
  bonus: string;
  rating: number;
  affiliateUrl: string;
}

export interface Streamer {
  name: string;
  country: string;
  platform: "Kick" | "Twitch" | "YouTube";
  description: string;
  category: "LATAM" | "Internacional" | "Nicho";
  slug: string;
}

export interface Comparison {
  casinoA: string;
  casinoB: string;
  slug: string;
}
