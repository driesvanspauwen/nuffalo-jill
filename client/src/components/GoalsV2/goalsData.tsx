import React from 'react';
import { Goal, Subgoal } from "@/types/goals";

const goalsDataDutch: Goal[] = [
  {
    id: 1,
    title: "VTCommuniceert",
    short: "Beter beheer van Instagram pagina en opstart van VTK Toledo pagina",
    subgoals: [
      {
        id: 1,
        title: "INSTAGRAM",
        subsubgoals: [
          {id: 1, description: "Opschonen zodat er enkel nog recente en nuttige info op staat"},
          {id: 2, description: "Inzetten op reels"},
          {id: 3, description: "Linktree in bio naar de site, pagina’s van werk-/jaargroepen, kalender ..."},
          {id: 4, description: "Behind the scenes, zo kan je zien waar VTK zich allemaal mee bezig houdt en hoe onze evenementen tot stand komen"},
          {id: 5, description: "Light Up Your Block uitbreiden"},
        ]
      },
      {
        id: 2,
        title: "TOLEDO-PAGINA",
        subsubgoals: [
          {id: 1, description: "VTK Toledo om studenten op de hoogte te houden van onderwijs en CuDi gerelateerde zaken, alsook een overzicht van wat elke post voor jou kan betekenen"},
        ]
      },
    ]
  },
  {
    id: 2,
    title: "VTK voor iedereen",
    short: "KULAK-studenten en internationals beter verwelkomen en ondersteunen",
    subgoals: [
      {
        id: 1,
        title: "KULAK",
        subsubgoals: [
          {id: 1, description: "Een onthaalactiviteit om iedereen te verwelkomen in Leuven"},
          {id: 2, description: "Info geven over CuDi en VTK in het algemeen"},
        ]
      },
      {
        id: 2,
        title: "Internationals",
        subsubgoals: [
          {id: 1, description: "Mix-activiteiten tussen de internationals en de Leuvense studenten"},
          {id: 2, description: "Betere begeleiding bij aankomst (ISP invullen, Leuven leren kennen...)"},
        ]
      },
      {
        id: 3,
        title: "En nog meer",
        subsubgoals: [
          {id: 1, description: "Verjaardagsmails naar elk lid"},
          {id: 2, description: "Peter-Meter werking uitbreiden"},
        ]
      },
    ]
  },
  {
    id: 3,
    title: "Shiften @ VTK",
    short: "Shiften aantrekkelijker maken met een Bingo en het verbeteren van shifterswelzijn",
    subgoals: [
      {
        id: 1,
        title: "BINGO!",
        subsubgoals: [
          {id: 1, description: "Een shiftersbingo met shiften van verschillende posten binnen VTK, wanneer de hele kaart vol is, volgt er een leuke prijs!"},
        ]
      },
      {
        id: 2,
        title: "SHIFTERSWELZIJN",
        subsubgoals: [
          {id: 1, description: "Feedbackform, zo kan je als shifter altijd verbeterpunten of problemen aankaarten om onze werking als VTK te verbeteren"},
          {id: 2, description: "Handleiding per shift, zodat je nooit voor verrassingen komt te staan over wat van jou verwacht wordt"},
          {id: 3, description: "Shiftersverantwoordelijke voor alle vragen"},
        ]
      },
    ]
  },
  {
    id: 4,
    title: "VTFaculteit",
    short: "Inzetten op facultaire zaken zoals het 600 jarig jubileum, bachelorhervorming en startersdagen",
    subgoals: [
      {
        id: 1,
        title: "",
        subsubgoals: [
          {id: 1, description: "Het is volgend jaar het 600 jaar jubileum van de KULeuven, een heus feestjaar dus. Samen met de faculteit zetten we dit graag in de verf"},
          {id: 2, description: "Bachelorhervorming opvolgen aangezien volgend jaar het eerste jaar zal zijn dat deze geïmplementeerd wordt"},
          {id: 3, description: "Inzetten op startersdagen"},
        ]
      },
    ]
  },
];

const goalsDataEnglish: Goal[] = [
  {
    id: 1,
    title: "VTCommunicates",
    short: "Better management of Instagram page and initiation of VTK Toledo page",
    subgoals: [
      {
        id: 1,
        title: "INSTAGRAM",
        subsubgoals: [
          {id: 1, description: "Clean up such that only recent and useful information remains"},
          {id: 2, description: "More attention to reels"},
          {id: 3, description: "Linktree in bio to the website, pages of work-/yeargroups, calender ..."},
          {id: 4, description: "Behind the scenes to see what VTK actually does and how our events are established"},
          {id: 5, description: "Expand Light Up Your Block"},
        ]
      },
      {
        id: 2,
        title: "TOLEDO-PAGINA",
        subsubgoals: [
          {id: 1, description: "VTK Toledo to inform students regarding education and CuDi related things, as well as an overview of what every post can do for you"},
        ]
      },
    ]
  },
  {
    id: 2,
    title: "VTK for everyone",
    short: "Welcoming and supporting KULAK students and internationals better.",
    subgoals: [
      {
        id: 1,
        title: "KULAK",
        subsubgoals: [
          {id: 1, description: "An introduction activity to welcome everyone in Leuven"},
          {id: 2, description: "Giving general information regarding the CuDi and VTK"},
        ]
      },
      {
        id: 2,
        title: "Internationals",
        subsubgoals: [
          {id: 1, description: "Activities at which internationals and local students are mixed"},
          {id: 2, description: "Improved guidance upon arrival (filling in ISP, getting to know Leuven ...)"},
        ]
      },
      {
        id: 3,
        title: "And much more",
        subsubgoals: [
          {id: 1, description: "Birthday email to every member"},
          {id: 2, description: "Expanding the Peter-Meter operation"},
        ]
      },
    ]
  },
  {
    id: 3,
    title: "Shifts @ VTK",
    short: "Making shifts more attractive with a Bingo and improving shifter well-being.",
    subgoals: [
      {
        id: 1,
        title: "BINGO!",
        subsubgoals: [
          {id: 1, description: "A shiftersbingo with shifts coming from different VTK posts, including a prize when the bingo card is filled!"},
        ]
      },
      {
        id: 2,
        title: "WELLBEING OF SHIFTERS",
        subsubgoals: [
          {id: 1, description: "Feedbackform to address improvements or problems as a shifter to improve the functioning of VTK"},
          {id: 2, description: "Manual for every shift, to avoid surprises regarding what is expected from you during your shift"},
          {id: 3, description: "Person responsible for shifts to address your questions to"},
        ]
      },
    ]
  },
  {
    id: 4,
    title: "VTFaculty",
    short: "Investing in faculty matters such as the 600th anniversary celebration, bachelor reform, and orientation days.",
    subgoals: [
      {
        id: 1,
        title: "",
        subsubgoals: [
          {id: 1, description: "Next academic year is the 600 year anniversary of the KULeuven, we would like to highlight this in cooperation with the faculty."},
          {id: 2, description: "Following up of the bachelor reformation as it will be implemented from next year on"},
          {id: 3, description: "More focus on the orientation days"},
        ]
      },
    ]
  },
];

export {goalsDataDutch, goalsDataEnglish};
