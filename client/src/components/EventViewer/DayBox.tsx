// this will be used to make a event day where events can be added to the day
// This will use the vars of 'day', 'time', 'location' and 'subscription'
import React, {useState} from "react";
import SectionTitle from "../Common/SectionTitle";

const DayBox = (props: { packageName: string; children: React.ReactNode }) => {
  const { packageName, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="w-full">
        <div className="relative z-10 bg-brown-dark px-8 py-10 mt-10 shadow-three hover:shadow-gray-dark rounded-lg">
          <div className="flex items-center justify-between text-nowrap" onClick={toggleCollapse}>
            <SectionTitle
                title={packageName}
                paragraph=""
                center
                size="text-4xl"
                titleColor="sky"
            />
          </div>
            <div className={`${isOpen ? '' : 'h-0 invisible sm:visible sm:h-auto'}`}>
                <div className="border-t-4 border-offwhite my-4"></div>
                <div>{children}</div>
            </div>
        </div>
      </div>
  );
};

export default DayBox;
