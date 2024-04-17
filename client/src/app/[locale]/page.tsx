import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import { Metadata } from "next";
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';
import Video from "@/components/Video";


export const metadata: Metadata = {
  title: "Electoral Team Nuffalo Jill",
  description: "This is the website for Nuffalo Jill, an electoral team for Vlaamse Technische Kring Leuven",
};

export default async function Home({ params: { locale } }) {

    unstable_setRequestLocale(locale);
    const t = await getTranslations('Hero');

    return (
    <>
        <ScrollUp />
        <Hero
            title = {t('title')}
            subtitle= {t('subtitle')}
            backgroundImage="/images/hero/homepage-background.jpg"
        />
        <Video/>
        <HomeContentWrapper />
        <AboutSectionTwo />
    </>
    );
}
