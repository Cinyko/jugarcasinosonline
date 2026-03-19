import { NextResponse } from "next/server";
import { casinos } from "@/data/casinos";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ casino: string }> }
) {
  const { casino } = await params;
  const found = casinos.find((c) => c.slug === casino);

  if (!found) {
    return NextResponse.redirect(new URL("/", _request.url));
  }

  return NextResponse.redirect(found.affiliateUrl, 307);
}
