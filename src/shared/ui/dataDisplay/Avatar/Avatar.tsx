import { root, image, fallback } from "./Avatar.css";

import type { AvatarProps } from "./types/AvatarProps";

export const Avatar = ({ src, fallback: fallbackText, size }: AvatarProps) => {
  return (
    <div className={root({ size })}>
      {src ? (
        <img src={src} alt="" className={image} />
      ) : (
        <span className={fallback}>{fallbackText?.slice(0, 1).toUpperCase()}</span>
      )}
    </div>
  );
};
