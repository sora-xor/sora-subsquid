import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './production/support'
import * as productionStorage from './production/storage'
import * as stageStorage from './stage/storage'
import * as devStorage from './dev/storage'


export class AssetsAssetContentSourceStorage extends StorageBase {
	private readonly production: productionStorage.AssetsAssetContentSourceStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.AssetsAssetContentSourceStorage(ctx, storage)
	}

	get isV22(): productionStorage.AssetsAssetContentSourceStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.AssetsAssetContentSourceStorage['asV22'] {
		return this.production.asV22
	}
}

export class AssetsAssetDescriptionStorage extends StorageBase {
	private readonly production: productionStorage.AssetsAssetDescriptionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.AssetsAssetDescriptionStorage(ctx, storage)
	}

	get isV22(): productionStorage.AssetsAssetDescriptionStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.AssetsAssetDescriptionStorage['asV22'] {
		return this.production.asV22
	}
}

export class AssetsAssetInfosStorage extends StorageBase {
	private readonly production: productionStorage.AssetsAssetInfosStorage
	private readonly stage: stageStorage.AssetsAssetInfosStorage
	private readonly dev: devStorage.AssetsAssetInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.AssetsAssetInfosStorage(ctx, storage)
		this.stage = new stageStorage.AssetsAssetInfosStorage(ctx, storage)
		this.dev = new devStorage.AssetsAssetInfosStorage(ctx, storage)
	}

	get isV1(): productionStorage.AssetsAssetInfosStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AssetsAssetInfosStorage['asV1'] {
		return this.production.asV1
	}
	get isV26(): productionStorage.AssetsAssetInfosStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.AssetsAssetInfosStorage['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionStorage.AssetsAssetInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.AssetsAssetInfosStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.AssetsAssetInfosStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.AssetsAssetInfosStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.AssetsAssetInfosStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.AssetsAssetInfosStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.AssetsAssetInfosStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.AssetsAssetInfosStorage['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsAssetOwnersStorage extends StorageBase {
	private readonly production: productionStorage.AssetsAssetOwnersStorage
	private readonly stage: stageStorage.AssetsAssetOwnersStorage
	private readonly dev: devStorage.AssetsAssetOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.AssetsAssetOwnersStorage(ctx, storage)
		this.stage = new stageStorage.AssetsAssetOwnersStorage(ctx, storage)
		this.dev = new devStorage.AssetsAssetOwnersStorage(ctx, storage)
	}

	get isV1(): productionStorage.AssetsAssetOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AssetsAssetOwnersStorage['asV1'] {
		return this.production.asV1
	}
	get isV7(): productionStorage.AssetsAssetOwnersStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.AssetsAssetOwnersStorage['asV7'] {
		return this.production.asV7
	}
	get isV42(): productionStorage.AssetsAssetOwnersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.AssetsAssetOwnersStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.AssetsAssetOwnersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.AssetsAssetOwnersStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.AssetsAssetOwnersStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.AssetsAssetOwnersStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.AssetsAssetOwnersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.AssetsAssetOwnersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class AssetsAssetRecordAssetIdStorage extends StorageBase {
	private readonly production: productionStorage.AssetsAssetRecordAssetIdStorage
	private readonly stage: stageStorage.AssetsAssetRecordAssetIdStorage
	private readonly dev: devStorage.AssetsAssetRecordAssetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.AssetsAssetRecordAssetIdStorage(ctx, storage)
		this.stage = new stageStorage.AssetsAssetRecordAssetIdStorage(ctx, storage)
		this.dev = new devStorage.AssetsAssetRecordAssetIdStorage(ctx, storage)
	}

	get isV1(): productionStorage.AssetsAssetRecordAssetIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AssetsAssetRecordAssetIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.AssetsAssetRecordAssetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.AssetsAssetRecordAssetIdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.AssetsAssetRecordAssetIdStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.AssetsAssetRecordAssetIdStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.AssetsAssetRecordAssetIdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.AssetsAssetRecordAssetIdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.AssetsAssetRecordAssetIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.AssetsAssetRecordAssetIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class AuthorshipAuthorStorage extends StorageBase {
	private readonly production: productionStorage.AuthorshipAuthorStorage
	private readonly stage: stageStorage.AuthorshipAuthorStorage
	private readonly dev: devStorage.AuthorshipAuthorStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.AuthorshipAuthorStorage(ctx, storage)
		this.stage = new stageStorage.AuthorshipAuthorStorage(ctx, storage)
		this.dev = new devStorage.AuthorshipAuthorStorage(ctx, storage)
	}

	get isV1(): productionStorage.AuthorshipAuthorStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AuthorshipAuthorStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.AuthorshipAuthorStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.AuthorshipAuthorStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.AuthorshipAuthorStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.AuthorshipAuthorStorage['asV60'] {
		return this.dev.asV60
	}
}

export class AuthorshipDidSetUnclesStorage extends StorageBase {
	private readonly production: productionStorage.AuthorshipDidSetUnclesStorage
	private readonly stage: stageStorage.AuthorshipDidSetUnclesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.AuthorshipDidSetUnclesStorage(ctx, storage)
		this.stage = new stageStorage.AuthorshipDidSetUnclesStorage(ctx, storage)
	}

	get isV1(): productionStorage.AuthorshipDidSetUnclesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AuthorshipDidSetUnclesStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.AuthorshipDidSetUnclesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.AuthorshipDidSetUnclesStorage['asV33'] {
		return this.stage.asV33
	}
}

export class AuthorshipUnclesStorage extends StorageBase {
	private readonly production: productionStorage.AuthorshipUnclesStorage
	private readonly stage: stageStorage.AuthorshipUnclesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.AuthorshipUnclesStorage(ctx, storage)
		this.stage = new stageStorage.AuthorshipUnclesStorage(ctx, storage)
	}

	get isV1(): productionStorage.AuthorshipUnclesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.AuthorshipUnclesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.AuthorshipUnclesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.AuthorshipUnclesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.AuthorshipUnclesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.AuthorshipUnclesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.AuthorshipUnclesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.AuthorshipUnclesStorage['asV42'] {
		return this.stage.asV42
	}
}

