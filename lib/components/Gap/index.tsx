import cx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type FlexStyleProps = Pick<
  React.CSSProperties,
  | "display"
  | "flexDirection"
  | "flexWrap"
  | "justifyContent"
  | "alignItems"
  | "alignContent"
  | "flex"
  | "flexGrow"
  | "flexShrink"
  | "flexBasis"
  | "gap"
>;

export interface GapProps extends FlexStyleProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  marginTop?: number;
  marginBottom?: number;
  className?: string;
  "data-tid"?: string;
  growChildren?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Gap = ({
  children,
  className,
  width,
  height,
  onClick,
  "data-tid": dataTid,
  growChildren = false,
  ...props
}: GapProps) => {
  const wrapperStyles: React.CSSProperties = {
    ...props,
    gap: props.gap !== undefined ? props.gap : 8,
    width,
    height,
  };

  return (
    <div
      className={cx(
        styles.root,
        growChildren && styles.growChildren,
        className,
      )}
      style={wrapperStyles}
      onClick={onClick}
      data-tid={dataTid}
    >
      {children}
    </div>
  );
};

export interface GapEndProps extends FlexStyleProps {
  leftGap?: React.CSSProperties["marginLeft"];
  children: React.ReactNode;
}

Gap.End = ({ leftGap, children, ...props }: GapEndProps) => {
  const wrapperStyles: React.CSSProperties = {
    ...props,
    paddingLeft: leftGap,
  };

  return (
    <div className={styles.flexEnd} style={wrapperStyles}>
      {children}
    </div>
  );
};

export { Gap };
