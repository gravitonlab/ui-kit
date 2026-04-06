export const ColorFamily = {
  Gray: "gray",
  Slate: "slate",
  Red: "red",
  Blue: "blue",
  Green: "green",
  Yellow: "yellow",
  Orange: "orange",
  Purple: "purple",
  Pink: "pink",
  Cyan: "cyan",
  Teal: "teal",
  Indigo: "indigo",
  Amber: "amber",
  Lime: "lime",
  Mint: "mint",
  Tomato: "tomato",
} as const;

export type ColorFamilyType = (typeof ColorFamily)[keyof typeof ColorFamily];
