import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const skip = searchParams.get("skip") || 0;
  const limit = searchParams.get("limit") || 10;

  const res = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();

  return NextResponse.json(data);
}
