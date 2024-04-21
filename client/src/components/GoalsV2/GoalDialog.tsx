import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {Goal, Subgoal} from "@/types/goals";
import SubGoal from "@/components/GoalsV2/SubGoal";

export default function GoalDialog({ goal, open, setOpen }: { goal: Goal; open: boolean; setOpen: (open: boolean) => void }) {
    const { title, subgoals } = goal;

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-brown-dark bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen h-screen flex justify-center items-center">
                    <div className="flex h-2/3 items-end justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="h-full overflow-y-scroll no-scrollbar transform rounded-lg bg-sky text-left shadow-xl transition-all w-full max-w-lg">
                                <div className="absolute right-0 top-0 pr-8 pt-8 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md bg-sky text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6 text-brown-dark" aria-hidden="true"/>
                                    </button>
                                </div>
                                <div className="m-8">
                                    <div className="wow fadeInUp" data-wow-delay=".15s">
                                        <h3 className="mb-5 text-4xl font-bold text-brown-dark">
                                            {title}
                                        </h3>
                                        <div className="mb-12 lg:mb-0">
                                            <div className="flex flex-wrap">
                                                <div className="w-full sm:w-1/2 lg:w-full xl:w-full">
                                                    {subgoals.map((subgoal: Subgoal) => (
                                                        <SubGoal key={subgoal.id} title={subgoal.title}
                                                                 subsubgoals={subgoal.subsubgoals}/>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
