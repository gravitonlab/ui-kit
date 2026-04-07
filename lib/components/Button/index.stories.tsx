import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from ".";
import { withControlWrapper } from "../layout/decorators/withStoryWrapper";

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
  decorators: [withControlWrapper],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = () => {
  return (
    <>
      <div></div>
      <div>Default</div>
      <div>Disabled</div>
      <div>Outline</div>
      <div>Fill</div>

      <span>Tiny</span>
      <Button size="tiny">Button</Button>
      <Button disabled size="tiny">
        Button
      </Button>
      <Button use="outline" size="tiny">
        Button
      </Button>
      <Button use="fill" size="tiny">
        Button
      </Button>

      <span>Small</span>
      <Button size="small">Button</Button>
      <Button disabled size="small">
        Button
      </Button>
      <Button use="outline" size="small">
        Button
      </Button>
      <Button use="fill" size="small">
        Button
      </Button>

      <span>Medium</span>
      <Button size="medium">Button</Button>
      <Button disabled size="medium">
        Button
      </Button>
      <Button use="outline" size="medium">
        Button
      </Button>
      <Button use="fill" size="medium">
        Button
      </Button>

      <span>Large</span>
      <Button size="large">Button</Button>
      <Button disabled size="large">
        Button
      </Button>
      <Button use="outline" size="large">
        Button
      </Button>
      <Button use="fill" size="large">
        Button
      </Button>

      <span>Extra Large</span>
      <Button size="extra-large">Button</Button>
      <Button disabled size="extra-large">
        Button
      </Button>
      <Button use="outline" size="extra-large">
        Button
      </Button>
      <Button use="fill" size="extra-large">
        Button
      </Button>
    </>
  );
};

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};
