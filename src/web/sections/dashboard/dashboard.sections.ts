import { buildDashboardSdkExamples } from './dashboard-sdk-examples';
import { renderDashboardOpenapiSection } from './dashboard-openapi.section';
import { renderDashboardOverviewSection } from './dashboard-overview.section';
import { renderDashboardSdkSection } from './dashboard-sdk.section';
import { renderDashboardSidebarSection } from './dashboard-sidebar.section';

export function renderDashboardSections(): string {
  const examples = buildDashboardSdkExamples();

  return `
    <main class="dashboard-shell">
      ${renderDashboardSidebarSection()}
      <section class="dashboard-content">
        ${renderDashboardOverviewSection(examples.apiKey)}
        ${renderDashboardSdkSection(examples)}
        ${renderDashboardOpenapiSection()}
      </section>
    </main>
  `;
}
