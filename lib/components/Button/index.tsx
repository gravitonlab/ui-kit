import type { ButtonHTMLAttributes } from "react";
import { useTheme, type ColorFamilyType } from "../../main";
import type { SizeProp, UseProp } from "../../theme/types";
import styles from "./styles.module.scss";
import cx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  use?: UseProp;
  size?: SizeProp;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Button: React.FC<ButtonProps> = ({
  use = "accent",
  size,
  children,
  className,
  icon,
  rightIcon,
  ...props
}) => {
  const theme = useTheme();

  const rootStyles: React.CSSProperties = {
    borderRadius: theme.borderRadius,
  };

  const resolvedSize: SizeProp = size || theme.size || "medium";
  const resolvedColor: ColorFamilyType = theme.color || "amber";

  return (
    <button
      type="button"
      className={cx(
        styles.root,
        styles[resolvedSize],
        styles[resolvedColor],
        styles[`use_${use}`],
        // !!icon && styles["has-icon"],
        // !!rightIcon && styles["has-right-icon"],
        className,
      )}
      style={rootStyles}
      {...props}
    >
      {!!icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.children}>{children}</span>
      {!!rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </button>
  );
};
