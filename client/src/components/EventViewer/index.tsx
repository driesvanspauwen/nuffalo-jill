"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import EventBox from "./EventBox";
import { fetcher } from '../../lib/api'
 
const Schedule = ( {events} ) => {
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
          <EventBox
            packageName="Woensdag"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            Events
          </EventBox>
          <EventBox
            packageName="Donderdag"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            Events
          </EventBox>
          <EventBox
            packageName="Vrijdag"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            Hallo ik ben maarten
          </EventBox>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

export async function getStaticProps() {
  const eventsResponse = await fetcher('$(process.env.NEXT_PUBLIC_STRAPI_URL)/event')
  console.log(eventsResponse);
  return {
    props: {
      events: eventsResponse
    }
  }

}

