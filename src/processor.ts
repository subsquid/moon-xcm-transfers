import { lookupArchive } from "@subsquid/archive-registry";
import * as ss58 from "@subsquid/ss58";
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
  SubstrateEvent,
} from "@subsquid/substrate-processor";
import { Store, MikroormDatabase } from "@subsquid/mikroorm-store";
import { Account, Transfer, XcmDestination, XcmToken } from "./model";
import {
  // parseTransferredEvent,
  // parseTransferredMultiAssetEvent,
  parseTransferredMultiAssetsEvent,
  // parseTransferredMultiAssetWithFeeEvent,
  // parseTransferredMultiCurrenciesEvent,
  // parseTransferredWithFeeEvent,
  XcmTransferData,
} from "./parsers";

import config from "./config";

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive(config.srcConfig.chainName, {
      release: "FireSquid",
    }),
    chain: config.srcConfig.dataSource.chain,
  })
  // .addEvent("XTokens.Transferred", {
  //   data: {
  //     event: true,
  //   },
  // })
  // .addEvent("XTokens.TransferredWithFee", {
  //   data: {
  //     event: true,
  //   },
  // })
  // .addEvent("XTokens.TransferredMultiAsset", {
  //   data: {
  //     event: true,
  //   },
  // })
  // .addEvent("XTokens.TransferredMultiAssetWithFee", {
  //   data: {
  //     event: true,
  //   },
  // })
  // .addEvent("XTokens.TransferredMultiCurrencies", {
  //   data: {
  //     event: true,
  //   },
  // })
  .addEvent("XTokens.TransferredMultiAssets", {
    data: {
      event: true,
    },
  });

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

processor.run(new MikroormDatabase(), async (ctx) => {
  let transfersData = await getTransfers(ctx);

  for (let t of transfersData) {
    ctx.store.defer(Account, t.from);
  }

  await ctx.store.load();

  let transfers: Transfer[] = [];

  for (let t of transfersData) {
    let { id, blockNumber, timestamp, extrinsicHash, assets, fee, to } = t;

    let from = getAccount(ctx, t.from);

    transfers.push(
      new Transfer({
        id,
        blockNumber,
        timestamp,
        extrinsicHash,
        from: from.id,
        to: new XcmDestination(to),
        assets: assets.map((a) => new XcmToken(a)),
        fee,
      })
    );
  }

  ctx.store.persist(transfers);

  await ctx.store.flush();
});

async function getTransfers(ctx: Ctx): Promise<XcmTransferData[]> {
  let transfers: XcmTransferData[] = [];
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      let data: XcmTransferData | undefined;
      switch (item.name) {
        // case "XTokens.Transferred":
        //   data = await parseTransferredEvent(
        //     ctx,
        //     block.header,
        //     item.event as SubstrateEvent
        //   );
        //   break;
        // case 'XTokens.TransferredWithFee':
        //     data = await parseTransferredWithFeeEvent(ctx, block.header, item.event as SubstrateEvent)
        //     break
        // case 'XTokens.TransferredMultiAsset':
        //     data = await parseTransferredMultiAssetEvent(ctx, block.header, item.event as SubstrateEvent)
        //     break
        // case 'XTokens.TransferredMultiAssetWithFee':
        //     data = await parseTransferredMultiAssetWithFeeEvent(ctx, block.header, item.event as SubstrateEvent)
        //     break
        // case 'XTokens.TransferredMultiCurrencies':
        //     data = await parseTransferredMultiCurrenciesEvent(ctx, block.header, item.event as SubstrateEvent)
        //     break
        case "XTokens.TransferredMultiAssets":
          data = await parseTransferredMultiAssetsEvent(
            ctx,
            block.header,
            item.event as SubstrateEvent
          );
          break;
        default:
          continue;
      }

      if (data != null) transfers.push(data);
    }
  }
  return transfers;
}

function getAccount(ctx: Ctx, id: string): Account {
  let acc = ctx.store.get(Account, id);
  if (acc == null) {
    acc = new Account();
    acc.id = id;
    ctx.store.persist(acc);
  }
  return acc;
}
