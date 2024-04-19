'use client'

type TeamHeroProps = {
    scrollId: string;
    backgroundImage: string;
};

const TeamHero: React.FC<TeamHeroProps> = ({ scrollId, backgroundImage }) => {
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
                                {/*<h1 className={`text-offwhite -mt-32 leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}>
                                    {title}
                                </h1>
                                <div className="flex flex-col items-center justify-center">
                                    <p>{subtitle}</p>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-brown-dark z-10 flex justify-center items-center">
                    <button
                        className="relative border-offwhite text-xl text-offwhite bg-transparent border-2 px-4 py-2 mt-32 hover:bg-brown-dark hover:text-offwhite transition duration-300 ease-in-out"
                        onClick={(e) => {
                            {
                                setTimeout(() => {
                                    (window.innerWidth < 500 ?
                                            document.getElementById(scrollId) &&
                                            document
                                                .getElementById(scrollId)
                                                .scrollIntoView({ behavior: "smooth", block: "start",
                                                })
                                            :
                                            document.getElementById(scrollId) &&
                                            document
                                                .getElementById(scrollId)
                                                .scrollIntoView({ behavior: "smooth", block: "end",
                                                })
                                    )
                                }, 100)
                            }}}
                    >
                        <p>DISCOVER NUFFALO JILL</p>
                    </button>
                </div>

            </section>
        </>
    );
};

export default TeamHero;
