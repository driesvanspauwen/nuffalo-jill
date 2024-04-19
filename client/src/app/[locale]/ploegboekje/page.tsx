const Ploegboekje = () => {

    return (
        <div className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative">
            <section className="flex justify-center items-center">
                <div className="container mx-auto mx-4 mt-28 mb-32 hidden md:block w-full h-[90vh]"> {/* Adjusted container styles */}
                    <embed
                        style={{
                            width: '95%',
                            height: '95%',
                        }}
                        type='application/pdf'
                        src="/ploegboekje/ploegboekje_nuffalo_jill.pdf"
                    />
                </div>
                <a className="flex px-4 py-32 md:hidden justify-center mb-5 text-center" href="/ploegboekje/Ploegboekje.pdf">
                    <u>Download het ploegboekje!</u>
                </a>
            </section>
        </div>
    );
};

export default Ploegboekje;
