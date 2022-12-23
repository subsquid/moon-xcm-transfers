import {TransferLocationAccount} from "./_transferLocationAccount"
import {TransferLocationEvm} from "./_transferLocationEvm"
import {TransferLocationXcm} from "./_transferLocationXcm"

export type TransferLocation = TransferLocationAccount | TransferLocationEvm | TransferLocationXcm

export function fromJsonTransferLocation(json: any): TransferLocation {
  switch(json?.isOf) {
    case 'TransferLocationAccount': return TransferLocationAccount.fromJSON(json)
    case 'TransferLocationEvm': return TransferLocationEvm.fromJSON(json)
    case 'TransferLocationXcm': return TransferLocationXcm.fromJSON(json)
    default: throw new Error('Unknown json object passed as TransferLocation')
  }
}
