import {TransferAssetToken} from "./_transferAssetToken"
import {TransferAssetMultiToken} from "./_transferAssetMultiToken"

export type TransferAsset = TransferAssetToken | TransferAssetMultiToken

export function fromJsonTransferAsset(json: any): TransferAsset {
  switch(json?.isOf) {
    case 'TransferAssetToken': return TransferAssetToken.fromJSON(json)
    case 'TransferAssetMultiToken': return TransferAssetMultiToken.fromJSON(json)
    default: throw new Error('Unknown json object passed as TransferAsset')
  }
}
