import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const specPath = join(projectRoot, 'openapi.json');
const sdksRoot = join(projectRoot, 'sdks');
const githubOwner = process.env.TELVRI_GITHUB_OWNER ?? 'Granville-Christopher';
const javascriptRepositoryUrl =
  process.env.TELVRI_JS_REPOSITORY_URL ??
  `https://github.com/${githubOwner}/telvri-js.git`;
const goModulePath =
  process.env.TELVRI_GO_MODULE ?? `github.com/${githubOwner}/telvri-go`;
const apiBaseUrl = process.env.TELVRI_API_BASE_URL ?? 'https://telvrisecurity.vercel.app';
const apiVersion = '1.0.0';
const onlyLanguage = (process.env.TELVRI_SDK_ONLY ?? process.argv[2] ?? '').trim().toLowerCase();

if (!existsSync(specPath)) {
  throw new Error(
    `Missing ${specPath}. Download it first with: curl https://telvrisecurity.vercel.app/docs-json -o openapi.json`,
  );
}

const spec = JSON.parse(readFileSync(specPath, 'utf8'));
spec.servers = [{ url: apiBaseUrl, description: 'Telvri Security production API' }];
writeFileSync(specPath, `${JSON.stringify(spec, null, 2)}\n`);

mkdirSync(sdksRoot, { recursive: true });

const generatorBinary = join(
  projectRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'openapi-generator-cli.cmd' : 'openapi-generator-cli',
);

function generateSdk({ language, outputDirectory, additionalProperties }) {
  const outputPath = join(sdksRoot, outputDirectory);
  const properties = Object.entries(additionalProperties)
    .map(([key, value]) => `${key}=${value}`)
    .join(',');

  console.log(`\nGenerating ${language} SDK -> sdks/${outputDirectory}`);

  execSync(
    `"${generatorBinary}" generate -i "${specPath}" -g ${language} -o "${outputPath}" --skip-validate-spec --additional-properties=${properties}`,
    {
      cwd: projectRoot,
      stdio: 'inherit',
      env: process.env,
    },
  );
}

const sdkTargets = [
  {
    language: 'typescript-fetch',
    outputDirectory: 'javascript',
    additionalProperties: {
      npmName: '@telvri/security',
      npmVersion: apiVersion,
      supportsES6: true,
      withInterfaces: true,
    },
  },
  {
    language: 'python',
    outputDirectory: 'python',
    additionalProperties: {
      packageName: 'telvri_security',
      projectName: 'telvri-security',
      packageVersion: apiVersion,
    },
  },
  {
    language: 'go',
    outputDirectory: 'go',
    additionalProperties: {
      packageName: 'telvri',
      packageVersion: apiVersion,
      gitHost: 'github.com',
      gitUserId: githubOwner,
      gitRepoId: 'telvri-go',
    },
  },
  {
    language: 'php',
    outputDirectory: 'php',
    additionalProperties: {
      invokerPackage: 'Telvri\\Security',
      composerVendorName: 'telvri',
      composerProjectName: 'security',
      packageVersion: apiVersion,
    },
  },
  {
    language: 'ruby',
    outputDirectory: 'ruby',
    additionalProperties: {
      gemName: 'telvri_security',
      moduleName: 'TelvriSecurity',
      gemVersion: apiVersion,
    },
  },
  {
    language: 'java',
    outputDirectory: 'java',
    additionalProperties: {
      groupId: 'com.telvri',
      artifactId: 'security',
      artifactVersion: apiVersion,
      apiPackage: 'com.telvri.security.api',
      modelPackage: 'com.telvri.security.model',
      library: 'native',
    },
  },
  {
    language: 'csharp',
    outputDirectory: 'dotnet',
    additionalProperties: {
      packageName: 'Telvri.Security',
      packageVersion: apiVersion,
      targetFramework: 'net8.0',
    },
  },
];

