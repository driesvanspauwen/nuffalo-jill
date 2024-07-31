export type CateringElement = {
    id: number;
    content: string;
    price: number;
};

export type Catering = {
    id: number;
    date: string;
    cateringelements?: CateringElement[];
};