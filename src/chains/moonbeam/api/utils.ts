import { toHex } from '@subsquid/substrate-processor';
import assert from 'assert';
import { BlockHeader } from '../../../utils/types';
import { BlockContext, Call, ChainContext } from '../types/generated/support'

import { Ctx } from '../../../processor';


import * as storage from '../api/storage';
import * as v1201 from '../types/generated/v1201';
import * as v1300 from '../types/generated/v1300';
import * as v1401 from '../types/generated/v1401';
import * as v1502 from '../types/generated/v1502';
import * as v1606 from '../types/generated/v1606';
import * as v1701 from '../types/generated/v1701';
import * as v1802 from '../types/generated/v1802';
import * as v1901 from '../types/generated/v1901';
import { Token } from '../../types/xToken';
import { Currency } from '../types/custom/types';

export type CurrencyId =
  | v1201.CurrencyId
  | v1300.CurrencyId
  | v1401.CurrencyId
  | v1502.CurrencyId
  | v1606.CurrencyId
  | v1701.CurrencyId
  | v1802.CurrencyId
  | v1901.CurrencyId;

export type MultiLocation = any;

export async function getTokenFromCurrency(
  ctx: BlockContext,
  currencyId: CurrencyId
): Promise<Token> {
  switch (currencyId.__kind) {
    case 'SelfReserve': {
      /**
       * In the case of Moonbeam-based networks, SelfReserve refers to the native
       * token, and ForeignAsset refers to the asset ID of the XC-20
       * (not to be confused with the XC-20 address)
       */
      return {
        symbol: 'GLMR',
        decimals: 18
      };
    }
    case 'LocalAssetReserve':
    case 'OtherReserve':
    case 'ForeignAsset': {
      const token = await storage.getAssetMetadatasXToken(ctx, {
        type: currencyId.__kind,
        value: currencyId.value
      });
      assert(token != null);

      return { symbol: token.symbol, decimals: token.decimals };
    }
    default:
      throw new Error(
        `Unknown currency type ${currencyId} at block ${ctx.block.hash}`
      );
  }
}

// export async function getLocationXcmEntity(
//   ctx: Ctx,
//   block: BlockHeader,
//   multilocation: MultiLocation
// ): Promise<TransferLocationXcm> {
//   const interior =
//     multilocation.__kind === 'V0'
//       ? multilocation.value
//       : multilocation.value.interior;
//
//   const props: ConstructorParameters<typeof TransferLocationXcm>[0] = {};
//
//   if (interior.__kind !== 'Here' && interior.__kind !== 'Null') {
//     const junctions = Array.isArray(interior.value)
//       ? interior.value
//       : [interior.value];
//
//     for (const junction of junctions) {
//       // TODO More cases should be processed
//       switch (junction.__kind) {
//         case 'Parachain':
//           assert(props.paraId == null);
//           props.paraId = junction.value;
//           break;
//         case 'AccountId32':
//           assert(props.id == null);
//           props.id = toHex(junction.id);
//           break;
//         case 'AccountKey20':
//           assert(props.id == null);
//           props.id = toHex(junction.key);
//           break;
//         default:
//           throw new Error(
//             `Unknown junction case ${junction.__kind} at block ${block.height}`
//           );
//       }
//     }
//   }
//
//   return new TransferLocationXcm(props);
// }


// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------



type Location = { parents: number; interior: any }

// ref https://github.com/AcalaNetwork/Acala/blob/7a2c3a50b36cb58fad8bc63175c7ff1e77479509/runtime/karura/src/xcm_config.rs#L371
async function getCurrencyFromLocation(ctx: BlockContext, location: Location): Promise<Currency> {
  let currency: Currency | undefined
  switch (location.parents) {
    case 0:
      switch (location.interior.__kind) {
        case 'X1':
          switch (location.interior.value[0].__kind) {
            case 'GeneralKey': {
              currency = getCurrencyFromKey(location.interior.value[0].value)
              break
            }
            default:
              throw new Error()
          }
          break
      }
      break
    case 1:
      switch (location.interior.__kind) {
        case 'Here':
          return createToken('KSM')
        case 'X2':
          switch (location.interior.value[0].__kind) {
            case 'Parachain': {
              const id = location.interior.value[0].value

              if (location.interior.value[1].__kind !== 'GeneralKey') break

              const key = location.interior.value[1].value
              currency = parachains[id]?.tokens[toHex(key)]
              if (currency) break

              const paraId = getSelfParachainId(ctx)
              if (id !== paraId) break
              currency = getCurrencyFromKey(key)
              break
            }
          }
          break
        case 'X1':
          switch (location.interior.value.__kind) {
            case 'Parachain': {
              const id = location.interior.value.value
              currency = parachains[id]?.tokens[toHex(Buffer.from([0, 0]))]
              break
            }
          }
          break
      }
      break
  }

  if (currency == null) currency = await getLocationToCurrencyIdStorage(ctx, location)
  assert(currency != null)

  return currency
}

