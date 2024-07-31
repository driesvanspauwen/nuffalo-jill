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
                    className="mt-20 w-screen px-8 divide-y divide-gray-200 overflow-hidden rounded-lg md:grid md:grid-cols-2 md:gap-px md:divide-y-0 md:w-2/3 md:mx-0">
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
                    className="mt-8 sm:mt-20 w-screen px-8 divide-y divide-gray-200 overflow-hidden rounded-lg md:grid md:grid-cols-3 md:gap-px md:divide-y-0 md:w-2/3 md:mx-0">
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
};

export default Catering;