import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const assetRegistered =  {
    name: 'Assets.AssetRegistered',
    /**
     * New asset has been registered. [Asset Id, Asset Owner Account]
     */
    v85: new EventType(
        'Assets.AssetRegistered',
        sts.tuple([v85.AssetId32, v85.AccountId32])
    ),
}

export const transfer =  {
    name: 'Assets.Transfer',
    /**
     * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    v85: new EventType(
        'Assets.Transfer',
        sts.tuple([v85.AccountId32, v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}

export const mint =  {
    name: 'Assets.Mint',
    /**
     * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    v85: new EventType(
        'Assets.Mint',
        sts.tuple([v85.AccountId32, v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}

export const burn =  {
    name: 'Assets.Burn',
    /**
     * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    v85: new EventType(
        'Assets.Burn',
        sts.tuple([v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}

export const assetSetNonMintable =  {
    name: 'Assets.AssetSetNonMintable',
    /**
     * Asset is set as non-mintable. [Target Asset Id]
     */
    v85: new EventType(
        'Assets.AssetSetNonMintable',
        v85.AssetId32
    ),
}

export const assetUpdated =  {
    name: 'Assets.AssetUpdated',
    /**
     * Asset info has been updated
     */
    v85: new EventType(
        'Assets.AssetUpdated',
        sts.tuple([v85.AssetId32, sts.option(() => v85.AssetSymbol), sts.option(() => v85.AssetName)])
    ),
}
