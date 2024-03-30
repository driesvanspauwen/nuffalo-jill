export type Subgoal = {
    id: number;
    title: string;
};

export type Goal = {
    id: number;
    icon: JSX.Element;
    title: string;
    paragraph?: string;
    subgoals?: Subgoal[];
};
  