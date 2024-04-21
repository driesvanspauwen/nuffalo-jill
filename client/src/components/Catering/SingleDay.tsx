import React from 'react';
import {Catering, CateringElement} from "@/types/catering";
import SingleElement from './SingleElement';

const SingleDay = ({day}: { day: Catering }) => {
    const {date, cateringelements} = day;

    return (
        <div className="my-4">
            <h3 className="text-2xl font-semibold leading-6 text-sky">
                {date}
            </h3>
            <p className="mt-2 text-xl text-offwhite">
                {cateringelements.map((cateringelement: CateringElement) => (
                    <SingleElement key={cateringelement.id} text={cateringelement.content}
                                   price={cateringelement.price}/>
                ))}
            </p>
        </div>
    );
};

export default SingleDay;