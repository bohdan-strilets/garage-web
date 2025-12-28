import { FaCog, FaUser } from "react-icons/fa";

import type { NavigationLink } from "../types/NavigationLink";

export const accountNavigationItems: NavigationLink[] = [
  { id: "1", label: "Settings", icon: FaCog, path: "/settings" },
  { id: "2", label: "Profile", icon: FaUser, path: "/profile" },
];
