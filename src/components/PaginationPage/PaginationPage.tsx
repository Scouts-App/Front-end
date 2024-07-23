"use client";
import React, { HTMLAttributes } from "react";
import { Pagination, PaginationProps } from "antd";
import cx from "classnames";
import "./style.scss";
import { usePathname, useRouter } from "next/navigation";
type HTMLAttributesWithoutOnChange = Omit<
  HTMLAttributes<HTMLElement>,
  "onChange" | "role"
>;

interface IProps extends HTMLAttributesWithoutOnChange, PaginationProps {}
const PaginationPage = ({
  className,
  defaultCurrent = 1,
  total = 500,
  pageSizeOptions = [10, 20, 30, 50],
  defaultPageSize= 10,
  ...rest
}: IProps) => {
  const router = useRouter();
  const path = usePathname();
  const handleOnchangePagination = (page: number, pageSize: number) => {
    let url = path;
    url += `?page=${page}&limit=${pageSize}`;
    router.push(url);
  };
  return (
    <div className="pagination-page">
      <Pagination
        className={cx("", className)}
        {...rest}
        defaultCurrent={defaultCurrent}
        total={total}
        pageSizeOptions={pageSizeOptions}
        onChange={handleOnchangePagination}

      />
    </div>
  );
};

export default React.memo(PaginationPage);
