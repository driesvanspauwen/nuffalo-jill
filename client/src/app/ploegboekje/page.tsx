'use client'

import {pdfjs, Document, Page} from 'react-pdf'
import PdfEmbed from "@/components/PdfEmbed";
import React from "react";
import PDFViewer from "@/components/PdfEmbed";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


const Ploegboekje = () => {
    const [pdf, setPdf] = React.useState();


    return (
      <PDFViewer file="ploegboekje/DonLupo-compressed.pdf"/>
  );
};

export default Ploegboekje;

