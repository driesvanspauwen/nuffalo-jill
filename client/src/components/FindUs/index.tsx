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
                                <div className="flex space-x-4">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <svg className="w-6 h-6 text-offwhite" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.35C0 23.406.594 24 1.325 24h11.49V14.708H9.34v-3.63h3.473V8.41c0-3.443 2.1-5.317 5.172-5.317 1.473 0 2.737.11 3.104.158v3.6h-2.13c-1.673 0-1.995.794-1.995 1.96v2.57h3.99l-.522 3.63h-3.468V24h6.803c.73 0 1.325-.594 1.325-1.325V1.325C24 .594 23.406 0 22.675 0z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <svg className="w-6 h-6 text-offwhite" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.128 1.124C7.691 8.094 4.064 6.13 1.64 3.161c-.424.724-.666 1.565-.666 2.476 0 1.71.87 3.213 2.188 4.096-.806-.026-1.566-.247-2.228-.616v.062c0 2.386 1.693 4.374 3.946 4.828-.413.111-.849.171-1.298.171-.317 0-.626-.03-.927-.086.627 1.956 2.445 3.379 4.6 3.419-1.687 1.32-3.808 2.105-6.115 2.105-.398 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.213 7.548 2.213 9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636.964-.695 1.796-1.562 2.457-2.549z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <svg className="w-6 h-6 text-offwhite" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindUs;
