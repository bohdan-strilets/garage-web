import {
  FaHome,
  FaCar,
  FaBolt,
  FaWrench,
  FaChartBar,
  FaFileAlt,
  FaImage,
  FaMagic,
} from "react-icons/fa";

import { NAVIGATION_PATHS } from "./navigationPaths";

import type { NavigationLink } from "../types/NavigationLink";

export const primaryNavigationItems: NavigationLink[] = [
  {
    id: "1",
    label: "Home",
    icon: FaHome,
    path: NAVIGATION_PATHS.DASHBOARD,
  },
  {
    id: "2",
    label: "Vehicles",
    icon: FaCar,
    path: NAVIGATION_PATHS.VEHICLES,
  },
  {
    id: "3",
    label: "Energy",
    icon: FaBolt,
    path: NAVIGATION_PATHS.ENERGY,
  },
  {
    id: "4",
    label: "Maintenance",
    icon: FaWrench,
    path: NAVIGATION_PATHS.MAINTENANCE,
  },
  {
    id: "5",
    label: "Statistics",
    icon: FaChartBar,
    path: NAVIGATION_PATHS.STATISTICS,
  },
  {
    id: "6",
    label: "Documents",
    icon: FaFileAlt,
    path: NAVIGATION_PATHS.DOCUMENTS,
  },
  {
    id: "7",
    label: "Gallery",
    icon: FaImage,
    path: NAVIGATION_PATHS.GALLERY,
  },
  {
    id: "8",
    label: "Car care",
    icon: FaMagic,
    path: NAVIGATION_PATHS.CAR_CARE,
  },
];
