import { Menu } from "@/types/menu";

const menuDataDutch: Menu[] = [
  {
    id: 1,
    title: "HOME",
    path: "home",
    newTab: false,
  },
  {
    id: 2,
    title: "OVER ONS",
    path: "video",
    newTab: false,
  },
  {
    id: 4,
    title: "STANDPUNTEN",
    path: "goals",
    newTab: false,
  },
  {
    id: 5,
    title: "KIESWEEK",
    path: "events",
    newTab: false,
  },
  {
    id: 3,
    title: "PLOEG",
    path: "/ploeg",
    newTab: false,
  },
];

const menuDataEnglish: Menu[] = [
  {
    id: 1,
    title: "HOME",
    path: "home",
    newTab: false,
  },
  {
    id: 2,
    title: "WHO WE ARE",
    path: "video",
    newTab: false,
  },
  {
    id: 4,
    title: "WHAT WE STAND FOR",
    path: "goals",
    newTab: false,
  },
  {
    id: 5,
    title: "ELECTION WEEK",
    path: "events",
    newTab: false,
  },
  {
    id: 3,
    title: "TEAM",
<<<<<<< HEAD
    path: "/ploeg",
=======
    path: "ploeg",
>>>>>>> 41208b770f85b1b96cc73e37d3bf2a2bb38f8dc1
    newTab: false,
  },
];

export { menuDataDutch, menuDataEnglish};
