import { ColorFamily, Gap } from "../../../lib/main";
import styles from "./index.module.scss";
import cx from "clsx";

interface IProps {
  className?: string;
}

const colors = Object.values(ColorFamily);

export const Colors: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cx(styles.root, className)}>
      <Gap flexDirection="column">
        {colors.map((color) => (
          <div key={color} className={styles[color]} />
        ))}
      </Gap>
    </div>
  );
};
