import {
  BatchContext,
  EventHandlerContext,
  SubstrateBlock,
  SubstrateEvent
} from '@subsquid/substrate-processor';
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

export function getTransferredEventData(
  ctx: ChainContext,
  event: Event
): TransferredEventData {
  const e = new XTokensTransferredEvent(ctx, event);

  if (e.isV1201 || e.isV1300) {
    const [sender, currencyId, amount, dest] = ctx._chain.decodeEvent(event);
    return {
      sender,
      currencyId,
      amount,
      dest: {
        __kind: 'V1',
        value: dest
      }
    };
  } else {
    // TODO remove redundant stuff here
    const { sender, currencyId, amount, dest } = ctx._chain.decodeEvent(event);
    return {
      sender,
      currencyId,
      amount,
      dest: {
        __kind: 'V1',
        value: dest
      }
    };
  }
}
