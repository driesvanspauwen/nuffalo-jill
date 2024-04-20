import { PloeglidEntry } from "@/types/ploeglidEntry";
import Image from "next/image";
import Link from "next/link";
import {getTranslations} from 'next-intl/server';

async function SinglePloeglid({ ploeglid }: { ploeglid: PloeglidEntry }) {
  const { name, image, post, g5, g5_post, responsible} = ploeglid;
  const description = await getTranslations('SinglePloeglid');

  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-brown-dark dark:hover:shadow-gray-dark text-center">
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
                  <p className="text-base font-medium text-sand dark:border-white dark:border-opacity-10">
                    {g5_post}
                  </p>
                </div>
              </div>
        ) : (
            <div className="flex flex-col justify-center h-[10vh] lg:h-[12vh]">
              <div className="p-6 sm:p-8 md:px-6 md:py-2 lg:p-8 xl:px-5 xl:py-8 2xl:p-4">
                <h3
                    className="mb-2 block text-xl font-bold hover:text-primary text-sky sm:text-2xl"
                >
                    {name}
                </h3>
              </div>
            </div>
        )}
        {responsible ? (
          <div subpixel-antialiased className="absolute top-0 right-0 bg-primary text-white text-xs p-2">
            {description('description')}
          </div>
        ) : (
          <></>
        )}


      </div>
    </>
  );
};

export default SinglePloeglid;
