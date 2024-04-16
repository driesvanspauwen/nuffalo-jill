import React from 'react';
import {Catering, CateringElement} from "@/types/catering";
import SingleElement from './SingleElement';

const SingleDay = ({day}: { day: Catering }) => {
    const {date, cateringelements} = day;

    return (

        <div className="mb-3">
            <div
                className="relative z-10 rounded-sm bg-brown-dark px-8 py-10 shadow-three hover:shadow-one dark:shadow-two dark:hover:shadow-gray-dark">
                <div className="wow fadeInUp m-2" data-wow-delay="5s">
                    <h5 className="mb-5 text-center text-xl lg:text-2xl font-bold text-sky sm:text-3xl xl:text-4xl">
                        {date}
                    </h5>

                    {/* Render the drinks and stuff */}
                    <div className="mb-3 max-w-[570px] lg:mb-0">
                        <div className="mx-[-12px] flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-full">
                                {/* Map through the subgoals and render each one */}
                                {cateringelements.map((cateringelement: CateringElement) => (
                                    <SingleElement key={cateringelement.id} text={cateringelement.content}
                                                   price={cateringelement.price}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleDay;