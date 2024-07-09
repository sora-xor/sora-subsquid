import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const symbolsRelayed =  {
    name: 'Band.SymbolsRelayed',
    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    v85: new EventType(
        'Band.SymbolsRelayed',
        sts.array(() => sts.tuple(() => [v85.SymbolName, sts.bigint()]))
    ),
}

export const relayersAdded =  {
    name: 'Band.RelayersAdded',
    /**
     * Added new trusted relayer accounts. [relayers]
     */
    v85: new EventType(
        'Band.RelayersAdded',
        sts.array(() => v85.AccountId32)
    ),
}

export const relayersRemoved =  {
    name: 'Band.RelayersRemoved',
    /**
     * Relayer accounts were removed from trusted list. [relayers]
     */
    v85: new EventType(
        'Band.RelayersRemoved',
        sts.array(() => v85.AccountId32)
    ),
}
