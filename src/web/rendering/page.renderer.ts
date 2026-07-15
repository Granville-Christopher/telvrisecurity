import { renderSiteScripts } from './site.scripts';
import { renderAuthStyles } from './auth.styles';
import { renderSiteStyles } from './site.styles';
import { escapeHtml } from './html.utils';

export interface RenderedPage {
  readonly title: string;
  readonly body: string;
  readonly includeAuthStyles?: boolean;
}

export function renderPage(page: RenderedPage): string {
  const extraStyles = page.includeAuthStyles ? renderAuthStyles() : '';

  return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>${escapeHtml(page.title)}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
${renderSiteStyles()}
${extraStyles}
          </style>
        </head>
        <body>
          ${page.body}
          <script>
${renderSiteScripts()}
          </script>
        </body>
      </html>`;
}
