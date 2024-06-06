import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const initialize =  {
    name: 'MultisigVerifier.initialize',
    v85: new CallType(
        'MultisigVerifier.initialize',
        sts.struct({
            networkId: v85.GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        })
    ),
}

export const addPeer =  {
    name: 'MultisigVerifier.add_peer',
    v85: new CallType(
        'MultisigVerifier.add_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}

export const removePeer =  {
    name: 'MultisigVerifier.remove_peer',
    v85: new CallType(
        'MultisigVerifier.remove_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}
