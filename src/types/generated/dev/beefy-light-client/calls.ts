import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const initialize =  {
    name: 'BeefyLightClient.initialize',
    v85: new CallType(
        'BeefyLightClient.initialize',
        sts.struct({
            networkId: v85.SubNetworkId,
            latestBeefyBlock: sts.bigint(),
            validatorSet: v85.BeefyAuthoritySet,
            nextValidatorSet: v85.BeefyAuthoritySet,
        })
    ),
}

export const submitSignatureCommitment =  {
    name: 'BeefyLightClient.submit_signature_commitment',
    v85: new CallType(
        'BeefyLightClient.submit_signature_commitment',
        sts.struct({
            networkId: v85.SubNetworkId,
            commitment: v85.Type_603,
            validatorProof: v85.ValidatorProof,
            latestMmrLeaf: v85.MmrLeaf,
            proof: v85.Proof,
        })
    ),
}
