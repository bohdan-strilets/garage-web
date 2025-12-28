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

import type { NavigationLink } from "../types/NavigationLink";

export const primaryNavigationItems: NavigationLink[] = [
  { id: "1", label: "Home", icon: FaHome, path: "/home" },
  { id: "2", label: "Vehicles", icon: FaCar, path: "/vehicles" },
  { id: "3", label: "Energy", icon: FaBolt, path: "/energy" },
  { id: "4", label: "Maintenance", icon: FaWrench, path: "/maintenance" },
  { id: "5", label: "Statistics", icon: FaChartBar, path: "/statistics" },
  { id: "6", label: "Documents", icon: FaFileAlt, path: "/documents" },
  { id: "7", label: "Gallery", icon: FaImage, path: "/gallery" },
  { id: "8", label: "Car care", icon: FaMagic, path: "/car-care" },
];