export class BabeAuthorVrfRandomnessStorage extends StorageBase {
	private readonly production: productionStorage.BabeAuthorVrfRandomnessStorage
	private readonly stage: stageStorage.BabeAuthorVrfRandomnessStorage
	private readonly dev: devStorage.BabeAuthorVrfRandomnessStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeAuthorVrfRandomnessStorage(ctx, storage)
		this.stage = new stageStorage.BabeAuthorVrfRandomnessStorage(ctx, storage)
		this.dev = new devStorage.BabeAuthorVrfRandomnessStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeAuthorVrfRandomnessStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeAuthorVrfRandomnessStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeAuthorVrfRandomnessStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeAuthorVrfRandomnessStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeAuthorVrfRandomnessStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeAuthorVrfRandomnessStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeAuthoritiesStorage extends StorageBase {
	private readonly production: productionStorage.BabeAuthoritiesStorage
	private readonly stage: stageStorage.BabeAuthoritiesStorage
	private readonly dev: devStorage.BabeAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeAuthoritiesStorage(ctx, storage)
		this.stage = new stageStorage.BabeAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.BabeAuthoritiesStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeAuthoritiesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeAuthoritiesStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeAuthoritiesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeAuthoritiesStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeAuthoritiesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeAuthoritiesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeCurrentSlotStorage extends StorageBase {
	private readonly production: productionStorage.BabeCurrentSlotStorage
	private readonly stage: stageStorage.BabeCurrentSlotStorage
	private readonly dev: devStorage.BabeCurrentSlotStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeCurrentSlotStorage(ctx, storage)
		this.stage = new stageStorage.BabeCurrentSlotStorage(ctx, storage)
		this.dev = new devStorage.BabeCurrentSlotStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeCurrentSlotStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeCurrentSlotStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeCurrentSlotStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeCurrentSlotStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeCurrentSlotStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeCurrentSlotStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeEpochConfigStorage extends StorageBase {
	private readonly production: productionStorage.BabeEpochConfigStorage
	private readonly stage: stageStorage.BabeEpochConfigStorage
	private readonly dev: devStorage.BabeEpochConfigStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeEpochConfigStorage(ctx, storage)
		this.stage = new stageStorage.BabeEpochConfigStorage(ctx, storage)
		this.dev = new devStorage.BabeEpochConfigStorage(ctx, storage)
	}

	get isV42(): productionStorage.BabeEpochConfigStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabeEpochConfigStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BabeEpochConfigStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BabeEpochConfigStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BabeEpochConfigStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeEpochConfigStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeEpochIndexStorage extends StorageBase {
	private readonly production: productionStorage.BabeEpochIndexStorage
	private readonly stage: stageStorage.BabeEpochIndexStorage
	private readonly dev: devStorage.BabeEpochIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeEpochIndexStorage(ctx, storage)
		this.stage = new stageStorage.BabeEpochIndexStorage(ctx, storage)
		this.dev = new devStorage.BabeEpochIndexStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeEpochIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeEpochIndexStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeEpochIndexStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeEpochIndexStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeEpochIndexStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeEpochIndexStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeEpochStartStorage extends StorageBase {
	private readonly production: productionStorage.BabeEpochStartStorage
	private readonly stage: stageStorage.BabeEpochStartStorage
	private readonly dev: devStorage.BabeEpochStartStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeEpochStartStorage(ctx, storage)
		this.stage = new stageStorage.BabeEpochStartStorage(ctx, storage)
		this.dev = new devStorage.BabeEpochStartStorage(ctx, storage)
	}

	get isV42(): productionStorage.BabeEpochStartStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabeEpochStartStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BabeEpochStartStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BabeEpochStartStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BabeEpochStartStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeEpochStartStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeGenesisSlotStorage extends StorageBase {
	private readonly production: productionStorage.BabeGenesisSlotStorage
	private readonly stage: stageStorage.BabeGenesisSlotStorage
	private readonly dev: devStorage.BabeGenesisSlotStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeGenesisSlotStorage(ctx, storage)
		this.stage = new stageStorage.BabeGenesisSlotStorage(ctx, storage)
		this.dev = new devStorage.BabeGenesisSlotStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeGenesisSlotStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeGenesisSlotStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeGenesisSlotStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeGenesisSlotStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeGenesisSlotStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeGenesisSlotStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeInitializedStorage extends StorageBase {
	private readonly production: productionStorage.BabeInitializedStorage
	private readonly stage: stageStorage.BabeInitializedStorage
	private readonly dev: devStorage.BabeInitializedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeInitializedStorage(ctx, storage)
		this.stage = new stageStorage.BabeInitializedStorage(ctx, storage)
		this.dev = new devStorage.BabeInitializedStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeInitializedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeInitializedStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.BabeInitializedStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabeInitializedStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.BabeInitializedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeInitializedStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.BabeInitializedStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BabeInitializedStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BabeInitializedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeInitializedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeLatenessStorage extends StorageBase {
	private readonly production: productionStorage.BabeLatenessStorage
	private readonly stage: stageStorage.BabeLatenessStorage
	private readonly dev: devStorage.BabeLatenessStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeLatenessStorage(ctx, storage)
		this.stage = new stageStorage.BabeLatenessStorage(ctx, storage)
		this.dev = new devStorage.BabeLatenessStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeLatenessStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeLatenessStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeLatenessStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeLatenessStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeLatenessStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeLatenessStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeNextAuthoritiesStorage extends StorageBase {
	private readonly production: productionStorage.BabeNextAuthoritiesStorage
	private readonly stage: stageStorage.BabeNextAuthoritiesStorage
	private readonly dev: devStorage.BabeNextAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeNextAuthoritiesStorage(ctx, storage)
		this.stage = new stageStorage.BabeNextAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.BabeNextAuthoritiesStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeNextAuthoritiesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeNextAuthoritiesStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeNextAuthoritiesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeNextAuthoritiesStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeNextAuthoritiesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeNextAuthoritiesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeNextEpochConfigStorage extends StorageBase {
	private readonly production: productionStorage.BabeNextEpochConfigStorage
	private readonly stage: stageStorage.BabeNextEpochConfigStorage
	private readonly dev: devStorage.BabeNextEpochConfigStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeNextEpochConfigStorage(ctx, storage)
		this.stage = new stageStorage.BabeNextEpochConfigStorage(ctx, storage)
		this.dev = new devStorage.BabeNextEpochConfigStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeNextEpochConfigStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeNextEpochConfigStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.BabeNextEpochConfigStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabeNextEpochConfigStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.BabeNextEpochConfigStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeNextEpochConfigStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.BabeNextEpochConfigStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BabeNextEpochConfigStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BabeNextEpochConfigStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeNextEpochConfigStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeNextRandomnessStorage extends StorageBase {
	private readonly production: productionStorage.BabeNextRandomnessStorage
	private readonly stage: stageStorage.BabeNextRandomnessStorage
	private readonly dev: devStorage.BabeNextRandomnessStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeNextRandomnessStorage(ctx, storage)
		this.stage = new stageStorage.BabeNextRandomnessStorage(ctx, storage)
		this.dev = new devStorage.BabeNextRandomnessStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeNextRandomnessStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeNextRandomnessStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeNextRandomnessStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeNextRandomnessStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeNextRandomnessStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeNextRandomnessStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabePendingEpochConfigChangeStorage extends StorageBase {
	private readonly production: productionStorage.BabePendingEpochConfigChangeStorage
	private readonly stage: stageStorage.BabePendingEpochConfigChangeStorage
	private readonly dev: devStorage.BabePendingEpochConfigChangeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabePendingEpochConfigChangeStorage(ctx, storage)
		this.stage = new stageStorage.BabePendingEpochConfigChangeStorage(ctx, storage)
		this.dev = new devStorage.BabePendingEpochConfigChangeStorage(ctx, storage)
	}

	get isV42(): productionStorage.BabePendingEpochConfigChangeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BabePendingEpochConfigChangeStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BabePendingEpochConfigChangeStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BabePendingEpochConfigChangeStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BabePendingEpochConfigChangeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabePendingEpochConfigChangeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeRandomnessStorage extends StorageBase {
	private readonly production: productionStorage.BabeRandomnessStorage
	private readonly stage: stageStorage.BabeRandomnessStorage
	private readonly dev: devStorage.BabeRandomnessStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeRandomnessStorage(ctx, storage)
		this.stage = new stageStorage.BabeRandomnessStorage(ctx, storage)
		this.dev = new devStorage.BabeRandomnessStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeRandomnessStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeRandomnessStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeRandomnessStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeRandomnessStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeRandomnessStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeRandomnessStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeSegmentIndexStorage extends StorageBase {
	private readonly production: productionStorage.BabeSegmentIndexStorage
	private readonly stage: stageStorage.BabeSegmentIndexStorage
	private readonly dev: devStorage.BabeSegmentIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeSegmentIndexStorage(ctx, storage)
		this.stage = new stageStorage.BabeSegmentIndexStorage(ctx, storage)
		this.dev = new devStorage.BabeSegmentIndexStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeSegmentIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeSegmentIndexStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeSegmentIndexStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeSegmentIndexStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeSegmentIndexStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeSegmentIndexStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BabeUnderConstructionStorage extends StorageBase {
	private readonly production: productionStorage.BabeUnderConstructionStorage
	private readonly stage: stageStorage.BabeUnderConstructionStorage
	private readonly dev: devStorage.BabeUnderConstructionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BabeUnderConstructionStorage(ctx, storage)
		this.stage = new stageStorage.BabeUnderConstructionStorage(ctx, storage)
		this.dev = new devStorage.BabeUnderConstructionStorage(ctx, storage)
	}

	get isV1(): productionStorage.BabeUnderConstructionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BabeUnderConstructionStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BabeUnderConstructionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BabeUnderConstructionStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BabeUnderConstructionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BabeUnderConstructionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BagsListCounterForListNodesStorage extends StorageBase {
	private readonly production: productionStorage.BagsListCounterForListNodesStorage
	private readonly stage: stageStorage.BagsListCounterForListNodesStorage
	private readonly dev: devStorage.BagsListCounterForListNodesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BagsListCounterForListNodesStorage(ctx, storage)
		this.stage = new stageStorage.BagsListCounterForListNodesStorage(ctx, storage)
		this.dev = new devStorage.BagsListCounterForListNodesStorage(ctx, storage)
	}

	get isV42(): productionStorage.BagsListCounterForListNodesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BagsListCounterForListNodesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BagsListCounterForListNodesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BagsListCounterForListNodesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BagsListCounterForListNodesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BagsListCounterForListNodesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BagsListListBagsStorage extends StorageBase {
	private readonly production: productionStorage.BagsListListBagsStorage
	private readonly stage: stageStorage.BagsListListBagsStorage
	private readonly dev: devStorage.BagsListListBagsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BagsListListBagsStorage(ctx, storage)
		this.stage = new stageStorage.BagsListListBagsStorage(ctx, storage)
		this.dev = new devStorage.BagsListListBagsStorage(ctx, storage)
	}

	get isV42(): productionStorage.BagsListListBagsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BagsListListBagsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BagsListListBagsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BagsListListBagsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BagsListListBagsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BagsListListBagsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BagsListListNodesStorage extends StorageBase {
	private readonly production: productionStorage.BagsListListNodesStorage
	private readonly stage: stageStorage.BagsListListNodesStorage
	private readonly dev: devStorage.BagsListListNodesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BagsListListNodesStorage(ctx, storage)
		this.stage = new stageStorage.BagsListListNodesStorage(ctx, storage)
		this.dev = new devStorage.BagsListListNodesStorage(ctx, storage)
	}

	get isV42(): productionStorage.BagsListListNodesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BagsListListNodesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BagsListListNodesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BagsListListNodesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BagsListListNodesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BagsListListNodesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesAccountStorage extends StorageBase {
	private readonly production: productionStorage.BalancesAccountStorage
	private readonly stage: stageStorage.BalancesAccountStorage
	private readonly dev: devStorage.BalancesAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BalancesAccountStorage(ctx, storage)
		this.stage = new stageStorage.BalancesAccountStorage(ctx, storage)
		this.dev = new devStorage.BalancesAccountStorage(ctx, storage)
	}

	get isV1(): productionStorage.BalancesAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BalancesAccountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BalancesAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BalancesAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BalancesAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BalancesAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
	private readonly production: productionStorage.BalancesInactiveIssuanceStorage
	private readonly stage: stageStorage.BalancesInactiveIssuanceStorage
	private readonly dev: devStorage.BalancesInactiveIssuanceStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BalancesInactiveIssuanceStorage(ctx, storage)
		this.stage = new stageStorage.BalancesInactiveIssuanceStorage(ctx, storage)
		this.dev = new devStorage.BalancesInactiveIssuanceStorage(ctx, storage)
	}

	get isV53(): productionStorage.BalancesInactiveIssuanceStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.BalancesInactiveIssuanceStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV52(): stageStorage.BalancesInactiveIssuanceStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BalancesInactiveIssuanceStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BalancesInactiveIssuanceStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BalancesInactiveIssuanceStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesLocksStorage extends StorageBase {
	private readonly production: productionStorage.BalancesLocksStorage
	private readonly stage: stageStorage.BalancesLocksStorage
	private readonly dev: devStorage.BalancesLocksStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BalancesLocksStorage(ctx, storage)
		this.stage = new stageStorage.BalancesLocksStorage(ctx, storage)
		this.dev = new devStorage.BalancesLocksStorage(ctx, storage)
	}

	get isV1(): productionStorage.BalancesLocksStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BalancesLocksStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BalancesLocksStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BalancesLocksStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BalancesLocksStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BalancesLocksStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesReservesStorage extends StorageBase {
	private readonly production: productionStorage.BalancesReservesStorage
	private readonly stage: stageStorage.BalancesReservesStorage
	private readonly dev: devStorage.BalancesReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BalancesReservesStorage(ctx, storage)
		this.stage = new stageStorage.BalancesReservesStorage(ctx, storage)
		this.dev = new devStorage.BalancesReservesStorage(ctx, storage)
	}

	get isV42(): productionStorage.BalancesReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BalancesReservesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BalancesReservesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BalancesReservesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BalancesReservesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BalancesReservesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BalancesStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.BalancesStorageVersionStorage
	private readonly stage: stageStorage.BalancesStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BalancesStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.BalancesStorageVersionStorage(ctx, storage)
	}

	get isV1(): productionStorage.BalancesStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BalancesStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.BalancesStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BalancesStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.BalancesStorageVersionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BalancesStorageVersionStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.BalancesStorageVersionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BalancesStorageVersionStorage['asV42'] {
		return this.stage.asV42
	}
}

export class BalancesTotalIssuanceStorage extends StorageBase {
	private readonly production: productionStorage.BalancesTotalIssuanceStorage
	private readonly stage: stageStorage.BalancesTotalIssuanceStorage
	private readonly dev: devStorage.BalancesTotalIssuanceStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BalancesTotalIssuanceStorage(ctx, storage)
		this.stage = new stageStorage.BalancesTotalIssuanceStorage(ctx, storage)
		this.dev = new devStorage.BalancesTotalIssuanceStorage(ctx, storage)
	}

	get isV1(): productionStorage.BalancesTotalIssuanceStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BalancesTotalIssuanceStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BalancesTotalIssuanceStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BalancesTotalIssuanceStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BalancesTotalIssuanceStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BalancesTotalIssuanceStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BandDynamicFeeParametersStorage extends StorageBase {
	private readonly production: productionStorage.BandDynamicFeeParametersStorage
	private readonly stage: stageStorage.BandDynamicFeeParametersStorage
	private readonly dev: devStorage.BandDynamicFeeParametersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BandDynamicFeeParametersStorage(ctx, storage)
		this.stage = new stageStorage.BandDynamicFeeParametersStorage(ctx, storage)
		this.dev = new devStorage.BandDynamicFeeParametersStorage(ctx, storage)
	}

	get isV59(): productionStorage.BandDynamicFeeParametersStorage['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionStorage.BandDynamicFeeParametersStorage['asV59'] {
		return this.production.asV59
	}
	get isStageV59(): stageStorage.BandDynamicFeeParametersStorage['isV59'] {
		return this.stage.isV59
	}
	get asStageV59(): stageStorage.BandDynamicFeeParametersStorage['asV59'] {
		return this.stage.asV59
	}
	get isDevV60(): devStorage.BandDynamicFeeParametersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BandDynamicFeeParametersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BandSymbolCheckBlockStorage extends StorageBase {
	private readonly production: productionStorage.BandSymbolCheckBlockStorage
	private readonly stage: stageStorage.BandSymbolCheckBlockStorage
	private readonly dev: devStorage.BandSymbolCheckBlockStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BandSymbolCheckBlockStorage(ctx, storage)
		this.stage = new stageStorage.BandSymbolCheckBlockStorage(ctx, storage)
		this.dev = new devStorage.BandSymbolCheckBlockStorage(ctx, storage)
	}

	get isV60(): productionStorage.BandSymbolCheckBlockStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.BandSymbolCheckBlockStorage['asV60'] {
		return this.production.asV60
	}
	get isStageV60(): stageStorage.BandSymbolCheckBlockStorage['isV60'] {
		return this.stage.isV60
	}
	get asStageV60(): stageStorage.BandSymbolCheckBlockStorage['asV60'] {
		return this.stage.asV60
	}
	get isDevV60(): devStorage.BandSymbolCheckBlockStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BandSymbolCheckBlockStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BandSymbolRatesStorage extends StorageBase {
	private readonly production: productionStorage.BandSymbolRatesStorage
	private readonly stage: stageStorage.BandSymbolRatesStorage
	private readonly dev: devStorage.BandSymbolRatesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BandSymbolRatesStorage(ctx, storage)
		this.stage = new stageStorage.BandSymbolRatesStorage(ctx, storage)
		this.dev = new devStorage.BandSymbolRatesStorage(ctx, storage)
	}

	get isV45(): productionStorage.BandSymbolRatesStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.BandSymbolRatesStorage['asV45'] {
		return this.production.asV45
	}
	get isV59(): productionStorage.BandSymbolRatesStorage['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionStorage.BandSymbolRatesStorage['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionStorage.BandSymbolRatesStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.BandSymbolRatesStorage['asV60'] {
		return this.production.asV60
	}
	get isStageV44(): stageStorage.BandSymbolRatesStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.BandSymbolRatesStorage['asV44'] {
		return this.stage.asV44
	}
	get isStageV45(): stageStorage.BandSymbolRatesStorage['isV45'] {
		return this.stage.isV45
	}
	get asStageV45(): stageStorage.BandSymbolRatesStorage['asV45'] {
		return this.stage.asV45
	}
	get isStageV59(): stageStorage.BandSymbolRatesStorage['isV59'] {
		return this.stage.isV59
	}
	get asStageV59(): stageStorage.BandSymbolRatesStorage['asV59'] {
		return this.stage.asV59
	}
	get isStageV60(): stageStorage.BandSymbolRatesStorage['isV60'] {
		return this.stage.isV60
	}
	get asStageV60(): stageStorage.BandSymbolRatesStorage['asV60'] {
		return this.stage.asV60
	}
	get isDevV60(): devStorage.BandSymbolRatesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BandSymbolRatesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BandTrustedRelayersStorage extends StorageBase {
	private readonly production: productionStorage.BandTrustedRelayersStorage
	private readonly stage: stageStorage.BandTrustedRelayersStorage
	private readonly dev: devStorage.BandTrustedRelayersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BandTrustedRelayersStorage(ctx, storage)
		this.stage = new stageStorage.BandTrustedRelayersStorage(ctx, storage)
		this.dev = new devStorage.BandTrustedRelayersStorage(ctx, storage)
	}

	get isV45(): productionStorage.BandTrustedRelayersStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.BandTrustedRelayersStorage['asV45'] {
		return this.production.asV45
	}
	get isStageV44(): stageStorage.BandTrustedRelayersStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.BandTrustedRelayersStorage['asV44'] {
		return this.stage.asV44
	}
	get isDevV60(): devStorage.BandTrustedRelayersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BandTrustedRelayersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyAuthoritiesStorage extends StorageBase {
	private readonly production: productionStorage.BeefyAuthoritiesStorage
	private readonly stage: stageStorage.BeefyAuthoritiesStorage
	private readonly dev: devStorage.BeefyAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BeefyAuthoritiesStorage(ctx, storage)
		this.stage = new stageStorage.BeefyAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.BeefyAuthoritiesStorage(ctx, storage)
	}

	get isV42(): productionStorage.BeefyAuthoritiesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BeefyAuthoritiesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BeefyAuthoritiesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BeefyAuthoritiesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BeefyAuthoritiesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyAuthoritiesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyNextAuthoritiesStorage extends StorageBase {
	private readonly production: productionStorage.BeefyNextAuthoritiesStorage
	private readonly stage: stageStorage.BeefyNextAuthoritiesStorage
	private readonly dev: devStorage.BeefyNextAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BeefyNextAuthoritiesStorage(ctx, storage)
		this.stage = new stageStorage.BeefyNextAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.BeefyNextAuthoritiesStorage(ctx, storage)
	}

	get isV42(): productionStorage.BeefyNextAuthoritiesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BeefyNextAuthoritiesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BeefyNextAuthoritiesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BeefyNextAuthoritiesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BeefyNextAuthoritiesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyNextAuthoritiesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyValidatorSetIdStorage extends StorageBase {
	private readonly production: productionStorage.BeefyValidatorSetIdStorage
	private readonly stage: stageStorage.BeefyValidatorSetIdStorage
	private readonly dev: devStorage.BeefyValidatorSetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BeefyValidatorSetIdStorage(ctx, storage)
		this.stage = new stageStorage.BeefyValidatorSetIdStorage(ctx, storage)
		this.dev = new devStorage.BeefyValidatorSetIdStorage(ctx, storage)
	}

	get isV42(): productionStorage.BeefyValidatorSetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BeefyValidatorSetIdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.BeefyValidatorSetIdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BeefyValidatorSetIdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BeefyValidatorSetIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyValidatorSetIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigAccountsStorage extends StorageBase {
	private readonly production: productionStorage.BridgeMultisigAccountsStorage
	private readonly stage: stageStorage.BridgeMultisigAccountsStorage
	private readonly dev: devStorage.BridgeMultisigAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BridgeMultisigAccountsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeMultisigAccountsStorage(ctx, storage)
		this.dev = new devStorage.BridgeMultisigAccountsStorage(ctx, storage)
	}

	get isV1(): productionStorage.BridgeMultisigAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BridgeMultisigAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BridgeMultisigAccountsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BridgeMultisigAccountsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BridgeMultisigAccountsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeMultisigAccountsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigCallsStorage extends StorageBase {
	private readonly production: productionStorage.BridgeMultisigCallsStorage
	private readonly stage: stageStorage.BridgeMultisigCallsStorage
	private readonly dev: devStorage.BridgeMultisigCallsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BridgeMultisigCallsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeMultisigCallsStorage(ctx, storage)
		this.dev = new devStorage.BridgeMultisigCallsStorage(ctx, storage)
	}

	get isV1(): productionStorage.BridgeMultisigCallsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BridgeMultisigCallsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BridgeMultisigCallsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BridgeMultisigCallsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BridgeMultisigCallsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeMultisigCallsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigDispatchedCallsStorage extends StorageBase {
	private readonly production: productionStorage.BridgeMultisigDispatchedCallsStorage
	private readonly stage: stageStorage.BridgeMultisigDispatchedCallsStorage
	private readonly dev: devStorage.BridgeMultisigDispatchedCallsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BridgeMultisigDispatchedCallsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeMultisigDispatchedCallsStorage(ctx, storage)
		this.dev = new devStorage.BridgeMultisigDispatchedCallsStorage(ctx, storage)
	}

	get isV1(): productionStorage.BridgeMultisigDispatchedCallsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BridgeMultisigDispatchedCallsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.BridgeMultisigDispatchedCallsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BridgeMultisigDispatchedCallsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.BridgeMultisigDispatchedCallsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeMultisigDispatchedCallsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeMultisigMultisigsStorage extends StorageBase {
	private readonly production: productionStorage.BridgeMultisigMultisigsStorage
	private readonly stage: stageStorage.BridgeMultisigMultisigsStorage
	private readonly dev: devStorage.BridgeMultisigMultisigsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.BridgeMultisigMultisigsStorage(ctx, storage)
		this.stage = new stageStorage.BridgeMultisigMultisigsStorage(ctx, storage)
		this.dev = new devStorage.BridgeMultisigMultisigsStorage(ctx, storage)
	}

	get isV1(): productionStorage.BridgeMultisigMultisigsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.BridgeMultisigMultisigsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.BridgeMultisigMultisigsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.BridgeMultisigMultisigsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.BridgeMultisigMultisigsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.BridgeMultisigMultisigsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.BridgeMultisigMultisigsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.BridgeMultisigMultisigsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.BridgeMultisigMultisigsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeMultisigMultisigsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformPalletStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.CeresGovernancePlatformPalletStorageVersionStorage
	private readonly stage: stageStorage.CeresGovernancePlatformPalletStorageVersionStorage
	private readonly dev: devStorage.CeresGovernancePlatformPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.CeresGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.CeresGovernancePlatformPalletStorageVersionStorage(ctx, storage)
	}

	get isV37(): productionStorage.CeresGovernancePlatformPalletStorageVersionStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.CeresGovernancePlatformPalletStorageVersionStorage['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionStorage.CeresGovernancePlatformPalletStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresGovernancePlatformPalletStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV37(): stageStorage.CeresGovernancePlatformPalletStorageVersionStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.CeresGovernancePlatformPalletStorageVersionStorage['asV37'] {
		return this.stage.asV37
	}
	get isStageV42(): stageStorage.CeresGovernancePlatformPalletStorageVersionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CeresGovernancePlatformPalletStorageVersionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CeresGovernancePlatformPalletStorageVersionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresGovernancePlatformPalletStorageVersionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformPollDataStorage extends StorageBase {
	private readonly production: productionStorage.CeresGovernancePlatformPollDataStorage
	private readonly stage: stageStorage.CeresGovernancePlatformPollDataStorage
	private readonly dev: devStorage.CeresGovernancePlatformPollDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresGovernancePlatformPollDataStorage(ctx, storage)
		this.stage = new stageStorage.CeresGovernancePlatformPollDataStorage(ctx, storage)
		this.dev = new devStorage.CeresGovernancePlatformPollDataStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresGovernancePlatformPollDataStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresGovernancePlatformPollDataStorage['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionStorage.CeresGovernancePlatformPollDataStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresGovernancePlatformPollDataStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.CeresGovernancePlatformPollDataStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresGovernancePlatformPollDataStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresGovernancePlatformPollDataStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresGovernancePlatformPollDataStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresGovernancePlatformVotingStorage extends StorageBase {
	private readonly production: productionStorage.CeresGovernancePlatformVotingStorage
	private readonly stage: stageStorage.CeresGovernancePlatformVotingStorage
	private readonly dev: devStorage.CeresGovernancePlatformVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresGovernancePlatformVotingStorage(ctx, storage)
		this.stage = new stageStorage.CeresGovernancePlatformVotingStorage(ctx, storage)
		this.dev = new devStorage.CeresGovernancePlatformVotingStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresGovernancePlatformVotingStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresGovernancePlatformVotingStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresGovernancePlatformVotingStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresGovernancePlatformVotingStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresGovernancePlatformVotingStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresGovernancePlatformVotingStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadAuthorityAccountStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadAuthorityAccountStorage
	private readonly stage: stageStorage.CeresLaunchpadAuthorityAccountStorage
	private readonly dev: devStorage.CeresLaunchpadAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadAuthorityAccountStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresLaunchpadAuthorityAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadAuthorityAccountStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresLaunchpadAuthorityAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLaunchpadAuthorityAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLaunchpadAuthorityAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadAuthorityAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadCeresBurnFeeAmountStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadCeresBurnFeeAmountStorage
	private readonly stage: stageStorage.CeresLaunchpadCeresBurnFeeAmountStorage
	private readonly dev: devStorage.CeresLaunchpadCeresBurnFeeAmountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadCeresBurnFeeAmountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadCeresBurnFeeAmountStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadCeresBurnFeeAmountStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresLaunchpadCeresBurnFeeAmountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadCeresBurnFeeAmountStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresLaunchpadCeresBurnFeeAmountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLaunchpadCeresBurnFeeAmountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLaunchpadCeresBurnFeeAmountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadCeresBurnFeeAmountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadCeresForContributionInILOStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadCeresForContributionInILOStorage
	private readonly stage: stageStorage.CeresLaunchpadCeresForContributionInILOStorage
	private readonly dev: devStorage.CeresLaunchpadCeresForContributionInILOStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadCeresForContributionInILOStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadCeresForContributionInILOStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadCeresForContributionInILOStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresLaunchpadCeresForContributionInILOStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadCeresForContributionInILOStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresLaunchpadCeresForContributionInILOStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLaunchpadCeresForContributionInILOStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLaunchpadCeresForContributionInILOStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadCeresForContributionInILOStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadContributionsStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadContributionsStorage
	private readonly stage: stageStorage.CeresLaunchpadContributionsStorage
	private readonly dev: devStorage.CeresLaunchpadContributionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadContributionsStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadContributionsStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadContributionsStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresLaunchpadContributionsStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadContributionsStorage['asV26'] {
		return this.production.asV26
	}
	get isV42(): productionStorage.CeresLaunchpadContributionsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresLaunchpadContributionsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.CeresLaunchpadContributionsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLaunchpadContributionsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.CeresLaunchpadContributionsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CeresLaunchpadContributionsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CeresLaunchpadContributionsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadContributionsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadFeePercentOnRaisedFundsStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage
	private readonly stage: stageStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage
	private readonly dev: devStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage(ctx, storage)
	}

	get isV47(): productionStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage['asV47'] {
		return this.production.asV47
	}
	get isStageV47(): stageStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage['asV47'] {
		return this.stage.asV47
	}
	get isDevV60(): devStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadFeePercentOnRaisedFundsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadILOsStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadILOsStorage
	private readonly stage: stageStorage.CeresLaunchpadILOsStorage
	private readonly dev: devStorage.CeresLaunchpadILOsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadILOsStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadILOsStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadILOsStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresLaunchpadILOsStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadILOsStorage['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionStorage.CeresLaunchpadILOsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresLaunchpadILOsStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.CeresLaunchpadILOsStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.CeresLaunchpadILOsStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.CeresLaunchpadILOsStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.CeresLaunchpadILOsStorage['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionStorage.CeresLaunchpadILOsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresLaunchpadILOsStorage['asV42'] {
		return this.production.asV42
	}
	get isV47(): productionStorage.CeresLaunchpadILOsStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.CeresLaunchpadILOsStorage['asV47'] {
		return this.production.asV47
	}
	get isStageV33(): stageStorage.CeresLaunchpadILOsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLaunchpadILOsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV35(): stageStorage.CeresLaunchpadILOsStorage['isV35'] {
		return this.stage.isV35
	}
	get asStageV35(): stageStorage.CeresLaunchpadILOsStorage['asV35'] {
		return this.stage.asV35
	}
	get isStageV37(): stageStorage.CeresLaunchpadILOsStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.CeresLaunchpadILOsStorage['asV37'] {
		return this.stage.asV37
	}
	get isStageV42(): stageStorage.CeresLaunchpadILOsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CeresLaunchpadILOsStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV47(): stageStorage.CeresLaunchpadILOsStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.CeresLaunchpadILOsStorage['asV47'] {
		return this.stage.asV47
	}
	get isDevV60(): devStorage.CeresLaunchpadILOsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadILOsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadPenaltiesAccountStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadPenaltiesAccountStorage
	private readonly stage: stageStorage.CeresLaunchpadPenaltiesAccountStorage
	private readonly dev: devStorage.CeresLaunchpadPenaltiesAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadPenaltiesAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadPenaltiesAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadPenaltiesAccountStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresLaunchpadPenaltiesAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresLaunchpadPenaltiesAccountStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresLaunchpadPenaltiesAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLaunchpadPenaltiesAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLaunchpadPenaltiesAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadPenaltiesAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadWhitelistedContributorsStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadWhitelistedContributorsStorage
	private readonly stage: stageStorage.CeresLaunchpadWhitelistedContributorsStorage
	private readonly dev: devStorage.CeresLaunchpadWhitelistedContributorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadWhitelistedContributorsStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadWhitelistedContributorsStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadWhitelistedContributorsStorage(ctx, storage)
	}

	get isV33(): productionStorage.CeresLaunchpadWhitelistedContributorsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresLaunchpadWhitelistedContributorsStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.CeresLaunchpadWhitelistedContributorsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLaunchpadWhitelistedContributorsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLaunchpadWhitelistedContributorsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadWhitelistedContributorsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLaunchpadWhitelistedIloOrganizersStorage extends StorageBase {
	private readonly production: productionStorage.CeresLaunchpadWhitelistedIloOrganizersStorage
	private readonly stage: stageStorage.CeresLaunchpadWhitelistedIloOrganizersStorage
	private readonly dev: devStorage.CeresLaunchpadWhitelistedIloOrganizersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLaunchpadWhitelistedIloOrganizersStorage(ctx, storage)
		this.stage = new stageStorage.CeresLaunchpadWhitelistedIloOrganizersStorage(ctx, storage)
		this.dev = new devStorage.CeresLaunchpadWhitelistedIloOrganizersStorage(ctx, storage)
	}

	get isV33(): productionStorage.CeresLaunchpadWhitelistedIloOrganizersStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresLaunchpadWhitelistedIloOrganizersStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.CeresLaunchpadWhitelistedIloOrganizersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLaunchpadWhitelistedIloOrganizersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLaunchpadWhitelistedIloOrganizersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLaunchpadWhitelistedIloOrganizersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerAuthorityAccountStorage extends StorageBase {
	private readonly production: productionStorage.CeresLiquidityLockerAuthorityAccountStorage
	private readonly stage: stageStorage.CeresLiquidityLockerAuthorityAccountStorage
	private readonly dev: devStorage.CeresLiquidityLockerAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLiquidityLockerAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerAuthorityAccountStorage(ctx, storage)
	}

	get isV22(): productionStorage.CeresLiquidityLockerAuthorityAccountStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerAuthorityAccountStorage['asV22'] {
		return this.production.asV22
	}
	get isStageV33(): stageStorage.CeresLiquidityLockerAuthorityAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLiquidityLockerAuthorityAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLiquidityLockerAuthorityAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLiquidityLockerAuthorityAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerFeesOptionOneAccountStorage extends StorageBase {
	private readonly production: productionStorage.CeresLiquidityLockerFeesOptionOneAccountStorage
	private readonly stage: stageStorage.CeresLiquidityLockerFeesOptionOneAccountStorage
	private readonly dev: devStorage.CeresLiquidityLockerFeesOptionOneAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLiquidityLockerFeesOptionOneAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerFeesOptionOneAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerFeesOptionOneAccountStorage(ctx, storage)
	}

	get isV22(): productionStorage.CeresLiquidityLockerFeesOptionOneAccountStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerFeesOptionOneAccountStorage['asV22'] {
		return this.production.asV22
	}
	get isStageV33(): stageStorage.CeresLiquidityLockerFeesOptionOneAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLiquidityLockerFeesOptionOneAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLiquidityLockerFeesOptionOneAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLiquidityLockerFeesOptionOneAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerFeesOptionTwoAccountStorage extends StorageBase {
	private readonly production: productionStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage
	private readonly stage: stageStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage
	private readonly dev: devStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage(ctx, storage)
	}

	get isV22(): productionStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage['asV22'] {
		return this.production.asV22
	}
	get isStageV33(): stageStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLiquidityLockerFeesOptionTwoAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerFeesOptionTwoCeresAmountStorage extends StorageBase {
	private readonly production: productionStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage
	private readonly stage: stageStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage
	private readonly dev: devStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage(ctx, storage)
	}

	get isV22(): productionStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage['asV22'] {
		return this.production.asV22
	}
	get isStageV33(): stageStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLiquidityLockerFeesOptionTwoCeresAmountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerLockerDataStorage extends StorageBase {
	private readonly production: productionStorage.CeresLiquidityLockerLockerDataStorage
	private readonly stage: stageStorage.CeresLiquidityLockerLockerDataStorage
	private readonly dev: devStorage.CeresLiquidityLockerLockerDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLiquidityLockerLockerDataStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerLockerDataStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerLockerDataStorage(ctx, storage)
	}

	get isV22(): productionStorage.CeresLiquidityLockerLockerDataStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.CeresLiquidityLockerLockerDataStorage['asV22'] {
		return this.production.asV22
	}
	get isV33(): productionStorage.CeresLiquidityLockerLockerDataStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresLiquidityLockerLockerDataStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.CeresLiquidityLockerLockerDataStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresLiquidityLockerLockerDataStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.CeresLiquidityLockerLockerDataStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresLiquidityLockerLockerDataStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.CeresLiquidityLockerLockerDataStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CeresLiquidityLockerLockerDataStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CeresLiquidityLockerLockerDataStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLiquidityLockerLockerDataStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresLiquidityLockerPalletStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.CeresLiquidityLockerPalletStorageVersionStorage
	private readonly stage: stageStorage.CeresLiquidityLockerPalletStorageVersionStorage
	private readonly dev: devStorage.CeresLiquidityLockerPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresLiquidityLockerPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.CeresLiquidityLockerPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.CeresLiquidityLockerPalletStorageVersionStorage(ctx, storage)
	}

	get isV37(): productionStorage.CeresLiquidityLockerPalletStorageVersionStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.CeresLiquidityLockerPalletStorageVersionStorage['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionStorage.CeresLiquidityLockerPalletStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresLiquidityLockerPalletStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV37(): stageStorage.CeresLiquidityLockerPalletStorageVersionStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.CeresLiquidityLockerPalletStorageVersionStorage['asV37'] {
		return this.stage.asV37
	}
	get isStageV42(): stageStorage.CeresLiquidityLockerPalletStorageVersionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CeresLiquidityLockerPalletStorageVersionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CeresLiquidityLockerPalletStorageVersionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresLiquidityLockerPalletStorageVersionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingAuthorityAccountStorage extends StorageBase {
	private readonly production: productionStorage.CeresStakingAuthorityAccountStorage
	private readonly stage: stageStorage.CeresStakingAuthorityAccountStorage
	private readonly dev: devStorage.CeresStakingAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresStakingAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresStakingAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresStakingAuthorityAccountStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresStakingAuthorityAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresStakingAuthorityAccountStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresStakingAuthorityAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresStakingAuthorityAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresStakingAuthorityAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresStakingAuthorityAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingRewardsRemainingStorage extends StorageBase {
	private readonly production: productionStorage.CeresStakingRewardsRemainingStorage
	private readonly stage: stageStorage.CeresStakingRewardsRemainingStorage
	private readonly dev: devStorage.CeresStakingRewardsRemainingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresStakingRewardsRemainingStorage(ctx, storage)
		this.stage = new stageStorage.CeresStakingRewardsRemainingStorage(ctx, storage)
		this.dev = new devStorage.CeresStakingRewardsRemainingStorage(ctx, storage)
	}

	get isV19(): productionStorage.CeresStakingRewardsRemainingStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.CeresStakingRewardsRemainingStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.CeresStakingRewardsRemainingStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresStakingRewardsRemainingStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresStakingRewardsRemainingStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresStakingRewardsRemainingStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingStakersStorage extends StorageBase {
	private readonly production: productionStorage.CeresStakingStakersStorage
	private readonly stage: stageStorage.CeresStakingStakersStorage
	private readonly dev: devStorage.CeresStakingStakersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresStakingStakersStorage(ctx, storage)
		this.stage = new stageStorage.CeresStakingStakersStorage(ctx, storage)
		this.dev = new devStorage.CeresStakingStakersStorage(ctx, storage)
	}

	get isV19(): productionStorage.CeresStakingStakersStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.CeresStakingStakersStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.CeresStakingStakersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresStakingStakersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresStakingStakersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresStakingStakersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresStakingTotalDepositedStorage extends StorageBase {
	private readonly production: productionStorage.CeresStakingTotalDepositedStorage
	private readonly stage: stageStorage.CeresStakingTotalDepositedStorage
	private readonly dev: devStorage.CeresStakingTotalDepositedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresStakingTotalDepositedStorage(ctx, storage)
		this.stage = new stageStorage.CeresStakingTotalDepositedStorage(ctx, storage)
		this.dev = new devStorage.CeresStakingTotalDepositedStorage(ctx, storage)
	}

	get isV19(): productionStorage.CeresStakingTotalDepositedStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.CeresStakingTotalDepositedStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.CeresStakingTotalDepositedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresStakingTotalDepositedStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresStakingTotalDepositedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresStakingTotalDepositedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerAuthorityAccountStorage extends StorageBase {
	private readonly production: productionStorage.CeresTokenLockerAuthorityAccountStorage
	private readonly stage: stageStorage.CeresTokenLockerAuthorityAccountStorage
	private readonly dev: devStorage.CeresTokenLockerAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresTokenLockerAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerAuthorityAccountStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresTokenLockerAuthorityAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresTokenLockerAuthorityAccountStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresTokenLockerAuthorityAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresTokenLockerAuthorityAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresTokenLockerAuthorityAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresTokenLockerAuthorityAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerFeeAmountStorage extends StorageBase {
	private readonly production: productionStorage.CeresTokenLockerFeeAmountStorage
	private readonly stage: stageStorage.CeresTokenLockerFeeAmountStorage
	private readonly dev: devStorage.CeresTokenLockerFeeAmountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresTokenLockerFeeAmountStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerFeeAmountStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerFeeAmountStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresTokenLockerFeeAmountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresTokenLockerFeeAmountStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresTokenLockerFeeAmountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresTokenLockerFeeAmountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresTokenLockerFeeAmountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresTokenLockerFeeAmountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerFeesAccountStorage extends StorageBase {
	private readonly production: productionStorage.CeresTokenLockerFeesAccountStorage
	private readonly stage: stageStorage.CeresTokenLockerFeesAccountStorage
	private readonly dev: devStorage.CeresTokenLockerFeesAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresTokenLockerFeesAccountStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerFeesAccountStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerFeesAccountStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresTokenLockerFeesAccountStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresTokenLockerFeesAccountStorage['asV26'] {
		return this.production.asV26
	}
	get isStageV33(): stageStorage.CeresTokenLockerFeesAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresTokenLockerFeesAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.CeresTokenLockerFeesAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresTokenLockerFeesAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerPalletStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.CeresTokenLockerPalletStorageVersionStorage
	private readonly stage: stageStorage.CeresTokenLockerPalletStorageVersionStorage
	private readonly dev: devStorage.CeresTokenLockerPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresTokenLockerPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerPalletStorageVersionStorage(ctx, storage)
	}

	get isV37(): productionStorage.CeresTokenLockerPalletStorageVersionStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.CeresTokenLockerPalletStorageVersionStorage['asV37'] {
		return this.production.asV37
	}
	get isV42(): productionStorage.CeresTokenLockerPalletStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresTokenLockerPalletStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV37(): stageStorage.CeresTokenLockerPalletStorageVersionStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.CeresTokenLockerPalletStorageVersionStorage['asV37'] {
		return this.stage.asV37
	}
	get isStageV42(): stageStorage.CeresTokenLockerPalletStorageVersionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CeresTokenLockerPalletStorageVersionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CeresTokenLockerPalletStorageVersionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresTokenLockerPalletStorageVersionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CeresTokenLockerTokenLockerDataStorage extends StorageBase {
	private readonly production: productionStorage.CeresTokenLockerTokenLockerDataStorage
	private readonly stage: stageStorage.CeresTokenLockerTokenLockerDataStorage
	private readonly dev: devStorage.CeresTokenLockerTokenLockerDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CeresTokenLockerTokenLockerDataStorage(ctx, storage)
		this.stage = new stageStorage.CeresTokenLockerTokenLockerDataStorage(ctx, storage)
		this.dev = new devStorage.CeresTokenLockerTokenLockerDataStorage(ctx, storage)
	}

	get isV26(): productionStorage.CeresTokenLockerTokenLockerDataStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.CeresTokenLockerTokenLockerDataStorage['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionStorage.CeresTokenLockerTokenLockerDataStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.CeresTokenLockerTokenLockerDataStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.CeresTokenLockerTokenLockerDataStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CeresTokenLockerTokenLockerDataStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.CeresTokenLockerTokenLockerDataStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.CeresTokenLockerTokenLockerDataStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.CeresTokenLockerTokenLockerDataStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CeresTokenLockerTokenLockerDataStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CeresTokenLockerTokenLockerDataStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CeresTokenLockerTokenLockerDataStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilMembersStorage extends StorageBase {
	private readonly production: productionStorage.CouncilMembersStorage
	private readonly stage: stageStorage.CouncilMembersStorage
	private readonly dev: devStorage.CouncilMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CouncilMembersStorage(ctx, storage)
		this.stage = new stageStorage.CouncilMembersStorage(ctx, storage)
		this.dev = new devStorage.CouncilMembersStorage(ctx, storage)
	}

	get isV42(): productionStorage.CouncilMembersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilMembersStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.CouncilMembersStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CouncilMembersStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CouncilMembersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CouncilMembersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilPrimeStorage extends StorageBase {
	private readonly production: productionStorage.CouncilPrimeStorage
	private readonly stage: stageStorage.CouncilPrimeStorage
	private readonly dev: devStorage.CouncilPrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CouncilPrimeStorage(ctx, storage)
		this.stage = new stageStorage.CouncilPrimeStorage(ctx, storage)
		this.dev = new devStorage.CouncilPrimeStorage(ctx, storage)
	}

	get isV42(): productionStorage.CouncilPrimeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilPrimeStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.CouncilPrimeStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CouncilPrimeStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CouncilPrimeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CouncilPrimeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilProposalCountStorage extends StorageBase {
	private readonly production: productionStorage.CouncilProposalCountStorage
	private readonly stage: stageStorage.CouncilProposalCountStorage
	private readonly dev: devStorage.CouncilProposalCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CouncilProposalCountStorage(ctx, storage)
		this.stage = new stageStorage.CouncilProposalCountStorage(ctx, storage)
		this.dev = new devStorage.CouncilProposalCountStorage(ctx, storage)
	}

	get isV42(): productionStorage.CouncilProposalCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilProposalCountStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.CouncilProposalCountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CouncilProposalCountStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CouncilProposalCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CouncilProposalCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilProposalOfStorage extends StorageBase {
	private readonly production: productionStorage.CouncilProposalOfStorage
	private readonly stage: stageStorage.CouncilProposalOfStorage
	private readonly dev: devStorage.CouncilProposalOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CouncilProposalOfStorage(ctx, storage)
		this.stage = new stageStorage.CouncilProposalOfStorage(ctx, storage)
		this.dev = new devStorage.CouncilProposalOfStorage(ctx, storage)
	}

	get isV42(): productionStorage.CouncilProposalOfStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilProposalOfStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.CouncilProposalOfStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.CouncilProposalOfStorage['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionStorage.CouncilProposalOfStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.CouncilProposalOfStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.CouncilProposalOfStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.CouncilProposalOfStorage['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionStorage.CouncilProposalOfStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.CouncilProposalOfStorage['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionStorage.CouncilProposalOfStorage['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionStorage.CouncilProposalOfStorage['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionStorage.CouncilProposalOfStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.CouncilProposalOfStorage['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionStorage.CouncilProposalOfStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.CouncilProposalOfStorage['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionStorage.CouncilProposalOfStorage['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionStorage.CouncilProposalOfStorage['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionStorage.CouncilProposalOfStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.CouncilProposalOfStorage['asV60'] {
		return this.production.asV60
	}
	get isStageV42(): stageStorage.CouncilProposalOfStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CouncilProposalOfStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV43(): stageStorage.CouncilProposalOfStorage['isV43'] {
		return this.stage.isV43
	}
	get asStageV43(): stageStorage.CouncilProposalOfStorage['asV43'] {
		return this.stage.asV43
	}
	get isStageV44(): stageStorage.CouncilProposalOfStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.CouncilProposalOfStorage['asV44'] {
		return this.stage.asV44
	}
	get isStageV45(): stageStorage.CouncilProposalOfStorage['isV45'] {
		return this.stage.isV45
	}
	get asStageV45(): stageStorage.CouncilProposalOfStorage['asV45'] {
		return this.stage.asV45
	}
	get isStageV46(): stageStorage.CouncilProposalOfStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.CouncilProposalOfStorage['asV46'] {
		return this.stage.asV46
	}
	get isStageV47(): stageStorage.CouncilProposalOfStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.CouncilProposalOfStorage['asV47'] {
		return this.stage.asV47
	}
	get isStageV48(): stageStorage.CouncilProposalOfStorage['isV48'] {
		return this.stage.isV48
	}
	get asStageV48(): stageStorage.CouncilProposalOfStorage['asV48'] {
		return this.stage.asV48
	}
	get isStageV52(): stageStorage.CouncilProposalOfStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.CouncilProposalOfStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV54(): stageStorage.CouncilProposalOfStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.CouncilProposalOfStorage['asV54'] {
		return this.stage.asV54
	}
	get isStageV55(): stageStorage.CouncilProposalOfStorage['isV55'] {
		return this.stage.isV55
	}
	get asStageV55(): stageStorage.CouncilProposalOfStorage['asV55'] {
		return this.stage.asV55
	}
	get isStageV57(): stageStorage.CouncilProposalOfStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.CouncilProposalOfStorage['asV57'] {
		return this.stage.asV57
	}
	get isStageV59(): stageStorage.CouncilProposalOfStorage['isV59'] {
		return this.stage.isV59
	}
	get asStageV59(): stageStorage.CouncilProposalOfStorage['asV59'] {
		return this.stage.asV59
	}
	get isStageV60(): stageStorage.CouncilProposalOfStorage['isV60'] {
		return this.stage.isV60
	}
	get asStageV60(): stageStorage.CouncilProposalOfStorage['asV60'] {
		return this.stage.asV60
	}
	get isDevV60(): devStorage.CouncilProposalOfStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CouncilProposalOfStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilProposalsStorage extends StorageBase {
	private readonly production: productionStorage.CouncilProposalsStorage
	private readonly stage: stageStorage.CouncilProposalsStorage
	private readonly dev: devStorage.CouncilProposalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CouncilProposalsStorage(ctx, storage)
		this.stage = new stageStorage.CouncilProposalsStorage(ctx, storage)
		this.dev = new devStorage.CouncilProposalsStorage(ctx, storage)
	}

	get isV42(): productionStorage.CouncilProposalsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilProposalsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.CouncilProposalsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CouncilProposalsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CouncilProposalsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CouncilProposalsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class CouncilVotingStorage extends StorageBase {
	private readonly production: productionStorage.CouncilVotingStorage
	private readonly stage: stageStorage.CouncilVotingStorage
	private readonly dev: devStorage.CouncilVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.CouncilVotingStorage(ctx, storage)
		this.stage = new stageStorage.CouncilVotingStorage(ctx, storage)
		this.dev = new devStorage.CouncilVotingStorage(ctx, storage)
	}

	get isV42(): productionStorage.CouncilVotingStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.CouncilVotingStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.CouncilVotingStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.CouncilVotingStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.CouncilVotingStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.CouncilVotingStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DEXAPIEnabledSourceTypesStorage extends StorageBase {
	private readonly production: productionStorage.DEXAPIEnabledSourceTypesStorage
	private readonly stage: stageStorage.DEXAPIEnabledSourceTypesStorage
	private readonly dev: devStorage.DEXAPIEnabledSourceTypesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DEXAPIEnabledSourceTypesStorage(ctx, storage)
		this.stage = new stageStorage.DEXAPIEnabledSourceTypesStorage(ctx, storage)
		this.dev = new devStorage.DEXAPIEnabledSourceTypesStorage(ctx, storage)
	}

	get isV1(): productionStorage.DEXAPIEnabledSourceTypesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DEXAPIEnabledSourceTypesStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.DEXAPIEnabledSourceTypesStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DEXAPIEnabledSourceTypesStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.DEXAPIEnabledSourceTypesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DEXAPIEnabledSourceTypesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.DEXAPIEnabledSourceTypesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DEXAPIEnabledSourceTypesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.DEXAPIEnabledSourceTypesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DEXAPIEnabledSourceTypesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.DEXAPIEnabledSourceTypesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DEXAPIEnabledSourceTypesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DEXManagerDEXInfosStorage extends StorageBase {
	private readonly production: productionStorage.DEXManagerDEXInfosStorage
	private readonly stage: stageStorage.DEXManagerDEXInfosStorage
	private readonly dev: devStorage.DEXManagerDEXInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DEXManagerDEXInfosStorage(ctx, storage)
		this.stage = new stageStorage.DEXManagerDEXInfosStorage(ctx, storage)
		this.dev = new devStorage.DEXManagerDEXInfosStorage(ctx, storage)
	}

	get isV1(): productionStorage.DEXManagerDEXInfosStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DEXManagerDEXInfosStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DEXManagerDEXInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DEXManagerDEXInfosStorage['asV42'] {
		return this.production.asV42
	}
	get isV45(): productionStorage.DEXManagerDEXInfosStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.DEXManagerDEXInfosStorage['asV45'] {
		return this.production.asV45
	}
	get isStageV33(): stageStorage.DEXManagerDEXInfosStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DEXManagerDEXInfosStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.DEXManagerDEXInfosStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DEXManagerDEXInfosStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV44(): stageStorage.DEXManagerDEXInfosStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.DEXManagerDEXInfosStorage['asV44'] {
		return this.stage.asV44
	}
	get isDevV60(): devStorage.DEXManagerDEXInfosStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DEXManagerDEXInfosStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformAuthorityAccountStorage extends StorageBase {
	private readonly production: productionStorage.DemeterFarmingPlatformAuthorityAccountStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformAuthorityAccountStorage
	private readonly dev: devStorage.DemeterFarmingPlatformAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemeterFarmingPlatformAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformAuthorityAccountStorage(ctx, storage)
	}

	get isV33(): productionStorage.DemeterFarmingPlatformAuthorityAccountStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformAuthorityAccountStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.DemeterFarmingPlatformAuthorityAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemeterFarmingPlatformAuthorityAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemeterFarmingPlatformAuthorityAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemeterFarmingPlatformAuthorityAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformFeeAccountStorage extends StorageBase {
	private readonly production: productionStorage.DemeterFarmingPlatformFeeAccountStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformFeeAccountStorage
	private readonly dev: devStorage.DemeterFarmingPlatformFeeAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemeterFarmingPlatformFeeAccountStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformFeeAccountStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformFeeAccountStorage(ctx, storage)
	}

	get isV33(): productionStorage.DemeterFarmingPlatformFeeAccountStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformFeeAccountStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.DemeterFarmingPlatformFeeAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemeterFarmingPlatformFeeAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemeterFarmingPlatformFeeAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemeterFarmingPlatformFeeAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformPalletStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.DemeterFarmingPlatformPalletStorageVersionStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformPalletStorageVersionStorage
	private readonly dev: devStorage.DemeterFarmingPlatformPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemeterFarmingPlatformPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformPalletStorageVersionStorage(ctx, storage)
	}

	get isV43(): productionStorage.DemeterFarmingPlatformPalletStorageVersionStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.DemeterFarmingPlatformPalletStorageVersionStorage['asV43'] {
		return this.production.asV43
	}
	get isStageV43(): stageStorage.DemeterFarmingPlatformPalletStorageVersionStorage['isV43'] {
		return this.stage.isV43
	}
	get asStageV43(): stageStorage.DemeterFarmingPlatformPalletStorageVersionStorage['asV43'] {
		return this.stage.asV43
	}
	get isDevV60(): devStorage.DemeterFarmingPlatformPalletStorageVersionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemeterFarmingPlatformPalletStorageVersionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformPoolsStorage extends StorageBase {
	private readonly production: productionStorage.DemeterFarmingPlatformPoolsStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformPoolsStorage
	private readonly dev: devStorage.DemeterFarmingPlatformPoolsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemeterFarmingPlatformPoolsStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformPoolsStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformPoolsStorage(ctx, storage)
	}

	get isV33(): productionStorage.DemeterFarmingPlatformPoolsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformPoolsStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.DemeterFarmingPlatformPoolsStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.DemeterFarmingPlatformPoolsStorage['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionStorage.DemeterFarmingPlatformPoolsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemeterFarmingPlatformPoolsStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.DemeterFarmingPlatformPoolsStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.DemeterFarmingPlatformPoolsStorage['asV43'] {
		return this.production.asV43
	}
	get isStageV33(): stageStorage.DemeterFarmingPlatformPoolsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemeterFarmingPlatformPoolsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV35(): stageStorage.DemeterFarmingPlatformPoolsStorage['isV35'] {
		return this.stage.isV35
	}
	get asStageV35(): stageStorage.DemeterFarmingPlatformPoolsStorage['asV35'] {
		return this.stage.asV35
	}
	get isStageV42(): stageStorage.DemeterFarmingPlatformPoolsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DemeterFarmingPlatformPoolsStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV43(): stageStorage.DemeterFarmingPlatformPoolsStorage['isV43'] {
		return this.stage.isV43
	}
	get asStageV43(): stageStorage.DemeterFarmingPlatformPoolsStorage['asV43'] {
		return this.stage.asV43
	}
	get isDevV60(): devStorage.DemeterFarmingPlatformPoolsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemeterFarmingPlatformPoolsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformTokenInfosStorage extends StorageBase {
	private readonly production: productionStorage.DemeterFarmingPlatformTokenInfosStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformTokenInfosStorage
	private readonly dev: devStorage.DemeterFarmingPlatformTokenInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemeterFarmingPlatformTokenInfosStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformTokenInfosStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformTokenInfosStorage(ctx, storage)
	}

	get isV33(): productionStorage.DemeterFarmingPlatformTokenInfosStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformTokenInfosStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.DemeterFarmingPlatformTokenInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemeterFarmingPlatformTokenInfosStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.DemeterFarmingPlatformTokenInfosStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemeterFarmingPlatformTokenInfosStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.DemeterFarmingPlatformTokenInfosStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DemeterFarmingPlatformTokenInfosStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.DemeterFarmingPlatformTokenInfosStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemeterFarmingPlatformTokenInfosStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemeterFarmingPlatformUserInfosStorage extends StorageBase {
	private readonly production: productionStorage.DemeterFarmingPlatformUserInfosStorage
	private readonly stage: stageStorage.DemeterFarmingPlatformUserInfosStorage
	private readonly dev: devStorage.DemeterFarmingPlatformUserInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemeterFarmingPlatformUserInfosStorage(ctx, storage)
		this.stage = new stageStorage.DemeterFarmingPlatformUserInfosStorage(ctx, storage)
		this.dev = new devStorage.DemeterFarmingPlatformUserInfosStorage(ctx, storage)
	}

	get isV33(): productionStorage.DemeterFarmingPlatformUserInfosStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.DemeterFarmingPlatformUserInfosStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.DemeterFarmingPlatformUserInfosStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.DemeterFarmingPlatformUserInfosStorage['asV35'] {
		return this.production.asV35
	}
	get isV42(): productionStorage.DemeterFarmingPlatformUserInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemeterFarmingPlatformUserInfosStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.DemeterFarmingPlatformUserInfosStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.DemeterFarmingPlatformUserInfosStorage['asV43'] {
		return this.production.asV43
	}
	get isStageV33(): stageStorage.DemeterFarmingPlatformUserInfosStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemeterFarmingPlatformUserInfosStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV35(): stageStorage.DemeterFarmingPlatformUserInfosStorage['isV35'] {
		return this.stage.isV35
	}
	get asStageV35(): stageStorage.DemeterFarmingPlatformUserInfosStorage['asV35'] {
		return this.stage.asV35
	}
	get isStageV42(): stageStorage.DemeterFarmingPlatformUserInfosStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DemeterFarmingPlatformUserInfosStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV43(): stageStorage.DemeterFarmingPlatformUserInfosStorage['isV43'] {
		return this.stage.isV43
	}
	get asStageV43(): stageStorage.DemeterFarmingPlatformUserInfosStorage['asV43'] {
		return this.stage.asV43
	}
	get isDevV60(): devStorage.DemeterFarmingPlatformUserInfosStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemeterFarmingPlatformUserInfosStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyBlacklistStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyBlacklistStorage
	private readonly stage: stageStorage.DemocracyBlacklistStorage
	private readonly dev: devStorage.DemocracyBlacklistStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyBlacklistStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyBlacklistStorage(ctx, storage)
		this.dev = new devStorage.DemocracyBlacklistStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyBlacklistStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyBlacklistStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.DemocracyBlacklistStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyBlacklistStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemocracyBlacklistStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyBlacklistStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyCancellationsStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyCancellationsStorage
	private readonly stage: stageStorage.DemocracyCancellationsStorage
	private readonly dev: devStorage.DemocracyCancellationsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyCancellationsStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyCancellationsStorage(ctx, storage)
		this.dev = new devStorage.DemocracyCancellationsStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyCancellationsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyCancellationsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.DemocracyCancellationsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyCancellationsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemocracyCancellationsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyCancellationsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyDepositOfStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyDepositOfStorage
	private readonly stage: stageStorage.DemocracyDepositOfStorage
	private readonly dev: devStorage.DemocracyDepositOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyDepositOfStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyDepositOfStorage(ctx, storage)
		this.dev = new devStorage.DemocracyDepositOfStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyDepositOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyDepositOfStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.DemocracyDepositOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyDepositOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemocracyDepositOfStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyDepositOfStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyLastTabledWasExternalStorage
	private readonly stage: stageStorage.DemocracyLastTabledWasExternalStorage
	private readonly dev: devStorage.DemocracyLastTabledWasExternalStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyLastTabledWasExternalStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyLastTabledWasExternalStorage(ctx, storage)
		this.dev = new devStorage.DemocracyLastTabledWasExternalStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyLastTabledWasExternalStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyLastTabledWasExternalStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.DemocracyLastTabledWasExternalStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyLastTabledWasExternalStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemocracyLastTabledWasExternalStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyLastTabledWasExternalStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyLocksStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyLocksStorage
	private readonly stage: stageStorage.DemocracyLocksStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyLocksStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyLocksStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyLocksStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyLocksStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.DemocracyLocksStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyLocksStorage['asV33'] {
		return this.stage.asV33
	}
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyLowestUnbakedStorage
	private readonly stage: stageStorage.DemocracyLowestUnbakedStorage
	private readonly dev: devStorage.DemocracyLowestUnbakedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyLowestUnbakedStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyLowestUnbakedStorage(ctx, storage)
		this.dev = new devStorage.DemocracyLowestUnbakedStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyLowestUnbakedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyLowestUnbakedStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.DemocracyLowestUnbakedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyLowestUnbakedStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemocracyLowestUnbakedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyLowestUnbakedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyNextExternalStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyNextExternalStorage
	private readonly stage: stageStorage.DemocracyNextExternalStorage
	private readonly dev: devStorage.DemocracyNextExternalStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyNextExternalStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyNextExternalStorage(ctx, storage)
		this.dev = new devStorage.DemocracyNextExternalStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyNextExternalStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyNextExternalStorage['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionStorage.DemocracyNextExternalStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.DemocracyNextExternalStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV33(): stageStorage.DemocracyNextExternalStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyNextExternalStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV52(): stageStorage.DemocracyNextExternalStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.DemocracyNextExternalStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.DemocracyNextExternalStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyNextExternalStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyPreimagesStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyPreimagesStorage
	private readonly stage: stageStorage.DemocracyPreimagesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyPreimagesStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyPreimagesStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyPreimagesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyPreimagesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DemocracyPreimagesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemocracyPreimagesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.DemocracyPreimagesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyPreimagesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.DemocracyPreimagesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DemocracyPreimagesStorage['asV42'] {
		return this.stage.asV42
	}
}

export class DemocracyPublicPropCountStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyPublicPropCountStorage
	private readonly stage: stageStorage.DemocracyPublicPropCountStorage
	private readonly dev: devStorage.DemocracyPublicPropCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyPublicPropCountStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyPublicPropCountStorage(ctx, storage)
		this.dev = new devStorage.DemocracyPublicPropCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyPublicPropCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyPublicPropCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.DemocracyPublicPropCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyPublicPropCountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemocracyPublicPropCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyPublicPropCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyPublicPropsStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyPublicPropsStorage
	private readonly stage: stageStorage.DemocracyPublicPropsStorage
	private readonly dev: devStorage.DemocracyPublicPropsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyPublicPropsStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyPublicPropsStorage(ctx, storage)
		this.dev = new devStorage.DemocracyPublicPropsStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyPublicPropsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyPublicPropsStorage['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionStorage.DemocracyPublicPropsStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.DemocracyPublicPropsStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV33(): stageStorage.DemocracyPublicPropsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyPublicPropsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV52(): stageStorage.DemocracyPublicPropsStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.DemocracyPublicPropsStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.DemocracyPublicPropsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyPublicPropsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyReferendumCountStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyReferendumCountStorage
	private readonly stage: stageStorage.DemocracyReferendumCountStorage
	private readonly dev: devStorage.DemocracyReferendumCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyReferendumCountStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyReferendumCountStorage(ctx, storage)
		this.dev = new devStorage.DemocracyReferendumCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyReferendumCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyReferendumCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.DemocracyReferendumCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyReferendumCountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.DemocracyReferendumCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyReferendumCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyReferendumInfoOfStorage
	private readonly stage: stageStorage.DemocracyReferendumInfoOfStorage
	private readonly dev: devStorage.DemocracyReferendumInfoOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyReferendumInfoOfStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyReferendumInfoOfStorage(ctx, storage)
		this.dev = new devStorage.DemocracyReferendumInfoOfStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyReferendumInfoOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyReferendumInfoOfStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DemocracyReferendumInfoOfStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemocracyReferendumInfoOfStorage['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionStorage.DemocracyReferendumInfoOfStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.DemocracyReferendumInfoOfStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV33(): stageStorage.DemocracyReferendumInfoOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyReferendumInfoOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.DemocracyReferendumInfoOfStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DemocracyReferendumInfoOfStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV52(): stageStorage.DemocracyReferendumInfoOfStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.DemocracyReferendumInfoOfStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.DemocracyReferendumInfoOfStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyReferendumInfoOfStorage['asV60'] {
		return this.dev.asV60
	}
}

export class DemocracyStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyStorageVersionStorage
	private readonly stage: stageStorage.DemocracyStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyStorageVersionStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DemocracyStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemocracyStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.DemocracyStorageVersionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyStorageVersionStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.DemocracyStorageVersionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DemocracyStorageVersionStorage['asV42'] {
		return this.stage.asV42
	}
}

export class DemocracyVotingOfStorage extends StorageBase {
	private readonly production: productionStorage.DemocracyVotingOfStorage
	private readonly stage: stageStorage.DemocracyVotingOfStorage
	private readonly dev: devStorage.DemocracyVotingOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.DemocracyVotingOfStorage(ctx, storage)
		this.stage = new stageStorage.DemocracyVotingOfStorage(ctx, storage)
		this.dev = new devStorage.DemocracyVotingOfStorage(ctx, storage)
	}

	get isV1(): productionStorage.DemocracyVotingOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.DemocracyVotingOfStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.DemocracyVotingOfStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.DemocracyVotingOfStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.DemocracyVotingOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.DemocracyVotingOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.DemocracyVotingOfStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.DemocracyVotingOfStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.DemocracyVotingOfStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.DemocracyVotingOfStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseCurrentPhaseStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseCurrentPhaseStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseCurrentPhaseStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseCurrentPhaseStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseCurrentPhaseStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseCurrentPhaseStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseCurrentPhaseStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseCurrentPhaseStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseCurrentPhaseStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseCurrentPhaseStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseCurrentPhaseStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseCurrentPhaseStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseDesiredTargetsStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseDesiredTargetsStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseDesiredTargetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseDesiredTargetsStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseDesiredTargetsStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseDesiredTargetsStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseDesiredTargetsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseDesiredTargetsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseDesiredTargetsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseDesiredTargetsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseDesiredTargetsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseDesiredTargetsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseMinimumUntrustedScoreStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseQueuedSolutionStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseQueuedSolutionStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseQueuedSolutionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseQueuedSolutionStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseQueuedSolutionStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseQueuedSolutionStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseQueuedSolutionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseQueuedSolutionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseQueuedSolutionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseQueuedSolutionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseQueuedSolutionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseQueuedSolutionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseRoundStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseRoundStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseRoundStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseRoundStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseRoundStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseRoundStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseRoundStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseRoundStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseRoundStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseRoundStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseRoundStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseRoundStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseRoundStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV52(): stageStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseSignedSubmissionIndicesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseSignedSubmissionsMapStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSnapshotStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSnapshotStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSnapshotStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSnapshotStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseSnapshotStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSnapshotStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSnapshotStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSnapshotStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSnapshotStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseSnapshotStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseSnapshotStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseSnapshotStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseSnapshotStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage extends StorageBase {
	private readonly production: productionStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage
	private readonly stage: stageStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage
	private readonly dev: devStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage(ctx, storage)
		this.stage = new stageStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage(ctx, storage)
		this.dev = new devStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionProviderMultiPhaseSnapshotMetadataStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenCandidatesStorage extends StorageBase {
	private readonly production: productionStorage.ElectionsPhragmenCandidatesStorage
	private readonly stage: stageStorage.ElectionsPhragmenCandidatesStorage
	private readonly dev: devStorage.ElectionsPhragmenCandidatesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionsPhragmenCandidatesStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenCandidatesStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenCandidatesStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionsPhragmenCandidatesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenCandidatesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionsPhragmenCandidatesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionsPhragmenCandidatesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionsPhragmenCandidatesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionsPhragmenCandidatesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenElectionRoundsStorage extends StorageBase {
	private readonly production: productionStorage.ElectionsPhragmenElectionRoundsStorage
	private readonly stage: stageStorage.ElectionsPhragmenElectionRoundsStorage
	private readonly dev: devStorage.ElectionsPhragmenElectionRoundsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionsPhragmenElectionRoundsStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenElectionRoundsStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenElectionRoundsStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionsPhragmenElectionRoundsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenElectionRoundsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionsPhragmenElectionRoundsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionsPhragmenElectionRoundsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionsPhragmenElectionRoundsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionsPhragmenElectionRoundsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenMembersStorage extends StorageBase {
	private readonly production: productionStorage.ElectionsPhragmenMembersStorage
	private readonly stage: stageStorage.ElectionsPhragmenMembersStorage
	private readonly dev: devStorage.ElectionsPhragmenMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionsPhragmenMembersStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenMembersStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenMembersStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionsPhragmenMembersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenMembersStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionsPhragmenMembersStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionsPhragmenMembersStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionsPhragmenMembersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionsPhragmenMembersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenRunnersUpStorage extends StorageBase {
	private readonly production: productionStorage.ElectionsPhragmenRunnersUpStorage
	private readonly stage: stageStorage.ElectionsPhragmenRunnersUpStorage
	private readonly dev: devStorage.ElectionsPhragmenRunnersUpStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionsPhragmenRunnersUpStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenRunnersUpStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenRunnersUpStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionsPhragmenRunnersUpStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenRunnersUpStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionsPhragmenRunnersUpStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionsPhragmenRunnersUpStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionsPhragmenRunnersUpStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionsPhragmenRunnersUpStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ElectionsPhragmenVotingStorage extends StorageBase {
	private readonly production: productionStorage.ElectionsPhragmenVotingStorage
	private readonly stage: stageStorage.ElectionsPhragmenVotingStorage
	private readonly dev: devStorage.ElectionsPhragmenVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ElectionsPhragmenVotingStorage(ctx, storage)
		this.stage = new stageStorage.ElectionsPhragmenVotingStorage(ctx, storage)
		this.dev = new devStorage.ElectionsPhragmenVotingStorage(ctx, storage)
	}

	get isV42(): productionStorage.ElectionsPhragmenVotingStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ElectionsPhragmenVotingStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.ElectionsPhragmenVotingStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ElectionsPhragmenVotingStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ElectionsPhragmenVotingStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ElectionsPhragmenVotingStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeAccountRequestsStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeAccountRequestsStorage
	private readonly stage: stageStorage.EthBridgeAccountRequestsStorage
	private readonly dev: devStorage.EthBridgeAccountRequestsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeAccountRequestsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeAccountRequestsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeAccountRequestsStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeAccountRequestsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeAccountRequestsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgeAccountRequestsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeAccountRequestsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeAccountRequestsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeAccountRequestsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeAuthorityAccountStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeAuthorityAccountStorage
	private readonly stage: stageStorage.EthBridgeAuthorityAccountStorage
	private readonly dev: devStorage.EthBridgeAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeAuthorityAccountStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeAuthorityAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeAuthorityAccountStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeAuthorityAccountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeAuthorityAccountStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.EthBridgeAuthorityAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeAuthorityAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.EthBridgeAuthorityAccountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.EthBridgeAuthorityAccountStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.EthBridgeAuthorityAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeAuthorityAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeBridgeAccountStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeBridgeAccountStorage
	private readonly stage: stageStorage.EthBridgeBridgeAccountStorage
	private readonly dev: devStorage.EthBridgeBridgeAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeBridgeAccountStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeBridgeAccountStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeBridgeAccountStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeBridgeAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeBridgeAccountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgeBridgeAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeBridgeAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeBridgeAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeBridgeAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeBridgeContractAddressStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeBridgeContractAddressStorage
	private readonly stage: stageStorage.EthBridgeBridgeContractAddressStorage
	private readonly dev: devStorage.EthBridgeBridgeContractAddressStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeBridgeContractAddressStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeBridgeContractAddressStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeBridgeContractAddressStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeBridgeContractAddressStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeBridgeContractAddressStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeBridgeContractAddressStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeBridgeContractAddressStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.EthBridgeBridgeContractAddressStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeBridgeContractAddressStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeBridgeContractAddressStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeBridgeContractAddressStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeBridgeSignatureVersionsStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeBridgeSignatureVersionsStorage
	private readonly stage: stageStorage.EthBridgeBridgeSignatureVersionsStorage
	private readonly dev: devStorage.EthBridgeBridgeSignatureVersionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeBridgeSignatureVersionsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeBridgeSignatureVersionsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeBridgeSignatureVersionsStorage(ctx, storage)
	}

	get isV38(): productionStorage.EthBridgeBridgeSignatureVersionsStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.EthBridgeBridgeSignatureVersionsStorage['asV38'] {
		return this.production.asV38
	}
	get isStageV38(): stageStorage.EthBridgeBridgeSignatureVersionsStorage['isV38'] {
		return this.stage.isV38
	}
	get asStageV38(): stageStorage.EthBridgeBridgeSignatureVersionsStorage['asV38'] {
		return this.stage.asV38
	}
	get isDevV60(): devStorage.EthBridgeBridgeSignatureVersionsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeBridgeSignatureVersionsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeBridgeStatusesStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeBridgeStatusesStorage
	private readonly stage: stageStorage.EthBridgeBridgeStatusesStorage
	private readonly dev: devStorage.EthBridgeBridgeStatusesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeBridgeStatusesStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeBridgeStatusesStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeBridgeStatusesStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeBridgeStatusesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeBridgeStatusesStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgeBridgeStatusesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeBridgeStatusesStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeBridgeStatusesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeBridgeStatusesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeLoadToIncomingRequestHashStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeLoadToIncomingRequestHashStorage
	private readonly stage: stageStorage.EthBridgeLoadToIncomingRequestHashStorage
	private readonly dev: devStorage.EthBridgeLoadToIncomingRequestHashStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeLoadToIncomingRequestHashStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeLoadToIncomingRequestHashStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeLoadToIncomingRequestHashStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeLoadToIncomingRequestHashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeLoadToIncomingRequestHashStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgeLoadToIncomingRequestHashStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeLoadToIncomingRequestHashStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeLoadToIncomingRequestHashStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeLoadToIncomingRequestHashStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeMigratingRequestsStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeMigratingRequestsStorage
	private readonly stage: stageStorage.EthBridgeMigratingRequestsStorage
	private readonly dev: devStorage.EthBridgeMigratingRequestsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeMigratingRequestsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeMigratingRequestsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeMigratingRequestsStorage(ctx, storage)
	}

	get isV19(): productionStorage.EthBridgeMigratingRequestsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.EthBridgeMigratingRequestsStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.EthBridgeMigratingRequestsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeMigratingRequestsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeMigratingRequestsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeMigratingRequestsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeNextNetworkIdStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeNextNetworkIdStorage
	private readonly stage: stageStorage.EthBridgeNextNetworkIdStorage
	private readonly dev: devStorage.EthBridgeNextNetworkIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeNextNetworkIdStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeNextNetworkIdStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeNextNetworkIdStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeNextNetworkIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeNextNetworkIdStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgeNextNetworkIdStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeNextNetworkIdStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeNextNetworkIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeNextNetworkIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgePalletStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgePalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgePalletStorageVersionStorage(ctx, storage)
	}

	get isV3(): productionStorage.EthBridgePalletStorageVersionStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.EthBridgePalletStorageVersionStorage['asV3'] {
		return this.production.asV3
	}
}

export class EthBridgePeerAccountIdStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgePeerAccountIdStorage
	private readonly stage: stageStorage.EthBridgePeerAccountIdStorage
	private readonly dev: devStorage.EthBridgePeerAccountIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgePeerAccountIdStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePeerAccountIdStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePeerAccountIdStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgePeerAccountIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePeerAccountIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgePeerAccountIdStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgePeerAccountIdStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.EthBridgePeerAccountIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgePeerAccountIdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.EthBridgePeerAccountIdStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgePeerAccountIdStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.EthBridgePeerAccountIdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.EthBridgePeerAccountIdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.EthBridgePeerAccountIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgePeerAccountIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgePeerAddressStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgePeerAddressStorage
	private readonly stage: stageStorage.EthBridgePeerAddressStorage
	private readonly dev: devStorage.EthBridgePeerAddressStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgePeerAddressStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePeerAddressStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePeerAddressStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgePeerAddressStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePeerAddressStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgePeerAddressStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgePeerAddressStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.EthBridgePeerAddressStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgePeerAddressStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgePeerAddressStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgePeerAddressStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgePeersStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgePeersStorage
	private readonly stage: stageStorage.EthBridgePeersStorage
	private readonly dev: devStorage.EthBridgePeersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgePeersStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePeersStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePeersStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgePeersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePeersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgePeersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgePeersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgePeersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgePeersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgePendingBridgeSignatureVersionsStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgePendingBridgeSignatureVersionsStorage
	private readonly stage: stageStorage.EthBridgePendingBridgeSignatureVersionsStorage
	private readonly dev: devStorage.EthBridgePendingBridgeSignatureVersionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgePendingBridgeSignatureVersionsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePendingBridgeSignatureVersionsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePendingBridgeSignatureVersionsStorage(ctx, storage)
	}

	get isV38(): productionStorage.EthBridgePendingBridgeSignatureVersionsStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.EthBridgePendingBridgeSignatureVersionsStorage['asV38'] {
		return this.production.asV38
	}
	get isStageV38(): stageStorage.EthBridgePendingBridgeSignatureVersionsStorage['isV38'] {
		return this.stage.isV38
	}
	get asStageV38(): stageStorage.EthBridgePendingBridgeSignatureVersionsStorage['asV38'] {
		return this.stage.asV38
	}
	get isDevV60(): devStorage.EthBridgePendingBridgeSignatureVersionsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgePendingBridgeSignatureVersionsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgePendingEthPeersSyncStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgePendingEthPeersSyncStorage
	private readonly stage: stageStorage.EthBridgePendingEthPeersSyncStorage
	private readonly dev: devStorage.EthBridgePendingEthPeersSyncStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgePendingEthPeersSyncStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePendingEthPeersSyncStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePendingEthPeersSyncStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgePendingEthPeersSyncStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePendingEthPeersSyncStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgePendingEthPeersSyncStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgePendingEthPeersSyncStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgePendingEthPeersSyncStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgePendingEthPeersSyncStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgePendingPeerStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgePendingPeerStorage
	private readonly stage: stageStorage.EthBridgePendingPeerStorage
	private readonly dev: devStorage.EthBridgePendingPeerStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgePendingPeerStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgePendingPeerStorage(ctx, storage)
		this.dev = new devStorage.EthBridgePendingPeerStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgePendingPeerStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgePendingPeerStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgePendingPeerStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgePendingPeerStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgePendingPeerStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgePendingPeerStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRegisteredAssetStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeRegisteredAssetStorage
	private readonly stage: stageStorage.EthBridgeRegisteredAssetStorage
	private readonly dev: devStorage.EthBridgeRegisteredAssetStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeRegisteredAssetStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRegisteredAssetStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRegisteredAssetStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeRegisteredAssetStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRegisteredAssetStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeRegisteredAssetStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRegisteredAssetStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.EthBridgeRegisteredAssetStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeRegisteredAssetStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.EthBridgeRegisteredAssetStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.EthBridgeRegisteredAssetStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.EthBridgeRegisteredAssetStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeRegisteredAssetStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRegisteredSidechainAssetStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeRegisteredSidechainAssetStorage
	private readonly stage: stageStorage.EthBridgeRegisteredSidechainAssetStorage
	private readonly dev: devStorage.EthBridgeRegisteredSidechainAssetStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeRegisteredSidechainAssetStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRegisteredSidechainAssetStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRegisteredSidechainAssetStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRegisteredSidechainAssetStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.EthBridgeRegisteredSidechainAssetStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeRegisteredSidechainAssetStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.EthBridgeRegisteredSidechainAssetStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.EthBridgeRegisteredSidechainAssetStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.EthBridgeRegisteredSidechainAssetStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeRegisteredSidechainAssetStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRegisteredSidechainTokenStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeRegisteredSidechainTokenStorage
	private readonly stage: stageStorage.EthBridgeRegisteredSidechainTokenStorage
	private readonly dev: devStorage.EthBridgeRegisteredSidechainTokenStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeRegisteredSidechainTokenStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRegisteredSidechainTokenStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRegisteredSidechainTokenStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRegisteredSidechainTokenStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.EthBridgeRegisteredSidechainTokenStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeRegisteredSidechainTokenStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.EthBridgeRegisteredSidechainTokenStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.EthBridgeRegisteredSidechainTokenStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.EthBridgeRegisteredSidechainTokenStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeRegisteredSidechainTokenStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestApprovalsStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeRequestApprovalsStorage
	private readonly stage: stageStorage.EthBridgeRequestApprovalsStorage
	private readonly dev: devStorage.EthBridgeRequestApprovalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeRequestApprovalsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestApprovalsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestApprovalsStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeRequestApprovalsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestApprovalsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgeRequestApprovalsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeRequestApprovalsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeRequestApprovalsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeRequestApprovalsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestStatusesStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeRequestStatusesStorage
	private readonly stage: stageStorage.EthBridgeRequestStatusesStorage
	private readonly dev: devStorage.EthBridgeRequestStatusesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeRequestStatusesStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestStatusesStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestStatusesStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeRequestStatusesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestStatusesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeRequestStatusesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRequestStatusesStorage['asV42'] {
		return this.production.asV42
	}
	get isV53(): productionStorage.EthBridgeRequestStatusesStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.EthBridgeRequestStatusesStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV33(): stageStorage.EthBridgeRequestStatusesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeRequestStatusesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.EthBridgeRequestStatusesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.EthBridgeRequestStatusesStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV52(): stageStorage.EthBridgeRequestStatusesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EthBridgeRequestStatusesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.EthBridgeRequestStatusesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeRequestStatusesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestSubmissionHeightStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeRequestSubmissionHeightStorage
	private readonly stage: stageStorage.EthBridgeRequestSubmissionHeightStorage
	private readonly dev: devStorage.EthBridgeRequestSubmissionHeightStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeRequestSubmissionHeightStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestSubmissionHeightStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestSubmissionHeightStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeRequestSubmissionHeightStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestSubmissionHeightStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgeRequestSubmissionHeightStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeRequestSubmissionHeightStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeRequestSubmissionHeightStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeRequestSubmissionHeightStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestsStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeRequestsStorage
	private readonly stage: stageStorage.EthBridgeRequestsStorage
	private readonly dev: devStorage.EthBridgeRequestsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeRequestsStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestsStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestsStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeRequestsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeRequestsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeRequestsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.EthBridgeRequestsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeRequestsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.EthBridgeRequestsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.EthBridgeRequestsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.EthBridgeRequestsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeRequestsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeRequestsQueueStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeRequestsQueueStorage
	private readonly stage: stageStorage.EthBridgeRequestsQueueStorage
	private readonly dev: devStorage.EthBridgeRequestsQueueStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeRequestsQueueStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeRequestsQueueStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeRequestsQueueStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeRequestsQueueStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeRequestsQueueStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.EthBridgeRequestsQueueStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeRequestsQueueStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeRequestsQueueStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeRequestsQueueStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeSidechainAssetPrecisionStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeSidechainAssetPrecisionStorage
	private readonly stage: stageStorage.EthBridgeSidechainAssetPrecisionStorage
	private readonly dev: devStorage.EthBridgeSidechainAssetPrecisionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeSidechainAssetPrecisionStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeSidechainAssetPrecisionStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeSidechainAssetPrecisionStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeSidechainAssetPrecisionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeSidechainAssetPrecisionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.EthBridgeSidechainAssetPrecisionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.EthBridgeSidechainAssetPrecisionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.EthBridgeSidechainAssetPrecisionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeSidechainAssetPrecisionStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.EthBridgeSidechainAssetPrecisionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.EthBridgeSidechainAssetPrecisionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.EthBridgeSidechainAssetPrecisionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeSidechainAssetPrecisionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeValMasterContractAddressStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeValMasterContractAddressStorage
	private readonly stage: stageStorage.EthBridgeValMasterContractAddressStorage
	private readonly dev: devStorage.EthBridgeValMasterContractAddressStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeValMasterContractAddressStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeValMasterContractAddressStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeValMasterContractAddressStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeValMasterContractAddressStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeValMasterContractAddressStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeValMasterContractAddressStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeValMasterContractAddressStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.EthBridgeValMasterContractAddressStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeValMasterContractAddressStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeValMasterContractAddressStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeValMasterContractAddressStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthBridgeXorMasterContractAddressStorage extends StorageBase {
	private readonly production: productionStorage.EthBridgeXorMasterContractAddressStorage
	private readonly stage: stageStorage.EthBridgeXorMasterContractAddressStorage
	private readonly dev: devStorage.EthBridgeXorMasterContractAddressStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.EthBridgeXorMasterContractAddressStorage(ctx, storage)
		this.stage = new stageStorage.EthBridgeXorMasterContractAddressStorage(ctx, storage)
		this.dev = new devStorage.EthBridgeXorMasterContractAddressStorage(ctx, storage)
	}

	get isV1(): productionStorage.EthBridgeXorMasterContractAddressStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.EthBridgeXorMasterContractAddressStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.EthBridgeXorMasterContractAddressStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.EthBridgeXorMasterContractAddressStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.EthBridgeXorMasterContractAddressStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.EthBridgeXorMasterContractAddressStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.EthBridgeXorMasterContractAddressStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthBridgeXorMasterContractAddressStorage['asV60'] {
		return this.dev.asV60
	}
}

export class FarmingPoolFarmersStorage extends StorageBase {
	private readonly production: productionStorage.FarmingPoolFarmersStorage
	private readonly stage: stageStorage.FarmingPoolFarmersStorage
	private readonly dev: devStorage.FarmingPoolFarmersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.FarmingPoolFarmersStorage(ctx, storage)
		this.stage = new stageStorage.FarmingPoolFarmersStorage(ctx, storage)
		this.dev = new devStorage.FarmingPoolFarmersStorage(ctx, storage)
	}

	get isV7(): productionStorage.FarmingPoolFarmersStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.FarmingPoolFarmersStorage['asV7'] {
		return this.production.asV7
	}
	get isStageV33(): stageStorage.FarmingPoolFarmersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.FarmingPoolFarmersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.FarmingPoolFarmersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.FarmingPoolFarmersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class FarmingPoolsStorage extends StorageBase {
	private readonly production: productionStorage.FarmingPoolsStorage
	private readonly stage: stageStorage.FarmingPoolsStorage
	private readonly dev: devStorage.FarmingPoolsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.FarmingPoolsStorage(ctx, storage)
		this.stage = new stageStorage.FarmingPoolsStorage(ctx, storage)
		this.dev = new devStorage.FarmingPoolsStorage(ctx, storage)
	}

	get isV7(): productionStorage.FarmingPoolsStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.FarmingPoolsStorage['asV7'] {
		return this.production.asV7
	}
	get isStageV33(): stageStorage.FarmingPoolsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.FarmingPoolsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.FarmingPoolsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.FarmingPoolsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class FarmingSavedValuesStorage extends StorageBase {
	private readonly production: productionStorage.FarmingSavedValuesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.FarmingSavedValuesStorage(ctx, storage)
	}

	get isV7(): productionStorage.FarmingSavedValuesStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.FarmingSavedValuesStorage['asV7'] {
		return this.production.asV7
	}
}

export class GrandpaCurrentSetIdStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaCurrentSetIdStorage
	private readonly stage: stageStorage.GrandpaCurrentSetIdStorage
	private readonly dev: devStorage.GrandpaCurrentSetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaCurrentSetIdStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaCurrentSetIdStorage(ctx, storage)
		this.dev = new devStorage.GrandpaCurrentSetIdStorage(ctx, storage)
	}

	get isV42(): productionStorage.GrandpaCurrentSetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaCurrentSetIdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.GrandpaCurrentSetIdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.GrandpaCurrentSetIdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.GrandpaCurrentSetIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.GrandpaCurrentSetIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaNextForcedStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaNextForcedStorage
	private readonly stage: stageStorage.GrandpaNextForcedStorage
	private readonly dev: devStorage.GrandpaNextForcedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaNextForcedStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaNextForcedStorage(ctx, storage)
		this.dev = new devStorage.GrandpaNextForcedStorage(ctx, storage)
	}

	get isV42(): productionStorage.GrandpaNextForcedStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaNextForcedStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.GrandpaNextForcedStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.GrandpaNextForcedStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.GrandpaNextForcedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.GrandpaNextForcedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaPendingChangeStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaPendingChangeStorage
	private readonly stage: stageStorage.GrandpaPendingChangeStorage
	private readonly dev: devStorage.GrandpaPendingChangeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaPendingChangeStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaPendingChangeStorage(ctx, storage)
		this.dev = new devStorage.GrandpaPendingChangeStorage(ctx, storage)
	}

	get isV42(): productionStorage.GrandpaPendingChangeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaPendingChangeStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.GrandpaPendingChangeStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.GrandpaPendingChangeStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.GrandpaPendingChangeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.GrandpaPendingChangeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaSetIdSessionStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaSetIdSessionStorage
	private readonly stage: stageStorage.GrandpaSetIdSessionStorage
	private readonly dev: devStorage.GrandpaSetIdSessionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaSetIdSessionStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaSetIdSessionStorage(ctx, storage)
		this.dev = new devStorage.GrandpaSetIdSessionStorage(ctx, storage)
	}

	get isV42(): productionStorage.GrandpaSetIdSessionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaSetIdSessionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.GrandpaSetIdSessionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.GrandpaSetIdSessionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.GrandpaSetIdSessionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.GrandpaSetIdSessionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaStalledStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaStalledStorage
	private readonly stage: stageStorage.GrandpaStalledStorage
	private readonly dev: devStorage.GrandpaStalledStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaStalledStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaStalledStorage(ctx, storage)
		this.dev = new devStorage.GrandpaStalledStorage(ctx, storage)
	}

	get isV42(): productionStorage.GrandpaStalledStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaStalledStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.GrandpaStalledStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.GrandpaStalledStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.GrandpaStalledStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.GrandpaStalledStorage['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaStateStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaStateStorage
	private readonly stage: stageStorage.GrandpaStateStorage
	private readonly dev: devStorage.GrandpaStateStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaStateStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaStateStorage(ctx, storage)
		this.dev = new devStorage.GrandpaStateStorage(ctx, storage)
	}

	get isV42(): productionStorage.GrandpaStateStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.GrandpaStateStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.GrandpaStateStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.GrandpaStateStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.GrandpaStateStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.GrandpaStateStorage['asV60'] {
		return this.dev.asV60
	}
}

export class GrandpaFinalityCurrentSetIdStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaFinalityCurrentSetIdStorage
	private readonly stage: stageStorage.GrandpaFinalityCurrentSetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaFinalityCurrentSetIdStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityCurrentSetIdStorage(ctx, storage)
	}

	get isV1(): productionStorage.GrandpaFinalityCurrentSetIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityCurrentSetIdStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.GrandpaFinalityCurrentSetIdStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.GrandpaFinalityCurrentSetIdStorage['asV33'] {
		return this.stage.asV33
	}
}

export class GrandpaFinalityNextForcedStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaFinalityNextForcedStorage
	private readonly stage: stageStorage.GrandpaFinalityNextForcedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaFinalityNextForcedStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityNextForcedStorage(ctx, storage)
	}

	get isV1(): productionStorage.GrandpaFinalityNextForcedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityNextForcedStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.GrandpaFinalityNextForcedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.GrandpaFinalityNextForcedStorage['asV33'] {
		return this.stage.asV33
	}
}

export class GrandpaFinalityPendingChangeStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaFinalityPendingChangeStorage
	private readonly stage: stageStorage.GrandpaFinalityPendingChangeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaFinalityPendingChangeStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityPendingChangeStorage(ctx, storage)
	}

