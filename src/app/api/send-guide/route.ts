import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phone, companyName, jobTitle } = body;

  if (!firstName || !lastName || !email || !phone || !companyName || !jobTitle) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: "Email not configured" }, { status: 500 });
  }

  if (!scriptUrl) {
    return NextResponse.json({ error: "Sheet not configured" }, { status: 500 });
  }

  const pdfPath = path.join(
    process.cwd(),
    "public",
    "downloads",
    "legend-corporate-event-planning-kit.pdf"
  );

  if (!fs.existsSync(pdfPath)) {
    return NextResponse.json({ error: "Guide file missing" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  try {
    const sheetRes = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "guide",
        firstName,
        lastName,
        email,
        phone,
        companyName,
        jobTitle,
      }),
      redirect: "follow",
    });

    if (!sheetRes.ok) {
      return NextResponse.json(
        { error: "Sheet write failed" },
        { status: 502 }
      );
    }

    await transporter.sendMail({
      from: `"Legend Lagos Airport" <${gmailUser}>`,
      to: email,
      subject: "Your Legend Lagos Airport Corporate Event Planning Kit",
      text: `Hi ${firstName},\n\nThank you for your interest in hosting your event at Legend Lagos Airport. Your Corporate Event Planning Kit is attached.\n\nWe look forward to helping you plan an exceptional event.\n\nLegend Lagos Airport\nCurio Collection by Hilton`,
      attachments: [
        {
          filename: "Legend-Corporate-Event-Planning-Kit.pdf",
          path: pdfPath,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Event planning kit submit failed:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }
}