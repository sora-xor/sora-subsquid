import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const claim =  {
    name: 'Rewards.claim',
    /**
     *  Claim the reward with signature.
     */
    v33: new CallType(
        'Rewards.claim',
        sts.struct({
            signature: sts.bytes(),
        })
    ),
}

export const finalizeStorageMigration =  {
    name: 'Rewards.finalize_storage_migration',
    /**
     *  Finalize the update of unclaimed VAL data in storage
     */
    v33: new CallType(
        'Rewards.finalize_storage_migration',
        sts.struct({
            amounts: sts.array(() => sts.tuple(() => [v33.EthAddress, v33.Balance])),
        })
    ),
}

export const addUmiNftReceivers =  {
    name: 'Rewards.add_umi_nft_receivers',
    /**
     *  Add addresses, who will receive UMI NFT rewards.
     */
    v33: new CallType(
        'Rewards.add_umi_nft_receivers',
        sts.struct({
            receivers: sts.array(() => v33.EthAddress),
        })
    ),
}
