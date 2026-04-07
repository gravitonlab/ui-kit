import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "../lib/main.ts";
import { DEFAULT_THEME } from "../lib/theme/ThemeContext.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={DEFAULT_THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
