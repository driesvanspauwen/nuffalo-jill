"use client"

import { goalsDataDutch, goalsDataEnglish } from "./goalsData";
import { usePathname } from "next/navigation";
import SectionTitle from "@/components/Common/SectionTitle";
import React, { useState } from "react";
import GoalDialog from "@/components/GoalsV2/GoalDialog";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function GoalsV2({ title }) {
    const usePathName = usePathname();
    let goalsData;

    if (usePathName === "/" || usePathName === "/nl") {
        goalsData = goalsDataDutch;
    } else {
        goalsData = goalsDataEnglish;
    };

    // State to manage dialog visibility
    const [openDialog, setOpenDialog] = useState(null);

    return (
        <section className="pt-28 flex flex-col items-center">
            <div id="goals" className="absolute top-0 left-0 pointer-events-none h-screen -z-10"></div> {/* For scrollable links */}
            <div className="container">
                <div className="mt-16 mb-8">
                    <SectionTitle
                        title={title}
                        paragraph=""
                        center
                        titleColor="brown-dark"
                    />
                </div>
            </div>

            <div className="mt-20 max-w-full mx-8 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow md:grid md:grid-cols-2 md:gap-px md:divide-y-0 md:w-2/3 md:mx-0">
                {goalsData.map((goal, goalId) => (
                    <div
                        key={goal.title}
                        className={classNames(
                            goalId === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                            goalId === 1 ? 'sm:rounded-tr-lg' : '',
                            goalId === goalsData.length - 2 ? 'sm:rounded-bl-lg' : '',
                            goalId === goalsData.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                            'group relative bg-brown-dark p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                        )}
                    >
                        <div className="my-4">
                            <h3 className="text-2xl font-semibold leading-6 text-sky">
                                {/* Use button instead of link to trigger dialog */}
                                <button className="focus:outline-none" onClick={() => setOpenDialog(goalId)}>
                                    {/* Extend touch target to entire panel */}
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {goal.title}
                                </button>
                            </h3>
                            <p className="mt-2 text-base text-offwhite">
                                {goal.description}
                            </p>
                        </div>
                        <span
                            className="pointer-events-none absolute right-6 top-6 text-offwhite group-hover:text-gray-300"
                            aria-hidden="true"
                        >
                            {/* Add your SVG icon here */}
                        </span>
                    </div>
                ))}
            </div>

            {/* Render GoalDialog for each goal */}
            {goalsData.map((goal, goalId) => (
                <GoalDialog
                    key={goal.title}
                    goal={goal}
                    open={openDialog === goalId} // Control dialog opening based on selected goal
                    setOpen={(isOpen) => setOpenDialog(isOpen ? goalId : null)} // Set dialog open state for selected goal
                />
            ))}
        </section>
    )
}