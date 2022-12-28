import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v49 from './v49'
import * as v1101 from './v1101'
import * as v1300 from './v1300'
import * as v1605 from './v1605'
import * as v1901 from './v1901'
import * as v2000 from './v2000'

export class AssetManagerLocalAssetDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved for a local asset.
     */
    get isV1401() {
        return this._chain.getConstantTypeHash('AssetManager', 'LocalAssetDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved for a local asset.
     */
    get asV1401(): bigint {
        assert(this.isV1401)
        return this._chain.getConstant('AssetManager', 'LocalAssetDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('AssetManager', 'LocalAssetDeposit') != null
    }
}

export class AssetsApprovalDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of funds that must be reserved when creating a new approval.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('Assets', 'ApprovalDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of funds that must be reserved when creating a new approval.
     */
    get asV1101(): bigint {
        assert(this.isV1101)
        return this._chain.getConstant('Assets', 'ApprovalDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Assets', 'ApprovalDeposit') != null
    }
}

export class AssetsAssetAccountDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of funds that must be reserved for a non-provider asset account to be
     *  maintained.
     */
    get isV1300() {
        return this._chain.getConstantTypeHash('Assets', 'AssetAccountDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of funds that must be reserved for a non-provider asset account to be
     *  maintained.
     */
    get asV1300(): bigint {
        assert(this.isV1300)
        return this._chain.getConstant('Assets', 'AssetAccountDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Assets', 'AssetAccountDeposit') != null
    }
}

export class AssetsAssetDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved for an asset.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('Assets', 'AssetDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved for an asset.
     */
    get asV1101(): bigint {
        assert(this.isV1101)
        return this._chain.getConstant('Assets', 'AssetDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Assets', 'AssetDeposit') != null
    }
}

export class AssetsMetadataDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved when adding metadata to your asset.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('Assets', 'MetadataDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved when adding metadata to your asset.
     */
    get asV1101(): bigint {
        assert(this.isV1101)
        return this._chain.getConstant('Assets', 'MetadataDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Assets', 'MetadataDepositBase') != null
    }
}

export class AssetsMetadataDepositPerByteConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The additional funds that must be reserved for the number of bytes you store in your
     *  metadata.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('Assets', 'MetadataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The additional funds that must be reserved for the number of bytes you store in your
     *  metadata.
     */
    get asV1101(): bigint {
        assert(this.isV1101)
        return this._chain.getConstant('Assets', 'MetadataDepositPerByte')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Assets', 'MetadataDepositPerByte') != null
    }
}

export class AssetsStringLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum length of a name or symbol stored on-chain.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('Assets', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum length of a name or symbol stored on-chain.
     */
    get asV1101(): number {
        assert(this.isV1101)
        return this._chain.getConstant('Assets', 'StringLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Assets', 'StringLimit') != null
    }
}

export class BalancesExistentialDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum amount required to keep an account open.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The minimum amount required to keep an account open.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Balances', 'ExistentialDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') != null
    }
}

export class BalancesMaxLocksConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of locks that should exist on an account.
     *  Not strictly enforced, but used for weight estimation.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Balances', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of locks that should exist on an account.
     *  Not strictly enforced, but used for weight estimation.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Balances', 'MaxLocks')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'MaxLocks') != null
    }
}

export class BalancesMaxReservesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Balances', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Balances', 'MaxReserves')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'MaxReserves') != null
    }
}

export class CrowdloanRewardsInitializationPaymentConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Percentage to be payed at initialization
     */
    get isV49() {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'InitializationPayment') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Percentage to be payed at initialization
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('CrowdloanRewards', 'InitializationPayment')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'InitializationPayment') != null
    }
}

export class CrowdloanRewardsMaxInitContributorsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV159() {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'MaxInitContributors') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    get asV159(): number {
        assert(this.isV159)
        return this._chain.getConstant('CrowdloanRewards', 'MaxInitContributors')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'MaxInitContributors') != null
    }
}

export class CrowdloanRewardsRewardAddressRelayVoteThresholdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  A fraction representing the percentage of proofs
     *  that need to be presented to change a reward address through the relay keys
     */
    get isV701() {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'RewardAddressRelayVoteThreshold') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  A fraction representing the percentage of proofs
     *  that need to be presented to change a reward address through the relay keys
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('CrowdloanRewards', 'RewardAddressRelayVoteThreshold')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'RewardAddressRelayVoteThreshold') != null
    }
}

export class CrowdloanRewardsSignatureNetworkIdentifierConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Network Identifier to be appended into the signatures for reward address change/association
     *  Prevents replay attacks from one network to the other
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'SignatureNetworkIdentifier') === '19bb21e76ad4a4c6ae62ffc49e4711f8bc843e7f32aac152df1387e4d439a8d9'
    }

    /**
     *  Network Identifier to be appended into the signatures for reward address change/association
     *  Prevents replay attacks from one network to the other
     */
    get asV1101(): Uint8Array {
        assert(this.isV1101)
        return this._chain.getConstant('CrowdloanRewards', 'SignatureNetworkIdentifier')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'SignatureNetworkIdentifier') != null
    }
}

export class CrowdloanRewardsVestingPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The total vesting period. Ideally this should be less or equal
     *  than the lease period to ensure contributors vest the tokens during the lease
     */
    get isV49() {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'VestingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The total vesting period. Ideally this should be less or equal
     *  than the lease period to ensure contributors vest the tokens during the lease
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('CrowdloanRewards', 'VestingPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CrowdloanRewards', 'VestingPeriod') != null
    }
}

export class DemocracyCooloffPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Democracy', 'CooloffPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') != null
    }
}

export class DemocracyEnactmentPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum period of locking and the period between a proposal being approved and enacted.
     * 
     *  It should generally be a little more than the unstake period to ensure that
     *  voting stakers have an opportunity to remove themselves from the system in the case where
     *  they are on the losing side of a vote.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The minimum period of locking and the period between a proposal being approved and enacted.
     * 
     *  It should generally be a little more than the unstake period to ensure that
     *  voting stakers have an opportunity to remove themselves from the system in the case where
     *  they are on the losing side of a vote.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Democracy', 'EnactmentPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') != null
    }
}

export class DemocracyFastTrackVotingPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum voting period allowed for an emergency referendum.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Minimum voting period allowed for an emergency referendum.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Democracy', 'FastTrackVotingPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') != null
    }
}

export class DemocracyInstantAllowedConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Indicator for whether an emergency origin is even allowed to happen. Some chains may want
     *  to set this permanently to `false`, others may want to condition it on things such as
     *  an upgrade having happened recently.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') === 'ad6087d319c50ed2bab855d7787007597248f7ed5d13382638d7da078264028b'
    }

    /**
     *  Indicator for whether an emergency origin is even allowed to happen. Some chains may want
     *  to set this permanently to `false`, others may want to condition it on things such as
     *  an upgrade having happened recently.
     */
    get asV701(): boolean {
        assert(this.isV701)
        return this._chain.getConstant('Democracy', 'InstantAllowed')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') != null
    }
}

export class DemocracyLaunchPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  How often (in blocks) new public referenda are launched.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  How often (in blocks) new public referenda are launched.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Democracy', 'LaunchPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') != null
    }
}

export class DemocracyMaxBlacklistedConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of items which can be blacklisted.
     */
    get isV2000() {
        return this._chain.getConstantTypeHash('Democracy', 'MaxBlacklisted') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of items which can be blacklisted.
     */
    get asV2000(): number {
        assert(this.isV2000)
        return this._chain.getConstant('Democracy', 'MaxBlacklisted')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MaxBlacklisted') != null
    }
}

export class DemocracyMaxDepositsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of deposits a public proposal may have at any time.
     */
    get isV2000() {
        return this._chain.getConstantTypeHash('Democracy', 'MaxDeposits') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of deposits a public proposal may have at any time.
     */
    get asV2000(): number {
        assert(this.isV2000)
        return this._chain.getConstant('Democracy', 'MaxDeposits')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MaxDeposits') != null
    }
}

export class DemocracyMaxProposalsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of public proposals that can exist at any time.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of public proposals that can exist at any time.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Democracy', 'MaxProposals')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') != null
    }
}

export class DemocracyMaxVotesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of votes for an account.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of votes for an account.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Democracy', 'MaxVotes')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') != null
    }
}

export class DemocracyMinimumDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Democracy', 'MinimumDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') != null
    }
}

export class DemocracyPreimageByteDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of balance that must be deposited per byte of preimage stored.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Democracy', 'PreimageByteDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of balance that must be deposited per byte of preimage stored.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Democracy', 'PreimageByteDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'PreimageByteDeposit') != null
    }
}

export class DemocracyVoteLockingPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum period of vote locking.
     * 
     *  It should be no shorter than enactment period to ensure that in the case of an approval,
     *  those successful voters are locked into the consequences that their votes entail.
     */
    get isV900() {
        return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The minimum period of vote locking.
     * 
     *  It should be no shorter than enactment period to ensure that in the case of an approval,
     *  those successful voters are locked into the consequences that their votes entail.
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.getConstant('Democracy', 'VoteLockingPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') != null
    }
}

export class DemocracyVotingPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  How often (in blocks) to check for new votes.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  How often (in blocks) to check for new votes.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Democracy', 'VotingPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') != null
    }
}

export class IdentityBasicDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount held on deposit for a registered identity
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount held on deposit for a registered identity
     */
    get asV701(): bigint {
        assert(this.isV701)
        return this._chain.getConstant('Identity', 'BasicDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') != null
    }
}

