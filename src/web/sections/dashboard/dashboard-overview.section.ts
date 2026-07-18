import { ApiKeyView } from '../../../api-keys/api-keys.service';
import { SessionUser } from '../../../auth/session.service';
import { escapeHtml } from '../../rendering/html.utils';

interface OverviewModel {
  readonly user: SessionUser;
  readonly keys: ApiKeyView[];
  readonly activeKeyCount: number;
  readonly latestActiveKey: ApiKeyView | null;
}

function formatDate(value: Date | string | null): string {
  if (!value) {
    return '';
  }

  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function renderLatestKeyCard(latestActiveKey: ApiKeyView | null): string {
  if (!latestActiveKey) {
    return `
      <section class="panel overview-key-panel">
        <div class="panel-heading">
          <span>Latest live API key</span>
        </div>
        <p class="key-empty">
          No active live key yet. Create one in the API Keys tab when you are ready for production.
        </p>
        <div class="overview-key-actions">
          <button type="button" class="button primary" data-dashboard-tab="api-keys">Manage API keys</button>
        </div>
      </section>
    `;
  }

  const expiresLabel = latestActiveKey.expiresAt
    ? `Expires ${formatDate(latestActiveKey.expiresAt)}`
    : 'Never expires';
  const lastUsedLabel = latestActiveKey.lastUsedAt
    ? `Last used ${formatDate(latestActiveKey.lastUsedAt)}`
    : 'Never used';

  return `
    <section class="panel overview-key-panel">
      <div class="panel-heading">
        <span>Latest live API key</span>
        <span class="key-status key-status-active">Active</span>
      </div>
      <article class="key-row overview-latest-key">
        <div class="key-row-main">
          <div class="key-row-title">
            <strong>${escapeHtml(latestActiveKey.name)}</strong>
          </div>
          <code class="key-row-mask">${escapeHtml(latestActiveKey.masked)}</code>
          <div class="key-row-meta">
            <span>Created ${formatDate(latestActiveKey.createdAt)}</span>
            <span>${expiresLabel}</span>
            <span>${lastUsedLabel}</span>
          </div>
        </div>
      </article>
      <div class="overview-key-actions">
        <button type="button" class="button primary" data-dashboard-tab="api-keys">Manage API keys</button>
      </div>
    </section>
  `;
}

export function renderDashboardOverviewSection(model: OverviewModel): string {
  const { user, keys, activeKeyCount, latestActiveKey } = model;
  const firstName = escapeHtml((user.fullName || user.email).split(' ')[0] ?? 'there');

  return `
    <section class="dashboard-panel active" data-dashboard-panel="overview">
      <header class="dashboard-header panel">
        <div class="dashboard-title">
          <p class="eyebrow">Developer console</p>
          <h1>Welcome back, ${firstName}.</h1>
          <p>
            Monitor your live credentials and jump into SDKs or OpenAPI when you are ready to
            integrate SIM-swap checks.
          </p>
        </div>
        <div class="header-actions">
          <button type="button" class="button secondary" data-dashboard-tab="api-keys">API keys</button>
          <a class="button primary" href="/docs">Test in Swagger</a>
        </div>
      </header>

      <section class="metric-grid">
        <article class="metric-card">
          <span>Active keys</span>
          <strong>${activeKeyCount}</strong>
          <small>Currently valid live credentials</small>
        </article>
        <article class="metric-card">
          <span>Total live keys</span>
          <strong>${keys.length}</strong>
          <small>Including expired and revoked</small>
        </article>
        <article class="metric-card">
          <span>Auth method</span>
          <strong>X-API-Key</strong>
          <small>Header or Bearer token</small>
        </article>
        <article class="metric-card">
          <span>Environments</span>
          <strong>Live + Test</strong>
          <small>rt_live_ and rt_test_</small>
        </article>
      </section>

      ${renderLatestKeyCard(latestActiveKey)}

      <section class="panel quickstart-panel">
        <div class="panel-heading">
          <span>Quick start</span>
          <button type="button" data-dashboard-tab="sdk">SDKs</button>
        </div>
        <ol>
          <li><span>1</span><p>Open API Keys to create a live key or copy your test key.</p></li>
          <li><span>2</span><p>Set it as <code>X-API-Key</code> in your backend requests.</p></li>
          <li><span>3</span><p>Call <code>POST /v1/security/sim-check</code>.</p></li>
        </ol>
      </section>
    </section>
  `;
}
