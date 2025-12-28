import { accountNavigationItems, Navigation, primaryNavigationItems } from "@features/navigation";
import { Divider } from "@shared/ui/layout/Divider";
import { Spacer } from "@shared/ui/layout/Spacer";
import { Stack } from "@shared/ui/layout/Stack";
import { Heading } from "@shared/ui/typography/Heading";

import { useLayoutStore } from "../../model/useLayoutStore";
import { SidebarToggle } from "../SidebarToggle";

import { accountSection, root } from "./AppSideBar.css";

export const AppSideBar = () => {
  const shortLogo = "G";
  const fullLogo = "Garage";

  const { isSidebarOpen } = useLayoutStore();

  return (
    <div className={root}>
      <Stack gap="sm">
        <SidebarToggle />
        <Spacer size="xs" />
        <Heading style={{ textAlign: "center" }} as="h3">
          {isSidebarOpen ? fullLogo : shortLogo}
        </Heading>
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
