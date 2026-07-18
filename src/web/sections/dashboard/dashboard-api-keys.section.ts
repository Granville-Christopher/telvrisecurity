import { ApiKeyStatus, ApiKeyView, UserTestKey } from '../../../api-keys/api-keys.service';
import { escapeHtml } from '../../rendering/html.utils';

interface ApiKeysPanelModel {
  readonly keys: ApiKeyView[];
  readonly testKey: UserTestKey;
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
  const deleteButton =
    key.status === 'revoked'
      ? `<button type="button" class="key-delete" data-delete-key="${escapedId}">Delete</button>`
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
        ${deleteButton}
      </div>
    </article>
  `;
}

export function renderDashboardApiKeysSection(model: ApiKeysPanelModel): string {
  const { keys, testKey } = model;
  const keysMarkup = keys.length
    ? keys.map(renderKeyRow).join('')
    : '<p class="key-empty" data-key-empty>No live API keys yet. Create one below to authenticate production requests.</p>';

  return `
    <section class="dashboard-panel" data-dashboard-panel="api-keys">
      <header class="dashboard-header panel">
        <div class="dashboard-title">
          <p class="eyebrow">Credentials</p>
          <h1>API keys</h1>
          <p>
            Create live production keys and use your personal development test key while building.
            Live keys are shown in full only once at creation.
          </p>
        </div>
      </header>

      <section class="panel test-key-panel">
        <div class="panel-heading">
          <span>Development test key</span>
          <span class="key-status key-status-test">Test</span>
        </div>
        <div class="test-key-warning" role="status">
          <strong>Development only.</strong>
          <span>
            This key is for local and staging work. Do not use it in production. It is unique to your
            account and can be copied anytime.
          </span>
        </div>
        <div class="test-key-value">
          <code data-test-key-value>${escapeHtml(testKey.plainKey)}</code>
          <button
            type="button"
            class="button secondary"
            data-copy-value="${escapeHtml(testKey.plainKey)}"
            data-test-key-copy
          >
            Copy
          </button>
        </div>
        <p class="test-key-meta">
          Prefix <code>rt_test_</code> · Never expires · Always recoverable from this page
        </p>
      </section>

      <section class="panel key-manager">
        <div class="panel-heading">
          <span>Live API keys</span>
        </div>
        <p class="key-manager-intro">
          Live keys start with <code>rt_live_</code>. Store them securely after creation. Revoked keys
          can be deleted permanently from this list.
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
    </section>
  `;
}
