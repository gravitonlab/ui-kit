import { useState } from "react";
import {
  ColorFamily,
  ThemeContext,
  type ColorFamilyType,
} from "../../../theme";
import styles from "./StoryWrapper.module.scss";
import { Dropdown, type DropdownOption } from "../../Dropdown";
import { Gap } from "../../Gap";
import { DEFAULT_THEME } from "../../../theme/ThemeContext";
import cx from "clsx";

interface IProps {
  children?: React.ReactNode;
}

export const StoryWrapper: React.FC<IProps> = ({ children }) => {
  const [themeColor, setThemeColor] = useState<ColorFamilyType>("amber");

  const themeColors: DropdownOption[] = Object.values(ColorFamily).map((i) => ({
    value: i,
    label: i,
  }));

  const changeThemeColor = (color: string | number) => {
    setThemeColor(color as ColorFamilyType);
  };

  return (
    <ThemeContext.Provider value={{ ...DEFAULT_THEME, color: themeColor }}>
      <div className={cx(styles.header, styles[themeColor])}>
        <Gap>
          <Gap.End>
            <Gap gap={12} alignItems="center">
              <div>Theme&nbsp;color</div>:
              <Dropdown
                width={150}
                value={themeColor}
                options={themeColors}
                onChange={changeThemeColor}
              />
            </Gap>
          </Gap.End>
        </Gap>
      </div>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};
