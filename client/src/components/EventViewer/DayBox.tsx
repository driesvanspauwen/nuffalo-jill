// this will be used to make a event day where events can be added to the day
// This will use the vars of 'day', 'time', 'location' and 'subscription'
import React from "react";
import SectionTitle from "../Common/SectionTitle";

const DayBox = (props: { packageName: string; children: React.ReactNode }) => {
  const { packageName, children } = props;

  return (
    <div className="w-full">
      <div className="relative z-10 rounded-sm bg-brown-dark px-8 py-10 shadow-three hover:shadow-one dark:shadow-two dark:hover:shadow-gray-dark">
        <div className="flex items-center justify-between">
          <SectionTitle
            title={packageName}
            paragraph=""
            center
            mb="30px"
            titleColor="sky"
          />
        </div>
        <hr className="my-4" />
        <div>{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
      </div>
    </div>
  );
};

export default DayBox;
