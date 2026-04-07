import type { Decorator } from "@storybook/react-vite";
import { Grid } from "../..";

export const withControlWrapper: Decorator = (Story) => (
  <Grid
    width={450}
    alignItems="center"
    justifyItems="flex-start"
    gridTemplateColumns={"100px repeat(5, auto)"}
    gap={"30px 50px"}
  >
    <Story />
  </Grid>
);
