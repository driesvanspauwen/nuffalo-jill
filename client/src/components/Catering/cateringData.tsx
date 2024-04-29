import { Catering } from "@/types/catering";

const cateringDataDutch: Catering[] = [
    {
      id: 1,
      date: "Toog (Altijd)",
      cateringelements: [
        { id: 1, content: "Frisdrank/Bier/Redbull", price: 1 },
        { id: 2, content: "Karmeliet/Watermelon Spritz", price: 1.50 },
        { id: 3, content: "Aperol Spritz", price: 2.50 }
      ]
    },
    {
        id: 2,
        date: "Frituur (Altijd)",
        cateringelements: [
          { id: 1, content: "Frietjes", price: 1.5 },
          { id: 2, content: "Snacks", price: 1.5 },
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

const cateringDataEnglish: Catering[] = [
  {
    id: 1,
    date: "Bar (All the time)",
    cateringelements: [
      { id: 1, content: "Soda/Beer/Redbull", price: 1 },
      { id: 2, content: "Karmeliet/Watermelon Spritz", price: 1.50 },
      { id: 3, content: "Aperol Spritz", price: 2.50 }
    ]
  },
  {
      id: 2,
      date: "Fries stand (All the time)",
      cateringelements: [
        { id: 1, content: "Fries", price: 1.5 },
        { id: 2, content: "Snacks", price: 1.5 },
      ]
  },
  {
      id: 3,
      date: "Monday 29/4",
      cateringelements: [
        { id: 1, content: "Croque monsieur", price: 1 },
        { id: 2, content: "Panini", price: 1.5 },
        { id: 3, content: "Paella", price: 3 }
      ]
  },
  {
      id: 4,
      date: "Tuesday 30/4",
      cateringelements: [
        { id: 1, content: "Brunch", price: 4 },
        { id: 2, content: "Chili con carne", price: 4 },
        { id: 3, content: "Chili sin carne", price: 4 }
      ]
  },
  {
      id: 5,
      date: "Wednesday 1/5",
      cateringelements: [
        { id: 1, content: "Wraps", price: 2.5 },
        { id: 2, content: "BBQ: 2 pieces of meat", price: 4 },
        { id: 3, content: "BBQ: 3 pieces of meat", price: 5 }
      ]
  },
];

export {cateringDataDutch, cateringDataEnglish};