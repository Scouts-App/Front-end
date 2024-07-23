import React, { HTMLAttributes } from "react";
import cx from "classnames";
import { Typography } from "antd";
import "./style.scss";
const { Title, Text } = Typography;
interface IProps extends HTMLAttributes<HTMLElement> {
  percentage: number;
}
const PercentageBar = ({ percentage, className, ...rest }: IProps) => {
  return (
    <div className={cx("percentage-bar", className)} {...rest}>
      <div className="flex w-full w-full flex-nowrap items-center">
        <Text
          className="percentage-bar__left whitespace-nowrap text-green relative h-[20px] text-start text-[8px] font-semibold leading-[20px]"
          style={{ width: `${percentage}%` }}
        >
          {percentage} %
        </Text>
        <Text
          className="percentage-bar__right whitespace-nowrap text-red relative h-[20px] text-end text-[8px] font-semibold leading-[20px]"
          style={{ width: `${100 - percentage}%` }}
        >
          {Math.round((100 - percentage) * 100) / 100} %
        </Text>
      </div>
    </div>
  );
};

export default React.memo(PercentageBar);
