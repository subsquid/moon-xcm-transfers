// import { toHex } from '@subsquid/substrate-processor'
// import assert from 'assert'
// import { nativeTokens } from '../../../common/tokens'
// import { TransferAssetToken, TransferLocationXcm } from '../../../model'
// import storage from '../../../storage'
// import * as v2011 from '../../../types/generated/v2011'
// import * as v2022 from '../../../types/generated/v2022'
// import * as v2032 from '../../../types/generated/v2032'
// import * as v2042 from '../../../types/generated/v2042'
//
// import { Ctx } from '../../../processor';
//
// export type CurrencyId = v2011.CurrencyId | v2022.CurrencyId | v2032.CurrencyId | v2042.CurrencyId
// export type MultiLocation = any
//
// import { getChain } from '../../../chains';
//
// const { nativeTokens } = getChain();
//
//
// export async function getAsset(
//     ctx: Ctx,
//     currencyId: CurrencyId,
//     amount: bigint
// ): Promise<TransferAssetToken> {
//     switch (currencyId.__kind) {
//         case 'Token': {
//             const token = nativeTokens.get(currencyId.value.__kind)
//             assert(token)
//
//             return new TransferAssetToken({
//                 symbol: token.symbol,
//                 amount,
//             })
//         }
//         case 'ForeignAsset': {
//             const token = await storage.assetRegestry.getAssetMetadatas(ctx, {
//                 type: 'ForeignAsset',
//                 value: currencyId.value,
//             })
//             assert(token != null)
//
//             return new TransferAssetToken({
//                 symbol: token.symbol,
//                 amount,
//             })
//         }
//         default:
//             throw new Error(`Unknown currency type ${currencyId.__kind} at block ${ctx.block.height}`)
//     }
// }
//
// export async function getDest(ctx: CommonHandlerContext, multilocation: MultiLocation): Promise<TransferLocationXcm> {
//     const interior = multilocation.__kind === 'V0' ? multilocation.value : multilocation.value.interior
//
//     const props: ConstructorParameters<typeof TransferLocationXcm>[0] = {}
//
//     if (interior.__kind !== 'Here' && interior.__kind !== 'Null') {
//         const junctions = Array.isArray(interior.value) ? interior.value : [interior.value]
//
//         for (const junction of junctions) {
//             switch (junction.__kind) {
//                 case 'Parachain':
//                     assert(props.paraId == null)
//                     props.paraId = junction.value
//                     break
//                 case 'AccountId32':
//                     assert(props.id == null)
//                     props.id = toHex(junction.id)
//                     break
//                 case 'AccountKey20':
//                     assert(props.id == null)
//                     props.id = toHex(junction.key)
//                     break
//                 default:
//                     throw new Error(`Unknown junction case ${junction.__kind} at block ${ctx.block.height}`)
//             }
//         }
//     }
//
//     return new TransferLocationXcm(props)
// }
