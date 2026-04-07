import React from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextValue } from ".";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: ThemeContextValue;
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
