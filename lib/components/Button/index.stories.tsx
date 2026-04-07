import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from ".";
import { withControlWrapper } from "../layout/decorators/withStoryWrapper";
import { Plus } from "lucide-react";
import { SIZES_LIST } from "../../theme/variables";

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn(), children: "Button" },
  argTypes: {
    size: {
      control: "select",
      options: ["tiny", "small", "medium", "large", "extra-large"],
    },
    use: {
      control: "select",
      options: ["accent", "outline", "fill", "danger"],
    },
    disabled: { control: "boolean" },
  },
  decorators: [withControlWrapper(7)],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS = [
  { label: "Default", use: "accent" as const },
  { label: "Disabled", use: "accent" as const, disabled: true },
  { label: "Outline", use: "outline" as const },
  { label: "Fill", use: "fill" as const },
  { label: "Danger", use: "danger" as const },
  { label: "Left Icon", use: "accent" as const, icon: <Plus size="16" /> },
  {
    label: "Right Icon",
    use: "accent" as const,
    rightIcon: <Plus size="16" />,
  },
];

export const Playground: Story = {
  render: () => (
    <>
      {SIZES_LIST.map((size) => (
        <Fragment key={size}>
          <span>{size}</span>
          {VARIANTS.map(({ label, use, disabled, icon, rightIcon }) => (
            <Button
              key={`${size}-${label}`}
              size={size}
              use={use}
              disabled={disabled}
              icon={icon}
              rightIcon={rightIcon}
            >
              Button
            </Button>
          ))}
        </Fragment>
      ))}
    </>
  ),
};

// 🎯 Базовые сценарии для Controls и визуального тестирования
export const Accent: Story = { args: { use: "accent" } };
export const Outline: Story = { args: { use: "outline" } };
export const Fill: Story = { args: { use: "fill" } };
export const Danger: Story = { args: { use: "danger" } };
export const Large: Story = { args: { size: "large" } };
export const Small: Story = { args: { size: "small" } };
