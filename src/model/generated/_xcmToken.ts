import assert from "assert"
import * as marshal from "./marshal"

export class XcmToken {
    private _amount!: bigint
    private _symbol!: string

    constructor(props?: Partial<Omit<XcmToken, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._symbol = marshal.string.fromJSON(json.symbol)
        }
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
            amount: marshal.bigint.toJSON(this.amount),
            symbol: this.symbol,
        }
    }
}
