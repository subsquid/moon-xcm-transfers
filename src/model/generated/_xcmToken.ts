import assert from "assert"
import {types} from "./support"

export class XcmToken {
  private _amount!: bigint | undefined | null
  private _symbol!: string | undefined | null

  constructor(props?: Partial<Omit<XcmToken, 'toJSON'>>) {
    Object.assign(this, props)
  }

  get amount(): bigint | undefined | null {
    return this._amount
  }

  set amount(value: bigint | undefined | null) {
    this._amount = value
  }

  get symbol(): string | undefined | null {
    return this._symbol
  }

  set symbol(value: string | undefined | null) {
    this._symbol = value
  }

  toJSON(): object {
    return {
      amount: this.amount == null ? undefined : types.BigInt.toJSON(this.amount),
      symbol: this.symbol == null ? undefined : types.String.toJSON(this.symbol),
    }
  }

  static fromJSON(json: any): XcmToken {
    return new XcmToken({
      amount: types.BigInt.convertToJSValue(json.amount),
      symbol: types.String.convertToJSValue(json.symbol),
    })
  }
}
