"use client";
import TitlePage from "@/components/TitlePage/TitlePage";
import Image from "next/image";
import { useState } from "react";
import ModalSetting from "./Components/ModalSetting";
import TableToken from "./Components/TableToken";
import TableNotifications from "./Components/TableNotifications";
import ModalNewAlert from "./Components/ModalNewAlert";

export default function Alert() {
  const [isOpenModalSetting, setIsOpenModalSetting] = useState<boolean>(false);
  const [isOpenModalNewAlert, setIsOpenModalNewAlter] =
    useState<boolean>(false);
  const showModalSetting = () => {
    setIsOpenModalSetting(true);
  };

  const handleCancelModalSetting = () => {
    setIsOpenModalSetting(false);
  };

  const handleOkModalSetting = () => {
    setIsOpenModalSetting(false);
  };

  const showModalNewAlert = () => {
    setIsOpenModalNewAlter(true);
  };

  const handleCancelModalNewAlert = () => {
    setIsOpenModalNewAlter(false);
  };

  const handleOkModalNewAlert = () => {
    setIsOpenModalNewAlter(false);
  };
  return (
    <div className="min-h-screen bg-auth bg-cover bg-center px-3 xl:px-0">
      <div className="container mx-auto ">
        <div className="py-6">
          <div className="flex items-center justify-between">
            <TitlePage title="Alert" />
            <p
              className="flex cursor-pointer items-center space-x-1 text-sm-body text-status-info"
              onClick={showModalSetting}
            >
              <span>Setting</span>
              <Image
                src={"/img/setting.svg"}
                alt="setting"
                width={15}
                height={15}
              />
            </p>
          </div>
          <div className="min-h-[300px]">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="mb-0 text-md-body text-white">Alert List</h5>
                <p className="font-formal m-0 text-[10px] leading-[24px] text-neutral-50">
                  You have used 1 of total 100 alerts.
                </p>
              </div>
              <button className="cursor-pointer text-gradient-primary flex h-[27px] w-[168px] items-center justify-center space-x-1 rounded border border-solid border-[#FF57C1] bg-transparent text-xs-body"
              onClick={showModalNewAlert}
              >
                <Image
                  src={"/img/plus.svg"}
                  alt="plus"
                  width={15}
                  height={15}
                />{" "}
                <span>Create New Alert</span>
              </button>
            </div>

            <TableToken />
          </div>
          <div className="">
            <div className="mb-2 flex items-center justify-between">
              <h5 className="my-0 text-md-body text-white">Notifications</h5>
              <p className="flex cursor-pointer items-center space-x-1 text-xs-body text-status-info">
                <span>Refresh</span>
                <Image
                  src={"/img/refresh.svg"}
                  alt="refresh"
                  width={12}
                  height={12}
                />
              </p>
            </div>
            <TableNotifications />
          </div>
        </div>
        <ModalSetting
          title={
            <div className="flex items-center space-x-2 text-[30px] font-semibold leading-[24px] text-status-info">
              <Image
                src={"/img/setting.svg"}
                alt="setting"
                width={20}
                height={20}
              />{" "}
              <span>Setting</span>
            </div>
          }
          open={isOpenModalSetting}
          onOk={handleOkModalSetting}
          onCancel={handleCancelModalSetting}
        />
        <ModalNewAlert
          title={
            <div className="flex items-center space-x-2 text-[30px] font-semibold leading-[24px] text-gradient-primary">
              <Image
                src={"/img/plus.svg"}
                alt="setting"
                width={20}
                height={20}
              />{" "}
              <span>Create New Alert</span>
            </div>
          }
          open={isOpenModalNewAlert}
          onOk={handleOkModalNewAlert}
          onCancel={handleCancelModalNewAlert}
        />
      </div>
    </div>
  );
}
