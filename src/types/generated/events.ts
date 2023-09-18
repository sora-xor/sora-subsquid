import {Chain, ChainContext, EventContext, Event, Result, Option} from './production/support'
import * as productionEvents from './production/events'
import * as stageEvents from './stage/events'
import * as devEvents from './dev/events'


export class AssetsAssetRegisteredEvent {
	private readonly production: productionEvents.AssetsAssetRegisteredEvent
	private readonly stage: stageEvents.AssetsAssetRegisteredEvent
	private readonly dev: devEvents.AssetsAssetRegisteredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsAssetRegisteredEvent(ctx, event)
		this.stage = new stageEvents.AssetsAssetRegisteredEvent(ctx, event)
		this.dev = new devEvents.AssetsAssetRegisteredEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsAssetRegisteredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsAssetRegisteredEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsAssetRegisteredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsAssetRegisteredEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.AssetsAssetRegisteredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.AssetsAssetRegisteredEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.AssetsAssetRegisteredEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.AssetsAssetRegisteredEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.AssetsAssetRegisteredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.AssetsAssetRegisteredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsAssetSetNonMintableEvent {
	private readonly production: productionEvents.AssetsAssetSetNonMintableEvent
	private readonly stage: stageEvents.AssetsAssetSetNonMintableEvent
	private readonly dev: devEvents.AssetsAssetSetNonMintableEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsAssetSetNonMintableEvent(ctx, event)
		this.stage = new stageEvents.AssetsAssetSetNonMintableEvent(ctx, event)
		this.dev = new devEvents.AssetsAssetSetNonMintableEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsAssetSetNonMintableEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsAssetSetNonMintableEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsAssetSetNonMintableEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsAssetSetNonMintableEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.AssetsAssetSetNonMintableEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.AssetsAssetSetNonMintableEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.AssetsAssetSetNonMintableEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.AssetsAssetSetNonMintableEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.AssetsAssetSetNonMintableEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.AssetsAssetSetNonMintableEvent['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsAssetUpdatedEvent {
	private readonly production: productionEvents.AssetsAssetUpdatedEvent
	private readonly stage: stageEvents.AssetsAssetUpdatedEvent
	private readonly dev: devEvents.AssetsAssetUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsAssetUpdatedEvent(ctx, event)
		this.stage = new stageEvents.AssetsAssetUpdatedEvent(ctx, event)
		this.dev = new devEvents.AssetsAssetUpdatedEvent(ctx, event)
	}

	get isV53(): productionEvents.AssetsAssetUpdatedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.AssetsAssetUpdatedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.AssetsAssetUpdatedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.AssetsAssetUpdatedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.AssetsAssetUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.AssetsAssetUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsBurnEvent {
	private readonly production: productionEvents.AssetsBurnEvent
	private readonly stage: stageEvents.AssetsBurnEvent
	private readonly dev: devEvents.AssetsBurnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsBurnEvent(ctx, event)
		this.stage = new stageEvents.AssetsBurnEvent(ctx, event)
		this.dev = new devEvents.AssetsBurnEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsBurnEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsBurnEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsBurnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsBurnEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.AssetsBurnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.AssetsBurnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.AssetsBurnEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.AssetsBurnEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.AssetsBurnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.AssetsBurnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsMintEvent {
	private readonly production: productionEvents.AssetsMintEvent
	private readonly stage: stageEvents.AssetsMintEvent
	private readonly dev: devEvents.AssetsMintEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsMintEvent(ctx, event)
		this.stage = new stageEvents.AssetsMintEvent(ctx, event)
		this.dev = new devEvents.AssetsMintEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsMintEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsMintEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsMintEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsMintEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.AssetsMintEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.AssetsMintEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.AssetsMintEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.AssetsMintEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.AssetsMintEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.AssetsMintEvent['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsTransferEvent {
	private readonly production: productionEvents.AssetsTransferEvent
	private readonly stage: stageEvents.AssetsTransferEvent
	private readonly dev: devEvents.AssetsTransferEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.AssetsTransferEvent(ctx, event)
		this.stage = new stageEvents.AssetsTransferEvent(ctx, event)
		this.dev = new devEvents.AssetsTransferEvent(ctx, event)
	}

	get isV1(): productionEvents.AssetsTransferEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.AssetsTransferEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.AssetsTransferEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.AssetsTransferEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.AssetsTransferEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.AssetsTransferEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.AssetsTransferEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.AssetsTransferEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.AssetsTransferEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.AssetsTransferEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BagsListRebaggedEvent {
	private readonly production: productionEvents.BagsListRebaggedEvent
	private readonly stage: stageEvents.BagsListRebaggedEvent
	private readonly dev: devEvents.BagsListRebaggedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BagsListRebaggedEvent(ctx, event)
		this.stage = new stageEvents.BagsListRebaggedEvent(ctx, event)
		this.dev = new devEvents.BagsListRebaggedEvent(ctx, event)
	}

	get isV42(): productionEvents.BagsListRebaggedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BagsListRebaggedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.BagsListRebaggedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BagsListRebaggedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BagsListRebaggedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BagsListRebaggedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BagsListScoreUpdatedEvent {
	private readonly production: productionEvents.BagsListScoreUpdatedEvent
	private readonly stage: stageEvents.BagsListScoreUpdatedEvent
	private readonly dev: devEvents.BagsListScoreUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BagsListScoreUpdatedEvent(ctx, event)
		this.stage = new stageEvents.BagsListScoreUpdatedEvent(ctx, event)
		this.dev = new devEvents.BagsListScoreUpdatedEvent(ctx, event)
	}

	get isV42(): productionEvents.BagsListScoreUpdatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BagsListScoreUpdatedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.BagsListScoreUpdatedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BagsListScoreUpdatedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BagsListScoreUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BagsListScoreUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesBalanceSetEvent {
	private readonly production: productionEvents.BalancesBalanceSetEvent
	private readonly stage: stageEvents.BalancesBalanceSetEvent
	private readonly dev: devEvents.BalancesBalanceSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesBalanceSetEvent(ctx, event)
		this.stage = new stageEvents.BalancesBalanceSetEvent(ctx, event)
		this.dev = new devEvents.BalancesBalanceSetEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesBalanceSetEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesBalanceSetEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesBalanceSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesBalanceSetEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.BalancesBalanceSetEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BalancesBalanceSetEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BalancesBalanceSetEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesBalanceSetEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesBalanceSetEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesBalanceSetEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesDepositEvent {
	private readonly production: productionEvents.BalancesDepositEvent
	private readonly stage: stageEvents.BalancesDepositEvent
	private readonly dev: devEvents.BalancesDepositEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesDepositEvent(ctx, event)
		this.stage = new stageEvents.BalancesDepositEvent(ctx, event)
		this.dev = new devEvents.BalancesDepositEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesDepositEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesDepositEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesDepositEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesDepositEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.BalancesDepositEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BalancesDepositEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BalancesDepositEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesDepositEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesDepositEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesDepositEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesDustLostEvent {
	private readonly production: productionEvents.BalancesDustLostEvent
	private readonly stage: stageEvents.BalancesDustLostEvent
	private readonly dev: devEvents.BalancesDustLostEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesDustLostEvent(ctx, event)
		this.stage = new stageEvents.BalancesDustLostEvent(ctx, event)
		this.dev = new devEvents.BalancesDustLostEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesDustLostEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesDustLostEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesDustLostEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesDustLostEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.BalancesDustLostEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BalancesDustLostEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BalancesDustLostEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesDustLostEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesDustLostEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesDustLostEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesEndowedEvent {
	private readonly production: productionEvents.BalancesEndowedEvent
	private readonly stage: stageEvents.BalancesEndowedEvent
	private readonly dev: devEvents.BalancesEndowedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesEndowedEvent(ctx, event)
		this.stage = new stageEvents.BalancesEndowedEvent(ctx, event)
		this.dev = new devEvents.BalancesEndowedEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesEndowedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesEndowedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesEndowedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesEndowedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.BalancesEndowedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BalancesEndowedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BalancesEndowedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesEndowedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesEndowedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesEndowedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesReserveRepatriatedEvent {
	private readonly production: productionEvents.BalancesReserveRepatriatedEvent
	private readonly stage: stageEvents.BalancesReserveRepatriatedEvent
	private readonly dev: devEvents.BalancesReserveRepatriatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesReserveRepatriatedEvent(ctx, event)
		this.stage = new stageEvents.BalancesReserveRepatriatedEvent(ctx, event)
		this.dev = new devEvents.BalancesReserveRepatriatedEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesReserveRepatriatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesReserveRepatriatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesReserveRepatriatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesReserveRepatriatedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.BalancesReserveRepatriatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BalancesReserveRepatriatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BalancesReserveRepatriatedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesReserveRepatriatedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesReserveRepatriatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesReserveRepatriatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesReservedEvent {
	private readonly production: productionEvents.BalancesReservedEvent
	private readonly stage: stageEvents.BalancesReservedEvent
	private readonly dev: devEvents.BalancesReservedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesReservedEvent(ctx, event)
		this.stage = new stageEvents.BalancesReservedEvent(ctx, event)
		this.dev = new devEvents.BalancesReservedEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesReservedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesReservedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesReservedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesReservedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.BalancesReservedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BalancesReservedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BalancesReservedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesReservedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesReservedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesReservedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesSlashedEvent {
	private readonly production: productionEvents.BalancesSlashedEvent
	private readonly stage: stageEvents.BalancesSlashedEvent
	private readonly dev: devEvents.BalancesSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesSlashedEvent(ctx, event)
		this.stage = new stageEvents.BalancesSlashedEvent(ctx, event)
		this.dev = new devEvents.BalancesSlashedEvent(ctx, event)
	}

	get isV42(): productionEvents.BalancesSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesSlashedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.BalancesSlashedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesSlashedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesSlashedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesSlashedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesTransferEvent {
	private readonly production: productionEvents.BalancesTransferEvent
	private readonly stage: stageEvents.BalancesTransferEvent
	private readonly dev: devEvents.BalancesTransferEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesTransferEvent(ctx, event)
		this.stage = new stageEvents.BalancesTransferEvent(ctx, event)
		this.dev = new devEvents.BalancesTransferEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesTransferEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesTransferEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesTransferEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesTransferEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.BalancesTransferEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BalancesTransferEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BalancesTransferEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesTransferEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesTransferEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesTransferEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesUnreservedEvent {
	private readonly production: productionEvents.BalancesUnreservedEvent
	private readonly stage: stageEvents.BalancesUnreservedEvent
	private readonly dev: devEvents.BalancesUnreservedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesUnreservedEvent(ctx, event)
		this.stage = new stageEvents.BalancesUnreservedEvent(ctx, event)
		this.dev = new devEvents.BalancesUnreservedEvent(ctx, event)
	}

	get isV1(): productionEvents.BalancesUnreservedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BalancesUnreservedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BalancesUnreservedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesUnreservedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.BalancesUnreservedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BalancesUnreservedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BalancesUnreservedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesUnreservedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesUnreservedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesUnreservedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesWithdrawEvent {
	private readonly production: productionEvents.BalancesWithdrawEvent
	private readonly stage: stageEvents.BalancesWithdrawEvent
	private readonly dev: devEvents.BalancesWithdrawEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BalancesWithdrawEvent(ctx, event)
		this.stage = new stageEvents.BalancesWithdrawEvent(ctx, event)
		this.dev = new devEvents.BalancesWithdrawEvent(ctx, event)
	}

	get isV42(): productionEvents.BalancesWithdrawEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BalancesWithdrawEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.BalancesWithdrawEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BalancesWithdrawEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.BalancesWithdrawEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BalancesWithdrawEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BandRelayersAddedEvent {
	private readonly production: productionEvents.BandRelayersAddedEvent
	private readonly stage: stageEvents.BandRelayersAddedEvent
	private readonly dev: devEvents.BandRelayersAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BandRelayersAddedEvent(ctx, event)
		this.stage = new stageEvents.BandRelayersAddedEvent(ctx, event)
		this.dev = new devEvents.BandRelayersAddedEvent(ctx, event)
	}

	get isV45(): productionEvents.BandRelayersAddedEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.BandRelayersAddedEvent['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageEvents.BandRelayersAddedEvent['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageEvents.BandRelayersAddedEvent['asV44'] {
		return this.stage.asV44
	}
	get isV60Dev(): devEvents.BandRelayersAddedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BandRelayersAddedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BandRelayersRemovedEvent {
	private readonly production: productionEvents.BandRelayersRemovedEvent
	private readonly stage: stageEvents.BandRelayersRemovedEvent
	private readonly dev: devEvents.BandRelayersRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BandRelayersRemovedEvent(ctx, event)
		this.stage = new stageEvents.BandRelayersRemovedEvent(ctx, event)
		this.dev = new devEvents.BandRelayersRemovedEvent(ctx, event)
	}

	get isV45(): productionEvents.BandRelayersRemovedEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.BandRelayersRemovedEvent['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageEvents.BandRelayersRemovedEvent['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageEvents.BandRelayersRemovedEvent['asV44'] {
		return this.stage.asV44
	}
	get isV60Dev(): devEvents.BandRelayersRemovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BandRelayersRemovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BandSymbolsRelayedEvent {
	private readonly production: productionEvents.BandSymbolsRelayedEvent
	private readonly stage: stageEvents.BandSymbolsRelayedEvent
	private readonly dev: devEvents.BandSymbolsRelayedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BandSymbolsRelayedEvent(ctx, event)
		this.stage = new stageEvents.BandSymbolsRelayedEvent(ctx, event)
		this.dev = new devEvents.BandSymbolsRelayedEvent(ctx, event)
	}

	get isV45(): productionEvents.BandSymbolsRelayedEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.BandSymbolsRelayedEvent['asV45'] {
		return this.production.asV45
	}
	get isV57(): productionEvents.BandSymbolsRelayedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.BandSymbolsRelayedEvent['asV57'] {
		return this.production.asV57
	}
	get isV44Stage(): stageEvents.BandSymbolsRelayedEvent['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageEvents.BandSymbolsRelayedEvent['asV44'] {
		return this.stage.asV44
	}
	get isV45Stage(): stageEvents.BandSymbolsRelayedEvent['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageEvents.BandSymbolsRelayedEvent['asV45'] {
		return this.stage.asV45
	}
	get isV54Stage(): stageEvents.BandSymbolsRelayedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.BandSymbolsRelayedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.BandSymbolsRelayedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BandSymbolsRelayedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigMultisigAccountCreatedEvent {
	private readonly production: productionEvents.BridgeMultisigMultisigAccountCreatedEvent
	private readonly stage: stageEvents.BridgeMultisigMultisigAccountCreatedEvent
	private readonly dev: devEvents.BridgeMultisigMultisigAccountCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigMultisigAccountCreatedEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigMultisigAccountCreatedEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigMultisigAccountCreatedEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigMultisigAccountCreatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigMultisigAccountCreatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.BridgeMultisigMultisigAccountCreatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BridgeMultisigMultisigAccountCreatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.BridgeMultisigMultisigAccountCreatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeMultisigMultisigAccountCreatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigMultisigApprovalEvent {
	private readonly production: productionEvents.BridgeMultisigMultisigApprovalEvent
	private readonly stage: stageEvents.BridgeMultisigMultisigApprovalEvent
	private readonly dev: devEvents.BridgeMultisigMultisigApprovalEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigMultisigApprovalEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigMultisigApprovalEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigMultisigApprovalEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigMultisigApprovalEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigMultisigApprovalEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.BridgeMultisigMultisigApprovalEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BridgeMultisigMultisigApprovalEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.BridgeMultisigMultisigApprovalEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeMultisigMultisigApprovalEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigMultisigCancelledEvent {
	private readonly production: productionEvents.BridgeMultisigMultisigCancelledEvent
	private readonly stage: stageEvents.BridgeMultisigMultisigCancelledEvent
	private readonly dev: devEvents.BridgeMultisigMultisigCancelledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigMultisigCancelledEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigMultisigCancelledEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigMultisigCancelledEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigMultisigCancelledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigMultisigCancelledEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.BridgeMultisigMultisigCancelledEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BridgeMultisigMultisigCancelledEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.BridgeMultisigMultisigCancelledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeMultisigMultisigCancelledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigMultisigExecutedEvent {
	private readonly production: productionEvents.BridgeMultisigMultisigExecutedEvent
	private readonly stage: stageEvents.BridgeMultisigMultisigExecutedEvent
	private readonly dev: devEvents.BridgeMultisigMultisigExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigMultisigExecutedEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigMultisigExecutedEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigMultisigExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigMultisigExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigMultisigExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.BridgeMultisigMultisigExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.BridgeMultisigMultisigExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.BridgeMultisigMultisigExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.BridgeMultisigMultisigExecutedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.BridgeMultisigMultisigExecutedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BridgeMultisigMultisigExecutedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.BridgeMultisigMultisigExecutedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.BridgeMultisigMultisigExecutedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.BridgeMultisigMultisigExecutedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BridgeMultisigMultisigExecutedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.BridgeMultisigMultisigExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeMultisigMultisigExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigNewMultisigEvent {
	private readonly production: productionEvents.BridgeMultisigNewMultisigEvent
	private readonly stage: stageEvents.BridgeMultisigNewMultisigEvent
	private readonly dev: devEvents.BridgeMultisigNewMultisigEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.BridgeMultisigNewMultisigEvent(ctx, event)
		this.stage = new stageEvents.BridgeMultisigNewMultisigEvent(ctx, event)
		this.dev = new devEvents.BridgeMultisigNewMultisigEvent(ctx, event)
	}

	get isV1(): productionEvents.BridgeMultisigNewMultisigEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.BridgeMultisigNewMultisigEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.BridgeMultisigNewMultisigEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.BridgeMultisigNewMultisigEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.BridgeMultisigNewMultisigEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeMultisigNewMultisigEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformCreatedEvent {
	private readonly production: productionEvents.CeresGovernancePlatformCreatedEvent
	private readonly stage: stageEvents.CeresGovernancePlatformCreatedEvent
	private readonly dev: devEvents.CeresGovernancePlatformCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresGovernancePlatformCreatedEvent(ctx, event)
		this.stage = new stageEvents.CeresGovernancePlatformCreatedEvent(ctx, event)
		this.dev = new devEvents.CeresGovernancePlatformCreatedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresGovernancePlatformCreatedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresGovernancePlatformCreatedEvent['asV26'] {
		return this.production.asV26
	}
	get isV37(): productionEvents.CeresGovernancePlatformCreatedEvent['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionEvents.CeresGovernancePlatformCreatedEvent['asV37'] {
		return this.production.asV37
	}
	get isV33Stage(): stageEvents.CeresGovernancePlatformCreatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresGovernancePlatformCreatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV37Stage(): stageEvents.CeresGovernancePlatformCreatedEvent['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageEvents.CeresGovernancePlatformCreatedEvent['asV37'] {
		return this.stage.asV37
	}
	get isV60Dev(): devEvents.CeresGovernancePlatformCreatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresGovernancePlatformCreatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformVotedEvent {
	private readonly production: productionEvents.CeresGovernancePlatformVotedEvent
	private readonly stage: stageEvents.CeresGovernancePlatformVotedEvent
	private readonly dev: devEvents.CeresGovernancePlatformVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresGovernancePlatformVotedEvent(ctx, event)
		this.stage = new stageEvents.CeresGovernancePlatformVotedEvent(ctx, event)
		this.dev = new devEvents.CeresGovernancePlatformVotedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresGovernancePlatformVotedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresGovernancePlatformVotedEvent['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageEvents.CeresGovernancePlatformVotedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresGovernancePlatformVotedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresGovernancePlatformVotedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresGovernancePlatformVotedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformWithdrawnEvent {
	private readonly production: productionEvents.CeresGovernancePlatformWithdrawnEvent
	private readonly stage: stageEvents.CeresGovernancePlatformWithdrawnEvent
	private readonly dev: devEvents.CeresGovernancePlatformWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresGovernancePlatformWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CeresGovernancePlatformWithdrawnEvent(ctx, event)
		this.dev = new devEvents.CeresGovernancePlatformWithdrawnEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresGovernancePlatformWithdrawnEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresGovernancePlatformWithdrawnEvent['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageEvents.CeresGovernancePlatformWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresGovernancePlatformWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresGovernancePlatformWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresGovernancePlatformWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadClaimedEvent {
	private readonly production: productionEvents.CeresLaunchpadClaimedEvent
	private readonly stage: stageEvents.CeresLaunchpadClaimedEvent
	private readonly dev: devEvents.CeresLaunchpadClaimedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadClaimedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadClaimedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadClaimedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadClaimedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadClaimedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadClaimedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadClaimedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CeresLaunchpadClaimedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadClaimedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CeresLaunchpadClaimedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CeresLaunchpadClaimedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CeresLaunchpadClaimedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadClaimedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadClaimedLpEvent {
	private readonly production: productionEvents.CeresLaunchpadClaimedLpEvent
	private readonly stage: stageEvents.CeresLaunchpadClaimedLpEvent
	private readonly dev: devEvents.CeresLaunchpadClaimedLpEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadClaimedLpEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadClaimedLpEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadClaimedLpEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadClaimedLpEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadClaimedLpEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadClaimedLpEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadClaimedLpEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CeresLaunchpadClaimedLpEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadClaimedLpEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CeresLaunchpadClaimedLpEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CeresLaunchpadClaimedLpEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CeresLaunchpadClaimedLpEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadClaimedLpEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadClaimedPswapEvent {
	private readonly production: productionEvents.CeresLaunchpadClaimedPswapEvent
	private readonly stage: stageEvents.CeresLaunchpadClaimedPswapEvent
	private readonly dev: devEvents.CeresLaunchpadClaimedPswapEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadClaimedPswapEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadClaimedPswapEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadClaimedPswapEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadClaimedPswapEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadClaimedPswapEvent['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageEvents.CeresLaunchpadClaimedPswapEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadClaimedPswapEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresLaunchpadClaimedPswapEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadClaimedPswapEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadContributedEvent {
	private readonly production: productionEvents.CeresLaunchpadContributedEvent
	private readonly stage: stageEvents.CeresLaunchpadContributedEvent
	private readonly dev: devEvents.CeresLaunchpadContributedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadContributedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadContributedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadContributedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadContributedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadContributedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadContributedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadContributedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CeresLaunchpadContributedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadContributedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CeresLaunchpadContributedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CeresLaunchpadContributedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CeresLaunchpadContributedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadContributedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadEmergencyWithdrawnEvent {
	private readonly production: productionEvents.CeresLaunchpadEmergencyWithdrawnEvent
	private readonly stage: stageEvents.CeresLaunchpadEmergencyWithdrawnEvent
	private readonly dev: devEvents.CeresLaunchpadEmergencyWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadEmergencyWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadEmergencyWithdrawnEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadEmergencyWithdrawnEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadEmergencyWithdrawnEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadEmergencyWithdrawnEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadEmergencyWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadEmergencyWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CeresLaunchpadEmergencyWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadEmergencyWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CeresLaunchpadEmergencyWithdrawnEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CeresLaunchpadEmergencyWithdrawnEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CeresLaunchpadEmergencyWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadEmergencyWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadFeeChangedEvent {
	private readonly production: productionEvents.CeresLaunchpadFeeChangedEvent
	private readonly stage: stageEvents.CeresLaunchpadFeeChangedEvent
	private readonly dev: devEvents.CeresLaunchpadFeeChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadFeeChangedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadFeeChangedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadFeeChangedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadFeeChangedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadFeeChangedEvent['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageEvents.CeresLaunchpadFeeChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadFeeChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresLaunchpadFeeChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadFeeChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadIloCreatedEvent {
	private readonly production: productionEvents.CeresLaunchpadIloCreatedEvent
	private readonly stage: stageEvents.CeresLaunchpadIloCreatedEvent
	private readonly dev: devEvents.CeresLaunchpadIloCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadIloCreatedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadIloCreatedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadIloCreatedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadIloCreatedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadIloCreatedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadIloCreatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadIloCreatedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CeresLaunchpadIloCreatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadIloCreatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CeresLaunchpadIloCreatedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CeresLaunchpadIloCreatedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CeresLaunchpadIloCreatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadIloCreatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadIloFinishedEvent {
	private readonly production: productionEvents.CeresLaunchpadIloFinishedEvent
	private readonly stage: stageEvents.CeresLaunchpadIloFinishedEvent
	private readonly dev: devEvents.CeresLaunchpadIloFinishedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadIloFinishedEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadIloFinishedEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadIloFinishedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresLaunchpadIloFinishedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresLaunchpadIloFinishedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresLaunchpadIloFinishedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresLaunchpadIloFinishedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CeresLaunchpadIloFinishedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadIloFinishedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CeresLaunchpadIloFinishedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CeresLaunchpadIloFinishedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CeresLaunchpadIloFinishedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadIloFinishedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadRemovedWhitelistedContributorEvent {
	private readonly production: productionEvents.CeresLaunchpadRemovedWhitelistedContributorEvent
	private readonly stage: stageEvents.CeresLaunchpadRemovedWhitelistedContributorEvent
	private readonly dev: devEvents.CeresLaunchpadRemovedWhitelistedContributorEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadRemovedWhitelistedContributorEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadRemovedWhitelistedContributorEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadRemovedWhitelistedContributorEvent(ctx, event)
	}

	get isV33(): productionEvents.CeresLaunchpadRemovedWhitelistedContributorEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.CeresLaunchpadRemovedWhitelistedContributorEvent['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageEvents.CeresLaunchpadRemovedWhitelistedContributorEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadRemovedWhitelistedContributorEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresLaunchpadRemovedWhitelistedContributorEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadRemovedWhitelistedContributorEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadRemovedWhitelistedIloOrganizerEvent {
	private readonly production: productionEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent
	private readonly stage: stageEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent
	private readonly dev: devEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent(ctx, event)
	}

	get isV33(): productionEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadRemovedWhitelistedIloOrganizerEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadWhitelistedContributorEvent {
	private readonly production: productionEvents.CeresLaunchpadWhitelistedContributorEvent
	private readonly stage: stageEvents.CeresLaunchpadWhitelistedContributorEvent
	private readonly dev: devEvents.CeresLaunchpadWhitelistedContributorEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadWhitelistedContributorEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadWhitelistedContributorEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadWhitelistedContributorEvent(ctx, event)
	}

	get isV33(): productionEvents.CeresLaunchpadWhitelistedContributorEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.CeresLaunchpadWhitelistedContributorEvent['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageEvents.CeresLaunchpadWhitelistedContributorEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadWhitelistedContributorEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresLaunchpadWhitelistedContributorEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadWhitelistedContributorEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadWhitelistedIloOrganizerEvent {
	private readonly production: productionEvents.CeresLaunchpadWhitelistedIloOrganizerEvent
	private readonly stage: stageEvents.CeresLaunchpadWhitelistedIloOrganizerEvent
	private readonly dev: devEvents.CeresLaunchpadWhitelistedIloOrganizerEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLaunchpadWhitelistedIloOrganizerEvent(ctx, event)
		this.stage = new stageEvents.CeresLaunchpadWhitelistedIloOrganizerEvent(ctx, event)
		this.dev = new devEvents.CeresLaunchpadWhitelistedIloOrganizerEvent(ctx, event)
	}

	get isV33(): productionEvents.CeresLaunchpadWhitelistedIloOrganizerEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.CeresLaunchpadWhitelistedIloOrganizerEvent['asV33'] {
		return this.production.asV33
	}
	get isV33Stage(): stageEvents.CeresLaunchpadWhitelistedIloOrganizerEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLaunchpadWhitelistedIloOrganizerEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresLaunchpadWhitelistedIloOrganizerEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLaunchpadWhitelistedIloOrganizerEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerLockedEvent {
	private readonly production: productionEvents.CeresLiquidityLockerLockedEvent
	private readonly stage: stageEvents.CeresLiquidityLockerLockedEvent
	private readonly dev: devEvents.CeresLiquidityLockerLockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresLiquidityLockerLockedEvent(ctx, event)
		this.stage = new stageEvents.CeresLiquidityLockerLockedEvent(ctx, event)
		this.dev = new devEvents.CeresLiquidityLockerLockedEvent(ctx, event)
	}

	get isV22(): productionEvents.CeresLiquidityLockerLockedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.CeresLiquidityLockerLockedEvent['asV22'] {
		return this.production.asV22
	}
	get isV37(): productionEvents.CeresLiquidityLockerLockedEvent['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionEvents.CeresLiquidityLockerLockedEvent['asV37'] {
		return this.production.asV37
	}
	get isV33Stage(): stageEvents.CeresLiquidityLockerLockedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresLiquidityLockerLockedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV37Stage(): stageEvents.CeresLiquidityLockerLockedEvent['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageEvents.CeresLiquidityLockerLockedEvent['asV37'] {
		return this.stage.asV37
	}
	get isV60Dev(): devEvents.CeresLiquidityLockerLockedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresLiquidityLockerLockedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingDepositedEvent {
	private readonly production: productionEvents.CeresStakingDepositedEvent
	private readonly stage: stageEvents.CeresStakingDepositedEvent
	private readonly dev: devEvents.CeresStakingDepositedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresStakingDepositedEvent(ctx, event)
		this.stage = new stageEvents.CeresStakingDepositedEvent(ctx, event)
		this.dev = new devEvents.CeresStakingDepositedEvent(ctx, event)
	}

	get isV19(): productionEvents.CeresStakingDepositedEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.CeresStakingDepositedEvent['asV19'] {
		return this.production.asV19
	}
	get isV33Stage(): stageEvents.CeresStakingDepositedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresStakingDepositedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresStakingDepositedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresStakingDepositedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingRewardsChangedEvent {
	private readonly production: productionEvents.CeresStakingRewardsChangedEvent
	private readonly stage: stageEvents.CeresStakingRewardsChangedEvent
	private readonly dev: devEvents.CeresStakingRewardsChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresStakingRewardsChangedEvent(ctx, event)
		this.stage = new stageEvents.CeresStakingRewardsChangedEvent(ctx, event)
		this.dev = new devEvents.CeresStakingRewardsChangedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresStakingRewardsChangedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresStakingRewardsChangedEvent['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageEvents.CeresStakingRewardsChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresStakingRewardsChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresStakingRewardsChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresStakingRewardsChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingWithdrawnEvent {
	private readonly production: productionEvents.CeresStakingWithdrawnEvent
	private readonly stage: stageEvents.CeresStakingWithdrawnEvent
	private readonly dev: devEvents.CeresStakingWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresStakingWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CeresStakingWithdrawnEvent(ctx, event)
		this.dev = new devEvents.CeresStakingWithdrawnEvent(ctx, event)
	}

	get isV19(): productionEvents.CeresStakingWithdrawnEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.CeresStakingWithdrawnEvent['asV19'] {
		return this.production.asV19
	}
	get isV33Stage(): stageEvents.CeresStakingWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresStakingWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresStakingWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresStakingWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerFeeChangedEvent {
	private readonly production: productionEvents.CeresTokenLockerFeeChangedEvent
	private readonly stage: stageEvents.CeresTokenLockerFeeChangedEvent
	private readonly dev: devEvents.CeresTokenLockerFeeChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresTokenLockerFeeChangedEvent(ctx, event)
		this.stage = new stageEvents.CeresTokenLockerFeeChangedEvent(ctx, event)
		this.dev = new devEvents.CeresTokenLockerFeeChangedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresTokenLockerFeeChangedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresTokenLockerFeeChangedEvent['asV26'] {
		return this.production.asV26
	}
	get isV33Stage(): stageEvents.CeresTokenLockerFeeChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresTokenLockerFeeChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.CeresTokenLockerFeeChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresTokenLockerFeeChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerLockedEvent {
	private readonly production: productionEvents.CeresTokenLockerLockedEvent
	private readonly stage: stageEvents.CeresTokenLockerLockedEvent
	private readonly dev: devEvents.CeresTokenLockerLockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresTokenLockerLockedEvent(ctx, event)
		this.stage = new stageEvents.CeresTokenLockerLockedEvent(ctx, event)
		this.dev = new devEvents.CeresTokenLockerLockedEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresTokenLockerLockedEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresTokenLockerLockedEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresTokenLockerLockedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresTokenLockerLockedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CeresTokenLockerLockedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresTokenLockerLockedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CeresTokenLockerLockedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CeresTokenLockerLockedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CeresTokenLockerLockedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresTokenLockerLockedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerWithdrawnEvent {
	private readonly production: productionEvents.CeresTokenLockerWithdrawnEvent
	private readonly stage: stageEvents.CeresTokenLockerWithdrawnEvent
	private readonly dev: devEvents.CeresTokenLockerWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CeresTokenLockerWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CeresTokenLockerWithdrawnEvent(ctx, event)
		this.dev = new devEvents.CeresTokenLockerWithdrawnEvent(ctx, event)
	}

	get isV26(): productionEvents.CeresTokenLockerWithdrawnEvent['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionEvents.CeresTokenLockerWithdrawnEvent['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionEvents.CeresTokenLockerWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CeresTokenLockerWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CeresTokenLockerWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CeresTokenLockerWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CeresTokenLockerWithdrawnEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CeresTokenLockerWithdrawnEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CeresTokenLockerWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CeresTokenLockerWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilApprovedEvent {
	private readonly production: productionEvents.CouncilApprovedEvent
	private readonly stage: stageEvents.CouncilApprovedEvent
	private readonly dev: devEvents.CouncilApprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilApprovedEvent(ctx, event)
		this.stage = new stageEvents.CouncilApprovedEvent(ctx, event)
		this.dev = new devEvents.CouncilApprovedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilApprovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilApprovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilApprovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilApprovedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CouncilApprovedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CouncilApprovedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CouncilApprovedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CouncilApprovedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CouncilApprovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CouncilApprovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilClosedEvent {
	private readonly production: productionEvents.CouncilClosedEvent
	private readonly stage: stageEvents.CouncilClosedEvent
	private readonly dev: devEvents.CouncilClosedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilClosedEvent(ctx, event)
		this.stage = new stageEvents.CouncilClosedEvent(ctx, event)
		this.dev = new devEvents.CouncilClosedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilClosedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilClosedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilClosedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilClosedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CouncilClosedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CouncilClosedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CouncilClosedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CouncilClosedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CouncilClosedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CouncilClosedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilDisapprovedEvent {
	private readonly production: productionEvents.CouncilDisapprovedEvent
	private readonly stage: stageEvents.CouncilDisapprovedEvent
	private readonly dev: devEvents.CouncilDisapprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilDisapprovedEvent(ctx, event)
		this.stage = new stageEvents.CouncilDisapprovedEvent(ctx, event)
		this.dev = new devEvents.CouncilDisapprovedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilDisapprovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilDisapprovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilDisapprovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilDisapprovedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CouncilDisapprovedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CouncilDisapprovedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CouncilDisapprovedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CouncilDisapprovedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CouncilDisapprovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CouncilDisapprovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilExecutedEvent {
	private readonly production: productionEvents.CouncilExecutedEvent
	private readonly stage: stageEvents.CouncilExecutedEvent
	private readonly dev: devEvents.CouncilExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilExecutedEvent(ctx, event)
		this.stage = new stageEvents.CouncilExecutedEvent(ctx, event)
		this.dev = new devEvents.CouncilExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.CouncilExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.CouncilExecutedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.CouncilExecutedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CouncilExecutedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CouncilExecutedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CouncilExecutedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.CouncilExecutedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.CouncilExecutedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.CouncilExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CouncilExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilMemberExecutedEvent {
	private readonly production: productionEvents.CouncilMemberExecutedEvent
	private readonly stage: stageEvents.CouncilMemberExecutedEvent
	private readonly dev: devEvents.CouncilMemberExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilMemberExecutedEvent(ctx, event)
		this.stage = new stageEvents.CouncilMemberExecutedEvent(ctx, event)
		this.dev = new devEvents.CouncilMemberExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilMemberExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilMemberExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilMemberExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilMemberExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.CouncilMemberExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.CouncilMemberExecutedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.CouncilMemberExecutedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CouncilMemberExecutedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CouncilMemberExecutedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CouncilMemberExecutedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.CouncilMemberExecutedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.CouncilMemberExecutedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.CouncilMemberExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CouncilMemberExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilProposedEvent {
	private readonly production: productionEvents.CouncilProposedEvent
	private readonly stage: stageEvents.CouncilProposedEvent
	private readonly dev: devEvents.CouncilProposedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilProposedEvent(ctx, event)
		this.stage = new stageEvents.CouncilProposedEvent(ctx, event)
		this.dev = new devEvents.CouncilProposedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilProposedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilProposedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilProposedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilProposedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CouncilProposedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CouncilProposedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CouncilProposedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CouncilProposedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CouncilProposedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CouncilProposedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilVotedEvent {
	private readonly production: productionEvents.CouncilVotedEvent
	private readonly stage: stageEvents.CouncilVotedEvent
	private readonly dev: devEvents.CouncilVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CouncilVotedEvent(ctx, event)
		this.stage = new stageEvents.CouncilVotedEvent(ctx, event)
		this.dev = new devEvents.CouncilVotedEvent(ctx, event)
	}

	get isV1(): productionEvents.CouncilVotedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CouncilVotedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.CouncilVotedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.CouncilVotedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.CouncilVotedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CouncilVotedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.CouncilVotedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.CouncilVotedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.CouncilVotedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.CouncilVotedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class CurrenciesBalanceUpdatedEvent {
	private readonly production: productionEvents.CurrenciesBalanceUpdatedEvent
	private readonly stage: stageEvents.CurrenciesBalanceUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CurrenciesBalanceUpdatedEvent(ctx, event)
		this.stage = new stageEvents.CurrenciesBalanceUpdatedEvent(ctx, event)
	}

	get isV1(): productionEvents.CurrenciesBalanceUpdatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CurrenciesBalanceUpdatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.CurrenciesBalanceUpdatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CurrenciesBalanceUpdatedEvent['asV33'] {
		return this.stage.asV33
	}
}

export class CurrenciesDepositedEvent {
	private readonly production: productionEvents.CurrenciesDepositedEvent
	private readonly stage: stageEvents.CurrenciesDepositedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CurrenciesDepositedEvent(ctx, event)
		this.stage = new stageEvents.CurrenciesDepositedEvent(ctx, event)
	}

	get isV1(): productionEvents.CurrenciesDepositedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CurrenciesDepositedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.CurrenciesDepositedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CurrenciesDepositedEvent['asV33'] {
		return this.stage.asV33
	}
}

export class CurrenciesTransferredEvent {
	private readonly production: productionEvents.CurrenciesTransferredEvent
	private readonly stage: stageEvents.CurrenciesTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CurrenciesTransferredEvent(ctx, event)
		this.stage = new stageEvents.CurrenciesTransferredEvent(ctx, event)
	}

	get isV1(): productionEvents.CurrenciesTransferredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CurrenciesTransferredEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.CurrenciesTransferredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CurrenciesTransferredEvent['asV33'] {
		return this.stage.asV33
	}
}

export class CurrenciesWithdrawnEvent {
	private readonly production: productionEvents.CurrenciesWithdrawnEvent
	private readonly stage: stageEvents.CurrenciesWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.CurrenciesWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.CurrenciesWithdrawnEvent(ctx, event)
	}

	get isV1(): productionEvents.CurrenciesWithdrawnEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.CurrenciesWithdrawnEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.CurrenciesWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.CurrenciesWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
}

export class DexapiDirectExchangeEvent {
	private readonly production: productionEvents.DexapiDirectExchangeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DexapiDirectExchangeEvent(ctx, event)
	}

	get isV1(): productionEvents.DexapiDirectExchangeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DexapiDirectExchangeEvent['asV1'] {
		return this.production.asV1
	}
}

export class DemeterFarmingPlatformDepositFeeChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformDepositFeeChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformDepositFeeChangedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformDepositFeeChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformDepositFeeChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformDepositedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformDepositedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformDepositedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformDepositedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformDepositedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformDepositedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformDepositedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformDepositedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformDepositedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformDepositedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformDepositedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformDepositedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformDepositedEvent['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformDepositedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformDepositedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformDepositedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformDepositedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformDepositedEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformDepositedEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformDepositedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformDepositedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformInfoChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformInfoChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformInfoChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformInfoChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformInfoChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformInfoChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformInfoChangedEvent(ctx, event)
	}

	get isV35(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformInfoChangedEvent['asV43'] {
		return this.production.asV43
	}
	get isV35Stage(): stageEvents.DemeterFarmingPlatformInfoChangedEvent['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageEvents.DemeterFarmingPlatformInfoChangedEvent['asV35'] {
		return this.stage.asV35
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformInfoChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformInfoChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformInfoChangedEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformInfoChangedEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformInfoChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformInfoChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformMultiplierChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformMultiplierChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformMultiplierChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformMultiplierChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformMultiplierChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformMultiplierChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformMultiplierChangedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformMultiplierChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformMultiplierChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformPoolAddedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformPoolAddedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformPoolAddedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformPoolAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformPoolAddedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformPoolAddedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformPoolAddedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformPoolAddedEvent['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformPoolAddedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformPoolAddedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformPoolAddedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformPoolAddedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformPoolAddedEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformPoolAddedEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformPoolAddedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformPoolAddedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformPoolRemovedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformPoolRemovedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformPoolRemovedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformPoolRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformPoolRemovedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformPoolRemovedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformPoolRemovedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformPoolRemovedEvent['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformPoolRemovedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformPoolRemovedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformPoolRemovedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformPoolRemovedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformPoolRemovedEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformPoolRemovedEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformPoolRemovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformPoolRemovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformRewardWithdrawnEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent
	private readonly dev: devEvents.DemeterFarmingPlatformRewardWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformRewardWithdrawnEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformRewardWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformRewardWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformTokenInfoChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformTokenInfoChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformTokenInfoChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformTokenInfoChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformTokenInfoChangedEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformTokenInfoChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformTokenInfoChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformTokenInfoChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformTokenInfoChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformTokenInfoChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformTokenInfoChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformTokenInfoChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformTokenRegisteredEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformTokenRegisteredEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformTokenRegisteredEvent
	private readonly dev: devEvents.DemeterFarmingPlatformTokenRegisteredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformTokenRegisteredEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformTokenRegisteredEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformTokenRegisteredEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformTokenRegisteredEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformTokenRegisteredEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformTokenRegisteredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformTokenRegisteredEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformTokenRegisteredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformTokenRegisteredEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformTokenRegisteredEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformTokenRegisteredEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformTokenRegisteredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformTokenRegisteredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformTotalTokensChangedEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent
	private readonly dev: devEvents.DemeterFarmingPlatformTotalTokensChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformTotalTokensChangedEvent(ctx, event)
	}

	get isV35(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV43'] {
		return this.production.asV43
	}
	get isV35Stage(): stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV35'] {
		return this.stage.isV35
	}
	get asV35Stage(): stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV35'] {
		return this.stage.asV35
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformTotalTokensChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformTotalTokensChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformWithdrawnEvent {
	private readonly production: productionEvents.DemeterFarmingPlatformWithdrawnEvent
	private readonly stage: stageEvents.DemeterFarmingPlatformWithdrawnEvent
	private readonly dev: devEvents.DemeterFarmingPlatformWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemeterFarmingPlatformWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.DemeterFarmingPlatformWithdrawnEvent(ctx, event)
		this.dev = new devEvents.DemeterFarmingPlatformWithdrawnEvent(ctx, event)
	}

	get isV33(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionEvents.DemeterFarmingPlatformWithdrawnEvent['asV43'] {
		return this.production.asV43
	}
	get isV33Stage(): stageEvents.DemeterFarmingPlatformWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemeterFarmingPlatformWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemeterFarmingPlatformWithdrawnEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemeterFarmingPlatformWithdrawnEvent['asV42'] {
		return this.stage.asV42
	}
	get isV43Stage(): stageEvents.DemeterFarmingPlatformWithdrawnEvent['isV43'] {
		return this.stage.isV43
	}
	get asV43Stage(): stageEvents.DemeterFarmingPlatformWithdrawnEvent['asV43'] {
		return this.stage.asV43
	}
	get isV60Dev(): devEvents.DemeterFarmingPlatformWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemeterFarmingPlatformWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyBlacklistedEvent {
	private readonly production: productionEvents.DemocracyBlacklistedEvent
	private readonly stage: stageEvents.DemocracyBlacklistedEvent
	private readonly dev: devEvents.DemocracyBlacklistedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyBlacklistedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyBlacklistedEvent(ctx, event)
		this.dev = new devEvents.DemocracyBlacklistedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyBlacklistedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyBlacklistedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyBlacklistedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyBlacklistedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyBlacklistedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyBlacklistedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyBlacklistedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyBlacklistedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyBlacklistedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyBlacklistedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyCancelledEvent {
	private readonly production: productionEvents.DemocracyCancelledEvent
	private readonly stage: stageEvents.DemocracyCancelledEvent
	private readonly dev: devEvents.DemocracyCancelledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyCancelledEvent(ctx, event)
		this.stage = new stageEvents.DemocracyCancelledEvent(ctx, event)
		this.dev = new devEvents.DemocracyCancelledEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyCancelledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyCancelledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyCancelledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyCancelledEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyCancelledEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyCancelledEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyCancelledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyCancelledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyCancelledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyCancelledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyDelegatedEvent {
	private readonly production: productionEvents.DemocracyDelegatedEvent
	private readonly stage: stageEvents.DemocracyDelegatedEvent
	private readonly dev: devEvents.DemocracyDelegatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyDelegatedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyDelegatedEvent(ctx, event)
		this.dev = new devEvents.DemocracyDelegatedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyDelegatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyDelegatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyDelegatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyDelegatedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyDelegatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyDelegatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyDelegatedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyDelegatedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyDelegatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyDelegatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyExecutedEvent {
	private readonly production: productionEvents.DemocracyExecutedEvent
	private readonly stage: stageEvents.DemocracyExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyExecutedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyExecutedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyExecutedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyExecutedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyExecutedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class DemocracyExternalTabledEvent {
	private readonly production: productionEvents.DemocracyExternalTabledEvent
	private readonly stage: stageEvents.DemocracyExternalTabledEvent
	private readonly dev: devEvents.DemocracyExternalTabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyExternalTabledEvent(ctx, event)
		this.stage = new stageEvents.DemocracyExternalTabledEvent(ctx, event)
		this.dev = new devEvents.DemocracyExternalTabledEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyExternalTabledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyExternalTabledEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.DemocracyExternalTabledEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyExternalTabledEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.DemocracyExternalTabledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyExternalTabledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyNotPassedEvent {
	private readonly production: productionEvents.DemocracyNotPassedEvent
	private readonly stage: stageEvents.DemocracyNotPassedEvent
	private readonly dev: devEvents.DemocracyNotPassedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyNotPassedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyNotPassedEvent(ctx, event)
		this.dev = new devEvents.DemocracyNotPassedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyNotPassedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyNotPassedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyNotPassedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyNotPassedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyNotPassedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyNotPassedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyNotPassedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyNotPassedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyNotPassedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyNotPassedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyPassedEvent {
	private readonly production: productionEvents.DemocracyPassedEvent
	private readonly stage: stageEvents.DemocracyPassedEvent
	private readonly dev: devEvents.DemocracyPassedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPassedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPassedEvent(ctx, event)
		this.dev = new devEvents.DemocracyPassedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPassedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPassedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPassedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPassedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyPassedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyPassedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyPassedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyPassedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyPassedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyPassedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyPreimageInvalidEvent {
	private readonly production: productionEvents.DemocracyPreimageInvalidEvent
	private readonly stage: stageEvents.DemocracyPreimageInvalidEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageInvalidEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageInvalidEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageInvalidEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageInvalidEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageInvalidEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageInvalidEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyPreimageInvalidEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyPreimageInvalidEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyPreimageInvalidEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyPreimageInvalidEvent['asV42'] {
		return this.stage.asV42
	}
}

export class DemocracyPreimageMissingEvent {
	private readonly production: productionEvents.DemocracyPreimageMissingEvent
	private readonly stage: stageEvents.DemocracyPreimageMissingEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageMissingEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageMissingEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageMissingEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageMissingEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageMissingEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageMissingEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyPreimageMissingEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyPreimageMissingEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyPreimageMissingEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyPreimageMissingEvent['asV42'] {
		return this.stage.asV42
	}
}

export class DemocracyPreimageNotedEvent {
	private readonly production: productionEvents.DemocracyPreimageNotedEvent
	private readonly stage: stageEvents.DemocracyPreimageNotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageNotedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageNotedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageNotedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageNotedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageNotedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageNotedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyPreimageNotedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyPreimageNotedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyPreimageNotedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyPreimageNotedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class DemocracyPreimageReapedEvent {
	private readonly production: productionEvents.DemocracyPreimageReapedEvent
	private readonly stage: stageEvents.DemocracyPreimageReapedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageReapedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageReapedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageReapedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageReapedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageReapedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageReapedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyPreimageReapedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyPreimageReapedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyPreimageReapedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyPreimageReapedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class DemocracyPreimageUsedEvent {
	private readonly production: productionEvents.DemocracyPreimageUsedEvent
	private readonly stage: stageEvents.DemocracyPreimageUsedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyPreimageUsedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyPreimageUsedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyPreimageUsedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyPreimageUsedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyPreimageUsedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyPreimageUsedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyPreimageUsedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyPreimageUsedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyPreimageUsedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyPreimageUsedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class DemocracyProposalCanceledEvent {
	private readonly production: productionEvents.DemocracyProposalCanceledEvent
	private readonly stage: stageEvents.DemocracyProposalCanceledEvent
	private readonly dev: devEvents.DemocracyProposalCanceledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyProposalCanceledEvent(ctx, event)
		this.stage = new stageEvents.DemocracyProposalCanceledEvent(ctx, event)
		this.dev = new devEvents.DemocracyProposalCanceledEvent(ctx, event)
	}

	get isV42(): productionEvents.DemocracyProposalCanceledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyProposalCanceledEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.DemocracyProposalCanceledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyProposalCanceledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyProposalCanceledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyProposalCanceledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyProposedEvent {
	private readonly production: productionEvents.DemocracyProposedEvent
	private readonly stage: stageEvents.DemocracyProposedEvent
	private readonly dev: devEvents.DemocracyProposedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyProposedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyProposedEvent(ctx, event)
		this.dev = new devEvents.DemocracyProposedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyProposedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyProposedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyProposedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyProposedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyProposedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyProposedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyProposedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyProposedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyProposedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyProposedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracySecondedEvent {
	private readonly production: productionEvents.DemocracySecondedEvent
	private readonly stage: stageEvents.DemocracySecondedEvent
	private readonly dev: devEvents.DemocracySecondedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracySecondedEvent(ctx, event)
		this.stage = new stageEvents.DemocracySecondedEvent(ctx, event)
		this.dev = new devEvents.DemocracySecondedEvent(ctx, event)
	}

	get isV42(): productionEvents.DemocracySecondedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracySecondedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.DemocracySecondedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracySecondedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracySecondedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracySecondedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyStartedEvent {
	private readonly production: productionEvents.DemocracyStartedEvent
	private readonly stage: stageEvents.DemocracyStartedEvent
	private readonly dev: devEvents.DemocracyStartedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyStartedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyStartedEvent(ctx, event)
		this.dev = new devEvents.DemocracyStartedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyStartedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyStartedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyStartedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyStartedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyStartedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyStartedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyStartedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyStartedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyStartedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyStartedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyTabledEvent {
	private readonly production: productionEvents.DemocracyTabledEvent
	private readonly stage: stageEvents.DemocracyTabledEvent
	private readonly dev: devEvents.DemocracyTabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyTabledEvent(ctx, event)
		this.stage = new stageEvents.DemocracyTabledEvent(ctx, event)
		this.dev = new devEvents.DemocracyTabledEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyTabledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyTabledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyTabledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyTabledEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.DemocracyTabledEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.DemocracyTabledEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.DemocracyTabledEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyTabledEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyTabledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyTabledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.DemocracyTabledEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.DemocracyTabledEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.DemocracyTabledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyTabledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyUndelegatedEvent {
	private readonly production: productionEvents.DemocracyUndelegatedEvent
	private readonly stage: stageEvents.DemocracyUndelegatedEvent
	private readonly dev: devEvents.DemocracyUndelegatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyUndelegatedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyUndelegatedEvent(ctx, event)
		this.dev = new devEvents.DemocracyUndelegatedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyUndelegatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyUndelegatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyUndelegatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyUndelegatedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyUndelegatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyUndelegatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyUndelegatedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyUndelegatedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyUndelegatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyUndelegatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyUnlockedEvent {
	private readonly production: productionEvents.DemocracyUnlockedEvent
	private readonly stage: stageEvents.DemocracyUnlockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyUnlockedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyUnlockedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyUnlockedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyUnlockedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.DemocracyUnlockedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyUnlockedEvent['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyVetoedEvent {
	private readonly production: productionEvents.DemocracyVetoedEvent
	private readonly stage: stageEvents.DemocracyVetoedEvent
	private readonly dev: devEvents.DemocracyVetoedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyVetoedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyVetoedEvent(ctx, event)
		this.dev = new devEvents.DemocracyVetoedEvent(ctx, event)
	}

	get isV1(): productionEvents.DemocracyVetoedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.DemocracyVetoedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.DemocracyVetoedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyVetoedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.DemocracyVetoedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.DemocracyVetoedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.DemocracyVetoedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyVetoedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyVetoedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyVetoedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyVotedEvent {
	private readonly production: productionEvents.DemocracyVotedEvent
	private readonly stage: stageEvents.DemocracyVotedEvent
	private readonly dev: devEvents.DemocracyVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.DemocracyVotedEvent(ctx, event)
		this.stage = new stageEvents.DemocracyVotedEvent(ctx, event)
		this.dev = new devEvents.DemocracyVotedEvent(ctx, event)
	}

	get isV42(): productionEvents.DemocracyVotedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.DemocracyVotedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.DemocracyVotedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.DemocracyVotedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.DemocracyVotedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DemocracyVotedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseElectionFailedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseElectionFailedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseElectionFailedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseElectionFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseElectionFailedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseElectionFailedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseElectionFailedEvent(ctx, event)
	}

	get isV53(): productionEvents.ElectionProviderMultiPhaseElectionFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.ElectionProviderMultiPhaseElectionFailedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.ElectionProviderMultiPhaseElectionFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.ElectionProviderMultiPhaseElectionFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.ElectionProviderMultiPhaseElectionFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionProviderMultiPhaseElectionFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseElectionFinalizedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseElectionFinalizedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseElectionFinalizedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseElectionFinalizedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseElectionFinalizedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionProviderMultiPhaseElectionFinalizedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhasePhaseTransitionedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhasePhaseTransitionedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhasePhaseTransitionedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhasePhaseTransitionedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhasePhaseTransitionedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhasePhaseTransitionedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhasePhaseTransitionedEvent(ctx, event)
	}

	get isV53(): productionEvents.ElectionProviderMultiPhasePhaseTransitionedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.ElectionProviderMultiPhasePhaseTransitionedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.ElectionProviderMultiPhasePhaseTransitionedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.ElectionProviderMultiPhasePhaseTransitionedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.ElectionProviderMultiPhasePhaseTransitionedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionProviderMultiPhasePhaseTransitionedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseRewardedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseRewardedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseRewardedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseRewardedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseRewardedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseRewardedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseRewardedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseRewardedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseRewardedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.ElectionProviderMultiPhaseRewardedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionProviderMultiPhaseRewardedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ElectionProviderMultiPhaseRewardedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionProviderMultiPhaseRewardedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSignedPhaseStartedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionProviderMultiPhaseSignedPhaseStartedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class ElectionProviderMultiPhaseSlashedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseSlashedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseSlashedEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseSlashedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseSlashedEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseSlashedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseSlashedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.ElectionProviderMultiPhaseSlashedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionProviderMultiPhaseSlashedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ElectionProviderMultiPhaseSlashedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionProviderMultiPhaseSlashedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSolutionStoredEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseSolutionStoredEvent
	private readonly dev: devEvents.ElectionProviderMultiPhaseSolutionStoredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseSolutionStoredEvent(ctx, event)
		this.dev = new devEvents.ElectionProviderMultiPhaseSolutionStoredEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.ElectionProviderMultiPhaseSolutionStoredEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.ElectionProviderMultiPhaseSolutionStoredEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionProviderMultiPhaseSolutionStoredEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.ElectionProviderMultiPhaseSolutionStoredEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.ElectionProviderMultiPhaseSolutionStoredEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.ElectionProviderMultiPhaseSolutionStoredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionProviderMultiPhaseSolutionStoredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseUnsignedPhaseStartedEvent {
	private readonly production: productionEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent
	private readonly stage: stageEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent(ctx, event)
		this.stage = new stageEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent(ctx, event)
	}

	get isV42(): productionEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionProviderMultiPhaseUnsignedPhaseStartedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class ElectionsPhragmenCandidateSlashedEvent {
	private readonly production: productionEvents.ElectionsPhragmenCandidateSlashedEvent
	private readonly stage: stageEvents.ElectionsPhragmenCandidateSlashedEvent
	private readonly dev: devEvents.ElectionsPhragmenCandidateSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenCandidateSlashedEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenCandidateSlashedEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenCandidateSlashedEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenCandidateSlashedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenCandidateSlashedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenCandidateSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenCandidateSlashedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.ElectionsPhragmenCandidateSlashedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ElectionsPhragmenCandidateSlashedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.ElectionsPhragmenCandidateSlashedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionsPhragmenCandidateSlashedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ElectionsPhragmenCandidateSlashedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionsPhragmenCandidateSlashedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenElectionErrorEvent {
	private readonly production: productionEvents.ElectionsPhragmenElectionErrorEvent
	private readonly stage: stageEvents.ElectionsPhragmenElectionErrorEvent
	private readonly dev: devEvents.ElectionsPhragmenElectionErrorEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenElectionErrorEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenElectionErrorEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenElectionErrorEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenElectionErrorEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenElectionErrorEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.ElectionsPhragmenElectionErrorEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ElectionsPhragmenElectionErrorEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.ElectionsPhragmenElectionErrorEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionsPhragmenElectionErrorEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenEmptyTermEvent {
	private readonly production: productionEvents.ElectionsPhragmenEmptyTermEvent
	private readonly stage: stageEvents.ElectionsPhragmenEmptyTermEvent
	private readonly dev: devEvents.ElectionsPhragmenEmptyTermEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenEmptyTermEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenEmptyTermEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenEmptyTermEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenEmptyTermEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenEmptyTermEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.ElectionsPhragmenEmptyTermEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ElectionsPhragmenEmptyTermEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.ElectionsPhragmenEmptyTermEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionsPhragmenEmptyTermEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenMemberKickedEvent {
	private readonly production: productionEvents.ElectionsPhragmenMemberKickedEvent
	private readonly stage: stageEvents.ElectionsPhragmenMemberKickedEvent
	private readonly dev: devEvents.ElectionsPhragmenMemberKickedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenMemberKickedEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenMemberKickedEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenMemberKickedEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenMemberKickedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenMemberKickedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenMemberKickedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenMemberKickedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.ElectionsPhragmenMemberKickedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ElectionsPhragmenMemberKickedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.ElectionsPhragmenMemberKickedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionsPhragmenMemberKickedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ElectionsPhragmenMemberKickedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionsPhragmenMemberKickedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenNewTermEvent {
	private readonly production: productionEvents.ElectionsPhragmenNewTermEvent
	private readonly stage: stageEvents.ElectionsPhragmenNewTermEvent
	private readonly dev: devEvents.ElectionsPhragmenNewTermEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenNewTermEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenNewTermEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenNewTermEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenNewTermEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenNewTermEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenNewTermEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenNewTermEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.ElectionsPhragmenNewTermEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ElectionsPhragmenNewTermEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.ElectionsPhragmenNewTermEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionsPhragmenNewTermEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ElectionsPhragmenNewTermEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionsPhragmenNewTermEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenRenouncedEvent {
	private readonly production: productionEvents.ElectionsPhragmenRenouncedEvent
	private readonly stage: stageEvents.ElectionsPhragmenRenouncedEvent
	private readonly dev: devEvents.ElectionsPhragmenRenouncedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenRenouncedEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenRenouncedEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenRenouncedEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenRenouncedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenRenouncedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenRenouncedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenRenouncedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.ElectionsPhragmenRenouncedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ElectionsPhragmenRenouncedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.ElectionsPhragmenRenouncedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionsPhragmenRenouncedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ElectionsPhragmenRenouncedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionsPhragmenRenouncedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenSeatHolderSlashedEvent {
	private readonly production: productionEvents.ElectionsPhragmenSeatHolderSlashedEvent
	private readonly stage: stageEvents.ElectionsPhragmenSeatHolderSlashedEvent
	private readonly dev: devEvents.ElectionsPhragmenSeatHolderSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ElectionsPhragmenSeatHolderSlashedEvent(ctx, event)
		this.stage = new stageEvents.ElectionsPhragmenSeatHolderSlashedEvent(ctx, event)
		this.dev = new devEvents.ElectionsPhragmenSeatHolderSlashedEvent(ctx, event)
	}

	get isV1(): productionEvents.ElectionsPhragmenSeatHolderSlashedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ElectionsPhragmenSeatHolderSlashedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ElectionsPhragmenSeatHolderSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ElectionsPhragmenSeatHolderSlashedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.ElectionsPhragmenSeatHolderSlashedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ElectionsPhragmenSeatHolderSlashedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.ElectionsPhragmenSeatHolderSlashedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ElectionsPhragmenSeatHolderSlashedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ElectionsPhragmenSeatHolderSlashedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ElectionsPhragmenSeatHolderSlashedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeApprovalsCollectedEvent {
	private readonly production: productionEvents.EthBridgeApprovalsCollectedEvent
	private readonly stage: stageEvents.EthBridgeApprovalsCollectedEvent
	private readonly dev: devEvents.EthBridgeApprovalsCollectedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeApprovalsCollectedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeApprovalsCollectedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeApprovalsCollectedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeApprovalsCollectedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeApprovalsCollectedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.EthBridgeApprovalsCollectedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.EthBridgeApprovalsCollectedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.EthBridgeApprovalsCollectedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthBridgeApprovalsCollectedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeCancellationFailedEvent {
	private readonly production: productionEvents.EthBridgeCancellationFailedEvent
	private readonly stage: stageEvents.EthBridgeCancellationFailedEvent
	private readonly dev: devEvents.EthBridgeCancellationFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeCancellationFailedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeCancellationFailedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeCancellationFailedEvent(ctx, event)
	}

	get isV3(): productionEvents.EthBridgeCancellationFailedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.EthBridgeCancellationFailedEvent['asV3'] {
		return this.production.asV3
	}
	get isV33Stage(): stageEvents.EthBridgeCancellationFailedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.EthBridgeCancellationFailedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.EthBridgeCancellationFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthBridgeCancellationFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeIncomingRequestFinalizationFailedEvent {
	private readonly production: productionEvents.EthBridgeIncomingRequestFinalizationFailedEvent
	private readonly stage: stageEvents.EthBridgeIncomingRequestFinalizationFailedEvent
	private readonly dev: devEvents.EthBridgeIncomingRequestFinalizationFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeIncomingRequestFinalizationFailedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeIncomingRequestFinalizationFailedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeIncomingRequestFinalizationFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeIncomingRequestFinalizationFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeIncomingRequestFinalizationFailedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.EthBridgeIncomingRequestFinalizationFailedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.EthBridgeIncomingRequestFinalizationFailedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.EthBridgeIncomingRequestFinalizationFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthBridgeIncomingRequestFinalizationFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeIncomingRequestFinalizedEvent {
	private readonly production: productionEvents.EthBridgeIncomingRequestFinalizedEvent
	private readonly stage: stageEvents.EthBridgeIncomingRequestFinalizedEvent
	private readonly dev: devEvents.EthBridgeIncomingRequestFinalizedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeIncomingRequestFinalizedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeIncomingRequestFinalizedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeIncomingRequestFinalizedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeIncomingRequestFinalizedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeIncomingRequestFinalizedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.EthBridgeIncomingRequestFinalizedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.EthBridgeIncomingRequestFinalizedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.EthBridgeIncomingRequestFinalizedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthBridgeIncomingRequestFinalizedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRegisterRequestFailedEvent {
	private readonly production: productionEvents.EthBridgeRegisterRequestFailedEvent
	private readonly stage: stageEvents.EthBridgeRegisterRequestFailedEvent
	private readonly dev: devEvents.EthBridgeRegisterRequestFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeRegisterRequestFailedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeRegisterRequestFailedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeRegisterRequestFailedEvent(ctx, event)
	}

	get isV53(): productionEvents.EthBridgeRegisterRequestFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.EthBridgeRegisterRequestFailedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.EthBridgeRegisterRequestFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthBridgeRegisterRequestFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.EthBridgeRegisterRequestFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthBridgeRegisterRequestFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestAbortedEvent {
	private readonly production: productionEvents.EthBridgeRequestAbortedEvent
	private readonly stage: stageEvents.EthBridgeRequestAbortedEvent
	private readonly dev: devEvents.EthBridgeRequestAbortedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeRequestAbortedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeRequestAbortedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeRequestAbortedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeRequestAbortedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeRequestAbortedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.EthBridgeRequestAbortedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.EthBridgeRequestAbortedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.EthBridgeRequestAbortedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthBridgeRequestAbortedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestFinalizationFailedEvent {
	private readonly production: productionEvents.EthBridgeRequestFinalizationFailedEvent
	private readonly stage: stageEvents.EthBridgeRequestFinalizationFailedEvent
	private readonly dev: devEvents.EthBridgeRequestFinalizationFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeRequestFinalizationFailedEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeRequestFinalizationFailedEvent(ctx, event)
		this.dev = new devEvents.EthBridgeRequestFinalizationFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeRequestFinalizationFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeRequestFinalizationFailedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.EthBridgeRequestFinalizationFailedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.EthBridgeRequestFinalizationFailedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.EthBridgeRequestFinalizationFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthBridgeRequestFinalizationFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestRegisteredEvent {
	private readonly production: productionEvents.EthBridgeRequestRegisteredEvent
	private readonly stage: stageEvents.EthBridgeRequestRegisteredEvent
	private readonly dev: devEvents.EthBridgeRequestRegisteredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.EthBridgeRequestRegisteredEvent(ctx, event)
		this.stage = new stageEvents.EthBridgeRequestRegisteredEvent(ctx, event)
		this.dev = new devEvents.EthBridgeRequestRegisteredEvent(ctx, event)
	}

	get isV1(): productionEvents.EthBridgeRequestRegisteredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.EthBridgeRequestRegisteredEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.EthBridgeRequestRegisteredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.EthBridgeRequestRegisteredEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.EthBridgeRequestRegisteredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthBridgeRequestRegisteredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class FaucetTransferredEvent {
	private readonly production: productionEvents.FaucetTransferredEvent
	private readonly stage: stageEvents.FaucetTransferredEvent
	private readonly dev: devEvents.FaucetTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.FaucetTransferredEvent(ctx, event)
		this.stage = new stageEvents.FaucetTransferredEvent(ctx, event)
		this.dev = new devEvents.FaucetTransferredEvent(ctx, event)
	}

	get isV22(): productionEvents.FaucetTransferredEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.FaucetTransferredEvent['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageEvents.FaucetTransferredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.FaucetTransferredEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.FaucetTransferredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.FaucetTransferredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaNewAuthoritiesEvent {
	private readonly production: productionEvents.GrandpaNewAuthoritiesEvent
	private readonly stage: stageEvents.GrandpaNewAuthoritiesEvent
	private readonly dev: devEvents.GrandpaNewAuthoritiesEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.GrandpaNewAuthoritiesEvent(ctx, event)
		this.stage = new stageEvents.GrandpaNewAuthoritiesEvent(ctx, event)
		this.dev = new devEvents.GrandpaNewAuthoritiesEvent(ctx, event)
	}

	get isV1(): productionEvents.GrandpaNewAuthoritiesEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.GrandpaNewAuthoritiesEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.GrandpaNewAuthoritiesEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.GrandpaNewAuthoritiesEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.GrandpaNewAuthoritiesEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.GrandpaNewAuthoritiesEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.GrandpaNewAuthoritiesEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.GrandpaNewAuthoritiesEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.GrandpaNewAuthoritiesEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.GrandpaNewAuthoritiesEvent['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaPausedEvent {
	private readonly production: productionEvents.GrandpaPausedEvent
	private readonly stage: stageEvents.GrandpaPausedEvent
	private readonly dev: devEvents.GrandpaPausedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.GrandpaPausedEvent(ctx, event)
		this.stage = new stageEvents.GrandpaPausedEvent(ctx, event)
		this.dev = new devEvents.GrandpaPausedEvent(ctx, event)
	}

	get isV1(): productionEvents.GrandpaPausedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.GrandpaPausedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.GrandpaPausedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.GrandpaPausedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.GrandpaPausedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.GrandpaPausedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaResumedEvent {
	private readonly production: productionEvents.GrandpaResumedEvent
	private readonly stage: stageEvents.GrandpaResumedEvent
	private readonly dev: devEvents.GrandpaResumedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.GrandpaResumedEvent(ctx, event)
		this.stage = new stageEvents.GrandpaResumedEvent(ctx, event)
		this.dev = new devEvents.GrandpaResumedEvent(ctx, event)
	}

	get isV1(): productionEvents.GrandpaResumedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.GrandpaResumedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.GrandpaResumedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.GrandpaResumedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.GrandpaResumedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.GrandpaResumedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformCreatedEvent {
	private readonly production: productionEvents.HermesGovernancePlatformCreatedEvent
	private readonly stage: stageEvents.HermesGovernancePlatformCreatedEvent
	private readonly dev: devEvents.HermesGovernancePlatformCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformCreatedEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformCreatedEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformCreatedEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformCreatedEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformCreatedEvent['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionEvents.HermesGovernancePlatformCreatedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.HermesGovernancePlatformCreatedEvent['asV57'] {
		return this.production.asV57
	}
	get isV47Stage(): stageEvents.HermesGovernancePlatformCreatedEvent['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageEvents.HermesGovernancePlatformCreatedEvent['asV47'] {
		return this.stage.asV47
	}
	get isV55Stage(): stageEvents.HermesGovernancePlatformCreatedEvent['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageEvents.HermesGovernancePlatformCreatedEvent['asV55'] {
		return this.stage.asV55
	}
	get isV60Dev(): devEvents.HermesGovernancePlatformCreatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.HermesGovernancePlatformCreatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformCreatorFundsWithdrawnEvent {
	private readonly production: productionEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent
	private readonly stage: stageEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent
	private readonly dev: devEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.HermesGovernancePlatformCreatorFundsWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent {
	private readonly production: productionEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent
	private readonly stage: stageEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent
	private readonly dev: devEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.HermesGovernancePlatformMinimumHermesForCreatingPollChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformMinimumHermesForVotingChangedEvent {
	private readonly production: productionEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent
	private readonly stage: stageEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent
	private readonly dev: devEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.HermesGovernancePlatformMinimumHermesForVotingChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformVotedEvent {
	private readonly production: productionEvents.HermesGovernancePlatformVotedEvent
	private readonly stage: stageEvents.HermesGovernancePlatformVotedEvent
	private readonly dev: devEvents.HermesGovernancePlatformVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformVotedEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformVotedEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformVotedEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformVotedEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformVotedEvent['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionEvents.HermesGovernancePlatformVotedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.HermesGovernancePlatformVotedEvent['asV57'] {
		return this.production.asV57
	}
	get isV47Stage(): stageEvents.HermesGovernancePlatformVotedEvent['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageEvents.HermesGovernancePlatformVotedEvent['asV47'] {
		return this.stage.asV47
	}
	get isV55Stage(): stageEvents.HermesGovernancePlatformVotedEvent['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageEvents.HermesGovernancePlatformVotedEvent['asV55'] {
		return this.stage.asV55
	}
	get isV60Dev(): devEvents.HermesGovernancePlatformVotedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.HermesGovernancePlatformVotedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformVoterFundsWithdrawnEvent {
	private readonly production: productionEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent
	private readonly stage: stageEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent
	private readonly dev: devEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent(ctx, event)
		this.dev = new devEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent(ctx, event)
	}

	get isV47(): productionEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent['asV47'] {
		return this.production.asV47
	}
	get isV47Stage(): stageEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent['isV47'] {
		return this.stage.isV47
	}
	get asV47Stage(): stageEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent['asV47'] {
		return this.stage.asV47
	}
	get isV60Dev(): devEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.HermesGovernancePlatformVoterFundsWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityIdentityClearedEvent {
	private readonly production: productionEvents.IdentityIdentityClearedEvent
	private readonly stage: stageEvents.IdentityIdentityClearedEvent
	private readonly dev: devEvents.IdentityIdentityClearedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityIdentityClearedEvent(ctx, event)
		this.stage = new stageEvents.IdentityIdentityClearedEvent(ctx, event)
		this.dev = new devEvents.IdentityIdentityClearedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityIdentityClearedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityIdentityClearedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityIdentityClearedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityIdentityClearedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentityIdentityClearedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentityIdentityClearedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentityIdentityClearedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentityIdentityClearedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentityIdentityClearedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentityIdentityClearedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityIdentityKilledEvent {
	private readonly production: productionEvents.IdentityIdentityKilledEvent
	private readonly stage: stageEvents.IdentityIdentityKilledEvent
	private readonly dev: devEvents.IdentityIdentityKilledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityIdentityKilledEvent(ctx, event)
		this.stage = new stageEvents.IdentityIdentityKilledEvent(ctx, event)
		this.dev = new devEvents.IdentityIdentityKilledEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityIdentityKilledEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityIdentityKilledEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityIdentityKilledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityIdentityKilledEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentityIdentityKilledEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentityIdentityKilledEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentityIdentityKilledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentityIdentityKilledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentityIdentityKilledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentityIdentityKilledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityIdentitySetEvent {
	private readonly production: productionEvents.IdentityIdentitySetEvent
	private readonly stage: stageEvents.IdentityIdentitySetEvent
	private readonly dev: devEvents.IdentityIdentitySetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityIdentitySetEvent(ctx, event)
		this.stage = new stageEvents.IdentityIdentitySetEvent(ctx, event)
		this.dev = new devEvents.IdentityIdentitySetEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityIdentitySetEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityIdentitySetEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityIdentitySetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityIdentitySetEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentityIdentitySetEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentityIdentitySetEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentityIdentitySetEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentityIdentitySetEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentityIdentitySetEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentityIdentitySetEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityJudgementGivenEvent {
	private readonly production: productionEvents.IdentityJudgementGivenEvent
	private readonly stage: stageEvents.IdentityJudgementGivenEvent
	private readonly dev: devEvents.IdentityJudgementGivenEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityJudgementGivenEvent(ctx, event)
		this.stage = new stageEvents.IdentityJudgementGivenEvent(ctx, event)
		this.dev = new devEvents.IdentityJudgementGivenEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityJudgementGivenEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityJudgementGivenEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityJudgementGivenEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityJudgementGivenEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentityJudgementGivenEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentityJudgementGivenEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentityJudgementGivenEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentityJudgementGivenEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentityJudgementGivenEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentityJudgementGivenEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityJudgementRequestedEvent {
	private readonly production: productionEvents.IdentityJudgementRequestedEvent
	private readonly stage: stageEvents.IdentityJudgementRequestedEvent
	private readonly dev: devEvents.IdentityJudgementRequestedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityJudgementRequestedEvent(ctx, event)
		this.stage = new stageEvents.IdentityJudgementRequestedEvent(ctx, event)
		this.dev = new devEvents.IdentityJudgementRequestedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityJudgementRequestedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityJudgementRequestedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityJudgementRequestedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityJudgementRequestedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentityJudgementRequestedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentityJudgementRequestedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentityJudgementRequestedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentityJudgementRequestedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentityJudgementRequestedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentityJudgementRequestedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityJudgementUnrequestedEvent {
	private readonly production: productionEvents.IdentityJudgementUnrequestedEvent
	private readonly stage: stageEvents.IdentityJudgementUnrequestedEvent
	private readonly dev: devEvents.IdentityJudgementUnrequestedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityJudgementUnrequestedEvent(ctx, event)
		this.stage = new stageEvents.IdentityJudgementUnrequestedEvent(ctx, event)
		this.dev = new devEvents.IdentityJudgementUnrequestedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityJudgementUnrequestedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityJudgementUnrequestedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityJudgementUnrequestedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityJudgementUnrequestedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentityJudgementUnrequestedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentityJudgementUnrequestedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentityJudgementUnrequestedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentityJudgementUnrequestedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentityJudgementUnrequestedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentityJudgementUnrequestedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityRegistrarAddedEvent {
	private readonly production: productionEvents.IdentityRegistrarAddedEvent
	private readonly stage: stageEvents.IdentityRegistrarAddedEvent
	private readonly dev: devEvents.IdentityRegistrarAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentityRegistrarAddedEvent(ctx, event)
		this.stage = new stageEvents.IdentityRegistrarAddedEvent(ctx, event)
		this.dev = new devEvents.IdentityRegistrarAddedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentityRegistrarAddedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentityRegistrarAddedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentityRegistrarAddedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentityRegistrarAddedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentityRegistrarAddedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentityRegistrarAddedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentityRegistrarAddedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentityRegistrarAddedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentityRegistrarAddedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentityRegistrarAddedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySubIdentityAddedEvent {
	private readonly production: productionEvents.IdentitySubIdentityAddedEvent
	private readonly stage: stageEvents.IdentitySubIdentityAddedEvent
	private readonly dev: devEvents.IdentitySubIdentityAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentitySubIdentityAddedEvent(ctx, event)
		this.stage = new stageEvents.IdentitySubIdentityAddedEvent(ctx, event)
		this.dev = new devEvents.IdentitySubIdentityAddedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentitySubIdentityAddedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentitySubIdentityAddedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentitySubIdentityAddedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentitySubIdentityAddedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentitySubIdentityAddedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentitySubIdentityAddedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentitySubIdentityAddedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentitySubIdentityAddedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentitySubIdentityAddedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentitySubIdentityAddedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySubIdentityRemovedEvent {
	private readonly production: productionEvents.IdentitySubIdentityRemovedEvent
	private readonly stage: stageEvents.IdentitySubIdentityRemovedEvent
	private readonly dev: devEvents.IdentitySubIdentityRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentitySubIdentityRemovedEvent(ctx, event)
		this.stage = new stageEvents.IdentitySubIdentityRemovedEvent(ctx, event)
		this.dev = new devEvents.IdentitySubIdentityRemovedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentitySubIdentityRemovedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentitySubIdentityRemovedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentitySubIdentityRemovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentitySubIdentityRemovedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentitySubIdentityRemovedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentitySubIdentityRemovedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentitySubIdentityRemovedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentitySubIdentityRemovedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentitySubIdentityRemovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentitySubIdentityRemovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySubIdentityRevokedEvent {
	private readonly production: productionEvents.IdentitySubIdentityRevokedEvent
	private readonly stage: stageEvents.IdentitySubIdentityRevokedEvent
	private readonly dev: devEvents.IdentitySubIdentityRevokedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IdentitySubIdentityRevokedEvent(ctx, event)
		this.stage = new stageEvents.IdentitySubIdentityRevokedEvent(ctx, event)
		this.dev = new devEvents.IdentitySubIdentityRevokedEvent(ctx, event)
	}

	get isV3(): productionEvents.IdentitySubIdentityRevokedEvent['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionEvents.IdentitySubIdentityRevokedEvent['asV3'] {
		return this.production.asV3
	}
	get isV42(): productionEvents.IdentitySubIdentityRevokedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IdentitySubIdentityRevokedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IdentitySubIdentityRevokedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IdentitySubIdentityRevokedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IdentitySubIdentityRevokedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IdentitySubIdentityRevokedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IdentitySubIdentityRevokedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IdentitySubIdentityRevokedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ImOnlineAllGoodEvent {
	private readonly production: productionEvents.ImOnlineAllGoodEvent
	private readonly stage: stageEvents.ImOnlineAllGoodEvent
	private readonly dev: devEvents.ImOnlineAllGoodEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ImOnlineAllGoodEvent(ctx, event)
		this.stage = new stageEvents.ImOnlineAllGoodEvent(ctx, event)
		this.dev = new devEvents.ImOnlineAllGoodEvent(ctx, event)
	}

	get isV1(): productionEvents.ImOnlineAllGoodEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ImOnlineAllGoodEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.ImOnlineAllGoodEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ImOnlineAllGoodEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.ImOnlineAllGoodEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ImOnlineAllGoodEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ImOnlineHeartbeatReceivedEvent {
	private readonly production: productionEvents.ImOnlineHeartbeatReceivedEvent
	private readonly stage: stageEvents.ImOnlineHeartbeatReceivedEvent
	private readonly dev: devEvents.ImOnlineHeartbeatReceivedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ImOnlineHeartbeatReceivedEvent(ctx, event)
		this.stage = new stageEvents.ImOnlineHeartbeatReceivedEvent(ctx, event)
		this.dev = new devEvents.ImOnlineHeartbeatReceivedEvent(ctx, event)
	}

	get isV1(): productionEvents.ImOnlineHeartbeatReceivedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ImOnlineHeartbeatReceivedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ImOnlineHeartbeatReceivedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ImOnlineHeartbeatReceivedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.ImOnlineHeartbeatReceivedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ImOnlineHeartbeatReceivedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.ImOnlineHeartbeatReceivedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ImOnlineHeartbeatReceivedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ImOnlineHeartbeatReceivedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ImOnlineHeartbeatReceivedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class ImOnlineSomeOfflineEvent {
	private readonly production: productionEvents.ImOnlineSomeOfflineEvent
	private readonly stage: stageEvents.ImOnlineSomeOfflineEvent
	private readonly dev: devEvents.ImOnlineSomeOfflineEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.ImOnlineSomeOfflineEvent(ctx, event)
		this.stage = new stageEvents.ImOnlineSomeOfflineEvent(ctx, event)
		this.dev = new devEvents.ImOnlineSomeOfflineEvent(ctx, event)
	}

	get isV1(): productionEvents.ImOnlineSomeOfflineEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.ImOnlineSomeOfflineEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.ImOnlineSomeOfflineEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.ImOnlineSomeOfflineEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.ImOnlineSomeOfflineEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.ImOnlineSomeOfflineEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.ImOnlineSomeOfflineEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.ImOnlineSomeOfflineEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.ImOnlineSomeOfflineEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.ImOnlineSomeOfflineEvent['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationMigratedEvent {
	private readonly production: productionEvents.IrohaMigrationMigratedEvent
	private readonly stage: stageEvents.IrohaMigrationMigratedEvent
	private readonly dev: devEvents.IrohaMigrationMigratedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.IrohaMigrationMigratedEvent(ctx, event)
		this.stage = new stageEvents.IrohaMigrationMigratedEvent(ctx, event)
		this.dev = new devEvents.IrohaMigrationMigratedEvent(ctx, event)
	}

	get isV1(): productionEvents.IrohaMigrationMigratedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.IrohaMigrationMigratedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.IrohaMigrationMigratedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.IrohaMigrationMigratedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.IrohaMigrationMigratedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.IrohaMigrationMigratedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.IrohaMigrationMigratedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.IrohaMigrationMigratedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.IrohaMigrationMigratedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.IrohaMigrationMigratedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxyBatchSwapExecutedEvent {
	private readonly production: productionEvents.LiquidityProxyBatchSwapExecutedEvent
	private readonly stage: stageEvents.LiquidityProxyBatchSwapExecutedEvent
	private readonly dev: devEvents.LiquidityProxyBatchSwapExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.LiquidityProxyBatchSwapExecutedEvent(ctx, event)
		this.stage = new stageEvents.LiquidityProxyBatchSwapExecutedEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyBatchSwapExecutedEvent(ctx, event)
	}

	get isV57(): productionEvents.LiquidityProxyBatchSwapExecutedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.LiquidityProxyBatchSwapExecutedEvent['asV57'] {
		return this.production.asV57
	}
	get isV55Stage(): stageEvents.LiquidityProxyBatchSwapExecutedEvent['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageEvents.LiquidityProxyBatchSwapExecutedEvent['asV55'] {
		return this.stage.asV55
	}
	get isV60Dev(): devEvents.LiquidityProxyBatchSwapExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.LiquidityProxyBatchSwapExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxyExchangeEvent {
	private readonly production: productionEvents.LiquidityProxyExchangeEvent
	private readonly stage: stageEvents.LiquidityProxyExchangeEvent
	private readonly dev: devEvents.LiquidityProxyExchangeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.LiquidityProxyExchangeEvent(ctx, event)
		this.stage = new stageEvents.LiquidityProxyExchangeEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyExchangeEvent(ctx, event)
	}

	get isV1(): productionEvents.LiquidityProxyExchangeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.LiquidityProxyExchangeEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.LiquidityProxyExchangeEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.LiquidityProxyExchangeEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.LiquidityProxyExchangeEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.LiquidityProxyExchangeEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.LiquidityProxyExchangeEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.LiquidityProxyExchangeEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.LiquidityProxyExchangeEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.LiquidityProxyExchangeEvent['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxyLiquiditySourceDisabledEvent {
	private readonly production: productionEvents.LiquidityProxyLiquiditySourceDisabledEvent
	private readonly stage: stageEvents.LiquidityProxyLiquiditySourceDisabledEvent
	private readonly dev: devEvents.LiquidityProxyLiquiditySourceDisabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.LiquidityProxyLiquiditySourceDisabledEvent(ctx, event)
		this.stage = new stageEvents.LiquidityProxyLiquiditySourceDisabledEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyLiquiditySourceDisabledEvent(ctx, event)
	}

	get isV38(): productionEvents.LiquidityProxyLiquiditySourceDisabledEvent['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionEvents.LiquidityProxyLiquiditySourceDisabledEvent['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionEvents.LiquidityProxyLiquiditySourceDisabledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.LiquidityProxyLiquiditySourceDisabledEvent['asV42'] {
		return this.production.asV42
	}
	get isV38Stage(): stageEvents.LiquidityProxyLiquiditySourceDisabledEvent['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageEvents.LiquidityProxyLiquiditySourceDisabledEvent['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageEvents.LiquidityProxyLiquiditySourceDisabledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.LiquidityProxyLiquiditySourceDisabledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.LiquidityProxyLiquiditySourceDisabledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.LiquidityProxyLiquiditySourceDisabledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class LiquidityProxyLiquiditySourceEnabledEvent {
	private readonly production: productionEvents.LiquidityProxyLiquiditySourceEnabledEvent
	private readonly stage: stageEvents.LiquidityProxyLiquiditySourceEnabledEvent
	private readonly dev: devEvents.LiquidityProxyLiquiditySourceEnabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.LiquidityProxyLiquiditySourceEnabledEvent(ctx, event)
		this.stage = new stageEvents.LiquidityProxyLiquiditySourceEnabledEvent(ctx, event)
		this.dev = new devEvents.LiquidityProxyLiquiditySourceEnabledEvent(ctx, event)
	}

	get isV38(): productionEvents.LiquidityProxyLiquiditySourceEnabledEvent['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionEvents.LiquidityProxyLiquiditySourceEnabledEvent['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionEvents.LiquidityProxyLiquiditySourceEnabledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.LiquidityProxyLiquiditySourceEnabledEvent['asV42'] {
		return this.production.asV42
	}
	get isV38Stage(): stageEvents.LiquidityProxyLiquiditySourceEnabledEvent['isV38'] {
		return this.stage.isV38
	}
	get asV38Stage(): stageEvents.LiquidityProxyLiquiditySourceEnabledEvent['asV38'] {
		return this.stage.asV38
	}
	get isV42Stage(): stageEvents.LiquidityProxyLiquiditySourceEnabledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.LiquidityProxyLiquiditySourceEnabledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.LiquidityProxyLiquiditySourceEnabledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.LiquidityProxyLiquiditySourceEnabledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent(ctx, event)
	}

	get isV1(): productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MulticollateralBondingCurvePoolOptionalRewardMultiplierUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolPoolInitializedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolPoolInitializedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolPoolInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolPoolInitializedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolPoolInitializedEvent(ctx, event)
	}

	get isV1(): productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MulticollateralBondingCurvePoolPoolInitializedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolPriceBiasChangedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent(ctx, event)
	}

	get isV22(): productionEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MulticollateralBondingCurvePoolPriceBiasChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent(ctx, event)
	}

	get isV22(): productionEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MulticollateralBondingCurvePoolPriceChangeConfigChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolReferenceAssetChangedEvent {
	private readonly production: productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent
	private readonly stage: stageEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent
	private readonly dev: devEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent(ctx, event)
		this.stage = new stageEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent(ctx, event)
		this.dev = new devEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent(ctx, event)
	}

	get isV1(): productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MulticollateralBondingCurvePoolReferenceAssetChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigMultisigApprovalEvent {
	private readonly production: productionEvents.MultisigMultisigApprovalEvent
	private readonly stage: stageEvents.MultisigMultisigApprovalEvent
	private readonly dev: devEvents.MultisigMultisigApprovalEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigMultisigApprovalEvent(ctx, event)
		this.stage = new stageEvents.MultisigMultisigApprovalEvent(ctx, event)
		this.dev = new devEvents.MultisigMultisigApprovalEvent(ctx, event)
	}

	get isV1(): productionEvents.MultisigMultisigApprovalEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MultisigMultisigApprovalEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MultisigMultisigApprovalEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MultisigMultisigApprovalEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.MultisigMultisigApprovalEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MultisigMultisigApprovalEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.MultisigMultisigApprovalEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.MultisigMultisigApprovalEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.MultisigMultisigApprovalEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MultisigMultisigApprovalEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigMultisigCancelledEvent {
	private readonly production: productionEvents.MultisigMultisigCancelledEvent
	private readonly stage: stageEvents.MultisigMultisigCancelledEvent
	private readonly dev: devEvents.MultisigMultisigCancelledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigMultisigCancelledEvent(ctx, event)
		this.stage = new stageEvents.MultisigMultisigCancelledEvent(ctx, event)
		this.dev = new devEvents.MultisigMultisigCancelledEvent(ctx, event)
	}

	get isV1(): productionEvents.MultisigMultisigCancelledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MultisigMultisigCancelledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MultisigMultisigCancelledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MultisigMultisigCancelledEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.MultisigMultisigCancelledEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MultisigMultisigCancelledEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.MultisigMultisigCancelledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.MultisigMultisigCancelledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.MultisigMultisigCancelledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MultisigMultisigCancelledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigMultisigExecutedEvent {
	private readonly production: productionEvents.MultisigMultisigExecutedEvent
	private readonly stage: stageEvents.MultisigMultisigExecutedEvent
	private readonly dev: devEvents.MultisigMultisigExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigMultisigExecutedEvent(ctx, event)
		this.stage = new stageEvents.MultisigMultisigExecutedEvent(ctx, event)
		this.dev = new devEvents.MultisigMultisigExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.MultisigMultisigExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MultisigMultisigExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MultisigMultisigExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MultisigMultisigExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.MultisigMultisigExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.MultisigMultisigExecutedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.MultisigMultisigExecutedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MultisigMultisigExecutedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.MultisigMultisigExecutedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.MultisigMultisigExecutedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.MultisigMultisigExecutedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.MultisigMultisigExecutedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.MultisigMultisigExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MultisigMultisigExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigNewMultisigEvent {
	private readonly production: productionEvents.MultisigNewMultisigEvent
	private readonly stage: stageEvents.MultisigNewMultisigEvent
	private readonly dev: devEvents.MultisigNewMultisigEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.MultisigNewMultisigEvent(ctx, event)
		this.stage = new stageEvents.MultisigNewMultisigEvent(ctx, event)
		this.dev = new devEvents.MultisigNewMultisigEvent(ctx, event)
	}

	get isV1(): productionEvents.MultisigNewMultisigEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.MultisigNewMultisigEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.MultisigNewMultisigEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.MultisigNewMultisigEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.MultisigNewMultisigEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.MultisigNewMultisigEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.MultisigNewMultisigEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.MultisigNewMultisigEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.MultisigNewMultisigEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MultisigNewMultisigEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OffencesOffenceEvent {
	private readonly production: productionEvents.OffencesOffenceEvent
	private readonly stage: stageEvents.OffencesOffenceEvent
	private readonly dev: devEvents.OffencesOffenceEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.OffencesOffenceEvent(ctx, event)
		this.stage = new stageEvents.OffencesOffenceEvent(ctx, event)
		this.dev = new devEvents.OffencesOffenceEvent(ctx, event)
	}

	get isV1(): productionEvents.OffencesOffenceEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.OffencesOffenceEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.OffencesOffenceEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.OffencesOffenceEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.OffencesOffenceEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.OffencesOffenceEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.OffencesOffenceEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.OffencesOffenceEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.OffencesOffenceEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OffencesOffenceEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OracleProxyOracleDisabledEvent {
	private readonly production: productionEvents.OracleProxyOracleDisabledEvent
	private readonly stage: stageEvents.OracleProxyOracleDisabledEvent
	private readonly dev: devEvents.OracleProxyOracleDisabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.OracleProxyOracleDisabledEvent(ctx, event)
		this.stage = new stageEvents.OracleProxyOracleDisabledEvent(ctx, event)
		this.dev = new devEvents.OracleProxyOracleDisabledEvent(ctx, event)
	}

	get isV45(): productionEvents.OracleProxyOracleDisabledEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.OracleProxyOracleDisabledEvent['asV45'] {
		return this.production.asV45
	}
	get isV45Stage(): stageEvents.OracleProxyOracleDisabledEvent['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageEvents.OracleProxyOracleDisabledEvent['asV45'] {
		return this.stage.asV45
	}
	get isV60Dev(): devEvents.OracleProxyOracleDisabledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OracleProxyOracleDisabledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OracleProxyOracleEnabledEvent {
	private readonly production: productionEvents.OracleProxyOracleEnabledEvent
	private readonly stage: stageEvents.OracleProxyOracleEnabledEvent
	private readonly dev: devEvents.OracleProxyOracleEnabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.OracleProxyOracleEnabledEvent(ctx, event)
		this.stage = new stageEvents.OracleProxyOracleEnabledEvent(ctx, event)
		this.dev = new devEvents.OracleProxyOracleEnabledEvent(ctx, event)
	}

	get isV45(): productionEvents.OracleProxyOracleEnabledEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.OracleProxyOracleEnabledEvent['asV45'] {
		return this.production.asV45
	}
	get isV45Stage(): stageEvents.OracleProxyOracleEnabledEvent['isV45'] {
		return this.stage.isV45
	}
	get asV45Stage(): stageEvents.OracleProxyOracleEnabledEvent['asV45'] {
		return this.stage.asV45
	}
	get isV60Dev(): devEvents.OracleProxyOracleEnabledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OracleProxyOracleEnabledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PermissionsPermissionAssignedEvent {
	private readonly production: productionEvents.PermissionsPermissionAssignedEvent
	private readonly stage: stageEvents.PermissionsPermissionAssignedEvent
	private readonly dev: devEvents.PermissionsPermissionAssignedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PermissionsPermissionAssignedEvent(ctx, event)
		this.stage = new stageEvents.PermissionsPermissionAssignedEvent(ctx, event)
		this.dev = new devEvents.PermissionsPermissionAssignedEvent(ctx, event)
	}

	get isV1(): productionEvents.PermissionsPermissionAssignedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PermissionsPermissionAssignedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.PermissionsPermissionAssignedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PermissionsPermissionAssignedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.PermissionsPermissionAssignedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PermissionsPermissionAssignedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PermissionsPermissionCreatedEvent {
	private readonly production: productionEvents.PermissionsPermissionCreatedEvent
	private readonly stage: stageEvents.PermissionsPermissionCreatedEvent
	private readonly dev: devEvents.PermissionsPermissionCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PermissionsPermissionCreatedEvent(ctx, event)
		this.stage = new stageEvents.PermissionsPermissionCreatedEvent(ctx, event)
		this.dev = new devEvents.PermissionsPermissionCreatedEvent(ctx, event)
	}

	get isV1(): productionEvents.PermissionsPermissionCreatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PermissionsPermissionCreatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.PermissionsPermissionCreatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PermissionsPermissionCreatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.PermissionsPermissionCreatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PermissionsPermissionCreatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PermissionsPermissionGrantedEvent {
	private readonly production: productionEvents.PermissionsPermissionGrantedEvent
	private readonly stage: stageEvents.PermissionsPermissionGrantedEvent
	private readonly dev: devEvents.PermissionsPermissionGrantedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PermissionsPermissionGrantedEvent(ctx, event)
		this.stage = new stageEvents.PermissionsPermissionGrantedEvent(ctx, event)
		this.dev = new devEvents.PermissionsPermissionGrantedEvent(ctx, event)
	}

	get isV1(): productionEvents.PermissionsPermissionGrantedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PermissionsPermissionGrantedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.PermissionsPermissionGrantedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PermissionsPermissionGrantedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.PermissionsPermissionGrantedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PermissionsPermissionGrantedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PermissionsPermissionTransferedEvent {
	private readonly production: productionEvents.PermissionsPermissionTransferedEvent
	private readonly stage: stageEvents.PermissionsPermissionTransferedEvent
	private readonly dev: devEvents.PermissionsPermissionTransferedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PermissionsPermissionTransferedEvent(ctx, event)
		this.stage = new stageEvents.PermissionsPermissionTransferedEvent(ctx, event)
		this.dev = new devEvents.PermissionsPermissionTransferedEvent(ctx, event)
	}

	get isV1(): productionEvents.PermissionsPermissionTransferedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PermissionsPermissionTransferedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.PermissionsPermissionTransferedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PermissionsPermissionTransferedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.PermissionsPermissionTransferedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PermissionsPermissionTransferedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PoolXykPoolIsInitializedEvent {
	private readonly production: productionEvents.PoolXykPoolIsInitializedEvent
	private readonly stage: stageEvents.PoolXykPoolIsInitializedEvent
	private readonly dev: devEvents.PoolXykPoolIsInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PoolXykPoolIsInitializedEvent(ctx, event)
		this.stage = new stageEvents.PoolXykPoolIsInitializedEvent(ctx, event)
		this.dev = new devEvents.PoolXykPoolIsInitializedEvent(ctx, event)
	}

	get isV1(): productionEvents.PoolXykPoolIsInitializedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PoolXykPoolIsInitializedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.PoolXykPoolIsInitializedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PoolXykPoolIsInitializedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.PoolXykPoolIsInitializedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PoolXykPoolIsInitializedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PreimageClearedEvent {
	private readonly production: productionEvents.PreimageClearedEvent
	private readonly stage: stageEvents.PreimageClearedEvent
	private readonly dev: devEvents.PreimageClearedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PreimageClearedEvent(ctx, event)
		this.stage = new stageEvents.PreimageClearedEvent(ctx, event)
		this.dev = new devEvents.PreimageClearedEvent(ctx, event)
	}

	get isV53(): productionEvents.PreimageClearedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.PreimageClearedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.PreimageClearedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.PreimageClearedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.PreimageClearedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PreimageClearedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PreimageNotedEvent {
	private readonly production: productionEvents.PreimageNotedEvent
	private readonly stage: stageEvents.PreimageNotedEvent
	private readonly dev: devEvents.PreimageNotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PreimageNotedEvent(ctx, event)
		this.stage = new stageEvents.PreimageNotedEvent(ctx, event)
		this.dev = new devEvents.PreimageNotedEvent(ctx, event)
	}

	get isV53(): productionEvents.PreimageNotedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.PreimageNotedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.PreimageNotedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.PreimageNotedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.PreimageNotedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PreimageNotedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PreimageRequestedEvent {
	private readonly production: productionEvents.PreimageRequestedEvent
	private readonly stage: stageEvents.PreimageRequestedEvent
	private readonly dev: devEvents.PreimageRequestedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PreimageRequestedEvent(ctx, event)
		this.stage = new stageEvents.PreimageRequestedEvent(ctx, event)
		this.dev = new devEvents.PreimageRequestedEvent(ctx, event)
	}

	get isV53(): productionEvents.PreimageRequestedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.PreimageRequestedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.PreimageRequestedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.PreimageRequestedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.PreimageRequestedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PreimageRequestedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionBurnRateChangedEvent {
	private readonly production: productionEvents.PswapDistributionBurnRateChangedEvent
	private readonly stage: stageEvents.PswapDistributionBurnRateChangedEvent
	private readonly dev: devEvents.PswapDistributionBurnRateChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionBurnRateChangedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionBurnRateChangedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionBurnRateChangedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionBurnRateChangedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionBurnRateChangedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionBurnRateChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionBurnRateChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.PswapDistributionBurnRateChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PswapDistributionBurnRateChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.PswapDistributionBurnRateChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.PswapDistributionBurnRateChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.PswapDistributionBurnRateChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PswapDistributionBurnRateChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionFeesExchangeFailedEvent {
	private readonly production: productionEvents.PswapDistributionFeesExchangeFailedEvent
	private readonly stage: stageEvents.PswapDistributionFeesExchangeFailedEvent
	private readonly dev: devEvents.PswapDistributionFeesExchangeFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionFeesExchangeFailedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionFeesExchangeFailedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionFeesExchangeFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionFeesExchangeFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionFeesExchangeFailedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionFeesExchangeFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionFeesExchangeFailedEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.PswapDistributionFeesExchangeFailedEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.PswapDistributionFeesExchangeFailedEvent['asV46'] {
		return this.production.asV46
	}
	get isV53(): productionEvents.PswapDistributionFeesExchangeFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.PswapDistributionFeesExchangeFailedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.PswapDistributionFeesExchangeFailedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PswapDistributionFeesExchangeFailedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.PswapDistributionFeesExchangeFailedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.PswapDistributionFeesExchangeFailedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV46Stage(): stageEvents.PswapDistributionFeesExchangeFailedEvent['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageEvents.PswapDistributionFeesExchangeFailedEvent['asV46'] {
		return this.stage.asV46
	}
	get isV52Stage(): stageEvents.PswapDistributionFeesExchangeFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.PswapDistributionFeesExchangeFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.PswapDistributionFeesExchangeFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PswapDistributionFeesExchangeFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionFeesExchangedEvent {
	private readonly production: productionEvents.PswapDistributionFeesExchangedEvent
	private readonly stage: stageEvents.PswapDistributionFeesExchangedEvent
	private readonly dev: devEvents.PswapDistributionFeesExchangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionFeesExchangedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionFeesExchangedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionFeesExchangedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionFeesExchangedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionFeesExchangedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionFeesExchangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionFeesExchangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.PswapDistributionFeesExchangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PswapDistributionFeesExchangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.PswapDistributionFeesExchangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.PswapDistributionFeesExchangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.PswapDistributionFeesExchangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PswapDistributionFeesExchangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionIncentiveDistributedEvent {
	private readonly production: productionEvents.PswapDistributionIncentiveDistributedEvent
	private readonly stage: stageEvents.PswapDistributionIncentiveDistributedEvent
	private readonly dev: devEvents.PswapDistributionIncentiveDistributedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionIncentiveDistributedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionIncentiveDistributedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionIncentiveDistributedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionIncentiveDistributedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionIncentiveDistributedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionIncentiveDistributedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionIncentiveDistributedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.PswapDistributionIncentiveDistributedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PswapDistributionIncentiveDistributedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.PswapDistributionIncentiveDistributedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.PswapDistributionIncentiveDistributedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.PswapDistributionIncentiveDistributedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PswapDistributionIncentiveDistributedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionIncentiveDistributionFailedEvent {
	private readonly production: productionEvents.PswapDistributionIncentiveDistributionFailedEvent
	private readonly stage: stageEvents.PswapDistributionIncentiveDistributionFailedEvent
	private readonly dev: devEvents.PswapDistributionIncentiveDistributionFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionIncentiveDistributionFailedEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionIncentiveDistributionFailedEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionIncentiveDistributionFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionIncentiveDistributionFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionIncentiveDistributionFailedEvent['asV1'] {
		return this.production.asV1
	}
	get isV8(): productionEvents.PswapDistributionIncentiveDistributionFailedEvent['isV8'] {
		return this.production.isV8
	}
	get asV8(): productionEvents.PswapDistributionIncentiveDistributionFailedEvent['asV8'] {
		return this.production.asV8
	}
	get isV33Stage(): stageEvents.PswapDistributionIncentiveDistributionFailedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PswapDistributionIncentiveDistributionFailedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.PswapDistributionIncentiveDistributionFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PswapDistributionIncentiveDistributionFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionIncentivesBurnedAfterExchangeEvent {
	private readonly production: productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent
	private readonly stage: stageEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent
	private readonly dev: devEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PswapDistributionIncentivesBurnedAfterExchangeEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionNothingToDistributeEvent {
	private readonly production: productionEvents.PswapDistributionNothingToDistributeEvent
	private readonly stage: stageEvents.PswapDistributionNothingToDistributeEvent
	private readonly dev: devEvents.PswapDistributionNothingToDistributeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionNothingToDistributeEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionNothingToDistributeEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionNothingToDistributeEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionNothingToDistributeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionNothingToDistributeEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.PswapDistributionNothingToDistributeEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PswapDistributionNothingToDistributeEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.PswapDistributionNothingToDistributeEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PswapDistributionNothingToDistributeEvent['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionNothingToExchangeEvent {
	private readonly production: productionEvents.PswapDistributionNothingToExchangeEvent
	private readonly stage: stageEvents.PswapDistributionNothingToExchangeEvent
	private readonly dev: devEvents.PswapDistributionNothingToExchangeEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.PswapDistributionNothingToExchangeEvent(ctx, event)
		this.stage = new stageEvents.PswapDistributionNothingToExchangeEvent(ctx, event)
		this.dev = new devEvents.PswapDistributionNothingToExchangeEvent(ctx, event)
	}

	get isV1(): productionEvents.PswapDistributionNothingToExchangeEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.PswapDistributionNothingToExchangeEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.PswapDistributionNothingToExchangeEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.PswapDistributionNothingToExchangeEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.PswapDistributionNothingToExchangeEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.PswapDistributionNothingToExchangeEvent['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsClaimedEvent {
	private readonly production: productionEvents.RewardsClaimedEvent
	private readonly stage: stageEvents.RewardsClaimedEvent
	private readonly dev: devEvents.RewardsClaimedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.RewardsClaimedEvent(ctx, event)
		this.stage = new stageEvents.RewardsClaimedEvent(ctx, event)
		this.dev = new devEvents.RewardsClaimedEvent(ctx, event)
	}

	get isV1(): productionEvents.RewardsClaimedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.RewardsClaimedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.RewardsClaimedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.RewardsClaimedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.RewardsClaimedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.RewardsClaimedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsMigrationCompletedEvent {
	private readonly production: productionEvents.RewardsMigrationCompletedEvent
	private readonly stage: stageEvents.RewardsMigrationCompletedEvent
	private readonly dev: devEvents.RewardsMigrationCompletedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.RewardsMigrationCompletedEvent(ctx, event)
		this.stage = new stageEvents.RewardsMigrationCompletedEvent(ctx, event)
		this.dev = new devEvents.RewardsMigrationCompletedEvent(ctx, event)
	}

	get isV19(): productionEvents.RewardsMigrationCompletedEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.RewardsMigrationCompletedEvent['asV19'] {
		return this.production.asV19
	}
	get isV33Stage(): stageEvents.RewardsMigrationCompletedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.RewardsMigrationCompletedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.RewardsMigrationCompletedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.RewardsMigrationCompletedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerCallLookupFailedEvent {
	private readonly production: productionEvents.SchedulerCallLookupFailedEvent
	private readonly stage: stageEvents.SchedulerCallLookupFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerCallLookupFailedEvent(ctx, event)
		this.stage = new stageEvents.SchedulerCallLookupFailedEvent(ctx, event)
	}

	get isV42(): productionEvents.SchedulerCallLookupFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SchedulerCallLookupFailedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.SchedulerCallLookupFailedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SchedulerCallLookupFailedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class SchedulerCallUnavailableEvent {
	private readonly production: productionEvents.SchedulerCallUnavailableEvent
	private readonly stage: stageEvents.SchedulerCallUnavailableEvent
	private readonly dev: devEvents.SchedulerCallUnavailableEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerCallUnavailableEvent(ctx, event)
		this.stage = new stageEvents.SchedulerCallUnavailableEvent(ctx, event)
		this.dev = new devEvents.SchedulerCallUnavailableEvent(ctx, event)
	}

	get isV53(): productionEvents.SchedulerCallUnavailableEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SchedulerCallUnavailableEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.SchedulerCallUnavailableEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SchedulerCallUnavailableEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SchedulerCallUnavailableEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SchedulerCallUnavailableEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerCanceledEvent {
	private readonly production: productionEvents.SchedulerCanceledEvent
	private readonly stage: stageEvents.SchedulerCanceledEvent
	private readonly dev: devEvents.SchedulerCanceledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerCanceledEvent(ctx, event)
		this.stage = new stageEvents.SchedulerCanceledEvent(ctx, event)
		this.dev = new devEvents.SchedulerCanceledEvent(ctx, event)
	}

	get isV1(): productionEvents.SchedulerCanceledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SchedulerCanceledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SchedulerCanceledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SchedulerCanceledEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.SchedulerCanceledEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SchedulerCanceledEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SchedulerCanceledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SchedulerCanceledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.SchedulerCanceledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SchedulerCanceledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerDispatchedEvent {
	private readonly production: productionEvents.SchedulerDispatchedEvent
	private readonly stage: stageEvents.SchedulerDispatchedEvent
	private readonly dev: devEvents.SchedulerDispatchedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerDispatchedEvent(ctx, event)
		this.stage = new stageEvents.SchedulerDispatchedEvent(ctx, event)
		this.dev = new devEvents.SchedulerDispatchedEvent(ctx, event)
	}

	get isV1(): productionEvents.SchedulerDispatchedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SchedulerDispatchedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SchedulerDispatchedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SchedulerDispatchedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.SchedulerDispatchedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SchedulerDispatchedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.SchedulerDispatchedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SchedulerDispatchedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SchedulerDispatchedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SchedulerDispatchedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.SchedulerDispatchedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SchedulerDispatchedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SchedulerDispatchedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SchedulerDispatchedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerPeriodicFailedEvent {
	private readonly production: productionEvents.SchedulerPeriodicFailedEvent
	private readonly stage: stageEvents.SchedulerPeriodicFailedEvent
	private readonly dev: devEvents.SchedulerPeriodicFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerPeriodicFailedEvent(ctx, event)
		this.stage = new stageEvents.SchedulerPeriodicFailedEvent(ctx, event)
		this.dev = new devEvents.SchedulerPeriodicFailedEvent(ctx, event)
	}

	get isV53(): productionEvents.SchedulerPeriodicFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SchedulerPeriodicFailedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.SchedulerPeriodicFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SchedulerPeriodicFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SchedulerPeriodicFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SchedulerPeriodicFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerPermanentlyOverweightEvent {
	private readonly production: productionEvents.SchedulerPermanentlyOverweightEvent
	private readonly stage: stageEvents.SchedulerPermanentlyOverweightEvent
	private readonly dev: devEvents.SchedulerPermanentlyOverweightEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerPermanentlyOverweightEvent(ctx, event)
		this.stage = new stageEvents.SchedulerPermanentlyOverweightEvent(ctx, event)
		this.dev = new devEvents.SchedulerPermanentlyOverweightEvent(ctx, event)
	}

	get isV53(): productionEvents.SchedulerPermanentlyOverweightEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SchedulerPermanentlyOverweightEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.SchedulerPermanentlyOverweightEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SchedulerPermanentlyOverweightEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SchedulerPermanentlyOverweightEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SchedulerPermanentlyOverweightEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerScheduledEvent {
	private readonly production: productionEvents.SchedulerScheduledEvent
	private readonly stage: stageEvents.SchedulerScheduledEvent
	private readonly dev: devEvents.SchedulerScheduledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SchedulerScheduledEvent(ctx, event)
		this.stage = new stageEvents.SchedulerScheduledEvent(ctx, event)
		this.dev = new devEvents.SchedulerScheduledEvent(ctx, event)
	}

	get isV1(): productionEvents.SchedulerScheduledEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SchedulerScheduledEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SchedulerScheduledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SchedulerScheduledEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.SchedulerScheduledEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SchedulerScheduledEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SchedulerScheduledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SchedulerScheduledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.SchedulerScheduledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SchedulerScheduledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SessionNewSessionEvent {
	private readonly production: productionEvents.SessionNewSessionEvent
	private readonly stage: stageEvents.SessionNewSessionEvent
	private readonly dev: devEvents.SessionNewSessionEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SessionNewSessionEvent(ctx, event)
		this.stage = new stageEvents.SessionNewSessionEvent(ctx, event)
		this.dev = new devEvents.SessionNewSessionEvent(ctx, event)
	}

	get isV1(): productionEvents.SessionNewSessionEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SessionNewSessionEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SessionNewSessionEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SessionNewSessionEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.SessionNewSessionEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SessionNewSessionEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SessionNewSessionEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SessionNewSessionEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.SessionNewSessionEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SessionNewSessionEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingBondedEvent {
	private readonly production: productionEvents.StakingBondedEvent
	private readonly stage: stageEvents.StakingBondedEvent
	private readonly dev: devEvents.StakingBondedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingBondedEvent(ctx, event)
		this.stage = new stageEvents.StakingBondedEvent(ctx, event)
		this.dev = new devEvents.StakingBondedEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingBondedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingBondedEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingBondedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingBondedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.StakingBondedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingBondedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageEvents.StakingBondedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingBondedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingBondedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingBondedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingChilledEvent {
	private readonly production: productionEvents.StakingChilledEvent
	private readonly stage: stageEvents.StakingChilledEvent
	private readonly dev: devEvents.StakingChilledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingChilledEvent(ctx, event)
		this.stage = new stageEvents.StakingChilledEvent(ctx, event)
		this.dev = new devEvents.StakingChilledEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingChilledEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingChilledEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingChilledEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingChilledEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.StakingChilledEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.StakingChilledEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.StakingChilledEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingChilledEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingChilledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingChilledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingEraPaidEvent {
	private readonly production: productionEvents.StakingEraPaidEvent
	private readonly stage: stageEvents.StakingEraPaidEvent
	private readonly dev: devEvents.StakingEraPaidEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingEraPaidEvent(ctx, event)
		this.stage = new stageEvents.StakingEraPaidEvent(ctx, event)
		this.dev = new devEvents.StakingEraPaidEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingEraPaidEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingEraPaidEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingEraPaidEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingEraPaidEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.StakingEraPaidEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.StakingEraPaidEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.StakingEraPaidEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingEraPaidEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingEraPaidEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingEraPaidEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingEraPayoutEvent {
	private readonly production: productionEvents.StakingEraPayoutEvent
	private readonly stage: stageEvents.StakingEraPayoutEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingEraPayoutEvent(ctx, event)
		this.stage = new stageEvents.StakingEraPayoutEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingEraPayoutEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingEraPayoutEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.StakingEraPayoutEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingEraPayoutEvent['asV33'] {
		return this.stage.asV33
	}
}

export class StakingForceEraEvent {
	private readonly production: productionEvents.StakingForceEraEvent
	private readonly stage: stageEvents.StakingForceEraEvent
	private readonly dev: devEvents.StakingForceEraEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingForceEraEvent(ctx, event)
		this.stage = new stageEvents.StakingForceEraEvent(ctx, event)
		this.dev = new devEvents.StakingForceEraEvent(ctx, event)
	}

	get isV53(): productionEvents.StakingForceEraEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingForceEraEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.StakingForceEraEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingForceEraEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingForceEraEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingForceEraEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingKickedEvent {
	private readonly production: productionEvents.StakingKickedEvent
	private readonly stage: stageEvents.StakingKickedEvent
	private readonly dev: devEvents.StakingKickedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingKickedEvent(ctx, event)
		this.stage = new stageEvents.StakingKickedEvent(ctx, event)
		this.dev = new devEvents.StakingKickedEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingKickedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingKickedEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingKickedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingKickedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.StakingKickedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingKickedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageEvents.StakingKickedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingKickedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingKickedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingKickedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingOldSlashingReportDiscardedEvent {
	private readonly production: productionEvents.StakingOldSlashingReportDiscardedEvent
	private readonly stage: stageEvents.StakingOldSlashingReportDiscardedEvent
	private readonly dev: devEvents.StakingOldSlashingReportDiscardedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingOldSlashingReportDiscardedEvent(ctx, event)
		this.stage = new stageEvents.StakingOldSlashingReportDiscardedEvent(ctx, event)
		this.dev = new devEvents.StakingOldSlashingReportDiscardedEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingOldSlashingReportDiscardedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingOldSlashingReportDiscardedEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingOldSlashingReportDiscardedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingOldSlashingReportDiscardedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.StakingOldSlashingReportDiscardedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingOldSlashingReportDiscardedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageEvents.StakingOldSlashingReportDiscardedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingOldSlashingReportDiscardedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingOldSlashingReportDiscardedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingOldSlashingReportDiscardedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingPayoutStartedEvent {
	private readonly production: productionEvents.StakingPayoutStartedEvent
	private readonly stage: stageEvents.StakingPayoutStartedEvent
	private readonly dev: devEvents.StakingPayoutStartedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingPayoutStartedEvent(ctx, event)
		this.stage = new stageEvents.StakingPayoutStartedEvent(ctx, event)
		this.dev = new devEvents.StakingPayoutStartedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingPayoutStartedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingPayoutStartedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingPayoutStartedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingPayoutStartedEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.StakingPayoutStartedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.StakingPayoutStartedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.StakingPayoutStartedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingPayoutStartedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingPayoutStartedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingPayoutStartedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingRewardEvent {
	private readonly production: productionEvents.StakingRewardEvent
	private readonly stage: stageEvents.StakingRewardEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingRewardEvent(ctx, event)
		this.stage = new stageEvents.StakingRewardEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingRewardEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingRewardEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.StakingRewardEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingRewardEvent['asV33'] {
		return this.stage.asV33
	}
}

export class StakingRewardedEvent {
	private readonly production: productionEvents.StakingRewardedEvent
	private readonly stage: stageEvents.StakingRewardedEvent
	private readonly dev: devEvents.StakingRewardedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingRewardedEvent(ctx, event)
		this.stage = new stageEvents.StakingRewardedEvent(ctx, event)
		this.dev = new devEvents.StakingRewardedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingRewardedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingRewardedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingRewardedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingRewardedEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.StakingRewardedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.StakingRewardedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.StakingRewardedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingRewardedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingRewardedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingRewardedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSlashEvent {
	private readonly production: productionEvents.StakingSlashEvent
	private readonly stage: stageEvents.StakingSlashEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingSlashEvent(ctx, event)
		this.stage = new stageEvents.StakingSlashEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingSlashEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingSlashEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.StakingSlashEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingSlashEvent['asV33'] {
		return this.stage.asV33
	}
}

export class StakingSlashReportedEvent {
	private readonly production: productionEvents.StakingSlashReportedEvent
	private readonly stage: stageEvents.StakingSlashReportedEvent
	private readonly dev: devEvents.StakingSlashReportedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingSlashReportedEvent(ctx, event)
		this.stage = new stageEvents.StakingSlashReportedEvent(ctx, event)
		this.dev = new devEvents.StakingSlashReportedEvent(ctx, event)
	}

	get isV53(): productionEvents.StakingSlashReportedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingSlashReportedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.StakingSlashReportedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingSlashReportedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingSlashReportedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingSlashReportedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSlashedEvent {
	private readonly production: productionEvents.StakingSlashedEvent
	private readonly stage: stageEvents.StakingSlashedEvent
	private readonly dev: devEvents.StakingSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingSlashedEvent(ctx, event)
		this.stage = new stageEvents.StakingSlashedEvent(ctx, event)
		this.dev = new devEvents.StakingSlashedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingSlashedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingSlashedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingSlashedEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.StakingSlashedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.StakingSlashedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.StakingSlashedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingSlashedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingSlashedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingSlashedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSolutionStoredEvent {
	private readonly production: productionEvents.StakingSolutionStoredEvent
	private readonly stage: stageEvents.StakingSolutionStoredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingSolutionStoredEvent(ctx, event)
		this.stage = new stageEvents.StakingSolutionStoredEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingSolutionStoredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingSolutionStoredEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.StakingSolutionStoredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingSolutionStoredEvent['asV33'] {
		return this.stage.asV33
	}
}

export class StakingStakersElectedEvent {
	private readonly production: productionEvents.StakingStakersElectedEvent
	private readonly stage: stageEvents.StakingStakersElectedEvent
	private readonly dev: devEvents.StakingStakersElectedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingStakersElectedEvent(ctx, event)
		this.stage = new stageEvents.StakingStakersElectedEvent(ctx, event)
		this.dev = new devEvents.StakingStakersElectedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingStakersElectedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingStakersElectedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.StakingStakersElectedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.StakingStakersElectedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.StakingStakersElectedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingStakersElectedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingStakingElectionEvent {
	private readonly production: productionEvents.StakingStakingElectionEvent
	private readonly stage: stageEvents.StakingStakingElectionEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingStakingElectionEvent(ctx, event)
		this.stage = new stageEvents.StakingStakingElectionEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingStakingElectionEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingStakingElectionEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.StakingStakingElectionEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingStakingElectionEvent['asV33'] {
		return this.stage.asV33
	}
}

export class StakingStakingElectionFailedEvent {
	private readonly production: productionEvents.StakingStakingElectionFailedEvent
	private readonly stage: stageEvents.StakingStakingElectionFailedEvent
	private readonly dev: devEvents.StakingStakingElectionFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingStakingElectionFailedEvent(ctx, event)
		this.stage = new stageEvents.StakingStakingElectionFailedEvent(ctx, event)
		this.dev = new devEvents.StakingStakingElectionFailedEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingStakingElectionFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingStakingElectionFailedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.StakingStakingElectionFailedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.StakingStakingElectionFailedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.StakingStakingElectionFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingStakingElectionFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingUnbondedEvent {
	private readonly production: productionEvents.StakingUnbondedEvent
	private readonly stage: stageEvents.StakingUnbondedEvent
	private readonly dev: devEvents.StakingUnbondedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingUnbondedEvent(ctx, event)
		this.stage = new stageEvents.StakingUnbondedEvent(ctx, event)
		this.dev = new devEvents.StakingUnbondedEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingUnbondedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingUnbondedEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingUnbondedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingUnbondedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.StakingUnbondedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingUnbondedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageEvents.StakingUnbondedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingUnbondedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingUnbondedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingUnbondedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingValidatorPrefsSetEvent {
	private readonly production: productionEvents.StakingValidatorPrefsSetEvent
	private readonly stage: stageEvents.StakingValidatorPrefsSetEvent
	private readonly dev: devEvents.StakingValidatorPrefsSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingValidatorPrefsSetEvent(ctx, event)
		this.stage = new stageEvents.StakingValidatorPrefsSetEvent(ctx, event)
		this.dev = new devEvents.StakingValidatorPrefsSetEvent(ctx, event)
	}

	get isV42(): productionEvents.StakingValidatorPrefsSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.StakingValidatorPrefsSetEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.StakingValidatorPrefsSetEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingValidatorPrefsSetEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.StakingValidatorPrefsSetEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.StakingValidatorPrefsSetEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.StakingValidatorPrefsSetEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingValidatorPrefsSetEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingValidatorPrefsSetEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingValidatorPrefsSetEvent['asV60'] {
		return this.dev.asV60
	}
}

export class StakingWithdrawnEvent {
	private readonly production: productionEvents.StakingWithdrawnEvent
	private readonly stage: stageEvents.StakingWithdrawnEvent
	private readonly dev: devEvents.StakingWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.StakingWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.StakingWithdrawnEvent(ctx, event)
		this.dev = new devEvents.StakingWithdrawnEvent(ctx, event)
	}

	get isV1(): productionEvents.StakingWithdrawnEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.StakingWithdrawnEvent['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionEvents.StakingWithdrawnEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.StakingWithdrawnEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.StakingWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.StakingWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV52Stage(): stageEvents.StakingWithdrawnEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.StakingWithdrawnEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.StakingWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.StakingWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SudoKeyChangedEvent {
	private readonly production: productionEvents.SudoKeyChangedEvent
	private readonly stage: stageEvents.SudoKeyChangedEvent
	private readonly dev: devEvents.SudoKeyChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SudoKeyChangedEvent(ctx, event)
		this.stage = new stageEvents.SudoKeyChangedEvent(ctx, event)
		this.dev = new devEvents.SudoKeyChangedEvent(ctx, event)
	}

	get isV22(): productionEvents.SudoKeyChangedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.SudoKeyChangedEvent['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageEvents.SudoKeyChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SudoKeyChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SudoKeyChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SudoKeyChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.SudoKeyChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SudoKeyChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SudoSudidEvent {
	private readonly production: productionEvents.SudoSudidEvent
	private readonly stage: stageEvents.SudoSudidEvent
	private readonly dev: devEvents.SudoSudidEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SudoSudidEvent(ctx, event)
		this.stage = new stageEvents.SudoSudidEvent(ctx, event)
		this.dev = new devEvents.SudoSudidEvent(ctx, event)
	}

	get isV22(): productionEvents.SudoSudidEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.SudoSudidEvent['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageEvents.SudoSudidEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SudoSudidEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SudoSudidEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SudoSudidEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.SudoSudidEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SudoSudidEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SudoSudidEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SudoSudidEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SudoSudoAsDoneEvent {
	private readonly production: productionEvents.SudoSudoAsDoneEvent
	private readonly stage: stageEvents.SudoSudoAsDoneEvent
	private readonly dev: devEvents.SudoSudoAsDoneEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SudoSudoAsDoneEvent(ctx, event)
		this.stage = new stageEvents.SudoSudoAsDoneEvent(ctx, event)
		this.dev = new devEvents.SudoSudoAsDoneEvent(ctx, event)
	}

	get isV22(): productionEvents.SudoSudoAsDoneEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.SudoSudoAsDoneEvent['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageEvents.SudoSudoAsDoneEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SudoSudoAsDoneEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SudoSudoAsDoneEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SudoSudoAsDoneEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.SudoSudoAsDoneEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SudoSudoAsDoneEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SudoSudoAsDoneEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SudoSudoAsDoneEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SystemCodeUpdatedEvent {
	private readonly production: productionEvents.SystemCodeUpdatedEvent
	private readonly stage: stageEvents.SystemCodeUpdatedEvent
	private readonly dev: devEvents.SystemCodeUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemCodeUpdatedEvent(ctx, event)
		this.stage = new stageEvents.SystemCodeUpdatedEvent(ctx, event)
		this.dev = new devEvents.SystemCodeUpdatedEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemCodeUpdatedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemCodeUpdatedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.SystemCodeUpdatedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SystemCodeUpdatedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.SystemCodeUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SystemCodeUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SystemExtrinsicFailedEvent {
	private readonly production: productionEvents.SystemExtrinsicFailedEvent
	private readonly stage: stageEvents.SystemExtrinsicFailedEvent
	private readonly dev: devEvents.SystemExtrinsicFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemExtrinsicFailedEvent(ctx, event)
		this.stage = new stageEvents.SystemExtrinsicFailedEvent(ctx, event)
		this.dev = new devEvents.SystemExtrinsicFailedEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemExtrinsicFailedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemExtrinsicFailedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SystemExtrinsicFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemExtrinsicFailedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.SystemExtrinsicFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SystemExtrinsicFailedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.SystemExtrinsicFailedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SystemExtrinsicFailedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SystemExtrinsicFailedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SystemExtrinsicFailedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.SystemExtrinsicFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SystemExtrinsicFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SystemExtrinsicFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SystemExtrinsicFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SystemExtrinsicSuccessEvent {
	private readonly production: productionEvents.SystemExtrinsicSuccessEvent
	private readonly stage: stageEvents.SystemExtrinsicSuccessEvent
	private readonly dev: devEvents.SystemExtrinsicSuccessEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemExtrinsicSuccessEvent(ctx, event)
		this.stage = new stageEvents.SystemExtrinsicSuccessEvent(ctx, event)
		this.dev = new devEvents.SystemExtrinsicSuccessEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemExtrinsicSuccessEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemExtrinsicSuccessEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SystemExtrinsicSuccessEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemExtrinsicSuccessEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.SystemExtrinsicSuccessEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.SystemExtrinsicSuccessEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.SystemExtrinsicSuccessEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SystemExtrinsicSuccessEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SystemExtrinsicSuccessEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SystemExtrinsicSuccessEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.SystemExtrinsicSuccessEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SystemExtrinsicSuccessEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SystemExtrinsicSuccessEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SystemExtrinsicSuccessEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SystemKilledAccountEvent {
	private readonly production: productionEvents.SystemKilledAccountEvent
	private readonly stage: stageEvents.SystemKilledAccountEvent
	private readonly dev: devEvents.SystemKilledAccountEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemKilledAccountEvent(ctx, event)
		this.stage = new stageEvents.SystemKilledAccountEvent(ctx, event)
		this.dev = new devEvents.SystemKilledAccountEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemKilledAccountEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemKilledAccountEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SystemKilledAccountEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemKilledAccountEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.SystemKilledAccountEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SystemKilledAccountEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SystemKilledAccountEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SystemKilledAccountEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.SystemKilledAccountEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SystemKilledAccountEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SystemNewAccountEvent {
	private readonly production: productionEvents.SystemNewAccountEvent
	private readonly stage: stageEvents.SystemNewAccountEvent
	private readonly dev: devEvents.SystemNewAccountEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemNewAccountEvent(ctx, event)
		this.stage = new stageEvents.SystemNewAccountEvent(ctx, event)
		this.dev = new devEvents.SystemNewAccountEvent(ctx, event)
	}

	get isV1(): productionEvents.SystemNewAccountEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.SystemNewAccountEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.SystemNewAccountEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemNewAccountEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.SystemNewAccountEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.SystemNewAccountEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.SystemNewAccountEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SystemNewAccountEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.SystemNewAccountEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SystemNewAccountEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SystemRemarkedEvent {
	private readonly production: productionEvents.SystemRemarkedEvent
	private readonly stage: stageEvents.SystemRemarkedEvent
	private readonly dev: devEvents.SystemRemarkedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.SystemRemarkedEvent(ctx, event)
		this.stage = new stageEvents.SystemRemarkedEvent(ctx, event)
		this.dev = new devEvents.SystemRemarkedEvent(ctx, event)
	}

	get isV42(): productionEvents.SystemRemarkedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.SystemRemarkedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.SystemRemarkedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.SystemRemarkedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.SystemRemarkedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SystemRemarkedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalBurnedEvent {
	private readonly production: productionEvents.TechnicalBurnedEvent
	private readonly stage: stageEvents.TechnicalBurnedEvent
	private readonly dev: devEvents.TechnicalBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalBurnedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalBurnedEvent(ctx, event)
		this.dev = new devEvents.TechnicalBurnedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalBurnedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalBurnedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionEvents.TechnicalBurnedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.TechnicalBurnedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.TechnicalBurnedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalBurnedEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.TechnicalBurnedEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.TechnicalBurnedEvent['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionEvents.TechnicalBurnedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.TechnicalBurnedEvent['asV57'] {
		return this.production.asV57
	}
	get isV33Stage(): stageEvents.TechnicalBurnedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalBurnedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalBurnedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalBurnedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV46Stage(): stageEvents.TechnicalBurnedEvent['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageEvents.TechnicalBurnedEvent['asV46'] {
		return this.stage.asV46
	}
	get isV54Stage(): stageEvents.TechnicalBurnedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.TechnicalBurnedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.TechnicalBurnedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalBurnedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalInputTransferredEvent {
	private readonly production: productionEvents.TechnicalInputTransferredEvent
	private readonly stage: stageEvents.TechnicalInputTransferredEvent
	private readonly dev: devEvents.TechnicalInputTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalInputTransferredEvent(ctx, event)
		this.stage = new stageEvents.TechnicalInputTransferredEvent(ctx, event)
		this.dev = new devEvents.TechnicalInputTransferredEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalInputTransferredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalInputTransferredEvent['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionEvents.TechnicalInputTransferredEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.TechnicalInputTransferredEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.TechnicalInputTransferredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalInputTransferredEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.TechnicalInputTransferredEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.TechnicalInputTransferredEvent['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionEvents.TechnicalInputTransferredEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.TechnicalInputTransferredEvent['asV57'] {
		return this.production.asV57
	}
	get isV33Stage(): stageEvents.TechnicalInputTransferredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalInputTransferredEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalInputTransferredEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalInputTransferredEvent['asV42'] {
		return this.stage.asV42
	}
	get isV46Stage(): stageEvents.TechnicalInputTransferredEvent['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageEvents.TechnicalInputTransferredEvent['asV46'] {
		return this.stage.asV46
	}
	get isV54Stage(): stageEvents.TechnicalInputTransferredEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.TechnicalInputTransferredEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.TechnicalInputTransferredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalInputTransferredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMintedEvent {
	private readonly production: productionEvents.TechnicalMintedEvent
	private readonly stage: stageEvents.TechnicalMintedEvent
	private readonly dev: devEvents.TechnicalMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMintedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMintedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMintedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMintedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMintedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionEvents.TechnicalMintedEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.TechnicalMintedEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.TechnicalMintedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalMintedEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.TechnicalMintedEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.TechnicalMintedEvent['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionEvents.TechnicalMintedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.TechnicalMintedEvent['asV57'] {
		return this.production.asV57
	}
	get isV33Stage(): stageEvents.TechnicalMintedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalMintedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalMintedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalMintedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV46Stage(): stageEvents.TechnicalMintedEvent['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageEvents.TechnicalMintedEvent['asV46'] {
		return this.stage.asV46
	}
	get isV54Stage(): stageEvents.TechnicalMintedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.TechnicalMintedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.TechnicalMintedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalMintedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalOutputTransferredEvent {
	private readonly production: productionEvents.TechnicalOutputTransferredEvent
	private readonly stage: stageEvents.TechnicalOutputTransferredEvent
	private readonly dev: devEvents.TechnicalOutputTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalOutputTransferredEvent(ctx, event)
		this.stage = new stageEvents.TechnicalOutputTransferredEvent(ctx, event)
		this.dev = new devEvents.TechnicalOutputTransferredEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalOutputTransferredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalOutputTransferredEvent['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionEvents.TechnicalOutputTransferredEvent['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionEvents.TechnicalOutputTransferredEvent['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionEvents.TechnicalOutputTransferredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalOutputTransferredEvent['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionEvents.TechnicalOutputTransferredEvent['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionEvents.TechnicalOutputTransferredEvent['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionEvents.TechnicalOutputTransferredEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.TechnicalOutputTransferredEvent['asV57'] {
		return this.production.asV57
	}
	get isV33Stage(): stageEvents.TechnicalOutputTransferredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalOutputTransferredEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalOutputTransferredEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalOutputTransferredEvent['asV42'] {
		return this.stage.asV42
	}
	get isV46Stage(): stageEvents.TechnicalOutputTransferredEvent['isV46'] {
		return this.stage.isV46
	}
	get asV46Stage(): stageEvents.TechnicalOutputTransferredEvent['asV46'] {
		return this.stage.asV46
	}
	get isV54Stage(): stageEvents.TechnicalOutputTransferredEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.TechnicalOutputTransferredEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.TechnicalOutputTransferredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalOutputTransferredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalSwapSuccessEvent {
	private readonly production: productionEvents.TechnicalSwapSuccessEvent
	private readonly stage: stageEvents.TechnicalSwapSuccessEvent
	private readonly dev: devEvents.TechnicalSwapSuccessEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalSwapSuccessEvent(ctx, event)
		this.stage = new stageEvents.TechnicalSwapSuccessEvent(ctx, event)
		this.dev = new devEvents.TechnicalSwapSuccessEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalSwapSuccessEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalSwapSuccessEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.TechnicalSwapSuccessEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalSwapSuccessEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.TechnicalSwapSuccessEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalSwapSuccessEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeApprovedEvent {
	private readonly production: productionEvents.TechnicalCommitteeApprovedEvent
	private readonly stage: stageEvents.TechnicalCommitteeApprovedEvent
	private readonly dev: devEvents.TechnicalCommitteeApprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeApprovedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeApprovedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeApprovedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeApprovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeApprovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeApprovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeApprovedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.TechnicalCommitteeApprovedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalCommitteeApprovedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalCommitteeApprovedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalCommitteeApprovedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TechnicalCommitteeApprovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalCommitteeApprovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeClosedEvent {
	private readonly production: productionEvents.TechnicalCommitteeClosedEvent
	private readonly stage: stageEvents.TechnicalCommitteeClosedEvent
	private readonly dev: devEvents.TechnicalCommitteeClosedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeClosedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeClosedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeClosedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeClosedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeClosedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeClosedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeClosedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.TechnicalCommitteeClosedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalCommitteeClosedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalCommitteeClosedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalCommitteeClosedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TechnicalCommitteeClosedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalCommitteeClosedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeDisapprovedEvent {
	private readonly production: productionEvents.TechnicalCommitteeDisapprovedEvent
	private readonly stage: stageEvents.TechnicalCommitteeDisapprovedEvent
	private readonly dev: devEvents.TechnicalCommitteeDisapprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeDisapprovedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeDisapprovedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeDisapprovedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeDisapprovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeDisapprovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeDisapprovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeDisapprovedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.TechnicalCommitteeDisapprovedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalCommitteeDisapprovedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalCommitteeDisapprovedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalCommitteeDisapprovedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TechnicalCommitteeDisapprovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalCommitteeDisapprovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeExecutedEvent {
	private readonly production: productionEvents.TechnicalCommitteeExecutedEvent
	private readonly stage: stageEvents.TechnicalCommitteeExecutedEvent
	private readonly dev: devEvents.TechnicalCommitteeExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeExecutedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeExecutedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.TechnicalCommitteeExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TechnicalCommitteeExecutedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.TechnicalCommitteeExecutedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalCommitteeExecutedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalCommitteeExecutedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalCommitteeExecutedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.TechnicalCommitteeExecutedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.TechnicalCommitteeExecutedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.TechnicalCommitteeExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalCommitteeExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeMemberExecutedEvent {
	private readonly production: productionEvents.TechnicalCommitteeMemberExecutedEvent
	private readonly stage: stageEvents.TechnicalCommitteeMemberExecutedEvent
	private readonly dev: devEvents.TechnicalCommitteeMemberExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeMemberExecutedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeMemberExecutedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeMemberExecutedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeMemberExecutedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeMemberExecutedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeMemberExecutedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeMemberExecutedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.TechnicalCommitteeMemberExecutedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TechnicalCommitteeMemberExecutedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.TechnicalCommitteeMemberExecutedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalCommitteeMemberExecutedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalCommitteeMemberExecutedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalCommitteeMemberExecutedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.TechnicalCommitteeMemberExecutedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.TechnicalCommitteeMemberExecutedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.TechnicalCommitteeMemberExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalCommitteeMemberExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeProposedEvent {
	private readonly production: productionEvents.TechnicalCommitteeProposedEvent
	private readonly stage: stageEvents.TechnicalCommitteeProposedEvent
	private readonly dev: devEvents.TechnicalCommitteeProposedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeProposedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeProposedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeProposedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeProposedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeProposedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeProposedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeProposedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.TechnicalCommitteeProposedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalCommitteeProposedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalCommitteeProposedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalCommitteeProposedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TechnicalCommitteeProposedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalCommitteeProposedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeVotedEvent {
	private readonly production: productionEvents.TechnicalCommitteeVotedEvent
	private readonly stage: stageEvents.TechnicalCommitteeVotedEvent
	private readonly dev: devEvents.TechnicalCommitteeVotedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalCommitteeVotedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalCommitteeVotedEvent(ctx, event)
		this.dev = new devEvents.TechnicalCommitteeVotedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalCommitteeVotedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalCommitteeVotedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TechnicalCommitteeVotedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TechnicalCommitteeVotedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.TechnicalCommitteeVotedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalCommitteeVotedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TechnicalCommitteeVotedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TechnicalCommitteeVotedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TechnicalCommitteeVotedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalCommitteeVotedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipDummyEvent {
	private readonly production: productionEvents.TechnicalMembershipDummyEvent
	private readonly stage: stageEvents.TechnicalMembershipDummyEvent
	private readonly dev: devEvents.TechnicalMembershipDummyEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipDummyEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipDummyEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipDummyEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipDummyEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipDummyEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.TechnicalMembershipDummyEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalMembershipDummyEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.TechnicalMembershipDummyEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalMembershipDummyEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipKeyChangedEvent {
	private readonly production: productionEvents.TechnicalMembershipKeyChangedEvent
	private readonly stage: stageEvents.TechnicalMembershipKeyChangedEvent
	private readonly dev: devEvents.TechnicalMembershipKeyChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipKeyChangedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipKeyChangedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipKeyChangedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipKeyChangedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipKeyChangedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.TechnicalMembershipKeyChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalMembershipKeyChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.TechnicalMembershipKeyChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalMembershipKeyChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipMemberAddedEvent {
	private readonly production: productionEvents.TechnicalMembershipMemberAddedEvent
	private readonly stage: stageEvents.TechnicalMembershipMemberAddedEvent
	private readonly dev: devEvents.TechnicalMembershipMemberAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipMemberAddedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipMemberAddedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipMemberAddedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipMemberAddedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipMemberAddedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.TechnicalMembershipMemberAddedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalMembershipMemberAddedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.TechnicalMembershipMemberAddedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalMembershipMemberAddedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipMemberRemovedEvent {
	private readonly production: productionEvents.TechnicalMembershipMemberRemovedEvent
	private readonly stage: stageEvents.TechnicalMembershipMemberRemovedEvent
	private readonly dev: devEvents.TechnicalMembershipMemberRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipMemberRemovedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipMemberRemovedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipMemberRemovedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipMemberRemovedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipMemberRemovedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.TechnicalMembershipMemberRemovedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalMembershipMemberRemovedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.TechnicalMembershipMemberRemovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalMembershipMemberRemovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipMembersResetEvent {
	private readonly production: productionEvents.TechnicalMembershipMembersResetEvent
	private readonly stage: stageEvents.TechnicalMembershipMembersResetEvent
	private readonly dev: devEvents.TechnicalMembershipMembersResetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipMembersResetEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipMembersResetEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipMembersResetEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipMembersResetEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipMembersResetEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.TechnicalMembershipMembersResetEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalMembershipMembersResetEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.TechnicalMembershipMembersResetEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalMembershipMembersResetEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipMembersSwappedEvent {
	private readonly production: productionEvents.TechnicalMembershipMembersSwappedEvent
	private readonly stage: stageEvents.TechnicalMembershipMembersSwappedEvent
	private readonly dev: devEvents.TechnicalMembershipMembersSwappedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TechnicalMembershipMembersSwappedEvent(ctx, event)
		this.stage = new stageEvents.TechnicalMembershipMembersSwappedEvent(ctx, event)
		this.dev = new devEvents.TechnicalMembershipMembersSwappedEvent(ctx, event)
	}

	get isV1(): productionEvents.TechnicalMembershipMembersSwappedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TechnicalMembershipMembersSwappedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.TechnicalMembershipMembersSwappedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TechnicalMembershipMembersSwappedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.TechnicalMembershipMembersSwappedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TechnicalMembershipMembersSwappedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensBalanceSetEvent {
	private readonly production: productionEvents.TokensBalanceSetEvent
	private readonly stage: stageEvents.TokensBalanceSetEvent
	private readonly dev: devEvents.TokensBalanceSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensBalanceSetEvent(ctx, event)
		this.stage = new stageEvents.TokensBalanceSetEvent(ctx, event)
		this.dev = new devEvents.TokensBalanceSetEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensBalanceSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensBalanceSetEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensBalanceSetEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensBalanceSetEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensBalanceSetEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensBalanceSetEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensDepositedEvent {
	private readonly production: productionEvents.TokensDepositedEvent
	private readonly stage: stageEvents.TokensDepositedEvent
	private readonly dev: devEvents.TokensDepositedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensDepositedEvent(ctx, event)
		this.stage = new stageEvents.TokensDepositedEvent(ctx, event)
		this.dev = new devEvents.TokensDepositedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensDepositedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensDepositedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensDepositedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensDepositedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensDepositedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensDepositedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensDustLostEvent {
	private readonly production: productionEvents.TokensDustLostEvent
	private readonly stage: stageEvents.TokensDustLostEvent
	private readonly dev: devEvents.TokensDustLostEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensDustLostEvent(ctx, event)
		this.stage = new stageEvents.TokensDustLostEvent(ctx, event)
		this.dev = new devEvents.TokensDustLostEvent(ctx, event)
	}

	get isV1(): productionEvents.TokensDustLostEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TokensDustLostEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TokensDustLostEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensDustLostEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.TokensDustLostEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TokensDustLostEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TokensDustLostEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensDustLostEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensDustLostEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensDustLostEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensEndowedEvent {
	private readonly production: productionEvents.TokensEndowedEvent
	private readonly stage: stageEvents.TokensEndowedEvent
	private readonly dev: devEvents.TokensEndowedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensEndowedEvent(ctx, event)
		this.stage = new stageEvents.TokensEndowedEvent(ctx, event)
		this.dev = new devEvents.TokensEndowedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensEndowedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensEndowedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensEndowedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensEndowedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensEndowedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensEndowedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensLockRemovedEvent {
	private readonly production: productionEvents.TokensLockRemovedEvent
	private readonly stage: stageEvents.TokensLockRemovedEvent
	private readonly dev: devEvents.TokensLockRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensLockRemovedEvent(ctx, event)
		this.stage = new stageEvents.TokensLockRemovedEvent(ctx, event)
		this.dev = new devEvents.TokensLockRemovedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensLockRemovedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensLockRemovedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensLockRemovedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensLockRemovedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensLockRemovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensLockRemovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensLockSetEvent {
	private readonly production: productionEvents.TokensLockSetEvent
	private readonly stage: stageEvents.TokensLockSetEvent
	private readonly dev: devEvents.TokensLockSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensLockSetEvent(ctx, event)
		this.stage = new stageEvents.TokensLockSetEvent(ctx, event)
		this.dev = new devEvents.TokensLockSetEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensLockSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensLockSetEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensLockSetEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensLockSetEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensLockSetEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensLockSetEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensLockedEvent {
	private readonly production: productionEvents.TokensLockedEvent
	private readonly stage: stageEvents.TokensLockedEvent
	private readonly dev: devEvents.TokensLockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensLockedEvent(ctx, event)
		this.stage = new stageEvents.TokensLockedEvent(ctx, event)
		this.dev = new devEvents.TokensLockedEvent(ctx, event)
	}

	get isV53(): productionEvents.TokensLockedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TokensLockedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.TokensLockedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.TokensLockedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.TokensLockedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensLockedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensReserveRepatriatedEvent {
	private readonly production: productionEvents.TokensReserveRepatriatedEvent
	private readonly stage: stageEvents.TokensReserveRepatriatedEvent
	private readonly dev: devEvents.TokensReserveRepatriatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensReserveRepatriatedEvent(ctx, event)
		this.stage = new stageEvents.TokensReserveRepatriatedEvent(ctx, event)
		this.dev = new devEvents.TokensReserveRepatriatedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensReserveRepatriatedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensReserveRepatriatedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensReserveRepatriatedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensReserveRepatriatedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensReserveRepatriatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensReserveRepatriatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensReservedEvent {
	private readonly production: productionEvents.TokensReservedEvent
	private readonly stage: stageEvents.TokensReservedEvent
	private readonly dev: devEvents.TokensReservedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensReservedEvent(ctx, event)
		this.stage = new stageEvents.TokensReservedEvent(ctx, event)
		this.dev = new devEvents.TokensReservedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensReservedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensReservedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensReservedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensReservedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensReservedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensReservedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensSlashedEvent {
	private readonly production: productionEvents.TokensSlashedEvent
	private readonly stage: stageEvents.TokensSlashedEvent
	private readonly dev: devEvents.TokensSlashedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensSlashedEvent(ctx, event)
		this.stage = new stageEvents.TokensSlashedEvent(ctx, event)
		this.dev = new devEvents.TokensSlashedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensSlashedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensSlashedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensSlashedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensSlashedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensSlashedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensSlashedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensTotalIssuanceSetEvent {
	private readonly production: productionEvents.TokensTotalIssuanceSetEvent
	private readonly stage: stageEvents.TokensTotalIssuanceSetEvent
	private readonly dev: devEvents.TokensTotalIssuanceSetEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensTotalIssuanceSetEvent(ctx, event)
		this.stage = new stageEvents.TokensTotalIssuanceSetEvent(ctx, event)
		this.dev = new devEvents.TokensTotalIssuanceSetEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensTotalIssuanceSetEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensTotalIssuanceSetEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensTotalIssuanceSetEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensTotalIssuanceSetEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensTotalIssuanceSetEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensTotalIssuanceSetEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensTransferEvent {
	private readonly production: productionEvents.TokensTransferEvent
	private readonly stage: stageEvents.TokensTransferEvent
	private readonly dev: devEvents.TokensTransferEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensTransferEvent(ctx, event)
		this.stage = new stageEvents.TokensTransferEvent(ctx, event)
		this.dev = new devEvents.TokensTransferEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensTransferEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensTransferEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensTransferEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensTransferEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensTransferEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensTransferEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensTransferredEvent {
	private readonly production: productionEvents.TokensTransferredEvent
	private readonly stage: stageEvents.TokensTransferredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensTransferredEvent(ctx, event)
		this.stage = new stageEvents.TokensTransferredEvent(ctx, event)
	}

	get isV1(): productionEvents.TokensTransferredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TokensTransferredEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.TokensTransferredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TokensTransferredEvent['asV33'] {
		return this.stage.asV33
	}
}

export class TokensUnlockedEvent {
	private readonly production: productionEvents.TokensUnlockedEvent
	private readonly stage: stageEvents.TokensUnlockedEvent
	private readonly dev: devEvents.TokensUnlockedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensUnlockedEvent(ctx, event)
		this.stage = new stageEvents.TokensUnlockedEvent(ctx, event)
		this.dev = new devEvents.TokensUnlockedEvent(ctx, event)
	}

	get isV53(): productionEvents.TokensUnlockedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TokensUnlockedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.TokensUnlockedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.TokensUnlockedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.TokensUnlockedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensUnlockedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensUnreservedEvent {
	private readonly production: productionEvents.TokensUnreservedEvent
	private readonly stage: stageEvents.TokensUnreservedEvent
	private readonly dev: devEvents.TokensUnreservedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensUnreservedEvent(ctx, event)
		this.stage = new stageEvents.TokensUnreservedEvent(ctx, event)
		this.dev = new devEvents.TokensUnreservedEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensUnreservedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensUnreservedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensUnreservedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensUnreservedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensUnreservedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensUnreservedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TokensWithdrawnEvent {
	private readonly production: productionEvents.TokensWithdrawnEvent
	private readonly stage: stageEvents.TokensWithdrawnEvent
	private readonly dev: devEvents.TokensWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TokensWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.TokensWithdrawnEvent(ctx, event)
		this.dev = new devEvents.TokensWithdrawnEvent(ctx, event)
	}

	get isV42(): productionEvents.TokensWithdrawnEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TokensWithdrawnEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.TokensWithdrawnEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TokensWithdrawnEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TokensWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TokensWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TradingPairTradingPairStoredEvent {
	private readonly production: productionEvents.TradingPairTradingPairStoredEvent
	private readonly stage: stageEvents.TradingPairTradingPairStoredEvent
	private readonly dev: devEvents.TradingPairTradingPairStoredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TradingPairTradingPairStoredEvent(ctx, event)
		this.stage = new stageEvents.TradingPairTradingPairStoredEvent(ctx, event)
		this.dev = new devEvents.TradingPairTradingPairStoredEvent(ctx, event)
	}

	get isV1(): productionEvents.TradingPairTradingPairStoredEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.TradingPairTradingPairStoredEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.TradingPairTradingPairStoredEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.TradingPairTradingPairStoredEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.TradingPairTradingPairStoredEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.TradingPairTradingPairStoredEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.TradingPairTradingPairStoredEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.TradingPairTradingPairStoredEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.TradingPairTradingPairStoredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TradingPairTradingPairStoredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class TransactionPaymentTransactionFeePaidEvent {
	private readonly production: productionEvents.TransactionPaymentTransactionFeePaidEvent
	private readonly stage: stageEvents.TransactionPaymentTransactionFeePaidEvent
	private readonly dev: devEvents.TransactionPaymentTransactionFeePaidEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.TransactionPaymentTransactionFeePaidEvent(ctx, event)
		this.stage = new stageEvents.TransactionPaymentTransactionFeePaidEvent(ctx, event)
		this.dev = new devEvents.TransactionPaymentTransactionFeePaidEvent(ctx, event)
	}

	get isV53(): productionEvents.TransactionPaymentTransactionFeePaidEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.TransactionPaymentTransactionFeePaidEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.TransactionPaymentTransactionFeePaidEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.TransactionPaymentTransactionFeePaidEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.TransactionPaymentTransactionFeePaidEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.TransactionPaymentTransactionFeePaidEvent['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityBatchCompletedEvent {
	private readonly production: productionEvents.UtilityBatchCompletedEvent
	private readonly stage: stageEvents.UtilityBatchCompletedEvent
	private readonly dev: devEvents.UtilityBatchCompletedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityBatchCompletedEvent(ctx, event)
		this.stage = new stageEvents.UtilityBatchCompletedEvent(ctx, event)
		this.dev = new devEvents.UtilityBatchCompletedEvent(ctx, event)
	}

	get isV1(): productionEvents.UtilityBatchCompletedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.UtilityBatchCompletedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.UtilityBatchCompletedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.UtilityBatchCompletedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.UtilityBatchCompletedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.UtilityBatchCompletedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityBatchCompletedWithErrorsEvent {
	private readonly production: productionEvents.UtilityBatchCompletedWithErrorsEvent
	private readonly stage: stageEvents.UtilityBatchCompletedWithErrorsEvent
	private readonly dev: devEvents.UtilityBatchCompletedWithErrorsEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityBatchCompletedWithErrorsEvent(ctx, event)
		this.stage = new stageEvents.UtilityBatchCompletedWithErrorsEvent(ctx, event)
		this.dev = new devEvents.UtilityBatchCompletedWithErrorsEvent(ctx, event)
	}

	get isV42(): productionEvents.UtilityBatchCompletedWithErrorsEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityBatchCompletedWithErrorsEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.UtilityBatchCompletedWithErrorsEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.UtilityBatchCompletedWithErrorsEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.UtilityBatchCompletedWithErrorsEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.UtilityBatchCompletedWithErrorsEvent['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityBatchInterruptedEvent {
	private readonly production: productionEvents.UtilityBatchInterruptedEvent
	private readonly stage: stageEvents.UtilityBatchInterruptedEvent
	private readonly dev: devEvents.UtilityBatchInterruptedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityBatchInterruptedEvent(ctx, event)
		this.stage = new stageEvents.UtilityBatchInterruptedEvent(ctx, event)
		this.dev = new devEvents.UtilityBatchInterruptedEvent(ctx, event)
	}

	get isV1(): productionEvents.UtilityBatchInterruptedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.UtilityBatchInterruptedEvent['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionEvents.UtilityBatchInterruptedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityBatchInterruptedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.UtilityBatchInterruptedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.UtilityBatchInterruptedEvent['asV53'] {
		return this.production.asV53
	}
	get isV33Stage(): stageEvents.UtilityBatchInterruptedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.UtilityBatchInterruptedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.UtilityBatchInterruptedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.UtilityBatchInterruptedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.UtilityBatchInterruptedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.UtilityBatchInterruptedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.UtilityBatchInterruptedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.UtilityBatchInterruptedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityDispatchedAsEvent {
	private readonly production: productionEvents.UtilityDispatchedAsEvent
	private readonly stage: stageEvents.UtilityDispatchedAsEvent
	private readonly dev: devEvents.UtilityDispatchedAsEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityDispatchedAsEvent(ctx, event)
		this.stage = new stageEvents.UtilityDispatchedAsEvent(ctx, event)
		this.dev = new devEvents.UtilityDispatchedAsEvent(ctx, event)
	}

	get isV42(): productionEvents.UtilityDispatchedAsEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityDispatchedAsEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.UtilityDispatchedAsEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.UtilityDispatchedAsEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.UtilityDispatchedAsEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.UtilityDispatchedAsEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.UtilityDispatchedAsEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.UtilityDispatchedAsEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.UtilityDispatchedAsEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.UtilityDispatchedAsEvent['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityItemCompletedEvent {
	private readonly production: productionEvents.UtilityItemCompletedEvent
	private readonly stage: stageEvents.UtilityItemCompletedEvent
	private readonly dev: devEvents.UtilityItemCompletedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityItemCompletedEvent(ctx, event)
		this.stage = new stageEvents.UtilityItemCompletedEvent(ctx, event)
		this.dev = new devEvents.UtilityItemCompletedEvent(ctx, event)
	}

	get isV42(): productionEvents.UtilityItemCompletedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityItemCompletedEvent['asV42'] {
		return this.production.asV42
	}
	get isV42Stage(): stageEvents.UtilityItemCompletedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.UtilityItemCompletedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.UtilityItemCompletedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.UtilityItemCompletedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class UtilityItemFailedEvent {
	private readonly production: productionEvents.UtilityItemFailedEvent
	private readonly stage: stageEvents.UtilityItemFailedEvent
	private readonly dev: devEvents.UtilityItemFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.UtilityItemFailedEvent(ctx, event)
		this.stage = new stageEvents.UtilityItemFailedEvent(ctx, event)
		this.dev = new devEvents.UtilityItemFailedEvent(ctx, event)
	}

	get isV42(): productionEvents.UtilityItemFailedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.UtilityItemFailedEvent['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionEvents.UtilityItemFailedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.UtilityItemFailedEvent['asV53'] {
		return this.production.asV53
	}
	get isV42Stage(): stageEvents.UtilityItemFailedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.UtilityItemFailedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV52Stage(): stageEvents.UtilityItemFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.UtilityItemFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.UtilityItemFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.UtilityItemFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsActualDoesntMatchAvailableEvent {
	private readonly production: productionEvents.VestedRewardsActualDoesntMatchAvailableEvent
	private readonly stage: stageEvents.VestedRewardsActualDoesntMatchAvailableEvent
	private readonly dev: devEvents.VestedRewardsActualDoesntMatchAvailableEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsActualDoesntMatchAvailableEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsActualDoesntMatchAvailableEvent(ctx, event)
		this.dev = new devEvents.VestedRewardsActualDoesntMatchAvailableEvent(ctx, event)
	}

	get isV7(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV7'] {
		return this.production.asV7
	}
	get isV42(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV42'] {
		return this.production.asV42
	}
	get isV45(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV45'] {
		return this.production.asV45
	}
	get isV33Stage(): stageEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV42'] {
		return this.stage.asV42
	}
	get isV44Stage(): stageEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV44'] {
		return this.stage.asV44
	}
	get isV60Dev(): devEvents.VestedRewardsActualDoesntMatchAvailableEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.VestedRewardsActualDoesntMatchAvailableEvent['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsAddingZeroMarketMakerRewardEvent {
	private readonly production: productionEvents.VestedRewardsAddingZeroMarketMakerRewardEvent
	private readonly stage: stageEvents.VestedRewardsAddingZeroMarketMakerRewardEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsAddingZeroMarketMakerRewardEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsAddingZeroMarketMakerRewardEvent(ctx, event)
	}

	get isV7(): productionEvents.VestedRewardsAddingZeroMarketMakerRewardEvent['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionEvents.VestedRewardsAddingZeroMarketMakerRewardEvent['asV7'] {
		return this.production.asV7
	}
	get isV33Stage(): stageEvents.VestedRewardsAddingZeroMarketMakerRewardEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.VestedRewardsAddingZeroMarketMakerRewardEvent['asV33'] {
		return this.stage.asV33
	}
}

export class VestedRewardsCrowdloanClaimedEvent {
	private readonly production: productionEvents.VestedRewardsCrowdloanClaimedEvent
	private readonly stage: stageEvents.VestedRewardsCrowdloanClaimedEvent
	private readonly dev: devEvents.VestedRewardsCrowdloanClaimedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsCrowdloanClaimedEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsCrowdloanClaimedEvent(ctx, event)
		this.dev = new devEvents.VestedRewardsCrowdloanClaimedEvent(ctx, event)
	}

	get isV53(): productionEvents.VestedRewardsCrowdloanClaimedEvent['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionEvents.VestedRewardsCrowdloanClaimedEvent['asV53'] {
		return this.production.asV53
	}
	get isV52Stage(): stageEvents.VestedRewardsCrowdloanClaimedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.VestedRewardsCrowdloanClaimedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.VestedRewardsCrowdloanClaimedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.VestedRewardsCrowdloanClaimedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsFailedToSaveCalculatedRewardEvent {
	private readonly production: productionEvents.VestedRewardsFailedToSaveCalculatedRewardEvent
	private readonly stage: stageEvents.VestedRewardsFailedToSaveCalculatedRewardEvent
	private readonly dev: devEvents.VestedRewardsFailedToSaveCalculatedRewardEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsFailedToSaveCalculatedRewardEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsFailedToSaveCalculatedRewardEvent(ctx, event)
		this.dev = new devEvents.VestedRewardsFailedToSaveCalculatedRewardEvent(ctx, event)
	}

	get isV7(): productionEvents.VestedRewardsFailedToSaveCalculatedRewardEvent['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionEvents.VestedRewardsFailedToSaveCalculatedRewardEvent['asV7'] {
		return this.production.asV7
	}
	get isV33Stage(): stageEvents.VestedRewardsFailedToSaveCalculatedRewardEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.VestedRewardsFailedToSaveCalculatedRewardEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.VestedRewardsFailedToSaveCalculatedRewardEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.VestedRewardsFailedToSaveCalculatedRewardEvent['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsNoEligibleMarketMakersEvent {
	private readonly production: productionEvents.VestedRewardsNoEligibleMarketMakersEvent
	private readonly stage: stageEvents.VestedRewardsNoEligibleMarketMakersEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsNoEligibleMarketMakersEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsNoEligibleMarketMakersEvent(ctx, event)
	}

	get isV7(): productionEvents.VestedRewardsNoEligibleMarketMakersEvent['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionEvents.VestedRewardsNoEligibleMarketMakersEvent['asV7'] {
		return this.production.asV7
	}
	get isV33Stage(): stageEvents.VestedRewardsNoEligibleMarketMakersEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.VestedRewardsNoEligibleMarketMakersEvent['asV33'] {
		return this.stage.asV33
	}
}

export class VestedRewardsRewardsVestedEvent {
	private readonly production: productionEvents.VestedRewardsRewardsVestedEvent
	private readonly stage: stageEvents.VestedRewardsRewardsVestedEvent
	private readonly dev: devEvents.VestedRewardsRewardsVestedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.VestedRewardsRewardsVestedEvent(ctx, event)
		this.stage = new stageEvents.VestedRewardsRewardsVestedEvent(ctx, event)
		this.dev = new devEvents.VestedRewardsRewardsVestedEvent(ctx, event)
	}

	get isV1(): productionEvents.VestedRewardsRewardsVestedEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.VestedRewardsRewardsVestedEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.VestedRewardsRewardsVestedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.VestedRewardsRewardsVestedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.VestedRewardsRewardsVestedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.VestedRewardsRewardsVestedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolPoolInitializedEvent {
	private readonly production: productionEvents.XstPoolPoolInitializedEvent
	private readonly stage: stageEvents.XstPoolPoolInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolPoolInitializedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolPoolInitializedEvent(ctx, event)
	}

	get isV19(): productionEvents.XstPoolPoolInitializedEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.XstPoolPoolInitializedEvent['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionEvents.XstPoolPoolInitializedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.XstPoolPoolInitializedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.XstPoolPoolInitializedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.XstPoolPoolInitializedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.XstPoolPoolInitializedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.XstPoolPoolInitializedEvent['asV42'] {
		return this.stage.asV42
	}
}

export class XstPoolReferenceAssetChangedEvent {
	private readonly production: productionEvents.XstPoolReferenceAssetChangedEvent
	private readonly stage: stageEvents.XstPoolReferenceAssetChangedEvent
	private readonly dev: devEvents.XstPoolReferenceAssetChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolReferenceAssetChangedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolReferenceAssetChangedEvent(ctx, event)
		this.dev = new devEvents.XstPoolReferenceAssetChangedEvent(ctx, event)
	}

	get isV19(): productionEvents.XstPoolReferenceAssetChangedEvent['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionEvents.XstPoolReferenceAssetChangedEvent['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionEvents.XstPoolReferenceAssetChangedEvent['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionEvents.XstPoolReferenceAssetChangedEvent['asV42'] {
		return this.production.asV42
	}
	get isV33Stage(): stageEvents.XstPoolReferenceAssetChangedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.XstPoolReferenceAssetChangedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV42Stage(): stageEvents.XstPoolReferenceAssetChangedEvent['isV42'] {
		return this.stage.isV42
	}
	get asV42Stage(): stageEvents.XstPoolReferenceAssetChangedEvent['asV42'] {
		return this.stage.asV42
	}
	get isV60Dev(): devEvents.XstPoolReferenceAssetChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XstPoolReferenceAssetChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolSyntheticAssetDisabledEvent {
	private readonly production: productionEvents.XstPoolSyntheticAssetDisabledEvent
	private readonly stage: stageEvents.XstPoolSyntheticAssetDisabledEvent
	private readonly dev: devEvents.XstPoolSyntheticAssetDisabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticAssetDisabledEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticAssetDisabledEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticAssetDisabledEvent(ctx, event)
	}

	get isV57(): productionEvents.XstPoolSyntheticAssetDisabledEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.XstPoolSyntheticAssetDisabledEvent['asV57'] {
		return this.production.asV57
	}
	get isV54Stage(): stageEvents.XstPoolSyntheticAssetDisabledEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.XstPoolSyntheticAssetDisabledEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.XstPoolSyntheticAssetDisabledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XstPoolSyntheticAssetDisabledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolSyntheticAssetEnabledEvent {
	private readonly production: productionEvents.XstPoolSyntheticAssetEnabledEvent
	private readonly stage: stageEvents.XstPoolSyntheticAssetEnabledEvent
	private readonly dev: devEvents.XstPoolSyntheticAssetEnabledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticAssetEnabledEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticAssetEnabledEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticAssetEnabledEvent(ctx, event)
	}

	get isV45(): productionEvents.XstPoolSyntheticAssetEnabledEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.XstPoolSyntheticAssetEnabledEvent['asV45'] {
		return this.production.asV45
	}
	get isV57(): productionEvents.XstPoolSyntheticAssetEnabledEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.XstPoolSyntheticAssetEnabledEvent['asV57'] {
		return this.production.asV57
	}
	get isV44Stage(): stageEvents.XstPoolSyntheticAssetEnabledEvent['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageEvents.XstPoolSyntheticAssetEnabledEvent['asV44'] {
		return this.stage.asV44
	}
	get isV54Stage(): stageEvents.XstPoolSyntheticAssetEnabledEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.XstPoolSyntheticAssetEnabledEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.XstPoolSyntheticAssetEnabledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XstPoolSyntheticAssetEnabledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolSyntheticAssetFeeChangedEvent {
	private readonly production: productionEvents.XstPoolSyntheticAssetFeeChangedEvent
	private readonly stage: stageEvents.XstPoolSyntheticAssetFeeChangedEvent
	private readonly dev: devEvents.XstPoolSyntheticAssetFeeChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticAssetFeeChangedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticAssetFeeChangedEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticAssetFeeChangedEvent(ctx, event)
	}

	get isV57(): productionEvents.XstPoolSyntheticAssetFeeChangedEvent['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionEvents.XstPoolSyntheticAssetFeeChangedEvent['asV57'] {
		return this.production.asV57
	}
	get isV54Stage(): stageEvents.XstPoolSyntheticAssetFeeChangedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.XstPoolSyntheticAssetFeeChangedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.XstPoolSyntheticAssetFeeChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XstPoolSyntheticAssetFeeChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolSyntheticAssetRemovedEvent {
	private readonly production: productionEvents.XstPoolSyntheticAssetRemovedEvent
	private readonly stage: stageEvents.XstPoolSyntheticAssetRemovedEvent
	private readonly dev: devEvents.XstPoolSyntheticAssetRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticAssetRemovedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticAssetRemovedEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticAssetRemovedEvent(ctx, event)
	}

	get isV60(): productionEvents.XstPoolSyntheticAssetRemovedEvent['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionEvents.XstPoolSyntheticAssetRemovedEvent['asV60'] {
		return this.production.asV60
	}
	get isV60Stage(): stageEvents.XstPoolSyntheticAssetRemovedEvent['isV60'] {
		return this.stage.isV60
	}
	get asV60Stage(): stageEvents.XstPoolSyntheticAssetRemovedEvent['asV60'] {
		return this.stage.asV60
	}
	get isV60Dev(): devEvents.XstPoolSyntheticAssetRemovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XstPoolSyntheticAssetRemovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XstPoolSyntheticBaseAssetFloorPriceChangedEvent {
	private readonly production: productionEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent
	private readonly stage: stageEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent
	private readonly dev: devEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent(ctx, event)
		this.stage = new stageEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent(ctx, event)
		this.dev = new devEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent(ctx, event)
	}

	get isV45(): productionEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent['asV45'] {
		return this.production.asV45
	}
	get isV44Stage(): stageEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent['isV44'] {
		return this.stage.isV44
	}
	get asV44Stage(): stageEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent['asV44'] {
		return this.stage.asV44
	}
	get isV60Dev(): devEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XstPoolSyntheticBaseAssetFloorPriceChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XorFeeFeeWithdrawnEvent {
	private readonly production: productionEvents.XorFeeFeeWithdrawnEvent
	private readonly stage: stageEvents.XorFeeFeeWithdrawnEvent
	private readonly dev: devEvents.XorFeeFeeWithdrawnEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XorFeeFeeWithdrawnEvent(ctx, event)
		this.stage = new stageEvents.XorFeeFeeWithdrawnEvent(ctx, event)
		this.dev = new devEvents.XorFeeFeeWithdrawnEvent(ctx, event)
	}

	get isV1(): productionEvents.XorFeeFeeWithdrawnEvent['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionEvents.XorFeeFeeWithdrawnEvent['asV1'] {
		return this.production.asV1
	}
	get isV33Stage(): stageEvents.XorFeeFeeWithdrawnEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.XorFeeFeeWithdrawnEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.XorFeeFeeWithdrawnEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XorFeeFeeWithdrawnEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XorFeeReferrerRewardedEvent {
	private readonly production: productionEvents.XorFeeReferrerRewardedEvent
	private readonly stage: stageEvents.XorFeeReferrerRewardedEvent
	private readonly dev: devEvents.XorFeeReferrerRewardedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XorFeeReferrerRewardedEvent(ctx, event)
		this.stage = new stageEvents.XorFeeReferrerRewardedEvent(ctx, event)
		this.dev = new devEvents.XorFeeReferrerRewardedEvent(ctx, event)
	}

	get isV22(): productionEvents.XorFeeReferrerRewardedEvent['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionEvents.XorFeeReferrerRewardedEvent['asV22'] {
		return this.production.asV22
	}
	get isV33Stage(): stageEvents.XorFeeReferrerRewardedEvent['isV33'] {
		return this.stage.isV33
	}
	get asV33Stage(): stageEvents.XorFeeReferrerRewardedEvent['asV33'] {
		return this.stage.asV33
	}
	get isV60Dev(): devEvents.XorFeeReferrerRewardedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XorFeeReferrerRewardedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class XorFeeWeightToFeeMultiplierUpdatedEvent {
	private readonly production: productionEvents.XorFeeWeightToFeeMultiplierUpdatedEvent
	private readonly stage: stageEvents.XorFeeWeightToFeeMultiplierUpdatedEvent
	private readonly dev: devEvents.XorFeeWeightToFeeMultiplierUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.production = new productionEvents.XorFeeWeightToFeeMultiplierUpdatedEvent(ctx, event)
		this.stage = new stageEvents.XorFeeWeightToFeeMultiplierUpdatedEvent(ctx, event)
		this.dev = new devEvents.XorFeeWeightToFeeMultiplierUpdatedEvent(ctx, event)
	}

	get isV37(): productionEvents.XorFeeWeightToFeeMultiplierUpdatedEvent['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionEvents.XorFeeWeightToFeeMultiplierUpdatedEvent['asV37'] {
		return this.production.asV37
	}
	get isV37Stage(): stageEvents.XorFeeWeightToFeeMultiplierUpdatedEvent['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageEvents.XorFeeWeightToFeeMultiplierUpdatedEvent['asV37'] {
		return this.stage.asV37
	}
	get isV60Dev(): devEvents.XorFeeWeightToFeeMultiplierUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.XorFeeWeightToFeeMultiplierUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientNewMmrRootEvent {
	private readonly stage: stageEvents.BeefyLightClientNewMmrRootEvent
	private readonly dev: devEvents.BeefyLightClientNewMmrRootEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BeefyLightClientNewMmrRootEvent(ctx, event)
		this.dev = new devEvents.BeefyLightClientNewMmrRootEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.BeefyLightClientNewMmrRootEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BeefyLightClientNewMmrRootEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.BeefyLightClientNewMmrRootEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BeefyLightClientNewMmrRootEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientValidatorRegistryUpdatedEvent {
	private readonly stage: stageEvents.BeefyLightClientValidatorRegistryUpdatedEvent
	private readonly dev: devEvents.BeefyLightClientValidatorRegistryUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BeefyLightClientValidatorRegistryUpdatedEvent(ctx, event)
		this.dev = new devEvents.BeefyLightClientValidatorRegistryUpdatedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.BeefyLightClientValidatorRegistryUpdatedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BeefyLightClientValidatorRegistryUpdatedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.BeefyLightClientValidatorRegistryUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BeefyLightClientValidatorRegistryUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientVerificationSuccessfulEvent {
	private readonly stage: stageEvents.BeefyLightClientVerificationSuccessfulEvent
	private readonly dev: devEvents.BeefyLightClientVerificationSuccessfulEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BeefyLightClientVerificationSuccessfulEvent(ctx, event)
		this.dev = new devEvents.BeefyLightClientVerificationSuccessfulEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.BeefyLightClientVerificationSuccessfulEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BeefyLightClientVerificationSuccessfulEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.BeefyLightClientVerificationSuccessfulEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BeefyLightClientVerificationSuccessfulEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerAddedPeerEvent {
	private readonly stage: stageEvents.BridgeDataSignerAddedPeerEvent
	private readonly dev: devEvents.BridgeDataSignerAddedPeerEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeDataSignerAddedPeerEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerAddedPeerEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.BridgeDataSignerAddedPeerEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.BridgeDataSignerAddedPeerEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.BridgeDataSignerAddedPeerEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeDataSignerAddedPeerEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerApprovalAcceptedEvent {
	private readonly stage: stageEvents.BridgeDataSignerApprovalAcceptedEvent
	private readonly dev: devEvents.BridgeDataSignerApprovalAcceptedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeDataSignerApprovalAcceptedEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerApprovalAcceptedEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.BridgeDataSignerApprovalAcceptedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.BridgeDataSignerApprovalAcceptedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.BridgeDataSignerApprovalAcceptedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeDataSignerApprovalAcceptedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerApprovedEvent {
	private readonly stage: stageEvents.BridgeDataSignerApprovedEvent
	private readonly dev: devEvents.BridgeDataSignerApprovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeDataSignerApprovedEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerApprovedEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.BridgeDataSignerApprovedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.BridgeDataSignerApprovedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.BridgeDataSignerApprovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeDataSignerApprovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerInitializedEvent {
	private readonly stage: stageEvents.BridgeDataSignerInitializedEvent
	private readonly dev: devEvents.BridgeDataSignerInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeDataSignerInitializedEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerInitializedEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.BridgeDataSignerInitializedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.BridgeDataSignerInitializedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.BridgeDataSignerInitializedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeDataSignerInitializedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerRemovedPeerEvent {
	private readonly stage: stageEvents.BridgeDataSignerRemovedPeerEvent
	private readonly dev: devEvents.BridgeDataSignerRemovedPeerEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeDataSignerRemovedPeerEvent(ctx, event)
		this.dev = new devEvents.BridgeDataSignerRemovedPeerEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.BridgeDataSignerRemovedPeerEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.BridgeDataSignerRemovedPeerEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.BridgeDataSignerRemovedPeerEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeDataSignerRemovedPeerEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeOutboundChannelMessageAcceptedEvent {
	private readonly stage: stageEvents.BridgeOutboundChannelMessageAcceptedEvent
	private readonly dev: devEvents.BridgeOutboundChannelMessageAcceptedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeOutboundChannelMessageAcceptedEvent(ctx, event)
		this.dev = new devEvents.BridgeOutboundChannelMessageAcceptedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.BridgeOutboundChannelMessageAcceptedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.BridgeOutboundChannelMessageAcceptedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV55Stage(): stageEvents.BridgeOutboundChannelMessageAcceptedEvent['isV55'] {
		return this.stage.isV55
	}
	get asV55Stage(): stageEvents.BridgeOutboundChannelMessageAcceptedEvent['asV55'] {
		return this.stage.asV55
	}
	get isV60Dev(): devEvents.BridgeOutboundChannelMessageAcceptedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeOutboundChannelMessageAcceptedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyRefundFailedEvent {
	private readonly stage: stageEvents.BridgeProxyRefundFailedEvent
	private readonly dev: devEvents.BridgeProxyRefundFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeProxyRefundFailedEvent(ctx, event)
		this.dev = new devEvents.BridgeProxyRefundFailedEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.BridgeProxyRefundFailedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.BridgeProxyRefundFailedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.BridgeProxyRefundFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeProxyRefundFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyRequestStatusUpdateEvent {
	private readonly stage: stageEvents.BridgeProxyRequestStatusUpdateEvent
	private readonly dev: devEvents.BridgeProxyRequestStatusUpdateEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.BridgeProxyRequestStatusUpdateEvent(ctx, event)
		this.dev = new devEvents.BridgeProxyRequestStatusUpdateEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.BridgeProxyRequestStatusUpdateEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.BridgeProxyRequestStatusUpdateEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.BridgeProxyRequestStatusUpdateEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.BridgeProxyRequestStatusUpdateEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DispatchMessageDecodeFailedEvent {
	private readonly stage: stageEvents.DispatchMessageDecodeFailedEvent
	private readonly dev: devEvents.DispatchMessageDecodeFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.DispatchMessageDecodeFailedEvent(ctx, event)
		this.dev = new devEvents.DispatchMessageDecodeFailedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.DispatchMessageDecodeFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.DispatchMessageDecodeFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.DispatchMessageDecodeFailedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.DispatchMessageDecodeFailedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.DispatchMessageDecodeFailedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.DispatchMessageDecodeFailedEvent['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devEvents.DispatchMessageDecodeFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DispatchMessageDecodeFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DispatchMessageDispatchedEvent {
	private readonly stage: stageEvents.DispatchMessageDispatchedEvent
	private readonly dev: devEvents.DispatchMessageDispatchedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.DispatchMessageDispatchedEvent(ctx, event)
		this.dev = new devEvents.DispatchMessageDispatchedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.DispatchMessageDispatchedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.DispatchMessageDispatchedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.DispatchMessageDispatchedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.DispatchMessageDispatchedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.DispatchMessageDispatchedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.DispatchMessageDispatchedEvent['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devEvents.DispatchMessageDispatchedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DispatchMessageDispatchedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class DispatchMessageRejectedEvent {
	private readonly stage: stageEvents.DispatchMessageRejectedEvent
	private readonly dev: devEvents.DispatchMessageRejectedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.DispatchMessageRejectedEvent(ctx, event)
		this.dev = new devEvents.DispatchMessageRejectedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.DispatchMessageRejectedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.DispatchMessageRejectedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.DispatchMessageRejectedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.DispatchMessageRejectedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.DispatchMessageRejectedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.DispatchMessageRejectedEvent['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devEvents.DispatchMessageRejectedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.DispatchMessageRejectedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppBurnedEvent {
	private readonly stage: stageEvents.Erc20AppBurnedEvent
	private readonly dev: devEvents.Erc20AppBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.Erc20AppBurnedEvent(ctx, event)
		this.dev = new devEvents.Erc20AppBurnedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.Erc20AppBurnedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.Erc20AppBurnedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.Erc20AppBurnedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.Erc20AppBurnedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppMintedEvent {
	private readonly stage: stageEvents.Erc20AppMintedEvent
	private readonly dev: devEvents.Erc20AppMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.Erc20AppMintedEvent(ctx, event)
		this.dev = new devEvents.Erc20AppMintedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.Erc20AppMintedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.Erc20AppMintedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.Erc20AppMintedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.Erc20AppMintedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class Erc20AppRefundedEvent {
	private readonly stage: stageEvents.Erc20AppRefundedEvent
	private readonly dev: devEvents.Erc20AppRefundedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.Erc20AppRefundedEvent(ctx, event)
		this.dev = new devEvents.Erc20AppRefundedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.Erc20AppRefundedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.Erc20AppRefundedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.Erc20AppRefundedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.Erc20AppRefundedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthAppBurnedEvent {
	private readonly stage: stageEvents.EthAppBurnedEvent
	private readonly dev: devEvents.EthAppBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EthAppBurnedEvent(ctx, event)
		this.dev = new devEvents.EthAppBurnedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EthAppBurnedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthAppBurnedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.EthAppBurnedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthAppBurnedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthAppMintedEvent {
	private readonly stage: stageEvents.EthAppMintedEvent
	private readonly dev: devEvents.EthAppMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EthAppMintedEvent(ctx, event)
		this.dev = new devEvents.EthAppMintedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EthAppMintedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthAppMintedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.EthAppMintedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthAppMintedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthAppRefundedEvent {
	private readonly stage: stageEvents.EthAppRefundedEvent
	private readonly dev: devEvents.EthAppRefundedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EthAppRefundedEvent(ctx, event)
		this.dev = new devEvents.EthAppRefundedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EthAppRefundedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthAppRefundedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.EthAppRefundedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthAppRefundedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientFinalizedEvent {
	private readonly stage: stageEvents.EthereumLightClientFinalizedEvent
	private readonly dev: devEvents.EthereumLightClientFinalizedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EthereumLightClientFinalizedEvent(ctx, event)
		this.dev = new devEvents.EthereumLightClientFinalizedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EthereumLightClientFinalizedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EthereumLightClientFinalizedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.EthereumLightClientFinalizedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.EthereumLightClientFinalizedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class EvmBridgeProxyRefundFailedEvent {
	private readonly stage: stageEvents.EvmBridgeProxyRefundFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EvmBridgeProxyRefundFailedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EvmBridgeProxyRefundFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EvmBridgeProxyRefundFailedEvent['asV52'] {
		return this.stage.asV52
	}
}

export class EvmBridgeProxyRequestStatusUpdateEvent {
	private readonly stage: stageEvents.EvmBridgeProxyRequestStatusUpdateEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.EvmBridgeProxyRequestStatusUpdateEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.EvmBridgeProxyRequestStatusUpdateEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.EvmBridgeProxyRequestStatusUpdateEvent['asV52'] {
		return this.stage.asV52
	}
}

export class FaucetLimitUpdatedEvent {
	private readonly stage: stageEvents.FaucetLimitUpdatedEvent
	private readonly dev: devEvents.FaucetLimitUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.FaucetLimitUpdatedEvent(ctx, event)
		this.dev = new devEvents.FaucetLimitUpdatedEvent(ctx, event)
	}

	get isV37Stage(): stageEvents.FaucetLimitUpdatedEvent['isV37'] {
		return this.stage.isV37
	}
	get asV37Stage(): stageEvents.FaucetLimitUpdatedEvent['asV37'] {
		return this.stage.asV37
	}
	get isV60Dev(): devEvents.FaucetLimitUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.FaucetLimitUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MigrationAppErc20MigratedEvent {
	private readonly stage: stageEvents.MigrationAppErc20MigratedEvent
	private readonly dev: devEvents.MigrationAppErc20MigratedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MigrationAppErc20MigratedEvent(ctx, event)
		this.dev = new devEvents.MigrationAppErc20MigratedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.MigrationAppErc20MigratedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.MigrationAppErc20MigratedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.MigrationAppErc20MigratedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MigrationAppErc20MigratedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MigrationAppEthMigratedEvent {
	private readonly stage: stageEvents.MigrationAppEthMigratedEvent
	private readonly dev: devEvents.MigrationAppEthMigratedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MigrationAppEthMigratedEvent(ctx, event)
		this.dev = new devEvents.MigrationAppEthMigratedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.MigrationAppEthMigratedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.MigrationAppEthMigratedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.MigrationAppEthMigratedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MigrationAppEthMigratedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MigrationAppSidechainMigratedEvent {
	private readonly stage: stageEvents.MigrationAppSidechainMigratedEvent
	private readonly dev: devEvents.MigrationAppSidechainMigratedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MigrationAppSidechainMigratedEvent(ctx, event)
		this.dev = new devEvents.MigrationAppSidechainMigratedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.MigrationAppSidechainMigratedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.MigrationAppSidechainMigratedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.MigrationAppSidechainMigratedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MigrationAppSidechainMigratedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierNetworkInitializedEvent {
	private readonly stage: stageEvents.MultisigVerifierNetworkInitializedEvent
	private readonly dev: devEvents.MultisigVerifierNetworkInitializedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MultisigVerifierNetworkInitializedEvent(ctx, event)
		this.dev = new devEvents.MultisigVerifierNetworkInitializedEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.MultisigVerifierNetworkInitializedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.MultisigVerifierNetworkInitializedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.MultisigVerifierNetworkInitializedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MultisigVerifierNetworkInitializedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierPeerAddedEvent {
	private readonly stage: stageEvents.MultisigVerifierPeerAddedEvent
	private readonly dev: devEvents.MultisigVerifierPeerAddedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MultisigVerifierPeerAddedEvent(ctx, event)
		this.dev = new devEvents.MultisigVerifierPeerAddedEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.MultisigVerifierPeerAddedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.MultisigVerifierPeerAddedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.MultisigVerifierPeerAddedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MultisigVerifierPeerAddedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierPeerRemovedEvent {
	private readonly stage: stageEvents.MultisigVerifierPeerRemovedEvent
	private readonly dev: devEvents.MultisigVerifierPeerRemovedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MultisigVerifierPeerRemovedEvent(ctx, event)
		this.dev = new devEvents.MultisigVerifierPeerRemovedEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.MultisigVerifierPeerRemovedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.MultisigVerifierPeerRemovedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.MultisigVerifierPeerRemovedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MultisigVerifierPeerRemovedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierVerificationSuccessfulEvent {
	private readonly stage: stageEvents.MultisigVerifierVerificationSuccessfulEvent
	private readonly dev: devEvents.MultisigVerifierVerificationSuccessfulEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.MultisigVerifierVerificationSuccessfulEvent(ctx, event)
		this.dev = new devEvents.MultisigVerifierVerificationSuccessfulEvent(ctx, event)
	}

	get isV54Stage(): stageEvents.MultisigVerifierVerificationSuccessfulEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.MultisigVerifierVerificationSuccessfulEvent['asV54'] {
		return this.stage.asV54
	}
	get isV60Dev(): devEvents.MultisigVerifierVerificationSuccessfulEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.MultisigVerifierVerificationSuccessfulEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppBurnedEvent {
	private readonly stage: stageEvents.SubstrateBridgeAppBurnedEvent
	private readonly dev: devEvents.SubstrateBridgeAppBurnedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.SubstrateBridgeAppBurnedEvent(ctx, event)
		this.dev = new devEvents.SubstrateBridgeAppBurnedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.SubstrateBridgeAppBurnedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateBridgeAppBurnedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SubstrateBridgeAppBurnedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SubstrateBridgeAppBurnedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppMintedEvent {
	private readonly stage: stageEvents.SubstrateBridgeAppMintedEvent
	private readonly dev: devEvents.SubstrateBridgeAppMintedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.SubstrateBridgeAppMintedEvent(ctx, event)
		this.dev = new devEvents.SubstrateBridgeAppMintedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.SubstrateBridgeAppMintedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateBridgeAppMintedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV60Dev(): devEvents.SubstrateBridgeAppMintedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SubstrateBridgeAppMintedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeOutboundChannelMessageAcceptedEvent {
	private readonly stage: stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent
	private readonly dev: devEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent(ctx, event)
		this.dev = new devEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV57Stage(): stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['isV57'] {
		return this.stage.isV57
	}
	get asV57Stage(): stageEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['asV57'] {
		return this.stage.asV57
	}
	get isV60Dev(): devEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SubstrateBridgeOutboundChannelMessageAcceptedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateDispatchMessageDecodeFailedEvent {
	private readonly stage: stageEvents.SubstrateDispatchMessageDecodeFailedEvent
	private readonly dev: devEvents.SubstrateDispatchMessageDecodeFailedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.SubstrateDispatchMessageDecodeFailedEvent(ctx, event)
		this.dev = new devEvents.SubstrateDispatchMessageDecodeFailedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.SubstrateDispatchMessageDecodeFailedEvent['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devEvents.SubstrateDispatchMessageDecodeFailedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SubstrateDispatchMessageDecodeFailedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateDispatchMessageDispatchedEvent {
	private readonly stage: stageEvents.SubstrateDispatchMessageDispatchedEvent
	private readonly dev: devEvents.SubstrateDispatchMessageDispatchedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.SubstrateDispatchMessageDispatchedEvent(ctx, event)
		this.dev = new devEvents.SubstrateDispatchMessageDispatchedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.SubstrateDispatchMessageDispatchedEvent['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devEvents.SubstrateDispatchMessageDispatchedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SubstrateDispatchMessageDispatchedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateDispatchMessageRejectedEvent {
	private readonly stage: stageEvents.SubstrateDispatchMessageRejectedEvent
	private readonly dev: devEvents.SubstrateDispatchMessageRejectedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.stage = new stageEvents.SubstrateDispatchMessageRejectedEvent(ctx, event)
		this.dev = new devEvents.SubstrateDispatchMessageRejectedEvent(ctx, event)
	}

	get isV52Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['isV52'] {
		return this.stage.isV52
	}
	get asV52Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['asV52'] {
		return this.stage.asV52
	}
	get isV54Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['isV54'] {
		return this.stage.isV54
	}
	get asV54Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['asV54'] {
		return this.stage.asV54
	}
	get isV59Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['isV59'] {
		return this.stage.isV59
	}
	get asV59Stage(): stageEvents.SubstrateDispatchMessageRejectedEvent['asV59'] {
		return this.stage.asV59
	}
	get isV60Dev(): devEvents.SubstrateDispatchMessageRejectedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.SubstrateDispatchMessageRejectedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookExpirationFailureEvent {
	private readonly dev: devEvents.OrderBookExpirationFailureEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookExpirationFailureEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookExpirationFailureEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookExpirationFailureEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookLimitOrderCanceledEvent {
	private readonly dev: devEvents.OrderBookLimitOrderCanceledEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderCanceledEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookLimitOrderCanceledEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookLimitOrderCanceledEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookLimitOrderConvertedToMarketOrderEvent {
	private readonly dev: devEvents.OrderBookLimitOrderConvertedToMarketOrderEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderConvertedToMarketOrderEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookLimitOrderConvertedToMarketOrderEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookLimitOrderConvertedToMarketOrderEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookLimitOrderExecutedEvent {
	private readonly dev: devEvents.OrderBookLimitOrderExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderExecutedEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookLimitOrderExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookLimitOrderExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookLimitOrderExpiredEvent {
	private readonly dev: devEvents.OrderBookLimitOrderExpiredEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderExpiredEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookLimitOrderExpiredEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookLimitOrderExpiredEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent {
	private readonly dev: devEvents.OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookLimitOrderPlacedEvent {
	private readonly dev: devEvents.OrderBookLimitOrderPlacedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderPlacedEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookLimitOrderPlacedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookLimitOrderPlacedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookLimitOrderUpdatedEvent {
	private readonly dev: devEvents.OrderBookLimitOrderUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookLimitOrderUpdatedEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookLimitOrderUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookLimitOrderUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookMarketOrderExecutedEvent {
	private readonly dev: devEvents.OrderBookMarketOrderExecutedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookMarketOrderExecutedEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookMarketOrderExecutedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookMarketOrderExecutedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookOrderBookCreatedEvent {
	private readonly dev: devEvents.OrderBookOrderBookCreatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookOrderBookCreatedEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookOrderBookCreatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookOrderBookCreatedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookOrderBookDeletedEvent {
	private readonly dev: devEvents.OrderBookOrderBookDeletedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookOrderBookDeletedEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookOrderBookDeletedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookOrderBookDeletedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookOrderBookStatusChangedEvent {
	private readonly dev: devEvents.OrderBookOrderBookStatusChangedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookOrderBookStatusChangedEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookOrderBookStatusChangedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookOrderBookStatusChangedEvent['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookOrderBookUpdatedEvent {
	private readonly dev: devEvents.OrderBookOrderBookUpdatedEvent

	constructor(ctx: ChainContext, event: Event) {
		this.dev = new devEvents.OrderBookOrderBookUpdatedEvent(ctx, event)
	}

	get isV60Dev(): devEvents.OrderBookOrderBookUpdatedEvent['isV60'] {
		return this.dev.isV60
	}
	get asV60Dev(): devEvents.OrderBookOrderBookUpdatedEvent['asV60'] {
		return this.dev.asV60
	}
}