	get isV1(): productionStorage.GrandpaFinalityPendingChangeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityPendingChangeStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.GrandpaFinalityPendingChangeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.GrandpaFinalityPendingChangeStorage['asV33'] {
		return this.stage.asV33
	}
}

export class GrandpaFinalitySetIdSessionStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaFinalitySetIdSessionStorage
	private readonly stage: stageStorage.GrandpaFinalitySetIdSessionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaFinalitySetIdSessionStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalitySetIdSessionStorage(ctx, storage)
	}

	get isV1(): productionStorage.GrandpaFinalitySetIdSessionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalitySetIdSessionStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.GrandpaFinalitySetIdSessionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.GrandpaFinalitySetIdSessionStorage['asV33'] {
		return this.stage.asV33
	}
}

export class GrandpaFinalityStalledStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaFinalityStalledStorage
	private readonly stage: stageStorage.GrandpaFinalityStalledStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaFinalityStalledStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityStalledStorage(ctx, storage)
	}

	get isV1(): productionStorage.GrandpaFinalityStalledStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityStalledStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.GrandpaFinalityStalledStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.GrandpaFinalityStalledStorage['asV33'] {
		return this.stage.asV33
	}
}

export class GrandpaFinalityStateStorage extends StorageBase {
	private readonly production: productionStorage.GrandpaFinalityStateStorage
	private readonly stage: stageStorage.GrandpaFinalityStateStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.GrandpaFinalityStateStorage(ctx, storage)
		this.stage = new stageStorage.GrandpaFinalityStateStorage(ctx, storage)
	}

	get isV1(): productionStorage.GrandpaFinalityStateStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.GrandpaFinalityStateStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.GrandpaFinalityStateStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.GrandpaFinalityStateStorage['asV33'] {
		return this.stage.asV33
	}
}

