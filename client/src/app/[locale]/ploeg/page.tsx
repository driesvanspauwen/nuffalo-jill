import SinglePloeglid from "@/components/Ploegleden/SinglePloeglid";
import entriesPloegleden from "@/components/Ploegleden/entriesPloegleden";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import singlePloeglid from "@/components/Ploegleden/SinglePloeglid";
import TeamHero from "@/components/Hero/teamHero";
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
    title: "Nuffalo Jill | Meet the team",
    description: "This is Team Page for Election Team Nuffalo Jill",
  };

export default async function Ploeg() {

    const ploeg = await getTranslations('Ploeg');
    const ontdek = await getTranslations('TeamHero');

    return (
      <div
          className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative"
      >
          <TeamHero
              backgroundImage="/images/hero/group-picture.jpg"
              scrollId="team"
              description={ontdek('description')}
          />

          <section className="relative pb-[100px] pt-[100px]">`
              <div id="team" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div> {/*For scroll effect*/}
              <div className="container pb-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('g5')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('catering')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('digitaal')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('evenementen')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('locatie')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('marketing')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('natura')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('pre')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('sponsoring')}</h2>
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

              <div className="w-full bg-white h-0.5"></div>
              {/* White line */}

              <div className="container pb-[50px] pt-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">{ploeg('standpunten')}</h2>
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