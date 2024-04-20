"use client"

import SectionTitle from "../Common/SectionTitle";
import SingleGoal from "./SingleGoal";
import {goalsDataDutch, goalsDataEnglish} from "./goalsData";
import {usePathname} from "next/navigation";
import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Goals = ({title}) => {

    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width >= 450 && width < 575) {
                setScreenSize('xs');
            } else if (width >= 575 && width < 768) {
                setScreenSize('sm');
            } else if (width >= 768 && width < 992) {
                setScreenSize('md');
            } else if (width >= 992 && width < 1200) {
                setScreenSize('lg');
            } else if (width >= 1200 && width < 1400) {
                setScreenSize('xl');
            } else {
                setScreenSize('2xl');
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const usePathName = usePathname();

    let goalsData;
    if (usePathName === "/" || usePathName === "/nl") {
      goalsData = goalsDataDutch;
    } else {
      goalsData = goalsDataEnglish;
    };

    return (
        <>
            <section className="pt-28">
                <div id="goals" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div> { /*For scrollable links */}
                <div className="container">
                    <div className="mt-16 mb-8">
                        <SectionTitle
                            title={title}
                            paragraph=""
                            center
                            titleColor="brown-dark"
                        />
                    </div>

                    {/* Center the grid of three columns and spread out over the whole width */}
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 w-full max-w-7xl">

                        </div>
                    </div>
                </div>

                <Swiper
                    slidesPerView={screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md' || screenSize === 'lg' ? 1 : 2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mt-20 w-full mx-8 md:w-2/3 md:mx-0"
                    style={{
                        // @ts-ignore
                        "--swiper-pagination-color": "#FBB040",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "10px"
                    }}
                >
                    {goalsData.map((goal, index) => (
                        <SwiperSlide key={goal.id} className="flex justify-center items-center">
                            <SingleGoal goal={goal}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default Goals;
