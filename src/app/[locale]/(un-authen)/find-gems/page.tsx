"use client";
import PaginationPage from "@/components/PaginationPage/PaginationPage";
import TableToken from "@/components/TableToken/TableToken";
import TitlePage from "@/components/TitlePage/TitlePage";
import { Select, Switch } from "antd";
import { Checkbox } from "antd";
import { useState } from "react";
import { Radio } from "antd";
import Image from "next/image";

const dataRadioFilter = [
  {
    id: 1,
    content: "All Token",
    value: "1",
  },
  {
    id: 2,
    content: "Lastest TVL",
    value: "2",
  },
  {
    id: 3,
    content: "Smallest FDV",
    value: "3",
  },
  {
    id: 4,
    content: "Most Holding",
    value: "4",
  },
];

const dataMostViewedIn = [
  {
    value: 1,
    label: "Most Watched in",
  },
  {
    value: 2,
    label: "Most Traded in",
  },
  {
    value: 3,
    label: "Highest Volume in",
  },
  {
    value: 4,
    label: "Top Price Gainers in",
  },
  {
    value: 5,
    label: "Top TVL Gainers in",
  },
];
const dataTime = [
  {
    value: 1,
    label: "24h",
  },
  {
    value: 2,
    label: "30m",
  },
  {
    value: 3,
    label: "1h",
  },
  {
    value: 4,
    label: "2h",
  },
  {
    value: 5,
    label: "4h",
  },
  {
    value: 6,
    label: "6h",
  },
  {
    value: 7,
    label: "8h",
  },
  {
    value: 8,
    label: "12h",
  },
];
const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [isAdvanceFilter, setIsAdvanceFilter] = useState<boolean>(false);
  const { page, limit } = searchParams;

  const handleAdvanceFilter = (onchange: boolean) => {
    setIsAdvanceFilter(onchange);
  };
  return (
    <div className="bg-img-home min-h-screen px-3 xl:px-0">
      <div className="container mx-auto ">
        <div className="flex items-center justify-end space-x-2">
          <p className="text-[10px] font-normal leading-[20px] text-neutral-50 ">
            Advanced Filter
          </p>
          <Switch
            defaultChecked={false}
            onChange={handleAdvanceFilter}
            id="advance"
            className="w-[10px]"
          />
        </div>
        <div className="flex items-start space-x-4">
          <TitlePage title="Find Gems" />
          {/* <form action="" className="flex items-center space-x-4">
            <Radio.Group defaultValue={1}>
              {dataRadioFilter.map((item, _) => {
                return (
                  <Radio value={item.id} key={item.id}>
                    {item.content}
                  </Radio>
                );
              })}
            </Radio.Group>
            <Select
              placeholder="Most Viewed in"
              className="w-[180px]"
              options={dataMostViewedIn}
            />
            <Select defaultValue={1} options={dataTime} />
            <button
              type="submit"
              className="flex h-[33px] w-[55px] items-center rounded-md border border-solid border-[#FF57C1] bg-transparent"
            >
              <Image src={"/img/filter.svg"} alt="svg" width={40} height={40} />
            </button>
          </form> */}
        </div>
        <div className="space-y-12 py-6">
          <TableToken />
          <PaginationPage
            current={Number(page) || 1}
            pageSize={Number(limit) || 10}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