export class HermesGovernancePlatformAuthorityAccountStorage extends StorageBase {
	private readonly production: productionStorage.HermesGovernancePlatformAuthorityAccountStorage
	private readonly stage: stageStorage.HermesGovernancePlatformAuthorityAccountStorage
	private readonly dev: devStorage.HermesGovernancePlatformAuthorityAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.HermesGovernancePlatformAuthorityAccountStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformAuthorityAccountStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformAuthorityAccountStorage(ctx, storage)
	}

	get isV47(): productionStorage.HermesGovernancePlatformAuthorityAccountStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformAuthorityAccountStorage['asV47'] {
		return this.production.asV47
	}
	get isStageV47(): stageStorage.HermesGovernancePlatformAuthorityAccountStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.HermesGovernancePlatformAuthorityAccountStorage['asV47'] {
		return this.stage.asV47
	}
	get isDevV60(): devStorage.HermesGovernancePlatformAuthorityAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.HermesGovernancePlatformAuthorityAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformHermesPollDataStorage extends StorageBase {
	private readonly production: productionStorage.HermesGovernancePlatformHermesPollDataStorage
	private readonly stage: stageStorage.HermesGovernancePlatformHermesPollDataStorage
	private readonly dev: devStorage.HermesGovernancePlatformHermesPollDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.HermesGovernancePlatformHermesPollDataStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformHermesPollDataStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformHermesPollDataStorage(ctx, storage)
	}

	get isV47(): productionStorage.HermesGovernancePlatformHermesPollDataStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformHermesPollDataStorage['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionStorage.HermesGovernancePlatformHermesPollDataStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.HermesGovernancePlatformHermesPollDataStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV47(): stageStorage.HermesGovernancePlatformHermesPollDataStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.HermesGovernancePlatformHermesPollDataStorage['asV47'] {
		return this.stage.asV47
	}
	get isStageV55(): stageStorage.HermesGovernancePlatformHermesPollDataStorage['isV55'] {
		return this.stage.isV55
	}
	get asStageV55(): stageStorage.HermesGovernancePlatformHermesPollDataStorage['asV55'] {
		return this.stage.asV55
	}
	get isDevV60(): devStorage.HermesGovernancePlatformHermesPollDataStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.HermesGovernancePlatformHermesPollDataStorage['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformHermesVotingsStorage extends StorageBase {
	private readonly production: productionStorage.HermesGovernancePlatformHermesVotingsStorage
	private readonly stage: stageStorage.HermesGovernancePlatformHermesVotingsStorage
	private readonly dev: devStorage.HermesGovernancePlatformHermesVotingsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.HermesGovernancePlatformHermesVotingsStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformHermesVotingsStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformHermesVotingsStorage(ctx, storage)
	}

	get isV47(): productionStorage.HermesGovernancePlatformHermesVotingsStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformHermesVotingsStorage['asV47'] {
		return this.production.asV47
	}
	get isV57(): productionStorage.HermesGovernancePlatformHermesVotingsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.HermesGovernancePlatformHermesVotingsStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV47(): stageStorage.HermesGovernancePlatformHermesVotingsStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.HermesGovernancePlatformHermesVotingsStorage['asV47'] {
		return this.stage.asV47
	}
	get isStageV55(): stageStorage.HermesGovernancePlatformHermesVotingsStorage['isV55'] {
		return this.stage.isV55
	}
	get asStageV55(): stageStorage.HermesGovernancePlatformHermesVotingsStorage['asV55'] {
		return this.stage.asV55
	}
	get isDevV60(): devStorage.HermesGovernancePlatformHermesVotingsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.HermesGovernancePlatformHermesVotingsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage extends StorageBase {
	private readonly production: productionStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage
	private readonly stage: stageStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage
	private readonly dev: devStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage(ctx, storage)
	}

	get isV47(): productionStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage['asV47'] {
		return this.production.asV47
	}
	get isStageV47(): stageStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage['asV47'] {
		return this.stage.asV47
	}
	get isDevV60(): devStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformMinimumHermesVotingAmountStorage extends StorageBase {
	private readonly production: productionStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage
	private readonly stage: stageStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage
	private readonly dev: devStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage(ctx, storage)
	}

	get isV47(): productionStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage['asV47'] {
		return this.production.asV47
	}
	get isStageV47(): stageStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage['asV47'] {
		return this.stage.asV47
	}
	get isDevV60(): devStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.HermesGovernancePlatformMinimumHermesVotingAmountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class HermesGovernancePlatformPalletStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.HermesGovernancePlatformPalletStorageVersionStorage
	private readonly stage: stageStorage.HermesGovernancePlatformPalletStorageVersionStorage
	private readonly dev: devStorage.HermesGovernancePlatformPalletStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.HermesGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.HermesGovernancePlatformPalletStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.HermesGovernancePlatformPalletStorageVersionStorage(ctx, storage)
	}

	get isV57(): productionStorage.HermesGovernancePlatformPalletStorageVersionStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.HermesGovernancePlatformPalletStorageVersionStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV55(): stageStorage.HermesGovernancePlatformPalletStorageVersionStorage['isV55'] {
		return this.stage.isV55
	}
	get asStageV55(): stageStorage.HermesGovernancePlatformPalletStorageVersionStorage['asV55'] {
		return this.stage.asV55
	}
	get isDevV60(): devStorage.HermesGovernancePlatformPalletStorageVersionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.HermesGovernancePlatformPalletStorageVersionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityIdentityOfStorage extends StorageBase {
	private readonly production: productionStorage.IdentityIdentityOfStorage
	private readonly stage: stageStorage.IdentityIdentityOfStorage
	private readonly dev: devStorage.IdentityIdentityOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IdentityIdentityOfStorage(ctx, storage)
		this.stage = new stageStorage.IdentityIdentityOfStorage(ctx, storage)
		this.dev = new devStorage.IdentityIdentityOfStorage(ctx, storage)
	}

	get isV3(): productionStorage.IdentityIdentityOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.IdentityIdentityOfStorage['asV3'] {
		return this.production.asV3
	}
	get isStageV33(): stageStorage.IdentityIdentityOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IdentityIdentityOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.IdentityIdentityOfStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IdentityIdentityOfStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IdentityRegistrarsStorage extends StorageBase {
	private readonly production: productionStorage.IdentityRegistrarsStorage
	private readonly stage: stageStorage.IdentityRegistrarsStorage
	private readonly dev: devStorage.IdentityRegistrarsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IdentityRegistrarsStorage(ctx, storage)
		this.stage = new stageStorage.IdentityRegistrarsStorage(ctx, storage)
		this.dev = new devStorage.IdentityRegistrarsStorage(ctx, storage)
	}

	get isV3(): productionStorage.IdentityRegistrarsStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.IdentityRegistrarsStorage['asV3'] {
		return this.production.asV3
	}
	get isStageV33(): stageStorage.IdentityRegistrarsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IdentityRegistrarsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.IdentityRegistrarsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IdentityRegistrarsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySubsOfStorage extends StorageBase {
	private readonly production: productionStorage.IdentitySubsOfStorage
	private readonly stage: stageStorage.IdentitySubsOfStorage
	private readonly dev: devStorage.IdentitySubsOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IdentitySubsOfStorage(ctx, storage)
		this.stage = new stageStorage.IdentitySubsOfStorage(ctx, storage)
		this.dev = new devStorage.IdentitySubsOfStorage(ctx, storage)
	}

	get isV3(): productionStorage.IdentitySubsOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.IdentitySubsOfStorage['asV3'] {
		return this.production.asV3
	}
	get isStageV33(): stageStorage.IdentitySubsOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IdentitySubsOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.IdentitySubsOfStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IdentitySubsOfStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IdentitySuperOfStorage extends StorageBase {
	private readonly production: productionStorage.IdentitySuperOfStorage
	private readonly stage: stageStorage.IdentitySuperOfStorage
	private readonly dev: devStorage.IdentitySuperOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IdentitySuperOfStorage(ctx, storage)
		this.stage = new stageStorage.IdentitySuperOfStorage(ctx, storage)
		this.dev = new devStorage.IdentitySuperOfStorage(ctx, storage)
	}

	get isV3(): productionStorage.IdentitySuperOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.IdentitySuperOfStorage['asV3'] {
		return this.production.asV3
	}
	get isStageV33(): stageStorage.IdentitySuperOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IdentitySuperOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.IdentitySuperOfStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IdentitySuperOfStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ImOnlineAuthoredBlocksStorage extends StorageBase {
	private readonly production: productionStorage.ImOnlineAuthoredBlocksStorage
	private readonly stage: stageStorage.ImOnlineAuthoredBlocksStorage
	private readonly dev: devStorage.ImOnlineAuthoredBlocksStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ImOnlineAuthoredBlocksStorage(ctx, storage)
		this.stage = new stageStorage.ImOnlineAuthoredBlocksStorage(ctx, storage)
		this.dev = new devStorage.ImOnlineAuthoredBlocksStorage(ctx, storage)
	}

	get isV1(): productionStorage.ImOnlineAuthoredBlocksStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ImOnlineAuthoredBlocksStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.ImOnlineAuthoredBlocksStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.ImOnlineAuthoredBlocksStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.ImOnlineAuthoredBlocksStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ImOnlineAuthoredBlocksStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ImOnlineHeartbeatAfterStorage extends StorageBase {
	private readonly production: productionStorage.ImOnlineHeartbeatAfterStorage
	private readonly stage: stageStorage.ImOnlineHeartbeatAfterStorage
	private readonly dev: devStorage.ImOnlineHeartbeatAfterStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ImOnlineHeartbeatAfterStorage(ctx, storage)
		this.stage = new stageStorage.ImOnlineHeartbeatAfterStorage(ctx, storage)
		this.dev = new devStorage.ImOnlineHeartbeatAfterStorage(ctx, storage)
	}

	get isV1(): productionStorage.ImOnlineHeartbeatAfterStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ImOnlineHeartbeatAfterStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.ImOnlineHeartbeatAfterStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.ImOnlineHeartbeatAfterStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.ImOnlineHeartbeatAfterStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ImOnlineHeartbeatAfterStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ImOnlineKeysStorage extends StorageBase {
	private readonly production: productionStorage.ImOnlineKeysStorage
	private readonly stage: stageStorage.ImOnlineKeysStorage
	private readonly dev: devStorage.ImOnlineKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ImOnlineKeysStorage(ctx, storage)
		this.stage = new stageStorage.ImOnlineKeysStorage(ctx, storage)
		this.dev = new devStorage.ImOnlineKeysStorage(ctx, storage)
	}

	get isV1(): productionStorage.ImOnlineKeysStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ImOnlineKeysStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.ImOnlineKeysStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.ImOnlineKeysStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.ImOnlineKeysStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ImOnlineKeysStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ImOnlineReceivedHeartbeatsStorage extends StorageBase {
	private readonly production: productionStorage.ImOnlineReceivedHeartbeatsStorage
	private readonly stage: stageStorage.ImOnlineReceivedHeartbeatsStorage
	private readonly dev: devStorage.ImOnlineReceivedHeartbeatsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ImOnlineReceivedHeartbeatsStorage(ctx, storage)
		this.stage = new stageStorage.ImOnlineReceivedHeartbeatsStorage(ctx, storage)
		this.dev = new devStorage.ImOnlineReceivedHeartbeatsStorage(ctx, storage)
	}

	get isV1(): productionStorage.ImOnlineReceivedHeartbeatsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ImOnlineReceivedHeartbeatsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.ImOnlineReceivedHeartbeatsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.ImOnlineReceivedHeartbeatsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.ImOnlineReceivedHeartbeatsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.ImOnlineReceivedHeartbeatsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.ImOnlineReceivedHeartbeatsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.ImOnlineReceivedHeartbeatsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.ImOnlineReceivedHeartbeatsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ImOnlineReceivedHeartbeatsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class Instance1CollectiveMembersStorage extends StorageBase {
	private readonly production: productionStorage.Instance1CollectiveMembersStorage
	private readonly stage: stageStorage.Instance1CollectiveMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance1CollectiveMembersStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveMembersStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance1CollectiveMembersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveMembersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance1CollectiveMembersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance1CollectiveMembersStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance1CollectivePrimeStorage extends StorageBase {
	private readonly production: productionStorage.Instance1CollectivePrimeStorage
	private readonly stage: stageStorage.Instance1CollectivePrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance1CollectivePrimeStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectivePrimeStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance1CollectivePrimeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectivePrimeStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance1CollectivePrimeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance1CollectivePrimeStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
	private readonly production: productionStorage.Instance1CollectiveProposalCountStorage
	private readonly stage: stageStorage.Instance1CollectiveProposalCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance1CollectiveProposalCountStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveProposalCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance1CollectiveProposalCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveProposalCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance1CollectiveProposalCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance1CollectiveProposalCountStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
	private readonly production: productionStorage.Instance1CollectiveProposalOfStorage
	private readonly stage: stageStorage.Instance1CollectiveProposalOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance1CollectiveProposalOfStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveProposalOfStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance1CollectiveProposalOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveProposalOfStorage['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionStorage.Instance1CollectiveProposalOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.Instance1CollectiveProposalOfStorage['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionStorage.Instance1CollectiveProposalOfStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.Instance1CollectiveProposalOfStorage['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionStorage.Instance1CollectiveProposalOfStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.Instance1CollectiveProposalOfStorage['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionStorage.Instance1CollectiveProposalOfStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.Instance1CollectiveProposalOfStorage['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionStorage.Instance1CollectiveProposalOfStorage['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionStorage.Instance1CollectiveProposalOfStorage['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionStorage.Instance1CollectiveProposalOfStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.Instance1CollectiveProposalOfStorage['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionStorage.Instance1CollectiveProposalOfStorage['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionStorage.Instance1CollectiveProposalOfStorage['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionStorage.Instance1CollectiveProposalOfStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.Instance1CollectiveProposalOfStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.Instance1CollectiveProposalOfStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.Instance1CollectiveProposalOfStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.Instance1CollectiveProposalOfStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.Instance1CollectiveProposalOfStorage['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionStorage.Instance1CollectiveProposalOfStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.Instance1CollectiveProposalOfStorage['asV38'] {
		return this.production.asV38
	}
	get isStageV33(): stageStorage.Instance1CollectiveProposalOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance1CollectiveProposalOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV35(): stageStorage.Instance1CollectiveProposalOfStorage['isV35'] {
		return this.stage.isV35
	}
	get asStageV35(): stageStorage.Instance1CollectiveProposalOfStorage['asV35'] {
		return this.stage.asV35
	}
	get isStageV37(): stageStorage.Instance1CollectiveProposalOfStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.Instance1CollectiveProposalOfStorage['asV37'] {
		return this.stage.asV37
	}
	get isStageV38(): stageStorage.Instance1CollectiveProposalOfStorage['isV38'] {
		return this.stage.isV38
	}
	get asStageV38(): stageStorage.Instance1CollectiveProposalOfStorage['asV38'] {
		return this.stage.asV38
	}
}

export class Instance1CollectiveProposalsStorage extends StorageBase {
	private readonly production: productionStorage.Instance1CollectiveProposalsStorage
	private readonly stage: stageStorage.Instance1CollectiveProposalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance1CollectiveProposalsStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveProposalsStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance1CollectiveProposalsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveProposalsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance1CollectiveProposalsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance1CollectiveProposalsStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance1CollectiveVotingStorage extends StorageBase {
	private readonly production: productionStorage.Instance1CollectiveVotingStorage
	private readonly stage: stageStorage.Instance1CollectiveVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance1CollectiveVotingStorage(ctx, storage)
		this.stage = new stageStorage.Instance1CollectiveVotingStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance1CollectiveVotingStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1CollectiveVotingStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance1CollectiveVotingStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance1CollectiveVotingStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance1MembershipMembersStorage extends StorageBase {
	private readonly production: productionStorage.Instance1MembershipMembersStorage
	private readonly stage: stageStorage.Instance1MembershipMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance1MembershipMembersStorage(ctx, storage)
		this.stage = new stageStorage.Instance1MembershipMembersStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance1MembershipMembersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1MembershipMembersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance1MembershipMembersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance1MembershipMembersStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance1MembershipPrimeStorage extends StorageBase {
	private readonly production: productionStorage.Instance1MembershipPrimeStorage
	private readonly stage: stageStorage.Instance1MembershipPrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance1MembershipPrimeStorage(ctx, storage)
		this.stage = new stageStorage.Instance1MembershipPrimeStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance1MembershipPrimeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance1MembershipPrimeStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance1MembershipPrimeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance1MembershipPrimeStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance2CollectiveMembersStorage extends StorageBase {
	private readonly production: productionStorage.Instance2CollectiveMembersStorage
	private readonly stage: stageStorage.Instance2CollectiveMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance2CollectiveMembersStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveMembersStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance2CollectiveMembersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveMembersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance2CollectiveMembersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance2CollectiveMembersStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance2CollectivePrimeStorage extends StorageBase {
	private readonly production: productionStorage.Instance2CollectivePrimeStorage
	private readonly stage: stageStorage.Instance2CollectivePrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance2CollectivePrimeStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectivePrimeStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance2CollectivePrimeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectivePrimeStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance2CollectivePrimeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance2CollectivePrimeStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance2CollectiveProposalCountStorage extends StorageBase {
	private readonly production: productionStorage.Instance2CollectiveProposalCountStorage
	private readonly stage: stageStorage.Instance2CollectiveProposalCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance2CollectiveProposalCountStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveProposalCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance2CollectiveProposalCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveProposalCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance2CollectiveProposalCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance2CollectiveProposalCountStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
	private readonly production: productionStorage.Instance2CollectiveProposalOfStorage
	private readonly stage: stageStorage.Instance2CollectiveProposalOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance2CollectiveProposalOfStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveProposalOfStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance2CollectiveProposalOfStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveProposalOfStorage['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionStorage.Instance2CollectiveProposalOfStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.Instance2CollectiveProposalOfStorage['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionStorage.Instance2CollectiveProposalOfStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.Instance2CollectiveProposalOfStorage['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionStorage.Instance2CollectiveProposalOfStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.Instance2CollectiveProposalOfStorage['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionStorage.Instance2CollectiveProposalOfStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.Instance2CollectiveProposalOfStorage['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionStorage.Instance2CollectiveProposalOfStorage['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionStorage.Instance2CollectiveProposalOfStorage['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionStorage.Instance2CollectiveProposalOfStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.Instance2CollectiveProposalOfStorage['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionStorage.Instance2CollectiveProposalOfStorage['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionStorage.Instance2CollectiveProposalOfStorage['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionStorage.Instance2CollectiveProposalOfStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.Instance2CollectiveProposalOfStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.Instance2CollectiveProposalOfStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.Instance2CollectiveProposalOfStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.Instance2CollectiveProposalOfStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.Instance2CollectiveProposalOfStorage['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionStorage.Instance2CollectiveProposalOfStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.Instance2CollectiveProposalOfStorage['asV38'] {
		return this.production.asV38
	}
	get isStageV33(): stageStorage.Instance2CollectiveProposalOfStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance2CollectiveProposalOfStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV35(): stageStorage.Instance2CollectiveProposalOfStorage['isV35'] {
		return this.stage.isV35
	}
	get asStageV35(): stageStorage.Instance2CollectiveProposalOfStorage['asV35'] {
		return this.stage.asV35
	}
	get isStageV37(): stageStorage.Instance2CollectiveProposalOfStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.Instance2CollectiveProposalOfStorage['asV37'] {
		return this.stage.asV37
	}
	get isStageV38(): stageStorage.Instance2CollectiveProposalOfStorage['isV38'] {
		return this.stage.isV38
	}
	get asStageV38(): stageStorage.Instance2CollectiveProposalOfStorage['asV38'] {
		return this.stage.asV38
	}
}

export class Instance2CollectiveProposalsStorage extends StorageBase {
	private readonly production: productionStorage.Instance2CollectiveProposalsStorage
	private readonly stage: stageStorage.Instance2CollectiveProposalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance2CollectiveProposalsStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveProposalsStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance2CollectiveProposalsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveProposalsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance2CollectiveProposalsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance2CollectiveProposalsStorage['asV33'] {
		return this.stage.asV33
	}
}

export class Instance2CollectiveVotingStorage extends StorageBase {
	private readonly production: productionStorage.Instance2CollectiveVotingStorage
	private readonly stage: stageStorage.Instance2CollectiveVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.Instance2CollectiveVotingStorage(ctx, storage)
		this.stage = new stageStorage.Instance2CollectiveVotingStorage(ctx, storage)
	}

	get isV1(): productionStorage.Instance2CollectiveVotingStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.Instance2CollectiveVotingStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.Instance2CollectiveVotingStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.Instance2CollectiveVotingStorage['asV33'] {
		return this.stage.asV33
	}
}

export class IrohaMigrationAccountStorage extends StorageBase {
	private readonly production: productionStorage.IrohaMigrationAccountStorage
	private readonly stage: stageStorage.IrohaMigrationAccountStorage
	private readonly dev: devStorage.IrohaMigrationAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IrohaMigrationAccountStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationAccountStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationAccountStorage(ctx, storage)
	}

	get isV1(): productionStorage.IrohaMigrationAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationAccountStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationAccountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationAccountStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.IrohaMigrationAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IrohaMigrationAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.IrohaMigrationAccountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.IrohaMigrationAccountStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.IrohaMigrationAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IrohaMigrationAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationBalancesStorage extends StorageBase {
	private readonly production: productionStorage.IrohaMigrationBalancesStorage
	private readonly stage: stageStorage.IrohaMigrationBalancesStorage
	private readonly dev: devStorage.IrohaMigrationBalancesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IrohaMigrationBalancesStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationBalancesStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationBalancesStorage(ctx, storage)
	}

	get isV1(): productionStorage.IrohaMigrationBalancesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationBalancesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationBalancesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationBalancesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.IrohaMigrationBalancesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IrohaMigrationBalancesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.IrohaMigrationBalancesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.IrohaMigrationBalancesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.IrohaMigrationBalancesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IrohaMigrationBalancesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationMigratedAccountsStorage extends StorageBase {
	private readonly production: productionStorage.IrohaMigrationMigratedAccountsStorage
	private readonly stage: stageStorage.IrohaMigrationMigratedAccountsStorage
	private readonly dev: devStorage.IrohaMigrationMigratedAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IrohaMigrationMigratedAccountsStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationMigratedAccountsStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationMigratedAccountsStorage(ctx, storage)
	}

	get isV1(): productionStorage.IrohaMigrationMigratedAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationMigratedAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationMigratedAccountsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationMigratedAccountsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.IrohaMigrationMigratedAccountsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IrohaMigrationMigratedAccountsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.IrohaMigrationMigratedAccountsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.IrohaMigrationMigratedAccountsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.IrohaMigrationMigratedAccountsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IrohaMigrationMigratedAccountsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationPendingMultiSigAccountsStorage extends StorageBase {
	private readonly production: productionStorage.IrohaMigrationPendingMultiSigAccountsStorage
	private readonly stage: stageStorage.IrohaMigrationPendingMultiSigAccountsStorage
	private readonly dev: devStorage.IrohaMigrationPendingMultiSigAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IrohaMigrationPendingMultiSigAccountsStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationPendingMultiSigAccountsStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationPendingMultiSigAccountsStorage(ctx, storage)
	}

	get isV1(): productionStorage.IrohaMigrationPendingMultiSigAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationPendingMultiSigAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationPendingMultiSigAccountsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationPendingMultiSigAccountsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.IrohaMigrationPendingMultiSigAccountsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IrohaMigrationPendingMultiSigAccountsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.IrohaMigrationPendingMultiSigAccountsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.IrohaMigrationPendingMultiSigAccountsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.IrohaMigrationPendingMultiSigAccountsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IrohaMigrationPendingMultiSigAccountsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationPendingReferralsStorage extends StorageBase {
	private readonly production: productionStorage.IrohaMigrationPendingReferralsStorage
	private readonly stage: stageStorage.IrohaMigrationPendingReferralsStorage
	private readonly dev: devStorage.IrohaMigrationPendingReferralsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IrohaMigrationPendingReferralsStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationPendingReferralsStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationPendingReferralsStorage(ctx, storage)
	}

	get isV1(): productionStorage.IrohaMigrationPendingReferralsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationPendingReferralsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationPendingReferralsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationPendingReferralsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.IrohaMigrationPendingReferralsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IrohaMigrationPendingReferralsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.IrohaMigrationPendingReferralsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.IrohaMigrationPendingReferralsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.IrohaMigrationPendingReferralsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IrohaMigrationPendingReferralsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationPublicKeysStorage extends StorageBase {
	private readonly production: productionStorage.IrohaMigrationPublicKeysStorage
	private readonly stage: stageStorage.IrohaMigrationPublicKeysStorage
	private readonly dev: devStorage.IrohaMigrationPublicKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IrohaMigrationPublicKeysStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationPublicKeysStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationPublicKeysStorage(ctx, storage)
	}

	get isV1(): productionStorage.IrohaMigrationPublicKeysStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationPublicKeysStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationPublicKeysStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationPublicKeysStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.IrohaMigrationPublicKeysStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IrohaMigrationPublicKeysStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.IrohaMigrationPublicKeysStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.IrohaMigrationPublicKeysStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.IrohaMigrationPublicKeysStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IrohaMigrationPublicKeysStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationQuorumsStorage extends StorageBase {
	private readonly production: productionStorage.IrohaMigrationQuorumsStorage
	private readonly stage: stageStorage.IrohaMigrationQuorumsStorage
	private readonly dev: devStorage.IrohaMigrationQuorumsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IrohaMigrationQuorumsStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationQuorumsStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationQuorumsStorage(ctx, storage)
	}

	get isV1(): productionStorage.IrohaMigrationQuorumsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationQuorumsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationQuorumsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationQuorumsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.IrohaMigrationQuorumsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IrohaMigrationQuorumsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.IrohaMigrationQuorumsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.IrohaMigrationQuorumsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.IrohaMigrationQuorumsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IrohaMigrationQuorumsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class IrohaMigrationReferrersStorage extends StorageBase {
	private readonly production: productionStorage.IrohaMigrationReferrersStorage
	private readonly stage: stageStorage.IrohaMigrationReferrersStorage
	private readonly dev: devStorage.IrohaMigrationReferrersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.IrohaMigrationReferrersStorage(ctx, storage)
		this.stage = new stageStorage.IrohaMigrationReferrersStorage(ctx, storage)
		this.dev = new devStorage.IrohaMigrationReferrersStorage(ctx, storage)
	}

	get isV1(): productionStorage.IrohaMigrationReferrersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.IrohaMigrationReferrersStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.IrohaMigrationReferrersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.IrohaMigrationReferrersStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.IrohaMigrationReferrersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.IrohaMigrationReferrersStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.IrohaMigrationReferrersStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.IrohaMigrationReferrersStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.IrohaMigrationReferrersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.IrohaMigrationReferrersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolBaseFeeStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolBaseFeeStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolBaseFeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolBaseFeeStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolBaseFeeStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolBaseFeeStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolBaseFeeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolBaseFeeStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolBaseFeeStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolBaseFeeStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolBaseFeeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolBaseFeeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolCollateralReservesStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolCollateralReservesStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolCollateralReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolCollateralReservesStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolCollateralReservesStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolCollateralReservesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolDistributionAccountsEntryStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV46'] {
		return this.production.asV46
	}
	get isV53(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV46(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV46'] {
		return this.stage.asV46
	}
	get isStageV52(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV54(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolDistributionAccountsEntryStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolEnabledTargetsStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolEnabledTargetsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolFreeReservesAccountIdStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolFreeReservesAccountIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolIncentivesAccountIdStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolIncentivesAccountIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolInitialPriceStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolInitialPriceStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolInitialPriceStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolInitialPriceStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolInitialPriceStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolInitialPriceStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolInitialPriceStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolInitialPriceStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolInitialPriceStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolInitialPriceStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolInitialPriceStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolInitialPriceStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolPendingFreeReservesStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolPendingFreeReservesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolPriceChangeRateStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolPriceChangeRateStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolPriceChangeStepStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolPriceChangeStepStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolReferenceAssetIdStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolReferenceAssetIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolReservesAccStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolReservesAccStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolReservesAccStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolReservesAccStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolReservesAccStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolReservesAccStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolReservesAccStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV46(): stageStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV46'] {
		return this.stage.asV46
	}
	get isStageV54(): stageStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolReservesAccStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolReservesAccStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolRewardsStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolRewardsStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolRewardsStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolRewardsStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolRewardsStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolRewardsStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolRewardsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolRewardsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolRewardsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolRewardsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolRewardsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolRewardsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolSellPriceCoefficientStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolSellPriceCoefficientStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MulticollateralBondingCurvePoolTotalRewardsStorage extends StorageBase {
	private readonly production: productionStorage.MulticollateralBondingCurvePoolTotalRewardsStorage
	private readonly stage: stageStorage.MulticollateralBondingCurvePoolTotalRewardsStorage
	private readonly dev: devStorage.MulticollateralBondingCurvePoolTotalRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MulticollateralBondingCurvePoolTotalRewardsStorage(ctx, storage)
		this.stage = new stageStorage.MulticollateralBondingCurvePoolTotalRewardsStorage(ctx, storage)
		this.dev = new devStorage.MulticollateralBondingCurvePoolTotalRewardsStorage(ctx, storage)
	}

	get isV1(): productionStorage.MulticollateralBondingCurvePoolTotalRewardsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MulticollateralBondingCurvePoolTotalRewardsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.MulticollateralBondingCurvePoolTotalRewardsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MulticollateralBondingCurvePoolTotalRewardsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.MulticollateralBondingCurvePoolTotalRewardsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MulticollateralBondingCurvePoolTotalRewardsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigCallsStorage extends StorageBase {
	private readonly production: productionStorage.MultisigCallsStorage
	private readonly stage: stageStorage.MultisigCallsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MultisigCallsStorage(ctx, storage)
		this.stage = new stageStorage.MultisigCallsStorage(ctx, storage)
	}

	get isV1(): productionStorage.MultisigCallsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MultisigCallsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.MultisigCallsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MultisigCallsStorage['asV33'] {
		return this.stage.asV33
	}
}

export class MultisigMultisigsStorage extends StorageBase {
	private readonly production: productionStorage.MultisigMultisigsStorage
	private readonly stage: stageStorage.MultisigMultisigsStorage
	private readonly dev: devStorage.MultisigMultisigsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.MultisigMultisigsStorage(ctx, storage)
		this.stage = new stageStorage.MultisigMultisigsStorage(ctx, storage)
		this.dev = new devStorage.MultisigMultisigsStorage(ctx, storage)
	}

	get isV1(): productionStorage.MultisigMultisigsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.MultisigMultisigsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.MultisigMultisigsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.MultisigMultisigsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.MultisigMultisigsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MultisigMultisigsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OffencesConcurrentReportsIndexStorage extends StorageBase {
	private readonly production: productionStorage.OffencesConcurrentReportsIndexStorage
	private readonly stage: stageStorage.OffencesConcurrentReportsIndexStorage
	private readonly dev: devStorage.OffencesConcurrentReportsIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.OffencesConcurrentReportsIndexStorage(ctx, storage)
		this.stage = new stageStorage.OffencesConcurrentReportsIndexStorage(ctx, storage)
		this.dev = new devStorage.OffencesConcurrentReportsIndexStorage(ctx, storage)
	}

	get isV1(): productionStorage.OffencesConcurrentReportsIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.OffencesConcurrentReportsIndexStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.OffencesConcurrentReportsIndexStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.OffencesConcurrentReportsIndexStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.OffencesConcurrentReportsIndexStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OffencesConcurrentReportsIndexStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OffencesDeferredOffencesStorage extends StorageBase {
	private readonly production: productionStorage.OffencesDeferredOffencesStorage
	private readonly stage: stageStorage.OffencesDeferredOffencesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.OffencesDeferredOffencesStorage(ctx, storage)
		this.stage = new stageStorage.OffencesDeferredOffencesStorage(ctx, storage)
	}

	get isV1(): productionStorage.OffencesDeferredOffencesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.OffencesDeferredOffencesStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.OffencesDeferredOffencesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.OffencesDeferredOffencesStorage['asV33'] {
		return this.stage.asV33
	}
}

export class OffencesReportsStorage extends StorageBase {
	private readonly production: productionStorage.OffencesReportsStorage
	private readonly stage: stageStorage.OffencesReportsStorage
	private readonly dev: devStorage.OffencesReportsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.OffencesReportsStorage(ctx, storage)
		this.stage = new stageStorage.OffencesReportsStorage(ctx, storage)
		this.dev = new devStorage.OffencesReportsStorage(ctx, storage)
	}

	get isV1(): productionStorage.OffencesReportsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.OffencesReportsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.OffencesReportsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.OffencesReportsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.OffencesReportsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OffencesReportsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OffencesReportsByKindIndexStorage extends StorageBase {
	private readonly production: productionStorage.OffencesReportsByKindIndexStorage
	private readonly stage: stageStorage.OffencesReportsByKindIndexStorage
	private readonly dev: devStorage.OffencesReportsByKindIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.OffencesReportsByKindIndexStorage(ctx, storage)
		this.stage = new stageStorage.OffencesReportsByKindIndexStorage(ctx, storage)
		this.dev = new devStorage.OffencesReportsByKindIndexStorage(ctx, storage)
	}

	get isV1(): productionStorage.OffencesReportsByKindIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.OffencesReportsByKindIndexStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.OffencesReportsByKindIndexStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.OffencesReportsByKindIndexStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.OffencesReportsByKindIndexStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OffencesReportsByKindIndexStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OracleProxyEnabledOraclesStorage extends StorageBase {
	private readonly production: productionStorage.OracleProxyEnabledOraclesStorage
	private readonly stage: stageStorage.OracleProxyEnabledOraclesStorage
	private readonly dev: devStorage.OracleProxyEnabledOraclesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.OracleProxyEnabledOraclesStorage(ctx, storage)
		this.stage = new stageStorage.OracleProxyEnabledOraclesStorage(ctx, storage)
		this.dev = new devStorage.OracleProxyEnabledOraclesStorage(ctx, storage)
	}

	get isV45(): productionStorage.OracleProxyEnabledOraclesStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.OracleProxyEnabledOraclesStorage['asV45'] {
		return this.production.asV45
	}
	get isStageV45(): stageStorage.OracleProxyEnabledOraclesStorage['isV45'] {
		return this.stage.isV45
	}
	get asStageV45(): stageStorage.OracleProxyEnabledOraclesStorage['asV45'] {
		return this.stage.asV45
	}
	get isDevV60(): devStorage.OracleProxyEnabledOraclesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OracleProxyEnabledOraclesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OracleProxySymbolProvidersStorage extends StorageBase {
	private readonly production: productionStorage.OracleProxySymbolProvidersStorage
	private readonly stage: stageStorage.OracleProxySymbolProvidersStorage
	private readonly dev: devStorage.OracleProxySymbolProvidersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.OracleProxySymbolProvidersStorage(ctx, storage)
		this.stage = new stageStorage.OracleProxySymbolProvidersStorage(ctx, storage)
		this.dev = new devStorage.OracleProxySymbolProvidersStorage(ctx, storage)
	}

	get isV45(): productionStorage.OracleProxySymbolProvidersStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.OracleProxySymbolProvidersStorage['asV45'] {
		return this.production.asV45
	}
	get isStageV45(): stageStorage.OracleProxySymbolProvidersStorage['isV45'] {
		return this.stage.isV45
	}
	get asStageV45(): stageStorage.OracleProxySymbolProvidersStorage['asV45'] {
		return this.stage.asV45
	}
	get isDevV60(): devStorage.OracleProxySymbolProvidersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OracleProxySymbolProvidersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PermissionsModesStorage extends StorageBase {
	private readonly production: productionStorage.PermissionsModesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PermissionsModesStorage(ctx, storage)
	}

	get isV1(): productionStorage.PermissionsModesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PermissionsModesStorage['asV1'] {
		return this.production.asV1
	}
}

export class PermissionsOwnersStorage extends StorageBase {
	private readonly production: productionStorage.PermissionsOwnersStorage
	private readonly stage: stageStorage.PermissionsOwnersStorage
	private readonly dev: devStorage.PermissionsOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PermissionsOwnersStorage(ctx, storage)
		this.stage = new stageStorage.PermissionsOwnersStorage(ctx, storage)
		this.dev = new devStorage.PermissionsOwnersStorage(ctx, storage)
	}

	get isV1(): productionStorage.PermissionsOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PermissionsOwnersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.PermissionsOwnersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PermissionsOwnersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.PermissionsOwnersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PermissionsOwnersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PermissionsPermissionsStorage extends StorageBase {
	private readonly production: productionStorage.PermissionsPermissionsStorage
	private readonly stage: stageStorage.PermissionsPermissionsStorage
	private readonly dev: devStorage.PermissionsPermissionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PermissionsPermissionsStorage(ctx, storage)
		this.stage = new stageStorage.PermissionsPermissionsStorage(ctx, storage)
		this.dev = new devStorage.PermissionsPermissionsStorage(ctx, storage)
	}

	get isV1(): productionStorage.PermissionsPermissionsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PermissionsPermissionsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.PermissionsPermissionsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PermissionsPermissionsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.PermissionsPermissionsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PermissionsPermissionsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PhragmenElectionCandidatesStorage extends StorageBase {
	private readonly production: productionStorage.PhragmenElectionCandidatesStorage
	private readonly stage: stageStorage.PhragmenElectionCandidatesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PhragmenElectionCandidatesStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionCandidatesStorage(ctx, storage)
	}

	get isV1(): productionStorage.PhragmenElectionCandidatesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionCandidatesStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.PhragmenElectionCandidatesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PhragmenElectionCandidatesStorage['asV33'] {
		return this.stage.asV33
	}
}

export class PhragmenElectionElectionRoundsStorage extends StorageBase {
	private readonly production: productionStorage.PhragmenElectionElectionRoundsStorage
	private readonly stage: stageStorage.PhragmenElectionElectionRoundsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PhragmenElectionElectionRoundsStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionElectionRoundsStorage(ctx, storage)
	}

	get isV1(): productionStorage.PhragmenElectionElectionRoundsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionElectionRoundsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.PhragmenElectionElectionRoundsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PhragmenElectionElectionRoundsStorage['asV33'] {
		return this.stage.asV33
	}
}

export class PhragmenElectionMembersStorage extends StorageBase {
	private readonly production: productionStorage.PhragmenElectionMembersStorage
	private readonly stage: stageStorage.PhragmenElectionMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PhragmenElectionMembersStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionMembersStorage(ctx, storage)
	}

	get isV1(): productionStorage.PhragmenElectionMembersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionMembersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.PhragmenElectionMembersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PhragmenElectionMembersStorage['asV33'] {
		return this.stage.asV33
	}
}

export class PhragmenElectionRunnersUpStorage extends StorageBase {
	private readonly production: productionStorage.PhragmenElectionRunnersUpStorage
	private readonly stage: stageStorage.PhragmenElectionRunnersUpStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PhragmenElectionRunnersUpStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionRunnersUpStorage(ctx, storage)
	}

	get isV1(): productionStorage.PhragmenElectionRunnersUpStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionRunnersUpStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.PhragmenElectionRunnersUpStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PhragmenElectionRunnersUpStorage['asV33'] {
		return this.stage.asV33
	}
}

export class PhragmenElectionVotingStorage extends StorageBase {
	private readonly production: productionStorage.PhragmenElectionVotingStorage
	private readonly stage: stageStorage.PhragmenElectionVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PhragmenElectionVotingStorage(ctx, storage)
		this.stage = new stageStorage.PhragmenElectionVotingStorage(ctx, storage)
	}

	get isV1(): productionStorage.PhragmenElectionVotingStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PhragmenElectionVotingStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.PhragmenElectionVotingStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PhragmenElectionVotingStorage['asV33'] {
		return this.stage.asV33
	}
}

export class PoolXYKAccountPoolsStorage extends StorageBase {
	private readonly production: productionStorage.PoolXYKAccountPoolsStorage
	private readonly stage: stageStorage.PoolXYKAccountPoolsStorage
	private readonly dev: devStorage.PoolXYKAccountPoolsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PoolXYKAccountPoolsStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKAccountPoolsStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKAccountPoolsStorage(ctx, storage)
	}

	get isV19(): productionStorage.PoolXYKAccountPoolsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.PoolXYKAccountPoolsStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.PoolXYKAccountPoolsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PoolXYKAccountPoolsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.PoolXYKAccountPoolsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PoolXYKAccountPoolsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PoolXYKAccountPoolsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PoolXYKAccountPoolsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.PoolXYKAccountPoolsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PoolXYKAccountPoolsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PoolXYKMarkerTokensIndexStorage extends StorageBase {
	private readonly production: productionStorage.PoolXYKMarkerTokensIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PoolXYKMarkerTokensIndexStorage(ctx, storage)
	}

	get isV1(): productionStorage.PoolXYKMarkerTokensIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PoolXYKMarkerTokensIndexStorage['asV1'] {
		return this.production.asV1
	}
}

export class PoolXYKPoolProvidersStorage extends StorageBase {
	private readonly production: productionStorage.PoolXYKPoolProvidersStorage
	private readonly stage: stageStorage.PoolXYKPoolProvidersStorage
	private readonly dev: devStorage.PoolXYKPoolProvidersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PoolXYKPoolProvidersStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKPoolProvidersStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKPoolProvidersStorage(ctx, storage)
	}

	get isV7(): productionStorage.PoolXYKPoolProvidersStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.PoolXYKPoolProvidersStorage['asV7'] {
		return this.production.asV7
	}
	get isStageV33(): stageStorage.PoolXYKPoolProvidersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PoolXYKPoolProvidersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.PoolXYKPoolProvidersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PoolXYKPoolProvidersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PoolXYKPropertiesStorage extends StorageBase {
	private readonly production: productionStorage.PoolXYKPropertiesStorage
	private readonly stage: stageStorage.PoolXYKPropertiesStorage
	private readonly dev: devStorage.PoolXYKPropertiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PoolXYKPropertiesStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKPropertiesStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKPropertiesStorage(ctx, storage)
	}

	get isV1(): productionStorage.PoolXYKPropertiesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PoolXYKPropertiesStorage['asV1'] {
		return this.production.asV1
	}
	get isV7(): productionStorage.PoolXYKPropertiesStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.PoolXYKPropertiesStorage['asV7'] {
		return this.production.asV7
	}
	get isV42(): productionStorage.PoolXYKPropertiesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PoolXYKPropertiesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.PoolXYKPropertiesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PoolXYKPropertiesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PoolXYKPropertiesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PoolXYKPropertiesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.PoolXYKPropertiesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PoolXYKPropertiesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PoolXYKReservesStorage extends StorageBase {
	private readonly production: productionStorage.PoolXYKReservesStorage
	private readonly stage: stageStorage.PoolXYKReservesStorage
	private readonly dev: devStorage.PoolXYKReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PoolXYKReservesStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKReservesStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKReservesStorage(ctx, storage)
	}

	get isV1(): productionStorage.PoolXYKReservesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PoolXYKReservesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PoolXYKReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PoolXYKReservesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.PoolXYKReservesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PoolXYKReservesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PoolXYKReservesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PoolXYKReservesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.PoolXYKReservesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PoolXYKReservesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PoolXYKTotalIssuancesStorage extends StorageBase {
	private readonly production: productionStorage.PoolXYKTotalIssuancesStorage
	private readonly stage: stageStorage.PoolXYKTotalIssuancesStorage
	private readonly dev: devStorage.PoolXYKTotalIssuancesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PoolXYKTotalIssuancesStorage(ctx, storage)
		this.stage = new stageStorage.PoolXYKTotalIssuancesStorage(ctx, storage)
		this.dev = new devStorage.PoolXYKTotalIssuancesStorage(ctx, storage)
	}

	get isV7(): productionStorage.PoolXYKTotalIssuancesStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.PoolXYKTotalIssuancesStorage['asV7'] {
		return this.production.asV7
	}
	get isStageV33(): stageStorage.PoolXYKTotalIssuancesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PoolXYKTotalIssuancesStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.PoolXYKTotalIssuancesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PoolXYKTotalIssuancesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PreimagePreimageForStorage extends StorageBase {
	private readonly production: productionStorage.PreimagePreimageForStorage
	private readonly stage: stageStorage.PreimagePreimageForStorage
	private readonly dev: devStorage.PreimagePreimageForStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PreimagePreimageForStorage(ctx, storage)
		this.stage = new stageStorage.PreimagePreimageForStorage(ctx, storage)
		this.dev = new devStorage.PreimagePreimageForStorage(ctx, storage)
	}

	get isV53(): productionStorage.PreimagePreimageForStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.PreimagePreimageForStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV52(): stageStorage.PreimagePreimageForStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.PreimagePreimageForStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.PreimagePreimageForStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PreimagePreimageForStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PreimageStatusForStorage extends StorageBase {
	private readonly production: productionStorage.PreimageStatusForStorage
	private readonly stage: stageStorage.PreimageStatusForStorage
	private readonly dev: devStorage.PreimageStatusForStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PreimageStatusForStorage(ctx, storage)
		this.stage = new stageStorage.PreimageStatusForStorage(ctx, storage)
		this.dev = new devStorage.PreimageStatusForStorage(ctx, storage)
	}

	get isV53(): productionStorage.PreimageStatusForStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.PreimageStatusForStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV52(): stageStorage.PreimageStatusForStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.PreimageStatusForStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.PreimageStatusForStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PreimageStatusForStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PriceToolsPriceInfosStorage extends StorageBase {
	private readonly production: productionStorage.PriceToolsPriceInfosStorage
	private readonly stage: stageStorage.PriceToolsPriceInfosStorage
	private readonly dev: devStorage.PriceToolsPriceInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PriceToolsPriceInfosStorage(ctx, storage)
		this.stage = new stageStorage.PriceToolsPriceInfosStorage(ctx, storage)
		this.dev = new devStorage.PriceToolsPriceInfosStorage(ctx, storage)
	}

	get isV7(): productionStorage.PriceToolsPriceInfosStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.PriceToolsPriceInfosStorage['asV7'] {
		return this.production.asV7
	}
	get isV42(): productionStorage.PriceToolsPriceInfosStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PriceToolsPriceInfosStorage['asV42'] {
		return this.production.asV42
	}
	get isV45(): productionStorage.PriceToolsPriceInfosStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.PriceToolsPriceInfosStorage['asV45'] {
		return this.production.asV45
	}
	get isStageV33(): stageStorage.PriceToolsPriceInfosStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PriceToolsPriceInfosStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PriceToolsPriceInfosStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PriceToolsPriceInfosStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV44(): stageStorage.PriceToolsPriceInfosStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.PriceToolsPriceInfosStorage['asV44'] {
		return this.stage.asV44
	}
	get isDevV60(): devStorage.PriceToolsPriceInfosStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PriceToolsPriceInfosStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionBurnRateStorage extends StorageBase {
	private readonly production: productionStorage.PswapDistributionBurnRateStorage
	private readonly stage: stageStorage.PswapDistributionBurnRateStorage
	private readonly dev: devStorage.PswapDistributionBurnRateStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PswapDistributionBurnRateStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionBurnRateStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionBurnRateStorage(ctx, storage)
	}

	get isV1(): productionStorage.PswapDistributionBurnRateStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionBurnRateStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionBurnRateStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionBurnRateStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.PswapDistributionBurnRateStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PswapDistributionBurnRateStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PswapDistributionBurnRateStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PswapDistributionBurnRateStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.PswapDistributionBurnRateStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PswapDistributionBurnRateStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionBurnUpdateInfoStorage extends StorageBase {
	private readonly production: productionStorage.PswapDistributionBurnUpdateInfoStorage
	private readonly stage: stageStorage.PswapDistributionBurnUpdateInfoStorage
	private readonly dev: devStorage.PswapDistributionBurnUpdateInfoStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PswapDistributionBurnUpdateInfoStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionBurnUpdateInfoStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionBurnUpdateInfoStorage(ctx, storage)
	}

	get isV1(): productionStorage.PswapDistributionBurnUpdateInfoStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionBurnUpdateInfoStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionBurnUpdateInfoStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionBurnUpdateInfoStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.PswapDistributionBurnUpdateInfoStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PswapDistributionBurnUpdateInfoStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PswapDistributionBurnUpdateInfoStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PswapDistributionBurnUpdateInfoStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.PswapDistributionBurnUpdateInfoStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PswapDistributionBurnUpdateInfoStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionBuyBackXSTFractionStorage extends StorageBase {
	private readonly production: productionStorage.PswapDistributionBuyBackXSTFractionStorage
	private readonly stage: stageStorage.PswapDistributionBuyBackXSTFractionStorage
	private readonly dev: devStorage.PswapDistributionBuyBackXSTFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PswapDistributionBuyBackXSTFractionStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionBuyBackXSTFractionStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionBuyBackXSTFractionStorage(ctx, storage)
	}

	get isV53(): productionStorage.PswapDistributionBuyBackXSTFractionStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.PswapDistributionBuyBackXSTFractionStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV52(): stageStorage.PswapDistributionBuyBackXSTFractionStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.PswapDistributionBuyBackXSTFractionStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.PswapDistributionBuyBackXSTFractionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PswapDistributionBuyBackXSTFractionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionClaimableSharesStorage extends StorageBase {
	private readonly production: productionStorage.PswapDistributionClaimableSharesStorage
	private readonly stage: stageStorage.PswapDistributionClaimableSharesStorage
	private readonly dev: devStorage.PswapDistributionClaimableSharesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PswapDistributionClaimableSharesStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionClaimableSharesStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionClaimableSharesStorage(ctx, storage)
	}

	get isV1(): productionStorage.PswapDistributionClaimableSharesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionClaimableSharesStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionClaimableSharesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionClaimableSharesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.PswapDistributionClaimableSharesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PswapDistributionClaimableSharesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PswapDistributionClaimableSharesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PswapDistributionClaimableSharesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.PswapDistributionClaimableSharesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PswapDistributionClaimableSharesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionParliamentPswapFractionStorage extends StorageBase {
	private readonly production: productionStorage.PswapDistributionParliamentPswapFractionStorage
	private readonly stage: stageStorage.PswapDistributionParliamentPswapFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PswapDistributionParliamentPswapFractionStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionParliamentPswapFractionStorage(ctx, storage)
	}

	get isV1(): productionStorage.PswapDistributionParliamentPswapFractionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionParliamentPswapFractionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionParliamentPswapFractionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionParliamentPswapFractionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.PswapDistributionParliamentPswapFractionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PswapDistributionParliamentPswapFractionStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PswapDistributionParliamentPswapFractionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PswapDistributionParliamentPswapFractionStorage['asV42'] {
		return this.stage.asV42
	}
}

export class PswapDistributionShareholderAccountsStorage extends StorageBase {
	private readonly production: productionStorage.PswapDistributionShareholderAccountsStorage
	private readonly stage: stageStorage.PswapDistributionShareholderAccountsStorage
	private readonly dev: devStorage.PswapDistributionShareholderAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PswapDistributionShareholderAccountsStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionShareholderAccountsStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionShareholderAccountsStorage(ctx, storage)
	}

	get isV1(): productionStorage.PswapDistributionShareholderAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionShareholderAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.PswapDistributionShareholderAccountsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.PswapDistributionShareholderAccountsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.PswapDistributionShareholderAccountsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PswapDistributionShareholderAccountsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.PswapDistributionShareholderAccountsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.PswapDistributionShareholderAccountsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.PswapDistributionShareholderAccountsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PswapDistributionShareholderAccountsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class PswapDistributionSubscribedAccountsStorage extends StorageBase {
	private readonly production: productionStorage.PswapDistributionSubscribedAccountsStorage
	private readonly stage: stageStorage.PswapDistributionSubscribedAccountsStorage
	private readonly dev: devStorage.PswapDistributionSubscribedAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.PswapDistributionSubscribedAccountsStorage(ctx, storage)
		this.stage = new stageStorage.PswapDistributionSubscribedAccountsStorage(ctx, storage)
		this.dev = new devStorage.PswapDistributionSubscribedAccountsStorage(ctx, storage)
	}

	get isV1(): productionStorage.PswapDistributionSubscribedAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.PswapDistributionSubscribedAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.PswapDistributionSubscribedAccountsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.PswapDistributionSubscribedAccountsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.PswapDistributionSubscribedAccountsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.PswapDistributionSubscribedAccountsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
	private readonly production: productionStorage.RandomnessCollectiveFlipRandomMaterialStorage
	private readonly stage: stageStorage.RandomnessCollectiveFlipRandomMaterialStorage
	private readonly dev: devStorage.RandomnessCollectiveFlipRandomMaterialStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RandomnessCollectiveFlipRandomMaterialStorage(ctx, storage)
		this.stage = new stageStorage.RandomnessCollectiveFlipRandomMaterialStorage(ctx, storage)
		this.dev = new devStorage.RandomnessCollectiveFlipRandomMaterialStorage(ctx, storage)
	}

	get isV1(): productionStorage.RandomnessCollectiveFlipRandomMaterialStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RandomnessCollectiveFlipRandomMaterialStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.RandomnessCollectiveFlipRandomMaterialStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RandomnessCollectiveFlipRandomMaterialStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RandomnessCollectiveFlipRandomMaterialStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RandomnessCollectiveFlipRandomMaterialStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ReferralSystemReferrersStorage extends StorageBase {
	private readonly production: productionStorage.ReferralSystemReferrersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ReferralSystemReferrersStorage(ctx, storage)
	}

	get isV1(): productionStorage.ReferralSystemReferrersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.ReferralSystemReferrersStorage['asV1'] {
		return this.production.asV1
	}
}

export class ReferralsReferralsStorage extends StorageBase {
	private readonly production: productionStorage.ReferralsReferralsStorage
	private readonly stage: stageStorage.ReferralsReferralsStorage
	private readonly dev: devStorage.ReferralsReferralsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ReferralsReferralsStorage(ctx, storage)
		this.stage = new stageStorage.ReferralsReferralsStorage(ctx, storage)
		this.dev = new devStorage.ReferralsReferralsStorage(ctx, storage)
	}

	get isV22(): productionStorage.ReferralsReferralsStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.ReferralsReferralsStorage['asV22'] {
		return this.production.asV22
	}
	get isStageV33(): stageStorage.ReferralsReferralsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.ReferralsReferralsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.ReferralsReferralsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ReferralsReferralsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ReferralsReferrerBalancesStorage extends StorageBase {
	private readonly production: productionStorage.ReferralsReferrerBalancesStorage
	private readonly stage: stageStorage.ReferralsReferrerBalancesStorage
	private readonly dev: devStorage.ReferralsReferrerBalancesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ReferralsReferrerBalancesStorage(ctx, storage)
		this.stage = new stageStorage.ReferralsReferrerBalancesStorage(ctx, storage)
		this.dev = new devStorage.ReferralsReferrerBalancesStorage(ctx, storage)
	}

	get isV22(): productionStorage.ReferralsReferrerBalancesStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.ReferralsReferrerBalancesStorage['asV22'] {
		return this.production.asV22
	}
	get isStageV33(): stageStorage.ReferralsReferrerBalancesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.ReferralsReferrerBalancesStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.ReferralsReferrerBalancesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ReferralsReferrerBalancesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ReferralsReferrersStorage extends StorageBase {
	private readonly production: productionStorage.ReferralsReferrersStorage
	private readonly stage: stageStorage.ReferralsReferrersStorage
	private readonly dev: devStorage.ReferralsReferrersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.ReferralsReferrersStorage(ctx, storage)
		this.stage = new stageStorage.ReferralsReferrersStorage(ctx, storage)
		this.dev = new devStorage.ReferralsReferrersStorage(ctx, storage)
	}

	get isV22(): productionStorage.ReferralsReferrersStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.ReferralsReferrersStorage['asV22'] {
		return this.production.asV22
	}
	get isStageV33(): stageStorage.ReferralsReferrersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.ReferralsReferrersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.ReferralsReferrersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ReferralsReferrersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsCurrentClaimableValStorage extends StorageBase {
	private readonly production: productionStorage.RewardsCurrentClaimableValStorage
	private readonly stage: stageStorage.RewardsCurrentClaimableValStorage
	private readonly dev: devStorage.RewardsCurrentClaimableValStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsCurrentClaimableValStorage(ctx, storage)
		this.stage = new stageStorage.RewardsCurrentClaimableValStorage(ctx, storage)
		this.dev = new devStorage.RewardsCurrentClaimableValStorage(ctx, storage)
	}

	get isV19(): productionStorage.RewardsCurrentClaimableValStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsCurrentClaimableValStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.RewardsCurrentClaimableValStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsCurrentClaimableValStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsCurrentClaimableValStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsCurrentClaimableValStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsEthAddressesStorage extends StorageBase {
	private readonly production: productionStorage.RewardsEthAddressesStorage
	private readonly stage: stageStorage.RewardsEthAddressesStorage
	private readonly dev: devStorage.RewardsEthAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsEthAddressesStorage(ctx, storage)
		this.stage = new stageStorage.RewardsEthAddressesStorage(ctx, storage)
		this.dev = new devStorage.RewardsEthAddressesStorage(ctx, storage)
	}

	get isV19(): productionStorage.RewardsEthAddressesStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsEthAddressesStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.RewardsEthAddressesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsEthAddressesStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsEthAddressesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsEthAddressesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsMigrationPendingStorage extends StorageBase {
	private readonly production: productionStorage.RewardsMigrationPendingStorage
	private readonly stage: stageStorage.RewardsMigrationPendingStorage
	private readonly dev: devStorage.RewardsMigrationPendingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsMigrationPendingStorage(ctx, storage)
		this.stage = new stageStorage.RewardsMigrationPendingStorage(ctx, storage)
		this.dev = new devStorage.RewardsMigrationPendingStorage(ctx, storage)
	}

	get isV19(): productionStorage.RewardsMigrationPendingStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsMigrationPendingStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.RewardsMigrationPendingStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsMigrationPendingStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsMigrationPendingStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsMigrationPendingStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsPswapFarmOwnersStorage extends StorageBase {
	private readonly production: productionStorage.RewardsPswapFarmOwnersStorage
	private readonly stage: stageStorage.RewardsPswapFarmOwnersStorage
	private readonly dev: devStorage.RewardsPswapFarmOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsPswapFarmOwnersStorage(ctx, storage)
		this.stage = new stageStorage.RewardsPswapFarmOwnersStorage(ctx, storage)
		this.dev = new devStorage.RewardsPswapFarmOwnersStorage(ctx, storage)
	}

	get isV1(): productionStorage.RewardsPswapFarmOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RewardsPswapFarmOwnersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.RewardsPswapFarmOwnersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsPswapFarmOwnersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsPswapFarmOwnersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsPswapFarmOwnersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsPswapWaifuOwnersStorage extends StorageBase {
	private readonly production: productionStorage.RewardsPswapWaifuOwnersStorage
	private readonly stage: stageStorage.RewardsPswapWaifuOwnersStorage
	private readonly dev: devStorage.RewardsPswapWaifuOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsPswapWaifuOwnersStorage(ctx, storage)
		this.stage = new stageStorage.RewardsPswapWaifuOwnersStorage(ctx, storage)
		this.dev = new devStorage.RewardsPswapWaifuOwnersStorage(ctx, storage)
	}

	get isV1(): productionStorage.RewardsPswapWaifuOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RewardsPswapWaifuOwnersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.RewardsPswapWaifuOwnersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsPswapWaifuOwnersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsPswapWaifuOwnersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsPswapWaifuOwnersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsReservesAccStorage extends StorageBase {
	private readonly production: productionStorage.RewardsReservesAccStorage
	private readonly stage: stageStorage.RewardsReservesAccStorage
	private readonly dev: devStorage.RewardsReservesAccStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsReservesAccStorage(ctx, storage)
		this.stage = new stageStorage.RewardsReservesAccStorage(ctx, storage)
		this.dev = new devStorage.RewardsReservesAccStorage(ctx, storage)
	}

	get isV1(): productionStorage.RewardsReservesAccStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RewardsReservesAccStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.RewardsReservesAccStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.RewardsReservesAccStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.RewardsReservesAccStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.RewardsReservesAccStorage['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionStorage.RewardsReservesAccStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.RewardsReservesAccStorage['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionStorage.RewardsReservesAccStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.RewardsReservesAccStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV33(): stageStorage.RewardsReservesAccStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsReservesAccStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.RewardsReservesAccStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.RewardsReservesAccStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV46(): stageStorage.RewardsReservesAccStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.RewardsReservesAccStorage['asV46'] {
		return this.stage.asV46
	}
	get isStageV54(): stageStorage.RewardsReservesAccStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.RewardsReservesAccStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.RewardsReservesAccStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsReservesAccStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsTotalClaimableValStorage extends StorageBase {
	private readonly production: productionStorage.RewardsTotalClaimableValStorage
	private readonly stage: stageStorage.RewardsTotalClaimableValStorage
	private readonly dev: devStorage.RewardsTotalClaimableValStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsTotalClaimableValStorage(ctx, storage)
		this.stage = new stageStorage.RewardsTotalClaimableValStorage(ctx, storage)
		this.dev = new devStorage.RewardsTotalClaimableValStorage(ctx, storage)
	}

	get isV19(): productionStorage.RewardsTotalClaimableValStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsTotalClaimableValStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.RewardsTotalClaimableValStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsTotalClaimableValStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsTotalClaimableValStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsTotalClaimableValStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsTotalValRewardsStorage extends StorageBase {
	private readonly production: productionStorage.RewardsTotalValRewardsStorage
	private readonly stage: stageStorage.RewardsTotalValRewardsStorage
	private readonly dev: devStorage.RewardsTotalValRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsTotalValRewardsStorage(ctx, storage)
		this.stage = new stageStorage.RewardsTotalValRewardsStorage(ctx, storage)
		this.dev = new devStorage.RewardsTotalValRewardsStorage(ctx, storage)
	}

	get isV19(): productionStorage.RewardsTotalValRewardsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsTotalValRewardsStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.RewardsTotalValRewardsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsTotalValRewardsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsTotalValRewardsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsTotalValRewardsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsUmiNftClaimedStorage extends StorageBase {
	private readonly production: productionStorage.RewardsUmiNftClaimedStorage
	private readonly stage: stageStorage.RewardsUmiNftClaimedStorage
	private readonly dev: devStorage.RewardsUmiNftClaimedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsUmiNftClaimedStorage(ctx, storage)
		this.stage = new stageStorage.RewardsUmiNftClaimedStorage(ctx, storage)
		this.dev = new devStorage.RewardsUmiNftClaimedStorage(ctx, storage)
	}

	get isV33(): productionStorage.RewardsUmiNftClaimedStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.RewardsUmiNftClaimedStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.RewardsUmiNftClaimedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsUmiNftClaimedStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsUmiNftClaimedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsUmiNftClaimedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsUmiNftReceiversStorage extends StorageBase {
	private readonly production: productionStorage.RewardsUmiNftReceiversStorage
	private readonly stage: stageStorage.RewardsUmiNftReceiversStorage
	private readonly dev: devStorage.RewardsUmiNftReceiversStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsUmiNftReceiversStorage(ctx, storage)
		this.stage = new stageStorage.RewardsUmiNftReceiversStorage(ctx, storage)
		this.dev = new devStorage.RewardsUmiNftReceiversStorage(ctx, storage)
	}

	get isV33(): productionStorage.RewardsUmiNftReceiversStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.RewardsUmiNftReceiversStorage['asV33'] {
		return this.production.asV33
	}
	get isStageV33(): stageStorage.RewardsUmiNftReceiversStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsUmiNftReceiversStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsUmiNftReceiversStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsUmiNftReceiversStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsUmiNftsStorage extends StorageBase {
	private readonly production: productionStorage.RewardsUmiNftsStorage
	private readonly stage: stageStorage.RewardsUmiNftsStorage
	private readonly dev: devStorage.RewardsUmiNftsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsUmiNftsStorage(ctx, storage)
		this.stage = new stageStorage.RewardsUmiNftsStorage(ctx, storage)
		this.dev = new devStorage.RewardsUmiNftsStorage(ctx, storage)
	}

	get isV33(): productionStorage.RewardsUmiNftsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.RewardsUmiNftsStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.RewardsUmiNftsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.RewardsUmiNftsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.RewardsUmiNftsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsUmiNftsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.RewardsUmiNftsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.RewardsUmiNftsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.RewardsUmiNftsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsUmiNftsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsValBurnedSinceLastVestingStorage extends StorageBase {
	private readonly production: productionStorage.RewardsValBurnedSinceLastVestingStorage
	private readonly stage: stageStorage.RewardsValBurnedSinceLastVestingStorage
	private readonly dev: devStorage.RewardsValBurnedSinceLastVestingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsValBurnedSinceLastVestingStorage(ctx, storage)
		this.stage = new stageStorage.RewardsValBurnedSinceLastVestingStorage(ctx, storage)
		this.dev = new devStorage.RewardsValBurnedSinceLastVestingStorage(ctx, storage)
	}

	get isV19(): productionStorage.RewardsValBurnedSinceLastVestingStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsValBurnedSinceLastVestingStorage['asV19'] {
		return this.production.asV19
	}
	get isStageV33(): stageStorage.RewardsValBurnedSinceLastVestingStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsValBurnedSinceLastVestingStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.RewardsValBurnedSinceLastVestingStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsValBurnedSinceLastVestingStorage['asV60'] {
		return this.dev.asV60
	}
}

export class RewardsValOwnersStorage extends StorageBase {
	private readonly production: productionStorage.RewardsValOwnersStorage
	private readonly stage: stageStorage.RewardsValOwnersStorage
	private readonly dev: devStorage.RewardsValOwnersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.RewardsValOwnersStorage(ctx, storage)
		this.stage = new stageStorage.RewardsValOwnersStorage(ctx, storage)
		this.dev = new devStorage.RewardsValOwnersStorage(ctx, storage)
	}

	get isV1(): productionStorage.RewardsValOwnersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.RewardsValOwnersStorage['asV1'] {
		return this.production.asV1
	}
	get isV19(): productionStorage.RewardsValOwnersStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.RewardsValOwnersStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.RewardsValOwnersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.RewardsValOwnersStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.RewardsValOwnersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.RewardsValOwnersStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.RewardsValOwnersStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.RewardsValOwnersStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.RewardsValOwnersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.RewardsValOwnersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerAgendaStorage extends StorageBase {
	private readonly production: productionStorage.SchedulerAgendaStorage
	private readonly stage: stageStorage.SchedulerAgendaStorage
	private readonly dev: devStorage.SchedulerAgendaStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SchedulerAgendaStorage(ctx, storage)
		this.stage = new stageStorage.SchedulerAgendaStorage(ctx, storage)
		this.dev = new devStorage.SchedulerAgendaStorage(ctx, storage)
	}

	get isV1(): productionStorage.SchedulerAgendaStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SchedulerAgendaStorage['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionStorage.SchedulerAgendaStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.SchedulerAgendaStorage['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionStorage.SchedulerAgendaStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.SchedulerAgendaStorage['asV7'] {
		return this.production.asV7
	}
	get isV19(): productionStorage.SchedulerAgendaStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.SchedulerAgendaStorage['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionStorage.SchedulerAgendaStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.SchedulerAgendaStorage['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionStorage.SchedulerAgendaStorage['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionStorage.SchedulerAgendaStorage['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionStorage.SchedulerAgendaStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.SchedulerAgendaStorage['asV26'] {
		return this.production.asV26
	}
	get isV32(): productionStorage.SchedulerAgendaStorage['isV32'] {
		return this.production.isV32
	}
	get asV32(): productionStorage.SchedulerAgendaStorage['asV32'] {
		return this.production.asV32
	}
	get isV33(): productionStorage.SchedulerAgendaStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.SchedulerAgendaStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.SchedulerAgendaStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.SchedulerAgendaStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.SchedulerAgendaStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.SchedulerAgendaStorage['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionStorage.SchedulerAgendaStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.SchedulerAgendaStorage['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionStorage.SchedulerAgendaStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SchedulerAgendaStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.SchedulerAgendaStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.SchedulerAgendaStorage['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionStorage.SchedulerAgendaStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.SchedulerAgendaStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.SchedulerAgendaStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.SchedulerAgendaStorage['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionStorage.SchedulerAgendaStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.SchedulerAgendaStorage['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionStorage.SchedulerAgendaStorage['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionStorage.SchedulerAgendaStorage['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionStorage.SchedulerAgendaStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SchedulerAgendaStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV33(): stageStorage.SchedulerAgendaStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SchedulerAgendaStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV35(): stageStorage.SchedulerAgendaStorage['isV35'] {
		return this.stage.isV35
	}
	get asStageV35(): stageStorage.SchedulerAgendaStorage['asV35'] {
		return this.stage.asV35
	}
	get isStageV37(): stageStorage.SchedulerAgendaStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.SchedulerAgendaStorage['asV37'] {
		return this.stage.asV37
	}
	get isStageV38(): stageStorage.SchedulerAgendaStorage['isV38'] {
		return this.stage.isV38
	}
	get asStageV38(): stageStorage.SchedulerAgendaStorage['asV38'] {
		return this.stage.asV38
	}
	get isStageV42(): stageStorage.SchedulerAgendaStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SchedulerAgendaStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV43(): stageStorage.SchedulerAgendaStorage['isV43'] {
		return this.stage.isV43
	}
	get asStageV43(): stageStorage.SchedulerAgendaStorage['asV43'] {
		return this.stage.asV43
	}
	get isStageV44(): stageStorage.SchedulerAgendaStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.SchedulerAgendaStorage['asV44'] {
		return this.stage.asV44
	}
	get isStageV45(): stageStorage.SchedulerAgendaStorage['isV45'] {
		return this.stage.isV45
	}
	get asStageV45(): stageStorage.SchedulerAgendaStorage['asV45'] {
		return this.stage.asV45
	}
	get isStageV46(): stageStorage.SchedulerAgendaStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.SchedulerAgendaStorage['asV46'] {
		return this.stage.asV46
	}
	get isStageV47(): stageStorage.SchedulerAgendaStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.SchedulerAgendaStorage['asV47'] {
		return this.stage.asV47
	}
	get isStageV48(): stageStorage.SchedulerAgendaStorage['isV48'] {
		return this.stage.isV48
	}
	get asStageV48(): stageStorage.SchedulerAgendaStorage['asV48'] {
		return this.stage.asV48
	}
	get isStageV52(): stageStorage.SchedulerAgendaStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SchedulerAgendaStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV54(): stageStorage.SchedulerAgendaStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.SchedulerAgendaStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.SchedulerAgendaStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SchedulerAgendaStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
	private readonly production: productionStorage.SchedulerIncompleteSinceStorage
	private readonly stage: stageStorage.SchedulerIncompleteSinceStorage
	private readonly dev: devStorage.SchedulerIncompleteSinceStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SchedulerIncompleteSinceStorage(ctx, storage)
		this.stage = new stageStorage.SchedulerIncompleteSinceStorage(ctx, storage)
		this.dev = new devStorage.SchedulerIncompleteSinceStorage(ctx, storage)
	}

	get isV53(): productionStorage.SchedulerIncompleteSinceStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SchedulerIncompleteSinceStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV52(): stageStorage.SchedulerIncompleteSinceStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SchedulerIncompleteSinceStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.SchedulerIncompleteSinceStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SchedulerIncompleteSinceStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerLookupStorage extends StorageBase {
	private readonly production: productionStorage.SchedulerLookupStorage
	private readonly stage: stageStorage.SchedulerLookupStorage
	private readonly dev: devStorage.SchedulerLookupStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SchedulerLookupStorage(ctx, storage)
		this.stage = new stageStorage.SchedulerLookupStorage(ctx, storage)
		this.dev = new devStorage.SchedulerLookupStorage(ctx, storage)
	}

	get isV1(): productionStorage.SchedulerLookupStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SchedulerLookupStorage['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionStorage.SchedulerLookupStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SchedulerLookupStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV33(): stageStorage.SchedulerLookupStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SchedulerLookupStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV52(): stageStorage.SchedulerLookupStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SchedulerLookupStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.SchedulerLookupStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SchedulerLookupStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SchedulerStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.SchedulerStorageVersionStorage
	private readonly stage: stageStorage.SchedulerStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SchedulerStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.SchedulerStorageVersionStorage(ctx, storage)
	}

	get isV1(): productionStorage.SchedulerStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SchedulerStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SchedulerStorageVersionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SchedulerStorageVersionStorage['asV33'] {
		return this.stage.asV33
	}
}

export class SessionCurrentIndexStorage extends StorageBase {
	private readonly production: productionStorage.SessionCurrentIndexStorage
	private readonly stage: stageStorage.SessionCurrentIndexStorage
	private readonly dev: devStorage.SessionCurrentIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SessionCurrentIndexStorage(ctx, storage)
		this.stage = new stageStorage.SessionCurrentIndexStorage(ctx, storage)
		this.dev = new devStorage.SessionCurrentIndexStorage(ctx, storage)
	}

	get isV1(): productionStorage.SessionCurrentIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionCurrentIndexStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SessionCurrentIndexStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SessionCurrentIndexStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SessionCurrentIndexStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SessionCurrentIndexStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SessionDisabledValidatorsStorage extends StorageBase {
	private readonly production: productionStorage.SessionDisabledValidatorsStorage
	private readonly stage: stageStorage.SessionDisabledValidatorsStorage
	private readonly dev: devStorage.SessionDisabledValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SessionDisabledValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.SessionDisabledValidatorsStorage(ctx, storage)
		this.dev = new devStorage.SessionDisabledValidatorsStorage(ctx, storage)
	}

	get isV1(): productionStorage.SessionDisabledValidatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionDisabledValidatorsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SessionDisabledValidatorsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SessionDisabledValidatorsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SessionDisabledValidatorsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SessionDisabledValidatorsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SessionKeyOwnerStorage extends StorageBase {
	private readonly production: productionStorage.SessionKeyOwnerStorage
	private readonly stage: stageStorage.SessionKeyOwnerStorage
	private readonly dev: devStorage.SessionKeyOwnerStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SessionKeyOwnerStorage(ctx, storage)
		this.stage = new stageStorage.SessionKeyOwnerStorage(ctx, storage)
		this.dev = new devStorage.SessionKeyOwnerStorage(ctx, storage)
	}

	get isV1(): productionStorage.SessionKeyOwnerStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionKeyOwnerStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SessionKeyOwnerStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SessionKeyOwnerStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.SessionKeyOwnerStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SessionKeyOwnerStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.SessionKeyOwnerStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SessionKeyOwnerStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.SessionKeyOwnerStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SessionKeyOwnerStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SessionNextKeysStorage extends StorageBase {
	private readonly production: productionStorage.SessionNextKeysStorage
	private readonly stage: stageStorage.SessionNextKeysStorage
	private readonly dev: devStorage.SessionNextKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SessionNextKeysStorage(ctx, storage)
		this.stage = new stageStorage.SessionNextKeysStorage(ctx, storage)
		this.dev = new devStorage.SessionNextKeysStorage(ctx, storage)
	}

	get isV1(): productionStorage.SessionNextKeysStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionNextKeysStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SessionNextKeysStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SessionNextKeysStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.SessionNextKeysStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SessionNextKeysStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.SessionNextKeysStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SessionNextKeysStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.SessionNextKeysStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SessionNextKeysStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SessionQueuedChangedStorage extends StorageBase {
	private readonly production: productionStorage.SessionQueuedChangedStorage
	private readonly stage: stageStorage.SessionQueuedChangedStorage
	private readonly dev: devStorage.SessionQueuedChangedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SessionQueuedChangedStorage(ctx, storage)
		this.stage = new stageStorage.SessionQueuedChangedStorage(ctx, storage)
		this.dev = new devStorage.SessionQueuedChangedStorage(ctx, storage)
	}

	get isV1(): productionStorage.SessionQueuedChangedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionQueuedChangedStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SessionQueuedChangedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SessionQueuedChangedStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SessionQueuedChangedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SessionQueuedChangedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SessionQueuedKeysStorage extends StorageBase {
	private readonly production: productionStorage.SessionQueuedKeysStorage
	private readonly stage: stageStorage.SessionQueuedKeysStorage
	private readonly dev: devStorage.SessionQueuedKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SessionQueuedKeysStorage(ctx, storage)
		this.stage = new stageStorage.SessionQueuedKeysStorage(ctx, storage)
		this.dev = new devStorage.SessionQueuedKeysStorage(ctx, storage)
	}

	get isV1(): productionStorage.SessionQueuedKeysStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionQueuedKeysStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SessionQueuedKeysStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SessionQueuedKeysStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.SessionQueuedKeysStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SessionQueuedKeysStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.SessionQueuedKeysStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SessionQueuedKeysStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.SessionQueuedKeysStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SessionQueuedKeysStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SessionValidatorsStorage extends StorageBase {
	private readonly production: productionStorage.SessionValidatorsStorage
	private readonly stage: stageStorage.SessionValidatorsStorage
	private readonly dev: devStorage.SessionValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SessionValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.SessionValidatorsStorage(ctx, storage)
		this.dev = new devStorage.SessionValidatorsStorage(ctx, storage)
	}

	get isV1(): productionStorage.SessionValidatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SessionValidatorsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SessionValidatorsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SessionValidatorsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SessionValidatorsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SessionValidatorsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingActiveEraStorage extends StorageBase {
	private readonly production: productionStorage.StakingActiveEraStorage
	private readonly stage: stageStorage.StakingActiveEraStorage
	private readonly dev: devStorage.StakingActiveEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingActiveEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingActiveEraStorage(ctx, storage)
		this.dev = new devStorage.StakingActiveEraStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingActiveEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingActiveEraStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingActiveEraStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingActiveEraStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingActiveEraStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingActiveEraStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingBondedStorage extends StorageBase {
	private readonly production: productionStorage.StakingBondedStorage
	private readonly stage: stageStorage.StakingBondedStorage
	private readonly dev: devStorage.StakingBondedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingBondedStorage(ctx, storage)
		this.stage = new stageStorage.StakingBondedStorage(ctx, storage)
		this.dev = new devStorage.StakingBondedStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingBondedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingBondedStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingBondedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingBondedStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingBondedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingBondedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingBondedErasStorage extends StorageBase {
	private readonly production: productionStorage.StakingBondedErasStorage
	private readonly stage: stageStorage.StakingBondedErasStorage
	private readonly dev: devStorage.StakingBondedErasStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingBondedErasStorage(ctx, storage)
		this.stage = new stageStorage.StakingBondedErasStorage(ctx, storage)
		this.dev = new devStorage.StakingBondedErasStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingBondedErasStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingBondedErasStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingBondedErasStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingBondedErasStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingBondedErasStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingBondedErasStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingCanceledSlashPayoutStorage extends StorageBase {
	private readonly production: productionStorage.StakingCanceledSlashPayoutStorage
	private readonly stage: stageStorage.StakingCanceledSlashPayoutStorage
	private readonly dev: devStorage.StakingCanceledSlashPayoutStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingCanceledSlashPayoutStorage(ctx, storage)
		this.stage = new stageStorage.StakingCanceledSlashPayoutStorage(ctx, storage)
		this.dev = new devStorage.StakingCanceledSlashPayoutStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingCanceledSlashPayoutStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingCanceledSlashPayoutStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingCanceledSlashPayoutStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingCanceledSlashPayoutStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingCanceledSlashPayoutStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingCanceledSlashPayoutStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingChillThresholdStorage extends StorageBase {
	private readonly production: productionStorage.StakingChillThresholdStorage
	private readonly stage: stageStorage.StakingChillThresholdStorage
	private readonly dev: devStorage.StakingChillThresholdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingChillThresholdStorage(ctx, storage)
		this.stage = new stageStorage.StakingChillThresholdStorage(ctx, storage)
		this.dev = new devStorage.StakingChillThresholdStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingChillThresholdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingChillThresholdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingChillThresholdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingChillThresholdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingChillThresholdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingChillThresholdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingCounterForNominatorsStorage extends StorageBase {
	private readonly production: productionStorage.StakingCounterForNominatorsStorage
	private readonly stage: stageStorage.StakingCounterForNominatorsStorage
	private readonly dev: devStorage.StakingCounterForNominatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingCounterForNominatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingCounterForNominatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingCounterForNominatorsStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingCounterForNominatorsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingCounterForNominatorsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingCounterForNominatorsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingCounterForNominatorsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingCounterForNominatorsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingCounterForNominatorsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingCounterForValidatorsStorage extends StorageBase {
	private readonly production: productionStorage.StakingCounterForValidatorsStorage
	private readonly stage: stageStorage.StakingCounterForValidatorsStorage
	private readonly dev: devStorage.StakingCounterForValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingCounterForValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingCounterForValidatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingCounterForValidatorsStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingCounterForValidatorsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingCounterForValidatorsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingCounterForValidatorsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingCounterForValidatorsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingCounterForValidatorsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingCounterForValidatorsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingCurrentEraStorage extends StorageBase {
	private readonly production: productionStorage.StakingCurrentEraStorage
	private readonly stage: stageStorage.StakingCurrentEraStorage
	private readonly dev: devStorage.StakingCurrentEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingCurrentEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingCurrentEraStorage(ctx, storage)
		this.dev = new devStorage.StakingCurrentEraStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingCurrentEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingCurrentEraStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingCurrentEraStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingCurrentEraStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingCurrentEraStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingCurrentEraStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingCurrentPlannedSessionStorage extends StorageBase {
	private readonly production: productionStorage.StakingCurrentPlannedSessionStorage
	private readonly stage: stageStorage.StakingCurrentPlannedSessionStorage
	private readonly dev: devStorage.StakingCurrentPlannedSessionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingCurrentPlannedSessionStorage(ctx, storage)
		this.stage = new stageStorage.StakingCurrentPlannedSessionStorage(ctx, storage)
		this.dev = new devStorage.StakingCurrentPlannedSessionStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingCurrentPlannedSessionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingCurrentPlannedSessionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingCurrentPlannedSessionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingCurrentPlannedSessionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingCurrentPlannedSessionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingCurrentPlannedSessionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingEarliestUnappliedSlashStorage extends StorageBase {
	private readonly production: productionStorage.StakingEarliestUnappliedSlashStorage
	private readonly stage: stageStorage.StakingEarliestUnappliedSlashStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingEarliestUnappliedSlashStorage(ctx, storage)
		this.stage = new stageStorage.StakingEarliestUnappliedSlashStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingEarliestUnappliedSlashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingEarliestUnappliedSlashStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingEarliestUnappliedSlashStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingEarliestUnappliedSlashStorage['asV33'] {
		return this.stage.asV33
	}
}

export class StakingEraElectionStatusStorage extends StorageBase {
	private readonly production: productionStorage.StakingEraElectionStatusStorage
	private readonly stage: stageStorage.StakingEraElectionStatusStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingEraElectionStatusStorage(ctx, storage)
		this.stage = new stageStorage.StakingEraElectionStatusStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingEraElectionStatusStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingEraElectionStatusStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingEraElectionStatusStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingEraElectionStatusStorage['asV33'] {
		return this.stage.asV33
	}
}

export class StakingEraValBurnedStorage extends StorageBase {
	private readonly production: productionStorage.StakingEraValBurnedStorage
	private readonly stage: stageStorage.StakingEraValBurnedStorage
	private readonly dev: devStorage.StakingEraValBurnedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingEraValBurnedStorage(ctx, storage)
		this.stage = new stageStorage.StakingEraValBurnedStorage(ctx, storage)
		this.dev = new devStorage.StakingEraValBurnedStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingEraValBurnedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingEraValBurnedStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingEraValBurnedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingEraValBurnedStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingEraValBurnedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingEraValBurnedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingErasRewardPointsStorage extends StorageBase {
	private readonly production: productionStorage.StakingErasRewardPointsStorage
	private readonly stage: stageStorage.StakingErasRewardPointsStorage
	private readonly dev: devStorage.StakingErasRewardPointsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingErasRewardPointsStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasRewardPointsStorage(ctx, storage)
		this.dev = new devStorage.StakingErasRewardPointsStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingErasRewardPointsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasRewardPointsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingErasRewardPointsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingErasRewardPointsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingErasRewardPointsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingErasRewardPointsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingErasStakersStorage extends StorageBase {
	private readonly production: productionStorage.StakingErasStakersStorage
	private readonly stage: stageStorage.StakingErasStakersStorage
	private readonly dev: devStorage.StakingErasStakersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingErasStakersStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasStakersStorage(ctx, storage)
		this.dev = new devStorage.StakingErasStakersStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingErasStakersStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasStakersStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingErasStakersStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingErasStakersStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingErasStakersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingErasStakersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingErasStakersClippedStorage extends StorageBase {
	private readonly production: productionStorage.StakingErasStakersClippedStorage
	private readonly stage: stageStorage.StakingErasStakersClippedStorage
	private readonly dev: devStorage.StakingErasStakersClippedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingErasStakersClippedStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasStakersClippedStorage(ctx, storage)
		this.dev = new devStorage.StakingErasStakersClippedStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingErasStakersClippedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasStakersClippedStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingErasStakersClippedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingErasStakersClippedStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingErasStakersClippedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingErasStakersClippedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingErasStartSessionIndexStorage extends StorageBase {
	private readonly production: productionStorage.StakingErasStartSessionIndexStorage
	private readonly stage: stageStorage.StakingErasStartSessionIndexStorage
	private readonly dev: devStorage.StakingErasStartSessionIndexStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingErasStartSessionIndexStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasStartSessionIndexStorage(ctx, storage)
		this.dev = new devStorage.StakingErasStartSessionIndexStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingErasStartSessionIndexStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasStartSessionIndexStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingErasStartSessionIndexStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingErasStartSessionIndexStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingErasStartSessionIndexStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingErasStartSessionIndexStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingErasTotalStakeStorage extends StorageBase {
	private readonly production: productionStorage.StakingErasTotalStakeStorage
	private readonly stage: stageStorage.StakingErasTotalStakeStorage
	private readonly dev: devStorage.StakingErasTotalStakeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingErasTotalStakeStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasTotalStakeStorage(ctx, storage)
		this.dev = new devStorage.StakingErasTotalStakeStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingErasTotalStakeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasTotalStakeStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingErasTotalStakeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingErasTotalStakeStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingErasTotalStakeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingErasTotalStakeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingErasValidatorPrefsStorage extends StorageBase {
	private readonly production: productionStorage.StakingErasValidatorPrefsStorage
	private readonly stage: stageStorage.StakingErasValidatorPrefsStorage
	private readonly dev: devStorage.StakingErasValidatorPrefsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingErasValidatorPrefsStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasValidatorPrefsStorage(ctx, storage)
		this.dev = new devStorage.StakingErasValidatorPrefsStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingErasValidatorPrefsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasValidatorPrefsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingErasValidatorPrefsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingErasValidatorPrefsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingErasValidatorPrefsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingErasValidatorPrefsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingErasValidatorRewardStorage extends StorageBase {
	private readonly production: productionStorage.StakingErasValidatorRewardStorage
	private readonly stage: stageStorage.StakingErasValidatorRewardStorage
	private readonly dev: devStorage.StakingErasValidatorRewardStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingErasValidatorRewardStorage(ctx, storage)
		this.stage = new stageStorage.StakingErasValidatorRewardStorage(ctx, storage)
		this.dev = new devStorage.StakingErasValidatorRewardStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingErasValidatorRewardStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingErasValidatorRewardStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingErasValidatorRewardStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingErasValidatorRewardStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingErasValidatorRewardStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingErasValidatorRewardStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingForceEraStorage extends StorageBase {
	private readonly production: productionStorage.StakingForceEraStorage
	private readonly stage: stageStorage.StakingForceEraStorage
	private readonly dev: devStorage.StakingForceEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingForceEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingForceEraStorage(ctx, storage)
		this.dev = new devStorage.StakingForceEraStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingForceEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingForceEraStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingForceEraStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingForceEraStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingForceEraStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingForceEraStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingHistoryDepthStorage extends StorageBase {
	private readonly production: productionStorage.StakingHistoryDepthStorage
	private readonly stage: stageStorage.StakingHistoryDepthStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingHistoryDepthStorage(ctx, storage)
		this.stage = new stageStorage.StakingHistoryDepthStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingHistoryDepthStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingHistoryDepthStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingHistoryDepthStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingHistoryDepthStorage['asV33'] {
		return this.stage.asV33
	}
}

export class StakingInvulnerablesStorage extends StorageBase {
	private readonly production: productionStorage.StakingInvulnerablesStorage
	private readonly stage: stageStorage.StakingInvulnerablesStorage
	private readonly dev: devStorage.StakingInvulnerablesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingInvulnerablesStorage(ctx, storage)
		this.stage = new stageStorage.StakingInvulnerablesStorage(ctx, storage)
		this.dev = new devStorage.StakingInvulnerablesStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingInvulnerablesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingInvulnerablesStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingInvulnerablesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingInvulnerablesStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingInvulnerablesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingInvulnerablesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingIsCurrentSessionFinalStorage extends StorageBase {
	private readonly production: productionStorage.StakingIsCurrentSessionFinalStorage
	private readonly stage: stageStorage.StakingIsCurrentSessionFinalStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingIsCurrentSessionFinalStorage(ctx, storage)
		this.stage = new stageStorage.StakingIsCurrentSessionFinalStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingIsCurrentSessionFinalStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingIsCurrentSessionFinalStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingIsCurrentSessionFinalStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingIsCurrentSessionFinalStorage['asV33'] {
		return this.stage.asV33
	}
}

export class StakingLedgerStorage extends StorageBase {
	private readonly production: productionStorage.StakingLedgerStorage
	private readonly stage: stageStorage.StakingLedgerStorage
	private readonly dev: devStorage.StakingLedgerStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingLedgerStorage(ctx, storage)
		this.stage = new stageStorage.StakingLedgerStorage(ctx, storage)
		this.dev = new devStorage.StakingLedgerStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingLedgerStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingLedgerStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingLedgerStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingLedgerStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingLedgerStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingLedgerStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingMaxNominatorsCountStorage extends StorageBase {
	private readonly production: productionStorage.StakingMaxNominatorsCountStorage
	private readonly stage: stageStorage.StakingMaxNominatorsCountStorage
	private readonly dev: devStorage.StakingMaxNominatorsCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingMaxNominatorsCountStorage(ctx, storage)
		this.stage = new stageStorage.StakingMaxNominatorsCountStorage(ctx, storage)
		this.dev = new devStorage.StakingMaxNominatorsCountStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingMaxNominatorsCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMaxNominatorsCountStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingMaxNominatorsCountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingMaxNominatorsCountStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingMaxNominatorsCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingMaxNominatorsCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingMaxValidatorsCountStorage extends StorageBase {
	private readonly production: productionStorage.StakingMaxValidatorsCountStorage
	private readonly stage: stageStorage.StakingMaxValidatorsCountStorage
	private readonly dev: devStorage.StakingMaxValidatorsCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingMaxValidatorsCountStorage(ctx, storage)
		this.stage = new stageStorage.StakingMaxValidatorsCountStorage(ctx, storage)
		this.dev = new devStorage.StakingMaxValidatorsCountStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingMaxValidatorsCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMaxValidatorsCountStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingMaxValidatorsCountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingMaxValidatorsCountStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingMaxValidatorsCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingMaxValidatorsCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingMinCommissionStorage extends StorageBase {
	private readonly production: productionStorage.StakingMinCommissionStorage
	private readonly stage: stageStorage.StakingMinCommissionStorage
	private readonly dev: devStorage.StakingMinCommissionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingMinCommissionStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinCommissionStorage(ctx, storage)
		this.dev = new devStorage.StakingMinCommissionStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingMinCommissionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMinCommissionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingMinCommissionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingMinCommissionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingMinCommissionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingMinCommissionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingMinNominatorBondStorage extends StorageBase {
	private readonly production: productionStorage.StakingMinNominatorBondStorage
	private readonly stage: stageStorage.StakingMinNominatorBondStorage
	private readonly dev: devStorage.StakingMinNominatorBondStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingMinNominatorBondStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinNominatorBondStorage(ctx, storage)
		this.dev = new devStorage.StakingMinNominatorBondStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingMinNominatorBondStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMinNominatorBondStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingMinNominatorBondStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingMinNominatorBondStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingMinNominatorBondStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingMinNominatorBondStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingMinValidatorBondStorage extends StorageBase {
	private readonly production: productionStorage.StakingMinValidatorBondStorage
	private readonly stage: stageStorage.StakingMinValidatorBondStorage
	private readonly dev: devStorage.StakingMinValidatorBondStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingMinValidatorBondStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinValidatorBondStorage(ctx, storage)
		this.dev = new devStorage.StakingMinValidatorBondStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingMinValidatorBondStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingMinValidatorBondStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingMinValidatorBondStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingMinValidatorBondStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingMinValidatorBondStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingMinValidatorBondStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingMinimumActiveStakeStorage extends StorageBase {
	private readonly production: productionStorage.StakingMinimumActiveStakeStorage
	private readonly stage: stageStorage.StakingMinimumActiveStakeStorage
	private readonly dev: devStorage.StakingMinimumActiveStakeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingMinimumActiveStakeStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinimumActiveStakeStorage(ctx, storage)
		this.dev = new devStorage.StakingMinimumActiveStakeStorage(ctx, storage)
	}

	get isV53(): productionStorage.StakingMinimumActiveStakeStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.StakingMinimumActiveStakeStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV52(): stageStorage.StakingMinimumActiveStakeStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.StakingMinimumActiveStakeStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.StakingMinimumActiveStakeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingMinimumActiveStakeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingMinimumValidatorCountStorage extends StorageBase {
	private readonly production: productionStorage.StakingMinimumValidatorCountStorage
	private readonly stage: stageStorage.StakingMinimumValidatorCountStorage
	private readonly dev: devStorage.StakingMinimumValidatorCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingMinimumValidatorCountStorage(ctx, storage)
		this.stage = new stageStorage.StakingMinimumValidatorCountStorage(ctx, storage)
		this.dev = new devStorage.StakingMinimumValidatorCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingMinimumValidatorCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingMinimumValidatorCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingMinimumValidatorCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingMinimumValidatorCountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingMinimumValidatorCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingMinimumValidatorCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingNominatorSlashInEraStorage extends StorageBase {
	private readonly production: productionStorage.StakingNominatorSlashInEraStorage
	private readonly stage: stageStorage.StakingNominatorSlashInEraStorage
	private readonly dev: devStorage.StakingNominatorSlashInEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingNominatorSlashInEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingNominatorSlashInEraStorage(ctx, storage)
		this.dev = new devStorage.StakingNominatorSlashInEraStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingNominatorSlashInEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingNominatorSlashInEraStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingNominatorSlashInEraStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingNominatorSlashInEraStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingNominatorSlashInEraStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingNominatorSlashInEraStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingNominatorsStorage extends StorageBase {
	private readonly production: productionStorage.StakingNominatorsStorage
	private readonly stage: stageStorage.StakingNominatorsStorage
	private readonly dev: devStorage.StakingNominatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingNominatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingNominatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingNominatorsStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingNominatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingNominatorsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingNominatorsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingNominatorsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingNominatorsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingNominatorsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingOffendingValidatorsStorage extends StorageBase {
	private readonly production: productionStorage.StakingOffendingValidatorsStorage
	private readonly stage: stageStorage.StakingOffendingValidatorsStorage
	private readonly dev: devStorage.StakingOffendingValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingOffendingValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingOffendingValidatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingOffendingValidatorsStorage(ctx, storage)
	}

	get isV42(): productionStorage.StakingOffendingValidatorsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingOffendingValidatorsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.StakingOffendingValidatorsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingOffendingValidatorsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingOffendingValidatorsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingOffendingValidatorsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingPayeeStorage extends StorageBase {
	private readonly production: productionStorage.StakingPayeeStorage
	private readonly stage: stageStorage.StakingPayeeStorage
	private readonly dev: devStorage.StakingPayeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingPayeeStorage(ctx, storage)
		this.stage = new stageStorage.StakingPayeeStorage(ctx, storage)
		this.dev = new devStorage.StakingPayeeStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingPayeeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingPayeeStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingPayeeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingPayeeStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingPayeeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingPayeeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingQueuedElectedStorage extends StorageBase {
	private readonly production: productionStorage.StakingQueuedElectedStorage
	private readonly stage: stageStorage.StakingQueuedElectedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingQueuedElectedStorage(ctx, storage)
		this.stage = new stageStorage.StakingQueuedElectedStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingQueuedElectedStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingQueuedElectedStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingQueuedElectedStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingQueuedElectedStorage['asV33'] {
		return this.stage.asV33
	}
}

export class StakingQueuedScoreStorage extends StorageBase {
	private readonly production: productionStorage.StakingQueuedScoreStorage
	private readonly stage: stageStorage.StakingQueuedScoreStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingQueuedScoreStorage(ctx, storage)
		this.stage = new stageStorage.StakingQueuedScoreStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingQueuedScoreStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingQueuedScoreStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingQueuedScoreStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingQueuedScoreStorage['asV33'] {
		return this.stage.asV33
	}
}

export class StakingSlashRewardFractionStorage extends StorageBase {
	private readonly production: productionStorage.StakingSlashRewardFractionStorage
	private readonly stage: stageStorage.StakingSlashRewardFractionStorage
	private readonly dev: devStorage.StakingSlashRewardFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingSlashRewardFractionStorage(ctx, storage)
		this.stage = new stageStorage.StakingSlashRewardFractionStorage(ctx, storage)
		this.dev = new devStorage.StakingSlashRewardFractionStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingSlashRewardFractionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSlashRewardFractionStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingSlashRewardFractionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingSlashRewardFractionStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingSlashRewardFractionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingSlashRewardFractionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSlashingSpansStorage extends StorageBase {
	private readonly production: productionStorage.StakingSlashingSpansStorage
	private readonly stage: stageStorage.StakingSlashingSpansStorage
	private readonly dev: devStorage.StakingSlashingSpansStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingSlashingSpansStorage(ctx, storage)
		this.stage = new stageStorage.StakingSlashingSpansStorage(ctx, storage)
		this.dev = new devStorage.StakingSlashingSpansStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingSlashingSpansStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSlashingSpansStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingSlashingSpansStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingSlashingSpansStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingSlashingSpansStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingSlashingSpansStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingSnapshotNominatorsStorage extends StorageBase {
	private readonly production: productionStorage.StakingSnapshotNominatorsStorage
	private readonly stage: stageStorage.StakingSnapshotNominatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingSnapshotNominatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingSnapshotNominatorsStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingSnapshotNominatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSnapshotNominatorsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingSnapshotNominatorsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingSnapshotNominatorsStorage['asV33'] {
		return this.stage.asV33
	}
}

export class StakingSnapshotValidatorsStorage extends StorageBase {
	private readonly production: productionStorage.StakingSnapshotValidatorsStorage
	private readonly stage: stageStorage.StakingSnapshotValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingSnapshotValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingSnapshotValidatorsStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingSnapshotValidatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSnapshotValidatorsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingSnapshotValidatorsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingSnapshotValidatorsStorage['asV33'] {
		return this.stage.asV33
	}
}

export class StakingSpanSlashStorage extends StorageBase {
	private readonly production: productionStorage.StakingSpanSlashStorage
	private readonly stage: stageStorage.StakingSpanSlashStorage
	private readonly dev: devStorage.StakingSpanSlashStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingSpanSlashStorage(ctx, storage)
		this.stage = new stageStorage.StakingSpanSlashStorage(ctx, storage)
		this.dev = new devStorage.StakingSpanSlashStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingSpanSlashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingSpanSlashStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingSpanSlashStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingSpanSlashStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingSpanSlashStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingSpanSlashStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.StakingStorageVersionStorage
	private readonly stage: stageStorage.StakingStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.StakingStorageVersionStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.StakingStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.StakingStorageVersionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingStorageVersionStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.StakingStorageVersionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingStorageVersionStorage['asV42'] {
		return this.stage.asV42
	}
}

export class StakingTimeSinceGenesisStorage extends StorageBase {
	private readonly production: productionStorage.StakingTimeSinceGenesisStorage
	private readonly stage: stageStorage.StakingTimeSinceGenesisStorage
	private readonly dev: devStorage.StakingTimeSinceGenesisStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingTimeSinceGenesisStorage(ctx, storage)
		this.stage = new stageStorage.StakingTimeSinceGenesisStorage(ctx, storage)
		this.dev = new devStorage.StakingTimeSinceGenesisStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingTimeSinceGenesisStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingTimeSinceGenesisStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.StakingTimeSinceGenesisStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.StakingTimeSinceGenesisStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.StakingTimeSinceGenesisStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingTimeSinceGenesisStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.StakingTimeSinceGenesisStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.StakingTimeSinceGenesisStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.StakingTimeSinceGenesisStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingTimeSinceGenesisStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingUnappliedSlashesStorage extends StorageBase {
	private readonly production: productionStorage.StakingUnappliedSlashesStorage
	private readonly stage: stageStorage.StakingUnappliedSlashesStorage
	private readonly dev: devStorage.StakingUnappliedSlashesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingUnappliedSlashesStorage(ctx, storage)
		this.stage = new stageStorage.StakingUnappliedSlashesStorage(ctx, storage)
		this.dev = new devStorage.StakingUnappliedSlashesStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingUnappliedSlashesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingUnappliedSlashesStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingUnappliedSlashesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingUnappliedSlashesStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingUnappliedSlashesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingUnappliedSlashesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingValidatorCountStorage extends StorageBase {
	private readonly production: productionStorage.StakingValidatorCountStorage
	private readonly stage: stageStorage.StakingValidatorCountStorage
	private readonly dev: devStorage.StakingValidatorCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingValidatorCountStorage(ctx, storage)
		this.stage = new stageStorage.StakingValidatorCountStorage(ctx, storage)
		this.dev = new devStorage.StakingValidatorCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingValidatorCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingValidatorCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingValidatorCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingValidatorCountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingValidatorCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingValidatorCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingValidatorSlashInEraStorage extends StorageBase {
	private readonly production: productionStorage.StakingValidatorSlashInEraStorage
	private readonly stage: stageStorage.StakingValidatorSlashInEraStorage
	private readonly dev: devStorage.StakingValidatorSlashInEraStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingValidatorSlashInEraStorage(ctx, storage)
		this.stage = new stageStorage.StakingValidatorSlashInEraStorage(ctx, storage)
		this.dev = new devStorage.StakingValidatorSlashInEraStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingValidatorSlashInEraStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingValidatorSlashInEraStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingValidatorSlashInEraStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingValidatorSlashInEraStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingValidatorSlashInEraStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingValidatorSlashInEraStorage['asV60'] {
		return this.dev.asV60
	}
}

export class StakingValidatorsStorage extends StorageBase {
	private readonly production: productionStorage.StakingValidatorsStorage
	private readonly stage: stageStorage.StakingValidatorsStorage
	private readonly dev: devStorage.StakingValidatorsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.StakingValidatorsStorage(ctx, storage)
		this.stage = new stageStorage.StakingValidatorsStorage(ctx, storage)
		this.dev = new devStorage.StakingValidatorsStorage(ctx, storage)
	}

	get isV1(): productionStorage.StakingValidatorsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.StakingValidatorsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.StakingValidatorsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.StakingValidatorsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.StakingValidatorsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.StakingValidatorsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SudoKeyStorage extends StorageBase {
	private readonly production: productionStorage.SudoKeyStorage
	private readonly stage: stageStorage.SudoKeyStorage
	private readonly dev: devStorage.SudoKeyStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SudoKeyStorage(ctx, storage)
		this.stage = new stageStorage.SudoKeyStorage(ctx, storage)
		this.dev = new devStorage.SudoKeyStorage(ctx, storage)
	}

	get isV22(): productionStorage.SudoKeyStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.SudoKeyStorage['asV22'] {
		return this.production.asV22
	}
	get isStageV33(): stageStorage.SudoKeyStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SudoKeyStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.SudoKeyStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SudoKeyStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.SudoKeyStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SudoKeyStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemAccountStorage extends StorageBase {
	private readonly production: productionStorage.SystemAccountStorage
	private readonly stage: stageStorage.SystemAccountStorage
	private readonly dev: devStorage.SystemAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemAccountStorage(ctx, storage)
		this.stage = new stageStorage.SystemAccountStorage(ctx, storage)
		this.dev = new devStorage.SystemAccountStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemAccountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemAccountStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SystemAccountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemAccountStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.SystemAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.SystemAccountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SystemAccountStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.SystemAccountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemAccountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
	private readonly production: productionStorage.SystemAllExtrinsicsLenStorage
	private readonly stage: stageStorage.SystemAllExtrinsicsLenStorage
	private readonly dev: devStorage.SystemAllExtrinsicsLenStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemAllExtrinsicsLenStorage(ctx, storage)
		this.stage = new stageStorage.SystemAllExtrinsicsLenStorage(ctx, storage)
		this.dev = new devStorage.SystemAllExtrinsicsLenStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemAllExtrinsicsLenStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemAllExtrinsicsLenStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemAllExtrinsicsLenStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemAllExtrinsicsLenStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemAllExtrinsicsLenStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemAllExtrinsicsLenStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemBlockHashStorage extends StorageBase {
	private readonly production: productionStorage.SystemBlockHashStorage
	private readonly stage: stageStorage.SystemBlockHashStorage
	private readonly dev: devStorage.SystemBlockHashStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemBlockHashStorage(ctx, storage)
		this.stage = new stageStorage.SystemBlockHashStorage(ctx, storage)
		this.dev = new devStorage.SystemBlockHashStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemBlockHashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemBlockHashStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemBlockHashStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemBlockHashStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemBlockHashStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemBlockHashStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemBlockWeightStorage extends StorageBase {
	private readonly production: productionStorage.SystemBlockWeightStorage
	private readonly stage: stageStorage.SystemBlockWeightStorage
	private readonly dev: devStorage.SystemBlockWeightStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemBlockWeightStorage(ctx, storage)
		this.stage = new stageStorage.SystemBlockWeightStorage(ctx, storage)
		this.dev = new devStorage.SystemBlockWeightStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemBlockWeightStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemBlockWeightStorage['asV1'] {
		return this.production.asV1
	}
	get isV53(): productionStorage.SystemBlockWeightStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SystemBlockWeightStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV33(): stageStorage.SystemBlockWeightStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemBlockWeightStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV52(): stageStorage.SystemBlockWeightStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SystemBlockWeightStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.SystemBlockWeightStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemBlockWeightStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemDigestStorage extends StorageBase {
	private readonly production: productionStorage.SystemDigestStorage
	private readonly stage: stageStorage.SystemDigestStorage
	private readonly dev: devStorage.SystemDigestStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemDigestStorage(ctx, storage)
		this.stage = new stageStorage.SystemDigestStorage(ctx, storage)
		this.dev = new devStorage.SystemDigestStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemDigestStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemDigestStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SystemDigestStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemDigestStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.SystemDigestStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemDigestStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.SystemDigestStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SystemDigestStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.SystemDigestStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemDigestStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemEventCountStorage extends StorageBase {
	private readonly production: productionStorage.SystemEventCountStorage
	private readonly stage: stageStorage.SystemEventCountStorage
	private readonly dev: devStorage.SystemEventCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemEventCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemEventCountStorage(ctx, storage)
		this.dev = new devStorage.SystemEventCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemEventCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemEventCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemEventCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemEventCountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemEventCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemEventCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemEventTopicsStorage extends StorageBase {
	private readonly production: productionStorage.SystemEventTopicsStorage
	private readonly stage: stageStorage.SystemEventTopicsStorage
	private readonly dev: devStorage.SystemEventTopicsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemEventTopicsStorage(ctx, storage)
		this.stage = new stageStorage.SystemEventTopicsStorage(ctx, storage)
		this.dev = new devStorage.SystemEventTopicsStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemEventTopicsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemEventTopicsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemEventTopicsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemEventTopicsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemEventTopicsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemEventTopicsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemEventsStorage extends StorageBase {
	private readonly production: productionStorage.SystemEventsStorage
	private readonly stage: stageStorage.SystemEventsStorage
	private readonly dev: devStorage.SystemEventsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemEventsStorage(ctx, storage)
		this.stage = new stageStorage.SystemEventsStorage(ctx, storage)
		this.dev = new devStorage.SystemEventsStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemEventsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemEventsStorage['asV1'] {
		return this.production.asV1
	}
	get isV3(): productionStorage.SystemEventsStorage['isV3'] {
		return this.production.isV3
	}
	get asV3(): productionStorage.SystemEventsStorage['asV3'] {
		return this.production.asV3
	}
	get isV7(): productionStorage.SystemEventsStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.SystemEventsStorage['asV7'] {
		return this.production.asV7
	}
	get isV8(): productionStorage.SystemEventsStorage['isV8'] {
		return this.production.isV8
	}
	get asV8(): productionStorage.SystemEventsStorage['asV8'] {
		return this.production.asV8
	}
	get isV19(): productionStorage.SystemEventsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.SystemEventsStorage['asV19'] {
		return this.production.asV19
	}
	get isV22(): productionStorage.SystemEventsStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.SystemEventsStorage['asV22'] {
		return this.production.asV22
	}
	get isV23(): productionStorage.SystemEventsStorage['isV23'] {
		return this.production.isV23
	}
	get asV23(): productionStorage.SystemEventsStorage['asV23'] {
		return this.production.asV23
	}
	get isV26(): productionStorage.SystemEventsStorage['isV26'] {
		return this.production.isV26
	}
	get asV26(): productionStorage.SystemEventsStorage['asV26'] {
		return this.production.asV26
	}
	get isV33(): productionStorage.SystemEventsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.SystemEventsStorage['asV33'] {
		return this.production.asV33
	}
	get isV35(): productionStorage.SystemEventsStorage['isV35'] {
		return this.production.isV35
	}
	get asV35(): productionStorage.SystemEventsStorage['asV35'] {
		return this.production.asV35
	}
	get isV37(): productionStorage.SystemEventsStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.SystemEventsStorage['asV37'] {
		return this.production.asV37
	}
	get isV38(): productionStorage.SystemEventsStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.SystemEventsStorage['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionStorage.SystemEventsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemEventsStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.SystemEventsStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.SystemEventsStorage['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionStorage.SystemEventsStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.SystemEventsStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.SystemEventsStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.SystemEventsStorage['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionStorage.SystemEventsStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.SystemEventsStorage['asV47'] {
		return this.production.asV47
	}
	get isV53(): productionStorage.SystemEventsStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.SystemEventsStorage['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionStorage.SystemEventsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.SystemEventsStorage['asV57'] {
		return this.production.asV57
	}
	get isV60(): productionStorage.SystemEventsStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.SystemEventsStorage['asV60'] {
		return this.production.asV60
	}
	get isStageV33(): stageStorage.SystemEventsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemEventsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV35(): stageStorage.SystemEventsStorage['isV35'] {
		return this.stage.isV35
	}
	get asStageV35(): stageStorage.SystemEventsStorage['asV35'] {
		return this.stage.asV35
	}
	get isStageV37(): stageStorage.SystemEventsStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.SystemEventsStorage['asV37'] {
		return this.stage.asV37
	}
	get isStageV38(): stageStorage.SystemEventsStorage['isV38'] {
		return this.stage.isV38
	}
	get asStageV38(): stageStorage.SystemEventsStorage['asV38'] {
		return this.stage.asV38
	}
	get isStageV42(): stageStorage.SystemEventsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SystemEventsStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV43(): stageStorage.SystemEventsStorage['isV43'] {
		return this.stage.isV43
	}
	get asStageV43(): stageStorage.SystemEventsStorage['asV43'] {
		return this.stage.asV43
	}
	get isStageV44(): stageStorage.SystemEventsStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.SystemEventsStorage['asV44'] {
		return this.stage.asV44
	}
	get isStageV45(): stageStorage.SystemEventsStorage['isV45'] {
		return this.stage.isV45
	}
	get asStageV45(): stageStorage.SystemEventsStorage['asV45'] {
		return this.stage.asV45
	}
	get isStageV46(): stageStorage.SystemEventsStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.SystemEventsStorage['asV46'] {
		return this.stage.asV46
	}
	get isStageV47(): stageStorage.SystemEventsStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.SystemEventsStorage['asV47'] {
		return this.stage.asV47
	}
	get isStageV52(): stageStorage.SystemEventsStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SystemEventsStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV54(): stageStorage.SystemEventsStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.SystemEventsStorage['asV54'] {
		return this.stage.asV54
	}
	get isStageV55(): stageStorage.SystemEventsStorage['isV55'] {
		return this.stage.isV55
	}
	get asStageV55(): stageStorage.SystemEventsStorage['asV55'] {
		return this.stage.asV55
	}
	get isStageV57(): stageStorage.SystemEventsStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.SystemEventsStorage['asV57'] {
		return this.stage.asV57
	}
	get isStageV59(): stageStorage.SystemEventsStorage['isV59'] {
		return this.stage.isV59
	}
	get asStageV59(): stageStorage.SystemEventsStorage['asV59'] {
		return this.stage.asV59
	}
	get isStageV60(): stageStorage.SystemEventsStorage['isV60'] {
		return this.stage.isV60
	}
	get asStageV60(): stageStorage.SystemEventsStorage['asV60'] {
		return this.stage.asV60
	}
	get isDevV60(): devStorage.SystemEventsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemEventsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemExecutionPhaseStorage extends StorageBase {
	private readonly production: productionStorage.SystemExecutionPhaseStorage
	private readonly stage: stageStorage.SystemExecutionPhaseStorage
	private readonly dev: devStorage.SystemExecutionPhaseStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemExecutionPhaseStorage(ctx, storage)
		this.stage = new stageStorage.SystemExecutionPhaseStorage(ctx, storage)
		this.dev = new devStorage.SystemExecutionPhaseStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemExecutionPhaseStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemExecutionPhaseStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemExecutionPhaseStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemExecutionPhaseStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemExecutionPhaseStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemExecutionPhaseStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemExtrinsicCountStorage extends StorageBase {
	private readonly production: productionStorage.SystemExtrinsicCountStorage
	private readonly stage: stageStorage.SystemExtrinsicCountStorage
	private readonly dev: devStorage.SystemExtrinsicCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemExtrinsicCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemExtrinsicCountStorage(ctx, storage)
		this.dev = new devStorage.SystemExtrinsicCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemExtrinsicCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemExtrinsicCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemExtrinsicCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemExtrinsicCountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemExtrinsicCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemExtrinsicCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemExtrinsicDataStorage extends StorageBase {
	private readonly production: productionStorage.SystemExtrinsicDataStorage
	private readonly stage: stageStorage.SystemExtrinsicDataStorage
	private readonly dev: devStorage.SystemExtrinsicDataStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemExtrinsicDataStorage(ctx, storage)
		this.stage = new stageStorage.SystemExtrinsicDataStorage(ctx, storage)
		this.dev = new devStorage.SystemExtrinsicDataStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemExtrinsicDataStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemExtrinsicDataStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemExtrinsicDataStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemExtrinsicDataStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemExtrinsicDataStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemExtrinsicDataStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
	private readonly production: productionStorage.SystemLastRuntimeUpgradeStorage
	private readonly stage: stageStorage.SystemLastRuntimeUpgradeStorage
	private readonly dev: devStorage.SystemLastRuntimeUpgradeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemLastRuntimeUpgradeStorage(ctx, storage)
		this.stage = new stageStorage.SystemLastRuntimeUpgradeStorage(ctx, storage)
		this.dev = new devStorage.SystemLastRuntimeUpgradeStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemLastRuntimeUpgradeStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemLastRuntimeUpgradeStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.SystemLastRuntimeUpgradeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemLastRuntimeUpgradeStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.SystemLastRuntimeUpgradeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemLastRuntimeUpgradeStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.SystemLastRuntimeUpgradeStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SystemLastRuntimeUpgradeStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.SystemLastRuntimeUpgradeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemLastRuntimeUpgradeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemNumberStorage extends StorageBase {
	private readonly production: productionStorage.SystemNumberStorage
	private readonly stage: stageStorage.SystemNumberStorage
	private readonly dev: devStorage.SystemNumberStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemNumberStorage(ctx, storage)
		this.stage = new stageStorage.SystemNumberStorage(ctx, storage)
		this.dev = new devStorage.SystemNumberStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemNumberStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemNumberStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemNumberStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemNumberStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemNumberStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemNumberStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemParentHashStorage extends StorageBase {
	private readonly production: productionStorage.SystemParentHashStorage
	private readonly stage: stageStorage.SystemParentHashStorage
	private readonly dev: devStorage.SystemParentHashStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemParentHashStorage(ctx, storage)
		this.stage = new stageStorage.SystemParentHashStorage(ctx, storage)
		this.dev = new devStorage.SystemParentHashStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemParentHashStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemParentHashStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemParentHashStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemParentHashStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemParentHashStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemParentHashStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemUpgradedToDualRefCountStorage extends StorageBase {
	private readonly production: productionStorage.SystemUpgradedToDualRefCountStorage
	private readonly stage: stageStorage.SystemUpgradedToDualRefCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemUpgradedToDualRefCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemUpgradedToDualRefCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemUpgradedToDualRefCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemUpgradedToDualRefCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemUpgradedToDualRefCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemUpgradedToDualRefCountStorage['asV33'] {
		return this.stage.asV33
	}
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
	private readonly production: productionStorage.SystemUpgradedToTripleRefCountStorage
	private readonly stage: stageStorage.SystemUpgradedToTripleRefCountStorage
	private readonly dev: devStorage.SystemUpgradedToTripleRefCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemUpgradedToTripleRefCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemUpgradedToTripleRefCountStorage(ctx, storage)
		this.dev = new devStorage.SystemUpgradedToTripleRefCountStorage(ctx, storage)
	}

	get isV42(): productionStorage.SystemUpgradedToTripleRefCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.SystemUpgradedToTripleRefCountStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.SystemUpgradedToTripleRefCountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.SystemUpgradedToTripleRefCountStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.SystemUpgradedToTripleRefCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemUpgradedToTripleRefCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
	private readonly production: productionStorage.SystemUpgradedToU32RefCountStorage
	private readonly stage: stageStorage.SystemUpgradedToU32RefCountStorage
	private readonly dev: devStorage.SystemUpgradedToU32RefCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.SystemUpgradedToU32RefCountStorage(ctx, storage)
		this.stage = new stageStorage.SystemUpgradedToU32RefCountStorage(ctx, storage)
		this.dev = new devStorage.SystemUpgradedToU32RefCountStorage(ctx, storage)
	}

	get isV1(): productionStorage.SystemUpgradedToU32RefCountStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.SystemUpgradedToU32RefCountStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.SystemUpgradedToU32RefCountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.SystemUpgradedToU32RefCountStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.SystemUpgradedToU32RefCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SystemUpgradedToU32RefCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalTechAccountsStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalTechAccountsStorage
	private readonly stage: stageStorage.TechnicalTechAccountsStorage
	private readonly dev: devStorage.TechnicalTechAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalTechAccountsStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalTechAccountsStorage(ctx, storage)
		this.dev = new devStorage.TechnicalTechAccountsStorage(ctx, storage)
	}

	get isV45(): productionStorage.TechnicalTechAccountsStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.TechnicalTechAccountsStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.TechnicalTechAccountsStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.TechnicalTechAccountsStorage['asV46'] {
		return this.production.asV46
	}
	get isV57(): productionStorage.TechnicalTechAccountsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.TechnicalTechAccountsStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV44(): stageStorage.TechnicalTechAccountsStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.TechnicalTechAccountsStorage['asV44'] {
		return this.stage.asV44
	}
	get isStageV46(): stageStorage.TechnicalTechAccountsStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.TechnicalTechAccountsStorage['asV46'] {
		return this.stage.asV46
	}
	get isStageV54(): stageStorage.TechnicalTechAccountsStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.TechnicalTechAccountsStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.TechnicalTechAccountsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalTechAccountsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalCommitteeMembersStorage
	private readonly stage: stageStorage.TechnicalCommitteeMembersStorage
	private readonly dev: devStorage.TechnicalCommitteeMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalCommitteeMembersStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeMembersStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeMembersStorage(ctx, storage)
	}

	get isV42(): productionStorage.TechnicalCommitteeMembersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeMembersStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.TechnicalCommitteeMembersStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TechnicalCommitteeMembersStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TechnicalCommitteeMembersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalCommitteeMembersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalCommitteePrimeStorage
	private readonly stage: stageStorage.TechnicalCommitteePrimeStorage
	private readonly dev: devStorage.TechnicalCommitteePrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalCommitteePrimeStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteePrimeStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteePrimeStorage(ctx, storage)
	}

	get isV42(): productionStorage.TechnicalCommitteePrimeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteePrimeStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.TechnicalCommitteePrimeStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TechnicalCommitteePrimeStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TechnicalCommitteePrimeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalCommitteePrimeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalCommitteeProposalCountStorage
	private readonly stage: stageStorage.TechnicalCommitteeProposalCountStorage
	private readonly dev: devStorage.TechnicalCommitteeProposalCountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalCommitteeProposalCountStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeProposalCountStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeProposalCountStorage(ctx, storage)
	}

	get isV42(): productionStorage.TechnicalCommitteeProposalCountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeProposalCountStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.TechnicalCommitteeProposalCountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TechnicalCommitteeProposalCountStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TechnicalCommitteeProposalCountStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalCommitteeProposalCountStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalCommitteeProposalOfStorage
	private readonly stage: stageStorage.TechnicalCommitteeProposalOfStorage
	private readonly dev: devStorage.TechnicalCommitteeProposalOfStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalCommitteeProposalOfStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeProposalOfStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeProposalOfStorage(ctx, storage)
	}

	get isV42(): productionStorage.TechnicalCommitteeProposalOfStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeProposalOfStorage['asV42'] {
		return this.production.asV42
	}
	get isV43(): productionStorage.TechnicalCommitteeProposalOfStorage['isV43'] {
		return this.production.isV43
	}
	get asV43(): productionStorage.TechnicalCommitteeProposalOfStorage['asV43'] {
		return this.production.asV43
	}
	get isV45(): productionStorage.TechnicalCommitteeProposalOfStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.TechnicalCommitteeProposalOfStorage['asV45'] {
		return this.production.asV45
	}
	get isV46(): productionStorage.TechnicalCommitteeProposalOfStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.TechnicalCommitteeProposalOfStorage['asV46'] {
		return this.production.asV46
	}
	get isV47(): productionStorage.TechnicalCommitteeProposalOfStorage['isV47'] {
		return this.production.isV47
	}
	get asV47(): productionStorage.TechnicalCommitteeProposalOfStorage['asV47'] {
		return this.production.asV47
	}
	get isV50(): productionStorage.TechnicalCommitteeProposalOfStorage['isV50'] {
		return this.production.isV50
	}
	get asV50(): productionStorage.TechnicalCommitteeProposalOfStorage['asV50'] {
		return this.production.asV50
	}
	get isV53(): productionStorage.TechnicalCommitteeProposalOfStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.TechnicalCommitteeProposalOfStorage['asV53'] {
		return this.production.asV53
	}
	get isV57(): productionStorage.TechnicalCommitteeProposalOfStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.TechnicalCommitteeProposalOfStorage['asV57'] {
		return this.production.asV57
	}
	get isV59(): productionStorage.TechnicalCommitteeProposalOfStorage['isV59'] {
		return this.production.isV59
	}
	get asV59(): productionStorage.TechnicalCommitteeProposalOfStorage['asV59'] {
		return this.production.asV59
	}
	get isV60(): productionStorage.TechnicalCommitteeProposalOfStorage['isV60'] {
		return this.production.isV60
	}
	get asV60(): productionStorage.TechnicalCommitteeProposalOfStorage['asV60'] {
		return this.production.asV60
	}
	get isStageV42(): stageStorage.TechnicalCommitteeProposalOfStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TechnicalCommitteeProposalOfStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV43(): stageStorage.TechnicalCommitteeProposalOfStorage['isV43'] {
		return this.stage.isV43
	}
	get asStageV43(): stageStorage.TechnicalCommitteeProposalOfStorage['asV43'] {
		return this.stage.asV43
	}
	get isStageV44(): stageStorage.TechnicalCommitteeProposalOfStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.TechnicalCommitteeProposalOfStorage['asV44'] {
		return this.stage.asV44
	}
	get isStageV45(): stageStorage.TechnicalCommitteeProposalOfStorage['isV45'] {
		return this.stage.isV45
	}
	get asStageV45(): stageStorage.TechnicalCommitteeProposalOfStorage['asV45'] {
		return this.stage.asV45
	}
	get isStageV46(): stageStorage.TechnicalCommitteeProposalOfStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.TechnicalCommitteeProposalOfStorage['asV46'] {
		return this.stage.asV46
	}
	get isStageV47(): stageStorage.TechnicalCommitteeProposalOfStorage['isV47'] {
		return this.stage.isV47
	}
	get asStageV47(): stageStorage.TechnicalCommitteeProposalOfStorage['asV47'] {
		return this.stage.asV47
	}
	get isStageV48(): stageStorage.TechnicalCommitteeProposalOfStorage['isV48'] {
		return this.stage.isV48
	}
	get asStageV48(): stageStorage.TechnicalCommitteeProposalOfStorage['asV48'] {
		return this.stage.asV48
	}
	get isStageV52(): stageStorage.TechnicalCommitteeProposalOfStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.TechnicalCommitteeProposalOfStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV54(): stageStorage.TechnicalCommitteeProposalOfStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.TechnicalCommitteeProposalOfStorage['asV54'] {
		return this.stage.asV54
	}
	get isStageV55(): stageStorage.TechnicalCommitteeProposalOfStorage['isV55'] {
		return this.stage.isV55
	}
	get asStageV55(): stageStorage.TechnicalCommitteeProposalOfStorage['asV55'] {
		return this.stage.asV55
	}
	get isStageV57(): stageStorage.TechnicalCommitteeProposalOfStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.TechnicalCommitteeProposalOfStorage['asV57'] {
		return this.stage.asV57
	}
	get isStageV59(): stageStorage.TechnicalCommitteeProposalOfStorage['isV59'] {
		return this.stage.isV59
	}
	get asStageV59(): stageStorage.TechnicalCommitteeProposalOfStorage['asV59'] {
		return this.stage.asV59
	}
	get isStageV60(): stageStorage.TechnicalCommitteeProposalOfStorage['isV60'] {
		return this.stage.isV60
	}
	get asStageV60(): stageStorage.TechnicalCommitteeProposalOfStorage['asV60'] {
		return this.stage.asV60
	}
	get isDevV60(): devStorage.TechnicalCommitteeProposalOfStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalCommitteeProposalOfStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalCommitteeProposalsStorage
	private readonly stage: stageStorage.TechnicalCommitteeProposalsStorage
	private readonly dev: devStorage.TechnicalCommitteeProposalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalCommitteeProposalsStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeProposalsStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeProposalsStorage(ctx, storage)
	}

	get isV42(): productionStorage.TechnicalCommitteeProposalsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeProposalsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.TechnicalCommitteeProposalsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TechnicalCommitteeProposalsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TechnicalCommitteeProposalsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalCommitteeProposalsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalCommitteeVotingStorage
	private readonly stage: stageStorage.TechnicalCommitteeVotingStorage
	private readonly dev: devStorage.TechnicalCommitteeVotingStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalCommitteeVotingStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalCommitteeVotingStorage(ctx, storage)
		this.dev = new devStorage.TechnicalCommitteeVotingStorage(ctx, storage)
	}

	get isV42(): productionStorage.TechnicalCommitteeVotingStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalCommitteeVotingStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.TechnicalCommitteeVotingStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TechnicalCommitteeVotingStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TechnicalCommitteeVotingStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalCommitteeVotingStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipMembersStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalMembershipMembersStorage
	private readonly stage: stageStorage.TechnicalMembershipMembersStorage
	private readonly dev: devStorage.TechnicalMembershipMembersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalMembershipMembersStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalMembershipMembersStorage(ctx, storage)
		this.dev = new devStorage.TechnicalMembershipMembersStorage(ctx, storage)
	}

	get isV42(): productionStorage.TechnicalMembershipMembersStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalMembershipMembersStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.TechnicalMembershipMembersStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TechnicalMembershipMembersStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TechnicalMembershipMembersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalMembershipMembersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TechnicalMembershipPrimeStorage extends StorageBase {
	private readonly production: productionStorage.TechnicalMembershipPrimeStorage
	private readonly stage: stageStorage.TechnicalMembershipPrimeStorage
	private readonly dev: devStorage.TechnicalMembershipPrimeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TechnicalMembershipPrimeStorage(ctx, storage)
		this.stage = new stageStorage.TechnicalMembershipPrimeStorage(ctx, storage)
		this.dev = new devStorage.TechnicalMembershipPrimeStorage(ctx, storage)
	}

	get isV42(): productionStorage.TechnicalMembershipPrimeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TechnicalMembershipPrimeStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.TechnicalMembershipPrimeStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TechnicalMembershipPrimeStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TechnicalMembershipPrimeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TechnicalMembershipPrimeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TimestampDidUpdateStorage extends StorageBase {
	private readonly production: productionStorage.TimestampDidUpdateStorage
	private readonly stage: stageStorage.TimestampDidUpdateStorage
	private readonly dev: devStorage.TimestampDidUpdateStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TimestampDidUpdateStorage(ctx, storage)
		this.stage = new stageStorage.TimestampDidUpdateStorage(ctx, storage)
		this.dev = new devStorage.TimestampDidUpdateStorage(ctx, storage)
	}

	get isV1(): productionStorage.TimestampDidUpdateStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TimestampDidUpdateStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.TimestampDidUpdateStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.TimestampDidUpdateStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.TimestampDidUpdateStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TimestampDidUpdateStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TimestampNowStorage extends StorageBase {
	private readonly production: productionStorage.TimestampNowStorage
	private readonly stage: stageStorage.TimestampNowStorage
	private readonly dev: devStorage.TimestampNowStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TimestampNowStorage(ctx, storage)
		this.stage = new stageStorage.TimestampNowStorage(ctx, storage)
		this.dev = new devStorage.TimestampNowStorage(ctx, storage)
	}

	get isV1(): productionStorage.TimestampNowStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TimestampNowStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.TimestampNowStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.TimestampNowStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.TimestampNowStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TimestampNowStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TokensAccountsStorage extends StorageBase {
	private readonly production: productionStorage.TokensAccountsStorage
	private readonly stage: stageStorage.TokensAccountsStorage
	private readonly dev: devStorage.TokensAccountsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TokensAccountsStorage(ctx, storage)
		this.stage = new stageStorage.TokensAccountsStorage(ctx, storage)
		this.dev = new devStorage.TokensAccountsStorage(ctx, storage)
	}

	get isV1(): productionStorage.TokensAccountsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TokensAccountsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TokensAccountsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TokensAccountsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.TokensAccountsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.TokensAccountsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.TokensAccountsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TokensAccountsStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TokensAccountsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TokensAccountsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TokensLocksStorage extends StorageBase {
	private readonly production: productionStorage.TokensLocksStorage
	private readonly stage: stageStorage.TokensLocksStorage
	private readonly dev: devStorage.TokensLocksStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TokensLocksStorage(ctx, storage)
		this.stage = new stageStorage.TokensLocksStorage(ctx, storage)
		this.dev = new devStorage.TokensLocksStorage(ctx, storage)
	}

	get isV1(): productionStorage.TokensLocksStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TokensLocksStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TokensLocksStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TokensLocksStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.TokensLocksStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.TokensLocksStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.TokensLocksStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TokensLocksStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TokensLocksStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TokensLocksStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TokensReservesStorage extends StorageBase {
	private readonly production: productionStorage.TokensReservesStorage
	private readonly stage: stageStorage.TokensReservesStorage
	private readonly dev: devStorage.TokensReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TokensReservesStorage(ctx, storage)
		this.stage = new stageStorage.TokensReservesStorage(ctx, storage)
		this.dev = new devStorage.TokensReservesStorage(ctx, storage)
	}

	get isV42(): productionStorage.TokensReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TokensReservesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV42(): stageStorage.TokensReservesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TokensReservesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TokensReservesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TokensReservesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TokensTotalIssuanceStorage extends StorageBase {
	private readonly production: productionStorage.TokensTotalIssuanceStorage
	private readonly stage: stageStorage.TokensTotalIssuanceStorage
	private readonly dev: devStorage.TokensTotalIssuanceStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TokensTotalIssuanceStorage(ctx, storage)
		this.stage = new stageStorage.TokensTotalIssuanceStorage(ctx, storage)
		this.dev = new devStorage.TokensTotalIssuanceStorage(ctx, storage)
	}

	get isV1(): productionStorage.TokensTotalIssuanceStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TokensTotalIssuanceStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TokensTotalIssuanceStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TokensTotalIssuanceStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.TokensTotalIssuanceStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.TokensTotalIssuanceStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.TokensTotalIssuanceStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TokensTotalIssuanceStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TokensTotalIssuanceStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TokensTotalIssuanceStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TradingPairEnabledSourcesStorage extends StorageBase {
	private readonly production: productionStorage.TradingPairEnabledSourcesStorage
	private readonly stage: stageStorage.TradingPairEnabledSourcesStorage
	private readonly dev: devStorage.TradingPairEnabledSourcesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TradingPairEnabledSourcesStorage(ctx, storage)
		this.stage = new stageStorage.TradingPairEnabledSourcesStorage(ctx, storage)
		this.dev = new devStorage.TradingPairEnabledSourcesStorage(ctx, storage)
	}

	get isV1(): productionStorage.TradingPairEnabledSourcesStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TradingPairEnabledSourcesStorage['asV1'] {
		return this.production.asV1
	}
	get isV33(): productionStorage.TradingPairEnabledSourcesStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.TradingPairEnabledSourcesStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.TradingPairEnabledSourcesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TradingPairEnabledSourcesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.TradingPairEnabledSourcesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.TradingPairEnabledSourcesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.TradingPairEnabledSourcesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TradingPairEnabledSourcesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TradingPairEnabledSourcesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TradingPairEnabledSourcesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TradingPairLockedLiquiditySourcesStorage extends StorageBase {
	private readonly production: productionStorage.TradingPairLockedLiquiditySourcesStorage
	private readonly stage: stageStorage.TradingPairLockedLiquiditySourcesStorage
	private readonly dev: devStorage.TradingPairLockedLiquiditySourcesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TradingPairLockedLiquiditySourcesStorage(ctx, storage)
		this.stage = new stageStorage.TradingPairLockedLiquiditySourcesStorage(ctx, storage)
		this.dev = new devStorage.TradingPairLockedLiquiditySourcesStorage(ctx, storage)
	}

	get isV38(): productionStorage.TradingPairLockedLiquiditySourcesStorage['isV38'] {
		return this.production.isV38
	}
	get asV38(): productionStorage.TradingPairLockedLiquiditySourcesStorage['asV38'] {
		return this.production.asV38
	}
	get isV42(): productionStorage.TradingPairLockedLiquiditySourcesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TradingPairLockedLiquiditySourcesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV38(): stageStorage.TradingPairLockedLiquiditySourcesStorage['isV38'] {
		return this.stage.isV38
	}
	get asStageV38(): stageStorage.TradingPairLockedLiquiditySourcesStorage['asV38'] {
		return this.stage.asV38
	}
	get isStageV42(): stageStorage.TradingPairLockedLiquiditySourcesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TradingPairLockedLiquiditySourcesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TradingPairLockedLiquiditySourcesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TradingPairLockedLiquiditySourcesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
	private readonly production: productionStorage.TransactionPaymentNextFeeMultiplierStorage
	private readonly stage: stageStorage.TransactionPaymentNextFeeMultiplierStorage
	private readonly dev: devStorage.TransactionPaymentNextFeeMultiplierStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TransactionPaymentNextFeeMultiplierStorage(ctx, storage)
		this.stage = new stageStorage.TransactionPaymentNextFeeMultiplierStorage(ctx, storage)
		this.dev = new devStorage.TransactionPaymentNextFeeMultiplierStorage(ctx, storage)
	}

	get isV1(): productionStorage.TransactionPaymentNextFeeMultiplierStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TransactionPaymentNextFeeMultiplierStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TransactionPaymentNextFeeMultiplierStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TransactionPaymentNextFeeMultiplierStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.TransactionPaymentNextFeeMultiplierStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.TransactionPaymentNextFeeMultiplierStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.TransactionPaymentNextFeeMultiplierStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TransactionPaymentNextFeeMultiplierStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TransactionPaymentNextFeeMultiplierStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TransactionPaymentNextFeeMultiplierStorage['asV60'] {
		return this.dev.asV60
	}
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
	private readonly production: productionStorage.TransactionPaymentStorageVersionStorage
	private readonly stage: stageStorage.TransactionPaymentStorageVersionStorage
	private readonly dev: devStorage.TransactionPaymentStorageVersionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.TransactionPaymentStorageVersionStorage(ctx, storage)
		this.stage = new stageStorage.TransactionPaymentStorageVersionStorage(ctx, storage)
		this.dev = new devStorage.TransactionPaymentStorageVersionStorage(ctx, storage)
	}

	get isV1(): productionStorage.TransactionPaymentStorageVersionStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.TransactionPaymentStorageVersionStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.TransactionPaymentStorageVersionStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.TransactionPaymentStorageVersionStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.TransactionPaymentStorageVersionStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.TransactionPaymentStorageVersionStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.TransactionPaymentStorageVersionStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.TransactionPaymentStorageVersionStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.TransactionPaymentStorageVersionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.TransactionPaymentStorageVersionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsCrowdloanClaimHistoryStorage extends StorageBase {
	private readonly production: productionStorage.VestedRewardsCrowdloanClaimHistoryStorage
	private readonly stage: stageStorage.VestedRewardsCrowdloanClaimHistoryStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.VestedRewardsCrowdloanClaimHistoryStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsCrowdloanClaimHistoryStorage(ctx, storage)
	}

	get isV33(): productionStorage.VestedRewardsCrowdloanClaimHistoryStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.VestedRewardsCrowdloanClaimHistoryStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.VestedRewardsCrowdloanClaimHistoryStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.VestedRewardsCrowdloanClaimHistoryStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.VestedRewardsCrowdloanClaimHistoryStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.VestedRewardsCrowdloanClaimHistoryStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.VestedRewardsCrowdloanClaimHistoryStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.VestedRewardsCrowdloanClaimHistoryStorage['asV42'] {
		return this.stage.asV42
	}
}

export class VestedRewardsCrowdloanInfosStorage extends StorageBase {
	private readonly production: productionStorage.VestedRewardsCrowdloanInfosStorage
	private readonly stage: stageStorage.VestedRewardsCrowdloanInfosStorage
	private readonly dev: devStorage.VestedRewardsCrowdloanInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.VestedRewardsCrowdloanInfosStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsCrowdloanInfosStorage(ctx, storage)
		this.dev = new devStorage.VestedRewardsCrowdloanInfosStorage(ctx, storage)
	}

	get isV53(): productionStorage.VestedRewardsCrowdloanInfosStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.VestedRewardsCrowdloanInfosStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV52(): stageStorage.VestedRewardsCrowdloanInfosStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.VestedRewardsCrowdloanInfosStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.VestedRewardsCrowdloanInfosStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.VestedRewardsCrowdloanInfosStorage['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsCrowdloanRewardsStorage extends StorageBase {
	private readonly production: productionStorage.VestedRewardsCrowdloanRewardsStorage
	private readonly stage: stageStorage.VestedRewardsCrowdloanRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.VestedRewardsCrowdloanRewardsStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsCrowdloanRewardsStorage(ctx, storage)
	}

	get isV33(): productionStorage.VestedRewardsCrowdloanRewardsStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.VestedRewardsCrowdloanRewardsStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.VestedRewardsCrowdloanRewardsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.VestedRewardsCrowdloanRewardsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.VestedRewardsCrowdloanRewardsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.VestedRewardsCrowdloanRewardsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.VestedRewardsCrowdloanRewardsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.VestedRewardsCrowdloanRewardsStorage['asV42'] {
		return this.stage.asV42
	}
}

export class VestedRewardsCrowdloanUserInfosStorage extends StorageBase {
	private readonly production: productionStorage.VestedRewardsCrowdloanUserInfosStorage
	private readonly stage: stageStorage.VestedRewardsCrowdloanUserInfosStorage
	private readonly dev: devStorage.VestedRewardsCrowdloanUserInfosStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.VestedRewardsCrowdloanUserInfosStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsCrowdloanUserInfosStorage(ctx, storage)
		this.dev = new devStorage.VestedRewardsCrowdloanUserInfosStorage(ctx, storage)
	}

	get isV53(): productionStorage.VestedRewardsCrowdloanUserInfosStorage['isV53'] {
		return this.production.isV53
	}
	get asV53(): productionStorage.VestedRewardsCrowdloanUserInfosStorage['asV53'] {
		return this.production.asV53
	}
	get isStageV52(): stageStorage.VestedRewardsCrowdloanUserInfosStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.VestedRewardsCrowdloanUserInfosStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.VestedRewardsCrowdloanUserInfosStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.VestedRewardsCrowdloanUserInfosStorage['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsMarketMakersRegistryStorage extends StorageBase {
	private readonly production: productionStorage.VestedRewardsMarketMakersRegistryStorage
	private readonly stage: stageStorage.VestedRewardsMarketMakersRegistryStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.VestedRewardsMarketMakersRegistryStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsMarketMakersRegistryStorage(ctx, storage)
	}

	get isV1(): productionStorage.VestedRewardsMarketMakersRegistryStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.VestedRewardsMarketMakersRegistryStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.VestedRewardsMarketMakersRegistryStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.VestedRewardsMarketMakersRegistryStorage['asV33'] {
		return this.stage.asV33
	}
}

export class VestedRewardsMarketMakingPairsStorage extends StorageBase {
	private readonly production: productionStorage.VestedRewardsMarketMakingPairsStorage
	private readonly stage: stageStorage.VestedRewardsMarketMakingPairsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.VestedRewardsMarketMakingPairsStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsMarketMakingPairsStorage(ctx, storage)
	}

	get isV22(): productionStorage.VestedRewardsMarketMakingPairsStorage['isV22'] {
		return this.production.isV22
	}
	get asV22(): productionStorage.VestedRewardsMarketMakingPairsStorage['asV22'] {
		return this.production.asV22
	}
	get isV42(): productionStorage.VestedRewardsMarketMakingPairsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.VestedRewardsMarketMakingPairsStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.VestedRewardsMarketMakingPairsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.VestedRewardsMarketMakingPairsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.VestedRewardsMarketMakingPairsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.VestedRewardsMarketMakingPairsStorage['asV42'] {
		return this.stage.asV42
	}
}

export class VestedRewardsRewardsStorage extends StorageBase {
	private readonly production: productionStorage.VestedRewardsRewardsStorage
	private readonly stage: stageStorage.VestedRewardsRewardsStorage
	private readonly dev: devStorage.VestedRewardsRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.VestedRewardsRewardsStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsRewardsStorage(ctx, storage)
		this.dev = new devStorage.VestedRewardsRewardsStorage(ctx, storage)
	}

	get isV1(): productionStorage.VestedRewardsRewardsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.VestedRewardsRewardsStorage['asV1'] {
		return this.production.asV1
	}
	get isV42(): productionStorage.VestedRewardsRewardsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.VestedRewardsRewardsStorage['asV42'] {
		return this.production.asV42
	}
	get isV45(): productionStorage.VestedRewardsRewardsStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.VestedRewardsRewardsStorage['asV45'] {
		return this.production.asV45
	}
	get isStageV33(): stageStorage.VestedRewardsRewardsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.VestedRewardsRewardsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.VestedRewardsRewardsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.VestedRewardsRewardsStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV44(): stageStorage.VestedRewardsRewardsStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.VestedRewardsRewardsStorage['asV44'] {
		return this.stage.asV44
	}
	get isDevV60(): devStorage.VestedRewardsRewardsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.VestedRewardsRewardsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class VestedRewardsTotalRewardsStorage extends StorageBase {
	private readonly production: productionStorage.VestedRewardsTotalRewardsStorage
	private readonly stage: stageStorage.VestedRewardsTotalRewardsStorage
	private readonly dev: devStorage.VestedRewardsTotalRewardsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.VestedRewardsTotalRewardsStorage(ctx, storage)
		this.stage = new stageStorage.VestedRewardsTotalRewardsStorage(ctx, storage)
		this.dev = new devStorage.VestedRewardsTotalRewardsStorage(ctx, storage)
	}

	get isV1(): productionStorage.VestedRewardsTotalRewardsStorage['isV1'] {
		return this.production.isV1
	}
	get asV1(): productionStorage.VestedRewardsTotalRewardsStorage['asV1'] {
		return this.production.asV1
	}
	get isStageV33(): stageStorage.VestedRewardsTotalRewardsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.VestedRewardsTotalRewardsStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.VestedRewardsTotalRewardsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.VestedRewardsTotalRewardsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class XSTPoolBaseFeeStorage extends StorageBase {
	private readonly production: productionStorage.XSTPoolBaseFeeStorage
	private readonly stage: stageStorage.XSTPoolBaseFeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XSTPoolBaseFeeStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolBaseFeeStorage(ctx, storage)
	}

	get isV19(): productionStorage.XSTPoolBaseFeeStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolBaseFeeStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.XSTPoolBaseFeeStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolBaseFeeStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.XSTPoolBaseFeeStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.XSTPoolBaseFeeStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.XSTPoolBaseFeeStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.XSTPoolBaseFeeStorage['asV42'] {
		return this.stage.asV42
	}
}

export class XSTPoolCollateralReservesStorage extends StorageBase {
	private readonly production: productionStorage.XSTPoolCollateralReservesStorage
	private readonly stage: stageStorage.XSTPoolCollateralReservesStorage
	private readonly dev: devStorage.XSTPoolCollateralReservesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XSTPoolCollateralReservesStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolCollateralReservesStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolCollateralReservesStorage(ctx, storage)
	}

	get isV19(): productionStorage.XSTPoolCollateralReservesStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolCollateralReservesStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.XSTPoolCollateralReservesStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolCollateralReservesStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.XSTPoolCollateralReservesStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.XSTPoolCollateralReservesStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.XSTPoolCollateralReservesStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.XSTPoolCollateralReservesStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.XSTPoolCollateralReservesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.XSTPoolCollateralReservesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class XSTPoolEnabledSymbolsStorage extends StorageBase {
	private readonly production: productionStorage.XSTPoolEnabledSymbolsStorage
	private readonly stage: stageStorage.XSTPoolEnabledSymbolsStorage
	private readonly dev: devStorage.XSTPoolEnabledSymbolsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XSTPoolEnabledSymbolsStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolEnabledSymbolsStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolEnabledSymbolsStorage(ctx, storage)
	}

	get isV57(): productionStorage.XSTPoolEnabledSymbolsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.XSTPoolEnabledSymbolsStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV54(): stageStorage.XSTPoolEnabledSymbolsStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.XSTPoolEnabledSymbolsStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.XSTPoolEnabledSymbolsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.XSTPoolEnabledSymbolsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class XSTPoolEnabledSyntheticsStorage extends StorageBase {
	private readonly production: productionStorage.XSTPoolEnabledSyntheticsStorage
	private readonly stage: stageStorage.XSTPoolEnabledSyntheticsStorage
	private readonly dev: devStorage.XSTPoolEnabledSyntheticsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XSTPoolEnabledSyntheticsStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolEnabledSyntheticsStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolEnabledSyntheticsStorage(ctx, storage)
	}

	get isV19(): productionStorage.XSTPoolEnabledSyntheticsStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolEnabledSyntheticsStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.XSTPoolEnabledSyntheticsStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolEnabledSyntheticsStorage['asV42'] {
		return this.production.asV42
	}
	get isV57(): productionStorage.XSTPoolEnabledSyntheticsStorage['isV57'] {
		return this.production.isV57
	}
	get asV57(): productionStorage.XSTPoolEnabledSyntheticsStorage['asV57'] {
		return this.production.asV57
	}
	get isStageV33(): stageStorage.XSTPoolEnabledSyntheticsStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.XSTPoolEnabledSyntheticsStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.XSTPoolEnabledSyntheticsStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.XSTPoolEnabledSyntheticsStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV54(): stageStorage.XSTPoolEnabledSyntheticsStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.XSTPoolEnabledSyntheticsStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.XSTPoolEnabledSyntheticsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.XSTPoolEnabledSyntheticsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class XSTPoolPermissionedTechAccountStorage extends StorageBase {
	private readonly production: productionStorage.XSTPoolPermissionedTechAccountStorage
	private readonly stage: stageStorage.XSTPoolPermissionedTechAccountStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XSTPoolPermissionedTechAccountStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolPermissionedTechAccountStorage(ctx, storage)
	}

	get isV19(): productionStorage.XSTPoolPermissionedTechAccountStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolPermissionedTechAccountStorage['asV19'] {
		return this.production.asV19
	}
	get isV33(): productionStorage.XSTPoolPermissionedTechAccountStorage['isV33'] {
		return this.production.isV33
	}
	get asV33(): productionStorage.XSTPoolPermissionedTechAccountStorage['asV33'] {
		return this.production.asV33
	}
	get isV42(): productionStorage.XSTPoolPermissionedTechAccountStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolPermissionedTechAccountStorage['asV42'] {
		return this.production.asV42
	}
	get isV46(): productionStorage.XSTPoolPermissionedTechAccountStorage['isV46'] {
		return this.production.isV46
	}
	get asV46(): productionStorage.XSTPoolPermissionedTechAccountStorage['asV46'] {
		return this.production.asV46
	}
	get isStageV33(): stageStorage.XSTPoolPermissionedTechAccountStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.XSTPoolPermissionedTechAccountStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.XSTPoolPermissionedTechAccountStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.XSTPoolPermissionedTechAccountStorage['asV42'] {
		return this.stage.asV42
	}
	get isStageV46(): stageStorage.XSTPoolPermissionedTechAccountStorage['isV46'] {
		return this.stage.isV46
	}
	get asStageV46(): stageStorage.XSTPoolPermissionedTechAccountStorage['asV46'] {
		return this.stage.asV46
	}
}

export class XSTPoolReferenceAssetIdStorage extends StorageBase {
	private readonly production: productionStorage.XSTPoolReferenceAssetIdStorage
	private readonly stage: stageStorage.XSTPoolReferenceAssetIdStorage
	private readonly dev: devStorage.XSTPoolReferenceAssetIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XSTPoolReferenceAssetIdStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolReferenceAssetIdStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolReferenceAssetIdStorage(ctx, storage)
	}

	get isV19(): productionStorage.XSTPoolReferenceAssetIdStorage['isV19'] {
		return this.production.isV19
	}
	get asV19(): productionStorage.XSTPoolReferenceAssetIdStorage['asV19'] {
		return this.production.asV19
	}
	get isV42(): productionStorage.XSTPoolReferenceAssetIdStorage['isV42'] {
		return this.production.isV42
	}
	get asV42(): productionStorage.XSTPoolReferenceAssetIdStorage['asV42'] {
		return this.production.asV42
	}
	get isStageV33(): stageStorage.XSTPoolReferenceAssetIdStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.XSTPoolReferenceAssetIdStorage['asV33'] {
		return this.stage.asV33
	}
	get isStageV42(): stageStorage.XSTPoolReferenceAssetIdStorage['isV42'] {
		return this.stage.isV42
	}
	get asStageV42(): stageStorage.XSTPoolReferenceAssetIdStorage['asV42'] {
		return this.stage.asV42
	}
	get isDevV60(): devStorage.XSTPoolReferenceAssetIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.XSTPoolReferenceAssetIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class XSTPoolSyntheticBaseAssetFloorPriceStorage extends StorageBase {
	private readonly production: productionStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage
	private readonly stage: stageStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage
	private readonly dev: devStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage(ctx, storage)
		this.stage = new stageStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage(ctx, storage)
		this.dev = new devStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage(ctx, storage)
	}

	get isV45(): productionStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage['isV45'] {
		return this.production.isV45
	}
	get asV45(): productionStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage['asV45'] {
		return this.production.asV45
	}
	get isStageV44(): stageStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage['isV44'] {
		return this.stage.isV44
	}
	get asStageV44(): stageStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage['asV44'] {
		return this.stage.asV44
	}
	get isDevV60(): devStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.XSTPoolSyntheticBaseAssetFloorPriceStorage['asV60'] {
		return this.dev.asV60
	}
}

export class XorFeeMultiplierStorage extends StorageBase {
	private readonly production: productionStorage.XorFeeMultiplierStorage
	private readonly stage: stageStorage.XorFeeMultiplierStorage
	private readonly dev: devStorage.XorFeeMultiplierStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XorFeeMultiplierStorage(ctx, storage)
		this.stage = new stageStorage.XorFeeMultiplierStorage(ctx, storage)
		this.dev = new devStorage.XorFeeMultiplierStorage(ctx, storage)
	}

	get isV37(): productionStorage.XorFeeMultiplierStorage['isV37'] {
		return this.production.isV37
	}
	get asV37(): productionStorage.XorFeeMultiplierStorage['asV37'] {
		return this.production.asV37
	}
	get isStageV37(): stageStorage.XorFeeMultiplierStorage['isV37'] {
		return this.stage.isV37
	}
	get asStageV37(): stageStorage.XorFeeMultiplierStorage['asV37'] {
		return this.stage.asV37
	}
	get isDevV60(): devStorage.XorFeeMultiplierStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.XorFeeMultiplierStorage['asV60'] {
		return this.dev.asV60
	}
}

export class XorFeeXorToValStorage extends StorageBase {
	private readonly production: productionStorage.XorFeeXorToValStorage
	private readonly stage: stageStorage.XorFeeXorToValStorage
	private readonly dev: devStorage.XorFeeXorToValStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.production = new productionStorage.XorFeeXorToValStorage(ctx, storage)
		this.stage = new stageStorage.XorFeeXorToValStorage(ctx, storage)
		this.dev = new devStorage.XorFeeXorToValStorage(ctx, storage)
	}

	get isV7(): productionStorage.XorFeeXorToValStorage['isV7'] {
		return this.production.isV7
	}
	get asV7(): productionStorage.XorFeeXorToValStorage['asV7'] {
		return this.production.asV7
	}
	get isStageV33(): stageStorage.XorFeeXorToValStorage['isV33'] {
		return this.stage.isV33
	}
	get asStageV33(): stageStorage.XorFeeXorToValStorage['asV33'] {
		return this.stage.asV33
	}
	get isDevV60(): devStorage.XorFeeXorToValStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.XorFeeXorToValStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientCurrentValidatorSetStorage extends StorageBase {
	private readonly stage: stageStorage.BeefyLightClientCurrentValidatorSetStorage
	private readonly dev: devStorage.BeefyLightClientCurrentValidatorSetStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BeefyLightClientCurrentValidatorSetStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientCurrentValidatorSetStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BeefyLightClientCurrentValidatorSetStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BeefyLightClientCurrentValidatorSetStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BeefyLightClientCurrentValidatorSetStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyLightClientCurrentValidatorSetStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientLatestBeefyBlockStorage extends StorageBase {
	private readonly stage: stageStorage.BeefyLightClientLatestBeefyBlockStorage
	private readonly dev: devStorage.BeefyLightClientLatestBeefyBlockStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BeefyLightClientLatestBeefyBlockStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientLatestBeefyBlockStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BeefyLightClientLatestBeefyBlockStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BeefyLightClientLatestBeefyBlockStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BeefyLightClientLatestBeefyBlockStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyLightClientLatestBeefyBlockStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientLatestMMRRootsStorage extends StorageBase {
	private readonly stage: stageStorage.BeefyLightClientLatestMMRRootsStorage
	private readonly dev: devStorage.BeefyLightClientLatestMMRRootsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BeefyLightClientLatestMMRRootsStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientLatestMMRRootsStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BeefyLightClientLatestMMRRootsStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BeefyLightClientLatestMMRRootsStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BeefyLightClientLatestMMRRootsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyLightClientLatestMMRRootsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientLatestRandomSeedStorage extends StorageBase {
	private readonly stage: stageStorage.BeefyLightClientLatestRandomSeedStorage
	private readonly dev: devStorage.BeefyLightClientLatestRandomSeedStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BeefyLightClientLatestRandomSeedStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientLatestRandomSeedStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BeefyLightClientLatestRandomSeedStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BeefyLightClientLatestRandomSeedStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BeefyLightClientLatestRandomSeedStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyLightClientLatestRandomSeedStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientNextValidatorSetStorage extends StorageBase {
	private readonly stage: stageStorage.BeefyLightClientNextValidatorSetStorage
	private readonly dev: devStorage.BeefyLightClientNextValidatorSetStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BeefyLightClientNextValidatorSetStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientNextValidatorSetStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BeefyLightClientNextValidatorSetStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BeefyLightClientNextValidatorSetStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BeefyLightClientNextValidatorSetStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyLightClientNextValidatorSetStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BeefyLightClientThisNetworkIdStorage extends StorageBase {
	private readonly stage: stageStorage.BeefyLightClientThisNetworkIdStorage
	private readonly dev: devStorage.BeefyLightClientThisNetworkIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BeefyLightClientThisNetworkIdStorage(ctx, storage)
		this.dev = new devStorage.BeefyLightClientThisNetworkIdStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BeefyLightClientThisNetworkIdStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BeefyLightClientThisNetworkIdStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BeefyLightClientThisNetworkIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BeefyLightClientThisNetworkIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerApprovalsStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeDataSignerApprovalsStorage
	private readonly dev: devStorage.BridgeDataSignerApprovalsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeDataSignerApprovalsStorage(ctx, storage)
		this.dev = new devStorage.BridgeDataSignerApprovalsStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.BridgeDataSignerApprovalsStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.BridgeDataSignerApprovalsStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.BridgeDataSignerApprovalsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeDataSignerApprovalsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerPeersStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeDataSignerPeersStorage
	private readonly dev: devStorage.BridgeDataSignerPeersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeDataSignerPeersStorage(ctx, storage)
		this.dev = new devStorage.BridgeDataSignerPeersStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.BridgeDataSignerPeersStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.BridgeDataSignerPeersStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.BridgeDataSignerPeersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeDataSignerPeersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeDataSignerPendingPeerUpdateStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeDataSignerPendingPeerUpdateStorage
	private readonly dev: devStorage.BridgeDataSignerPendingPeerUpdateStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeDataSignerPendingPeerUpdateStorage(ctx, storage)
		this.dev = new devStorage.BridgeDataSignerPendingPeerUpdateStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.BridgeDataSignerPendingPeerUpdateStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.BridgeDataSignerPendingPeerUpdateStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.BridgeDataSignerPendingPeerUpdateStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeDataSignerPendingPeerUpdateStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelChannelAddressesStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeInboundChannelChannelAddressesStorage
	private readonly dev: devStorage.BridgeInboundChannelChannelAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeInboundChannelChannelAddressesStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelChannelAddressesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeInboundChannelChannelAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeInboundChannelChannelAddressesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeInboundChannelChannelAddressesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeInboundChannelChannelAddressesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelChannelNoncesStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeInboundChannelChannelNoncesStorage
	private readonly dev: devStorage.BridgeInboundChannelChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeInboundChannelChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelChannelNoncesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeInboundChannelChannelNoncesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeInboundChannelChannelNoncesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeInboundChannelChannelNoncesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeInboundChannelChannelNoncesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelInboundChannelAddressesStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeInboundChannelInboundChannelAddressesStorage
	private readonly dev: devStorage.BridgeInboundChannelInboundChannelAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeInboundChannelInboundChannelAddressesStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelInboundChannelAddressesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeInboundChannelInboundChannelAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeInboundChannelInboundChannelAddressesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeInboundChannelInboundChannelAddressesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeInboundChannelInboundChannelAddressesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelInboundChannelNoncesStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeInboundChannelInboundChannelNoncesStorage
	private readonly dev: devStorage.BridgeInboundChannelInboundChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeInboundChannelInboundChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelInboundChannelNoncesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeInboundChannelInboundChannelNoncesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeInboundChannelInboundChannelNoncesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeInboundChannelInboundChannelNoncesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeInboundChannelInboundChannelNoncesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeInboundChannelRewardFractionStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeInboundChannelRewardFractionStorage
	private readonly dev: devStorage.BridgeInboundChannelRewardFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeInboundChannelRewardFractionStorage(ctx, storage)
		this.dev = new devStorage.BridgeInboundChannelRewardFractionStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeInboundChannelRewardFractionStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeInboundChannelRewardFractionStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeInboundChannelRewardFractionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeInboundChannelRewardFractionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeOutboundChannelChannelNoncesStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeOutboundChannelChannelNoncesStorage
	private readonly dev: devStorage.BridgeOutboundChannelChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeOutboundChannelChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelChannelNoncesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeOutboundChannelChannelNoncesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeOutboundChannelChannelNoncesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeOutboundChannelChannelNoncesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeOutboundChannelChannelNoncesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeOutboundChannelFeeStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeOutboundChannelFeeStorage
	private readonly dev: devStorage.BridgeOutboundChannelFeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeOutboundChannelFeeStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelFeeStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeOutboundChannelFeeStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeOutboundChannelFeeStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeOutboundChannelFeeStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeOutboundChannelFeeStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeOutboundChannelIntervalStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeOutboundChannelIntervalStorage
	private readonly dev: devStorage.BridgeOutboundChannelIntervalStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeOutboundChannelIntervalStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelIntervalStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeOutboundChannelIntervalStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeOutboundChannelIntervalStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeOutboundChannelIntervalStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeOutboundChannelIntervalStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeOutboundChannelMessageQueuesStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeOutboundChannelMessageQueuesStorage
	private readonly dev: devStorage.BridgeOutboundChannelMessageQueuesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeOutboundChannelMessageQueuesStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelMessageQueuesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV55(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['isV55'] {
		return this.stage.isV55
	}
	get asStageV55(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['asV55'] {
		return this.stage.asV55
	}
	get isStageV57(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.BridgeOutboundChannelMessageQueuesStorage['asV57'] {
		return this.stage.asV57
	}
	get isDevV60(): devStorage.BridgeOutboundChannelMessageQueuesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeOutboundChannelMessageQueuesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeOutboundChannelQueuesTotalGasStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeOutboundChannelQueuesTotalGasStorage
	private readonly dev: devStorage.BridgeOutboundChannelQueuesTotalGasStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeOutboundChannelQueuesTotalGasStorage(ctx, storage)
		this.dev = new devStorage.BridgeOutboundChannelQueuesTotalGasStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.BridgeOutboundChannelQueuesTotalGasStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.BridgeOutboundChannelQueuesTotalGasStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.BridgeOutboundChannelQueuesTotalGasStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeOutboundChannelQueuesTotalGasStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyLockedAssetsStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeProxyLockedAssetsStorage
	private readonly dev: devStorage.BridgeProxyLockedAssetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeProxyLockedAssetsStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxyLockedAssetsStorage(ctx, storage)
	}

	get isStageV57(): stageStorage.BridgeProxyLockedAssetsStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.BridgeProxyLockedAssetsStorage['asV57'] {
		return this.stage.asV57
	}
	get isDevV60(): devStorage.BridgeProxyLockedAssetsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeProxyLockedAssetsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxySendersStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeProxySendersStorage
	private readonly dev: devStorage.BridgeProxySendersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeProxySendersStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxySendersStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.BridgeProxySendersStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.BridgeProxySendersStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.BridgeProxySendersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeProxySendersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxySidechainFeePaidStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeProxySidechainFeePaidStorage
	private readonly dev: devStorage.BridgeProxySidechainFeePaidStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeProxySidechainFeePaidStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxySidechainFeePaidStorage(ctx, storage)
	}

	get isStageV55(): stageStorage.BridgeProxySidechainFeePaidStorage['isV55'] {
		return this.stage.isV55
	}
	get asStageV55(): stageStorage.BridgeProxySidechainFeePaidStorage['asV55'] {
		return this.stage.asV55
	}
	get isDevV60(): devStorage.BridgeProxySidechainFeePaidStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeProxySidechainFeePaidStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyTransactionsStorage extends StorageBase {
	private readonly stage: stageStorage.BridgeProxyTransactionsStorage
	private readonly dev: devStorage.BridgeProxyTransactionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.BridgeProxyTransactionsStorage(ctx, storage)
		this.dev = new devStorage.BridgeProxyTransactionsStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.BridgeProxyTransactionsStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.BridgeProxyTransactionsStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.BridgeProxyTransactionsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeProxyTransactionsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ERC20AppAppAddressesStorage extends StorageBase {
	private readonly stage: stageStorage.ERC20AppAppAddressesStorage
	private readonly dev: devStorage.ERC20AppAppAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.ERC20AppAppAddressesStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppAppAddressesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.ERC20AppAppAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.ERC20AppAppAddressesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.ERC20AppAppAddressesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ERC20AppAppAddressesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ERC20AppAssetKindsStorage extends StorageBase {
	private readonly stage: stageStorage.ERC20AppAssetKindsStorage
	private readonly dev: devStorage.ERC20AppAssetKindsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.ERC20AppAssetKindsStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppAssetKindsStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.ERC20AppAssetKindsStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.ERC20AppAssetKindsStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.ERC20AppAssetKindsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ERC20AppAssetKindsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ERC20AppAssetsByAddressesStorage extends StorageBase {
	private readonly stage: stageStorage.ERC20AppAssetsByAddressesStorage
	private readonly dev: devStorage.ERC20AppAssetsByAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.ERC20AppAssetsByAddressesStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppAssetsByAddressesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.ERC20AppAssetsByAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.ERC20AppAssetsByAddressesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.ERC20AppAssetsByAddressesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ERC20AppAssetsByAddressesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ERC20AppSidechainPrecisionStorage extends StorageBase {
	private readonly stage: stageStorage.ERC20AppSidechainPrecisionStorage
	private readonly dev: devStorage.ERC20AppSidechainPrecisionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.ERC20AppSidechainPrecisionStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppSidechainPrecisionStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.ERC20AppSidechainPrecisionStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.ERC20AppSidechainPrecisionStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.ERC20AppSidechainPrecisionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ERC20AppSidechainPrecisionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class ERC20AppTokenAddressesStorage extends StorageBase {
	private readonly stage: stageStorage.ERC20AppTokenAddressesStorage
	private readonly dev: devStorage.ERC20AppTokenAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.ERC20AppTokenAddressesStorage(ctx, storage)
		this.dev = new devStorage.ERC20AppTokenAddressesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.ERC20AppTokenAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.ERC20AppTokenAddressesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.ERC20AppTokenAddressesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.ERC20AppTokenAddressesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthAppAddressesStorage extends StorageBase {
	private readonly stage: stageStorage.EthAppAddressesStorage
	private readonly dev: devStorage.EthAppAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EthAppAddressesStorage(ctx, storage)
		this.dev = new devStorage.EthAppAddressesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EthAppAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EthAppAddressesStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV54(): stageStorage.EthAppAddressesStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.EthAppAddressesStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.EthAppAddressesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthAppAddressesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientBestBlockStorage extends StorageBase {
	private readonly stage: stageStorage.EthereumLightClientBestBlockStorage
	private readonly dev: devStorage.EthereumLightClientBestBlockStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EthereumLightClientBestBlockStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientBestBlockStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EthereumLightClientBestBlockStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EthereumLightClientBestBlockStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.EthereumLightClientBestBlockStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthereumLightClientBestBlockStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientBlocksToPruneStorage extends StorageBase {
	private readonly stage: stageStorage.EthereumLightClientBlocksToPruneStorage
	private readonly dev: devStorage.EthereumLightClientBlocksToPruneStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EthereumLightClientBlocksToPruneStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientBlocksToPruneStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EthereumLightClientBlocksToPruneStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EthereumLightClientBlocksToPruneStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.EthereumLightClientBlocksToPruneStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthereumLightClientBlocksToPruneStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientFinalizedBlockStorage extends StorageBase {
	private readonly stage: stageStorage.EthereumLightClientFinalizedBlockStorage
	private readonly dev: devStorage.EthereumLightClientFinalizedBlockStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EthereumLightClientFinalizedBlockStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientFinalizedBlockStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EthereumLightClientFinalizedBlockStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EthereumLightClientFinalizedBlockStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.EthereumLightClientFinalizedBlockStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthereumLightClientFinalizedBlockStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientHeadersStorage extends StorageBase {
	private readonly stage: stageStorage.EthereumLightClientHeadersStorage
	private readonly dev: devStorage.EthereumLightClientHeadersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EthereumLightClientHeadersStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientHeadersStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EthereumLightClientHeadersStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EthereumLightClientHeadersStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.EthereumLightClientHeadersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthereumLightClientHeadersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientHeadersByNumberStorage extends StorageBase {
	private readonly stage: stageStorage.EthereumLightClientHeadersByNumberStorage
	private readonly dev: devStorage.EthereumLightClientHeadersByNumberStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EthereumLightClientHeadersByNumberStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientHeadersByNumberStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EthereumLightClientHeadersByNumberStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EthereumLightClientHeadersByNumberStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.EthereumLightClientHeadersByNumberStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthereumLightClientHeadersByNumberStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EthereumLightClientNetworkConfigStorage extends StorageBase {
	private readonly stage: stageStorage.EthereumLightClientNetworkConfigStorage
	private readonly dev: devStorage.EthereumLightClientNetworkConfigStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EthereumLightClientNetworkConfigStorage(ctx, storage)
		this.dev = new devStorage.EthereumLightClientNetworkConfigStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EthereumLightClientNetworkConfigStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EthereumLightClientNetworkConfigStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.EthereumLightClientNetworkConfigStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.EthereumLightClientNetworkConfigStorage['asV60'] {
		return this.dev.asV60
	}
}

export class EvmBridgeProxySendersStorage extends StorageBase {
	private readonly stage: stageStorage.EvmBridgeProxySendersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EvmBridgeProxySendersStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EvmBridgeProxySendersStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EvmBridgeProxySendersStorage['asV52'] {
		return this.stage.asV52
	}
}

export class EvmBridgeProxyTransactionsStorage extends StorageBase {
	private readonly stage: stageStorage.EvmBridgeProxyTransactionsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.EvmBridgeProxyTransactionsStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.EvmBridgeProxyTransactionsStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.EvmBridgeProxyTransactionsStorage['asV52'] {
		return this.stage.asV52
	}
}

export class LeafProviderLatestDigestStorage extends StorageBase {
	private readonly stage: stageStorage.LeafProviderLatestDigestStorage
	private readonly dev: devStorage.LeafProviderLatestDigestStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.LeafProviderLatestDigestStorage(ctx, storage)
		this.dev = new devStorage.LeafProviderLatestDigestStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.LeafProviderLatestDigestStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.LeafProviderLatestDigestStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV54(): stageStorage.LeafProviderLatestDigestStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.LeafProviderLatestDigestStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.LeafProviderLatestDigestStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.LeafProviderLatestDigestStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MigrationAppAddressesStorage extends StorageBase {
	private readonly stage: stageStorage.MigrationAppAddressesStorage
	private readonly dev: devStorage.MigrationAppAddressesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.MigrationAppAddressesStorage(ctx, storage)
		this.dev = new devStorage.MigrationAppAddressesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.MigrationAppAddressesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.MigrationAppAddressesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.MigrationAppAddressesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MigrationAppAddressesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MmrNodesStorage extends StorageBase {
	private readonly stage: stageStorage.MmrNodesStorage
	private readonly dev: devStorage.MmrNodesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.MmrNodesStorage(ctx, storage)
		this.dev = new devStorage.MmrNodesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.MmrNodesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.MmrNodesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.MmrNodesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MmrNodesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MmrNumberOfLeavesStorage extends StorageBase {
	private readonly stage: stageStorage.MmrNumberOfLeavesStorage
	private readonly dev: devStorage.MmrNumberOfLeavesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.MmrNumberOfLeavesStorage(ctx, storage)
		this.dev = new devStorage.MmrNumberOfLeavesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.MmrNumberOfLeavesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.MmrNumberOfLeavesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.MmrNumberOfLeavesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MmrNumberOfLeavesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MmrRootHashStorage extends StorageBase {
	private readonly stage: stageStorage.MmrRootHashStorage
	private readonly dev: devStorage.MmrRootHashStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.MmrRootHashStorage(ctx, storage)
		this.dev = new devStorage.MmrRootHashStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.MmrRootHashStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.MmrRootHashStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.MmrRootHashStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MmrRootHashStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MmrLeafBeefyAuthoritiesStorage extends StorageBase {
	private readonly stage: stageStorage.MmrLeafBeefyAuthoritiesStorage
	private readonly dev: devStorage.MmrLeafBeefyAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.MmrLeafBeefyAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.MmrLeafBeefyAuthoritiesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.MmrLeafBeefyAuthoritiesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.MmrLeafBeefyAuthoritiesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.MmrLeafBeefyAuthoritiesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MmrLeafBeefyAuthoritiesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MmrLeafBeefyNextAuthoritiesStorage extends StorageBase {
	private readonly stage: stageStorage.MmrLeafBeefyNextAuthoritiesStorage
	private readonly dev: devStorage.MmrLeafBeefyNextAuthoritiesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.MmrLeafBeefyNextAuthoritiesStorage(ctx, storage)
		this.dev = new devStorage.MmrLeafBeefyNextAuthoritiesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.MmrLeafBeefyNextAuthoritiesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.MmrLeafBeefyNextAuthoritiesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.MmrLeafBeefyNextAuthoritiesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MmrLeafBeefyNextAuthoritiesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierPeerKeysStorage extends StorageBase {
	private readonly stage: stageStorage.MultisigVerifierPeerKeysStorage
	private readonly dev: devStorage.MultisigVerifierPeerKeysStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.MultisigVerifierPeerKeysStorage(ctx, storage)
		this.dev = new devStorage.MultisigVerifierPeerKeysStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.MultisigVerifierPeerKeysStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.MultisigVerifierPeerKeysStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.MultisigVerifierPeerKeysStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MultisigVerifierPeerKeysStorage['asV60'] {
		return this.dev.asV60
	}
}

export class MultisigVerifierThisNetworkIdStorage extends StorageBase {
	private readonly stage: stageStorage.MultisigVerifierThisNetworkIdStorage
	private readonly dev: devStorage.MultisigVerifierThisNetworkIdStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.MultisigVerifierThisNetworkIdStorage(ctx, storage)
		this.dev = new devStorage.MultisigVerifierThisNetworkIdStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.MultisigVerifierThisNetworkIdStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.MultisigVerifierThisNetworkIdStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.MultisigVerifierThisNetworkIdStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.MultisigVerifierThisNetworkIdStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppAllowedParachainAssetsStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeAppAllowedParachainAssetsStorage
	private readonly dev: devStorage.SubstrateBridgeAppAllowedParachainAssetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeAppAllowedParachainAssetsStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeAppAllowedParachainAssetsStorage(ctx, storage)
	}

	get isStageV57(): stageStorage.SubstrateBridgeAppAllowedParachainAssetsStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.SubstrateBridgeAppAllowedParachainAssetsStorage['asV57'] {
		return this.stage.asV57
	}
	get isDevV60(): devStorage.SubstrateBridgeAppAllowedParachainAssetsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeAppAllowedParachainAssetsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppAssetKindsStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeAppAssetKindsStorage
	private readonly dev: devStorage.SubstrateBridgeAppAssetKindsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeAppAssetKindsStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeAppAssetKindsStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.SubstrateBridgeAppAssetKindsStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SubstrateBridgeAppAssetKindsStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.SubstrateBridgeAppAssetKindsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeAppAssetKindsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppBridgeTransferLimitStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeAppBridgeTransferLimitStorage
	private readonly dev: devStorage.SubstrateBridgeAppBridgeTransferLimitStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeAppBridgeTransferLimitStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeAppBridgeTransferLimitStorage(ctx, storage)
	}

	get isStageV57(): stageStorage.SubstrateBridgeAppBridgeTransferLimitStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.SubstrateBridgeAppBridgeTransferLimitStorage['asV57'] {
		return this.stage.asV57
	}
	get isDevV60(): devStorage.SubstrateBridgeAppBridgeTransferLimitStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeAppBridgeTransferLimitStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppRelaychainAssetStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeAppRelaychainAssetStorage
	private readonly dev: devStorage.SubstrateBridgeAppRelaychainAssetStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeAppRelaychainAssetStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeAppRelaychainAssetStorage(ctx, storage)
	}

	get isStageV57(): stageStorage.SubstrateBridgeAppRelaychainAssetStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.SubstrateBridgeAppRelaychainAssetStorage['asV57'] {
		return this.stage.asV57
	}
	get isDevV60(): devStorage.SubstrateBridgeAppRelaychainAssetStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeAppRelaychainAssetStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeAppSidechainPrecisionStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeAppSidechainPrecisionStorage
	private readonly dev: devStorage.SubstrateBridgeAppSidechainPrecisionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeAppSidechainPrecisionStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeAppSidechainPrecisionStorage(ctx, storage)
	}

	get isStageV54(): stageStorage.SubstrateBridgeAppSidechainPrecisionStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.SubstrateBridgeAppSidechainPrecisionStorage['asV54'] {
		return this.stage.asV54
	}
	get isDevV60(): devStorage.SubstrateBridgeAppSidechainPrecisionStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeAppSidechainPrecisionStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeInboundChannelChannelNoncesStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeInboundChannelChannelNoncesStorage
	private readonly dev: devStorage.SubstrateBridgeInboundChannelChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeInboundChannelChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeInboundChannelChannelNoncesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.SubstrateBridgeInboundChannelChannelNoncesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SubstrateBridgeInboundChannelChannelNoncesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.SubstrateBridgeInboundChannelChannelNoncesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeInboundChannelChannelNoncesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeInboundChannelRewardFractionStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeInboundChannelRewardFractionStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeInboundChannelRewardFractionStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.SubstrateBridgeInboundChannelRewardFractionStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SubstrateBridgeInboundChannelRewardFractionStorage['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeOutboundChannelChannelNoncesStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage
	private readonly dev: devStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeOutboundChannelChannelNoncesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeOutboundChannelFeeStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelFeeStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelFeeStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.SubstrateBridgeOutboundChannelFeeStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SubstrateBridgeOutboundChannelFeeStorage['asV52'] {
		return this.stage.asV52
	}
}

export class SubstrateBridgeOutboundChannelIntervalStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelIntervalStorage
	private readonly dev: devStorage.SubstrateBridgeOutboundChannelIntervalStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelIntervalStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeOutboundChannelIntervalStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.SubstrateBridgeOutboundChannelIntervalStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SubstrateBridgeOutboundChannelIntervalStorage['asV52'] {
		return this.stage.asV52
	}
	get isDevV60(): devStorage.SubstrateBridgeOutboundChannelIntervalStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeOutboundChannelIntervalStorage['asV60'] {
		return this.dev.asV60
	}
}

export class SubstrateBridgeOutboundChannelMessageQueuesStorage extends StorageBase {
	private readonly stage: stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage
	private readonly dev: devStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.stage = new stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage(ctx, storage)
		this.dev = new devStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage(ctx, storage)
	}

	get isStageV52(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['isV52'] {
		return this.stage.isV52
	}
	get asStageV52(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['asV52'] {
		return this.stage.asV52
	}
	get isStageV54(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['isV54'] {
		return this.stage.isV54
	}
	get asStageV54(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['asV54'] {
		return this.stage.asV54
	}
	get isStageV57(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['isV57'] {
		return this.stage.isV57
	}
	get asStageV57(): stageStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['asV57'] {
		return this.stage.asV57
	}
	get isDevV60(): devStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.SubstrateBridgeOutboundChannelMessageQueuesStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyConsumedTransferLimitStorage extends StorageBase {
	private readonly dev: devStorage.BridgeProxyConsumedTransferLimitStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.BridgeProxyConsumedTransferLimitStorage(ctx, storage)
	}

	get isDevV60(): devStorage.BridgeProxyConsumedTransferLimitStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeProxyConsumedTransferLimitStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyLimitedAssetsStorage extends StorageBase {
	private readonly dev: devStorage.BridgeProxyLimitedAssetsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.BridgeProxyLimitedAssetsStorage(ctx, storage)
	}

	get isDevV60(): devStorage.BridgeProxyLimitedAssetsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeProxyLimitedAssetsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyTransferLimitStorage extends StorageBase {
	private readonly dev: devStorage.BridgeProxyTransferLimitStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.BridgeProxyTransferLimitStorage(ctx, storage)
	}

	get isDevV60(): devStorage.BridgeProxyTransferLimitStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeProxyTransferLimitStorage['asV60'] {
		return this.dev.asV60
	}
}

export class BridgeProxyTransferLimitUnlockScheduleStorage extends StorageBase {
	private readonly dev: devStorage.BridgeProxyTransferLimitUnlockScheduleStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.BridgeProxyTransferLimitUnlockScheduleStorage(ctx, storage)
	}

	get isDevV60(): devStorage.BridgeProxyTransferLimitUnlockScheduleStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.BridgeProxyTransferLimitUnlockScheduleStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookAggregatedAsksStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookAggregatedAsksStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookAggregatedAsksStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookAggregatedAsksStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookAggregatedAsksStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookAggregatedBidsStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookAggregatedBidsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookAggregatedBidsStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookAggregatedBidsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookAggregatedBidsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookAsksStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookAsksStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookAsksStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookAsksStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookAsksStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookBidsStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookBidsStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookBidsStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookBidsStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookBidsStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookExpirationsAgendaStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookExpirationsAgendaStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookExpirationsAgendaStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookExpirationsAgendaStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookExpirationsAgendaStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookIncompleteExpirationsSinceStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookIncompleteExpirationsSinceStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookIncompleteExpirationsSinceStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookIncompleteExpirationsSinceStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookIncompleteExpirationsSinceStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookLimitOrdersStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookLimitOrdersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookLimitOrdersStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookLimitOrdersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookLimitOrdersStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookOrderBooksStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookOrderBooksStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookOrderBooksStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookOrderBooksStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookOrderBooksStorage['asV60'] {
		return this.dev.asV60
	}
}

export class OrderBookUserLimitOrdersStorage extends StorageBase {
	private readonly dev: devStorage.OrderBookUserLimitOrdersStorage

	constructor(ctx: ChainContext, storage: Block) {
		super(ctx, storage)
		this.dev = new devStorage.OrderBookUserLimitOrdersStorage(ctx, storage)
	}

	get isDevV60(): devStorage.OrderBookUserLimitOrdersStorage['isV60'] {
		return this.dev.isV60
	}
	get asDevV60(): devStorage.OrderBookUserLimitOrdersStorage['asV60'] {
		return this.dev.asV60
	}
}
