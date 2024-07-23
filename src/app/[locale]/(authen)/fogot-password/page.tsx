"use client";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@/components/TextField/TextField";
import InputPassword from "@/components/InputPassword/InpuPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type FormData = {
  email: string;
};
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});
export default function FogotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);
  return (
    <div className="min-h-screen bg-auth bg-cover bg-center px-3 xl:px-0">
      <div className="container mx-auto ">
        <div className="mx-auto w-[85%] translate-y-[70px] rounded-2xl border-2 border-solid border-[#575A5B] bg-neutral-95 p-5 xs:w-[415px]">
          <h3 className="mb-1 mt-0 text-[30px] font-semibold not-italic leading-[24px] text-white">
            Fogot password
          </h3>
          <p className="text-[10px] font-normal leading-[24px] text-neutral-50">
            Don’t worry. We’ll email your intructions to reset your password.
          </p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className="mb-4 block cursor-pointer text-[16px] font-semibold not-italic leading-[24px] text-white">
                Email
              </label>
              <TextField
                placeholder="Enter your email"
                {...register("email")}
                status={Boolean(errors.email) ? "error" : ""}
                helperText={
                  Boolean(errors.email) ? String(errors.email?.message) : ""
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-xs-body text-status-info">Return to Login</a>
              <button
                type="submit"
                className="h-[30px] w-[170px] w-full border-none bg-primary-linear text-xs-body text-white"
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
