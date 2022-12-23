import assert from "assert"
import {types} from "./support"

export class TransferLocationEvm {
  public readonly isOf = 'TransferLocationEvm'
  private _address!: string

  constructor(props?: Partial<Omit<TransferLocationEvm, 'toJSON'>>) {
    Object.assign(this, props)
  }

  get address(): string {
    assert(this._address != null, 'uninitialized access')
    return this._address
  }

  set address(value: string) {
    this._address = value
  }

  toJSON(): object {
    return {
      isOf: this.isOf,
      address: types.String.toJSON(this.address),
    }
  }

  static fromJSON(json: any): TransferLocationEvm {
    return new TransferLocationEvm({
      address: types.String.convertToJSValue(json.address),
    })
  }
}
