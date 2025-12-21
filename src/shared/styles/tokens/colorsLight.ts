export const lightColors = {
  brand: {
    primary: "#fd746c",
    primarySoft: "rgba(253, 116, 108, 0.5)",
  },

  surface: {
    canvas: "#ededed",
    base: "#ffffff",
    muted: "#f5f5f5",
  },

  text: {
    primary: "#1f1f1f",
    secondary: "#4a4a4a",
    muted: "#6b6b6b",
    inverted: "#ffffff",
    onAccent: "#ffffff",
  },

  border: {
    subtle: "#dddddd",
    default: "#cfcfcf",
    strong: "#a8a8a8",
    accent: "#fd746c",
  },

  status: {
    success: "#56ab2f",
    successSoft: "rgba(86,171,47,0.16)",
    warning: "#ff9800",
    warningSoft: "rgba(255,152,0,0.18)",
    danger: "#dc281e",
    dangerSoft: "rgba(220,40,30,0.18)",
  },

  overlay: {
    backdrop: "rgba(0,0,0,0.4)",
    hover: "rgba(0,0,0,0.04)",
  },
} as const;
