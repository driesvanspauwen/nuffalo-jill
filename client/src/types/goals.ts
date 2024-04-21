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
    title: string;
    short: string;
    subgoals?: Subgoal[];
};
  