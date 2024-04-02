'use client'

import { Document } from 'react-pdf'
import PdfEmbed from "src/components/PdfEmbed/index";
import { Metadata } from "next";


const Ploegboekje = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="text-center mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Ploegboekje
                </h2>
                <PdfEmbed></PdfEmbed>

                <object
                    type="application/pdf"
                    data = "public/ploegboekje/Ploegboekje.pdf"
                    width= "600"
                    height= "800"
                ></object>


                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Ploegboekje;
