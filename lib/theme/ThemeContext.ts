import { createContext } from "react";
import type { ColorFamilyType } from ".";
import type { SizeProp } from "./types";

export interface ThemeContextProps {
  color: ColorFamilyType;
  borderRadius: number;
  size: SizeProp;
}

export const DEFAULT_THEME: ThemeContextProps = {
  color: "amber",
  borderRadius: 8,
  size: "medium",
};

export const ThemeContext = createContext<ThemeContextProps>({
  ...DEFAULT_THEME,
});
