import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "./index";

const meta = {
  title: "Grid",
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    gridTemplateColumns: "repeat(3, 1fr)",
    children: (
      <>
        <span>0000</span>
        <span>1111</span>
        <span>2222</span>
        <span>3333</span>
        <span>4444</span>
        <span>5555</span>
        <span>6666</span>
        <span>7777</span>
      </>
    ),
  },
};
