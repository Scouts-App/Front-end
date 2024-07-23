import MyTable, { ListingColumnType } from "../MyTable/MyTable";
import MyRadio from "../MyRadio/MyRadio";
import { useTranslations } from "next-intl";
import { ITopTraders } from "@/models/topTraders.interface";
import { IconCopy, IconStarFilled } from "@tabler/icons-react";
import { Typography } from "antd";

const { Text } = Typography;

const data: ITopTraders[] = [
  {
    id: "1",
    pnl: "+$46.52m",
    volume: "~$46.52K",
    traders: "~ $46.52K",
    traderAddress: "0x4843...474743",
  },
  {
    id: "2",
    pnl: "+$46.52m",
    volume: "~$46.52K",
    traders: "~ $46.52K",
    traderAddress: "0x4843...474743",
  },
  {
    id: "3",
    pnl: "+$46.52m",
    volume: "~$46.52K",
    traders: "~ $46.52K",
    traderAddress: "0x4843...474743",
  },
];

export default function TableTopTrader() {
  const t = useTranslations();
  const columns: ListingColumnType<ITopTraders>[] = [
    {
      title: t("Home.token"),
      dataIndex: "token",
      width: 150,
      render: (text: string, _record: any, index: number) => {
        return (
          <div className="flex items-center space-x-3">
            <IconStarFilled size={24} className="text-neutral-10" />
            <div className=" flex h-8 w-8 items-center justify-center rounded bg-alpha-neutral p-1 text-center text-neutral-10">
              #{index}
            </div>
          </div>
        );
      },
    },
    {
      title: t("Home.trader"),
      width: 220,
      dataIndex: "traderAddress",
      render: (text: string) => (
        <Text
          copyable={{
            icon: [
              <IconCopy
                size={16}
                color="rgba(239, 242, 244, 1)"
                key="copy-icon"
              />,
            ],
            tooltips: ["Copy"],
          }}
          className="flex items-end justify-end text-sm text-status-info"
        >
          <span className="order-2 pl-1">{text}</span>
        </Text>
      ),
      align: "right",
    },
    {
      title: t("Home.pnl"),
      width: 200,
      dataIndex: "pnl",
      align: "right",
      render: (text: string) => (
        <span className="text-sm text-status-success">{text}</span>
      ),
    },
    {
      title: t("Home.volume"),
      width: 200,
      dataIndex: "volume",
      render: (text: string) => (
        <span className="text-sm text-neutral-10">{text}</span>
      ),
      align: "right",
    },
    {
      title: t("Home.traders"),
      width: 200,
      dataIndex: "traders",
      render: (text: string) => (
        <span className="text-sm text-neutral-10">{text}</span>
      ),
      align: "right",
    },
  ];
  return (
    <div className="table-newlistings">
      <div className="flex items-center border-b border-l-0 border-r-0 border-t-0 border-solid border-alpha-neutral bg-neutral-90 px-6 py-4">
        <MyRadio
          radios={[
            { id: "1", label: ">10K$", value: 10 },
            { id: "2", label: ">$50k", value: 50 },
            { id: "3", label: ">$100k", value: 100 },
            { id: "4", label: ">1M", value: 1000 },
          ]}
          defaultValue={10}
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
