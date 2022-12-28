import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v1101 from './v1101'
import * as v1300 from './v1300'
import * as v1401 from './v1401'

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get isV49(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get asV49(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '23222c59f2992c12387568241620899d2d399ab9027595daca8255637f62ece3'
    }

    /**
     * Transfer succeeded.
     */
    get asV1201(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred. \[sender, currency_id, amount, dest\]
     */
    get isV1101(): boolean {
        return this._chain.getEventHash('XTokens.Transferred') === '0b1f64fdbe98f4991b0526cf2880340c383744c30f7427682cf2ac13ca10c132'
    }

    /**
     * Transferred. \[sender, currency_id, amount, dest\]
     */
    get asV1101(): [Uint8Array, v1101.CurrencyId, bigint, v1101.V1MultiLocation] {
        assert(this.isV1101)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.Transferred') === '6974067fb4607c172dd660bbcb7bd9c27f5a0b651c8c72bf067fbcc1717d5796'
    }

    /**
     * Transferred.
     */
    get asV1300(): {sender: Uint8Array, currencyId: v1300.CurrencyId, amount: bigint, dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiAssetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiAsset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset`. \[sender, asset, dest\]
     */
    get isV1101(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAsset') === 'e054281198c197ead860808419b2fed078a4b0770f98e35ff1e0a19b435d1390'
    }

    /**
     * Transferred `MultiAsset`. \[sender, asset, dest\]
     */
    get asV1101(): [Uint8Array, v1101.V1MultiAsset, v1101.V1MultiLocation] {
        assert(this.isV1101)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset`.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAsset') === '194d429a2acf3e96db2dcd633b6e8ffb0207693a9d537bf69358f93d4401802b'
    }

    /**
     * Transferred `MultiAsset`.
     */
    get asV1300(): {sender: Uint8Array, asset: v1300.V1MultiAsset, dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiAssetWithFeeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiAssetWithFee')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset` with fee. \[sender, asset, fee, dest\]
     */
    get isV1101(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === '44e1ae66614077a4b66c332b909505952455e13fd4d47b51ccf328013382f988'
    }

    /**
     * Transferred `MultiAsset` with fee. \[sender, asset, fee, dest\]
     */
    get asV1101(): [Uint8Array, v1101.V1MultiAsset, v1101.V1MultiAsset, v1101.V1MultiLocation] {
        assert(this.isV1101)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === '771a67e03a292739a0431803b4326faddec67ed77f8416495a0b58a2317963f4'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV1300(): {sender: Uint8Array, asset: v1300.V1MultiAsset, fee: v1300.V1MultiAsset, dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiAssetsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiAssets')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '627fd7f5468f3c25280e18c4c1f32304bcdfba6900ac9f1c2b6ad0a43392f878'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV1300(): {sender: Uint8Array, assets: v1300.V1MultiAsset[], dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '854ee56dafc84c13da32ba254e83581770f5bd45dfc01d7be320dcb44f605ca6'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV1401(): {sender: Uint8Array, assets: v1401.V1MultiAsset[], fee: v1401.V1MultiAsset, dest: v1401.V1MultiLocation} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiCurrenciesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiCurrencies')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiCurrencies') === 'fa9e419250bd07efbf28e10e149cdf0f1f4b45a37392e10a721c2005b1ed63fa'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV1300(): {sender: Uint8Array, currencies: [v1300.CurrencyId, bigint][], dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredWithFeeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredWithFee')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
     */
    get isV1101(): boolean {
        return this._chain.getEventHash('XTokens.TransferredWithFee') === '4c990ce581c424736afda696e525804e46e14e9730596238a3ca263138cb412e'
    }

    /**
     * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
     */
    get asV1101(): [Uint8Array, v1101.CurrencyId, bigint, bigint, v1101.V1MultiLocation] {
        assert(this.isV1101)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred with fee.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredWithFee') === '4d29d86c54290e6aebc50b8c765526f71f9f7abbe7586fe42dc170a0585d268c'
    }

    /**
     * Transferred with fee.
     */
    get asV1300(): {sender: Uint8Array, currencyId: v1300.CurrencyId, amount: bigint, fee: bigint, dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}
