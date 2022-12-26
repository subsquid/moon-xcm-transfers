import {
  Block,
  Chain,
  ChainContext,
  BlockContext
} from '../types/generated/support';
import { UnknownVersionError } from '../../../utils/errors';
import { AssetsMetadataStorage } from '../types/generated/storage';

import { AssetMetadata, AssetMetadataStorageData } from '../../types/xToken';
import { Currency, CurrencyId } from '../types/custom/types';

async function getAssetMetadataStorageData(
  ctx: BlockContext,
  key: any
): Promise<AssetMetadataStorageData | undefined> {
  const storage = new AssetsMetadataStorage(ctx);
  if (!storage.isExists) return undefined;

  if (storage.isV1201) {
    if (typeof key.value !== 'bigint') return undefined;
    return await storage.asV1201.get(key.value);
  }
  throw new UnknownVersionError(storage.constructor.name);
}

export async function getAssetMetadatasXToken(
  ctx: BlockContext,
  asset: Currency
): Promise<AssetMetadata | undefined> {
  const key: CurrencyId | {} = (() => {
    switch (asset.type) {
      case 'ForeignAsset':
        return {
          __kind: 'ForeignAssetId',
          value: asset.value
        };
      case 'OtherReserve':
        return {
          __kind: 'OtherReserve',
          value: asset.value
        };
      case 'LocalAssetReserve':
        return {
          __kind: 'LocalAssetReserve',
          value: asset.value
        };
      default:
        return {};
    }
  })();

  const data = await getAssetMetadataStorageData(ctx, key);
  if (!data) return undefined;

  return {
    name: Buffer.from(data.name).toString('ascii'),
    symbol: Buffer.from(data.symbol).toString('ascii'),
    decimals: data.decimals,
    minimalBalance: data.deposit
  };
}
