import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, eventDate, eventType, phone } = body;

  if (!name || !email || !eventDate || !eventType || !phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const res = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, eventDate, eventType, phone }),
    redirect: "follow",
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Sheet write failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}