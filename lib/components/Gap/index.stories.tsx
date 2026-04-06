import type { Meta, StoryObj } from "@storybook/react-vite";

import { Gap } from ".";

const meta = {
  component: Gap,
} satisfies Meta<typeof Gap>;

export default meta;
type Story = StoryObj<typeof meta>;

const elemStyle: React.CSSProperties = {
  border: "1px solid blue",
  padding: "4px 12px",
};

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={elemStyle}>Element 1</div>
        <div style={elemStyle}>Element 2</div>
        <div style={elemStyle}>Element 3</div>
        <div style={elemStyle}>Element 4</div>
      </>
    ),
  },
};

export const Gap_24px: Story = {
  args: {
    gap: 24,
    children: (
      <>
        <div style={elemStyle}>Element 1</div>
        <div style={elemStyle}>Element 2</div>
        <div style={elemStyle}>Element 3</div>
        <div style={elemStyle}>Element 4</div>
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    justifyContent: "space-between",
    children: (
      <>
        <div style={elemStyle}>Element 1</div>
        <div style={elemStyle}>Element 2</div>
        <div style={elemStyle}>Element 3</div>
        <div style={elemStyle}>Element 4</div>
      </>
    ),
  },
};

export const Center: Story = {
  args: {
    justifyContent: "center",
    children: (
      <>
        <div style={elemStyle}>Element 1</div>
        <div style={elemStyle}>Element 2</div>
        <div style={elemStyle}>Element 3</div>
        <div style={elemStyle}>Element 4</div>
      </>
    ),
  },
};

export const Wrap: Story = {
  args: {
    flexWrap: "wrap",
    children: (
      <>
        <div style={elemStyle}>Unbelievably long element 1</div>
        <div style={elemStyle}>Unbelievably long element 22</div>
        <div style={elemStyle}>Unbelievably long element 333</div>
        <div style={elemStyle}>Unbelievably long element 4444</div>
        <div style={elemStyle}>Unbelievably long element 55555</div>
        <div style={elemStyle}>Unbelievably long element 666666</div>
        <div style={elemStyle}>Unbelievably long element 7777777</div>
        <div style={elemStyle}>Unbelievably long element 88888888</div>
        <div style={elemStyle}>Unbelievably long element 999999999</div>
        <div style={elemStyle}>Unbelievably long element 0000000000</div>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    flexDirection: "column",
    children: (
      <>
        <div style={elemStyle}>Element 1</div>
        <div style={elemStyle}>Element 2</div>
        <div style={elemStyle}>Element 3</div>
        <div style={elemStyle}>Element 4</div>
      </>
    ),
  },
};

export const VerticalLeftAlign: Story = {
  args: {
    flexDirection: "column",
    alignItems: "flex-start",
    children: (
      <>
        <div style={elemStyle}>Element 1</div>
        <div style={elemStyle}>Element 22</div>
        <div style={elemStyle}>Element 333</div>
        <div style={elemStyle}>Element 4444</div>
      </>
    ),
  },
};

export const VerticalRightAlign: Story = {
  args: {
    flexDirection: "column",
    alignItems: "flex-end",
    children: (
      <>
        <div style={elemStyle}>Element 1</div>
        <div style={elemStyle}>Element 22</div>
        <div style={elemStyle}>Element 333</div>
        <div style={elemStyle}>Element 4444</div>
      </>
    ),
  },
};

export const VerticalCenterAlign: Story = {
  args: {
    flexDirection: "column",
    alignItems: "center",
    children: (
      <>
        <div style={elemStyle}>Element 1</div>
        <div style={elemStyle}>Element 22</div>
        <div style={elemStyle}>Element 333</div>
        <div style={elemStyle}>Element 4444</div>
      </>
    ),
  },
};
