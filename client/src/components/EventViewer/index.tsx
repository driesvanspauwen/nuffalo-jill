"use client";
import React, { useState } from "react";
import DayBox from "./DayBox";
import { fetcher } from "../../lib/api";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import EventBanner from "@/components/EventViewer/EventBanner";

const Schedule = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
      <section className="relative pt-12">
        <div id="events" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div> { /*For scrollable links */}
        <div className="container">
          <div className="mt-16 mb-8">
            <SectionTitle
                title="ELECTION WEEK"
                paragraph=""
                center
                titleColor="brown-dark"
            />
          </div>

          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3 mt-0 md:mt-20">
            <DayBox packageName="Woensdag">
              <div className="mb-8">
                <EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>
              </div>
              <div className="mb-8">
                <EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>
              </div>
            </DayBox>
            <DayBox packageName="Donderdag">
              <div className="mb-8">
                <EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>
              </div>
              <div className="mb-8">
                <EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>
              </div>
            </DayBox>
            <DayBox packageName="Vrijdag">
              <div className="mb-8">
                <EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>
              </div>
              <div className="mb-8">
                <EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>
              </div>
            </DayBox>
          </div>
        </div>
      </section>
  );
};

export default Schedule;

export async function getStaticProps() {
  const eventsResponse = await fetcher(
      "$(process.env.NEXT_PUBLIC_STRAPI_URL)/event",
  );
  console.log(eventsResponse);
  return {
    props: {
      events: eventsResponse,
    },
  };
}
