import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "../lib/main.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider color="red">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
