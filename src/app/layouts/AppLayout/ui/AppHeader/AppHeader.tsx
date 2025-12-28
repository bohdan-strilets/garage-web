import { useMediaQuery } from "@shared/hooks/useMediaQuery";
import { mediaQueries } from "@shared/styles";
import { Container } from "@shared/ui/layout/Container";

import { SidebarToggle } from "../SidebarToggle";

export const AppHeader = () => {
  const isTabletUp = useMediaQuery(mediaQueries.tablet);

  return (
    <Container fluid={true}>
      {!isTabletUp && <SidebarToggle />}
      Header content
    </Container>
  );
};
