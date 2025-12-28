import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const isBrowser = typeof window !== "undefined";
  const initialMatches = isBrowser ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(() => initialMatches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    listener();
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
