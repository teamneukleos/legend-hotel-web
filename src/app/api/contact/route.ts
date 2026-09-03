import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { type } = body;

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { error: "Not configured" },
        { status: 500 }
      );
    }

    // =========================
    // HALL BOOKING
    // =========================
    if (type === "hall") {
      const {
        name,
        email,
        eventDate,
        eventType,
        phone,
      } = body;

      if (!name || !email || !eventDate || !eventType || !phone) {
        return NextResponse.json(
          { error: "Missing hall booking fields" },
          { status: 400 }
        );
      }

      const res = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "event",
          name,
          email,
          eventDate,
          eventType,
          phone,
        }),
        redirect: "follow",
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "Sheet write failed" },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    // =========================
    // ROOM BOOKING
    // =========================
    if (type === "room") {
      const {
        name,
        email,
        checkIn,
        checkOut,
        guests,
        roomType,
        phone,
      } = body;

      if (
        !name ||
        !email ||
        !checkIn ||
        !checkOut ||
        !guests ||
        !roomType ||
        !phone
      ) {
        return NextResponse.json(
          { error: "Missing room booking fields" },
          { status: 400 }
        );
      }

      const res = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "room",
          name,
          email,
          checkIn,
          checkOut,
          guests,
          roomType,
          phone,
        }),
        redirect: "follow",
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "Sheet write failed" },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { error: "Invalid booking type" },
      { status: 400 }
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}