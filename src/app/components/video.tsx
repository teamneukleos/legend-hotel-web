// components/video.tsx
"use client";

import ScrollRevealMedia from "./scrollrevealmedia";

export default function Video() {
  return (
    <section
      id="video"
      className="relative z-10 w-full bg-white px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
        <ScrollRevealMedia
          src="/images/legend-hall.png"
          alt="Legend Lagos Airport Event Showcase"
          label="Our Hall"
        />

        <ScrollRevealMedia
          src="/images/legend-room.png"
          alt="Legend Lagos Airport Room Showcase"
          label="Our Rooms"
        />
      </div>
    </section>
  );
}