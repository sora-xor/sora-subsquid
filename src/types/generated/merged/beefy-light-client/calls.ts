import * as devCalls from '../../dev/beefy-light-client/calls'


export const initialize = {
	name: 'BeefyLightClient.initialize',
	v85Dev: devCalls.initialize['v85'],
}

export const submitSignatureCommitment = {
	name: 'BeefyLightClient.submit_signature_commitment',
	v85Dev: devCalls.submitSignatureCommitment['v85'],
}