export class IdentityFieldDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount held on deposit per additional field for a registered identity.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount held on deposit per additional field for a registered identity.
     */
    get asV701(): bigint {
        assert(this.isV701)
        return this._chain.getConstant('Identity', 'FieldDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') != null
    }
}

export class IdentityMaxAdditionalFieldsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
     *  required to access an identity, but can be pretty high.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
     *  required to access an identity, but can be pretty high.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Identity', 'MaxAdditionalFields')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') != null
    }
}

export class IdentityMaxRegistrarsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
     *  of, e.g., updating judgements.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
     *  of, e.g., updating judgements.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Identity', 'MaxRegistrars')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') != null
    }
}

export class IdentityMaxSubAccountsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of sub-accounts allowed per identified account.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of sub-accounts allowed per identified account.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Identity', 'MaxSubAccounts')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') != null
    }
}

export class IdentitySubAccountDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount held on deposit for a registered subaccount. This should account for the fact
     *  that one storage item's value will increase by the size of an account ID, and there will be
     *  another trie item whose value is the size of an account ID plus 32 bytes.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount held on deposit for a registered subaccount. This should account for the fact
     *  that one storage item's value will increase by the size of an account ID, and there will be
     *  another trie item whose value is the size of an account ID plus 32 bytes.
     */
    get asV701(): bigint {
        assert(this.isV701)
        return this._chain.getConstant('Identity', 'SubAccountDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') != null
    }
}

export class LocalAssetsApprovalDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of funds that must be reserved when creating a new approval.
     */
    get isV1401() {
        return this._chain.getConstantTypeHash('LocalAssets', 'ApprovalDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of funds that must be reserved when creating a new approval.
     */
    get asV1401(): bigint {
        assert(this.isV1401)
        return this._chain.getConstant('LocalAssets', 'ApprovalDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LocalAssets', 'ApprovalDeposit') != null
    }
}

export class LocalAssetsAssetAccountDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of funds that must be reserved for a non-provider asset account to be
     *  maintained.
     */
    get isV1401() {
        return this._chain.getConstantTypeHash('LocalAssets', 'AssetAccountDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of funds that must be reserved for a non-provider asset account to be
     *  maintained.
     */
    get asV1401(): bigint {
        assert(this.isV1401)
        return this._chain.getConstant('LocalAssets', 'AssetAccountDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LocalAssets', 'AssetAccountDeposit') != null
    }
}

export class LocalAssetsAssetDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved for an asset.
     */
    get isV1401() {
        return this._chain.getConstantTypeHash('LocalAssets', 'AssetDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved for an asset.
     */
    get asV1401(): bigint {
        assert(this.isV1401)
        return this._chain.getConstant('LocalAssets', 'AssetDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LocalAssets', 'AssetDeposit') != null
    }
}

export class LocalAssetsMetadataDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved when adding metadata to your asset.
     */
    get isV1401() {
        return this._chain.getConstantTypeHash('LocalAssets', 'MetadataDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved when adding metadata to your asset.
     */
    get asV1401(): bigint {
        assert(this.isV1401)
        return this._chain.getConstant('LocalAssets', 'MetadataDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LocalAssets', 'MetadataDepositBase') != null
    }
}

export class LocalAssetsMetadataDepositPerByteConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The additional funds that must be reserved for the number of bytes you store in your
     *  metadata.
     */
    get isV1401() {
        return this._chain.getConstantTypeHash('LocalAssets', 'MetadataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The additional funds that must be reserved for the number of bytes you store in your
     *  metadata.
     */
    get asV1401(): bigint {
        assert(this.isV1401)
        return this._chain.getConstant('LocalAssets', 'MetadataDepositPerByte')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LocalAssets', 'MetadataDepositPerByte') != null
    }
}

export class LocalAssetsStringLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum length of a name or symbol stored on-chain.
     */
    get isV1401() {
        return this._chain.getConstantTypeHash('LocalAssets', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum length of a name or symbol stored on-chain.
     */
    get asV1401(): number {
        assert(this.isV1401)
        return this._chain.getConstant('LocalAssets', 'StringLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LocalAssets', 'StringLimit') != null
    }
}

export class MoonbeamOrbitersMaxPoolSizeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of orbiters per collator.
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('MoonbeamOrbiters', 'MaxPoolSize') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of orbiters per collator.
     */
    get asV1801(): number {
        assert(this.isV1801)
        return this._chain.getConstant('MoonbeamOrbiters', 'MaxPoolSize')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('MoonbeamOrbiters', 'MaxPoolSize') != null
    }
}

export class MoonbeamOrbitersMaxRoundArchiveConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of round to keep on storage.
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('MoonbeamOrbiters', 'MaxRoundArchive') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of round to keep on storage.
     */
    get asV1801(): number {
        assert(this.isV1801)
        return this._chain.getConstant('MoonbeamOrbiters', 'MaxRoundArchive')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('MoonbeamOrbiters', 'MaxRoundArchive') != null
    }
}

export class MoonbeamOrbitersRotatePeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds before changing the selected orbiter.
     *  WARNING: when changing `RotatePeriod`, you need a migration code that sets
     *  `ForceRotation` to true to avoid holes in `OrbiterPerRound`.
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('MoonbeamOrbiters', 'RotatePeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds before changing the selected orbiter.
     *  WARNING: when changing `RotatePeriod`, you need a migration code that sets
     *  `ForceRotation` to true to avoid holes in `OrbiterPerRound`.
     */
    get asV1801(): number {
        assert(this.isV1801)
        return this._chain.getConstant('MoonbeamOrbiters', 'RotatePeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('MoonbeamOrbiters', 'RotatePeriod') != null
    }
}

export class ParachainStakingCandidateBondLessDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds candidate requests to decrease self-bond must wait to be executable
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'CandidateBondLessDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds candidate requests to decrease self-bond must wait to be executable
     */
    get asV1001(): number {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'CandidateBondLessDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'CandidateBondLessDelay') != null
    }
}

export class ParachainStakingDefaultBlocksPerRoundConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Default number of blocks per round at genesis
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'DefaultBlocksPerRound') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Default number of blocks per round at genesis
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'DefaultBlocksPerRound')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'DefaultBlocksPerRound') != null
    }
}

