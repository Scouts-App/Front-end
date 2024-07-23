"use client"
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function TradingViewWidget() {
 
  return (
    <AdvancedRealTimeChart theme="dark" autosize width="100%" height={467} symbol="BITSTAMP:BTCUSD"></AdvancedRealTimeChart>
  );
}

export default TradingViewWidget;
