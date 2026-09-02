"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <img
        src="/images/hero-bg.png" 
        alt="Legend Lagos Airport Event Hall Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Subtle Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 text-center md:px-10 lg:px-12">
        {/* Eyebrow */}
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.35em] text-white/90 sm:text-xs">
          Legend Lagos Airport
        </p>

        {/* Main Heading */}
        <h1 className="max-w-5xl font-serif text-[clamp(3.2rem,8vw,7rem)] font-normal leading-[0.9] tracking-[-0.035em] text-white">
          A Space Worth
          <br />
          Celebrating
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Discover our new event hall, thoughtfully designed for memorable
          celebrations, elegant gatherings and exceptional occasions.
        </p>

        {/* CTA */}
        <Link
          href="#contact"
          className="group mt-9 inline-flex items-center gap-3 bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-[#d9d9d9] sm:px-8 sm:py-5"
        >
          Enquire Below
          <ArrowUpRight
            size={16}
            strokeWidth={1.7}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>

      <a
        href="#video"
        aria-label="Scroll to video section"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 transition-colors hover:text-white"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
          Explore
        </span>

        <ArrowDown
          size={16}
          strokeWidth={1.5}
          className="animate-bounce"
        />
      </a>
    </section>
  );
}
