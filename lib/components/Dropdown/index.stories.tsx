import type { Meta } from "@storybook/react-vite";

import { Dropdown, type DropdownOption } from ".";
import { useState } from "react";
import { Grid } from "..";

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

const options: DropdownOption[] = [
  { value: "draft", label: "Черновик" },
  { value: "active", label: "В работе" },
  { value: "review", label: "На проверке" },
  { value: "completed", label: "Завершён" },
  { value: "archived", label: "В архиве" },
];

export const Default = () => {
  const [value, setValue] = useState("");
  const changeValue = (v: string | number) => setValue(v as string);

  return (
    <Grid
      width={500}
      gridAutoFlow="column"
      gridTemplateRows={"repeat(2, 1fr)"}
      alignItems="center"
      gap={8}
    >
      <span>Default</span>
      <span>Disabled</span>
      <Dropdown value={value} options={options} onChange={changeValue} />
      <Dropdown
        disabled
        value={value}
        options={options}
        onChange={changeValue}
      />
    </Grid>
  );
};
