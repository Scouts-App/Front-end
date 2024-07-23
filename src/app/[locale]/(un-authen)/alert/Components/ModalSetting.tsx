import TextField from "@/components/TextField/TextField";
import { Modal } from "antd";
import { ModalProps } from "antd/lib";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { Typography } from "antd";
const { Text } = Typography;
interface IProps
  extends ModalProps,
    Omit<HTMLAttributes<HTMLElement>, "title"> {}
const ModalSetting = ({ className = "", ...rest }: IProps) => {
  return (
    <Modal className={`modal-setting ${className}`} {...rest}>
      <form action="" className="pt-5">
       
        <div className="mb-5">
          <label className="mb-2 flex items-center space-x-2">
            <Image
              src={"/img/square_check.svg"}
              alt="square check"
              width={20}
              height={20}
            />
            <span className="text-md-body text-white">Email</span>
          </label>
          <TextField placeholder="Enter email" isRequest={true} />
        </div>

        <div className="mb-5">
          <label className="mb-2 flex items-center space-x-2">
            <Image
              src={"/img/square_check.svg"}
              alt="square check"
              width={20}
              height={20}
            />
            <span className="text-md-body text-white">Discord</span>
            <Image
              src={"/img/pro.svg"}
              alt="square check"
              width={30}
              height={18}
            />
          </label>
          <TextField placeholder="Enter Discord Sever" isRequest={true} />
        </div>

        <div className="mb-5">
          <label className="mb-2 flex items-center space-x-2">
            <Image
              src={"/img/square.svg"}
              alt="square check"
              width={20}
              height={20}
            />
            <span className="text-md-body text-neutral-50">Telegram</span>
            <Image
              src={"/img/pro.svg"}
              alt="square check"
              width={30}
              height={18}
            />
          </label>
          <TextField placeholder="Enter Your Telegram" isRequest={true} />
        </div>

        <button
          type="submit"
          className="h-[40px] w-full rounded-md border-none bg-primary-linear text-xs-body text-white"
        >
          Save
        </button>
      </form>
    </Modal>
  );
};

export default ModalSetting;
