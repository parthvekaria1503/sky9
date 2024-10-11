// src/app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from the API!' });
}

export async function POST(request: Request) {
  const { name } = await request.json();
  return NextResponse.json({ message: `Hello, ${name}!` });
}
