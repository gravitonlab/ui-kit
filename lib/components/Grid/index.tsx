import cx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type GridStyleProps = Pick<
  React.CSSProperties,
  | "display"
  | "gridTemplateColumns"
  | "gridTemplateRows"
  | "gridTemplateAreas"
  | "gridAutoColumns"
  | "gridAutoRows"
  | "gridAutoFlow"
  | "gap"
  | "justifyContent"
  | "alignContent"
  | "justifyItems"
  | "alignItems"
  | "placeItems"
  | "placeContent"
>;

export interface GridProps extends GridStyleProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  marginTop?: number;
  marginBottom?: number;
  className?: string;
  "data-tid"?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Grid = ({
  children,
  className,
  width,
  height,
  onClick,
  "data-tid": dataTid,
  ...props
}: GridProps) => {
  const wrapperStyles: React.CSSProperties = {
    ...props,
    gap: props.gap !== undefined ? props.gap : 8,
    width,
    height,
  };

  return (
    <div
      className={cx(styles.root, className)}
      style={wrapperStyles}
      onClick={onClick}
      data-tid={dataTid}
    >
      {children}
    </div>
  );
};

export { Grid };
