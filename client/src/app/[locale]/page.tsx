import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import { Metadata } from "next";
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';
import Video from "@/components/Video";
import FindUs from "@/components/FindUs";


export const metadata: Metadata = {
    title: "Electoral Team Nuffalo Jill",
    description: "This is the website for Nuffalo Jill, an electoral team for Vlaamse Technische Kring Leuven",
};

export default async function Home({ params: { locale } }) {

    unstable_setRequestLocale(locale);
    const hero = await getTranslations('Hero');
    const video = await getTranslations('Video');
    const findus = await getTranslations('FindUs');

    return (
        <>
            <meta name="google-site-verification" content="Nav6TjWrom0MGOZw-Ai5X-UFSxfMHMfifS1BMU38ge0"/>
            <ScrollUp/>
            <Hero
                title={hero('title')}
                subtitle={hero('subtitle')}
                backgroundImage="/images/hero/homepage-background.jpg"
            />
            <Video
                title={video('title')}
                ploeg={video('ploeg')}
                ploegboekje={video('ploegboekje')}
            />
            <HomeContentWrapper/>
            <FindUs
                email={findus('email')}
                locatieTitel={findus('locatieTitel')}
                locatieOmschrijving={findus('locatieOmschrijving')}
                socials={findus('socials')}
            />
        </>
    );
}
