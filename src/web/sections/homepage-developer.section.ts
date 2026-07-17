export function renderHomepageDeveloperSection(): string {
  return `
    <section id="developers" class="developer-section reveal-up">
      <div>
        <p class="eyebrow" data-i18n="dev.eyebrow">Developer workflow</p>
        <h2 data-i18n="dev.title">From API key to first check in minutes.</h2>
        <p data-i18n="dev.lede">
          Open the dashboard, copy a live-style key, choose your language, and paste the
          generated request into your backend. The same contract powers Swagger, SDK generation,
          and future production client libraries.
        </p>
      </div>
      <div class="workflow-grid">
        <article>
          <span>1</span>
          <strong data-i18n="dev.1.title">Create or copy key</strong>
          <p data-i18n="dev.1.body">Use the mock live key now, then replace it with real tenant-issued credentials later.</p>
        </article>
        <article>
          <span>2</span>
          <strong data-i18n="dev.2.title">Select SDK language</strong>
          <p data-i18n="dev.2.body">JavaScript, Python, Go, PHP, Ruby, Java, .NET, and cURL examples are already grouped by tabs.</p>
        </article>
        <article>
          <span>3</span>
          <strong data-i18n="dev.3.title">Ship the check</strong>
          <p data-i18n="dev.3.body">Call the SIM-swap endpoint before sensitive actions such as login recovery or payouts.</p>
        </article>
      </div>
    </section>
  `;
}
