import { PloeglidEntry } from "@/types/ploeglidEntry";
import Image from "next/image";
import Link from "next/link";

const SinglePloeglid = ({ ploeglid }: { ploeglid: PloeglidEntry }) => {
  const { name, image, post, g5, g5_post } = ploeglid;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark text-center">
        <Link
          href="/blog-details"
          className="relative block aspect-[4/5] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-2 lg:p-8 xl:px-5 xl:py-8 2xl:p-4">
          <h3>
            <Link
              href="/blog-details"
              className="mb-2 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {name}
            </Link>
          </h3>
          {g5 && ( // If showTitle is true, render the title
              <p className="text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                {g5_post}
              </p>
          )}

        </div>
      </div>
    </>
  );
};

export default SinglePloeglid;
