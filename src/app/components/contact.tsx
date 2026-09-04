"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const hallImages = [
  "/images/hall-1.png",
  "/images/hall-2.png",
  "/images/hall-3.png",
  "/images/hall-4.png",
];

const roomImages = [
  "/images/room-1.png",
  "/images/room-2.png",
  "/images/room-3.png",
];

const eventTypes = [
  "Wedding",
  "Conference / Meeting",
  "Corporate Event",
  "Product Launch",
  "Birthday / Private Party",
  "Other",
];

const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Executive Suite",
  "Presidential Suite",
];

type BookingType = "hall" | "room";

type HallFormState = {
  name: string;
  email: string;
  eventDate: string;
  eventType: string;
  phone: string;
};

type RoomFormState = {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  phone: string;
};

const initialHallState: HallFormState = {
  name: "",
  email: "",
  eventDate: "",
  eventType: "",
  phone: "",
};

const initialRoomState: RoomFormState = {
  name: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  roomType: "",
  phone: "",
};

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function Contact() {
  const [bookingType, setBookingType] = useState<BookingType>("hall");
  const [hallForm, setHallForm] = useState<HallFormState>(initialHallState);
  const [roomForm, setRoomForm] = useState<RoomFormState>(initialRoomState);
  const [activeImage, setActiveImage] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const images = bookingType === "hall" ? hallImages : roomImages;

  // Reset carousel position when switching tabs so it doesn't index out of range
  useEffect(() => {
    setActiveImage(0);
  }, [bookingType]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleHallChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setHallForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRoomChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setRoomForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("submitting");

    const payload =
      bookingType === "hall"
        ? { type: "hall", ...hallForm }
        : { type: "room", ...roomForm };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");

      // Meta Pixel: track successful enquiry as a Lead
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: bookingType === "hall" ? "Hall Enquiry" : "Room Enquiry",
        });
      }

      bookingType === "hall"
        ? setHallForm(initialHallState)
        : setRoomForm(initialRoomState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Form */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
          {/* Toggle */}
          <div className="inline-flex w-fit rounded-full border border-neutral-300 p-1">
            <button
              type="button"
              onClick={() => setBookingType("hall")}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest transition ${
                bookingType === "hall"
                  ? "bg-black text-white"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Book a Hall
            </button>
            <button
              type="button"
              onClick={() => setBookingType("room")}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest transition ${
                bookingType === "room"
                  ? "bg-black text-white"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Book a Room
            </button>
          </div>

          <h2 className="mt-8 font-serif text-3xl sm:text-4xl text-black">
            {bookingType === "hall"
              ? "Host Your Event At Legend"
              : "Reserve Your Stay At Legend"}
          </h2>
          <p className="mt-4 max-w-md text-sm sm:text-base text-neutral-500">
            {bookingType === "hall"
              ? "Tell us about your event and our team will reach out to confirm availability and walk you through the hall."
              : "Tell us your dates and preferences and our team will reach out to confirm availability and rates."}
          </p>

          {bookingType === "hall" ? (
            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                <Field label="Full Name" name="name" value={hallForm.name} onChange={handleHallChange} required />
                <Field label="Email Address" name="email" type="email" value={hallForm.email} onChange={handleHallChange} required />
                <Field label="Date of Event" name="eventDate" type="date" value={hallForm.eventDate} onChange={handleHallChange} required />

                <div>
                  <label htmlFor="eventType" className="block text-xs uppercase tracking-widest text-neutral-500">
                    Type of Event <span className="text-black">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={hallForm.eventType}
                    onChange={handleHallChange}
                    className="mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-black focus:border-black focus:outline-none"
                  >
                    <option value="" disabled>Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Field label="Phone Number" name="phone" type="tel" value={hallForm.phone} onChange={handleHallChange} required />

              <SubmitButton status={status} />
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                <Field label="Full Name" name="name" value={roomForm.name} onChange={handleRoomChange} required />
                <Field label="Email Address" name="email" type="email" value={roomForm.email} onChange={handleRoomChange} required />
                <Field label="Check-in Date" name="checkIn" type="date" value={roomForm.checkIn} onChange={handleRoomChange} required />
                <Field label="Check-out Date" name="checkOut" type="date" value={roomForm.checkOut} onChange={handleRoomChange} required />
                <Field label="Number of Guests" name="guests" type="number" value={roomForm.guests} onChange={handleRoomChange} required />

                <div>
                  <label htmlFor="roomType" className="block text-xs uppercase tracking-widest text-neutral-500">
                    Room Type <span className="text-black">*</span>
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    required
                    value={roomForm.roomType}
                    onChange={handleRoomChange}
                    className="mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-black focus:border-black focus:outline-none"
                  >
                    <option value="" disabled>Select room type</option>
                    {roomTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Field label="Phone Number" name="phone" type="tel" value={roomForm.phone} onChange={handleRoomChange} required />

              <SubmitButton status={status} />
            </form>
          )}
        </div>

        {/* Fade carousel */}
        <div className="relative h-72 sm:h-96 lg:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${bookingType}-${activeImage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={images[activeImage]}
                alt={bookingType === "hall" ? "Legend Hall" : "Legend Room"}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeImage ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubmitButton({ status }: { status: "idle" | "submitting" | "success" | "error" }) {
  return (
    <>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-black px-8 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-neutral-800 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
        <span aria-hidden>→</span>
      </button>

      {status === "success" && (
        <p className="text-sm text-neutral-600">Thank you. A member of our team will be in touch shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
      )}
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-neutral-500">
        {label} {required && <span className="text-black">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-black placeholder-neutral-400 focus:border-black focus:outline-none"
      />
    </div>
  );
}