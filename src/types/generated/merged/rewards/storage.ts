import * as productionStorage from '../../production/rewards/storage'
import * as stageStorage from '../../stage/rewards/storage'
import * as testStorage from '../../test/rewards/storage'
import * as devStorage from '../../dev/rewards/storage'


export const reservesAcc = {
	name: 'Rewards.ReservesAcc',
	v1: productionStorage.reservesAcc['v1'],
	v42: productionStorage.reservesAcc['v42'],
	v46: productionStorage.reservesAcc['v46'],
	v57: productionStorage.reservesAcc['v57'],
	v72: productionStorage.reservesAcc['v72'],
	v74: productionStorage.reservesAcc['v74'],
	v1Stage: stageStorage.reservesAcc['v1'],
	v42Stage: stageStorage.reservesAcc['v42'],
	v46Stage: stageStorage.reservesAcc['v46'],
	v57Stage: stageStorage.reservesAcc['v57'],
	v72Stage: stageStorage.reservesAcc['v72'],
	v74Stage: stageStorage.reservesAcc['v74'],
	v1Test: testStorage.reservesAcc['v1'],
	v42Test: testStorage.reservesAcc['v42'],
	v46Test: testStorage.reservesAcc['v46'],
	v57Test: testStorage.reservesAcc['v57'],
	v72Test: testStorage.reservesAcc['v72'],
	v74Test: testStorage.reservesAcc['v74'],
	v85Dev: devStorage.reservesAcc['v85'],
}

export const valOwners = {
	name: 'Rewards.ValOwners',
	v1: productionStorage.valOwners['v1'],
	v19: productionStorage.valOwners['v19'],
	v42: productionStorage.valOwners['v42'],
	v1Stage: stageStorage.valOwners['v1'],
	v19Stage: stageStorage.valOwners['v19'],
	v42Stage: stageStorage.valOwners['v42'],
	v1Test: testStorage.valOwners['v1'],
	v19Test: testStorage.valOwners['v19'],
	v42Test: testStorage.valOwners['v42'],
	v85Dev: devStorage.valOwners['v85'],
}

export const pswapFarmOwners = {
	name: 'Rewards.PswapFarmOwners',
	v1: productionStorage.pswapFarmOwners['v1'],
	v1Stage: stageStorage.pswapFarmOwners['v1'],
	v1Test: testStorage.pswapFarmOwners['v1'],
	v85Dev: devStorage.pswapFarmOwners['v85'],
}

export const pswapWaifuOwners = {
	name: 'Rewards.PswapWaifuOwners',
	v1: productionStorage.pswapWaifuOwners['v1'],
	v1Stage: stageStorage.pswapWaifuOwners['v1'],
	v1Test: testStorage.pswapWaifuOwners['v1'],
	v85Dev: devStorage.pswapWaifuOwners['v85'],
}

export const valBurnedSinceLastVesting = {
	name: 'Rewards.ValBurnedSinceLastVesting',
	v19: productionStorage.valBurnedSinceLastVesting['v19'],
	v19Stage: stageStorage.valBurnedSinceLastVesting['v19'],
	v19Test: testStorage.valBurnedSinceLastVesting['v19'],
	v85Dev: devStorage.valBurnedSinceLastVesting['v85'],
}

export const currentClaimableVal = {
	name: 'Rewards.CurrentClaimableVal',
	v19: productionStorage.currentClaimableVal['v19'],
	v19Stage: stageStorage.currentClaimableVal['v19'],
	v19Test: testStorage.currentClaimableVal['v19'],
	v85Dev: devStorage.currentClaimableVal['v85'],
}

export const ethAddresses = {
	name: 'Rewards.EthAddresses',
	v19: productionStorage.ethAddresses['v19'],
	v19Stage: stageStorage.ethAddresses['v19'],
	v19Test: testStorage.ethAddresses['v19'],
	v85Dev: devStorage.ethAddresses['v85'],
}

export const totalValRewards = {
	name: 'Rewards.TotalValRewards',
	v19: productionStorage.totalValRewards['v19'],
	v19Stage: stageStorage.totalValRewards['v19'],
	v19Test: testStorage.totalValRewards['v19'],
	v85Dev: devStorage.totalValRewards['v85'],
}

export const totalClaimableVal = {
	name: 'Rewards.TotalClaimableVal',
	v19: productionStorage.totalClaimableVal['v19'],
	v19Stage: stageStorage.totalClaimableVal['v19'],
	v19Test: testStorage.totalClaimableVal['v19'],
	v85Dev: devStorage.totalClaimableVal['v85'],
}

export const migrationPending = {
	name: 'Rewards.MigrationPending',
	v19: productionStorage.migrationPending['v19'],
	v19Stage: stageStorage.migrationPending['v19'],
	v19Test: testStorage.migrationPending['v19'],
	v85Dev: devStorage.migrationPending['v85'],
}

export const umiNftReceivers = {
	name: 'Rewards.UmiNftReceivers',
	v33: productionStorage.umiNftReceivers['v33'],
	v33Stage: stageStorage.umiNftReceivers['v33'],
	v33Test: testStorage.umiNftReceivers['v33'],
	v85Dev: devStorage.umiNftReceivers['v85'],
}

export const umiNfts = {
	name: 'Rewards.UmiNfts',
	v33: productionStorage.umiNfts['v33'],
	v42: productionStorage.umiNfts['v42'],
	v33Stage: stageStorage.umiNfts['v33'],
	v42Stage: stageStorage.umiNfts['v42'],
	v33Test: testStorage.umiNfts['v33'],
	v42Test: testStorage.umiNfts['v42'],
	v85Dev: devStorage.umiNfts['v85'],
}

export const umiNftClaimed = {
	name: 'Rewards.UmiNftClaimed',
	v33: productionStorage.umiNftClaimed['v33'],
	v33Stage: stageStorage.umiNftClaimed['v33'],
	v33Test: testStorage.umiNftClaimed['v33'],
	v85Dev: devStorage.umiNftClaimed['v85'],
}
