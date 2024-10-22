"use client";
import Image from "next/image";
import { Brand } from "../../types/brand";
import brandsData from "./brandsData";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full opacity-70 transition hover:opacity-100"
      >
        <Image src={image} alt={name} width={500} height={500} className="block max-w-200 max-h-100" />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-brown-dark">
        <div className="container">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full ">
                <div className="flex flex-wrap items-center justify-center rounded-sm  px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                  {brandsData.map((brand) => (
                    <SingleBrand key={brand.id} brand={brand} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="flex items-center justify-between">
              <p className="text-sm text-sky">
                © 2024 Electoral Team Nuffalo Jill All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
