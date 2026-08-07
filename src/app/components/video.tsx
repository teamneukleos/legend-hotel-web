"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Video() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.72, 1]);

  const radius = useTransform(scrollYProgress, [0, 1], [36, 0]);

  const containerWidth = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative z-10 w-full overflow-hidden py-12 md:py-20"
    >
      <motion.div
        style={{
          scale,
          width: containerWidth,
        }}
        className="mx-auto overflow-hidden will-change-transform shadow-2xl"
      >
        <div className="relative aspect-video w-full bg-black">
          <Image
            src="/images/legend-hall.png" 
            alt="Legend Lagos Airport Event Showcase"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
