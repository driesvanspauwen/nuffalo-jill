import React from "react";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-2/3">
            <div
              className="relative h-[400px] w-full"
              data-wow-delay=".15s"
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps?q=Steengroevenlaan%203,%203001%20Leuven&output=embed"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Location
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Grassfield in front of Alma 3
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Contact Us
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Email: kiesploegbeta@vtk.be
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
