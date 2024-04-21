"use client";
import React, { useState } from "react";
import DayBox from "./DayBox";
import SectionTitle from "../Common/SectionTitle";

const Schedule = ({title, dag1, dag2, dag3}) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
      <section className="relative pt-12">
        <div id="events" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div> { /*For scrollable links */}
        <div className="container">
          <div className="mt-16 mb-8">
            <SectionTitle
                title={title}
                paragraph=""
                center
                titleColor="brown-dark"
            />
          </div>

          <p className="text-xl text-orange-600 text-center">MORE EVENTS COMING SOON</p>

          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3 mt-0 md:mt-10">
            <DayBox packageName={dag1}>
              <div className="mb-8">
                {/*<EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>*/}
              </div>
            </DayBox>
            <DayBox packageName={dag2}>
              <div className="mb-8">
                {/*<EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>*/}
              </div>
            </DayBox>
            <DayBox packageName={dag3}>
              <div className="mb-8">
                {/*<EventBanner link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
                             image="/images/banners/Fakfeestje.png"></EventBanner>*/}
              </div>
            </DayBox>
          </div>
        </div>
      </section>
  );
};

export default Schedule;
