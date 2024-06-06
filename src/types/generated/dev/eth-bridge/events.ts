import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const requestRegistered =  {
    name: 'EthBridge.RequestRegistered',
    /**
     * New request has been registered. [Request Hash]
     */
    v85: new EventType(
        'EthBridge.RequestRegistered',
        v85.H256
    ),
}

export const approvalsCollected =  {
    name: 'EthBridge.ApprovalsCollected',
    /**
     * The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
     */
    v85: new EventType(
        'EthBridge.ApprovalsCollected',
        v85.H256
    ),
}

export const requestFinalizationFailed =  {
    name: 'EthBridge.RequestFinalizationFailed',
    /**
     * The request finalization has been failed. [Request Hash]
     */
    v85: new EventType(
        'EthBridge.RequestFinalizationFailed',
        v85.H256
    ),
}

export const incomingRequestFinalizationFailed =  {
    name: 'EthBridge.IncomingRequestFinalizationFailed',
    /**
     * The incoming request finalization has been failed. [Request Hash]
     */
    v85: new EventType(
        'EthBridge.IncomingRequestFinalizationFailed',
        v85.H256
    ),
}

export const incomingRequestFinalized =  {
    name: 'EthBridge.IncomingRequestFinalized',
    /**
     * The incoming request has been finalized. [Request Hash]
     */
    v85: new EventType(
        'EthBridge.IncomingRequestFinalized',
        v85.H256
    ),
}

export const requestAborted =  {
    name: 'EthBridge.RequestAborted',
    /**
     * The request was aborted and cancelled. [Request Hash]
     */
    v85: new EventType(
        'EthBridge.RequestAborted',
        v85.H256
    ),
}

export const cancellationFailed =  {
    name: 'EthBridge.CancellationFailed',
    /**
     * The request wasn't finalized nor cancelled. [Request Hash]
     */
    v85: new EventType(
        'EthBridge.CancellationFailed',
        v85.H256
    ),
}

export const registerRequestFailed =  {
    name: 'EthBridge.RegisterRequestFailed',
    /**
     * The request registration has been failed. [Request Hash, Error]
     */
    v85: new EventType(
        'EthBridge.RegisterRequestFailed',
        sts.tuple([v85.H256, v85.DispatchError])
    ),
}