function getLocationFromAssetId(value: any): Location {
  switch (value.__kind) {
    case 'Concrete':
      return value.value
    case 'Abstract':
    default:
      throw new Error(`Unsupported AssetId variant ${value.__kind}`)
  }
}

function getAmountFromFungibility(value: any): bigint {
  switch (value.__kind) {
    case 'Fungible':
      return value.value
    case 'NoneFungible':
    default:
      throw new Error(`Unsupported faungibility variant ${value.__kind}`)
  }
}

export async function getAsset(ctx: BlockContext, value: any): Promise<{ currency: Currency; amount: bigint }> {
  const version = value.__kind

  switch (version) {
    case 'V0': {
      throw new Error(`Missing implementation for asset version ${version}`)
    }
    case 'V1': {
      const location = getLocationFromAssetId(value.value.id)
      const currency = await getCurrencyFromLocation(ctx, location)

      const amount = getAmountFromFungibility(value.value.fun)

      return { currency, amount }
    }
    default:
      throw new Error(`Unsupported asset version ${version}`)
  }
}

function createToken(symbol: string): Currency & { __kind: 'Token' } {
  return {
    __kind: 'Token',
    value: { __kind: symbol },
  }
}

function getCurrencyFromKey(key: Uint8Array): Currency | undefined {
  const num = Buffer.from(key).readUintBE(0, 2)
  const token = [...nativeTokens.values()].find((t) => t.num === num)
  return token ? createToken(token.symbol) : undefined
}

// ref https://github.com/AcalaNetwork/Acala/blob/7a2c3a50b36cb58fad8bc63175c7ff1e77479509/runtime/karura/src/constants.rs#L94
const parachains: Record<number, { tokens: Record<string, Currency> }> = {
  // bifrost
  2001: {
    tokens: {
      [toHex(Buffer.from([0, 1]))]: createToken('BNC'),
      [toHex(Buffer.from([4, 4]))]: createToken('VSKSM'),
    },
  },
  // phala
  2004: {
    tokens: {
      [toHex(Buffer.from([0, 0]))]: createToken('PHA'),
    },
  },
  // kintsugi
  2092: {
    tokens: {
      [toHex(Buffer.from([0, 11]))]: createToken('KBTC'),
      [toHex(Buffer.from([0, 12]))]: createToken('KINT'),
    },
  },
  // statemine
  1000: {
    tokens: {},
  },
}

function getSelfLocationConst(ctx: ChainContext): { __kind: string; value: any } | undefined {
  const data = new XTokensSelfLocationConstant(ctx)
  if (!data) return undefined

  if (data.isV1001) {
    return {
      __kind: 'V0',
      value: data.asV1001,
    }
  } else if (data.isV1014) {
    return {
      __kind: 'V1',
      value: data.asV1014,
    }
  } else if (data.asV1019) {
    return {
      __kind: 'V1',
      value: data.asV1019,
    }
  } else {
    throw new Error()
  }
}

function getSelfParachainId(ctx: ChainContext) {
  const selfLocation = getSelfLocationConst(ctx)
  if (!selfLocation) return undefined

  switch (selfLocation.__kind) {
    case 'V0': {
      const location = selfLocation.value
      if (location.__kind === 'X1') {
        return getParachainId(location.value)
      }
      break
    }
    case 'V1': {
      const location = selfLocation.value.interior
      if (location.__kind === 'X1') {
        return getParachainId(location.value)
      }
      break
    }
  }

  return undefined
}

async function getLocationToCurrencyIdStorage(ctx: BlockContext, location: Location): Promise<Currency | undefined> {
  const data = new AssetRegistryLocationToCurrencyIdsStorage(ctx)
  if (!data) return undefined

  return await ctx._chain.getStorage(ctx.block.hash, 'AssetRegistry', 'LocationToCurrencyIds', location)
}
