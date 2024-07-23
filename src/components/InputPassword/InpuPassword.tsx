import { Input } from "antd";
import "./style.scss";
import { InputProps } from 'antd/lib/input';
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
interface IProps extends InputProps {
  helperText?: string;
}
const InputPassword = ({ helperText, ...rest }: IProps) => {
  return (
    <div>
      <Input.Password
        rootClassName="input-password"
        {...rest}
        iconRender={(visible) =>
          visible ? <IconEye /> :  <IconEyeClosed />
        }
      />

      <div className="">
        {helperText ? (
          <p className="text-brand-Primary mb-0 mt-[2px] text-[9px]">
            {helperText}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default InputPassword;
