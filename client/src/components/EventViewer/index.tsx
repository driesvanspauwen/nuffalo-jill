"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import DayBox from "./DayBox";
import { fetcher } from "../../lib/api";
import bierdrinken_banner from "./banners/bierdrinken_1_baner.webp";

const Schedule = ({ events }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="events" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Events"
          paragraph="This is an overview of VTK Kiesweek events."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <DayBox packageName="Woensdag">
            <img src={bierdrinken_banner} alt="Event Image" />
          </DayBox>
          <DayBox packageName="Donderdag">Events</DayBox>
          <DayBox packageName="Vrijdag">Hallo ik ben maarten</DayBox>
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
