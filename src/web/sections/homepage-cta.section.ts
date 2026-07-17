export function renderHomepageCtaSection(): string {
  return `
    <section class="landing-cta reveal-up">
      <div class="landing-cta-inner">
        <div class="landing-cta-main">
          <div class="landing-cta-copy">
            <p class="eyebrow" data-i18n="cta.eyebrow">Ready to integrate</p>
            <h2 data-i18n-html="cta.titleHtml">Start in the dashboard.<br />Scale with generated SDKs.</h2>
            <p data-i18n="cta.lede">
              Copy your API key, choose a language, and ship your first SIM-swap check
              before login recovery, payouts, or wallet resets.
            </p>
          </div>
          <div class="landing-cta-actions">
            <a class="button primary" href="/signup" data-i18n="cta.primary">Create account</a>
            <a class="button secondary" href="/docs-json" data-i18n="cta.secondary">View OpenAPI JSON</a>
          </div>
        </div>
        <ul class="landing-cta-points" aria-label="Integration highlights" data-i18n-aria="cta.points">
          <li>
            <strong data-i18n="cta.p1.title">API keys</strong>
            <span data-i18n="cta.p1.body">Dashboard-issued credentials</span>
          </li>
          <li>
            <strong data-i18n="cta.p2.title">8 SDK languages</strong>
            <span data-i18n="cta.p2.body">JavaScript through .NET</span>
          </li>
          <li>
            <strong data-i18n="cta.p3.title">OpenAPI 3.0</strong>
            <span data-i18n="cta.p3.body">Generate clients from spec</span>
          </li>
        </ul>
      </div>
    </section>
  `;
}
