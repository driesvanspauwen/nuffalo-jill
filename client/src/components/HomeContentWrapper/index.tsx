import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import EventViewer from "@/components/EventViewer";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import styles from "@/components/HomeContentWrapper/styles.module.css";

export default function HomeContentWrapper() {
    return (
        <>
            <div
                className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative"
            >
                <Video/>
                <Goals/>
                <EventViewer/>
                <div className={styles.fadeTop}></div>
            </div>
        </>
    );
}
