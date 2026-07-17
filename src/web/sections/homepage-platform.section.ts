export function renderHomepagePlatformSection(): string {
  return `
    <section id="platform" class="platform-showcase reveal-up">
      <div class="platform-header section-heading">
        <p class="eyebrow" data-i18n="platform.eyebrow">Developer platform</p>
        <h2 data-i18n="platform.title">Ship secure integrations in three steps.</h2>
        <p data-i18n="platform.lede">Call one risk endpoint, authenticate with API keys, and generate SDKs from the OpenAPI contract.</p>
      </div>

      <nav class="platform-tabs" aria-label="Platform capabilities" data-i18n-aria="platform.tabs">
        <button type="button" class="platform-tab active" data-platform-step="endpoint">
          <em>01</em>
          <span data-i18n="platform.tab.endpoint">Risk endpoint</span>
        </button>
        <button type="button" class="platform-tab" data-platform-step="auth">
          <em>02</em>
          <span data-i18n="platform.tab.auth">API auth</span>
        </button>
        <button type="button" class="platform-tab" data-platform-step="openapi">
          <em>03</em>
          <span data-i18n="platform.tab.openapi">OpenAPI</span>
        </button>
      </nav>

      <div class="platform-stage">
        <article class="platform-panel active" data-platform-card="endpoint">
          <figure class="platform-visual">
            <img
              src="https://images.unsplash.com/photo-1643962578248-71e90f8d14f3?auto=format&fit=crop&w=1200&q=80"
              alt="Padlock on a smartphone representing mobile SIM security risk"
              loading="lazy"
            />
            <figcaption data-i18n="platform.endpoint.caption">Mobile network risk signals</figcaption>
          </figure>
          <div class="platform-copy">
            <span class="platform-badge" data-i18n="platform.endpoint.badge">01 · Risk endpoint</span>
            <h3 data-i18n="platform.endpoint.title">One risk endpoint</h3>
            <p data-i18n-html="platform.endpoint.bodyHtml">Run SIM-swap checks through <code>POST /v1/security/sim-check</code> with a clean JSON payload. The endpoint returns a direct fraud decision your backend can enforce before account recovery, payout, or login escalation.</p>
            <ul class="platform-points">
              <li data-i18n="platform.endpoint.p1">Single POST with phone number and max-age window</li>
              <li data-i18n="platform.endpoint.p2">Clear allow, step-up, or block decision in JSON</li>
              <li data-i18n="platform.endpoint.p3">Built for recovery, payout, and login flows</li>
            </ul>
          </div>
        </article>

        <article class="platform-panel" data-platform-card="auth">
          <figure class="platform-visual">
            <img
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80"
              alt="Golden padlock on a keyboard representing API key authentication"
              loading="lazy"
            />
            <figcaption data-i18n="platform.auth.caption">API key and bearer auth</figcaption>
          </figure>
          <div class="platform-copy">
            <span class="platform-badge" data-i18n="platform.auth.badge">02 · API auth</span>
            <h3 data-i18n="platform.auth.title">Simple API auth</h3>
            <p data-i18n-html="platform.auth.bodyHtml">Use <code>X-API-Key</code> or <code>Authorization: Bearer</code> credentials. Keys follow the live-style <code>rt_live_</code> prefix so developers can integrate with a familiar security model.</p>
            <ul class="platform-points">
              <li data-i18n="platform.auth.p1">Header-based auth with no OAuth ceremony</li>
              <li data-i18n="platform.auth.p2">Live-style key prefixes for environment clarity</li>
              <li data-i18n="platform.auth.p3">Guarded routes with structured 401 responses</li>
            </ul>
          </div>
        </article>

        <article class="platform-panel" data-platform-card="openapi">
          <figure class="platform-visual">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Programming code on screen representing OpenAPI developer documentation"
              loading="lazy"
            />
            <figcaption data-i18n="platform.openapi.caption">OpenAPI contract and SDKs</figcaption>
          </figure>
          <div class="platform-copy">
            <span class="platform-badge" data-i18n="platform.openapi.badge">03 · OpenAPI</span>
            <h3 data-i18n="platform.openapi.title">OpenAPI-native</h3>
            <p data-i18n-html="platform.openapi.bodyHtml">Generate client SDKs from <code>/docs-json</code>, import the API into Postman, and test every endpoint in Swagger UI without manually recreating schemas.</p>
            <ul class="platform-points">
              <li data-i18n-html="platform.openapi.p1Html">Swagger UI at <code>/docs</code> for live testing</li>
              <li data-i18n-html="platform.openapi.p2Html">Machine-readable contract at <code>/docs-json</code></li>
              <li data-i18n="platform.openapi.p3">SDK generation for any supported language</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  `;
}
