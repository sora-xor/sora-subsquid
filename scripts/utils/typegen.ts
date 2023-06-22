import { archive } from '../../src/config'

export default {
	outDir: 'src/types/generated',
	specVersions: archive,
	typesBundle: 'src/typesBundle.json',
	events: true,
	calls: true,
	storage: true
}
