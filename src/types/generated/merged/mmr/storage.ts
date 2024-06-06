import * as devStorage from '../../dev/mmr/storage'


export const rootHash = {
	name: 'Mmr.RootHash',
	v85Dev: devStorage.rootHash['v85'],
}

export const numberOfLeaves = {
	name: 'Mmr.NumberOfLeaves',
	v85Dev: devStorage.numberOfLeaves['v85'],
}

export const nodes = {
	name: 'Mmr.Nodes',
	v85Dev: devStorage.nodes['v85'],
}
