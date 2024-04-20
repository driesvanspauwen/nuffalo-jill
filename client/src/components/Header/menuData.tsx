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
    id: 33,
    title: "STANDPUNTEN",
    path: "goals",
    newTab: false,
  },
  {
    id: 3,
    title: "KIESWEEK",
    path: "events",
    newTab: false,
  },
  {
    id: 4,
    title: "I",
    path: "",
    newTab: false,
  },
  {
    id: 5,
    title: "PLOEG",
    path: "/ploeg",
    newTab: false,
  },
  {
    id: 6,
    title: "PLOEGBOEKJE",
    path: "/ploegboekje",
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
    id: 33,
    title: "WHAT WE STAND FOR",
    path: "goals",
    newTab: false,
  },
  {
    id: 3,
    title: "ELECTION WEEK",
    path: "events",
    newTab: false,
  },
  {
    id: 4,
    title: "I",
    path: "",
    newTab: false,
  },
  {
    id: 5,
    title: "TEAM",
    path: "/ploeg",
    newTab: false,
  },
  {
    id: 6,
    title: "TEAM MAGAZINE",
    path: "/ploegboekje",
    newTab: false,
  },
];

export { menuDataDutch, menuDataEnglish};
