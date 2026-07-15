import { renderHomepageClosingSection } from './homepage-closing.section';
import { renderHomepageBuiltForSection } from './homepage-built-for.section';
import { renderHomepageDeveloperSection } from './homepage-developer.section';
import { renderHomepageHeroSection } from './homepage-hero.section';
import { renderHomepageNavbarSection } from './homepage-navbar.section';
import { renderHomepagePlatformSection } from './homepage-platform.section';
import { renderHomepageProofSection } from './homepage-proof.section';
import { renderHomepageResourcesSection } from './homepage-resources.section';
import { renderHomepageTrustSection } from './homepage-trust.section';
import { renderHomepageUseCasesSection } from './homepage-use-cases.section';
import { renderHomepageUtilityBarSection } from './homepage-utility-bar.section';

export function renderHomepageSections(): string {
  return `
    <main class="landing-shell">
      ${renderHomepageUtilityBarSection()}
      ${renderHomepageNavbarSection()}
      ${renderHomepageHeroSection()}
      ${renderHomepageTrustSection()}
      ${renderHomepagePlatformSection()}
      ${renderHomepageBuiltForSection()}
      ${renderHomepageProofSection()}
      ${renderHomepageUseCasesSection()}
      ${renderHomepageDeveloperSection()}
      ${renderHomepageResourcesSection()}
      ${renderHomepageClosingSection()}
    </main>
  `;
}
