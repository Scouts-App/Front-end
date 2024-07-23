"use client";
import MyTable, { ListingColumnType } from "@/components/MyTable/MyTable";
import { IconArrowRight, IconCopy, IconEye } from "@tabler/icons-react";
import { Radio } from "antd";
import Image from "next/image";
interface IData {
  id: number;
  time: string;
  type: string;
  price: string;
  value: string;
  by: string;
  amount: string;
}
const data: IData[] = [
  {
    id: 1,
    time: "20/05/2024 UTC 09:00:00",
    type: "SELL",
    price: "46.5",
    value: "/img/whale.svg",
    by: "0x4843...474743",
    amount: "46.52K",
  },
  {
    id: 2,
    time: "20/05/2024 UTC 09:00:00",
    type: "SELL",
    price: "46.5",
    value: "/img/whale.svg",
    by: "0x4843...474743",
    amount: "46.52K",
  },
  {
    id: 3,
    time: "20/05/2024 UTC 09:00:00",
    type: "SELL",
    price: "46.5",
    value: "/img/whale.svg",
    by: "0x4843...474743",
    amount: "46.52K",
  },
  {
    id: 4,
    time: "20/05/2024 UTC 09:00:00",
    type: "BUY",
    price: "46.5",
    value: "/img/whale.svg",
    by: "0x4843...474743",
    amount: "46.52K",
  },
  {
    id: 5,
    time: "20/05/2024 UTC 09:00:00",
    type: "SELL",
    price: "46.5",
    value: "/img/whale.svg",
    by: "0x4843...474743",
    amount: "46.52K",
  },
];
const RecentTrade = () => {
  const columns: ListingColumnType<IData>[] = [
    {
      title: "time",
      width: 187,
      dataIndex: "time",
      render: (text: string) => (
        <span className="text-sm-body text-[#969A9C]">${text}</span>
      ),
      align: "right",
    },
    {
      title: "type",
      width: 60,
      dataIndex: "type",
      render: (text: string) => (
        <span
          className={`w-[45px] px-2 py-[2px] text-xs-body ${text == "SELL" ? "text-[#E9383D]" : " text-green"} `}
          style={{
            backgroundColor:
              text == "SELL"
                ? "rgba(233, 56, 61, 0.2)"
                : "rgba(0, 184, 96, 0.2)",
          }}
        >
          {text}
        </span>
      ),
      align: "right",
    },
    {
      title: "Price",
      width: 55,
      dataIndex: "price",
      render: (text: number) => (
        <span className="text-sm-body text-white">${text}</span>
      ),
      align: "right",
    },
    {
      title: "Value",
      width: 50,
      dataIndex: "value",
      render: (text: string) => (
        <Image src={text} alt="image" width={24} height={24} />
      ),
      align: "right",
    },
    {
      title: "By",
      width: 160,
      dataIndex: "by",
      render: (text: string) => (
        <div className="flex items-center justify-end space-x-1">
          <IconCopy className="h-[16px] w-[16px] text-neutral-50" />
          <span className="text-sm-body text-status-info">{text}</span>
          <IconEye className="h-[16px]  w-[16px] text-neutral-50" />
        </div>
      ),
      align: "right",
    },
    {
      title: "Amount",
      width: 192,
      dataIndex: "amount",
      render: (text: string) => (
        <div className="flex items-center justify-end space-x-1">
          <span className="text-sm-body text-white">{text}</span>
          <Image
            src={"/img/crypto_icon.svg"}
            alt="crypto_icon"
            width={16}
            height={16}
          />
          <span className="text-sm-body text-white">Token</span>
          <IconArrowRight className="text-white" />
          <span className="text-sm-body text-white">{text}</span>
          <Image
            src={"/img/crypto_icon.svg"}
            alt="crypto_icon"
            width={16}
            height={16}
          />
          <span className="text-sm-body text-white">Token</span>
        </div>
      ),
      align: "right",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-start space-x-2 bg-[#1F2225] px-4 py-2">
        <span className="text-xs-body text-neutral-10">Filter by Values $</span>
        <Radio.Group defaultValue={1} className="flex items-center">
          <Radio value={1}>ALL</Radio>
          <Radio value={2}>
            <Image src={"/img/whale.svg"} alt="whale" width={24} height={24} />
          </Radio>
          <Radio value={3}>
            <Image src={"/img/whale.svg"} alt="whale" width={24} height={24} />
          </Radio>
        </Radio.Group>
      </div>
      <MyTable
        columns={columns}
        className="w-full"
        data={data}
        rowKey={(r) => `${r.id}`}
        recordsPerPage={100}
        totalRecords={1000}
        showFooter={true}
      />
    </div>
  );
};

export default RecentTrade;
