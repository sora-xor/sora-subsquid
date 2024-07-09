import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const createCdp =  {
    name: 'Kensetsu.create_cdp',
    /**
     * Creates a Collateralized Debt Position (CDP).
     * The extrinsic combines depositing collateral and borrowing.
     * Borrow amount will be as max as possible in the range
     * `[borrow_amount_min, borrow_amount_max]` in order to confrom the slippage tolerance.
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `collateral_asset_id`: The identifier of the asset used as collateral.
     * - `collateral_amount`: The amount of collateral to be deposited.
     * - `borrow_amount_min`: The minimum amount the user wants to borrow.
     * - `borrow_amount_max`: The maximum amount the user wants to borrow.
     */
    v85: new CallType(
        'Kensetsu.create_cdp',
        sts.struct({
            collateralAssetId: v85.AssetId32,
            collateralAmount: sts.bigint(),
            borrowAmountMin: sts.bigint(),
            borrowAmountMax: sts.bigint(),
        })
    ),
}

export const closeCdp =  {
    name: 'Kensetsu.close_cdp',
    /**
     * Closes a Collateralized Debt Position (CDP).
     * 
     * If a CDP has outstanding debt, this amount is covered with owner balance. Collateral
     * then is returned to the owner and CDP is deleted.
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction, only CDP owner is allowed.
     * - `cdp_id`: The ID of the CDP to be closed.
     */
    v85: new CallType(
        'Kensetsu.close_cdp',
        sts.struct({
            cdpId: sts.bigint(),
        })
    ),
}

export const depositCollateral =  {
    name: 'Kensetsu.deposit_collateral',
    /**
     * Deposits collateral into a Collateralized Debt Position (CDP).
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `cdp_id`: The ID of the CDP to deposit collateral into.
     * - `collateral_amount`: The amount of collateral to deposit.
     */
    v85: new CallType(
        'Kensetsu.deposit_collateral',
        sts.struct({
            cdpId: sts.bigint(),
            collateralAmount: sts.bigint(),
        })
    ),
}

export const borrow =  {
    name: 'Kensetsu.borrow',
    /**
     * Borrows funds against a Collateralized Debt Position (CDP).
     * Borrow amount will be as max as possible in the range
     * `[borrow_amount_min, borrow_amount_max]` in order to confrom the slippage tolerance.
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `cdp_id`: The ID of the CDP to borrow against.
     * - `borrow_amount_min`: The minimum amount the user wants to borrow.
     * - `borrow_amount_max`: The maximum amount the user wants to borrow.
     */
    v85: new CallType(
        'Kensetsu.borrow',
        sts.struct({
            cdpId: sts.bigint(),
            borrowAmountMin: sts.bigint(),
            borrowAmountMax: sts.bigint(),
        })
    ),
}

export const repayDebt =  {
    name: 'Kensetsu.repay_debt',
    /**
     * Repays debt against a Collateralized Debt Position (CDP).
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `cdp_id`: The ID of the CDP to repay debt for.
     * - `amount`: The amount to repay against the CDP's debt.
     */
    v85: new CallType(
        'Kensetsu.repay_debt',
        sts.struct({
            cdpId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
}

export const liquidate =  {
    name: 'Kensetsu.liquidate',
    /**
     * Liquidates a Collateralized Debt Position (CDP) if it becomes unsafe.
     * 
     * ## Parameters
     * 
     * - `_origin`: The origin of the transaction (unused).
     * - `cdp_id`: The ID of the CDP to be liquidated.
     */
    v85: new CallType(
        'Kensetsu.liquidate',
        sts.struct({
            cdpId: sts.bigint(),
        })
    ),
}

export const accrue =  {
    name: 'Kensetsu.accrue',
    /**
     * Accrues interest on a Collateralized Debt Position (CDP).
     * 
     * ## Parameters
     * 
     * - `_origin`: The origin of the transaction (unused).
     * - `cdp_id`: The ID of the CDP to accrue interest on.
     */
    v85: new CallType(
        'Kensetsu.accrue',
        sts.struct({
            cdpId: sts.bigint(),
        })
    ),
}

export const updateCollateralRiskParameters =  {
    name: 'Kensetsu.update_collateral_risk_parameters',
    /**
     * Updates the risk parameters for a specific collateral asset.
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `collateral_asset_id`: The identifier of the collateral asset.
     * - `new_risk_parameters`: The new risk parameters to be set for the collateral asset.
     */
    v85: new CallType(
        'Kensetsu.update_collateral_risk_parameters',
        sts.struct({
            collateralAssetId: v85.AssetId32,
            newRiskParameters: v85.CollateralRiskParameters,
        })
    ),
}

export const updateBorrowTax =  {
    name: 'Kensetsu.update_borrow_tax',
    /**
     * Updates the borrow tax applied during borrow.
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `new_borrow_tax`: The new borrow tax percentage to be set.
     */
    v85: new CallType(
        'Kensetsu.update_borrow_tax',
        sts.struct({
            newBorrowTax: v85.Percent,
        })
    ),
}

export const updateLiquidationPenalty =  {
    name: 'Kensetsu.update_liquidation_penalty',
    /**
     * Updates the liquidation penalty applied during CDP liquidation.
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `new_liquidation_penalty`: The new liquidation penalty percentage to be set.
     */
    v85: new CallType(
        'Kensetsu.update_liquidation_penalty',
        sts.struct({
            newLiquidationPenalty: v85.Percent,
        })
    ),
}

export const withdrawProfit =  {
    name: 'Kensetsu.withdraw_profit',
    /**
     * Withdraws protocol profit in the form of stablecoin (KUSD).
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `beneficiary` : The destination account where assets will be withdrawn.
     * - `kusd_amount`: The amount of stablecoin (KUSD) to withdraw as protocol profit.
     */
    v85: new CallType(
        'Kensetsu.withdraw_profit',
        sts.struct({
            beneficiary: v85.AccountId32,
            kusdAmount: sts.bigint(),
        })
    ),
}

export const donate =  {
    name: 'Kensetsu.donate',
    /**
     * Donates stablecoin (KUSD) to cover protocol bad debt.
     * 
     * ## Parameters
     * 
     * - `origin`: The origin of the transaction.
     * - `kusd_amount`: The amount of stablecoin (KUSD) to donate to cover bad debt.
     */
    v85: new CallType(
        'Kensetsu.donate',
        sts.struct({
            kusdAmount: sts.bigint(),
        })
    ),
}
