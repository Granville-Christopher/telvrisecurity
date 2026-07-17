import { ApiKeyStatus, ApiKeyView } from '../../../api-keys/api-keys.service';
import { SessionUser } from '../../../auth/session.service';
import { escapeHtml } from '../../rendering/html.utils';

interface OverviewModel {
  readonly user: SessionUser;
  readonly keys: ApiKeyView[];
  readonly activeKeyCount: number;
}

const STATUS_LABEL: Record<ApiKeyStatus, string> = {
  active: 'Active',
  expired: 'Expired',
  revoked: 'Revoked',
};

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

function renderKeyRow(key: ApiKeyView): string {
  const expiresLabel = key.expiresAt ? `Expires ${formatDate(key.expiresAt)}` : 'Never expires';
  const lastUsedLabel = key.lastUsedAt ? `Last used ${formatDate(key.lastUsedAt)}` : 'Never used';
  const escapedId = escapeHtml(key.id);
  const rotateButton =
    key.status === 'active'
      ? `<button type="button" class="key-rotate" data-rotate-key="${escapedId}">Rotate</button>`
      : '';
  const revokeButton =
    key.status !== 'revoked'
      ? `<button type="button" class="key-revoke" data-revoke-key="${escapedId}">Revoke</button>`
      : '';

  return `
    <article class="key-row" data-key-id="${escapedId}">
      <div class="key-row-main">
        <div class="key-row-title">
          <strong>${escapeHtml(key.name)}</strong>
          <span class="key-status key-status-${key.status}" data-key-status>${STATUS_LABEL[key.status]}</span>
        </div>
        <code class="key-row-mask">${escapeHtml(key.masked)}</code>
        <div class="key-row-meta">
          <span>Created ${formatDate(key.createdAt)}</span>
          <span>${expiresLabel}</span>
          <span>${lastUsedLabel}</span>
        </div>
      </div>
      <div class="key-row-actions">
        ${rotateButton}
        ${revokeButton}
      </div>
    </article>
  `;
}

export function renderDashboardOverviewSection(model: OverviewModel): string {
  const { user, keys, activeKeyCount } = model;
  const firstName = escapeHtml((user.fullName || user.email).split(' ')[0] ?? 'there');

  const keysMarkup = keys.length
    ? keys.map(renderKeyRow).join('')
    : '<p class="key-empty" data-key-empty>No API keys yet. Create your first key above to start authenticating requests.</p>';

  return `
    <section class="dashboard-panel active" data-dashboard-panel="overview">
      <header class="dashboard-header panel">
        <div class="dashboard-title">
          <p class="eyebrow">Developer console</p>
          <h1>Welcome back, ${firstName}.</h1>
          <p>
            Create and manage the API keys your applications use to authenticate against the
            Telvri SIM-swap intelligence endpoints.
          </p>
        </div>
        <div class="header-actions">
          <button type="button" class="button secondary" data-dashboard-tab="openapi">OpenAPI</button>
          <a class="button primary" href="/docs">Test in Swagger</a>
        </div>
      </header>

      <section class="metric-grid">
        <article class="metric-card">
          <span>Active keys</span>
          <strong>${activeKeyCount}</strong>
          <small>Currently valid credentials</small>
        </article>
        <article class="metric-card">
          <span>Total keys</span>
          <strong>${keys.length}</strong>
          <small>Including expired and revoked</small>
        </article>
        <article class="metric-card">
          <span>Auth method</span>
          <strong>X-API-Key</strong>
          <small>Header or Bearer token</small>
        </article>
        <article class="metric-card">
          <span>Environment</span>
          <strong>Live</strong>
          <small>Keys begin with rt_live_</small>
        </article>
      </section>

      <section class="panel key-manager">
        <div class="panel-heading">
          <span>API keys</span>
        </div>
        <p class="key-manager-intro">
          A key is shown in full only once, at creation. Store it securely. You can create multiple
          keys and revoke any of them at any time.
        </p>

        <form class="key-create-form" data-create-key-form>
          <div class="key-form-grid">
            <label class="key-field">
              <span>Key name</span>
              <input
                type="text"
                name="name"
                maxlength="60"
                placeholder="Production backend"
                autocomplete="off"
                required
              />
            </label>
            <label class="key-field">
              <span>Expiration</span>
              <select name="expiration" data-expiration-select>
                <option value="never">Never expires</option>
                <option value="30d">30 days</option>
                <option value="90d" selected>90 days</option>
                <option value="180d">6 months</option>
                <option value="365d">1 year</option>
                <option value="custom">Custom date…</option>
              </select>
            </label>
            <label class="key-field key-custom-date" data-custom-date hidden>
              <span>Expiry date</span>
              <input type="date" name="expiresAt" data-expiry-date />
            </label>
          </div>
          <div class="key-form-actions">
            <button type="submit" class="button primary" data-create-key-submit>Create API key</button>
            <p class="key-form-error" data-create-key-error hidden></p>
          </div>
        </form>

        <div class="key-reveal" data-key-reveal hidden>
          <div class="key-reveal-head">
            <strong>Copy your new API key now</strong>
            <span>For your security, this is the only time it will be displayed.</span>
          </div>
          <div class="key-reveal-value">
            <code data-key-reveal-value></code>
            <button type="button" data-key-reveal-copy>Copy</button>
          </div>
        </div>

        <div class="key-list" data-key-list>
          ${keysMarkup}
        </div>
      </section>

      <section class="panel quickstart-panel">
        <div class="panel-heading">
          <span>Quick start</span>
          <button type="button" data-dashboard-tab="sdk">SDKs</button>
        </div>
        <ol>
          <li><span>1</span><p>Create an API key above and copy it once.</p></li>
          <li><span>2</span><p>Set it as <code>X-API-Key</code> in your backend requests.</p></li>
          <li><span>3</span><p>Call <code>POST /v1/security/sim-check</code>.</p></li>
        </ol>
      </section>
    </section>
  `;
}
