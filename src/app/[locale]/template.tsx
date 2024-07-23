import { ConfigProvider } from "antd";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF57C1",
          fontFamily: "inherit",
        },
        components: {
          Input: {
            activeBorderColor: "blue",
            activeShadow: "transparent",
            colorTextPlaceholder: "#969A9C",
          },
          Table: {
            rowHoverBg: "transparent",
          },
          Segmented: {
            itemActiveBg: "#FF57C1",
            itemColor: "#fff",
            itemSelectedBg: "#FF57C1",
            trackBg: "rgba(11, 11, 13, 1)",
            trackPadding: 4
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
