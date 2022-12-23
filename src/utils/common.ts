import * as ss58 from '@subsquid/ss58';
import { decodeHex, toHex } from '@subsquid/util-internal-hex';
import { getChain } from '../chains';

const chainConfig = getChain();

export function encodeId(
  id: Uint8Array,
  prefix?: string | number | undefined
) {
  return prefix != null ? ss58.codec(prefix).encode(id) : toHex(id);
}

export function decodeId(
  id: string,
  prefix?: string | number | undefined
) {
  return prefix != null ? ss58.codec(prefix).decode(id) : decodeHex(id);
}

export function getOriginAccountId(origin: any) {
  if (origin != null && origin.__kind === 'system' && origin.value.__kind === 'Signed') {
    return encodeId(decodeHex(origin.value.value))
  } else {
    return undefined
  }
}