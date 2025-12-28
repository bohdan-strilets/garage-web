import clsx from "clsx";

import { useLockBodyScroll } from "@shared/hooks/useLockBodyScroll";

import { closeTopOverlay } from "./actions/closeTopOverlay";
import { useOverlayStore } from "./model/useOverlayStore";
import { root } from "./Overlay.css";

export const Overlay = () => {
  const { count } = useOverlayStore();
  const isOverlayActive = count > 0;

  useLockBodyScroll(isOverlayActive);

  return (
    <div
      className={clsx(root({ isActive: isOverlayActive }))}
      aria-hidden={!isOverlayActive}
      onClick={closeTopOverlay}
    />
  );
};
