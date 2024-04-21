export type Subsubgoal = {
    id: number;
    description: string;
}

export type Subgoal = {
    id: number;
    title: string;
    subsubgoals?: Subsubgoal[];
};

export type Goal = {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
    paragraph?: string;
    subgoals?: Subgoal[];
};
  