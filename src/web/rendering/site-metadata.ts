export const SITE_NAME = 'Telvri Security';

export const SITE_TAGLINE = 'Developer-first telco identity security API';

export const SITE_SEO_DESCRIPTION =
  'Catch SIM-swap attacks before account takeover. Telvri Security turns live telco signals into allow, step-up, or block decisions for login recovery, payouts, wallet resets, and every high-risk phone moment.';

export const API_SEO_DESCRIPTION =
  'Identity firewall for phone-number risk: one SIM-swap endpoint that tells your backend to allow, step up, or block before attackers reach login recovery, payouts, or wallet resets.';

export const DEFAULT_SITE_ORIGIN = 'https://telvrisecurity.vercel.app';

export const DEFAULT_OG_IMAGE_PATH = '/media/home.png';

export const DEFAULT_LOGO_PATH = '/media/logo/telvri.png';

export const DEFAULT_KEYWORDS = [
  'SIM-swap detection',
  'mobile identity security',
  'telco fraud API',
  'account takeover prevention',
  'phone number risk',
  'identity security API',
  'developer security platform',
  'OpenAPI SIM-swap',
  'wallet recovery security',
  'payout protection',
] as const;

export function resolveSiteOrigin(): string {
  const configuredOrigin = process.env.SITE_URL;

  if (configuredOrigin) {
    return configuredOrigin.startsWith('http')
      ? configuredOrigin.replace(/\/$/, '')
      : `https://${configuredOrigin.replace(/\/$/, '')}`;
  }

  const vercelHost = process.env.VERCEL_URL;

  if (vercelHost) {
    return `https://${vercelHost.replace(/\/$/, '')}`;
  }

  return DEFAULT_SITE_ORIGIN;
}

export function toAbsoluteUrl(origin: string, path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}
