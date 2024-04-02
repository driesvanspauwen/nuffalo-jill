'use client'

import PdfEmbed from "src/components/PdfEmbed/index";
import { Metadata } from "next";
import {pdfjs, Document, Page} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


const Ploegboekje = () => {
  return (
      <>
        <section className="pb-[120px] pt-[100px]">
          <div className="container">
            <div className="-mx-4 flex justify-center"> {/* Centering the content */}
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h2 className="text-center mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Ploegboekje
                  </h2>
                  <a className="flex justify-center mb-5" href="/ploegboekje/Ploegboekje.pdf"><u>Download het ploegboekje</u></a>
                  <div className="flex justify-center"> {/* Centering the embed element */}
                    <embed
                        style={{
                          width: '800px',
                          height: '1000px',
                        }}
                        type='application/pdf'
                        src="/ploegboekje/Ploegboekje.pdf"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Ploegboekje;

