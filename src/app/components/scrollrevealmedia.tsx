// components/ScrollRevealMedia.tsx
"use client";

import { motion } from "framer-motion";

type ScrollRevealMediaProps = {
  src: string;
  alt: string;
  label?: string;
};

export default function ScrollRevealMedia({
  src,
  alt,
  label,
}: ScrollRevealMediaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {label && (
        <p className="mb-5 font-[Calibri] text-xs font-bold uppercase tracking-[0.25em] text-[#222]">
          {label}
        </p>
      )}

      <div className="relative h-[320px] w-full overflow-hidden bg-neutral-900 sm:h-[420px] lg:h-[560px]">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    </motion.div>
  );
}