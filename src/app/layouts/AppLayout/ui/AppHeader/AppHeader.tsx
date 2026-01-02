import { isAuthenticated, useSession } from "@entities/session";
import { useMediaQuery } from "@shared/hooks/useMediaQuery";
import { mediaQueries } from "@shared/styles";
import { Container } from "@shared/ui/layout/Container";
import { Stack } from "@shared/ui/layout/Stack";
import { ProfileInfo } from "@widgets/ProfileInfo";

import { SidebarToggle } from "../SidebarToggle";

import { profileInfo } from "./AppHeader.css";

export const AppHeader = () => {
  const isTabletUp = useMediaQuery(mediaQueries.tablet);
  const { user } = useSession();

  const firstName = user?.profile.firstName;
  const lastName = user?.profile.lastName;
  const name = `${firstName} ${lastName}`;

  return (
    <Container fluid={true}>
      <Stack direction="row" alignItems="center">
        {!isTabletUp && <SidebarToggle />}
        <div className={profileInfo}>{isAuthenticated() && <ProfileInfo fullName={name} />}</div>
      </Stack>
    </Container>
  );
};
