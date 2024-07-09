import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const cdpCreated =  {
    name: 'Kensetsu.CDPCreated',
    v85: new EventType(
        'Kensetsu.CDPCreated',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v85.AccountId32,
            collateralAssetId: v85.AssetId32,
            debtAssetId: v85.AssetId32,
            cdpType: v85.CdpType,
        })
    ),
}

export const cdpClosed =  {
    name: 'Kensetsu.CDPClosed',
    v85: new EventType(
        'Kensetsu.CDPClosed',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v85.AccountId32,
            collateralAssetId: v85.AssetId32,
            /**
             * Amount of collateral returned to the CDP owner. 0 means the collateral was
             * liquidated.
             */
            collateralAmount: sts.bigint(),
        })
    ),
}

export const collateralDeposit =  {
    name: 'Kensetsu.CollateralDeposit',
    v85: new EventType(
        'Kensetsu.CollateralDeposit',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v85.AccountId32,
            collateralAssetId: v85.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const debtIncreased =  {
    name: 'Kensetsu.DebtIncreased',
    v85: new EventType(
        'Kensetsu.DebtIncreased',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v85.AccountId32,
            debtAssetId: v85.AssetId32,
            /**
             * Amount borrowed in debt asset id.
             */
            amount: sts.bigint(),
        })
    ),
}

export const debtPayment =  {
    name: 'Kensetsu.DebtPayment',
    v85: new EventType(
        'Kensetsu.DebtPayment',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v85.AccountId32,
            debtAssetId: v85.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const liquidated =  {
    name: 'Kensetsu.Liquidated',
    v85: new EventType(
        'Kensetsu.Liquidated',
        sts.struct({
            cdpId: sts.bigint(),
            collateralAssetId: v85.AssetId32,
            collateralAmount: sts.bigint(),
            debtAssetId: v85.AssetId32,
            proceeds: sts.bigint(),
            penalty: sts.bigint(),
        })
    ),
}

export const collateralRiskParametersUpdated =  {
    name: 'Kensetsu.CollateralRiskParametersUpdated',
    v85: new EventType(
        'Kensetsu.CollateralRiskParametersUpdated',
        sts.struct({
            collateralAssetId: v85.AssetId32,
            riskParameters: v85.CollateralRiskParameters,
        })
    ),
}

export const borrowTaxUpdated =  {
    name: 'Kensetsu.BorrowTaxUpdated',
    v85: new EventType(
        'Kensetsu.BorrowTaxUpdated',
        sts.struct({
            oldBorrowTax: v85.Percent,
            newBorrowTax: v85.Percent,
        })
    ),
}

export const liquidationPenaltyUpdated =  {
    name: 'Kensetsu.LiquidationPenaltyUpdated',
    v85: new EventType(
        'Kensetsu.LiquidationPenaltyUpdated',
        sts.struct({
            newLiquidationPenalty: v85.Percent,
            oldLiquidationPenalty: v85.Percent,
        })
    ),
}

export const profitWithdrawn =  {
    name: 'Kensetsu.ProfitWithdrawn',
    v85: new EventType(
        'Kensetsu.ProfitWithdrawn',
        sts.struct({
            debtAssetId: v85.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const donation =  {
    name: 'Kensetsu.Donation',
    v85: new EventType(
        'Kensetsu.Donation',
        sts.struct({
            debtAssetId: v85.AssetId32,
            amount: sts.bigint(),
        })
    ),
}
