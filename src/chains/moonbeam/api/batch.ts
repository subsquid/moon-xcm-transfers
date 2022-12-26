import { BatchContext, EventHandlerContext, SubstrateBlock, SubstrateEvent } from '@subsquid/substrate-processor'

import { Ctx } from '../../../processor';
import { getOriginAccountId } from '../../../utils/common';
import { Account } from '../../../model';
import * as pallets from '../../../pallets';
import { parseTransferredEvent } from './parsers';
import { XcmTransferData } from '../../types/xToken';


export async function batchHandler(ctx: Ctx) {
  let transfers: XcmTransferData[] = []

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.kind === 'event') {
        let data: XcmTransferData | undefined
        switch (item.name) {
          case 'XTokens.Transferred':
            data = await parseTransferredEvent(ctx, block.header, item.event as SubstrateEvent)
            break
          // case 'XTokens.TransferredMultiAsset':
          //   data = await parseTransferredMultiAssetEvent(ctx, block.header, item.event as SubstrateEvent)
          //   break
          // case 'XTokens.TransferredMultiCurrencies':
          //   data = await parseTransferredMultiCurrenciesEvent(ctx, block.header, item.event as SubstrateEvent)
          //   break
          // case 'XTokens.TransferredMultiAssets':
          //   data = await parseTransferredMultiAssetsEvent(ctx, block.header, item.event as SubstrateEvent)
          //   break
          default:
            continue
        }

        if (data != null) transfers.push(data)
      }
    }
  }
  await ctx.store.load();

  await pallets.xTokens.events.handleTransfers(ctx, transfers)

  await ctx.store.flush();
}
