import React from "react";
import { ThemeContext } from "./ThemeContext";
import type { ColorFamilyType } from ".";

interface ThemeProviderProps {
  children: React.ReactNode;
  color: ColorFamilyType;
}

export function ThemeProvider({ children, color }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ color }}>{children}</ThemeContext.Provider>
  );
}
