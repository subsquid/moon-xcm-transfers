import assert from "assert"
import {types} from "./support"

export class TransferLocationXcm {
  public readonly isOf = 'TransferLocationXcm'
  private _id!: string | undefined | null
  private _paraId!: number | undefined | null

  constructor(props?: Partial<Omit<TransferLocationXcm, 'toJSON'>>) {
    Object.assign(this, props)
  }

  get id(): string | undefined | null {
    return this._id
  }

  set id(value: string | undefined | null) {
    this._id = value
  }

  get paraId(): number | undefined | null {
    return this._paraId
  }

  set paraId(value: number | undefined | null) {
    this._paraId = value
  }

  toJSON(): object {
    return {
      isOf: this.isOf,
      id: this.id == null ? undefined : types.String.toJSON(this.id),
      paraId: this.paraId == null ? undefined : types.Int.toJSON(this.paraId),
    }
  }

  static fromJSON(json: any): TransferLocationXcm {
    return new TransferLocationXcm({
      id: types.String.convertToJSValue(json.id),
      paraId: types.Int.convertToJSValue(json.paraId),
    })
  }
}
