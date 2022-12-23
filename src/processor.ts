import { lookupArchive } from '@subsquid/archive-registry';
import {
  BatchContext,
  BatchBlock,
  BatchProcessorItem,
  BatchProcessorCallItem,
  SubstrateBatchProcessor
} from '@subsquid/substrate-processor';
import { Store, MikroormDatabase } from '@subsquid/mikroorm-store';
import { getOriginAccountId } from './utils/common';
import { Account } from './model';
import * as modules from './pallets';

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive('moonbeam', { release: 'FireSquid' })
  })
  .addCall('XTokens.transfer', {
    data: {
      call: true
    }
  } as const)
  .addCall('XTokens.transfer_multicurrencies', {
    data: {
      call: true
    }
  } as const);

export type Item = BatchProcessorItem<typeof processor>;
export type Ctx = BatchContext<Store, Item>;
export type CallItem = BatchProcessorCallItem<typeof processor>
export type Block = BatchBlock<Item>;

import { getChain } from './chains';
const { api } = getChain();

processor.run(new MikroormDatabase(), async (ctx) => {
  await api.batch.batchHandler(ctx)
});
