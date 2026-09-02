// components/ScrollRevealMedia.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollRevealMediaProps = {
  src: string;
  alt: string;
  label?: string;
};

export default function ScrollRevealMedia({ src, alt, label }: ScrollRevealMediaProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.72, 1]);
  const containerWidth = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative z-10 w-full overflow-hidden py-12 md:py-20"
    >
      {label && (
        <p className="mx-auto mb-6 max-w-7xl px-6 text-center text-xs uppercase tracking-widest text-neutral-500">
          {label}
        </p>
      )}
      <motion.div
        style={{
          scale,
          width: containerWidth,
        }}
        className="mx-auto overflow-hidden will-change-transform shadow-2xl"
      >
        <div className="relative aspect-video w-full bg-black">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}