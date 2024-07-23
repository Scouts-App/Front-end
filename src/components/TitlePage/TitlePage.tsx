'use client'
import React, { HTMLAttributes } from "react";
import cx from "classnames";
import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";

const { Title } = Typography;
interface IProps extends HTMLAttributes<HTMLElement>,TitleProps{
  title: string;
}
function TitlePage({ title, className, ...rest }: IProps) {
  return (

     <Title className={cx("text-title-page m-0 text-white", className)} {...rest}>
      {title}
    </Title>

  );
}

export default TitlePage;
