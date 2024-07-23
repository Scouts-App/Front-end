"use client";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@/components/TextField/TextField";
import InputPassword from "@/components/InputPassword/InpuPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RequestField from "@/components/RequestField/RequestField";
type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};
const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Password is required"),
  })
  .required();
export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="min-h-screen bg-auth bg-center bg-cover px-3 xl:px-0">
      <div className="container mx-auto ">
        <div className="mx-auto  w-[85%] xs:w-[415px] translate-y-[70px] rounded-2xl border-2 border-solid border-[#575A5B] bg-neutral-95 p-5">
          <h3 className="mt-0 text-[30px] font-semibold not-italic leading-[24px] text-white">
            Sign up
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
              <label className="mb-2 block cursor-pointer text-[16px] font-semibold not-italic leading-[24px] text-white">
                Password
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
            <div className="mb-6">
              <label className="mb-2 block cursor-pointer text-[16px] font-semibold not-italic leading-[24px] text-white">
                Confirm password
              </label>

              <InputPassword
                placeholder="Enter your password"
                {...register("confirmPassword")}
                status={Boolean(errors.password) ? "error" : ""}
                helperText={
                  Boolean(errors.password)
                    ? String(errors.password?.message)
                    : ""
                }
              />
            </div>
            <div className="flex flex-wrap mb-2">
              <RequestField status={true} content="8 characters Minimum" className="w-1/2"/>
              <RequestField status={false} content="One uppercase character" className="w-1/2"/>
              <RequestField status={false} content="One lowercase character" className="w-1/2"/>
              <RequestField status={false} content="One special character" className="w-1/2"/>
              <RequestField status={false} content="One number" className="w-1/2"/>
            </div>

            <button
              type="submit"
              className="h-[30px] w-full border-none bg-primary-linear text-xs-body text-white"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
