import { RadioField } from "@/models/field.interface";
import { Radio, RadioProps, RadioGroupProps } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import cx from "classnames";
import "./styles.scss";

export interface Props extends RadioGroupProps {
  radios?: RadioField[];
  classNameRadio?: string;
}
export default function MyRadio({ classNameRadio, radios, ...props }: Props) {
  const t = useTranslations();
  return (
    <Radio.Group {...props} className="custom-radio-color">
      {radios?.map((item) => (
        <Radio
          key={item.id}
          value={item.value}
          className={cx("text-lg-body text-neutral-50", classNameRadio)}
        >
          {item.label}
        </Radio>
      ))}
    </Radio.Group>
  );
}
