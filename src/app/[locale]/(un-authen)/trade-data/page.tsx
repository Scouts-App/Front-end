import dynamic from "next/dynamic";
import { Tabs } from "antd";
import "./style.scss";
import TokenInfo from "./Components/TokenInfo";
import Swap from "./Components/Swap";
import RecentTrade from "./Components/RecentTrade";
import Security from "./Components/Security";
import TopHolders from "./Components/TopHolders";
const SymbolOverviewNoSSR = dynamic(
  () => import("./Components/TradingViewWidget").then((w) => w.default),
  {
    ssr: false,
  },
);
const Page = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0D] px-3 xl:px-0">
      <div className="container mx-auto ">
        <div className="py-6">
          <div className="flex mt-0">
            <div className="h-[476px] w-[70%]">
              <SymbolOverviewNoSSR />
            </div>
            <div className="tab-table w-[30%]">
              <div className="">
                <Tabs
                  defaultActiveKey="1"
                  type="card"
                  size="middle"
                  indicator={undefined}
                  className="custom-two-tabs"
                  items={[
                    {
                      label: (
                        <span className="text-center text-neutral-50">
                          Token Info
                        </span>
                      ),
                      key: "token_info",
                      children: <TokenInfo />,
                    },
                    {
                      label: (
                        <span className="text-center text-neutral-50">
                          Swap
                        </span>
                      ),
                      key: "swap",
                      children: <Swap />,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="flex mt-0">
            <div className="w-[70%]">
              <Tabs
                defaultActiveKey="1"
                type="card"
                size="middle"
                indicator={undefined}
                className="custom-tabs"
                items={[
                  {
                    label: <span>Reccent Trade</span>,
                    key: "recent_trade",
                    children: <RecentTrade />,
                  },
                  {
                    label: <span>Feature</span>,
                    key: "find_gems1",
                    children: <p>2</p>,
                  },
                  {
                    label: <span>Feature</span>,
                    key: "find_gems2",
                    children: <p>3</p>,
                  },
                  {
                    label: <span>Feature</span>,
                    key: "find_gems3",
                    children: <p>4</p>,
                  },
                ]}
              />
            </div>
            <div className="tab-table w-[30%]">
              <div className="">
                <Tabs
                  defaultActiveKey="1"
                  type="card"
                  size="middle"
                  indicator={undefined}
                  className="custom-two-tabs"
                  items={[
                    {
                      label: (
                        <span className="text-center text-neutral-50">
                          Security
                        </span>
                      ),
                      key: "token_info",
                      children: <Security />,
                    },
                    {
                      label: (
                        <span className="text-center text-neutral-50">
                          Top 10 Holders
                        </span>
                      ),
                      key: "swap",
                      children: <TopHolders />,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
