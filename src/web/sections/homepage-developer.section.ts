export function renderHomepageDeveloperSection(): string {
  return `
    <section id="developers" class="developer-section reveal-up">
      <div>
        <p class="eyebrow">Developer workflow</p>
        <h2>From API key to first check in minutes.</h2>
        <p>
          Open the dashboard, copy a live-style key, choose your language, and paste the
          generated request into your backend. The same contract powers Swagger, SDK generation,
          and future production client libraries.
        </p>
      </div>
      <div class="workflow-grid">
        <article><span>1</span><strong>Create or copy key</strong><p>Use the mock live key now, then replace it with real tenant-issued credentials later.</p></article>
        <article><span>2</span><strong>Select SDK language</strong><p>JavaScript, Python, Go, PHP, Ruby, Java, .NET, and cURL examples are already grouped by tabs.</p></article>
        <article><span>3</span><strong>Ship the check</strong><p>Call the SIM-swap endpoint before sensitive actions such as login recovery or payouts.</p></article>
      </div>
    </section>
  `;
}
