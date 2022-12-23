import {
  Block,
  Chain,
  ChainContext,
  BlockContext
} from '../types/generated/support';
import { UnknownVersionError } from '../../../utils/errors';
import { AssetsMetadataStorage } from '../types/generated/storage';
import { Ctx } from '../../../processor';

import { AssetMetadata, AssetMetadataStorageData } from '../../types/xToken';
import { Asset, AssetId } from '../types/custom/types';

async function getAssetMetadataStorageData(
  ctx: Ctx,
  block: Block,
  key: any
): Promise<AssetMetadataStorageData | undefined> {
  const storage = new AssetsMetadataStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1201) {
    if (typeof key.value !== 'bigint') return undefined;
    return await storage.asV1201.get(key.value);
  }
  throw new UnknownVersionError(storage.constructor.name);
}

export async function getAssetMetadatasXToken(
  ctx: Ctx,
  block: Block,
  asset: Asset
): Promise<AssetMetadata | undefined> {
  const key: AssetId | {} = (() => {
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

  const data = await getAssetMetadataStorageData(ctx, block, key);
  if (!data) return undefined;

  return {
    name: Buffer.from(data.name).toString('ascii'),
    symbol: Buffer.from(data.symbol).toString('ascii'),
    decimals: data.decimals,
    minimalBalance: data.deposit
  };
}
