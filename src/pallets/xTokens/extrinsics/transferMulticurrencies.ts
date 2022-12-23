// import { getOriginAccountId } from '../../../common/tools'
// import {
//     AccountTransfer,
//     Transfer,
//     TransferAssetMultiToken,
//     TransferDirection,
//     TransferLocationAccount,
//     TransferType,
// } from '../../../model'
// import { CallContext, CallHandlerContext } from '../../types/contexts'
// import { getOrCreateAccount } from '../../util/entities'
// import { getAsset, getDest } from './utils'
// import {CallItem, Ctx} from "../../../processor";
//
// type CallData = {
//     currencies: [any, bigint][]
//     feeItem: number
//     dest: any
//     destWeight: bigint
// }
//
// function getCallData(ctx: CallContext): CallData {
//     return ctx._chain.decodeCall(ctx.call)
// }
//
// export async function handleTransferMulticurrencies(ctx: Ctx, call: CallItem) {
//     const data = getCallData(ctx)
//
//     const accountId = getOriginAccountId(ctx.call.origin)
//     if (!accountId) return
//
//     const from = await getOrCreateAccount(ctx, accountId)
//
//     const assets = await Promise.all(data.currencies.map((c) => getAsset(ctx, c[0], c[1])))
//     const to = await getDest(ctx, data.dest)
//
//     const id = ctx.call.id
//
//     const transfer = new Transfer({
//         id,
//         blockNumber: ctx.block.height,
//         timestamp: new Date(ctx.block.timestamp),
//         extrinsicHash: ctx.extrinsic.hash,
//         from: new TransferLocationAccount({
//             id: accountId,
//         }),
//         to,
//         asset: new TransferAssetMultiToken({
//             tokens: assets,
//         }),
//         success: ctx.call.success,
//         type: TransferType.Xcm,
//     })
//
//     await ctx.store.insert(transfer)
//
//     await ctx.store.insert(
//         new AccountTransfer({
//             id: `${id}-from`,
//             transfer,
//             account: from,
//             direction: TransferDirection.From,
//         })
//     )
// }
