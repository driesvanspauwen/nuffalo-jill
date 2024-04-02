import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";;
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electoral Team Nuffalo Jill",
  description: "This is the website for Nuffalo Jill, an electoral team for Vlaamse Technische Kring Leuven",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero
        title = "Nuffalo Jill"
        subtitle="Something here."
      />
      <HomeContentWrapper />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
