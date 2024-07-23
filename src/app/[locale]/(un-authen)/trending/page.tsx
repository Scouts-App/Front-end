import PaginationPage from "@/components/PaginationPage/PaginationPage";
import TableToken from "@/components/TableToken/TableToken";
import TitlePage from "@/components/TitlePage/TitlePage";
import React from "react";

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page, limit } = searchParams;
  return (
    <div className="bg-img-home min-h-screen px-3 xl:px-0">
      <div className="container mx-auto ">
        <div className="space-y-12 py-6">
          <TitlePage title="Trending" />
          <TableToken />
          <PaginationPage current={Number(page) || 1} pageSize={Number(limit) || 10} />
        </div>
      </div>
    </div>
  );
};

export default Page;
