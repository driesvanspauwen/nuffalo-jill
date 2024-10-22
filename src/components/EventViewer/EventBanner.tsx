import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventBanner = ({link, image}) => {
    return (
        <>
            <a target="_blank" href={link} rel="noopener noreferrer" className="block aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <Image
                    src={image}
                    width={1000}
                    height={760}
                    className="relative mt-8"
                    alt="Screenshots of the dashboard project showing desktop version"
                />
            </a>
        </>
    );
}

export default EventBanner;