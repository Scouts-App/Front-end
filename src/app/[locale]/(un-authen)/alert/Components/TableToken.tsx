import MyTable, { ListingColumnType } from "@/components/MyTable/MyTable";
import { IconPencil, IconPlayerPause, IconTrash } from "@tabler/icons-react";
import { Typography } from "antd";
import Image from "next/image";
const { Title } = Typography;
interface IData  {
    id: string;
    token: string;
    address: string;
    chain: string;
    type: string;
    value: string;
    frequency: string;
    expirationDate: string;
}
export const data:IData[] = [
  {
    id: "1",
    token: "Etherum",
    address:"abcd1234",
    chain:"abcd1234",
    type:"Price Rises Above",
    value:"$99.99",
    frequency:"Only Once",
    expirationDate:"6.32%"
  },
];
const TableToken = () => {
  const columns: ListingColumnType<IData>[] = [
    {
      title: <Title className="text-sm-body text-white">ID</Title>,
      dataIndex: "id",
      width: 65,
      render: (text: string, _record: any, index: number) => {
        return <p className="text-sm-body text-neutral-10">{text}</p>;
      },
    },
    {
      title: <Title className="text-sm-body text-white">Token</Title>,
      dataIndex: "token",
      width: 167,
      render: (text: string, _record: any, index: number) => {
        return (
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
        );
      },
    },
    {
        title: <Title className="text-sm-body text-white">Address</Title>,
        dataIndex: "address",
        width: 103,
        render: (text: string, _record: any, index: number) => {
          return <p className="text-sm-body text-neutral-10">{text}</p>;
        },
      },
      {
        title: <Title className="text-sm-body text-white">Chain</Title>,
        dataIndex: "chain",
        width: 85,
        render: (text: string, _record: any, index: number) => {
          return <p className="text-sm-body text-neutral-10">{text}</p>;
        },
      },
      {
        title: <Title className="text-sm-body text-white">Type</Title>,
        dataIndex: "type",
        width: 123,
        render: (text: string, _record: any, index: number) => {
          return <p className="text-sm-body text-neutral-10">{text}</p>;
        },
      },
      {
        title: <Title className="text-sm-body text-white">Value</Title>,
        dataIndex: "value",
        width: 103,
        render: (text: string, _record: any, index: number) => {
          return <p className="text-sm-body text-[#00B860]">{text}</p>;
        },
      },
      {
        title: <Title className="text-sm-body text-white">Frequency</Title>,
        dataIndex: "frequency",
        width: 105,
        render: (text: string, _record: any, index: number) => {
          return <p className="text-sm-body text-neutral-10">{text}</p>;
        },
      },
      {
        title: <Title className="text-sm-body text-white">Expiration Date</Title>,
        dataIndex: "expirationDate",
        width: 132,
        render: (text: string, _record: any, index: number) => {
          return <p className="text-sm-body text-neutral-10">{text}</p>;
        },
      },
      {
        title: <Title className="text-sm-body text-white">Action</Title>,
        dataIndex: "id",
        width: 208,
        render: (text: string, _record: any, index: number) => {
          return <div className="flex items-center space-x-2 text-neutral-10">
            <IconPlayerPause className="w-[16px] cursor-pointer"/>
            <IconPencil className="w-[16px] cursor-pointer"/>
            <IconTrash className="w-[16px] cursor-pointer"/>
          </div>
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

export default TableToken;
