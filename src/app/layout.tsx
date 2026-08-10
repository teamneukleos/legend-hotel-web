import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/smoothscroll";

const calibri = localFont({
  src: [
    {
      path: "/fonts/Calibri.woff2", 
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Calibri-Bold.woff2", 
      style: "normal",
    },
  ],
  variable: "--font-calibri",
});

export const metadata: Metadata = {
  title: "Legend Hotel | Lagos Airport Event Hall",
  description:
    "Host weddings, conferences, and celebrations at Legend Hotel's event hall near Lagos Airport — elegant space, attentive service, and a setting made for memorable occasions.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${calibri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
