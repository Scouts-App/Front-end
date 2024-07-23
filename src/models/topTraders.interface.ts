import { Address } from "viem";
export interface ITopTraders {
  id: string;
  traderAddress?: Address;
  pnl?: string;
  volume?: string;
  traders?: string;
}
