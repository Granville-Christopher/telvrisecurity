import { ApiKeyView, UserTestKey } from '../../../api-keys/api-keys.service';
import { SessionUser } from '../../../auth/session.service';
import { escapeAttribute } from '../../rendering/html.utils';
import { buildDashboardSdkExamples } from './dashboard-sdk-examples';
import { renderDashboardApiKeysSection } from './dashboard-api-keys.section';
import { renderDashboardOpenapiSection } from './dashboard-openapi.section';
import { renderDashboardOverviewSection } from './dashboard-overview.section';
import { renderDashboardSdkSection } from './dashboard-sdk.section';
import { renderDashboardSidebarSection } from './dashboard-sidebar.section';

export interface DashboardViewModel {
  readonly user: SessionUser;
  readonly keys: ApiKeyView[];
  readonly activeKeyCount: number;
  readonly latestActiveKey: ApiKeyView | null;
  readonly testKey: UserTestKey;
  readonly csrfToken: string;
}

export function renderDashboardSections(model: DashboardViewModel): string {
  const examples = buildDashboardSdkExamples();

  return `
    <main class="dashboard-shell" data-dashboard-shell data-csrf-token="${escapeAttribute(model.csrfToken)}">
      <header class="dashboard-mobile-bar">
        <a class="brand brand-logo dashboard-brand-logo inline-flex shrink-0 items-center" href="/" aria-label="Telvri Security home">
          <img
            src="/media/logo/telvriwhite.png?v=4"
            alt="Telvri Security"
            width="180"
            height="56"
            class="dashboard-brand-logo-img"
          />
        </a>
        <button
          type="button"
          class="dashboard-menu-toggle"
          data-dashboard-menu
          aria-label="Open menu"
          aria-expanded="false"
        >
          <span class="dashboard-menu-bar"></span>
          <span class="dashboard-menu-bar"></span>
          <span class="dashboard-menu-bar"></span>
        </button>
      </header>
      <div class="dashboard-backdrop" data-dashboard-close></div>
      ${renderDashboardSidebarSection(model.user, model.csrfToken)}
      <section class="dashboard-content">
        ${renderDashboardOverviewSection(model)}
        ${renderDashboardApiKeysSection({ keys: model.keys, testKey: model.testKey })}
        ${renderDashboardSdkSection(examples)}
        ${renderDashboardOpenapiSection()}
      </section>
    </main>
  `;
}
