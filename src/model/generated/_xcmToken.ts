import assert from "assert"
import * as marshal from "./marshal"

export class XcmToken {
    private _amount!: bigint | undefined | null
    private _symbol!: string | undefined | null

    constructor(props?: Partial<Omit<XcmToken, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
            this._symbol = json.symbol == null ? undefined : marshal.string.fromJSON(json.symbol)
        }
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
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            symbol: this.symbol,
        }
    }
}
