export interface IToken {
    id: string;
    token?: string;
    trending:number;
    price?: number;
    percents30m:number;
    percents1h:number;
    percents2h:number;
    percents24h:number;
    totalValueLocked:string;
    vol24h:string;
    percentsVol24h:number;
    volumeChange24h:number;
    trades24h?:string;
    percentsTrades24h:number;
  }
  