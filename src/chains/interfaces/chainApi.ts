import {
  Block,
  ChainContext,
  Event,
  Call
} from '../moonbeam/types/generated/support';
import { Entity } from '@subsquid/mikroorm-store';
import {
  AssetCommon,
  AssetMetadata,
  CurrencyIdCommon,
  TransferCallData
} from '../types/xToken';
import { Ctx, CallItem } from '../../processor';
import { ProcessorConfig } from './processorConfig';
import { NativeTokensMap } from './common';
import { BlockHeader } from '../../utils/types';
import { TransferAssetToken, TransferLocationXcm } from '../../model';

export type ChainApi = {
  batch: {
    batchHandler: (ctx: Ctx) => Promise<void>;
  };
  entities: {
    getAssetEntity?: EntityGetter<
      [CurrencyIdCommon, bigint],
      TransferAssetToken
    >;
    getLocationXcmEntity?: EntityGetter<[any], TransferLocationXcm>;
  };
  calls: {
    getXTokenTransferCallData?: CallGetter<TransferCallData>;
  };
  storage: {
    getAssetMetadatasXToken?: StorageGetter<
      [AssetCommon],
      AssetMetadata | undefined
    >;
  };
};

type CallGetter<R> = (ctx: Ctx, call: CallItem) => R;
type EntityGetter<T extends Array<any>, R> = (
  ctx: Ctx,
  block: BlockHeader,
  ...args: T
) => Promise<R>;
type EventGetter<R> = (ctx: Ctx, event: Event) => R;
type StorageGetter<T extends Array<any>, R> = (
  ctx: Ctx,
  block: Block,
  ...args: T
) => Promise<R>;

export type ChainName = 'kusama' | 'polkadot' | 'moonbeam' | 'moonriver';

type KusamaPolkadotChainsStorage = 'getAssetMetadatasXToken';
type MoonChainsStorage = 'getAssetMetadatasXToken';

type KusamaPolkadotChainsEntities = 'getAssetEntity' | 'getLocationXcmEntity';
type MoonChainsEntities = 'getAssetEntity' | 'getLocationXcmEntity';

export type ChainApiDecorated<C> = {
  batch: ChainApi['batch'];
  calls: ChainApi['calls'];
  entities: C extends 'kusama' | 'polkadot'
    ? Required<Pick<ChainApi['entities'], KusamaPolkadotChainsEntities>>
    : C extends 'moonbeam' | 'moonriver'
    ? Required<Pick<ChainApi['entities'], MoonChainsEntities>>
    : any;
  storage: C extends 'kusama' | 'polkadot'
    ? Required<Pick<ChainApi['storage'], KusamaPolkadotChainsStorage>>
    : C extends 'moonbeam' | 'moonriver'
    ? Required<Pick<ChainApi['storage'], MoonChainsStorage>>
    : any;
};

export type ApiDecorator = <C extends ChainName>(
  chainName: C
) => ChainApiDecorated<C>;

export interface ChainApiWithDecoratorResponse {
  config: ProcessorConfig;
  api: ChainApi;
  getApiDecorated: ApiDecorator;
  nativeTokens: NativeTokensMap;
}
