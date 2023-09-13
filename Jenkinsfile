@Library('jenkins-library')

def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    targetEnvironment: 'dev',
    upstreamJobList: '../sora2-' + targetEnvironment,
    secretScannerExclusion: '.*squid.yaml\$',
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subsquid',
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:19-cypress-corepack',
    sonarProjectName:   'sora-subsquid',
    sonarProjectKey:    'jp.co.soramitsu:sora-subsquid',
    preBuildCmds:       ['npm i -g sqd-cli', 'npm ci --include=dev'],
    buildCmds:          ['npm run build'],
    dockerImageTags:    ['develop': 'dev']
)
pipeline.runPipeline()