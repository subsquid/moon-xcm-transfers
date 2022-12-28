import { toHex, decodeHex } from "@subsquid/substrate-processor";
import assert from "assert";
import {
  AssetManagerAssetTypeIdStorage,
  AssetsMetadataStorage,
} from "./types/storage";
import { BlockContext, Call, ChainContext } from "./types/support";
import * as ss58 from "@subsquid/ss58";
import * as v1201 from "./types/v1201";
import config from "./config";

export function encodeId(id: Uint8Array): string {
  // return ss58.codec("moonbeam").encode(id);
  return toHex(id);
}

export function getDestination(value: any) {
  switch (value.__kind) {
    case "V0": // TODO probably redundant case
      return getDestinationFromLocation(value.value);
    case "V1":
      return getDestinationFromLocation(value.value.interior);
    default:
      throw new Error(`Unsupported destination version: ${value.__kind}`);
  }
}

function getDestinationFromLocation(value: any): {
  id: string;
  paraId?: number;
} {
  switch (value.__kind) {
    case "X1":
      return {
        id: getAccountId(value.value),
        paraId: undefined,
      };
    case "X2":
    case "X3": // block: 2374882 - dest contains additional junction "PalletInstance: 1"
      return {
        id: getAccountId(value.value[1]),
        paraId: getParachainId(value.value[0]),
      };

    default:
      throw new Error(`Unsupported location variant: ${value.__kind}`);
  }
}

function getAccountId(value: any): string {
  switch (value.__kind) {
    case "AccountId32":
      return toHex(value.id);
    case "AccountKey20":
      return toHex(value.key);
    case "OnlyChild":
      /**
       * query MyQuery {
       *   events(limit: 1000, where: {name_eq: "XTokens.TransferredMultiAssets", block: {height_eq: 2374674}}) {
       *     id
       *     args
       *     block {
       *       hash
       *       height
       *       timestamp
       *     }
       *   }
       * }
       */
      throw new Error()
    case "GeneralKey":
      /**
       * query MyQuery {
       *   events(limit: 1000, where: {name_eq: "XTokens.TransferredMultiAssets", block: {height_eq: 1543123}}) {
       *     id
       *     args
       *     block {
       *       hash
       *     }
       *   }
       * }
       *
       * "dest": {
       *             "interior": {
       *               "__kind": "X2",
       *               "value": [
       *                 {
       *                   "__kind": "Parachain",
       *                   "value": 2032
       *                 },
       *                 {
       *                   "__kind": "GeneralKey",
       *                   "value": "0x0002"
       *                 }
       *               ]
       *             },
       *             "parents": 1
       *           },
       *
       * Probably it's actual only for INTERLAY parachain (https://docs.interlay.io/#/developers/api?id=asset-api)
       * and all transfers are coming to the same address in parachain
       * (wd7Vt8y5JkgSc1ks2sWz9N169aMRNd1TCDYnJLB74i2v3KvuA / p.key - 0x0000000000000000000000000000000000000000000000007369626c00000000)
       */
      // TODO Add implementation for this case
      // return Buffer.from(value.value).readUintBE(0, 2).toString();
      return '0x0000000000000000000000000000000000000000000000007369626c00000000'
    default:
      throw new Error(`Unsupported account id variant: ${value.__kind}`);
  }
}

function getParachainId(value: any): number | undefined {
  switch (value.__kind) {
    case "Parachain":
      return value.value;
    case "Parent":
      return undefined;
    default:
      throw new Error(`Unsupported parachain id variant: ${value.__kind}`);
  }
}

interface AssetMetadatasStorageData {
  deposit: bigint;
  name: Uint8Array;
  symbol: Uint8Array;
  decimals: number;
  isFrozen: boolean;
}

async function getAssetMetadatasStorageData(
  ctx: BlockContext,
  key: any
): Promise<AssetMetadatasStorageData | undefined> {
  const storage = new AssetsMetadataStorage(ctx);
  if (!storage.isExists) return undefined;

  if (storage.isV1201) {
    if (typeof key.value !== "bigint") return undefined;
    return await storage.asV1201.get(key.value);
  } else {
    throw new Error();
  }
}

async function getAssetIdByAssetTypeStorageData(
  ctx: BlockContext,
  assetType: v1201.AssetType
): Promise<bigint | undefined> {
  const storage = new AssetManagerAssetTypeIdStorage(ctx);
  if (!storage.isExists) return undefined;

  if (storage.isV1201) {
    return await storage.asV1201.get(assetType);
  } else {
    throw new Error();
  }
}

interface AssetMetadata {
  name: string;
  symbol: string;
  decimals: number;
}

export async function getAssetMetadatas(
  ctx: BlockContext,
  currency: Currency
): Promise<AssetMetadata | undefined> {
  let key: any;
  switch (currency.__kind) {
    case "ForeignAsset":
      key = {
        __kind: "ForeignAssetId",
        value: currency.value,
      };
      break;
    case "OtherReserve":
      key = {
        __kind: "OtherReserveId",
        value: currency.value,
      };
      break;
    case "LocalAssetReserve":
      key = {
        __kind: "LocalAssetReserveId",
        value: currency.value,
      };
      break;
  }

  const data = await getAssetMetadatasStorageData(ctx, key);
  if (!data) return undefined;

  return {
    name: Buffer.from(data.name).toString("ascii"),
    symbol: Buffer.from(data.symbol).toString("ascii"),
    decimals: data.decimals,
  };
}

