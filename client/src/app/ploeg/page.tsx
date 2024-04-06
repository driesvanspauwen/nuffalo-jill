import SinglePloeglid from "@/components/Ploegleden/SinglePloeglid";
import entriesPloegleden from "@/components/Ploegleden/entriesPloegleden";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import singlePloeglid from "@/components/Ploegleden/SinglePloeglid";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

// <Breadcrumb
//         pageName="De Ploeg"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
//       />

const Ploeg = () => {
  return (
      <div
          className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative"
      >
          <Hero
              title="Ontmoet de ploeg"
              subtitle="Hier komt een super mega coole foto van ploeg"
          />

          <section className="pb-[100px] pt-[100px]">
              <div className="container pb-[50px] pl-[10%] pr-[10%]">
                  <h2 className="pb-[40px] text-center">Kandidaat Groep 5</h2>
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
                  <h2 className="pb-[40px] text-center">Catering</h2>
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
                  <h2 className="pb-[40px] text-center">Digitaal</h2>
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
                  <h2 className="pb-[40px] text-center">Evenementen</h2>
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
                  <h2 className="pb-[40px] text-center">Locatie</h2>
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
                  <h2 className="pb-[40px] text-center">Marketing</h2>
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
                  <h2 className="pb-[40px] text-center">Natura</h2>
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
                  <h2 className="pb-[40px] text-center">Pre</h2>
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
                  <h2 className="pb-[40px] text-center">Sponsoring</h2>
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
                  <h2 className="pb-[40px] text-center">Standpunten</h2>
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
