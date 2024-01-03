import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const blogid = searchParams.get("blogid") || 1;

  const res = await fetch(`https://dummyjson.com/posts/${blogid}`);
  const data = await res.json();
  console.log(res);

  if (res.status == 200) {
    return NextResponse.json(data);
  } else {
    return new NextResponse("Error", {
      status: 404,
      statusText: "Not found",
    });
  }
}