const MIT_LICENSE = `MIT License

Copyright (c) 2026 Telvri Security

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

const targetsToGenerate = onlyLanguage
  ? sdkTargets.filter((target) => target.outputDirectory === onlyLanguage || target.language === onlyLanguage)
  : sdkTargets;

if (onlyLanguage && targetsToGenerate.length === 0) {
  throw new Error(
    `Unknown TELVRI_SDK_ONLY="${onlyLanguage}". Use one of: ${sdkTargets
      .map((target) => target.outputDirectory)
      .join(', ')}`,
  );
}

for (const target of targetsToGenerate) {
  generateSdk(target);
}

patchGeneratedSdks(targetsToGenerate.map((target) => target.outputDirectory));

console.log(
  onlyLanguage
    ? `\n${onlyLanguage} SDK generated under ./sdks/${onlyLanguage}`
    : '\nAll SDKs generated under ./sdks',
);

function patchGeneratedSdks(sdkDirectories = ['javascript', 'python', 'go', 'php', 'ruby', 'java', 'dotnet']) {
  const goModule = goModulePath;

  if (sdkDirectories.includes('go')) {
    replaceInTree(join(sdksRoot, 'go'), /github\.com\/GIT_USER_ID\/GIT_REPO_ID/g, goModule);
    replaceInTree(
      join(sdksRoot, 'go'),
      /github\.com\/telvri-security\/telvri-go/g,
      goModule,
    );
    writeFileSync(join(sdksRoot, 'go', 'go.mod'), `module ${goModule}\n\ngo 1.22\n`);
  }

  const composerPath = join(sdksRoot, 'php', 'composer.json');
  if (existsSync(composerPath)) {
    const composer = JSON.parse(readFileSync(composerPath, 'utf8'));
    composer.name = 'telvri/security';
    composer.version = apiVersion;
    composer.description =
      'Official Telvri Security PHP SDK for SIM-swap and mobile identity checks.';
    composer.homepage = 'https://telvrisecurity.vercel.app';
    composer.license = 'MIT';
    writeFileSync(composerPath, `${JSON.stringify(composer, null, 4)}\n`);
  }

  const pyprojectPath = join(sdksRoot, 'python', 'pyproject.toml');
  if (existsSync(pyprojectPath)) {
    let pyproject = readFileSync(pyprojectPath, 'utf8').replace(
      /^name = "telvri_security"$/m,
      'name = "telvri-security"',
    );
    if (!/^license = /m.test(pyproject)) {
      pyproject = pyproject.replace(
        /^readme = "README.md"$/m,
        'readme = "README.md"\nlicense = "MIT"\nlicense-files = ["LICENSE"]',
      );
    }
    writeFileSync(pyprojectPath, pyproject);
  }

  const javascriptPackagePath = join(sdksRoot, 'javascript', 'package.json');
  if (existsSync(javascriptPackagePath)) {
    const javascriptPackage = JSON.parse(readFileSync(javascriptPackagePath, 'utf8'));
    javascriptPackage.description =
      'Official Telvri Security SDK for SIM-swap and mobile identity checks.';
    javascriptPackage.author = 'Telvri Security';
    javascriptPackage.license = 'MIT';
    javascriptPackage.repository = {
      type: 'git',
      url: javascriptRepositoryUrl,
    };
    javascriptPackage.keywords = ['telvri', 'sim-swap', 'identity-security', 'fraud', 'openapi'];
    writeFileSync(javascriptPackagePath, `${JSON.stringify(javascriptPackage, null, 2)}\n`);
  }

  if (sdkDirectories.includes('java')) {
    const javaRepoUrl = `https://github.com/${githubOwner}/telvri-java`;
    const pomPath = join(sdksRoot, 'java', 'pom.xml');
    if (existsSync(pomPath)) {
      let pom = readFileSync(pomPath, 'utf8');
      pom = pom
        .replace(/<name>security<\/name>/, '<name>Telvri Security Java SDK</name>')
        .replace(
          /<description>OpenAPI Java<\/description>/,
          '<description>Official Telvri Security Java SDK for SIM-swap and mobile identity checks.</description>',
        )
        .replace(
          /<url>https:\/\/github\.com\/openapitools\/openapi-generator<\/url>/,
          `<url>${javaRepoUrl}</url>`,
        )
        .replace(
          /<connection>scm:git:git@github\.com:openapitools\/openapi-generator\.git<\/connection>/,
          `<connection>scm:git:git@github.com:${githubOwner}/telvri-java.git</connection>`,
        )
        .replace(
          /<developerConnection>scm:git:git@github\.com:openapitools\/openapi-generator\.git<\/developerConnection>/,
          `<developerConnection>scm:git:git@github.com:${githubOwner}/telvri-java.git</developerConnection>`,
        )
        .replace(
          /<url>https:\/\/github\.com\/openapitools\/openapi-generator<\/url>\s*<\/scm>/,
          `<url>${javaRepoUrl}</url>\n    </scm>`,
        )
        .replace(/<name>Unlicense<\/name>/, '<name>MIT License</name>')
        .replace(
          /<url>http:\/\/unlicense\.org<\/url>/,
          '<url>https://opensource.org/licenses/MIT</url>',
        )
        .replace(
          /<name>OpenAPI-Generator Contributors<\/name>/,
          '<name>Telvri Security</name>',
        )
        .replace(
          /<email>team@openapitools\.org<\/email>/,
          '<email>support@telvrisecurity.vercel.app</email>',
        )
        .replace(
          /<organization>OpenAPITools\.org<\/organization>/,
          '<organization>Telvri Security</organization>',
        )
        .replace(
          /<organizationUrl>http:\/\/openapitools\.org<\/organizationUrl>/,
          '<organizationUrl>https://telvrisecurity.vercel.app</organizationUrl>',
        );
      writeFileSync(pomPath, pom);
    }
  }

  for (const sdkDirectory of sdkDirectories) {
    const sdkPath = join(sdksRoot, sdkDirectory);
    if (existsSync(sdkPath)) {
      writeFileSync(join(sdkPath, 'LICENSE'), MIT_LICENSE);
    }
  }
}

function replaceInTree(directory, pattern, replacement) {
  if (!existsSync(directory)) {
    return;
  }

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      replaceInTree(entryPath, pattern, replacement);
      continue;
    }

    if (!/\.(go|md|sh|mod|sum|yaml|yml)$/.test(entry.name)) {
      continue;
    }

    const contents = readFileSync(entryPath, 'utf8');
    if (pattern.test(contents)) {
      writeFileSync(entryPath, contents.replace(pattern, replacement));
    }
  }
}
