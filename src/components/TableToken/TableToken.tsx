"use client";
import React, { HTMLAttributes } from "react";
import TextPercent from "../TextPercent/TextPercent";
import Image from "next/image";
import MyTable, { ListingColumnType } from "../MyTable/MyTable";
import { useTranslations } from "next-intl";
import { Typography } from "antd";
import { IToken } from "@/models/token.interface";
const { Title, Text } = Typography;
import "./style.scss";
import PercentageBar from "../PercentageBar/PercentageBar";
import cx from "classnames";
interface IProps extends HTMLAttributes<HTMLElement> {}
export const data: IToken[] = [
  {
    id: "1",
    token: "Etherum",
    trending: 1,
    price: 33.552,
    percents30m: 0,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "64.52k",
    vol24h: "1.21M",
    percentsVol24h: 24.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 14.07,
  },
  {
    id: "2",
    token: "Etherum",
    trending: 2,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "64.52k",
    vol24h: "1.21M",
    percentsVol24h: 54.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
  {
    id: "3",
    token: "Etherum",
    trending: 3,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "94.52k",
    vol24h: "1.21M",
    percentsVol24h: 54.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
  {
    id: "3",
    token: "Etherum",
    trending: 3,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "94.52k",
    vol24h: "1.21M",
    percentsVol24h: 54.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
  {
    id: "3",
    token: "Etherum",
    trending: 3,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "94.52k",
    vol24h: "1.21M",
    percentsVol24h: 54.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
  {
    id: "3",
    token: "Etherum",
    trending: 3,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "94.52k",
    vol24h: "1.21M",
    percentsVol24h: 54.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
  {
    id: "3",
    token: "Etherum",
    trending: 3,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "94.52k",
    vol24h: "1.21M",
    percentsVol24h: 54.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
  {
    id: "3",
    token: "Etherum",
    trending: 3,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "94.52k",
    vol24h: "1.21M",
    percentsVol24h: 54.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
  {
    id: "3",
    token: "Etherum",
    trending: 3,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "94.52k",
    vol24h: "1.21M",
    percentsVol24h: 10.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
  {
    id: "3",
    token: "Etherum",
    trending: 3,
    price: 33.552,
    percents30m: -12.05,
    percents1h: 12,
    percents2h: 12,
    percents24h: 6.32,
    totalValueLocked: "94.52k",
    vol24h: "1.21M",
    percentsVol24h: 54.07,
    volumeChange24h: 25,
    trades24h: "44.61K",
    percentsTrades24h: 54.07,
  },
];
//1380px
const TableToken = ({ className, ...rest }: IProps) => {
  const t = useTranslations("Table_token");
  const columns: ListingColumnType<IToken>[] = [
    {
      title: (
        <Title className="text-sm-body text-white">
          <span className="ml-4 mr-[125px]">#</span> {t("token")}
        </Title>
      ),
      dataIndex: "token",
      width: 281,
      render: (text: string, _record: any, index: number) => {
        return (
          <div className="flex flex-nowrap items-center space-x-3">
            <Title className="mr-[25px] flex h-8 w-8 items-center justify-center rounded bg-alpha-neutral p-1 text-center text-lg-body text-neutral-10">
              <Image src="img/star.svg" alt="star" width={15} height={15} />
              {index}
            </Title>
            <div className="flex w-[80%] items-center justify-between">
              <div className="flex items-center justify-start">
                <Image
                  src="/img/etherum.webp"
                  alt="ether"
                  width={32}
                  height={32}
                  className="mr-1"
                />
                <div className="text-lg-body text-neutral-50">
                  <Title className="my-0 block text-md-body leading-[28px] text-white">
                    {text}
                  </Title>
                  <Title className="my-0 text-[13px] font-normal leading-[15px]  text-neutral-50">
                    {text}
                  </Title>
                </div>
              </div>
              <Image
                src="/img/crypto_icon.svg"
                alt="crypto_icon"
                width={32}
                height={32}
              />
            </div>
          </div>
        );
      },
    },
    {
      title: (
        <Title className="flex flex-nowrap items-center text-sm-body text-neutral-10">
          <Image
            src="/img/fire-icon.svg"
            alt="fire icon"
            className="mr-0 2xl:mr-[10px]"
            width={13}
            height={17}
          />
          <span>{t("trending")}</span>
        </Title>
      ),
      dataIndex: "trending",
      sorter: (a, b) => a.trending - b.trending,
      width: 97,
      render: (text: string, _record: any, index: number) => {
        return <div className="text-sm-body text-neutral-10">{text}</div>;
      },
      align: "right",
    },
    {
      title: <Title className="text-sm-body text-white">{t("price")}</Title>,
      width: 115,
      dataIndex: "price",
      render: (text: number) => (
        <Title className="text-sm-body text-neutral-10">${text}</Title>
      ),
      align: "right",
    },
    {
      title: <Title className="text-sm-body text-white">30m</Title>,
      width: 100,
      dataIndex: "percents30m",
      render: (text: number) => (
        <TextPercent value={text}/>
      ),
      align: "right",
    },
    {
      title: <Title className="text-sm-body text-white">1h</Title>,
      width: 100,
      dataIndex: "percents1h",
      render: (text: number) => <TextPercent value={text} />,
      align: "right",
    },
    {
      title: <Title className="text-sm-body text-white">2h</Title>,
      width: 100,
      dataIndex: "percents2h",
      render: (text: number) => (
        <TextPercent value={text} />
      ),
      align: "right",
    },
    {
      title: <Title className="text-sm-body text-white">24h</Title>,
      width: 100,
      dataIndex: "percents24h",
      render: (text: number) => (
        <TextPercent value={text}/>
      ),
      align: "right",
    },
    {
      title: <Title className="text-sm-body text-white">TVL</Title>,
      width: 100,
      dataIndex: "totalValueLocked",
      sorter: (a, b) => a.totalValueLocked.localeCompare(b.totalValueLocked),
      render: (text: number) => (
        <Text className="text-sm-body text-neutral-10 text-right">${text}K</Text>
      ),
      align: "right",
    },
    {
      title: (
        <Title className="flex items-center justify-end text-sm-body text-white">
          <span>24h Vol</span>
          <Image
            src={"img/information_icon.svg"}
            alt="information icon"
            width={12}
            height={12}
            className="mx-[2px]"
          />
        </Title>
      ),
      width: 138,
      dataIndex: "vol24h",
      sorter: (a, b) => a.totalValueLocked.localeCompare(b.totalValueLocked),
      render: (text: number, record: IToken) => (
        <div>
          <Title className="text-sm-body text-neutral-10">${text}</Title>

          <PercentageBar percentage={record.percentsVol24h} />
        </div>
      ),
      align: "right",
    },
    {
      title: (
        <Title className="text-sm-body text-white">
          <span>24h Vol Chg</span>
        </Title>
      ),
      width: 125,
      dataIndex: "volumeChange24h",
      sorter: (a, b) => a.volumeChange24h - b.volumeChange24h,
      render: (text: number) => <TextPercent value={text} />,
      align: "right",
    },
    {
      title: (
        <Title className="flex items-center justify-end text-sm-body text-white">
          <span>24h Trades</span>
          <Image
            src={"img/information_icon.svg"}
            alt="information icon"
            width={12}
            height={12}
            className="mx-[2px]"
          />
        </Title>
      ),
      width: 130,
      dataIndex: "trades24h",
      sorter: (a, b) => a.totalValueLocked.localeCompare(b.totalValueLocked),
      render: (text: number, record: IToken) => (
        <div>
          <Title className="text-sm-body text-neutral-10">${text}</Title>

          <PercentageBar percentage={record.percentsTrades24h} />
        </div>
      ),
      align: "right",
    },
  ];
  return (
    <div className={cx("", className)} {...rest}>
      <div className="flex items-center justify-end mb-2">
        <div className="flex items-center">
          <Image
            src={"img/columns-icon.svg"}
            alt="column icon"
            width={13}
            height={13}
          />
          <Text className="text-sm-body text-neutral-50 ml-1">Columns</Text>
        </div>
        <div className="relative flex items-center justify-center w-[63px] h-[25px] border border-solid border-neutral-50 bg-neutral p-[2.5px] ml-4 cursor-pointer">
        <Image
            src={"img/download-icon.svg"}
            alt="column icon"
            width={14.5}
            height={20}
          />
           <Text className="text-sm-body text-neutral-50 ml-1">CSV</Text>
           <Text className="absolute -top-[14px] -right-[1px] w-[30px] h-[18px] text-[8px] text-center text-white font-bold p-1"
           style={{
            borderRadius:"3px",
            background:"linear-gradient(90deg, #FF57C1 0%, #BC30E3 100%);"
           }}>PRO</Text>
        </div>
      </div>
      <MyTable
        columns={columns}
        data={data}
        rowKey={(r) => `${r.id}`}
        recordsPerPage={100}
        totalRecords={1000}
        showFooter={false}
        className="table-token"
      />
    </div>
  );
};

export default TableToken;
