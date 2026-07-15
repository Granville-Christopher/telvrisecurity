export function renderHomepageCtaSection(): string {
  return `
    <section class="landing-cta reveal-up">
      <div class="landing-cta-inner">
        <div class="landing-cta-main">
          <div class="landing-cta-copy">
            <p class="eyebrow">Ready to integrate</p>
            <h2>Start in the dashboard.<br />Scale with generated SDKs.</h2>
            <p>
              Copy your API key, choose a language, and ship your first SIM-swap check
              before login recovery, payouts, or wallet resets.
            </p>
          </div>
          <div class="landing-cta-actions">
            <a class="button primary" href="/dashboard">Open dashboard</a>
            <a class="button secondary" href="/docs-json">View OpenAPI JSON</a>
          </div>
        </div>
        <ul class="landing-cta-points" aria-label="Integration highlights">
          <li>
            <strong>API keys</strong>
            <span>Dashboard-issued credentials</span>
          </li>
          <li>
            <strong>8 SDK languages</strong>
            <span>JavaScript through .NET</span>
          </li>
          <li>
            <strong>OpenAPI 3.0</strong>
            <span>Generate clients from spec</span>
          </li>
        </ul>
      </div>
    </section>
  `;
}
