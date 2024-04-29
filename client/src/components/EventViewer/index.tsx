"use client";
import React, { useState } from "react";
import DayBox from "./DayBox";
import SectionTitle from "../Common/SectionTitle";
import EventBanner from "@/components/EventViewer/EventBanner";

const Schedule = ({title, dag1, dag2, dag3, dag4}) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
      <section className="relative pt-12">
        <div id="events" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div> { /*For scrollable links */}
          <div className="container mt-16 mb-8">
            <SectionTitle
                title={title}
                paragraph=""
                center
                titleColor="brown-dark"
            />
          </div>

          <div className="grid lg:w-3/4 m-auto grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-2 mt-0 md:mt-10 px-8">
            <DayBox packageName={dag1}>
              <div className="mb-8">
                <EventBanner link="https://fb.me/e/8b6nklVyf"
                             image="/images/banners/Receptie.jpg"></EventBanner>
              </div>
            </DayBox>
            <DayBox packageName={dag2}>
              <div className="mb-8">
                <EventBanner link="https://fb.me/e/7dJtCXF5L"
                             image="/images/banners/western_casino.jpg"></EventBanner>
              </div>
            </DayBox>
            <DayBox packageName={dag3}>
              <div className="mb-8">
                <EventBanner link="https://fb.me/e/3GvhzAU7n"
                             image="/images/banners/Westerncantus.jpg"></EventBanner>
              </div>
            </DayBox>
            <DayBox packageName={dag4}>
              <div className="mb-8">
                <EventBanner link="https://fb.me/e/1PlwE1afy"
                             image="/images/banners/cocktailworkshop_theokot.jpg"></EventBanner>
              </div>
              <div className="mb-8">
                <EventBanner link="https://www.facebook.com/nuffalojill"
                             image="/images/banners/Fakfeest.jpg"></EventBanner>
              </div>
            </DayBox>
          </div>
      </section>
  );
};

export default Schedule;
