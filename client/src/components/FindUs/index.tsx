import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";

const FindUs = () => {
    return (
        <section
            className="bg-brown-dark bg-cover bg-center bg-repeat flex flex-col sm:flex-row pt-16 md:pt-20 lg:pt-28 pb-8 md:pb-10 lg:pb-14">
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
                                style={{border: 0}}
                                src="https://www.google.com/maps?q=Steengroevenlaan%203,%203001%20Leuven&output=embed"
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/3">
                        <div className="max-w-[470px]">
                            <div className="mb-9">
                                <h1 className="mb-4 font-bold text-sky text-2xl">
                                    Email
                                </h1>
                                <p className="text-lg leading-relaxed font-medium text-offwhite">
                                    beta@vtk.be
                                </p>
                            </div>
                            <div className="mb-9">
                                <h1 className="mb-4 font-bold text-sky text-2xl">
                                    Location
                                </h1>
                                <p className="text-lg leading-relaxed font-medium text-offwhite">
                                    Grassfield in front of Alma 3
                                </p>
                            </div>
                            <div className="mb-9">
                                <h1 className="mb-4 font-bold text-sky text-2xl">
                                    Social Media
                                </h1>
                                <p className="text-lg leading-relaxed font-medium text-offwhite">
                                    {/*TODO*/}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindUs;