import Link from "next/link";
import type { ReactNode } from "react";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/legendhotellagosairport",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="#home" aria-label="Legend Lagos Airport">
            <img
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

        {/* Footer Columns - Swapped text-left overrides to strict global centering */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 text-center sm:grid-cols-3 lg:divide-x lg:divide-neutral-700">
          {/* Location */}
          <FooterColumn label="Location" center>
            <p className="text-sm leading-6 text-neutral-300">
              Murtala Muhammed International Airport,
              <br />
              Ikeja, Lagos
            </p>
          </FooterColumn>

          {/* Reservations */}
          <FooterColumn label="Reservations" center>
            <a
              href="mailto:reservations@legendhotel.com"
              className="text-sm text-neutral-300 transition-colors hover:text-white"
            >
              reservations@legendhotel.com
            </a>
          </FooterColumn>

          {/* Socials */}
          <FooterColumn label="Follow Us" center>
            <div className="flex items-center justify-center gap-5">
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
        center ? "flex flex-col items-center text-center" : ""
      }`}
    >
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
        {label}
      </h3>

      {children}
    </div>
  );
}
