import { createContext } from "react";
import type { ColorFamilyType } from ".";

export interface ThemeContextValue {
  color: ColorFamilyType;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
