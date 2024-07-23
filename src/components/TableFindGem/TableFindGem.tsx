import React, { memo } from "react";
import TextPercent from "../TextPercent/TextPercent";
import MyTable, { ListingColumnType } from "../MyTable/MyTable";
import { data } from "../TableTrendingToken/TableTrendingToken";
import { useTranslations } from "next-intl";
import { ITrendingToken } from "@/models/trendingToken.interface";
import Image from "next/image";
import { Radio } from "antd";
import "./styles.scss";
import { RadioField } from "@/models/field.interface";
import MyRadio from "../MyRadio/MyRadio";

function TableFindGem() {
  const t = useTranslations("Home");
  const radios: RadioField[] = [
    {
      id: "1",
      label: t("highest_24h_vol"),
      value: "highest",
    },
    {
      id: "2",
      label: t("top_gainers"),
      value: "top",
    },
  ];
  const columns: ListingColumnType<ITrendingToken>[] = [
    {
      title: t("trending_tokens"),
      dataIndex: "token",
      width: 300,
      render: (text: string, _record: any, index: number) => {
        return (
          <div className="flex items-center space-x-3">
            <div className=" flex h-8 w-8 items-center justify-center rounded bg-alpha-neutral p-1 text-center text-neutral-10">
              #{index}
            </div>
            <Image src="/img/etherum.webp" alt="ether" width={32} height={32} />
            <span className="text-lg-body text-neutral-50">{text}</span>
          </div>
        );
      },
    },
    {
      title: t("price"),
      width: 120,
      dataIndex: "price",
      render: (text: number) => (
        <span className="text-sm text-neutral-10">${text}</span>
      ),
      align: "center",
    },
    {
      title: null,
      width: 120,
      dataIndex: "price",
      render: (text: number) => <TextPercent value={text} />,
      align: "center",
    },
    {
      title: t("24h_vol"),
      width: 120,
      dataIndex: "hVol",
      align: "center",
      render: (text: string) => (
        <span className="text-sm text-neutral-10">${text}</span>
      ),
    },
    {
      title: null,
      width: 120,
      dataIndex: "hVolPercents",
      align: "center",
      render: (text: number) => <TextPercent value={text} />,
    },
    {
      title: t("24h_traders"),
      width: 120,
      dataIndex: "hTrader",
      render: (text: string) => (
        <span className="text-sm text-neutral-10">${text}</span>
      ),
      align: "center",
    },
    {
      title: null,
      width: 120,
      dataIndex: "hTraderPercents",
      render: (text: number) => <TextPercent value={text} />,
      align: "center",
    },
    {
      title: t("24h_traders"),
      width: 120,
      dataIndex: "hTrader",
      render: (text: string) => (
        <span className="text-sm text-neutral-10">${text}</span>
      ),
      align: "center",
    },
    {
      title: null,
      width: 120,
      dataIndex: "hTraderPercents",
      render: (text: number) => <TextPercent value={text} />,
      align: "center",
    },
  ];
  return (
    <div className="table-findgem">
      <div className="flex items-center border-b border-l-0 border-r-0 border-t-0 border-solid border-alpha-neutral bg-neutral-90 px-6 py-4">
        <MyRadio radios={radios} defaultValue="highest" />
      </div>
      <MyTable
        columns={columns}
        data={data}
        rowKey={(r) => `${r.id}`}
        recordsPerPage={100}
        totalRecords={1000}
        showFooter={true}
      />
    </div>
  );
}
export default memo(TableFindGem);
