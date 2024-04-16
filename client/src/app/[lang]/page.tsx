import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries"

export const metadata: Metadata = {
  title: "Electoral Team Nuffalo Jill",
  description: "This is the website for Nuffalo Jill, an electoral team for Vlaamse Technische Kring Leuven",
};

export default async function Home({ params: { lang } }) {
    const dict = await getDictionary(lang)

    return (
    <>
        <ScrollUp />
        <Hero
            title = {dict.hero.title}
            subtitle= {dict.hero.subtitle}
            backgroundImage="/images/hero/homepage-background.jpg"
        />
        <HomeContentWrapper />
        <AboutSectionTwo />
    </>
    );
}
