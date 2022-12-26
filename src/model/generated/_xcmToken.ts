import assert from "assert"
import {types} from "./support"

export class XcmToken {
  private _amount!: bigint
  private _symbol!: string

  constructor(props?: Partial<Omit<XcmToken, 'toJSON'>>) {
    Object.assign(this, props)
  }

  get amount(): bigint {
    assert(this._amount != null, 'uninitialized access')
    return this._amount
  }

  set amount(value: bigint) {
    this._amount = value
  }

  get symbol(): string {
    assert(this._symbol != null, 'uninitialized access')
    return this._symbol
  }

  set symbol(value: string) {
    this._symbol = value
  }

  toJSON(): object {
    return {
      amount: types.BigInt.toJSON(this.amount),
      symbol: types.String.toJSON(this.symbol),
    }
  }

  static fromJSON(json: any): XcmToken {
    return new XcmToken({
      amount: types.BigInt.convertToJSValue(json.amount),
      symbol: types.String.convertToJSValue(json.symbol),
    })
  }
}
