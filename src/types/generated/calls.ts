import {Chain, ChainContext, CallContext, Call, Result, Option} from './production/support'
import * as productionCalls from './production/calls'
import * as stageCalls from './stage/calls'
import * as devCalls from './dev/calls'


export class AssetsBurnCall {
	private readonly production: productionCalls.AssetsBurnCall
	private readonly stage: stageCalls.AssetsBurnCall
	private readonly dev: devCalls.AssetsBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsBurnCall(ctx, call)
		this.stage = new stageCalls.AssetsBurnCall(ctx, call)
		this.dev = new devCalls.AssetsBurnCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsBurnCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsBurnCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AssetsBurnCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AssetsBurnCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.AssetsBurnCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.AssetsBurnCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.AssetsBurnCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.AssetsBurnCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.AssetsBurnCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.AssetsBurnCall['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsForceMintCall {
	private readonly production: productionCalls.AssetsForceMintCall
	private readonly stage: stageCalls.AssetsForceMintCall
	private readonly dev: devCalls.AssetsForceMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsForceMintCall(ctx, call)
		this.stage = new stageCalls.AssetsForceMintCall(ctx, call)
		this.dev = new devCalls.AssetsForceMintCall(ctx, call)
	}

	get isV45(): productionCalls.AssetsForceMintCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.AssetsForceMintCall['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageCalls.AssetsForceMintCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.AssetsForceMintCall['asV44'] {
		return this.stage.asV44
	}
	get isV60Dev(): devCalls.AssetsForceMintCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.AssetsForceMintCall['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsMintCall {
	private readonly production: productionCalls.AssetsMintCall
	private readonly stage: stageCalls.AssetsMintCall
	private readonly dev: devCalls.AssetsMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsMintCall(ctx, call)
		this.stage = new stageCalls.AssetsMintCall(ctx, call)
		this.dev = new devCalls.AssetsMintCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsMintCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsMintCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AssetsMintCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AssetsMintCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.AssetsMintCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.AssetsMintCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.AssetsMintCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.AssetsMintCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.AssetsMintCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.AssetsMintCall['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsRegisterCall {
	private readonly production: productionCalls.AssetsRegisterCall
	private readonly stage: stageCalls.AssetsRegisterCall
	private readonly dev: devCalls.AssetsRegisterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsRegisterCall(ctx, call)
		this.stage = new stageCalls.AssetsRegisterCall(ctx, call)
		this.dev = new devCalls.AssetsRegisterCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsRegisterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsRegisterCall['asV1'] {
		return this.production.asV1
	}
	get isV22(): productionCalls.AssetsRegisterCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.AssetsRegisterCall['asV22'] {
		return this.production.asV22
	}
	get isV26(): productionCalls.AssetsRegisterCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.AssetsRegisterCall['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageCalls.AssetsRegisterCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.AssetsRegisterCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.AssetsRegisterCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.AssetsRegisterCall['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsSetNonMintableCall {
	private readonly production: productionCalls.AssetsSetNonMintableCall
	private readonly stage: stageCalls.AssetsSetNonMintableCall
	private readonly dev: devCalls.AssetsSetNonMintableCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsSetNonMintableCall(ctx, call)
		this.stage = new stageCalls.AssetsSetNonMintableCall(ctx, call)
		this.dev = new devCalls.AssetsSetNonMintableCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsSetNonMintableCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsSetNonMintableCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AssetsSetNonMintableCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AssetsSetNonMintableCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.AssetsSetNonMintableCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.AssetsSetNonMintableCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.AssetsSetNonMintableCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.AssetsSetNonMintableCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.AssetsSetNonMintableCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.AssetsSetNonMintableCall['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsTransferCall {
	private readonly production: productionCalls.AssetsTransferCall
	private readonly stage: stageCalls.AssetsTransferCall
	private readonly dev: devCalls.AssetsTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsTransferCall(ctx, call)
		this.stage = new stageCalls.AssetsTransferCall(ctx, call)
		this.dev = new devCalls.AssetsTransferCall(ctx, call)
	}

	get isV1(): productionCalls.AssetsTransferCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AssetsTransferCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AssetsTransferCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AssetsTransferCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.AssetsTransferCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.AssetsTransferCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.AssetsTransferCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.AssetsTransferCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.AssetsTransferCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.AssetsTransferCall['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsUpdateBalanceCall {
	private readonly production: productionCalls.AssetsUpdateBalanceCall
	private readonly stage: stageCalls.AssetsUpdateBalanceCall
	private readonly dev: devCalls.AssetsUpdateBalanceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsUpdateBalanceCall(ctx, call)
		this.stage = new stageCalls.AssetsUpdateBalanceCall(ctx, call)
		this.dev = new devCalls.AssetsUpdateBalanceCall(ctx, call)
	}

	get isV50(): productionCalls.AssetsUpdateBalanceCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.AssetsUpdateBalanceCall['asV50'] {
		return this.production.asV50
	}
	get isV48Stage(): stageCalls.AssetsUpdateBalanceCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.AssetsUpdateBalanceCall['asV48'] {
		return this.stage.asV48
	}
	get isV60Dev(): devCalls.AssetsUpdateBalanceCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.AssetsUpdateBalanceCall['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsUpdateInfoCall {
	private readonly production: productionCalls.AssetsUpdateInfoCall
	private readonly stage: stageCalls.AssetsUpdateInfoCall
	private readonly dev: devCalls.AssetsUpdateInfoCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AssetsUpdateInfoCall(ctx, call)
		this.stage = new stageCalls.AssetsUpdateInfoCall(ctx, call)
		this.dev = new devCalls.AssetsUpdateInfoCall(ctx, call)
	}

	get isV53(): productionCalls.AssetsUpdateInfoCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.AssetsUpdateInfoCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.AssetsUpdateInfoCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.AssetsUpdateInfoCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.AssetsUpdateInfoCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.AssetsUpdateInfoCall['asV60'] {
		return this.dev.asV60
	}
}

export class AuthorshipSetUnclesCall {
	private readonly production: productionCalls.AuthorshipSetUnclesCall
	private readonly stage: stageCalls.AuthorshipSetUnclesCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.AuthorshipSetUnclesCall(ctx, call)
		this.stage = new stageCalls.AuthorshipSetUnclesCall(ctx, call)
	}

	get isV1(): productionCalls.AuthorshipSetUnclesCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.AuthorshipSetUnclesCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.AuthorshipSetUnclesCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.AuthorshipSetUnclesCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.AuthorshipSetUnclesCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.AuthorshipSetUnclesCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.AuthorshipSetUnclesCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.AuthorshipSetUnclesCall['asV42'] {
		return this.stage.asV42
	}
}

export class BabePlanConfigChangeCall {
	private readonly production: productionCalls.BabePlanConfigChangeCall
	private readonly stage: stageCalls.BabePlanConfigChangeCall
	private readonly dev: devCalls.BabePlanConfigChangeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BabePlanConfigChangeCall(ctx, call)
		this.stage = new stageCalls.BabePlanConfigChangeCall(ctx, call)
		this.dev = new devCalls.BabePlanConfigChangeCall(ctx, call)
	}

	get isV42(): productionCalls.BabePlanConfigChangeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BabePlanConfigChangeCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.BabePlanConfigChangeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BabePlanConfigChangeCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.BabePlanConfigChangeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BabePlanConfigChangeCall['asV60'] {
		return this.dev.asV60
	}
}

export class BabeReportEquivocationCall {
	private readonly production: productionCalls.BabeReportEquivocationCall
	private readonly stage: stageCalls.BabeReportEquivocationCall
	private readonly dev: devCalls.BabeReportEquivocationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BabeReportEquivocationCall(ctx, call)
		this.stage = new stageCalls.BabeReportEquivocationCall(ctx, call)
		this.dev = new devCalls.BabeReportEquivocationCall(ctx, call)
	}

	get isV1(): productionCalls.BabeReportEquivocationCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BabeReportEquivocationCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.BabeReportEquivocationCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BabeReportEquivocationCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.BabeReportEquivocationCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BabeReportEquivocationCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.BabeReportEquivocationCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BabeReportEquivocationCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.BabeReportEquivocationCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BabeReportEquivocationCall['asV60'] {
		return this.dev.asV60
	}
}

export class BabeReportEquivocationUnsignedCall {
	private readonly production: productionCalls.BabeReportEquivocationUnsignedCall
	private readonly stage: stageCalls.BabeReportEquivocationUnsignedCall
	private readonly dev: devCalls.BabeReportEquivocationUnsignedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BabeReportEquivocationUnsignedCall(ctx, call)
		this.stage = new stageCalls.BabeReportEquivocationUnsignedCall(ctx, call)
		this.dev = new devCalls.BabeReportEquivocationUnsignedCall(ctx, call)
	}

	get isV1(): productionCalls.BabeReportEquivocationUnsignedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BabeReportEquivocationUnsignedCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.BabeReportEquivocationUnsignedCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BabeReportEquivocationUnsignedCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.BabeReportEquivocationUnsignedCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BabeReportEquivocationUnsignedCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.BabeReportEquivocationUnsignedCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BabeReportEquivocationUnsignedCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.BabeReportEquivocationUnsignedCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BabeReportEquivocationUnsignedCall['asV60'] {
		return this.dev.asV60
	}
}

export class BagsListPutInFrontOfCall {
	private readonly production: productionCalls.BagsListPutInFrontOfCall
	private readonly stage: stageCalls.BagsListPutInFrontOfCall
	private readonly dev: devCalls.BagsListPutInFrontOfCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BagsListPutInFrontOfCall(ctx, call)
		this.stage = new stageCalls.BagsListPutInFrontOfCall(ctx, call)
		this.dev = new devCalls.BagsListPutInFrontOfCall(ctx, call)
	}

	get isV42(): productionCalls.BagsListPutInFrontOfCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BagsListPutInFrontOfCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.BagsListPutInFrontOfCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BagsListPutInFrontOfCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.BagsListPutInFrontOfCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BagsListPutInFrontOfCall['asV60'] {
		return this.dev.asV60
	}
}

export class BagsListRebagCall {
	private readonly production: productionCalls.BagsListRebagCall
	private readonly stage: stageCalls.BagsListRebagCall
	private readonly dev: devCalls.BagsListRebagCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BagsListRebagCall(ctx, call)
		this.stage = new stageCalls.BagsListRebagCall(ctx, call)
		this.dev = new devCalls.BagsListRebagCall(ctx, call)
	}

	get isV42(): productionCalls.BagsListRebagCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BagsListRebagCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.BagsListRebagCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BagsListRebagCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.BagsListRebagCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BagsListRebagCall['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesForceTransferCall {
	private readonly production: productionCalls.BalancesForceTransferCall
	private readonly stage: stageCalls.BalancesForceTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesForceTransferCall(ctx, call)
		this.stage = new stageCalls.BalancesForceTransferCall(ctx, call)
	}

	get isV1(): productionCalls.BalancesForceTransferCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BalancesForceTransferCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.BalancesForceTransferCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BalancesForceTransferCall['asV33'] {
		return this.stage.asV33
	}
}

export class BalancesForceUnreserveCall {
	private readonly production: productionCalls.BalancesForceUnreserveCall
	private readonly stage: stageCalls.BalancesForceUnreserveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesForceUnreserveCall(ctx, call)
		this.stage = new stageCalls.BalancesForceUnreserveCall(ctx, call)
	}

	get isV42(): productionCalls.BalancesForceUnreserveCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BalancesForceUnreserveCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.BalancesForceUnreserveCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BalancesForceUnreserveCall['asV42'] {
		return this.stage.asV42
	}
}

export class BalancesSetBalanceCall {
	private readonly production: productionCalls.BalancesSetBalanceCall
	private readonly stage: stageCalls.BalancesSetBalanceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesSetBalanceCall(ctx, call)
		this.stage = new stageCalls.BalancesSetBalanceCall(ctx, call)
	}

	get isV1(): productionCalls.BalancesSetBalanceCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BalancesSetBalanceCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.BalancesSetBalanceCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BalancesSetBalanceCall['asV33'] {
		return this.stage.asV33
	}
}

export class BalancesTransferCall {
	private readonly production: productionCalls.BalancesTransferCall
	private readonly stage: stageCalls.BalancesTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesTransferCall(ctx, call)
		this.stage = new stageCalls.BalancesTransferCall(ctx, call)
	}

	get isV1(): productionCalls.BalancesTransferCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BalancesTransferCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.BalancesTransferCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BalancesTransferCall['asV33'] {
		return this.stage.asV33
	}
}

export class BalancesTransferAllCall {
	private readonly production: productionCalls.BalancesTransferAllCall
	private readonly stage: stageCalls.BalancesTransferAllCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesTransferAllCall(ctx, call)
		this.stage = new stageCalls.BalancesTransferAllCall(ctx, call)
	}

	get isV42(): productionCalls.BalancesTransferAllCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BalancesTransferAllCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.BalancesTransferAllCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BalancesTransferAllCall['asV42'] {
		return this.stage.asV42
	}
}

export class BalancesTransferKeepAliveCall {
	private readonly production: productionCalls.BalancesTransferKeepAliveCall
	private readonly stage: stageCalls.BalancesTransferKeepAliveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BalancesTransferKeepAliveCall(ctx, call)
		this.stage = new stageCalls.BalancesTransferKeepAliveCall(ctx, call)
	}

	get isV1(): productionCalls.BalancesTransferKeepAliveCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BalancesTransferKeepAliveCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.BalancesTransferKeepAliveCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BalancesTransferKeepAliveCall['asV33'] {
		return this.stage.asV33
	}
}

export class BandAddRelayersCall {
	private readonly production: productionCalls.BandAddRelayersCall
	private readonly stage: stageCalls.BandAddRelayersCall
	private readonly dev: devCalls.BandAddRelayersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandAddRelayersCall(ctx, call)
		this.stage = new stageCalls.BandAddRelayersCall(ctx, call)
		this.dev = new devCalls.BandAddRelayersCall(ctx, call)
	}

	get isV45(): productionCalls.BandAddRelayersCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BandAddRelayersCall['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageCalls.BandAddRelayersCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.BandAddRelayersCall['asV44'] {
		return this.stage.asV44
	}
	get isV60Dev(): devCalls.BandAddRelayersCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BandAddRelayersCall['asV60'] {
		return this.dev.asV60
	}
}

export class BandForceRelayCall {
	private readonly production: productionCalls.BandForceRelayCall
	private readonly stage: stageCalls.BandForceRelayCall
	private readonly dev: devCalls.BandForceRelayCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandForceRelayCall(ctx, call)
		this.stage = new stageCalls.BandForceRelayCall(ctx, call)
		this.dev = new devCalls.BandForceRelayCall(ctx, call)
	}

	get isV45(): productionCalls.BandForceRelayCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BandForceRelayCall['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageCalls.BandForceRelayCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.BandForceRelayCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.BandForceRelayCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.BandForceRelayCall['asV45'] {
		return this.stage.asV45
	}
	get isV60Dev(): devCalls.BandForceRelayCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BandForceRelayCall['asV60'] {
		return this.dev.asV60
	}
}

export class BandRelayCall {
	private readonly production: productionCalls.BandRelayCall
	private readonly stage: stageCalls.BandRelayCall
	private readonly dev: devCalls.BandRelayCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandRelayCall(ctx, call)
		this.stage = new stageCalls.BandRelayCall(ctx, call)
		this.dev = new devCalls.BandRelayCall(ctx, call)
	}

	get isV45(): productionCalls.BandRelayCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BandRelayCall['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageCalls.BandRelayCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.BandRelayCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.BandRelayCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.BandRelayCall['asV45'] {
		return this.stage.asV45
	}
	get isV60Dev(): devCalls.BandRelayCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BandRelayCall['asV60'] {
		return this.dev.asV60
	}
}

export class BandRemoveRelayersCall {
	private readonly production: productionCalls.BandRemoveRelayersCall
	private readonly stage: stageCalls.BandRemoveRelayersCall
	private readonly dev: devCalls.BandRemoveRelayersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandRemoveRelayersCall(ctx, call)
		this.stage = new stageCalls.BandRemoveRelayersCall(ctx, call)
		this.dev = new devCalls.BandRemoveRelayersCall(ctx, call)
	}

	get isV45(): productionCalls.BandRemoveRelayersCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BandRemoveRelayersCall['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageCalls.BandRemoveRelayersCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.BandRemoveRelayersCall['asV44'] {
		return this.stage.asV44
	}
	get isV60Dev(): devCalls.BandRemoveRelayersCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BandRemoveRelayersCall['asV60'] {
		return this.dev.asV60
	}
}

