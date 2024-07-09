import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const registerNetwork =  {
    name: 'BridgeDataSigner.register_network',
    v85: new CallType(
        'BridgeDataSigner.register_network',
        sts.struct({
            networkId: v85.GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        })
    ),
}

export const approve =  {
    name: 'BridgeDataSigner.approve',
    v85: new CallType(
        'BridgeDataSigner.approve',
        sts.struct({
            networkId: v85.GenericNetworkId,
            data: v85.H256,
            signature: v85.Signature,
        })
    ),
}

export const addPeer =  {
    name: 'BridgeDataSigner.add_peer',
    v85: new CallType(
        'BridgeDataSigner.add_peer',
        sts.struct({
            networkId: v85.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
}

export const removePeer =  {
    name: 'BridgeDataSigner.remove_peer',
    v85: new CallType(
        'BridgeDataSigner.remove_peer',
        sts.struct({
            networkId: v85.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
}

export const finishRemovePeer =  {
    name: 'BridgeDataSigner.finish_remove_peer',
    v85: new CallType(
        'BridgeDataSigner.finish_remove_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}

export const finishAddPeer =  {
    name: 'BridgeDataSigner.finish_add_peer',
    v85: new CallType(
        'BridgeDataSigner.finish_add_peer',
        sts.struct({
            peer: sts.bytes(),
        })
    ),
}
