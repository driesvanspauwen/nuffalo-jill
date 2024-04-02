import React from 'react';
import { Goal, Subgoal } from "@/types/goals";
import SubGoalList from "./SubGoalList";

const SingleGoal = ({ goal }: { goal: Goal }) => {
  const { icon, title, subgoals } = goal;

  return (
    <div className="mb-16">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-sky bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl lg:text-2xl font-bold text-black dark:text-white sm:text-3xl xl:text-4xl">
          {title}
        </h3>
        {/* Render the subgoals */}
        <div className="mb-12 max-w-[570px] lg:mb-0">
          <div className="mx-[-12px] flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-full">
              {/* Map through the subgoals and render each one */}
              {subgoals.map((subgoal: Subgoal) => (
                <SubGoalList key={subgoal.id} text={subgoal.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGoal;
