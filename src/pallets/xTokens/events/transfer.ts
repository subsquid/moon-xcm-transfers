import { getOriginAccountId } from '../../../utils/common';
import {
  AccountTransfer,
  Transfer,
  TransferAssetToken,
  TransferDirection,
  TransferLocationAccount,
  TransferType
} from '../../../model';

import { getOrCreateAccount } from '../../../utils/entities';
import { CallItem, Ctx } from '../../../processor';
import { getChain } from '../../../chains';
const { getApiDecorated } = getChain();
import { BlockHeader } from '../../../utils/types';
import { XcmTransferData } from '../../../chains/types/xToken';

// import * as v1019 from '../../../types/generated/v1019';
// import * as v2001 from '../../../types/generated/v2001';
// import * as v2010 from '../../../types/generated/v2010';
// import * as v2011 from '../../../types/generated/v2011';
// import * as v2022 from '../../../types/generated/v2022';
// import * as v2032 from '../../../types/generated/v2032';
// import * as v2041 from '../../../types/generated/v2041';
// import { CallContext, CallHandlerContext } from '../../types/contexts';

//
//
// type CallData =
//   // | { currencyId: v1001.CurrencyId; amount: bigint; dest: v1019.VersionedMultiLocation; destWeight: bigint }
//   // | { currencyId: v1008.CurrencyId; amount: bigint; dest: v1019.VersionedMultiLocation; destWeight: bigint }
//   // | { currencyId: v1009.CurrencyId; amount: bigint; dest: v1019.VersionedMultiLocation; destWeight: bigint }
//   // | { currencyId: v1014.CurrencyId; amount: bigint; dest: v1019.VersionedMultiLocation; destWeight: bigint }
//   | {
//       currencyId: v1019.CurrencyId;
//       amount: bigint;
//       dest: v1019.VersionedMultiLocation;
//       destWeight: bigint;
//     }
//   | {
//       currencyId: v2001.CurrencyId;
//       amount: bigint;
//       dest: v2001.VersionedMultiLocation;
//       destWeight: bigint;
//     }
//   | {
//       currencyId: v2010.CurrencyId;
//       amount: bigint;
//       dest: v2010.VersionedMultiLocation;
//       destWeight: bigint;
//     }
//   | {
//       currencyId: v2011.CurrencyId;
//       amount: bigint;
//       dest: v2011.VersionedMultiLocation;
//       destWeight: bigint;
//     }
//   | {
//       currencyId: v2022.CurrencyId;
//       amount: bigint;
//       dest: v2022.VersionedMultiLocation;
//       destWeight: bigint;
//     }
//   | {
//       currencyId: v2032.CurrencyId;
//       amount: bigint;
//       dest: v2032.VersionedMultiLocation;
//       destWeight: bigint;
//     }
//   | {
//       currencyId: v2041.CurrencyId;
//       amount: bigint;
//       dest: v2041.VersionedMultiLocation;
//       destWeight: bigint;
//     };

// type Interior = (DestData & { __kind: 'V1' })['value']['interior'] | (DestData & { __kind: 'V0' })['value']

// function getCallData(ctx: CallContext): CallData {
//   return ctx._chain.decodeCall(ctx.call);
// }

export async function handleTransfers(ctx: Ctx, transfers: XcmTransferData[]) {
  const api = getApiDecorated('moonbeam');

  // @ts-ignore
  const data = api.calls.getXTokenTransferCallData(ctx, call);

  const accountId = getOriginAccountId(call);
  if (!accountId) return;

  const from = await getOrCreateAccount(ctx, block, accountId);

  const asset = await api.entities.getAssetEntity(
    ctx,
    block,
    data.currencyId,
    data.amount
  );
  const to = await api.entities.getLocationXcmEntity(ctx, block, data.dest);

  const id = call.call.id;

  const transfer = new Transfer({
    id,
    blockNumber: block.height,
    timestamp: new Date(block.timestamp),
    // @ts-ignore
    extrinsicHash: call.call.extrinsic.hash,
    from: new TransferLocationAccount({
      id: accountId
    }),
    to,
    asset: new TransferAssetToken({
      symbol: asset.symbol,
      amount: data.amount
    }),
    success: call.call.success,
    type: TransferType.Xcm
  });

  ctx.store.persist(transfer);

  ctx.store.persist(
    new AccountTransfer({
      id: `${id}-from`,
      transfer: transfer.id,
      account: from.id,
      direction: TransferDirection.From
    })
  );
}
