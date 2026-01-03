import type { NAVIGATION_PATHS } from "../config/navigationPaths";

export type NavigationPaths = (typeof NAVIGATION_PATHS)[keyof typeof NAVIGATION_PATHS];
