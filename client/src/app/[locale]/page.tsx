import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import { Metadata } from "next";
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';
import Video from "@/components/Video";
import FindUs from "@/components/FindUs";


export const metadata: Metadata = {
    title: "google-site-verification",
    description: "TfGSaKMbypuNaXr-39j1v_wJJzS2K-jZ5fDxnWldx-4",
};

export default async function Home({ params: { locale } }) {

    unstable_setRequestLocale(locale);
    const hero = await getTranslations('Hero');
    const video = await getTranslations('Video');
    const findus = await getTranslations('FindUs');

    return (
    <>
        <ScrollUp />
        <Hero
            title = {hero('title')}
            subtitle= {hero('subtitle')}
            backgroundImage="/images/hero/homepage-background.jpg"
        />
        <Video
            title = {video('title')}
            ploeg= {video('ploeg')}
            ploegboekje={video('ploegboekje')}
        />
        <HomeContentWrapper />
        <FindUs 
            email = {findus('email')}
            locatieTitel = {findus('locatieTitel')}
            locatieOmschrijving = {findus('locatieOmschrijving')}
            socials = {findus('socials')}
        />
    </>
    );
}
