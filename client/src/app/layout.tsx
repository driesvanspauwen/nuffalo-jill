"use client";

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    useEffect(() => {
        // This useEffect runs once when the component mounts
        // It checks if there is a hash in the URL and scrolls to that element if it exists
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'instant' });
            }
        }
    }, []);


  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`parchmentBackground nakaraFont`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
