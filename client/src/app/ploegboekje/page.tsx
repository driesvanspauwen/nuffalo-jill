'use client'

import {pdfjs, Document, Page} from 'react-pdf'
import PdfEmbed from "@/components/PdfEmbed";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


const Ploegboekje = () => {
    const [pdf, setPdf] = React.useState();


    return (
      <div
          className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative"
      >
          <section className="pb-[120px] pt-[100px]">
              <div className="container">
                  <div className="w-full -mx-4 flex justify-center"> {/* Centering the content */}
                      <div className="w-full px-4">
                          <div>
                              <div className="w-full flex justify-center"> {/* Centering the embed element */}
                                  <PdfEmbed/>
                              </div>
                              <a className="flex md:hidden justify-center mb-5 text-center" href="/ploegboekje/Ploegboekje.pdf"><u>Download
                                  het ploegboekje!</u></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default Ploegboekje;

