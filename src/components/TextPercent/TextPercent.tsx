import React, { HTMLAttributes, memo } from "react";
import cx from "classnames";
export interface Props extends HTMLAttributes<HTMLElement> {
  value: number;
}

function TextPercent({ value, className, ...rest }: Props) {
  return (
    <span
      className={cx(
        "text-sm",
        {
          "text-status-alert": value < 0,
          "text-status-success": value > 0,
          "text-neutral-10": value === 0,
        },
        className,
      )}
      {...rest}
    >
      {value === 0 ? "-" : `${String(value)}%`}
    </span>
  );
}
export default memo(TextPercent);
