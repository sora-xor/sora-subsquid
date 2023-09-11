@Library('jenkins-library')

def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    secretScannerExclusion: '.*docker-run.sh$|.*squid.yaml\$',
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subsquid',
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:16-corepack-subqd-bash',
    sonarProjectName:   'sora-subsquid',
    sonarProjectKey:    'jp.co.soramitsu:sora-subsquid',
    preBuildCmds:       ['npm run update', 'npm ci', 'sqd build'],
    dockerImageTags:    ['main': 'dev']
)
pipeline.runPipeline()