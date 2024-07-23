import TextField from "@/components/TextField/TextField";
import { DatePicker, InputNumber, Modal, Radio, Select, Space } from "antd";
import { ModalProps } from "antd/lib";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { Typography } from "antd";
import { IconArrowNarrowRight } from "@tabler/icons-react";
const { Text } = Typography;
interface IProps
  extends ModalProps,
    Omit<HTMLAttributes<HTMLElement>, "title"> {}
const ModalNewAlert = ({ className = "", ...rest }: IProps) => {
  return (
    <Modal className={`modal-setting ${className}`} {...rest}>
      <form action="" className="pt-5">
        <div className="mb-4">
          <h5 className="my-0 text-lg-body text-white">Token</h5>
          <div className="flex items-center justify-between space-x-2">
            <div className="w-[80%]">
              <label className="mb-2 text-sm-body text-neutral-50">Token</label>
              <TextField placeholder="Type to search or Paste token ad..." />
            </div>
            <div>
              <label className="mb-2 text-sm-body text-neutral-50">
                Network
              </label>
              <Select
                defaultValue={1}
                options={[
                  {
                    value: 1,
                    label: (
                      <div className="flex items-center space-x-1">
                        <Image
                          src={"/img/crypto_icon.svg"}
                          alt="crypto_icon"
                          width={22}
                          height={22}
                        />
                        <span>Solana</span>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="my-0 text-lg-body text-white">Configuration</h5>
          <div className="flex items-center justify-between space-x-2">
            <div className="h-[68px] w-[70%]">
              <label className="mb-2 block text-sm-body text-neutral-50">
                Type
              </label>

              <Select
                className="w-full"
                defaultValue={1}
                options={[
                  {
                    value: 1,
                    label: " Price rises above",
                  },
                ]}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm-body text-neutral-50">
                Value
              </label>

              <InputNumber<number>
                className="w-[110px]"
                defaultValue={100}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) =>
                  value?.replace(/\$\s?|(,*)/g, "") as unknown as number
                }
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center  justify-between space-x-2">
            <div className="w-[70%]">
              <label className="mb-2 block text-sm-body text-neutral-50">
                Trigger
              </label>
              <div className="">
                <Radio.Group className="flex items-center">
                  <Radio value={1}>Only Once</Radio>
                  <Radio value={2}>Always</Radio>
                </Radio.Group>
                <p className="text-[8px] text-neutral-50 font-semibold leading-[24px]">Trigger an alert only once when matching the rule.</p>
              </div>
            </div>
            <div className="w-[110px]">
              <label className="mb-2 block text-sm-body text-neutral-50">
                Expiration
              </label>
              <DatePicker
                format={{
                  format: "YYYY-MM-DD",
                  type: "mask",
                }}
                // onChange={onChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex h-[40px] w-full items-center justify-center space-x-1 rounded-md border-none bg-primary-linear text-xs-body text-white"
        >
          <span>Create</span> <IconArrowNarrowRight />
        </button>
      </form>
    </Modal>
  );
};

export default ModalNewAlert;
