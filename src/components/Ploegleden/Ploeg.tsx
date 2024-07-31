"use client";

import SinglePloeglid from "./SinglePloeglid";
import entriesPloegleden from "./entriesPloegleden";
import TeamHero from "../Hero/teamHero";
import React from "react";
import {Link as ReactLink} from "react-scroll"
import entriesPosten from "./entriesPosten";

export default function Ploeg({translations, singlePloegLidTranslations, teamHeroTranslations}) {
    console.log({translations});
    return (
      <div
          className="z-0 bg-offwhite bg-cover bg-center relative"
      >
          <TeamHero
              backgroundImage="/images/hero/group-picture.jpg"
              scrollId="team"
              description={teamHeroTranslations['description']}
          />

          <section className="relative pb-16 pt-16">
              <div id="team" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div>
              {/*For scroll effect*/}

              <div className="mx-auto text-center pb-16">
                  <div className="flex justify-center items-center flex-wrap">
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
                                  {translations[post.id]}
                              </ReactLink>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="g5" className="container pb-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['g5']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center" style={{alignItems: 'stretch'}}>
                      {entriesPloegleden.filter(x => (x.post === "Kandidaat Groep 5")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/2 xl:w-1/3 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="catering" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['catering']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Catering")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="digitaal" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['digitaal']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Digitaal")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="evenementen" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['evenementen']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Evenementen")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="locatie" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['locatie']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Locatie")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="marketing" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['marketing']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Marketing")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="natura" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['natura']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Natura")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="pre" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['pre']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Pre")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="sponsoring" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['sponsoring']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Sponsoring")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="standpunten" className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-brown-dark text-center">{translations['standpunten']}</h2>
                  <div className="-mx-6 flex flex-wrap justify-center">
                      {entriesPloegleden.filter(x => (x.post === "Standpunten")).map((singlePloeglid) => (
                          <div
                              key={singlePloeglid.id}
                              className="w-1/2 px-4 lg:w-1/3 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                          >
                              <SinglePloeglid ploeglid={singlePloeglid} singlePloegLidTranslations={singlePloegLidTranslations}/>
                          </div>
                      ))}
                  </div>
              </div>

          </section>
      </div>
  );
};