import { FaCog, FaUser } from "react-icons/fa";

import { NAVIGATION_PATHS } from "./navigationPaths";

import type { NavigationLink } from "../types/NavigationLink";

export const accountNavigationItems: NavigationLink[] = [
  {
    id: "1",
    label: "Settings",
    icon: FaCog,
    path: NAVIGATION_PATHS.SETTINGS,
  },
  {
    id: "2",
    label: "Profile",
    icon: FaUser,
    path: NAVIGATION_PATHS.PROFILE,
  },
];
