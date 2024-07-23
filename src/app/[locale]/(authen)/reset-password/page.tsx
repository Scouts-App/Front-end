"use client";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@/components/TextField/TextField";
import InputPassword from "@/components/InputPassword/InpuPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RequestField from "@/components/RequestField/RequestField";
import Image from "next/image";
type FormData = {
  password: string;
};
const schema = yup
  .object()
  .shape({
    password: yup.string().required("Password is required"),
  })
  .required();
export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="min-h-screen bg-auth bg-cover bg-center px-3 xl:px-0">
      <div className="container mx-auto">
        <div className="mx-auto  w-[85%] translate-y-[70px] rounded-2xl border-2 border-solid border-[#575A5B] bg-neutral-95 p-5 xs:w-[415px] relative">
          <h3 className="mt-0 text-[30px] font-semibold not-italic leading-[24px] text-white">
            Reset password
          </h3>
          <p className="text-[10px] font-normal leading-[24px] text-neutral-50">
            Don’t worry. We’ll email your intructions to reset your password.
          </p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="mb-2 block cursor-pointer text-[16px] font-semibold not-italic leading-[24px] text-white">
                New password
              </label>

              <InputPassword
                placeholder="Enter your password"
                {...register("password")}
                status={Boolean(errors.password) ? "error" : ""}
                helperText={
                  Boolean(errors.password)
                    ? String(errors.password?.message)
                    : ""
                }
              />
            </div>

            <div className="mb-2 flex flex-wrap">
              <RequestField
                status={true}
                content="8 characters Minimum"
                className="w-1/2"
              />
              <RequestField
                status={false}
                content="One uppercase character"
                className="w-1/2"
              />
              <RequestField
                status={false}
                content="One lowercase character"
                className="w-1/2"
              />
              <RequestField
                status={false}
                content="One special character"
                className="w-1/2"
              />
              <RequestField
                status={false}
                content="One number"
                className="w-1/2"
              />
            </div>

            <button
              type="submit"
              className="h-[30px] w-full border-none bg-primary-linear text-xs-body text-white"
            >
              Sign up
            </button>
          </form>
          <div className="absolute -bottom-[40px] w-full">
            <a
              href="#"
              className="flex items-center space-x-1 text-xs-body text-status-info justify-center"
            >
              <Image
                className="mb-1"
                src={"./img/home.svg"}
                alt="home"
                width={17}
                height={14}
              />
              <span>Back home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
