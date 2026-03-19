import { Casino, Comparison } from "@/types";

export const casinos: Casino[] = [
  {
    name: "FRESH Casino",
    slug: "fresh-casino",
    bonus: "100% hasta $500 + 200 giros gratis",
    rating: 9.5,
    affiliateUrl: "https://freshway61.com/ce6862a50",
  },
  {
    name: "SOL Casino",
    slug: "sol-casino",
    bonus: "100% hasta $500 + 250 giros gratis",
    rating: 9.3,
    affiliateUrl: "https://solway61.com/c37ebca74",
  },
  {
    name: "MONRO Casino",
    slug: "monro-casino",
    bonus: "150% hasta $300 + 100 giros gratis",
    rating: 9.1,
    affiliateUrl: "https://mnr-blse21.com/c4fe60d23",
  },
  {
    name: "STARDA Casino",
    slug: "starda-casino",
    bonus: "100% hasta $500 + 150 giros gratis",
    rating: 9.0,
    affiliateUrl: "https://stardaway2.com/c25a39ae8",
  },
];

export const comparisons: Comparison[] = [
  {
    casinoA: "FRESH Casino",
    casinoB: "SOL Casino",
    slug: "fresh-casino-vs-sol-casino",
  },
  {
    casinoA: "MONRO Casino",
    casinoB: "STARDA Casino",
    slug: "monro-casino-vs-starda-casino",
  },
  {
    casinoA: "FRESH Casino",
    casinoB: "MONRO Casino",
    slug: "fresh-casino-vs-monro-casino",
  },
  {
    casinoA: "SOL Casino",
    casinoB: "STARDA Casino",
    slug: "sol-casino-vs-starda-casino",
  },
  {
    casinoA: "FRESH Casino",
    casinoB: "STARDA Casino",
    slug: "fresh-casino-vs-starda-casino",
  },
  {
    casinoA: "SOL Casino",
    casinoB: "MONRO Casino",
    slug: "sol-casino-vs-monro-casino",
  },
];
