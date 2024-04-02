import SectionTitle from "../Common/SectionTitle";
import SinglePloeglid from "./SinglePloeglid";
import entriesPloegleden from "./entriesPloegleden";

const Ploeg = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {entriesPloegleden.map((ploeglid) => (
            <div key={ploeglid.id}
                 className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <SinglePloeglid ploeglid={ploeglid} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ploeg;
