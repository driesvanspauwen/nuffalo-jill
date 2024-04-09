'use client'
import Link from "next/link";
import styles from './styles.module.css';
import { Element, scroller } from 'react-scroll';


const Hero = ({title, subtitle, backgroundImage}) => {
return (
    <>
        <section
            id="home"
            className={`relative z-10 overflow-hidden bg-cover bg-center h-screen flex items-center justify-center`}
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
        <div className="container">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                <div className="text-center space-y-8">
                    <h1 className={`${styles.buffaloFont} text-brown-medium -mt-32 leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}>
                        {title}
                    </h1>
                    <div className="flex flex-col items-center justify-center">
                        <p>{subtitle}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-brown-dark pointer-events-none z-10"></div>
    </section>
    </>
);
};

export default Hero;
