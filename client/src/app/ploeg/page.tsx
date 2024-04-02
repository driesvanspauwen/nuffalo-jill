import SinglePloeglid from "@/components/Ploegleden/SinglePloeglid";
import entriesPloegleden from "@/components/Ploegleden/entriesPloegleden";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import singlePloeglid from "@/components/Ploegleden/SinglePloeglid";

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
      <Breadcrumb
        pageName="De Ploeg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <h2 className="pb-[40px]">Kandidaat Groep 5</h2>
          <div className="-mx-6 flex flex-wrap justify-center">
            {entriesPloegleden.filter(x => (x.post==="Kandidaat Groep 5")).map((singlePloeglid) => (
              <div
                key={singlePloeglid.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SinglePloeglid ploeglid={singlePloeglid} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Ploeg;
