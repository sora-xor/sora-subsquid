import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v84 from '../v84'

export const cdpCreated =  {
    name: 'Kensetsu.CDPCreated',
    v84: new EventType(
        'Kensetsu.CDPCreated',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v84.AccountId32,
            collateralAssetId: v84.AssetId32,
            debtAssetId: v84.AssetId32,
            cdpType: v84.CdpType,
        })
    ),
}

export const cdpClosed =  {
    name: 'Kensetsu.CDPClosed',
    v84: new EventType(
        'Kensetsu.CDPClosed',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v84.AccountId32,
            collateralAssetId: v84.AssetId32,
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
    v84: new EventType(
        'Kensetsu.CollateralDeposit',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v84.AccountId32,
            collateralAssetId: v84.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const debtIncreased =  {
    name: 'Kensetsu.DebtIncreased',
    v84: new EventType(
        'Kensetsu.DebtIncreased',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v84.AccountId32,
            debtAssetId: v84.AssetId32,
            /**
             * Amount borrowed in debt asset id.
             */
            amount: sts.bigint(),
        })
    ),
}

export const debtPayment =  {
    name: 'Kensetsu.DebtPayment',
    v84: new EventType(
        'Kensetsu.DebtPayment',
        sts.struct({
            cdpId: sts.bigint(),
            owner: v84.AccountId32,
            debtAssetId: v84.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const liquidated =  {
    name: 'Kensetsu.Liquidated',
    v84: new EventType(
        'Kensetsu.Liquidated',
        sts.struct({
            cdpId: sts.bigint(),
            collateralAssetId: v84.AssetId32,
            collateralAmount: sts.bigint(),
            debtAssetId: v84.AssetId32,
            proceeds: sts.bigint(),
            penalty: sts.bigint(),
        })
    ),
}

export const collateralRiskParametersUpdated =  {
    name: 'Kensetsu.CollateralRiskParametersUpdated',
    v84: new EventType(
        'Kensetsu.CollateralRiskParametersUpdated',
        sts.struct({
            collateralAssetId: v84.AssetId32,
            riskParameters: v84.CollateralRiskParameters,
        })
    ),
}

export const borrowTaxUpdated =  {
    name: 'Kensetsu.BorrowTaxUpdated',
    v84: new EventType(
        'Kensetsu.BorrowTaxUpdated',
        sts.struct({
            oldBorrowTax: v84.Percent,
            newBorrowTax: v84.Percent,
        })
    ),
}

export const liquidationPenaltyUpdated =  {
    name: 'Kensetsu.LiquidationPenaltyUpdated',
    v84: new EventType(
        'Kensetsu.LiquidationPenaltyUpdated',
        sts.struct({
            newLiquidationPenalty: v84.Percent,
            oldLiquidationPenalty: v84.Percent,
        })
    ),
}

export const profitWithdrawn =  {
    name: 'Kensetsu.ProfitWithdrawn',
    v84: new EventType(
        'Kensetsu.ProfitWithdrawn',
        sts.struct({
            debtAssetId: v84.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const donation =  {
    name: 'Kensetsu.Donation',
    v84: new EventType(
        'Kensetsu.Donation',
        sts.struct({
            debtAssetId: v84.AssetId32,
            amount: sts.bigint(),
        })
    ),
}
