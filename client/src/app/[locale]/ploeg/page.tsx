"use client";

import SinglePloeglid from "@/components/Ploegleden/SinglePloeglid";
import entriesPloegleden from "@/components/Ploegleden/entriesPloegleden";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import singlePloeglid from "@/components/Ploegleden/SinglePloeglid";
import TeamHero from "@/components/Hero/teamHero";
import React from "react";
import {Link as ReactLink} from "react-scroll"
import entriesPosten from "@/app/[locale]/ploeg/entriesPosten";

const Ploeg = () => {
  return (
      <div
          className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative"
      >
          <TeamHero
              backgroundImage="/images/hero/group-picture.jpg"
              scrollId="team"
          />

          <div className="mb-2 mt-10 mx-auto text-center pt-[50px]">
              <div className="flex justify-center items-center flex-wrap" >
                  {entriesPosten.map((post) => (
                      <div key={post.key} className="mb-3 mr-3 items-center">
                          <ReactLink
                              className="shadow-one hover:shadow-two dark:hover:shadow-gray-dark bg-brown-dark inline-flex items-center justify-center rounded-sm px-4 py-2 text-lg text-sky duration-300 cursor-pointer"
                              to={post.id}
                              spy={true}
                              smooth={true}
                              offset={-75}
                              duration={500}
                          >
                              {post.name}
                          </ReactLink>
                      </div>
                  ))}
              </div>
          </div>
          <section className="relative pb-[100px] pt-[100px]">

              <div id="team" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div>
              {/*For scroll effect*/}
              <div id="g5" className="container pb-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Kandidaat Groep 5</h2>
                  <div className="-mx-6 flex flex-wrap justify-center" style={{alignItems: 'stretch'}}>
                      {entriesPloegleden.filter(x => (x.post === "Kandidaat Groep 5")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/2 xl:w-1/3 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="catering" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Catering</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Catering")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="digitaal" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Digitaal</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Digitaal")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="evenementen" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Evenementen</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Evenementen")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="locatie" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Locatie</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Locatie")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="marketing" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Marketing</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Marketing")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="natura" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Natura</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Natura")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="pre" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Pre</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Pre")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="sponsoring" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Sponsoring</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Sponsoring")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="w-full bg-brown-dark h-0.5"></div>
              {/* Brown line */}

              <div id="standpunten" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">Standpunten</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Standpunten")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid}/>
                          </div>
                      ))}
                  </div>
              </div>

          </section>
      </div>
  );
};

export default Ploeg;
