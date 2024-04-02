import SectionTitle from "../Common/SectionTitle";
import SingleGoal from "./SingleGoal";
import goalsData from "./goalsData";

const Goals = () => {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div id="goals" className="container">
          <SectionTitle
              title="Main Goals"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              center
              mb="30px"
          />

          {/* Center the grid of three columns and spread out over the whole width */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 w-full max-w-7xl">
              {goalsData.map((goal, index) => (
                  <div key={goal.id} className="flex justify-center">
                    <SingleGoal goal={goal}/>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Goals;
