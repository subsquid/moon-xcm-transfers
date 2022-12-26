export interface AssetMetadata {
  name: string;
  symbol: string;
  decimals: number;
  minimalBalance: bigint;
}

export interface AssetMetadataStorageData {
  deposit: bigint;
  name: Uint8Array;
  symbol: Uint8Array;
  decimals: number;
  isFrozen: boolean;
}

export type TransferCallData = {
  currencyId: any;
  amount: bigint;
  dest: any;
  destWeight: bigint;
};

export type CurrencyIdCommon = {
  __kind: any;
  value?: any;
};
export type AssetCommon = {
  type: any;
  value?: any;
};


export type Token = { symbol: string; decimals: number }


export interface XcmTransferData {
  id: string;
  blockNumber: number;
  timestamp: Date;
  extrinsicHash?: string;
  from: string;
  to: {
    paraId?: number;
    id: string;
  };
  assets: {
    symbol: string;
    amount: bigint;
  }[];
  fee?: bigint;
}
