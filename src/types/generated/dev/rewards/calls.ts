import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const claim =  {
    name: 'Rewards.claim',
    /**
     * Claim the reward with signature.
     */
    v85: new CallType(
        'Rewards.claim',
        sts.struct({
            signature: sts.bytes(),
        })
    ),
}

export const addUmiNftReceivers =  {
    name: 'Rewards.add_umi_nft_receivers',
    /**
     * Finalize the update of unclaimed VAL data in storage
     * Add addresses, who will receive UMI NFT rewards.
     */
    v85: new CallType(
        'Rewards.add_umi_nft_receivers',
        sts.struct({
            receivers: sts.array(() => v85.H160),
        })
    ),
}
