"use client";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@/components/TextField/TextField";
import InputPassword from "@/components/InputPassword/InpuPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

export default function SendEmail() {
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <div className="min-h-screen bg-auth bg-cover bg-center px-3 xl:px-0">
      <div className="container mx-auto ">
        <div className="mx-auto w-[85%] translate-y-[70px] rounded-2xl border-2 border-solid border-[#575A5B] bg-neutral-95 p-5 xs:w-[415px]">
          <h3 className="mb-1 mt-0 text-[30px] font-semibold not-italic leading-[24px] text-white">
            Fogot password
          </h3>
          <p className="mb-6 text-[10px] font-normal leading-[24px] text-neutral-50">
            Don’t worry. We’ll email your intructions to reset your password.
          </p>
          <p className="mb-6 text-xs-body font-semibold text-white">
            If the account exists, a password recovery email will be sent to you
            within the next few minutes. Please check your email !
          </p>
          <div className="flex items-center justify-between">
            <a href="#" className="text-xs-body text-status-info">
              Return to Login
            </a>

            <a
              href="#"
              className="flex items-center text-xs-body text-status-info space-x-1"
            >
              <Image className="mb-1" src={"./img/home.svg"} alt="home" width={17} height={14} />
              <span>Back home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
