'use client';
import SectionTitle from "../Common/SectionTitle";
import SingleDay from "./SingleDay";
import {cateringDataDutch, cateringDataEnglish} from "./cateringData";
import {usePathname} from "next/navigation";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Catering = () => {

    const usePathName = usePathname();

    let cateringData;
    if (usePathName === "/" || usePathName === "/nl") {
      cateringData = cateringDataDutch;
    } else {
      cateringData = cateringDataEnglish;
    }

    return (
        <>
            <section className="py-28 flex flex-col items-center">
                <div id="catering" className="container">
                    <SectionTitle
                        title="Catering"
                        mb=""
                        titleColor="brown-dark"
                        center
                    />
                </div>

                <div
                    className="mt-20 w-screen px-8 divide-y divide-gray-200 overflow-hidden rounded-lg shadow md:grid md:grid-cols-2 md:gap-px md:divide-y-0 md:w-2/3 md:mx-0">
                    {cateringData.slice(0, 2).map((day, index) => (
                        <div
                            key={day.id}
                            className={classNames(
                                index === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-bl-lg sm:rounded-tr-none' : '',
                                index === 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-tr-lg sm:rounded-bl-none' : '',
                                'group bg-brown-dark p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                            )}
                        >
                            <SingleDay day={day}/>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-20 w-screen px-8 divide-y divide-gray-200 overflow-hidden rounded-lg shadow md:grid md:grid-cols-3 md:gap-px md:divide-y-0 md:w-2/3 md:mx-0">
                    {cateringData.slice(2, 5).map((day, index) => (
                        <div
                            key={day.id}
                            className={classNames(
                                index === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-bl-lg sm:rounded-tr-none' : '',
                                index === 2 ? 'rounded-bl-lg rounded-br-lg sm:rounded-tr-lg sm:rounded-bl-none' : '',
                                'group w-full bg-brown-dark p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                            )}
                        >
                            <SingleDay day={day}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )

    /*return (
        <>
            <section className="py-16 md:py-20 lg:py-28">
                <div id="catering" className="container">
                    <SectionTitle
                        title="Catering"
                        mb="50px"
                        titleColor="brown-dark"
                        center
                    />

                    <div className="flex justify-center w-full">
                        <div
                            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-5 w-full max-w-5xl">
                            {cateringData.slice(0, 2).map((day, index) => (
                                <div key={day.id} className="flex justify-center">
                                    <SingleDay day={day}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/!* Center the grid of three columns and spread out over the whole width *!/}
                    <div className="flex justify-center w-full">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-5 w-full max-w-7xl">
                            {cateringData.slice(2, 5).map((day, index) => (
                                <div key={day.id} className="flex justify-center">
                                    <SingleDay day={day}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );*/
};

export default Catering;