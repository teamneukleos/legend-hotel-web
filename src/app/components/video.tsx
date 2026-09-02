// components/Video.tsx
"use client";

import ScrollRevealMedia from "./scrollrevealmedia";

export default function Video() {
  return (
    <>
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
    </>
  );
}