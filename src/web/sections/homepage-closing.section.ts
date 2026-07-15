import { renderHomepageCtaSection } from './homepage-cta.section';
import { renderHomepageFooterSection } from './homepage-footer.section';

export function renderHomepageClosingSection(): string {
  return `
    <div class="landing-close">
      ${renderHomepageCtaSection()}
      ${renderHomepageFooterSection()}
    </div>
  `;
}
