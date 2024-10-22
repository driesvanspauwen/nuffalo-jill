"use client";

import { PloeglidEntry } from "../../types/ploeglidEntry";
import Image from "next/image";

export default function SinglePloeglid({ ploeglid, singlePloegLidTranslations }: { ploeglid: PloeglidEntry, singlePloegLidTranslations: any }) {
  const { name, image, post, g5, g5_post, responsible} = ploeglid;
  console.log(g5_post)
  return (
    <>
      <div className="group relative overflow-hidden rounded-md duration-300 bg-brown-dark hover:shadow-gray-dark text-center">
          <div className="relative block aspect-[4/5] w-full">
              <Image src={image} alt="image" fill objectFit="cover"/>
          </div>

        {g5 ? ( // Als ploeglid deel is van g5, printen we de g5_post
              <div className="flex flex-col justify-center h-[17vh] lg:h-[13vh]">
                <div
                    className="p-6 sm:p-8 md:px-6 md:py-2 lg:p-8 xl:px-5 xl:py-8 2xl:p-4">
                  <h3
                      className="mb-2 block text-xl font-bold text-sky sm:text-2xl"
                  >
                      {name}
                  </h3>
                    {/*text-sand is tekstkleur van post g5*/}
                  <p className="text-base font-medium text-sky dark:border-white dark:border-opacity-10">
                    {singlePloegLidTranslations[g5_post]}
                  </p>
                </div>
              </div>
        ) : (
            <div className="flex flex-col justify-center h-[10vh] lg:h-[12vh]">
              <div className="p-6 sm:p-8 md:px-6 md:py-2 lg:p-8 xl:px-5 xl:py-8 2xl:p-4">
                <h3
                    className="mb-2 block text-xl font-bold text-sky sm:text-2xl"
                >
                    {name}
                </h3>
              </div>
            </div>
        )}
        {responsible ? (
          <div subpixel-antialiased className="absolute top-0 right-0 bg-primary text-white text-xs p-2">
              {singlePloegLidTranslations['description']}
          </div>
        ) : (
          <></>
        )}


      </div>
    </>
  );
};
