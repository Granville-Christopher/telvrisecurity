export function renderDashboardOverviewSection(apiKey: string): string {
  return `
    <section class="dashboard-panel active" data-dashboard-panel="overview">
      <header class="dashboard-header panel">
        <div class="dashboard-title">
          <p class="eyebrow">Developer console</p>
          <h1>Build with telco identity intelligence.</h1>
          <p>
            Manage credentials, test SIM-swap checks, and copy production-shaped
            integration examples for the languages your customers already use.
          </p>
        </div>
        <div class="header-actions">
          <button type="button" class="button secondary" data-dashboard-tab="openapi">OpenAPI</button>
          <a class="button primary" href="/docs">Test in Swagger</a>
        </div>
      </header>

      <section class="metric-grid">
        <article class="metric-card">
          <span>Requests today</span>
          <strong>1,284</strong>
          <small>Mock usage for dashboard preview</small>
        </article>
        <article class="metric-card">
          <span>Median latency</span>
          <strong>86ms</strong>
          <small>Local API response target</small>
        </article>
        <article class="metric-card">
          <span>Threat signals</span>
          <strong>42</strong>
          <small>Recent SIM-swap flags</small>
        </article>
        <article class="metric-card">
          <span>Active environment</span>
          <strong>Live</strong>
          <small>Keys must start with rt_live_</small>
        </article>
      </section>

      <section class="console-grid">
        <article class="panel api-key-panel">
          <div class="panel-heading">
            <span>Live API key</span>
            <button type="button" data-copy="${apiKey}">Copy</button>
          </div>
          <code class="secret">${apiKey}</code>
          <div class="key-meta">
            <span>Prefix <b>rt_live_</b></span>
            <span>Tier <b>Enterprise</b></span>
            <span>Auth <b>X-API-Key</b></span>
          </div>
          <p>Use this key in Swagger Authorize, your backend, or SDK configuration.</p>
        </article>

        <article class="panel quickstart-panel">
          <div class="panel-heading">
            <span>Quick start</span>
            <button type="button" data-dashboard-tab="sdk">SDKs</button>
          </div>
          <ol>
            <li><span>1</span><p>Copy the live-style API key.</p></li>
            <li><span>2</span><p>Open the SDK Explorer from the sidebar.</p></li>
            <li><span>3</span><p>Run <code>POST /v1/security/sim-check</code>.</p></li>
          </ol>
        </article>
      </section>

      <section class="panel notice-panel">
        <strong>Live API is ready. Published SDK packages are next.</strong>
        <p>
          After hosting, developers can call the REST endpoint immediately with the API key below.
          The install commands reserve the intended package names; they will only work from external
          projects after the SDKs are published to npm, PyPI, Go modules, Packagist, RubyGems, Maven,
          and NuGet.
        </p>
      </section>
    </section>
  `;
}
