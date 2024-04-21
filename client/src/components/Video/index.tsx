"use client";

import { Link } from "@/navigation"
import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = ({title, ploeg, ploegboekje}) => {
  const [isOpen, setOpen] = useState(false);

  return (
      <>
        <section
            className="relative bg-brown-dark bg-cover bg-center bg-repeat flex z-10 py-28"
        >
          <div id="video" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div> { /*For scrollable links */}
          <div className="container">
            <SectionTitle
                title={title}
                paragraph=""
                center
                titleColor="sky"
            />

            <div className="-mx-4 flex-wrap mt-10 flex items-center justify-center">
              <p className="mb-8 text-xl text-orange-400 text-center">VIDEO COMING SOON</p>
              <div className="w-full px-4">
                <div
                    className="mx-auto max-w-[770px] overflow-hidden rounded-md"
                    data-wow-delay=".15s"
                >
                  <div className="relative aspect-[77/40] items-center justify-center">
                    <Image src="/images/video/temporary_video_thumbnail.png" alt="video image" fill/>
                    <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                      <button
                          aria-label="video play button"
                          onClick={() => setOpen(true)}
                          className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                      >
                        <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            className="fill-current"
                        >
                          <path
                              d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-2 mt-10 mx-auto text-center">
            <div className="flex justify-center items-center">
                <Link href="/ploeg"
                      className="bg-sky mb-3 mr-3 inline-flex items-center justify-center rounded-md px-4 py-2 text-lg text-black duration-300 hover:bg-primary hover:text-sky">
                  {ploeg}</Link>
                <Link href="/ploegboekje"
                      className="bg-sky mb-3 mr-3 inline-flex items-center justify-center rounded-md px-4 py-2 text-lg text-black duration-300 hover:bg-primary hover:text-sky">
                  {ploegboekje}</Link>
              </div>
            </div>

          </div>

          <ModalVideo
              channel="youtube"
              autoplay={true}
              start={true}
              isOpen={isOpen}
              videoId="" // https://www.youtube.com/watch?v=TzkdiitBEhk&ab_channel=VlaamseTechnischeKring -> TzkdiitBEhk
              onClose={() => setOpen(false)}
          />

        </section>
      </>
  )
      ;
};

export default Video;
