import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const specPath = join(projectRoot, 'openapi.json');
const sdksRoot = join(projectRoot, 'sdks');
const javascriptRepositoryUrl =
  process.env.TELVRI_JS_REPOSITORY_URL ??
  'https://github.com/Granville-Christopher/telvri-js.git';
const apiBaseUrl = process.env.TELVRI_API_BASE_URL ?? 'https://telvrisecurity.vercel.app';
const apiVersion = '1.0.0';

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
    `"${generatorBinary}" generate -i "${specPath}" -g ${language} -o "${outputPath}" --additional-properties=${properties}`,
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
      gitUserId: 'telvri-security',
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

for (const target of sdkTargets) {
  generateSdk(target);
}

patchGeneratedSdks();

console.log('\nAll SDKs generated under ./sdks');

function patchGeneratedSdks() {
  const goModule = 'github.com/telvri-security/telvri-go';

  replaceInTree(join(sdksRoot, 'go'), /github\.com\/GIT_USER_ID\/GIT_REPO_ID/g, goModule);
  writeFileSync(join(sdksRoot, 'go', 'go.mod'), `module ${goModule}\n\ngo 1.23\n`);

  const composerPath = join(sdksRoot, 'php', 'composer.json');
  if (existsSync(composerPath)) {
    const composer = JSON.parse(readFileSync(composerPath, 'utf8'));
    composer.name = 'telvri/security';
    composer.version = apiVersion;
    composer.description =
      'Official Telvri Security PHP SDK for SIM-swap and mobile identity checks.';
    composer.homepage = 'https://telvrisecurity.vercel.app';
    writeFileSync(composerPath, `${JSON.stringify(composer, null, 4)}\n`);
  }

  const pyprojectPath = join(sdksRoot, 'python', 'pyproject.toml');
  if (existsSync(pyprojectPath)) {
    const pyproject = readFileSync(pyprojectPath, 'utf8').replace(
      /^name = "telvri_security"$/m,
      'name = "telvri-security"',
    );
    writeFileSync(pyprojectPath, pyproject);
  }

  const javascriptPackagePath = join(sdksRoot, 'javascript', 'package.json');
  if (existsSync(javascriptPackagePath)) {
    const javascriptPackage = JSON.parse(readFileSync(javascriptPackagePath, 'utf8'));
    javascriptPackage.description =
      'Official Telvri Security SDK for SIM-swap and mobile identity checks.';
    javascriptPackage.repository = {
      type: 'git',
      url: javascriptRepositoryUrl,
    };
    javascriptPackage.keywords = ['telvri', 'sim-swap', 'identity-security', 'fraud', 'openapi'];
    writeFileSync(javascriptPackagePath, `${JSON.stringify(javascriptPackage, null, 2)}\n`);
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
