import assert from "assert"
import {types} from "./support"

export class TransferLocationAccount {
  public readonly isOf = 'TransferLocationAccount'
  private _id!: string

  constructor(props?: Partial<Omit<TransferLocationAccount, 'toJSON'>>) {
    Object.assign(this, props)
  }

  get id(): string {
    assert(this._id != null, 'uninitialized access')
    return this._id
  }

  set id(value: string) {
    this._id = value
  }

  toJSON(): object {
    return {
      isOf: this.isOf,
      id: types.String.toJSON(this.id),
    }
  }

  static fromJSON(json: any): TransferLocationAccount {
    return new TransferLocationAccount({
      id: types.String.convertToJSValue(json.id),
    })
  }
}
