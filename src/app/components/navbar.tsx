"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Video", href: "#video" },
  { name: "Contact Form", href: "#contact" },
  { name: "Features", href: "#features" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex h-[120px] w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-12">
        
        {/* Logo */}
        <Link
          href="#home"
          className="relative z-50 flex shrink-0 items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/legend-logo.png"
            alt="Legend Lagos Airport"
            width={150}
            height={65}
            className="h-auto w-[125px] md:w-[140px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#222] transition-colors duration-300 hover:text-[#777]"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="#contact"
            className="ml-2 flex items-center gap-2 bg-[#222] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#777]"
          >
            Enquire Now
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-11 w-11 items-center justify-center text-[#222] lg:hidden"
        >
          {isOpen ? (
            <X size={25} strokeWidth={1.5} />
          ) : (
            <Menu size={25} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation - Updated top positioning to top-[120px] */}
      <div
        className={`absolute left-0 top-[120px] w-full overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] border-t border-[#e5e5e5] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 md:px-10">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#e8e8e8] py-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#222]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 bg-[#222] px-6 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-white"
            >
              Enquire Now
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