export class ParachainStakingDefaultCollatorCommissionConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Default commission due to collators, set at genesis
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'DefaultCollatorCommission') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Default commission due to collators, set at genesis
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'DefaultCollatorCommission')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'DefaultCollatorCommission') != null
    }
}

export class ParachainStakingDefaultParachainBondReservePercentConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Default percent of inflation set aside for parachain bond account
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'DefaultParachainBondReservePercent') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  Default percent of inflation set aside for parachain bond account
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'DefaultParachainBondReservePercent')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'DefaultParachainBondReservePercent') != null
    }
}

export class ParachainStakingDelegationBondLessDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds that delegation less requests must wait before executable
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'DelegationBondLessDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds that delegation less requests must wait before executable
     */
    get asV1001(): number {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'DelegationBondLessDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'DelegationBondLessDelay') != null
    }
}

export class ParachainStakingLeaveCandidatesDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds that collators remain bonded before exit request is executed
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'LeaveCandidatesDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds that collators remain bonded before exit request is executed
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'LeaveCandidatesDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'LeaveCandidatesDelay') != null
    }
}

export class ParachainStakingLeaveDelegatorsDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds that delegators remain bonded before exit request is executable
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'LeaveDelegatorsDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds that delegators remain bonded before exit request is executable
     */
    get asV1001(): number {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'LeaveDelegatorsDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'LeaveDelegatorsDelay') != null
    }
}

export class ParachainStakingLeaveNominatorsDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds that nominators remain bonded before exit request is executed
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'LeaveNominatorsDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds that nominators remain bonded before exit request is executed
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'LeaveNominatorsDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'LeaveNominatorsDelay') != null
    }
}

export class ParachainStakingMaxBottomDelegationsPerCandidateConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum bottom delegations (not counted) per candidate
     */
    get isV1201() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxBottomDelegationsPerCandidate') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum bottom delegations (not counted) per candidate
     */
    get asV1201(): number {
        assert(this.isV1201)
        return this._chain.getConstant('ParachainStaking', 'MaxBottomDelegationsPerCandidate')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxBottomDelegationsPerCandidate') != null
    }
}

export class ParachainStakingMaxCollatorsPerNominatorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum collators per nominator
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxCollatorsPerNominator') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum collators per nominator
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'MaxCollatorsPerNominator')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxCollatorsPerNominator') != null
    }
}

export class ParachainStakingMaxDelegationsPerDelegatorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum delegations per delegator
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxDelegationsPerDelegator') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum delegations per delegator
     */
    get asV1001(): number {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'MaxDelegationsPerDelegator')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxDelegationsPerDelegator') != null
    }
}

export class ParachainStakingMaxDelegatorsPerCandidateConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum delegators counted per candidate
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxDelegatorsPerCandidate') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum delegators counted per candidate
     */
    get asV1001(): number {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'MaxDelegatorsPerCandidate')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxDelegatorsPerCandidate') != null
    }
}

export class ParachainStakingMaxNominatorsPerCollatorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum nominators counted per collator
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxNominatorsPerCollator') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum nominators counted per collator
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'MaxNominatorsPerCollator')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxNominatorsPerCollator') != null
    }
}

export class ParachainStakingMaxTopDelegationsPerCandidateConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum top delegations counted per candidate
     */
    get isV1201() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxTopDelegationsPerCandidate') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum top delegations counted per candidate
     */
    get asV1201(): number {
        assert(this.isV1201)
        return this._chain.getConstant('ParachainStaking', 'MaxTopDelegationsPerCandidate')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MaxTopDelegationsPerCandidate') != null
    }
}

export class ParachainStakingMinBlocksPerRoundConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum number of blocks per round
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinBlocksPerRound') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Minimum number of blocks per round
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'MinBlocksPerRound')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinBlocksPerRound') != null
    }
}

export class ParachainStakingMinCandidateStkConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum stake required for any account to be a collator candidate
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinCandidateStk') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum stake required for any account to be a collator candidate
     */
    get asV1001(): bigint {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'MinCandidateStk')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinCandidateStk') != null
    }
}

export class ParachainStakingMinCollatorCandidateStkConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum stake required for any account to be a collator candidate
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinCollatorCandidateStk') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum stake required for any account to be a collator candidate
     */
    get asV200(): bigint {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'MinCollatorCandidateStk')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinCollatorCandidateStk') != null
    }
}

export class ParachainStakingMinCollatorStkConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum stake required for any account to be in `SelectedCandidates` for the round
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinCollatorStk') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum stake required for any account to be in `SelectedCandidates` for the round
     */
    get asV200(): bigint {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'MinCollatorStk')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinCollatorStk') != null
    }
}

export class ParachainStakingMinDelegationConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum stake for any registered on-chain account to delegate
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinDelegation') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum stake for any registered on-chain account to delegate
     */
    get asV1001(): bigint {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'MinDelegation')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinDelegation') != null
    }
}

export class ParachainStakingMinDelegatorStkConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum stake for any registered on-chain account to be a delegator
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinDelegatorStk') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum stake for any registered on-chain account to be a delegator
     */
    get asV1001(): bigint {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'MinDelegatorStk')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinDelegatorStk') != null
    }
}

export class ParachainStakingMinNominationConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum stake for any registered on-chain account to nominate
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinNomination') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum stake for any registered on-chain account to nominate
     */
    get asV200(): bigint {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'MinNomination')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinNomination') != null
    }
}

export class ParachainStakingMinNominatorStkConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum stake for any registered on-chain account to become a nominator
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinNominatorStk') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum stake for any registered on-chain account to become a nominator
     */
    get asV200(): bigint {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'MinNominatorStk')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinNominatorStk') != null
    }
}

export class ParachainStakingMinSelectedCandidatesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum number of selected candidates every round
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinSelectedCandidates') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Minimum number of selected candidates every round
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'MinSelectedCandidates')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'MinSelectedCandidates') != null
    }
}

export class ParachainStakingRevokeDelegationDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds that delegations remain bonded before revocation request is executable
     */
    get isV1001() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'RevokeDelegationDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds that delegations remain bonded before revocation request is executable
     */
    get asV1001(): number {
        assert(this.isV1001)
        return this._chain.getConstant('ParachainStaking', 'RevokeDelegationDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'RevokeDelegationDelay') != null
    }
}

export class ParachainStakingRevokeNominationDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds that nominations remain bonded before revocation request is executed
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'RevokeNominationDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds that nominations remain bonded before revocation request is executed
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'RevokeNominationDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'RevokeNominationDelay') != null
    }
}

export class ParachainStakingRewardPaymentDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of rounds after which block authors are rewarded
     */
    get isV200() {
        return this._chain.getConstantTypeHash('ParachainStaking', 'RewardPaymentDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of rounds after which block authors are rewarded
     */
    get asV200(): number {
        assert(this.isV200)
        return this._chain.getConstant('ParachainStaking', 'RewardPaymentDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('ParachainStaking', 'RewardPaymentDelay') != null
    }
}

export class ProxyAnnouncementDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The base amount of currency needed to reserve for creating an announcement.
     * 
     *  This is held when a new storage item holding a `Balance` is created (typically 16 bytes).
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The base amount of currency needed to reserve for creating an announcement.
     * 
     *  This is held when a new storage item holding a `Balance` is created (typically 16 bytes).
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Proxy', 'AnnouncementDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') != null
    }
}

export class ProxyAnnouncementDepositFactorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of currency needed per announcement made.
     * 
     *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
     *  into a pre-existing storage value.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of currency needed per announcement made.
     * 
     *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
     *  into a pre-existing storage value.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Proxy', 'AnnouncementDepositFactor')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') != null
    }
}

export class ProxyMaxPendingConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum amount of time-delayed announcements that are allowed to be pending.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Proxy', 'MaxPending') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum amount of time-delayed announcements that are allowed to be pending.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Proxy', 'MaxPending')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'MaxPending') != null
    }
}

