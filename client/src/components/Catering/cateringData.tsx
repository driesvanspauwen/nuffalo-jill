import { Catering, CateringElement } from "@/types/catering";

const cateringData: Catering[] = [
    {
      id: 1,
      date: "Toog",
      cateringelements: [
        { id: 1, content: "Frisdrank/Bier/Redbull", price: 1 },
        { id: 2, content: "Karmelier/Watermelon Spritz", price: 1.50 },
        { id: 3, content: "Aperol Spritz", price: 2.50 }
      ]
    },
    {
        id: 2,
        date: "Frituur",
        cateringelements: [
          { id: 1, content: "Frietjes", price: 1.2 },
          { id: 2, content: "Vlees/Kaaskroket", price: 1.2 },
          { id: 3, content: "Frikandel/Kipcorn/Bamischijf", price: 1.2 }
        ]
    },
    {
        id: 3,
        date: "Maandag 29/4",
        cateringelements: [
          { id: 1, content: "Croque monsieur", price: 1 },
          { id: 2, content: "Panini", price: 1.5 },
          { id: 3, content: "Paella", price: 4 }
        ]
    },
    {
        id: 4,
        date: "Dinsdag 30/4",
        cateringelements: [
          { id: 1, content: "Brunch", price: 4 },
          { id: 2, content: "Chili con carne", price: 4 },
          { id: 3, content: "Chili sin carne", price: 4 }
        ]
    },
    {
        id: 5,
        date: "Woensdag 1/5",
        cateringelements: [
          { id: 1, content: "Wraps", price: 2.5 },
          { id: 2, content: "BBQ: 2 stukken vlees", price: 4 },
          { id: 3, content: "BBQ: 3 stukken vlees", price: 5 }
        ]
    },
];

export default cateringData;