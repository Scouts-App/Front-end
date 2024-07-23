"use client";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@/components/TextField/TextField";
import InputPassword from "@/components/InputPassword/InpuPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type FormData = {
  email: string;
  password: string;
};
const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="min-h-screen bg-auth bg-cover bg-center px-3 xl:px-0">
      <div className="container mx-auto ">
        <div className="mx-auto h-[350px] w-[85%] xs:w-[415px] translate-y-[70px] rounded-2xl border-2 border-solid border-[#575A5B] bg-neutral-95 p-5">
          <h3 className="mt-0 text-[30px] font-semibold not-italic leading-[24px] text-white">
            Login
          </h3>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className="mb-2 block cursor-pointer text-[16px] font-semibold not-italic leading-[24px] text-white">
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
            <div className="mb-6">
              <div className="mb-2 flex justify-between">
                <label className="block cursor-pointer text-[16px] font-semibold not-italic leading-[24px] text-white">
                  Password
                </label>
                <a href="#" className="text-sm-body text-status-info">
                  Fogot password ?
                </a>
              </div>
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
            <div>
              <p className="mb-6 text-xs-body font-normal text-neutral-50">
                Need a Scoutlens account?{" "}
                <a href="" className="text-xs-body text-status-info">
                  Create an account
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="h-[30px] w-full border-none bg-primary-linear text-xs-body text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
