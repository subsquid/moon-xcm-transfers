import { toHex } from '@subsquid/substrate-processor';
import assert from 'assert';
import { TransferAssetToken, TransferLocationXcm } from '../../../model';
import { BlockHeader } from '../../../utils/types';
import { Ctx } from '../../../processor';

import * as storage from '../api/storage';
import * as v1201 from '../types/generated/v1201';
import * as v1300 from '../types/generated/v1300';
import * as v1401 from '../types/generated/v1401';
import * as v1502 from '../types/generated/v1502';
import * as v1606 from '../types/generated/v1606';
import * as v1701 from '../types/generated/v1701';
import * as v1802 from '../types/generated/v1802';
import * as v1901 from '../types/generated/v1901';

export type CurrencyId =
  | v1201.CurrencyId
  | v1300.CurrencyId
  | v1401.CurrencyId
  | v1502.CurrencyId
  | v1606.CurrencyId
  | v1701.CurrencyId
  | v1802.CurrencyId
  | v1901.CurrencyId;

export type MultiLocation = any;


export async function getAssetEntity(
  ctx: Ctx,
  block: BlockHeader,
  currencyId: CurrencyId,
  amount: bigint
): Promise<TransferAssetToken> {
  switch (currencyId.__kind) {
    case 'SelfReserve': {
      /**
       * In the case of Moonbeam-based networks, SelfReserve refers to the native
       * token, and ForeignAsset refers to the asset ID of the XC-20
       * (not to be confused with the XC-20 address)
       */
      return new TransferAssetToken({
        symbol: 'GLMR',
        amount
      });
    }
    case 'LocalAssetReserve':
    case 'OtherReserve':
    case 'ForeignAsset': {
      const token = await storage.getAssetMetadatasXToken(ctx, block, {
        type: currencyId.__kind,
        value: currencyId.value
      });
      assert(token != null);

      return new TransferAssetToken({
        symbol: token.symbol,
        amount
      });
    }
    default:
      throw new Error(
        `Unknown currency type ${currencyId} at block ${block.height}`
      );
  }
}

export async function getLocationXcmEntity(
  ctx: Ctx,
  block: BlockHeader,
  multilocation: MultiLocation
): Promise<TransferLocationXcm> {
  const interior =
    multilocation.__kind === 'V0'
      ? multilocation.value
      : multilocation.value.interior;

  const props: ConstructorParameters<typeof TransferLocationXcm>[0] = {};

  if (interior.__kind !== 'Here' && interior.__kind !== 'Null') {
    const junctions = Array.isArray(interior.value)
      ? interior.value
      : [interior.value];

    for (const junction of junctions) {
      // TODO More cases should be processed
      switch (junction.__kind) {
        case 'Parachain':
          assert(props.paraId == null);
          props.paraId = junction.value;
          break;
        case 'AccountId32':
          assert(props.id == null);
          props.id = toHex(junction.id);
          break;
        case 'AccountKey20':
          assert(props.id == null);
          props.id = toHex(junction.key);
          break;
        default:
          throw new Error(
            `Unknown junction case ${junction.__kind} at block ${block.height}`
          );
      }
    }
  }

  return new TransferLocationXcm(props);
}
