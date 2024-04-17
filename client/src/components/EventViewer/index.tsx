"use client";
import { useState } from "react";
import DayBox from "./DayBox";
import { fetcher } from "../../lib/api";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const Schedule = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="events" className="relative pt-12">
      <div className="container">
        <div className="mt-16 mb-8">
          <SectionTitle
              title="ELECTION WEEK"
              paragraph=""
              center
              titleColor="brown-dark"
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <DayBox packageName="Woensdag">
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D">
              <Image
                src="/images/banners/Fakfeestje.png"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </Link>

            <div style={{ marginTop: "30px" }}></div>

            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D">
              <Image
                src="/images/banners/Fakfeestje.png"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </Link>
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
