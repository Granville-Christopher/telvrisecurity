import { cpSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDirectory = join(projectRoot, 'node_modules', 'swagger-ui-dist');
const targetDirectory = join(projectRoot, 'dist', 'swagger-ui-dist');

if (!existsSync(sourceDirectory)) {
  throw new Error(`swagger-ui-dist was not found at ${sourceDirectory}`);
}

cpSync(sourceDirectory, targetDirectory, { recursive: true });
