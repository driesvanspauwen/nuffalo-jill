
// For monitoring speed on vercel deployment
import { SpeedInsights } from "@vercel/speed-insights/next"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  verification: { google: "Nav6TjWrom0MGOZw-Ai5X-UFSxfMHMfifS1BMU38ge0" },
}

const inter = Inter({ subsets: ["latin"] });
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["500"],
});

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html suppressHydrationWarning lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`parchmentBackground akaPosseFont`}>
        <Providers>
          <Header />
            {children}
            <SpeedInsights />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