async function getAssetMetadatasByAssetTypeStorageData(
  ctx: BlockContext,
  assetType: v1201.AssetType
): Promise<AssetMetadata | undefined> {
  const currencyId = await getAssetIdByAssetTypeStorageData(ctx, assetType);

  if (!currencyId) return undefined;

  return await getAssetMetadatas(ctx, {
    __kind: "ForeignAsset",
    value: currencyId,
  });
}

export type Currency =
  | {
      __kind: "SelfReserve";
    }
  | {
      __kind: "ForeignAsset";
      value: bigint;
    }
  | {
      __kind: "OtherReserve";
      value: bigint;
    }
  | {
      __kind: "LocalAssetReserve";
      value: bigint;
    };

type Location = { parents: number; interior: any };

async function getAssetFromLocation(
  ctx: BlockContext,
  location: Location
): Promise<AssetMetadata> {
  let assetMeta: AssetMetadata | undefined;
  switch (location.parents) {
    case 0:
      switch (location.interior.__kind) {
        case "X1":
          switch (location.interior.value.__kind) {
            case "PalletInstance": {
              // TODO check this post - https://github.com/colorfulnotion/xcm-global-registry
              // In current state let's decide that PalletInstance === 10 === GLMR regarding
              // article above and this scope - https://api.polkaholic.io/xcm/multilocation/polkadot
              // (just search "palletInstance: 10")
              // Storage call "assetManager.assetTypeId" doesn't work fork for
              // location X1 + PalletInstance(10).

              // "id": {
              //   "__kind": "Concrete",
              //     "value": {
              //     "interior": {
              //       "__kind": "X1",
              //         "value": {
              //         "__kind": "PalletInstance",
              //           "value": 10
              //       }
              //     },
              //     "parents": 0
              //   }
              assetMeta = config.nativeToken;
              break;
            }
            default:
              throw new Error();
          }
          break;
      }
      break;

    case 1:
      switch (location.interior.__kind) {
        case "Here": {
          assetMeta = config.nativeToken;
          break;
        }

        case "X1": {
          switch (location.interior.value.__kind) {
            case "Parachain": {
              const paraId = location.interior.value.value;

              if (!paraId) break;

              assetMeta = await getAssetMetadatasByAssetTypeStorageData(ctx, {
                __kind: "Xcm",
                value: {
                  parents: 1,
                  interior: {
                    __kind: "X1",
                    value: {
                      __kind: "Parachain",
                      value: paraId,
                    },
                  },
                },
              });
            }
          }
          break;
        }

        case "X2": {
          switch (location.interior.value[0].__kind) {
            case "Parachain": {
              const paraId = location.interior.value[0].value;

              if (
                location.interior.value[1].__kind !== "GeneralKey" &&
                location.interior.value[1].__kind !== "PalletInstance"
              )
                break;

              assetMeta = await getAssetMetadatasByAssetTypeStorageData(ctx, {
                __kind: "Xcm",
                value: {
                  parents: 1,
                  interior: {
                    __kind: "X2",
                    value: [
                      {
                        __kind: "Parachain",
                        value: paraId,
                      },
                      {
                        __kind: location.interior.value[1].__kind,
                        value: location.interior.value[1].value,
                      },
                    ],
                  },
                },
              });
            }
          }
          break;
        }

        case "X3": {
          //   query MyQuery {
          //   events(limit: 10, where: {name_eq: "XTokens.TransferredMultiAssets", block: {height_eq: 2602166}}) {
          //     id
          //     args
          //   }
          // }
          switch (location.interior.value[0].__kind) {
            case "Parachain": {
              const paraId = location.interior.value[0].value;

              if (
                location.interior.value[1].__kind !== "PalletInstance" &&
                location.interior.value[2].__kind !== "GeneralIndex"
              )
                break;

              const palletInstance = location.interior.value[1].value;
              const index = location.interior.value[2].value;

              assetMeta = await getAssetMetadatasByAssetTypeStorageData(ctx, {
                __kind: "Xcm",
                value: {
                  parents: 1,
                  interior: {
                    __kind: "X3",
                    value: [
                      {
                        __kind: "Parachain",
                        value: paraId,
                      },
                      {
                        __kind: "PalletInstance",
                        value: palletInstance,
                      },
                      {
                        __kind: "GeneralIndex",
                        value: index,
                      },
                    ],
                  },
                },
              });
            }
          }
          break;
        }
      }
      break;
  }

  assert(assetMeta);

  return assetMeta;
}

function getLocationFromAssetId(value: any): Location {
  switch (value.__kind) {
    case "Concrete":
      return value.value;
    case "Abstract":
    default:
      throw new Error(`Unsupported AssetId variant ${value.__kind}`);
  }
}

function getAmountFromFungibility(value: any): bigint {
  switch (value.__kind) {
    case "Fungible":
      return value.value;
    case "NoneFungible":
    default:
      throw new Error(`Unsupported faungibility variant ${value.__kind}`);
  }
}

export async function getToken(
  ctx: BlockContext,
  value: any
): Promise<{ symbol: string; amount: bigint }> {
  const version = value.__kind;

  switch (version) {
    case "V0": {
      throw new Error(`Missing implementation for asset version ${version}`);
    }
    case "V1": {
      const assetLocation = getLocationFromAssetId(value.value.id);
      const asset = await getAssetFromLocation(ctx, assetLocation);

      const amount = getAmountFromFungibility(value.value.fun);

      return { symbol: asset.symbol, amount };
    }
    default:
      throw new Error(`Unsupported asset version ${version}`);
  }
}
