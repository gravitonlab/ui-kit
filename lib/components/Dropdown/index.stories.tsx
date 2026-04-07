import type { Meta } from "@storybook/react-vite";

import { Dropdown, type DropdownOption } from ".";
import { Fragment, useState } from "react";
import { withControlWrapper } from "../layout/decorators/withStoryWrapper";
import { fn } from "storybook/test";
import { SIZES_LIST } from "../../theme/variables";

const options: DropdownOption[] = [
  { value: "draft", label: "Черновик" },
  { value: "active", label: "В работе" },
  { value: "review", label: "На проверке" },
  { value: "processing", label: "Обрабатывается" },
  { value: "completed", label: "Завершён" },
  { value: "archived", label: "В архиве" },
  { value: "deleted", label: "Удалён" },
];

const meta = {
  component: Dropdown,
  tags: ["autodocs"],
  args: { onChange: fn(), options },
  decorators: [withControlWrapper(5)],
} satisfies Meta<typeof Dropdown>;

export default meta;

const VARIANTS = [
  { label: "Default", use: "accent" as const },
  { label: "Disabled", use: "accent" as const, disabled: true },
  { label: "Outline", use: "outline" as const },
  { label: "Fill", use: "fill" as const },
  { label: "Danger", use: "danger" as const },
];

export const Playground = () => {
  const [value, setValue] = useState("");
  const changeValue = (v: string | number) => setValue(v as string);

  return (
    <>
      {SIZES_LIST.map((size) => (
        <Fragment key={size}>
          <span>{size}</span>
          {VARIANTS.map(({ label, use, disabled }) => (
            <Dropdown
              key={`${size}-${label}`}
              use={use}
              size={size}
              value={value}
              width={220}
              disabled={disabled}
              options={options}
              onChange={changeValue}
            />
          ))}
        </Fragment>
      ))}
    </>
  );
};
