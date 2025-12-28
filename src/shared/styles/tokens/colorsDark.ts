export const darkColors = {
  brand: {
    primary: "#f83600",
    primarySoft: "rgba(248, 54, 0, 0.5)",
  },

  surface: {
    canvas: "#1f1f1f",
    base: "#2a2a2a",
    muted: "#333333",
  },

  text: {
    primary: "#ffffff",
    secondary: "#d0d0d0",
    muted: "#9a9a9a",
    inverted: "#1f1f1f",
    onAccent: "#ffffff",
  },

  border: {
    subtle: "#3a3a3a",
    default: "#4a4a4a",
    strong: "#6a6a6a",
    accent: "#f83600",
  },

  status: {
    success: "#56ab2f",
    successSoft: "rgba(86,171,47,0.22)",
    warning: "#ff9800",
    warningSoft: "rgba(255,152,0,0.22)",
    danger: "#dc281e",
    dangerSoft: "rgba(220,40,30,0.22)",
  },

  overlay: {
    backdrop: "rgba(0,0,0,0.6)",
    hover: "rgba(255,255,255,0.04)",
  },
} as const;
