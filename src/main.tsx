import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(<StrictMode></StrictMode>);
