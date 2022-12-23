import { Ctx } from '../../../processor';
import { getOriginAccountId } from '../../../utils/common';
import { Account } from '../../../model';
import * as pallets from '../../../pallets';

export async function batchHandler(ctx: Ctx) {
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.kind === 'call') {
        // @ts-ignore
        const accountId = getOriginAccountId(item.call.origin);
        if (!accountId) continue;
        ctx.store.defer(Account, accountId);
      }
    }
  }
  await ctx.store.load();

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.kind === 'call') {
        switch (item.name) {
          case 'XTokens.transfer':
            await pallets.xTokens.extrinsics.handleTransfer(ctx, block.header, item);
            break;

          // case 'XTokens.transfer_multicurrencies':
          //   await pallets.xTokens.extrinsics.handleTransferMulticurrencies(
          //     ctx,
          //     item
          //   );
          //   break;

          default:
        }
      }
    }
  }

  await ctx.store.flush();
}
