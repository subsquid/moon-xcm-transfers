import type {Result, Option} from './support'

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export type Event = Event_System | Event_ParachainSystem | Event_Balances | Event_ParachainStaking | Event_AuthorFilter | Event_AuthorMapping | Event_Utility | Event_Proxy | Event_EVM | Event_Ethereum | Event_Scheduler | Event_Democracy | Event_CouncilCollective | Event_TechComitteeCollective | Event_Treasury | Event_CrowdloanRewards

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingEvent
}

export interface Event_AuthorFilter {
    __kind: 'AuthorFilter'
    value: AuthorFilterEvent
}

export interface Event_AuthorMapping {
    __kind: 'AuthorMapping'
    value: AuthorMappingEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_EVM {
    __kind: 'EVM'
    value: EVMEvent
}

export interface Event_Ethereum {
    __kind: 'Ethereum'
    value: EthereumEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_CouncilCollective {
    __kind: 'CouncilCollective'
    value: CouncilCollectiveEvent
}

export interface Event_TechComitteeCollective {
    __kind: 'TechComitteeCollective'
    value: TechComitteeCollectiveEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_CrowdloanRewards {
    __kind: 'CrowdloanRewards'
    value: CrowdloanRewardsEvent
}

export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 *  An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 *  An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 *  A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: Uint8Array
}

/**
 *  An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: Uint8Array
}

/**
 *  On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    value: [Uint8Array, Uint8Array]
}

export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed

/**
 *  The validation function has been scheduled to apply as of the contained relay chain
 *  block number.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
    __kind: 'ValidationFunctionStored'
    value: number
}

/**
 *  The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
    __kind: 'ValidationFunctionApplied'
    value: number
}

/**
 *  An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
    __kind: 'UpgradeAuthorized'
    value: Uint8Array
}

/**
 *  Some downward messages have been received and will be processed.
 *  \[ count \]
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
    __kind: 'DownwardMessagesReceived'
    value: number
}

/**
 *  Downward messages were processed using the given weight.
 *  \[ weight_used, result_mqc_head \]
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
    __kind: 'DownwardMessagesProcessed'
    value: [bigint, Uint8Array]
}

export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 *  An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [Uint8Array, bigint]
}

/**
 *  Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 *  \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [Uint8Array, Uint8Array, bigint, BalanceStatus]
}

export type ParachainStakingEvent = ParachainStakingEvent_NewRound | ParachainStakingEvent_JoinedCollatorCandidates | ParachainStakingEvent_CollatorChosen | ParachainStakingEvent_CollatorBondedMore | ParachainStakingEvent_CollatorBondedLess | ParachainStakingEvent_CollatorWentOffline | ParachainStakingEvent_CollatorBackOnline | ParachainStakingEvent_CollatorScheduledExit | ParachainStakingEvent_CollatorLeft | ParachainStakingEvent_NominationIncreased | ParachainStakingEvent_NominationDecreased | ParachainStakingEvent_NominatorExitScheduled | ParachainStakingEvent_NominationRevocationScheduled | ParachainStakingEvent_NominatorLeft | ParachainStakingEvent_Nomination | ParachainStakingEvent_NominatorLeftCollator | ParachainStakingEvent_Rewarded | ParachainStakingEvent_ReservedForParachainBond | ParachainStakingEvent_ParachainBondAccountSet | ParachainStakingEvent_ParachainBondReservePercentSet | ParachainStakingEvent_InflationSet | ParachainStakingEvent_StakeExpectationsSet | ParachainStakingEvent_TotalSelectedSet | ParachainStakingEvent_CollatorCommissionSet | ParachainStakingEvent_BlocksPerRoundSet

/**
 *  Starting Block, Round, Number of Collators Selected, Total Balance
 */
export interface ParachainStakingEvent_NewRound {
    __kind: 'NewRound'
    value: [number, number, number, bigint]
}

/**
 *  Account, Amount Locked, New Total Amt Locked
 */
export interface ParachainStakingEvent_JoinedCollatorCandidates {
    __kind: 'JoinedCollatorCandidates'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Round, Collator Account, Total Exposed Amount (includes all nominations)
 */
export interface ParachainStakingEvent_CollatorChosen {
    __kind: 'CollatorChosen'
    value: [number, Uint8Array, bigint]
}

/**
 *  Collator Account, Old Bond, New Bond
 */
export interface ParachainStakingEvent_CollatorBondedMore {
    __kind: 'CollatorBondedMore'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Collator Account, Old Bond, New Bond
 */
export interface ParachainStakingEvent_CollatorBondedLess {
    __kind: 'CollatorBondedLess'
    value: [Uint8Array, bigint, bigint]
}

export interface ParachainStakingEvent_CollatorWentOffline {
    __kind: 'CollatorWentOffline'
    value: [number, Uint8Array]
}

export interface ParachainStakingEvent_CollatorBackOnline {
    __kind: 'CollatorBackOnline'
    value: [number, Uint8Array]
}

/**
 *  Round, Collator Account, Scheduled Exit
 */
export interface ParachainStakingEvent_CollatorScheduledExit {
    __kind: 'CollatorScheduledExit'
    value: [number, Uint8Array, number]
}

/**
 *  Account, Amount Unlocked, New Total Amt Locked
 */
export interface ParachainStakingEvent_CollatorLeft {
    __kind: 'CollatorLeft'
    value: [Uint8Array, bigint, bigint]
}

export interface ParachainStakingEvent_NominationIncreased {
    __kind: 'NominationIncreased'
    value: [Uint8Array, Uint8Array, bigint, boolean, bigint]
}

export interface ParachainStakingEvent_NominationDecreased {
    __kind: 'NominationDecreased'
    value: [Uint8Array, Uint8Array, bigint, boolean, bigint]
}

/**
 *  Round, Nominator, Scheduled Exit
 */
export interface ParachainStakingEvent_NominatorExitScheduled {
    __kind: 'NominatorExitScheduled'
    value: [number, Uint8Array, number]
}

/**
 *  Round, Nominator, Collator, Scheduled Exit
 */
export interface ParachainStakingEvent_NominationRevocationScheduled {
    __kind: 'NominationRevocationScheduled'
    value: [number, Uint8Array, Uint8Array, number]
}

/**
 *  Nominator, Amount Unstaked
 */
export interface ParachainStakingEvent_NominatorLeft {
    __kind: 'NominatorLeft'
    value: [Uint8Array, bigint]
}

/**
 *  Nominator, Amount Locked, Collator, Nominator Position with New Total Backing if in Top
 */
export interface ParachainStakingEvent_Nomination {
    __kind: 'Nomination'
    value: [Uint8Array, bigint, Uint8Array, NominatorAdded]
}

/**
 *  Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
 */
export interface ParachainStakingEvent_NominatorLeftCollator {
    __kind: 'NominatorLeftCollator'
    value: [Uint8Array, Uint8Array, bigint, bigint]
}

/**
 *  Paid the account (nominator or collator) the balance as liquid rewards
 */
export interface ParachainStakingEvent_Rewarded {
    __kind: 'Rewarded'
    value: [Uint8Array, bigint]
}

/**
 *  Transferred to account which holds funds reserved for parachain bond
 */
export interface ParachainStakingEvent_ReservedForParachainBond {
    __kind: 'ReservedForParachainBond'
    value: [Uint8Array, bigint]
}

/**
 *  Account (re)set for parachain bond treasury [old, new]
 */
export interface ParachainStakingEvent_ParachainBondAccountSet {
    __kind: 'ParachainBondAccountSet'
    value: [Uint8Array, Uint8Array]
}

/**
 *  Percent of inflation reserved for parachain bond (re)set [old, new]
 */
export interface ParachainStakingEvent_ParachainBondReservePercentSet {
    __kind: 'ParachainBondReservePercentSet'
    value: [number, number]
}

/**
 *  Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
 */
export interface ParachainStakingEvent_InflationSet {
    __kind: 'InflationSet'
    value: [number, number, number, number, number, number]
}

/**
 *  Staking expectations set
 */
export interface ParachainStakingEvent_StakeExpectationsSet {
    __kind: 'StakeExpectationsSet'
    value: [bigint, bigint, bigint]
}

/**
 *  Set total selected candidates to this value [old, new]
 */
export interface ParachainStakingEvent_TotalSelectedSet {
    __kind: 'TotalSelectedSet'
    value: [number, number]
}

/**
 *  Set collator commission to this value [old, new]
 */
export interface ParachainStakingEvent_CollatorCommissionSet {
    __kind: 'CollatorCommissionSet'
    value: [number, number]
}

/**
 *  Set blocks per round [current_round, first_block, old, new, new_per_round_inflation]
 */
export interface ParachainStakingEvent_BlocksPerRoundSet {
    __kind: 'BlocksPerRoundSet'
    value: [number, number, number, number, number, number, number]
}

export type AuthorFilterEvent = AuthorFilterEvent_EligibleUpdated

/**
 *  The amount of eligible authors for the filter to select has been changed.
 */
export interface AuthorFilterEvent_EligibleUpdated {
    __kind: 'EligibleUpdated'
    value: number
}

export type AuthorMappingEvent = AuthorMappingEvent_AuthorRegistered | AuthorMappingEvent_AuthorDeRegistered | AuthorMappingEvent_AuthorRotated | AuthorMappingEvent_DefunctAuthorBusted

/**
 *  An AuthorId has been registered and mapped to an AccountId.
 */
export interface AuthorMappingEvent_AuthorRegistered {
    __kind: 'AuthorRegistered'
    value: [Uint8Array, Uint8Array]
}

/**
 *  An AuthorId has been de-registered, and its AccountId mapping removed.
 */
export interface AuthorMappingEvent_AuthorDeRegistered {
    __kind: 'AuthorDeRegistered'
    value: Uint8Array
}

/**
 *  An AuthorId has been registered, replacing a previous registration and its mapping.
 */
export interface AuthorMappingEvent_AuthorRotated {
    __kind: 'AuthorRotated'
    value: [Uint8Array, Uint8Array]
}

/**
 *  An AuthorId has been forcibly deregistered after not being rotated or cleaned up.
 *  The reporteing account has been rewarded accordingly.
 */
export interface AuthorMappingEvent_DefunctAuthorBusted {
    __kind: 'DefunctAuthorBusted'
    value: [Uint8Array, Uint8Array]
}

export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted

/**
 *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *  well as the error. \[index, error\]
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

/**
 *  Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_AnonymousCreated | ProxyEvent_Announced

/**
 *  A proxy was executed correctly, with the given \[result\].
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    value: DispatchResult
}

/**
 *  Anonymous account has been created by new proxy with given
 *  disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
 */
export interface ProxyEvent_AnonymousCreated {
    __kind: 'AnonymousCreated'
    value: [Uint8Array, Uint8Array, ProxyType, number]
}

/**
 *  An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    value: [Uint8Array, Uint8Array, Uint8Array]
}

export type EVMEvent = EVMEvent_Log | EVMEvent_Created | EVMEvent_CreatedFailed | EVMEvent_Executed | EVMEvent_ExecutedFailed | EVMEvent_BalanceDeposit | EVMEvent_BalanceWithdraw

/**
 *  Ethereum events from contracts.
 */
export interface EVMEvent_Log {
    __kind: 'Log'
    value: EvmLog
}

/**
 *  A contract has been created at given \[address\].
 */
export interface EVMEvent_Created {
    __kind: 'Created'
    value: Uint8Array
}

/**
 *  A \[contract\] was attempted to be created, but the execution failed.
 */
export interface EVMEvent_CreatedFailed {
    __kind: 'CreatedFailed'
    value: Uint8Array
}

/**
 *  A \[contract\] has been executed successfully with states applied.
 */
export interface EVMEvent_Executed {
    __kind: 'Executed'
    value: Uint8Array
}

/**
 *  A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
 */
export interface EVMEvent_ExecutedFailed {
    __kind: 'ExecutedFailed'
    value: Uint8Array
}

/**
 *  A deposit has been made at a given address. \[sender, address, value\]
 */
export interface EVMEvent_BalanceDeposit {
    __kind: 'BalanceDeposit'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A withdrawal has been made from a given address. \[sender, address, value\]
 */
export interface EVMEvent_BalanceWithdraw {
    __kind: 'BalanceWithdraw'
    value: [Uint8Array, Uint8Array, bigint]
}

export type EthereumEvent = EthereumEvent_Executed

/**
 *  An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
 */
export interface EthereumEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, Uint8Array, Uint8Array, ExitReason]
}

export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched

/**
 *  Scheduled some task. \[when, index\]
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    value: [number, number]
}

/**
 *  Canceled some task. \[when, index\]
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    value: [number, number]
}

/**
 *  Dispatched some task. \[task, id, result\]
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    value: [[number, number], (Uint8Array | undefined), DispatchResult]
}

export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Unlocked | DemocracyEvent_Blacklisted

/**
 *  A motion has been proposed by a public account. \[proposal_index, deposit\]
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [number, bigint]
}

/**
 *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [number, bigint, Uint8Array[]]
}

/**
 *  An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 *  A referendum has begun. \[ref_index, threshold\]
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [number, VoteThreshold]
}

/**
 *  A proposal has been approved by referendum. \[ref_index\]
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: number
}

/**
 *  A proposal has been rejected by referendum. \[ref_index\]
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: number
}

/**
 *  A referendum has been cancelled. \[ref_index\]
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: number
}

/**
 *  A proposal has been enacted. \[ref_index, is_ok\]
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [number, boolean]
}

/**
 *  An account has delegated their vote to another account. \[who, target\]
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [Uint8Array, Uint8Array]
}

/**
 *  An \[account\] has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: Uint8Array
}

/**
 *  An external proposal has been vetoed. \[who, proposal_hash, until\]
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [Uint8Array, Uint8Array, number]
}

/**
 *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal preimage was removed and used (the deposit was returned).
 *  \[proposal_hash, provider, deposit\]
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal could not be executed because its preimage was invalid.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [Uint8Array, number]
}

/**
 *  A proposal could not be executed because its preimage was missing.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [Uint8Array, number]
}

/**
 *  A registered preimage was removed and the deposit collected by the reaper.
 *  \[proposal_hash, provider, deposit, reaper\]
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [Uint8Array, Uint8Array, bigint, Uint8Array]
}

/**
 *  An \[account\] has been unlocked successfully.
 */
export interface DemocracyEvent_Unlocked {
    __kind: 'Unlocked'
    value: Uint8Array
}

/**
 *  A proposal \[hash\] has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    value: Uint8Array
}

export type CouncilCollectiveEvent = CouncilCollectiveEvent_Proposed | CouncilCollectiveEvent_Voted | CouncilCollectiveEvent_Approved | CouncilCollectiveEvent_Disapproved | CouncilCollectiveEvent_Executed | CouncilCollectiveEvent_MemberExecuted | CouncilCollectiveEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface CouncilCollectiveEvent_Proposed {
    __kind: 'Proposed'
    value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface CouncilCollectiveEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilCollectiveEvent_Approved {
    __kind: 'Approved'
    value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilCollectiveEvent_Disapproved {
    __kind: 'Disapproved'
    value: Uint8Array
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilCollectiveEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilCollectiveEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface CouncilCollectiveEvent_Closed {
    __kind: 'Closed'
    value: [Uint8Array, number, number]
}

export type TechComitteeCollectiveEvent = TechComitteeCollectiveEvent_Proposed | TechComitteeCollectiveEvent_Voted | TechComitteeCollectiveEvent_Approved | TechComitteeCollectiveEvent_Disapproved | TechComitteeCollectiveEvent_Executed | TechComitteeCollectiveEvent_MemberExecuted | TechComitteeCollectiveEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface TechComitteeCollectiveEvent_Proposed {
    __kind: 'Proposed'
    value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface TechComitteeCollectiveEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechComitteeCollectiveEvent_Approved {
    __kind: 'Approved'
    value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechComitteeCollectiveEvent_Disapproved {
    __kind: 'Disapproved'
    value: Uint8Array
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechComitteeCollectiveEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechComitteeCollectiveEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface TechComitteeCollectiveEvent_Closed {
    __kind: 'Closed'
    value: [Uint8Array, number, number]
}

export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit

/**
 *  New proposal. \[proposal_index\]
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    value: number
}

/**
 *  We have ended a spend period and will now allocate funds. \[budget_remaining\]
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    value: bigint
}

/**
 *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    value: [number, bigint, Uint8Array]
}

/**
 *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    value: [number, bigint]
}

/**
 *  Some of our funds have been burnt. \[burn\]
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    value: bigint
}

/**
 *  Spending has finished; this is the amount that rolls over until next spend.
 *  \[budget_remaining\]
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    value: bigint
}

/**
 *  Some funds have been deposited. \[deposit\]
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

export type CrowdloanRewardsEvent = CrowdloanRewardsEvent_InitialPaymentMade | CrowdloanRewardsEvent_NativeIdentityAssociated | CrowdloanRewardsEvent_RewardsPaid | CrowdloanRewardsEvent_RewardAddressUpdated | CrowdloanRewardsEvent_InitializedAlreadyInitializedAccount | CrowdloanRewardsEvent_InitializedAccountWithNotEnoughContribution

/**
 *  The initial payment of InitializationPayment % was paid
 */
export interface CrowdloanRewardsEvent_InitialPaymentMade {
    __kind: 'InitialPaymentMade'
    value: [Uint8Array, bigint]
}

/**
 *  Someone has proven they made a contribution and associated a native identity with it.
 *  Data is the relay account,  native account and the total amount of _rewards_ that will be paid
 */
export interface CrowdloanRewardsEvent_NativeIdentityAssociated {
    __kind: 'NativeIdentityAssociated'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A contributor has claimed some rewards.
 *  Data is the account getting paid and the amount of rewards paid.
 */
export interface CrowdloanRewardsEvent_RewardsPaid {
    __kind: 'RewardsPaid'
    value: [Uint8Array, bigint]
}

/**
 *  A contributor has updated the reward address.
 */
export interface CrowdloanRewardsEvent_RewardAddressUpdated {
    __kind: 'RewardAddressUpdated'
    value: [Uint8Array, Uint8Array]
}

/**
 *  When initializing the reward vec an already initialized account was found
 */
export interface CrowdloanRewardsEvent_InitializedAlreadyInitializedAccount {
    __kind: 'InitializedAlreadyInitializedAccount'
    value: [Uint8Array, (Uint8Array | undefined), bigint]
}

/**
 *  When initializing the reward vec an already initialized account was found
 */
export interface CrowdloanRewardsEvent_InitializedAccountWithNotEnoughContribution {
    __kind: 'InitializedAccountWithNotEnoughContribution'
    value: [Uint8Array, (Uint8Array | undefined), bigint]
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: DispatchErrorModule
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type NominatorAdded = NominatorAdded_AddedToTop | NominatorAdded_AddedToBottom

export interface NominatorAdded_AddedToTop {
    __kind: 'AddedToTop'
    value: bigint
}

export interface NominatorAdded_AddedToBottom {
    __kind: 'AddedToBottom'
}

export type DispatchResult = DispatchResult_Ok | DispatchResult_Err

export interface DispatchResult_Ok {
    __kind: 'Ok'
}

export interface DispatchResult_Err {
    __kind: 'Err'
    value: DispatchError
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_Staking | ProxyType_CancelProxy | ProxyType_Balances | ProxyType_AuthorMapping

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Balances {
    __kind: 'Balances'
}

export interface ProxyType_AuthorMapping {
    __kind: 'AuthorMapping'
}

export interface EvmLog {
    address: Uint8Array
    topics: Uint8Array[]
    data: Uint8Array
}

export type ExitReason = ExitReason_Succeed | ExitReason_Error | ExitReason_Revert | ExitReason_Fatal

export interface ExitReason_Succeed {
    __kind: 'Succeed'
    value: ExitSucceed
}

export interface ExitReason_Error {
    __kind: 'Error'
    value: ExitError
}

export interface ExitReason_Revert {
    __kind: 'Revert'
    value: ExitRevert
}

export interface ExitReason_Fatal {
    __kind: 'Fatal'
    value: ExitFatal
}

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Pays_No {
    __kind: 'No'
}

export interface DispatchErrorModule {
    index: number
    error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Underflow | TokenError_Overflow

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export type ExitSucceed = ExitSucceed_Stopped | ExitSucceed_Returned | ExitSucceed_Suicided

export interface ExitSucceed_Stopped {
    __kind: 'Stopped'
}

export interface ExitSucceed_Returned {
    __kind: 'Returned'
}

export interface ExitSucceed_Suicided {
    __kind: 'Suicided'
}

export type ExitError = ExitError_StackUnderflow | ExitError_StackOverflow | ExitError_InvalidJump | ExitError_InvalidRange | ExitError_DesignatedInvalid | ExitError_CallTooDeep | ExitError_CreateCollision | ExitError_CreateContractLimit | ExitError_OutOfOffset | ExitError_OutOfGas | ExitError_OutOfFund | ExitError_PCUnderflow | ExitError_CreateEmpty | ExitError_Other

export interface ExitError_StackUnderflow {
    __kind: 'StackUnderflow'
}

export interface ExitError_StackOverflow {
    __kind: 'StackOverflow'
}

export interface ExitError_InvalidJump {
    __kind: 'InvalidJump'
}

export interface ExitError_InvalidRange {
    __kind: 'InvalidRange'
}

export interface ExitError_DesignatedInvalid {
    __kind: 'DesignatedInvalid'
}

export interface ExitError_CallTooDeep {
    __kind: 'CallTooDeep'
}

export interface ExitError_CreateCollision {
    __kind: 'CreateCollision'
}

export interface ExitError_CreateContractLimit {
    __kind: 'CreateContractLimit'
}

export interface ExitError_OutOfOffset {
    __kind: 'OutOfOffset'
}

export interface ExitError_OutOfGas {
    __kind: 'OutOfGas'
}

export interface ExitError_OutOfFund {
    __kind: 'OutOfFund'
}

export interface ExitError_PCUnderflow {
    __kind: 'PCUnderflow'
}

export interface ExitError_CreateEmpty {
    __kind: 'CreateEmpty'
}

export interface ExitError_Other {
    __kind: 'Other'
    value: string
}

export type ExitRevert = ExitRevert_Reverted

export interface ExitRevert_Reverted {
    __kind: 'Reverted'
}

export type ExitFatal = ExitFatal_NotSupported | ExitFatal_UnhandledInterrupt | ExitFatal_CallErrorAsFatal | ExitFatal_Other

export interface ExitFatal_NotSupported {
    __kind: 'NotSupported'
}

export interface ExitFatal_UnhandledInterrupt {
    __kind: 'UnhandledInterrupt'
}

export interface ExitFatal_CallErrorAsFatal {
    __kind: 'CallErrorAsFatal'
    value: ExitError
}

export interface ExitFatal_Other {
    __kind: 'Other'
    value: string
}
