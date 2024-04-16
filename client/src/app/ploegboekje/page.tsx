
const Ploegboekje = () => {
  return (
      <div
          className="z-0 bg-[url(/images/home-content-wrapper/parchment.jpg)] bg-cover bg-center relative"
      >
          <section className="pb-[120px] pt-[100px] mx-auto">
              <div className="container mx-auto">
                  <div className="w-full -mx-4"> {/* Centering the content */}
                      <div className="w-full mx-auto px-4">
                          <div>
                              <div className="w-full mx-auto flex justify-center"> {/* Centering the embed element */}
                                  <embed
                                      className="hidden mx-auto md:block"
                                      style={{
                                          width: '90vw',
                                          height: '90vh',
                                      }}
                                      type='application/pdf'
                                      src="/ploegboekje/ploegboekje_nuffalo_jill.pdf"
                                  />
                              </div>
                              <a className="flex md:hidden justify-center mb-5 text-center text-brown-medium" href="/ploegboekje/ploegboekje_nuffalo_jill.pdf"><u>Download
                                  het ploegboekje!</u></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default Ploegboekje;

