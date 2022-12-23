import assert from "assert"
import {types} from "./support"

export class TransferAssetToken {
  public readonly isOf = 'TransferAssetToken'
  private _symbol!: string
  private _amount!: bigint

  constructor(props?: Partial<Omit<TransferAssetToken, 'toJSON'>>) {
    Object.assign(this, props)
  }

  get symbol(): string {
    assert(this._symbol != null, 'uninitialized access')
    return this._symbol
  }

  set symbol(value: string) {
    this._symbol = value
  }

  get amount(): bigint {
    assert(this._amount != null, 'uninitialized access')
    return this._amount
  }

  set amount(value: bigint) {
    this._amount = value
  }

  toJSON(): object {
    return {
      isOf: this.isOf,
      symbol: types.String.toJSON(this.symbol),
      amount: types.BigInt.toJSON(this.amount),
    }
  }

  static fromJSON(json: any): TransferAssetToken {
    return new TransferAssetToken({
      symbol: types.String.convertToJSValue(json.symbol),
      amount: types.BigInt.convertToJSValue(json.amount),
    })
  }
}
