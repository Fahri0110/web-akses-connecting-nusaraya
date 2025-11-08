import { NextResponse } from 'next/server';

// This tells Next.js to pre-render this route's output as a static file.
export const dynamic = "force-static";

export async function GET(request) {
  // This code will only run ONCE during the `next build` process.
  // The result will be saved as a static JSON file.
  console.log("Generating static health check file...");

  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
}