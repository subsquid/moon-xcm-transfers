import {
  BatchContext,
  EventHandlerContext,
  SubstrateBlock,
  SubstrateEvent
} from '@subsquid/substrate-processor';
import { Store } from '@subsquid/mikroorm-store';
import {
  XTokensTransferredEvent,
  XTokensTransferredMultiAssetEvent,
  XTokensTransferredMultiAssetsEvent,
  XTokensTransferredMultiAssetWithFeeEvent,
  XTokensTransferredMultiCurrenciesEvent,
  XTokensTransferredWithFeeEvent
} from '../types/generated/events';
import { ChainContext, Event, BlockContext } from '../types/generated/support';
import { TransferredEventData } from '../types/custom/types';
import { getTransferredEventData } from './events';
import { XcmTransferData } from '../../types/xToken';
import { encodeId } from '../../../utils/common';

import { toHex, decodeHex } from '@subsquid/substrate-processor';
import assert from 'assert';
import { XTokensSelfLocationConstant } from '../types/generated/constants';
import { getTokenFromCurrency } from './utils';
import { Ctx } from '../../../processor';

export function getDestination(value: any) {
  switch (value.__kind) {
    case 'V0':
      return getDestinationFromLocation(value.value);
    case 'V1':
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
    case 'X1':
      return {
        id: getAccountId(value.value),
        paraId: undefined
      };
    case 'X2':
      return {
        id: getAccountId(value.value[1]),
        paraId: getParachainId(value.value[0])
      };
    default:
      throw new Error(`Unsupported location variant: ${value.__kind}`);
  }
}

function getAccountId(value: any): string {
  switch (value.__kind) {
    case 'AccountId32':
      return toHex(value.id);
    case 'AccountKey20':
      return toHex(value.key);
    default:
      throw new Error(`Unsupported account id variant: ${value.__kind}`);
  }
}

function getParachainId(value: any): number | undefined {
  switch (value.__kind) {
    case 'Parachain':
      return value.value;
    case 'Parent':
      return undefined;
    default:
      throw new Error(`Unsupported parachain id variant: ${value.__kind}`);
  }
}

export async function parseTransferredEvent(
  ctx: Ctx,
  block: SubstrateBlock,
  event: SubstrateEvent
): Promise<XcmTransferData | undefined> {
  const data = getTransferredEventData(ctx, event);

  try {
    const dest = getDestination(data.dest);
    const token = await getTokenFromCurrency(
      { ...ctx, block },
      data.currencyId
    );

    return {
      id: event.id,
      blockNumber: block.height,
      timestamp: new Date(block.timestamp),
      extrinsicHash: event.extrinsic?.hash,
      from: encodeId(data.sender),
      to: dest,
      assets: [
        {
          symbol: token?.symbol,
          amount: data.amount
        }
      ],
      fee: event.extrinsic?.fee || 0n
    };
  } catch (e: any) {
    ctx.log.warn(
      { block: block.height, extrinsic: event.extrinsic?.hash },
      e.stack
    );
    return undefined;
  }
}
