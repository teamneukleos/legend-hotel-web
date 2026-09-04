import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import MetaPixel from "./components/metapixel";
import LinkedInInsight from "./components/linkedininsight";
import SmoothScroll from "./components/smoothscroll";

const GTM_ID = "GTM-WWXMW89P";

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
    <html lang="en" className={`${calibri.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col">
        <MetaPixel />
        <LinkedInInsight />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}