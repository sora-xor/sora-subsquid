import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const networkInitialized =  {
    name: 'MultisigVerifier.NetworkInitialized',
    v85: new EventType(
        'MultisigVerifier.NetworkInitialized',
        v85.GenericNetworkId
    ),
}

export const verificationSuccessful =  {
    name: 'MultisigVerifier.VerificationSuccessful',
    v85: new EventType(
        'MultisigVerifier.VerificationSuccessful',
        v85.GenericNetworkId
    ),
}

export const peerAdded =  {
    name: 'MultisigVerifier.PeerAdded',
    v85: new EventType(
        'MultisigVerifier.PeerAdded',
        sts.bytes()
    ),
}

export const peerRemoved =  {
    name: 'MultisigVerifier.PeerRemoved',
    v85: new EventType(
        'MultisigVerifier.PeerRemoved',
        sts.bytes()
    ),
}
