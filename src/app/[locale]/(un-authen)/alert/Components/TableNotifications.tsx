import MyTable, { ListingColumnType } from "@/components/MyTable/MyTable";
import { Typography } from "antd";
import Image from "next/image";
const { Title } = Typography;
interface IData {
  id: number;
  sendAt: string;
  alertId: string;
  content: string;
}
const data: IData[] = [
  {
    id: 1,
    sendAt: "Sent at",
    alertId: "123",
    content: "SOL: Price is above $99.99",
  },
];
const TableNotifications = () => {
  const columns: ListingColumnType<IData>[] = [
    {
      title: (
        <Title className="flex items-center space-x-1 text-sm-body text-white">
          <span>Sent at</span>
          <Image
            src={"/img/delivery_time.svg"}
            alt="Delivery Time"
            width={14}
            height={14}
          />
        </Title>
      ),
      dataIndex: "sendAt",
      width: 265,
      render: (text: string, _record: any, index: number) => {
        return <p className="text-sm-body text-neutral-10">{text}</p>;
      },
    },
    {
      title: <Title className=" text-sm-body text-white">Alert ID</Title>,
      dataIndex: "alertId",
      width: 350,
      render: (text: string, _record: any, index: number) => {
        return <p className="text-sm-body text-neutral-10">{text}</p>;
      },
    },
    {
      title: <Title className=" text-sm-body text-white">Content</Title>,
      dataIndex: "content",
      width: 620,
      render: (text: string, _record: any, index: number) => {
        return <p className="text-sm-body text-neutral-10">{text}</p>;
      },
    },
  ];
  return (
    <MyTable
      columns={columns}
      data={data}
      rowKey={(r) => `${r.id}`}
      recordsPerPage={100}
      totalRecords={1000}
      showFooter={false}
    
    />
  );
};

export default TableNotifications;
