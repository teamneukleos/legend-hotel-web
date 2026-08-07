import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        {/* Logo */}
        <div className="flex justify-center sm:justify-center">
          <Link href="#home" aria-label="Legend Lagos Airport">
            <Image
              src="/images/legend-logo-white.png"
              alt="Legend Lagos Airport"
              width={180}
              height={80}
              className="h-auto w-[150px] md:w-[175px]"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-neutral-700" />

        {/* Footer Columns */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:divide-x lg:divide-neutral-700">
          {/* Location */}
          <FooterColumn label="Location">
            <p className="text-sm leading-6 text-neutral-300">
              Murtala Muhammed International Airport,
              <br />
              Ikeja, Lagos
            </p>
          </FooterColumn>

          {/* Phone */}
          <FooterColumn label="Phone" center>
            <a
              href="tel:+2340000000000"
              className="text-sm text-neutral-300 transition-colors hover:text-white"
            >
              +234 XXX XXX XXXX
            </a>
          </FooterColumn>

          {/* Reservations */}
          <FooterColumn label="Reservations" center>
            <a
              href="tel:+2340000000000"
              className="block text-sm text-neutral-300 transition-colors hover:text-white"
            >
              +234 XXX XXX XXXX
            </a>

            <a
              href="mailto:reservations@legendhotel.com"
              className="mt-2 block text-sm text-neutral-300 transition-colors hover:text-white"
            >
              reservations@legendhotel.com
            </a>
          </FooterColumn>

          {/* Socials */}
          <FooterColumn label="Follow Us" center>
            <div className="flex items-center justify-center gap-5 sm:justify-start lg:justify-center">
              {socials.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-neutral-400 transition-colors duration-300 hover:text-white"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </FooterColumn>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-neutral-700" />

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-neutral-400 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white">Legend Lagos Airport</span>.
          </p>

          <p className="text-xs text-neutral-400 sm:text-sm">
            Part of Curio Collection by Hilton.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  center,
  children,
}: {
  label: string;
  center?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`px-4 first:pl-0 last:pr-0 ${
        center ? "lg:flex lg:flex-col lg:items-center lg:text-center" : ""
      }`}
    >
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
        {label}
      </h3>

      {children}
    </div>
  );
}
