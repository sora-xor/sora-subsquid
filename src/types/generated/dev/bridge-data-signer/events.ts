import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const initialized =  {
    name: 'BridgeDataSigner.Initialized',
    v85: new EventType(
        'BridgeDataSigner.Initialized',
        sts.struct({
            networkId: v85.GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        })
    ),
}

export const addedPeer =  {
    name: 'BridgeDataSigner.AddedPeer',
    v85: new EventType(
        'BridgeDataSigner.AddedPeer',
        sts.struct({
            networkId: v85.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
}

export const removedPeer =  {
    name: 'BridgeDataSigner.RemovedPeer',
    v85: new EventType(
        'BridgeDataSigner.RemovedPeer',
        sts.struct({
            networkId: v85.GenericNetworkId,
            peer: sts.bytes(),
        })
    ),
}

export const approvalAccepted =  {
    name: 'BridgeDataSigner.ApprovalAccepted',
    v85: new EventType(
        'BridgeDataSigner.ApprovalAccepted',
        sts.struct({
            networkId: v85.GenericNetworkId,
            data: v85.H256,
            signature: v85.Signature,
        })
    ),
}

export const approved =  {
    name: 'BridgeDataSigner.Approved',
    v85: new EventType(
        'BridgeDataSigner.Approved',
        sts.struct({
            networkId: v85.GenericNetworkId,
            data: v85.H256,
            signatures: sts.array(() => v85.Signature),
        })
    ),
}
