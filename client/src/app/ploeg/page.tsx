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
    <>
        <Hero
            title = "Ontmoet de ploeg"
            subtitle="Hier komt een super mega coole foto van ploeg"
        />

        <section className="pb-[100px] pt-[100px]">
            <div className="container pb-[50px] pl-[10%] pr-[10%]">
                <h2 className="pb-[40px] text-center">Kandidaat Groep 5</h2>
                <div className="-mx-6 flex flex-wrap justify-center">
                    {entriesPloegleden.filter(x => (x.post === "Kandidaat Groep 5")).map((singlePloeglid) => (
                        <div
                            key={singlePloeglid.id}
                            className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 pl-[2%] pr-[2%] pb-[30px]"
                        >
                            <SinglePloeglid ploeglid={singlePloeglid}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-white h-0.5"></div> {/* White line */}
            <div className="container pb-[50px] pt-[50px]">
                <h2 className="pb-[40px] text-center">Digitaal</h2>
                <div className="-mx-6 flex flex-wrap justify-center">
                    {entriesPloegleden.filter(x => (x.post === "Digitaal")).map((singlePloeglid) => (
                        <div
                            key={singlePloeglid.id}
                            className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/4 pl-[2%] pr-[2%] pb-[30px]"
                        >
                            <SinglePloeglid ploeglid={singlePloeglid}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
};

export default Ploeg;
