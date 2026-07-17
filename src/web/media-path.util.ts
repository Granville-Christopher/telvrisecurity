import { existsSync } from 'fs';
import { join } from 'path';

/**
 * Resolves MEDIA assets across local nest start, dist layouts, and Vercel.
 */
export function resolveMediaPath(...parts: string[]): string {
  const candidates = [
    join(process.cwd(), 'src', 'MEDIA', ...parts),
    join(process.cwd(), 'dist', 'MEDIA', ...parts),
    join(__dirname, '..', 'MEDIA', ...parts),
    join(__dirname, '..', '..', 'MEDIA', ...parts),
    join(process.cwd(), 'MEDIA', ...parts),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  return candidates[0];
}