export class ProxyMaxProxiesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum amount of proxies allowed for a single account.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    /**
     *  The maximum amount of proxies allowed for a single account.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Proxy', 'MaxProxies')
    }

    /**
     *  The maximum amount of proxies allowed for a single account.
     */
    get isV53() {
        return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum amount of proxies allowed for a single account.
     */
    get asV53(): number {
        assert(this.isV53)
        return this._chain.getConstant('Proxy', 'MaxProxies')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') != null
    }
}

export class ProxyProxyDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The base amount of currency needed to reserve for creating a proxy.
     * 
     *  This is held for an additional storage item whose value size is
     *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The base amount of currency needed to reserve for creating a proxy.
     * 
     *  This is held for an additional storage item whose value size is
     *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Proxy', 'ProxyDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') != null
    }
}

export class ProxyProxyDepositFactorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of currency needed per proxy added.
     * 
     *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a pre-existing
     *  storage value. Thus, when configuring `ProxyDepositFactor` one should take into account
     *  `32 + proxy_type.encode().len()` bytes of data.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of currency needed per proxy added.
     * 
     *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a pre-existing
     *  storage value. Thus, when configuring `ProxyDepositFactor` one should take into account
     *  `32 + proxy_type.encode().len()` bytes of data.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Proxy', 'ProxyDepositFactor')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') != null
    }
}

export class RandomnessBlockExpirationDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Local requests expire and can be purged from storage after this many blocks/epochs
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('Randomness', 'BlockExpirationDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Local requests expire and can be purged from storage after this many blocks/epochs
     */
    get asV1801(): number {
        assert(this.isV1801)
        return this._chain.getConstant('Randomness', 'BlockExpirationDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Randomness', 'BlockExpirationDelay') != null
    }
}

export class RandomnessDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount that should be taken as a security deposit when requesting randomness.
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('Randomness', 'Deposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount that should be taken as a security deposit when requesting randomness.
     */
    get asV1801(): bigint {
        assert(this.isV1801)
        return this._chain.getConstant('Randomness', 'Deposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Randomness', 'Deposit') != null
    }
}

export class RandomnessEpochExpirationDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Babe requests expire and can be purged from storage after this many blocks/epochs
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('Randomness', 'EpochExpirationDelay') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Babe requests expire and can be purged from storage after this many blocks/epochs
     */
    get asV1801(): bigint {
        assert(this.isV1801)
        return this._chain.getConstant('Randomness', 'EpochExpirationDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Randomness', 'EpochExpirationDelay') != null
    }
}

export class RandomnessMaxBlockDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Local per-block VRF requests must be at most this many blocks after the block in which
     *  they were requested
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('Randomness', 'MaxBlockDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Local per-block VRF requests must be at most this many blocks after the block in which
     *  they were requested
     */
    get asV1801(): number {
        assert(this.isV1801)
        return this._chain.getConstant('Randomness', 'MaxBlockDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Randomness', 'MaxBlockDelay') != null
    }
}

export class RandomnessMaxRandomWordsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of random words that can be requested per request
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('Randomness', 'MaxRandomWords') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  Maximum number of random words that can be requested per request
     */
    get asV1801(): number {
        assert(this.isV1801)
        return this._chain.getConstant('Randomness', 'MaxRandomWords')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Randomness', 'MaxRandomWords') != null
    }
}

export class RandomnessMinBlockDelayConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Local per-block VRF requests must be at least this many blocks after the block in which
     *  they were requested
     */
    get isV1801() {
        return this._chain.getConstantTypeHash('Randomness', 'MinBlockDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Local per-block VRF requests must be at least this many blocks after the block in which
     *  they were requested
     */
    get asV1801(): number {
        assert(this.isV1801)
        return this._chain.getConstant('Randomness', 'MinBlockDelay')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Randomness', 'MinBlockDelay') != null
    }
}

export class SchedulerMaxScheduledPerBlockConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of scheduled calls in the queue for a single block.
     *  Not strictly enforced, but used for weight estimation.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of scheduled calls in the queue for a single block.
     *  Not strictly enforced, but used for weight estimation.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Scheduler', 'MaxScheduledPerBlock')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') != null
    }
}

