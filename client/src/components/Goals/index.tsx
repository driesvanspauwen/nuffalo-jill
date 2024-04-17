import SectionTitle from "../Common/SectionTitle";
import SingleGoal from "./SingleGoal";
import goalsData from "./goalsData";

const Goals = () => {
  return (
      <>
        <section id="goals" className="pt-28">
          <div className="container">
            <div className="mt-16 mb-8">
                <SectionTitle
                    title="WHAT WE STAND FOR"
                    paragraph=""
                    center
                    titleColor="brown-dark"
                />
            </div>

            {/* Center the grid of three columns and spread out over the whole width */}
            <div className="mt-20 flex justify-center w-full">
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
