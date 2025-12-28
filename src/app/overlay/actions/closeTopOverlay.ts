import { useLayoutStore } from "@app/layouts/AppLayout/model/useLayoutStore";

import { useOverlayStore } from "../model/useOverlayStore";

export const closeTopOverlay = () => {
  useLayoutStore.getState().closeSidebar();
  useOverlayStore.getState().closeOverlay();
};
