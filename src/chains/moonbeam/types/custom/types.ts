export interface AssetMetadata {
  name: string;
  symbol: string;
  decimals: number;
  minimalBalance: bigint;
}

export interface AssetMetadataStorage {
  deposit: bigint;
  name: Uint8Array;
  symbol: Uint8Array;
  decimals: number;
  isFrozen: boolean;
}

export type TokenSymbol = { __kind: string };

export type CurrencyId =
  | {
      __kind: 'ForeignAsset';
      value: bigint;
    }
  | {
      __kind: 'OtherReserve';
      value: bigint;
    }
  | {
      __kind: 'LocalAssetReserve';
      value: bigint;
    };

export type Currency =
  | {
      type: 'SelfReserve';
    }
  | {
      type: 'ForeignAsset';
      value: bigint;
    }
  | {
      type: 'OtherReserve';
      value: bigint;
    }
  | {
      type: 'LocalAssetReserve';
      value: bigint;
    };

export type TransferCallData = {
  currencyId: any;
  amount: bigint;
  dest: any;
  destWeight: bigint;
};

export type TransferredEventData = {
  sender: Uint8Array;
  currencyId: any;
  amount: bigint;
  dest: any;
};

