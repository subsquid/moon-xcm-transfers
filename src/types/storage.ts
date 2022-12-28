import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v49 from './v49'
import * as v53 from './v53'
import * as v155 from './v155'
import * as v159 from './v159'
import * as v200 from './v200'
import * as v300 from './v300'
import * as v400 from './v400'
import * as v501 from './v501'
import * as v600 from './v600'
import * as v701 from './v701'
import * as v800 from './v800'
import * as v900 from './v900'
import * as v1001 from './v1001'
import * as v1101 from './v1101'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v1502 from './v1502'
import * as v1605 from './v1605'
import * as v1701 from './v1701'
import * as v1801 from './v1801'
import * as v1901 from './v1901'
import * as v2000 from './v2000'

export class AssetManagerAssetIdTypeStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetManager'
    }

    protected getName() {
        return 'AssetIdType'
    }

    /**
     *  Stores the asset TYPE
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'e3eacd7556b18a2a57ba3b047b2a5458132a5049e045ab2b021fca19dbdff537'
    }

    /**
     *  Stores the asset TYPE
     */
    get asV1101(): AssetManagerAssetIdTypeStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Stores the asset TYPE
 */
export interface AssetManagerAssetIdTypeStorageV1101 {
    get(key: bigint): Promise<(v1101.AssetType | undefined)>
    getAll(): Promise<v1101.AssetType[]>
    getMany(keys: bigint[]): Promise<(v1101.AssetType | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1101.AssetType][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1101.AssetType][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1101.AssetType][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1101.AssetType][]>
}

export class AssetManagerAssetIdUnitsPerSecondStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetManager'
    }

    protected getName() {
        return 'AssetIdUnitsPerSecond'
    }

    get isV1101(): boolean {
        return this.getTypeHash() === '03ac0b80fdf641bd511733299fc9539a6f79a9c134c3b7d7af44cad8d25fa71a'
    }

    get asV1101(): AssetManagerAssetIdUnitsPerSecondStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

export interface AssetManagerAssetIdUnitsPerSecondStorageV1101 {
    get(key: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class AssetManagerAssetTypeIdStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetManager'
    }

    protected getName() {
        return 'AssetTypeId'
    }

    /**
     *  Reverse mapping of AssetIdType. Mapping from an asset type to an asset id.
     *  This is mostly used when receiving a multilocation XCM message to retrieve
     *  the corresponding asset in which tokens should me minted.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === '54a3c93dfaed0789b2607a39e76157bd1575abf08571be09f89df3c47a268759'
    }

    /**
     *  Reverse mapping of AssetIdType. Mapping from an asset type to an asset id.
     *  This is mostly used when receiving a multilocation XCM message to retrieve
     *  the corresponding asset in which tokens should me minted.
     */
    get asV1201(): AssetManagerAssetTypeIdStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  Reverse mapping of AssetIdType. Mapping from an asset type to an asset id.
 *  This is mostly used when receiving a multilocation XCM message to retrieve
 *  the corresponding asset in which tokens should me minted.
 */
export interface AssetManagerAssetTypeIdStorageV1201 {
    get(key: v1201.AssetType): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v1201.AssetType[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v1201.AssetType[]>
    getKeys(key: v1201.AssetType): Promise<v1201.AssetType[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1201.AssetType[]>
    getKeysPaged(pageSize: number, key: v1201.AssetType): AsyncIterable<v1201.AssetType[]>
    getPairs(): Promise<[k: v1201.AssetType, v: bigint][]>
    getPairs(key: v1201.AssetType): Promise<[k: v1201.AssetType, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1201.AssetType, v: bigint][]>
    getPairsPaged(pageSize: number, key: v1201.AssetType): AsyncIterable<[k: v1201.AssetType, v: bigint][]>
}

export class AssetManagerAssetTypeUnitsPerSecondStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetManager'
    }

    protected getName() {
        return 'AssetTypeUnitsPerSecond'
    }

    /**
     *  Stores the units per second for local execution for a AssetType.
     *  This is used to know how to charge for XCM execution in a particular
     *  asset
     *  Not all assets might contain units per second, hence the different storage
     */
    get isV1201(): boolean {
        return this.getTypeHash() === '54a3c93dfaed0789b2607a39e76157bd1575abf08571be09f89df3c47a268759'
    }

    /**
     *  Stores the units per second for local execution for a AssetType.
     *  This is used to know how to charge for XCM execution in a particular
     *  asset
     *  Not all assets might contain units per second, hence the different storage
     */
    get asV1201(): AssetManagerAssetTypeUnitsPerSecondStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  Stores the units per second for local execution for a AssetType.
 *  This is used to know how to charge for XCM execution in a particular
 *  asset
 *  Not all assets might contain units per second, hence the different storage
 */
export interface AssetManagerAssetTypeUnitsPerSecondStorageV1201 {
    get(key: v1201.AssetType): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v1201.AssetType[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v1201.AssetType[]>
    getKeys(key: v1201.AssetType): Promise<v1201.AssetType[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1201.AssetType[]>
    getKeysPaged(pageSize: number, key: v1201.AssetType): AsyncIterable<v1201.AssetType[]>
    getPairs(): Promise<[k: v1201.AssetType, v: bigint][]>
    getPairs(key: v1201.AssetType): Promise<[k: v1201.AssetType, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1201.AssetType, v: bigint][]>
    getPairsPaged(pageSize: number, key: v1201.AssetType): AsyncIterable<[k: v1201.AssetType, v: bigint][]>
}

export class AssetManagerLocalAssetCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetManager'
    }

    protected getName() {
        return 'LocalAssetCounter'
    }

    /**
     *  Stores the counter of the number of local assets that have been
     *  created so far
     *  This value can be used to salt the creation of an assetId, e.g.,
     *  by hashing it. This is particularly useful for cases like moonbeam
     *  where letting users choose their assetId would result in collision
     *  in the evm side.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Stores the counter of the number of local assets that have been
     *  created so far
     *  This value can be used to salt the creation of an assetId, e.g.,
     *  by hashing it. This is particularly useful for cases like moonbeam
     *  where letting users choose their assetId would result in collision
     *  in the evm side.
     */
    get asV1401(): AssetManagerLocalAssetCounterStorageV1401 {
        assert(this.isV1401)
        return this as any
    }
}

/**
 *  Stores the counter of the number of local assets that have been
 *  created so far
 *  This value can be used to salt the creation of an assetId, e.g.,
 *  by hashing it. This is particularly useful for cases like moonbeam
 *  where letting users choose their assetId would result in collision
 *  in the evm side.
 */
export interface AssetManagerLocalAssetCounterStorageV1401 {
    get(): Promise<bigint>
}

export class AssetManagerLocalAssetDepositStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetManager'
    }

    protected getName() {
        return 'LocalAssetDeposit'
    }

    /**
     *  Local asset deposits, a mapping from assetId to a struct
     *  holding the creator (from which the deposit was reserved) and
     *  the deposit amount
     */
    get isV1401(): boolean {
        return this.getTypeHash() === '9bcab8b2e0607d863758e4d36f79ee53a5eb8c1b321eab0483e79c013d17ee92'
    }

    /**
     *  Local asset deposits, a mapping from assetId to a struct
     *  holding the creator (from which the deposit was reserved) and
     *  the deposit amount
     */
    get asV1401(): AssetManagerLocalAssetDepositStorageV1401 {
        assert(this.isV1401)
        return this as any
    }
}

/**
 *  Local asset deposits, a mapping from assetId to a struct
 *  holding the creator (from which the deposit was reserved) and
 *  the deposit amount
 */
export interface AssetManagerLocalAssetDepositStorageV1401 {
    get(key: bigint): Promise<(v1401.AssetInfo | undefined)>
    getAll(): Promise<v1401.AssetInfo[]>
    getMany(keys: bigint[]): Promise<(v1401.AssetInfo | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1401.AssetInfo][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1401.AssetInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1401.AssetInfo][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1401.AssetInfo][]>
}

export class AssetManagerSupportedFeePaymentAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetManager'
    }

    protected getName() {
        return 'SupportedFeePaymentAssets'
    }

    get isV1300(): boolean {
        return this.getTypeHash() === '812003c72affd38b865be9202d7f9ba02c8d5b4d7c1ce24b615e8d7f59c09878'
    }

    get asV1300(): AssetManagerSupportedFeePaymentAssetsStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

export interface AssetManagerSupportedFeePaymentAssetsStorageV1300 {
    get(): Promise<v1300.AssetType[]>
}

export class AssetsAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The number of units of assets held by any given account.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '6334041ef65f7197adefcba87aba5fdae2e30ea1ef353b22bec16b07da6cacd9'
    }

    /**
     *  The number of units of assets held by any given account.
     */
    get asV1101(): AssetsAccountStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  The holdings of a specific account for a specific asset.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === 'df8baa2f6095d45e8c32663fa440c26614937785414ee9ea15928e30910764ff'
    }

    /**
     *  The holdings of a specific account for a specific asset.
     */
    get asV1300(): AssetsAccountStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

/**
 *  The number of units of assets held by any given account.
 */
export interface AssetsAccountStorageV1101 {
    get(key1: bigint, key2: Uint8Array): Promise<v1101.AssetBalance>
    getAll(): Promise<v1101.AssetBalance[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<v1101.AssetBalance[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v1101.AssetBalance][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v1101.AssetBalance][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v1101.AssetBalance][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v1101.AssetBalance][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v1101.AssetBalance][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v1101.AssetBalance][]>
}

/**
 *  The holdings of a specific account for a specific asset.
 */
export interface AssetsAccountStorageV1300 {
    get(key1: bigint, key2: Uint8Array): Promise<(v1300.AssetAccount | undefined)>
    getAll(): Promise<v1300.AssetAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v1300.AssetAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v1300.AssetAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v1300.AssetAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v1300.AssetAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v1300.AssetAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v1300.AssetAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v1300.AssetAccount][]>
}

export class AssetsApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Approved balance transfers. First balance is the amount approved for transfer. Second
     *  is the amount of `T::Currency` reserved for storing this.
     *  First key is the asset ID, second key is the owner and third key is the delegate.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'e55f2bf4e404947921a8e14efcac29102c0463016ae209f48dbdaee252d65a37'
    }

    /**
     *  Approved balance transfers. First balance is the amount approved for transfer. Second
     *  is the amount of `T::Currency` reserved for storing this.
     *  First key is the asset ID, second key is the owner and third key is the delegate.
     */
    get asV1101(): AssetsApprovalsStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Approved balance transfers. First balance is the amount approved for transfer. Second
 *  is the amount of `T::Currency` reserved for storing this.
 *  First key is the asset ID, second key is the owner and third key is the delegate.
 */
export interface AssetsApprovalsStorageV1101 {
    get(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<(v1101.Approval | undefined)>
    getAll(): Promise<v1101.Approval[]>
    getMany(keys: [bigint, Uint8Array, Uint8Array][]): Promise<(v1101.Approval | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array, key3: Uint8Array): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v1101.Approval][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v1101.Approval][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v1101.Approval][]>
    getPairs(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v1101.Approval][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v1101.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v1101.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v1101.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array, key3: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v1101.Approval][]>
}

export class AssetsAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'Asset'
    }

    /**
     *  Details of an asset.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'a773fde1dd7a052d5bc865fdd7ffba9fed0a1840f51dee25c7a6416d0e751e2e'
    }

    /**
     *  Details of an asset.
     */
    get asV1101(): AssetsAssetStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Details of an asset.
 */
export interface AssetsAssetStorageV1101 {
    get(key: bigint): Promise<(v1101.AssetDetails | undefined)>
    getAll(): Promise<v1101.AssetDetails[]>
    getMany(keys: bigint[]): Promise<(v1101.AssetDetails | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1101.AssetDetails][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1101.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1101.AssetDetails][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1101.AssetDetails][]>
}

export class AssetsMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'Metadata'
    }

    /**
     *  Metadata of an asset.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '61e62fb4641e931b380be1690bd1571bb1c974c2abd9a8958d22bf2a3b91ce05'
    }

    /**
     *  Metadata of an asset.
     */
    get asV1101(): AssetsMetadataStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Metadata of an asset.
 */
export interface AssetsMetadataStorageV1101 {
    get(key: bigint): Promise<v1101.AssetMetadata>
    getAll(): Promise<v1101.AssetMetadata[]>
    getMany(keys: bigint[]): Promise<v1101.AssetMetadata[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1101.AssetMetadata][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1101.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1101.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1101.AssetMetadata][]>
}

export class AuthorFilterEligibleCountStorage extends StorageBase {
    protected getPrefix() {
        return 'AuthorFilter'
    }

    protected getName() {
        return 'EligibleCount'
    }

    /**
     *  The number of active authors that will be eligible at each height.
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of active authors that will be eligible at each height.
     */
    get asV1502(): AuthorFilterEligibleCountStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  The number of active authors that will be eligible at each height.
 */
export interface AuthorFilterEligibleCountStorageV1502 {
    get(): Promise<number>
}

export class AuthorFilterEligibleRatioStorage extends StorageBase {
    protected getPrefix() {
        return 'AuthorFilter'
    }

    protected getName() {
        return 'EligibleRatio'
    }

    /**
     *  The percentage of active authors that will be eligible at each height.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '8b3376fac84361c8fa9d2d145fe641638bab307a3907f7668e9b00eb0cf1f864'
    }

    /**
     *  The percentage of active authors that will be eligible at each height.
     */
    get asV49(): AuthorFilterEligibleRatioStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The percentage of active authors that will be eligible at each height.
 */
export interface AuthorFilterEligibleRatioStorageV49 {
    get(): Promise<number>
}

export class AuthorInherentAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'AuthorInherent'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1660936d4028b791703af3ae985bc49e73619feaf378f3fe474e68b98897138f'
    }

    /**
     *  Author of current block.
     */
    get asV49(): AuthorInherentAuthorStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorInherentAuthorStorageV49 {
    get(): Promise<(Uint8Array | undefined)>
}

export class AuthorInherentHighestSlotSeenStorage extends StorageBase {
    protected getPrefix() {
        return 'AuthorInherent'
    }

    protected getName() {
        return 'HighestSlotSeen'
    }

    /**
     *  The highest slot that has been seen in the history of this chain.
     *  This is a strictly-increasing value.
     */
    get isV1605(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The highest slot that has been seen in the history of this chain.
     *  This is a strictly-increasing value.
     */
    get asV1605(): AuthorInherentHighestSlotSeenStorageV1605 {
        assert(this.isV1605)
        return this as any
    }
}

/**
 *  The highest slot that has been seen in the history of this chain.
 *  This is a strictly-increasing value.
 */
export interface AuthorInherentHighestSlotSeenStorageV1605 {
    get(): Promise<number>
}

export class AuthorMappingMappingWithDepositStorage extends StorageBase {
    protected getPrefix() {
        return 'AuthorMapping'
    }

    protected getName() {
        return 'MappingWithDeposit'
    }

    /**
     *  We maintain a mapping from the AuthorIds used in the consensus layer
     *  to the AccountIds runtime (including this staking pallet).
     */
    get isV49(): boolean {
        return this.getTypeHash() === '44c2e46e34515a3d14f0ddaa60a1697c6f32621501d2c3a514c12e34e19dce74'
    }

    /**
     *  We maintain a mapping from the AuthorIds used in the consensus layer
     *  to the AccountIds runtime (including this staking pallet).
     */
    get asV49(): AuthorMappingMappingWithDepositStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  We maintain a mapping from the NimbusIds used in the consensus layer
     *  to the AccountIds runtime.
     */
    get isV1502(): boolean {
        return this.getTypeHash() === 'f621469bd7a65de260fe62f404244fd4e47808ef006d29e272e12fbc45215162'
    }

    /**
     *  We maintain a mapping from the NimbusIds used in the consensus layer
     *  to the AccountIds runtime.
     */
    get asV1502(): AuthorMappingMappingWithDepositStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  We maintain a mapping from the AuthorIds used in the consensus layer
 *  to the AccountIds runtime (including this staking pallet).
 */
export interface AuthorMappingMappingWithDepositStorageV49 {
    get(key: Uint8Array): Promise<(v49.RegistrationInfo | undefined)>
    getAll(): Promise<v49.RegistrationInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v49.RegistrationInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.RegistrationInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.RegistrationInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.RegistrationInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.RegistrationInfo][]>
}

/**
 *  We maintain a mapping from the NimbusIds used in the consensus layer
 *  to the AccountIds runtime.
 */
export interface AuthorMappingMappingWithDepositStorageV1502 {
    get(key: Uint8Array): Promise<(v1502.RegistrationInfo | undefined)>
    getAll(): Promise<v1502.RegistrationInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v1502.RegistrationInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1502.RegistrationInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1502.RegistrationInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1502.RegistrationInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1502.RegistrationInfo][]>
}

export class AuthorMappingNimbusLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'AuthorMapping'
    }

    protected getName() {
        return 'NimbusLookup'
    }

    /**
     *  We maintain a reverse mapping from AccountIds to NimbusIDS
     */
    get isV1605(): boolean {
        return this.getTypeHash() === '4657636cb4188393b9ca6aaf8ca72aad7f732d48fa6f836eba7c37f31e334657'
    }

    /**
     *  We maintain a reverse mapping from AccountIds to NimbusIDS
     */
    get asV1605(): AuthorMappingNimbusLookupStorageV1605 {
        assert(this.isV1605)
        return this as any
    }
}

/**
 *  We maintain a reverse mapping from AccountIds to NimbusIDS
 */
