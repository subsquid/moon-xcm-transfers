import assert from "assert"
import * as marshal from "./marshal"

export class XcmDestination {
    private _paraId!: number | undefined | null
    private _id!: string

    constructor(props?: Partial<Omit<XcmDestination, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._paraId = json.paraId == null ? undefined : marshal.int.fromJSON(json.paraId)
            this._id = marshal.string.fromJSON(json.id)
        }
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
            paraId: this.paraId,
            id: this.id,
        }
    }
}
