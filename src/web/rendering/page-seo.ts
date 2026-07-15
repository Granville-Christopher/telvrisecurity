import { escapeHtml } from './html.utils';
import {
  API_SEO_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_LOGO_PATH,
  DEFAULT_OG_IMAGE_PATH,
  SITE_NAME,
  SITE_SEO_DESCRIPTION,
  resolveSiteOrigin,
  toAbsoluteUrl,
} from './site-metadata';

export interface PageSeoOptions {
  readonly description: string;
  readonly canonicalPath?: string;
  readonly ogImagePath?: string;
  readonly ogType?: 'website' | 'article';
  readonly robots?: string;
  readonly keywords?: readonly string[];
  readonly noIndex?: boolean;
}

interface RenderPageSeoInput {
  readonly title: string;
  readonly seo?: PageSeoOptions;
}

export function renderPageSeoHead(page: RenderPageSeoInput): string {
  const origin = resolveSiteOrigin();
  const description = page.seo?.description ?? SITE_SEO_DESCRIPTION;
  const canonicalPath = page.seo?.canonicalPath ?? '/';
  const canonicalUrl = toAbsoluteUrl(origin, canonicalPath);
  const ogImagePath = page.seo?.ogImagePath ?? DEFAULT_OG_IMAGE_PATH;
  const ogImageUrl = toAbsoluteUrl(origin, ogImagePath);
  const logoUrl = toAbsoluteUrl(origin, DEFAULT_LOGO_PATH);
  const ogType = page.seo?.ogType ?? 'website';
  const robots = page.seo?.noIndex ? 'noindex, nofollow' : (page.seo?.robots ?? 'index, follow');
  const keywords = (page.seo?.keywords ?? DEFAULT_KEYWORDS).join(', ');

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: origin,
        logo: logoUrl,
        description,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-800-588-1656',
          contactType: 'customer support',
          areaServed: 'US',
          availableLanguage: 'English',
        },
      },
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: origin,
        description,
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebAPI',
        name: `${SITE_NAME} API`,
        url: `${origin}/docs`,
        description: API_SEO_DESCRIPTION,
        documentation: `${origin}/docs`,
        termsOfService: canonicalUrl,
      },
    ],
  };

  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');

  return `
          <meta name="description" content="${escapeHtml(description)}" />
          <meta name="keywords" content="${escapeHtml(keywords)}" />
          <meta name="author" content="${escapeHtml(SITE_NAME)}" />
          <meta name="robots" content="${escapeHtml(robots)}" />
          <meta name="theme-color" content="#7c3aed" />
          <meta name="application-name" content="${escapeHtml(SITE_NAME)}" />
          <meta name="generator" content="Telvri Security Platform" />
          <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
          <link rel="icon" href="${escapeHtml(logoUrl)}" type="image/png" />
          <link rel="apple-touch-icon" href="${escapeHtml(logoUrl)}" />
          <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
          <meta property="og:title" content="${escapeHtml(page.title)}" />
          <meta property="og:description" content="${escapeHtml(description)}" />
          <meta property="og:type" content="${escapeHtml(ogType)}" />
          <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
          <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />
          <meta property="og:image:alt" content="${escapeHtml(`${SITE_NAME} platform preview`)}" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="${escapeHtml(page.title)}" />
          <meta name="twitter:description" content="${escapeHtml(description)}" />
          <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />
          <meta name="twitter:image:alt" content="${escapeHtml(`${SITE_NAME} platform preview`)}" />
          <script type="application/ld+json">${structuredDataJson}</script>`;
}
