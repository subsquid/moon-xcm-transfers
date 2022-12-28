import assert from "assert"
import {types} from "./support"

export class XcmDestination {
  private _paraId!: number | undefined | null
  private _id!: string

  constructor(props?: Partial<Omit<XcmDestination, 'toJSON'>>) {
    Object.assign(this, props)
  }

  get paraId(): number | undefined | null {
    return this._paraId
  }

  set paraId(value: number | undefined | null) {
    this._paraId = value
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
      paraId: this.paraId == null ? undefined : types.Int.toJSON(this.paraId),
      id: types.String.toJSON(this.id),
    }
  }

  static fromJSON(json: any): XcmDestination {
    return new XcmDestination({
      paraId: types.Int.convertToJSValue(json.paraId),
      id: types.String.convertToJSValue(json.id),
    })
  }
}
