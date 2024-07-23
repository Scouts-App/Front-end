import { Input } from "antd";
import { InputProps } from "antd/lib/input";
import "./style.scss";
import Image from "next/image";
interface IProps extends InputProps {
  helperText?: string;
  isRequest?: boolean;
}
const TextField = ({ helperText, isRequest = false, ...rest }: IProps) => {
  return (
    <div>
      <div className="flex items-center space-x-1">
        <Input {...rest} rootClassName="textfield" />
        {isRequest ? (
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
        ) : null}
      </div>

      <div className="">
        {helperText ? (
          <p className="mb-0 mt-[2px] text-[9px] text-brand-Primary">
            {helperText}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default TextField;
