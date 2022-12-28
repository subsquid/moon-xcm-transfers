import { lookupArchive } from "@subsquid/archive-registry";
import * as ss58 from "@subsquid/ss58";
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
  SubstrateEvent,
} from "@subsquid/substrate-processor";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
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
import { In } from 'typeorm'


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

processor.run(new TypeormDatabase(), async (ctx) => {
  let transfersData = await getTransfers(ctx);

  let accountIds = new Set<string>()
  for (let t of transfersData) {
    accountIds.add(t.from)
  }

  let accounts = await ctx.store.findBy(Account, { id: In([...accountIds]) }).then((accounts) => {
    return new Map(accounts.map((a) => [a.id, a]))
  })

  let transfers: Transfer[] = [];

  for (let t of transfersData) {
    let { id, blockNumber, timestamp, extrinsicHash, assets, fee, to } = t;

    let from = getAccount(accounts, t.from)

    transfers.push(
      new Transfer({
        id,
        blockNumber,
        timestamp,
        extrinsicHash,
        from: from,
        to: new XcmDestination(to),
        assets: assets.map((a) => new XcmToken(a)),
        fee,
      })
    );
  }

  await ctx.store.save(Array.from(accounts.values()))
  await ctx.store.insert(transfers)
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

function getAccount(m: Map<string, Account>, id: string): Account {
  let acc = m.get(id)
  if (acc == null) {
    acc = new Account()
    acc.id = id
    m.set(id, acc)
  }
  return acc
}

