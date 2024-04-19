import React from 'react';
import { Goal, Subgoal } from "@/types/goals";
import SubGoal from "./SubGoal";

const SingleGoal = ({ goal }: { goal: Goal }) => {
  const { icon, title, subgoals } = goal;

  return (
    <div className="mb-8">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <h3 className="mb-5 text-xl lg:text-2xl font-bold text-brown-dark sm:text-3xl xl:text-4xl">
          {title}
        </h3>
        <div className="mb-12 max-w-[570px] lg:mb-0">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-full xl:w-full">
              {subgoals.map((subgoal: Subgoal) => (
                <SubGoal key={subgoal.id} title={subgoal.title} subsubgoals={subgoal.subsubgoals} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGoal;
