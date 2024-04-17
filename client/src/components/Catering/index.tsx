import SectionTitle from "../Common/SectionTitle";
import SingleDay from "./SingleDay";
import cateringData from "./cateringData";

const Catering = () => {
    return (
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

                    {/* Center the grid of three columns and spread out over the whole width */}
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
    );
};

export default Catering;