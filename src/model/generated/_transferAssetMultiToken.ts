import assert from "assert"
import {types} from "./support"
import {TransferAssetToken} from "./_transferAssetToken"

export class TransferAssetMultiToken {
  public readonly isOf = 'TransferAssetMultiToken'
  private _tokens!: (TransferAssetToken | undefined | null)[] | undefined | null

  constructor(props?: Partial<Omit<TransferAssetMultiToken, 'toJSON'>>) {
    Object.assign(this, props)
  }

  get tokens(): (TransferAssetToken | undefined | null)[] | undefined | null {
    return this._tokens
  }

  set tokens(value: (TransferAssetToken | undefined | null)[] | undefined | null) {
    this._tokens = value
  }

  toJSON(): object {
    return {
      isOf: this.isOf,
      tokens: this.tokens == null ? undefined : this.tokens.map((val: any) => val == null ? undefined : types.JSON.toJSON(val)),
    }
  }

  static fromJSON(json: any): TransferAssetMultiToken {
    return new TransferAssetMultiToken({
      tokens: types.Array(types.JSONobj(TransferAssetToken.fromJSON)).convertToJSValue(json.tokens),
    })
  }
}