export class SchedulerMaximumWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables of less priority
     *  than `schedule::HARD_DEADLINE`.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables of less priority
     *  than `schedule::HARD_DEADLINE`.
     */
    get asV701(): bigint {
        assert(this.isV701)
        return this._chain.getConstant('Scheduler', 'MaximumWeight')
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables of less
     *  priority than `schedule::HARD_DEADLINE`.
     */
    get isV1901() {
        return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === '1b058ef6de7359608215c10da8805ac54828d3049661d044ee918c62627b6885'
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables of less
     *  priority than `schedule::HARD_DEADLINE`.
     */
    get asV1901(): v1901.Weight {
        assert(this.isV1901)
        return this._chain.getConstant('Scheduler', 'MaximumWeight')
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables.
     */
    get isV2000() {
        return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables.
     */
    get asV2000(): v2000.Weight {
        assert(this.isV2000)
        return this._chain.getConstant('Scheduler', 'MaximumWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') != null
    }
}

export class SystemBlockHashCountConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    get isV49() {
        return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('System', 'BlockHashCount')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockHashCount') != null
    }
}

export class SystemBlockLengthConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum length of a block (in bytes).
     */
    get isV49() {
        return this._chain.getConstantTypeHash('System', 'BlockLength') === '9aacf667c67dbae172e6d30e5f4026086c8a56d9ebfe50dfdcca3fe40a9f55ca'
    }

    /**
     *  The maximum length of a block (in bytes).
     */
    get asV49(): v49.BlockLength {
        assert(this.isV49)
        return this._chain.getConstant('System', 'BlockLength')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockLength') != null
    }
}

export class SystemBlockWeightsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'd29c2183888a350ee5f1702b52be3920c60d1d8dd2937c2870d4ec0d78845224'
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get asV49(): v49.BlockWeights {
        assert(this.isV49)
        return this._chain.getConstant('System', 'BlockWeights')
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get isV1901() {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'ec3db939326335562b7b8567675fe4ea6cf2eafd9f5adf1012604a6e2fed11eb'
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get asV1901(): v1901.BlockWeights {
        assert(this.isV1901)
        return this._chain.getConstant('System', 'BlockWeights')
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get isV2000() {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'fa5692d9032f25a42ae01892fea053f75130751d1302a6b4db45a7a98a9d0760'
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get asV2000(): v2000.BlockWeights {
        assert(this.isV2000)
        return this._chain.getConstant('System', 'BlockWeights')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') != null
    }
}

export class SystemDbWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
    }

    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    get asV49(): v49.RuntimeDbWeight {
        assert(this.isV49)
        return this._chain.getConstant('System', 'DbWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'DbWeight') != null
    }
}

export class SystemSS58PrefixConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('System', 'SS58Prefix') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('System', 'SS58Prefix')
    }

    /**
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get isV155() {
        return this._chain.getConstantTypeHash('System', 'SS58Prefix') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    /**
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('System', 'SS58Prefix')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'SS58Prefix') != null
    }
}

export class SystemVersionConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Get the chain's current version.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('System', 'Version') === '331cab7f5b01df97410a7d65f2beb14b0e15a09ec584fa330199159b310ef545'
    }

    /**
     *  Get the chain's current version.
     */
    get asV49(): v49.RuntimeVersion {
        assert(this.isV49)
        return this._chain.getConstant('System', 'Version')
    }

    /**
     *  Get the chain's current version.
     */
    get isV1300() {
        return this._chain.getConstantTypeHash('System', 'Version') === 'f6a7df964a5f6d420bccc7ccc38bd9265b00dc71b74c91dc5848badeeaf0cbb8'
    }

    /**
     *  Get the chain's current version.
     */
    get asV1300(): v1300.RuntimeVersion {
        assert(this.isV1300)
        return this._chain.getConstant('System', 'Version')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'Version') != null
    }
}

export class TimestampMinimumPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum period between blocks. Beware that this is different to the *expected* period
     *  that the block production apparatus provides. Your chosen consensus system will generally
     *  work with this to determine a sensible block time. e.g. For Aura, it will be double this
     *  period on default settings.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  The minimum period between blocks. Beware that this is different to the *expected* period
     *  that the block production apparatus provides. Your chosen consensus system will generally
     *  work with this to determine a sensible block time. e.g. For Aura, it will be double this
     *  period on default settings.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Timestamp', 'MinimumPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') != null
    }
}

export class TransactionPaymentLengthToFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The polynomial that is applied in order to derive fee from length.
     */
    get isV1605() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'LengthToFee') === 'd295ff43faa22aacf9488b0758072675f9ec61f6824e26dcea8a5c3dcf215b78'
    }

    /**
     *  The polynomial that is applied in order to derive fee from length.
     */
    get asV1605(): v1605.WeightToFeeCoefficient[] {
        assert(this.isV1605)
        return this._chain.getConstant('TransactionPayment', 'LengthToFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'LengthToFee') != null
    }
}

export class TransactionPaymentOperationalFeeMultiplierConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
     *  `priority`
     * 
     *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
     *  added to a tip component in regular `priority` calculations.
     *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
     *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
     * 
     *  ```rust,ignore
     *  // For `Normal`
     *  let priority = priority_calc(tip);
     * 
     *  // For `Operational`
     *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
     *  let priority = priority_calc(tip + virtual_tip);
     *  ```
     * 
     *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
     *  sent with the transaction. So, not only does the transaction get a priority bump based
     *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
     *  transactions.
     */
    get isV900() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
     *  `priority`
     * 
     *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
     *  added to a tip component in regular `priority` calculations.
     *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
     *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
     * 
     *  ```rust,ignore
     *  // For `Normal`
     *  let priority = priority_calc(tip);
     * 
     *  // For `Operational`
     *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
     *  let priority = priority_calc(tip + virtual_tip);
     *  ```
     * 
     *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
     *  sent with the transaction. So, not only does the transaction get a priority bump based
     *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
     *  transactions.
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.getConstant('TransactionPayment', 'OperationalFeeMultiplier')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') != null
    }
}

export class TransactionPaymentTransactionByteFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The fee to be paid for making a transaction; the per-byte portion.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The fee to be paid for making a transaction; the per-byte portion.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('TransactionPayment', 'TransactionByteFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') != null
    }
}

export class TransactionPaymentWeightToFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The polynomial that is applied in order to derive fee from weight.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') === 'd295ff43faa22aacf9488b0758072675f9ec61f6824e26dcea8a5c3dcf215b78'
    }

    /**
     *  The polynomial that is applied in order to derive fee from weight.
     */
    get asV49(): v49.WeightToFeeCoefficient[] {
        assert(this.isV49)
        return this._chain.getConstant('TransactionPayment', 'WeightToFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') != null
    }
}

export class TreasuryBurnConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Percentage of spare funds (if any) that are burnt per spend period.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Treasury', 'Burn') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Percentage of spare funds (if any) that are burnt per spend period.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Treasury', 'Burn')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'Burn') != null
    }
}

export class TreasuryMaxApprovalsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of approvals that can wait in the spending queue.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of approvals that can wait in the spending queue.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Treasury', 'MaxApprovals')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') != null
    }
}

export class TreasuryPalletIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The treasury's module id, used for deriving its sovereign account ID.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Treasury', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
    }

    /**
     *  The treasury's module id, used for deriving its sovereign account ID.
     */
    get asV49(): Uint8Array {
        assert(this.isV49)
        return this._chain.getConstant('Treasury', 'PalletId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'PalletId') != null
    }
}

export class TreasuryProposalBondConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Fraction of a proposal's value that should be bonded in order to place the proposal.
     *  An accepted proposal gets these back. A rejected proposal does not.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Fraction of a proposal's value that should be bonded in order to place the proposal.
     *  An accepted proposal gets these back. A rejected proposal does not.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Treasury', 'ProposalBond')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') != null
    }
}

export class TreasuryProposalBondMaximumConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    get isV1300() {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
    }

    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    get asV1300(): (bigint | undefined) {
        assert(this.isV1300)
        return this._chain.getConstant('Treasury', 'ProposalBondMaximum')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') != null
    }
}

export class TreasuryProposalBondMinimumConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    get asV49(): bigint {
        assert(this.isV49)
        return this._chain.getConstant('Treasury', 'ProposalBondMinimum')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') != null
    }
}

export class TreasurySpendPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Period between successive spends.
     */
    get isV49() {
        return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Period between successive spends.
     */
    get asV49(): number {
        assert(this.isV49)
        return this._chain.getConstant('Treasury', 'SpendPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') != null
    }
}

export class Utilitybatched_calls_limitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The limit on the number of batched calls.
     */
    get isV701() {
        return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The limit on the number of batched calls.
     */
    get asV701(): number {
        assert(this.isV701)
        return this._chain.getConstant('Utility', 'batched_calls_limit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') != null
    }
}

export class XTokensBaseXcmWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Base XCM weight.
     * 
     *  The actually weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Base XCM weight.
     * 
     *  The actually weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    get asV1101(): bigint {
        assert(this.isV1101)
        return this._chain.getConstant('XTokens', 'BaseXcmWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') != null
    }
}

export class XTokensSelfLocationConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Self chain location.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') === '596335720c12dda4acafdb8b7ed539c4b47f1563ed97456e9a3fcd771714568c'
    }

    /**
     *  Self chain location.
     */
    get asV1101(): v1101.V1MultiLocation {
        assert(this.isV1101)
        return this._chain.getConstant('XTokens', 'SelfLocation')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') != null
    }
}

export class XcmTransactorBaseXcmWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     * 
     *  The actual weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('XcmTransactor', 'BaseXcmWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     * 
     *  The actual weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    get asV1101(): bigint {
        assert(this.isV1101)
        return this._chain.getConstant('XcmTransactor', 'BaseXcmWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('XcmTransactor', 'BaseXcmWeight') != null
    }
}

export class XcmTransactorSelfLocationConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Self chain location.
     */
    get isV1101() {
        return this._chain.getConstantTypeHash('XcmTransactor', 'SelfLocation') === '596335720c12dda4acafdb8b7ed539c4b47f1563ed97456e9a3fcd771714568c'
    }

    /**
     *  Self chain location.
     */
    get asV1101(): v1101.V1MultiLocation {
        assert(this.isV1101)
        return this._chain.getConstant('XcmTransactor', 'SelfLocation')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('XcmTransactor', 'SelfLocation') != null
    }
}
