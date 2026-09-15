import { NextResponse } from "next/server";
import { casinos } from "@/data/casinos";

const countryRedirects: Record<string, string> = {
  "betsson-argentina": "https://record.caba.betsson.bet.ar/_dshqSvtGM5HfeH1R4yNo9GNd7ZgqdRLk/1",
  "betsson-chile": "https://record.betsn.info/_dshqSvtGM5FPtUZe0a-NX2Nd7ZgqdRLk/1/",
  "betsson-peru": "https://record.betsson.com/_dshqSvtGM5FWJv-piTzMMWNd7ZgqdRLk/1/",
  "betsson-mexico": "https://record.betsson.mx/_dshqSvtGM5GabgPYu4W6NWNd7ZgqdRLk/1/",
  "betsson-latam": "https://record.betsson.com/_dshqSvtGM5HPjmj8zYpJR2Nd7ZgqdRLk/1/",
  "betway-mexico": "https://betway.mx/bwp/casino-welcome-50/es-mx/?s=sp51956",
  "jackpotcity-chile": "https://www.jackpotcitycasino.com/chile/?s=sp51956",
  "gamingclub-chile": "https://www.gamingclub.com/cl/?s=sp51956",
  "gamingclub-bolivia": "https://www.gamingclub.com/bo/?s=sp51956",
};

// Refuerzo para los bots que ignoran robots.txt: estas URLs nunca deben
// acabar en un índice, ni siquiera como resultado "solo URL".
function redirect(url: string | URL, status: 307 | 302 = 307) {
  const res = NextResponse.redirect(url, status);
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ casino: string }> }
) {
  const { casino } = await params;

  // Check country-specific redirects first
  if (countryRedirects[casino]) {
    return redirect(countryRedirects[casino]);
  }

  const found = casinos.find((c) => c.slug === casino);

  if (!found) {
    return redirect(new URL("/", _request.url));
  }

  return redirect(found.affiliateUrl);
}
