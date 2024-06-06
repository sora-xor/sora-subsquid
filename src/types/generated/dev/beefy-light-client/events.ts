import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const verificationSuccessful =  {
    name: 'BeefyLightClient.VerificationSuccessful',
    v85: new EventType(
        'BeefyLightClient.VerificationSuccessful',
        sts.tuple([v85.SubNetworkId, v85.AccountId32, sts.number()])
    ),
}

export const newMmrRoot =  {
    name: 'BeefyLightClient.NewMMRRoot',
    v85: new EventType(
        'BeefyLightClient.NewMMRRoot',
        sts.tuple([v85.SubNetworkId, v85.H256, sts.bigint()])
    ),
}

export const validatorRegistryUpdated =  {
    name: 'BeefyLightClient.ValidatorRegistryUpdated',
    v85: new EventType(
        'BeefyLightClient.ValidatorRegistryUpdated',
        sts.tuple([v85.SubNetworkId, v85.H256, sts.number(), sts.bigint()])
    ),
}