export class BandSetDynamicFeeParametersCall {
	private readonly production: productionCalls.BandSetDynamicFeeParametersCall
	private readonly stage: stageCalls.BandSetDynamicFeeParametersCall
	private readonly dev: devCalls.BandSetDynamicFeeParametersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BandSetDynamicFeeParametersCall(ctx, call)
		this.stage = new stageCalls.BandSetDynamicFeeParametersCall(ctx, call)
		this.dev = new devCalls.BandSetDynamicFeeParametersCall(ctx, call)
	}

	get isV59(): productionCalls.BandSetDynamicFeeParametersCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.BandSetDynamicFeeParametersCall['asV59'] {
		return this.production.asV59
	}
	get isV59Stage(): stageCalls.BandSetDynamicFeeParametersCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.BandSetDynamicFeeParametersCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devCalls.BandSetDynamicFeeParametersCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BandSetDynamicFeeParametersCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigAddSignatoryCall {
	private readonly production: productionCalls.BridgeMultisigAddSignatoryCall
	private readonly stage: stageCalls.BridgeMultisigAddSignatoryCall
	private readonly dev: devCalls.BridgeMultisigAddSignatoryCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigAddSignatoryCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigAddSignatoryCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigAddSignatoryCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigAddSignatoryCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigAddSignatoryCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.BridgeMultisigAddSignatoryCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BridgeMultisigAddSignatoryCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.BridgeMultisigAddSignatoryCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeMultisigAddSignatoryCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigApproveAsMultiCall {
	private readonly production: productionCalls.BridgeMultisigApproveAsMultiCall
	private readonly stage: stageCalls.BridgeMultisigApproveAsMultiCall
	private readonly dev: devCalls.BridgeMultisigApproveAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigApproveAsMultiCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigApproveAsMultiCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigApproveAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigApproveAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigApproveAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.BridgeMultisigApproveAsMultiCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.BridgeMultisigApproveAsMultiCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.BridgeMultisigApproveAsMultiCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BridgeMultisigApproveAsMultiCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.BridgeMultisigApproveAsMultiCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeMultisigApproveAsMultiCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.BridgeMultisigApproveAsMultiCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeMultisigApproveAsMultiCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigAsMultiCall {
	private readonly production: productionCalls.BridgeMultisigAsMultiCall
	private readonly stage: stageCalls.BridgeMultisigAsMultiCall
	private readonly dev: devCalls.BridgeMultisigAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigAsMultiCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigAsMultiCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.BridgeMultisigAsMultiCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.BridgeMultisigAsMultiCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.BridgeMultisigAsMultiCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BridgeMultisigAsMultiCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.BridgeMultisigAsMultiCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeMultisigAsMultiCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.BridgeMultisigAsMultiCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeMultisigAsMultiCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigAsMultiThreshold1Call {
	private readonly production: productionCalls.BridgeMultisigAsMultiThreshold1Call
	private readonly stage: stageCalls.BridgeMultisigAsMultiThreshold1Call
	private readonly dev: devCalls.BridgeMultisigAsMultiThreshold1Call

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigAsMultiThreshold1Call(ctx, call)
		this.stage = new stageCalls.BridgeMultisigAsMultiThreshold1Call(ctx, call)
		this.dev = new devCalls.BridgeMultisigAsMultiThreshold1Call(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.BridgeMultisigAsMultiThreshold1Call['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.BridgeMultisigAsMultiThreshold1Call['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.BridgeMultisigAsMultiThreshold1Call['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.BridgeMultisigAsMultiThreshold1Call['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeMultisigAsMultiThreshold1Call['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigCancelAsMultiCall {
	private readonly production: productionCalls.BridgeMultisigCancelAsMultiCall
	private readonly stage: stageCalls.BridgeMultisigCancelAsMultiCall
	private readonly dev: devCalls.BridgeMultisigCancelAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigCancelAsMultiCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigCancelAsMultiCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigCancelAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigCancelAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigCancelAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.BridgeMultisigCancelAsMultiCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BridgeMultisigCancelAsMultiCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.BridgeMultisigCancelAsMultiCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeMultisigCancelAsMultiCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigRegisterMultisigCall {
	private readonly production: productionCalls.BridgeMultisigRegisterMultisigCall
	private readonly stage: stageCalls.BridgeMultisigRegisterMultisigCall
	private readonly dev: devCalls.BridgeMultisigRegisterMultisigCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigRegisterMultisigCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigRegisterMultisigCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigRegisterMultisigCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigRegisterMultisigCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigRegisterMultisigCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.BridgeMultisigRegisterMultisigCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.BridgeMultisigRegisterMultisigCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.BridgeMultisigRegisterMultisigCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BridgeMultisigRegisterMultisigCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.BridgeMultisigRegisterMultisigCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeMultisigRegisterMultisigCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigRemoveSignatoryCall {
	private readonly production: productionCalls.BridgeMultisigRemoveSignatoryCall
	private readonly stage: stageCalls.BridgeMultisigRemoveSignatoryCall
	private readonly dev: devCalls.BridgeMultisigRemoveSignatoryCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.BridgeMultisigRemoveSignatoryCall(ctx, call)
		this.stage = new stageCalls.BridgeMultisigRemoveSignatoryCall(ctx, call)
		this.dev = new devCalls.BridgeMultisigRemoveSignatoryCall(ctx, call)
	}

	get isV1(): productionCalls.BridgeMultisigRemoveSignatoryCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.BridgeMultisigRemoveSignatoryCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.BridgeMultisigRemoveSignatoryCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.BridgeMultisigRemoveSignatoryCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.BridgeMultisigRemoveSignatoryCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeMultisigRemoveSignatoryCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformCreatePollCall {
	private readonly production: productionCalls.CeresGovernancePlatformCreatePollCall
	private readonly stage: stageCalls.CeresGovernancePlatformCreatePollCall
	private readonly dev: devCalls.CeresGovernancePlatformCreatePollCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresGovernancePlatformCreatePollCall(ctx, call)
		this.stage = new stageCalls.CeresGovernancePlatformCreatePollCall(ctx, call)
		this.dev = new devCalls.CeresGovernancePlatformCreatePollCall(ctx, call)
	}

	get isV26(): productionCalls.CeresGovernancePlatformCreatePollCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresGovernancePlatformCreatePollCall['asV26'] {
		return this.production.asV26
	}
	get isV37(): productionCalls.CeresGovernancePlatformCreatePollCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresGovernancePlatformCreatePollCall['asV37'] {
		return this.production.asV37
	}
	get isV33Stage(): stageCalls.CeresGovernancePlatformCreatePollCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresGovernancePlatformCreatePollCall['asV33'] {
		return this.stage.asV33
	}
	get isV37Stage(): stageCalls.CeresGovernancePlatformCreatePollCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CeresGovernancePlatformCreatePollCall['asV37'] {
		return this.stage.asV37
	}
	get isV60Dev(): devCalls.CeresGovernancePlatformCreatePollCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresGovernancePlatformCreatePollCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformVoteCall {
	private readonly production: productionCalls.CeresGovernancePlatformVoteCall
	private readonly stage: stageCalls.CeresGovernancePlatformVoteCall
	private readonly dev: devCalls.CeresGovernancePlatformVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresGovernancePlatformVoteCall(ctx, call)
		this.stage = new stageCalls.CeresGovernancePlatformVoteCall(ctx, call)
		this.dev = new devCalls.CeresGovernancePlatformVoteCall(ctx, call)
	}

	get isV26(): productionCalls.CeresGovernancePlatformVoteCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresGovernancePlatformVoteCall['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageCalls.CeresGovernancePlatformVoteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresGovernancePlatformVoteCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresGovernancePlatformVoteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresGovernancePlatformVoteCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformWithdrawCall {
	private readonly production: productionCalls.CeresGovernancePlatformWithdrawCall
	private readonly stage: stageCalls.CeresGovernancePlatformWithdrawCall
	private readonly dev: devCalls.CeresGovernancePlatformWithdrawCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresGovernancePlatformWithdrawCall(ctx, call)
		this.stage = new stageCalls.CeresGovernancePlatformWithdrawCall(ctx, call)
		this.dev = new devCalls.CeresGovernancePlatformWithdrawCall(ctx, call)
	}

	get isV26(): productionCalls.CeresGovernancePlatformWithdrawCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresGovernancePlatformWithdrawCall['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageCalls.CeresGovernancePlatformWithdrawCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresGovernancePlatformWithdrawCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresGovernancePlatformWithdrawCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresGovernancePlatformWithdrawCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadAddWhitelistedContributorCall {
	private readonly production: productionCalls.CeresLaunchpadAddWhitelistedContributorCall
	private readonly stage: stageCalls.CeresLaunchpadAddWhitelistedContributorCall
	private readonly dev: devCalls.CeresLaunchpadAddWhitelistedContributorCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadAddWhitelistedContributorCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadAddWhitelistedContributorCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadAddWhitelistedContributorCall(ctx, call)
	}

	get isV33(): productionCalls.CeresLaunchpadAddWhitelistedContributorCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadAddWhitelistedContributorCall['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageCalls.CeresLaunchpadAddWhitelistedContributorCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadAddWhitelistedContributorCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresLaunchpadAddWhitelistedContributorCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadAddWhitelistedContributorCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadAddWhitelistedIloOrganizerCall {
	private readonly production: productionCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall
	private readonly stage: stageCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall
	private readonly dev: devCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall(ctx, call)
	}

	get isV33(): productionCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadAddWhitelistedIloOrganizerCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadChangeCeresBurnFeeCall {
	private readonly production: productionCalls.CeresLaunchpadChangeCeresBurnFeeCall
	private readonly stage: stageCalls.CeresLaunchpadChangeCeresBurnFeeCall
	private readonly dev: devCalls.CeresLaunchpadChangeCeresBurnFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadChangeCeresBurnFeeCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadChangeCeresBurnFeeCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadChangeCeresBurnFeeCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadChangeCeresBurnFeeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadChangeCeresBurnFeeCall['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageCalls.CeresLaunchpadChangeCeresBurnFeeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadChangeCeresBurnFeeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresLaunchpadChangeCeresBurnFeeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadChangeCeresBurnFeeCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadChangeCeresContributionFeeCall {
	private readonly production: productionCalls.CeresLaunchpadChangeCeresContributionFeeCall
	private readonly stage: stageCalls.CeresLaunchpadChangeCeresContributionFeeCall
	private readonly dev: devCalls.CeresLaunchpadChangeCeresContributionFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadChangeCeresContributionFeeCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadChangeCeresContributionFeeCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadChangeCeresContributionFeeCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadChangeCeresContributionFeeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadChangeCeresContributionFeeCall['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageCalls.CeresLaunchpadChangeCeresContributionFeeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadChangeCeresContributionFeeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresLaunchpadChangeCeresContributionFeeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadChangeCeresContributionFeeCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadChangeFeePercentForRaisedFundsCall {
	private readonly production: productionCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall
	private readonly stage: stageCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall
	private readonly dev: devCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall(ctx, call)
	}

	get isV47(): productionCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadChangeFeePercentForRaisedFundsCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadClaimCall {
	private readonly production: productionCalls.CeresLaunchpadClaimCall
	private readonly stage: stageCalls.CeresLaunchpadClaimCall
	private readonly dev: devCalls.CeresLaunchpadClaimCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadClaimCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadClaimCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadClaimCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadClaimCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadClaimCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadClaimCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadClaimCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CeresLaunchpadClaimCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadClaimCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.CeresLaunchpadClaimCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresLaunchpadClaimCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.CeresLaunchpadClaimCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadClaimCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadClaimLpTokensCall {
	private readonly production: productionCalls.CeresLaunchpadClaimLpTokensCall
	private readonly stage: stageCalls.CeresLaunchpadClaimLpTokensCall
	private readonly dev: devCalls.CeresLaunchpadClaimLpTokensCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadClaimLpTokensCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadClaimLpTokensCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadClaimLpTokensCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadClaimLpTokensCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadClaimLpTokensCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadClaimLpTokensCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadClaimLpTokensCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CeresLaunchpadClaimLpTokensCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadClaimLpTokensCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.CeresLaunchpadClaimLpTokensCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresLaunchpadClaimLpTokensCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.CeresLaunchpadClaimLpTokensCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadClaimLpTokensCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadClaimPswapRewardsCall {
	private readonly production: productionCalls.CeresLaunchpadClaimPswapRewardsCall
	private readonly stage: stageCalls.CeresLaunchpadClaimPswapRewardsCall
	private readonly dev: devCalls.CeresLaunchpadClaimPswapRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadClaimPswapRewardsCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadClaimPswapRewardsCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadClaimPswapRewardsCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadClaimPswapRewardsCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadClaimPswapRewardsCall['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageCalls.CeresLaunchpadClaimPswapRewardsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadClaimPswapRewardsCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresLaunchpadClaimPswapRewardsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadClaimPswapRewardsCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadContributeCall {
	private readonly production: productionCalls.CeresLaunchpadContributeCall
	private readonly stage: stageCalls.CeresLaunchpadContributeCall
	private readonly dev: devCalls.CeresLaunchpadContributeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadContributeCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadContributeCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadContributeCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadContributeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadContributeCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadContributeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadContributeCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CeresLaunchpadContributeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadContributeCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.CeresLaunchpadContributeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresLaunchpadContributeCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.CeresLaunchpadContributeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadContributeCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadCreateIloCall {
	private readonly production: productionCalls.CeresLaunchpadCreateIloCall
	private readonly stage: stageCalls.CeresLaunchpadCreateIloCall
	private readonly dev: devCalls.CeresLaunchpadCreateIloCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadCreateIloCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadCreateIloCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadCreateIloCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadCreateIloCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadCreateIloCall['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionCalls.CeresLaunchpadCreateIloCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadCreateIloCall['asV33'] {
		return this.production.asV33
	}
	get isV37(): productionCalls.CeresLaunchpadCreateIloCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresLaunchpadCreateIloCall['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionCalls.CeresLaunchpadCreateIloCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadCreateIloCall['asV42'] {
		return this.production.asV42
	}
	get isV47(): productionCalls.CeresLaunchpadCreateIloCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.CeresLaunchpadCreateIloCall['asV47'] {
		return this.production.asV47
	}
	get isV33Stage(): stageCalls.CeresLaunchpadCreateIloCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadCreateIloCall['asV33'] {
		return this.stage.asV33
	}
	get isV37Stage(): stageCalls.CeresLaunchpadCreateIloCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CeresLaunchpadCreateIloCall['asV37'] {
		return this.stage.asV37
	}
	get isV42Stage(): stageCalls.CeresLaunchpadCreateIloCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresLaunchpadCreateIloCall['asV42'] {
		return this.stage.asV42
	}
	get isV47Stage(): stageCalls.CeresLaunchpadCreateIloCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.CeresLaunchpadCreateIloCall['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devCalls.CeresLaunchpadCreateIloCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadCreateIloCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadEmergencyWithdrawCall {
	private readonly production: productionCalls.CeresLaunchpadEmergencyWithdrawCall
	private readonly stage: stageCalls.CeresLaunchpadEmergencyWithdrawCall
	private readonly dev: devCalls.CeresLaunchpadEmergencyWithdrawCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadEmergencyWithdrawCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadEmergencyWithdrawCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadEmergencyWithdrawCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadEmergencyWithdrawCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadEmergencyWithdrawCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadEmergencyWithdrawCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadEmergencyWithdrawCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CeresLaunchpadEmergencyWithdrawCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadEmergencyWithdrawCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.CeresLaunchpadEmergencyWithdrawCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresLaunchpadEmergencyWithdrawCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.CeresLaunchpadEmergencyWithdrawCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadEmergencyWithdrawCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadFinishIloCall {
	private readonly production: productionCalls.CeresLaunchpadFinishIloCall
	private readonly stage: stageCalls.CeresLaunchpadFinishIloCall
	private readonly dev: devCalls.CeresLaunchpadFinishIloCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadFinishIloCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadFinishIloCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadFinishIloCall(ctx, call)
	}

	get isV26(): productionCalls.CeresLaunchpadFinishIloCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresLaunchpadFinishIloCall['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionCalls.CeresLaunchpadFinishIloCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLaunchpadFinishIloCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CeresLaunchpadFinishIloCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadFinishIloCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.CeresLaunchpadFinishIloCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresLaunchpadFinishIloCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.CeresLaunchpadFinishIloCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadFinishIloCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadRemoveWhitelistedContributorCall {
	private readonly production: productionCalls.CeresLaunchpadRemoveWhitelistedContributorCall
	private readonly stage: stageCalls.CeresLaunchpadRemoveWhitelistedContributorCall
	private readonly dev: devCalls.CeresLaunchpadRemoveWhitelistedContributorCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadRemoveWhitelistedContributorCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadRemoveWhitelistedContributorCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadRemoveWhitelistedContributorCall(ctx, call)
	}

	get isV33(): productionCalls.CeresLaunchpadRemoveWhitelistedContributorCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadRemoveWhitelistedContributorCall['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageCalls.CeresLaunchpadRemoveWhitelistedContributorCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadRemoveWhitelistedContributorCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresLaunchpadRemoveWhitelistedContributorCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadRemoveWhitelistedContributorCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadRemoveWhitelistedIloOrganizerCall {
	private readonly production: productionCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall
	private readonly stage: stageCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall
	private readonly dev: devCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall(ctx, call)
		this.stage = new stageCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall(ctx, call)
		this.dev = new devCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall(ctx, call)
	}

	get isV33(): productionCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLaunchpadRemoveWhitelistedIloOrganizerCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerChangeCeresFeeCall {
	private readonly production: productionCalls.CeresLiquidityLockerChangeCeresFeeCall
	private readonly stage: stageCalls.CeresLiquidityLockerChangeCeresFeeCall
	private readonly dev: devCalls.CeresLiquidityLockerChangeCeresFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLiquidityLockerChangeCeresFeeCall(ctx, call)
		this.stage = new stageCalls.CeresLiquidityLockerChangeCeresFeeCall(ctx, call)
		this.dev = new devCalls.CeresLiquidityLockerChangeCeresFeeCall(ctx, call)
	}

	get isV22(): productionCalls.CeresLiquidityLockerChangeCeresFeeCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.CeresLiquidityLockerChangeCeresFeeCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.CeresLiquidityLockerChangeCeresFeeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLiquidityLockerChangeCeresFeeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresLiquidityLockerChangeCeresFeeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLiquidityLockerChangeCeresFeeCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerLockLiquidityCall {
	private readonly production: productionCalls.CeresLiquidityLockerLockLiquidityCall
	private readonly stage: stageCalls.CeresLiquidityLockerLockLiquidityCall
	private readonly dev: devCalls.CeresLiquidityLockerLockLiquidityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresLiquidityLockerLockLiquidityCall(ctx, call)
		this.stage = new stageCalls.CeresLiquidityLockerLockLiquidityCall(ctx, call)
		this.dev = new devCalls.CeresLiquidityLockerLockLiquidityCall(ctx, call)
	}

	get isV22(): productionCalls.CeresLiquidityLockerLockLiquidityCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.CeresLiquidityLockerLockLiquidityCall['asV22'] {
		return this.production.asV22
	}
	get isV37(): productionCalls.CeresLiquidityLockerLockLiquidityCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresLiquidityLockerLockLiquidityCall['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionCalls.CeresLiquidityLockerLockLiquidityCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresLiquidityLockerLockLiquidityCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CeresLiquidityLockerLockLiquidityCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresLiquidityLockerLockLiquidityCall['asV33'] {
		return this.stage.asV33
	}
	get isV37Stage(): stageCalls.CeresLiquidityLockerLockLiquidityCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CeresLiquidityLockerLockLiquidityCall['asV37'] {
		return this.stage.asV37
	}
	get isV42Stage(): stageCalls.CeresLiquidityLockerLockLiquidityCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresLiquidityLockerLockLiquidityCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.CeresLiquidityLockerLockLiquidityCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresLiquidityLockerLockLiquidityCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingChangeRewardsRemainingCall {
	private readonly production: productionCalls.CeresStakingChangeRewardsRemainingCall
	private readonly stage: stageCalls.CeresStakingChangeRewardsRemainingCall
	private readonly dev: devCalls.CeresStakingChangeRewardsRemainingCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresStakingChangeRewardsRemainingCall(ctx, call)
		this.stage = new stageCalls.CeresStakingChangeRewardsRemainingCall(ctx, call)
		this.dev = new devCalls.CeresStakingChangeRewardsRemainingCall(ctx, call)
	}

	get isV26(): productionCalls.CeresStakingChangeRewardsRemainingCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresStakingChangeRewardsRemainingCall['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageCalls.CeresStakingChangeRewardsRemainingCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresStakingChangeRewardsRemainingCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresStakingChangeRewardsRemainingCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresStakingChangeRewardsRemainingCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingDepositCall {
	private readonly production: productionCalls.CeresStakingDepositCall
	private readonly stage: stageCalls.CeresStakingDepositCall
	private readonly dev: devCalls.CeresStakingDepositCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresStakingDepositCall(ctx, call)
		this.stage = new stageCalls.CeresStakingDepositCall(ctx, call)
		this.dev = new devCalls.CeresStakingDepositCall(ctx, call)
	}

	get isV19(): productionCalls.CeresStakingDepositCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.CeresStakingDepositCall['asV19'] {
		return this.production.asV19
	}
	get isV33Stage(): stageCalls.CeresStakingDepositCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresStakingDepositCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresStakingDepositCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresStakingDepositCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingWithdrawCall {
	private readonly production: productionCalls.CeresStakingWithdrawCall
	private readonly stage: stageCalls.CeresStakingWithdrawCall
	private readonly dev: devCalls.CeresStakingWithdrawCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresStakingWithdrawCall(ctx, call)
		this.stage = new stageCalls.CeresStakingWithdrawCall(ctx, call)
		this.dev = new devCalls.CeresStakingWithdrawCall(ctx, call)
	}

	get isV19(): productionCalls.CeresStakingWithdrawCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.CeresStakingWithdrawCall['asV19'] {
		return this.production.asV19
	}
	get isV33Stage(): stageCalls.CeresStakingWithdrawCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresStakingWithdrawCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresStakingWithdrawCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresStakingWithdrawCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerChangeFeeCall {
	private readonly production: productionCalls.CeresTokenLockerChangeFeeCall
	private readonly stage: stageCalls.CeresTokenLockerChangeFeeCall
	private readonly dev: devCalls.CeresTokenLockerChangeFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresTokenLockerChangeFeeCall(ctx, call)
		this.stage = new stageCalls.CeresTokenLockerChangeFeeCall(ctx, call)
		this.dev = new devCalls.CeresTokenLockerChangeFeeCall(ctx, call)
	}

	get isV26(): productionCalls.CeresTokenLockerChangeFeeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresTokenLockerChangeFeeCall['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageCalls.CeresTokenLockerChangeFeeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresTokenLockerChangeFeeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CeresTokenLockerChangeFeeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresTokenLockerChangeFeeCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerLockTokensCall {
	private readonly production: productionCalls.CeresTokenLockerLockTokensCall
	private readonly stage: stageCalls.CeresTokenLockerLockTokensCall
	private readonly dev: devCalls.CeresTokenLockerLockTokensCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresTokenLockerLockTokensCall(ctx, call)
		this.stage = new stageCalls.CeresTokenLockerLockTokensCall(ctx, call)
		this.dev = new devCalls.CeresTokenLockerLockTokensCall(ctx, call)
	}

	get isV26(): productionCalls.CeresTokenLockerLockTokensCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresTokenLockerLockTokensCall['asV26'] {
		return this.production.asV26
	}
	get isV37(): productionCalls.CeresTokenLockerLockTokensCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresTokenLockerLockTokensCall['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionCalls.CeresTokenLockerLockTokensCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresTokenLockerLockTokensCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CeresTokenLockerLockTokensCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresTokenLockerLockTokensCall['asV33'] {
		return this.stage.asV33
	}
	get isV37Stage(): stageCalls.CeresTokenLockerLockTokensCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CeresTokenLockerLockTokensCall['asV37'] {
		return this.stage.asV37
	}
	get isV42Stage(): stageCalls.CeresTokenLockerLockTokensCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresTokenLockerLockTokensCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.CeresTokenLockerLockTokensCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresTokenLockerLockTokensCall['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerWithdrawTokensCall {
	private readonly production: productionCalls.CeresTokenLockerWithdrawTokensCall
	private readonly stage: stageCalls.CeresTokenLockerWithdrawTokensCall
	private readonly dev: devCalls.CeresTokenLockerWithdrawTokensCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CeresTokenLockerWithdrawTokensCall(ctx, call)
		this.stage = new stageCalls.CeresTokenLockerWithdrawTokensCall(ctx, call)
		this.dev = new devCalls.CeresTokenLockerWithdrawTokensCall(ctx, call)
	}

	get isV26(): productionCalls.CeresTokenLockerWithdrawTokensCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CeresTokenLockerWithdrawTokensCall['asV26'] {
		return this.production.asV26
	}
	get isV37(): productionCalls.CeresTokenLockerWithdrawTokensCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CeresTokenLockerWithdrawTokensCall['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionCalls.CeresTokenLockerWithdrawTokensCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CeresTokenLockerWithdrawTokensCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CeresTokenLockerWithdrawTokensCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CeresTokenLockerWithdrawTokensCall['asV33'] {
		return this.stage.asV33
	}
	get isV37Stage(): stageCalls.CeresTokenLockerWithdrawTokensCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CeresTokenLockerWithdrawTokensCall['asV37'] {
		return this.stage.asV37
	}
	get isV42Stage(): stageCalls.CeresTokenLockerWithdrawTokensCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CeresTokenLockerWithdrawTokensCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.CeresTokenLockerWithdrawTokensCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CeresTokenLockerWithdrawTokensCall['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilCloseCall {
	private readonly production: productionCalls.CouncilCloseCall
	private readonly stage: stageCalls.CouncilCloseCall
	private readonly dev: devCalls.CouncilCloseCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilCloseCall(ctx, call)
		this.stage = new stageCalls.CouncilCloseCall(ctx, call)
		this.dev = new devCalls.CouncilCloseCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilCloseCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilCloseCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.CouncilCloseCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.CouncilCloseCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.CouncilCloseCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CouncilCloseCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.CouncilCloseCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.CouncilCloseCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.CouncilCloseCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CouncilCloseCall['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilCloseOldWeightCall {
	private readonly production: productionCalls.CouncilCloseOldWeightCall
	private readonly stage: stageCalls.CouncilCloseOldWeightCall
	private readonly dev: devCalls.CouncilCloseOldWeightCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilCloseOldWeightCall(ctx, call)
		this.stage = new stageCalls.CouncilCloseOldWeightCall(ctx, call)
		this.dev = new devCalls.CouncilCloseOldWeightCall(ctx, call)
	}

	get isV53(): productionCalls.CouncilCloseOldWeightCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.CouncilCloseOldWeightCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.CouncilCloseOldWeightCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.CouncilCloseOldWeightCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.CouncilCloseOldWeightCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CouncilCloseOldWeightCall['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilDisapproveProposalCall {
	private readonly production: productionCalls.CouncilDisapproveProposalCall
	private readonly stage: stageCalls.CouncilDisapproveProposalCall
	private readonly dev: devCalls.CouncilDisapproveProposalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilDisapproveProposalCall(ctx, call)
		this.stage = new stageCalls.CouncilDisapproveProposalCall(ctx, call)
		this.dev = new devCalls.CouncilDisapproveProposalCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilDisapproveProposalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilDisapproveProposalCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.CouncilDisapproveProposalCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CouncilDisapproveProposalCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CouncilDisapproveProposalCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CouncilDisapproveProposalCall['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilExecuteCall {
	private readonly production: productionCalls.CouncilExecuteCall
	private readonly stage: stageCalls.CouncilExecuteCall
	private readonly dev: devCalls.CouncilExecuteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilExecuteCall(ctx, call)
		this.stage = new stageCalls.CouncilExecuteCall(ctx, call)
		this.dev = new devCalls.CouncilExecuteCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilExecuteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilExecuteCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.CouncilExecuteCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.CouncilExecuteCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.CouncilExecuteCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.CouncilExecuteCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.CouncilExecuteCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.CouncilExecuteCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.CouncilExecuteCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.CouncilExecuteCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.CouncilExecuteCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.CouncilExecuteCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.CouncilExecuteCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CouncilExecuteCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.CouncilExecuteCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.CouncilExecuteCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.CouncilExecuteCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CouncilExecuteCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.CouncilExecuteCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.CouncilExecuteCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.CouncilExecuteCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CouncilExecuteCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.CouncilExecuteCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.CouncilExecuteCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.CouncilExecuteCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CouncilExecuteCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.CouncilExecuteCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.CouncilExecuteCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.CouncilExecuteCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.CouncilExecuteCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.CouncilExecuteCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.CouncilExecuteCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.CouncilExecuteCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.CouncilExecuteCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.CouncilExecuteCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.CouncilExecuteCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.CouncilExecuteCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.CouncilExecuteCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.CouncilExecuteCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.CouncilExecuteCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.CouncilExecuteCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.CouncilExecuteCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.CouncilExecuteCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.CouncilExecuteCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.CouncilExecuteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CouncilExecuteCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.CouncilExecuteCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.CouncilExecuteCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.CouncilExecuteCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CouncilExecuteCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.CouncilExecuteCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.CouncilExecuteCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.CouncilExecuteCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CouncilExecuteCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.CouncilExecuteCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.CouncilExecuteCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.CouncilExecuteCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.CouncilExecuteCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.CouncilExecuteCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.CouncilExecuteCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.CouncilExecuteCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.CouncilExecuteCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.CouncilExecuteCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.CouncilExecuteCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.CouncilExecuteCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.CouncilExecuteCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.CouncilExecuteCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.CouncilExecuteCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.CouncilExecuteCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.CouncilExecuteCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.CouncilExecuteCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.CouncilExecuteCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.CouncilExecuteCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.CouncilExecuteCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.CouncilExecuteCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.CouncilExecuteCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.CouncilExecuteCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.CouncilExecuteCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.CouncilExecuteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CouncilExecuteCall['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilProposeCall {
	private readonly production: productionCalls.CouncilProposeCall
	private readonly stage: stageCalls.CouncilProposeCall
	private readonly dev: devCalls.CouncilProposeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilProposeCall(ctx, call)
		this.stage = new stageCalls.CouncilProposeCall(ctx, call)
		this.dev = new devCalls.CouncilProposeCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilProposeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilProposeCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.CouncilProposeCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.CouncilProposeCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.CouncilProposeCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.CouncilProposeCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.CouncilProposeCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.CouncilProposeCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.CouncilProposeCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.CouncilProposeCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.CouncilProposeCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.CouncilProposeCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.CouncilProposeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.CouncilProposeCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.CouncilProposeCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.CouncilProposeCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.CouncilProposeCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.CouncilProposeCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.CouncilProposeCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.CouncilProposeCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.CouncilProposeCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.CouncilProposeCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.CouncilProposeCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.CouncilProposeCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.CouncilProposeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CouncilProposeCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.CouncilProposeCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.CouncilProposeCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.CouncilProposeCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.CouncilProposeCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.CouncilProposeCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.CouncilProposeCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.CouncilProposeCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.CouncilProposeCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.CouncilProposeCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.CouncilProposeCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.CouncilProposeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.CouncilProposeCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.CouncilProposeCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.CouncilProposeCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.CouncilProposeCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.CouncilProposeCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.CouncilProposeCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.CouncilProposeCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.CouncilProposeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CouncilProposeCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.CouncilProposeCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.CouncilProposeCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.CouncilProposeCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.CouncilProposeCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.CouncilProposeCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.CouncilProposeCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.CouncilProposeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CouncilProposeCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.CouncilProposeCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.CouncilProposeCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.CouncilProposeCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.CouncilProposeCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.CouncilProposeCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.CouncilProposeCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.CouncilProposeCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.CouncilProposeCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.CouncilProposeCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.CouncilProposeCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.CouncilProposeCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.CouncilProposeCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.CouncilProposeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.CouncilProposeCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.CouncilProposeCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.CouncilProposeCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.CouncilProposeCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.CouncilProposeCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.CouncilProposeCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.CouncilProposeCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.CouncilProposeCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.CouncilProposeCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.CouncilProposeCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.CouncilProposeCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.CouncilProposeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CouncilProposeCall['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilSetMembersCall {
	private readonly production: productionCalls.CouncilSetMembersCall
	private readonly stage: stageCalls.CouncilSetMembersCall
	private readonly dev: devCalls.CouncilSetMembersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilSetMembersCall(ctx, call)
		this.stage = new stageCalls.CouncilSetMembersCall(ctx, call)
		this.dev = new devCalls.CouncilSetMembersCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilSetMembersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilSetMembersCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.CouncilSetMembersCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CouncilSetMembersCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CouncilSetMembersCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CouncilSetMembersCall['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilVoteCall {
	private readonly production: productionCalls.CouncilVoteCall
	private readonly stage: stageCalls.CouncilVoteCall
	private readonly dev: devCalls.CouncilVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CouncilVoteCall(ctx, call)
		this.stage = new stageCalls.CouncilVoteCall(ctx, call)
		this.dev = new devCalls.CouncilVoteCall(ctx, call)
	}

	get isV1(): productionCalls.CouncilVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CouncilVoteCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.CouncilVoteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CouncilVoteCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.CouncilVoteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.CouncilVoteCall['asV60'] {
		return this.dev.asV60
	}
}

export class CurrenciesTransferCall {
	private readonly production: productionCalls.CurrenciesTransferCall
	private readonly stage: stageCalls.CurrenciesTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CurrenciesTransferCall(ctx, call)
		this.stage = new stageCalls.CurrenciesTransferCall(ctx, call)
	}

	get isV1(): productionCalls.CurrenciesTransferCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CurrenciesTransferCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.CurrenciesTransferCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CurrenciesTransferCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CurrenciesTransferCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CurrenciesTransferCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.CurrenciesTransferCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CurrenciesTransferCall['asV42'] {
		return this.stage.asV42
	}
}

export class CurrenciesTransferNativeCurrencyCall {
	private readonly production: productionCalls.CurrenciesTransferNativeCurrencyCall
	private readonly stage: stageCalls.CurrenciesTransferNativeCurrencyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CurrenciesTransferNativeCurrencyCall(ctx, call)
		this.stage = new stageCalls.CurrenciesTransferNativeCurrencyCall(ctx, call)
	}

	get isV1(): productionCalls.CurrenciesTransferNativeCurrencyCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CurrenciesTransferNativeCurrencyCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.CurrenciesTransferNativeCurrencyCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CurrenciesTransferNativeCurrencyCall['asV33'] {
		return this.stage.asV33
	}
}

export class CurrenciesUpdateBalanceCall {
	private readonly production: productionCalls.CurrenciesUpdateBalanceCall
	private readonly stage: stageCalls.CurrenciesUpdateBalanceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.CurrenciesUpdateBalanceCall(ctx, call)
		this.stage = new stageCalls.CurrenciesUpdateBalanceCall(ctx, call)
	}

	get isV1(): productionCalls.CurrenciesUpdateBalanceCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.CurrenciesUpdateBalanceCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.CurrenciesUpdateBalanceCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.CurrenciesUpdateBalanceCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.CurrenciesUpdateBalanceCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.CurrenciesUpdateBalanceCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.CurrenciesUpdateBalanceCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.CurrenciesUpdateBalanceCall['asV42'] {
		return this.stage.asV42
	}
}

export class DexapiSwapCall {
	private readonly production: productionCalls.DexapiSwapCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DexapiSwapCall(ctx, call)
	}

	get isV19(): productionCalls.DexapiSwapCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.DexapiSwapCall['asV19'] {
		return this.production.asV19
	}
}

export class DemeterFarmingPlatformAddPoolCall {
	private readonly production: productionCalls.DemeterFarmingPlatformAddPoolCall
	private readonly stage: stageCalls.DemeterFarmingPlatformAddPoolCall
	private readonly dev: devCalls.DemeterFarmingPlatformAddPoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformAddPoolCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformAddPoolCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformAddPoolCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformAddPoolCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformAddPoolCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformAddPoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformAddPoolCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformAddPoolCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformAddPoolCall['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformAddPoolCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformAddPoolCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformAddPoolCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformAddPoolCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformAddPoolCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformAddPoolCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformAddPoolCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformAddPoolCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformChangeInfoCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangeInfoCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangeInfoCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangeInfoCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangeInfoCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangeInfoCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangeInfoCall(ctx, call)
	}

	get isV35(): productionCalls.DemeterFarmingPlatformChangeInfoCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.DemeterFarmingPlatformChangeInfoCall['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangeInfoCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangeInfoCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformChangeInfoCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformChangeInfoCall['asV43'] {
		return this.production.asV43
	}
	get isV35Stage(): stageCalls.DemeterFarmingPlatformChangeInfoCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.DemeterFarmingPlatformChangeInfoCall['asV35'] {
		return this.stage.asV35
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformChangeInfoCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformChangeInfoCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformChangeInfoCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformChangeInfoCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformChangeInfoCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformChangeInfoCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformChangePoolDepositFeeCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangePoolDepositFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangePoolDepositFeeCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformChangePoolDepositFeeCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformChangePoolMultiplierCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangePoolMultiplierCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangePoolMultiplierCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformChangePoolMultiplierCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformChangePoolMultiplierCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformChangeTokenInfoCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangeTokenInfoCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangeTokenInfoCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangeTokenInfoCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangeTokenInfoCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangeTokenInfoCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangeTokenInfoCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformChangeTokenInfoCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformChangeTokenInfoCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangeTokenInfoCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangeTokenInfoCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformChangeTokenInfoCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformChangeTokenInfoCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformChangeTokenInfoCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformChangeTokenInfoCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformChangeTokenInfoCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformChangeTokenInfoCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformChangeTotalTokensCall {
	private readonly production: productionCalls.DemeterFarmingPlatformChangeTotalTokensCall
	private readonly stage: stageCalls.DemeterFarmingPlatformChangeTotalTokensCall
	private readonly dev: devCalls.DemeterFarmingPlatformChangeTotalTokensCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformChangeTotalTokensCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformChangeTotalTokensCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformChangeTotalTokensCall(ctx, call)
	}

	get isV35(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV43'] {
		return this.production.asV43
	}
	get isV35Stage(): stageCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV35'] {
		return this.stage.asV35
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformChangeTotalTokensCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformChangeTotalTokensCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformDepositCall {
	private readonly production: productionCalls.DemeterFarmingPlatformDepositCall
	private readonly stage: stageCalls.DemeterFarmingPlatformDepositCall
	private readonly dev: devCalls.DemeterFarmingPlatformDepositCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformDepositCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformDepositCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformDepositCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformDepositCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformDepositCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformDepositCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformDepositCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformDepositCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformDepositCall['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformDepositCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformDepositCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformDepositCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformDepositCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformDepositCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformDepositCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformDepositCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformDepositCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformGetRewardsCall {
	private readonly production: productionCalls.DemeterFarmingPlatformGetRewardsCall
	private readonly stage: stageCalls.DemeterFarmingPlatformGetRewardsCall
	private readonly dev: devCalls.DemeterFarmingPlatformGetRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformGetRewardsCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformGetRewardsCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformGetRewardsCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformGetRewardsCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformGetRewardsCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformGetRewardsCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformGetRewardsCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformGetRewardsCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformGetRewardsCall['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformGetRewardsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformGetRewardsCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformGetRewardsCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformGetRewardsCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformGetRewardsCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformGetRewardsCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformGetRewardsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformGetRewardsCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformRegisterTokenCall {
	private readonly production: productionCalls.DemeterFarmingPlatformRegisterTokenCall
	private readonly stage: stageCalls.DemeterFarmingPlatformRegisterTokenCall
	private readonly dev: devCalls.DemeterFarmingPlatformRegisterTokenCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformRegisterTokenCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformRegisterTokenCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformRegisterTokenCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformRegisterTokenCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformRegisterTokenCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformRegisterTokenCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformRegisterTokenCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformRegisterTokenCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformRegisterTokenCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformRegisterTokenCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformRegisterTokenCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformRegisterTokenCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformRegisterTokenCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformRemovePoolCall {
	private readonly production: productionCalls.DemeterFarmingPlatformRemovePoolCall
	private readonly stage: stageCalls.DemeterFarmingPlatformRemovePoolCall
	private readonly dev: devCalls.DemeterFarmingPlatformRemovePoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformRemovePoolCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformRemovePoolCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformRemovePoolCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformRemovePoolCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformRemovePoolCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformRemovePoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformRemovePoolCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformRemovePoolCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformRemovePoolCall['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformRemovePoolCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformRemovePoolCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformRemovePoolCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformRemovePoolCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformRemovePoolCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformRemovePoolCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformRemovePoolCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformRemovePoolCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformWithdrawCall {
	private readonly production: productionCalls.DemeterFarmingPlatformWithdrawCall
	private readonly stage: stageCalls.DemeterFarmingPlatformWithdrawCall
	private readonly dev: devCalls.DemeterFarmingPlatformWithdrawCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemeterFarmingPlatformWithdrawCall(ctx, call)
		this.stage = new stageCalls.DemeterFarmingPlatformWithdrawCall(ctx, call)
		this.dev = new devCalls.DemeterFarmingPlatformWithdrawCall(ctx, call)
	}

	get isV33(): productionCalls.DemeterFarmingPlatformWithdrawCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.DemeterFarmingPlatformWithdrawCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.DemeterFarmingPlatformWithdrawCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemeterFarmingPlatformWithdrawCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.DemeterFarmingPlatformWithdrawCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.DemeterFarmingPlatformWithdrawCall['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageCalls.DemeterFarmingPlatformWithdrawCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemeterFarmingPlatformWithdrawCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemeterFarmingPlatformWithdrawCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemeterFarmingPlatformWithdrawCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.DemeterFarmingPlatformWithdrawCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.DemeterFarmingPlatformWithdrawCall['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devCalls.DemeterFarmingPlatformWithdrawCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemeterFarmingPlatformWithdrawCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyBlacklistCall {
	private readonly production: productionCalls.DemocracyBlacklistCall
	private readonly stage: stageCalls.DemocracyBlacklistCall
	private readonly dev: devCalls.DemocracyBlacklistCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyBlacklistCall(ctx, call)
		this.stage = new stageCalls.DemocracyBlacklistCall(ctx, call)
		this.dev = new devCalls.DemocracyBlacklistCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyBlacklistCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyBlacklistCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyBlacklistCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyBlacklistCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyBlacklistCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyBlacklistCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyCancelProposalCall {
	private readonly production: productionCalls.DemocracyCancelProposalCall
	private readonly stage: stageCalls.DemocracyCancelProposalCall
	private readonly dev: devCalls.DemocracyCancelProposalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyCancelProposalCall(ctx, call)
		this.stage = new stageCalls.DemocracyCancelProposalCall(ctx, call)
		this.dev = new devCalls.DemocracyCancelProposalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyCancelProposalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyCancelProposalCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyCancelProposalCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyCancelProposalCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyCancelProposalCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyCancelProposalCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyCancelQueuedCall {
	private readonly production: productionCalls.DemocracyCancelQueuedCall
	private readonly stage: stageCalls.DemocracyCancelQueuedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyCancelQueuedCall(ctx, call)
		this.stage = new stageCalls.DemocracyCancelQueuedCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyCancelQueuedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyCancelQueuedCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyCancelQueuedCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyCancelQueuedCall['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyCancelReferendumCall {
	private readonly production: productionCalls.DemocracyCancelReferendumCall
	private readonly stage: stageCalls.DemocracyCancelReferendumCall
	private readonly dev: devCalls.DemocracyCancelReferendumCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyCancelReferendumCall(ctx, call)
		this.stage = new stageCalls.DemocracyCancelReferendumCall(ctx, call)
		this.dev = new devCalls.DemocracyCancelReferendumCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyCancelReferendumCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyCancelReferendumCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyCancelReferendumCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyCancelReferendumCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyCancelReferendumCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyCancelReferendumCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyClearPublicProposalsCall {
	private readonly production: productionCalls.DemocracyClearPublicProposalsCall
	private readonly stage: stageCalls.DemocracyClearPublicProposalsCall
	private readonly dev: devCalls.DemocracyClearPublicProposalsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyClearPublicProposalsCall(ctx, call)
		this.stage = new stageCalls.DemocracyClearPublicProposalsCall(ctx, call)
		this.dev = new devCalls.DemocracyClearPublicProposalsCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyClearPublicProposalsCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyClearPublicProposalsCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyClearPublicProposalsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyClearPublicProposalsCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyClearPublicProposalsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyClearPublicProposalsCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyDelegateCall {
	private readonly production: productionCalls.DemocracyDelegateCall
	private readonly stage: stageCalls.DemocracyDelegateCall
	private readonly dev: devCalls.DemocracyDelegateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyDelegateCall(ctx, call)
		this.stage = new stageCalls.DemocracyDelegateCall(ctx, call)
		this.dev = new devCalls.DemocracyDelegateCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyDelegateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyDelegateCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyDelegateCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyDelegateCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyDelegateCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyDelegateCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyEmergencyCancelCall {
	private readonly production: productionCalls.DemocracyEmergencyCancelCall
	private readonly stage: stageCalls.DemocracyEmergencyCancelCall
	private readonly dev: devCalls.DemocracyEmergencyCancelCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyEmergencyCancelCall(ctx, call)
		this.stage = new stageCalls.DemocracyEmergencyCancelCall(ctx, call)
		this.dev = new devCalls.DemocracyEmergencyCancelCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyEmergencyCancelCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyEmergencyCancelCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyEmergencyCancelCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyEmergencyCancelCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyEmergencyCancelCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyEmergencyCancelCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyEnactProposalCall {
	private readonly production: productionCalls.DemocracyEnactProposalCall
	private readonly stage: stageCalls.DemocracyEnactProposalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyEnactProposalCall(ctx, call)
		this.stage = new stageCalls.DemocracyEnactProposalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyEnactProposalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyEnactProposalCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyEnactProposalCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyEnactProposalCall['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyExternalProposeCall {
	private readonly production: productionCalls.DemocracyExternalProposeCall
	private readonly stage: stageCalls.DemocracyExternalProposeCall
	private readonly dev: devCalls.DemocracyExternalProposeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyExternalProposeCall(ctx, call)
		this.stage = new stageCalls.DemocracyExternalProposeCall(ctx, call)
		this.dev = new devCalls.DemocracyExternalProposeCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyExternalProposeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyExternalProposeCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracyExternalProposeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracyExternalProposeCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.DemocracyExternalProposeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyExternalProposeCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.DemocracyExternalProposeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.DemocracyExternalProposeCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.DemocracyExternalProposeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyExternalProposeCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyExternalProposeDefaultCall {
	private readonly production: productionCalls.DemocracyExternalProposeDefaultCall
	private readonly stage: stageCalls.DemocracyExternalProposeDefaultCall
	private readonly dev: devCalls.DemocracyExternalProposeDefaultCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyExternalProposeDefaultCall(ctx, call)
		this.stage = new stageCalls.DemocracyExternalProposeDefaultCall(ctx, call)
		this.dev = new devCalls.DemocracyExternalProposeDefaultCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyExternalProposeDefaultCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyExternalProposeDefaultCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracyExternalProposeDefaultCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracyExternalProposeDefaultCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.DemocracyExternalProposeDefaultCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyExternalProposeDefaultCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.DemocracyExternalProposeDefaultCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.DemocracyExternalProposeDefaultCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.DemocracyExternalProposeDefaultCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyExternalProposeDefaultCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyExternalProposeMajorityCall {
	private readonly production: productionCalls.DemocracyExternalProposeMajorityCall
	private readonly stage: stageCalls.DemocracyExternalProposeMajorityCall
	private readonly dev: devCalls.DemocracyExternalProposeMajorityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyExternalProposeMajorityCall(ctx, call)
		this.stage = new stageCalls.DemocracyExternalProposeMajorityCall(ctx, call)
		this.dev = new devCalls.DemocracyExternalProposeMajorityCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyExternalProposeMajorityCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyExternalProposeMajorityCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracyExternalProposeMajorityCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracyExternalProposeMajorityCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.DemocracyExternalProposeMajorityCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyExternalProposeMajorityCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.DemocracyExternalProposeMajorityCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.DemocracyExternalProposeMajorityCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.DemocracyExternalProposeMajorityCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyExternalProposeMajorityCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyFastTrackCall {
	private readonly production: productionCalls.DemocracyFastTrackCall
	private readonly stage: stageCalls.DemocracyFastTrackCall
	private readonly dev: devCalls.DemocracyFastTrackCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyFastTrackCall(ctx, call)
		this.stage = new stageCalls.DemocracyFastTrackCall(ctx, call)
		this.dev = new devCalls.DemocracyFastTrackCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyFastTrackCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyFastTrackCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyFastTrackCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyFastTrackCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyFastTrackCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyFastTrackCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyNoteImminentPreimageCall {
	private readonly production: productionCalls.DemocracyNoteImminentPreimageCall
	private readonly stage: stageCalls.DemocracyNoteImminentPreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyNoteImminentPreimageCall(ctx, call)
		this.stage = new stageCalls.DemocracyNoteImminentPreimageCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyNoteImminentPreimageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyNoteImminentPreimageCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyNoteImminentPreimageCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyNoteImminentPreimageCall['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyNoteImminentPreimageOperationalCall {
	private readonly production: productionCalls.DemocracyNoteImminentPreimageOperationalCall
	private readonly stage: stageCalls.DemocracyNoteImminentPreimageOperationalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyNoteImminentPreimageOperationalCall(ctx, call)
		this.stage = new stageCalls.DemocracyNoteImminentPreimageOperationalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyNoteImminentPreimageOperationalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyNoteImminentPreimageOperationalCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyNoteImminentPreimageOperationalCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyNoteImminentPreimageOperationalCall['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyNotePreimageCall {
	private readonly production: productionCalls.DemocracyNotePreimageCall
	private readonly stage: stageCalls.DemocracyNotePreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyNotePreimageCall(ctx, call)
		this.stage = new stageCalls.DemocracyNotePreimageCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyNotePreimageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyNotePreimageCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyNotePreimageCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyNotePreimageCall['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyNotePreimageOperationalCall {
	private readonly production: productionCalls.DemocracyNotePreimageOperationalCall
	private readonly stage: stageCalls.DemocracyNotePreimageOperationalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyNotePreimageOperationalCall(ctx, call)
		this.stage = new stageCalls.DemocracyNotePreimageOperationalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyNotePreimageOperationalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyNotePreimageOperationalCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyNotePreimageOperationalCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyNotePreimageOperationalCall['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyProposeCall {
	private readonly production: productionCalls.DemocracyProposeCall
	private readonly stage: stageCalls.DemocracyProposeCall
	private readonly dev: devCalls.DemocracyProposeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyProposeCall(ctx, call)
		this.stage = new stageCalls.DemocracyProposeCall(ctx, call)
		this.dev = new devCalls.DemocracyProposeCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyProposeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyProposeCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracyProposeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracyProposeCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.DemocracyProposeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyProposeCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.DemocracyProposeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.DemocracyProposeCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.DemocracyProposeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyProposeCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyReapPreimageCall {
	private readonly production: productionCalls.DemocracyReapPreimageCall
	private readonly stage: stageCalls.DemocracyReapPreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyReapPreimageCall(ctx, call)
		this.stage = new stageCalls.DemocracyReapPreimageCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyReapPreimageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyReapPreimageCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyReapPreimageCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyReapPreimageCall['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyRemoveOtherVoteCall {
	private readonly production: productionCalls.DemocracyRemoveOtherVoteCall
	private readonly stage: stageCalls.DemocracyRemoveOtherVoteCall
	private readonly dev: devCalls.DemocracyRemoveOtherVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyRemoveOtherVoteCall(ctx, call)
		this.stage = new stageCalls.DemocracyRemoveOtherVoteCall(ctx, call)
		this.dev = new devCalls.DemocracyRemoveOtherVoteCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyRemoveOtherVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyRemoveOtherVoteCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyRemoveOtherVoteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyRemoveOtherVoteCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyRemoveOtherVoteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyRemoveOtherVoteCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyRemoveVoteCall {
	private readonly production: productionCalls.DemocracyRemoveVoteCall
	private readonly stage: stageCalls.DemocracyRemoveVoteCall
	private readonly dev: devCalls.DemocracyRemoveVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyRemoveVoteCall(ctx, call)
		this.stage = new stageCalls.DemocracyRemoveVoteCall(ctx, call)
		this.dev = new devCalls.DemocracyRemoveVoteCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyRemoveVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyRemoveVoteCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyRemoveVoteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyRemoveVoteCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyRemoveVoteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyRemoveVoteCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracySecondCall {
	private readonly production: productionCalls.DemocracySecondCall
	private readonly stage: stageCalls.DemocracySecondCall
	private readonly dev: devCalls.DemocracySecondCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracySecondCall(ctx, call)
		this.stage = new stageCalls.DemocracySecondCall(ctx, call)
		this.dev = new devCalls.DemocracySecondCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracySecondCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracySecondCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.DemocracySecondCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.DemocracySecondCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.DemocracySecondCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracySecondCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.DemocracySecondCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.DemocracySecondCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.DemocracySecondCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracySecondCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyUndelegateCall {
	private readonly production: productionCalls.DemocracyUndelegateCall
	private readonly stage: stageCalls.DemocracyUndelegateCall
	private readonly dev: devCalls.DemocracyUndelegateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyUndelegateCall(ctx, call)
		this.stage = new stageCalls.DemocracyUndelegateCall(ctx, call)
		this.dev = new devCalls.DemocracyUndelegateCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyUndelegateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyUndelegateCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyUndelegateCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyUndelegateCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyUndelegateCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyUndelegateCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyUnlockCall {
	private readonly production: productionCalls.DemocracyUnlockCall
	private readonly stage: stageCalls.DemocracyUnlockCall
	private readonly dev: devCalls.DemocracyUnlockCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyUnlockCall(ctx, call)
		this.stage = new stageCalls.DemocracyUnlockCall(ctx, call)
		this.dev = new devCalls.DemocracyUnlockCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyUnlockCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyUnlockCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyUnlockCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyUnlockCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyUnlockCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyUnlockCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyVetoExternalCall {
	private readonly production: productionCalls.DemocracyVetoExternalCall
	private readonly stage: stageCalls.DemocracyVetoExternalCall
	private readonly dev: devCalls.DemocracyVetoExternalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyVetoExternalCall(ctx, call)
		this.stage = new stageCalls.DemocracyVetoExternalCall(ctx, call)
		this.dev = new devCalls.DemocracyVetoExternalCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyVetoExternalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyVetoExternalCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.DemocracyVetoExternalCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyVetoExternalCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.DemocracyVetoExternalCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyVetoExternalCall['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyVoteCall {
	private readonly production: productionCalls.DemocracyVoteCall
	private readonly stage: stageCalls.DemocracyVoteCall
	private readonly dev: devCalls.DemocracyVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.DemocracyVoteCall(ctx, call)
		this.stage = new stageCalls.DemocracyVoteCall(ctx, call)
		this.dev = new devCalls.DemocracyVoteCall(ctx, call)
	}

	get isV1(): productionCalls.DemocracyVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.DemocracyVoteCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.DemocracyVoteCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.DemocracyVoteCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.DemocracyVoteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.DemocracyVoteCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.DemocracyVoteCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.DemocracyVoteCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.DemocracyVoteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.DemocracyVoteCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseGovernanceFallbackCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseGovernanceFallbackCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseGovernanceFallbackCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseGovernanceFallbackCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseGovernanceFallbackCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseGovernanceFallbackCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseGovernanceFallbackCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseGovernanceFallbackCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseGovernanceFallbackCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.ElectionProviderMultiPhaseGovernanceFallbackCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.ElectionProviderMultiPhaseGovernanceFallbackCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.ElectionProviderMultiPhaseGovernanceFallbackCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionProviderMultiPhaseGovernanceFallbackCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSetEmergencyElectionResultCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionProviderMultiPhaseSetEmergencyElectionResultCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSubmitCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseSubmitCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseSubmitCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseSubmitCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseSubmitCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseSubmitCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseSubmitCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseSubmitCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseSubmitCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.ElectionProviderMultiPhaseSubmitCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.ElectionProviderMultiPhaseSubmitCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.ElectionProviderMultiPhaseSubmitCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionProviderMultiPhaseSubmitCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSubmitUnsignedCall {
	private readonly production: productionCalls.ElectionProviderMultiPhaseSubmitUnsignedCall
	private readonly stage: stageCalls.ElectionProviderMultiPhaseSubmitUnsignedCall
	private readonly dev: devCalls.ElectionProviderMultiPhaseSubmitUnsignedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionProviderMultiPhaseSubmitUnsignedCall(ctx, call)
		this.stage = new stageCalls.ElectionProviderMultiPhaseSubmitUnsignedCall(ctx, call)
		this.dev = new devCalls.ElectionProviderMultiPhaseSubmitUnsignedCall(ctx, call)
	}

	get isV42(): productionCalls.ElectionProviderMultiPhaseSubmitUnsignedCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.ElectionProviderMultiPhaseSubmitUnsignedCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.ElectionProviderMultiPhaseSubmitUnsignedCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.ElectionProviderMultiPhaseSubmitUnsignedCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.ElectionProviderMultiPhaseSubmitUnsignedCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionProviderMultiPhaseSubmitUnsignedCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenCleanDefunctVotersCall {
	private readonly production: productionCalls.ElectionsPhragmenCleanDefunctVotersCall
	private readonly stage: stageCalls.ElectionsPhragmenCleanDefunctVotersCall
	private readonly dev: devCalls.ElectionsPhragmenCleanDefunctVotersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenCleanDefunctVotersCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenCleanDefunctVotersCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenCleanDefunctVotersCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenCleanDefunctVotersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenCleanDefunctVotersCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.ElectionsPhragmenCleanDefunctVotersCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ElectionsPhragmenCleanDefunctVotersCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ElectionsPhragmenCleanDefunctVotersCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionsPhragmenCleanDefunctVotersCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenRemoveMemberCall {
	private readonly production: productionCalls.ElectionsPhragmenRemoveMemberCall
	private readonly stage: stageCalls.ElectionsPhragmenRemoveMemberCall
	private readonly dev: devCalls.ElectionsPhragmenRemoveMemberCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenRemoveMemberCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenRemoveMemberCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenRemoveMemberCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenRemoveMemberCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenRemoveMemberCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.ElectionsPhragmenRemoveMemberCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.ElectionsPhragmenRemoveMemberCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.ElectionsPhragmenRemoveMemberCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ElectionsPhragmenRemoveMemberCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.ElectionsPhragmenRemoveMemberCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.ElectionsPhragmenRemoveMemberCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.ElectionsPhragmenRemoveMemberCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionsPhragmenRemoveMemberCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenRemoveVoterCall {
	private readonly production: productionCalls.ElectionsPhragmenRemoveVoterCall
	private readonly stage: stageCalls.ElectionsPhragmenRemoveVoterCall
	private readonly dev: devCalls.ElectionsPhragmenRemoveVoterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenRemoveVoterCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenRemoveVoterCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenRemoveVoterCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenRemoveVoterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenRemoveVoterCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.ElectionsPhragmenRemoveVoterCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ElectionsPhragmenRemoveVoterCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ElectionsPhragmenRemoveVoterCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionsPhragmenRemoveVoterCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenRenounceCandidacyCall {
	private readonly production: productionCalls.ElectionsPhragmenRenounceCandidacyCall
	private readonly stage: stageCalls.ElectionsPhragmenRenounceCandidacyCall
	private readonly dev: devCalls.ElectionsPhragmenRenounceCandidacyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenRenounceCandidacyCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenRenounceCandidacyCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenRenounceCandidacyCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenRenounceCandidacyCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenRenounceCandidacyCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.ElectionsPhragmenRenounceCandidacyCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ElectionsPhragmenRenounceCandidacyCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ElectionsPhragmenRenounceCandidacyCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionsPhragmenRenounceCandidacyCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenSubmitCandidacyCall {
	private readonly production: productionCalls.ElectionsPhragmenSubmitCandidacyCall
	private readonly stage: stageCalls.ElectionsPhragmenSubmitCandidacyCall
	private readonly dev: devCalls.ElectionsPhragmenSubmitCandidacyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenSubmitCandidacyCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenSubmitCandidacyCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenSubmitCandidacyCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenSubmitCandidacyCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenSubmitCandidacyCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.ElectionsPhragmenSubmitCandidacyCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ElectionsPhragmenSubmitCandidacyCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ElectionsPhragmenSubmitCandidacyCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionsPhragmenSubmitCandidacyCall['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenVoteCall {
	private readonly production: productionCalls.ElectionsPhragmenVoteCall
	private readonly stage: stageCalls.ElectionsPhragmenVoteCall
	private readonly dev: devCalls.ElectionsPhragmenVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ElectionsPhragmenVoteCall(ctx, call)
		this.stage = new stageCalls.ElectionsPhragmenVoteCall(ctx, call)
		this.dev = new devCalls.ElectionsPhragmenVoteCall(ctx, call)
	}

	get isV1(): productionCalls.ElectionsPhragmenVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ElectionsPhragmenVoteCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.ElectionsPhragmenVoteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ElectionsPhragmenVoteCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ElectionsPhragmenVoteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ElectionsPhragmenVoteCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeAbortRequestCall {
	private readonly production: productionCalls.EthBridgeAbortRequestCall
	private readonly stage: stageCalls.EthBridgeAbortRequestCall
	private readonly dev: devCalls.EthBridgeAbortRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeAbortRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeAbortRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeAbortRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeAbortRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeAbortRequestCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeAbortRequestCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeAbortRequestCall['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionCalls.EthBridgeAbortRequestCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.EthBridgeAbortRequestCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.EthBridgeAbortRequestCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeAbortRequestCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.EthBridgeAbortRequestCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.EthBridgeAbortRequestCall['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageCalls.EthBridgeAbortRequestCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthBridgeAbortRequestCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.EthBridgeAbortRequestCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeAbortRequestCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeAddAssetCall {
	private readonly production: productionCalls.EthBridgeAddAssetCall
	private readonly stage: stageCalls.EthBridgeAddAssetCall
	private readonly dev: devCalls.EthBridgeAddAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeAddAssetCall(ctx, call)
		this.stage = new stageCalls.EthBridgeAddAssetCall(ctx, call)
		this.dev = new devCalls.EthBridgeAddAssetCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeAddAssetCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeAddAssetCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeAddAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeAddAssetCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.EthBridgeAddAssetCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeAddAssetCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.EthBridgeAddAssetCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.EthBridgeAddAssetCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.EthBridgeAddAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeAddAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeAddPeerCall {
	private readonly production: productionCalls.EthBridgeAddPeerCall
	private readonly stage: stageCalls.EthBridgeAddPeerCall
	private readonly dev: devCalls.EthBridgeAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeAddPeerCall(ctx, call)
		this.stage = new stageCalls.EthBridgeAddPeerCall(ctx, call)
		this.dev = new devCalls.EthBridgeAddPeerCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeAddPeerCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeAddPeerCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.EthBridgeAddPeerCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeAddPeerCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.EthBridgeAddPeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeAddPeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeAddSidechainTokenCall {
	private readonly production: productionCalls.EthBridgeAddSidechainTokenCall
	private readonly stage: stageCalls.EthBridgeAddSidechainTokenCall
	private readonly dev: devCalls.EthBridgeAddSidechainTokenCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeAddSidechainTokenCall(ctx, call)
		this.stage = new stageCalls.EthBridgeAddSidechainTokenCall(ctx, call)
		this.dev = new devCalls.EthBridgeAddSidechainTokenCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeAddSidechainTokenCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeAddSidechainTokenCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeAddSidechainTokenCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeAddSidechainTokenCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.EthBridgeAddSidechainTokenCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeAddSidechainTokenCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.EthBridgeAddSidechainTokenCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.EthBridgeAddSidechainTokenCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.EthBridgeAddSidechainTokenCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeAddSidechainTokenCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeApproveRequestCall {
	private readonly production: productionCalls.EthBridgeApproveRequestCall
	private readonly stage: stageCalls.EthBridgeApproveRequestCall
	private readonly dev: devCalls.EthBridgeApproveRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeApproveRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeApproveRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeApproveRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeApproveRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeApproveRequestCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.EthBridgeApproveRequestCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeApproveRequestCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.EthBridgeApproveRequestCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeApproveRequestCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeFinalizeIncomingRequestCall {
	private readonly production: productionCalls.EthBridgeFinalizeIncomingRequestCall
	private readonly stage: stageCalls.EthBridgeFinalizeIncomingRequestCall
	private readonly dev: devCalls.EthBridgeFinalizeIncomingRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeFinalizeIncomingRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeFinalizeIncomingRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeFinalizeIncomingRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeFinalizeIncomingRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeFinalizeIncomingRequestCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.EthBridgeFinalizeIncomingRequestCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeFinalizeIncomingRequestCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.EthBridgeFinalizeIncomingRequestCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeFinalizeIncomingRequestCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeForceAddPeerCall {
	private readonly production: productionCalls.EthBridgeForceAddPeerCall
	private readonly stage: stageCalls.EthBridgeForceAddPeerCall
	private readonly dev: devCalls.EthBridgeForceAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeForceAddPeerCall(ctx, call)
		this.stage = new stageCalls.EthBridgeForceAddPeerCall(ctx, call)
		this.dev = new devCalls.EthBridgeForceAddPeerCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeForceAddPeerCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeForceAddPeerCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.EthBridgeForceAddPeerCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeForceAddPeerCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.EthBridgeForceAddPeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeForceAddPeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeImportIncomingRequestCall {
	private readonly production: productionCalls.EthBridgeImportIncomingRequestCall
	private readonly stage: stageCalls.EthBridgeImportIncomingRequestCall
	private readonly dev: devCalls.EthBridgeImportIncomingRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeImportIncomingRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeImportIncomingRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeImportIncomingRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeImportIncomingRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeImportIncomingRequestCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeImportIncomingRequestCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeImportIncomingRequestCall['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionCalls.EthBridgeImportIncomingRequestCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.EthBridgeImportIncomingRequestCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.EthBridgeImportIncomingRequestCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeImportIncomingRequestCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.EthBridgeImportIncomingRequestCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.EthBridgeImportIncomingRequestCall['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageCalls.EthBridgeImportIncomingRequestCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthBridgeImportIncomingRequestCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.EthBridgeImportIncomingRequestCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeImportIncomingRequestCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeMigrateCall {
	private readonly production: productionCalls.EthBridgeMigrateCall
	private readonly stage: stageCalls.EthBridgeMigrateCall
	private readonly dev: devCalls.EthBridgeMigrateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeMigrateCall(ctx, call)
		this.stage = new stageCalls.EthBridgeMigrateCall(ctx, call)
		this.dev = new devCalls.EthBridgeMigrateCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeMigrateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeMigrateCall['asV1'] {
		return this.production.asV1
	}
	get isV38(): productionCalls.EthBridgeMigrateCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.EthBridgeMigrateCall['asV38'] {
		return this.production.asV38
	}
	get isV33Stage(): stageCalls.EthBridgeMigrateCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeMigrateCall['asV33'] {
		return this.stage.asV33
	}
	get isV38Stage(): stageCalls.EthBridgeMigrateCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.EthBridgeMigrateCall['asV38'] {
		return this.stage.asV38
	}
	get isV60Dev(): devCalls.EthBridgeMigrateCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeMigrateCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeMigrateTo020Call {
	private readonly production: productionCalls.EthBridgeMigrateTo020Call
	private readonly stage: stageCalls.EthBridgeMigrateTo020Call

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeMigrateTo020Call(ctx, call)
		this.stage = new stageCalls.EthBridgeMigrateTo020Call(ctx, call)
	}

	get isV19(): productionCalls.EthBridgeMigrateTo020Call['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.EthBridgeMigrateTo020Call['asV19'] {
		return this.production.asV19
	}
	get isV33Stage(): stageCalls.EthBridgeMigrateTo020Call['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeMigrateTo020Call['asV33'] {
		return this.stage.asV33
	}
}

export class EthBridgePrepareForMigrationCall {
	private readonly production: productionCalls.EthBridgePrepareForMigrationCall
	private readonly stage: stageCalls.EthBridgePrepareForMigrationCall
	private readonly dev: devCalls.EthBridgePrepareForMigrationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgePrepareForMigrationCall(ctx, call)
		this.stage = new stageCalls.EthBridgePrepareForMigrationCall(ctx, call)
		this.dev = new devCalls.EthBridgePrepareForMigrationCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgePrepareForMigrationCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgePrepareForMigrationCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.EthBridgePrepareForMigrationCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgePrepareForMigrationCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.EthBridgePrepareForMigrationCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgePrepareForMigrationCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRegisterBridgeCall {
	private readonly production: productionCalls.EthBridgeRegisterBridgeCall
	private readonly stage: stageCalls.EthBridgeRegisterBridgeCall
	private readonly dev: devCalls.EthBridgeRegisterBridgeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRegisterBridgeCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRegisterBridgeCall(ctx, call)
		this.dev = new devCalls.EthBridgeRegisterBridgeCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeRegisterBridgeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeRegisterBridgeCall['asV1'] {
		return this.production.asV1
	}
	get isV38(): productionCalls.EthBridgeRegisterBridgeCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.EthBridgeRegisterBridgeCall['asV38'] {
		return this.production.asV38
	}
	get isV33Stage(): stageCalls.EthBridgeRegisterBridgeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeRegisterBridgeCall['asV33'] {
		return this.stage.asV33
	}
	get isV38Stage(): stageCalls.EthBridgeRegisterBridgeCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.EthBridgeRegisterBridgeCall['asV38'] {
		return this.stage.asV38
	}
	get isV60Dev(): devCalls.EthBridgeRegisterBridgeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeRegisterBridgeCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRegisterExistingSidechainAssetCall {
	private readonly production: productionCalls.EthBridgeRegisterExistingSidechainAssetCall
	private readonly stage: stageCalls.EthBridgeRegisterExistingSidechainAssetCall
	private readonly dev: devCalls.EthBridgeRegisterExistingSidechainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRegisterExistingSidechainAssetCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRegisterExistingSidechainAssetCall(ctx, call)
		this.dev = new devCalls.EthBridgeRegisterExistingSidechainAssetCall(ctx, call)
	}

	get isV32(): productionCalls.EthBridgeRegisterExistingSidechainAssetCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.EthBridgeRegisterExistingSidechainAssetCall['asV32'] {
		return this.production.asV32
	}
	get isV42(): productionCalls.EthBridgeRegisterExistingSidechainAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeRegisterExistingSidechainAssetCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.EthBridgeRegisterExistingSidechainAssetCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeRegisterExistingSidechainAssetCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.EthBridgeRegisterExistingSidechainAssetCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.EthBridgeRegisterExistingSidechainAssetCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.EthBridgeRegisterExistingSidechainAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeRegisterExistingSidechainAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRegisterIncomingRequestCall {
	private readonly production: productionCalls.EthBridgeRegisterIncomingRequestCall
	private readonly stage: stageCalls.EthBridgeRegisterIncomingRequestCall
	private readonly dev: devCalls.EthBridgeRegisterIncomingRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRegisterIncomingRequestCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRegisterIncomingRequestCall(ctx, call)
		this.dev = new devCalls.EthBridgeRegisterIncomingRequestCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeRegisterIncomingRequestCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeRegisterIncomingRequestCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeRegisterIncomingRequestCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeRegisterIncomingRequestCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.EthBridgeRegisterIncomingRequestCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeRegisterIncomingRequestCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.EthBridgeRegisterIncomingRequestCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.EthBridgeRegisterIncomingRequestCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.EthBridgeRegisterIncomingRequestCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeRegisterIncomingRequestCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRemovePeerCall {
	private readonly production: productionCalls.EthBridgeRemovePeerCall
	private readonly stage: stageCalls.EthBridgeRemovePeerCall
	private readonly dev: devCalls.EthBridgeRemovePeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRemovePeerCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRemovePeerCall(ctx, call)
		this.dev = new devCalls.EthBridgeRemovePeerCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeRemovePeerCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeRemovePeerCall['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionCalls.EthBridgeRemovePeerCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.EthBridgeRemovePeerCall['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageCalls.EthBridgeRemovePeerCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeRemovePeerCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.EthBridgeRemovePeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeRemovePeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRemoveSidechainAssetCall {
	private readonly production: productionCalls.EthBridgeRemoveSidechainAssetCall
	private readonly stage: stageCalls.EthBridgeRemoveSidechainAssetCall
	private readonly dev: devCalls.EthBridgeRemoveSidechainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRemoveSidechainAssetCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRemoveSidechainAssetCall(ctx, call)
		this.dev = new devCalls.EthBridgeRemoveSidechainAssetCall(ctx, call)
	}

	get isV32(): productionCalls.EthBridgeRemoveSidechainAssetCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.EthBridgeRemoveSidechainAssetCall['asV32'] {
		return this.production.asV32
	}
	get isV42(): productionCalls.EthBridgeRemoveSidechainAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeRemoveSidechainAssetCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.EthBridgeRemoveSidechainAssetCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeRemoveSidechainAssetCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.EthBridgeRemoveSidechainAssetCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.EthBridgeRemoveSidechainAssetCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.EthBridgeRemoveSidechainAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeRemoveSidechainAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestFromSidechainCall {
	private readonly production: productionCalls.EthBridgeRequestFromSidechainCall
	private readonly stage: stageCalls.EthBridgeRequestFromSidechainCall
	private readonly dev: devCalls.EthBridgeRequestFromSidechainCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeRequestFromSidechainCall(ctx, call)
		this.stage = new stageCalls.EthBridgeRequestFromSidechainCall(ctx, call)
		this.dev = new devCalls.EthBridgeRequestFromSidechainCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeRequestFromSidechainCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeRequestFromSidechainCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.EthBridgeRequestFromSidechainCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeRequestFromSidechainCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.EthBridgeRequestFromSidechainCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeRequestFromSidechainCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeTransferToSidechainCall {
	private readonly production: productionCalls.EthBridgeTransferToSidechainCall
	private readonly stage: stageCalls.EthBridgeTransferToSidechainCall
	private readonly dev: devCalls.EthBridgeTransferToSidechainCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.EthBridgeTransferToSidechainCall(ctx, call)
		this.stage = new stageCalls.EthBridgeTransferToSidechainCall(ctx, call)
		this.dev = new devCalls.EthBridgeTransferToSidechainCall(ctx, call)
	}

	get isV1(): productionCalls.EthBridgeTransferToSidechainCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.EthBridgeTransferToSidechainCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.EthBridgeTransferToSidechainCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.EthBridgeTransferToSidechainCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.EthBridgeTransferToSidechainCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.EthBridgeTransferToSidechainCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.EthBridgeTransferToSidechainCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.EthBridgeTransferToSidechainCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.EthBridgeTransferToSidechainCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthBridgeTransferToSidechainCall['asV60'] {
		return this.dev.asV60
	}
}

export class FarmingMigrateTo11Call {
	private readonly production: productionCalls.FarmingMigrateTo11Call
	private readonly stage: stageCalls.FarmingMigrateTo11Call

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.FarmingMigrateTo11Call(ctx, call)
		this.stage = new stageCalls.FarmingMigrateTo11Call(ctx, call)
	}

	get isV7(): productionCalls.FarmingMigrateTo11Call['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.FarmingMigrateTo11Call['asV7'] {
		return this.production.asV7
	}
	get isV33Stage(): stageCalls.FarmingMigrateTo11Call['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.FarmingMigrateTo11Call['asV33'] {
		return this.stage.asV33
	}
}

export class FaucetResetRewardsCall {
	private readonly production: productionCalls.FaucetResetRewardsCall
	private readonly stage: stageCalls.FaucetResetRewardsCall
	private readonly dev: devCalls.FaucetResetRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.FaucetResetRewardsCall(ctx, call)
		this.stage = new stageCalls.FaucetResetRewardsCall(ctx, call)
		this.dev = new devCalls.FaucetResetRewardsCall(ctx, call)
	}

	get isV22(): productionCalls.FaucetResetRewardsCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.FaucetResetRewardsCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.FaucetResetRewardsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.FaucetResetRewardsCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.FaucetResetRewardsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.FaucetResetRewardsCall['asV60'] {
		return this.dev.asV60
	}
}

export class FaucetTransferCall {
	private readonly production: productionCalls.FaucetTransferCall
	private readonly stage: stageCalls.FaucetTransferCall
	private readonly dev: devCalls.FaucetTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.FaucetTransferCall(ctx, call)
		this.stage = new stageCalls.FaucetTransferCall(ctx, call)
		this.dev = new devCalls.FaucetTransferCall(ctx, call)
	}

	get isV22(): productionCalls.FaucetTransferCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.FaucetTransferCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.FaucetTransferCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.FaucetTransferCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.FaucetTransferCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.FaucetTransferCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.FaucetTransferCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.FaucetTransferCall['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaNoteStalledCall {
	private readonly production: productionCalls.GrandpaNoteStalledCall
	private readonly stage: stageCalls.GrandpaNoteStalledCall
	private readonly dev: devCalls.GrandpaNoteStalledCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.GrandpaNoteStalledCall(ctx, call)
		this.stage = new stageCalls.GrandpaNoteStalledCall(ctx, call)
		this.dev = new devCalls.GrandpaNoteStalledCall(ctx, call)
	}

	get isV1(): productionCalls.GrandpaNoteStalledCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.GrandpaNoteStalledCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.GrandpaNoteStalledCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.GrandpaNoteStalledCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.GrandpaNoteStalledCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.GrandpaNoteStalledCall['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaReportEquivocationCall {
	private readonly production: productionCalls.GrandpaReportEquivocationCall
	private readonly stage: stageCalls.GrandpaReportEquivocationCall
	private readonly dev: devCalls.GrandpaReportEquivocationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.GrandpaReportEquivocationCall(ctx, call)
		this.stage = new stageCalls.GrandpaReportEquivocationCall(ctx, call)
		this.dev = new devCalls.GrandpaReportEquivocationCall(ctx, call)
	}

	get isV1(): productionCalls.GrandpaReportEquivocationCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.GrandpaReportEquivocationCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.GrandpaReportEquivocationCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.GrandpaReportEquivocationCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.GrandpaReportEquivocationCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.GrandpaReportEquivocationCall['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaReportEquivocationUnsignedCall {
	private readonly production: productionCalls.GrandpaReportEquivocationUnsignedCall
	private readonly stage: stageCalls.GrandpaReportEquivocationUnsignedCall
	private readonly dev: devCalls.GrandpaReportEquivocationUnsignedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.GrandpaReportEquivocationUnsignedCall(ctx, call)
		this.stage = new stageCalls.GrandpaReportEquivocationUnsignedCall(ctx, call)
		this.dev = new devCalls.GrandpaReportEquivocationUnsignedCall(ctx, call)
	}

	get isV1(): productionCalls.GrandpaReportEquivocationUnsignedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.GrandpaReportEquivocationUnsignedCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.GrandpaReportEquivocationUnsignedCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.GrandpaReportEquivocationUnsignedCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.GrandpaReportEquivocationUnsignedCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.GrandpaReportEquivocationUnsignedCall['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformChangeMinHermesForCreatingPollCall {
	private readonly production: productionCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall
	private readonly stage: stageCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall
	private readonly dev: devCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.HermesGovernancePlatformChangeMinHermesForCreatingPollCall['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformChangeMinHermesForVotingCall {
	private readonly production: productionCalls.HermesGovernancePlatformChangeMinHermesForVotingCall
	private readonly stage: stageCalls.HermesGovernancePlatformChangeMinHermesForVotingCall
	private readonly dev: devCalls.HermesGovernancePlatformChangeMinHermesForVotingCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformChangeMinHermesForVotingCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformChangeMinHermesForVotingCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformChangeMinHermesForVotingCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformChangeMinHermesForVotingCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformChangeMinHermesForVotingCall['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageCalls.HermesGovernancePlatformChangeMinHermesForVotingCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.HermesGovernancePlatformChangeMinHermesForVotingCall['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devCalls.HermesGovernancePlatformChangeMinHermesForVotingCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.HermesGovernancePlatformChangeMinHermesForVotingCall['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformCreatePollCall {
	private readonly production: productionCalls.HermesGovernancePlatformCreatePollCall
	private readonly stage: stageCalls.HermesGovernancePlatformCreatePollCall
	private readonly dev: devCalls.HermesGovernancePlatformCreatePollCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformCreatePollCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformCreatePollCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformCreatePollCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformCreatePollCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformCreatePollCall['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionCalls.HermesGovernancePlatformCreatePollCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.HermesGovernancePlatformCreatePollCall['asV57'] {
		return this.production.asV57
	}
	get isV47Stage(): stageCalls.HermesGovernancePlatformCreatePollCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.HermesGovernancePlatformCreatePollCall['asV47'] {
		return this.stage.asV47
	}
	get isV55Stage(): stageCalls.HermesGovernancePlatformCreatePollCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.HermesGovernancePlatformCreatePollCall['asV55'] {
		return this.stage.asV55
	}
	get isV60Dev(): devCalls.HermesGovernancePlatformCreatePollCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.HermesGovernancePlatformCreatePollCall['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformVoteCall {
	private readonly production: productionCalls.HermesGovernancePlatformVoteCall
	private readonly stage: stageCalls.HermesGovernancePlatformVoteCall
	private readonly dev: devCalls.HermesGovernancePlatformVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformVoteCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformVoteCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformVoteCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformVoteCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformVoteCall['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionCalls.HermesGovernancePlatformVoteCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.HermesGovernancePlatformVoteCall['asV57'] {
		return this.production.asV57
	}
	get isV47Stage(): stageCalls.HermesGovernancePlatformVoteCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.HermesGovernancePlatformVoteCall['asV47'] {
		return this.stage.asV47
	}
	get isV55Stage(): stageCalls.HermesGovernancePlatformVoteCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.HermesGovernancePlatformVoteCall['asV55'] {
		return this.stage.asV55
	}
	get isV60Dev(): devCalls.HermesGovernancePlatformVoteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.HermesGovernancePlatformVoteCall['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformWithdrawFundsCreatorCall {
	private readonly production: productionCalls.HermesGovernancePlatformWithdrawFundsCreatorCall
	private readonly stage: stageCalls.HermesGovernancePlatformWithdrawFundsCreatorCall
	private readonly dev: devCalls.HermesGovernancePlatformWithdrawFundsCreatorCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformWithdrawFundsCreatorCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformWithdrawFundsCreatorCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformWithdrawFundsCreatorCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformWithdrawFundsCreatorCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformWithdrawFundsCreatorCall['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageCalls.HermesGovernancePlatformWithdrawFundsCreatorCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.HermesGovernancePlatformWithdrawFundsCreatorCall['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devCalls.HermesGovernancePlatformWithdrawFundsCreatorCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.HermesGovernancePlatformWithdrawFundsCreatorCall['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformWithdrawFundsVoterCall {
	private readonly production: productionCalls.HermesGovernancePlatformWithdrawFundsVoterCall
	private readonly stage: stageCalls.HermesGovernancePlatformWithdrawFundsVoterCall
	private readonly dev: devCalls.HermesGovernancePlatformWithdrawFundsVoterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.HermesGovernancePlatformWithdrawFundsVoterCall(ctx, call)
		this.stage = new stageCalls.HermesGovernancePlatformWithdrawFundsVoterCall(ctx, call)
		this.dev = new devCalls.HermesGovernancePlatformWithdrawFundsVoterCall(ctx, call)
	}

	get isV47(): productionCalls.HermesGovernancePlatformWithdrawFundsVoterCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.HermesGovernancePlatformWithdrawFundsVoterCall['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageCalls.HermesGovernancePlatformWithdrawFundsVoterCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.HermesGovernancePlatformWithdrawFundsVoterCall['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devCalls.HermesGovernancePlatformWithdrawFundsVoterCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.HermesGovernancePlatformWithdrawFundsVoterCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityAddRegistrarCall {
	private readonly production: productionCalls.IdentityAddRegistrarCall
	private readonly stage: stageCalls.IdentityAddRegistrarCall
	private readonly dev: devCalls.IdentityAddRegistrarCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityAddRegistrarCall(ctx, call)
		this.stage = new stageCalls.IdentityAddRegistrarCall(ctx, call)
		this.dev = new devCalls.IdentityAddRegistrarCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityAddRegistrarCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityAddRegistrarCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityAddRegistrarCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityAddRegistrarCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityAddRegistrarCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityAddRegistrarCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityAddSubCall {
	private readonly production: productionCalls.IdentityAddSubCall
	private readonly stage: stageCalls.IdentityAddSubCall
	private readonly dev: devCalls.IdentityAddSubCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityAddSubCall(ctx, call)
		this.stage = new stageCalls.IdentityAddSubCall(ctx, call)
		this.dev = new devCalls.IdentityAddSubCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityAddSubCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityAddSubCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityAddSubCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityAddSubCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityAddSubCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityAddSubCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityCancelRequestCall {
	private readonly production: productionCalls.IdentityCancelRequestCall
	private readonly stage: stageCalls.IdentityCancelRequestCall
	private readonly dev: devCalls.IdentityCancelRequestCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityCancelRequestCall(ctx, call)
		this.stage = new stageCalls.IdentityCancelRequestCall(ctx, call)
		this.dev = new devCalls.IdentityCancelRequestCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityCancelRequestCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityCancelRequestCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityCancelRequestCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityCancelRequestCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityCancelRequestCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityCancelRequestCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityClearIdentityCall {
	private readonly production: productionCalls.IdentityClearIdentityCall
	private readonly stage: stageCalls.IdentityClearIdentityCall
	private readonly dev: devCalls.IdentityClearIdentityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityClearIdentityCall(ctx, call)
		this.stage = new stageCalls.IdentityClearIdentityCall(ctx, call)
		this.dev = new devCalls.IdentityClearIdentityCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityClearIdentityCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityClearIdentityCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityClearIdentityCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityClearIdentityCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityClearIdentityCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityClearIdentityCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityKillIdentityCall {
	private readonly production: productionCalls.IdentityKillIdentityCall
	private readonly stage: stageCalls.IdentityKillIdentityCall
	private readonly dev: devCalls.IdentityKillIdentityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityKillIdentityCall(ctx, call)
		this.stage = new stageCalls.IdentityKillIdentityCall(ctx, call)
		this.dev = new devCalls.IdentityKillIdentityCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityKillIdentityCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityKillIdentityCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityKillIdentityCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityKillIdentityCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityKillIdentityCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityKillIdentityCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityProvideJudgementCall {
	private readonly production: productionCalls.IdentityProvideJudgementCall
	private readonly stage: stageCalls.IdentityProvideJudgementCall
	private readonly dev: devCalls.IdentityProvideJudgementCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityProvideJudgementCall(ctx, call)
		this.stage = new stageCalls.IdentityProvideJudgementCall(ctx, call)
		this.dev = new devCalls.IdentityProvideJudgementCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityProvideJudgementCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityProvideJudgementCall['asV3'] {
		return this.production.asV3
	}
	get isV53(): productionCalls.IdentityProvideJudgementCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.IdentityProvideJudgementCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.IdentityProvideJudgementCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityProvideJudgementCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.IdentityProvideJudgementCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.IdentityProvideJudgementCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.IdentityProvideJudgementCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityProvideJudgementCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityQuitSubCall {
	private readonly production: productionCalls.IdentityQuitSubCall
	private readonly stage: stageCalls.IdentityQuitSubCall
	private readonly dev: devCalls.IdentityQuitSubCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityQuitSubCall(ctx, call)
		this.stage = new stageCalls.IdentityQuitSubCall(ctx, call)
		this.dev = new devCalls.IdentityQuitSubCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityQuitSubCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityQuitSubCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityQuitSubCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityQuitSubCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityQuitSubCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityQuitSubCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityRemoveSubCall {
	private readonly production: productionCalls.IdentityRemoveSubCall
	private readonly stage: stageCalls.IdentityRemoveSubCall
	private readonly dev: devCalls.IdentityRemoveSubCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityRemoveSubCall(ctx, call)
		this.stage = new stageCalls.IdentityRemoveSubCall(ctx, call)
		this.dev = new devCalls.IdentityRemoveSubCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityRemoveSubCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityRemoveSubCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityRemoveSubCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityRemoveSubCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityRemoveSubCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityRemoveSubCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityRenameSubCall {
	private readonly production: productionCalls.IdentityRenameSubCall
	private readonly stage: stageCalls.IdentityRenameSubCall
	private readonly dev: devCalls.IdentityRenameSubCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityRenameSubCall(ctx, call)
		this.stage = new stageCalls.IdentityRenameSubCall(ctx, call)
		this.dev = new devCalls.IdentityRenameSubCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityRenameSubCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityRenameSubCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityRenameSubCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityRenameSubCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityRenameSubCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityRenameSubCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityRequestJudgementCall {
	private readonly production: productionCalls.IdentityRequestJudgementCall
	private readonly stage: stageCalls.IdentityRequestJudgementCall
	private readonly dev: devCalls.IdentityRequestJudgementCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentityRequestJudgementCall(ctx, call)
		this.stage = new stageCalls.IdentityRequestJudgementCall(ctx, call)
		this.dev = new devCalls.IdentityRequestJudgementCall(ctx, call)
	}

	get isV3(): productionCalls.IdentityRequestJudgementCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentityRequestJudgementCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentityRequestJudgementCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentityRequestJudgementCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentityRequestJudgementCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentityRequestJudgementCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySetAccountIdCall {
	private readonly production: productionCalls.IdentitySetAccountIdCall
	private readonly stage: stageCalls.IdentitySetAccountIdCall
	private readonly dev: devCalls.IdentitySetAccountIdCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetAccountIdCall(ctx, call)
		this.stage = new stageCalls.IdentitySetAccountIdCall(ctx, call)
		this.dev = new devCalls.IdentitySetAccountIdCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetAccountIdCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetAccountIdCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentitySetAccountIdCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentitySetAccountIdCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentitySetAccountIdCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentitySetAccountIdCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySetFeeCall {
	private readonly production: productionCalls.IdentitySetFeeCall
	private readonly stage: stageCalls.IdentitySetFeeCall
	private readonly dev: devCalls.IdentitySetFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetFeeCall(ctx, call)
		this.stage = new stageCalls.IdentitySetFeeCall(ctx, call)
		this.dev = new devCalls.IdentitySetFeeCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetFeeCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetFeeCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentitySetFeeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentitySetFeeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentitySetFeeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentitySetFeeCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySetFieldsCall {
	private readonly production: productionCalls.IdentitySetFieldsCall
	private readonly stage: stageCalls.IdentitySetFieldsCall
	private readonly dev: devCalls.IdentitySetFieldsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetFieldsCall(ctx, call)
		this.stage = new stageCalls.IdentitySetFieldsCall(ctx, call)
		this.dev = new devCalls.IdentitySetFieldsCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetFieldsCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetFieldsCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentitySetFieldsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentitySetFieldsCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentitySetFieldsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentitySetFieldsCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySetIdentityCall {
	private readonly production: productionCalls.IdentitySetIdentityCall
	private readonly stage: stageCalls.IdentitySetIdentityCall
	private readonly dev: devCalls.IdentitySetIdentityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetIdentityCall(ctx, call)
		this.stage = new stageCalls.IdentitySetIdentityCall(ctx, call)
		this.dev = new devCalls.IdentitySetIdentityCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetIdentityCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetIdentityCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentitySetIdentityCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentitySetIdentityCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentitySetIdentityCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentitySetIdentityCall['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySetSubsCall {
	private readonly production: productionCalls.IdentitySetSubsCall
	private readonly stage: stageCalls.IdentitySetSubsCall
	private readonly dev: devCalls.IdentitySetSubsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IdentitySetSubsCall(ctx, call)
		this.stage = new stageCalls.IdentitySetSubsCall(ctx, call)
		this.dev = new devCalls.IdentitySetSubsCall(ctx, call)
	}

	get isV3(): productionCalls.IdentitySetSubsCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.IdentitySetSubsCall['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageCalls.IdentitySetSubsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IdentitySetSubsCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.IdentitySetSubsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IdentitySetSubsCall['asV60'] {
		return this.dev.asV60
	}
}

export class ImOnlineHeartbeatCall {
	private readonly production: productionCalls.ImOnlineHeartbeatCall
	private readonly stage: stageCalls.ImOnlineHeartbeatCall
	private readonly dev: devCalls.ImOnlineHeartbeatCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ImOnlineHeartbeatCall(ctx, call)
		this.stage = new stageCalls.ImOnlineHeartbeatCall(ctx, call)
		this.dev = new devCalls.ImOnlineHeartbeatCall(ctx, call)
	}

	get isV1(): productionCalls.ImOnlineHeartbeatCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.ImOnlineHeartbeatCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.ImOnlineHeartbeatCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ImOnlineHeartbeatCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ImOnlineHeartbeatCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ImOnlineHeartbeatCall['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationMigrateCall {
	private readonly production: productionCalls.IrohaMigrationMigrateCall
	private readonly stage: stageCalls.IrohaMigrationMigrateCall
	private readonly dev: devCalls.IrohaMigrationMigrateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.IrohaMigrationMigrateCall(ctx, call)
		this.stage = new stageCalls.IrohaMigrationMigrateCall(ctx, call)
		this.dev = new devCalls.IrohaMigrationMigrateCall(ctx, call)
	}

	get isV1(): productionCalls.IrohaMigrationMigrateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.IrohaMigrationMigrateCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.IrohaMigrationMigrateCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.IrohaMigrationMigrateCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.IrohaMigrationMigrateCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.IrohaMigrationMigrateCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.IrohaMigrationMigrateCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.IrohaMigrationMigrateCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.IrohaMigrationMigrateCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.IrohaMigrationMigrateCall['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxyDisableLiquiditySourceCall {
	private readonly production: productionCalls.LiquidityProxyDisableLiquiditySourceCall
	private readonly stage: stageCalls.LiquidityProxyDisableLiquiditySourceCall
	private readonly dev: devCalls.LiquidityProxyDisableLiquiditySourceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxyDisableLiquiditySourceCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxyDisableLiquiditySourceCall(ctx, call)
		this.dev = new devCalls.LiquidityProxyDisableLiquiditySourceCall(ctx, call)
	}

	get isV38(): productionCalls.LiquidityProxyDisableLiquiditySourceCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.LiquidityProxyDisableLiquiditySourceCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.LiquidityProxyDisableLiquiditySourceCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.LiquidityProxyDisableLiquiditySourceCall['asV42'] {
		return this.production.asV42
	}
	get isV38Stage(): stageCalls.LiquidityProxyDisableLiquiditySourceCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.LiquidityProxyDisableLiquiditySourceCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.LiquidityProxyDisableLiquiditySourceCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.LiquidityProxyDisableLiquiditySourceCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.LiquidityProxyDisableLiquiditySourceCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.LiquidityProxyDisableLiquiditySourceCall['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxyEnableLiquiditySourceCall {
	private readonly production: productionCalls.LiquidityProxyEnableLiquiditySourceCall
	private readonly stage: stageCalls.LiquidityProxyEnableLiquiditySourceCall
	private readonly dev: devCalls.LiquidityProxyEnableLiquiditySourceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxyEnableLiquiditySourceCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxyEnableLiquiditySourceCall(ctx, call)
		this.dev = new devCalls.LiquidityProxyEnableLiquiditySourceCall(ctx, call)
	}

	get isV38(): productionCalls.LiquidityProxyEnableLiquiditySourceCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.LiquidityProxyEnableLiquiditySourceCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.LiquidityProxyEnableLiquiditySourceCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.LiquidityProxyEnableLiquiditySourceCall['asV42'] {
		return this.production.asV42
	}
	get isV38Stage(): stageCalls.LiquidityProxyEnableLiquiditySourceCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.LiquidityProxyEnableLiquiditySourceCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.LiquidityProxyEnableLiquiditySourceCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.LiquidityProxyEnableLiquiditySourceCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.LiquidityProxyEnableLiquiditySourceCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.LiquidityProxyEnableLiquiditySourceCall['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxySetAdarCommissionRatioCall {
	private readonly production: productionCalls.LiquidityProxySetAdarCommissionRatioCall
	private readonly stage: stageCalls.LiquidityProxySetAdarCommissionRatioCall
	private readonly dev: devCalls.LiquidityProxySetAdarCommissionRatioCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxySetAdarCommissionRatioCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxySetAdarCommissionRatioCall(ctx, call)
		this.dev = new devCalls.LiquidityProxySetAdarCommissionRatioCall(ctx, call)
	}

	get isV57(): productionCalls.LiquidityProxySetAdarCommissionRatioCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.LiquidityProxySetAdarCommissionRatioCall['asV57'] {
		return this.production.asV57
	}
	get isV55Stage(): stageCalls.LiquidityProxySetAdarCommissionRatioCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.LiquidityProxySetAdarCommissionRatioCall['asV55'] {
		return this.stage.asV55
	}
	get isV60Dev(): devCalls.LiquidityProxySetAdarCommissionRatioCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.LiquidityProxySetAdarCommissionRatioCall['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxySwapCall {
	private readonly production: productionCalls.LiquidityProxySwapCall
	private readonly stage: stageCalls.LiquidityProxySwapCall
	private readonly dev: devCalls.LiquidityProxySwapCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxySwapCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxySwapCall(ctx, call)
		this.dev = new devCalls.LiquidityProxySwapCall(ctx, call)
	}

	get isV1(): productionCalls.LiquidityProxySwapCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.LiquidityProxySwapCall['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionCalls.LiquidityProxySwapCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.LiquidityProxySwapCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.LiquidityProxySwapCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.LiquidityProxySwapCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.LiquidityProxySwapCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.LiquidityProxySwapCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.LiquidityProxySwapCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.LiquidityProxySwapCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.LiquidityProxySwapCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.LiquidityProxySwapCall['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxySwapTransferCall {
	private readonly production: productionCalls.LiquidityProxySwapTransferCall
	private readonly stage: stageCalls.LiquidityProxySwapTransferCall
	private readonly dev: devCalls.LiquidityProxySwapTransferCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxySwapTransferCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxySwapTransferCall(ctx, call)
		this.dev = new devCalls.LiquidityProxySwapTransferCall(ctx, call)
	}

	get isV33(): productionCalls.LiquidityProxySwapTransferCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.LiquidityProxySwapTransferCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.LiquidityProxySwapTransferCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.LiquidityProxySwapTransferCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.LiquidityProxySwapTransferCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.LiquidityProxySwapTransferCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.LiquidityProxySwapTransferCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.LiquidityProxySwapTransferCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.LiquidityProxySwapTransferCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.LiquidityProxySwapTransferCall['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxySwapTransferBatchCall {
	private readonly production: productionCalls.LiquidityProxySwapTransferBatchCall
	private readonly stage: stageCalls.LiquidityProxySwapTransferBatchCall
	private readonly dev: devCalls.LiquidityProxySwapTransferBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.LiquidityProxySwapTransferBatchCall(ctx, call)
		this.stage = new stageCalls.LiquidityProxySwapTransferBatchCall(ctx, call)
		this.dev = new devCalls.LiquidityProxySwapTransferBatchCall(ctx, call)
	}

	get isV45(): productionCalls.LiquidityProxySwapTransferBatchCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.LiquidityProxySwapTransferBatchCall['asV45'] {
		return this.production.asV45
	}
	get isV50(): productionCalls.LiquidityProxySwapTransferBatchCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.LiquidityProxySwapTransferBatchCall['asV50'] {
		return this.production.asV50
	}
	get isV44Stage(): stageCalls.LiquidityProxySwapTransferBatchCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.LiquidityProxySwapTransferBatchCall['asV44'] {
		return this.stage.asV44
	}
	get isV48Stage(): stageCalls.LiquidityProxySwapTransferBatchCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.LiquidityProxySwapTransferBatchCall['asV48'] {
		return this.stage.asV48
	}
	get isV60Dev(): devCalls.LiquidityProxySwapTransferBatchCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.LiquidityProxySwapTransferBatchCall['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolClaimIncentivesCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolClaimIncentivesCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolClaimIncentivesCall(ctx, call)
	}

	get isV1(): productionCalls.MulticollateralBondingCurvePoolClaimIncentivesCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MulticollateralBondingCurvePoolClaimIncentivesCall['asV1'] {
		return this.production.asV1
	}
}

export class MulticollateralBondingCurvePoolInitializePoolCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolInitializePoolCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolInitializePoolCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolInitializePoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolInitializePoolCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolInitializePoolCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolInitializePoolCall(ctx, call)
	}

	get isV1(): productionCalls.MulticollateralBondingCurvePoolInitializePoolCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MulticollateralBondingCurvePoolInitializePoolCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.MulticollateralBondingCurvePoolInitializePoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.MulticollateralBondingCurvePoolInitializePoolCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.MulticollateralBondingCurvePoolInitializePoolCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MulticollateralBondingCurvePoolInitializePoolCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.MulticollateralBondingCurvePoolInitializePoolCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.MulticollateralBondingCurvePoolInitializePoolCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.MulticollateralBondingCurvePoolInitializePoolCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MulticollateralBondingCurvePoolInitializePoolCall['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall(ctx, call)
	}

	get isV1(): productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MulticollateralBondingCurvePoolSetOptionalRewardMultiplierCall['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolSetPriceBiasCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolSetPriceBiasCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolSetPriceBiasCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolSetPriceBiasCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolSetPriceBiasCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolSetPriceBiasCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolSetPriceBiasCall(ctx, call)
	}

	get isV22(): productionCalls.MulticollateralBondingCurvePoolSetPriceBiasCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.MulticollateralBondingCurvePoolSetPriceBiasCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.MulticollateralBondingCurvePoolSetPriceBiasCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MulticollateralBondingCurvePoolSetPriceBiasCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.MulticollateralBondingCurvePoolSetPriceBiasCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MulticollateralBondingCurvePoolSetPriceBiasCall['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolSetPriceChangeConfigCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall(ctx, call)
	}

	get isV22(): productionCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MulticollateralBondingCurvePoolSetPriceChangeConfigCall['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolSetReferenceAssetCall {
	private readonly production: productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall
	private readonly stage: stageCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall
	private readonly dev: devCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall(ctx, call)
		this.stage = new stageCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall(ctx, call)
		this.dev = new devCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall(ctx, call)
	}

	get isV1(): productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MulticollateralBondingCurvePoolSetReferenceAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigApproveAsMultiCall {
	private readonly production: productionCalls.MultisigApproveAsMultiCall
	private readonly stage: stageCalls.MultisigApproveAsMultiCall
	private readonly dev: devCalls.MultisigApproveAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigApproveAsMultiCall(ctx, call)
		this.stage = new stageCalls.MultisigApproveAsMultiCall(ctx, call)
		this.dev = new devCalls.MultisigApproveAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.MultisigApproveAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MultisigApproveAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.MultisigApproveAsMultiCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.MultisigApproveAsMultiCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.MultisigApproveAsMultiCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MultisigApproveAsMultiCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.MultisigApproveAsMultiCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MultisigApproveAsMultiCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.MultisigApproveAsMultiCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MultisigApproveAsMultiCall['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigAsMultiCall {
	private readonly production: productionCalls.MultisigAsMultiCall
	private readonly stage: stageCalls.MultisigAsMultiCall
	private readonly dev: devCalls.MultisigAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigAsMultiCall(ctx, call)
		this.stage = new stageCalls.MultisigAsMultiCall(ctx, call)
		this.dev = new devCalls.MultisigAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.MultisigAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MultisigAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.MultisigAsMultiCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.MultisigAsMultiCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.MultisigAsMultiCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.MultisigAsMultiCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.MultisigAsMultiCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.MultisigAsMultiCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.MultisigAsMultiCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.MultisigAsMultiCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.MultisigAsMultiCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MultisigAsMultiCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.MultisigAsMultiCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MultisigAsMultiCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.MultisigAsMultiCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MultisigAsMultiCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.MultisigAsMultiCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.MultisigAsMultiCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.MultisigAsMultiCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.MultisigAsMultiCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.MultisigAsMultiCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.MultisigAsMultiCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.MultisigAsMultiCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.MultisigAsMultiCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.MultisigAsMultiCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MultisigAsMultiCall['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigAsMultiThreshold1Call {
	private readonly production: productionCalls.MultisigAsMultiThreshold1Call
	private readonly stage: stageCalls.MultisigAsMultiThreshold1Call
	private readonly dev: devCalls.MultisigAsMultiThreshold1Call

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigAsMultiThreshold1Call(ctx, call)
		this.stage = new stageCalls.MultisigAsMultiThreshold1Call(ctx, call)
		this.dev = new devCalls.MultisigAsMultiThreshold1Call(ctx, call)
	}

	get isV1(): productionCalls.MultisigAsMultiThreshold1Call['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MultisigAsMultiThreshold1Call['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.MultisigAsMultiThreshold1Call['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.MultisigAsMultiThreshold1Call['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.MultisigAsMultiThreshold1Call['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.MultisigAsMultiThreshold1Call['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.MultisigAsMultiThreshold1Call['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.MultisigAsMultiThreshold1Call['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.MultisigAsMultiThreshold1Call['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.MultisigAsMultiThreshold1Call['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.MultisigAsMultiThreshold1Call['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.MultisigAsMultiThreshold1Call['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.MultisigAsMultiThreshold1Call['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.MultisigAsMultiThreshold1Call['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.MultisigAsMultiThreshold1Call['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.MultisigAsMultiThreshold1Call['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.MultisigAsMultiThreshold1Call['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.MultisigAsMultiThreshold1Call['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.MultisigAsMultiThreshold1Call['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.MultisigAsMultiThreshold1Call['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.MultisigAsMultiThreshold1Call['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.MultisigAsMultiThreshold1Call['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.MultisigAsMultiThreshold1Call['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.MultisigAsMultiThreshold1Call['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.MultisigAsMultiThreshold1Call['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.MultisigAsMultiThreshold1Call['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.MultisigAsMultiThreshold1Call['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.MultisigAsMultiThreshold1Call['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.MultisigAsMultiThreshold1Call['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.MultisigAsMultiThreshold1Call['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.MultisigAsMultiThreshold1Call['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.MultisigAsMultiThreshold1Call['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.MultisigAsMultiThreshold1Call['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.MultisigAsMultiThreshold1Call['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.MultisigAsMultiThreshold1Call['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.MultisigAsMultiThreshold1Call['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.MultisigAsMultiThreshold1Call['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.MultisigAsMultiThreshold1Call['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.MultisigAsMultiThreshold1Call['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.MultisigAsMultiThreshold1Call['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.MultisigAsMultiThreshold1Call['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.MultisigAsMultiThreshold1Call['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.MultisigAsMultiThreshold1Call['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.MultisigAsMultiThreshold1Call['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.MultisigAsMultiThreshold1Call['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.MultisigAsMultiThreshold1Call['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.MultisigAsMultiThreshold1Call['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MultisigAsMultiThreshold1Call['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigCancelAsMultiCall {
	private readonly production: productionCalls.MultisigCancelAsMultiCall
	private readonly stage: stageCalls.MultisigCancelAsMultiCall
	private readonly dev: devCalls.MultisigCancelAsMultiCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.MultisigCancelAsMultiCall(ctx, call)
		this.stage = new stageCalls.MultisigCancelAsMultiCall(ctx, call)
		this.dev = new devCalls.MultisigCancelAsMultiCall(ctx, call)
	}

	get isV1(): productionCalls.MultisigCancelAsMultiCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.MultisigCancelAsMultiCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.MultisigCancelAsMultiCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.MultisigCancelAsMultiCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.MultisigCancelAsMultiCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MultisigCancelAsMultiCall['asV60'] {
		return this.dev.asV60
	}
}

export class OracleProxyDisableOracleCall {
	private readonly production: productionCalls.OracleProxyDisableOracleCall
	private readonly stage: stageCalls.OracleProxyDisableOracleCall
	private readonly dev: devCalls.OracleProxyDisableOracleCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.OracleProxyDisableOracleCall(ctx, call)
		this.stage = new stageCalls.OracleProxyDisableOracleCall(ctx, call)
		this.dev = new devCalls.OracleProxyDisableOracleCall(ctx, call)
	}

	get isV45(): productionCalls.OracleProxyDisableOracleCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.OracleProxyDisableOracleCall['asV45'] {
		return this.production.asV45
	}
	get isV45Stage(): stageCalls.OracleProxyDisableOracleCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.OracleProxyDisableOracleCall['asV45'] {
		return this.stage.asV45
	}
	get isV60Dev(): devCalls.OracleProxyDisableOracleCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OracleProxyDisableOracleCall['asV60'] {
		return this.dev.asV60
	}
}

export class OracleProxyEnableOracleCall {
	private readonly production: productionCalls.OracleProxyEnableOracleCall
	private readonly stage: stageCalls.OracleProxyEnableOracleCall
	private readonly dev: devCalls.OracleProxyEnableOracleCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.OracleProxyEnableOracleCall(ctx, call)
		this.stage = new stageCalls.OracleProxyEnableOracleCall(ctx, call)
		this.dev = new devCalls.OracleProxyEnableOracleCall(ctx, call)
	}

	get isV45(): productionCalls.OracleProxyEnableOracleCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.OracleProxyEnableOracleCall['asV45'] {
		return this.production.asV45
	}
	get isV45Stage(): stageCalls.OracleProxyEnableOracleCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.OracleProxyEnableOracleCall['asV45'] {
		return this.stage.asV45
	}
	get isV60Dev(): devCalls.OracleProxyEnableOracleCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OracleProxyEnableOracleCall['asV60'] {
		return this.dev.asV60
	}
}

export class PoolXykDepositLiquidityCall {
	private readonly production: productionCalls.PoolXykDepositLiquidityCall
	private readonly stage: stageCalls.PoolXykDepositLiquidityCall
	private readonly dev: devCalls.PoolXykDepositLiquidityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PoolXykDepositLiquidityCall(ctx, call)
		this.stage = new stageCalls.PoolXykDepositLiquidityCall(ctx, call)
		this.dev = new devCalls.PoolXykDepositLiquidityCall(ctx, call)
	}

	get isV1(): productionCalls.PoolXykDepositLiquidityCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PoolXykDepositLiquidityCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.PoolXykDepositLiquidityCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.PoolXykDepositLiquidityCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.PoolXykDepositLiquidityCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.PoolXykDepositLiquidityCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.PoolXykDepositLiquidityCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.PoolXykDepositLiquidityCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.PoolXykDepositLiquidityCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.PoolXykDepositLiquidityCall['asV60'] {
		return this.dev.asV60
	}
}

export class PoolXykInitializePoolCall {
	private readonly production: productionCalls.PoolXykInitializePoolCall
	private readonly stage: stageCalls.PoolXykInitializePoolCall
	private readonly dev: devCalls.PoolXykInitializePoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PoolXykInitializePoolCall(ctx, call)
		this.stage = new stageCalls.PoolXykInitializePoolCall(ctx, call)
		this.dev = new devCalls.PoolXykInitializePoolCall(ctx, call)
	}

	get isV1(): productionCalls.PoolXykInitializePoolCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PoolXykInitializePoolCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.PoolXykInitializePoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.PoolXykInitializePoolCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.PoolXykInitializePoolCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.PoolXykInitializePoolCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.PoolXykInitializePoolCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.PoolXykInitializePoolCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.PoolXykInitializePoolCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.PoolXykInitializePoolCall['asV60'] {
		return this.dev.asV60
	}
}

export class PoolXykSwapPairCall {
	private readonly production: productionCalls.PoolXykSwapPairCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PoolXykSwapPairCall(ctx, call)
	}

	get isV1(): productionCalls.PoolXykSwapPairCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PoolXykSwapPairCall['asV1'] {
		return this.production.asV1
	}
}

export class PoolXykWithdrawLiquidityCall {
	private readonly production: productionCalls.PoolXykWithdrawLiquidityCall
	private readonly stage: stageCalls.PoolXykWithdrawLiquidityCall
	private readonly dev: devCalls.PoolXykWithdrawLiquidityCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PoolXykWithdrawLiquidityCall(ctx, call)
		this.stage = new stageCalls.PoolXykWithdrawLiquidityCall(ctx, call)
		this.dev = new devCalls.PoolXykWithdrawLiquidityCall(ctx, call)
	}

	get isV1(): productionCalls.PoolXykWithdrawLiquidityCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PoolXykWithdrawLiquidityCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.PoolXykWithdrawLiquidityCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.PoolXykWithdrawLiquidityCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.PoolXykWithdrawLiquidityCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.PoolXykWithdrawLiquidityCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.PoolXykWithdrawLiquidityCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.PoolXykWithdrawLiquidityCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.PoolXykWithdrawLiquidityCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.PoolXykWithdrawLiquidityCall['asV60'] {
		return this.dev.asV60
	}
}

export class PreimageNotePreimageCall {
	private readonly production: productionCalls.PreimageNotePreimageCall
	private readonly stage: stageCalls.PreimageNotePreimageCall
	private readonly dev: devCalls.PreimageNotePreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PreimageNotePreimageCall(ctx, call)
		this.stage = new stageCalls.PreimageNotePreimageCall(ctx, call)
		this.dev = new devCalls.PreimageNotePreimageCall(ctx, call)
	}

	get isV53(): productionCalls.PreimageNotePreimageCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.PreimageNotePreimageCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.PreimageNotePreimageCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.PreimageNotePreimageCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.PreimageNotePreimageCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.PreimageNotePreimageCall['asV60'] {
		return this.dev.asV60
	}
}

export class PreimageRequestPreimageCall {
	private readonly production: productionCalls.PreimageRequestPreimageCall
	private readonly stage: stageCalls.PreimageRequestPreimageCall
	private readonly dev: devCalls.PreimageRequestPreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PreimageRequestPreimageCall(ctx, call)
		this.stage = new stageCalls.PreimageRequestPreimageCall(ctx, call)
		this.dev = new devCalls.PreimageRequestPreimageCall(ctx, call)
	}

	get isV53(): productionCalls.PreimageRequestPreimageCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.PreimageRequestPreimageCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.PreimageRequestPreimageCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.PreimageRequestPreimageCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.PreimageRequestPreimageCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.PreimageRequestPreimageCall['asV60'] {
		return this.dev.asV60
	}
}

export class PreimageUnnotePreimageCall {
	private readonly production: productionCalls.PreimageUnnotePreimageCall
	private readonly stage: stageCalls.PreimageUnnotePreimageCall
	private readonly dev: devCalls.PreimageUnnotePreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PreimageUnnotePreimageCall(ctx, call)
		this.stage = new stageCalls.PreimageUnnotePreimageCall(ctx, call)
		this.dev = new devCalls.PreimageUnnotePreimageCall(ctx, call)
	}

	get isV53(): productionCalls.PreimageUnnotePreimageCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.PreimageUnnotePreimageCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.PreimageUnnotePreimageCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.PreimageUnnotePreimageCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.PreimageUnnotePreimageCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.PreimageUnnotePreimageCall['asV60'] {
		return this.dev.asV60
	}
}

export class PreimageUnrequestPreimageCall {
	private readonly production: productionCalls.PreimageUnrequestPreimageCall
	private readonly stage: stageCalls.PreimageUnrequestPreimageCall
	private readonly dev: devCalls.PreimageUnrequestPreimageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PreimageUnrequestPreimageCall(ctx, call)
		this.stage = new stageCalls.PreimageUnrequestPreimageCall(ctx, call)
		this.dev = new devCalls.PreimageUnrequestPreimageCall(ctx, call)
	}

	get isV53(): productionCalls.PreimageUnrequestPreimageCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.PreimageUnrequestPreimageCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.PreimageUnrequestPreimageCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.PreimageUnrequestPreimageCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.PreimageUnrequestPreimageCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.PreimageUnrequestPreimageCall['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionClaimIncentiveCall {
	private readonly production: productionCalls.PswapDistributionClaimIncentiveCall
	private readonly stage: stageCalls.PswapDistributionClaimIncentiveCall
	private readonly dev: devCalls.PswapDistributionClaimIncentiveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.PswapDistributionClaimIncentiveCall(ctx, call)
		this.stage = new stageCalls.PswapDistributionClaimIncentiveCall(ctx, call)
		this.dev = new devCalls.PswapDistributionClaimIncentiveCall(ctx, call)
	}

	get isV1(): productionCalls.PswapDistributionClaimIncentiveCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.PswapDistributionClaimIncentiveCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.PswapDistributionClaimIncentiveCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.PswapDistributionClaimIncentiveCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.PswapDistributionClaimIncentiveCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.PswapDistributionClaimIncentiveCall['asV60'] {
		return this.dev.asV60
	}
}

export class ReferralsReserveCall {
	private readonly production: productionCalls.ReferralsReserveCall
	private readonly stage: stageCalls.ReferralsReserveCall
	private readonly dev: devCalls.ReferralsReserveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ReferralsReserveCall(ctx, call)
		this.stage = new stageCalls.ReferralsReserveCall(ctx, call)
		this.dev = new devCalls.ReferralsReserveCall(ctx, call)
	}

	get isV22(): productionCalls.ReferralsReserveCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.ReferralsReserveCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.ReferralsReserveCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ReferralsReserveCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ReferralsReserveCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ReferralsReserveCall['asV60'] {
		return this.dev.asV60
	}
}

export class ReferralsSetReferrerCall {
	private readonly production: productionCalls.ReferralsSetReferrerCall
	private readonly stage: stageCalls.ReferralsSetReferrerCall
	private readonly dev: devCalls.ReferralsSetReferrerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ReferralsSetReferrerCall(ctx, call)
		this.stage = new stageCalls.ReferralsSetReferrerCall(ctx, call)
		this.dev = new devCalls.ReferralsSetReferrerCall(ctx, call)
	}

	get isV22(): productionCalls.ReferralsSetReferrerCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.ReferralsSetReferrerCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.ReferralsSetReferrerCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ReferralsSetReferrerCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ReferralsSetReferrerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ReferralsSetReferrerCall['asV60'] {
		return this.dev.asV60
	}
}

export class ReferralsUnreserveCall {
	private readonly production: productionCalls.ReferralsUnreserveCall
	private readonly stage: stageCalls.ReferralsUnreserveCall
	private readonly dev: devCalls.ReferralsUnreserveCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.ReferralsUnreserveCall(ctx, call)
		this.stage = new stageCalls.ReferralsUnreserveCall(ctx, call)
		this.dev = new devCalls.ReferralsUnreserveCall(ctx, call)
	}

	get isV22(): productionCalls.ReferralsUnreserveCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.ReferralsUnreserveCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.ReferralsUnreserveCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.ReferralsUnreserveCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.ReferralsUnreserveCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.ReferralsUnreserveCall['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsAddUmiNftReceiversCall {
	private readonly production: productionCalls.RewardsAddUmiNftReceiversCall
	private readonly stage: stageCalls.RewardsAddUmiNftReceiversCall
	private readonly dev: devCalls.RewardsAddUmiNftReceiversCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.RewardsAddUmiNftReceiversCall(ctx, call)
		this.stage = new stageCalls.RewardsAddUmiNftReceiversCall(ctx, call)
		this.dev = new devCalls.RewardsAddUmiNftReceiversCall(ctx, call)
	}

	get isV33(): productionCalls.RewardsAddUmiNftReceiversCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.RewardsAddUmiNftReceiversCall['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageCalls.RewardsAddUmiNftReceiversCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.RewardsAddUmiNftReceiversCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.RewardsAddUmiNftReceiversCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.RewardsAddUmiNftReceiversCall['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsClaimCall {
	private readonly production: productionCalls.RewardsClaimCall
	private readonly stage: stageCalls.RewardsClaimCall
	private readonly dev: devCalls.RewardsClaimCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.RewardsClaimCall(ctx, call)
		this.stage = new stageCalls.RewardsClaimCall(ctx, call)
		this.dev = new devCalls.RewardsClaimCall(ctx, call)
	}

	get isV1(): productionCalls.RewardsClaimCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.RewardsClaimCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.RewardsClaimCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.RewardsClaimCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.RewardsClaimCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.RewardsClaimCall['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsFinalizeStorageMigrationCall {
	private readonly production: productionCalls.RewardsFinalizeStorageMigrationCall
	private readonly stage: stageCalls.RewardsFinalizeStorageMigrationCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.RewardsFinalizeStorageMigrationCall(ctx, call)
		this.stage = new stageCalls.RewardsFinalizeStorageMigrationCall(ctx, call)
	}

	get isV19(): productionCalls.RewardsFinalizeStorageMigrationCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.RewardsFinalizeStorageMigrationCall['asV19'] {
		return this.production.asV19
	}
	get isV33Stage(): stageCalls.RewardsFinalizeStorageMigrationCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.RewardsFinalizeStorageMigrationCall['asV33'] {
		return this.stage.asV33
	}
}

export class SchedulerCancelCall {
	private readonly production: productionCalls.SchedulerCancelCall
	private readonly stage: stageCalls.SchedulerCancelCall
	private readonly dev: devCalls.SchedulerCancelCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerCancelCall(ctx, call)
		this.stage = new stageCalls.SchedulerCancelCall(ctx, call)
		this.dev = new devCalls.SchedulerCancelCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerCancelCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerCancelCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SchedulerCancelCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerCancelCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SchedulerCancelCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SchedulerCancelCall['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerCancelNamedCall {
	private readonly production: productionCalls.SchedulerCancelNamedCall
	private readonly stage: stageCalls.SchedulerCancelNamedCall
	private readonly dev: devCalls.SchedulerCancelNamedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerCancelNamedCall(ctx, call)
		this.stage = new stageCalls.SchedulerCancelNamedCall(ctx, call)
		this.dev = new devCalls.SchedulerCancelNamedCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerCancelNamedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerCancelNamedCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.SchedulerCancelNamedCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerCancelNamedCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.SchedulerCancelNamedCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerCancelNamedCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.SchedulerCancelNamedCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerCancelNamedCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.SchedulerCancelNamedCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SchedulerCancelNamedCall['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerScheduleCall {
	private readonly production: productionCalls.SchedulerScheduleCall
	private readonly stage: stageCalls.SchedulerScheduleCall
	private readonly dev: devCalls.SchedulerScheduleCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerScheduleCall(ctx, call)
		this.stage = new stageCalls.SchedulerScheduleCall(ctx, call)
		this.dev = new devCalls.SchedulerScheduleCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerScheduleCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerScheduleCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.SchedulerScheduleCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.SchedulerScheduleCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.SchedulerScheduleCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.SchedulerScheduleCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.SchedulerScheduleCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.SchedulerScheduleCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.SchedulerScheduleCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SchedulerScheduleCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.SchedulerScheduleCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.SchedulerScheduleCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.SchedulerScheduleCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.SchedulerScheduleCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.SchedulerScheduleCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.SchedulerScheduleCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.SchedulerScheduleCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.SchedulerScheduleCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.SchedulerScheduleCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.SchedulerScheduleCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.SchedulerScheduleCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.SchedulerScheduleCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.SchedulerScheduleCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.SchedulerScheduleCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.SchedulerScheduleCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SchedulerScheduleCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.SchedulerScheduleCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.SchedulerScheduleCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.SchedulerScheduleCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.SchedulerScheduleCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.SchedulerScheduleCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.SchedulerScheduleCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.SchedulerScheduleCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.SchedulerScheduleCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.SchedulerScheduleCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.SchedulerScheduleCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.SchedulerScheduleCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerScheduleCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.SchedulerScheduleCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.SchedulerScheduleCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.SchedulerScheduleCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.SchedulerScheduleCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.SchedulerScheduleCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.SchedulerScheduleCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.SchedulerScheduleCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerScheduleCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SchedulerScheduleCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SchedulerScheduleCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SchedulerScheduleCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SchedulerScheduleCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SchedulerScheduleCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SchedulerScheduleCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SchedulerScheduleCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SchedulerScheduleCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SchedulerScheduleCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SchedulerScheduleCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SchedulerScheduleCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SchedulerScheduleCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SchedulerScheduleCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SchedulerScheduleCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SchedulerScheduleCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SchedulerScheduleCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SchedulerScheduleCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SchedulerScheduleCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SchedulerScheduleCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SchedulerScheduleCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SchedulerScheduleCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerScheduleCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SchedulerScheduleCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SchedulerScheduleCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SchedulerScheduleCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SchedulerScheduleCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SchedulerScheduleCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SchedulerScheduleCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SchedulerScheduleCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SchedulerScheduleCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SchedulerScheduleCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SchedulerScheduleCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.SchedulerScheduleCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SchedulerScheduleCall['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerScheduleAfterCall {
	private readonly production: productionCalls.SchedulerScheduleAfterCall
	private readonly stage: stageCalls.SchedulerScheduleAfterCall
	private readonly dev: devCalls.SchedulerScheduleAfterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerScheduleAfterCall(ctx, call)
		this.stage = new stageCalls.SchedulerScheduleAfterCall(ctx, call)
		this.dev = new devCalls.SchedulerScheduleAfterCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerScheduleAfterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerScheduleAfterCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.SchedulerScheduleAfterCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.SchedulerScheduleAfterCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.SchedulerScheduleAfterCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.SchedulerScheduleAfterCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.SchedulerScheduleAfterCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.SchedulerScheduleAfterCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.SchedulerScheduleAfterCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SchedulerScheduleAfterCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.SchedulerScheduleAfterCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.SchedulerScheduleAfterCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.SchedulerScheduleAfterCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.SchedulerScheduleAfterCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.SchedulerScheduleAfterCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.SchedulerScheduleAfterCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.SchedulerScheduleAfterCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.SchedulerScheduleAfterCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.SchedulerScheduleAfterCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.SchedulerScheduleAfterCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.SchedulerScheduleAfterCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.SchedulerScheduleAfterCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.SchedulerScheduleAfterCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.SchedulerScheduleAfterCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.SchedulerScheduleAfterCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SchedulerScheduleAfterCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.SchedulerScheduleAfterCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.SchedulerScheduleAfterCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.SchedulerScheduleAfterCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.SchedulerScheduleAfterCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.SchedulerScheduleAfterCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.SchedulerScheduleAfterCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.SchedulerScheduleAfterCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.SchedulerScheduleAfterCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.SchedulerScheduleAfterCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.SchedulerScheduleAfterCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.SchedulerScheduleAfterCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerScheduleAfterCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.SchedulerScheduleAfterCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.SchedulerScheduleAfterCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.SchedulerScheduleAfterCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.SchedulerScheduleAfterCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.SchedulerScheduleAfterCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.SchedulerScheduleAfterCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.SchedulerScheduleAfterCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerScheduleAfterCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SchedulerScheduleAfterCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SchedulerScheduleAfterCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SchedulerScheduleAfterCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SchedulerScheduleAfterCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SchedulerScheduleAfterCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SchedulerScheduleAfterCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SchedulerScheduleAfterCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SchedulerScheduleAfterCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SchedulerScheduleAfterCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SchedulerScheduleAfterCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SchedulerScheduleAfterCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SchedulerScheduleAfterCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SchedulerScheduleAfterCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SchedulerScheduleAfterCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SchedulerScheduleAfterCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SchedulerScheduleAfterCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SchedulerScheduleAfterCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SchedulerScheduleAfterCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SchedulerScheduleAfterCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SchedulerScheduleAfterCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SchedulerScheduleAfterCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerScheduleAfterCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SchedulerScheduleAfterCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SchedulerScheduleAfterCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SchedulerScheduleAfterCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SchedulerScheduleAfterCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SchedulerScheduleAfterCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SchedulerScheduleAfterCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SchedulerScheduleAfterCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SchedulerScheduleAfterCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SchedulerScheduleAfterCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SchedulerScheduleAfterCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.SchedulerScheduleAfterCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SchedulerScheduleAfterCall['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerScheduleNamedCall {
	private readonly production: productionCalls.SchedulerScheduleNamedCall
	private readonly stage: stageCalls.SchedulerScheduleNamedCall
	private readonly dev: devCalls.SchedulerScheduleNamedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerScheduleNamedCall(ctx, call)
		this.stage = new stageCalls.SchedulerScheduleNamedCall(ctx, call)
		this.dev = new devCalls.SchedulerScheduleNamedCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerScheduleNamedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerScheduleNamedCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.SchedulerScheduleNamedCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.SchedulerScheduleNamedCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.SchedulerScheduleNamedCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.SchedulerScheduleNamedCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.SchedulerScheduleNamedCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.SchedulerScheduleNamedCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.SchedulerScheduleNamedCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SchedulerScheduleNamedCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.SchedulerScheduleNamedCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.SchedulerScheduleNamedCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.SchedulerScheduleNamedCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.SchedulerScheduleNamedCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.SchedulerScheduleNamedCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.SchedulerScheduleNamedCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.SchedulerScheduleNamedCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.SchedulerScheduleNamedCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.SchedulerScheduleNamedCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.SchedulerScheduleNamedCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.SchedulerScheduleNamedCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.SchedulerScheduleNamedCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.SchedulerScheduleNamedCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.SchedulerScheduleNamedCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.SchedulerScheduleNamedCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SchedulerScheduleNamedCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.SchedulerScheduleNamedCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.SchedulerScheduleNamedCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.SchedulerScheduleNamedCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.SchedulerScheduleNamedCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.SchedulerScheduleNamedCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.SchedulerScheduleNamedCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.SchedulerScheduleNamedCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.SchedulerScheduleNamedCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.SchedulerScheduleNamedCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.SchedulerScheduleNamedCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.SchedulerScheduleNamedCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerScheduleNamedCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.SchedulerScheduleNamedCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.SchedulerScheduleNamedCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.SchedulerScheduleNamedCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.SchedulerScheduleNamedCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.SchedulerScheduleNamedCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.SchedulerScheduleNamedCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.SchedulerScheduleNamedCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerScheduleNamedCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SchedulerScheduleNamedCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SchedulerScheduleNamedCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SchedulerScheduleNamedCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SchedulerScheduleNamedCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SchedulerScheduleNamedCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SchedulerScheduleNamedCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SchedulerScheduleNamedCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SchedulerScheduleNamedCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SchedulerScheduleNamedCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SchedulerScheduleNamedCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SchedulerScheduleNamedCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SchedulerScheduleNamedCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SchedulerScheduleNamedCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SchedulerScheduleNamedCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SchedulerScheduleNamedCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SchedulerScheduleNamedCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SchedulerScheduleNamedCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SchedulerScheduleNamedCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SchedulerScheduleNamedCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SchedulerScheduleNamedCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SchedulerScheduleNamedCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerScheduleNamedCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SchedulerScheduleNamedCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SchedulerScheduleNamedCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SchedulerScheduleNamedCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SchedulerScheduleNamedCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SchedulerScheduleNamedCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SchedulerScheduleNamedCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SchedulerScheduleNamedCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SchedulerScheduleNamedCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SchedulerScheduleNamedCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SchedulerScheduleNamedCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.SchedulerScheduleNamedCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SchedulerScheduleNamedCall['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerScheduleNamedAfterCall {
	private readonly production: productionCalls.SchedulerScheduleNamedAfterCall
	private readonly stage: stageCalls.SchedulerScheduleNamedAfterCall
	private readonly dev: devCalls.SchedulerScheduleNamedAfterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SchedulerScheduleNamedAfterCall(ctx, call)
		this.stage = new stageCalls.SchedulerScheduleNamedAfterCall(ctx, call)
		this.dev = new devCalls.SchedulerScheduleNamedAfterCall(ctx, call)
	}

	get isV1(): productionCalls.SchedulerScheduleNamedAfterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SchedulerScheduleNamedAfterCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.SchedulerScheduleNamedAfterCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.SchedulerScheduleNamedAfterCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.SchedulerScheduleNamedAfterCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.SchedulerScheduleNamedAfterCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.SchedulerScheduleNamedAfterCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.SchedulerScheduleNamedAfterCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.SchedulerScheduleNamedAfterCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SchedulerScheduleNamedAfterCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.SchedulerScheduleNamedAfterCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.SchedulerScheduleNamedAfterCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.SchedulerScheduleNamedAfterCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.SchedulerScheduleNamedAfterCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.SchedulerScheduleNamedAfterCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.SchedulerScheduleNamedAfterCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.SchedulerScheduleNamedAfterCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.SchedulerScheduleNamedAfterCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.SchedulerScheduleNamedAfterCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.SchedulerScheduleNamedAfterCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.SchedulerScheduleNamedAfterCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.SchedulerScheduleNamedAfterCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.SchedulerScheduleNamedAfterCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.SchedulerScheduleNamedAfterCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.SchedulerScheduleNamedAfterCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SchedulerScheduleNamedAfterCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.SchedulerScheduleNamedAfterCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.SchedulerScheduleNamedAfterCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.SchedulerScheduleNamedAfterCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.SchedulerScheduleNamedAfterCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.SchedulerScheduleNamedAfterCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.SchedulerScheduleNamedAfterCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.SchedulerScheduleNamedAfterCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.SchedulerScheduleNamedAfterCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.SchedulerScheduleNamedAfterCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.SchedulerScheduleNamedAfterCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.SchedulerScheduleNamedAfterCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.SchedulerScheduleNamedAfterCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.SchedulerScheduleNamedAfterCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.SchedulerScheduleNamedAfterCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.SchedulerScheduleNamedAfterCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.SchedulerScheduleNamedAfterCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.SchedulerScheduleNamedAfterCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.SchedulerScheduleNamedAfterCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SchedulerScheduleNamedAfterCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SchedulerScheduleNamedAfterCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.SchedulerScheduleNamedAfterCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SchedulerScheduleNamedAfterCall['asV60'] {
		return this.dev.asV60
	}
}

export class SessionPurgeKeysCall {
	private readonly production: productionCalls.SessionPurgeKeysCall
	private readonly stage: stageCalls.SessionPurgeKeysCall
	private readonly dev: devCalls.SessionPurgeKeysCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SessionPurgeKeysCall(ctx, call)
		this.stage = new stageCalls.SessionPurgeKeysCall(ctx, call)
		this.dev = new devCalls.SessionPurgeKeysCall(ctx, call)
	}

	get isV1(): productionCalls.SessionPurgeKeysCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SessionPurgeKeysCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SessionPurgeKeysCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SessionPurgeKeysCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SessionPurgeKeysCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SessionPurgeKeysCall['asV60'] {
		return this.dev.asV60
	}
}

export class SessionSetKeysCall {
	private readonly production: productionCalls.SessionSetKeysCall
	private readonly stage: stageCalls.SessionSetKeysCall
	private readonly dev: devCalls.SessionSetKeysCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SessionSetKeysCall(ctx, call)
		this.stage = new stageCalls.SessionSetKeysCall(ctx, call)
		this.dev = new devCalls.SessionSetKeysCall(ctx, call)
	}

	get isV1(): productionCalls.SessionSetKeysCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SessionSetKeysCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.SessionSetKeysCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SessionSetKeysCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.SessionSetKeysCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SessionSetKeysCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.SessionSetKeysCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SessionSetKeysCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.SessionSetKeysCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SessionSetKeysCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingBondCall {
	private readonly production: productionCalls.StakingBondCall
	private readonly stage: stageCalls.StakingBondCall
	private readonly dev: devCalls.StakingBondCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingBondCall(ctx, call)
		this.stage = new stageCalls.StakingBondCall(ctx, call)
		this.dev = new devCalls.StakingBondCall(ctx, call)
	}

	get isV1(): productionCalls.StakingBondCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingBondCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingBondCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingBondCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingBondCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingBondCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingBondExtraCall {
	private readonly production: productionCalls.StakingBondExtraCall
	private readonly stage: stageCalls.StakingBondExtraCall
	private readonly dev: devCalls.StakingBondExtraCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingBondExtraCall(ctx, call)
		this.stage = new stageCalls.StakingBondExtraCall(ctx, call)
		this.dev = new devCalls.StakingBondExtraCall(ctx, call)
	}

	get isV1(): productionCalls.StakingBondExtraCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingBondExtraCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingBondExtraCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingBondExtraCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingBondExtraCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingBondExtraCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingCancelDeferredSlashCall {
	private readonly production: productionCalls.StakingCancelDeferredSlashCall
	private readonly stage: stageCalls.StakingCancelDeferredSlashCall
	private readonly dev: devCalls.StakingCancelDeferredSlashCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingCancelDeferredSlashCall(ctx, call)
		this.stage = new stageCalls.StakingCancelDeferredSlashCall(ctx, call)
		this.dev = new devCalls.StakingCancelDeferredSlashCall(ctx, call)
	}

	get isV1(): productionCalls.StakingCancelDeferredSlashCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingCancelDeferredSlashCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingCancelDeferredSlashCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingCancelDeferredSlashCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingCancelDeferredSlashCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingCancelDeferredSlashCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingChillCall {
	private readonly production: productionCalls.StakingChillCall
	private readonly stage: stageCalls.StakingChillCall
	private readonly dev: devCalls.StakingChillCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingChillCall(ctx, call)
		this.stage = new stageCalls.StakingChillCall(ctx, call)
		this.dev = new devCalls.StakingChillCall(ctx, call)
	}

	get isV1(): productionCalls.StakingChillCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingChillCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingChillCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingChillCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingChillCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingChillCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingChillOtherCall {
	private readonly production: productionCalls.StakingChillOtherCall
	private readonly stage: stageCalls.StakingChillOtherCall
	private readonly dev: devCalls.StakingChillOtherCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingChillOtherCall(ctx, call)
		this.stage = new stageCalls.StakingChillOtherCall(ctx, call)
		this.dev = new devCalls.StakingChillOtherCall(ctx, call)
	}

	get isV42(): productionCalls.StakingChillOtherCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.StakingChillOtherCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.StakingChillOtherCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.StakingChillOtherCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.StakingChillOtherCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingChillOtherCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingForceApplyMinCommissionCall {
	private readonly production: productionCalls.StakingForceApplyMinCommissionCall
	private readonly stage: stageCalls.StakingForceApplyMinCommissionCall
	private readonly dev: devCalls.StakingForceApplyMinCommissionCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceApplyMinCommissionCall(ctx, call)
		this.stage = new stageCalls.StakingForceApplyMinCommissionCall(ctx, call)
		this.dev = new devCalls.StakingForceApplyMinCommissionCall(ctx, call)
	}

	get isV42(): productionCalls.StakingForceApplyMinCommissionCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.StakingForceApplyMinCommissionCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.StakingForceApplyMinCommissionCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.StakingForceApplyMinCommissionCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.StakingForceApplyMinCommissionCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingForceApplyMinCommissionCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingForceNewEraCall {
	private readonly production: productionCalls.StakingForceNewEraCall
	private readonly stage: stageCalls.StakingForceNewEraCall
	private readonly dev: devCalls.StakingForceNewEraCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceNewEraCall(ctx, call)
		this.stage = new stageCalls.StakingForceNewEraCall(ctx, call)
		this.dev = new devCalls.StakingForceNewEraCall(ctx, call)
	}

	get isV1(): productionCalls.StakingForceNewEraCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingForceNewEraCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingForceNewEraCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingForceNewEraCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingForceNewEraCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingForceNewEraCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingForceNewEraAlwaysCall {
	private readonly production: productionCalls.StakingForceNewEraAlwaysCall
	private readonly stage: stageCalls.StakingForceNewEraAlwaysCall
	private readonly dev: devCalls.StakingForceNewEraAlwaysCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceNewEraAlwaysCall(ctx, call)
		this.stage = new stageCalls.StakingForceNewEraAlwaysCall(ctx, call)
		this.dev = new devCalls.StakingForceNewEraAlwaysCall(ctx, call)
	}

	get isV1(): productionCalls.StakingForceNewEraAlwaysCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingForceNewEraAlwaysCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingForceNewEraAlwaysCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingForceNewEraAlwaysCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingForceNewEraAlwaysCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingForceNewEraAlwaysCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingForceNoErasCall {
	private readonly production: productionCalls.StakingForceNoErasCall
	private readonly stage: stageCalls.StakingForceNoErasCall
	private readonly dev: devCalls.StakingForceNoErasCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceNoErasCall(ctx, call)
		this.stage = new stageCalls.StakingForceNoErasCall(ctx, call)
		this.dev = new devCalls.StakingForceNoErasCall(ctx, call)
	}

	get isV1(): productionCalls.StakingForceNoErasCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingForceNoErasCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingForceNoErasCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingForceNoErasCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingForceNoErasCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingForceNoErasCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingForceUnstakeCall {
	private readonly production: productionCalls.StakingForceUnstakeCall
	private readonly stage: stageCalls.StakingForceUnstakeCall
	private readonly dev: devCalls.StakingForceUnstakeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingForceUnstakeCall(ctx, call)
		this.stage = new stageCalls.StakingForceUnstakeCall(ctx, call)
		this.dev = new devCalls.StakingForceUnstakeCall(ctx, call)
	}

	get isV1(): productionCalls.StakingForceUnstakeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingForceUnstakeCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingForceUnstakeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingForceUnstakeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingForceUnstakeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingForceUnstakeCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingIncreaseValidatorCountCall {
	private readonly production: productionCalls.StakingIncreaseValidatorCountCall
	private readonly stage: stageCalls.StakingIncreaseValidatorCountCall
	private readonly dev: devCalls.StakingIncreaseValidatorCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingIncreaseValidatorCountCall(ctx, call)
		this.stage = new stageCalls.StakingIncreaseValidatorCountCall(ctx, call)
		this.dev = new devCalls.StakingIncreaseValidatorCountCall(ctx, call)
	}

	get isV1(): productionCalls.StakingIncreaseValidatorCountCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingIncreaseValidatorCountCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingIncreaseValidatorCountCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingIncreaseValidatorCountCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingIncreaseValidatorCountCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingIncreaseValidatorCountCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingKickCall {
	private readonly production: productionCalls.StakingKickCall
	private readonly stage: stageCalls.StakingKickCall
	private readonly dev: devCalls.StakingKickCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingKickCall(ctx, call)
		this.stage = new stageCalls.StakingKickCall(ctx, call)
		this.dev = new devCalls.StakingKickCall(ctx, call)
	}

	get isV1(): productionCalls.StakingKickCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingKickCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingKickCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingKickCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingKickCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingKickCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingNominateCall {
	private readonly production: productionCalls.StakingNominateCall
	private readonly stage: stageCalls.StakingNominateCall
	private readonly dev: devCalls.StakingNominateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingNominateCall(ctx, call)
		this.stage = new stageCalls.StakingNominateCall(ctx, call)
		this.dev = new devCalls.StakingNominateCall(ctx, call)
	}

	get isV1(): productionCalls.StakingNominateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingNominateCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingNominateCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingNominateCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingNominateCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingNominateCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingPayoutStakersCall {
	private readonly production: productionCalls.StakingPayoutStakersCall
	private readonly stage: stageCalls.StakingPayoutStakersCall
	private readonly dev: devCalls.StakingPayoutStakersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingPayoutStakersCall(ctx, call)
		this.stage = new stageCalls.StakingPayoutStakersCall(ctx, call)
		this.dev = new devCalls.StakingPayoutStakersCall(ctx, call)
	}

	get isV1(): productionCalls.StakingPayoutStakersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingPayoutStakersCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingPayoutStakersCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingPayoutStakersCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingPayoutStakersCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingPayoutStakersCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingReapStashCall {
	private readonly production: productionCalls.StakingReapStashCall
	private readonly stage: stageCalls.StakingReapStashCall
	private readonly dev: devCalls.StakingReapStashCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingReapStashCall(ctx, call)
		this.stage = new stageCalls.StakingReapStashCall(ctx, call)
		this.dev = new devCalls.StakingReapStashCall(ctx, call)
	}

	get isV1(): productionCalls.StakingReapStashCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingReapStashCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingReapStashCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingReapStashCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingReapStashCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingReapStashCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingRebondCall {
	private readonly production: productionCalls.StakingRebondCall
	private readonly stage: stageCalls.StakingRebondCall
	private readonly dev: devCalls.StakingRebondCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingRebondCall(ctx, call)
		this.stage = new stageCalls.StakingRebondCall(ctx, call)
		this.dev = new devCalls.StakingRebondCall(ctx, call)
	}

	get isV1(): productionCalls.StakingRebondCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingRebondCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingRebondCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingRebondCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingRebondCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingRebondCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingScaleValidatorCountCall {
	private readonly production: productionCalls.StakingScaleValidatorCountCall
	private readonly stage: stageCalls.StakingScaleValidatorCountCall
	private readonly dev: devCalls.StakingScaleValidatorCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingScaleValidatorCountCall(ctx, call)
		this.stage = new stageCalls.StakingScaleValidatorCountCall(ctx, call)
		this.dev = new devCalls.StakingScaleValidatorCountCall(ctx, call)
	}

	get isV1(): productionCalls.StakingScaleValidatorCountCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingScaleValidatorCountCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingScaleValidatorCountCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingScaleValidatorCountCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingScaleValidatorCountCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingScaleValidatorCountCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSetControllerCall {
	private readonly production: productionCalls.StakingSetControllerCall
	private readonly stage: stageCalls.StakingSetControllerCall
	private readonly dev: devCalls.StakingSetControllerCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetControllerCall(ctx, call)
		this.stage = new stageCalls.StakingSetControllerCall(ctx, call)
		this.dev = new devCalls.StakingSetControllerCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetControllerCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetControllerCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingSetControllerCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingSetControllerCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingSetControllerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingSetControllerCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSetHistoryDepthCall {
	private readonly production: productionCalls.StakingSetHistoryDepthCall
	private readonly stage: stageCalls.StakingSetHistoryDepthCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetHistoryDepthCall(ctx, call)
		this.stage = new stageCalls.StakingSetHistoryDepthCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetHistoryDepthCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetHistoryDepthCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingSetHistoryDepthCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingSetHistoryDepthCall['asV33'] {
		return this.stage.asV33
	}
}

export class StakingSetInvulnerablesCall {
	private readonly production: productionCalls.StakingSetInvulnerablesCall
	private readonly stage: stageCalls.StakingSetInvulnerablesCall
	private readonly dev: devCalls.StakingSetInvulnerablesCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetInvulnerablesCall(ctx, call)
		this.stage = new stageCalls.StakingSetInvulnerablesCall(ctx, call)
		this.dev = new devCalls.StakingSetInvulnerablesCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetInvulnerablesCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetInvulnerablesCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingSetInvulnerablesCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingSetInvulnerablesCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingSetInvulnerablesCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingSetInvulnerablesCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSetMinCommissionCall {
	private readonly production: productionCalls.StakingSetMinCommissionCall
	private readonly stage: stageCalls.StakingSetMinCommissionCall
	private readonly dev: devCalls.StakingSetMinCommissionCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetMinCommissionCall(ctx, call)
		this.stage = new stageCalls.StakingSetMinCommissionCall(ctx, call)
		this.dev = new devCalls.StakingSetMinCommissionCall(ctx, call)
	}

	get isV53(): productionCalls.StakingSetMinCommissionCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.StakingSetMinCommissionCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.StakingSetMinCommissionCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.StakingSetMinCommissionCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.StakingSetMinCommissionCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingSetMinCommissionCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSetPayeeCall {
	private readonly production: productionCalls.StakingSetPayeeCall
	private readonly stage: stageCalls.StakingSetPayeeCall
	private readonly dev: devCalls.StakingSetPayeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetPayeeCall(ctx, call)
		this.stage = new stageCalls.StakingSetPayeeCall(ctx, call)
		this.dev = new devCalls.StakingSetPayeeCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetPayeeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetPayeeCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingSetPayeeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingSetPayeeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingSetPayeeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingSetPayeeCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSetStakingConfigsCall {
	private readonly production: productionCalls.StakingSetStakingConfigsCall
	private readonly stage: stageCalls.StakingSetStakingConfigsCall
	private readonly dev: devCalls.StakingSetStakingConfigsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetStakingConfigsCall(ctx, call)
		this.stage = new stageCalls.StakingSetStakingConfigsCall(ctx, call)
		this.dev = new devCalls.StakingSetStakingConfigsCall(ctx, call)
	}

	get isV42(): productionCalls.StakingSetStakingConfigsCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.StakingSetStakingConfigsCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.StakingSetStakingConfigsCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.StakingSetStakingConfigsCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.StakingSetStakingConfigsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingSetStakingConfigsCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSetValidatorCountCall {
	private readonly production: productionCalls.StakingSetValidatorCountCall
	private readonly stage: stageCalls.StakingSetValidatorCountCall
	private readonly dev: devCalls.StakingSetValidatorCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSetValidatorCountCall(ctx, call)
		this.stage = new stageCalls.StakingSetValidatorCountCall(ctx, call)
		this.dev = new devCalls.StakingSetValidatorCountCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSetValidatorCountCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSetValidatorCountCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingSetValidatorCountCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingSetValidatorCountCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingSetValidatorCountCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingSetValidatorCountCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSubmitElectionSolutionCall {
	private readonly production: productionCalls.StakingSubmitElectionSolutionCall
	private readonly stage: stageCalls.StakingSubmitElectionSolutionCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSubmitElectionSolutionCall(ctx, call)
		this.stage = new stageCalls.StakingSubmitElectionSolutionCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSubmitElectionSolutionCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSubmitElectionSolutionCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingSubmitElectionSolutionCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingSubmitElectionSolutionCall['asV33'] {
		return this.stage.asV33
	}
}

export class StakingSubmitElectionSolutionUnsignedCall {
	private readonly production: productionCalls.StakingSubmitElectionSolutionUnsignedCall
	private readonly stage: stageCalls.StakingSubmitElectionSolutionUnsignedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingSubmitElectionSolutionUnsignedCall(ctx, call)
		this.stage = new stageCalls.StakingSubmitElectionSolutionUnsignedCall(ctx, call)
	}

	get isV1(): productionCalls.StakingSubmitElectionSolutionUnsignedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingSubmitElectionSolutionUnsignedCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingSubmitElectionSolutionUnsignedCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingSubmitElectionSolutionUnsignedCall['asV33'] {
		return this.stage.asV33
	}
}

export class StakingUnbondCall {
	private readonly production: productionCalls.StakingUnbondCall
	private readonly stage: stageCalls.StakingUnbondCall
	private readonly dev: devCalls.StakingUnbondCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingUnbondCall(ctx, call)
		this.stage = new stageCalls.StakingUnbondCall(ctx, call)
		this.dev = new devCalls.StakingUnbondCall(ctx, call)
	}

	get isV1(): productionCalls.StakingUnbondCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingUnbondCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingUnbondCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingUnbondCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingUnbondCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingUnbondCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingValidateCall {
	private readonly production: productionCalls.StakingValidateCall
	private readonly stage: stageCalls.StakingValidateCall
	private readonly dev: devCalls.StakingValidateCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingValidateCall(ctx, call)
		this.stage = new stageCalls.StakingValidateCall(ctx, call)
		this.dev = new devCalls.StakingValidateCall(ctx, call)
	}

	get isV1(): productionCalls.StakingValidateCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingValidateCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingValidateCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingValidateCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingValidateCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingValidateCall['asV60'] {
		return this.dev.asV60
	}
}

export class StakingWithdrawUnbondedCall {
	private readonly production: productionCalls.StakingWithdrawUnbondedCall
	private readonly stage: stageCalls.StakingWithdrawUnbondedCall
	private readonly dev: devCalls.StakingWithdrawUnbondedCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.StakingWithdrawUnbondedCall(ctx, call)
		this.stage = new stageCalls.StakingWithdrawUnbondedCall(ctx, call)
		this.dev = new devCalls.StakingWithdrawUnbondedCall(ctx, call)
	}

	get isV1(): productionCalls.StakingWithdrawUnbondedCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.StakingWithdrawUnbondedCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.StakingWithdrawUnbondedCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.StakingWithdrawUnbondedCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.StakingWithdrawUnbondedCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.StakingWithdrawUnbondedCall['asV60'] {
		return this.dev.asV60
	}
}

export class SudoSetKeyCall {
	private readonly production: productionCalls.SudoSetKeyCall
	private readonly stage: stageCalls.SudoSetKeyCall
	private readonly dev: devCalls.SudoSetKeyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SudoSetKeyCall(ctx, call)
		this.stage = new stageCalls.SudoSetKeyCall(ctx, call)
		this.dev = new devCalls.SudoSetKeyCall(ctx, call)
	}

	get isV22(): productionCalls.SudoSetKeyCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SudoSetKeyCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.SudoSetKeyCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SudoSetKeyCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SudoSetKeyCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SudoSetKeyCall['asV60'] {
		return this.dev.asV60
	}
}

export class SudoSudoCall {
	private readonly production: productionCalls.SudoSudoCall
	private readonly stage: stageCalls.SudoSudoCall
	private readonly dev: devCalls.SudoSudoCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SudoSudoCall(ctx, call)
		this.stage = new stageCalls.SudoSudoCall(ctx, call)
		this.dev = new devCalls.SudoSudoCall(ctx, call)
	}

	get isV22(): productionCalls.SudoSudoCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SudoSudoCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.SudoSudoCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SudoSudoCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SudoSudoCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SudoSudoCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SudoSudoCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SudoSudoCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SudoSudoCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SudoSudoCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SudoSudoCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SudoSudoCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SudoSudoCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SudoSudoCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SudoSudoCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SudoSudoCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SudoSudoCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SudoSudoCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SudoSudoCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SudoSudoCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SudoSudoCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SudoSudoCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SudoSudoCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SudoSudoCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SudoSudoCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SudoSudoCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SudoSudoCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SudoSudoCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SudoSudoCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SudoSudoCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SudoSudoCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SudoSudoCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SudoSudoCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SudoSudoCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SudoSudoCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SudoSudoCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.SudoSudoCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SudoSudoCall['asV60'] {
		return this.dev.asV60
	}
}

export class SudoSudoAsCall {
	private readonly production: productionCalls.SudoSudoAsCall
	private readonly stage: stageCalls.SudoSudoAsCall
	private readonly dev: devCalls.SudoSudoAsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SudoSudoAsCall(ctx, call)
		this.stage = new stageCalls.SudoSudoAsCall(ctx, call)
		this.dev = new devCalls.SudoSudoAsCall(ctx, call)
	}

	get isV22(): productionCalls.SudoSudoAsCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SudoSudoAsCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.SudoSudoAsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SudoSudoAsCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SudoSudoAsCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SudoSudoAsCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SudoSudoAsCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SudoSudoAsCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SudoSudoAsCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SudoSudoAsCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SudoSudoAsCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SudoSudoAsCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SudoSudoAsCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SudoSudoAsCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SudoSudoAsCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SudoSudoAsCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SudoSudoAsCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SudoSudoAsCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SudoSudoAsCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SudoSudoAsCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SudoSudoAsCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SudoSudoAsCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SudoSudoAsCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SudoSudoAsCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SudoSudoAsCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SudoSudoAsCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SudoSudoAsCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SudoSudoAsCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SudoSudoAsCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SudoSudoAsCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SudoSudoAsCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SudoSudoAsCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SudoSudoAsCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SudoSudoAsCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SudoSudoAsCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SudoSudoAsCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.SudoSudoAsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SudoSudoAsCall['asV60'] {
		return this.dev.asV60
	}
}

export class SudoSudoUncheckedWeightCall {
	private readonly production: productionCalls.SudoSudoUncheckedWeightCall
	private readonly stage: stageCalls.SudoSudoUncheckedWeightCall
	private readonly dev: devCalls.SudoSudoUncheckedWeightCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SudoSudoUncheckedWeightCall(ctx, call)
		this.stage = new stageCalls.SudoSudoUncheckedWeightCall(ctx, call)
		this.dev = new devCalls.SudoSudoUncheckedWeightCall(ctx, call)
	}

	get isV22(): productionCalls.SudoSudoUncheckedWeightCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.SudoSudoUncheckedWeightCall['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.SudoSudoUncheckedWeightCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.SudoSudoUncheckedWeightCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.SudoSudoUncheckedWeightCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SudoSudoUncheckedWeightCall['asV60'] {
		return this.dev.asV60
	}
}

export class SystemFillBlockCall {
	private readonly production: productionCalls.SystemFillBlockCall
	private readonly stage: stageCalls.SystemFillBlockCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemFillBlockCall(ctx, call)
		this.stage = new stageCalls.SystemFillBlockCall(ctx, call)
	}

	get isV1(): productionCalls.SystemFillBlockCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemFillBlockCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemFillBlockCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemFillBlockCall['asV33'] {
		return this.stage.asV33
	}
}

export class SystemKillPrefixCall {
	private readonly production: productionCalls.SystemKillPrefixCall
	private readonly stage: stageCalls.SystemKillPrefixCall
	private readonly dev: devCalls.SystemKillPrefixCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemKillPrefixCall(ctx, call)
		this.stage = new stageCalls.SystemKillPrefixCall(ctx, call)
		this.dev = new devCalls.SystemKillPrefixCall(ctx, call)
	}

	get isV1(): productionCalls.SystemKillPrefixCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemKillPrefixCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemKillPrefixCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemKillPrefixCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SystemKillPrefixCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SystemKillPrefixCall['asV60'] {
		return this.dev.asV60
	}
}

export class SystemKillStorageCall {
	private readonly production: productionCalls.SystemKillStorageCall
	private readonly stage: stageCalls.SystemKillStorageCall
	private readonly dev: devCalls.SystemKillStorageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemKillStorageCall(ctx, call)
		this.stage = new stageCalls.SystemKillStorageCall(ctx, call)
		this.dev = new devCalls.SystemKillStorageCall(ctx, call)
	}

	get isV1(): productionCalls.SystemKillStorageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemKillStorageCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemKillStorageCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemKillStorageCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SystemKillStorageCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SystemKillStorageCall['asV60'] {
		return this.dev.asV60
	}
}

export class SystemRemarkCall {
	private readonly production: productionCalls.SystemRemarkCall
	private readonly stage: stageCalls.SystemRemarkCall
	private readonly dev: devCalls.SystemRemarkCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemRemarkCall(ctx, call)
		this.stage = new stageCalls.SystemRemarkCall(ctx, call)
		this.dev = new devCalls.SystemRemarkCall(ctx, call)
	}

	get isV1(): productionCalls.SystemRemarkCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemRemarkCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemRemarkCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemRemarkCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SystemRemarkCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SystemRemarkCall['asV60'] {
		return this.dev.asV60
	}
}

export class SystemRemarkWithEventCall {
	private readonly production: productionCalls.SystemRemarkWithEventCall
	private readonly stage: stageCalls.SystemRemarkWithEventCall
	private readonly dev: devCalls.SystemRemarkWithEventCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemRemarkWithEventCall(ctx, call)
		this.stage = new stageCalls.SystemRemarkWithEventCall(ctx, call)
		this.dev = new devCalls.SystemRemarkWithEventCall(ctx, call)
	}

	get isV42(): productionCalls.SystemRemarkWithEventCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.SystemRemarkWithEventCall['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageCalls.SystemRemarkWithEventCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.SystemRemarkWithEventCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.SystemRemarkWithEventCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SystemRemarkWithEventCall['asV60'] {
		return this.dev.asV60
	}
}

export class SystemSetChangesTrieConfigCall {
	private readonly production: productionCalls.SystemSetChangesTrieConfigCall
	private readonly stage: stageCalls.SystemSetChangesTrieConfigCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetChangesTrieConfigCall(ctx, call)
		this.stage = new stageCalls.SystemSetChangesTrieConfigCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetChangesTrieConfigCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetChangesTrieConfigCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemSetChangesTrieConfigCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemSetChangesTrieConfigCall['asV33'] {
		return this.stage.asV33
	}
}

export class SystemSetCodeCall {
	private readonly production: productionCalls.SystemSetCodeCall
	private readonly stage: stageCalls.SystemSetCodeCall
	private readonly dev: devCalls.SystemSetCodeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetCodeCall(ctx, call)
		this.stage = new stageCalls.SystemSetCodeCall(ctx, call)
		this.dev = new devCalls.SystemSetCodeCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetCodeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetCodeCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemSetCodeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemSetCodeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SystemSetCodeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SystemSetCodeCall['asV60'] {
		return this.dev.asV60
	}
}

export class SystemSetCodeWithoutChecksCall {
	private readonly production: productionCalls.SystemSetCodeWithoutChecksCall
	private readonly stage: stageCalls.SystemSetCodeWithoutChecksCall
	private readonly dev: devCalls.SystemSetCodeWithoutChecksCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetCodeWithoutChecksCall(ctx, call)
		this.stage = new stageCalls.SystemSetCodeWithoutChecksCall(ctx, call)
		this.dev = new devCalls.SystemSetCodeWithoutChecksCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetCodeWithoutChecksCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetCodeWithoutChecksCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemSetCodeWithoutChecksCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemSetCodeWithoutChecksCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SystemSetCodeWithoutChecksCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SystemSetCodeWithoutChecksCall['asV60'] {
		return this.dev.asV60
	}
}

export class SystemSetHeapPagesCall {
	private readonly production: productionCalls.SystemSetHeapPagesCall
	private readonly stage: stageCalls.SystemSetHeapPagesCall
	private readonly dev: devCalls.SystemSetHeapPagesCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetHeapPagesCall(ctx, call)
		this.stage = new stageCalls.SystemSetHeapPagesCall(ctx, call)
		this.dev = new devCalls.SystemSetHeapPagesCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetHeapPagesCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetHeapPagesCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemSetHeapPagesCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemSetHeapPagesCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SystemSetHeapPagesCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SystemSetHeapPagesCall['asV60'] {
		return this.dev.asV60
	}
}

export class SystemSetStorageCall {
	private readonly production: productionCalls.SystemSetStorageCall
	private readonly stage: stageCalls.SystemSetStorageCall
	private readonly dev: devCalls.SystemSetStorageCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.SystemSetStorageCall(ctx, call)
		this.stage = new stageCalls.SystemSetStorageCall(ctx, call)
		this.dev = new devCalls.SystemSetStorageCall(ctx, call)
	}

	get isV1(): productionCalls.SystemSetStorageCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.SystemSetStorageCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.SystemSetStorageCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.SystemSetStorageCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.SystemSetStorageCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SystemSetStorageCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeCloseCall {
	private readonly production: productionCalls.TechnicalCommitteeCloseCall
	private readonly stage: stageCalls.TechnicalCommitteeCloseCall
	private readonly dev: devCalls.TechnicalCommitteeCloseCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeCloseCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeCloseCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeCloseCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeCloseCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeCloseCall['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionCalls.TechnicalCommitteeCloseCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.TechnicalCommitteeCloseCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.TechnicalCommitteeCloseCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalCommitteeCloseCall['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageCalls.TechnicalCommitteeCloseCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.TechnicalCommitteeCloseCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.TechnicalCommitteeCloseCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalCommitteeCloseCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeCloseOldWeightCall {
	private readonly production: productionCalls.TechnicalCommitteeCloseOldWeightCall
	private readonly stage: stageCalls.TechnicalCommitteeCloseOldWeightCall
	private readonly dev: devCalls.TechnicalCommitteeCloseOldWeightCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeCloseOldWeightCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeCloseOldWeightCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeCloseOldWeightCall(ctx, call)
	}

	get isV53(): productionCalls.TechnicalCommitteeCloseOldWeightCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.TechnicalCommitteeCloseOldWeightCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.TechnicalCommitteeCloseOldWeightCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.TechnicalCommitteeCloseOldWeightCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.TechnicalCommitteeCloseOldWeightCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalCommitteeCloseOldWeightCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeDisapproveProposalCall {
	private readonly production: productionCalls.TechnicalCommitteeDisapproveProposalCall
	private readonly stage: stageCalls.TechnicalCommitteeDisapproveProposalCall
	private readonly dev: devCalls.TechnicalCommitteeDisapproveProposalCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeDisapproveProposalCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeDisapproveProposalCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeDisapproveProposalCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeDisapproveProposalCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeDisapproveProposalCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalCommitteeDisapproveProposalCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalCommitteeDisapproveProposalCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalCommitteeDisapproveProposalCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalCommitteeDisapproveProposalCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeExecuteCall {
	private readonly production: productionCalls.TechnicalCommitteeExecuteCall
	private readonly stage: stageCalls.TechnicalCommitteeExecuteCall
	private readonly dev: devCalls.TechnicalCommitteeExecuteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeExecuteCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeExecuteCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeExecuteCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeExecuteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeExecuteCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.TechnicalCommitteeExecuteCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.TechnicalCommitteeExecuteCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.TechnicalCommitteeExecuteCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.TechnicalCommitteeExecuteCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.TechnicalCommitteeExecuteCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.TechnicalCommitteeExecuteCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.TechnicalCommitteeExecuteCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.TechnicalCommitteeExecuteCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.TechnicalCommitteeExecuteCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.TechnicalCommitteeExecuteCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.TechnicalCommitteeExecuteCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.TechnicalCommitteeExecuteCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.TechnicalCommitteeExecuteCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.TechnicalCommitteeExecuteCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.TechnicalCommitteeExecuteCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.TechnicalCommitteeExecuteCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.TechnicalCommitteeExecuteCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.TechnicalCommitteeExecuteCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.TechnicalCommitteeExecuteCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.TechnicalCommitteeExecuteCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.TechnicalCommitteeExecuteCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.TechnicalCommitteeExecuteCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.TechnicalCommitteeExecuteCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.TechnicalCommitteeExecuteCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.TechnicalCommitteeExecuteCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.TechnicalCommitteeExecuteCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.TechnicalCommitteeExecuteCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.TechnicalCommitteeExecuteCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.TechnicalCommitteeExecuteCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.TechnicalCommitteeExecuteCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.TechnicalCommitteeExecuteCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.TechnicalCommitteeExecuteCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.TechnicalCommitteeExecuteCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.TechnicalCommitteeExecuteCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.TechnicalCommitteeExecuteCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.TechnicalCommitteeExecuteCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.TechnicalCommitteeExecuteCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.TechnicalCommitteeExecuteCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.TechnicalCommitteeExecuteCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.TechnicalCommitteeExecuteCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.TechnicalCommitteeExecuteCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.TechnicalCommitteeExecuteCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.TechnicalCommitteeExecuteCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.TechnicalCommitteeExecuteCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.TechnicalCommitteeExecuteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalCommitteeExecuteCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeProposeCall {
	private readonly production: productionCalls.TechnicalCommitteeProposeCall
	private readonly stage: stageCalls.TechnicalCommitteeProposeCall
	private readonly dev: devCalls.TechnicalCommitteeProposeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeProposeCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeProposeCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeProposeCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeProposeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeProposeCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.TechnicalCommitteeProposeCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.TechnicalCommitteeProposeCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.TechnicalCommitteeProposeCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.TechnicalCommitteeProposeCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.TechnicalCommitteeProposeCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.TechnicalCommitteeProposeCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.TechnicalCommitteeProposeCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.TechnicalCommitteeProposeCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.TechnicalCommitteeProposeCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.TechnicalCommitteeProposeCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.TechnicalCommitteeProposeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.TechnicalCommitteeProposeCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.TechnicalCommitteeProposeCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.TechnicalCommitteeProposeCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.TechnicalCommitteeProposeCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.TechnicalCommitteeProposeCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.TechnicalCommitteeProposeCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.TechnicalCommitteeProposeCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.TechnicalCommitteeProposeCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.TechnicalCommitteeProposeCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.TechnicalCommitteeProposeCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.TechnicalCommitteeProposeCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.TechnicalCommitteeProposeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.TechnicalCommitteeProposeCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.TechnicalCommitteeProposeCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.TechnicalCommitteeProposeCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.TechnicalCommitteeProposeCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.TechnicalCommitteeProposeCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.TechnicalCommitteeProposeCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.TechnicalCommitteeProposeCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.TechnicalCommitteeProposeCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.TechnicalCommitteeProposeCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.TechnicalCommitteeProposeCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.TechnicalCommitteeProposeCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.TechnicalCommitteeProposeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.TechnicalCommitteeProposeCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.TechnicalCommitteeProposeCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.TechnicalCommitteeProposeCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.TechnicalCommitteeProposeCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.TechnicalCommitteeProposeCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.TechnicalCommitteeProposeCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.TechnicalCommitteeProposeCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.TechnicalCommitteeProposeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalCommitteeProposeCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.TechnicalCommitteeProposeCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.TechnicalCommitteeProposeCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.TechnicalCommitteeProposeCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.TechnicalCommitteeProposeCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.TechnicalCommitteeProposeCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.TechnicalCommitteeProposeCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.TechnicalCommitteeProposeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.TechnicalCommitteeProposeCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.TechnicalCommitteeProposeCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.TechnicalCommitteeProposeCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.TechnicalCommitteeProposeCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.TechnicalCommitteeProposeCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.TechnicalCommitteeProposeCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.TechnicalCommitteeProposeCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.TechnicalCommitteeProposeCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.TechnicalCommitteeProposeCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.TechnicalCommitteeProposeCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.TechnicalCommitteeProposeCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.TechnicalCommitteeProposeCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.TechnicalCommitteeProposeCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.TechnicalCommitteeProposeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.TechnicalCommitteeProposeCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.TechnicalCommitteeProposeCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.TechnicalCommitteeProposeCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.TechnicalCommitteeProposeCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.TechnicalCommitteeProposeCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.TechnicalCommitteeProposeCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.TechnicalCommitteeProposeCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.TechnicalCommitteeProposeCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.TechnicalCommitteeProposeCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.TechnicalCommitteeProposeCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.TechnicalCommitteeProposeCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.TechnicalCommitteeProposeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalCommitteeProposeCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeSetMembersCall {
	private readonly production: productionCalls.TechnicalCommitteeSetMembersCall
	private readonly stage: stageCalls.TechnicalCommitteeSetMembersCall
	private readonly dev: devCalls.TechnicalCommitteeSetMembersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeSetMembersCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeSetMembersCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeSetMembersCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeSetMembersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeSetMembersCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalCommitteeSetMembersCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalCommitteeSetMembersCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalCommitteeSetMembersCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalCommitteeSetMembersCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeVoteCall {
	private readonly production: productionCalls.TechnicalCommitteeVoteCall
	private readonly stage: stageCalls.TechnicalCommitteeVoteCall
	private readonly dev: devCalls.TechnicalCommitteeVoteCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalCommitteeVoteCall(ctx, call)
		this.stage = new stageCalls.TechnicalCommitteeVoteCall(ctx, call)
		this.dev = new devCalls.TechnicalCommitteeVoteCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalCommitteeVoteCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalCommitteeVoteCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalCommitteeVoteCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalCommitteeVoteCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalCommitteeVoteCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalCommitteeVoteCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipAddMemberCall {
	private readonly production: productionCalls.TechnicalMembershipAddMemberCall
	private readonly stage: stageCalls.TechnicalMembershipAddMemberCall
	private readonly dev: devCalls.TechnicalMembershipAddMemberCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipAddMemberCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipAddMemberCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipAddMemberCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipAddMemberCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipAddMemberCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalMembershipAddMemberCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalMembershipAddMemberCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalMembershipAddMemberCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalMembershipAddMemberCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipChangeKeyCall {
	private readonly production: productionCalls.TechnicalMembershipChangeKeyCall
	private readonly stage: stageCalls.TechnicalMembershipChangeKeyCall
	private readonly dev: devCalls.TechnicalMembershipChangeKeyCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipChangeKeyCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipChangeKeyCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipChangeKeyCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipChangeKeyCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipChangeKeyCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalMembershipChangeKeyCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalMembershipChangeKeyCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalMembershipChangeKeyCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalMembershipChangeKeyCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipClearPrimeCall {
	private readonly production: productionCalls.TechnicalMembershipClearPrimeCall
	private readonly stage: stageCalls.TechnicalMembershipClearPrimeCall
	private readonly dev: devCalls.TechnicalMembershipClearPrimeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipClearPrimeCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipClearPrimeCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipClearPrimeCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipClearPrimeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipClearPrimeCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalMembershipClearPrimeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalMembershipClearPrimeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalMembershipClearPrimeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalMembershipClearPrimeCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipRemoveMemberCall {
	private readonly production: productionCalls.TechnicalMembershipRemoveMemberCall
	private readonly stage: stageCalls.TechnicalMembershipRemoveMemberCall
	private readonly dev: devCalls.TechnicalMembershipRemoveMemberCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipRemoveMemberCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipRemoveMemberCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipRemoveMemberCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipRemoveMemberCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipRemoveMemberCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalMembershipRemoveMemberCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalMembershipRemoveMemberCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalMembershipRemoveMemberCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalMembershipRemoveMemberCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipResetMembersCall {
	private readonly production: productionCalls.TechnicalMembershipResetMembersCall
	private readonly stage: stageCalls.TechnicalMembershipResetMembersCall
	private readonly dev: devCalls.TechnicalMembershipResetMembersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipResetMembersCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipResetMembersCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipResetMembersCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipResetMembersCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipResetMembersCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalMembershipResetMembersCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalMembershipResetMembersCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalMembershipResetMembersCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalMembershipResetMembersCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipSetPrimeCall {
	private readonly production: productionCalls.TechnicalMembershipSetPrimeCall
	private readonly stage: stageCalls.TechnicalMembershipSetPrimeCall
	private readonly dev: devCalls.TechnicalMembershipSetPrimeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipSetPrimeCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipSetPrimeCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipSetPrimeCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipSetPrimeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipSetPrimeCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalMembershipSetPrimeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalMembershipSetPrimeCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalMembershipSetPrimeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalMembershipSetPrimeCall['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipSwapMemberCall {
	private readonly production: productionCalls.TechnicalMembershipSwapMemberCall
	private readonly stage: stageCalls.TechnicalMembershipSwapMemberCall
	private readonly dev: devCalls.TechnicalMembershipSwapMemberCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TechnicalMembershipSwapMemberCall(ctx, call)
		this.stage = new stageCalls.TechnicalMembershipSwapMemberCall(ctx, call)
		this.dev = new devCalls.TechnicalMembershipSwapMemberCall(ctx, call)
	}

	get isV1(): productionCalls.TechnicalMembershipSwapMemberCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TechnicalMembershipSwapMemberCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TechnicalMembershipSwapMemberCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TechnicalMembershipSwapMemberCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TechnicalMembershipSwapMemberCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TechnicalMembershipSwapMemberCall['asV60'] {
		return this.dev.asV60
	}
}

export class TimestampSetCall {
	private readonly production: productionCalls.TimestampSetCall
	private readonly stage: stageCalls.TimestampSetCall
	private readonly dev: devCalls.TimestampSetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TimestampSetCall(ctx, call)
		this.stage = new stageCalls.TimestampSetCall(ctx, call)
		this.dev = new devCalls.TimestampSetCall(ctx, call)
	}

	get isV1(): productionCalls.TimestampSetCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TimestampSetCall['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageCalls.TimestampSetCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TimestampSetCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.TimestampSetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TimestampSetCall['asV60'] {
		return this.dev.asV60
	}
}

export class TradingPairRegisterCall {
	private readonly production: productionCalls.TradingPairRegisterCall
	private readonly stage: stageCalls.TradingPairRegisterCall
	private readonly dev: devCalls.TradingPairRegisterCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.TradingPairRegisterCall(ctx, call)
		this.stage = new stageCalls.TradingPairRegisterCall(ctx, call)
		this.dev = new devCalls.TradingPairRegisterCall(ctx, call)
	}

	get isV1(): productionCalls.TradingPairRegisterCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.TradingPairRegisterCall['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionCalls.TradingPairRegisterCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.TradingPairRegisterCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.TradingPairRegisterCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.TradingPairRegisterCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.TradingPairRegisterCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.TradingPairRegisterCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.TradingPairRegisterCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.TradingPairRegisterCall['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityAsDerivativeCall {
	private readonly production: productionCalls.UtilityAsDerivativeCall
	private readonly stage: stageCalls.UtilityAsDerivativeCall
	private readonly dev: devCalls.UtilityAsDerivativeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityAsDerivativeCall(ctx, call)
		this.stage = new stageCalls.UtilityAsDerivativeCall(ctx, call)
		this.dev = new devCalls.UtilityAsDerivativeCall(ctx, call)
	}

	get isV1(): productionCalls.UtilityAsDerivativeCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.UtilityAsDerivativeCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.UtilityAsDerivativeCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.UtilityAsDerivativeCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.UtilityAsDerivativeCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.UtilityAsDerivativeCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.UtilityAsDerivativeCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.UtilityAsDerivativeCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.UtilityAsDerivativeCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.UtilityAsDerivativeCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.UtilityAsDerivativeCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.UtilityAsDerivativeCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.UtilityAsDerivativeCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.UtilityAsDerivativeCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.UtilityAsDerivativeCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.UtilityAsDerivativeCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.UtilityAsDerivativeCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.UtilityAsDerivativeCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.UtilityAsDerivativeCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.UtilityAsDerivativeCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.UtilityAsDerivativeCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.UtilityAsDerivativeCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.UtilityAsDerivativeCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.UtilityAsDerivativeCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.UtilityAsDerivativeCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityAsDerivativeCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityAsDerivativeCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityAsDerivativeCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityAsDerivativeCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityAsDerivativeCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityAsDerivativeCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityAsDerivativeCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityAsDerivativeCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityAsDerivativeCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityAsDerivativeCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityAsDerivativeCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityAsDerivativeCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityAsDerivativeCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityAsDerivativeCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityAsDerivativeCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityAsDerivativeCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityAsDerivativeCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityAsDerivativeCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityAsDerivativeCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.UtilityAsDerivativeCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.UtilityAsDerivativeCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.UtilityAsDerivativeCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.UtilityAsDerivativeCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.UtilityAsDerivativeCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.UtilityAsDerivativeCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.UtilityAsDerivativeCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.UtilityAsDerivativeCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.UtilityAsDerivativeCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityAsDerivativeCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityAsDerivativeCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityAsDerivativeCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityAsDerivativeCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityAsDerivativeCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityAsDerivativeCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityAsDerivativeCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityAsDerivativeCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityAsDerivativeCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityAsDerivativeCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityAsDerivativeCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityAsDerivativeCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityAsDerivativeCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityAsDerivativeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityAsDerivativeCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityAsDerivativeCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityAsDerivativeCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityAsDerivativeCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityAsDerivativeCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityAsDerivativeCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityAsDerivativeCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityAsDerivativeCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityAsDerivativeCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityAsDerivativeCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityAsDerivativeCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.UtilityAsDerivativeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.UtilityAsDerivativeCall['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityBatchCall {
	private readonly production: productionCalls.UtilityBatchCall
	private readonly stage: stageCalls.UtilityBatchCall
	private readonly dev: devCalls.UtilityBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityBatchCall(ctx, call)
		this.stage = new stageCalls.UtilityBatchCall(ctx, call)
		this.dev = new devCalls.UtilityBatchCall(ctx, call)
	}

	get isV1(): productionCalls.UtilityBatchCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.UtilityBatchCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.UtilityBatchCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.UtilityBatchCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.UtilityBatchCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.UtilityBatchCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.UtilityBatchCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.UtilityBatchCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.UtilityBatchCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.UtilityBatchCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.UtilityBatchCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.UtilityBatchCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.UtilityBatchCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.UtilityBatchCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.UtilityBatchCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.UtilityBatchCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.UtilityBatchCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.UtilityBatchCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.UtilityBatchCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.UtilityBatchCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.UtilityBatchCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.UtilityBatchCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.UtilityBatchCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.UtilityBatchCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.UtilityBatchCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityBatchCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityBatchCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityBatchCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityBatchCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityBatchCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityBatchCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityBatchCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityBatchCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityBatchCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityBatchCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityBatchCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityBatchCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityBatchCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityBatchCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityBatchCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityBatchCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityBatchCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityBatchCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityBatchCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.UtilityBatchCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.UtilityBatchCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.UtilityBatchCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.UtilityBatchCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.UtilityBatchCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.UtilityBatchCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.UtilityBatchCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.UtilityBatchCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.UtilityBatchCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityBatchCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityBatchCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityBatchCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityBatchCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityBatchCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityBatchCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityBatchCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityBatchCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityBatchCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityBatchCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityBatchCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityBatchCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityBatchCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityBatchCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityBatchCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityBatchCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityBatchCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityBatchCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityBatchCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityBatchCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityBatchCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityBatchCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityBatchCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityBatchCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityBatchCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.UtilityBatchCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.UtilityBatchCall['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityBatchAllCall {
	private readonly production: productionCalls.UtilityBatchAllCall
	private readonly stage: stageCalls.UtilityBatchAllCall
	private readonly dev: devCalls.UtilityBatchAllCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityBatchAllCall(ctx, call)
		this.stage = new stageCalls.UtilityBatchAllCall(ctx, call)
		this.dev = new devCalls.UtilityBatchAllCall(ctx, call)
	}

	get isV1(): productionCalls.UtilityBatchAllCall['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionCalls.UtilityBatchAllCall['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionCalls.UtilityBatchAllCall['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionCalls.UtilityBatchAllCall['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionCalls.UtilityBatchAllCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.UtilityBatchAllCall['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionCalls.UtilityBatchAllCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.UtilityBatchAllCall['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionCalls.UtilityBatchAllCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.UtilityBatchAllCall['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionCalls.UtilityBatchAllCall['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionCalls.UtilityBatchAllCall['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionCalls.UtilityBatchAllCall['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionCalls.UtilityBatchAllCall['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionCalls.UtilityBatchAllCall['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionCalls.UtilityBatchAllCall['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionCalls.UtilityBatchAllCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.UtilityBatchAllCall['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionCalls.UtilityBatchAllCall['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionCalls.UtilityBatchAllCall['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionCalls.UtilityBatchAllCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.UtilityBatchAllCall['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionCalls.UtilityBatchAllCall['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionCalls.UtilityBatchAllCall['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionCalls.UtilityBatchAllCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityBatchAllCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityBatchAllCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityBatchAllCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityBatchAllCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityBatchAllCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityBatchAllCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityBatchAllCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityBatchAllCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityBatchAllCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityBatchAllCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityBatchAllCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityBatchAllCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityBatchAllCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityBatchAllCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityBatchAllCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityBatchAllCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityBatchAllCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityBatchAllCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityBatchAllCall['asV60'] {
		return this.production.asV60
	}
	get isV33Stage(): stageCalls.UtilityBatchAllCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.UtilityBatchAllCall['asV33'] {
		return this.stage.asV33
	}
	get isV35Stage(): stageCalls.UtilityBatchAllCall['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageCalls.UtilityBatchAllCall['asV35'] {
		return this.stage.asV35
	}
	get isV37Stage(): stageCalls.UtilityBatchAllCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.UtilityBatchAllCall['asV37'] {
		return this.stage.asV37
	}
	get isV38Stage(): stageCalls.UtilityBatchAllCall['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageCalls.UtilityBatchAllCall['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageCalls.UtilityBatchAllCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityBatchAllCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityBatchAllCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityBatchAllCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityBatchAllCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityBatchAllCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityBatchAllCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityBatchAllCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityBatchAllCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityBatchAllCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityBatchAllCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityBatchAllCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityBatchAllCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityBatchAllCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityBatchAllCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityBatchAllCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityBatchAllCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityBatchAllCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityBatchAllCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityBatchAllCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityBatchAllCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityBatchAllCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityBatchAllCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityBatchAllCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityBatchAllCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityBatchAllCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.UtilityBatchAllCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.UtilityBatchAllCall['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityDispatchAsCall {
	private readonly production: productionCalls.UtilityDispatchAsCall
	private readonly stage: stageCalls.UtilityDispatchAsCall
	private readonly dev: devCalls.UtilityDispatchAsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityDispatchAsCall(ctx, call)
		this.stage = new stageCalls.UtilityDispatchAsCall(ctx, call)
		this.dev = new devCalls.UtilityDispatchAsCall(ctx, call)
	}

	get isV42(): productionCalls.UtilityDispatchAsCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityDispatchAsCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityDispatchAsCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityDispatchAsCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityDispatchAsCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityDispatchAsCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityDispatchAsCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityDispatchAsCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityDispatchAsCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityDispatchAsCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityDispatchAsCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityDispatchAsCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityDispatchAsCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityDispatchAsCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityDispatchAsCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityDispatchAsCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityDispatchAsCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityDispatchAsCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityDispatchAsCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityDispatchAsCall['asV60'] {
		return this.production.asV60
	}
	get isV42Stage(): stageCalls.UtilityDispatchAsCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityDispatchAsCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityDispatchAsCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityDispatchAsCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityDispatchAsCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityDispatchAsCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityDispatchAsCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityDispatchAsCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityDispatchAsCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityDispatchAsCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityDispatchAsCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityDispatchAsCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityDispatchAsCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityDispatchAsCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityDispatchAsCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityDispatchAsCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityDispatchAsCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityDispatchAsCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityDispatchAsCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityDispatchAsCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityDispatchAsCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityDispatchAsCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityDispatchAsCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityDispatchAsCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityDispatchAsCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityDispatchAsCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.UtilityDispatchAsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.UtilityDispatchAsCall['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityForceBatchCall {
	private readonly production: productionCalls.UtilityForceBatchCall
	private readonly stage: stageCalls.UtilityForceBatchCall
	private readonly dev: devCalls.UtilityForceBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityForceBatchCall(ctx, call)
		this.stage = new stageCalls.UtilityForceBatchCall(ctx, call)
		this.dev = new devCalls.UtilityForceBatchCall(ctx, call)
	}

	get isV42(): productionCalls.UtilityForceBatchCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.UtilityForceBatchCall['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionCalls.UtilityForceBatchCall['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionCalls.UtilityForceBatchCall['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionCalls.UtilityForceBatchCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.UtilityForceBatchCall['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionCalls.UtilityForceBatchCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.UtilityForceBatchCall['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionCalls.UtilityForceBatchCall['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionCalls.UtilityForceBatchCall['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionCalls.UtilityForceBatchCall['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionCalls.UtilityForceBatchCall['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionCalls.UtilityForceBatchCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityForceBatchCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityForceBatchCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityForceBatchCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityForceBatchCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityForceBatchCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityForceBatchCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityForceBatchCall['asV60'] {
		return this.production.asV60
	}
	get isV42Stage(): stageCalls.UtilityForceBatchCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.UtilityForceBatchCall['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageCalls.UtilityForceBatchCall['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageCalls.UtilityForceBatchCall['asV43'] {
		return this.stage.asV43
	}
	get isV44Stage(): stageCalls.UtilityForceBatchCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.UtilityForceBatchCall['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageCalls.UtilityForceBatchCall['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageCalls.UtilityForceBatchCall['asV45'] {
		return this.stage.asV45
	}
	get isV46Stage(): stageCalls.UtilityForceBatchCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.UtilityForceBatchCall['asV46'] {
		return this.stage.asV46
	}
	get isV47Stage(): stageCalls.UtilityForceBatchCall['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageCalls.UtilityForceBatchCall['asV47'] {
		return this.stage.asV47
	}
	get isV48Stage(): stageCalls.UtilityForceBatchCall['isV48'] {
		return this.stage.isV48
	}
	get asV48Stage(): stageCalls.UtilityForceBatchCall['asV48'] {
		return this.stage.asV48
	}
	get isV52Stage(): stageCalls.UtilityForceBatchCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityForceBatchCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityForceBatchCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityForceBatchCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityForceBatchCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityForceBatchCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityForceBatchCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityForceBatchCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityForceBatchCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityForceBatchCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityForceBatchCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityForceBatchCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.UtilityForceBatchCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.UtilityForceBatchCall['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityWithWeightCall {
	private readonly production: productionCalls.UtilityWithWeightCall
	private readonly stage: stageCalls.UtilityWithWeightCall
	private readonly dev: devCalls.UtilityWithWeightCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.UtilityWithWeightCall(ctx, call)
		this.stage = new stageCalls.UtilityWithWeightCall(ctx, call)
		this.dev = new devCalls.UtilityWithWeightCall(ctx, call)
	}

	get isV53(): productionCalls.UtilityWithWeightCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.UtilityWithWeightCall['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionCalls.UtilityWithWeightCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.UtilityWithWeightCall['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionCalls.UtilityWithWeightCall['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionCalls.UtilityWithWeightCall['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionCalls.UtilityWithWeightCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.UtilityWithWeightCall['asV60'] {
		return this.production.asV60
	}
	get isV52Stage(): stageCalls.UtilityWithWeightCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.UtilityWithWeightCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.UtilityWithWeightCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.UtilityWithWeightCall['asV54'] {
		return this.stage.asV54
	}
	get isV55Stage(): stageCalls.UtilityWithWeightCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.UtilityWithWeightCall['asV55'] {
		return this.stage.asV55
	}
	get isV57Stage(): stageCalls.UtilityWithWeightCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.UtilityWithWeightCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.UtilityWithWeightCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.UtilityWithWeightCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Stage(): stageCalls.UtilityWithWeightCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.UtilityWithWeightCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.UtilityWithWeightCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.UtilityWithWeightCall['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsClaimCrowdloanRewardsCall {
	private readonly production: productionCalls.VestedRewardsClaimCrowdloanRewardsCall
	private readonly stage: stageCalls.VestedRewardsClaimCrowdloanRewardsCall
	private readonly dev: devCalls.VestedRewardsClaimCrowdloanRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsClaimCrowdloanRewardsCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsClaimCrowdloanRewardsCall(ctx, call)
		this.dev = new devCalls.VestedRewardsClaimCrowdloanRewardsCall(ctx, call)
	}

	get isV33(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.VestedRewardsClaimCrowdloanRewardsCall['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageCalls.VestedRewardsClaimCrowdloanRewardsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.VestedRewardsClaimCrowdloanRewardsCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.VestedRewardsClaimCrowdloanRewardsCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.VestedRewardsClaimCrowdloanRewardsCall['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageCalls.VestedRewardsClaimCrowdloanRewardsCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.VestedRewardsClaimCrowdloanRewardsCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.VestedRewardsClaimCrowdloanRewardsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.VestedRewardsClaimCrowdloanRewardsCall['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsClaimRewardsCall {
	private readonly production: productionCalls.VestedRewardsClaimRewardsCall
	private readonly stage: stageCalls.VestedRewardsClaimRewardsCall
	private readonly dev: devCalls.VestedRewardsClaimRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsClaimRewardsCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsClaimRewardsCall(ctx, call)
		this.dev = new devCalls.VestedRewardsClaimRewardsCall(ctx, call)
	}

	get isV7(): productionCalls.VestedRewardsClaimRewardsCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.VestedRewardsClaimRewardsCall['asV7'] {
		return this.production.asV7
	}
	get isV33Stage(): stageCalls.VestedRewardsClaimRewardsCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.VestedRewardsClaimRewardsCall['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devCalls.VestedRewardsClaimRewardsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.VestedRewardsClaimRewardsCall['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsInjectMarketMakersCall {
	private readonly production: productionCalls.VestedRewardsInjectMarketMakersCall
	private readonly stage: stageCalls.VestedRewardsInjectMarketMakersCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsInjectMarketMakersCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsInjectMarketMakersCall(ctx, call)
	}

	get isV7(): productionCalls.VestedRewardsInjectMarketMakersCall['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionCalls.VestedRewardsInjectMarketMakersCall['asV7'] {
		return this.production.asV7
	}
	get isV33Stage(): stageCalls.VestedRewardsInjectMarketMakersCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.VestedRewardsInjectMarketMakersCall['asV33'] {
		return this.stage.asV33
	}
}

export class VestedRewardsRegisterCrowdloanCall {
	private readonly production: productionCalls.VestedRewardsRegisterCrowdloanCall
	private readonly stage: stageCalls.VestedRewardsRegisterCrowdloanCall
	private readonly dev: devCalls.VestedRewardsRegisterCrowdloanCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsRegisterCrowdloanCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsRegisterCrowdloanCall(ctx, call)
		this.dev = new devCalls.VestedRewardsRegisterCrowdloanCall(ctx, call)
	}

	get isV53(): productionCalls.VestedRewardsRegisterCrowdloanCall['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionCalls.VestedRewardsRegisterCrowdloanCall['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageCalls.VestedRewardsRegisterCrowdloanCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.VestedRewardsRegisterCrowdloanCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.VestedRewardsRegisterCrowdloanCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.VestedRewardsRegisterCrowdloanCall['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsSetAssetPairCall {
	private readonly production: productionCalls.VestedRewardsSetAssetPairCall
	private readonly stage: stageCalls.VestedRewardsSetAssetPairCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsSetAssetPairCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsSetAssetPairCall(ctx, call)
	}

	get isV22(): productionCalls.VestedRewardsSetAssetPairCall['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionCalls.VestedRewardsSetAssetPairCall['asV22'] {
		return this.production.asV22
	}
	get isV42(): productionCalls.VestedRewardsSetAssetPairCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.VestedRewardsSetAssetPairCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.VestedRewardsSetAssetPairCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.VestedRewardsSetAssetPairCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.VestedRewardsSetAssetPairCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.VestedRewardsSetAssetPairCall['asV42'] {
		return this.stage.asV42
	}
}

export class VestedRewardsUpdateRewardsCall {
	private readonly production: productionCalls.VestedRewardsUpdateRewardsCall
	private readonly stage: stageCalls.VestedRewardsUpdateRewardsCall
	private readonly dev: devCalls.VestedRewardsUpdateRewardsCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.VestedRewardsUpdateRewardsCall(ctx, call)
		this.stage = new stageCalls.VestedRewardsUpdateRewardsCall(ctx, call)
		this.dev = new devCalls.VestedRewardsUpdateRewardsCall(ctx, call)
	}

	get isV46(): productionCalls.VestedRewardsUpdateRewardsCall['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionCalls.VestedRewardsUpdateRewardsCall['asV46'] {
		return this.production.asV46
	}
	get isV46Stage(): stageCalls.VestedRewardsUpdateRewardsCall['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageCalls.VestedRewardsUpdateRewardsCall['asV46'] {
		return this.stage.asV46
	}
	get isV60Dev(): devCalls.VestedRewardsUpdateRewardsCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.VestedRewardsUpdateRewardsCall['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolDisableSyntheticAssetCall {
	private readonly production: productionCalls.XstPoolDisableSyntheticAssetCall
	private readonly stage: stageCalls.XstPoolDisableSyntheticAssetCall
	private readonly dev: devCalls.XstPoolDisableSyntheticAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolDisableSyntheticAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolDisableSyntheticAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolDisableSyntheticAssetCall(ctx, call)
	}

	get isV57(): productionCalls.XstPoolDisableSyntheticAssetCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.XstPoolDisableSyntheticAssetCall['asV57'] {
		return this.production.asV57
	}
	get isV54Stage(): stageCalls.XstPoolDisableSyntheticAssetCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.XstPoolDisableSyntheticAssetCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.XstPoolDisableSyntheticAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.XstPoolDisableSyntheticAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolEnableSyntheticAssetCall {
	private readonly production: productionCalls.XstPoolEnableSyntheticAssetCall
	private readonly stage: stageCalls.XstPoolEnableSyntheticAssetCall
	private readonly dev: devCalls.XstPoolEnableSyntheticAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolEnableSyntheticAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolEnableSyntheticAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolEnableSyntheticAssetCall(ctx, call)
	}

	get isV19(): productionCalls.XstPoolEnableSyntheticAssetCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.XstPoolEnableSyntheticAssetCall['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionCalls.XstPoolEnableSyntheticAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.XstPoolEnableSyntheticAssetCall['asV42'] {
		return this.production.asV42
	}
	get isV57(): productionCalls.XstPoolEnableSyntheticAssetCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.XstPoolEnableSyntheticAssetCall['asV57'] {
		return this.production.asV57
	}
	get isV33Stage(): stageCalls.XstPoolEnableSyntheticAssetCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.XstPoolEnableSyntheticAssetCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.XstPoolEnableSyntheticAssetCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.XstPoolEnableSyntheticAssetCall['asV42'] {
		return this.stage.asV42
	}
	get isV54Stage(): stageCalls.XstPoolEnableSyntheticAssetCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.XstPoolEnableSyntheticAssetCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.XstPoolEnableSyntheticAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.XstPoolEnableSyntheticAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolInitializePoolCall {
	private readonly production: productionCalls.XstPoolInitializePoolCall
	private readonly stage: stageCalls.XstPoolInitializePoolCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolInitializePoolCall(ctx, call)
		this.stage = new stageCalls.XstPoolInitializePoolCall(ctx, call)
	}

	get isV19(): productionCalls.XstPoolInitializePoolCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.XstPoolInitializePoolCall['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionCalls.XstPoolInitializePoolCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.XstPoolInitializePoolCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.XstPoolInitializePoolCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.XstPoolInitializePoolCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.XstPoolInitializePoolCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.XstPoolInitializePoolCall['asV42'] {
		return this.stage.asV42
	}
}

export class XstPoolRegisterSyntheticAssetCall {
	private readonly production: productionCalls.XstPoolRegisterSyntheticAssetCall
	private readonly stage: stageCalls.XstPoolRegisterSyntheticAssetCall
	private readonly dev: devCalls.XstPoolRegisterSyntheticAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolRegisterSyntheticAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolRegisterSyntheticAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolRegisterSyntheticAssetCall(ctx, call)
	}

	get isV57(): productionCalls.XstPoolRegisterSyntheticAssetCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.XstPoolRegisterSyntheticAssetCall['asV57'] {
		return this.production.asV57
	}
	get isV54Stage(): stageCalls.XstPoolRegisterSyntheticAssetCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.XstPoolRegisterSyntheticAssetCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.XstPoolRegisterSyntheticAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.XstPoolRegisterSyntheticAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolRemoveSyntheticAssetCall {
	private readonly production: productionCalls.XstPoolRemoveSyntheticAssetCall
	private readonly stage: stageCalls.XstPoolRemoveSyntheticAssetCall
	private readonly dev: devCalls.XstPoolRemoveSyntheticAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolRemoveSyntheticAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolRemoveSyntheticAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolRemoveSyntheticAssetCall(ctx, call)
	}

	get isV60(): productionCalls.XstPoolRemoveSyntheticAssetCall['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionCalls.XstPoolRemoveSyntheticAssetCall['asV60'] {
		return this.production.asV60
	}
	get isV60Stage(): stageCalls.XstPoolRemoveSyntheticAssetCall['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageCalls.XstPoolRemoveSyntheticAssetCall['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devCalls.XstPoolRemoveSyntheticAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.XstPoolRemoveSyntheticAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolSetReferenceAssetCall {
	private readonly production: productionCalls.XstPoolSetReferenceAssetCall
	private readonly stage: stageCalls.XstPoolSetReferenceAssetCall
	private readonly dev: devCalls.XstPoolSetReferenceAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolSetReferenceAssetCall(ctx, call)
		this.stage = new stageCalls.XstPoolSetReferenceAssetCall(ctx, call)
		this.dev = new devCalls.XstPoolSetReferenceAssetCall(ctx, call)
	}

	get isV19(): productionCalls.XstPoolSetReferenceAssetCall['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionCalls.XstPoolSetReferenceAssetCall['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionCalls.XstPoolSetReferenceAssetCall['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionCalls.XstPoolSetReferenceAssetCall['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageCalls.XstPoolSetReferenceAssetCall['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageCalls.XstPoolSetReferenceAssetCall['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageCalls.XstPoolSetReferenceAssetCall['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageCalls.XstPoolSetReferenceAssetCall['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devCalls.XstPoolSetReferenceAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.XstPoolSetReferenceAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolSetSyntheticAssetFeeCall {
	private readonly production: productionCalls.XstPoolSetSyntheticAssetFeeCall
	private readonly stage: stageCalls.XstPoolSetSyntheticAssetFeeCall
	private readonly dev: devCalls.XstPoolSetSyntheticAssetFeeCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolSetSyntheticAssetFeeCall(ctx, call)
		this.stage = new stageCalls.XstPoolSetSyntheticAssetFeeCall(ctx, call)
		this.dev = new devCalls.XstPoolSetSyntheticAssetFeeCall(ctx, call)
	}

	get isV57(): productionCalls.XstPoolSetSyntheticAssetFeeCall['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionCalls.XstPoolSetSyntheticAssetFeeCall['asV57'] {
		return this.production.asV57
	}
	get isV54Stage(): stageCalls.XstPoolSetSyntheticAssetFeeCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.XstPoolSetSyntheticAssetFeeCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.XstPoolSetSyntheticAssetFeeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.XstPoolSetSyntheticAssetFeeCall['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolSetSyntheticBaseAssetFloorPriceCall {
	private readonly production: productionCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall
	private readonly stage: stageCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall
	private readonly dev: devCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall(ctx, call)
		this.stage = new stageCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall(ctx, call)
		this.dev = new devCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall(ctx, call)
	}

	get isV45(): productionCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall['asV44'] {
		return this.stage.asV44
	}
	get isV60Dev(): devCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.XstPoolSetSyntheticBaseAssetFloorPriceCall['asV60'] {
		return this.dev.asV60
	}
}

export class XorFeeUpdateMultiplierCall {
	private readonly production: productionCalls.XorFeeUpdateMultiplierCall
	private readonly stage: stageCalls.XorFeeUpdateMultiplierCall
	private readonly dev: devCalls.XorFeeUpdateMultiplierCall

	constructor(ctx: ChainContext, call: Call) {
		this.production = new productionCalls.XorFeeUpdateMultiplierCall(ctx, call)
		this.stage = new stageCalls.XorFeeUpdateMultiplierCall(ctx, call)
		this.dev = new devCalls.XorFeeUpdateMultiplierCall(ctx, call)
	}

	get isV37(): productionCalls.XorFeeUpdateMultiplierCall['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionCalls.XorFeeUpdateMultiplierCall['asV37'] {
		return this.production.asV37
	}
	get isV37Stage(): stageCalls.XorFeeUpdateMultiplierCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.XorFeeUpdateMultiplierCall['asV37'] {
		return this.stage.asV37
	}
	get isV60Dev(): devCalls.XorFeeUpdateMultiplierCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.XorFeeUpdateMultiplierCall['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientInitializeCall {
	private readonly stage: stageCalls.BeefyLightClientInitializeCall
	private readonly dev: devCalls.BeefyLightClientInitializeCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BeefyLightClientInitializeCall(ctx, call)
		this.dev = new devCalls.BeefyLightClientInitializeCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BeefyLightClientInitializeCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BeefyLightClientInitializeCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.BeefyLightClientInitializeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BeefyLightClientInitializeCall['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientSubmitSignatureCommitmentCall {
	private readonly stage: stageCalls.BeefyLightClientSubmitSignatureCommitmentCall
	private readonly dev: devCalls.BeefyLightClientSubmitSignatureCommitmentCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BeefyLightClientSubmitSignatureCommitmentCall(ctx, call)
		this.dev = new devCalls.BeefyLightClientSubmitSignatureCommitmentCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BeefyLightClientSubmitSignatureCommitmentCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BeefyLightClientSubmitSignatureCommitmentCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.BeefyLightClientSubmitSignatureCommitmentCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BeefyLightClientSubmitSignatureCommitmentCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerAddPeerCall {
	private readonly stage: stageCalls.BridgeDataSignerAddPeerCall
	private readonly dev: devCalls.BridgeDataSignerAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeDataSignerAddPeerCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerAddPeerCall(ctx, call)
	}

	get isV54Stage(): stageCalls.BridgeDataSignerAddPeerCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeDataSignerAddPeerCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.BridgeDataSignerAddPeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeDataSignerAddPeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerApproveCall {
	private readonly stage: stageCalls.BridgeDataSignerApproveCall
	private readonly dev: devCalls.BridgeDataSignerApproveCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeDataSignerApproveCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerApproveCall(ctx, call)
	}

	get isV54Stage(): stageCalls.BridgeDataSignerApproveCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeDataSignerApproveCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.BridgeDataSignerApproveCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeDataSignerApproveCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerFinishAddPeerCall {
	private readonly stage: stageCalls.BridgeDataSignerFinishAddPeerCall
	private readonly dev: devCalls.BridgeDataSignerFinishAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeDataSignerFinishAddPeerCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerFinishAddPeerCall(ctx, call)
	}

	get isV54Stage(): stageCalls.BridgeDataSignerFinishAddPeerCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeDataSignerFinishAddPeerCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.BridgeDataSignerFinishAddPeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeDataSignerFinishAddPeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerFinishRemovePeerCall {
	private readonly stage: stageCalls.BridgeDataSignerFinishRemovePeerCall
	private readonly dev: devCalls.BridgeDataSignerFinishRemovePeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeDataSignerFinishRemovePeerCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerFinishRemovePeerCall(ctx, call)
	}

	get isV54Stage(): stageCalls.BridgeDataSignerFinishRemovePeerCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeDataSignerFinishRemovePeerCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.BridgeDataSignerFinishRemovePeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeDataSignerFinishRemovePeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerRegisterNetworkCall {
	private readonly stage: stageCalls.BridgeDataSignerRegisterNetworkCall
	private readonly dev: devCalls.BridgeDataSignerRegisterNetworkCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeDataSignerRegisterNetworkCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerRegisterNetworkCall(ctx, call)
	}

	get isV54Stage(): stageCalls.BridgeDataSignerRegisterNetworkCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeDataSignerRegisterNetworkCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.BridgeDataSignerRegisterNetworkCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeDataSignerRegisterNetworkCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerRemovePeerCall {
	private readonly stage: stageCalls.BridgeDataSignerRemovePeerCall
	private readonly dev: devCalls.BridgeDataSignerRemovePeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeDataSignerRemovePeerCall(ctx, call)
		this.dev = new devCalls.BridgeDataSignerRemovePeerCall(ctx, call)
	}

	get isV54Stage(): stageCalls.BridgeDataSignerRemovePeerCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeDataSignerRemovePeerCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.BridgeDataSignerRemovePeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeDataSignerRemovePeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelBatchDispatchedCall {
	private readonly stage: stageCalls.BridgeInboundChannelBatchDispatchedCall
	private readonly dev: devCalls.BridgeInboundChannelBatchDispatchedCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelBatchDispatchedCall(ctx, call)
		this.dev = new devCalls.BridgeInboundChannelBatchDispatchedCall(ctx, call)
	}

	get isV55Stage(): stageCalls.BridgeInboundChannelBatchDispatchedCall['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageCalls.BridgeInboundChannelBatchDispatchedCall['asV55'] {
		return this.stage.asV55
	}
	get isV60Dev(): devCalls.BridgeInboundChannelBatchDispatchedCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeInboundChannelBatchDispatchedCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelMessageDispatchedCall {
	private readonly stage: stageCalls.BridgeInboundChannelMessageDispatchedCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelMessageDispatchedCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BridgeInboundChannelMessageDispatchedCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeInboundChannelMessageDispatchedCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.BridgeInboundChannelMessageDispatchedCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeInboundChannelMessageDispatchedCall['asV54'] {
		return this.stage.asV54
	}
}

export class BridgeInboundChannelRegisterChannelCall {
	private readonly stage: stageCalls.BridgeInboundChannelRegisterChannelCall
	private readonly dev: devCalls.BridgeInboundChannelRegisterChannelCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelRegisterChannelCall(ctx, call)
		this.dev = new devCalls.BridgeInboundChannelRegisterChannelCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BridgeInboundChannelRegisterChannelCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeInboundChannelRegisterChannelCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.BridgeInboundChannelRegisterChannelCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeInboundChannelRegisterChannelCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelSetRewardFractionCall {
	private readonly stage: stageCalls.BridgeInboundChannelSetRewardFractionCall
	private readonly dev: devCalls.BridgeInboundChannelSetRewardFractionCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelSetRewardFractionCall(ctx, call)
		this.dev = new devCalls.BridgeInboundChannelSetRewardFractionCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BridgeInboundChannelSetRewardFractionCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeInboundChannelSetRewardFractionCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.BridgeInboundChannelSetRewardFractionCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeInboundChannelSetRewardFractionCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelSubmitCall {
	private readonly stage: stageCalls.BridgeInboundChannelSubmitCall
	private readonly dev: devCalls.BridgeInboundChannelSubmitCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeInboundChannelSubmitCall(ctx, call)
		this.dev = new devCalls.BridgeInboundChannelSubmitCall(ctx, call)
	}

	get isV52Stage(): stageCalls.BridgeInboundChannelSubmitCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.BridgeInboundChannelSubmitCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.BridgeInboundChannelSubmitCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeInboundChannelSubmitCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.BridgeInboundChannelSubmitCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeInboundChannelSubmitCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyBurnCall {
	private readonly stage: stageCalls.BridgeProxyBurnCall
	private readonly dev: devCalls.BridgeProxyBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.BridgeProxyBurnCall(ctx, call)
		this.dev = new devCalls.BridgeProxyBurnCall(ctx, call)
	}

	get isV54Stage(): stageCalls.BridgeProxyBurnCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.BridgeProxyBurnCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.BridgeProxyBurnCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeProxyBurnCall['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppBurnCall {
	private readonly stage: stageCalls.Erc20AppBurnCall
	private readonly dev: devCalls.Erc20AppBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppBurnCall(ctx, call)
		this.dev = new devCalls.Erc20AppBurnCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppBurnCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppBurnCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.Erc20AppBurnCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.Erc20AppBurnCall['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppMintCall {
	private readonly stage: stageCalls.Erc20AppMintCall
	private readonly dev: devCalls.Erc20AppMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppMintCall(ctx, call)
		this.dev = new devCalls.Erc20AppMintCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppMintCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppMintCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.Erc20AppMintCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.Erc20AppMintCall['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppRegisterAssetInternalCall {
	private readonly stage: stageCalls.Erc20AppRegisterAssetInternalCall
	private readonly dev: devCalls.Erc20AppRegisterAssetInternalCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterAssetInternalCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterAssetInternalCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterAssetInternalCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterAssetInternalCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.Erc20AppRegisterAssetInternalCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.Erc20AppRegisterAssetInternalCall['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppRegisterErc20AppCall {
	private readonly stage: stageCalls.Erc20AppRegisterErc20AppCall
	private readonly dev: devCalls.Erc20AppRegisterErc20AppCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterErc20AppCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterErc20AppCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterErc20AppCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterErc20AppCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.Erc20AppRegisterErc20AppCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.Erc20AppRegisterErc20AppCall['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppRegisterErc20AssetCall {
	private readonly stage: stageCalls.Erc20AppRegisterErc20AssetCall
	private readonly dev: devCalls.Erc20AppRegisterErc20AssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterErc20AssetCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterErc20AssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterErc20AssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterErc20AssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.Erc20AppRegisterErc20AssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.Erc20AppRegisterErc20AssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppRegisterExistingErc20AssetCall {
	private readonly stage: stageCalls.Erc20AppRegisterExistingErc20AssetCall
	private readonly dev: devCalls.Erc20AppRegisterExistingErc20AssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterExistingErc20AssetCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterExistingErc20AssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterExistingErc20AssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterExistingErc20AssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.Erc20AppRegisterExistingErc20AssetCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.Erc20AppRegisterExistingErc20AssetCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.Erc20AppRegisterExistingErc20AssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.Erc20AppRegisterExistingErc20AssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppRegisterNativeAppCall {
	private readonly stage: stageCalls.Erc20AppRegisterNativeAppCall
	private readonly dev: devCalls.Erc20AppRegisterNativeAppCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterNativeAppCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterNativeAppCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterNativeAppCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterNativeAppCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.Erc20AppRegisterNativeAppCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.Erc20AppRegisterNativeAppCall['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppRegisterNativeAssetCall {
	private readonly stage: stageCalls.Erc20AppRegisterNativeAssetCall
	private readonly dev: devCalls.Erc20AppRegisterNativeAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.Erc20AppRegisterNativeAssetCall(ctx, call)
		this.dev = new devCalls.Erc20AppRegisterNativeAssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.Erc20AppRegisterNativeAssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.Erc20AppRegisterNativeAssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.Erc20AppRegisterNativeAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.Erc20AppRegisterNativeAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthAppBurnCall {
	private readonly stage: stageCalls.EthAppBurnCall
	private readonly dev: devCalls.EthAppBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthAppBurnCall(ctx, call)
		this.dev = new devCalls.EthAppBurnCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthAppBurnCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthAppBurnCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.EthAppBurnCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthAppBurnCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthAppMintCall {
	private readonly stage: stageCalls.EthAppMintCall
	private readonly dev: devCalls.EthAppMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthAppMintCall(ctx, call)
		this.dev = new devCalls.EthAppMintCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthAppMintCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthAppMintCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.EthAppMintCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthAppMintCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthAppRegisterNetworkCall {
	private readonly stage: stageCalls.EthAppRegisterNetworkCall
	private readonly dev: devCalls.EthAppRegisterNetworkCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthAppRegisterNetworkCall(ctx, call)
		this.dev = new devCalls.EthAppRegisterNetworkCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthAppRegisterNetworkCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthAppRegisterNetworkCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.EthAppRegisterNetworkCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.EthAppRegisterNetworkCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.EthAppRegisterNetworkCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthAppRegisterNetworkCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthAppRegisterNetworkWithExistingAssetCall {
	private readonly stage: stageCalls.EthAppRegisterNetworkWithExistingAssetCall
	private readonly dev: devCalls.EthAppRegisterNetworkWithExistingAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthAppRegisterNetworkWithExistingAssetCall(ctx, call)
		this.dev = new devCalls.EthAppRegisterNetworkWithExistingAssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthAppRegisterNetworkWithExistingAssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthAppRegisterNetworkWithExistingAssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.EthAppRegisterNetworkWithExistingAssetCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.EthAppRegisterNetworkWithExistingAssetCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.EthAppRegisterNetworkWithExistingAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthAppRegisterNetworkWithExistingAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientImportHeaderCall {
	private readonly stage: stageCalls.EthereumLightClientImportHeaderCall
	private readonly dev: devCalls.EthereumLightClientImportHeaderCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthereumLightClientImportHeaderCall(ctx, call)
		this.dev = new devCalls.EthereumLightClientImportHeaderCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthereumLightClientImportHeaderCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthereumLightClientImportHeaderCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.EthereumLightClientImportHeaderCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthereumLightClientImportHeaderCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientRegisterNetworkCall {
	private readonly stage: stageCalls.EthereumLightClientRegisterNetworkCall
	private readonly dev: devCalls.EthereumLightClientRegisterNetworkCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthereumLightClientRegisterNetworkCall(ctx, call)
		this.dev = new devCalls.EthereumLightClientRegisterNetworkCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthereumLightClientRegisterNetworkCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthereumLightClientRegisterNetworkCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.EthereumLightClientRegisterNetworkCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthereumLightClientRegisterNetworkCall['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientUpdateDifficultyConfigCall {
	private readonly stage: stageCalls.EthereumLightClientUpdateDifficultyConfigCall
	private readonly dev: devCalls.EthereumLightClientUpdateDifficultyConfigCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EthereumLightClientUpdateDifficultyConfigCall(ctx, call)
		this.dev = new devCalls.EthereumLightClientUpdateDifficultyConfigCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EthereumLightClientUpdateDifficultyConfigCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EthereumLightClientUpdateDifficultyConfigCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.EthereumLightClientUpdateDifficultyConfigCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.EthereumLightClientUpdateDifficultyConfigCall['asV60'] {
		return this.dev.asV60
	}
}

export class EvmBridgeProxyBurnCall {
	private readonly stage: stageCalls.EvmBridgeProxyBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.EvmBridgeProxyBurnCall(ctx, call)
	}

	get isV52Stage(): stageCalls.EvmBridgeProxyBurnCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.EvmBridgeProxyBurnCall['asV52'] {
		return this.stage.asV52
	}
}

export class FaucetUpdateLimitCall {
	private readonly stage: stageCalls.FaucetUpdateLimitCall
	private readonly dev: devCalls.FaucetUpdateLimitCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.FaucetUpdateLimitCall(ctx, call)
		this.dev = new devCalls.FaucetUpdateLimitCall(ctx, call)
	}

	get isV37Stage(): stageCalls.FaucetUpdateLimitCall['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageCalls.FaucetUpdateLimitCall['asV37'] {
		return this.stage.asV37
	}
	get isV60Dev(): devCalls.FaucetUpdateLimitCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.FaucetUpdateLimitCall['asV60'] {
		return this.dev.asV60
	}
}

export class MigrationAppMigrateErc20Call {
	private readonly stage: stageCalls.MigrationAppMigrateErc20Call
	private readonly dev: devCalls.MigrationAppMigrateErc20Call

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MigrationAppMigrateErc20Call(ctx, call)
		this.dev = new devCalls.MigrationAppMigrateErc20Call(ctx, call)
	}

	get isV52Stage(): stageCalls.MigrationAppMigrateErc20Call['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MigrationAppMigrateErc20Call['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.MigrationAppMigrateErc20Call['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MigrationAppMigrateErc20Call['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.MigrationAppMigrateErc20Call['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MigrationAppMigrateErc20Call['asV60'] {
		return this.dev.asV60
	}
}

export class MigrationAppMigrateEthCall {
	private readonly stage: stageCalls.MigrationAppMigrateEthCall
	private readonly dev: devCalls.MigrationAppMigrateEthCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MigrationAppMigrateEthCall(ctx, call)
		this.dev = new devCalls.MigrationAppMigrateEthCall(ctx, call)
	}

	get isV52Stage(): stageCalls.MigrationAppMigrateEthCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MigrationAppMigrateEthCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.MigrationAppMigrateEthCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MigrationAppMigrateEthCall['asV60'] {
		return this.dev.asV60
	}
}

export class MigrationAppMigrateSidechainCall {
	private readonly stage: stageCalls.MigrationAppMigrateSidechainCall
	private readonly dev: devCalls.MigrationAppMigrateSidechainCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MigrationAppMigrateSidechainCall(ctx, call)
		this.dev = new devCalls.MigrationAppMigrateSidechainCall(ctx, call)
	}

	get isV52Stage(): stageCalls.MigrationAppMigrateSidechainCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MigrationAppMigrateSidechainCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.MigrationAppMigrateSidechainCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MigrationAppMigrateSidechainCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.MigrationAppMigrateSidechainCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MigrationAppMigrateSidechainCall['asV60'] {
		return this.dev.asV60
	}
}

export class MigrationAppRegisterNetworkCall {
	private readonly stage: stageCalls.MigrationAppRegisterNetworkCall
	private readonly dev: devCalls.MigrationAppRegisterNetworkCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MigrationAppRegisterNetworkCall(ctx, call)
		this.dev = new devCalls.MigrationAppRegisterNetworkCall(ctx, call)
	}

	get isV52Stage(): stageCalls.MigrationAppRegisterNetworkCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.MigrationAppRegisterNetworkCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.MigrationAppRegisterNetworkCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MigrationAppRegisterNetworkCall['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierAddPeerCall {
	private readonly stage: stageCalls.MultisigVerifierAddPeerCall
	private readonly dev: devCalls.MultisigVerifierAddPeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MultisigVerifierAddPeerCall(ctx, call)
		this.dev = new devCalls.MultisigVerifierAddPeerCall(ctx, call)
	}

	get isV54Stage(): stageCalls.MultisigVerifierAddPeerCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MultisigVerifierAddPeerCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.MultisigVerifierAddPeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MultisigVerifierAddPeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierInitializeCall {
	private readonly stage: stageCalls.MultisigVerifierInitializeCall
	private readonly dev: devCalls.MultisigVerifierInitializeCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MultisigVerifierInitializeCall(ctx, call)
		this.dev = new devCalls.MultisigVerifierInitializeCall(ctx, call)
	}

	get isV54Stage(): stageCalls.MultisigVerifierInitializeCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MultisigVerifierInitializeCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.MultisigVerifierInitializeCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MultisigVerifierInitializeCall['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierRemovePeerCall {
	private readonly stage: stageCalls.MultisigVerifierRemovePeerCall
	private readonly dev: devCalls.MultisigVerifierRemovePeerCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.MultisigVerifierRemovePeerCall(ctx, call)
		this.dev = new devCalls.MultisigVerifierRemovePeerCall(ctx, call)
	}

	get isV54Stage(): stageCalls.MultisigVerifierRemovePeerCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.MultisigVerifierRemovePeerCall['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devCalls.MultisigVerifierRemovePeerCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.MultisigVerifierRemovePeerCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppAddAssetidParaidCall {
	private readonly stage: stageCalls.SubstrateBridgeAppAddAssetidParaidCall
	private readonly dev: devCalls.SubstrateBridgeAppAddAssetidParaidCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppAddAssetidParaidCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppAddAssetidParaidCall(ctx, call)
	}

	get isV57Stage(): stageCalls.SubstrateBridgeAppAddAssetidParaidCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppAddAssetidParaidCall['asV57'] {
		return this.stage.asV57
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppAddAssetidParaidCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppAddAssetidParaidCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppBurnCall {
	private readonly stage: stageCalls.SubstrateBridgeAppBurnCall
	private readonly dev: devCalls.SubstrateBridgeAppBurnCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppBurnCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppBurnCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppBurnCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppBurnCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppBurnCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppBurnCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppFinalizeAssetRegistrationCall {
	private readonly stage: stageCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall
	private readonly dev: devCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppFinalizeAssetRegistrationCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppMintCall {
	private readonly stage: stageCalls.SubstrateBridgeAppMintCall
	private readonly dev: devCalls.SubstrateBridgeAppMintCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppMintCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppMintCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppMintCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppMintCall['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppMintCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppMintCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppRegisterSidechainAssetCall {
	private readonly stage: stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall
	private readonly dev: devCalls.SubstrateBridgeAppRegisterSidechainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppRegisterSidechainAssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV57Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SubstrateBridgeAppRegisterSidechainAssetCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppRegisterSidechainAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppRegisterSidechainAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppRegisterThischainAssetCall {
	private readonly stage: stageCalls.SubstrateBridgeAppRegisterThischainAssetCall
	private readonly dev: devCalls.SubstrateBridgeAppRegisterThischainAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppRegisterThischainAssetCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppRegisterThischainAssetCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['asV52'] {
		return this.stage.asV52
	}
	get isV57Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['asV57'] {
		return this.stage.asV57
	}
	get isV59Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SubstrateBridgeAppRegisterThischainAssetCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppRegisterThischainAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppRegisterThischainAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppRemoveAssetidParaidCall {
	private readonly stage: stageCalls.SubstrateBridgeAppRemoveAssetidParaidCall
	private readonly dev: devCalls.SubstrateBridgeAppRemoveAssetidParaidCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppRemoveAssetidParaidCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppRemoveAssetidParaidCall(ctx, call)
	}

	get isV57Stage(): stageCalls.SubstrateBridgeAppRemoveAssetidParaidCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppRemoveAssetidParaidCall['asV57'] {
		return this.stage.asV57
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppRemoveAssetidParaidCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppRemoveAssetidParaidCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall {
	private readonly stage: stageCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall
	private readonly dev: devCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall(ctx, call)
	}

	get isV59Stage(): stageCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppSetMinimumXcmIncomingAssetCountCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppSetTransferLimitCall {
	private readonly stage: stageCalls.SubstrateBridgeAppSetTransferLimitCall
	private readonly dev: devCalls.SubstrateBridgeAppSetTransferLimitCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppSetTransferLimitCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppSetTransferLimitCall(ctx, call)
	}

	get isV57Stage(): stageCalls.SubstrateBridgeAppSetTransferLimitCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeAppSetTransferLimitCall['asV57'] {
		return this.stage.asV57
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppSetTransferLimitCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppSetTransferLimitCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppUpdateTransactionStatusCall {
	private readonly stage: stageCalls.SubstrateBridgeAppUpdateTransactionStatusCall
	private readonly dev: devCalls.SubstrateBridgeAppUpdateTransactionStatusCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeAppUpdateTransactionStatusCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeAppUpdateTransactionStatusCall(ctx, call)
	}

	get isV59Stage(): stageCalls.SubstrateBridgeAppUpdateTransactionStatusCall['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageCalls.SubstrateBridgeAppUpdateTransactionStatusCall['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devCalls.SubstrateBridgeAppUpdateTransactionStatusCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeAppUpdateTransactionStatusCall['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeInboundChannelSetRewardFractionCall {
	private readonly stage: stageCalls.SubstrateBridgeInboundChannelSetRewardFractionCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeInboundChannelSetRewardFractionCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeInboundChannelSetRewardFractionCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeInboundChannelSetRewardFractionCall['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeInboundChannelSubmitCall {
	private readonly stage: stageCalls.SubstrateBridgeInboundChannelSubmitCall
	private readonly dev: devCalls.SubstrateBridgeInboundChannelSubmitCall

	constructor(ctx: ChainContext, call: Call) {
		this.stage = new stageCalls.SubstrateBridgeInboundChannelSubmitCall(ctx, call)
		this.dev = new devCalls.SubstrateBridgeInboundChannelSubmitCall(ctx, call)
	}

	get isV52Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['asV54'] {
		return this.stage.asV54
	}
	get isV57Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageCalls.SubstrateBridgeInboundChannelSubmitCall['asV57'] {
		return this.stage.asV57
	}
	get isV60Dev(): devCalls.SubstrateBridgeInboundChannelSubmitCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.SubstrateBridgeInboundChannelSubmitCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyAddLimitedAssetCall {
	private readonly dev: devCalls.BridgeProxyAddLimitedAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.BridgeProxyAddLimitedAssetCall(ctx, call)
	}

	get isV60Dev(): devCalls.BridgeProxyAddLimitedAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeProxyAddLimitedAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyRemoveLimitedAssetCall {
	private readonly dev: devCalls.BridgeProxyRemoveLimitedAssetCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.BridgeProxyRemoveLimitedAssetCall(ctx, call)
	}

	get isV60Dev(): devCalls.BridgeProxyRemoveLimitedAssetCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeProxyRemoveLimitedAssetCall['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyUpdateTransferLimitCall {
	private readonly dev: devCalls.BridgeProxyUpdateTransferLimitCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.BridgeProxyUpdateTransferLimitCall(ctx, call)
	}

	get isV60Dev(): devCalls.BridgeProxyUpdateTransferLimitCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.BridgeProxyUpdateTransferLimitCall['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookCancelLimitOrderCall {
	private readonly dev: devCalls.OrderBookCancelLimitOrderCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookCancelLimitOrderCall(ctx, call)
	}

	get isV60Dev(): devCalls.OrderBookCancelLimitOrderCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OrderBookCancelLimitOrderCall['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookCancelLimitOrdersBatchCall {
	private readonly dev: devCalls.OrderBookCancelLimitOrdersBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookCancelLimitOrdersBatchCall(ctx, call)
	}

	get isV60Dev(): devCalls.OrderBookCancelLimitOrdersBatchCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OrderBookCancelLimitOrdersBatchCall['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookChangeOrderbookStatusCall {
	private readonly dev: devCalls.OrderBookChangeOrderbookStatusCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookChangeOrderbookStatusCall(ctx, call)
	}

	get isV60Dev(): devCalls.OrderBookChangeOrderbookStatusCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OrderBookChangeOrderbookStatusCall['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookCreateOrderbookCall {
	private readonly dev: devCalls.OrderBookCreateOrderbookCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookCreateOrderbookCall(ctx, call)
	}

	get isV60Dev(): devCalls.OrderBookCreateOrderbookCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OrderBookCreateOrderbookCall['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookDeleteOrderbookCall {
	private readonly dev: devCalls.OrderBookDeleteOrderbookCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookDeleteOrderbookCall(ctx, call)
	}

	get isV60Dev(): devCalls.OrderBookDeleteOrderbookCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OrderBookDeleteOrderbookCall['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookExecuteMarketOrderCall {
	private readonly dev: devCalls.OrderBookExecuteMarketOrderCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookExecuteMarketOrderCall(ctx, call)
	}

	get isV60Dev(): devCalls.OrderBookExecuteMarketOrderCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OrderBookExecuteMarketOrderCall['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookPlaceLimitOrderCall {
	private readonly dev: devCalls.OrderBookPlaceLimitOrderCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookPlaceLimitOrderCall(ctx, call)
	}

	get isV60Dev(): devCalls.OrderBookPlaceLimitOrderCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OrderBookPlaceLimitOrderCall['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookUpdateOrderbookCall {
	private readonly dev: devCalls.OrderBookUpdateOrderbookCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.OrderBookUpdateOrderbookCall(ctx, call)
	}

	get isV60Dev(): devCalls.OrderBookUpdateOrderbookCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.OrderBookUpdateOrderbookCall['asV60'] {
		return this.dev.asV60
	}
}

export class QaToolsAddToWhitelistCall {
	private readonly dev: devCalls.QaToolsAddToWhitelistCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.QaToolsAddToWhitelistCall(ctx, call)
	}

	get isV60Dev(): devCalls.QaToolsAddToWhitelistCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.QaToolsAddToWhitelistCall['asV60'] {
		return this.dev.asV60
	}
}

export class QaToolsOrderBookCreateAndFillBatchCall {
	private readonly dev: devCalls.QaToolsOrderBookCreateAndFillBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.QaToolsOrderBookCreateAndFillBatchCall(ctx, call)
	}

	get isV60Dev(): devCalls.QaToolsOrderBookCreateAndFillBatchCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.QaToolsOrderBookCreateAndFillBatchCall['asV60'] {
		return this.dev.asV60
	}
}

export class QaToolsOrderBookCreateEmptyBatchCall {
	private readonly dev: devCalls.QaToolsOrderBookCreateEmptyBatchCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.QaToolsOrderBookCreateEmptyBatchCall(ctx, call)
	}

	get isV60Dev(): devCalls.QaToolsOrderBookCreateEmptyBatchCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.QaToolsOrderBookCreateEmptyBatchCall['asV60'] {
		return this.dev.asV60
	}
}

export class QaToolsRemoveFromWhitelistCall {
	private readonly dev: devCalls.QaToolsRemoveFromWhitelistCall

	constructor(ctx: ChainContext, call: Call) {
		this.dev = new devCalls.QaToolsRemoveFromWhitelistCall(ctx, call)
	}

	get isV60Dev(): devCalls.QaToolsRemoveFromWhitelistCall['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devCalls.QaToolsRemoveFromWhitelistCall['asV60'] {
		return this.dev.asV60
	}
}

export const utilityBatchAllCallVersions = ['1', '3', '7', '19', '22', '23', '26', '32', '33', '35', '37', '38', '42', '43', '45', '46', '47', '50', '53', '57', '59', '60', '33Stage', '35Stage', '37Stage', '38Stage', '42Stage', '43Stage', '44Stage', '45Stage', '46Stage', '47Stage', '48Stage', '52Stage', '54Stage', '55Stage', '57Stage', '59Stage', '60Stage', '60Dev'] as const
