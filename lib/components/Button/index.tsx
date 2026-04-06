import { useTheme } from "../../main";
import styles from "./styles.module.scss";
import cx from "clsx";

export interface ButtonProps {
  use?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button: React.FC<ButtonProps> = ({
  use = "secondary",
  size = "medium",
  children,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <button
      type="button"
      className={cx(styles.root, styles[size], styles[color], styles[use])}
      {...props}
    >
      {children}
    </button>
  );
};
