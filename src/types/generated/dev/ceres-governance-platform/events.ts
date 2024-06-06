import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const voted =  {
    name: 'CeresGovernancePlatform.Voted',
    /**
     * Voting [who, poll, option, asset, balance]
     */
    v85: new EventType(
        'CeresGovernancePlatform.Voted',
        sts.tuple([v85.AccountId32, v85.H256, sts.number(), v85.AssetId32, sts.bigint()])
    ),
}

export const created =  {
    name: 'CeresGovernancePlatform.Created',
    /**
     * Create poll [who, title, poll_asset, start_timestamp, end_timestamp]
     */
    v85: new EventType(
        'CeresGovernancePlatform.Created',
        sts.tuple([v85.AccountId32, v85.BoundedString, v85.AssetId32, sts.bigint(), sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'CeresGovernancePlatform.Withdrawn',
    /**
     * Withdrawn [who, poll, asset, balance]
     */
    v85: new EventType(
        'CeresGovernancePlatform.Withdrawn',
        sts.tuple([v85.AccountId32, v85.H256, v85.AssetId32, sts.bigint()])
    ),
}
