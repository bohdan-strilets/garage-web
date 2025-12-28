import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import { useOverlayStore } from "@app/overlay/model/useOverlayStore";
import { useMediaQuery } from "@shared/hooks/useMediaQuery";
import { mediaQueries } from "@shared/styles";
import { IconButton } from "@shared/ui/controls/IconButton";

import { useLayoutStore } from "../../model/useLayoutStore";

export const SidebarToggle = () => {
  const { closeSidebar, openSidebar, isSidebarOpen } = useLayoutStore();
  const { closeOverlay, openOverlay } = useOverlayStore();

  const isLaptopUp = useMediaQuery(mediaQueries.laptop);

  const open = () => {
    openSidebar();

    if (!isLaptopUp) {
      openOverlay();
    }
  };

  const close = () => {
    closeSidebar();

    if (!isLaptopUp) {
      closeOverlay();
    }
  };

  return (
    <IconButton
      onClick={isSidebarOpen ? close : open}
      variant="ghost"
      size="sm"
      ariaLabel="Toggle sidebar"
    >
      {isSidebarOpen ? <RxCross2 /> : <HiOutlineMenuAlt2 />}
    </IconButton>
  );
};
