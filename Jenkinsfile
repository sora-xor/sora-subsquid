@Library('jenkins-library')

def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    secretScannerExclusion: '.*squid.yaml\$',
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subsquid',
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:16-cypress-corepack',
    sonarProjectName:   'sora-subsquid',
    sonarProjectKey:    'jp.co.soramitsu:sora-subsquid',
    preBuildCmds:       ['npm i -g sqd-cli', 'npm ci --include=dev'],
    buildCmds:          ['npm run build'],
    dockerImageTags:    ['feature/dops-2732-subsquid': 'dev']
)
pipeline.runPipeline()