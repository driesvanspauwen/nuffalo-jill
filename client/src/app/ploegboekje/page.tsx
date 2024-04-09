"use client";

const Ploegboekje = () => {
  return (
    <div className="relative z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center">
      <section className="pb-[120px] pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex w-full justify-center">
            {" "}
            {/* Centering the content */}
            <div className="w-full px-4">
              <div>
                <div className="flex w-full justify-center">
                  {" "}
                  {/* Centering the embed element */}
                  <embed
                    className="hidden md:block"
                    style={{
                      width: "1600px",
                      height: "1000px",
                    }}
                    type="application/pdf"
                    src="/ploegboekje/DonLupo.pdf"
                  />
                </div>
                <a
                  className="mb-5 flex justify-center text-center md:hidden"
                  href="/ploegboekje/Ploegboekje.pdf"
                >
                  <u>Download het ploegboekje!</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ploegboekje;
