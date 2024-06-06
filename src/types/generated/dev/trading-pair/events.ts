import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const tradingPairStored =  {
    name: 'TradingPair.TradingPairStored',
    /**
     * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    v85: new EventType(
        'TradingPair.TradingPairStored',
        sts.tuple([sts.number(), v85.TradingPair])
    ),
}
