import { buildDashboardSdkExamples } from './dashboard-sdk-examples';
import { renderDashboardOpenapiSection } from './dashboard-openapi.section';
import { renderDashboardOverviewSection } from './dashboard-overview.section';
import { renderDashboardSdkSection } from './dashboard-sdk.section';
import { renderDashboardSidebarSection } from './dashboard-sidebar.section';

export function renderDashboardSections(): string {
  const examples = buildDashboardSdkExamples();

  return `
    <main class="dashboard-shell" data-dashboard-shell>
      <header class="dashboard-mobile-bar">
        <a class="brand brand-logo inline-flex shrink-0 items-center" href="/" aria-label="Telvri Security home">
          <img
            src="/media/logo/telvri.png"
            alt="Telvri Security"
            class="block h-9 w-auto max-w-full object-contain"
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
      ${renderDashboardSidebarSection()}
      <section class="dashboard-content">
        ${renderDashboardOverviewSection(examples.apiKey)}
        ${renderDashboardSdkSection(examples)}
        ${renderDashboardOpenapiSection()}
      </section>
    </main>
  `;
}
