import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function incr(req: NextRequest): Promise<NextResponse> {
  // API endpoint disabled - no longer using Upstash Redis
  return new NextResponse(null, { status: 200 });
}
