import { accountNavigationItems, Navigation, primaryNavigationItems } from "@features/navigation";
import { Logo } from "@shared/ui/brand/Logo";
import { Divider } from "@shared/ui/layout/Divider";
import { Spacer } from "@shared/ui/layout/Spacer";
import { Stack } from "@shared/ui/layout/Stack";

import { useLayoutStore } from "../../model/useLayoutStore";
import { SidebarToggle } from "../SidebarToggle";

import { accountSection, root } from "./AppSideBar.css";

export const AppSideBar = () => {
  const { isSidebarOpen } = useLayoutStore();

  return (
    <div className={root}>
      <Stack gap="sm">
        <SidebarToggle />
        <Spacer size="xs" />
        <Logo variant={isSidebarOpen ? "full" : "icon"} />
        <Spacer />
      </Stack>

      <Navigation items={primaryNavigationItems} />

      <div className={accountSection}>
        <Divider tone="muted" />
        <Navigation items={accountNavigationItems} />
      </div>
    </div>
  );
};
