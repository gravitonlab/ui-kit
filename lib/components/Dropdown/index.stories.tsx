import type { Meta } from "@storybook/react-vite";

import { Dropdown, type DropdownOption } from ".";
import { useState } from "react";
import { withControlWrapper } from "../layout/decorators/withStoryWrapper";

const meta = {
  tags: ["autodocs"],
  component: Dropdown,
  decorators: [withControlWrapper],
} satisfies Meta<typeof Dropdown>;

export default meta;

const options: DropdownOption[] = [
  { value: "draft", label: "Черновик" },
  { value: "active", label: "В работе" },
  { value: "review", label: "На проверке" },
  { value: "completed", label: "Завершён" },
  { value: "archived", label: "В архиве" },
];

export const Playground = () => {
  const [value, setValue] = useState("");
  const changeValue = (v: string | number) => setValue(v as string);

  return (
    <>
      <div></div>
      <div>Default</div>
      <div>Disabled</div>

      <div>Tiny</div>
      <Dropdown
        size="tiny"
        value={value}
        options={options}
        onChange={changeValue}
      />
      <Dropdown
        disabled
        size="tiny"
        value={value}
        options={options}
        onChange={changeValue}
      />

      <div>Small</div>
      <Dropdown
        size="small"
        value={value}
        options={options}
        onChange={changeValue}
      />
      <Dropdown
        disabled
        size="small"
        value={value}
        options={options}
        onChange={changeValue}
      />

      <div>Medium</div>
      <Dropdown
        size="medium"
        value={value}
        options={options}
        onChange={changeValue}
      />
      <Dropdown
        disabled
        size="medium"
        value={value}
        options={options}
        onChange={changeValue}
      />

      <div>Large</div>
      <Dropdown
        size="large"
        value={value}
        options={options}
        onChange={changeValue}
      />
      <Dropdown
        disabled
        size="large"
        value={value}
        options={options}
        onChange={changeValue}
      />

      <div>Extra Large</div>
      <Dropdown
        size="extra-large"
        value={value}
        options={options}
        onChange={changeValue}
      />
      <Dropdown
        disabled
        size="extra-large"
        value={value}
        options={options}
        onChange={changeValue}
      />
    </>
  );
};
