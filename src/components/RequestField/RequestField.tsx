import Image from "next/image";
import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLElement> {
  status: boolean;
  content: string;
}
const RequestField = ({ status, content, className = "", ...rest }: IProps) => {
  return (
    <div className={`flex items-center justify-start space-x-1 ${className}`} {...rest}>
      {status ? (
        <Image
          src={"/img/success-check.svg"}
          alt="check"
          width={16}
          height={16}
        />
      ) : (
        <Image
          src={"/img/error-check.svg"}
          alt="check"
          width={16}
          height={16}
        />
      )}

      <span
        className={`font-formal text-[10px] leading-[24px] ${status ? "text-white" : "text-neutral-50"}`}
      >
        {" "}
        {content}
      </span>
    </div>
  );
};

export default RequestField;
