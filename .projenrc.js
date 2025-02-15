const { awscdk, javascript, JsonFile } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'MongoDB',
  authorAddress: 'https://www.mongodb.com/',
  description: 'MongoDB Atlas CDK Construct Library for AWS CloudFormation Resources',
  cdkVersion: '2.64.0',
  defaultReleaseBranch: 'main',
  name: 'awscdk-resources-mongodbatlas',
  repositoryUrl: 'git@github.com:mongodb/awscdk-resources-mongodbatlas.git',
  keywords: ['cdk',
    'aws-cdk',
    'awscdk',
    'cloudformation',
    'cfn',
    'extensions',
    'constructs',
    'cfn-resources',
    'cloudformation-registry',
    'l2',
    'l3',
    'mongodb',
    'atlas'],
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseToNpm: false,
  sampleCode: false,
  peerDeps: [
    '@mongodbatlas-awscdk/atlas-basic@1.1.0',
    '@mongodbatlas-awscdk/encryption-at-rest@1.0.2',
    '@mongodbatlas-awscdk/cluster@1.1.0',
    '@mongodbatlas-awscdk/database-user@1.1.0',
    '@mongodbatlas-awscdk/project-ip-access-list@1.1.0',
    '@mongodbatlas-awscdk/project@1.1.0',
    '@mongodbatlas-awscdk/third-party-integration@1.1.0',
    '@mongodbatlas-awscdk/private-endpoint@1.1.0',
  ],
  devDeps: [
    '@mongodbatlas-awscdk/atlas-basic@1.1.0',
    '@mongodbatlas-awscdk/encryption-at-rest@1.0.2',
    '@mongodbatlas-awscdk/cluster@1.1.0',
    '@mongodbatlas-awscdk/database-user@1.1.0',
    '@mongodbatlas-awscdk/project-ip-access-list@1.1.0',
    '@mongodbatlas-awscdk/project@1.1.0',
    '@mongodbatlas-awscdk/third-party-integration@1.1.0',
    '@mongodbatlas-awscdk/private-endpoint@1.1.0',
  ],
  stability: 'experimental',
});

new JsonFile(project, 'cdk.json', {
  obj: {
    app: 'npx ts-node --prefer-ts-exts src/integ.default.ts',
  },
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();