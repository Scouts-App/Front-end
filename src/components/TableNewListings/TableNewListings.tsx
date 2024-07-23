import React, { memo } from "react";
import TextPercent from "../TextPercent/TextPercent";
import MyTable, { ListingColumnType } from "../MyTable/MyTable";
import { data } from "../TableTrendingToken/TableTrendingToken";
import { useTranslations } from "next-intl";
import { ITrendingToken } from "@/models/trendingToken.interface";
import Image from "next/image";
import { Radio, Segmented } from "antd";
import "./styles.scss";

function TableNewListings() {
  const t = useTranslations();
  const columns: ListingColumnType<ITrendingToken>[] = [
    {
      title: t("Home.trending_tokens"),
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
      title: t("Home.price"),
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
      title: t("Home.24h_vol"),
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
      title: t("Home.24h_traders"),
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
      title: t("Home.24h_traders"),
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
    <div className="table-newlistings">
      <div className="flex items-center border-b border-l-0 border-r-0 border-t-0 border-solid border-alpha-neutral bg-neutral-90 px-6 py-4">
        <Segmented<string>
          options={[
            {
              label: (
                <span className="text-base text-neutral-10">
                  {t("Home.token")}
                </span>
              ),
              value: "token",
            },
            {
              label: (
                <span className="text-base text-neutral-10">{t("pair")}</span>
              ),
              value: "pair",
            },
          ]}
          className="segment"
          onChange={(value) => {
            console.log(value); // string
          }}
        />
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
export default memo(TableNewListings);