export interface AuthorMappingNimbusLookupStorageV1605 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '17669917f628c38832645ae9b39d0bab5a99964e3446b9b2ef904cad2f4bd653'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV49(): BalancesAccountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV49 {
    get(key: Uint8Array): Promise<v49.AccountData>
    getAll(): Promise<v49.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v49.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.AccountData][]>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '06841a55079a86baa2b12695efaff49e696e0a558e06bbd4b18273c80bed1aa7'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV49(): BalancesLocksStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV49 {
    get(key: Uint8Array): Promise<v49.BalanceLock[]>
    getAll(): Promise<v49.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v49.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '8d51fd387814de21dbda4559e469fac48b20d115c43cfecaecc67226920214d5'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV155(): BalancesReservesStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '23e2d4f79b9080a5b7d1b42bc00cf486d31756e3880d1bf335f11f61a287b44f'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV900(): BalancesReservesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV155 {
    get(key: Uint8Array): Promise<v155.ReserveData[]>
    getAll(): Promise<v155.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v155.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v155.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v155.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v155.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v155.ReserveData[]][]>
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV900 {
    get(key: Uint8Array): Promise<v900.ReserveData[]>
    getAll(): Promise<v900.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v900.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV49(): BalancesStorageVersionStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV900(): BalancesStorageVersionStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV49 {
    get(): Promise<v49.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV900 {
    get(): Promise<v900.Releases>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV49(): BalancesTotalIssuanceStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV49 {
    get(): Promise<bigint>
}

export class BaseFeeBaseFeePerGasStorage extends StorageBase {
    protected getPrefix() {
        return 'BaseFee'
    }

    protected getName() {
        return 'BaseFeePerGas'
    }

    get isV1201(): boolean {
        return this.getTypeHash() === '12f873961beb65950ba33112c0ef55aa5cd3ec2d1e17a439f76a028d6b94ec7b'
    }

    get asV1201(): BaseFeeBaseFeePerGasStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

export interface BaseFeeBaseFeePerGasStorageV1201 {
    get(): Promise<bigint>
}

export class BaseFeeElasticityStorage extends StorageBase {
    protected getPrefix() {
        return 'BaseFee'
    }

    protected getName() {
        return 'Elasticity'
    }

    get isV1201(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV1201(): BaseFeeElasticityStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

export interface BaseFeeElasticityStorageV1201 {
    get(): Promise<number>
}

export class BaseFeeIsActiveStorage extends StorageBase {
    protected getPrefix() {
        return 'BaseFee'
    }

    protected getName() {
        return 'IsActive'
    }

    get isV1201(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    get asV1201(): BaseFeeIsActiveStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

export interface BaseFeeIsActiveStorageV1201 {
    get(): Promise<boolean>
}

export class CouncilCollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'CouncilCollective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV900(): CouncilCollectiveMembersStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilCollectiveMembersStorageV900 {
    get(): Promise<Uint8Array[]>
}

export class CouncilCollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'CouncilCollective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '1660936d4028b791703af3ae985bc49e73619feaf378f3fe474e68b98897138f'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV900(): CouncilCollectivePrimeStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilCollectivePrimeStorageV900 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilCollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CouncilCollective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV900(): CouncilCollectiveProposalCountStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilCollectiveProposalCountStorageV900 {
    get(): Promise<number>
}

export class CouncilCollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'CouncilCollective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'd327535734528b6cdd2d32e0053fa0b40acac90db8dd8bb9be8c425c2c524ba2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV900(): CouncilCollectiveProposalOfStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1001(): boolean {
        return this.getTypeHash() === 'c92d0a96a7529a45371a61a676faf96bb125ef83bd41b79e6c7dd0fc4ce0b780'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1001(): CouncilCollectiveProposalOfStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '7500301c24d9a51839feeef25311ec34327bfb92c46319282b8400239bd5c5c3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1101(): CouncilCollectiveProposalOfStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === 'f876576c26f3a4ee2e353233377021cfe634f5a06d29c97657b74d1b02a6d535'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1201(): CouncilCollectiveProposalOfStorageV1201 {
        assert(this.isV1201)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === 'cf65494adb84392c5c8aa4438d7a2d7b12ad1b99f5954e6558741f4a8ff7b3f8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1300(): CouncilCollectiveProposalOfStorageV1300 {
        assert(this.isV1300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === 'b73b6e5ba69e60c554640a570fd7275cd3db109804ca325325e99faa81170354'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1401(): CouncilCollectiveProposalOfStorageV1401 {
        assert(this.isV1401)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1502(): boolean {
        return this.getTypeHash() === 'cfc06f2fc7e243b9bc1648c8a4afab8c80c5d82c332887a96d96bcc72249d14a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1502(): CouncilCollectiveProposalOfStorageV1502 {
        assert(this.isV1502)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1605(): boolean {
        return this.getTypeHash() === 'e6167fd70a130669270333a2f8f198a99ef9248e0749de46cb290bf3e8488d62'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1605(): CouncilCollectiveProposalOfStorageV1605 {
        assert(this.isV1605)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1701(): boolean {
        return this.getTypeHash() === 'e9af9317d0c70af6f802b6e9c05aac72a92587a6ae5a7f118b27e6a17732de69'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1701(): CouncilCollectiveProposalOfStorageV1701 {
        assert(this.isV1701)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === 'c8af9383fdc132bdaa0b80ccdd9798813d1b8621b1c0b501c3a93b20043c0f4d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1801(): CouncilCollectiveProposalOfStorageV1801 {
        assert(this.isV1801)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === 'b16645dfd8d138cd02bb48abfd15d679f5a4b3d1806365c2c24363b68a2dbca2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1901(): CouncilCollectiveProposalOfStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '093bbf5dd6816d275163aada37d68a67427ed64b324e9d36e613a642b2009cef'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2000(): CouncilCollectiveProposalOfStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV900 {
    get(key: Uint8Array): Promise<(v900.Call | undefined)>
    getAll(): Promise<v900.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v900.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1001 {
    get(key: Uint8Array): Promise<(v1001.Call | undefined)>
    getAll(): Promise<v1001.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1101 {
    get(key: Uint8Array): Promise<(v1101.Call | undefined)>
    getAll(): Promise<v1101.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1101.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1101.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1101.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1101.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1101.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1201 {
    get(key: Uint8Array): Promise<(v1201.Call | undefined)>
    getAll(): Promise<v1201.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1201.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1201.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1201.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1201.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1201.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1300 {
    get(key: Uint8Array): Promise<(v1300.Call | undefined)>
    getAll(): Promise<v1300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1401 {
    get(key: Uint8Array): Promise<(v1401.Call | undefined)>
    getAll(): Promise<v1401.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1401.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1401.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1401.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1401.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1401.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1502 {
    get(key: Uint8Array): Promise<(v1502.Call | undefined)>
    getAll(): Promise<v1502.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1502.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1502.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1502.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1502.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1502.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1605 {
    get(key: Uint8Array): Promise<(v1605.Call | undefined)>
    getAll(): Promise<v1605.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1605.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1605.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1605.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1605.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1605.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1701 {
    get(key: Uint8Array): Promise<(v1701.Call | undefined)>
    getAll(): Promise<v1701.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1701.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1701.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1701.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1701.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1701.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1801 {
    get(key: Uint8Array): Promise<(v1801.Call | undefined)>
    getAll(): Promise<v1801.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1801.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1801.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1801.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1801.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1801.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV1901 {
    get(key: Uint8Array): Promise<(v1901.Call | undefined)>
    getAll(): Promise<v1901.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1901.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1901.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1901.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1901.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1901.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilCollectiveProposalOfStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.Call | undefined)>
    getAll(): Promise<v2000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.Call][]>
}

export class CouncilCollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'CouncilCollective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV900(): CouncilCollectiveProposalsStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilCollectiveProposalsStorageV900 {
    get(): Promise<Uint8Array[]>
}

export class CouncilCollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'CouncilCollective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '2c6357c74e2bb2db1ec38121ba748a5e0208f0f891cb58bf6b558e63204dc875'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV900(): CouncilCollectiveVotingStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilCollectiveVotingStorageV900 {
    get(key: Uint8Array): Promise<(v900.Votes | undefined)>
    getAll(): Promise<v900.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v900.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.Votes][]>
}

export class CrowdloanRewardsAccountsPayableStorage extends StorageBase {
    protected getPrefix() {
        return 'CrowdloanRewards'
    }

    protected getName() {
        return 'AccountsPayable'
    }

    get isV49(): boolean {
        return this.getTypeHash() === 'b324f79757e6ab34bd3bab5e9e697b1e4aa0b775a4a1c3a9887ac7622ba79491'
    }

    get asV49(): CrowdloanRewardsAccountsPayableStorageV49 {
        assert(this.isV49)
        return this as any
    }

    get isV400(): boolean {
        return this.getTypeHash() === 'eb560fa81b751b7e57ea4bab6e8a3f01a224726898c5e1d0152f052cddf43219'
    }

    get asV400(): CrowdloanRewardsAccountsPayableStorageV400 {
        assert(this.isV400)
        return this as any
    }
}

export interface CrowdloanRewardsAccountsPayableStorageV49 {
    get(key: Uint8Array): Promise<(v49.RewardInfo | undefined)>
    getAll(): Promise<v49.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v49.RewardInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.RewardInfo][]>
}

export interface CrowdloanRewardsAccountsPayableStorageV400 {
    get(key: Uint8Array): Promise<(v400.RewardInfo | undefined)>
    getAll(): Promise<v400.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v400.RewardInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v400.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v400.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v400.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v400.RewardInfo][]>
}

export class CrowdloanRewardsClaimedRelayChainIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'CrowdloanRewards'
    }

    protected getName() {
        return 'ClaimedRelayChainIds'
    }

    get isV49(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    get asV49(): CrowdloanRewardsClaimedRelayChainIdsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

export interface CrowdloanRewardsClaimedRelayChainIdsStorageV49 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class CrowdloanRewardsEndRelayBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'CrowdloanRewards'
    }

    protected getName() {
        return 'EndRelayBlock'
    }

    /**
     *  Relay block height at the initialization of the pallet
     */
    get isV159(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Relay block height at the initialization of the pallet
     */
    get asV159(): CrowdloanRewardsEndRelayBlockStorageV159 {
        assert(this.isV159)
        return this as any
    }
}

/**
 *  Relay block height at the initialization of the pallet
 */
export interface CrowdloanRewardsEndRelayBlockStorageV159 {
    get(): Promise<number>
}

export class CrowdloanRewardsInitRelayBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'CrowdloanRewards'
    }

    protected getName() {
        return 'InitRelayBlock'
    }

    /**
     *  Relay block height at the initialization of the pallet
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Relay block height at the initialization of the pallet
     */
    get asV49(): CrowdloanRewardsInitRelayBlockStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Relay block height at the initialization of the pallet
 */
export interface CrowdloanRewardsInitRelayBlockStorageV49 {
    get(): Promise<number>
}

export class CrowdloanRewardsInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'CrowdloanRewards'
    }

    protected getName() {
        return 'Initialized'
    }

    get isV49(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    get asV49(): CrowdloanRewardsInitializedStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

export interface CrowdloanRewardsInitializedStorageV49 {
    get(): Promise<boolean>
}

export class CrowdloanRewardsInitializedRewardAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'CrowdloanRewards'
    }

    protected getName() {
        return 'InitializedRewardAmount'
    }

    /**
     *  Total initialized amount so far. We store this to make pallet funds == contributors reward
     *  check easier and more efficient
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total initialized amount so far. We store this to make pallet funds == contributors reward
     *  check easier and more efficient
     */
    get asV49(): CrowdloanRewardsInitializedRewardAmountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Total initialized amount so far. We store this to make pallet funds == contributors reward
 *  check easier and more efficient
 */
export interface CrowdloanRewardsInitializedRewardAmountStorageV49 {
    get(): Promise<bigint>
}

export class CrowdloanRewardsTotalContributorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CrowdloanRewards'
    }

    protected getName() {
        return 'TotalContributors'
    }

    /**
     *  Total number of contributors to aid hinting benchmarking
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Total number of contributors to aid hinting benchmarking
     */
    get asV49(): CrowdloanRewardsTotalContributorsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Total number of contributors to aid hinting benchmarking
 */
export interface CrowdloanRewardsTotalContributorsStorageV49 {
    get(): Promise<number>
}

export class CrowdloanRewardsUnassociatedContributionsStorage extends StorageBase {
    protected getPrefix() {
        return 'CrowdloanRewards'
    }

    protected getName() {
        return 'UnassociatedContributions'
    }

    get isV49(): boolean {
        return this.getTypeHash() === 'fb3aa278472e2fdf6c9be0dc3b00b797ed10b83a88d825c01eb7a658b682ead0'
    }

    get asV49(): CrowdloanRewardsUnassociatedContributionsStorageV49 {
        assert(this.isV49)
        return this as any
    }

    get isV400(): boolean {
        return this.getTypeHash() === 'ee9ce3dece53f2d81cd84e154850958d5cd6aa577dfc26ef615abc30fdb668b2'
    }

    get asV400(): CrowdloanRewardsUnassociatedContributionsStorageV400 {
        assert(this.isV400)
        return this as any
    }
}

export interface CrowdloanRewardsUnassociatedContributionsStorageV49 {
    get(key: Uint8Array): Promise<(v49.RewardInfo | undefined)>
    getAll(): Promise<v49.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v49.RewardInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.RewardInfo][]>
}

export interface CrowdloanRewardsUnassociatedContributionsStorageV400 {
    get(key: Uint8Array): Promise<(v400.RewardInfo | undefined)>
    getAll(): Promise<v400.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v400.RewardInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v400.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v400.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v400.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v400.RewardInfo][]>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'c718a65fd1505c4780fbc75874b9e5c0b6455f58b8f2dd317e4c66e73064f401'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV49(): DemocracyBlacklistStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV49 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV49(): DemocracyCancellationsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV49 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '8e3a37317338324edfcec2c7bc02afb44e2cd7d1a8c8b62e65a4e144fd6e4f18'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV49(): DemocracyDepositOfStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV49 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV49(): DemocracyLastTabledWasExternalStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV49 {
    get(): Promise<boolean>
}

export class DemocracyLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'b66e643893eeb22eb47e70e5963130466a65d7fdc06d6f4fefd82f3ba4c900bd'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV49(): DemocracyLocksStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface DemocracyLocksStorageV49 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV49(): DemocracyLowestUnbakedStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV49 {
    get(): Promise<number>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV49(): DemocracyNextExternalStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV2000(): DemocracyNextExternalStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV49 {
    get(): Promise<([Uint8Array, v49.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV2000 {
    get(): Promise<([v2000.Bounded, v2000.VoteThreshold] | undefined)>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '4cfebf1c3ec4cbc591b367aceaef472ee18ccb1d7b4a188ca5284e65390f4835'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV49(): DemocracyPreimagesStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV900(): DemocracyPreimagesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV49 {
    get(key: Uint8Array): Promise<(v49.PreimageStatus | undefined)>
    getAll(): Promise<v49.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v49.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV900 {
    get(key: Uint8Array): Promise<(v900.PreimageStatus | undefined)>
    getAll(): Promise<v900.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v900.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.PreimageStatus][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV49(): DemocracyPublicPropCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV49 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '50ae2b6d7ba179c0ff783cad2f9c19cbf1f250422f7e7b7cca7df80c63db8f09'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV49(): DemocracyPublicPropsStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'ce1d22fdfbf2ba6bbd40606fd5bbb2dd09374a075a2781ce2f2306ae8bc75205'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV2000(): DemocracyPublicPropsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV49 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV2000 {
    get(): Promise<[number, v2000.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV49(): DemocracyReferendumCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV49 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV49(): DemocracyReferendumInfoOfStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV900(): DemocracyReferendumInfoOfStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV2000(): DemocracyReferendumInfoOfStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV49 {
    get(key: number): Promise<(v49.ReferendumInfo | undefined)>
    getAll(): Promise<v49.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v49.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v49.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v49.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v49.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v49.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV900 {
    get(key: number): Promise<(v900.ReferendumInfo | undefined)>
    getAll(): Promise<v900.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v900.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v900.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v900.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v900.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v900.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV2000 {
    get(key: number): Promise<(v2000.ReferendumInfo | undefined)>
    getAll(): Promise<v2000.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v2000.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2000.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v2000.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2000.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2000.ReferendumInfo][]>
}

export class DemocracyStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd0303e1bae0fc34655f81e27ee4b2eb0fb0d3ce283cc0e6cd4de7efaeb1119f2'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV49(): DemocracyStorageVersionStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV900(): DemocracyStorageVersionStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV49 {
    get(): Promise<(v49.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV900 {
    get(): Promise<(v900.Type_306 | undefined)>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '069246cc3c2c862f8ec2be3a544f8b08e041e979d0995dc11e4d33c841fc4e44'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV49(): DemocracyVotingOfStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '7314d44ac8fcd68349c93651e9bb37a7beaaad16434f4e7d13f960747f61bf0d'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV900(): DemocracyVotingOfStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV49 {
    get(key: Uint8Array): Promise<v49.Voting>
    getAll(): Promise<v49.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v49.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Voting][]>
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV900 {
    get(key: Uint8Array): Promise<v900.Voting>
    getAll(): Promise<v900.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v900.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.Voting][]>
}

export class DmpQueueConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Configuration'
    }

    /**
     *  The configuration.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
    }

    /**
     *  The configuration.
     */
    get asV1101(): DmpQueueConfigurationStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === '67bde14908f93a3aea4aa5877726bd296c59aa66227203739244319bbf5fb443'
    }

    /**
     *  The configuration.
     */
    get asV1901(): DmpQueueConfigurationStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'd4ff4c68d7b5a5db6603b6449fa2fc5fa9ccb53292dd0c03e9b6a4920c6e75f9'
    }

    /**
     *  The configuration.
     */
    get asV2000(): DmpQueueConfigurationStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV1101 {
    get(): Promise<v1101.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV1901 {
    get(): Promise<v1901.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV2000 {
    get(): Promise<v2000.ConfigData>
}

export class DmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The overweight messages.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asV1101(): DmpQueueOverweightStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageV1101 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class DmpQueuePageIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'PageIndex'
    }

    /**
     *  The page index.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asV1101(): DmpQueuePageIndexStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageV1101 {
    get(): Promise<v1101.PageIndexData>
}

export class DmpQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The queue pages.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asV1101(): DmpQueuePagesStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageV1101 {
    get(key: number): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: number[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
}

export class EVMAccountCodesStorage extends StorageBase {
    protected getPrefix() {
        return 'EVM'
    }

    protected getName() {
        return 'AccountCodes'
    }

    get isV49(): boolean {
        return this.getTypeHash() === '4b802a732c8f27bcaa64a64c00c70aeccf7b09e63cd3db9000de1ada8ab379c2'
    }

    get asV49(): EVMAccountCodesStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

export interface EVMAccountCodesStorageV49 {
    get(key: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class EVMAccountStoragesStorage extends StorageBase {
    protected getPrefix() {
        return 'EVM'
    }

    protected getName() {
        return 'AccountStorages'
    }

    get isV49(): boolean {
        return this.getTypeHash() === 'e46b64a08590ade9974d6cacb482b7b117daf13fb4b1c7e4a0c1e141c3c7c76f'
    }

    get asV49(): EVMAccountStoragesStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

export interface EVMAccountStoragesStorageV49 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<Uint8Array[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class EthereumBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'BlockHash'
    }

    get isV300(): boolean {
        return this.getTypeHash() === '3cdb160343948514e73c6294339cfda53b65a21ccd0591b9966cf8b00b8db892'
    }

    get asV300(): EthereumBlockHashStorageV300 {
        assert(this.isV300)
        return this as any
    }
}

export interface EthereumBlockHashStorageV300 {
    get(key: bigint): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<Uint8Array[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class EthereumCurrentBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentBlock'
    }

    /**
     *  The current Ethereum block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'e829e516b6041b98c4845b2567c9f02ac53c6770d1e126f17ee116124a43986c'
    }

    /**
     *  The current Ethereum block.
     */
    get asV49(): EthereumCurrentBlockStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The current Ethereum block.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '0210c19c3dd8953e8a03ffae39e3596d447227f387c61bcecf095aef04c44e1a'
    }

    /**
     *  The current Ethereum block.
     */
    get asV900(): EthereumCurrentBlockStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  The current Ethereum block.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === '83cc60e6bcafe0d8714add8cf55f02976711d5e30ab464d1a2079648429b2716'
    }

    /**
     *  The current Ethereum block.
     */
    get asV1201(): EthereumCurrentBlockStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  The current Ethereum block.
 */
export interface EthereumCurrentBlockStorageV49 {
    get(): Promise<(v49.EthBlock | undefined)>
}

/**
 *  The current Ethereum block.
 */
export interface EthereumCurrentBlockStorageV900 {
    get(): Promise<(v900.Block | undefined)>
}

/**
 *  The current Ethereum block.
 */
export interface EthereumCurrentBlockStorageV1201 {
    get(): Promise<(v1201.Block | undefined)>
}

export class EthereumCurrentReceiptsStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentReceipts'
    }

    /**
     *  The current Ethereum receipts.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '769586c42a435b1ca0d838605cc8b9ea24ba1249dabc8b7f122235134db4876c'
    }

    /**
     *  The current Ethereum receipts.
     */
    get asV49(): EthereumCurrentReceiptsStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The current Ethereum receipts.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'b4343bd18832b42de089930162303b7641b5809e65fee5604ef3ed9ff4e9e094'
    }

    /**
     *  The current Ethereum receipts.
     */
    get asV900(): EthereumCurrentReceiptsStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  The current Ethereum receipts.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === '3808105e37ff881e09dab58654e60755cf8107d16545835652272971b001adf7'
    }

    /**
     *  The current Ethereum receipts.
     */
    get asV1201(): EthereumCurrentReceiptsStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  The current Ethereum receipts.
 */
export interface EthereumCurrentReceiptsStorageV49 {
    get(): Promise<(v49.EthReceipt[] | undefined)>
}

/**
 *  The current Ethereum receipts.
 */
export interface EthereumCurrentReceiptsStorageV900 {
    get(): Promise<(v900.Receipt[] | undefined)>
}

/**
 *  The current Ethereum receipts.
 */
export interface EthereumCurrentReceiptsStorageV1201 {
    get(): Promise<(v1201.ReceiptV3[] | undefined)>
}

export class EthereumCurrentTransactionStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentTransactionStatuses'
    }

    /**
     *  The current transaction statuses.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '258bd41865de2f8cfa5372dc3a38af8b5110322e5098a04f50c36a5195a4c893'
    }

    /**
     *  The current transaction statuses.
     */
    get asV49(): EthereumCurrentTransactionStatusesStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The current transaction statuses.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'e42d9c1a7dbca2e4e0301367b0c021b885fe9bf9ce8eadadb8b48112a96cf49e'
    }

    /**
     *  The current transaction statuses.
     */
    get asV900(): EthereumCurrentTransactionStatusesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The current transaction statuses.
 */
export interface EthereumCurrentTransactionStatusesStorageV49 {
    get(): Promise<(v49.EthTransactionStatus[] | undefined)>
}

/**
 *  The current transaction statuses.
 */
export interface EthereumCurrentTransactionStatusesStorageV900 {
    get(): Promise<(v900.TransactionStatus[] | undefined)>
}

export class EthereumPendingStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'Pending'
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '0230918b5e14bc2d0520bca630a2ade6d8a71bc326abe065e4c8569b819aabed'
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get asV49(): EthereumPendingStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '6ebd3f4fccb67af169d169b874b4c35acdeab35995748ea77676054df8f04d39'
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get asV900(): EthereumPendingStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === '00020cc0b6f1b30cefcbc71a9c5abcba50c851f7263cf484aa6fd41c577e5a1f'
    }

    /**
     *  Current building block's transactions and receipts.
     */
    get asV1201(): EthereumPendingStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  Current building block's transactions and receipts.
 */
export interface EthereumPendingStorageV49 {
    get(): Promise<[v49.EthTransaction, v49.EthTransactionStatus, v49.EthReceipt][]>
}

/**
 *  Current building block's transactions and receipts.
 */
export interface EthereumPendingStorageV900 {
    get(): Promise<[v900.LegacyTransaction, v900.TransactionStatus, v900.Receipt][]>
}

/**
 *  Current building block's transactions and receipts.
 */
export interface EthereumPendingStorageV1201 {
    get(): Promise<[v1201.TransactionV2, v1201.TransactionStatus, v1201.ReceiptV3][]>
}

export class EthereumChainIdChainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumChainId'
    }

    protected getName() {
        return 'ChainId'
    }

    get isV49(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV49(): EthereumChainIdChainIdStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

export interface EthereumChainIdChainIdStorageV49 {
    get(): Promise<bigint>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV701(): boolean {
        return this.getTypeHash() === '0b4c20c99e2798aacb9fe52c4f0afb517ced630e64b49ec67303ade1d7d2956a'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV701(): IdentityIdentityOfStorageV701 {
        assert(this.isV701)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV701 {
    get(key: Uint8Array): Promise<(v701.Registration | undefined)>
    getAll(): Promise<v701.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v701.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v701.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v701.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v701.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v701.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV701(): boolean {
        return this.getTypeHash() === '0278e4f34e994876d9267a7a012ea79a19d363bdc8c3b62ad1534e7d0dd8206d'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV701(): IdentityRegistrarsStorageV701 {
        assert(this.isV701)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV701 {
    get(): Promise<(v701.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV701(): boolean {
        return this.getTypeHash() === 'f102e27763c137d28e9d20a005cd0ed56546ca4f0aac9009f89ab2fdf737350d'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV701(): IdentitySubsOfStorageV701 {
        assert(this.isV701)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageV701 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV701(): boolean {
        return this.getTypeHash() === '4249267fa24b24ef1a9514039c94f754f1f7dd2d456907e6629f094bebf1721f'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV701(): IdentitySuperOfStorageV701 {
        assert(this.isV701)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV701 {
    get(key: Uint8Array): Promise<([Uint8Array, v701.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v701.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v701.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v701.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v701.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v701.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v701.Data]][]>
}

export class Instance1CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV49(): Instance1CollectiveMembersStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV49 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1660936d4028b791703af3ae985bc49e73619feaf378f3fe474e68b98897138f'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV49(): Instance1CollectivePrimeStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface Instance1CollectivePrimeStorageV49 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV49(): Instance1CollectiveProposalCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV49 {
    get(): Promise<number>
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '8ca82453861f38ca55a75abe2ddba8a95fc8c769166f39d8b6a7577f159816ae'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV49(): Instance1CollectiveProposalOfStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV53(): boolean {
        return this.getTypeHash() === '459a807b868907d27334e796710b62a9bf93cde9ce4991ebff0343c895735b36'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV53(): Instance1CollectiveProposalOfStorageV53 {
        assert(this.isV53)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '9651e3cff016716f006cb870ae8c3dbf96240c78b2c09797b4268040f4750a52'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV155(): Instance1CollectiveProposalOfStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV159(): boolean {
        return this.getTypeHash() === 'e40293bf8d996e7135981492cb05da389901df511b5e9d61a28f811bf5420623'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV159(): Instance1CollectiveProposalOfStorageV159 {
        assert(this.isV159)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '9890baa3b0a5fc391ea6df8c25e2360250c5fd7068c146834dff47e69d90c0d6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV200(): Instance1CollectiveProposalOfStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV400(): boolean {
        return this.getTypeHash() === '15a0e4b1bb8aa34e251f4b51240698d1d8809dcdfae76e69a989f63ff2e2f343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV400(): Instance1CollectiveProposalOfStorageV400 {
        assert(this.isV400)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV501(): boolean {
        return this.getTypeHash() === '7ea473ab07ce006358199c6cc0efb0a7eb8e6761a5b9b605ad35bcd1df91119f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV501(): Instance1CollectiveProposalOfStorageV501 {
        assert(this.isV501)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV600(): boolean {
        return this.getTypeHash() === '15a0e4b1bb8aa34e251f4b51240698d1d8809dcdfae76e69a989f63ff2e2f343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV600(): Instance1CollectiveProposalOfStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV701(): boolean {
        return this.getTypeHash() === 'b867b08a01f2d55a9bec2d3367a3b089ee619970922048bd0b72a53a1aa06bf4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV701(): Instance1CollectiveProposalOfStorageV701 {
        assert(this.isV701)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV49 {
    get(key: Uint8Array): Promise<(v49.Proposal | undefined)>
    getAll(): Promise<v49.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v49.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV53 {
    get(key: Uint8Array): Promise<(v53.Proposal | undefined)>
    getAll(): Promise<v53.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v53.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v53.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v53.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v53.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v53.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV155 {
    get(key: Uint8Array): Promise<(v155.Proposal | undefined)>
    getAll(): Promise<v155.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v155.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v155.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v155.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v155.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v155.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV159 {
    get(key: Uint8Array): Promise<(v159.Proposal | undefined)>
    getAll(): Promise<v159.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v159.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v159.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v159.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v159.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v159.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV200 {
    get(key: Uint8Array): Promise<(v200.Proposal | undefined)>
    getAll(): Promise<v200.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV400 {
    get(key: Uint8Array): Promise<(v400.Proposal | undefined)>
    getAll(): Promise<v400.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v400.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v400.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v400.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v400.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v400.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV501 {
    get(key: Uint8Array): Promise<(v501.Proposal | undefined)>
    getAll(): Promise<v501.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v501.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v501.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v501.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v501.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v501.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV600 {
    get(key: Uint8Array): Promise<(v600.Proposal | undefined)>
    getAll(): Promise<v600.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v600.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v600.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v600.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v600.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v600.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV701 {
    get(key: Uint8Array): Promise<(v701.Proposal | undefined)>
    getAll(): Promise<v701.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v701.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v701.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v701.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v701.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v701.Proposal][]>
}

export class Instance1CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV49(): Instance1CollectiveProposalsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance1CollectiveProposalsStorageV49 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '2c6357c74e2bb2db1ec38121ba748a5e0208f0f891cb58bf6b558e63204dc875'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV49(): Instance1CollectiveVotingStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance1CollectiveVotingStorageV49 {
    get(key: Uint8Array): Promise<(v49.Votes | undefined)>
    getAll(): Promise<v49.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v49.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Votes][]>
}

export class Instance2CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV49(): Instance2CollectiveMembersStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance2CollectiveMembersStorageV49 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1660936d4028b791703af3ae985bc49e73619feaf378f3fe474e68b98897138f'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV49(): Instance2CollectivePrimeStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface Instance2CollectivePrimeStorageV49 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance2CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV49(): Instance2CollectiveProposalCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance2CollectiveProposalCountStorageV49 {
    get(): Promise<number>
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '8ca82453861f38ca55a75abe2ddba8a95fc8c769166f39d8b6a7577f159816ae'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV49(): Instance2CollectiveProposalOfStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV53(): boolean {
        return this.getTypeHash() === '459a807b868907d27334e796710b62a9bf93cde9ce4991ebff0343c895735b36'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV53(): Instance2CollectiveProposalOfStorageV53 {
        assert(this.isV53)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '9651e3cff016716f006cb870ae8c3dbf96240c78b2c09797b4268040f4750a52'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV155(): Instance2CollectiveProposalOfStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV159(): boolean {
        return this.getTypeHash() === 'e40293bf8d996e7135981492cb05da389901df511b5e9d61a28f811bf5420623'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV159(): Instance2CollectiveProposalOfStorageV159 {
        assert(this.isV159)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '9890baa3b0a5fc391ea6df8c25e2360250c5fd7068c146834dff47e69d90c0d6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV200(): Instance2CollectiveProposalOfStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV400(): boolean {
        return this.getTypeHash() === '15a0e4b1bb8aa34e251f4b51240698d1d8809dcdfae76e69a989f63ff2e2f343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV400(): Instance2CollectiveProposalOfStorageV400 {
        assert(this.isV400)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV501(): boolean {
        return this.getTypeHash() === '7ea473ab07ce006358199c6cc0efb0a7eb8e6761a5b9b605ad35bcd1df91119f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV501(): Instance2CollectiveProposalOfStorageV501 {
        assert(this.isV501)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV600(): boolean {
        return this.getTypeHash() === '15a0e4b1bb8aa34e251f4b51240698d1d8809dcdfae76e69a989f63ff2e2f343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV600(): Instance2CollectiveProposalOfStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV701(): boolean {
        return this.getTypeHash() === 'b867b08a01f2d55a9bec2d3367a3b089ee619970922048bd0b72a53a1aa06bf4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV701(): Instance2CollectiveProposalOfStorageV701 {
        assert(this.isV701)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV49 {
    get(key: Uint8Array): Promise<(v49.Proposal | undefined)>
    getAll(): Promise<v49.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v49.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV53 {
    get(key: Uint8Array): Promise<(v53.Proposal | undefined)>
    getAll(): Promise<v53.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v53.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v53.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v53.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v53.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v53.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV155 {
    get(key: Uint8Array): Promise<(v155.Proposal | undefined)>
    getAll(): Promise<v155.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v155.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v155.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v155.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v155.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v155.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV159 {
    get(key: Uint8Array): Promise<(v159.Proposal | undefined)>
    getAll(): Promise<v159.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v159.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v159.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v159.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v159.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v159.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV200 {
    get(key: Uint8Array): Promise<(v200.Proposal | undefined)>
    getAll(): Promise<v200.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV400 {
    get(key: Uint8Array): Promise<(v400.Proposal | undefined)>
    getAll(): Promise<v400.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v400.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v400.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v400.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v400.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v400.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV501 {
    get(key: Uint8Array): Promise<(v501.Proposal | undefined)>
    getAll(): Promise<v501.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v501.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v501.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v501.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v501.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v501.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV600 {
    get(key: Uint8Array): Promise<(v600.Proposal | undefined)>
    getAll(): Promise<v600.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v600.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v600.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v600.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v600.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v600.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV701 {
    get(key: Uint8Array): Promise<(v701.Proposal | undefined)>
    getAll(): Promise<v701.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v701.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v701.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v701.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v701.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v701.Proposal][]>
}

export class Instance2CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV49(): Instance2CollectiveProposalsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance2CollectiveProposalsStorageV49 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '2c6357c74e2bb2db1ec38121ba748a5e0208f0f891cb58bf6b558e63204dc875'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV49(): Instance2CollectiveVotingStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance2CollectiveVotingStorageV49 {
    get(key: Uint8Array): Promise<(v49.Votes | undefined)>
    getAll(): Promise<v49.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v49.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Votes][]>
}

export class LocalAssetsAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'LocalAssets'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The holdings of a specific account for a specific asset.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === 'df8baa2f6095d45e8c32663fa440c26614937785414ee9ea15928e30910764ff'
    }

    /**
     *  The holdings of a specific account for a specific asset.
     */
    get asV1401(): LocalAssetsAccountStorageV1401 {
        assert(this.isV1401)
        return this as any
    }
}

/**
 *  The holdings of a specific account for a specific asset.
 */
export interface LocalAssetsAccountStorageV1401 {
    get(key1: bigint, key2: Uint8Array): Promise<(v1401.AssetAccount | undefined)>
    getAll(): Promise<v1401.AssetAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v1401.AssetAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v1401.AssetAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v1401.AssetAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v1401.AssetAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v1401.AssetAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v1401.AssetAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v1401.AssetAccount][]>
}

export class LocalAssetsApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'LocalAssets'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Approved balance transfers. First balance is the amount approved for transfer. Second
     *  is the amount of `T::Currency` reserved for storing this.
     *  First key is the asset ID, second key is the owner and third key is the delegate.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === 'e55f2bf4e404947921a8e14efcac29102c0463016ae209f48dbdaee252d65a37'
    }

    /**
     *  Approved balance transfers. First balance is the amount approved for transfer. Second
     *  is the amount of `T::Currency` reserved for storing this.
     *  First key is the asset ID, second key is the owner and third key is the delegate.
     */
    get asV1401(): LocalAssetsApprovalsStorageV1401 {
        assert(this.isV1401)
        return this as any
    }
}

/**
 *  Approved balance transfers. First balance is the amount approved for transfer. Second
 *  is the amount of `T::Currency` reserved for storing this.
 *  First key is the asset ID, second key is the owner and third key is the delegate.
 */
export interface LocalAssetsApprovalsStorageV1401 {
    get(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<(v1401.Approval | undefined)>
    getAll(): Promise<v1401.Approval[]>
    getMany(keys: [bigint, Uint8Array, Uint8Array][]): Promise<(v1401.Approval | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array, key3: Uint8Array): AsyncIterable<[bigint, Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v1401.Approval][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v1401.Approval][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v1401.Approval][]>
    getPairs(key1: bigint, key2: Uint8Array, key3: Uint8Array): Promise<[k: [bigint, Uint8Array, Uint8Array], v: v1401.Approval][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v1401.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v1401.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v1401.Approval][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array, key3: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array, Uint8Array], v: v1401.Approval][]>
}

export class LocalAssetsAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'LocalAssets'
    }

    protected getName() {
        return 'Asset'
    }

    /**
     *  Details of an asset.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === 'a773fde1dd7a052d5bc865fdd7ffba9fed0a1840f51dee25c7a6416d0e751e2e'
    }

    /**
     *  Details of an asset.
     */
    get asV1401(): LocalAssetsAssetStorageV1401 {
        assert(this.isV1401)
        return this as any
    }
}

/**
 *  Details of an asset.
 */
export interface LocalAssetsAssetStorageV1401 {
    get(key: bigint): Promise<(v1401.AssetDetails | undefined)>
    getAll(): Promise<v1401.AssetDetails[]>
    getMany(keys: bigint[]): Promise<(v1401.AssetDetails | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1401.AssetDetails][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1401.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1401.AssetDetails][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1401.AssetDetails][]>
}

export class LocalAssetsMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'LocalAssets'
    }

    protected getName() {
        return 'Metadata'
    }

    /**
     *  Metadata of an asset.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === '61e62fb4641e931b380be1690bd1571bb1c974c2abd9a8958d22bf2a3b91ce05'
    }

    /**
     *  Metadata of an asset.
     */
    get asV1401(): LocalAssetsMetadataStorageV1401 {
        assert(this.isV1401)
        return this as any
    }
}

/**
 *  Metadata of an asset.
 */
export interface LocalAssetsMetadataStorageV1401 {
    get(key: bigint): Promise<v1401.AssetMetadata>
    getAll(): Promise<v1401.AssetMetadata[]>
    getMany(keys: bigint[]): Promise<v1401.AssetMetadata[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1401.AssetMetadata][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1401.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1401.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1401.AssetMetadata][]>
}

export class MaintenanceModeMaintenanceModeStorage extends StorageBase {
    protected getPrefix() {
        return 'MaintenanceMode'
    }

    protected getName() {
        return 'MaintenanceMode'
    }

    /**
     *  Whether the site is in maintenance mode
     */
    get isV400(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether the site is in maintenance mode
     */
    get asV400(): MaintenanceModeMaintenanceModeStorageV400 {
        assert(this.isV400)
        return this as any
    }
}

/**
 *  Whether the site is in maintenance mode
 */
export interface MaintenanceModeMaintenanceModeStorageV400 {
    get(): Promise<boolean>
}

export class MigrationsFullyUpgradedStorage extends StorageBase {
    protected getPrefix() {
        return 'Migrations'
    }

    protected getName() {
        return 'FullyUpgraded'
    }

    /**
     *  True if all required migrations have completed
     */
    get isV800(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if all required migrations have completed
     */
    get asV800(): MigrationsFullyUpgradedStorageV800 {
        assert(this.isV800)
        return this as any
    }
}

/**
 *  True if all required migrations have completed
 */
export interface MigrationsFullyUpgradedStorageV800 {
    get(): Promise<boolean>
}

export class MigrationsMigrationStateStorage extends StorageBase {
    protected getPrefix() {
        return 'Migrations'
    }

    protected getName() {
        return 'MigrationState'
    }

    /**
     *  MigrationState tracks the progress of a migration.
     *  Maps name (Vec<u8>) -> whether or not migration has been completed (bool)
     */
    get isV800(): boolean {
        return this.getTypeHash() === '66f595a69be861a7ae876f1faab7fab701c8b9ef12c6e69d769fe069d00a5d08'
    }

    /**
     *  MigrationState tracks the progress of a migration.
     *  Maps name (Vec<u8>) -> whether or not migration has been completed (bool)
     */
    get asV800(): MigrationsMigrationStateStorageV800 {
        assert(this.isV800)
        return this as any
    }
}

/**
 *  MigrationState tracks the progress of a migration.
 *  Maps name (Vec<u8>) -> whether or not migration has been completed (bool)
 */
export interface MigrationsMigrationStateStorageV800 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class MoonbeamOrbitersAccountLookupOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'MoonbeamOrbiters'
    }

    protected getName() {
        return 'AccountLookupOverride'
    }

    /**
     *  Account lookup override
     */
    get isV1502(): boolean {
        return this.getTypeHash() === 'ce9f355663c5f98fb31ad136ba9ac783495d7a41a2828555142337e51978a570'
    }

    /**
     *  Account lookup override
     */
    get asV1502(): MoonbeamOrbitersAccountLookupOverrideStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  Account lookup override
 */
export interface MoonbeamOrbitersAccountLookupOverrideStorageV1502 {
    get(key: Uint8Array): Promise<((Uint8Array | undefined) | undefined)>
    getAll(): Promise<(Uint8Array | undefined)[]>
    getMany(keys: Uint8Array[]): Promise<((Uint8Array | undefined) | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: (Uint8Array | undefined)][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: (Uint8Array | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: (Uint8Array | undefined)][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: (Uint8Array | undefined)][]>
}

export class MoonbeamOrbitersCollatorsPoolStorage extends StorageBase {
    protected getPrefix() {
        return 'MoonbeamOrbiters'
    }

    protected getName() {
        return 'CollatorsPool'
    }

    /**
     *  Current orbiters, with their "parent" collator
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '34c0d9d6219a209717612e778485f9229be31a3f329039b8fce0b9862a27b84a'
    }

    /**
     *  Current orbiters, with their "parent" collator
     */
    get asV1502(): MoonbeamOrbitersCollatorsPoolStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  Current orbiters, with their "parent" collator
 */
export interface MoonbeamOrbitersCollatorsPoolStorageV1502 {
    get(key: Uint8Array): Promise<(v1502.CollatorPoolInfo | undefined)>
    getAll(): Promise<v1502.CollatorPoolInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v1502.CollatorPoolInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1502.CollatorPoolInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1502.CollatorPoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1502.CollatorPoolInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1502.CollatorPoolInfo][]>
}

export class MoonbeamOrbitersCounterForCollatorsPoolStorage extends StorageBase {
    protected getPrefix() {
        return 'MoonbeamOrbiters'
    }

    protected getName() {
        return 'CounterForCollatorsPool'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1502(): MoonbeamOrbitersCounterForCollatorsPoolStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface MoonbeamOrbitersCounterForCollatorsPoolStorageV1502 {
    get(): Promise<number>
}

export class MoonbeamOrbitersCurrentRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'MoonbeamOrbiters'
    }

    protected getName() {
        return 'CurrentRound'
    }

    /**
     *  Current round index
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current round index
     */
    get asV1502(): MoonbeamOrbitersCurrentRoundStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  Current round index
 */
export interface MoonbeamOrbitersCurrentRoundStorageV1502 {
    get(): Promise<number>
}

export class MoonbeamOrbitersForceRotationStorage extends StorageBase {
    protected getPrefix() {
        return 'MoonbeamOrbiters'
    }

    protected getName() {
        return 'ForceRotation'
    }

    /**
     *  If true, it forces the rotation at the next round.
     *  A use case: when changing RotatePeriod, you need a migration code that sets this value to
     *  true to avoid holes in OrbiterPerRound.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  If true, it forces the rotation at the next round.
     *  A use case: when changing RotatePeriod, you need a migration code that sets this value to
     *  true to avoid holes in OrbiterPerRound.
     */
    get asV1801(): MoonbeamOrbitersForceRotationStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  If true, it forces the rotation at the next round.
 *  A use case: when changing RotatePeriod, you need a migration code that sets this value to
 *  true to avoid holes in OrbiterPerRound.
 */
export interface MoonbeamOrbitersForceRotationStorageV1801 {
    get(): Promise<boolean>
}

export class MoonbeamOrbitersMinOrbiterDepositStorage extends StorageBase {
    protected getPrefix() {
        return 'MoonbeamOrbiters'
    }

    protected getName() {
        return 'MinOrbiterDeposit'
    }

    /**
     *  Minimum deposit required to be registered as an orbiter
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '8339208fdff8cc2cbfb9fe1daa9bd886d23b8951771ccf6b00d8cb68da55bcc5'
    }

    /**
     *  Minimum deposit required to be registered as an orbiter
     */
    get asV1502(): MoonbeamOrbitersMinOrbiterDepositStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  Minimum deposit required to be registered as an orbiter
 */
export interface MoonbeamOrbitersMinOrbiterDepositStorageV1502 {
    get(): Promise<(bigint | undefined)>
}

export class MoonbeamOrbitersOrbiterPerRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'MoonbeamOrbiters'
    }

    protected getName() {
        return 'OrbiterPerRound'
    }

    /**
     *  Store active orbiter per round and per parent collator
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '83547351f3717990191d95c0afad1bb692bc9b0bf0f90145092e5295494619f3'
    }

    /**
     *  Store active orbiter per round and per parent collator
     */
    get asV1502(): MoonbeamOrbitersOrbiterPerRoundStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  Store active orbiter per round and per parent collator
 */
export interface MoonbeamOrbitersOrbiterPerRoundStorageV1502 {
    get(key1: number, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

export class MoonbeamOrbitersRegisteredOrbiterStorage extends StorageBase {
    protected getPrefix() {
        return 'MoonbeamOrbiters'
    }

    protected getName() {
        return 'RegisteredOrbiter'
    }

    /**
     *  Check if account is an orbiter
     */
    get isV1605(): boolean {
        return this.getTypeHash() === '6e0920fc680d2e6bf5e1c0c64c6775fe2e1903c495288307e1e61e8a0062c75f'
    }

    /**
     *  Check if account is an orbiter
     */
    get asV1605(): MoonbeamOrbitersRegisteredOrbiterStorageV1605 {
        assert(this.isV1605)
        return this as any
    }
}

/**
 *  Check if account is an orbiter
 */
export interface MoonbeamOrbitersRegisteredOrbiterStorageV1605 {
    get(key: Uint8Array): Promise<(boolean | undefined)>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<(boolean | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV49(): ParachainInfoParachainIdStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageV49 {
    get(): Promise<number>
}

export class ParachainStakingAtStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'AtStake'
    }

    /**
     *  Snapshot of collator nomination stake at the start of the round
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'a444b1f132ec52ca32c519c12866029a3a1b1c0212226ce5eca83233883e6a5c'
    }

    /**
     *  Snapshot of collator nomination stake at the start of the round
     */
    get asV49(): ParachainStakingAtStakeStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Snapshot of collator delegation stake at the start of the round
     */
    get isV1001(): boolean {
        return this.getTypeHash() === '498e6e0c3257105edc64f9100a1c4bcf42fef97e93dc66ac84bbdbafcd36ec97'
    }

    /**
     *  Snapshot of collator delegation stake at the start of the round
     */
    get asV1001(): ParachainStakingAtStakeStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Snapshot of collator delegation stake at the start of the round
     */
    get isV1901(): boolean {
        return this.getTypeHash() === '1e10cf71ca42f20e45dc92593fdb40d40ccbf48515f20132e1e903343567271d'
    }

    /**
     *  Snapshot of collator delegation stake at the start of the round
     */
    get asV1901(): ParachainStakingAtStakeStorageV1901 {
        assert(this.isV1901)
        return this as any
    }
}

/**
 *  Snapshot of collator nomination stake at the start of the round
 */
export interface ParachainStakingAtStakeStorageV49 {
    get(key1: number, key2: Uint8Array): Promise<v49.CollatorSnapshot>
    getAll(): Promise<v49.CollatorSnapshot[]>
    getMany(keys: [number, Uint8Array][]): Promise<v49.CollatorSnapshot[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v49.CollatorSnapshot][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v49.CollatorSnapshot][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v49.CollatorSnapshot][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v49.CollatorSnapshot][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v49.CollatorSnapshot][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v49.CollatorSnapshot][]>
}

/**
 *  Snapshot of collator delegation stake at the start of the round
 */
export interface ParachainStakingAtStakeStorageV1001 {
    get(key1: number, key2: Uint8Array): Promise<v1001.CollatorSnapshot>
    getAll(): Promise<v1001.CollatorSnapshot[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1001.CollatorSnapshot[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1001.CollatorSnapshot][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1001.CollatorSnapshot][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1001.CollatorSnapshot][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1001.CollatorSnapshot][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1001.CollatorSnapshot][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1001.CollatorSnapshot][]>
}

/**
 *  Snapshot of collator delegation stake at the start of the round
 */
export interface ParachainStakingAtStakeStorageV1901 {
    get(key1: number, key2: Uint8Array): Promise<v1901.CollatorSnapshot>
    getAll(): Promise<v1901.CollatorSnapshot[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1901.CollatorSnapshot[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1901.CollatorSnapshot][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1901.CollatorSnapshot][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1901.CollatorSnapshot][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1901.CollatorSnapshot][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1901.CollatorSnapshot][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1901.CollatorSnapshot][]>
}

export class ParachainStakingAutoCompoundingDelegationsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'AutoCompoundingDelegations'
    }

    /**
     *  Stores auto-compounding configuration per collator.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === '261953c708082cc2f339a4bb0af728edf40a16c8b9021ccaf86751dc76a76a93'
    }

    /**
     *  Stores auto-compounding configuration per collator.
     */
    get asV1901(): ParachainStakingAutoCompoundingDelegationsStorageV1901 {
        assert(this.isV1901)
        return this as any
    }
}

/**
 *  Stores auto-compounding configuration per collator.
 */
export interface ParachainStakingAutoCompoundingDelegationsStorageV1901 {
    get(key: Uint8Array): Promise<v1901.AutoCompoundConfig[]>
    getAll(): Promise<v1901.AutoCompoundConfig[][]>
    getMany(keys: Uint8Array[]): Promise<v1901.AutoCompoundConfig[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1901.AutoCompoundConfig[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1901.AutoCompoundConfig[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1901.AutoCompoundConfig[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1901.AutoCompoundConfig[]][]>
}

export class ParachainStakingAwardedPtsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'AwardedPts'
    }

    /**
     *  Points for each collator per round
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'fd85f35a329a310dfa56b4ca6bf97f6381c27ffec1981df0b0f0a1d9edb559de'
    }

    /**
     *  Points for each collator per round
     */
    get asV49(): ParachainStakingAwardedPtsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Points for each collator per round
 */
export interface ParachainStakingAwardedPtsStorageV49 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ParachainStakingBottomDelegationsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'BottomDelegations'
    }

    /**
     *  Bottom delegations for collator candidate
     */
    get isV1201(): boolean {
        return this.getTypeHash() === 'e681b7cbb9992622456e4ee66d20daa7968a64b6a52ef599f5992850855cc3ee'
    }

    /**
     *  Bottom delegations for collator candidate
     */
    get asV1201(): ParachainStakingBottomDelegationsStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  Bottom delegations for collator candidate
 */
export interface ParachainStakingBottomDelegationsStorageV1201 {
    get(key: Uint8Array): Promise<(v1201.Delegations | undefined)>
    getAll(): Promise<v1201.Delegations[]>
    getMany(keys: Uint8Array[]): Promise<(v1201.Delegations | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1201.Delegations][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1201.Delegations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1201.Delegations][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1201.Delegations][]>
}

export class ParachainStakingCandidateInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'CandidateInfo'
    }

    /**
     *  Get collator candidate info associated with an account if account is candidate else None
     */
    get isV1201(): boolean {
        return this.getTypeHash() === '248231639cd86f1a3ffea0da2b9ed3fc64e1b7784d3759f68d733ac1ef08db19'
    }

    /**
     *  Get collator candidate info associated with an account if account is candidate else None
     */
    get asV1201(): ParachainStakingCandidateInfoStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  Get collator candidate info associated with an account if account is candidate else None
 */
export interface ParachainStakingCandidateInfoStorageV1201 {
    get(key: Uint8Array): Promise<(v1201.CandidateMetadata | undefined)>
    getAll(): Promise<v1201.CandidateMetadata[]>
    getMany(keys: Uint8Array[]): Promise<(v1201.CandidateMetadata | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1201.CandidateMetadata][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1201.CandidateMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1201.CandidateMetadata][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1201.CandidateMetadata][]>
}

export class ParachainStakingCandidatePoolStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'CandidatePool'
    }

    /**
     *  The pool of collator candidates, each with their total backing stake
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'e826052562b2cdb0540144759174be540317c4ce50a6f16a59f56e4875792b1c'
    }

    /**
     *  The pool of collator candidates, each with their total backing stake
     */
    get asV49(): ParachainStakingCandidatePoolStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The pool of collator candidates, each with their total backing stake
 */
export interface ParachainStakingCandidatePoolStorageV49 {
    get(): Promise<v49.Bond[]>
}

export class ParachainStakingCandidateStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'CandidateState'
    }

    /**
     *  Get collator candidate state associated with an account if account is a candidate else None
     */
    get isV1001(): boolean {
        return this.getTypeHash() === '84ab01b9f5d971571bb4cd8288174dc552c917250ba2c5256263959a40438f09'
    }

    /**
     *  Get collator candidate state associated with an account if account is a candidate else None
     */
    get asV1001(): ParachainStakingCandidateStateStorageV1001 {
        assert(this.isV1001)
        return this as any
    }
}

/**
 *  Get collator candidate state associated with an account if account is a candidate else None
 */
export interface ParachainStakingCandidateStateStorageV1001 {
    get(key: Uint8Array): Promise<(v1001.CollatorCandidate | undefined)>
    getAll(): Promise<v1001.CollatorCandidate[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.CollatorCandidate | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.CollatorCandidate][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.CollatorCandidate][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.CollatorCandidate][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.CollatorCandidate][]>
}

export class ParachainStakingCollatorCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'CollatorCommission'
    }

    /**
     *  Commission percent taken off of rewards for all collators
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Commission percent taken off of rewards for all collators
     */
    get asV49(): ParachainStakingCollatorCommissionStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Commission percent taken off of rewards for all collators
 */
export interface ParachainStakingCollatorCommissionStorageV49 {
    get(): Promise<number>
}

export class ParachainStakingCollatorReserveToLockMigrationsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'CollatorReserveToLockMigrations'
    }

    /**
     *  Temporary storage item to track whether a given collator's reserve has been migrated.
     */
    get isV1701(): boolean {
        return this.getTypeHash() === 'ecc68acda02cc8f77850a99cfbd18a1d08c36d877d8b5986e0a1f0db4eaefd2c'
    }

    /**
     *  Temporary storage item to track whether a given collator's reserve has been migrated.
     */
    get asV1701(): ParachainStakingCollatorReserveToLockMigrationsStorageV1701 {
        assert(this.isV1701)
        return this as any
    }
}

/**
 *  Temporary storage item to track whether a given collator's reserve has been migrated.
 */
export interface ParachainStakingCollatorReserveToLockMigrationsStorageV1701 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class ParachainStakingCollatorStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'CollatorState'
    }

    /**
     *  Get collator state associated with an account if account is collating else None
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'e021f25b8536c116b9fa878663be6fd4f263d9d967d77a19134dc59a9cee73f6'
    }

    /**
     *  Get collator state associated with an account if account is collating else None
     */
    get asV49(): ParachainStakingCollatorStateStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Get collator state associated with an account if account is collating else None
 */
export interface ParachainStakingCollatorStateStorageV49 {
    get(key: Uint8Array): Promise<(v49.Collator | undefined)>
    getAll(): Promise<v49.Collator[]>
    getMany(keys: Uint8Array[]): Promise<(v49.Collator | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Collator][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Collator][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Collator][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Collator][]>
}

export class ParachainStakingCollatorState2Storage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'CollatorState2'
    }

    /**
     *  Get collator state associated with an account if account is collating else None
     */
    get isV53(): boolean {
        return this.getTypeHash() === 'a4d9c3541b410bd0ebf9e6919cad26ad7aa3481dd09c1495650af46ea30787a9'
    }

    /**
     *  Get collator state associated with an account if account is collating else None
     */
    get asV53(): ParachainStakingCollatorState2StorageV53 {
        assert(this.isV53)
        return this as any
    }
}

/**
 *  Get collator state associated with an account if account is collating else None
 */
export interface ParachainStakingCollatorState2StorageV53 {
    get(key: Uint8Array): Promise<(v53.Collator2 | undefined)>
    getAll(): Promise<v53.Collator2[]>
    getMany(keys: Uint8Array[]): Promise<(v53.Collator2 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v53.Collator2][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v53.Collator2][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v53.Collator2][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v53.Collator2][]>
}

export class ParachainStakingDelayNominationExitsMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'DelayNominationExitsMigration'
    }

    /**
     *  True if executed, false by default
     */
    get isV200(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if executed, false by default
     */
    get asV200(): ParachainStakingDelayNominationExitsMigrationStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  True if executed, false by default
 */
export interface ParachainStakingDelayNominationExitsMigrationStorageV200 {
    get(): Promise<boolean>
}

export class ParachainStakingDelayedPayoutsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'DelayedPayouts'
    }

    /**
     *  Delayed payouts
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'c6b2ab1dc6cebec99486fb97e13b7ec0e06f244afbccf94e53a9bead67d691fb'
    }

    /**
     *  Delayed payouts
     */
    get asV1101(): ParachainStakingDelayedPayoutsStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Delayed payouts
 */
export interface ParachainStakingDelayedPayoutsStorageV1101 {
    get(key: number): Promise<(v1101.DelayedPayout | undefined)>
    getAll(): Promise<v1101.DelayedPayout[]>
    getMany(keys: number[]): Promise<(v1101.DelayedPayout | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1101.DelayedPayout][]>
    getPairs(key: number): Promise<[k: number, v: v1101.DelayedPayout][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1101.DelayedPayout][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1101.DelayedPayout][]>
}

export class ParachainStakingDelegationScheduledRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'DelegationScheduledRequests'
    }

    /**
     *  Stores outstanding delegation requests per collator.
     */
    get isV1502(): boolean {
        return this.getTypeHash() === 'd4fec4a1b433b7a87a3191d942cd2f89047036df0d1b54cbde3a21b372dc0864'
    }

    /**
     *  Stores outstanding delegation requests per collator.
     */
    get asV1502(): ParachainStakingDelegationScheduledRequestsStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  Stores outstanding delegation requests per collator.
 */
export interface ParachainStakingDelegationScheduledRequestsStorageV1502 {
    get(key: Uint8Array): Promise<v1502.ScheduledRequest[]>
    getAll(): Promise<v1502.ScheduledRequest[][]>
    getMany(keys: Uint8Array[]): Promise<v1502.ScheduledRequest[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1502.ScheduledRequest[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1502.ScheduledRequest[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1502.ScheduledRequest[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1502.ScheduledRequest[]][]>
}

export class ParachainStakingDelegatorReserveToLockMigrationsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'DelegatorReserveToLockMigrations'
    }

    /**
     *  Temporary storage item to track whether a given delegator's reserve has been migrated.
     */
    get isV1701(): boolean {
        return this.getTypeHash() === 'ecc68acda02cc8f77850a99cfbd18a1d08c36d877d8b5986e0a1f0db4eaefd2c'
    }

    /**
     *  Temporary storage item to track whether a given delegator's reserve has been migrated.
     */
    get asV1701(): ParachainStakingDelegatorReserveToLockMigrationsStorageV1701 {
        assert(this.isV1701)
        return this as any
    }
}

/**
 *  Temporary storage item to track whether a given delegator's reserve has been migrated.
 */
export interface ParachainStakingDelegatorReserveToLockMigrationsStorageV1701 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class ParachainStakingDelegatorStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'DelegatorState'
    }

    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get isV1001(): boolean {
        return this.getTypeHash() === '03dfb3b8e1ca16deb35d7040cc81f72b135e75c4caeea578cfc2294e1f1f41ad'
    }

    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get asV1001(): ParachainStakingDelegatorStateStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '637263cfee3190d24faafd4e41f925a782ec1a9b5d80de08bd6ae287d0f0a10a'
    }

    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get asV1502(): ParachainStakingDelegatorStateStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  Get delegator state associated with an account if account is delegating else None
 */
export interface ParachainStakingDelegatorStateStorageV1001 {
    get(key: Uint8Array): Promise<(v1001.Delegator | undefined)>
    getAll(): Promise<v1001.Delegator[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.Delegator | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.Delegator][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.Delegator][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.Delegator][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.Delegator][]>
}

/**
 *  Get delegator state associated with an account if account is delegating else None
 */
export interface ParachainStakingDelegatorStateStorageV1502 {
    get(key: Uint8Array): Promise<(v1502.Delegator | undefined)>
    getAll(): Promise<v1502.Delegator[]>
    getMany(keys: Uint8Array[]): Promise<(v1502.Delegator | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1502.Delegator][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1502.Delegator][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1502.Delegator][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1502.Delegator][]>
}

export class ParachainStakingExitQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'ExitQueue'
    }

    /**
     *  A queue of collators awaiting exit `BondDuration` delay after request
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'e826052562b2cdb0540144759174be540317c4ce50a6f16a59f56e4875792b1c'
    }

    /**
     *  A queue of collators awaiting exit `BondDuration` delay after request
     */
    get asV49(): ParachainStakingExitQueueStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  DEPRECATED
     *  A queue of collators awaiting exit
     */
    get isV200(): boolean {
        return this.getTypeHash() === '3f6931faefbb194f1576b843c404a2d07ccd04e49a0c136be6d6af6f89ae6263'
    }

    /**
     *  DEPRECATED
     *  A queue of collators awaiting exit
     */
    get asV200(): ParachainStakingExitQueueStorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  A queue of collators awaiting exit `BondDuration` delay after request
 */
export interface ParachainStakingExitQueueStorageV49 {
    get(): Promise<v49.Bond[]>
}

/**
 *  DEPRECATED
 *  A queue of collators awaiting exit
 */
export interface ParachainStakingExitQueueStorageV200 {
    get(): Promise<[Uint8Array, number][]>
}

export class ParachainStakingExitQueue2Storage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'ExitQueue2'
    }

    /**
     *  A queue of collators and nominators awaiting exit
     */
    get isV200(): boolean {
        return this.getTypeHash() === '5f3db71adbcfb6dc185fde2adc834314e8c5cfd18908e82e1238afa185acabad'
    }

    /**
     *  A queue of collators and nominators awaiting exit
     */
    get asV200(): ParachainStakingExitQueue2StorageV200 {
        assert(this.isV200)
        return this as any
    }
}

/**
 *  A queue of collators and nominators awaiting exit
 */
export interface ParachainStakingExitQueue2StorageV200 {
    get(): Promise<v200.ExitQ>
}

export class ParachainStakingFixBondLessMigrationExecutedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'FixBondLessMigrationExecuted'
    }

    /**
     *  Temporary to check if migration has run
     */
    get isV501(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Temporary to check if migration has run
     */
    get asV501(): ParachainStakingFixBondLessMigrationExecutedStorageV501 {
        assert(this.isV501)
        return this as any
    }
}

/**
 *  Temporary to check if migration has run
 */
export interface ParachainStakingFixBondLessMigrationExecutedStorageV501 {
    get(): Promise<boolean>
}

export class ParachainStakingInflationConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'InflationConfig'
    }

    /**
     *  Inflation configuration
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'c8e7064a13ebcd51a4ff87124de1d79c5482ddb97b63d7b9f431be1dacfcb089'
    }

    /**
     *  Inflation configuration
     */
    get asV49(): ParachainStakingInflationConfigStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Inflation configuration
 */
export interface ParachainStakingInflationConfigStorageV49 {
    get(): Promise<v49.InflationInfo>
}

export class ParachainStakingNominatorStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'NominatorState'
    }

    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f801fe87581f7dbb6db044ddd5a7adbe0d0ea1596ad42a8ccd22aa28f6be3e8f'
    }

    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV49(): ParachainStakingNominatorStateStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Get nominator state associated with an account if account is nominating else None
 */
export interface ParachainStakingNominatorStateStorageV49 {
    get(key: Uint8Array): Promise<(v49.Nominator | undefined)>
    getAll(): Promise<v49.Nominator[]>
    getMany(keys: Uint8Array[]): Promise<(v49.Nominator | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Nominator][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Nominator][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Nominator][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Nominator][]>
}

export class ParachainStakingNominatorState2Storage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'NominatorState2'
    }

    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV200(): boolean {
        return this.getTypeHash() === 'adc9b2765bcd5aa9c2ac9f93cd108b87d508a8d5494c318bf18ee6f4b599b8ed'
    }

    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV200(): ParachainStakingNominatorState2StorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  DEPRECATED in favor of DelegatorState
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV1001(): boolean {
        return this.getTypeHash() === 'c33bf4fdf125c8070ffd27253f9a811a9a2b244a0af652bf531999872325e904'
    }

    /**
     *  DEPRECATED in favor of DelegatorState
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV1001(): ParachainStakingNominatorState2StorageV1001 {
        assert(this.isV1001)
        return this as any
    }
}

/**
 *  Get nominator state associated with an account if account is nominating else None
 */
export interface ParachainStakingNominatorState2StorageV200 {
    get(key: Uint8Array): Promise<(v200.Nominator2 | undefined)>
    getAll(): Promise<v200.Nominator2[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Nominator2 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Nominator2][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Nominator2][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Nominator2][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Nominator2][]>
}

/**
 *  DEPRECATED in favor of DelegatorState
 *  Get nominator state associated with an account if account is nominating else None
 */
export interface ParachainStakingNominatorState2StorageV1001 {
    get(key: Uint8Array): Promise<(v1001.Nominator2 | undefined)>
    getAll(): Promise<v1001.Nominator2[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.Nominator2 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.Nominator2][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.Nominator2][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.Nominator2][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.Nominator2][]>
}

export class ParachainStakingParachainBondInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'ParachainBondInfo'
    }

    /**
     *  Parachain bond config info { account, percent_of_inflation }
     */
    get isV49(): boolean {
        return this.getTypeHash() === '660ab7c9c655e6b148eb53daedb3865e1b72e0682732bdd3ee1d9a30ab468108'
    }

    /**
     *  Parachain bond config info { account, percent_of_inflation }
     */
    get asV49(): ParachainStakingParachainBondInfoStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Parachain bond config info { account, percent_of_inflation }
 */
export interface ParachainStakingParachainBondInfoStorageV49 {
    get(): Promise<v49.ParachainBondConfig>
}

export class ParachainStakingPointsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'Points'
    }

    /**
     *  Total points awarded to collators for block production in the round
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  Total points awarded to collators for block production in the round
     */
    get asV49(): ParachainStakingPointsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Total points awarded to collators for block production in the round
 */
export interface ParachainStakingPointsStorageV49 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ParachainStakingRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'Round'
    }

    /**
     *  Current round index and next round scheduled transition
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'b5f3d49d6ba2e559d598977dc55516a649f67db6a4edb6de43b94edb90800928'
    }

    /**
     *  Current round index and next round scheduled transition
     */
    get asV49(): ParachainStakingRoundStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Current round index and next round scheduled transition
 */
export interface ParachainStakingRoundStorageV49 {
    get(): Promise<v49.RoundInfo>
}

export class ParachainStakingSelectedCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'SelectedCandidates'
    }

    /**
     *  The collator candidates selected for the current round
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
    }

    /**
     *  The collator candidates selected for the current round
     */
    get asV49(): ParachainStakingSelectedCandidatesStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The collator candidates selected for the current round
 */
export interface ParachainStakingSelectedCandidatesStorageV49 {
    get(): Promise<Uint8Array[]>
}

export class ParachainStakingStakedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'Staked'
    }

    /**
     *  Total backing stake for selected candidates in the round
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  Total backing stake for selected candidates in the round
     */
    get asV49(): ParachainStakingStakedStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Total backing stake for selected candidates in the round
 */
export interface ParachainStakingStakedStorageV49 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class ParachainStakingTopDelegationsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'TopDelegations'
    }

    /**
     *  Top delegations for collator candidate
     */
    get isV1201(): boolean {
        return this.getTypeHash() === 'e681b7cbb9992622456e4ee66d20daa7968a64b6a52ef599f5992850855cc3ee'
    }

    /**
     *  Top delegations for collator candidate
     */
    get asV1201(): ParachainStakingTopDelegationsStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  Top delegations for collator candidate
 */
export interface ParachainStakingTopDelegationsStorageV1201 {
    get(key: Uint8Array): Promise<(v1201.Delegations | undefined)>
    getAll(): Promise<v1201.Delegations[]>
    getMany(keys: Uint8Array[]): Promise<(v1201.Delegations | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1201.Delegations][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1201.Delegations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1201.Delegations][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1201.Delegations][]>
}

export class ParachainStakingTotalStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'Total'
    }

    /**
     *  Total capital locked by this staking pallet
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total capital locked by this staking pallet
     */
    get asV49(): ParachainStakingTotalStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Total capital locked by this staking pallet
 */
export interface ParachainStakingTotalStorageV49 {
    get(): Promise<bigint>
}

export class ParachainStakingTotalSelectedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'TotalSelected'
    }

    /**
     *  The total candidates selected every round
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total candidates selected every round
     */
    get asV49(): ParachainStakingTotalSelectedStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The total candidates selected every round
 */
export interface ParachainStakingTotalSelectedStorageV49 {
    get(): Promise<number>
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AnnouncedHrmpMessagesPerCandidate'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asV49(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV49 {
    get(): Promise<number>
}

export class ParachainSystemAuthorizedUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AuthorizedUpgrade'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV49(): ParachainSystemAuthorizedUpgradeStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV49 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemCustomValidationHeadDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'CustomValidationHeadData'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asV1300(): ParachainSystemCustomValidationHeadDataStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageV1300 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemDidSetValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'DidSetValidationCode'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asV49(): ParachainSystemDidSetValidationCodeStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageV49 {
    get(): Promise<boolean>
}

export class ParachainSystemHostConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HostConfiguration'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'e7770235be9d14ed134fc6d0effb398cdedbf1010adc4f3555004a1d10de49d3'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV49(): ParachainSystemHostConfigurationStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV1300(): ParachainSystemHostConfigurationStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageV49 {
    get(): Promise<(v49.AbridgedHostConfiguration | undefined)>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageV1300 {
    get(): Promise<(v1300.V1AbridgedHostConfiguration | undefined)>
}

export class ParachainSystemHrmpOutboundMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpOutboundMessages'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV49(): ParachainSystemHrmpOutboundMessagesStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageV49 {
    get(): Promise<v49.OutboundHrmpMessage[]>
}

export class ParachainSystemHrmpWatermarkStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpWatermark'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV49(): ParachainSystemHrmpWatermarkStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageV49 {
    get(): Promise<number>
}

export class ParachainSystemLastDmqMqcHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastDmqMqcHead'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV49(): ParachainSystemLastDmqMqcHeadStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageV49 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemLastHrmpMqcHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastHrmpMqcHeads'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV49(): ParachainSystemLastHrmpMqcHeadsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageV49 {
    get(): Promise<[number, Uint8Array][]>
}

export class ParachainSystemLastRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastRelayChainBlockNumber'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asV1801(): ParachainSystemLastRelayChainBlockNumberStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageV1801 {
    get(): Promise<number>
}

export class ParachainSystemLastUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastUpgrade'
    }

    /**
     *  The last relay parent block number at which we signalled the code upgrade.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last relay parent block number at which we signalled the code upgrade.
     */
    get asV49(): ParachainSystemLastUpgradeStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The last relay parent block number at which we signalled the code upgrade.
 */
export interface ParachainSystemLastUpgradeStorageV49 {
    get(): Promise<number>
}

export class ParachainSystemNewValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'NewValidationCode'
    }

    /**
     *  New validation code that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  New validation code that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asV49(): ParachainSystemNewValidationCodeStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  New validation code that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageV49 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemPendingRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingRelayChainBlockNumber'
    }

    /**
     *  We need to store the new validation function for the span between
     *  setting it and applying it. If it has a
     *  value, then [`PendingValidationCode`] must have a real value, and
     *  together will coordinate the block number where the upgrade will happen.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  We need to store the new validation function for the span between
     *  setting it and applying it. If it has a
     *  value, then [`PendingValidationCode`] must have a real value, and
     *  together will coordinate the block number where the upgrade will happen.
     */
    get asV49(): ParachainSystemPendingRelayChainBlockNumberStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  We need to store the new validation function for the span between
 *  setting it and applying it. If it has a
 *  value, then [`PendingValidationCode`] must have a real value, and
 *  together will coordinate the block number where the upgrade will happen.
 */
export interface ParachainSystemPendingRelayChainBlockNumberStorageV49 {
    get(): Promise<(number | undefined)>
}

export class ParachainSystemPendingUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingUpwardMessages'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asV49(): ParachainSystemPendingUpwardMessagesStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageV49 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemPendingValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingValidationCode'
    }

    /**
     *  The new validation function we will upgrade to when the relay chain
     *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  The new validation function we will upgrade to when the relay chain
     *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
     */
    get asV49(): ParachainSystemPendingValidationCodeStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The new validation function we will upgrade to when the relay chain
 *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
 *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
 */
export interface ParachainSystemPendingValidationCodeStorageV49 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemProcessedDownwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ProcessedDownwardMessages'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV49(): ParachainSystemProcessedDownwardMessagesStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageV49 {
    get(): Promise<number>
}

export class ParachainSystemRelayStateProofStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelayStateProof'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV1401(): ParachainSystemRelayStateProofStorageV1401 {
        assert(this.isV1401)
        return this as any
    }
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelayStateProofStorageV1401 {
    get(): Promise<(v1401.StorageProof | undefined)>
}

export class ParachainSystemRelevantMessagingStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelevantMessagingState'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'a8475d62c5be29375db2b2aca3d863bedb2fca1d10144f0c95b18e80ccbd3559'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV49(): ParachainSystemRelevantMessagingStateStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV900(): ParachainSystemRelevantMessagingStateStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV49 {
    get(): Promise<(v49.MessagingStateSnapshot | undefined)>
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV900 {
    get(): Promise<(v900.MessagingStateSnapshot | undefined)>
}

export class ParachainSystemReservedDmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedDmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV49(): ParachainSystemReservedDmpWeightOverrideStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV1901(): ParachainSystemReservedDmpWeightOverrideStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV2000(): ParachainSystemReservedDmpWeightOverrideStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV49 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV1901 {
    get(): Promise<(v1901.Weight | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV2000 {
    get(): Promise<(v2000.Weight | undefined)>
}

export class ParachainSystemReservedXcmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedXcmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV49(): ParachainSystemReservedXcmpWeightOverrideStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV1901(): ParachainSystemReservedXcmpWeightOverrideStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV2000(): ParachainSystemReservedXcmpWeightOverrideStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV49 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV1901 {
    get(): Promise<(v1901.Weight | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV2000 {
    get(): Promise<(v2000.Weight | undefined)>
}

export class ParachainSystemUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get isV1001(): boolean {
        return this.getTypeHash() === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get asV1001(): ParachainSystemUpgradeRestrictionSignalStorageV1001 {
        assert(this.isV1001)
        return this as any
    }
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface ParachainSystemUpgradeRestrictionSignalStorageV1001 {
    get(): Promise<(v1001.V1UpgradeRestriction | undefined)>
}

export class ParachainSystemUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpwardMessages'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV49(): ParachainSystemUpwardMessagesStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageV49 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemValidationDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ValidationData'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     */
    get asV49(): ParachainSystemValidationDataStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 */
export interface ParachainSystemValidationDataStorageV49 {
    get(): Promise<(v49.PersistedValidationData | undefined)>
}

export class PolkadotXcmAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV1101(): PolkadotXcmAssetTrapsStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageV1101 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class PolkadotXcmCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV1101(): PolkadotXcmCurrentMigrationStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageV1101 {
    get(): Promise<(v1101.VersionMigrationStage | undefined)>
}

export class PolkadotXcmQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'ae8e3438dd16f0912a0a76dfeb9e62216e42277085497217b9181be5bd15251e'
    }

    /**
     *  The ongoing queries.
     */
    get asV1101(): PolkadotXcmQueriesStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asV1300(): PolkadotXcmQueriesStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV1101 {
    get(key: bigint): Promise<(v1101.QueryStatus | undefined)>
    getAll(): Promise<v1101.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v1101.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1101.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1101.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1101.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1101.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV1300 {
    get(key: bigint): Promise<(v1300.QueryStatus | undefined)>
    getAll(): Promise<v1300.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v1300.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1300.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1300.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1300.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1300.QueryStatus][]>
}

export class PolkadotXcmQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV1101(): PolkadotXcmQueryCounterStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageV1101 {
    get(): Promise<bigint>
}

export class PolkadotXcmSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV1101(): PolkadotXcmSafeXcmVersionStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageV1101 {
    get(): Promise<(number | undefined)>
}

export class PolkadotXcmSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV1101(): PolkadotXcmSupportedVersionStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV1101 {
    get(key1: number, key2: v1101.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v1101.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v1101.VersionedMultiLocation): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1101.VersionedMultiLocation): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v1101.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v1101.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v1101.VersionedMultiLocation): Promise<[k: [number, v1101.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1101.VersionedMultiLocation): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: number][]>
}

export class PolkadotXcmVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV1101(): PolkadotXcmVersionDiscoveryQueueStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV1101 {
    get(): Promise<[v1101.VersionedMultiLocation, number][]>
}

export class PolkadotXcmVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV1101(): PolkadotXcmVersionNotifiersStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV1101 {
    get(key1: number, key2: v1101.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v1101.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v1101.VersionedMultiLocation): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1101.VersionedMultiLocation): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v1101.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v1101.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v1101.VersionedMultiLocation): Promise<[k: [number, v1101.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1101.VersionedMultiLocation): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: bigint][]>
}

export class PolkadotXcmVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV1101(): PolkadotXcmVersionNotifyTargetsStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV1101 {
    get(key1: number, key2: v1101.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v1101.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v1101.VersionedMultiLocation): Promise<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1101.VersionedMultiLocation): AsyncIterable<[number, v1101.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v1101.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v1101.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v1101.VersionedMultiLocation): Promise<[k: [number, v1101.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1101.VersionedMultiLocation): AsyncIterable<[k: [number, v1101.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV2000(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV2000(): PreimagePreimageForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

export interface PreimagePreimageForStorageV2000 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '9a33bfa28cc58666dd8311814d92644200db23ab4156aa19d72d802536a0f95f'
    }

    /**
     *  The request status of a given hash.
     */
    get asV2000(): PreimageStatusForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.RequestStatus | undefined)>
    getAll(): Promise<v2000.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.RequestStatus][]>
}

export class ProxyAnnouncementsStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Announcements'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f5d7edf49418503d77f48a3bc25346597013b05c50167051427004bfa6b21923'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get asV49(): ProxyAnnouncementsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The announcements made by the proxy (key).
 */
export interface ProxyAnnouncementsStorageV49 {
    get(key: Uint8Array): Promise<[v49.ProxyAnnouncement[], bigint]>
    getAll(): Promise<[v49.ProxyAnnouncement[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v49.ProxyAnnouncement[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v49.ProxyAnnouncement[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v49.ProxyAnnouncement[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v49.ProxyAnnouncement[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v49.ProxyAnnouncement[], bigint]][]>
}

export class ProxyProxiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Proxies'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '6e0fc4ddf7d7f4e42fc6c55ce7b1e8711834fe772b1a7f450315029dc29b6abc'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV49(): ProxyProxiesStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV1701(): boolean {
        return this.getTypeHash() === 'd1dbc24ce0ac2aac1f62e8c9205917c3a0709d075b370c957e598566d5bb5b88'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV1701(): ProxyProxiesStorageV1701 {
        assert(this.isV1701)
        return this as any
    }
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV49 {
    get(key: Uint8Array): Promise<[v49.ProxyDefinition[], bigint]>
    getAll(): Promise<[v49.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v49.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v49.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v49.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v49.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v49.ProxyDefinition[], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV1701 {
    get(key: Uint8Array): Promise<[v1701.ProxyDefinition[], bigint]>
    getAll(): Promise<[v1701.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v1701.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v1701.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v1701.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v1701.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v1701.ProxyDefinition[], bigint]][]>
}

export class RandomnessInherentIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'Randomness'
    }

    protected getName() {
        return 'InherentIncluded'
    }

    /**
     *  Ensures the mandatory inherent was included in the block
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Ensures the mandatory inherent was included in the block
     */
    get asV1801(): RandomnessInherentIncludedStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Ensures the mandatory inherent was included in the block
 */
export interface RandomnessInherentIncludedStorageV1801 {
    get(): Promise<(null | undefined)>
}

export class RandomnessLocalVrfOutputStorage extends StorageBase {
    protected getPrefix() {
        return 'Randomness'
    }

    protected getName() {
        return 'LocalVrfOutput'
    }

    /**
     *  Current local per-block VRF randomness
     *  Set in `on_initialize`
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
    }

    /**
     *  Current local per-block VRF randomness
     *  Set in `on_initialize`
     */
    get asV1801(): RandomnessLocalVrfOutputStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Current local per-block VRF randomness
 *  Set in `on_initialize`
 */
export interface RandomnessLocalVrfOutputStorageV1801 {
    get(): Promise<(Uint8Array | undefined)>
}

export class RandomnessNotFirstBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Randomness'
    }

    protected getName() {
        return 'NotFirstBlock'
    }

    /**
     *  Records whether this is the first block (genesis or runtime upgrade)
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Records whether this is the first block (genesis or runtime upgrade)
     */
    get asV1801(): RandomnessNotFirstBlockStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Records whether this is the first block (genesis or runtime upgrade)
 */
export interface RandomnessNotFirstBlockStorageV1801 {
    get(): Promise<(null | undefined)>
}

export class RandomnessRandomnessResultsStorage extends StorageBase {
    protected getPrefix() {
        return 'Randomness'
    }

    protected getName() {
        return 'RandomnessResults'
    }

    /**
     *  Snapshot of randomness to fulfill all requests that are for the same raw randomness
     *  Removed once $value.request_count == 0
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '75578d73f13785367be0d77707dcc826a467cd28381c07f534714a780138b423'
    }

    /**
     *  Snapshot of randomness to fulfill all requests that are for the same raw randomness
     *  Removed once $value.request_count == 0
     */
    get asV1801(): RandomnessRandomnessResultsStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Snapshot of randomness to fulfill all requests that are for the same raw randomness
 *  Removed once $value.request_count == 0
 */
export interface RandomnessRandomnessResultsStorageV1801 {
    get(key: v1801.RequestType): Promise<(v1801.RandomnessResult | undefined)>
    getAll(): Promise<v1801.RandomnessResult[]>
    getMany(keys: v1801.RequestType[]): Promise<(v1801.RandomnessResult | undefined)[]>
    getKeys(): Promise<v1801.RequestType[]>
    getKeys(key: v1801.RequestType): Promise<v1801.RequestType[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1801.RequestType[]>
    getKeysPaged(pageSize: number, key: v1801.RequestType): AsyncIterable<v1801.RequestType[]>
    getPairs(): Promise<[k: v1801.RequestType, v: v1801.RandomnessResult][]>
    getPairs(key: v1801.RequestType): Promise<[k: v1801.RequestType, v: v1801.RandomnessResult][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1801.RequestType, v: v1801.RandomnessResult][]>
    getPairsPaged(pageSize: number, key: v1801.RequestType): AsyncIterable<[k: v1801.RequestType, v: v1801.RandomnessResult][]>
}

export class RandomnessRelayEpochStorage extends StorageBase {
    protected getPrefix() {
        return 'Randomness'
    }

    protected getName() {
        return 'RelayEpoch'
    }

    /**
     *  Relay epoch
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Relay epoch
     */
    get asV1801(): RandomnessRelayEpochStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Relay epoch
 */
export interface RandomnessRelayEpochStorageV1801 {
    get(): Promise<bigint>
}

export class RandomnessRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Randomness'
    }

    protected getName() {
        return 'RequestCount'
    }

    /**
     *  Number of randomness requests made so far, used to generate the next request's uid
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Number of randomness requests made so far, used to generate the next request's uid
     */
    get asV1801(): RandomnessRequestCountStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Number of randomness requests made so far, used to generate the next request's uid
 */
export interface RandomnessRequestCountStorageV1801 {
    get(): Promise<bigint>
}

export class RandomnessRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Randomness'
    }

    protected getName() {
        return 'Requests'
    }

    /**
     *  Randomness requests not yet fulfilled or purged
     */
    get isV1801(): boolean {
        return this.getTypeHash() === 'a9c7aeb32a7aa07186542a17732564f2da7e45c1fa5be2af03598b7ed08a2c0f'
    }

    /**
     *  Randomness requests not yet fulfilled or purged
     */
    get asV1801(): RandomnessRequestsStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Randomness requests not yet fulfilled or purged
 */
export interface RandomnessRequestsStorageV1801 {
    get(key: bigint): Promise<(v1801.RequestState | undefined)>
    getAll(): Promise<v1801.RequestState[]>
    getMany(keys: bigint[]): Promise<(v1801.RequestState | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1801.RequestState][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1801.RequestState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1801.RequestState][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1801.RequestState][]>
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
    protected getPrefix() {
        return 'RandomnessCollectiveFlip'
    }

    protected getName() {
        return 'RandomMaterial'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV49(): RandomnessCollectiveFlipRandomMaterialStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV49 {
    get(): Promise<Uint8Array[]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'ada4edba7f8b2f5ff60a4f153615a98ebfd84d0cc903f00c55148d441ec5f66d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV49(): SchedulerAgendaStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV53(): boolean {
        return this.getTypeHash() === '696ce0d2b15bad25da3896368a98bda2b8bcd87966d1dc4512b258c7e3a4be10'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV53(): SchedulerAgendaStorageV53 {
        assert(this.isV53)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '0c7d1c5003c7cc24b6dc43bf9266b43cc5d50b6cef599ee1cc4fdfb96909dab0'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV155(): SchedulerAgendaStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV159(): boolean {
        return this.getTypeHash() === 'cd0983a8f5fdd435dc68b31ce0465dcfea615cbabbc23004fa4b35dda85cc755'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV159(): SchedulerAgendaStorageV159 {
        assert(this.isV159)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '196f7fa7c48acbbb63f105f4238afb214868e99424a247c72380e56e2d186888'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV200(): SchedulerAgendaStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV400(): boolean {
        return this.getTypeHash() === '43636ecd0fef296f0802b862ce6c4c8c5b5410a3e35dba2d02cb3e41546c51d7'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV400(): SchedulerAgendaStorageV400 {
        assert(this.isV400)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV501(): boolean {
        return this.getTypeHash() === '33018a54737c30d887a76eb26b5f245d5f41b6bbbe80000b86896539f72590e3'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV501(): SchedulerAgendaStorageV501 {
        assert(this.isV501)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV600(): boolean {
        return this.getTypeHash() === '43636ecd0fef296f0802b862ce6c4c8c5b5410a3e35dba2d02cb3e41546c51d7'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV600(): SchedulerAgendaStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV701(): boolean {
        return this.getTypeHash() === '547a9ea6abfad18cbd3a3cf51f6f4c25f6270988239b9b9265b9150ae595e8d6'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV701(): SchedulerAgendaStorageV701 {
        assert(this.isV701)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '89763f842b318b1e8bb41d89e0b36027da75589549d4c4b202c59d47e9b063c6'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV900(): SchedulerAgendaStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1001(): boolean {
        return this.getTypeHash() === 'd6bdb9bca61d5deee8f6f9c44007c542c762d111900cdb7df6a07cc14d1fae08'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1001(): SchedulerAgendaStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'b426c30238fcb9a2ca04bf205345a0732a0787e104175bba0db81b18bd31538e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1101(): SchedulerAgendaStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === 'fa59c70ffb2a31450da04d6f91b587a01052578e01b7057ccc1dae0efe10b354'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1201(): SchedulerAgendaStorageV1201 {
        assert(this.isV1201)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '9a9ed4aa44240a11fbd3b6d223608419d9db4461833581bbc47a961c95c2571c'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1300(): SchedulerAgendaStorageV1300 {
        assert(this.isV1300)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === 'edf0e5406752927866f85c4f2ce7165dddc318f06d1b9577326637bb22e3d01c'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1401(): SchedulerAgendaStorageV1401 {
        assert(this.isV1401)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1502(): boolean {
        return this.getTypeHash() === 'b6b73942f488c4d84b32d065ccac8c9407944c7d0836dedd12e2f70fd22187c6'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1502(): SchedulerAgendaStorageV1502 {
        assert(this.isV1502)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1605(): boolean {
        return this.getTypeHash() === 'f3e650b8946dab5337515239a98ba2e98139671e1ed42ca8ef494bccf64bebd0'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1605(): SchedulerAgendaStorageV1605 {
        assert(this.isV1605)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1701(): boolean {
        return this.getTypeHash() === 'ab54d061cbcd6793e1a5506aaab7a7fec8d64d32e0348e53f26147fb413bd4e8'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1701(): SchedulerAgendaStorageV1701 {
        assert(this.isV1701)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === 'fd22a769dac21fb4e729cb140e9c2b85df18a769bae2df0b29e2de8214c3a2a3'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1801(): SchedulerAgendaStorageV1801 {
        assert(this.isV1801)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === '046d7ea6050df0b15c053acc86fcf56a495401f647725e98efda511e6ee1ee11'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1901(): SchedulerAgendaStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '32980f7f3e83bbb9671c3bf368a31df289fc6c4d3d17db5c4a56f63e8f7be4ec'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2000(): SchedulerAgendaStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV49 {
    get(key: number): Promise<(v49.Scheduled | undefined)[]>
    getAll(): Promise<(v49.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v49.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v49.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v49.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v49.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v49.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV53 {
    get(key: number): Promise<(v53.Scheduled | undefined)[]>
    getAll(): Promise<(v53.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v53.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v53.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v53.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v53.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v53.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV155 {
    get(key: number): Promise<(v155.Scheduled | undefined)[]>
    getAll(): Promise<(v155.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v155.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v155.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v155.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v155.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v155.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV159 {
    get(key: number): Promise<(v159.Scheduled | undefined)[]>
    getAll(): Promise<(v159.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v159.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v159.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v159.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v159.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v159.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV200 {
    get(key: number): Promise<(v200.Scheduled | undefined)[]>
    getAll(): Promise<(v200.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v200.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v200.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v200.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v200.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v200.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV400 {
    get(key: number): Promise<(v400.Scheduled | undefined)[]>
    getAll(): Promise<(v400.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v400.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v400.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v400.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v400.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v400.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV501 {
    get(key: number): Promise<(v501.Scheduled | undefined)[]>
    getAll(): Promise<(v501.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v501.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v501.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v501.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v501.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v501.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV600 {
    get(key: number): Promise<(v600.Scheduled | undefined)[]>
    getAll(): Promise<(v600.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v600.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v600.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v600.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v600.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v600.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV701 {
    get(key: number): Promise<(v701.Scheduled | undefined)[]>
    getAll(): Promise<(v701.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v701.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v701.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v701.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v701.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v701.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV900 {
    get(key: number): Promise<(v900.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v900.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v900.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v900.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v900.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v900.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v900.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1001 {
    get(key: number): Promise<(v1001.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v1001.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1001.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1001.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1001.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1001.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1001.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1101 {
    get(key: number): Promise<(v1101.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v1101.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1101.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1101.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1101.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1101.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1101.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1201 {
    get(key: number): Promise<(v1201.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v1201.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1201.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1201.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1201.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1201.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1201.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1300 {
    get(key: number): Promise<(v1300.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v1300.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1300.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1300.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1300.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1300.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1300.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1401 {
    get(key: number): Promise<(v1401.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v1401.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1401.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1401.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1401.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1401.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1401.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1502 {
    get(key: number): Promise<(v1502.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v1502.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1502.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1502.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1502.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1502.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1502.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1605 {
    get(key: number): Promise<(v1605.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v1605.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1605.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1605.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1605.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1605.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1605.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1701 {
    get(key: number): Promise<(v1701.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v1701.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1701.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1701.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1701.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1701.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1701.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1801 {
    get(key: number): Promise<(v1801.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v1801.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1801.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1801.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1801.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1801.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1801.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1901 {
    get(key: number): Promise<(v1901.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v1901.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v1901.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1901.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1901.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1901.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1901.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2000 {
    get(key: number): Promise<(v2000.Scheduled | undefined)[]>
    getAll(): Promise<(v2000.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2000.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2000.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2000.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2000.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2000.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isV2000(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asV2000(): SchedulerIncompleteSinceStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageV2000 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get asV49(): SchedulerLookupStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asV2000(): SchedulerLookupStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface SchedulerLookupStorageV49 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageV2000 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SchedulerStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV49(): SchedulerStorageVersionStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV900(): SchedulerStorageVersionStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV49 {
    get(): Promise<v49.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV900 {
    get(): Promise<v900.Type_290>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '29a254f9bd2eb3ca10740b8d93c1ac4aaf4085b890c834f2b7850fb612c42290'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV49(): SudoKeyStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV49 {
    get(): Promise<Uint8Array>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'a83a7372c51978aa017bd09db5672f3ea3957f0882455abd9726ac2b6d4b61dc'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV49(): SystemAccountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV49 {
    get(key: Uint8Array): Promise<v49.AccountInfo>
    getAll(): Promise<v49.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v49.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV49(): SystemAllExtrinsicsLenStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV49 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV49(): SystemBlockHashStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV49 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV49(): SystemBlockWeightStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === 'd35f09c6f3fd2f6e93d9006f364b5b6e91ce1207594e51247070364731dba424'
    }

    /**
     *  The current weight for the block.
     */
    get asV1901(): SystemBlockWeightStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV2000(): SystemBlockWeightStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV49 {
    get(): Promise<v49.ConsumedWeight>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV1901 {
    get(): Promise<v1901.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV2000 {
    get(): Promise<v2000.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '5c779fb4a30e7175912e0b191c54b9269555ef63328f3ee7035f9699e9aea578'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV49(): SystemDigestStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV900(): SystemDigestStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV1201(): SystemDigestStorageV1201 {
        assert(this.isV1201)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV49 {
    get(): Promise<v49.DigestOf>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV900 {
    get(): Promise<v900.Digest>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV1201 {
    get(): Promise<v1201.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV49(): SystemEventCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV49 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV49(): SystemEventTopicsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV49 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '264ec8958971037999331d00afae600da13cdfd710f10d7d874e34590244402f'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV49(): SystemEventsStorageV49 {
        assert(this.isV49)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV53(): boolean {
        return this.getTypeHash() === '97a6a057419ee0a109cc75364e8ced45d4f70b62703be0013f9ef1d9a735cdfe'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV53(): SystemEventsStorageV53 {
        assert(this.isV53)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'b96d720a0a732c5d25c00d25457450d9e32a451680a2706fa4b676148b90e6db'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV155(): SystemEventsStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV200(): boolean {
        return this.getTypeHash() === '151af2ffff3e518c9921e2f6942a6abd066d556d7e7c8d8ae4b450a1cf599381'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV200(): SystemEventsStorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV300(): boolean {
        return this.getTypeHash() === '1cefa6b4836e2478d031e4df43b89ab4f8ed48b6f3d95993a44436a8784470e7'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV300(): SystemEventsStorageV300 {
        assert(this.isV300)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV400(): boolean {
        return this.getTypeHash() === '08a7af89815d1952554f8f9941389117a9a4d543243e344af83a086a1345c712'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV400(): SystemEventsStorageV400 {
        assert(this.isV400)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV501(): boolean {
        return this.getTypeHash() === '0ef70b0bb278508d85a3592bc3d2f4552a5beb07b2722dd75c66ef4290b297be'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV501(): SystemEventsStorageV501 {
        assert(this.isV501)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV600(): boolean {
        return this.getTypeHash() === 'a897de6c3ad5d2af73aff1612f2d68ada5e7169f1c82b03b723a4826c85b0c01'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV600(): SystemEventsStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV701(): boolean {
        return this.getTypeHash() === 'c2902f245e31f953d664c52e83c72fdb7258ea0408238297d036ae4c8de35552'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV701(): SystemEventsStorageV701 {
        assert(this.isV701)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV800(): boolean {
        return this.getTypeHash() === '6172a9fc8db9e29a58ad5a64adfcac0e453dd54dda2033abec4c5984bd354a99'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV800(): SystemEventsStorageV800 {
        assert(this.isV800)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '441922964785eb4e7a55528c80ad154e71192254bb8083d39e3c8f09226ca7dc'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV900(): SystemEventsStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV1001(): boolean {
        return this.getTypeHash() === '255c3c93aae5a8e99da47e16af79079428ff34aa77a04e4a15639bdc77e64f9d'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV1001(): SystemEventsStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'f49f6cdc8cdd711c39df9fcb8849a7f9318d85a737b3b2e3b08a00176192a47f'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV1101(): SystemEventsStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === 'a74242aac44efff1a0fbbac56dc044885770e9d8c704a4c888d816af0aaa0829'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV1201(): SystemEventsStorageV1201 {
        assert(this.isV1201)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '885c15198f629f5cb17f1096ba7fce3a0af39c0229ee2e70ec6e6575a400d556'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV1300(): SystemEventsStorageV1300 {
        assert(this.isV1300)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === 'e5803ede868915b03d233ae9a2d22b0c492ec5ac7209e86955bb04047a7e0cb7'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV1401(): SystemEventsStorageV1401 {
        assert(this.isV1401)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '0dbc67a2cbb62c0821f9981586b50f53ea753cefa419d9bd2a7ba5ac76d347ce'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV1502(): SystemEventsStorageV1502 {
        assert(this.isV1502)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1605(): boolean {
        return this.getTypeHash() === '683fb08998d70525e93e86e6551c99c5c252a324839dffc25c2a15b3536230b0'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1605(): SystemEventsStorageV1605 {
        assert(this.isV1605)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1701(): boolean {
        return this.getTypeHash() === 'a5960b1a9e9458316c55d27b23e9e6eb80c81fedc6dca64ebd2257aede861e7b'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1701(): SystemEventsStorageV1701 {
        assert(this.isV1701)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '4c760c528a773bf47936f68bf91e30685aa17594d0cf8aad29d6bbf0cd204fd8'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1801(): SystemEventsStorageV1801 {
        assert(this.isV1801)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === 'da2a947913cf9403e8bfd46a227b7e94a85e9579da19c858e1148d8c5a808cc0'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1901(): SystemEventsStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '3e9e1d7ebe043d00d5304e46044582c2f71e6d084180c29206325e3a15987253'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV2000(): SystemEventsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV49 {
    get(): Promise<v49.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV53 {
    get(): Promise<v53.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV155 {
    get(): Promise<v155.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV200 {
    get(): Promise<v200.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV300 {
    get(): Promise<v300.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV400 {
    get(): Promise<v400.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV501 {
    get(): Promise<v501.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV600 {
    get(): Promise<v600.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV701 {
    get(): Promise<v701.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV800 {
    get(): Promise<v800.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV900 {
    get(): Promise<v900.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV1001 {
    get(): Promise<v1001.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV1101 {
    get(): Promise<v1101.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV1201 {
    get(): Promise<v1201.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV1300 {
    get(): Promise<v1300.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV1401 {
    get(): Promise<v1401.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV1502 {
    get(): Promise<v1502.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1605 {
    get(): Promise<v1605.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1701 {
    get(): Promise<v1701.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1801 {
    get(): Promise<v1801.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1901 {
    get(): Promise<v1901.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV2000 {
    get(): Promise<v2000.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV49(): SystemExecutionPhaseStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV49 {
    get(): Promise<(v49.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV49(): SystemExtrinsicCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV49 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV49(): SystemExtrinsicDataStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV49 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV49(): SystemLastRuntimeUpgradeStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV49 {
    get(): Promise<(v49.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV49(): SystemNumberStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV49 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV49(): SystemParentHashStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV49 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV49(): SystemUpgradedToTripleRefCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV49 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV49(): SystemUpgradedToU32RefCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV49 {
    get(): Promise<boolean>
}

export class TechCommitteeCollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechCommitteeCollective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV900(): TechCommitteeCollectiveMembersStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechCommitteeCollectiveMembersStorageV900 {
    get(): Promise<Uint8Array[]>
}

export class TechCommitteeCollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechCommitteeCollective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '1660936d4028b791703af3ae985bc49e73619feaf378f3fe474e68b98897138f'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV900(): TechCommitteeCollectivePrimeStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechCommitteeCollectivePrimeStorageV900 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechCommitteeCollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechCommitteeCollective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV900(): TechCommitteeCollectiveProposalCountStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechCommitteeCollectiveProposalCountStorageV900 {
    get(): Promise<number>
}

export class TechCommitteeCollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechCommitteeCollective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'd327535734528b6cdd2d32e0053fa0b40acac90db8dd8bb9be8c425c2c524ba2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV900(): TechCommitteeCollectiveProposalOfStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1001(): boolean {
        return this.getTypeHash() === 'c92d0a96a7529a45371a61a676faf96bb125ef83bd41b79e6c7dd0fc4ce0b780'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1001(): TechCommitteeCollectiveProposalOfStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '7500301c24d9a51839feeef25311ec34327bfb92c46319282b8400239bd5c5c3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1101(): TechCommitteeCollectiveProposalOfStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1201(): boolean {
        return this.getTypeHash() === 'f876576c26f3a4ee2e353233377021cfe634f5a06d29c97657b74d1b02a6d535'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1201(): TechCommitteeCollectiveProposalOfStorageV1201 {
        assert(this.isV1201)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === 'cf65494adb84392c5c8aa4438d7a2d7b12ad1b99f5954e6558741f4a8ff7b3f8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1300(): TechCommitteeCollectiveProposalOfStorageV1300 {
        assert(this.isV1300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === 'b73b6e5ba69e60c554640a570fd7275cd3db109804ca325325e99faa81170354'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1401(): TechCommitteeCollectiveProposalOfStorageV1401 {
        assert(this.isV1401)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1502(): boolean {
        return this.getTypeHash() === 'cfc06f2fc7e243b9bc1648c8a4afab8c80c5d82c332887a96d96bcc72249d14a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1502(): TechCommitteeCollectiveProposalOfStorageV1502 {
        assert(this.isV1502)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1605(): boolean {
        return this.getTypeHash() === 'e6167fd70a130669270333a2f8f198a99ef9248e0749de46cb290bf3e8488d62'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1605(): TechCommitteeCollectiveProposalOfStorageV1605 {
        assert(this.isV1605)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1701(): boolean {
        return this.getTypeHash() === 'e9af9317d0c70af6f802b6e9c05aac72a92587a6ae5a7f118b27e6a17732de69'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1701(): TechCommitteeCollectiveProposalOfStorageV1701 {
        assert(this.isV1701)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === 'c8af9383fdc132bdaa0b80ccdd9798813d1b8621b1c0b501c3a93b20043c0f4d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1801(): TechCommitteeCollectiveProposalOfStorageV1801 {
        assert(this.isV1801)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === 'b16645dfd8d138cd02bb48abfd15d679f5a4b3d1806365c2c24363b68a2dbca2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1901(): TechCommitteeCollectiveProposalOfStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '093bbf5dd6816d275163aada37d68a67427ed64b324e9d36e613a642b2009cef'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2000(): TechCommitteeCollectiveProposalOfStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV900 {
    get(key: Uint8Array): Promise<(v900.Call | undefined)>
    getAll(): Promise<v900.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v900.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1001 {
    get(key: Uint8Array): Promise<(v1001.Call | undefined)>
    getAll(): Promise<v1001.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1101 {
    get(key: Uint8Array): Promise<(v1101.Call | undefined)>
    getAll(): Promise<v1101.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1101.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1101.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1101.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1101.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1101.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1201 {
    get(key: Uint8Array): Promise<(v1201.Call | undefined)>
    getAll(): Promise<v1201.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1201.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1201.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1201.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1201.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1201.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1300 {
    get(key: Uint8Array): Promise<(v1300.Call | undefined)>
    getAll(): Promise<v1300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1401 {
    get(key: Uint8Array): Promise<(v1401.Call | undefined)>
    getAll(): Promise<v1401.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1401.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1401.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1401.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1401.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1401.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1502 {
    get(key: Uint8Array): Promise<(v1502.Call | undefined)>
    getAll(): Promise<v1502.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1502.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1502.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1502.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1502.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1502.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1605 {
    get(key: Uint8Array): Promise<(v1605.Call | undefined)>
    getAll(): Promise<v1605.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1605.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1605.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1605.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1605.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1605.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1701 {
    get(key: Uint8Array): Promise<(v1701.Call | undefined)>
    getAll(): Promise<v1701.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1701.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1701.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1701.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1701.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1701.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1801 {
    get(key: Uint8Array): Promise<(v1801.Call | undefined)>
    getAll(): Promise<v1801.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1801.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1801.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1801.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1801.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1801.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV1901 {
    get(key: Uint8Array): Promise<(v1901.Call | undefined)>
    getAll(): Promise<v1901.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1901.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1901.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1901.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1901.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1901.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechCommitteeCollectiveProposalOfStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.Call | undefined)>
    getAll(): Promise<v2000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.Call][]>
}

export class TechCommitteeCollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechCommitteeCollective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV900(): TechCommitteeCollectiveProposalsStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechCommitteeCollectiveProposalsStorageV900 {
    get(): Promise<Uint8Array[]>
}

export class TechCommitteeCollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechCommitteeCollective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '2c6357c74e2bb2db1ec38121ba748a5e0208f0f891cb58bf6b558e63204dc875'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV900(): TechCommitteeCollectiveVotingStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechCommitteeCollectiveVotingStorageV900 {
    get(key: Uint8Array): Promise<(v900.Votes | undefined)>
    getAll(): Promise<v900.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v900.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.Votes][]>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV49(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV49(): TimestampDidUpdateStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV49 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV49(): TimestampNowStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV49 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV49(): boolean {
        return this.getTypeHash() === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
    }

    get asV49(): TransactionPaymentNextFeeMultiplierStorageV49 {
        assert(this.isV49)
        return this as any
    }

    get isV900(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV900(): TransactionPaymentNextFeeMultiplierStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV49 {
    get(): Promise<bigint>
}

export interface TransactionPaymentNextFeeMultiplierStorageV900 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV49(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    get asV49(): TransactionPaymentStorageVersionStorageV49 {
        assert(this.isV49)
        return this as any
    }

    get isV900(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV900(): TransactionPaymentStorageVersionStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV49 {
    get(): Promise<v49.Releases>
}

export interface TransactionPaymentStorageVersionStorageV900 {
    get(): Promise<v900.Type_136>
}

export class TreasuryApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV49(): TreasuryApprovalsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV49 {
    get(): Promise<number[]>
}

export class TreasuryProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asV49(): TreasuryProposalCountStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface TreasuryProposalCountStorageV49 {
    get(): Promise<number>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV49(): boolean {
        return this.getTypeHash() === '5809021f1759a617a0966e43472afb05550ea26070ada63315ba0f5aab3dcf85'
    }

    /**
     *  Proposals that have been made.
     */
    get asV49(): TreasuryProposalsStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV49 {
    get(key: number): Promise<(v49.TreasuryProposal | undefined)>
    getAll(): Promise<v49.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v49.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v49.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v49.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v49.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v49.TreasuryProposal][]>
}

export class TreasuryCouncilCollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TreasuryCouncilCollective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV1801(): boolean {
        return this.getTypeHash() === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV1801(): TreasuryCouncilCollectiveMembersStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TreasuryCouncilCollectiveMembersStorageV1801 {
    get(): Promise<Uint8Array[]>
}

export class TreasuryCouncilCollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TreasuryCouncilCollective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '1660936d4028b791703af3ae985bc49e73619feaf378f3fe474e68b98897138f'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV1801(): TreasuryCouncilCollectivePrimeStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TreasuryCouncilCollectivePrimeStorageV1801 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TreasuryCouncilCollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TreasuryCouncilCollective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV1801(): TreasuryCouncilCollectiveProposalCountStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TreasuryCouncilCollectiveProposalCountStorageV1801 {
    get(): Promise<number>
}

export class TreasuryCouncilCollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TreasuryCouncilCollective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === 'c8af9383fdc132bdaa0b80ccdd9798813d1b8621b1c0b501c3a93b20043c0f4d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1801(): TreasuryCouncilCollectiveProposalOfStorageV1801 {
        assert(this.isV1801)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === 'b16645dfd8d138cd02bb48abfd15d679f5a4b3d1806365c2c24363b68a2dbca2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1901(): TreasuryCouncilCollectiveProposalOfStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '093bbf5dd6816d275163aada37d68a67427ed64b324e9d36e613a642b2009cef'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2000(): TreasuryCouncilCollectiveProposalOfStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TreasuryCouncilCollectiveProposalOfStorageV1801 {
    get(key: Uint8Array): Promise<(v1801.Call | undefined)>
    getAll(): Promise<v1801.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1801.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1801.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1801.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1801.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1801.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TreasuryCouncilCollectiveProposalOfStorageV1901 {
    get(key: Uint8Array): Promise<(v1901.Call | undefined)>
    getAll(): Promise<v1901.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1901.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1901.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1901.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1901.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1901.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TreasuryCouncilCollectiveProposalOfStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.Call | undefined)>
    getAll(): Promise<v2000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.Call][]>
}

export class TreasuryCouncilCollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TreasuryCouncilCollective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV1801(): TreasuryCouncilCollectiveProposalsStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TreasuryCouncilCollectiveProposalsStorageV1801 {
    get(): Promise<Uint8Array[]>
}

export class TreasuryCouncilCollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TreasuryCouncilCollective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV1801(): boolean {
        return this.getTypeHash() === '2c6357c74e2bb2db1ec38121ba748a5e0208f0f891cb58bf6b558e63204dc875'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV1801(): TreasuryCouncilCollectiveVotingStorageV1801 {
        assert(this.isV1801)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TreasuryCouncilCollectiveVotingStorageV1801 {
    get(key: Uint8Array): Promise<(v1801.Votes | undefined)>
    getAll(): Promise<v1801.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v1801.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1801.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1801.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1801.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1801.Votes][]>
}

export class XcmTransactorDestinationAssetFeePerSecondStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmTransactor'
    }

    protected getName() {
        return 'DestinationAssetFeePerSecond'
    }

    /**
     *  Stores the fee per second for an asset in its reserve chain. This allows us to convert
     *  from weight to fee
     */
    get isV1605(): boolean {
        return this.getTypeHash() === '0ab4d8ccf1a6edb11e4c57979ec110911dd285142aa9e348ee19fa0b8b51f5b5'
    }

    /**
     *  Stores the fee per second for an asset in its reserve chain. This allows us to convert
     *  from weight to fee
     */
    get asV1605(): XcmTransactorDestinationAssetFeePerSecondStorageV1605 {
        assert(this.isV1605)
        return this as any
    }
}

/**
 *  Stores the fee per second for an asset in its reserve chain. This allows us to convert
 *  from weight to fee
 */
export interface XcmTransactorDestinationAssetFeePerSecondStorageV1605 {
    get(key: v1605.V1MultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v1605.V1MultiLocation[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v1605.V1MultiLocation[]>
    getKeys(key: v1605.V1MultiLocation): Promise<v1605.V1MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1605.V1MultiLocation[]>
    getKeysPaged(pageSize: number, key: v1605.V1MultiLocation): AsyncIterable<v1605.V1MultiLocation[]>
    getPairs(): Promise<[k: v1605.V1MultiLocation, v: bigint][]>
    getPairs(key: v1605.V1MultiLocation): Promise<[k: v1605.V1MultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1605.V1MultiLocation, v: bigint][]>
    getPairsPaged(pageSize: number, key: v1605.V1MultiLocation): AsyncIterable<[k: v1605.V1MultiLocation, v: bigint][]>
}

export class XcmTransactorIndexToAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmTransactor'
    }

    protected getName() {
        return 'IndexToAccount'
    }

    get isV1101(): boolean {
        return this.getTypeHash() === '8fe37e52055d9c411ad9013c8bc2209c94ee08a7a16281a55b85be78630c1453'
    }

    get asV1101(): XcmTransactorIndexToAccountStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

export interface XcmTransactorIndexToAccountStorageV1101 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class XcmTransactorTransactInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmTransactor'
    }

    protected getName() {
        return 'TransactInfo'
    }

    get isV1101(): boolean {
        return this.getTypeHash() === 'bf440ff5429727c0ebbf10fe9674cde00106eed3ba8e5f872de1cde168a58d14'
    }

    get asV1101(): XcmTransactorTransactInfoStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

export interface XcmTransactorTransactInfoStorageV1101 {
    get(key: v1101.V1MultiLocation): Promise<(v1101.RemoteTransactInfo | undefined)>
    getAll(): Promise<v1101.RemoteTransactInfo[]>
    getMany(keys: v1101.V1MultiLocation[]): Promise<(v1101.RemoteTransactInfo | undefined)[]>
    getKeys(): Promise<v1101.V1MultiLocation[]>
    getKeys(key: v1101.V1MultiLocation): Promise<v1101.V1MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1101.V1MultiLocation[]>
    getKeysPaged(pageSize: number, key: v1101.V1MultiLocation): AsyncIterable<v1101.V1MultiLocation[]>
    getPairs(): Promise<[k: v1101.V1MultiLocation, v: v1101.RemoteTransactInfo][]>
    getPairs(key: v1101.V1MultiLocation): Promise<[k: v1101.V1MultiLocation, v: v1101.RemoteTransactInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1101.V1MultiLocation, v: v1101.RemoteTransactInfo][]>
    getPairsPaged(pageSize: number, key: v1101.V1MultiLocation): AsyncIterable<[k: v1101.V1MultiLocation, v: v1101.RemoteTransactInfo][]>
}

export class XcmTransactorTransactInfoWithWeightLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmTransactor'
    }

    protected getName() {
        return 'TransactInfoWithWeightLimit'
    }

    get isV1201(): boolean {
        return this.getTypeHash() === '9fd85830e3967d7a208aec644e9ef9373ce65138196f882690c3a173e7958fa5'
    }

    get asV1201(): XcmTransactorTransactInfoWithWeightLimitStorageV1201 {
        assert(this.isV1201)
        return this as any
    }

    /**
     *  Stores the transact info of a MultiLocation. This defines how much extra weight we need to
     *  add when we want to transact in the destination chain and maximum amount of weight allowed
     *  by the destination chain
     */
    get isV1605(): boolean {
        return this.getTypeHash() === 'de3b51223488287f0dfdeacacbac1e0ee26ec76f8641f7b2387da0f32069ed90'
    }

    /**
     *  Stores the transact info of a MultiLocation. This defines how much extra weight we need to
     *  add when we want to transact in the destination chain and maximum amount of weight allowed
     *  by the destination chain
     */
    get asV1605(): XcmTransactorTransactInfoWithWeightLimitStorageV1605 {
        assert(this.isV1605)
        return this as any
    }
}

export interface XcmTransactorTransactInfoWithWeightLimitStorageV1201 {
    get(key: v1201.V1MultiLocation): Promise<(v1201.RemoteTransactInfoWithMaxWeight | undefined)>
    getAll(): Promise<v1201.RemoteTransactInfoWithMaxWeight[]>
    getMany(keys: v1201.V1MultiLocation[]): Promise<(v1201.RemoteTransactInfoWithMaxWeight | undefined)[]>
    getKeys(): Promise<v1201.V1MultiLocation[]>
    getKeys(key: v1201.V1MultiLocation): Promise<v1201.V1MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1201.V1MultiLocation[]>
    getKeysPaged(pageSize: number, key: v1201.V1MultiLocation): AsyncIterable<v1201.V1MultiLocation[]>
    getPairs(): Promise<[k: v1201.V1MultiLocation, v: v1201.RemoteTransactInfoWithMaxWeight][]>
    getPairs(key: v1201.V1MultiLocation): Promise<[k: v1201.V1MultiLocation, v: v1201.RemoteTransactInfoWithMaxWeight][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1201.V1MultiLocation, v: v1201.RemoteTransactInfoWithMaxWeight][]>
    getPairsPaged(pageSize: number, key: v1201.V1MultiLocation): AsyncIterable<[k: v1201.V1MultiLocation, v: v1201.RemoteTransactInfoWithMaxWeight][]>
}

/**
 *  Stores the transact info of a MultiLocation. This defines how much extra weight we need to
 *  add when we want to transact in the destination chain and maximum amount of weight allowed
 *  by the destination chain
 */
export interface XcmTransactorTransactInfoWithWeightLimitStorageV1605 {
    get(key: v1605.V1MultiLocation): Promise<(v1605.RemoteTransactInfoWithMaxWeight | undefined)>
    getAll(): Promise<v1605.RemoteTransactInfoWithMaxWeight[]>
    getMany(keys: v1605.V1MultiLocation[]): Promise<(v1605.RemoteTransactInfoWithMaxWeight | undefined)[]>
    getKeys(): Promise<v1605.V1MultiLocation[]>
    getKeys(key: v1605.V1MultiLocation): Promise<v1605.V1MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1605.V1MultiLocation[]>
    getKeysPaged(pageSize: number, key: v1605.V1MultiLocation): AsyncIterable<v1605.V1MultiLocation[]>
    getPairs(): Promise<[k: v1605.V1MultiLocation, v: v1605.RemoteTransactInfoWithMaxWeight][]>
    getPairs(key: v1605.V1MultiLocation): Promise<[k: v1605.V1MultiLocation, v: v1605.RemoteTransactInfoWithMaxWeight][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1605.V1MultiLocation, v: v1605.RemoteTransactInfoWithMaxWeight][]>
    getPairsPaged(pageSize: number, key: v1605.V1MultiLocation): AsyncIterable<[k: v1605.V1MultiLocation, v: v1605.RemoteTransactInfoWithMaxWeight][]>
}

export class XcmpQueueInboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpMessages'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asV1101(): XcmpQueueInboundXcmpMessagesStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageV1101 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueInboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpStatus'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '48f3de6a738f03ae3c729fdf2adfbcc7dd58a2d62c1e81c228ac332b7237c8c2'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asV1101(): XcmpQueueInboundXcmpStatusStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asV1300(): XcmpQueueInboundXcmpStatusStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageV1101 {
    get(): Promise<[number, v1101.InboundStatus, [number, v1101.XcmpMessageFormat][]][]>
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageV1300 {
    get(): Promise<v1300.InboundChannelDetails[]>
}

export class XcmpQueueOutboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpMessages'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asV1101(): XcmpQueueOutboundXcmpMessagesStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageV1101 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueOutboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpStatus'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '2284f25ad36d908dd9054d516baba1c7da89eb5dbefc09e2f88eaad6bd217ebf'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asV1101(): XcmpQueueOutboundXcmpStatusStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asV1300(): XcmpQueueOutboundXcmpStatusStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageV1101 {
    get(): Promise<[number, v1101.OutboundStatus, boolean, number, number][]>
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageV1300 {
    get(): Promise<v1300.OutboundChannelDetails[]>
}

export class XcmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asV1300(): XcmpQueueOverweightStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageV1300 {
    get(key: bigint): Promise<([number, number, Uint8Array] | undefined)>
    getAll(): Promise<[number, number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
}

export class XcmpQueueOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asV1300(): XcmpQueueOverweightCountStorageV1300 {
        assert(this.isV1300)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageV1300 {
    get(): Promise<bigint>
}

export class XcmpQueueQueueConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueConfig'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === '4eee4c318310895e220c6e665c876bf76f75ef8f5530bcd8f8ea1d5b966ff46f'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV1101(): XcmpQueueQueueConfigStorageV1101 {
        assert(this.isV1101)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV1300(): boolean {
        return this.getTypeHash() === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV1300(): XcmpQueueQueueConfigStorageV1300 {
        assert(this.isV1300)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV1901(): boolean {
        return this.getTypeHash() === 'b9e7fe75fd5e16e066448c0d0a704aec5c90e5e751ca04108c2b35ab00764560'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV1901(): XcmpQueueQueueConfigStorageV1901 {
        assert(this.isV1901)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '2a88389b0d97d3253b6e1cdc0a2e938907eda23917d9d2a7dcb76b96b945d7c1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV2000(): XcmpQueueQueueConfigStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV1101 {
    get(): Promise<v1101.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV1300 {
    get(): Promise<v1300.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV1901 {
    get(): Promise<v1901.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV2000 {
    get(): Promise<v2000.QueueConfigData>
}

export class XcmpQueueQueueSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueSuspended'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get isV1401(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asV1401(): XcmpQueueQueueSuspendedStorageV1401 {
        assert(this.isV1401)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageV1401 {
    get(): Promise<boolean>
}

export class XcmpQueueSignalMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'SignalMessages'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get isV1101(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asV1101(): XcmpQueueSignalMessagesStorageV1101 {
        assert(this.isV1101)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageV1101 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}
