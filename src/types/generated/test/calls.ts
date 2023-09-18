import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v41 from './v41'
import * as v42 from './v42'
import * as v43 from './v43'

export class AssetsBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.burn')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Performs a checked Asset burn, can only be done
     *  by corresponding asset owner with own account.
     * 
     *  - `origin`: caller Account, from which Asset amount is burned,
     *  - `asset_id`: Id of burned Asset,
     *  - `amount`: burned Asset amount.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Assets.burn') === 'c03211b8b6a07d1815d7dac8674459aeb214dedef7f475a1f6d47cf37b936cdf'
    }

    /**
     *  Performs a checked Asset burn, can only be done
     *  by corresponding asset owner with own account.
     * 
     *  - `origin`: caller Account, from which Asset amount is burned,
     *  - `asset_id`: Id of burned Asset,
     *  - `amount`: burned Asset amount.
     */
    get asV41(): {assetId: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Performs a checked Asset burn, can only be done
     * by corresponding asset owner with own account.
     * 
     * - `origin`: caller Account, from which Asset amount is burned,
     * - `asset_id`: Id of burned Asset,
     * - `amount`: burned Asset amount.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Assets.burn') === '7734e72b03f9f009a7e17461b27db33f360bb52e6486869fa3b8210b57a89bb5'
    }

    /**
     * Performs a checked Asset burn, can only be done
     * by corresponding asset owner with own account.
     * 
     * - `origin`: caller Account, from which Asset amount is burned,
     * - `asset_id`: Id of burned Asset,
     * - `amount`: burned Asset amount.
     */
    get asV42(): {assetId: v42.AssetId32, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Performs a checked Asset mint, can only be done
     *  by corresponding asset owner account.
     * 
     *  - `origin`: caller Account, which issues Asset minting,
     *  - `asset_id`: Id of minted Asset,
     *  - `to`: Id of Account, to which Asset amount is minted,
     *  - `amount`: minted Asset amount.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Assets.mint') === '2c0bb118af59b05cd82e527b0036e9b63df2b8e3a35b95703feeecf66ddee035'
    }

    /**
     *  Performs a checked Asset mint, can only be done
     *  by corresponding asset owner account.
     * 
     *  - `origin`: caller Account, which issues Asset minting,
     *  - `asset_id`: Id of minted Asset,
     *  - `to`: Id of Account, to which Asset amount is minted,
     *  - `amount`: minted Asset amount.
     */
    get asV41(): {assetId: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Performs a checked Asset mint, can only be done
     * by corresponding asset owner account.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Assets.mint') === '2a34f920838ce658d25db96bd6d5847c2a59481fb3c9d43c3b2133f651f4abab'
    }

    /**
     * Performs a checked Asset mint, can only be done
     * by corresponding asset owner account.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    get asV42(): {assetId: v42.AssetId32, to: Uint8Array, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Performs an asset registration.
     * 
     *  Registers new `AssetId` for the given `origin`.
     *  AssetSymbol should represent string with only uppercase latin chars with max length of 7.
     *  AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Assets.register') === '597eefd68a4a334503e554227f0c5f2662f16732354e0e751b678c328d3e8b32'
    }

    /**
     *  Performs an asset registration.
     * 
     *  Registers new `AssetId` for the given `origin`.
     *  AssetSymbol should represent string with only uppercase latin chars with max length of 7.
     *  AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
     */
    get asV41(): {symbol: Uint8Array, name: Uint8Array, initialSupply: bigint, isMintable: boolean, isIndivisible: boolean, optContentSrc: (Uint8Array | undefined), optDesc: (Uint8Array | undefined)} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsSetNonMintableCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.set_non_mintable')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     *  Operation can not be undone.
     * 
     *  - `origin`: caller Account, should correspond to Asset owner
     *  - `asset_id`: Id of burned Asset,
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Assets.set_non_mintable') === '3efcd0cff8534a5369ea6d2c56f45afe1ddfe04db51b5d7024646d79ab25e30e'
    }

    /**
     *  Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     *  Operation can not be undone.
     * 
     *  - `origin`: caller Account, should correspond to Asset owner
     *  - `asset_id`: Id of burned Asset,
     */
    get asV41(): {assetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     * Operation can not be undone.
     * 
     * - `origin`: caller Account, should correspond to Asset owner
     * - `asset_id`: Id of burned Asset,
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Assets.set_non_mintable') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     * Operation can not be undone.
     * 
     * - `origin`: caller Account, should correspond to Asset owner
     * - `asset_id`: Id of burned Asset,
     */
    get asV42(): {assetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Performs a checked Asset transfer.
     * 
     *  - `origin`: caller Account, from which Asset amount is withdrawn,
     *  - `asset_id`: Id of transferred Asset,
     *  - `to`: Id of Account, to which Asset amount is deposited,
     *  - `amount`: transferred Asset amount.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Assets.transfer') === '2c0bb118af59b05cd82e527b0036e9b63df2b8e3a35b95703feeecf66ddee035'
    }

    /**
     *  Performs a checked Asset transfer.
     * 
     *  - `origin`: caller Account, from which Asset amount is withdrawn,
     *  - `asset_id`: Id of transferred Asset,
     *  - `to`: Id of Account, to which Asset amount is deposited,
     *  - `amount`: transferred Asset amount.
     */
    get asV41(): {assetId: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Performs a checked Asset transfer.
     * 
     * - `origin`: caller Account, from which Asset amount is withdrawn,
     * - `asset_id`: Id of transferred Asset,
     * - `to`: Id of Account, to which Asset amount is deposited,
     * - `amount`: transferred Asset amount.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Assets.transfer') === '2a34f920838ce658d25db96bd6d5847c2a59481fb3c9d43c3b2133f651f4abab'
    }

    /**
     * Performs a checked Asset transfer.
     * 
     * - `origin`: caller Account, from which Asset amount is withdrawn,
     * - `asset_id`: Id of transferred Asset,
     * - `to`: Id of Account, to which Asset amount is deposited,
     * - `amount`: transferred Asset amount.
     */
    get asV42(): {assetId: v42.AssetId32, to: Uint8Array, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorshipSetUnclesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authorship.set_uncles')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Provide a set of uncles.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'efd6e78708f873b5d0804d67dee4f6351287add79134d8ee5b59dcfa2a5e21af'
    }

    /**
     *  Provide a set of uncles.
     */
    get asV41(): {newUncles: v41.Header[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Provide a set of uncles.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
    }

    /**
     * Provide a set of uncles.
     */
    get asV42(): {newUncles: v42.Header[]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class BabePlanConfigChangeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.plan_config_change')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Babe.plan_config_change') === '445d07b89db2246e1bb7a27672210d26caa40906751dc15e2e91036d19c646c3'
    }

    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    get asV42(): {config: v42.NextConfigDescriptor} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class BabeReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation') === 'fcf96782e661e8bdc1e552a10118353083fddfff1d09bd4252866b71177bb5da'
    }

    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     */
    get asV41(): {equivocationProof: v41.BabeEquivocationProof, keyOwnerProof: v41.KeyOwnerProof} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation') === '40d799eb32ff6f2d8c0e11e555d627ab95ad001691371ef039423f40d5d53b2b'
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    get asV42(): {equivocationProof: v42.EquivocationProof, keyOwnerProof: v42.MembershipProof} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class BabeReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation_unsigned') === 'fcf96782e661e8bdc1e552a10118353083fddfff1d09bd4252866b71177bb5da'
    }

    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    get asV41(): {equivocationProof: v41.BabeEquivocationProof, keyOwnerProof: v41.KeyOwnerProof} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation_unsigned') === '40d799eb32ff6f2d8c0e11e555d627ab95ad001691371ef039423f40d5d53b2b'
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get asV42(): {equivocationProof: v42.EquivocationProof, keyOwnerProof: v42.MembershipProof} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class BagsListPutInFrontOfCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BagsList.put_in_front_of')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('BagsList.put_in_front_of') === '1c9b6f4fe2c3f09518b5cf691b90a9cfbbb049860f2d665fdf2f18450ebe9b2f'
    }

    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    get asV42(): {lighter: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class BagsListRebagCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BagsList.rebag')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will always update the stored score of `dislocated` to the correct score, based on
     * `ScoreProvider`.
     * 
     * If `dislocated` does not exists, it returns an error.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('BagsList.rebag') === '6f1b791f1be804afc4e38eb1e926ba86935e013132cb323a061f4b76a89cbd3e'
    }

    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will always update the stored score of `dislocated` to the correct score, based on
     * `ScoreProvider`.
     * 
     * If `dislocated` does not exists, it returns an error.
     */
    get asV42(): {dislocated: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is
     *    not assumed to be in the overlay.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === '2fe8348cf811b833de74f02f6eeab668dbfad8a5d53274dd89837666ed3eb6fe'
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is
     *    not assumed to be in the overlay.
     *  # </weight>
     */
    get asV41(): {source: Uint8Array, dest: Uint8Array, value: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV42(): {who: Uint8Array, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the balances of a given account.
     * 
     *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     *  also decrease the total issuance of the system (`TotalIssuance`).
     *  If the new free or reserved balance is below the existential deposit,
     *  it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     *  The dispatch origin for this call is `root`.
     * 
     *  # <weight>
     *  - Independent of the arguments.
     *  - Contains a limited number of reads and writes.
     *  ---------------------
     *  - Base Weight:
     *      - Creating: 27.56 µs
     *      - Killing: 35.11 µs
     *  - DB Weight: 1 Read, 1 Write to `who`
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === 'a65ed3500227691ff89565c1bf5a0244c2a05366e34d1ab50167d0c006774edc'
    }

    /**
     *  Set the balances of a given account.
     * 
     *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     *  also decrease the total issuance of the system (`TotalIssuance`).
     *  If the new free or reserved balance is below the existential deposit,
     *  it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     *  The dispatch origin for this call is `root`.
     * 
     *  # <weight>
     *  - Independent of the arguments.
     *  - Contains a limited number of reads and writes.
     *  ---------------------
     *  - Base Weight:
     *      - Creating: 27.56 µs
     *      - Killing: 35.11 µs
     *  - DB Weight: 1 Read, 1 Write to `who`
     *  # </weight>
     */
    get asV41(): {who: Uint8Array, newFree: bigint, newReserved: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some liquid free balance to another account.
     * 
     *  `transfer` will set the `FreeBalance` of the sender and receiver.
     *  It will decrease the total issuance of the system by the `TransferFee`.
     *  If the sender's account is below the existential deposit as a result
     *  of the transfer, the account will be reaped.
     * 
     *  The dispatch origin for this call must be `Signed` by the transactor.
     * 
     *  # <weight>
     *  - Dependent on arguments but not critical, given proper implementations for
     *    input config types. See related functions below.
     *  - It contains a limited number of reads and writes internally and no complex computation.
     * 
     *  Related functions:
     * 
     *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *    - Transferring balances to accounts that did not exist before will cause
     *       `T::OnNewAccount::on_new_account` to be called.
     *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
     *      check that the transfer will not kill the origin account.
     *  ---------------------------------
     *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     *  - DB Weight: 1 Read and 1 Write to destination account
     *  - Origin account is already in memory, so no DB operations for them.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
    }

    /**
     *  Transfer some liquid free balance to another account.
     * 
     *  `transfer` will set the `FreeBalance` of the sender and receiver.
     *  It will decrease the total issuance of the system by the `TransferFee`.
     *  If the sender's account is below the existential deposit as a result
     *  of the transfer, the account will be reaped.
     * 
     *  The dispatch origin for this call must be `Signed` by the transactor.
     * 
     *  # <weight>
     *  - Dependent on arguments but not critical, given proper implementations for
     *    input config types. See related functions below.
     *  - It contains a limited number of reads and writes internally and no complex computation.
     * 
     *  Related functions:
     * 
     *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *    - Transferring balances to accounts that did not exist before will cause
     *       `T::OnNewAccount::on_new_account` to be called.
     *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
     *      check that the transfer will not kill the origin account.
     *  ---------------------------------
     *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     *  - DB Weight: 1 Read and 1 Write to destination account
     *  - Origin account is already in memory, so no DB operations for them.
     *  # </weight>
     */
    get asV41(): {dest: Uint8Array, value: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '55f3f63b765a5b0a714fcbe6c824b0f6fc21773aab999a719c36e7dc7db49575'
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get asV42(): {dest: Uint8Array, keepAlive: boolean} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Pallet.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Pallet.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get asV41(): {dest: Uint8Array, value: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigAddSignatoryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.add_signatory')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a new signatory to the multisig account.
     *  Can only be called by a multisig account.
     * 
     *  TODO: update weights for `add_signatory`
     *  # <weight>
     *  Key: length of members in multisigConfig: M
     *  - One storage read - O(1)
     *  - search in members - O(M)
     *  - Storage write - O(M)
     *  Total complexity - O(M)
     *  # <weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('BridgeMultisig.add_signatory') === 'f2c3aac97f55c3d092c4aae2962c52d4804aed0fc2148e4d05d9602d373f7204'
    }

    /**
     *  Add a new signatory to the multisig account.
     *  Can only be called by a multisig account.
     * 
     *  TODO: update weights for `add_signatory`
     *  # <weight>
     *  Key: length of members in multisigConfig: M
     *  - One storage read - O(1)
     *  - search in members - O(M)
     *  - Storage write - O(M)
     *  Total complexity - O(M)
     *  # <weight>
     */
    get asV41(): {newMember: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  ----------------------------------
     *  - Base Weight:
     *      - Create: 44.71 + 0.088 * S
     *      - Approve: 31.48 + 0.116 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('BridgeMultisig.approve_as_multi') === '66293b6be8641b0e976474d48e201c8845b194327053225246c1d6838cf328f1'
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  ----------------------------------
     *  - Base Weight:
     *      - Create: 44.71 + 0.088 * S
     *      - Approve: 31.48 + 0.116 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    get asV41(): {id: Uint8Array, maybeTimepoint: (v41.BridgeTimepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  -------------------------------
     *  - Base Weight:
     *      - Create:          41.89 + 0.118 * S + .002 * Z µs
     *      - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
     *      - Approve:         31.39 + 0.136 * S + .002 * Z µs
     *      - Complete:        39.94 + 0.26  * S + .002 * Z µs
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('BridgeMultisig.as_multi') === 'e30fab1f2954f03dff8dcd232611ed191fea3d9df36905523dcae5d82b9f1ac7'
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  -------------------------------
     *  - Base Weight:
     *      - Create:          41.89 + 0.118 * S + .002 * Z µs
     *      - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
     *      - Approve:         31.39 + 0.136 * S + .002 * Z µs
     *      - Complete:        39.94 + 0.26  * S + .002 * Z µs
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV41(): {id: Uint8Array, maybeTimepoint: (v41.BridgeTimepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('BridgeMultisig.as_multi_threshold_1') === 'a212fd9feea97852ff3c642117dd94d86703261ba853c11d26cd5eabecab79b3'
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV41(): {id: Uint8Array, call: v41.Type_43, timepoint: v41.BridgeTimepoint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('BridgeMultisig.as_multi_threshold_1') === 'dc7ef57cf5256c1905391f8745eb65c5016bf5b9cc4db4499885560a285b38e2'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV42(): {id: Uint8Array, call: v42.Call, timepoint: v42.BridgeTimepoint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('BridgeMultisig.as_multi_threshold_1') === 'a5c03ec5c68113003047a6ebe002ca7fff8982859613c751526fc2e73696611d'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV43(): {id: Uint8Array, call: v43.Call, timepoint: v43.BridgeTimepoint} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  ----------------------------------
     *  - Base Weight: 36.07 + 0.124 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('BridgeMultisig.cancel_as_multi') === '7defa1013d7858508f1f7587c304552d782888d4d1fe683cbc18f4025708d699'
    }

    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  ----------------------------------
     *  - Base Weight: 36.07 + 0.124 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    get asV41(): {id: Uint8Array, timepoint: v41.BridgeTimepoint, callHash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigRegisterMultisigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.register_multisig')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Create a new multisig account.
     *  TODO: update weights for `register_multisig`
     *  # <weight>
     *  Key: M - length of members,
     *  - One storage reads - O(1)
     *  - One search in sorted list - O(logM)
     *  - Confirmation that the list is sorted - O(M)
     *  - One storage writes - O(1)
     *  - One event
     *  Total Complexity: O(M + logM)
     *  # <weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('BridgeMultisig.register_multisig') === 'e0d398e7963df4653da4f4e924afe992cbaa6dfa949059f906a4966f6bd47bf2'
    }

    /**
     *  Create a new multisig account.
     *  TODO: update weights for `register_multisig`
     *  # <weight>
     *  Key: M - length of members,
     *  - One storage reads - O(1)
     *  - One search in sorted list - O(logM)
     *  - Confirmation that the list is sorted - O(M)
     *  - One storage writes - O(1)
     *  - One event
     *  Total Complexity: O(M + logM)
     *  # <weight>
     */
    get asV41(): {signatories: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeMultisigRemoveSignatoryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeMultisig.remove_signatory')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the signatory from the multisig account.
     *  Can only be called by a multisig account.
     * 
     *  TODO: update weights for `remove_signatory`
     *  # <weight>
     *  Key: length of members in multisigConfig: M
     *  - One storage reads - O(1)
     *  - remove items in list - O(M)
     *  Total complexity - O(M)
     *  # <weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('BridgeMultisig.remove_signatory') === '1887c2def0ca2534f346482b0605aed0ce6c75e3e1b18c93b1e493f03d2116a7'
    }

    /**
     *  Remove the signatory from the multisig account.
     *  Can only be called by a multisig account.
     * 
     *  TODO: update weights for `remove_signatory`
     *  # <weight>
     *  Key: length of members in multisigConfig: M
     *  - One storage reads - O(1)
     *  - remove items in list - O(M)
     *  Total complexity - O(M)
     *  # <weight>
     */
    get asV41(): {signatory: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresGovernancePlatformCreatePollCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresGovernancePlatform.create_poll')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Create poll
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresGovernancePlatform.create_poll') === 'e99a6ab5ae365cabe56fc4443800ea7a68ee5e07a0568d12d867b0c8c2081727'
    }

    /**
     *  Create poll
     */
    get asV41(): {pollId: Uint8Array, numberOfOptions: number, pollStartTimestamp: bigint, pollEndTimestamp: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresGovernancePlatformVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresGovernancePlatform.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Voting for option
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresGovernancePlatform.vote') === 'a88596a49ff992df9d05faa833b601500b962ce637ca1c6cf762bf5a3d648d22'
    }

    /**
     *  Voting for option
     */
    get asV41(): {pollId: Uint8Array, votingOption: number, numberOfVotes: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresGovernancePlatformWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresGovernancePlatform.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Withdraw voting funds
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresGovernancePlatform.withdraw') === 'd59fe61d4871003a38c8a8093a489d7a77f4104524982df18b4cbcb942936107'
    }

    /**
     *  Withdraw voting funds
     */
    get asV41(): {pollId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadAddWhitelistedContributorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.add_whitelisted_contributor')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add whitelisted contributor
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.add_whitelisted_contributor') === 'ab02d63fe190e1ddcdc0ca40e7eecd085716eff1846582b5d23f64905cf92a86'
    }

    /**
     *  Add whitelisted contributor
     */
    get asV41(): {contributor: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadAddWhitelistedIloOrganizerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.add_whitelisted_ilo_organizer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add whitelisted ILO organizer
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.add_whitelisted_ilo_organizer') === '14150c0da05c92ad47fa53b73f87daf8a0c5243bea625db475abfe2affac4acd'
    }

    /**
     *  Add whitelisted ILO organizer
     */
    get asV41(): {iloOrganizer: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadChangeCeresBurnFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.change_ceres_burn_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change CERES burn fee
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.change_ceres_burn_fee') === 'f1e2a5c58297cb77a48cc0402c735fe9ecc13a1ea3b5983f65b150d96a459184'
    }

    /**
     *  Change CERES burn fee
     */
    get asV41(): {ceresFee: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadChangeCeresContributionFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.change_ceres_contribution_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change CERES contribution fee
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.change_ceres_contribution_fee') === 'f1e2a5c58297cb77a48cc0402c735fe9ecc13a1ea3b5983f65b150d96a459184'
    }

    /**
     *  Change CERES contribution fee
     */
    get asV41(): {ceresFee: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Claim tokens
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.claim') === '3efcd0cff8534a5369ea6d2c56f45afe1ddfe04db51b5d7024646d79ab25e30e'
    }

    /**
     *  Claim tokens
     */
    get asV41(): {assetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Claim tokens
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.claim') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Claim tokens
     */
    get asV42(): {assetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadClaimLpTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.claim_lp_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Claim LP tokens
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.claim_lp_tokens') === '3efcd0cff8534a5369ea6d2c56f45afe1ddfe04db51b5d7024646d79ab25e30e'
    }

    /**
     *  Claim LP tokens
     */
    get asV41(): {assetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Claim LP tokens
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.claim_lp_tokens') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Claim LP tokens
     */
    get asV42(): {assetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadClaimPswapRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.claim_pswap_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Claim PSWAP rewards
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.claim_pswap_rewards') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Claim PSWAP rewards
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadContributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.contribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Contribute
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.contribute') === '3afed449cc1547b8a106399aaf353527929727fb319df4edb293c99163b49180'
    }

    /**
     *  Contribute
     */
    get asV41(): {assetId: Uint8Array, fundsToContribute: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Contribute
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.contribute') === '712bafde6c2a864c6090f7785b37035b63c92d1bcc52d8e051e206233c66bb7b'
    }

    /**
     * Contribute
     */
    get asV42(): {assetId: v42.AssetId32, fundsToContribute: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadCreateIloCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.create_ilo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Create ILO
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.create_ilo') === '31eaf6b7bddc12754cd2ef21cd306f671778ec967d89b1c46ea69eaf6cabb4f2'
    }

    /**
     *  Create ILO
     */
    get asV41(): {assetId: Uint8Array, tokensForIlo: bigint, tokensForLiquidity: bigint, iloPrice: bigint, softCap: bigint, hardCap: bigint, minContribution: bigint, maxContribution: bigint, refundType: boolean, liquidityPercent: bigint, listingPrice: bigint, lockupDays: number, startTimestamp: bigint, endTimestamp: bigint, teamVestingTotalTokens: bigint, teamVestingFirstReleasePercent: bigint, teamVestingPeriod: bigint, teamVestingPercent: bigint, firstReleasePercent: bigint, vestingPeriod: bigint, vestingPercent: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create ILO
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.create_ilo') === '3da2f86722ceb1c7a28fd67cf48253789e7069b488c3f807e9e33cdec4418488'
    }

    /**
     * Create ILO
     */
    get asV42(): {assetId: v42.AssetId32, tokensForIlo: bigint, tokensForLiquidity: bigint, iloPrice: bigint, softCap: bigint, hardCap: bigint, minContribution: bigint, maxContribution: bigint, refundType: boolean, liquidityPercent: bigint, listingPrice: bigint, lockupDays: number, startTimestamp: bigint, endTimestamp: bigint, teamVestingTotalTokens: bigint, teamVestingFirstReleasePercent: bigint, teamVestingPeriod: bigint, teamVestingPercent: bigint, firstReleasePercent: bigint, vestingPeriod: bigint, vestingPercent: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadEmergencyWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.emergency_withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Emergency withdraw
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.emergency_withdraw') === '3efcd0cff8534a5369ea6d2c56f45afe1ddfe04db51b5d7024646d79ab25e30e'
    }

    /**
     *  Emergency withdraw
     */
    get asV41(): {assetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Emergency withdraw
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.emergency_withdraw') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Emergency withdraw
     */
    get asV42(): {assetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadFinishIloCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.finish_ilo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Finish ILO
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.finish_ilo') === '3efcd0cff8534a5369ea6d2c56f45afe1ddfe04db51b5d7024646d79ab25e30e'
    }

    /**
     *  Finish ILO
     */
    get asV41(): {assetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Finish ILO
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.finish_ilo') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    /**
     * Finish ILO
     */
    get asV42(): {assetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadRemoveWhitelistedContributorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.remove_whitelisted_contributor')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove whitelisted contributor
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.remove_whitelisted_contributor') === 'ab02d63fe190e1ddcdc0ca40e7eecd085716eff1846582b5d23f64905cf92a86'
    }

    /**
     *  Remove whitelisted contributor
     */
    get asV41(): {contributor: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLaunchpadRemoveWhitelistedIloOrganizerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLaunchpad.remove_whitelisted_ilo_organizer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove whitelisted ILO organizer
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLaunchpad.remove_whitelisted_ilo_organizer') === '14150c0da05c92ad47fa53b73f87daf8a0c5243bea625db475abfe2affac4acd'
    }

    /**
     *  Remove whitelisted ILO organizer
     */
    get asV41(): {iloOrganizer: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLiquidityLockerChangeCeresFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLiquidityLocker.change_ceres_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change CERES fee
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLiquidityLocker.change_ceres_fee') === 'f1e2a5c58297cb77a48cc0402c735fe9ecc13a1ea3b5983f65b150d96a459184'
    }

    /**
     *  Change CERES fee
     */
    get asV41(): {ceresFee: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresLiquidityLockerLockLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresLiquidityLocker.lock_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Lock liquidity
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresLiquidityLocker.lock_liquidity') === 'bcd28d9445e1c79ebfe6a3677cc65e774b533e932f0956c8bec2c3b69f9cd6d7'
    }

    /**
     *  Lock liquidity
     */
    get asV41(): {assetA: Uint8Array, assetB: Uint8Array, unlockingTimestamp: bigint, percentageOfPoolTokens: bigint, option: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Lock liquidity
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresLiquidityLocker.lock_liquidity') === '954bb142ff16e4e1bb3345cdfc23618047a9a7bc898d09623d3cc7489c5c0263'
    }

    /**
     * Lock liquidity
     */
    get asV42(): {assetA: v42.AssetId32, assetB: v42.AssetId32, unlockingTimestamp: bigint, percentageOfPoolTokens: bigint, option: boolean} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresStakingChangeRewardsRemainingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresStaking.change_rewards_remaining')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change RewardsRemaining
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresStaking.change_rewards_remaining') === '330a0ff25c7f1be9ed2e84fd35805c683f6920d276219eaaffc4e6a159123da2'
    }

    /**
     *  Change RewardsRemaining
     */
    get asV41(): {rewardsRemaining: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresStakingDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresStaking.deposit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('CeresStaking.deposit') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    get asV41(): {amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresStakingWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresStaking.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('CeresStaking.withdraw') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresTokenLockerChangeFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresTokenLocker.change_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change fee
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresTokenLocker.change_fee') === '29deec73c007934b40d9375e38417591b900623c0a553c8adb29f30c0f270f81'
    }

    /**
     *  Change fee
     */
    get asV41(): {newFee: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresTokenLockerLockTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresTokenLocker.lock_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Lock tokens
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresTokenLocker.lock_tokens') === 'bf88c1ca2b82bcc313400b4a3f5a53d01c725902fea336ce9f1a1cfd41c568eb'
    }

    /**
     *  Lock tokens
     */
    get asV41(): {assetId: Uint8Array, unlockingTimestamp: bigint, numberOfTokens: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Lock tokens
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresTokenLocker.lock_tokens') === '5823a15839b3bd7888a08fcd5cf8660c6ce24a7854299eb3df0add5ffad37bc2'
    }

    /**
     * Lock tokens
     */
    get asV42(): {assetId: v42.AssetId32, unlockingTimestamp: bigint, numberOfTokens: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CeresTokenLockerWithdrawTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CeresTokenLocker.withdraw_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Withdraw tokens
     */
    get isV41(): boolean {
        return this._chain.getCallHash('CeresTokenLocker.withdraw_tokens') === 'bf88c1ca2b82bcc313400b4a3f5a53d01c725902fea336ce9f1a1cfd41c568eb'
    }

    /**
     *  Withdraw tokens
     */
    get asV41(): {assetId: Uint8Array, unlockingTimestamp: bigint, numberOfTokens: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Withdraw tokens
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CeresTokenLocker.withdraw_tokens') === '5823a15839b3bd7888a08fcd5cf8660c6ce24a7854299eb3df0add5ffad37bc2'
    }

    /**
     * Withdraw tokens
     */
    get asV42(): {assetId: v42.AssetId32, unlockingTimestamp: bigint, numberOfTokens: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     *  May be called by any signed account in order to finish voting and close the proposal.
     * 
     *  If called before the end of the voting period it will only close the vote if it is
     *  has enough votes to be approved or disapproved.
     * 
     *  If called after the end of the voting period abstentions are counted as rejections
     *  unless there is a prime member set and the prime member cast an approval.
     * 
     *  If the close operation completes successfully with disapproval, the transaction fee will
     *  be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
     *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1 + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - `P1` is the complexity of `proposal` preimage.
     *    - `P2` is proposal-count (code-bounded)
     *  - DB:
     *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
     *   - any mutations done while executing `proposal` (`P1`)
     *  - up to 3 events
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Council.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     *  Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     *  May be called by any signed account in order to finish voting and close the proposal.
     * 
     *  If called before the end of the voting period it will only close the vote if it is
     *  has enough votes to be approved or disapproved.
     * 
     *  If called after the end of the voting period abstentions are counted as rejections
     *  unless there is a prime member set and the prime member cast an approval.
     * 
     *  If the close operation completes successfully with disapproval, the transaction fee will
     *  be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
     *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1 + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - `P1` is the complexity of `proposal` preimage.
     *    - `P2` is proposal-count (code-bounded)
     *  - DB:
     *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
     *   - any mutations done while executing `proposal` (`P1`)
     *  - up to 3 events
     *  # </weight>
     */
    get asV41(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
     * 
     *  Must be called by the Root origin.
     * 
     *  Parameters:
     *  * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     *  # <weight>
     *  Complexity: O(P) where P is the number of max proposals
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
     * 
     *  Must be called by the Root origin.
     * 
     *  Parameters:
     *  * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     *  # <weight>
     *  Complexity: O(P) where P is the number of max proposals
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get asV41(): {proposalHash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Council.execute') === '08fe1b553ac7f7d3568e8b1f3096f3080c8bd399b4717b57de6cda04c66ea82a'
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get asV41(): {proposal: v41.Proposal, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Council.execute') === 'c08fff902753e87ba126f81bd6b27777a90b2d6ca374f0051577b506eb1c2470'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV42(): {proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Council.execute') === '862dc66f3870f413b0072a50f786be532fe36891102bf4ba7d73c454282d923a'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV43(): {proposal: v43.Call, lengthBound: number} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Council.propose') === '2f54cfc9298df7581546f7d8dd3597870069df54bda8290bbac1dec588b02d94'
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get asV41(): {threshold: number, proposal: v41.Proposal, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Council.propose') === '11e7adfbb2510ac009007b3861ede1b47f989b201855086fcb1ad773f5b750fd'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV42(): {threshold: number, proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Council.propose') === '32e4cf2d6915186e59548c615312f7d5029990fa3ba7b44de37f1cecffda8ab8'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV43(): {threshold: number, proposal: v43.Call, lengthBound: number} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the collective's membership.
     * 
     *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     *  - `prime`: The prime member whose vote sets the default.
     *  - `old_count`: The upper bound for the previous number of members in storage.
     *                 Used for weight estimation.
     * 
     *  Requires root origin.
     * 
     *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *        the weight estimations rely on it to estimate dispatchable weight.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(MP + N)` where:
     *    - `M` old-members-count (code- and governance-bounded)
     *    - `N` new-members-count (code- and governance-bounded)
     *    - `P` proposals-count (code-bounded)
     *  - DB:
     *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
     *    - 1 storage read (codec `O(P)`) for reading the proposals
     *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     *  Set the collective's membership.
     * 
     *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     *  - `prime`: The prime member whose vote sets the default.
     *  - `old_count`: The upper bound for the previous number of members in storage.
     *                 Used for weight estimation.
     * 
     *  Requires root origin.
     * 
     *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *        the weight estimations rely on it to estimate dispatchable weight.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(MP + N)` where:
     *    - `M` old-members-count (code- and governance-bounded)
     *    - `N` new-members-count (code- and governance-bounded)
     *    - `P` proposals-count (code-bounded)
     *  - DB:
     *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
     *    - 1 storage read (codec `O(P)`) for reading the proposals
     *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     *  # </weight>
     */
    get asV41(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  Transaction fees will be waived if the member is voting on any particular proposal
     *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  Transaction fees will be waived if the member is voting on any particular proposal
     *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    get asV41(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrenciesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currencies.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some balance to another account under `currency_id`.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Currencies.transfer') === 'c44849d66bec3ef71cc4b466ae142b5c016e9ba1d7fb5552fcb381334cb394fe'
    }

    /**
     *  Transfer some balance to another account under `currency_id`.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get asV41(): {dest: Uint8Array, currencyId: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Currencies.transfer') === '54c073f3818d6e6a882e320470937368bddaeda20bd67ea1ccaa023425275715'
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get asV42(): {dest: Uint8Array, currencyId: v42.AssetId32, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrenciesTransferNativeCurrencyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currencies.transfer_native_currency')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some native currency to another account.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Currencies.transfer_native_currency') === '94a3f31b6c27b88829aa15b00a4c891eb6d26aea983baf4152003a578ce990f7'
    }

    /**
     *  Transfer some native currency to another account.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get asV41(): {dest: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrenciesUpdateBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currencies.update_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  update amount of account `who` under `currency_id`.
     * 
     *  The dispatch origin of this call must be _Root_.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Currencies.update_balance') === '799b37fa42939601c7319466d46d395c73b073ef78dae1f216717381de65cb07'
    }

    /**
     *  update amount of account `who` under `currency_id`.
     * 
     *  The dispatch origin of this call must be _Root_.
     */
    get asV41(): {who: Uint8Array, currencyId: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Currencies.update_balance') === 'a0c92c8bc24a22727226e6e79f38058dfd61e1a72c4595224f0e3dfd9883578b'
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get asV42(): {who: Uint8Array, currencyId: v42.AssetId32, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformAddPoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.add_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add pool
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.add_pool') === '3d4ff0eae639be2945e34823e3831bd26f3ab058b102ccd3d810fe46e6ee4cb6'
    }

    /**
     *  Add pool
     */
    get asV41(): {poolAsset: Uint8Array, rewardAsset: Uint8Array, isFarm: boolean, multiplier: number, depositFee: bigint, isCore: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add pool
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.add_pool') === '4fffbbc0c7558eb7f0bbce43ecc77ddd1e7c4d37fedd08855452f2cb8c566200'
    }

    /**
     * Add pool
     */
    get asV42(): {poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, isFarm: boolean, multiplier: number, depositFee: bigint, isCore: boolean} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add pool
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.add_pool') === '3b9155e087e535c8f34e82d104755aa30746aab1aa01d057249fcc62ff106e47'
    }

    /**
     * Add pool
     */
    get asV43(): {baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, isFarm: boolean, multiplier: number, depositFee: bigint, isCore: boolean} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangeInfoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_info')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change info
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_info') === '359dc8c041a62e701538bebd583f4d57aa4089c29818a0f89232756a8bb1e0da'
    }

    /**
     *  Change info
     */
    get asV41(): {changedUser: Uint8Array, poolAsset: Uint8Array, rewardAsset: Uint8Array, isFarm: boolean, poolTokens: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change info
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_info') === '53089ec0aea51ce175b69a67a255f77c2fe4394138f7c07841d17b2827c88f51'
    }

    /**
     * Change info
     */
    get asV42(): {changedUser: Uint8Array, poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, isFarm: boolean, poolTokens: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change info
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_info') === '2a1606350e34e481f3b4090c1e5a99c56a85e92dbc29841724acecdf64491d85'
    }

    /**
     * Change info
     */
    get asV43(): {changedUser: Uint8Array, baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, isFarm: boolean, poolTokens: bigint} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangePoolDepositFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_pool_deposit_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change pool deposit fee
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_pool_deposit_fee') === 'cd3e7f2b3cff1684d88ef17e6df8a36b8e64405bf569921bb8394b4490f85484'
    }

    /**
     *  Change pool deposit fee
     */
    get asV41(): {poolAsset: Uint8Array, rewardAsset: Uint8Array, isFarm: boolean, depositFee: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change pool deposit fee
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_pool_deposit_fee') === '1044401f0c90834340f4d7ddc4a0daa887f07a19c2f19370f94efc82bc9acdf1'
    }

    /**
     * Change pool deposit fee
     */
    get asV42(): {poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, isFarm: boolean, depositFee: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change pool deposit fee
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_pool_deposit_fee') === '572850b56eb96521291d95c02dac4fae2f6866121decc37e53ca269250f82bf3'
    }

    /**
     * Change pool deposit fee
     */
    get asV43(): {baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, isFarm: boolean, depositFee: bigint} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangePoolMultiplierCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_pool_multiplier')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change pool multiplier
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_pool_multiplier') === '1d09d40ba3aad76c086177864fec1c8edf2ebf26a33481ad9b5051ca49247a03'
    }

    /**
     *  Change pool multiplier
     */
    get asV41(): {poolAsset: Uint8Array, rewardAsset: Uint8Array, isFarm: boolean, newMultiplier: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change pool multiplier
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_pool_multiplier') === 'abf514c018f1713b8f168f4ea911f2e8c23bfe4bdf90294f19c6707f9985c72e'
    }

    /**
     * Change pool multiplier
     */
    get asV42(): {poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, isFarm: boolean, newMultiplier: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change pool multiplier
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_pool_multiplier') === 'c816c9c87eeae15336a4300ad16bbbe31bea1ea37120abf28b28f279af39a23b'
    }

    /**
     * Change pool multiplier
     */
    get asV43(): {baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, isFarm: boolean, newMultiplier: number} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangeTokenInfoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_token_info')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change token info
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_token_info') === 'd85fd816f20af69c5e499f795c8839a4e56b4eb5ccf84e1e769f7a7a341313f0'
    }

    /**
     *  Change token info
     */
    get asV41(): {poolAsset: Uint8Array, tokenPerBlock: bigint, farmsAllocation: bigint, stakingAllocation: bigint, teamAllocation: bigint, teamAccount: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change token info
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_token_info') === '00f23230563c90f61f7d42bbe2ab916b3bfe328c3b0ba8fc8c68441fce5b4d6b'
    }

    /**
     * Change token info
     */
    get asV42(): {poolAsset: v42.AssetId32, tokenPerBlock: bigint, farmsAllocation: bigint, stakingAllocation: bigint, teamAllocation: bigint, teamAccount: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformChangeTotalTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.change_total_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change total tokens
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_total_tokens') === 'e45cf4dcb8132237fa13d1efc43e138d38fc6e248e71ef12f4a9c2581da4178b'
    }

    /**
     *  Change total tokens
     */
    get asV41(): {poolAsset: Uint8Array, rewardAsset: Uint8Array, isFarm: boolean, totalTokens: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change total tokens
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_total_tokens') === 'de673aacd774629583e7978340472c4150d48c501dfce8b3870530afca507225'
    }

    /**
     * Change total tokens
     */
    get asV42(): {poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, isFarm: boolean, totalTokens: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change total tokens
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.change_total_tokens') === '738357c1206b01400c36ae41ce8067f37ee7f5450ecc4140607c0d351c3a1c43'
    }

    /**
     * Change total tokens
     */
    get asV43(): {baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, isFarm: boolean, totalTokens: bigint} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.deposit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Deposit to pool
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.deposit') === 'af62ce2593f243a624f19bd001b68038aed1f58fdb00abd62692ba169a735008'
    }

    /**
     *  Deposit to pool
     */
    get asV41(): {poolAsset: Uint8Array, rewardAsset: Uint8Array, isFarm: boolean, pooledTokens: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Deposit to pool
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.deposit') === '304f84cfcafb9d13773755e77828f29748df0f0d1f8a2f5a7aef6a75aae7c46a'
    }

    /**
     * Deposit to pool
     */
    get asV42(): {poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, isFarm: boolean, pooledTokens: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Deposit to pool
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.deposit') === '7e1cf593c977493fef4faf40cfa2b2dd43c7e6a58f8e641eb7e8c657aa3bc0cf'
    }

    /**
     * Deposit to pool
     */
    get asV43(): {baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, isFarm: boolean, pooledTokens: bigint} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformGetRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.get_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Get rewards
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.get_rewards') === 'f2860c2488401bd92eb326e73e6ba83799d98fb6f08d095c7819d951793b17df'
    }

    /**
     *  Get rewards
     */
    get asV41(): {poolAsset: Uint8Array, rewardAsset: Uint8Array, isFarm: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Get rewards
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.get_rewards') === 'd305f83045a1887a128e2493380e12a924b1df887a4a775baf3839318f8c4831'
    }

    /**
     * Get rewards
     */
    get asV42(): {poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, isFarm: boolean} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Get rewards
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.get_rewards') === 'baddc9254c7c4efb34c387ac703b49fa5ebfc7e81b4e39638c46abac69069ba5'
    }

    /**
     * Get rewards
     */
    get asV43(): {baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, isFarm: boolean} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformRegisterTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.register_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register token for farming
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.register_token') === 'd85fd816f20af69c5e499f795c8839a4e56b4eb5ccf84e1e769f7a7a341313f0'
    }

    /**
     *  Register token for farming
     */
    get asV41(): {poolAsset: Uint8Array, tokenPerBlock: bigint, farmsAllocation: bigint, stakingAllocation: bigint, teamAllocation: bigint, teamAccount: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register token for farming
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.register_token') === '00f23230563c90f61f7d42bbe2ab916b3bfe328c3b0ba8fc8c68441fce5b4d6b'
    }

    /**
     * Register token for farming
     */
    get asV42(): {poolAsset: v42.AssetId32, tokenPerBlock: bigint, farmsAllocation: bigint, stakingAllocation: bigint, teamAllocation: bigint, teamAccount: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformRemovePoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.remove_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove pool
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.remove_pool') === 'f2860c2488401bd92eb326e73e6ba83799d98fb6f08d095c7819d951793b17df'
    }

    /**
     *  Remove pool
     */
    get asV41(): {poolAsset: Uint8Array, rewardAsset: Uint8Array, isFarm: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove pool
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.remove_pool') === 'd305f83045a1887a128e2493380e12a924b1df887a4a775baf3839318f8c4831'
    }

    /**
     * Remove pool
     */
    get asV42(): {poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, isFarm: boolean} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove pool
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.remove_pool') === 'baddc9254c7c4efb34c387ac703b49fa5ebfc7e81b4e39638c46abac69069ba5'
    }

    /**
     * Remove pool
     */
    get asV43(): {baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, isFarm: boolean} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemeterFarmingPlatformWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DemeterFarmingPlatform.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Withdraw
     */
    get isV41(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.withdraw') === '3e39ff9452063f75a2a9319c9552ec9792c2f3c3334057d6827678fd212e2f2c'
    }

    /**
     *  Withdraw
     */
    get asV41(): {poolAsset: Uint8Array, rewardAsset: Uint8Array, pooledTokens: bigint, isFarm: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Withdraw
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.withdraw') === 'c540cf80346817729bf634387f4dc154c87a33a4129aa47d5f0086acab32566b'
    }

    /**
     * Withdraw
     */
    get asV42(): {poolAsset: v42.AssetId32, rewardAsset: v42.AssetId32, pooledTokens: bigint, isFarm: boolean} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Withdraw
     */
    get isV43(): boolean {
        return this._chain.getCallHash('DemeterFarmingPlatform.withdraw') === '8fe5aaed5fd3663ba37cc1d50a5d4eb22d5e6fb05c3e5a1ff8d4a90b10322675'
    }

    /**
     * Withdraw
     */
    get asV43(): {baseAsset: v43.AssetId32, poolAsset: v43.AssetId32, rewardAsset: v43.AssetId32, pooledTokens: bigint, isFarm: boolean} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyBlacklistCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.blacklist')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Permanently place a proposal into the blacklist. This prevents it from ever being
     *  proposed again.
     * 
     *  If called on a queued public or external proposal, then this will result in it being
     *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     *  then it will be cancelled.
     * 
     *  The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     *  - `proposal_hash`: The proposal hash to blacklist permanently.
     *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     *  cancelled.
     * 
     *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *    reasonable value).
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
    }

    /**
     *  Permanently place a proposal into the blacklist. This prevents it from ever being
     *  proposed again.
     * 
     *  If called on a queued public or external proposal, then this will result in it being
     *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     *  then it will be cancelled.
     * 
     *  The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     *  - `proposal_hash`: The proposal hash to blacklist permanently.
     *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     *  cancelled.
     * 
     *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *    reasonable value).
     */
    get asV41(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a proposal.
     * 
     *  The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     *  - `prop_index`: The index of the proposal to cancel.
     * 
     *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
    }

    /**
     *  Remove a proposal.
     * 
     *  The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     *  - `prop_index`: The index of the proposal to cancel.
     * 
     *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get asV41(): {propIndex: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelQueuedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_queued')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a proposal queued for enactment.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  - `which`: The index of the referendum to cancel.
     * 
     *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
    }

    /**
     *  Cancel a proposal queued for enactment.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  - `which`: The index of the referendum to cancel.
     * 
     *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    get asV41(): {which: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelReferendumCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_referendum')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a referendum.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  - `ref_index`: The index of the referendum to cancel.
     * 
     *  # Weight: `O(1)`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
    }

    /**
     *  Remove a referendum.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  - `ref_index`: The index of the referendum to cancel.
     * 
     *  # Weight: `O(1)`.
     */
    get asV41(): {refIndex: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyClearPublicProposalsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.clear_public_proposals')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Clears all public proposals.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  Weight: `O(1)`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Clears all public proposals.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  Weight: `O(1)`.
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Delegate the voting power (with some given conviction) of the sending account.
     * 
     *  The balance delegated is locked for as long as it's delegated, and thereafter for the
     *  time appropriate for the conviction's lock period.
     * 
     *  The dispatch origin of this call must be _Signed_, and the signing account must either:
     *    - be delegating already; or
     *    - have no voting activity (if there is, then it will need to be removed/consolidated
     *      through `reap_vote` or `unvote`).
     * 
     *  - `to`: The account whose voting the `target` account's voting power will follow.
     *  - `conviction`: The conviction that will be attached to the delegated votes. When the
     *    account is undelegated, the funds will be locked for the corresponding period.
     *  - `balance`: The amount of the account's balance to be used in delegating. This must
     *    not be more than the account's current balance.
     * 
     *  Emits `Delegated`.
     * 
     *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *    voted on. Weight is charged as if maximum votes.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
    }

    /**
     *  Delegate the voting power (with some given conviction) of the sending account.
     * 
     *  The balance delegated is locked for as long as it's delegated, and thereafter for the
     *  time appropriate for the conviction's lock period.
     * 
     *  The dispatch origin of this call must be _Signed_, and the signing account must either:
     *    - be delegating already; or
     *    - have no voting activity (if there is, then it will need to be removed/consolidated
     *      through `reap_vote` or `unvote`).
     * 
     *  - `to`: The account whose voting the `target` account's voting power will follow.
     *  - `conviction`: The conviction that will be attached to the delegated votes. When the
     *    account is undelegated, the funds will be locked for the corresponding period.
     *  - `balance`: The amount of the account's balance to be used in delegating. This must
     *    not be more than the account's current balance.
     * 
     *  Emits `Delegated`.
     * 
     *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *    voted on. Weight is charged as if maximum votes.
     */
    get asV41(): {to: Uint8Array, conviction: v41.Conviction, balance: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEmergencyCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.emergency_cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     *  referendum.
     * 
     *  The dispatch origin of this call must be `CancellationOrigin`.
     * 
     *  -`ref_index`: The index of the referendum to cancel.
     * 
     *  Weight: `O(1)`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     *  referendum.
     * 
     *  The dispatch origin of this call must be `CancellationOrigin`.
     * 
     *  -`ref_index`: The index of the referendum to cancel.
     * 
     *  Weight: `O(1)`.
     */
    get asV41(): {refIndex: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEnactProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.enact_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
    }

    /**
     *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get asV41(): {proposalHash: Uint8Array, index: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule a referendum to be tabled once it is legal to schedule an external
     *  referendum.
     * 
     *  The dispatch origin of this call must be `ExternalOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
     *    Decoding vec of length V. Charged as maximum
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Schedule a referendum to be tabled once it is legal to schedule an external
     *  referendum.
     * 
     *  The dispatch origin of this call must be `ExternalOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
     *    Decoding vec of length V. Charged as maximum
     */
    get asV41(): {proposalHash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeDefaultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_default')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     *  schedule an external referendum.
     * 
     *  The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     * 
     *  Weight: `O(1)`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     *  schedule an external referendum.
     * 
     *  The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     * 
     *  Weight: `O(1)`
     */
    get asV41(): {proposalHash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeMajorityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_majority')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     *  an external referendum.
     * 
     *  The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     * 
     *  Weight: `O(1)`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     *  an external referendum.
     * 
     *  The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     * 
     *  Weight: `O(1)`
     */
    get asV41(): {proposalHash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyFastTrackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.fast_track')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule the currently externally-proposed majority-carries referendum to be tabled
     *  immediately. If there is no externally-proposed referendum currently, or if there is one
     *  but it is not a majority-carries referendum then it fails.
     * 
     *  The dispatch of this call must be `FastTrackOrigin`.
     * 
     *  - `proposal_hash`: The hash of the current external proposal.
     *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *    `FastTrackVotingPeriod` if too low.
     *  - `delay`: The number of block after voting has ended in approval and this should be
     *    enacted. This doesn't have a minimum amount.
     * 
     *  Emits `Started`.
     * 
     *  Weight: `O(1)`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
    }

    /**
     *  Schedule the currently externally-proposed majority-carries referendum to be tabled
     *  immediately. If there is no externally-proposed referendum currently, or if there is one
     *  but it is not a majority-carries referendum then it fails.
     * 
     *  The dispatch of this call must be `FastTrackOrigin`.
     * 
     *  - `proposal_hash`: The hash of the current external proposal.
     *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *    `FastTrackVotingPeriod` if too low.
     *  - `delay`: The number of block after voting has ended in approval and this should be
     *    enacted. This doesn't have a minimum amount.
     * 
     *  Emits `Started`.
     * 
     *  Weight: `O(1)`
     */
    get asV41(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNoteImminentPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_imminent_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register the preimage for an upcoming proposal. This requires the proposal to be
     *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
     *  the preimage has not been uploaded before and matches some imminent proposal,
     *  no fee is paid.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `encoded_proposal`: The preimage of a proposal.
     * 
     *  Emits `PreimageNoted`.
     * 
     *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     *  Register the preimage for an upcoming proposal. This requires the proposal to be
     *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
     *  the preimage has not been uploaded before and matches some imminent proposal,
     *  no fee is paid.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `encoded_proposal`: The preimage of a proposal.
     * 
     *  Emits `PreimageNoted`.
     * 
     *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get asV41(): {encodedProposal: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNoteImminentPreimageOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_imminent_preimage_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV41(): {encodedProposal: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     *  in the dispatch queue but does require a deposit, returned once enacted.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `encoded_proposal`: The preimage of a proposal.
     * 
     *  Emits `PreimageNoted`.
     * 
     *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     *  in the dispatch queue but does require a deposit, returned once enacted.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `encoded_proposal`: The preimage of a proposal.
     * 
     *  Emits `PreimageNoted`.
     * 
     *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get asV41(): {encodedProposal: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNotePreimageOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_preimage_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV41(): {encodedProposal: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Propose a sensitive action to be taken.
     * 
     *  The dispatch origin of this call must be _Signed_ and the sender must
     *  have funds to cover the deposit.
     * 
     *  - `proposal_hash`: The hash of the proposal preimage.
     *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     *  Emits `Proposed`.
     * 
     *  Weight: `O(p)`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
    }

    /**
     *  Propose a sensitive action to be taken.
     * 
     *  The dispatch origin of this call must be _Signed_ and the sender must
     *  have funds to cover the deposit.
     * 
     *  - `proposal_hash`: The hash of the proposal preimage.
     *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     *  Emits `Proposed`.
     * 
     *  Weight: `O(p)`
     */
    get asV41(): {proposalHash: Uint8Array, value: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyReapPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.reap_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove an expired proposal preimage and collect the deposit.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `proposal_hash`: The preimage hash of a proposal.
     *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
     *    Extrinsic is weighted according to this value with no refund.
     * 
     *  This will only work after `VotingPeriod` blocks from the time that the preimage was
     *  noted, if it's the same account doing it. If it's a different account, then it'll only
     *  work an additional `EnactmentPeriod` later.
     * 
     *  Emits `PreimageReaped`.
     * 
     *  Weight: `O(D)` where D is length of proposal.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
    }

    /**
     *  Remove an expired proposal preimage and collect the deposit.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `proposal_hash`: The preimage hash of a proposal.
     *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
     *    Extrinsic is weighted according to this value with no refund.
     * 
     *  This will only work after `VotingPeriod` blocks from the time that the preimage was
     *  noted, if it's the same account doing it. If it's a different account, then it'll only
     *  work an additional `EnactmentPeriod` later.
     * 
     *  Emits `PreimageReaped`.
     * 
     *  Weight: `O(D)` where D is length of proposal.
     */
    get asV41(): {proposalHash: Uint8Array, proposalLenUpperBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a vote for a referendum.
     * 
     *  If the `target` is equal to the signer, then this function is exactly equivalent to
     *  `remove_vote`. If not equal to the signer, then the vote must have expired,
     *  either because the referendum was cancelled, because the voter lost the referendum or
     *  because the conviction period is over.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account of the vote to be removed; this account must have voted for
     *    referendum `index`.
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *    Weight is calculated for the maximum number of vote.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
    }

    /**
     *  Remove a vote for a referendum.
     * 
     *  If the `target` is equal to the signer, then this function is exactly equivalent to
     *  `remove_vote`. If not equal to the signer, then the vote must have expired,
     *  either because the referendum was cancelled, because the voter lost the referendum or
     *  because the conviction period is over.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account of the vote to be removed; this account must have voted for
     *    referendum `index`.
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *    Weight is calculated for the maximum number of vote.
     */
    get asV41(): {target: Uint8Array, index: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a vote for a referendum.
     * 
     *  If:
     *  - the referendum was cancelled, or
     *  - the referendum is ongoing, or
     *  - the referendum has ended such that
     *    - the vote of the account was in opposition to the result; or
     *    - there was no conviction to the account's vote; or
     *    - the account made a split vote
     *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
     *  funds being available.
     * 
     *  If, however, the referendum has ended and:
     *  - it finished corresponding to the vote of the account, and
     *  - the account made a standard vote with conviction, and
     *  - the lock period of the conviction is not over
     *  ...then the lock will be aggregated into the overall account's lock, which may involve
     *  *overlocking* (where the two locks are combined into a single lock that is the maximum
     *  of both the amount locked and the time is it locked for).
     * 
     *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
     *  registered for referendum `index`.
     * 
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *    Weight is calculated for the maximum number of vote.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     *  Remove a vote for a referendum.
     * 
     *  If:
     *  - the referendum was cancelled, or
     *  - the referendum is ongoing, or
     *  - the referendum has ended such that
     *    - the vote of the account was in opposition to the result; or
     *    - there was no conviction to the account's vote; or
     *    - the account made a split vote
     *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
     *  funds being available.
     * 
     *  If, however, the referendum has ended and:
     *  - it finished corresponding to the vote of the account, and
     *  - the account made a standard vote with conviction, and
     *  - the lock period of the conviction is not over
     *  ...then the lock will be aggregated into the overall account's lock, which may involve
     *  *overlocking* (where the two locks are combined into a single lock that is the maximum
     *  of both the amount locked and the time is it locked for).
     * 
     *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
     *  registered for referendum `index`.
     * 
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *    Weight is calculated for the maximum number of vote.
     */
    get asV41(): {index: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySecondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.second')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Signals agreement with a particular proposal.
     * 
     *  The dispatch origin of this call must be _Signed_ and the sender
     *  must have funds to cover the deposit, equal to the original deposit.
     * 
     *  - `proposal`: The index of the proposal to second.
     *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *    proposal. Extrinsic is weighted according to this value with no refund.
     * 
     *  Weight: `O(S)` where S is the number of seconds a proposal already has.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
    }

    /**
     *  Signals agreement with a particular proposal.
     * 
     *  The dispatch origin of this call must be _Signed_ and the sender
     *  must have funds to cover the deposit, equal to the original deposit.
     * 
     *  - `proposal`: The index of the proposal to second.
     *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *    proposal. Extrinsic is weighted according to this value with no refund.
     * 
     *  Weight: `O(S)` where S is the number of seconds a proposal already has.
     */
    get asV41(): {proposal: number, secondsUpperBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Undelegate the voting power of the sending account.
     * 
     *  Tokens may be unlocked following once an amount of time consistent with the lock period
     *  of the conviction with which the delegation was issued.
     * 
     *  The dispatch origin of this call must be _Signed_ and the signing account must be
     *  currently delegating.
     * 
     *  Emits `Undelegated`.
     * 
     *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *    voted on. Weight is charged as if maximum votes.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Undelegate the voting power of the sending account.
     * 
     *  Tokens may be unlocked following once an amount of time consistent with the lock period
     *  of the conviction with which the delegation was issued.
     * 
     *  The dispatch origin of this call must be _Signed_ and the signing account must be
     *  currently delegating.
     * 
     *  Emits `Undelegated`.
     * 
     *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *    voted on. Weight is charged as if maximum votes.
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUnlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.unlock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unlock tokens that have an expired lock.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account to remove the lock on.
     * 
     *  Weight: `O(R)` with R number of vote of target.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
    }

    /**
     *  Unlock tokens that have an expired lock.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account to remove the lock on.
     * 
     *  Weight: `O(R)` with R number of vote of target.
     */
    get asV41(): {target: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVetoExternalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.veto_external')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Veto and blacklist the external proposal hash.
     * 
     *  The dispatch origin of this call must be `VetoOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     *  Emits `Vetoed`.
     * 
     *  Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Veto and blacklist the external proposal hash.
     * 
     *  The dispatch origin of this call must be `VetoOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     *  Emits `Vetoed`.
     * 
     *  Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get asV41(): {proposalHash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `ref_index`: The index of the referendum to vote for.
     *  - `vote`: The vote configuration.
     * 
     *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
    }

    /**
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `ref_index`: The index of the referendum to vote for.
     *  - `vote`: The vote configuration.
     * 
     *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get asV41(): {refIndex: number, vote: v41.AccountVote} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get asV42(): {refIndex: number, vote: v42.AccountVote} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseGovernanceFallbackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.governance_fallback')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Trigger the governance fallback.
     * 
     * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
     * calling [`Call::set_emergency_election_result`].
     */
    get isV42(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.governance_fallback') === 'f3179fd0f0529838d5758e1e919a1900aa58425b96768e9648bf806ee9c9b1ae'
    }

    /**
     * Trigger the governance fallback.
     * 
     * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
     * calling [`Call::set_emergency_election_result`].
     */
    get asV42(): {maybeMaxVoters: (number | undefined), maybeMaxTargets: (number | undefined)} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSetEmergencyElectionResultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.set_emergency_election_result')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a solution in the queue, to be handed out to the client of this pallet in the next
     * call to `ElectionProvider::elect`.
     * 
     * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     * 
     * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     * feasibility check itself can in principle cause the election process to fail (due to
     * memory/weight constrains).
     */
    get isV42(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.set_emergency_election_result') === '976eeea3dee9ad3c2d95e30c6751a49c4ae6a755a0448d0d6f282625dd92e539'
    }

    /**
     * Set a solution in the queue, to be handed out to the client of this pallet in the next
     * call to `ElectionProvider::elect`.
     * 
     * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     * 
     * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     * feasibility check itself can in principle cause the election process to fail (due to
     * memory/weight constrains).
     */
    get asV42(): {supports: [Uint8Array, v42.Support][]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.set_minimum_untrusted_score')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a new value for `MinimumUntrustedScore`.
     * 
     * Dispatch origin must be aligned with `T::ForceOrigin`.
     * 
     * This check can be turned off by setting the value to `None`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.set_minimum_untrusted_score') === '4b6d16ae537aca5ce887c10c25d838413bb18639efa0829f62aa6b722837c206'
    }

    /**
     * Set a new value for `MinimumUntrustedScore`.
     * 
     * Dispatch origin must be aligned with `T::ForceOrigin`.
     * 
     * This check can be turned off by setting the value to `None`.
     */
    get asV42(): {maybeNextScore: (v42.ElectionScore | undefined)} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSubmitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.submit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit a solution for the signed phase.
     * 
     * The dispatch origin fo this call must be __signed__.
     * 
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     * 
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.submit') === '3509bddc2e290e5056bab6adf0639cb780d40f3dc978c7478ef35f06da346d87'
    }

    /**
     * Submit a solution for the signed phase.
     * 
     * The dispatch origin fo this call must be __signed__.
     * 
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     * 
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     */
    get asV42(): {rawSolution: v42.RawSolution} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSubmitUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.submit_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit a solution for the unsigned phase.
     * 
     * The dispatch origin fo this call must be __none__.
     * 
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     * 
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     * 
     * No deposit or reward is associated with this submission.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.submit_unsigned') === '206a863dac73f7a4a92672c4e078897cac93dcb27517573adca2f9193acd8f5e'
    }

    /**
     * Submit a solution for the unsigned phase.
     * 
     * The dispatch origin fo this call must be __none__.
     * 
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     * 
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     * 
     * No deposit or reward is associated with this submission.
     */
    get asV42(): {rawSolution: v42.RawSolution, witness: v42.SolutionOrSnapshotSize} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenCleanDefunctVotersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.clean_defunct_voters')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     *  deposit of the removed voters are returned.
     * 
     *  This is an root function to be used only for cleaning the state.
     * 
     *  The dispatch origin of this call must be root.
     * 
     *  # <weight>
     *  The total number of voters and those that are defunct must be provided as witness data.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.clean_defunct_voters') === '8279e35309d0c9a5d36cd12cce19e58fef95829d4096e23fe93a055a47afd8a0'
    }

    /**
     *  Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     *  deposit of the removed voters are returned.
     * 
     *  This is an root function to be used only for cleaning the state.
     * 
     *  The dispatch origin of this call must be root.
     * 
     *  # <weight>
     *  The total number of voters and those that are defunct must be provided as witness data.
     *  # </weight>
     */
    get asV41(): {numVoters: number, numDefunct: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen election is started.
     * 
     *  The dispatch origin of this call must be root.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement, we use a small weight. Else, since this is a root call and
     *  will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.remove_member') === 'cc43d536f862eb65fab1d583cca3ea302b95423702ae1dac84b75df432320893'
    }

    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen election is started.
     * 
     *  The dispatch origin of this call must be root.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement, we use a small weight. Else, since this is a root call and
     *  will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    get asV41(): {who: Uint8Array, hasReplacement: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenRemoveVoterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.remove_voter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove `origin` as a voter.
     * 
     *  This removes the lock and returns the deposit.
     * 
     *  The dispatch origin of this call must be signed and be a voter.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.remove_voter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Remove `origin` as a voter.
     * 
     *  This removes the lock and returns the deposit.
     * 
     *  The dispatch origin of this call must be signed and be a voter.
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenRenounceCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.renounce_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Renounce one's intention to be a candidate for the next election round. 3 potential
     *  outcomes exist:
     * 
     *  - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *    unreserved, returned and origin is removed as a candidate.
     *  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *    origin is removed as a runner-up.
     *  - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *    removed as a member, consequently not being a candidate for the next round anymore.
     *    Similar to [`remove_members`], if replacement runners exists, they are immediately used.
     *    If the prime is renouncing, then no prime will exist until the next round.
     * 
     *  The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     *  # <weight>
     *  The type of renouncing must be provided as witness data.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.renounce_candidacy') === '891a3ff219ab8817cfffbcd0ed48578a0fd96440dc2292a0cde84a40439f7fbe'
    }

    /**
     *  Renounce one's intention to be a candidate for the next election round. 3 potential
     *  outcomes exist:
     * 
     *  - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *    unreserved, returned and origin is removed as a candidate.
     *  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *    origin is removed as a runner-up.
     *  - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *    removed as a member, consequently not being a candidate for the next round anymore.
     *    Similar to [`remove_members`], if replacement runners exists, they are immediately used.
     *    If the prime is renouncing, then no prime will exist until the next round.
     * 
     *  The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     *  # <weight>
     *  The type of renouncing must be provided as witness data.
     *  # </weight>
     */
    get asV41(): {renouncing: v41.Renouncing} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenSubmitCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.submit_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     *  All candidates are wiped at the end of the term. They either become a member/runner-up,
     *  or leave the system while their deposit is slashed.
     * 
     *  The dispatch origin of this call must be signed.
     * 
     *  ### Warning
     * 
     *  Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     *  to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     *  # <weight>
     *  The number of current candidates must be provided as witness data.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.submit_candidacy') === 'f9d2bc9f755e33c27d34db4c3b063daa9e2490111d35f89ea1995d74e59b1819'
    }

    /**
     *  Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     *  All candidates are wiped at the end of the term. They either become a member/runner-up,
     *  or leave the system while their deposit is slashed.
     * 
     *  The dispatch origin of this call must be signed.
     * 
     *  ### Warning
     * 
     *  Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     *  to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     *  # <weight>
     *  The number of current candidates must be provided as witness data.
     *  # </weight>
     */
    get asV41(): {candidateCount: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsPhragmenVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionsPhragmen.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Vote for a set of candidates for the upcoming round of election. This can be called to
     *  set the initial votes, or update already existing votes.
     * 
     *  Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     *  reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     *  The `votes` should:
     *    - not be empty.
     *    - be less than the number of possible candidates. Note that all current members and
     *      runners-up are also automatically candidates for the next round.
     * 
     *  If `value` is more than `who`'s total balance, then the maximum of the two is used.
     * 
     *  The dispatch origin of this call must be signed.
     * 
     *  ### Warning
     * 
     *  It is the responsibility of the caller to **NOT** place all of their balance into the
     *  lock and keep some for further operations.
     * 
     *  # <weight>
     *  We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('ElectionsPhragmen.vote') === '75939c25de1c96145b5d2d4bc8627a3fc22299f0e1f1f6f0709e54e884796bda'
    }

    /**
     *  Vote for a set of candidates for the upcoming round of election. This can be called to
     *  set the initial votes, or update already existing votes.
     * 
     *  Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     *  reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     *  The `votes` should:
     *    - not be empty.
     *    - be less than the number of possible candidates. Note that all current members and
     *      runners-up are also automatically candidates for the next round.
     * 
     *  If `value` is more than `who`'s total balance, then the maximum of the two is used.
     * 
     *  The dispatch origin of this call must be signed.
     * 
     *  ### Warning
     * 
     *  It is the responsibility of the caller to **NOT** place all of their balance into the
     *  lock and keep some for further operations.
     * 
     *  # <weight>
     *  We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     *  # </weight>
     */
    get asV41(): {votes: Uint8Array[], value: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeAbortRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.abort_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancels a registered request.
     * 
     *  Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     *  removes it from the request queues.
     * 
     *  Can only be called from a bridge account.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.abort_request') === 'f76c0c9cc5992a5d283dc33374d2ba39a77b82f3648194094c1bf724209104b1'
    }

    /**
     *  Cancels a registered request.
     * 
     *  Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     *  removes it from the request queues.
     * 
     *  Can only be called from a bridge account.
     */
    get asV41(): {hash: Uint8Array, error: v41.DispatchError, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Cancels a registered request.
     * 
     * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     * removes it from the request queues.
     * 
     * Can only be called from a bridge account.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('EthBridge.abort_request') === 'e1707d2e2c7c3fa0ed453d8e878688d542f6152c46284edaed10d518fc46238e'
    }

    /**
     * Cancels a registered request.
     * 
     * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
     * removes it from the request queues.
     * 
     * Can only be called from a bridge account.
     */
    get asV42(): {hash: Uint8Array, error: v42.DispatchError, networkId: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeAddAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.add_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a Thischain asset to the bridge whitelist.
     * 
     *  Can only be called by root.
     * 
     *  Parameters:
     *  - `asset_id` - Thischain asset identifier.
     *  - `network_id` - network identifier to which the asset should be added.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.add_asset') === '0b69aa653d632969a65471c583a09a105c0487cae6849dff91d5e67663714abb'
    }

    /**
     *  Add a Thischain asset to the bridge whitelist.
     * 
     *  Can only be called by root.
     * 
     *  Parameters:
     *  - `asset_id` - Thischain asset identifier.
     *  - `network_id` - network identifier to which the asset should be added.
     */
    get asV41(): {assetId: Uint8Array, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a Thischain asset to the bridge whitelist.
     * 
     * Can only be called by root.
     * 
     * Parameters:
     * - `asset_id` - Thischain asset identifier.
     * - `network_id` - network identifier to which the asset should be added.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('EthBridge.add_asset') === 'd40d346e2348fa429e9bd3fdcb4adfff0e9f23c8899ee8227196564ed4e61854'
    }

    /**
     * Add a Thischain asset to the bridge whitelist.
     * 
     * Can only be called by root.
     * 
     * Parameters:
     * - `asset_id` - Thischain asset identifier.
     * - `network_id` - network identifier to which the asset should be added.
     */
    get asV42(): {assetId: v42.AssetId32, networkId: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeAddPeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.add_peer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a new peer to the bridge peers set.
     * 
     *  Parameters:
     *  - `account_id` - account id on thischain.
     *  - `address` - account id on sidechain.
     *  - `network_id` - network identifier.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.add_peer') === '5722f6d608c5d7b8c73c3cc6aed41b12d3a37715ceea89a6d99e5bf78ec115cf'
    }

    /**
     *  Add a new peer to the bridge peers set.
     * 
     *  Parameters:
     *  - `account_id` - account id on thischain.
     *  - `address` - account id on sidechain.
     *  - `network_id` - network identifier.
     */
    get asV41(): {accountId: Uint8Array, address: Uint8Array, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeAddSidechainTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.add_sidechain_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a Sidechain token to the bridge whitelist.
     * 
     *  Parameters:
     *  - `token_address` - token contract address.
     *  - `symbol` - token symbol (ticker).
     *  - `name` - token name.
     *  - `decimals` -  token precision.
     *  - `network_id` - network identifier.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.add_sidechain_token') === '5f79c9f40dd8ac012fb4a444ef3e907b68a12a41979dc4d338f7bcef32da80fb'
    }

    /**
     *  Add a Sidechain token to the bridge whitelist.
     * 
     *  Parameters:
     *  - `token_address` - token contract address.
     *  - `symbol` - token symbol (ticker).
     *  - `name` - token name.
     *  - `decimals` -  token precision.
     *  - `network_id` - network identifier.
     */
    get asV41(): {tokenAddress: Uint8Array, symbol: Uint8Array, name: Uint8Array, decimals: number, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a Sidechain token to the bridge whitelist.
     * 
     * Parameters:
     * - `token_address` - token contract address.
     * - `symbol` - token symbol (ticker).
     * - `name` - token name.
     * - `decimals` -  token precision.
     * - `network_id` - network identifier.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('EthBridge.add_sidechain_token') === '8ca8b370c28e9f9f5b41e481d97aa82562a8d37daefe45072631bcdbfbe3b3c1'
    }

    /**
     * Add a Sidechain token to the bridge whitelist.
     * 
     * Parameters:
     * - `token_address` - token contract address.
     * - `symbol` - token symbol (ticker).
     * - `name` - token name.
     * - `decimals` -  token precision.
     * - `network_id` - network identifier.
     */
    get asV42(): {tokenAddress: Uint8Array, symbol: string, name: string, decimals: number, networkId: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeApproveRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.approve_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Approve the given outgoing request. The function is used by bridge peers.
     * 
     *  Verifies the peer signature of the given request and adds it to `RequestApprovals`.
     *  Once quorum is collected, the request gets finalized and removed from request queue.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.approve_request') === 'b40386b2958dadc54d00ed18b6b7c70db43c05dcac36a9cb8e942e64ff827940'
    }

    /**
     *  Approve the given outgoing request. The function is used by bridge peers.
     * 
     *  Verifies the peer signature of the given request and adds it to `RequestApprovals`.
     *  Once quorum is collected, the request gets finalized and removed from request queue.
     */
    get asV41(): {ocwPublic: Uint8Array, hash: Uint8Array, signatureParams: v41.SignatureParams, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeFinalizeIncomingRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.finalize_incoming_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Finalize incoming request (see `Pallet::finalize_incoming_request_inner`).
     * 
     *  Can be only called from a bridge account.
     * 
     *  Parameters:
     *  - `request` - an incoming request.
     *  - `network_id` - network identifier.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.finalize_incoming_request') === '5ddd221f077b82b74c58eba1592b4bc21405e7b09323412b89dba7a62d06c7b4'
    }

    /**
     *  Finalize incoming request (see `Pallet::finalize_incoming_request_inner`).
     * 
     *  Can be only called from a bridge account.
     * 
     *  Parameters:
     *  - `request` - an incoming request.
     *  - `network_id` - network identifier.
     */
    get asV41(): {hash: Uint8Array, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeForceAddPeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.force_add_peer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add the given peer to the peers set without additional checks.
     * 
     *  Can only be called by a root account.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.force_add_peer') === '36987f1a6095f6388b6a1995a1ddcd7fd8f7a13751e25afe6205146fac6f4756'
    }

    /**
     *  Add the given peer to the peers set without additional checks.
     * 
     *  Can only be called by a root account.
     */
    get asV41(): {who: Uint8Array, address: Uint8Array, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeImportIncomingRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.import_incoming_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Import the given incoming request.
     * 
     *  Register's the load request, then registers and finalizes the incoming request if it
     *  succeeded, otherwise aborts the load request.
     * 
     *  Can only be called by a bridge account.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.import_incoming_request') === '1e022804c2d1c60d197dc2dbfb9ba14b865a2957c1c2b03107c4ee9b128f30fb'
    }

    /**
     *  Import the given incoming request.
     * 
     *  Register's the load request, then registers and finalizes the incoming request if it
     *  succeeded, otherwise aborts the load request.
     * 
     *  Can only be called by a bridge account.
     */
    get asV41(): {loadIncomingRequest: v41.LoadIncomingRequest, incomingRequestResult: Result<v41.IncomingRequest, v41.DispatchError>} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Import the given incoming request.
     * 
     * Register's the load request, then registers and finalizes the incoming request if it
     * succeeded, otherwise aborts the load request.
     * 
     * Can only be called by a bridge account.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('EthBridge.import_incoming_request') === 'a1a08084bae4a695a131d2c6988ead7beea86a412b5942e7c7adaf48f0b562e0'
    }

    /**
     * Import the given incoming request.
     * 
     * Register's the load request, then registers and finalizes the incoming request if it
     * succeeded, otherwise aborts the load request.
     * 
     * Can only be called by a bridge account.
     */
    get asV42(): {loadIncomingRequest: v42.LoadIncomingRequest, incomingRequestResult: Result<v42.IncomingRequest, v42.DispatchError>} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeMigrateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.migrate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Migrate the given bridge to a new smart-contract.
     * 
     *  Can only be called by an authority.
     * 
     *  Parameters:
     *  - `new_contract_address` - new sidechain ocntract address.
     *  - `erc20_native_tokens` - migrated assets ids.
     *  - `network_id` - bridge network identifier.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.migrate') === '5dbdb1f3ff572df374e5e9d5e779c4bd5bf2b3acf7141785d25a61b3140c5826'
    }

    /**
     *  Migrate the given bridge to a new smart-contract.
     * 
     *  Can only be called by an authority.
     * 
     *  Parameters:
     *  - `new_contract_address` - new sidechain ocntract address.
     *  - `erc20_native_tokens` - migrated assets ids.
     *  - `network_id` - bridge network identifier.
     */
    get asV41(): {newContractAddress: Uint8Array, erc20NativeTokens: Uint8Array[], networkId: number, newSignatureVersion: v41.BridgeSignatureVersion} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeMigrateTo020Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.migrate_to_0_2_0')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.migrate_to_0_2_0') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgePrepareForMigrationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.prepare_for_migration')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Prepare the given bridge for migration.
     * 
     *  Can only be called by an authority.
     * 
     *  Parameters:
     *  - `network_id` - bridge network identifier.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.prepare_for_migration') === '8bc0c47826d72b1dc6ce9b17386254e79e3b91c024c74aeb79e1bda66e115939'
    }

    /**
     *  Prepare the given bridge for migration.
     * 
     *  Can only be called by an authority.
     * 
     *  Parameters:
     *  - `network_id` - bridge network identifier.
     */
    get asV41(): {networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRegisterBridgeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.register_bridge')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register a new bridge.
     * 
     *  Parameters:
     *  - `bridge_contract_address` - address of smart-contract deployed on a corresponding
     *  network.
     *  - `initial_peers` - a set of initial network peers.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.register_bridge') === '161f1016c7a6177231ae9788f487475a5469386ec85c01f9ddf83c401c77ead8'
    }

    /**
     *  Register a new bridge.
     * 
     *  Parameters:
     *  - `bridge_contract_address` - address of smart-contract deployed on a corresponding
     *  network.
     *  - `initial_peers` - a set of initial network peers.
     */
    get asV41(): {bridgeContractAddress: Uint8Array, initialPeers: Uint8Array[], signatureVersion: v41.BridgeSignatureVersion} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRegisterExistingSidechainAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.register_existing_sidechain_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register existing asset
     * 
     *  Can only be called by root.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.register_existing_sidechain_asset') === '476a05524a2767de243ad986a42bfdb6aec2c769ff9a934afa842c6ebefa89e5'
    }

    /**
     *  Register existing asset
     * 
     *  Can only be called by root.
     */
    get asV41(): {assetId: Uint8Array, tokenAddress: Uint8Array, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register existing asset
     * 
     * Can only be called by root.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('EthBridge.register_existing_sidechain_asset') === 'a5ce4a0e093067cfa68a650725a13df1e527fe26de284833a7eaad112e45f469'
    }

    /**
     * Register existing asset
     * 
     * Can only be called by root.
     */
    get asV42(): {assetId: v42.AssetId32, tokenAddress: Uint8Array, networkId: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRegisterIncomingRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.register_incoming_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register the given incoming request and add it to the queue.
     * 
     *  Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
     *  corresponding load-incoming-request and removes the load-request from the queue.
     * 
     *  Can only be called by a bridge account.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.register_incoming_request') === 'cdcb443d136b3be1b6c195de7c2dfee92f358312de445b41cc0e69e5f1a9c221'
    }

    /**
     *  Register the given incoming request and add it to the queue.
     * 
     *  Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
     *  corresponding load-incoming-request and removes the load-request from the queue.
     * 
     *  Can only be called by a bridge account.
     */
    get asV41(): {incomingRequest: v41.IncomingRequest} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register the given incoming request and add it to the queue.
     * 
     * Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
     * corresponding load-incoming-request and removes the load-request from the queue.
     * 
     * Can only be called by a bridge account.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('EthBridge.register_incoming_request') === '26da55df27033abebdb03e7d1166192d74b06345bb8ba9cb4e04ab5abc46ca0d'
    }

    /**
     * Register the given incoming request and add it to the queue.
     * 
     * Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
     * corresponding load-incoming-request and removes the load-request from the queue.
     * 
     * Can only be called by a bridge account.
     */
    get asV42(): {incomingRequest: v42.IncomingRequest} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRemovePeerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.remove_peer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove peer from the the bridge peers set.
     * 
     *  Parameters:
     *  - `account_id` - account id on thischain.
     *  - `network_id` - network identifier.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.remove_peer') === 'ea495ef11ae0a2dc3482c98b5af60bafc5628e50f661341629d65cd9cfe7db7f'
    }

    /**
     *  Remove peer from the the bridge peers set.
     * 
     *  Parameters:
     *  - `account_id` - account id on thischain.
     *  - `network_id` - network identifier.
     */
    get asV41(): {accountId: Uint8Array, peerAddress: (Uint8Array | undefined), networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRemoveSidechainAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.remove_sidechain_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove asset
     * 
     *  Can only be called by root.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.remove_sidechain_asset') === '0b69aa653d632969a65471c583a09a105c0487cae6849dff91d5e67663714abb'
    }

    /**
     *  Remove asset
     * 
     *  Can only be called by root.
     */
    get asV41(): {assetId: Uint8Array, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove asset
     * 
     * Can only be called by root.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('EthBridge.remove_sidechain_asset') === 'd40d346e2348fa429e9bd3fdcb4adfff0e9f23c8899ee8227196564ed4e61854'
    }

    /**
     * Remove asset
     * 
     * Can only be called by root.
     */
    get asV42(): {assetId: v42.AssetId32, networkId: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeRequestFromSidechainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.request_from_sidechain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Load incoming request from Sidechain by the given transaction hash.
     * 
     *  Parameters:
     *  - `eth_tx_hash` - transaction hash on Sidechain.
     *  - `kind` - incoming request type.
     *  - `network_id` - network identifier.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.request_from_sidechain') === 'd8be79beeb660f1a05ee381ccb14e464bcd4287bf8334e5a2459b3f5bf1f3952'
    }

    /**
     *  Load incoming request from Sidechain by the given transaction hash.
     * 
     *  Parameters:
     *  - `eth_tx_hash` - transaction hash on Sidechain.
     *  - `kind` - incoming request type.
     *  - `network_id` - network identifier.
     */
    get asV41(): {ethTxHash: Uint8Array, kind: v41.IncomingRequestKind, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class EthBridgeTransferToSidechainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthBridge.transfer_to_sidechain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some amount of the given asset to Sidechain address.
     * 
     *  Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
     *  on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
     *  some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
     *  `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
     *  the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
     *  correct amount would be `0.100000` (only 6 digits after the decimal point).
     * 
     *  Parameters:
     *  - `asset_id` - thischain asset id.
     *  - `to` - sidechain account id.
     *  - `amount` - amount of the asset.
     *  - `network_id` - network identifier.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('EthBridge.transfer_to_sidechain') === 'f5e5a9ed2a9a49fbb43940d78d9bfcd30aeea1f0b9ae55bbfbd426b45933f12a'
    }

    /**
     *  Transfer some amount of the given asset to Sidechain address.
     * 
     *  Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
     *  on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
     *  some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
     *  `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
     *  the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
     *  correct amount would be `0.100000` (only 6 digits after the decimal point).
     * 
     *  Parameters:
     *  - `asset_id` - thischain asset id.
     *  - `to` - sidechain account id.
     *  - `amount` - amount of the asset.
     *  - `network_id` - network identifier.
     */
    get asV41(): {assetId: Uint8Array, to: Uint8Array, amount: bigint, networkId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some amount of the given asset to Sidechain address.
     * 
     * Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
     * on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
     * some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
     * `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
     * the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
     * correct amount would be `0.100000` (only 6 digits after the decimal point).
     * 
     * Parameters:
     * - `asset_id` - thischain asset id.
     * - `to` - sidechain account id.
     * - `amount` - amount of the asset.
     * - `network_id` - network identifier.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('EthBridge.transfer_to_sidechain') === '35e47d281fbcb7eb403bb50e9d8ed997a9b92424892a802748567b537179ae3b'
    }

    /**
     * Transfer some amount of the given asset to Sidechain address.
     * 
     * Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
     * on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
     * some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
     * `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
     * the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
     * correct amount would be `0.100000` (only 6 digits after the decimal point).
     * 
     * Parameters:
     * - `asset_id` - thischain asset id.
     * - `to` - sidechain account id.
     * - `amount` - amount of the asset.
     * - `network_id` - network identifier.
     */
    get asV42(): {assetId: v42.AssetId32, to: Uint8Array, amount: bigint, networkId: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class FarmingMigrateTo11Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Farming.migrate_to_1_1')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('Farming.migrate_to_1_1') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class FaucetResetRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Faucet.reset_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('Faucet.reset_rewards') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class FaucetTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Faucet.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfers the specified amount of asset to the specified account.
     *  The supported assets are: XOR, VAL, PSWAP.
     * 
     *  # Errors
     * 
     *  AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     *  AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     *  NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Faucet.transfer') === '58df2ad2d1f66389c5cf117ec3cddab29d6fe061ec5b7f639dc4b93c75a3c7f7'
    }

    /**
     *  Transfers the specified amount of asset to the specified account.
     *  The supported assets are: XOR, VAL, PSWAP.
     * 
     *  # Errors
     * 
     *  AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     *  AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     *  NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    get asV41(): {assetId: Uint8Array, target: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfers the specified amount of asset to the specified account.
     * The supported assets are: XOR, VAL, PSWAP.
     * 
     * # Errors
     * 
     * AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     * AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     * NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Faucet.transfer') === '45efe1b906fb2c3d93c465ff2459d19a50bf5e8340ac2f53e03932c0411223e3'
    }

    /**
     * Transfers the specified amount of asset to the specified account.
     * The supported assets are: XOR, VAL, PSWAP.
     * 
     * # Errors
     * 
     * AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     * AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     * NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    get asV42(): {assetId: v42.AssetId32, target: Uint8Array, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class FaucetUpdateLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Faucet.update_limit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('Faucet.update_limit') === '9e7207bd47039810c3ae4b5b408fe24d413f8d03d3283af709a74e0af912fd4d'
    }

    get asV41(): {newLimit: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaNoteStalledCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.note_stalled')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Note that the current authority set of the GRANDPA finality gadget has
     *  stalled. This will trigger a forced authority set change at the beginning
     *  of the next session, to be enacted `delay` blocks after that. The delay
     *  should be high enough to safely assume that the block signalling the
     *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
     *  will start the new authority set using the given finalized block as base.
     *  Only callable by root.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Grandpa.note_stalled') === '6bb454c2ae9db6ee64dc7f433f0fd3b839727f70c6c835943383346896272c40'
    }

    /**
     *  Note that the current authority set of the GRANDPA finality gadget has
     *  stalled. This will trigger a forced authority set change at the beginning
     *  of the next session, to be enacted `delay` blocks after that. The delay
     *  should be high enough to safely assume that the block signalling the
     *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
     *  will start the new authority set using the given finalized block as base.
     *  Only callable by root.
     */
    get asV41(): {delay: number, bestFinalizedBlockNumber: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     */
    get asV41(): {equivocationProof: v41.GrandpaEquivocationProof, keyOwnerProof: v41.KeyOwnerProof} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation_unsigned') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    get asV41(): {equivocationProof: v41.GrandpaEquivocationProof, keyOwnerProof: v41.KeyOwnerProof} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddRegistrarCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_registrar')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a registrar to the system.
     * 
     *  The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     *  - `account`: the account of the registrar.
     * 
     *  Emits `RegistrarAdded` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     *  Add a registrar to the system.
     * 
     *  The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     *  - `account`: the account of the registrar.
     * 
     *  Emits `RegistrarAdded` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get asV41(): {account: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add the given account to the sender's subs.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.add_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
    }

    /**
     *  Add the given account to the sender's subs.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV41(): {sub: Uint8Array, data: v41.Data} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityCancelRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.cancel_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a previous request.
     * 
     *  Payment: A previously reserved deposit is returned on success.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a
     *  registered identity.
     * 
     *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     *  Emits `JudgementUnrequested` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-reserve operation.
     *  - One storage mutation `O(R + X)`.
     *  - One event
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
    }

    /**
     *  Cancel a previous request.
     * 
     *  Payment: A previously reserved deposit is returned on success.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a
     *  registered identity.
     * 
     *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     *  Emits `JudgementUnrequested` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-reserve operation.
     *  - One storage mutation `O(R + X)`.
     *  - One event
     *  # </weight>
     */
    get asV41(): {regIndex: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityClearIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.clear_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`
     *    - where `R` registrar-count (governance-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *    - where `X` additional-field-count (deposit-bounded and code-bounded).
     *  - One balance-unreserve operation.
     *  - `2` storage reads and `S + 2` storage deletions.
     *  - One event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`
     *    - where `R` registrar-count (governance-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *    - where `X` additional-field-count (deposit-bounded and code-bounded).
     *  - One balance-unreserve operation.
     *  - `2` storage reads and `S + 2` storage deletions.
     *  - One event.
     *  # </weight>
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityKillIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.kill_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove an account's identity and sub-account information and slash the deposits.
     * 
     *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     *  `Slash`. Verification request deposits are not returned; they should be cancelled
     *  manually using `cancel_request`.
     * 
     *  The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     *  - `target`: the account whose identity the judgement is upon. This must be an account
     *    with a registered identity.
     * 
     *  Emits `IdentityKilled` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`.
     *  - One balance-reserve operation.
     *  - `S + 2` storage mutations.
     *  - One event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.kill_identity') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
    }

    /**
     *  Remove an account's identity and sub-account information and slash the deposits.
     * 
     *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     *  `Slash`. Verification request deposits are not returned; they should be cancelled
     *  manually using `cancel_request`.
     * 
     *  The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     *  - `target`: the account whose identity the judgement is upon. This must be an account
     *    with a registered identity.
     * 
     *  Emits `IdentityKilled` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`.
     *  - One balance-reserve operation.
     *  - `S + 2` storage mutations.
     *  - One event.
     *  # </weight>
     */
    get asV41(): {target: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityProvideJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.provide_judgement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Provide a judgement for an account's identity.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `reg_index`.
     * 
     *  - `reg_index`: the index of the registrar whose judgement is being made.
     *  - `target`: the account whose identity the judgement is upon. This must be an account
     *    with a registered identity.
     *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * 
     *  Emits `JudgementGiven` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-transfer operation.
     *  - Up to one account-lookup operation.
     *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     *  - One event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === '791c0e6b8f05476998f8aaac88c6d48f65d1a8c2670bcbd045a3ca694c679bd7'
    }

    /**
     *  Provide a judgement for an account's identity.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `reg_index`.
     * 
     *  - `reg_index`: the index of the registrar whose judgement is being made.
     *  - `target`: the account whose identity the judgement is upon. This must be an account
     *    with a registered identity.
     *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * 
     *  Emits `JudgementGiven` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-transfer operation.
     *  - Up to one account-lookup operation.
     *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     *  - One event.
     *  # </weight>
     */
    get asV41(): {regIndex: number, target: Uint8Array, judgement: v41.IdentityJudgement} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityQuitSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.quit_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the sender as a sub-account.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender (*not* the original depositor).
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  super-identity.
     * 
     *  NOTE: This should not normally be used, but is provided in the case that the non-
     *  controller of an account is maliciously registered as a sub-account.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Remove the sender as a sub-account.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender (*not* the original depositor).
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  super-identity.
     * 
     *  NOTE: This should not normally be used, but is provided in the case that the non-
     *  controller of an account is maliciously registered as a sub-account.
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRemoveSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.remove_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the given account from the sender's subs.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.remove_sub') === '38b23c3d326211a5d1355a68469ac48b2d3b137ed03e1feb95bb1da67e04c022'
    }

    /**
     *  Remove the given account from the sender's subs.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV41(): {sub: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRenameSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.rename_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Alter the associated name of the given sub-account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
    }

    /**
     *  Alter the associated name of the given sub-account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV41(): {sub: Uint8Array, data: v41.Data} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRequestJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.request_judgement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Request a judgement from a registrar.
     * 
     *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     *  given.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a
     *  registered identity.
     * 
     *  - `reg_index`: The index of the registrar whose judgement is requested.
     *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     *  ```nocompile
     *  Self::registrars().get(reg_index).unwrap().fee
     *  ```
     * 
     *  Emits `JudgementRequested` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-reserve operation.
     *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     *  - One event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
    }

    /**
     *  Request a judgement from a registrar.
     * 
     *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     *  given.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a
     *  registered identity.
     * 
     *  - `reg_index`: The index of the registrar whose judgement is requested.
     *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     *  ```nocompile
     *  Self::registrars().get(reg_index).unwrap().fee
     *  ```
     * 
     *  Emits `JudgementRequested` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-reserve operation.
     *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     *  - One event.
     *  # </weight>
     */
    get asV41(): {regIndex: number, maxFee: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetAccountIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_account_id')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change the account associated with a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `new`: the new account ID.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.set_account_id') === 'a333bb3ce3e314d48fcf93f14155097760db6249022181f1eb923c1343af6813'
    }

    /**
     *  Change the account associated with a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `new`: the new account ID.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     *  # </weight>
     */
    get asV41(): {index: number, new: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the fee required for a judgement to be requested from a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `fee`: the new fee.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
    }

    /**
     *  Set the fee required for a judgement to be requested from a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `fee`: the new fee.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     *  # </weight>
     */
    get asV41(): {index: number, fee: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFieldsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fields')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the field information for a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `fields`: the fields that the registrar concerns themselves with.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
    }

    /**
     *  Set the field information for a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `fields`: the fields that the registrar concerns themselves with.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     *  # </weight>
     */
    get asV41(): {index: number, fields: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set an account's identity information and reserve the appropriate deposit.
     * 
     *  If the account already has identity information, the deposit is taken as part payment
     *  for the new deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + X' + R)`
     *    - where `X` additional-field-count (deposit-bounded and code-bounded)
     *    - where `R` judgements-count (registrar-count-bounded)
     *  - One balance reserve operation.
     *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
    }

    /**
     *  Set an account's identity information and reserve the appropriate deposit.
     * 
     *  If the account already has identity information, the deposit is taken as part payment
     *  for the new deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + X' + R)`
     *    - where `X` additional-field-count (deposit-bounded and code-bounded)
     *    - where `R` judgements-count (registrar-count-bounded)
     *  - One balance reserve operation.
     *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    get asV41(): {info: v41.IdentityInfo} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetSubsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_subs')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the sub-accounts of the sender.
     * 
     *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  - `subs`: The identity's (new) sub-accounts.
     * 
     *  # <weight>
     *  - `O(P + S)`
     *    - where `P` old-subs-count (hard- and deposit-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *  - At most one balance operations.
     *  - DB:
     *    - `P + S` storage mutations (codec complexity `O(1)`)
     *    - One storage read (codec complexity `O(P)`).
     *    - One storage write (codec complexity `O(S)`).
     *    - One storage-exists (`IdentityOf::contains_key`).
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.set_subs') === 'f156a100857e71b9e1eab839801795e8569b63b49f6c30333c5bf12811cbbe73'
    }

    /**
     *  Set the sub-accounts of the sender.
     * 
     *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  - `subs`: The identity's (new) sub-accounts.
     * 
     *  # <weight>
     *  - `O(P + S)`
     *    - where `P` old-subs-count (hard- and deposit-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *  - At most one balance operations.
     *  - DB:
     *    - `P + S` storage mutations (codec complexity `O(1)`)
     *    - One storage read (codec complexity `O(P)`).
     *    - One storage write (codec complexity `O(S)`).
     *    - One storage-exists (`IdentityOf::contains_key`).
     *  # </weight>
     */
    get asV41(): {subs: [Uint8Array, v41.Data][]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ImOnlineHeartbeatCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ImOnline.heartbeat')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  # <weight>
     *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
     *    and E is length of `heartbeat.network_state.external_address`
     *    - `O(K)`: decoding of length `K`
     *    - `O(E)`: decoding/encoding of length `E`
     *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *    `ReceivedHeartbeats`
     *  - DbWrites: `ReceivedHeartbeats`
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('ImOnline.heartbeat') === 'ceb066f24cc1efdb862584018e591b1046da22acdc1c7daf8270a6f6f31baffe'
    }

    /**
     *  # <weight>
     *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
     *    and E is length of `heartbeat.network_state.external_address`
     *    - `O(K)`: decoding of length `K`
     *    - `O(E)`: decoding/encoding of length `E`
     *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *    `ReceivedHeartbeats`
     *  - DbWrites: `ReceivedHeartbeats`
     *  # </weight>
     */
    get asV41(): {heartbeat: v41.Heartbeat, signature: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IrohaMigrationMigrateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'IrohaMigration.migrate')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('IrohaMigration.migrate') === '91c0ddc3aa0a70f537a8aa1a22be831ffb83b5905289d67e7047cbf7e292d762'
    }

    get asV41(): {irohaAddress: Uint8Array, irohaPublicKey: Uint8Array, irohaSignature: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    get isV42(): boolean {
        return this._chain.getCallHash('IrohaMigration.migrate') === 'd0a1da3461b6d673394d3f90bfb4356d1e620df001a395ec14a163c4a6e1c9d3'
    }

    get asV42(): {irohaAddress: string, irohaPublicKey: string, irohaSignature: string} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxyDisableLiquiditySourceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.disable_liquidity_source')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     *  - `liquidity_source`: the liquidity source to be disabled.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('LiquidityProxy.disable_liquidity_source') === 'd075d71210112005f0ca3a713782952225e711d5d70fd36bb9822df9d74ef8f4'
    }

    /**
     *  Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     *  - `liquidity_source`: the liquidity source to be disabled.
     */
    get asV41(): {liquiditySource: v41.LiquiditySourceType} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     * - `liquidity_source`: the liquidity source to be disabled.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('LiquidityProxy.disable_liquidity_source') === '88a6f8a985d53772e1003bbff8e437d78148310374d7ab036e56ea94749715ac'
    }

    /**
     * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     * - `liquidity_source`: the liquidity source to be disabled.
     */
    get asV42(): {liquiditySource: v42.LiquiditySourceType} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxyEnableLiquiditySourceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.enable_liquidity_source')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Enables XST or TBC liquidity source.
     * 
     *  - `liquidity_source`: the liquidity source to be enabled.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('LiquidityProxy.enable_liquidity_source') === 'd075d71210112005f0ca3a713782952225e711d5d70fd36bb9822df9d74ef8f4'
    }

    /**
     *  Enables XST or TBC liquidity source.
     * 
     *  - `liquidity_source`: the liquidity source to be enabled.
     */
    get asV41(): {liquiditySource: v41.LiquiditySourceType} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Enables XST or TBC liquidity source.
     * 
     * - `liquidity_source`: the liquidity source to be enabled.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('LiquidityProxy.enable_liquidity_source') === '88a6f8a985d53772e1003bbff8e437d78148310374d7ab036e56ea94749715ac'
    }

    /**
     * Enables XST or TBC liquidity source.
     * 
     * - `liquidity_source`: the liquidity source to be enabled.
     */
    get asV42(): {liquiditySource: v42.LiquiditySourceType} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxySwapCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.swap')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     *  - `origin`: the account on whose behalf the transaction is being executed,
     *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     *  - `input_asset_id`: ID of the asset being sold,
     *  - `output_asset_id`: ID of the asset being bought,
     *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('LiquidityProxy.swap') === '243db239c0790a225cdae07ab111cfa2bef46fc34fd7d8cbe3b39ecf6e137a6f'
    }

    /**
     *  Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     *  - `origin`: the account on whose behalf the transaction is being executed,
     *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     *  - `input_asset_id`: ID of the asset being sold,
     *  - `output_asset_id`: ID of the asset being bought,
     *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get asV41(): {dexId: number, inputAssetId: Uint8Array, outputAssetId: Uint8Array, swapAmount: v41.SwapAmount, selectedSourceTypes: v41.LiquiditySourceType[], filterMode: v41.FilterMode} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('LiquidityProxy.swap') === '7cd1f57e50f4d587c140be4377fd1aeaa7760db9a7f5e48a35dccf7000c009c7'
    }

    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get asV42(): {dexId: number, inputAssetId: v42.AssetId32, outputAssetId: v42.AssetId32, swapAmount: v42.SwapAmount, selectedSourceTypes: v42.LiquiditySourceType[], filterMode: v42.FilterMode} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityProxySwapTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityProxy.swap_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     *  - `origin`: the account on whose behalf the transaction is being executed,
     *  - `receiver`: the account that receives the output,
     *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     *  - `input_asset_id`: ID of the asset being sold,
     *  - `output_asset_id`: ID of the asset being bought,
     *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('LiquidityProxy.swap_transfer') === '48f60719fa664b1a0e1296c9fca3e5b51922501ca87d53b157dd7d79c1a52962'
    }

    /**
     *  Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     *  - `origin`: the account on whose behalf the transaction is being executed,
     *  - `receiver`: the account that receives the output,
     *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     *  - `input_asset_id`: ID of the asset being sold,
     *  - `output_asset_id`: ID of the asset being bought,
     *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get asV41(): {receiver: Uint8Array, dexId: number, inputAssetId: Uint8Array, outputAssetId: Uint8Array, swapAmount: v41.SwapAmount, selectedSourceTypes: v41.LiquiditySourceType[], filterMode: v41.FilterMode} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `receiver`: the account that receives the output,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('LiquidityProxy.swap_transfer') === '4592827d44786e7ea9c69479c8770829daeba43139402ec698243ffef72d84a5'
    }

    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `receiver`: the account that receives the output,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    get asV42(): {receiver: Uint8Array, dexId: number, inputAssetId: v42.AssetId32, outputAssetId: v42.AssetId32, swapAmount: v42.SwapAmount, selectedSourceTypes: v42.LiquiditySourceType[], filterMode: v42.FilterMode} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolInitializePoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.initialize_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.initialize_pool') === '5504aeef0d251f9a4f117b56ce2e264685cb509ba0be0aec211352beb86575f8'
    }

    /**
     *  Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    get asV41(): {collateralAssetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.initialize_pool') === 'ddc7b8983b3345fab055be88bfd5c2c1befb4d7d07559ed60a2286974c6203f7'
    }

    /**
     * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    get asV42(): {collateralAssetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.set_optional_reward_multiplier')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     *  `None` value indicates reward without change, same as Some(1.0).
     */
    get isV41(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_optional_reward_multiplier') === '2cbaacf14673b3e6fb0f193b10cbedddfedb9054db62e404b0bd0b65d0513f97'
    }

    /**
     *  Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     *  `None` value indicates reward without change, same as Some(1.0).
     */
    get asV41(): {collateralAssetId: Uint8Array, multiplier: (bigint | undefined)} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     * `None` value indicates reward without change, same as Some(1.0).
     */
    get isV42(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_optional_reward_multiplier') === '46824e2acf83d3c3a07598e0ec979f7587a6dbc33fb2ae25d0aa05b0a4b1ac29'
    }

    /**
     * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     * `None` value indicates reward without change, same as Some(1.0).
     */
    get asV42(): {collateralAssetId: v42.AssetId32, multiplier: (v42.FixedPoint | undefined)} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolSetPriceBiasCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.set_price_bias')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
     */
    get isV41(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_price_bias') === 'd251cb86e5a3d6a116745b498748833046d5bd8b9b0dc6127e1d740bb42e3dcd'
    }

    /**
     *  Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
     */
    get asV41(): {priceBias: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolSetPriceChangeConfigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.set_price_change_config')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Changes price change rate and step
     */
    get isV41(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_price_change_config') === 'e64a89ccbd88304e41a7cd2b199e44554e806584a0638ada4c72f46f95f48c03'
    }

    /**
     *  Changes price change rate and step
     */
    get asV41(): {priceChangeRate: bigint, priceChangeStep: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class MulticollateralBondingCurvePoolSetReferenceAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MulticollateralBondingCurvePool.set_reference_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_reference_asset') === '5797f304c463ebdff62f19c4382c3b2ff48a27213b81084af9d31f75e891c633'
    }

    /**
     *  Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    get asV41(): {referenceAssetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('MulticollateralBondingCurvePool.set_reference_asset') === '0f3d967dea75c83db87adb08b56da4133e9350eb3cfc45a4d4618fb26ac13666'
    }

    /**
     * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    get asV42(): {referenceAssetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  ----------------------------------
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '615a5baaaa889f9e30839c70485b8c752e5eb050a85a23102b2f9f4c301be63a'
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  ----------------------------------
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    get asV41(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v41.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  -------------------------------
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '548dea53ff79fe99438cf591950a533c93f9772d03a3995ec72a80376fcae222'
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  -------------------------------
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV41(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v41.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'e500c1a7a5d0b145ff7a1907fc1bf542f45ae958fa95f2b9b32a901519f9c931'
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV41(): {otherSignatories: Uint8Array[], call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'f65389d861c2514f7be9956a13a01c95814fac8b4fc1aaef8c9b5ed0c1c96957'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV42(): {otherSignatories: Uint8Array[], call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '795cb3acece42507060eeb53c0ddfd1f468dfccd3b5a892c225b90ae64a10605'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV43(): {otherSignatories: Uint8Array[], call: v43.Call} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  ----------------------------------
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
    }

    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  ----------------------------------
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    get asV41(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v41.Timepoint, callHash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolXykDepositLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PoolXYK.deposit_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('PoolXYK.deposit_liquidity') === 'c5d997e5d540f470b6d091f671ff74d2008290ef5e2ecd8f0042a70a8a7c7aa0'
    }

    get asV41(): {dexId: number, inputAssetA: Uint8Array, inputAssetB: Uint8Array, inputADesired: bigint, inputBDesired: bigint, inputAMin: bigint, inputBMin: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    get isV42(): boolean {
        return this._chain.getCallHash('PoolXYK.deposit_liquidity') === '0c5523e5380707a57e696c3938132fdaf957e074a5f686288c78be648bf3c79f'
    }

    get asV42(): {dexId: number, inputAssetA: v42.AssetId32, inputAssetB: v42.AssetId32, inputADesired: bigint, inputBDesired: bigint, inputAMin: bigint, inputBMin: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolXykInitializePoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PoolXYK.initialize_pool')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('PoolXYK.initialize_pool') === '090f1175cb55ba7e1c2b534eef95bb3729cfb8f81634e155fcd069c831981224'
    }

    get asV41(): {dexId: number, assetA: Uint8Array, assetB: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    get isV42(): boolean {
        return this._chain.getCallHash('PoolXYK.initialize_pool') === 'a94dd5897a28cb2cf3e19e610fbb83ddbbbf9ceab5abfc3379dc0ba546c10355'
    }

    get asV42(): {dexId: number, assetA: v42.AssetId32, assetB: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolXykWithdrawLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PoolXYK.withdraw_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('PoolXYK.withdraw_liquidity') === 'ac248a81af92fbe028f4c1b13a64f5c6193cfff8f6c71c411ce8039277141c7c'
    }

    get asV41(): {dexId: number, outputAssetA: Uint8Array, outputAssetB: Uint8Array, markerAssetDesired: bigint, outputAMin: bigint, outputBMin: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    get isV42(): boolean {
        return this._chain.getCallHash('PoolXYK.withdraw_liquidity') === 'a338e410b4b1b91ea2577128670f126330c9fe85d1681983227c60e6d9a29164'
    }

    get asV42(): {dexId: number, outputAssetA: v42.AssetId32, outputAssetB: v42.AssetId32, markerAssetDesired: bigint, outputAMin: bigint, outputBMin: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class PswapDistributionClaimIncentiveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PswapDistribution.claim_incentive')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('PswapDistribution.claim_incentive') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferralsReserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referrals.reserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Reserves the balance from the account for a special balance that can be used to pay referrals' fees
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Referrals.reserve') === 'c7f36d9133a26314d7e2b6151de5a246741143f39f45d08fc42967b92cca42de'
    }

    /**
     *  Reserves the balance from the account for a special balance that can be used to pay referrals' fees
     */
    get asV41(): {balance: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferralsSetReferrerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referrals.set_referrer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Sets the referrer for the account
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Referrals.set_referrer') === 'a85f2da54bee856c89abf1e70cf29cd82224b5c14fffb4c464822bf5d3cf0dd6'
    }

    /**
     *  Sets the referrer for the account
     */
    get asV41(): {referrer: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferralsUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referrals.unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unreserves the balance and transfers it back to the account
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Referrals.unreserve') === 'c7f36d9133a26314d7e2b6151de5a246741143f39f45d08fc42967b92cca42de'
    }

    /**
     *  Unreserves the balance and transfers it back to the account
     */
    get asV41(): {balance: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class RewardsAddUmiNftReceiversCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Rewards.add_umi_nft_receivers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add addresses, who will receive UMI NFT rewards.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Rewards.add_umi_nft_receivers') === '459d27be4bbbe013042b6cb0bda4f7e3248d48762b891d42618aeef04ca86dd3'
    }

    /**
     *  Add addresses, who will receive UMI NFT rewards.
     */
    get asV41(): {receivers: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class RewardsClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Rewards.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Claim the reward with signature.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Rewards.claim') === '709dcfb536f77abe420fcea544a14ca7aae295106048a972eec2942fa9bcf59a'
    }

    /**
     *  Claim the reward with signature.
     */
    get asV41(): {signature: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class RewardsFinalizeStorageMigrationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Rewards.finalize_storage_migration')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Finalize the update of unclaimed VAL data in storage
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Rewards.finalize_storage_migration') === 'fe1fc9d21b33d014deea1a4547e27c3c20c27001689851303233c0bddf052b1a'
    }

    /**
     *  Finalize the update of unclaimed VAL data in storage
     */
    get asV41(): {amounts: [Uint8Array, bigint][]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel an anonymously scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.15 + 2.869 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     *  Cancel an anonymously scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.15 + 2.869 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get asV41(): {when: number, index: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a named scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 24.91 + 2.907 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
    }

    /**
     *  Cancel a named scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 24.91 + 2.907 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get asV41(): {id: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'e941eca9990f0b7554c2ae607a83f484dcef7776e3de256f919cb108df2fc553'
    }

    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get asV41(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '8f9f06f4a4c31bac4d5e864e833457313377c2c883b5daea2cb457ece4db57b0'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV42(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v42.MaybeHashed} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '2fd2f3248141a1d3cfdae966716036bb1fc31e425be74409f2d9e4eceecbe473'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV43(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v43.MaybeHashed} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '0426599d3eece16bc641a611fdc9e255d5efdd3c7aa09b2ce35ad75b078594a4'
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get asV41(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '44f897e6b2b4d08d0b01928a8025be0192ea928637e947c4274572d3f62d9b26'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV42(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v42.MaybeHashed} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'be86af05244448e60232b71a6c115d57053745ec63d7118c747067c30f7611cb'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV43(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v43.MaybeHashed} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '302c6f9dd6848b9d0028b734e63d234bd23c6f48ef982de0f2162ce3a1d54fc7'
    }

    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    get asV41(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '325d8377323623b52bbbed343271c652fc7e1f5af114f049eeed1bab54f1ac00'
    }

    /**
     * Schedule a named task.
     */
    get asV42(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v42.MaybeHashed} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'fbec98fe10cde4b618c450c0d438b018e2112cc0617bed4c5b9c6ddd7168b453'
    }

    /**
     * Schedule a named task.
     */
    get asV43(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v43.MaybeHashed} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '1a8236ad676e20c95850f0c3b1cf7199aa4d01b6e3ff92b51d03af2fda8f23b2'
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    get asV41(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '0df08695eafff676ff42de106a31ed8874e5bf5e2516ccfcf6a171e5e9f3653e'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV42(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v42.MaybeHashed} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '207d15a90edfa5bc3cf6c4c6c87221f61abf39ef21eb6246d1a94e9375a33db6'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV43(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v43.MaybeHashed} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionPurgeKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.purge_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Removes any session key(s) of the function caller.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)` in number of key types.
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     *  - DbWrites: `NextKeys`, `origin account`
     *  - DbWrites per key id: `KeyOwnder`
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Removes any session key(s) of the function caller.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)` in number of key types.
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     *  - DbWrites: `NextKeys`, `origin account`
     *  - DbWrites per key id: `KeyOwnder`
     *  # </weight>
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionSetKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.set_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Sets the session key(s) of the function caller to `keys`.
     *  Allows an account to set its session key prior to becoming a validator.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     *  - DbWrites: `origin account`, `NextKeys`
     *  - DbReads per key id: `KeyOwner`
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Session.set_keys') === 'd9b82ab3024eb48850d76bf62d175c89fd7c119ff96ecce731bf675cffedbba3'
    }

    /**
     *  Sets the session key(s) of the function caller to `keys`.
     *  Allows an account to set its session key prior to becoming a validator.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     *  - DbWrites: `origin account`, `NextKeys`
     *  - DbReads per key id: `KeyOwner`
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    get asV41(): {keys: [Uint8Array, Uint8Array, Uint8Array], proof: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Session.set_keys') === '4105d52cd5e705e0dda35e2eeff29e5dcb1ce49543f640d2f8b80089c4347be0'
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asV42(): {keys: v42.SessionKeys, proof: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingBondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.bond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
     *  ------------------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
     *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.bond') === 'bb948688bed1a70b8b0ff155f0a4555536a3bab1f35f7432580a502b100ae8e4'
    }

    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
     *  ------------------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
     *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get asV41(): {controller: Uint8Array, value: bigint, payee: v41.RewardDestination} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingBondExtraCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.bond_extra')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
     *  for staking.
     * 
     *  Use this if there are additional funds in your stash account that you wish to bond.
     *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
     *  that can be added.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
     *  it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - O(1).
     *  - One DB entry.
     *  ------------
     *  DB Weight:
     *  - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
     *  - Write: [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.bond_extra') === 'f92c56c980d6a55c468653fc3149548edcf2481e5da53835a201cafa7dc02fd8'
    }

    /**
     *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
     *  for staking.
     * 
     *  Use this if there are additional funds in your stash account that you wish to bond.
     *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
     *  that can be added.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
     *  it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - O(1).
     *  - One DB entry.
     *  ------------
     *  DB Weight:
     *  - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
     *  - Write: [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get asV41(): {maxAdditional: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingCancelDeferredSlashCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.cancel_deferred_slash')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel enactment of a deferred slash.
     * 
     *  Can be called by the `T::SlashCancelOrigin`.
     * 
     *  Parameters: era and indices of the slashes for that era to kill.
     * 
     *  # <weight>
     *  Complexity: O(U + S)
     *  with U unapplied slashes weighted with U=1000
     *  and S is the number of slash indices to be canceled.
     *  - Read: Unapplied Slashes
     *  - Write: Unapplied Slashes
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.cancel_deferred_slash') === 'fab176436ff709189f441a9c591b1e715361b4db2636055c0154e452e116feb0'
    }

    /**
     *  Cancel enactment of a deferred slash.
     * 
     *  Can be called by the `T::SlashCancelOrigin`.
     * 
     *  Parameters: era and indices of the slashes for that era to kill.
     * 
     *  # <weight>
     *  Complexity: O(U + S)
     *  with U unapplied slashes weighted with U=1000
     *  and S is the number of slash indices to be canceled.
     *  - Read: Unapplied Slashes
     *  - Write: Unapplied Slashes
     *  # </weight>
     */
    get asV41(): {era: number, slashIndices: number[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingChillCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.chill')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare no desire to either validate or nominate.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains one read.
     *  - Writes are limited to the `origin` account key.
     *  --------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: EraElectionStatus, Ledger
     *  - Write: Validators, Nominators
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.chill') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Declare no desire to either validate or nominate.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains one read.
     *  - Writes are limited to the `origin` account key.
     *  --------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: EraElectionStatus, Ledger
     *  - Write: Validators, Nominators
     *  # </weight>
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingChillOtherCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.chill_other')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     * 
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     * 
     * * `controller` must belong to a nominator who has become non-decodable,
     * 
     * Or:
     * 
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     * 
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Staking.chill_other') === 'bbdd03dc244a9d87deceeb91d015d7ef52746b99580b1474586c8699a77574e1'
    }

    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     * 
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     * 
     * * `controller` must belong to a nominator who has become non-decodable,
     * 
     * Or:
     * 
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     * 
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    get asV42(): {controller: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceApplyMinCommissionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_apply_min_commission')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Staking.force_apply_min_commission') === 'ee412bb909d2500627205d4c5b741967883fb1ed7f64bdc95edae3852f63750e'
    }

    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    get asV42(): {validatorStash: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNewEraCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_new_era')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force there to be a new era at the end of the next session. After this, it will be
     *  reset to normal (non-forced) behaviour.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - No arguments.
     *  - Weight: O(1)
     *  - Write ForceEra
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.force_new_era') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be a new era at the end of the next session. After this, it will be
     *  reset to normal (non-forced) behaviour.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - No arguments.
     *  - Weight: O(1)
     *  - Write ForceEra
     *  # </weight>
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNewEraAlwaysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_new_era_always')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force there to be a new era at the end of sessions indefinitely.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - Weight: O(1)
     *  - Write: ForceEra
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.force_new_era_always') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be a new era at the end of sessions indefinitely.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - Weight: O(1)
     *  - Write: ForceEra
     *  # </weight>
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNoErasCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_no_eras')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force there to be no new eras indefinitely.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - No arguments.
     *  - Weight: O(1)
     *  - Write: ForceEra
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.force_no_eras') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be no new eras indefinitely.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - No arguments.
     *  - Weight: O(1)
     *  - Write: ForceEra
     *  # </weight>
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceUnstakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_unstake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force a current staker to become completely unstaked, immediately.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  O(S) where S is the number of slashing spans to be removed
     *  Reads: Bonded, Slashing Spans, Account, Locks
     *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
     *  Writes Each: SpanSlash * S
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.force_unstake') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     *  Force a current staker to become completely unstaked, immediately.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  O(S) where S is the number of slashing spans to be removed
     *  Reads: Bonded, Slashing Spans, Account, Locks
     *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
     *  Writes Each: SpanSlash * S
     *  # </weight>
     */
    get asV41(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingIncreaseValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.increase_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Increments the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Same as [`set_validator_count`].
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.increase_validator_count') === '1b5e15eec25101f7a4e4a63e4c35b1120c3147dac0ca34ddcab4e7e3bb6ef150'
    }

    /**
     *  Increments the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Same as [`set_validator_count`].
     *  # </weight>
     */
    get asV41(): {additional: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingKickCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.kick')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the given nominations from the calling validator.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
     *  account should represent a validator.
     * 
     *  - `who`: A list of nominator stash accounts who are nominating this validator which
     *    should no longer be nominating this validator.
     * 
     *  Note: Making this call only makes sense if you first set the validator preferences to
     *  block any further nominations.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.kick') === 'e074d5a93414f189b47fbb5d94c57b62cfb9e63808a3c94665eeb2cfe53be8df'
    }

    /**
     *  Remove the given nominations from the calling validator.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
     *  account should represent a validator.
     * 
     *  - `who`: A list of nominator stash accounts who are nominating this validator which
     *    should no longer be nominating this validator.
     * 
     *  Note: Making this call only makes sense if you first set the validator preferences to
     *  block any further nominations.
     */
    get asV41(): {who: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingNominateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.nominate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era. This can only be called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets` (N)
     *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
     *  - Both the reads and writes follow a similar pattern.
     *  ---------
     *  Weight: O(N)
     *  where N is the number of targets
     *  DB Weight:
     *  - Reads: Era Election Status, Ledger, Current Era
     *  - Writes: Validators, Nominators
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.nominate') === '730fc5a4090c1c566ea6d11126ba7258c98a461b0c6bfca8bf9e17e42f8801de'
    }

    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era. This can only be called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets` (N)
     *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
     *  - Both the reads and writes follow a similar pattern.
     *  ---------
     *  Weight: O(N)
     *  where N is the number of targets
     *  DB Weight:
     *  - Reads: Era Election Status, Ledger, Current Era
     *  - Writes: Validators, Nominators
     *  # </weight>
     */
    get asV41(): {targets: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingPayoutStakersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.payout_stakers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pay out all the stakers behind a single validator for a single era.
     * 
     *  - `validator_stash` is the stash account of the validator. Their nominators, up to
     *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     *  - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     *  The origin of this call must be _Signed_. Any account can call this function, even if
     *  it is not one of the stakers.
     * 
     *  This can only be called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     *  - Contains a limited number of reads and writes.
     *  -----------
     *  N is the Number of payouts for the validator (including the validator)
     *  Weight:
     *  - Reward Destination Staked: O(N)
     *  - Reward Destination Controller (Creating): O(N)
     *  DB Weight:
     *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
     *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
     *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
     *  - Write Each: System Account, Locks, Ledger (3 items)
     * 
     *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.payout_stakers') === '1a09dc413ed4b8ce5cbcdc282b798636ca24268cca001e43fc92d892de3b6a5f'
    }

    /**
     *  Pay out all the stakers behind a single validator for a single era.
     * 
     *  - `validator_stash` is the stash account of the validator. Their nominators, up to
     *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     *  - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     *  The origin of this call must be _Signed_. Any account can call this function, even if
     *  it is not one of the stakers.
     * 
     *  This can only be called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     *  - Contains a limited number of reads and writes.
     *  -----------
     *  N is the Number of payouts for the validator (including the validator)
     *  Weight:
     *  - Reward Destination Staked: O(N)
     *  - Reward Destination Controller (Creating): O(N)
     *  DB Weight:
     *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
     *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
     *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
     *  - Write Each: System Account, Locks, Ledger (3 items)
     * 
     *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     *  # </weight>
     */
    get asV41(): {validatorStash: Uint8Array, era: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingReapStashCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.reap_stash')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove all data structure concerning a staker/stash once its balance is at the minimum.
     *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
     *  and the target `stash` must have no funds left beyond the ED.
     * 
     *  This can be called from any origin.
     * 
     *  - `stash`: The stash account to reap. Its balance must be zero.
     * 
     *  # <weight>
     *  Complexity: O(S) where S is the number of slashing spans on the account.
     *  DB Weight:
     *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
     *  - Writes Each: SpanSlash * S
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.reap_stash') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     *  Remove all data structure concerning a staker/stash once its balance is at the minimum.
     *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
     *  and the target `stash` must have no funds left beyond the ED.
     * 
     *  This can be called from any origin.
     * 
     *  - `stash`: The stash account to reap. Its balance must be zero.
     * 
     *  # <weight>
     *  Complexity: O(S) where S is the number of slashing spans on the account.
     *  DB Weight:
     *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
     *  - Writes Each: SpanSlash * S
     *  # </weight>
     */
    get asV41(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingRebondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.rebond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Rebond a portion of the stash scheduled to be unlocked.
     * 
     *  The dispatch origin must be signed by the controller, and it can be only called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: O(L), where L is unlocking chunks
     *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
     *  - Storage changes: Can't increase storage, only decrease it.
     *  ---------------
     *  - DB Weight:
     *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
     *      - Writes: [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.rebond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     *  Rebond a portion of the stash scheduled to be unlocked.
     * 
     *  The dispatch origin must be signed by the controller, and it can be only called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: O(L), where L is unlocking chunks
     *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
     *  - Storage changes: Can't increase storage, only decrease it.
     *  ---------------
     *  - DB Weight:
     *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
     *      - Writes: [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get asV41(): {value: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingScaleValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.scale_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Scale up the ideal number of validators by a factor.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Same as [`set_validator_count`].
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.scale_validator_count') === 'd5f5b0d2128c7dec0e2681f604f51d1657af9bf5eb7c704432075cb4655e0065'
    }

    /**
     *  Scale up the ideal number of validators by a factor.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Same as [`set_validator_count`].
     *  # </weight>
     */
    get asV41(): {factor: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetControllerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_controller')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
     *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.set_controller') === 'bbdd03dc244a9d87deceeb91d015d7ef52746b99580b1474586c8699a77574e1'
    }

    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
     *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
     *  # </weight>
     */
    get asV41(): {controller: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetHistoryDepthCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_history_depth')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set `HistoryDepth` value. This function will delete any history information
     *  when `HistoryDepth` is reduced.
     * 
     *  Parameters:
     *  - `new_history_depth`: The new history depth you would like to set.
     *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
     *     This should report all the storage items that will be deleted by clearing old
     *     era history. Needed to report an accurate weight for the dispatch. Trusted by
     *     `Root` to report an accurate number.
     * 
     *  Origin must be root.
     * 
     *  # <weight>
     *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
     *  - Weight: O(E)
     *  - DB Weight:
     *      - Reads: Current Era, History Depth
     *      - Writes: History Depth
     *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.set_history_depth') === 'aff387362bca2e77192ffecea0e2882e4c2722db15c54e48ddded4e0dafe3446'
    }

    /**
     *  Set `HistoryDepth` value. This function will delete any history information
     *  when `HistoryDepth` is reduced.
     * 
     *  Parameters:
     *  - `new_history_depth`: The new history depth you would like to set.
     *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
     *     This should report all the storage items that will be deleted by clearing old
     *     era history. Needed to report an accurate weight for the dispatch. Trusted by
     *     `Root` to report an accurate number.
     * 
     *  Origin must be root.
     * 
     *  # <weight>
     *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
     *  - Weight: O(E)
     *  - DB Weight:
     *      - Reads: Current Era, History Depth
     *      - Writes: History Depth
     *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
     *  # </weight>
     */
    get asV41(): {newHistoryDepth: number, eraItemsDeleted: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetInvulnerablesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_invulnerables')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the validators who cannot be slashed (if any).
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - O(V)
     *  - Write: Invulnerables
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.set_invulnerables') === '994c18897efc6a5b0e11aeb337b6c718ad03cb0eb182a442fc74b9c80dd56313'
    }

    /**
     *  Set the validators who cannot be slashed (if any).
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - O(V)
     *  - Write: Invulnerables
     *  # </weight>
     */
    get asV41(): {invulnerables: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetPayeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_payee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  (Re-)set the payment target for a controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  ---------
     *  - Weight: O(1)
     *  - DB Weight:
     *      - Read: Ledger
     *      - Write: Payee
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.set_payee') === 'e882138b8d0371da862d058ac00f1def3ca0f71ab72eda3fbfb7d75b5fa16515'
    }

    /**
     *  (Re-)set the payment target for a controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  ---------
     *  - Weight: O(1)
     *  - DB Weight:
     *      - Read: Ledger
     *      - Write: Payee
     *  # </weight>
     */
    get asV41(): {payee: v41.RewardDestination} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetStakingConfigsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_staking_configs')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * Origin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Staking.set_staking_configs') === '67189d3ca60a3305c1159ea1c7b2cfcbc749ef2c16f16b4c876daab793efdf86'
    }

    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * Origin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    get asV42(): {minNominatorBond: v42.ConfigOp, minValidatorBond: v42.ConfigOp, maxNominatorCount: v42.Type_205, maxValidatorCount: v42.Type_205, chillThreshold: v42.Type_206, minCommission: v42.Type_207} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Sets the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Weight: O(1)
     *  Write: Validator Count
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.set_validator_count') === 'e648274eb741b1a8ab74c4583589c621e8391cd9122c0f7063e1e18c4af71912'
    }

    /**
     *  Sets the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Weight: O(1)
     *  Write: Validator Count
     *  # </weight>
     */
    get asV41(): {new: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSubmitElectionSolutionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.submit_election_solution')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Submit an election result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using _phragmen_, or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  The transaction is assumed to be the longest path, a better solution.
     *    - Initial solution is almost the same.
     *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.submit_election_solution') === '7bb9cd5dd08bc49e4a101b60cee9cd8847a9d04c218e0e179244a55b2485fd62'
    }

    /**
     *  Submit an election result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using _phragmen_, or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  The transaction is assumed to be the longest path, a better solution.
     *    - Initial solution is almost the same.
     *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
     *  # </weight>
     */
    get asV41(): {winners: number[], compact: v41.CompactAssignments, score: bigint[], era: number, size: v41.ElectionSize} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSubmitElectionSolutionUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.submit_election_solution_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     * 
     *  # <weight>
     *  See [`submit_election_solution`].
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.submit_election_solution_unsigned') === '7bb9cd5dd08bc49e4a101b60cee9cd8847a9d04c218e0e179244a55b2485fd62'
    }

    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     * 
     *  # <weight>
     *  See [`submit_election_solution`].
     *  # </weight>
     */
    get asV41(): {winners: number[], compact: v41.CompactAssignments, score: bigint[], era: number, size: v41.ElectionSize} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingUnbondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.unbond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     *  period ends. If this leaves an amount actively bonded less than
     *  T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     *  the funds out of management ready for transfer.
     * 
     *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
     *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
     *  to be called first to remove some of the chunks (if possible).
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Unbonded`.
     * 
     *  See also [`Call::withdraw_unbonded`].
     * 
     *  # <weight>
     *  - Independent of the arguments. Limited but potentially exploitable complexity.
     *  - Contains a limited number of reads.
     *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
     *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
     *    The only way to clean the aforementioned storage item is also user-controlled via
     *    `withdraw_unbonded`.
     *  - One DB entry.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: EraElectionStatus, Ledger, CurrentEra, Locks, BalanceOf Stash,
     *  - Write: Locks, Ledger, BalanceOf Stash,
     *  </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.unbond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     *  period ends. If this leaves an amount actively bonded less than
     *  T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     *  the funds out of management ready for transfer.
     * 
     *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
     *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
     *  to be called first to remove some of the chunks (if possible).
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Unbonded`.
     * 
     *  See also [`Call::withdraw_unbonded`].
     * 
     *  # <weight>
     *  - Independent of the arguments. Limited but potentially exploitable complexity.
     *  - Contains a limited number of reads.
     *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
     *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
     *    The only way to clean the aforementioned storage item is also user-controlled via
     *    `withdraw_unbonded`.
     *  - One DB entry.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: EraElectionStatus, Ledger, CurrentEra, Locks, BalanceOf Stash,
     *  - Write: Locks, Ledger, BalanceOf Stash,
     *  </weight>
     */
    get asV41(): {value: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingValidateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.validate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare the desire to validate for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  -----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Era Election Status, Ledger
     *  - Write: Nominators, Validators
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.validate') === '2a662df491d449985438edd4d2e6899fd06beebbaa59e759713811ade38308bf'
    }

    /**
     *  Declare the desire to validate for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  -----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Era Election Status, Ledger
     *  - Write: Nominators, Validators
     *  # </weight>
     */
    get asV41(): {prefs: v41.ValidatorPrefs} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingWithdrawUnbondedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.withdraw_unbonded')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     *  This essentially frees up that balance to be used by the stash account to do
     *  whatever it wants.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Withdrawn`.
     * 
     *  See also [`Call::unbond`].
     * 
     *  # <weight>
     *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
     *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
     *   indirectly user-controlled. See [`unbond`] for more detail.
     *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
     *  - Writes are limited to the `origin` account key.
     *  ---------------
     *  Complexity O(S) where S is the number of slashing spans to remove
     *  Update:
     *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
     *  - Writes: [Origin Account], Locks, Ledger
     *  Kill:
     *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
     *    Account], Locks, BalanceOf stash
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
     *    [Origin Account], Locks, BalanceOf stash.
     *  - Writes Each: SpanSlash * S
     *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.withdraw_unbonded') === '6a7f80eeb74b237a907212a84c7fbc3bbfc8155b3decc30afb4c65c3bcb3f317'
    }

    /**
     *  Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     *  This essentially frees up that balance to be used by the stash account to do
     *  whatever it wants.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Withdrawn`.
     * 
     *  See also [`Call::unbond`].
     * 
     *  # <weight>
     *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
     *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
     *   indirectly user-controlled. See [`unbond`] for more detail.
     *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
     *  - Writes are limited to the `origin` account key.
     *  ---------------
     *  Complexity O(S) where S is the number of slashing spans to remove
     *  Update:
     *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
     *  - Writes: [Origin Account], Locks, Ledger
     *  Kill:
     *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
     *    Account], Locks, BalanceOf stash
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
     *    [Origin Account], Locks, BalanceOf stash.
     *  - Writes Each: SpanSlash * S
     *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
     *  # </weight>
     */
    get asV41(): {numSlashingSpans: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSetKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.set_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV41(): {new: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '84364c683399cb0e6afb38b6aedff5e9efb02ca5b9f99c5a77ed3ed16c964ab7'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get asV41(): {call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '3c9cb0803b6c72eeb46c1d0633886f873020f306103f3e6ead74316545073c48'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV42(): {call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '0c6770cd31b436e89ec1040c3ed96536892e0f521afcf1eba204700a2f86b417'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV43(): {call: v43.Call} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '35680e90e20dc26fbec823a8c28cf4336e7b4e2b16e95f933a57c2279074c2d9'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get asV41(): {who: Uint8Array, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'c268a41dbfc21ccfe371e26862ac9369cc43e37587b56f8c8911e90e209fccd4'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV42(): {who: Uint8Array, call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '9675a14f15c286a2b7cea7ba342571b9527492b57a3fa6edf6f67510612ef298'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV43(): {who: Uint8Array, call: v43.Call} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoUncheckedWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_unchecked_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'aec675cd459e7918403337a510afc75902b0aebef45af6dffd2dd9f449ed377a'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    get asV41(): {call: v41.Type_43, weight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '9c6f948df770bd071d23819fc8e01e066a624b74412222c8e1a3d3f01e3dabbb'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV42(): {call: v42.Call, weight: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b7293dc720476c1fe2f6f01013ee0737b8ea8605e21578982781e3b59cb78f6c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV43(): {call: v43.Call, weight: bigint} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemFillBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.fill_block')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get asV41(): {ratio: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillPrefixCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_prefix')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Kill all storage items with a key that starts with the given prefix.
     * 
     *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     *  the prefix we are removing to accurately calculate the weight of this function.
     * 
     *  # <weight>
     *  - `O(P)` where `P` amount of keys with prefix `prefix`
     *  - `P` storage deletions.
     *  - Base Weight: 0.834 * P µs
     *  - Writes: Number of subkeys + 1
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
    }

    /**
     *  Kill all storage items with a key that starts with the given prefix.
     * 
     *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     *  the prefix we are removing to accurately calculate the weight of this function.
     * 
     *  # <weight>
     *  - `O(P)` where `P` amount of keys with prefix `prefix`
     *  - `P` storage deletions.
     *  - Base Weight: 0.834 * P µs
     *  - Writes: Number of subkeys + 1
     *  # </weight>
     */
    get asV41(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Kill some items from storage.
     * 
     *  # <weight>
     *  - `O(IK)` where `I` length of `keys` and `K` length of one key
     *  - `I` storage deletions.
     *  - Base Weight: .378 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     *  Kill some items from storage.
     * 
     *  # <weight>
     *  - `O(IK)` where `I` length of `keys` and `K` length of one key
     *  - `I` storage deletions.
     *  - Base Weight: .378 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    get asV41(): {keys: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - Base Weight: 0.665 µs, independent of remark length.
     *  - No DB operations.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - Base Weight: 0.665 µs, independent of remark length.
     *  - No DB operations.
     *  # </weight>
     */
    get asV41(): {remark: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkWithEventCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark_with_event')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get asV42(): {remark: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetChangesTrieConfigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_changes_trie_config')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the new changes trie configuration.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write or delete (codec `O(1)`).
     *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
     *  - Base Weight: 7.218 µs
     *  - DB Weight:
     *      - Writes: Changes Trie, System Digest
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
    }

    /**
     *  Set the new changes trie configuration.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write or delete (codec `O(1)`).
     *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
     *  - Base Weight: 7.218 µs
     *  - DB Weight:
     *      - Writes: Changes Trie, System Digest
     *  # </weight>
     */
    get asV41(): {changesTrieConfig: (v41.ChangesTrieConfiguration | undefined)} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the new runtime code.
     * 
     *  # <weight>
     *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime, but generally this is very expensive.
     *  We will treat this as a full block.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     *  Set the new runtime code.
     * 
     *  # <weight>
     *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime, but generally this is very expensive.
     *  We will treat this as a full block.
     *  # </weight>
     */
    get asV41(): {code: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeWithoutChecksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code_without_checks')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the new runtime code without doing any checks of the given `code`.
     * 
     *  # <weight>
     *  - `O(C)` where `C` length of `code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime. We will treat this as a full block.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     *  Set the new runtime code without doing any checks of the given `code`.
     * 
     *  # <weight>
     *  - `O(C)` where `C` length of `code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime. We will treat this as a full block.
     *  # </weight>
     */
    get asV41(): {code: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetHeapPagesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_heap_pages')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the number of pages in the WebAssembly environment's heap.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write.
     *  - Base Weight: 1.405 µs
     *  - 1 write to HEAP_PAGES
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     *  Set the number of pages in the WebAssembly environment's heap.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write.
     *  - Base Weight: 1.405 µs
     *  - 1 write to HEAP_PAGES
     *  # </weight>
     */
    get asV41(): {pages: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set some items of storage.
     * 
     *  # <weight>
     *  - `O(I)` where `I` length of `items`
     *  - `I` storage writes (`O(1)`).
     *  - Base Weight: 0.568 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     *  Set some items of storage.
     * 
     *  # <weight>
     *  - `O(I)` where `I` length of `items`
     *  - `I` storage writes (`O(1)`).
     *  - Base Weight: 0.568 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    get asV41(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     *  May be called by any signed account in order to finish voting and close the proposal.
     * 
     *  If called before the end of the voting period it will only close the vote if it is
     *  has enough votes to be approved or disapproved.
     * 
     *  If called after the end of the voting period abstentions are counted as rejections
     *  unless there is a prime member set and the prime member cast an approval.
     * 
     *  If the close operation completes successfully with disapproval, the transaction fee will
     *  be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
     *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1 + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - `P1` is the complexity of `proposal` preimage.
     *    - `P2` is proposal-count (code-bounded)
     *  - DB:
     *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
     *   - any mutations done while executing `proposal` (`P1`)
     *  - up to 3 events
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     *  Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     *  May be called by any signed account in order to finish voting and close the proposal.
     * 
     *  If called before the end of the voting period it will only close the vote if it is
     *  has enough votes to be approved or disapproved.
     * 
     *  If called after the end of the voting period abstentions are counted as rejections
     *  unless there is a prime member set and the prime member cast an approval.
     * 
     *  If the close operation completes successfully with disapproval, the transaction fee will
     *  be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
     *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1 + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - `P1` is the complexity of `proposal` preimage.
     *    - `P2` is proposal-count (code-bounded)
     *  - DB:
     *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
     *   - any mutations done while executing `proposal` (`P1`)
     *  - up to 3 events
     *  # </weight>
     */
    get asV41(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
     * 
     *  Must be called by the Root origin.
     * 
     *  Parameters:
     *  * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     *  # <weight>
     *  Complexity: O(P) where P is the number of max proposals
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
     * 
     *  Must be called by the Root origin.
     * 
     *  Parameters:
     *  * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     *  # <weight>
     *  Complexity: O(P) where P is the number of max proposals
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get asV41(): {proposalHash: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '08fe1b553ac7f7d3568e8b1f3096f3080c8bd399b4717b57de6cda04c66ea82a'
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get asV41(): {proposal: v41.Proposal, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'c08fff902753e87ba126f81bd6b27777a90b2d6ca374f0051577b506eb1c2470'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV42(): {proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '862dc66f3870f413b0072a50f786be532fe36891102bf4ba7d73c454282d923a'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV43(): {proposal: v43.Call, lengthBound: number} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '2f54cfc9298df7581546f7d8dd3597870069df54bda8290bbac1dec588b02d94'
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get asV41(): {threshold: number, proposal: v41.Proposal, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '11e7adfbb2510ac009007b3861ede1b47f989b201855086fcb1ad773f5b750fd'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV42(): {threshold: number, proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '32e4cf2d6915186e59548c615312f7d5029990fa3ba7b44de37f1cecffda8ab8'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV43(): {threshold: number, proposal: v43.Call, lengthBound: number} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the collective's membership.
     * 
     *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     *  - `prime`: The prime member whose vote sets the default.
     *  - `old_count`: The upper bound for the previous number of members in storage.
     *                 Used for weight estimation.
     * 
     *  Requires root origin.
     * 
     *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *        the weight estimations rely on it to estimate dispatchable weight.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(MP + N)` where:
     *    - `M` old-members-count (code- and governance-bounded)
     *    - `N` new-members-count (code- and governance-bounded)
     *    - `P` proposals-count (code-bounded)
     *  - DB:
     *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
     *    - 1 storage read (codec `O(P)`) for reading the proposals
     *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     *  Set the collective's membership.
     * 
     *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     *  - `prime`: The prime member whose vote sets the default.
     *  - `old_count`: The upper bound for the previous number of members in storage.
     *                 Used for weight estimation.
     * 
     *  Requires root origin.
     * 
     *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *        the weight estimations rely on it to estimate dispatchable weight.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(MP + N)` where:
     *    - `M` old-members-count (code- and governance-bounded)
     *    - `N` new-members-count (code- and governance-bounded)
     *    - `P` proposals-count (code-bounded)
     *  - DB:
     *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
     *    - 1 storage read (codec `O(P)`) for reading the proposals
     *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     *  # </weight>
     */
    get asV41(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  Transaction fees will be waived if the member is voting on any particular proposal
     *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  Transaction fees will be waived if the member is voting on any particular proposal
     *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    get asV41(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a member `who` to the set.
     * 
     *  May only be called from `T::AddOrigin`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalMembership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     *  Add a member `who` to the set.
     * 
     *  May only be called from `T::AddOrigin`.
     */
    get asV41(): {who: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Swap out the sending member for some other key `new`.
     * 
     *  May only be called from `Signed` origin of a current member.
     * 
     *  Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalMembership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     *  Swap out the sending member for some other key `new`.
     * 
     *  May only be called from `Signed` origin of a current member.
     * 
     *  Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV41(): {new: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the prime member if it exists.
     * 
     *  May only be called from `T::PrimeOrigin`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Remove the prime member if it exists.
     * 
     *  May only be called from `T::PrimeOrigin`.
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a member `who` from the set.
     * 
     *  May only be called from `T::RemoveOrigin`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalMembership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     *  Remove a member `who` from the set.
     * 
     *  May only be called from `T::RemoveOrigin`.
     */
    get asV41(): {who: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change the membership to a new set, disregarding the existing membership. Be nice and
     *  pass `members` pre-sorted.
     * 
     *  May only be called from `T::ResetOrigin`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     *  Change the membership to a new set, disregarding the existing membership. Be nice and
     *  pass `members` pre-sorted.
     * 
     *  May only be called from `T::ResetOrigin`.
     */
    get asV41(): {members: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the prime member. Must be a current member.
     * 
     *  May only be called from `T::PrimeOrigin`.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalMembership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     *  Set the prime member. Must be a current member.
     * 
     *  May only be called from `T::PrimeOrigin`.
     */
    get asV41(): {who: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Swap out one member `remove` for another `add`.
     * 
     *  May only be called from `T::SwapOrigin`.
     * 
     *  Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalMembership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     *  Swap out one member `remove` for another `add`.
     * 
     *  May only be called from `T::SwapOrigin`.
     * 
     *  Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV41(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TimestampSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Timestamp.set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the current time.
     * 
     *  This call should be invoked exactly once per block. It will panic at the finalization
     *  phase, if this call hasn't been invoked by that time.
     * 
     *  The timestamp should be greater than the previous one by the amount specified by
     *  `MinimumPeriod`.
     * 
     *  The dispatch origin for this call must be `Inherent`.
     * 
     *  # <weight>
     *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
     *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

    /**
     *  Set the current time.
     * 
     *  This call should be invoked exactly once per block. It will panic at the finalization
     *  phase, if this call hasn't been invoked by that time.
     * 
     *  The timestamp should be greater than the previous one by the amount specified by
     *  `MinimumPeriod`.
     * 
     *  The dispatch origin for this call must be `Inherent`.
     * 
     *  # <weight>
     *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
     *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     *  # </weight>
     */
    get asV41(): {now: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TradingPairRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TradingPair.register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register trading pair on the given DEX.
     *  Can be only called by the DEX owner.
     * 
     *  - `dex_id`: ID of the exchange.
     *  - `base_asset_id`: base asset ID.
     *  - `target_asset_id`: target asset ID.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TradingPair.register') === '28e7ad97a9f3f75004f6cf9be410177f51c3bcacb929f4379af96c6a7ff442c1'
    }

    /**
     *  Register trading pair on the given DEX.
     *  Can be only called by the DEX owner.
     * 
     *  - `dex_id`: ID of the exchange.
     *  - `base_asset_id`: base asset ID.
     *  - `target_asset_id`: target asset ID.
     */
    get asV41(): {dexId: number, baseAssetId: Uint8Array, targetAssetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register trading pair on the given DEX.
     * Can be only called by the DEX owner.
     * 
     * - `dex_id`: ID of the exchange.
     * - `base_asset_id`: base asset ID.
     * - `target_asset_id`: target asset ID.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TradingPair.register') === 'c349a7406202905e9a828ca8399576945e928120d5909b151c8c2aad0894b062'
    }

    /**
     * Register trading pair on the given DEX.
     * Can be only called by the DEX owner.
     * 
     * - `dex_id`: ID of the exchange.
     * - `base_asset_id`: base asset ID.
     * - `target_asset_id`: target asset ID.
     */
    get asV42(): {dexId: number, baseAssetId: v42.AssetId32, targetAssetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsDerivativeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_derivative')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'b36177a31f9cc5c700bacbc59545fc3e643f157a2e3d0156f144846abbd38ffc'
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    get asV41(): {index: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '19bd0688eea717873e5ec8ff2a8c628c9f235fb5842b2e601478f73803f1fe4a'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV42(): {index: number, call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '992fdcaf78ff5f444670a2ae340788ce3d54d78acf081eea8888c73cbf32233d'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV43(): {index: number, call: v43.Call} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'd2152ec2ffb64147aaf31255650a3f490ed59b14a43184bae75db55f50d5bc7c'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get asV41(): {calls: v41.Type_43[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.batch') === '3ba4c99793f2b70ec97041af19edb8fc02d8eacd72ccf540566f8ca655f8fabb'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV42(): {calls: v42.Call[]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'cabd4d0a76f3d7d50a1a90cb9cbac42a62415c1de121d25ed9cfe928d161fe35'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV43(): {calls: v43.Call[]} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'd2152ec2ffb64147aaf31255650a3f490ed59b14a43184bae75db55f50d5bc7c'
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get asV41(): {calls: v41.Type_43[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '3ba4c99793f2b70ec97041af19edb8fc02d8eacd72ccf540566f8ca655f8fabb'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV42(): {calls: v42.Call[]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'cabd4d0a76f3d7d50a1a90cb9cbac42a62415c1de121d25ed9cfe928d161fe35'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV43(): {calls: v43.Call[]} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityDispatchAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.dispatch_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '4a5d9351b0bb60192eb8aa6ac28f655b38a321478408d21dd9287887c118155f'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV42(): {asOrigin: v42.OriginCaller, call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '8b155d8f4bd587a376499ba713079e18125a78c198f23c917f4923492e010e47'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV43(): {asOrigin: v43.OriginCaller, call: v43.Call} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityForceBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.force_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '3ba4c99793f2b70ec97041af19edb8fc02d8eacd72ccf540566f8ca655f8fabb'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV42(): {calls: v42.Call[]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'cabd4d0a76f3d7d50a1a90cb9cbac42a62415c1de121d25ed9cfe928d161fe35'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV43(): {calls: v43.Call[]} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }
}

export class VestedRewardsClaimCrowdloanRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestedRewards.claim_crowdloan_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('VestedRewards.claim_crowdloan_rewards') === '3efcd0cff8534a5369ea6d2c56f45afe1ddfe04db51b5d7024646d79ab25e30e'
    }

    get asV41(): {assetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    get isV42(): boolean {
        return this._chain.getCallHash('VestedRewards.claim_crowdloan_rewards') === 'a36be52e74cca5cea6f84787787125e6d099de1c5c10bc4b98b16b57f700e9f6'
    }

    get asV42(): {assetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class VestedRewardsClaimRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestedRewards.claim_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Claim all available PSWAP rewards by account signing this transaction.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('VestedRewards.claim_rewards') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Claim all available PSWAP rewards by account signing this transaction.
     */
    get asV41(): null {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class VestedRewardsInjectMarketMakersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestedRewards.inject_market_makers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Inject market makers snapshot into storage.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('VestedRewards.inject_market_makers') === '240c907a25323db459657632bcfc0c3ab34d33e47d4db2a0411176d078dc9e19'
    }

    /**
     *  Inject market makers snapshot into storage.
     */
    get asV41(): {snapshot: [Uint8Array, number, bigint][]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class VestedRewardsSetAssetPairCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'VestedRewards.set_asset_pair')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allow/disallow a market making pair.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('VestedRewards.set_asset_pair') === 'a90a5cbf91f8720345dcbec10d26e13e704b8474905c884e3f8d5e4435e785e8'
    }

    /**
     *  Allow/disallow a market making pair.
     */
    get asV41(): {fromAssetId: Uint8Array, toAssetId: Uint8Array, marketMakingRewardsAllowed: boolean} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Allow/disallow a market making pair.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('VestedRewards.set_asset_pair') === 'f0291cc0b2ea89e12da5251416a556a122b40c5ff6957146aefbff44b493186e'
    }

    /**
     * Allow/disallow a market making pair.
     */
    get asV42(): {fromAssetId: v42.AssetId32, toAssetId: v42.AssetId32, marketMakingRewardsAllowed: boolean} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolEnableSyntheticAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.enable_synthetic_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('XSTPool.enable_synthetic_asset') === '76deea6f6e41937ee391a3b3d02bfd336bd3b44eb979fa0fb5f10fde92d467bf'
    }

    get asV41(): {syntheticAsset: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    get isV42(): boolean {
        return this._chain.getCallHash('XSTPool.enable_synthetic_asset') === 'b3d8cbeec8b655ff3ab7ed68a09a3fbbac71dd2bc30bba9349c9e796a47ce838'
    }

    get asV42(): {syntheticAsset: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolInitializePoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.initialize_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XSTPool.initialize_pool') === '59f5798254a14ef1eae5fa0de6e3f0050296dd185c488f12b08e391b4b0f15ef'
    }

    /**
     *  Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
     */
    get asV41(): {syntheticAssetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('XSTPool.initialize_pool') === 'f4504f4c23352f370363b4ae5eb6303987ab0dcac1d352125661530e0c2db526'
    }

    /**
     * Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
     */
    get asV42(): {syntheticAssetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class XstPoolSetReferenceAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XSTPool.set_reference_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XSTPool.set_reference_asset') === '5797f304c463ebdff62f19c4382c3b2ff48a27213b81084af9d31f75e891c633'
    }

    /**
     *  Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
     */
    get asV41(): {referenceAssetId: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('XSTPool.set_reference_asset') === '0f3d967dea75c83db87adb08b56da4133e9350eb3cfc45a4d4618fb26ac13666'
    }

    /**
     * Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
     */
    get asV42(): {referenceAssetId: v42.AssetId32} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class XorFeeUpdateMultiplierCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XorFee.update_multiplier')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Update the multiplier for weight -> fee conversion.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XorFee.update_multiplier') === 'e9cb014db6bd33209c3200608002a57ac8221fbef4076d0a85e364bdbd33a375'
    }

    /**
     *  Update the multiplier for weight -> fee conversion.
     */
    get asV41(): {newMultiplier: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}
